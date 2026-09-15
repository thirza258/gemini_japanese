import { spawn } from "node:child_process";

const children = [
  spawn(process.execPath, ["--watch", "server/index.mjs"], {
    stdio: "inherit",
    env: { ...process.env, NODE_ENV: "development" },
  }),
  spawn(
    process.execPath,
    ["node_modules/vite/bin/vite.js", ...process.argv.slice(2)],
    { stdio: "inherit" },
  ),
];
let closing = false;
function close(code = 0) {
  if (closing) return;
  closing = true;
  for (const child of children) child.kill("SIGTERM");
  setTimeout(() => process.exit(code), 200).unref();
}
for (const child of children) {
  child.on("exit", (code) => close(code || 0));
  child.on("error", () => close(1));
}
process.on("SIGINT", () => close());
process.on("SIGTERM", () => close());
