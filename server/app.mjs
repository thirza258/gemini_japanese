import { createServer } from "node:http";
import { randomUUID } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, sep } from "node:path";
import { openDatabase } from "./database.mjs";
import {
  HttpError,
  assertSameOrigin,
  createRateLimiter,
  hashPassword,
  newToken,
  normalizedEmail,
  tokenHash,
  validRecoveryCode,
  validatePassword,
  verifyPassword,
} from "./security.mjs";
import { validateLearningData } from "./validation.mjs";

const SESSION_SECONDS = 30 * 24 * 60 * 60;
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
};

export function createApp({
  databasePath = "data/gemini-japanese.sqlite",
  secureCookies = false,
  staticDirectory = null,
  openRouterKey = "",
  trustProxy = false,
  authLimit = 20,
} = {}) {
  const db = openDatabase(databasePath);
  const rateLimit = createRateLimiter();
  const cookieName = secureCookies ? "__Host-gemini_session" : "gemini_session";
  const cookieOptions = `Path=/; HttpOnly; SameSite=Lax${secureCookies ? "; Secure" : ""}`;
  const publicUser = (user) => ({ id: user.id, email: user.email });

  function json(res, status, body) {
    res.writeHead(status, {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    });
    res.end(JSON.stringify(body));
  }
  function sessionToken(req) {
    return (
      req.headers.cookie
        ?.split(";")
        .map((value) => value.trim())
        .find((value) => value.startsWith(`${cookieName}=`))
        ?.slice(cookieName.length + 1) || ""
    );
  }
  function currentUser(req) {
    const token = sessionToken(req);
    if (!/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
    return (
      db
        .prepare(
          "SELECT users.id, users.email FROM sessions JOIN users ON users.id = sessions.user_id WHERE sessions.token_hash = ? AND sessions.expires_at > ?",
        )
        .get(tokenHash(token), Date.now()) || null
    );
  }
  function requireUser(req) {
    const user = currentUser(req);
    if (!user)
      throw new HttpError(
        401,
        "Sign in to save your progress. All lessons remain available as a guest.",
      );
    return user;
  }
  function startSession(req, res, userId) {
    const previous = sessionToken(req);
    if (previous)
      db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(
        tokenHash(previous),
      );
    db.prepare("DELETE FROM sessions WHERE expires_at <= ?").run(Date.now());
    const token = newToken();
    db.prepare(
      "INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)",
    ).run(tokenHash(token), userId, Date.now() + SESSION_SECONDS * 1000);
    res.setHeader(
      "Set-Cookie",
      `${cookieName}=${token}; ${cookieOptions}; Max-Age=${SESSION_SECONDS}`,
    );
  }
  async function readBody(req, limit = 1_000_000) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > limit) throw new HttpError(413, "This request is too large.");
      chunks.push(chunk);
    }
    try {
      return JSON.parse(Buffer.concat(chunks).toString("utf8"));
    } catch {
      throw new HttpError(400, "The request could not be read.");
    }
  }

  const server = createServer(async (req, res) => {
    try {
      const url = new URL(req.url, "http://localhost");
      const path = url.pathname;
      if (path.startsWith("/api/")) {
        res.setHeader("Cache-Control", "no-store");
        res.setHeader("X-Content-Type-Options", "nosniff");
        if (!["GET", "HEAD"].includes(req.method)) assertSameOrigin(req);
        const ip = trustProxy
          ? req.headers["x-forwarded-for"]?.split(",").at(-1)?.trim() ||
            req.socket.remoteAddress
          : req.socket.remoteAddress;
        if (path === "/api/health" && req.method === "GET")
          return json(res, 200, { status: "ok" });
        if (path === "/api/auth/session" && req.method === "GET")
          return json(res, 200, { user: currentUser(req) });

        if (
          [
            "/api/auth/register",
            "/api/auth/login",
            "/api/auth/recover",
          ].includes(path) &&
          req.method === "POST"
        ) {
          rateLimit(`auth-ip:${ip}`, 100);
          const body = await readBody(req, 8000);
          const email = normalizedEmail(body?.email);
          rateLimit(`auth-email:${email}`, authLimit);
          const existing = db
            .prepare("SELECT * FROM users WHERE email = ?")
            .get(email);
          if (path.endsWith("/register")) {
            const password = validatePassword(body.password);
            const passwordHash = await hashPassword(password);
            if (existing)
              throw new HttpError(
                409,
                "An account already uses this email. Sign in or use your recovery code.",
              );
            const user = { id: randomUUID(), email };
            const recoveryCode = newToken();
            try {
              db.prepare(
                "INSERT INTO users (id, email, password_hash, recovery_hash, created_at) VALUES (?, ?, ?, ?, ?)",
              ).run(
                user.id,
                email,
                passwordHash,
                tokenHash(recoveryCode),
                Date.now(),
              );
            } catch (error) {
              if (
                error.code === "ERR_SQLITE_ERROR" &&
                error.message.includes("UNIQUE")
              )
                throw new HttpError(409, "An account already uses this email.");
              throw error;
            }
            startSession(req, res, user.id);
            return json(res, 201, { user, recoveryCode });
          }
          if (path.endsWith("/login")) {
            if (!(await verifyPassword(body.password, existing?.password_hash)))
              throw new HttpError(401, "Email or password is incorrect.");
            startSession(req, res, existing.id);
            return json(res, 200, { user: publicUser(existing) });
          }
          if (!validRecoveryCode(body.recoveryCode, existing?.recovery_hash))
            throw new HttpError(401, "Email or recovery code is incorrect.");
          const passwordHash = await hashPassword(
            validatePassword(body.password),
          );
          const recoveryCode = newToken();
          db.exec("BEGIN IMMEDIATE");
          try {
            // A recovery code is single use, including concurrent requests.
            const updated = db
              .prepare(
                "UPDATE users SET password_hash = ?, recovery_hash = ? WHERE id = ? AND recovery_hash = ?",
              )
              .run(
                passwordHash,
                tokenHash(recoveryCode),
                existing.id,
                existing.recovery_hash,
              );
            if (!updated.changes)
              throw new HttpError(
                401,
                "This recovery code has already been used.",
              );
            db.prepare("DELETE FROM sessions WHERE user_id = ?").run(
              existing.id,
            );
            db.exec("COMMIT");
          } catch (error) {
            db.exec("ROLLBACK");
            throw error;
          }
          startSession(req, res, existing.id);
          return json(res, 200, { user: publicUser(existing), recoveryCode });
        }
        if (path === "/api/auth/logout" && req.method === "POST") {
          const token = sessionToken(req);
          if (token)
            db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(
              tokenHash(token),
            );
          res.setHeader(
            "Set-Cookie",
            `${cookieName}=; ${cookieOptions}; Max-Age=0`,
          );
          return json(res, 200, { user: null });
        }
        if (path === "/api/auth/recovery-code" && req.method === "POST") {
          const user = requireUser(req);
          rateLimit(`recovery:${user.id}`, authLimit);
          const body = await readBody(req, 8000);
          const stored = db
            .prepare("SELECT password_hash FROM users WHERE id = ?")
            .get(user.id);
          if (!(await verifyPassword(body?.password, stored.password_hash)))
            throw new HttpError(401, "The password is incorrect.");
          const recoveryCode = newToken();
          db.prepare("UPDATE users SET recovery_hash = ? WHERE id = ?").run(
            tokenHash(recoveryCode),
            user.id,
          );
          return json(res, 200, { recoveryCode });
        }
        if (path === "/api/progress") {
          const user = requireUser(req);
          if (req.headers["x-account-id"] !== user.id)
            throw new HttpError(
              401,
              "Your account session changed. Please sign in again.",
            );
          if (req.method === "GET") {
            const row = db
              .prepare("SELECT data FROM learning_profiles WHERE user_id = ?")
              .get(user.id);
            return json(res, 200, { data: row ? JSON.parse(row.data) : null });
          }
          if (req.method === "PUT") {
            const data = validateLearningData(await readBody(req));
            db.prepare(
              "INSERT INTO learning_profiles (user_id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at",
            ).run(user.id, JSON.stringify(data), Date.now());
            return json(res, 200, { saved: true });
          }
        }
        if (
          path === "/api/openrouter/chat/completions" &&
          req.method === "POST"
        ) {
          rateLimit(`translate:${ip}`, 30, 60_000);
          const body = await readBody(req);
          const authorization =
            req.headers.authorization ||
            (openRouterKey ? `Bearer ${openRouterKey}` : "");
          if (!authorization)
            throw new HttpError(
              503,
              "Add your API key in Translator settings to translate custom text. Sample phrases are ready to use.",
            );
          const upstream = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: authorization,
              },
              body: JSON.stringify(body),
              signal: AbortSignal.timeout(60_000),
            },
          );
          res.writeHead(upstream.status, {
            "Content-Type": "application/json; charset=utf-8",
          });
          return res.end(await upstream.text());
        }
        throw new HttpError(404, "This endpoint does not exist.");
      }
      if (!staticDirectory || !["GET", "HEAD"].includes(req.method))
        throw new HttpError(404, "Page not found.");
      const root = resolve(staticDirectory);

      // Markdown Content Negotiation (Accept: text/markdown)
      if (
        req.headers.accept?.includes("text/markdown") &&
        (path === "/" || path === "/index.html")
      ) {
        const llmsFile = resolve(root, "llms.txt");
        try {
          const content = await readFile(llmsFile, "utf-8");
          const tokens = Math.round(content.split(/\s+/).length / 0.75);
          res.writeHead(200, {
            "Content-Type": "text/markdown; charset=utf-8",
            "Cache-Control": "no-cache",
            "X-Markdown-Tokens": String(tokens),
            Link: '</.well-known/api-catalog>; rel="api-catalog", </auth.md>; rel="describedby"; type="text/markdown"',
          });
          return res.end(req.method === "HEAD" ? undefined : content);
        } catch {}
      }

      let file = resolve(root, `.${decodeURIComponent(path)}`);
      if (!file.startsWith(root + sep) && file !== root)
        throw new HttpError(404, "Page not found.");

      let isIndexFallback = false;
      try {
        if (!(await stat(file)).isFile()) {
          if (path.startsWith("/.well-known/") || extname(path) !== "") {
            throw new HttpError(404, "Page not found.");
          }
          file = resolve(root, "index.html");
          isIndexFallback = true;
        }
      } catch (err) {
        if (err instanceof HttpError) throw err;
        if (path.startsWith("/.well-known/") || extname(path) !== "") {
          throw new HttpError(404, "Page not found.");
        }
        file = resolve(root, "index.html");
        isIndexFallback = true;
      }

      const content = await readFile(file);
      let contentType = MIME[extname(file)] || "application/octet-stream";
      if (
        path === "/.well-known/api-catalog" ||
        file.endsWith(`${sep}.well-known${sep}api-catalog`)
      ) {
        contentType = "application/linkset+json; charset=utf-8";
      } else if (file.endsWith(".md") || file.endsWith("SKILL.md")) {
        contentType = "text/markdown; charset=utf-8";
      } else if (
        path === "/.well-known/openid-configuration" ||
        path === "/.well-known/oauth-authorization-server" ||
        path === "/.well-known/oauth-protected-resource" ||
        path === "/.well-known/jwks.json" ||
        file.includes(`${sep}.well-known${sep}`)
      ) {
        contentType = "application/json; charset=utf-8";
      }

      const headers = {
        "Content-Type": contentType,
        "Cache-Control": file.includes(`${sep}assets${sep}`)
          ? "public, max-age=31536000, immutable"
          : "no-cache",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      };

      if (path.startsWith("/.well-known/")) {
        headers["Access-Control-Allow-Origin"] = "*";
      }

      if (path === "/" || path === "/index.html" || isIndexFallback) {
        headers["Link"] =
          '</.well-known/api-catalog>; rel="api-catalog", </auth.md>; rel="describedby"; type="text/markdown", </api/health>; rel="service-desc"; type="application/json", </.well-known/ai-catalog.json>; rel="ai-catalog"';
      }

      res.writeHead(200, headers);
      res.end(req.method === "HEAD" ? undefined : content);
    } catch (error) {
      if (res.headersSent) return res.end();
      json(res, error instanceof HttpError ? error.status : 500, {
        error:
          error instanceof HttpError
            ? error.message
            : "The request could not be completed. Please try again.",
      });
    }
  });
  server.requestTimeout = 65_000;
  server.headersTimeout = 15_000;
  server.on("close", () => db.close());
  return server;
}
