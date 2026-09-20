import { useState, type RefObject } from "react";
import {
  KANJI,
  LEVELS,
  LEVEL_DETAILS,
  type Level,
  type Page,
} from "../data/curriculum";
import { KANJI_CHALLENGES } from "../data/kanjiBuilder";
import { AccountButton, Icon } from "./StudyUI";
import { SakuraBackground } from "./SakuraBackground";

interface LandingPageProps {
  mainRef: RefObject<HTMLElement>;
  theme: "light" | "dark";
  onToggleTheme: () => void;
  level: Level;
  onLevelChange: (level: Level) => void;
  onGetStarted: (page: Page) => void;
  accountEmail?: string;
  checkingAccount: boolean;
  onOpenAccount: () => void;
}

const practiceOptions: {
  page: Page;
  symbol: string;
  title: string;
  description: string;
  label: string;
}[] = [
  {
    page: "courses",
    symbol: "道",
    title: "Follow a course, use a sentence",
    description:
      "Explore N5–N1 courses with everyday sentences, grammar, reading, listening, and review checkpoints.",
    label: "JLPT courses & sentences",
  },
  {
    page: "kanji",
    symbol: "漢",
    title: "Make kanji familiar",
    description:
      "Build your recall with flashcards, clear readings, and words you can put to use.",
    label: "Kanji flashcards",
  },
  {
    page: "builder",
    symbol: "組",
    title: "See how it fits together",
    description:
      "Turn complex characters into familiar pieces with hands-on kanji challenges.",
    label: "Kanji builder",
  },
  {
    page: "particles",
    symbol: "は",
    title: "Find the missing piece",
    description:
      "Practice particles and grammar, with an explanation behind every answer.",
    label: "Particles & grammar",
  },
  {
    page: "kana",
    symbol: "あ",
    title: "Start with the sounds",
    description:
      "Build kana memory with flashcards, unlimited repeat practice, study charts, and reading quizzes.",
    label: "Hiragana & katakana",
  },
  {
    page: "reading",
    symbol: "読",
    title: "Read a little further",
    description:
      "Explore short passages with optional furigana, vocabulary, and understanding checks.",
    label: "Reading room",
  },
  {
    page: "translator",
    symbol: "訳",
    title: "Understand every part",
    description:
      "Explore a sentence through its translation, romaji, and character-by-character readings.",
    label: "Detailed translator",
  },
];
const previewLessons = KANJI_CHALLENGES.filter((item) =>
  ["休", "明", "林"].includes(item.kanji),
);

function scrollToSection(id: string) {
  const section = document.getElementById(id);
  section?.focus({ preventScroll: true });
  section?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function scrollToTop() {
  document.getElementById("landing-home")?.focus({ preventScroll: true });
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

export function LandingPage({
  mainRef,
  theme,
  onToggleTheme,
  level,
  onLevelChange,
  onGetStarted,
  accountEmail,
  checkingAccount,
  onOpenAccount,
}: LandingPageProps) {
  const [previewIndex, setPreviewIndex] = useState(0);
  const [sakuraPaused, setSakuraPaused] = useState(false);
  const preview = previewLessons[previewIndex];
  return (
    <div className="landing-page">
      <SakuraBackground paused={sakuraPaused} />
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          mainRef.current?.focus();
          mainRef.current?.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <header className="landing-header">
        <div className="landing-container landing-header-inner">
          <a
            id="landing-home"
            className="brand"
            href="#landing"
            aria-label="Gemini Japanese home"
          >
            <span className="brand-mark">
              <Icon name="flower" size={25} />
            </span>
            <span>
              <strong>Gemini</strong>
              <small>JAPANESE</small>
            </span>
          </a>
          <nav className="landing-nav" aria-label="Landing page navigation">
            <a
              href="#ways-to-learn"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("ways-to-learn");
              }}
            >
              Ways to learn
            </a>
            <a
              href="#learning-levels"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("learning-levels");
              }}
            >
              Find your level
            </a>
          </nav>
          <div className="landing-header-actions">
            <AccountButton
              email={accountEmail}
              checking={checkingAccount}
              onClick={onOpenAccount}
            />
            <button
              className="icon-button sakura-motion-toggle"
              onClick={() => setSakuraPaused((paused) => !paused)}
              aria-label={`${sakuraPaused ? "Resume" : "Pause"} sakura animation`}
              title={`${sakuraPaused ? "Resume" : "Pause"} sakura animation`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {sakuraPaused ? (
                  <path d="m8 5 11 7-11 7Z" />
                ) : (
                  <>
                    <rect x="6" y="5" width="4" height="14" rx="1" />
                    <rect x="14" y="5" width="4" height="14" rx="1" />
                  </>
                )}
              </svg>
            </button>
            <button
              className="icon-button theme-button"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
            </button>
            <button
              className="button primary"
              onClick={() => onGetStarted("dashboard")}
            >
              Get started <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </header>
      <main
        id="main-content"
        className="landing-main"
        ref={mainRef}
        tabIndex={-1}
      >
        <section
          className="landing-container landing-hero"
          aria-labelledby="landing-title"
        >
          <div className="landing-hero-copy">
            <p className="eyebrow">A LITTLE PRACTICE. A LITTLE PROGRESS.</p>
            <h1 id="landing-title">
              Learn Japanese,
              <br />
              <span>one step at a time.</span>
            </h1>
            <p className="landing-intro">
              From your first hiragana to the finer details of kanji. Build a
              study habit with thoughtful practice, clear explanations, and a
              little room to grow.
            </p>
            <div className="landing-hero-actions">
              <button
                className="button primary"
                onClick={() => onGetStarted("courses")}
              >
                Get started <Icon name="arrow" size={18} />
              </button>
              <a
                className="landing-secondary-link"
                href="#ways-to-learn"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("ways-to-learn");
                }}
              >
                Explore the learning tools <Icon name="chevron" size={15} />
              </a>
            </div>
            <p className="landing-reassurance">
              <Icon name="check" size={15} /> No account needed. Start at your
              own pace.
            </p>
          </div>
          <div className="landing-preview">
            <div className="landing-preview-heading">
              <span className="eyebrow">KANJI, PIECE BY PIECE</span>
              <span className="badge">A little preview</span>
            </div>
            <div className="landing-preview-parts" lang="ja">
              <span>{preview.parts[0]}</span>
              <small>+</small>
              <span>{preview.parts[1]}</span>
            </div>
            <div className="landing-preview-rule">
              <span />
              <Icon name="arrow" size={16} />
              <span />
            </div>
            <div
              className="landing-preview-answer"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="landing-preview-kanji" lang="ja">
                {preview.kanji}
              </span>
              <span className="landing-preview-reading" lang="ja">
                {preview.wordReading}
              </span>
              <h2>{preview.meaning}</h2>
              <p>{preview.memory}</p>
            </div>
            <div className="landing-preview-footer">
              <span>Try another kanji</span>
              <div aria-label="Preview a kanji lesson">
                {previewLessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    className={index === previewIndex ? "active" : ""}
                    aria-label={`Preview ${lesson.kanji}: ${lesson.meaning}`}
                    aria-pressed={index === previewIndex}
                    onClick={() => setPreviewIndex(index)}
                    lang="ja"
                  >
                    {lesson.kanji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div
          className="landing-container landing-facts"
          aria-label="Included practice collections"
        >
          <div>
            <strong>{LEVELS.length}</strong>
            <span>levels, from N5 to N1</span>
          </div>
          <div>
            <strong>{KANJI.length}</strong>
            <span>kanji flashcards to explore</span>
          </div>
          <div>
            <strong>{KANJI_CHALLENGES.length}</strong>
            <span>kanji-building challenges</span>
          </div>
          <p>
            A place for your
            <br />
            <span lang="ja">毎日の練習</span> · daily practice.
          </p>
        </div>
        <section
          id="ways-to-learn"
          className="landing-container landing-tools"
          tabIndex={-1}
          aria-labelledby="landing-tools-title"
        >
          <div className="landing-section-heading">
            <div>
              <p className="eyebrow">FIND YOUR WAY INTO JAPANESE</p>
              <h2 id="landing-tools-title">
                A space for every part of learning.
              </h2>
            </div>
            <p>
              Mix a little reading, a little recall, and a little curiosity.
              <br />
              Choose what you want to work on today.
            </p>
          </div>
          <div className="landing-tools-grid">
            {practiceOptions.map((option) => (
              <button
                key={option.page}
                className="landing-tool"
                onClick={() => onGetStarted(option.page)}
                aria-label={`Start ${option.label}`}
              >
                <span className="landing-tool-symbol" lang="ja">
                  {option.symbol}
                </span>
                <span className="landing-tool-category">{option.label}</span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <span className="landing-tool-action">
                  Explore <Icon name="arrow" size={16} />
                </span>
              </button>
            ))}
          </div>
        </section>
        <section
          id="learning-levels"
          className="landing-level-section"
          tabIndex={-1}
          aria-labelledby="landing-level-title"
        >
          <div className="landing-container landing-level-content">
            <div className="landing-level-intro">
              <p className="eyebrow">YOUR JOURNEY, YOUR STARTING POINT</p>
              <h2 id="landing-level-title">
                Start where you are.
                <br />
                Go a little further.
              </h2>
              <p>
                New to Japanese or ready for more nuance? Pick a level that
                feels right. You can change it whenever you like.
              </p>
              <a
                className="text-link"
                href="#kana"
                onClick={(event) => {
                  event.preventDefault();
                  onGetStarted("kana");
                }}
              >
                Starting from zero? Begin with kana{" "}
                <Icon name="arrow" size={16} />
              </a>
            </div>
            <div className="landing-level-picker">
              <div
                className="landing-level-tabs"
                aria-label="Choose a starting JLPT level"
              >
                {LEVELS.map((item) => (
                  <button
                    key={item}
                    className={level === item ? "active" : ""}
                    aria-pressed={level === item}
                    onClick={() => onLevelChange(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <div className="landing-level-detail" aria-live="polite">
                <p className="eyebrow">JLPT {level}</p>
                <h3>{LEVEL_DETAILS[level].title}</h3>
                <p>{LEVEL_DETAILS[level].description}</p>
                <ul>
                  {LEVEL_DETAILS[level].focus.map((focus) => (
                    <li key={focus}>
                      <Icon name="check" size={15} />
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="button primary"
                onClick={() => onGetStarted("dashboard")}
              >
                Start at {level} <Icon name="arrow" size={17} />
              </button>
            </div>
          </div>
        </section>
        <section className="landing-container landing-final-cta">
          <p className="eyebrow" lang="ja">
            一歩ずつ。
          </p>
          <h2>Your next step can be a small one.</h2>
          <p>
            A character you recognize. A sentence you understand.
            <br />A little more Japanese than yesterday.
          </p>
          <button
            className="button primary"
            onClick={() => onGetStarted("dashboard")}
          >
            Let’s get started <Icon name="arrow" size={18} />
          </button>
        </section>
      </main>
      <footer className="landing-footer" aria-label="Site footer">
        <div className="landing-container">
          <div className="landing-footer-main">
            <div className="landing-footer-about">
              <a
                className="brand landing-footer-brand"
                href="#landing"
                aria-label="Gemini Japanese home"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToTop();
                }}
              >
                <span className="brand-mark">
                  <Icon name="flower" size={25} />
                </span>
                <span>
                  <strong>Gemini</strong>
                  <small>JAPANESE</small>
                </span>
              </a>
              <p>
                Learn Japanese one step at a time, with thoughtful practice for
                every stage of your journey.
              </p>
              <div className="landing-footer-note">
                <span lang="ja">毎日、少しずつ。</span>
                <span>A little, every day.</span>
              </div>
            </div>
            {[
              { title: "Learn", options: practiceOptions.slice(0, 3) },
              { title: "Practice", options: practiceOptions.slice(3) },
            ].map((group) => (
              <nav
                className="landing-footer-links"
                key={group.title}
                aria-label={`Footer ${group.title.toLowerCase()}`}
              >
                <h2>{group.title}</h2>
                <ul>
                  {group.options.map((option) => (
                    <li key={option.page}>
                      <a href={`#${option.page}`}>{option.label}</a>
                    </li>
                  ))}
                  <li>
                    {group.title === "Learn" ? (
                      <a href="#dashboard">Study dashboard</a>
                    ) : (
                      <a href="#progress">Your progress</a>
                    )}
                  </li>
                </ul>
              </nav>
            ))}
            <nav
              className="landing-footer-links landing-footer-levels"
              aria-label="Footer JLPT levels"
            >
              <h2>Find your level</h2>
              <ul>
                {LEVELS.map((item) => (
                  <li key={item}>
                    <a
                      href="#courses"
                      onClick={(event) => {
                        event.preventDefault();
                        onLevelChange(item);
                        onGetStarted("courses");
                      }}
                    >
                      <span className="landing-footer-level">{item}</span>
                      <span>{LEVEL_DETAILS[item].title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="landing-footer-bottom">
            <p>
              © {new Date().getFullYear()} Gemini Japanese. All rights reserved.
            </p>
            <a
              className="landing-back-to-top"
              href="#landing"
              onClick={(event) => {
                event.preventDefault();
                scrollToTop();
              }}
            >
              Back to top <Icon name="arrow" size={15} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
