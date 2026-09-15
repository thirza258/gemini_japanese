import assert from "node:assert/strict";
import { test } from "node:test";
import {
  KANA,
  KANJI,
  LEVELS,
  PARTICLES,
  READINGS,
  plainJapanese,
} from "../src/data/curriculum";
import { COMPONENTS, KANJI_CHALLENGES } from "../src/data/kanjiBuilder";
import {
  getStudyStats,
  localDate,
  type StudyProgress,
} from "../src/data/learningProgress";

test("every level offers distinct, usable flashcards, grammar, reading, and construction challenges", () => {
  const ids = [...KANJI, ...PARTICLES, ...READINGS, ...KANJI_CHALLENGES].map(
    (item) => item.id,
  );
  assert.equal(new Set(ids).size, ids.length);
  for (const level of LEVELS) {
    for (const collection of [KANJI, PARTICLES, READINGS, KANJI_CHALLENGES]) {
      assert.ok(
        collection.filter((item) => item.level === level).length >= 3,
        `${level} has insufficient practice`,
      );
    }
  }
  for (const question of [...PARTICLES, ...READINGS]) {
    assert.equal(
      new Set(question.options).size,
      question.options.length,
      question.id,
    );
    assert.equal(
      question.options.filter((option) => option === question.answer).length,
      1,
      question.id,
    );
    assert.ok(question.explanation.trim().length > 30, question.id);
  }
  for (const question of PARTICLES)
    assert.equal(question.sentence.split("＿").length, 2, question.id);
});

test("construction courses support repeated components and fully explain every correct component", () => {
  for (const challenge of KANJI_CHALLENGES) {
    for (const part of challenge.parts)
      assert.ok(COMPONENTS[part]?.note, `${challenge.kanji}: missing ${part}`);
    assert.ok(challenge.parts.length >= 2);
    assert.ok(
      challenge.distractors.every((part) => !challenge.parts.includes(part)),
      challenge.id,
    );
  }
  assert.deepEqual(
    KANJI_CHALLENGES.find((item) => item.kanji === "林")?.parts,
    ["木", "木"],
  );
  assert.deepEqual(
    KANJI_CHALLENGES.find((item) => item.kanji === "森")?.parts,
    ["木", "木", "木"],
  );
  assert.deepEqual(
    KANJI_CHALLENGES.find((item) => item.kanji === "休")?.parts,
    ["亻", "木"],
  );
});

test("kana include both scripts, combined sounds, and common alternate romanizations", () => {
  assert.equal(KANA.filter((item) => item.group === "basic").length, 46);
  assert.equal(new Set(KANA.map((item) => item.hiragana)).size, KANA.length);
  assert.equal(new Set(KANA.map((item) => item.katakana)).size, KANA.length);
  assert.equal(KANA.find((item) => item.hiragana === "しゃ")?.katakana, "シャ");
  assert.ok(
    KANA.find((item) => item.hiragana === "し")?.aliases.includes("si"),
  );
  assert.ok(
    KANA.find((item) => item.hiragana === "ぢ")?.aliases.includes("di"),
  );
  assert.ok(KANA.find((item) => item.hiragana === "を")?.aliases.includes("o"));
});

test("furigana markup produces intact Japanese for speech, including mixed scripts", () => {
  assert.equal(
    plainJapanese("カフェで{日本語|にほんご}を{話|はな}します。"),
    "カフェで日本語を話します。",
  );
  for (const passage of READINGS) {
    const text = plainJapanese(passage.text);
    assert.ok(!/[{}|]/.test(text), passage.id);
    assert.ok(text.length > 40, passage.id);
  }
});

const emptyProgress: StudyProgress = {
  version: 1,
  level: "N5",
  goal: 10,
  events: [],
  learned: [],
};
const attempt = (date: string, correct = true) => ({
  id: "N5-日",
  module: "kanji" as const,
  level: "N5" as const,
  correct,
  date,
});

test("streaks count calendar days, survive today being unfinished, and stop at a gap", () => {
  const now = new Date(2026, 8, 15, 0, 5);
  const progress = {
    ...emptyProgress,
    events: [
      attempt("2026-09-12"),
      attempt("2026-09-13"),
      attempt("2026-09-14"),
      attempt("2026-09-14", false),
    ],
  };
  assert.deepEqual(getStudyStats(progress, now), {
    todayCount: 0,
    correct: 3,
    streak: 3,
    accuracy: 75,
  });
  assert.equal(
    getStudyStats(
      { ...progress, events: [...progress.events, attempt("2026-09-15")] },
      now,
    ).streak,
    4,
  );
  assert.equal(
    getStudyStats(
      {
        ...emptyProgress,
        events: [attempt("2026-09-13"), attempt("2026-09-15")],
      },
      now,
    ).streak,
    1,
  );
  assert.equal(getStudyStats(emptyProgress, now).streak, 0);
});

test("local date and streaks handle leap days and month boundaries", () => {
  const now = new Date(2024, 2, 1, 0, 1);
  assert.equal(localDate(now), "2024-03-01");
  assert.equal(
    getStudyStats(
      {
        ...emptyProgress,
        events: [
          attempt("2024-02-28"),
          attempt("2024-02-29"),
          attempt("2024-03-01"),
        ],
      },
      now,
    ).streak,
    3,
  );
});
