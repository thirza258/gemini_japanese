import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

test("sitemap.xml contains valid, comprehensive pages for indexing", () => {
  const xml = readFileSync("public/sitemap.xml", "utf8");

  // Validate root XML tags
  assert.ok(xml.includes("<urlset"), "Sitemap must have a <urlset> root element");
  assert.ok(xml.includes("</urlset>"), "Sitemap must close </urlset>");

  // Extract all <loc>, <lastmod>, <changefreq>, <priority> blocks
  const urlMatches = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)];
  assert.ok(
    urlMatches.length >= 9,
    `Expected at least 9 pages in sitemap, found ${urlMatches.length}`,
  );

  const locs = new Set<string>();
  const validFrequencies = new Set([
    "always",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
    "never",
  ]);

  for (const match of urlMatches) {
    const block = match[1];

    const locMatch = /<loc>(https:\/\/translate\.nevatal\.tech[^<]*)<\/loc>/.exec(block);
    assert.ok(locMatch, `Invalid or missing <loc> in block: ${block}`);
    const loc = locMatch[1];
    assert.ok(!locs.has(loc), `Duplicate <loc> found in sitemap: ${loc}`);
    locs.add(loc);

    const lastmodMatch = /<lastmod>([^<]+)<\/lastmod>/.exec(block);
    assert.ok(lastmodMatch, `Missing <lastmod> for: ${loc}`);
    assert.ok(
      !Number.isNaN(Date.parse(lastmodMatch[1])),
      `Invalid date in <lastmod>: ${lastmodMatch[1]} for: ${loc}`,
    );

    const freqMatch = /<changefreq>([^<]+)<\/changefreq>/.exec(block);
    assert.ok(freqMatch, `Missing <changefreq> for: ${loc}`);
    assert.ok(
      validFrequencies.has(freqMatch[1]),
      `Invalid changefreq: ${freqMatch[1]} for: ${loc}`,
    );

    const priorityMatch = /<priority>([^<]+)<\/priority>/.exec(block);
    assert.ok(priorityMatch, `Missing <priority> for: ${loc}`);
    const priority = Number(priorityMatch[1]);
    assert.ok(
      !Number.isNaN(priority) && priority >= 0.0 && priority <= 1.0,
      `Invalid priority: ${priorityMatch[1]} for: ${loc}`,
    );
  }

  // Ensure all core routes exist in the sitemap
  const requiredRoutes = [
    "https://translate.nevatal.tech/",
    "https://translate.nevatal.tech/dashboard",
    "https://translate.nevatal.tech/kanji",
    "https://translate.nevatal.tech/builder",
    "https://translate.nevatal.tech/particles",
    "https://translate.nevatal.tech/kana",
    "https://translate.nevatal.tech/reading",
    "https://translate.nevatal.tech/translator",
    "https://translate.nevatal.tech/progress",
  ];

  for (const route of requiredRoutes) {
    assert.ok(locs.has(route), `Expected core route missing in sitemap: ${route}`);
  }
});
