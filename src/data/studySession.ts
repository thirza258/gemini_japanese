import { emptyLearningData, type LearningData } from "./learningProgress";

export type SaveStatus = "guest" | "loading" | "saving" | "saved" | "error";
export interface LearningRepository {
  load(): Promise<LearningData>;
  save(data: LearningData): Promise<void>;
}
type Update = (data: LearningData) => LearningData;
interface Snapshot {
  data: LearningData;
  status: SaveStatus;
}

// Each account gets a separate session. Guest sessions never call a repository.
export class StudySession {
  private snapshot: Snapshot;
  private listeners = new Set<() => void>();
  private pending: Update[] = [];
  private active = false;
  private generation = 0;
  private loaded = false;
  private dirty = false;
  private timer?: ReturnType<typeof setTimeout>;
  private loading?: Promise<void>;
  private saving?: Promise<void>;

  constructor(private repository: LearningRepository | null) {
    this.snapshot = {
      data: emptyLearningData(),
      status: repository ? "loading" : "guest",
    };
  }
  getSnapshot = () => this.snapshot;
  subscribe = (listener: () => void) => {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  };
  private publish(data: LearningData, status: SaveStatus) {
    this.snapshot = { data, status };
    this.listeners.forEach((listener) => listener());
  }
  start = async () => {
    this.active = true;
    if (!this.repository) return;
    const generation = ++this.generation;
    this.publish(this.snapshot.data, "loading");
    this.loading = (async () => {
      try {
        const saved = await this.repository!.load();
        if (!this.active || generation !== this.generation) return;
        const data = this.pending.reduce(
          (value, update) => update(value),
          saved,
        );
        this.pending = [];
        this.loaded = true;
        this.publish(data, this.dirty ? "saving" : "saved");
        if (this.dirty) this.scheduleSave();
      } catch {
        if (this.active && generation === this.generation)
          this.publish(this.snapshot.data, "error");
      }
    })();
    await this.loading;
  };
  stop = () => {
    this.active = false;
    this.generation++;
    clearTimeout(this.timer);
  };
  update = (update: Update) => {
    const data = update(this.snapshot.data);
    if (!this.repository) {
      this.publish(data, "guest");
      return;
    }
    this.dirty = true;
    if (!this.loaded) this.pending.push(update);
    this.publish(data, this.loaded ? "saving" : this.snapshot.status);
    if (this.loaded) this.scheduleSave();
  };
  private scheduleSave() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      void this.flush().catch(() => undefined);
    }, 350);
  }
  hasPendingChanges = () =>
    Boolean(this.repository && (this.dirty || this.saving));
  flush = async (): Promise<void> => {
    clearTimeout(this.timer);
    if (!this.repository) return;
    if (!this.loaded) {
      await this.loading;
      if (!this.loaded)
        throw new Error(
          "Your saved progress could not be loaded. Retry the connection first.",
        );
    }
    if (this.saving) await this.saving;
    if (!this.dirty || !this.active) return;
    const data = this.snapshot.data;
    const generation = this.generation;
    this.dirty = false;
    this.publish(data, "saving");
    this.saving = (async () => {
      try {
        await this.repository!.save(data);
        if (this.active && generation === this.generation)
          this.publish(this.snapshot.data, this.dirty ? "saving" : "saved");
      } catch {
        this.dirty = true;
        if (this.active && generation === this.generation)
          this.publish(this.snapshot.data, "error");
        throw new Error(
          "Your latest practice could not be saved. Please retry before signing out.",
        );
      }
    })();
    try {
      await this.saving;
    } finally {
      this.saving = undefined;
    }
    if (this.dirty && this.active) await this.flush();
  };
  retry = async () => {
    if (!this.loaded) await this.start();
    else await this.flush();
  };
}
