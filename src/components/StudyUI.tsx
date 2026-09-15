import { useState, type ReactNode } from "react";
import { playJapaneseAudio } from "../utils/speech";

export type IconName =
  | "home"
  | "user"
  | "cards"
  | "build"
  | "grammar"
  | "book"
  | "translate"
  | "chart"
  | "sun"
  | "moon"
  | "arrow"
  | "chevron"
  | "check"
  | "close"
  | "sound"
  | "refresh"
  | "settings"
  | "menu"
  | "flame"
  | "target"
  | "clock"
  | "flower";
const paths: Record<IconName, ReactNode> = {
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
    </>
  ),
  home: (
    <>
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
    </>
  ),
  cards: (
    <>
      <rect x="6" y="5" width="14" height="16" rx="2" />
      <path d="M15 2H5a2 2 0 0 0-2 2v12M10 11h6m-6 4h4" />
    </>
  ),
  build: (
    <>
      <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM17.5 14v7M14 17.5h7" />
    </>
  ),
  grammar: (
    <>
      <path d="M4 5h16M4 11h6m5 0h5M4 17h10" />
      <path d="M11 8h3v6h-3z" />
    </>
  ),
  book: (
    <>
      <path d="M12 5v16m0-16C9 3 6 3 3 4v15c3-1 6-1 9 2 3-3 6-3 9-2V4c-3-1-6-1-9 1Z" />
    </>
  ),
  translate: (
    <>
      <path d="M3 5h12M9 2v3m4 0c-1 6-4 9-9 11m1-8c1 3 4 6 7 7m1 6 5-12 5 12m-8-4h6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v17h17M8 15v-4m5 4V7m5 8V4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  moon: <path d="M20.5 14a8.6 8.6 0 0 1-10.5-10.5A9 9 0 1 0 20.5 14Z" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  chevron: <path d="m9 5 7 7-7 7" />,
  check: <path d="m5 12 4 4L19 6" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  sound: (
    <>
      <path d="m11 4-6 5H2v6h3l6 5Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M5.7 7a7.5 7.5 0 0 1 12-1L20 9M4 15l2.3 3a7.5 7.5 0 0 0 12-1" />
    </>
  ),
  settings: (
    <>
      <path d="m9 3-1 3-3 1-2 3 2 2-1 3 3 3 3-1 2 2 3-2 3 1 3-3-1-3 2-2-2-3-3-1-1-3Z" />
      <circle cx="12" cy="11" r="3" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  flame: (
    <path d="M12 3c1 6-5 5-3 10 2-1 3-3 3-5 4 3 7 6 5 10-2 4-9 4-11-1-2-5 2-8 6-14Z" />
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  flower: (
    <>
      <path d="M12 9C5-3 1 8 8 11c-12 2-6 12 1 6 0 12 12 8 7 1 11 4 12-8 3-7 8-7-3-13-7-2Z" />
      <circle cx="12.5" cy="12.5" r="2" />
    </>
  ),
};
export function Icon({
  name,
  size = 20,
  className = "",
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

export function AccountButton({
  email,
  checking,
  onClick,
}: {
  email?: string;
  checking?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="account-button"
      onClick={onClick}
      disabled={checking}
      aria-label={
        email ? `Your account: ${email}` : "Sign in to Gemini Japanese"
      }
      title={email || "Sign in"}
    >
      <Icon name="user" size={18} />
      <span>{checking ? "Connecting…" : email ? "Account" : "Sign in"}</span>
    </button>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {children}
    </div>
  );
}

export function ProgressBar({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className="progress-track"
      role="progressbar"
      aria-label={label}
      aria-valuenow={Math.round(Math.min(100, Math.max(0, value)))}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

export function SpeakButton({
  text,
  label = "Listen to pronunciation",
}: {
  text: string;
  label?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const available =
    typeof window !== "undefined" && "speechSynthesis" in window;
  return (
    <button
      className="icon-button"
      disabled={!available || playing}
      title={available ? label : "Audio is unavailable in this browser"}
      aria-label={available ? label : "Audio is unavailable in this browser"}
      onClick={async () => {
        setPlaying(true);
        try {
          await playJapaneseAudio(text);
        } finally {
          setPlaying(false);
        }
      }}
    >
      <Icon name="sound" />
    </button>
  );
}

export function RubyText({
  text,
  show = true,
}: {
  text: string;
  show?: boolean;
}) {
  return (
    <span lang="ja">
      {text.split(/(\{[^}]+\})/g).map((part, index) => {
        const match = part.match(/^\{([^|]+)\|([^}]+)\}$/);
        return match ? (
          <ruby key={index}>
            {match[1]}
            {show && <rt>{match[2]}</rt>}
          </ruby>
        ) : (
          part
        );
      })}
    </span>
  );
}

export function AnswerFeedback({
  correct,
  answer,
  explanation,
}: {
  correct: boolean;
  answer: string;
  explanation: string;
}) {
  return (
    <div
      className={`answer-feedback ${correct ? "correct" : "incorrect"}`}
      role="status"
    >
      <div className="feedback-title">
        <Icon name={correct ? "check" : "refresh"} size={18} />
        <strong>
          {correct
            ? "That’s right. よくできました！"
            : `Keep going. The answer is ${answer}.`}
        </strong>
      </div>
      <p>{explanation}</p>
    </div>
  );
}

export function SessionComplete({
  correct,
  total,
  onRestart,
  title = "Practice complete",
}: {
  correct: number;
  total: number;
  onRestart: () => void;
  title?: string;
}) {
  return (
    <section className="panel completion">
      <span className="completion-icon">
        <Icon name="check" size={30} />
      </span>
      <p className="eyebrow">ONE MORE STEP FORWARD</p>
      <h2>{title}</h2>
      <p>
        You got{" "}
        <strong>
          {correct} of {total}
        </strong>{" "}
        right. Your progress has been recorded.
      </p>
      <button className="button primary" onClick={onRestart}>
        <Icon name="refresh" size={17} /> Practice again
      </button>
    </section>
  );
}
