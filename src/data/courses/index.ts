import { LEVELS, plainJapanese, type Level } from "../curriculum";
import { n5Courses } from "./n5";
import { n4Courses } from "./n4";
import { n3Courses } from "./n3";
import { n2Courses } from "./n2";
import { n1Courses } from "./n1";
import { n5Sentences } from "./sentences-n5";
import { n4Sentences } from "./sentences-n4";
import { n3Sentences } from "./sentences-n3";
import { n2Sentences } from "./sentences-n2";
import { n1Sentences } from "./sentences-n1";
import {
  LESSON_KINDS,
  type CourseQuestion,
  type CourseSeed,
  type JlptCourse,
  type LessonKind,
  type SentencePractice,
} from "./types";

export type {
  JlptCourse,
  CourseLesson,
  CourseQuestion,
  SentencePractice,
} from "./types";

const seeds: Record<Level, CourseSeed[]> = {
  N5: n5Courses,
  N4: n4Courses,
  N3: n3Courses,
  N2: n2Courses,
  N1: n1Courses,
};
const sentenceSets: Record<Level, Record<string, SentencePractice>> = {
  N5: n5Sentences,
  N4: n4Sentences,
  N3: n3Sentences,
  N2: n2Sentences,
  N1: n1Sentences,
};

export const LESSON_LABELS: Record<LessonKind, string> = {
  vocabulary: "Vocabulary & kanji",
  grammar: "Grammar in context",
  sentences: "Daily sentences",
  reading: "Reading for meaning",
  listening: "Listening practice",
  review: "Course checkpoint",
};

const lessonMinutes: Record<LessonKind, number> = {
  vocabulary: 15,
  grammar: 20,
  sentences: 15,
  reading: 15,
  listening: 10,
  review: 10,
};

export const COURSE_PATHS: Record<
  Level,
  { prerequisite: string; outcome: string }
> = {
  N5: {
    prerequisite:
      "Start here with no Japanese experience. Use the kana flashcards alongside the first courses.",
    outcome:
      "Handle greetings, purchases, directions, routines, and simple plans.",
  },
  N4: {
    prerequisite:
      "Know basic kana, particles, polite verbs, and the N5 foundations.",
    outcome:
      "Explain everyday situations, ask for help, understand rules, and adjust plans.",
  },
  N3: {
    prerequisite:
      "Read connected everyday text and use plain forms, conditions, and basic honorifics.",
    outcome:
      "Connect ideas, qualify opinions, solve daily problems, and follow a viewpoint.",
  },
  N2: {
    prerequisite:
      "Understand everyday explanations and distinguish a fact, a reason, and an inference.",
    outcome:
      "Compare arguments, handle detailed notices, and discuss practical trade-offs.",
  },
  N1: {
    prerequisite:
      "Read complex N2 passages and follow nuanced discussion at near-natural speed.",
    outcome:
      "Evaluate implicit claims, integrate sources, and communicate precise, nuanced judgments.",
  },
};

export const COURSE_REFERENCES = [
  {
    title: "JF Japanese e-Learning Minato",
    url: "https://minato-jf.jp/",
    description:
      "Official Japanese courses and further learning opportunities.",
  },
  {
    title: "Irodori: Can-do learning for daily life",
    url: "https://www.irodori.jpf.go.jp/en/about.html",
    description:
      "Practical communication goals; Starter A1 through Pre-Intermediate A2/B1.",
  },
  {
    title: "Irodori lesson materials & recorded audio",
    url: "https://www.irodori.jpf.go.jp/en/starter/pdf.html",
    description:
      "Official beginner lessons and recordings for extra listening practice.",
  },
  {
    title: "Official JLPT levels",
    url: "https://www.jlpt.jp/e/about/levelsummary.html",
    description: "The reading and listening abilities described for N5–N1.",
  },
  {
    title: "Official JLPT sample questions",
    url: "https://www.jlpt.jp/e/samples/forlearners.html",
    description:
      "Try the official question formats alongside these course checkpoints.",
  },
];

function buildCourse(
  seed: CourseSeed,
  level: Level,
  index: number,
): JlptCourse {
  const id = `course-${level.toLowerCase()}-${seed.slug}`;
  const sentencePractice = sentenceSets[level][seed.slug];
  const vocabulary: CourseQuestion[] = seed.vocabulary.map(
    (word, i, entries) => {
      const reading = i % 2 === 0;
      const answer = reading ? word.reading : word.meaning;
      const alternatives = [
        ...new Set(
          entries.map((item) => (reading ? item.reading : item.meaning)),
        ),
      ]
        .filter((item) => item !== answer)
        .slice(0, 3);
      return {
        id: `${id}-word-${i + 1}`,
        prompt: reading
          ? `How is ${word.word} read?`
          : `What does ${word.word} mean in this course?`,
        answer,
        options: [answer, ...alternatives],
        explanation: `${word.word} is read ${word.reading} and means “${word.meaning}.” Practice the word as a whole; a kanji can have other readings in other words.`,
      };
    },
  );
  const grammar = seed.grammarChecks.map((check, i) => ({
    ...check,
    id: `${id}-grammar-${i + 1}`,
  }));
  const sentences: CourseQuestion[] = sentencePractice.sentences.map(
    (sentence, i, entries) => ({
      id: `${id}-sentence-${i + 1}`,
      prompt: `Choose the sentence meaning: “${sentence.translation}”`,
      answer: plainJapanese(sentence.text),
      options: [sentence, ...entries.filter((_, j) => j !== i).slice(0, 3)].map(
        (item) => plainJapanese(item.text),
      ),
      explanation: `${plainJapanese(sentence.text)} — ${sentence.translation} Use this in: ${sentencePractice.situation.toLowerCase()}. Register: ${sentencePractice.register}.`,
    }),
  );
  const reading: CourseQuestion[] = [
    {
      ...seed.reading.question,
      id: `${id}-reading-check`,
      text: seed.reading.text,
    },
  ];
  const listening: CourseQuestion[] = [
    {
      ...seed.listening.question,
      id: `${id}-listening-check`,
      audio: seed.listening.text,
    },
  ];
  const review = [
    vocabulary[0],
    ...grammar,
    sentences[2],
    ...reading,
    ...listening,
  ].map((check) => ({ ...check, id: `${check.id}-review` }));
  const questions: Record<LessonKind, CourseQuestion[]> = {
    vocabulary,
    grammar,
    sentences,
    reading,
    listening,
    review,
  };
  return {
    ...seed,
    id,
    level,
    order: index + 1,
    sentencePractice,
    lessons: LESSON_KINDS.map((kind) => ({
      id: `${id}-${kind}`,
      kind,
      title: LESSON_LABELS[kind],
      minutes: lessonMinutes[kind],
      questions: questions[kind],
    })),
  };
}

export const JLPT_COURSES = LEVELS.flatMap((level) =>
  seeds[level].map((seed, i) => buildCourse(seed, level, i)),
);

export function getCourses(level: Level): JlptCourse[] {
  return JLPT_COURSES.filter((course) => course.level === level);
}

export function getCourseProgress(
  course: JlptCourse,
  learned: readonly string[],
) {
  const completed = course.lessons.filter((lesson) =>
    learned.includes(lesson.id),
  ).length;
  return {
    completed,
    total: course.lessons.length,
    percent: (completed / course.lessons.length) * 100,
  };
}

export function getResumeLesson(
  courses: readonly JlptCourse[],
  learned: readonly string[],
) {
  for (const course of courses) {
    const lesson = course.lessons.find((item) => !learned.includes(item.id));
    if (lesson) return { course, lesson };
  }
  return null;
}

export function gradeCourseLesson(
  questions: readonly CourseQuestion[],
  answers: Record<string, string>,
) {
  const answered = questions.filter((question) =>
    question.options.includes(answers[question.id]),
  ).length;
  const correct = questions.filter(
    (question) => answers[question.id] === question.answer,
  ).length;
  return {
    answered,
    correct,
    total: questions.length,
    passed: questions.length > 0 && correct === questions.length,
  };
}
