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
import {
  BUILDER_COURSES,
  COMPONENTS,
  KANJI_CHALLENGES,
  getCourseChallenges,
} from "../src/data/kanjiBuilder";
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
    for (const [name, collection, minimum] of [
      ["kanji cards", KANJI, 40],
      ["grammar questions", PARTICLES, 16],
      ["reading passages", READINGS, 5],
      ["building challenges", KANJI_CHALLENGES, 15],
    ] as const) {
      assert.ok(
        collection.filter((item) => item.level === level).length >= minimum,
        `${level} needs at least ${minimum} ${name}`,
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
    assert.equal(question.options.length, 4, question.id);
    assert.ok(
      question.options.every((option) => option.trim()),
      question.id,
    );
  }
  for (const question of PARTICLES)
    assert.equal(question.sentence.split("＿").length, 2, question.id);
});

test("kanji cards are distinct and include usable readings and an example of the character", () => {
  assert.equal(new Set(KANJI.map((card) => card.character)).size, KANJI.length);
  for (const card of KANJI) {
    assert.equal(Array.from(card.character).length, 1, card.id);
    assert.ok(card.word.includes(card.character), card.id);
    assert.match(card.reading, /^[ぁ-ゖー]+$/, card.id);
    for (const value of Object.values(card)) assert.ok(value.trim(), card.id);
  }
});

test("each level has themed courses covering every construction challenge exactly once", () => {
  assert.equal(
    new Set(BUILDER_COURSES.map((course) => course.id)).size,
    BUILDER_COURSES.length,
  );
  for (const level of LEVELS) {
    const courses = BUILDER_COURSES.filter((course) => course.level === level);
    assert.ok(courses.length >= 3, `${level} needs at least three courses`);
    const assigned = courses.flatMap((course) => course.challengeIds);
    assert.equal(
      new Set(assigned).size,
      assigned.length,
      `${level}: repeated lesson`,
    );
    assert.deepEqual(
      [...assigned].sort(),
      KANJI_CHALLENGES.filter((challenge) => challenge.level === level)
        .map((challenge) => challenge.id)
        .sort(),
      `${level}: missing or unknown course lesson`,
    );
    for (const course of courses) {
      assert.ok(course.title.trim() && course.description.trim(), course.id);
      const lessons = getCourseChallenges(course);
      assert.ok(lessons.length >= 3, `${course.id}: insufficient lessons`);
      assert.deepEqual(
        lessons.map((lesson) => lesson.id),
        course.challengeIds,
      );
      assert.ok(
        lessons.every((lesson) => lesson.level === level),
        course.id,
      );
    }
  }
});

test("construction courses support repeated components and fully explain every correct component", () => {
  for (const challenge of KANJI_CHALLENGES) {
    for (const part of [...challenge.parts, ...challenge.distractors])
      assert.ok(COMPONENTS[part]?.note, `${challenge.kanji}: missing ${part}`);
    assert.equal(
      challenge.parts.length,
      challenge.layout === "triangle" ? 3 : 2,
      challenge.id,
    );
    assert.ok(challenge.word.includes(challenge.kanji), challenge.id);
    assert.match(challenge.wordReading, /^[ぁ-ゖー]+$/, challenge.id);
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
    for (const [word, reading, meaning] of passage.vocabulary) {
      assert.ok(word.trim(), passage.id);
      assert.match(reading, /^[ぁ-ゖー]+$/, passage.id);
      assert.ok(meaning.trim(), passage.id);
    }
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
