import {
  KANA,
  KANJI,
  PARTICLES,
  READINGS,
  type Page,
  type StudyModule,
} from "../data/curriculum";
import { KANJI_CHALLENGES } from "../data/kanjiBuilder";
import {
  getStudyStats,
  localDate,
  type StudyProgress as Progress,
} from "../hooks/useStudy";
import { Icon, PageHeading, ProgressBar } from "./StudyUI";

const names: Record<StudyModule, string> = {
  kanji: "Kanji flashcards",
  builder: "Kanji builder",
  particles: "Particles & grammar",
  kana: "Hiragana & katakana",
  reading: "Reading room",
};
export function StudyProgress({
  progress,
  onGoalChange,
  onNavigate,
  signedIn,
}: {
  progress: Progress;
  onGoalChange: (goal: number) => void;
  onNavigate: (page: Page) => void;
  signedIn: boolean;
}) {
  const stats = getStudyStats(progress);
  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - 6 + i);
    return {
      date: localDate(date),
      label: date.toLocaleDateString("en", { weekday: "short" }),
      count: progress.events.filter((event) => event.date === localDate(date))
        .length,
    };
  });
  const maximum = Math.max(progress.goal, ...days.map((day) => day.count));
  const skills: { module: StudyModule; ids: string[] }[] = [
    { module: "kanji", ids: KANJI.map((item) => item.id) },
    { module: "builder", ids: KANJI_CHALLENGES.map((item) => item.id) },
    { module: "particles", ids: PARTICLES.map((item) => item.id) },
    {
      module: "kana",
      ids: KANA.flatMap((item) => [
        `hiragana-${item.id}`,
        `katakana-${item.id}`,
      ]),
    },
    { module: "reading", ids: READINGS.map((item) => item.id) },
  ];
  function exportProgress() {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(progress, null, 2)], {
        type: "application/json",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = `gemini-japanese-progress-${localDate()}.json`;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <>
      <PageHeading
        eyebrow="LOOK HOW FAR YOU’VE COME"
        title="Your progress"
        description="Small steps add up. Here’s a record of yours."
      >
        <button className="button secondary" onClick={exportProgress}>
          Export progress
        </button>
      </PageHeading>
      <div className="progress-stats">
        <section className="panel">
          <Icon name="flame" />
          <strong>{stats.streak}</strong>
          <span>Day streak</span>
        </section>
        <section className="panel">
          <Icon name="cards" />
          <strong>{progress.events.length}</strong>
          <span>Total practice attempts</span>
        </section>
        <section className="panel">
          <Icon name="target" />
          <strong>{progress.events.length ? `${stats.accuracy}%` : "—"}</strong>
          <span>Answer accuracy</span>
        </section>
      </div>
      <div className="dashboard-bottom">
        <section className="panel week-panel">
          <div className="section-heading">
            <div>
              <h2>A little, often</h2>
              <p>Your practice over the last seven days.</p>
            </div>
            <span className="badge">
              {days.reduce((sum, day) => sum + day.count, 0)} reviews
            </span>
          </div>
          <div
            className="week-chart"
            role="img"
            aria-label={days
              .map((day) => `${day.label}: ${day.count} reviews`)
              .join(", ")}
          >
            {days.map((day) => (
              <div className="day-column" key={day.date}>
                <span>{day.count}</span>
                <div className="day-bar-space">
                  <span
                    style={{ height: `${(day.count / maximum) * 100}%` }}
                    className={day.date === localDate() ? "today" : ""}
                  />
                </div>
                <small>{day.label}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="panel daily-goal-panel">
          <span className="stat-icon">
            <Icon name="target" />
          </span>
          <h2>Your daily goal</h2>
          <p>Make it manageable. You can change this anytime.</p>
          <label htmlFor="daily-goal">Practice attempts per day</label>
          <select
            id="daily-goal"
            value={progress.goal}
            onChange={(event) => onGoalChange(Number(event.target.value))}
          >
            <option value={5}>5 · A small step</option>
            <option value={10}>10 · A steady habit</option>
            <option value={20}>20 · A deeper session</option>
          </select>
          <div className="session-meta">
            <span>Today</span>
            <strong>
              {stats.todayCount} / {progress.goal}
            </strong>
          </div>
          <ProgressBar
            value={(stats.todayCount / progress.goal) * 100}
            label="Daily goal"
          />
        </section>
      </div>
      <section className="panel skills-progress">
        <div className="section-heading">
          <div>
            <h2>Your skills, growing</h2>
            <p>Items you last answered correctly, across all levels.</p>
          </div>
        </div>
        {skills.map((skill) => {
          const learned = skill.ids.filter((id) =>
            progress.learned.includes(id),
          ).length;
          return (
            <button key={skill.module} onClick={() => onNavigate(skill.module)}>
              <span>
                <strong>{names[skill.module]}</strong>
                <small>
                  {learned} / {skill.ids.length} learned
                </small>
              </span>
              <ProgressBar
                value={(learned / skill.ids.length) * 100}
                label={names[skill.module]}
              />
              <Icon name="chevron" size={17} />
            </button>
          );
        })}
      </section>
      <section className="panel recent-activity">
        <h2>Recent practice</h2>
        {progress.events.length ? (
          <div>
            {progress.events
              .slice(-8)
              .reverse()
              .map((event, i) => (
                <div className="activity-row" key={`${event.id}-${i}`}>
                  <span
                    className={`activity-icon ${event.correct ? "right" : ""}`}
                  >
                    <Icon
                      name={event.correct ? "check" : "refresh"}
                      size={17}
                    />
                  </span>
                  <div>
                    <strong>{names[event.module]}</strong>
                    <span>
                      {event.level} ·{" "}
                      {event.correct ? "Correct / learned" : "Still learning"}
                    </span>
                  </div>
                  <time dateTime={event.date}>
                    {event.date === localDate() ? "Today" : event.date}
                  </time>
                </div>
              ))}
          </div>
        ) : (
          <div className="empty-activity">
            <p>Your first practice session will appear here.</p>
            <button className="text-link" onClick={() => onNavigate("kanji")}>
              Start with a few kanji <Icon name="arrow" size={16} />
            </button>
          </div>
        )}
      </section>
      <p className="curriculum-note">
        {signedIn
          ? "Your most recent 3,000 attempts are saved to your account."
          : "Guest progress is kept for this visit only and resets when you refresh or leave. Sign in to save your future practice."}{" "}
        Streaks follow your local calendar day.
      </p>
    </>
  );
}
