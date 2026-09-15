import assert from "node:assert/strict";
import { test } from "node:test";
import {
  emptyLearningData,
  type LearningData,
} from "../src/data/learningProgress";
import {
  StudySession,
  type LearningRepository,
} from "../src/data/studySession";
import {
  getConnectionStorage,
  setConnectionAccount,
} from "../src/utils/accountStorage";

function deferred<T>() {
  let resolve!: (value: T) => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<T>((yes, no) => {
    resolve = yes;
    reject = no;
  });
  return { promise, resolve, reject };
}
const level =
  (value: "N1" | "N3") =>
  (data: LearningData): LearningData => ({
    ...data,
    progress: { ...data.progress, level: value },
  });

test("guest practice survives navigation within a session but a fresh visit starts empty", async () => {
  const guest = new StudySession(null);
  await guest.start();
  guest.update(level("N1"));
  await guest.flush();
  assert.equal(guest.getSnapshot().data.progress.level, "N1");
  assert.equal(guest.getSnapshot().status, "guest");
  assert.equal(guest.hasPendingChanges(), false);
  assert.equal(new StudySession(null).getSnapshot().data.progress.level, "N5");
  guest.stop();
});

test("a failed initial load never overwrites saved data and retry preserves current practice", async () => {
  let fail = true;
  const saved = emptyLearningData();
  saved.progress.learned = ["already-learned"];
  const writes: LearningData[] = [];
  const repository: LearningRepository = {
    async load() {
      if (fail) throw new Error("offline");
      return saved;
    },
    async save(data) {
      writes.push(data);
    },
  };
  const session = new StudySession(repository);
  await session.start();
  session.update(level("N3"));
  await assert.rejects(session.flush());
  assert.equal(writes.length, 0);
  fail = false;
  await session.retry();
  await session.flush();
  assert.equal(writes[0].progress.level, "N3");
  assert.deepEqual(writes[0].progress.learned, ["already-learned"]);
  session.stop();
});

test("changes made during a save are serialized and the latest snapshot is saved last", async () => {
  const pending = deferred<void>();
  const writes: LearningData[] = [];
  const session = new StudySession({
    async load() {
      return emptyLearningData();
    },
    async save(data) {
      writes.push(data);
      if (writes.length === 1) await pending.promise;
    },
  });
  await session.start();
  session.update(level("N3"));
  const flushing = session.flush();
  session.update(level("N1"));
  pending.resolve();
  await flushing;
  assert.deepEqual(
    writes.map((data) => data.progress.level),
    ["N3", "N1"],
  );
  assert.equal(session.getSnapshot().status, "saved");
  assert.equal(session.hasPendingChanges(), false);
  session.stop();
});

test("a late response after sign-out cannot repopulate a disposed account session", async () => {
  const pending = deferred<LearningData>();
  let writes = 0;
  const previous = new StudySession({
    load: () => pending.promise,
    async save() {
      writes++;
    },
  });
  const loading = previous.start();
  previous.stop();
  const guest = new StudySession(null);
  await guest.start();
  const data = emptyLearningData();
  data.progress.learned = ["private-account-item"];
  pending.resolve(data);
  await loading;
  assert.deepEqual(previous.getSnapshot().data.progress.learned, []);
  assert.deepEqual(guest.getSnapshot().data.progress.learned, []);
  assert.equal(writes, 0);
  guest.stop();
});

test("guest connection settings stay in memory and account changes isolate pending writes", () => {
  const saved = new Map<string, string>();
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", {
    configurable: true,
    value: {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => saved.set(key, value),
      removeItem: (key: string) => saved.delete(key),
    },
  });
  try {
    setConnectionAccount(null);
    getConnectionStorage().setItem("connection", "guest-only");
    assert.equal(saved.size, 0);
    setConnectionAccount("account-one");
    const first = getConnectionStorage();
    assert.equal(first.getItem("connection"), null);
    setConnectionAccount("account-two");
    first.setItem("connection", "late-first-account-write");
    assert.equal(getConnectionStorage().getItem("connection"), null);
    setConnectionAccount(null);
    assert.equal(getConnectionStorage().getItem("connection"), null);
    setConnectionAccount("account-one");
    assert.equal(
      getConnectionStorage().getItem("connection"),
      "late-first-account-write",
    );
  } finally {
    setConnectionAccount(null);
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
