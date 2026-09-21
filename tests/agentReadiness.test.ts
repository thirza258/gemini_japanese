import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { test } from "node:test";

test("agent readiness discovery files and content signals exist and are valid", () => {
  // 1. robots.txt
  const robots = readFileSync("public/robots.txt", "utf8");
  assert.ok(
    robots.includes("Content-Signal: ai-train=yes, search=yes, ai-input=yes"),
    "robots.txt must declare Content-Signal",
  );

  // 2. api-catalog
  assert.ok(existsSync("public/.well-known/api-catalog"), "api-catalog must exist");
  const catalog = JSON.parse(readFileSync("public/.well-known/api-catalog", "utf8"));
  assert.ok(Array.isArray(catalog.linkset), "api-catalog must have linkset array");
  assert.ok(catalog.linkset.length > 0, "api-catalog linkset must not be empty");
  assert.ok(catalog.linkset[0].anchor, "linkset entry must have anchor");
  assert.ok(catalog.linkset[0]["service-desc"], "linkset entry must have service-desc");

  // 3. auth.md
  assert.ok(existsSync("public/auth.md"), "auth.md must exist");
  const authMd = readFileSync("public/auth.md", "utf8");
  assert.ok(authMd.includes("# auth.md"), "auth.md must have # auth.md heading");

  // 4. oauth-protected-resource
  assert.ok(existsSync("public/.well-known/oauth-protected-resource"), "oauth-protected-resource must exist");
  const prm = JSON.parse(readFileSync("public/.well-known/oauth-protected-resource", "utf8"));
  assert.equal(prm.resource, "https://translate.nevatal.tech");
  assert.deepEqual(prm.authorization_servers, ["https://translate.nevatal.tech"]);
  assert.deepEqual(prm.bearer_methods_supported, ["header"]);

  // 5. oauth-authorization-server
  assert.ok(existsSync("public/.well-known/oauth-authorization-server"), "oauth-authorization-server must exist");
  const as = JSON.parse(readFileSync("public/.well-known/oauth-authorization-server", "utf8"));
  assert.equal(as.issuer, "https://translate.nevatal.tech");
  assert.ok(as.agent_auth, "oauth-authorization-server must have agent_auth");
  assert.equal(as.agent_auth.skill, "https://translate.nevatal.tech/auth.md");

  // 6. openid-configuration
  assert.ok(existsSync("public/.well-known/openid-configuration"), "openid-configuration must exist");
  const oidc = JSON.parse(readFileSync("public/.well-known/openid-configuration", "utf8"));
  assert.equal(oidc.issuer, "https://translate.nevatal.tech");
  assert.ok(oidc.authorization_endpoint, "oidc must have authorization_endpoint");
  assert.ok(oidc.token_endpoint, "oidc must have token_endpoint");

  // 7. llms.txt
  assert.ok(existsSync("public/llms.txt"), "llms.txt must exist");
});
