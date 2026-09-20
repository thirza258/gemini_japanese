import type { Level } from "../curriculum";

export interface CourseQuestion {
  id: string;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  // A review keeps comprehension context with its question.
  text?: string;
  audio?: string;
}

export interface CourseWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface GrammarPoint {
  pattern: string;
  explanation: string;
  example: string;
  translation: string;
}

export interface CoursePassage {
  title: string;
  text: string;
  translation: string;
  question: Omit<CourseQuestion, "id">;
}

export interface CourseSeed {
  slug: string;
  title: string;
  summary: string;
  vocabulary: CourseWord[];
  grammar: GrammarPoint[];
  grammarChecks: Omit<CourseQuestion, "id">[];
  reading: CoursePassage;
  listening: CoursePassage;
  practice: string;
}

export interface SentencePractice {
  canDo: string;
  situation: string;
  register: "polite" | "casual" | "formal";
  sentences: { text: string; translation: string }[];
}

export const LESSON_KINDS = [
  "vocabulary",
  "grammar",
  "sentences",
  "reading",
  "listening",
  "review",
] as const;
export type LessonKind = (typeof LESSON_KINDS)[number];

export interface CourseLesson {
  id: string;
  kind: LessonKind;
  title: string;
  minutes: number;
  questions: CourseQuestion[];
}

export interface JlptCourse extends CourseSeed {
  id: string;
  level: Level;
  order: number;
  lessons: CourseLesson[];
  sentencePractice: SentencePractice;
}

export function sentences(
  canDo: string,
  situation: string,
  register: SentencePractice["register"],
  examples: [string, string][],
): SentencePractice {
  return {
    canDo,
    situation,
    register,
    sentences: examples.map(([text, translation]) => ({ text, translation })),
  };
}

// Compact authoring helpers; every example, passage, and answer is authored locally.
export function words(entries: string): CourseWord[] {
  return entries
    .trim()
    .split("\n")
    .map((line) => {
      const [word, reading, meaning] = line.trim().split("|");
      return { word, reading, meaning };
    });
}

export function grammar(
  pattern: string,
  explanation: string,
  example: string,
  translation: string,
): GrammarPoint {
  return { pattern, explanation, example, translation };
}

export function question(
  prompt: string,
  answer: string,
  distractors: [string, string, string],
  explanation: string,
): Omit<CourseQuestion, "id"> {
  return { prompt, answer, options: [answer, ...distractors], explanation };
}

export function passage(
  title: string,
  text: string,
  translation: string,
  check: Omit<CourseQuestion, "id">,
): CoursePassage {
  return { title, text, translation, question: check };
}
