import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("sakura petal falling theme background and styles are correctly configured", () => {
  const landingCss = readFileSync("src/landing.css", "utf8");
  const indexCss = readFileSync("src/index.css", "utf8");
  const html = readFileSync("index.html", "utf8");

  // Verify z-index: 9999 ensures petals float over cards and are never hidden behind elements
  assert.ok(
    landingCss.includes("z-index: 9999 !important"),
    "landing.css should have z-index: 9999 !important for sakura-background",
  );
  assert.ok(
    indexCss.includes("z-index: 9999 !important"),
    "index.css should have z-index: 9999 !important for sakura-background",
  );

  // Verify pointer-events: none ensures non-blocking interaction
  assert.ok(
    landingCss.includes("pointer-events: none !important"),
    "landing.css sakura-background must have pointer-events: none !important",
  );
  assert.ok(
    indexCss.includes("pointer-events: none !important"),
    "index.css sakura-background must have pointer-events: none !important",
  );

  // Verify prefers-reduced-motion exempts petals so they are not crushed to 0.01ms on Linux
  assert.ok(
    indexCss.includes(".sakura-petal {\n    animation-duration: var(--petal-duration) !important;"),
    "index.css must exempt .sakura-petal from being crushed to 0.01ms in prefers-reduced-motion",
  );

  // Verify index.html head script sets dataset.petals to true
  assert.ok(
    html.includes('document.documentElement.dataset.petals = "true";'),
    'index.html must set document.documentElement.dataset.petals to "true"',
  );
});

test("SakuraBackground component defines rich petal variations and reliable inline colors", () => {
  const component = readFileSync("src/components/SakuraBackground.tsx", "utf8");
  assert.ok(
    component.includes("sakura-petal-inner"),
    "SakuraBackground must include sakura-petal-inner for 3D tumbling",
  );
  assert.ok(
    component.includes("flower"),
    "SakuraBackground must include full flower blossom petals",
  );
  assert.ok(
    component.includes("curved"),
    "SakuraBackground must include curved petal variations",
  );
  assert.ok(
    component.includes("single"),
    "SakuraBackground must include single notched petal variations",
  );
});

test("pause and continue theme button is removed so petals are always running", () => {
  const landingPage = readFileSync("src/components/LandingPage.tsx", "utf8");
  const app = readFileSync("src/App.tsx", "utf8");

  assert.ok(
    !landingPage.includes("sakura-theme-toggle"),
    "LandingPage must not include sakura-theme-toggle pause/continue button",
  );
  assert.ok(
    !landingPage.includes("sakura-motion-toggle"),
    "LandingPage must not include sakura-motion-toggle pause/continue button",
  );
  assert.ok(
    !app.includes("sakura-theme-toggle"),
    "App topbar must not include sakura-theme-toggle pause/continue button",
  );
  assert.ok(
    !app.includes("sakura-motion-toggle"),
    "App topbar must not include sakura-motion-toggle pause/continue button",
  );
});
