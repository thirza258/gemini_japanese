import assert from "node:assert/strict";
import { test } from "node:test";
import { run } from "../src/ai_handler/translator";

const config = {
  customKey: "test-only-key",
  customModel: "test/model",
  customEndpoint: "/test-translation",
};

test("sample translations work without a network connection or an API key", async (context) => {
  const fetch = context.mock.method(globalThis, "fetch", async () => {
    throw new Error("Network unavailable");
  });
  const result = await run({ input: " 桜が満開です " });
  assert.equal(result.translation, "The cherry blossoms are in full bloom.");
  assert.equal(
    result.breakdown.map((item) => item.text).join(""),
    "桜が満開です",
  );
  assert.equal(fetch.mock.callCount(), 0);
});

test("custom translations preserve input characters and tolerate missing breakdown entries", async (context) => {
  let body: Record<string, unknown> = {};
  context.mock.method(globalThis, "fetch", async (_url, init) => {
    body = JSON.parse(String(init?.body));
    return new Response(
      JSON.stringify({
        choices: [
          {
            message: {
              content: JSON.stringify({
                romaji: "neko",
                translation: "cat",
                breakdown: [null],
              }),
            },
          },
        ],
      }),
    );
  });
  const result = await run({ ...config, input: "ねこ" });
  assert.equal(result.breakdown.length, 2);
  assert.deepEqual(
    result.breakdown.map((item) => item.reading),
    ["ね", "こ"],
  );
  assert.equal(body.model, "test/model");
  assert.ok(Number(body.max_tokens) >= 2048);
});

test("malformed and null model responses produce a useful error", async (context) => {
  const fetch = context.mock.method(
    globalThis,
    "fetch",
    async () =>
      new Response(
        JSON.stringify({ choices: [{ message: { content: "null" } }] }),
      ),
  );
  await assert.rejects(run({ ...config, input: "ねこ" }), /invalid response/);
  fetch.mock.mockImplementation(
    async () =>
      new Response(
        JSON.stringify({ choices: [{ message: { content: "not JSON" } }] }),
      ),
  );
  await assert.rejects(run({ ...config, input: "ねこ" }), /malformed JSON/);
});

test("leaving or replacing a translation can cancel the active request", async (context) => {
  context.mock.method(globalThis, "fetch", async (_url, init) => {
    if (init?.signal?.aborted) throw new DOMException("Aborted", "AbortError");
    return new Promise<Response>((_resolve, reject) =>
      init?.signal?.addEventListener(
        "abort",
        () => reject(new DOMException("Aborted", "AbortError")),
        { once: true },
      ),
    );
  });
  const controller = new AbortController();
  const pending = run({ ...config, input: "ねこ", signal: controller.signal });
  controller.abort();
  await assert.rejects(pending, { name: "AbortError" });
});
