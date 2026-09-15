import { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import { type Level, type StudyModule } from "../data/curriculum";
import { localDate, type HistoryEntry } from "../data/learningProgress";
import { StudySession } from "../data/studySession";
import { createLearningRepository } from "../auth/learningRepository";

export { getStudyStats, localDate } from "../data/learningProgress";
export type { StudyEvent, StudyProgress } from "../data/learningProgress";

export function useStudy(userId: string | null) {
  const session = useMemo(
    () => new StudySession(userId ? createLearningRepository(userId) : null),
    [userId],
  );
  const { data, status } = useSyncExternalStore(
    session.subscribe,
    session.getSnapshot,
  );
  useEffect(() => {
    void session.start();
    const beforeUnload = (event: BeforeUnloadEvent) => {
      if (!session.hasPendingChanges()) return;
      event.preventDefault();
      event.returnValue = "";
    };
    const visibilityChanged = () => {
      if (document.visibilityState === "hidden")
        void session.flush().catch(() => undefined);
    };
    window.addEventListener("beforeunload", beforeUnload);
    document.addEventListener("visibilitychange", visibilityChanged);
    return () => {
      session.stop();
      window.removeEventListener("beforeunload", beforeUnload);
      document.removeEventListener("visibilitychange", visibilityChanged);
    };
  }, [session]);

  const record = useCallback(
    (module: StudyModule, id: string, level: Level, correct: boolean) => {
      session.update((previous) => ({
        ...previous,
        progress: {
          ...previous.progress,
          events: [
            ...previous.progress.events,
            { id, module, level, correct, date: localDate() },
          ].slice(-3000),
          learned: correct
            ? [...new Set([...previous.progress.learned, id])]
            : previous.progress.learned.filter((item) => item !== id),
        },
      }));
    },
    [session],
  );
  const setLevel = (level: Level) =>
    session.update((previous) => ({
      ...previous,
      progress: { ...previous.progress, level },
    }));
  const setGoal = (goal: number) =>
    session.update((previous) => ({
      ...previous,
      progress: { ...previous.progress, goal },
    }));
  const saveHistory = (entry: HistoryEntry) =>
    session.update((previous) => ({
      ...previous,
      history: [
        entry,
        ...previous.history.filter((item) => item.input !== entry.input),
      ].slice(0, 20),
    }));
  return {
    progress: data.progress,
    history: data.history,
    saveHistory,
    record,
    setLevel,
    setGoal,
    saveStatus: status,
    flush: session.flush,
    retrySave: session.retry,
  };
}
export type RecordAnswer = ReturnType<typeof useStudy>["record"];
