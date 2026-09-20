import { LEVELS, type Level, type StudyModule } from "./curriculum";
import type { TranslationResponse } from "../ai_handler/translator";

export interface StudyEvent {
  id: string;
  module: StudyModule;
  level: Level;
  correct: boolean;
  date: string;
}
export interface StudyProgress {
  version: 1;
  level: Level;
  goal: number;
  events: StudyEvent[];
  learned: string[];
}
export interface HistoryEntry extends TranslationResponse {
  input: string;
  timestamp: number;
}
export interface LearningData {
  progress: StudyProgress;
  history: HistoryEntry[];
}

export function emptyLearningData(): LearningData {
  return {
    progress: { version: 1, level: "N5", goal: 10, events: [], learned: [] },
    history: [],
  };
}

export function readLearningData(value: unknown): LearningData {
  const data = value as Partial<LearningData> | null;
  const progress = data?.progress;
  if (
    !progress ||
    progress.version !== 1 ||
    !LEVELS.includes(progress.level) ||
    ![5, 10, 20].includes(progress.goal) ||
    !Array.isArray(progress.events) ||
    !Array.isArray(progress.learned) ||
    !Array.isArray(data?.history)
  )
    return emptyLearningData();
  return {
    progress: {
      ...progress,
      learned: progress.learned
        .filter((id) => typeof id === "string")
        .slice(-3000),
      events: progress.events
        .filter(
          (event: Partial<StudyEvent> | null) =>
            event &&
            typeof event.id === "string" &&
            ["courses", "kanji", "builder", "particles", "kana", "reading"].includes(
              event.module || "",
            ) &&
            LEVELS.includes(event.level as Level) &&
            typeof event.correct === "boolean" &&
            typeof event.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(event.date),
        )
        .slice(-3000),
    },
    history: data.history
      .filter(
        (entry) =>
          entry &&
          typeof entry.input === "string" &&
          typeof entry.translation === "string" &&
          typeof entry.romaji === "string" &&
          Number.isFinite(entry.timestamp) &&
          Array.isArray(entry.breakdown) &&
          entry.breakdown.every(
            (part) =>
              part &&
              ["text", "reading", "script", "romaji", "translation"].every(
                (key) =>
                  typeof (part as unknown as Record<string, unknown>)[key] ===
                  "string",
              ),
          ),
      )
      .slice(0, 20),
  };
}

export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function getStudyStats(progress: StudyProgress, now = new Date()) {
  const today = localDate(now);
  const todayCount = progress.events.filter(
    (event) => event.date === today,
  ).length;
  const correct = progress.events.filter((event) => event.correct).length;
  const dates = new Set(progress.events.map((event) => event.date));
  let streak = 0;
  const cursor = new Date(now);
  if (!dates.has(today)) cursor.setDate(cursor.getDate() - 1);
  while (dates.has(localDate(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return {
    todayCount,
    correct,
    streak,
    accuracy: progress.events.length
      ? Math.round((correct / progress.events.length) * 100)
      : 0,
  };
}
