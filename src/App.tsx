import { useEffect, useRef, useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { LandingPage } from "./components/LandingPage";
import { KanjiPractice } from "./components/KanjiPractice";
import { KanjiBuilder } from "./components/KanjiBuilder";
import { ParticlePractice } from "./components/ParticlePractice";
import { KanaPractice } from "./components/KanaPractice";
import { ReadingRoom } from "./components/ReadingRoom";
import { InteractiveTranslator } from "./components/InteractiveTranslator";
import { StudyProgress } from "./components/StudyProgress";
import { ApiKeyModal } from "./components/ApiKeyModal";
import { AccountButton, Icon, type IconName } from "./components/StudyUI";
import {
  LEVELS,
  LEVEL_DETAILS,
  type Level,
  type Page,
} from "./data/curriculum";
import { getStudyStats, useStudy } from "./hooks/useStudy";
import { stopJapaneseAudio } from "./utils/speech";
import { useAuth } from "./auth/useAuth";
import { AccountDialog } from "./components/AccountDialog";
import { SaveNotice } from "./components/SaveNotice";
import "./landing.css";
import "./auth.css";

const navigation: {
  page: Page;
  label: string;
  icon: IconName;
  glyph?: string;
}[] = [
  { page: "dashboard", label: "Overview", icon: "home" },
  { page: "kanji", label: "Kanji flashcards", icon: "cards" },
  { page: "builder", label: "Kanji builder", icon: "build" },
  { page: "particles", label: "Particles & grammar", icon: "grammar" },
  { page: "kana", label: "Hiragana & katakana", icon: "book", glyph: "あ" },
  { page: "reading", label: "Reading room", icon: "book" },
  { page: "translator", label: "Detailed translator", icon: "translate" },
  { page: "progress", label: "Your progress", icon: "chart" },
];
type AppPage = Page | "landing";

function readPage(): AppPage {
  const hash = window.location.hash.slice(1);
  return navigation.find((item) => item.page === hash)?.page || "landing";
}
function initialTheme(): "light" | "dark" {
  try {
    const saved = localStorage.getItem("sakura-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* Use the device preference. */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function App() {
  const account = useAuth();
  const accountScope = account.user?.id || "guest";
  const {
    progress,
    history,
    saveHistory,
    record,
    setLevel,
    setGoal,
    saveStatus,
    flush,
    retrySave,
  } = useStudy(account.user?.id || null);
  const [page, setPage] = useState(readPage);
  const [theme, setTheme] = useState(initialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const main = useRef<HTMLElement>(null);
  const stats = getStudyStats(progress);
  const activeLabel = navigation.find((item) => item.page === page)?.label;
  useEffect(() => () => stopJapaneseAudio(), [page]);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("sakura-theme", theme);
    } catch {
      /* Theme still applies without storage. */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#fbf9f8" : "#171717");
  }, [theme]);
  useEffect(() => {
    const onHashChange = () => {
      setPage(readPage());
      setMenuOpen(false);
      window.scrollTo({ top: 0 });
      main.current?.focus({ preventScroll: true });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  useEffect(() => {
    document.title = activeLabel
      ? `${activeLabel} · Gemini Japanese`
      : "Gemini Japanese · Learn a little, every day";
    main.current?.focus({ preventScroll: true });
  }, [activeLabel]);
  useEffect(() => {
    if (!menuOpen) return;
    const sidebar = document.getElementById("study-navigation");
    const focusable = sidebar?.querySelectorAll<HTMLElement>(
      "a[href], button, select",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Wait for the drawer to become visible before moving keyboard focus into it.
    const focusFrame = requestAnimationFrame(() => first?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.querySelector<HTMLButtonElement>(".mobile-menu-button")?.focus();
    };
  }, [menuOpen]);
  function navigate(next: AppPage) {
    if (next !== page) window.location.hash = next;
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }
  function openAccount() {
    setMenuOpen(false);
    setSettingsOpen(false);
    setAccountOpen(true);
  }
  const accountDialog = accountOpen ? (
    <AccountDialog
      account={account}
      saveStatus={saveStatus}
      onBeforeSignOut={flush}
      onClose={() => setAccountOpen(false)}
    />
  ) : null;
  if (page === "landing") {
    return (
      <>
        <LandingPage
          key={accountScope}
          mainRef={main}
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === "light" ? "dark" : "light"))
          }
          level={progress.level}
          onLevelChange={setLevel}
          onGetStarted={navigate}
          accountEmail={account.user?.email}
          checkingAccount={account.checking}
          onOpenAccount={openAccount}
        />
        {accountDialog}
      </>
    );
  }
  return (
    <>
      <div className="app-shell" key={accountScope}>
        <a
          className="skip-link"
          href="#main-content"
          onClick={(event) => {
            event.preventDefault();
            main.current?.focus();
            main.current?.scrollIntoView();
          }}
        >
          Skip to content
        </a>
        {menuOpen && (
          <button
            className="mobile-overlay"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <aside
          className={`sidebar ${menuOpen ? "open" : ""}`}
          id="study-navigation"
        >
          <a
            className="brand"
            href="#landing"
            aria-label="Gemini Japanese home"
            onClick={(event) => {
              event.preventDefault();
              navigate("landing");
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
          <div className="sidebar-section-label">YOUR WORKSPACE</div>
          <nav aria-label="Main navigation">
            {navigation.map((item, index) => (
              <a
                key={item.page}
                href={`#${item.page}`}
                aria-current={page === item.page ? "page" : undefined}
                className={`nav-link ${page === item.page ? "active" : ""} ${index === 6 ? "nav-separated" : ""}`}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.page);
                }}
              >
                {item.glyph ? (
                  <span className="nav-glyph" lang="ja">
                    {item.glyph}
                  </span>
                ) : (
                  <Icon name={item.icon} size={19} />
                )}
                <span>{item.label}</span>
                {item.page === "builder" && (
                  <span className="nav-new">NEW</span>
                )}
              </a>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <div className="sidebar-level">
              <div>
                <span className="field-label">CURRENT STUDY LEVEL</span>
                <span className="badge">{progress.level}</span>
              </div>
              <strong>{LEVEL_DETAILS[progress.level].title}</strong>
              <p>A little progress is still progress.</p>
              <label className="sr-only" htmlFor="sidebar-level">
                Study level
              </label>
              <select
                id="sidebar-level"
                value={progress.level}
                onChange={(event) => setLevel(event.target.value as Level)}
              >
                {LEVELS.map((level) => (
                  <option value={level} key={level}>
                    {level} · {LEVEL_DETAILS[level].title}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="sidebar-settings"
              onClick={() => {
                setSettingsOpen(true);
                setMenuOpen(false);
              }}
            >
              <Icon name="settings" size={18} /> Translator settings
            </button>
            <button className="sidebar-account" onClick={openAccount}>
              <Icon name="user" size={19} />
              <span>
                <strong>{account.user?.email || "Guest mode"}</strong>
                <small>
                  {account.user
                    ? "Manage your account"
                    : "Sign in to save progress"}
                </small>
              </span>
            </button>
            <span className="sidebar-footer">
              Made for your Japanese journey.
            </span>
          </div>
        </aside>
        <div className="main-shell">
          <header className="topbar">
            <div className="topbar-location">
              <button
                className="icon-button mobile-menu-button"
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="study-navigation"
                onClick={() => setMenuOpen((value) => !value)}
              >
                <Icon name="menu" />
              </button>
              <span className="topbar-parent">Workspace</span>
              <span className="breadcrumb-divider">/</span>
              <span>{activeLabel}</span>
            </div>
            <div className="topbar-actions">
              <AccountButton
                email={account.user?.email}
                checking={account.checking}
                onClick={openAccount}
              />
              <span className="header-streak">
                <Icon name="flame" size={17} />
                <strong>{stats.streak}</strong>
                <span>day streak</span>
              </span>
              <label className="sr-only" htmlFor="header-level">
                Current JLPT level
              </label>
              <select
                id="header-level"
                className="header-level"
                value={progress.level}
                onChange={(event) => setLevel(event.target.value as Level)}
              >
                {LEVELS.map((level) => (
                  <option key={level} value={level}>
                    JLPT {level}
                  </option>
                ))}
              </select>
              <span className="topbar-divider" />
              <button
                className="icon-button theme-button"
                onClick={() =>
                  setTheme((current) =>
                    current === "light" ? "dark" : "light",
                  )
                }
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <Icon name={theme === "light" ? "moon" : "sun"} size={19} />
              </button>
            </div>
          </header>
          <main
            id="main-content"
            className="main-content"
            ref={main}
            tabIndex={-1}
          >
            <SaveNotice
              status={saveStatus}
              onSignIn={openAccount}
              onRetry={retrySave}
            />
            {page === "dashboard" && (
              <Dashboard
                progress={progress}
                onNavigate={navigate}
                onLevelChange={setLevel}
              />
            )}
            {page === "kanji" && (
              <KanjiPractice
                key={`kanji-${progress.level}`}
                level={progress.level}
                learned={progress.learned}
                onRecord={record}
              />
            )}
            {page === "builder" && (
              <KanjiBuilder
                key={`builder-${progress.level}`}
                level={progress.level}
                learned={progress.learned}
                onLevelChange={setLevel}
                onRecord={record}
              />
            )}
            {page === "particles" && (
              <ParticlePractice
                key={`particles-${progress.level}`}
                level={progress.level}
                onRecord={record}
              />
            )}
            {page === "kana" && (
              <KanaPractice level={progress.level} onRecord={record} />
            )}
            {page === "reading" && (
              <ReadingRoom
                key={`reading-${progress.level}`}
                level={progress.level}
                learned={progress.learned}
                onRecord={record}
              />
            )}
            {page === "translator" && (
              <InteractiveTranslator
                history={history}
                onSaveHistory={saveHistory}
                signedIn={Boolean(account.user)}
                onOpenSettings={() => setSettingsOpen(true)}
              />
            )}
            {page === "progress" && (
              <StudyProgress
                signedIn={Boolean(account.user)}
                progress={progress}
                onGoalChange={setGoal}
                onNavigate={navigate}
              />
            )}
          </main>
          <footer className="app-footer">
            <span>
              <span lang="ja">一歩ずつ。</span> One step at a time.
            </span>
            <span>Gemini Japanese</span>
          </footer>
        </div>
        {settingsOpen && (
          <ApiKeyModal
            signedIn={Boolean(account.user)}
            onClose={() => setSettingsOpen(false)}
          />
        )}
      </div>
      {accountDialog}
    </>
  );
}
export default App;
