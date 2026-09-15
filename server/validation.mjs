import { HttpError } from "./security.mjs";

const levels = ["N5", "N4", "N3", "N2", "N1"];
const modules = ["kanji", "builder", "particles", "kana", "reading"];
const isString = (value, max = 12000) =>
  typeof value === "string" && value.length <= max;
const fail = () => {
  throw new HttpError(400, "The learning data is invalid.");
};

export function validateLearningData(data) {
  const progress = data?.progress;
  if (
    !progress ||
    progress.version !== 1 ||
    !levels.includes(progress.level) ||
    ![5, 10, 20].includes(progress.goal)
  )
    fail();
  if (
    !Array.isArray(progress.learned) ||
    progress.learned.length > 3000 ||
    !progress.learned.every((id) => isString(id, 200))
  )
    fail();
  if (
    !Array.isArray(progress.events) ||
    progress.events.length > 3000 ||
    !progress.events.every(
      (event) =>
        event &&
        isString(event.id, 200) &&
        modules.includes(event.module) &&
        levels.includes(event.level) &&
        typeof event.correct === "boolean" &&
        typeof event.date === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(event.date),
    )
  )
    fail();
  if (
    !Array.isArray(data.history) ||
    data.history.length > 20 ||
    !data.history.every(
      (entry) =>
        entry &&
        isString(entry.input) &&
        isString(entry.translation, 48000) &&
        isString(entry.romaji, 48000) &&
        Number.isFinite(entry.timestamp) &&
        entry.timestamp >= 0 &&
        Array.isArray(entry.breakdown) &&
        entry.breakdown.length <= 12000 &&
        entry.breakdown.every(
          (part) =>
            part &&
            ["text", "reading", "script", "romaji", "translation"].every(
              (key) => isString(part[key]),
            ),
        ),
    )
  )
    fail();
  // Only learning fields are stored. The account always comes from the session.
  return {
    progress: {
      version: 1,
      level: progress.level,
      goal: progress.goal,
      learned: [...new Set(progress.learned)],
      events: progress.events.map(({ id, module, level, correct, date }) => ({
        id,
        module,
        level,
        correct,
        date,
      })),
    },
    history: data.history.map(
      ({ input, translation, romaji, timestamp, breakdown }) => ({
        input,
        translation,
        romaji,
        timestamp,
        breakdown: breakdown.map(
          ({ text, reading, script, romaji, translation }) => ({
            text,
            reading,
            script,
            romaji,
            translation,
          }),
        ),
      }),
    ),
  };
}
