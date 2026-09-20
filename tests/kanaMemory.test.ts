import assert from "node:assert/strict";
import { test } from "node:test";
import { KANA } from "../src/data/curriculum";
import {
  answerKanaMemory,
  kanaChoices,
  makeKanaDeck,
  matchesKanaReading,
  startKanaMemory,
} from "../src/data/kanaMemory";

test("hiragana, katakana, and mixed decks cover every selected character exactly once", () => {
  assert.equal(makeKanaDeck("hiragana", "basic").length, 46);
  assert.equal(makeKanaDeck("katakana", "voiced").length, 25);
  assert.equal(makeKanaDeck("both", "combination").length, 66);
  const cards = makeKanaDeck("both", "all");
  assert.equal(cards.length, 208);
  assert.equal(new Set(cards.map((card) => card.id)).size, 208);
  assert.ok(cards.some((card) => card.id === "hiragana-け"));
  assert.ok(cards.some((card) => card.id === "katakana-け"));
});

test("a missed character returns after two other cards and correct recalls are spaced over the deck", () => {
  const cards = makeKanaDeck("hiragana", "basic").slice(0, 5);
  const original = startKanaMemory(cards);
  const miss = answerKanaMemory(original, false);
  assert.deepEqual(
    miss.queue.map((card) => card.id),
    [cards[1], cards[2], cards[0], cards[3], cards[4]].map((card) => card.id),
  );
  assert.equal(miss.attempts, 1);
  assert.equal(miss.correct, 0);
  assert.deepEqual(original.queue, cards, "the input session is not mutated");
  assert.equal(answerKanaMemory(original, true).queue.at(-1)?.id, cards[0].id);
});

test("repeat practice continues beyond a quiz, needs three recalls per character, and resets a missed streak", () => {
  const cards = makeKanaDeck("katakana", "basic").slice(0, 5);
  let session = startKanaMemory(cards);
  for (let i = 0; i < 15; i++) session = answerKanaMemory(session, true);
  assert.equal(session.attempts, 15);
  assert.equal(session.queue.length, 5);
  assert.deepEqual(Object.values(session.streaks), [3, 3, 3, 3, 3]);
  const missedId = session.queue[0].id;
  session = answerKanaMemory(session, false);
  assert.equal(session.streaks[missedId], 0);
  assert.equal(
    Object.values(session.streaks).filter((value) => value === 3).length,
    4,
  );
  for (let i = 0; i < 200; i++) session = answerKanaMemory(session, true);
  assert.equal(session.attempts, 216);
  assert.ok(Object.values(session.streaks).every((value) => value === 3));
});

test("reading guesses normalize input and accept the existing alternative romanizations", () => {
  const ke = KANA.find((kana) => kana.hiragana === "け")!;
  assert.equal(matchesKanaReading(ke, " KE "), true);
  assert.equal(matchesKanaReading(ke, "ka"), false);
  assert.equal(matchesKanaReading(ke, ""), false);
  assert.equal(
    matchesKanaReading(
      KANA.find((kana) => kana.hiragana === "し")!,
      "si",
    ),
    true,
  );
  assert.equal(
    matchesKanaReading(
      KANA.find((kana) => kana.hiragana === "ぢ")!,
      "di",
    ),
    true,
  );
  assert.equal(
    matchesKanaReading(
      KANA.find((kana) => kana.hiragana === "を")!,
      "o",
    ),
    true,
  );
});

test("reverse quizzes never offer two characters with an accepted reading for the same prompt", () => {
  for (const card of makeKanaDeck("both", "all")) {
    const options = kanaChoices(card);
    assert.equal(options.length, 4);
    assert.equal(new Set(options).size, 4);
    assert.ok(options.includes(card.kana[card.script]));
    for (const option of options.filter(
      (item) => item !== card.kana[card.script],
    )) {
      const kana = KANA.find((item) => item[card.script] === option)!;
      assert.equal(kana.group, card.kana.group);
      assert.ok(
        ![card.kana.romaji, ...card.kana.aliases].some((reading) =>
          matchesKanaReading(kana, reading),
        ),
        `${card.id}: ambiguous ${option}`,
      );
    }
  }
});
