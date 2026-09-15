import assert from "node:assert/strict";
import { test } from "node:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { createApp } from "../server/app.mjs";

const password = "test-only-long-passphrase";
const profile = {
  progress: {
    version: 1,
    level: "N3",
    goal: 20,
    events: [
      {
        id: "N3-test",
        module: "kanji",
        level: "N3",
        correct: true,
        date: "2026-09-15",
      },
    ],
    learned: ["N3-test"],
  },
  history: [],
};

async function fixture(context, options = {}) {
  const directory = await mkdtemp(join(tmpdir(), "gemini-auth-test-"));
  const filename = join(directory, "accounts.sqlite");
  let server;
  let base;
  async function start() {
    server = createApp({ databasePath: filename, ...options });
    await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
    base = `http://127.0.0.1:${server.address().port}`;
  }
  async function stop() {
    server.closeAllConnections();
    await new Promise((resolve) => server.close(resolve));
  }
  await start();
  context.after(async () => {
    await stop();
    await rm(directory, { recursive: true, force: true });
  });
  const request = async (
    path,
    { method = "GET", body, cookie, accountId, origin, extraHeaders } = {},
  ) => {
    const response = await fetch(base + path, {
      method,
      headers: {
        Origin: origin ?? base,
        ...(body !== undefined ? { "Content-Type": "application/json" } : {}),
        ...(cookie ? { Cookie: cookie } : {}),
        ...(accountId ? { "X-Account-Id": accountId } : {}),
        ...extraHeaders,
      },
      ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
    });
    const data = await response.json();
    return {
      status: response.status,
      data,
      cookie: response.headers.get("set-cookie")?.split(";")[0],
      headers: response.headers,
    };
  };
  const register = async (email) => {
    const response = await request("/api/auth/register", {
      method: "POST",
      body: { email, password },
    });
    assert.equal(response.status, 201);
    return {
      cookie: response.cookie,
      accountId: response.data.user.id,
      ...response.data,
    };
  };
  return {
    request,
    register,
    filename,
    restart: async () => {
      await stop();
      await start();
    },
  };
}

test("guests get no session or persisted profile and cannot call account storage", async (context) => {
  const { request, filename } = await fixture(context);
  const session = await request("/api/auth/session");
  assert.deepEqual(session.data, { user: null });
  assert.equal(session.cookie, undefined);
  assert.equal((await request("/api/progress")).status, 401);
  assert.equal(
    (await request("/api/progress", { method: "PUT", body: profile })).status,
    401,
  );
  const db = new DatabaseSync(filename);
  assert.equal(
    db.prepare("SELECT count(*) AS n FROM learning_profiles").get().n,
    0,
  );
  assert.equal(db.prepare("SELECT count(*) AS n FROM sessions").get().n, 0);
  db.close();
});

test("accounts use hashed passwords, opaque cookies, case-insensitive login, and revocable sessions", async (context) => {
  const { request, register, filename } = await fixture(context);
  const account = await register("Learner@example.test");
  assert.equal(account.user.email, "learner@example.test");
  const session = await request("/api/auth/session", account);
  assert.deepEqual(session.data.user, account.user);
  const db = new DatabaseSync(filename);
  const stored = db.prepare("SELECT * FROM users").get();
  const token = db.prepare("SELECT token_hash FROM sessions").get();
  assert.ok(stored.password_hash.startsWith("scrypt$"));
  assert.ok(!stored.password_hash.includes(password));
  assert.notEqual(stored.recovery_hash, account.recoveryCode);
  assert.ok(!account.cookie.includes(token.token_hash));
  db.close();
  assert.equal(
    (
      await request("/api/auth/login", {
        method: "POST",
        body: { email: account.user.email, password: "incorrect" },
      })
    ).status,
    401,
  );
  const login = await request("/api/auth/login", {
    method: "POST",
    body: { email: "LEARNER@example.test", password },
  });
  assert.equal(login.status, 200);
  assert.match(login.headers.get("set-cookie"), /HttpOnly/);
  assert.match(login.headers.get("set-cookie"), /SameSite=Lax/);
  assert.equal(
    (
      await request("/api/auth/logout", {
        method: "POST",
        body: {},
        cookie: login.cookie,
      })
    ).status,
    200,
  );
  assert.equal(
    (await request("/api/auth/session", { cookie: login.cookie })).data.user,
    null,
  );
  assert.equal(
    (
      await request("/api/auth/register", {
        method: "POST",
        body: { email: account.user.email, password },
      })
    ).status,
    409,
  );
});

test("saved learning survives server restarts and stays isolated between accounts", async (context) => {
  const api = await fixture(context);
  const first = await api.register("first@example.test");
  const second = await api.register("second@example.test");
  assert.equal(
    (
      await api.request("/api/progress", {
        ...first,
        method: "PUT",
        body: profile,
      })
    ).status,
    200,
  );
  await api.restart();
  assert.deepEqual(
    (await api.request("/api/progress", first)).data.data,
    profile,
  );
  assert.equal((await api.request("/api/progress", second)).data.data, null);
  // A stale tab must not send the old user's data into a newly signed-in account.
  assert.equal(
    (
      await api.request("/api/progress", {
        cookie: second.cookie,
        accountId: first.accountId,
        method: "PUT",
        body: profile,
      })
    ).status,
    401,
  );
  assert.equal(
    (
      await api.request("/api/progress", {
        cookie: second.cookie,
        accountId: first.accountId,
      })
    ).status,
    401,
  );
  const changed = {
    ...profile,
    progress: { ...profile.progress, level: "N1" },
    userId: first.accountId,
  };
  assert.equal(
    (
      await api.request("/api/progress", {
        ...second,
        method: "PUT",
        body: changed,
      })
    ).status,
    200,
  );
  assert.equal(
    (await api.request("/api/progress", first)).data.data.progress.level,
    "N3",
  );
  assert.equal(
    (await api.request("/api/progress", second)).data.data.progress.level,
    "N1",
  );
});

test("mutations reject cross-site requests and malformed learning data", async (context) => {
  const { request, register } = await fixture(context);
  const account = await register("origin@example.test");
  assert.equal(
    (
      await request("/api/progress", {
        ...account,
        method: "PUT",
        body: profile,
        origin: "https://another-site.example",
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await request("/api/auth/logout", {
        ...account,
        method: "POST",
        body: {},
        extraHeaders: { "Sec-Fetch-Site": "cross-site" },
      })
    ).status,
    403,
  );
  assert.equal(
    (
      await request("/api/progress", {
        ...account,
        method: "PUT",
        body: { ...profile, history: [{ input: "broken" }] },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request("/api/auth/register", {
        method: "POST",
        body: { email: "bad", password },
      })
    ).status,
    400,
  );
  assert.equal(
    (
      await request("/api/auth/register", {
        method: "POST",
        body: { email: "short@example.test", password: "short" },
      })
    ).status,
    400,
  );
});

test("recovery codes reset passwords once and revoke existing sessions", async (context) => {
  const { request, register } = await fixture(context);
  const account = await register("recover@example.test");
  const changed = await request("/api/auth/recover", {
    method: "POST",
    body: {
      email: account.user.email,
      recoveryCode: account.recoveryCode,
      password: "a-different-test-passphrase",
    },
  });
  assert.equal(changed.status, 200);
  assert.notEqual(changed.data.recoveryCode, account.recoveryCode);
  assert.equal((await request("/api/auth/session", account)).data.user, null);
  assert.equal(
    (
      await request("/api/auth/recover", {
        method: "POST",
        body: {
          email: account.user.email,
          recoveryCode: account.recoveryCode,
          password,
        },
      })
    ).status,
    401,
  );
  assert.equal(
    (
      await request("/api/auth/login", {
        method: "POST",
        body: { email: account.user.email, password },
      })
    ).status,
    401,
  );
  assert.equal(
    (
      await request("/api/auth/login", {
        method: "POST",
        body: {
          email: account.user.email,
          password: "a-different-test-passphrase",
        },
      })
    ).status,
    200,
  );
});

test("authentication attempts are limited and production cookies require HTTPS", async (context) => {
  const { request, register } = await fixture(context, {
    authLimit: 3,
    secureCookies: true,
  });
  const account = await register("limited@example.test");
  assert.ok(account.cookie.startsWith("__Host-gemini_session="));
  const login = await request("/api/auth/login", {
    method: "POST",
    body: { email: account.user.email, password },
  });
  assert.match(login.headers.get("set-cookie"), /; Secure/);
  await request("/api/auth/login", {
    method: "POST",
    body: { email: account.user.email, password: "incorrect" },
  });
  assert.equal(
    (
      await request("/api/auth/login", {
        method: "POST",
        body: { email: account.user.email, password },
      })
    ).status,
    429,
  );
});
