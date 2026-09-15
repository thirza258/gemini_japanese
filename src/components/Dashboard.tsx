import {
  KANA,
  KANJI,
  LEVELS,
  LEVEL_DETAILS,
  PARTICLES,
  READINGS,
  type Level,
  type Page,
} from "../data/curriculum";
import { BUILDER_COURSES, KANJI_CHALLENGES } from "../data/kanjiBuilder";
import { getStudyStats, type StudyProgress } from "../hooks/useStudy";
import { Icon, PageHeading, ProgressBar, type IconName } from "./StudyUI";

interface Props {
  progress: StudyProgress;
  onNavigate: (page: Page) => void;
  onLevelChange: (level: Level) => void;
}
export function Dashboard({ progress, onNavigate, onLevelChange }: Props) {
  const { level } = progress;
  const stats = getStudyStats(progress);
  const learnedKanji = KANJI.filter((card) =>
    progress.learned.includes(card.id),
  ).length;
  const cards: {
    page: Page;
    symbol: string;
    title: string;
    description: string;
    meta: string;
    icon: IconName;
  }[] = [
    {
      page: "kanji",
      symbol: "漢",
      title: "Kanji flashcards",
      description:
        "Build recognition with readings, meanings, and words in context.",
      meta: `${KANJI.filter((card) => card.level === level).length} cards · ${level}`,
      icon: "cards",
    },
    {
      page: "builder",
      symbol: "組",
      title: "Kanji builder",
      description:
        "Piece it together. Discover how familiar parts form new kanji.",
      meta: `${KANJI_CHALLENGES.filter((card) => card.level === level).length} challenges · ${level}`,
      icon: "build",
    },
    {
      page: "particles",
      symbol: "は",
      title: "Particles & grammar",
      description: "Find the missing piece and understand why it belongs.",
      meta: `${PARTICLES.filter((card) => card.level === level).length} questions · ${level}`,
      icon: "grammar",
    },
    {
      page: "kana",
      symbol: "あ",
      title: "Hiragana & katakana",
      description: "Get comfortable with the sounds and shapes of Japanese.",
      meta: `${KANA.length * 2} kana & combinations`,
      icon: "book",
    },
    {
      page: "reading",
      symbol: "読",
      title: "Reading room",
      description:
        "Read a little Japanese with furigana and comprehension checks.",
      meta: `${READINGS.filter((card) => card.level === level).length} passages · ${level}`,
      icon: "book",
    },
    {
      page: "translator",
      symbol: "訳",
      title: "Detailed translator",
      description: "Go beyond the translation. Understand every character.",
      meta: "Furigana · romaji · breakdown",
      icon: "translate",
    },
  ];

  return (
    <>
      <PageHeading
        eyebrow="YOUR STUDY SPACE"
        title="A little Japanese, every day."
        description="Pick up where you are. Every small step counts."
      >
        <span className="date-label">
          {new Date().toLocaleDateString("en", {
            weekday: "long",
            month: "short",
            day: "numeric",
          })}
        </span>
      </PageHeading>
      <section className="welcome-panel">
        <div>
          <span className="badge">
            {level} · {LEVEL_DETAILS[level].title}
          </span>
          <h2>Good things take practice.</h2>
          <p>
            A few kanji, a new expression, a little more confidence.
            <br className="desktop-break" /> Your next step starts here.
          </p>
          <button
            className="button primary"
            onClick={() => onNavigate("kanji")}
          >
            {stats.todayCount ? "Keep learning" : "Start today’s practice"}
            <Icon name="arrow" size={17} />
          </button>
        </div>
        <div className="welcome-word">
          <span lang="ja" className="word-reading">
            いっぽ
          </span>
          <span lang="ja" className="word-kanji">
            一歩
          </span>
          <span>One step at a time.</span>
        </div>
      </section>
      <div className="stats-row">
        <div className="stat-item">
          <span className="stat-icon">
            <Icon name="flame" />
          </span>
          <div>
            <strong>
              {stats.streak} <span>{stats.streak === 1 ? "day" : "days"}</span>
            </strong>
            <p>Current streak</p>
          </div>
        </div>
        <div className="stat-item">
          <span className="stat-icon">
            <Icon name="cards" />
          </span>
          <div>
            <strong>
              {learnedKanji} <span>kanji</span>
            </strong>
            <p>Marked as learned</p>
          </div>
        </div>
        <div className="stat-item goal-stat">
          <span className="stat-icon">
            <Icon name="target" />
          </span>
          <div>
            <strong>
              {stats.todayCount}
              <span> / {progress.goal} reviews</span>
            </strong>
            <p>Today’s goal</p>
            <ProgressBar
              value={(stats.todayCount / progress.goal) * 100}
              label="Today’s goal"
            />
          </div>
        </div>
      </div>
      <section className="practice-section">
        <div className="section-heading">
          <div>
            <h2>How would you like to practice?</h2>
            <p>A place for every part of your Japanese.</p>
          </div>
          <span className="quiet-label">AT YOUR OWN PACE</span>
        </div>
        <div className="practice-grid">
          {cards.map((card) => (
            <button
              key={card.page}
              className="practice-card"
              onClick={() => onNavigate(card.page)}
            >
              <span className="practice-symbol" lang="ja">
                {card.symbol}
              </span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="card-bottom">
                <span>{card.meta}</span>
                <Icon name="arrow" size={18} />
              </span>
            </button>
          ))}
        </div>
      </section>
      <div className="dashboard-bottom">
        <section className="panel learning-path">
          <div className="section-heading">
            <div>
              <h2>Your learning path</h2>
              <p>Start anywhere. Grow at your own pace.</p>
            </div>
            <Icon name="book" />
          </div>
          <div className="level-path" aria-label="Choose your study level">
            {LEVELS.map((item) => (
              <button
                className={item === level ? "selected" : ""}
                key={item}
                onClick={() => onLevelChange(item)}
                aria-pressed={item === level}
              >
                <strong>{item}</strong>
                <span>
                  {item === "N5"
                    ? "Beginner"
                    : item === "N4"
                      ? "Elementary"
                      : item === "N3"
                        ? "Intermediate"
                        : item === "N2"
                          ? "Upper int."
                          : "Advanced"}
                </span>
              </button>
            ))}
          </div>
          <h3>
            {level} · {LEVEL_DETAILS[level].title}
          </h3>
          <ul className="focus-list">
            {LEVEL_DETAILS[level].focus.map((item) => (
              <li key={item}>
                <span className="small-dot" />
                {item}
              </li>
            ))}
          </ul>
          <a
            className="text-link"
            href="#reading"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("reading");
            }}
          >
            Explore {level} reading <Icon name="arrow" size={16} />
          </a>
        </section>
        <section className="panel builder-preview">
          <p className="eyebrow">LEARN THE BUILDING BLOCKS</p>
          <div className="mini-equation" lang="ja">
            <span>亻</span>
            <small>+</small>
            <span>木</span>
            <small>=</small>
            <span className="result">休</span>
          </div>
          <h3>See the parts. Remember the whole.</h3>
          <p>{BUILDER_COURSES[level].description}</p>
          <button
            className="button secondary"
            onClick={() => onNavigate("builder")}
          >
            Try a kanji challenge <Icon name="arrow" size={16} />
          </button>
        </section>
      </div>
      <p className="curriculum-note">
        Curated practice from N5 to N1. Level groupings are study guides, not
        official JLPT content lists.{" "}
        <a
          href="https://www.jlpt.jp/e/about/levelsummary.html"
          target="_blank"
          rel="noreferrer"
        >
          About the levels <span aria-hidden="true">↗</span>
        </a>
      </p>
    </>
  );
}
