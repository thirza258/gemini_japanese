import { resolve } from "node:path";
import { existsSync } from "node:fs";
import { createApp } from "./app.mjs";

if (existsSync(".env")) process.loadEnvFile(".env");
const production =
  process.env.NODE_ENV === "production" ||
  process.argv.includes("--production");
const port = Number(process.env.PORT || (production ? 3000 : 8787));
const host = process.env.HOST || (production ? "0.0.0.0" : "127.0.0.1");
const server = createApp({
  databasePath: resolve(
    process.env.DATABASE_PATH || "data/gemini-japanese.sqlite",
  ),
  secureCookies: process.env.COOKIE_SECURE
    ? process.env.COOKIE_SECURE === "true"
    : production,
  staticDirectory: production ? resolve("dist") : null,
  openRouterKey: process.env.OPENROUTER_API_KEY || "",
  trustProxy: process.env.TRUST_PROXY === "true",
});
server.listen(port, host, () =>
  console.log(`Gemini Japanese API: http://${host}:${port}`),
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(1), 5000).unref();
  });
