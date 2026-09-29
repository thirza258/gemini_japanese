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
  // A word problem can reveal its English on request.
  translation?: string;
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
  questions: Omit<CourseQuestion, "id">[];
}

export interface WordProblem {
  text: string;
  translation: string;
  answer: string;
  distractors: [string, string, string];
  solution: string;
}

export interface ProblemSet {
  title: string;
  intro: string;
  terms: CourseWord[];
  example: { text: string; translation: string; steps: string[] };
  problems: WordProblem[];
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
  // Word problems are optional; a course with them adds a lesson.
  problems?: ProblemSet;
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
// Every course has the six kinds above; word problems, when a course has
// them, sit just before the checkpoint.
export type LessonKind = (typeof LESSON_KINDS)[number] | "problems";

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
  ...checks: Omit<CourseQuestion, "id">[]
): CoursePassage {
  return { title, text, translation, questions: checks };
}

export function wordProblem(
  text: string,
  translation: string,
  answer: string,
  distractors: [string, string, string],
  solution: string,
): WordProblem {
  return { text, translation, answer, distractors, solution };
}

export function problemSet(
  title: string,
  intro: string,
  terms: CourseWord[],
  example: ProblemSet["example"],
  problems: WordProblem[],
): ProblemSet {
  return { title, intro, terms, example, problems };
}
