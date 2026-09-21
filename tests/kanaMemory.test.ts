import assert from "node:assert/strict";
import { test } from "node:test";
import { KANA, KANJI } from "../src/data/curriculum";
import {
  answerKanaMemory,
  kanaChoices,
  makeKanaDeck,
  matchesKanaReading,
  startKanaMemory,
} from "../src/data/kanaMemory";
import {
  acceptedKanjiReadings,
  matchesReading,
  romajiForms,
} from "../src/data/readingInput";

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

test("a typed reading is accepted as hiragana, katakana, or romaji", () => {
  for (const input of ["にほん", "ニホン", " Nihon ", "nihonn", "NIHON"])
    assert.equal(matchesReading("にほん", input), true, input);
  // Alternative romanization systems the kana table already records.
  for (const [reading, input] of [
    ["でんしゃ", "densha"],
    ["でんしゃ", "densya"],
    ["じしょ", "jisho"],
    ["じしょ", "zisyo"],
    ["つくえ", "tsukue"],
    ["つくえ", "tukue"],
  ] as const)
    assert.equal(matchesReading(reading, input), true, `${reading} ${input}`);
  // A small っ doubles the next consonant, and dropping it is a real miss.
  assert.equal(matchesReading("がっこう", "gakkou"), true);
  assert.equal(matchesReading("がっこう", "gakkoo"), true);
  assert.equal(matchesReading("がっこう", "gakou"), false);
  assert.equal(matchesReading("がっこう", "gakko"), false);
  // Long vowels accept their spellings, but never a short vowel instead.
  assert.equal(matchesReading("こうこう", "kōkō"), true);
  assert.equal(matchesReading("こうこう", "koukou"), true);
  assert.equal(matchesReading("こうこう", "kouko"), false);
  assert.equal(matchesReading("こうこう", "ko"), false);
  // Nothing empty, and no near miss of the right shape.
  assert.equal(matchesReading("ひだりて", ""), false);
  assert.equal(matchesReading("ひだりて", "   "), false);
  assert.equal(matchesReading("ひだりて", "migite"), false);
  assert.equal(matchesReading("ひだりて", "hidarita"), false);
});

test("no kanji card accepts the reading of a different card", () => {
  const canonical = KANJI.map(
    (card) => [card.reading, [...romajiForms(card.reading)][0]] as const,
  );
  for (const card of KANJI) {
    assert.ok(
      matchesReading(card.reading, card.reading),
      `${card.id} rejects its own reading`,
    );
    for (const [reading, romaji] of canonical)
      if (reading !== card.reading)
        assert.equal(
          matchesReading(card.reading, romaji),
          false,
          `${card.id} accepts ${reading} (${romaji})`,
        );
  }
});

test("a bare-kanji prompt accepts every reading it lists; a compound accepts one", () => {
  let bare = 0;
  for (const card of KANJI) {
    const accepted = acceptedKanjiReadings(card);
    assert.ok(accepted.includes(card.reading), card.id);
    assert.ok(
      accepted.every((reading) => reading && reading !== "—"),
      card.id,
    );
    if (card.word !== card.character) {
      assert.deepEqual(accepted, [card.reading], card.id);
      continue;
    }
    bare += 1;
    // The prompt is the character alone, so its on'yomi answers it too.
    for (const reading of card.onyomi.split("・"))
      assert.ok(
        accepted.some((item) => matchesReading(item, reading)),
        `${card.id} rejects on'yomi ${reading}`,
      );
  }
  assert.ok(bare > 0, "expected some cards to prompt with the character alone");
  const eye = KANJI.find((card) => card.id === "N5-目")!;
  for (const input of ["め", "me", "モク", "もく", "moku"])
    assert.ok(
      acceptedKanjiReadings(eye).some((reading) =>
        matchesReading(reading, input),
      ),
      input,
    );
  assert.ok(
    !acceptedKanjiReadings(eye).some((reading) => matchesReading(reading, "hi")),
  );
});
