import assert from "node:assert/strict";
import { test } from "node:test";
import { LEVELS, plainJapanese, type Level } from "../src/data/curriculum";
import {
  JLPT_COURSES,
  getCourseProgress,
  getCourses,
  getResumeLesson,
  gradeCourseLesson,
} from "../src/data/courses";
import { LESSON_KINDS } from "../src/data/courses/types";
import {
  emptyLearningData,
  readLearningData,
} from "../src/data/learningProgress";

// Courses per level; every total below is derived from this, not restated.
const COURSE_COUNTS: Record<Level, number> = {
  N5: 15,
  N4: 18,
  N3: 18,
  N2: 15,
  N1: 15,
};
const TOTAL_COURSES = LEVELS.reduce(
  (total, level) => total + COURSE_COUNTS[level],
  0,
);

test("every JLPT path contains complete courses with all six learning activities", () => {
  assert.equal(JLPT_COURSES.length, TOTAL_COURSES);
  const identifiers: string[] = [];
  for (const level of LEVELS) {
    const courses = getCourses(level);
    assert.equal(courses.length, COURSE_COUNTS[level], level);
    assert.deepEqual(
      courses.map((course) => course.order),
      Array.from({ length: COURSE_COUNTS[level] }, (_, i) => i + 1),
    );
    for (const course of courses) {
      identifiers.push(course.id, ...course.lessons.map((lesson) => lesson.id));
      assert.deepEqual(
        course.lessons.map((lesson) => lesson.kind),
        LESSON_KINDS,
        course.id,
      );
      assert.equal(course.vocabulary.length, 8, course.id);
      assert.equal(course.grammar.length, 4, course.id);
      assert.equal(course.sentencePractice.sentences.length, 6, course.id);
      assert.match(course.sentencePractice.canDo, /^I can /, course.id);
      assert.ok(
        course.summary.length > 50 && course.practice.length > 50,
        course.id,
      );
      for (const word of course.vocabulary) {
        assert.ok(word.word && word.meaning, course.id);
        assert.match(
          word.reading,
          /^[ぁ-ゖー]+$/,
          `${course.id}: ${word.word}`,
        );
      }
      for (const point of course.grammar) {
        assert.ok(
          point.explanation.length > 90,
          `${course.id}: ${point.pattern}`,
        );
        assert.ok(point.example && point.translation, course.id);
      }
      assert.ok(
        plainJapanese(course.reading.text).length >=
          (level === "N1" ? 200 : level === "N2" ? 150 : 40),
        course.id,
      );
      assert.ok(course.listening.text.length > 40, course.id);
      for (const sentence of course.sentencePractice.sentences) {
        assert.ok(sentence.translation.length > 10, course.id);
        assert.match(
          plainJapanese(sentence.text),
          /[ぁ-ゖァ-ヶ一-龠]/,
          course.id,
        );
        assert.doesNotMatch(
          plainJapanese(sentence.text),
          /[{}|\u200b\ufffd]/,
          course.id,
        );
      }
    }
  }
  assert.equal(new Set(identifiers).size, identifiers.length);
  assert.equal(
    JLPT_COURSES.flatMap((course) => course.lessons).length,
    TOTAL_COURSES * 6,
  );
  assert.equal(
    JLPT_COURSES.flatMap((course) => course.sentencePractice.sentences).length,
    TOTAL_COURSES * 6,
  );
});

test("every assessment has a unique ID, one keyed answer, explanations, and usable comprehension context", () => {
  const ids: string[] = [];
  for (const course of JLPT_COURSES) {
    for (const lesson of course.lessons) {
      assert.ok(lesson.questions.length > 0, lesson.id);
      for (const question of lesson.questions) {
        ids.push(question.id);
        assert.equal(question.options.length, 4, question.id);
        assert.equal(new Set(question.options).size, 4, question.id);
        assert.equal(
          question.options.filter((option) => option === question.answer)
            .length,
          1,
          question.id,
        );
        assert.ok(question.explanation.length > 30, question.id);
        assert.doesNotMatch(
          JSON.stringify(question),
          /undefined|\u200b|\ufffd/,
          question.id,
        );
        if (question.text)
          assert.doesNotMatch(
            plainJapanese(question.text),
            /[{}|]/,
            question.id,
          );
        if (question.audio)
          assert.doesNotMatch(
            plainJapanese(question.audio),
            /[{}|]/,
            question.id,
          );
      }
      if (lesson.kind === "review") {
        assert.ok(
          lesson.questions.some((question) => question.audio),
          lesson.id,
        );
        assert.ok(
          lesson.questions.some((question) => question.text),
          lesson.id,
        );
      }
    }
  }
  assert.equal(new Set(ids).size, ids.length);
});

test("lesson grading requires all valid answers and detects a wrong or missing response", () => {
  const questions = JLPT_COURSES[0].lessons[0].questions;
  assert.deepEqual(gradeCourseLesson(questions, {}), {
    answered: 0,
    correct: 0,
    total: questions.length,
    passed: false,
  });
  const answers = Object.fromEntries(
    questions.map((question) => [question.id, question.answer]),
  );
  assert.equal(gradeCourseLesson(questions, answers).passed, true);
  answers[questions[0].id] = questions[0].options.find(
    (option) => option !== questions[0].answer,
  )!;
  assert.equal(
    gradeCourseLesson(questions, answers).answered,
    questions.length,
  );
  assert.equal(gradeCourseLesson(questions, answers).passed, false);
  answers[questions[0].id] = "unknown answer";
  assert.equal(
    gradeCourseLesson(questions, answers).answered,
    questions.length - 1,
  );
  assert.equal(gradeCourseLesson([], {}).passed, false);
});

test("resume skips completed lessons and courses, isolates levels, and handles a completed path", () => {
  const courses = getCourses("N5");
  assert.equal(
    getResumeLesson(courses, [])?.lesson.id,
    courses[0].lessons[0].id,
  );
  const first = courses[0].lessons.map((lesson) => lesson.id);
  assert.deepEqual(getCourseProgress(courses[0], first), {
    completed: 6,
    total: 6,
    percent: 100,
  });
  assert.equal(getResumeLesson(courses, first)?.course.id, courses[1].id);
  assert.equal(
    getResumeLesson(getCourses("N1"), first)?.course.id,
    getCourses("N1")[0].id,
  );
  assert.equal(
    getResumeLesson(
      courses,
      courses.flatMap((course) => course.lessons.map((lesson) => lesson.id)),
    ),
    null,
  );
  assert.equal(
    getCourseProgress(courses[0], [first[0], first[0], "unknown"]).completed,
    1,
  );
});

test("saved course lessons survive client data validation without losing old practice", () => {
  const data = emptyLearningData();
  data.progress.events = [
    {
      id: JLPT_COURSES[0].lessons[0].id,
      module: "courses",
      level: "N5",
      correct: true,
      date: "2026-09-20",
    },
    {
      id: "hiragana-け",
      module: "kana",
      level: "N5",
      correct: false,
      date: "2026-09-20",
    },
  ];
  data.progress.learned = [JLPT_COURSES[0].lessons[0].id];
  assert.deepEqual(readLearningData(JSON.parse(JSON.stringify(data))), data);
});
