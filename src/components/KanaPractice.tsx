import { useEffect, useRef, useState } from "react";
import { KANA, shuffle, type Level } from "../data/curriculum";
import {
  answerKanaMemory,
  kanaChoices,
  makeKanaDeck,
  matchesKanaReading,
  startKanaMemory,
  type KanaGroupChoice,
  type KanaMemoryCard,
  type KanaMemorySession,
  type KanaScriptChoice,
} from "../data/kanaMemory";
import type { RecordAnswer } from "../hooks/useStudy";
import { stopJapaneseAudio } from "../utils/speech";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  SpeakButton,
} from "./StudyUI";
import "../kana.css";

type Mode = "chart" | "flashcards" | "memory" | "quiz";
type Direction = "reading" | "character";
type AnswerKind = "type" | "choose";
const MODES: { id: Mode; label: string }[] = [
  { id: "chart", label: "Study chart" },
  { id: "flashcards", label: "Flashcards" },
  { id: "memory", label: "Repeat practice" },
  { id: "quiz", label: "Quick quiz" },
];

export function KanaPractice({
  level,
  onRecord,
}: {
  level: Level;
  onRecord: RecordAnswer;
}) {
  const [script, setScript] = useState<KanaScriptChoice>("hiragana");
  const [group, setGroup] = useState<KanaGroupChoice>("basic");
  const [mode, setMode] = useState<Mode>("flashcards");
  const [direction, setDirection] = useState<Direction>("reading");
  const [round, setRound] = useState(0);
  const cards = makeKanaDeck(script, group);
  return (
    <>
      <PageHeading
        eyebrow="BEGINNER FOUNDATIONS · PRACTICE AT ANY LEVEL"
        title="Hiragana & katakana"
        description="See it, recall it, write it. Every round asks you to produce the answer rather than just rate yourself."
      />
      <div className="toolbar kana-toolbar">
        <div className="segmented">
          {(["hiragana", "katakana", "both"] as const).map((item) => (
            <button
              key={item}
              aria-pressed={script === item}
              className={script === item ? "active" : ""}
              onClick={() => setScript(item)}
            >
              {item === "hiragana"
                ? "あ Hiragana"
                : item === "katakana"
                  ? "ア Katakana"
                  : "Mix both"}
            </button>
          ))}
        </div>
        <div className="segmented kana-mode-tabs">
          {MODES.map((item) => (
            <button
              key={item.id}
              className={mode === item.id ? "active" : ""}
              aria-pressed={mode === item.id}
              onClick={() => setMode(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-row" aria-label="Kana group">
        {(["basic", "voiced", "combination", "all"] as const).map((item) => (
          <button
            key={item}
            className={`filter-chip ${group === item ? "active" : ""}`}
            aria-pressed={group === item}
            onClick={() => setGroup(item)}
          >
            {item === "basic"
              ? "Basic · 46"
              : item === "voiced"
                ? "Voiced · 25"
                : item === "combination"
                  ? "Combined sounds · 33"
                  : "All sounds · 104"}
          </button>
        ))}
      </div>
      {mode !== "chart" && (
        <section className="panel kana-practice-settings">
          <div>
            <strong>{cards.length} cards in this set</strong>
            <p>
              {mode === "quiz"
                ? "A fresh set of 10 questions. Retry or continue with repeat practice afterward."
                : mode === "flashcards"
                  ? "One pass through the deck. Type each answer, or reveal it when a card will not come."
                  : "No question limit. Missed cards return sooner; recalled cards return after more practice. Aim for three correct recalls of each card."}
            </p>
          </div>
          <div className="kana-direction">
            <span className="field-label">WHAT YOU PRACTICE</span>
            <div className="segmented" aria-label="Practice direction">
              <button
                className={direction === "reading" ? "active" : ""}
                aria-pressed={direction === "reading"}
                onClick={() => setDirection("reading")}
              >
                Read it <span>かな → romaji</span>
              </button>
              <button
                className={direction === "character" ? "active" : ""}
                aria-pressed={direction === "character"}
                onClick={() => setDirection("character")}
              >
                Write it <span>romaji → かな</span>
              </button>
            </div>
          </div>
        </section>
      )}
      {mode === "chart" ? (
        <KanaChart
          key={`${script}-${group}`}
          script={script}
          group={group}
          onPractice={() => setMode("memory")}
        />
      ) : (
        <KanaSession
          key={`${script}-${group}-${mode}-${direction}-${round}`}
          cards={cards}
          mode={mode}
          direction={direction}
          level={level}
          onRecord={onRecord}
          onRestart={() => setRound((value) => value + 1)}
          onRepeat={() => {
            setMode("memory");
            setRound((value) => value + 1);
          }}
        />
      )}
      <p className="curriculum-note">
        Start with the basic set, then add voiced and combined sounds. As
        particles, は sounds like “wa,” へ like “e,” and を like “o.” These
        character drills use the chart readings and accept common romanization
        variants.
      </p>
    </>
  );
}

function KanaChart({
  script,
  group,
  onPractice,
}: {
  script: KanaScriptChoice;
  group: KanaGroupChoice;
  onPractice: () => void;
}) {
  const entries = KANA.filter(
    (item) => group === "all" || item.group === group,
  );
  const [selected, setSelected] = useState(entries[0]);
  const displayScript = script === "both" ? "hiragana" : script;
  return (
    <div className="kana-layout">
      <section className="panel kana-chart">
        <div className="section-heading">
          <h2>
            {script === "both"
              ? "Both scripts"
              : script === "hiragana"
                ? "ひらがな"
                : "カタカナ"}
          </h2>
          <span className="helper-text">Select a character to explore</span>
        </div>
        <div
          className={`kana-grid ${group === "combination" || script === "both" ? "combinations" : ""}`}
        >
          {entries.map((item) => (
            <button
              className={`kana-cell ${selected.id === item.id ? "selected" : ""}`}
              key={item.id}
              style={
                group === "basic" && script !== "both"
                  ? {
                      gridColumn: (
                        { や: 1, ゆ: 3, よ: 5, わ: 1, を: 5, ん: 1 } as Record<
                          string,
                          number
                        >
                      )[item.hiragana],
                    }
                  : undefined
              }
              onClick={() => setSelected(item)}
              aria-label={`${item[displayScript]}, ${item.romaji}`}
              aria-pressed={selected.id === item.id}
            >
              <span lang="ja">
                {item[displayScript]}
                {script === "both" && <small>{item.katakana}</small>}
              </span>
              <small>{item.romaji}</small>
            </button>
          ))}
        </div>
      </section>
      <aside className="panel kana-detail">
        <span className="badge">
          {script === "both"
            ? "Hiragana & katakana"
            : script === "hiragana"
              ? "Hiragana"
              : "Katakana"}
        </span>
        <span className="large-kanji" lang="ja">
          {selected[displayScript]}
        </span>
        <h2>{selected.romaji}</h2>
        <SpeakButton text={selected[displayScript]} />
        <p>
          Hiragana writes Japanese words and grammatical endings. Katakana often
          writes loanwords, names, and emphasis.
        </p>
        <div className="paired-kana">
          <span>
            Matching {displayScript === "hiragana" ? "katakana" : "hiragana"}
          </span>
          <strong lang="ja">
            {selected[displayScript === "hiragana" ? "katakana" : "hiragana"]}
          </strong>
        </div>
        <p className="helper-text">
          ゛ adds voicing; ゜ changes h-row sounds to p. A small ゃ, ゅ, or ょ
          combines with an i-row character, as in きゃ (kya).
        </p>
        <button className="button primary" onClick={onPractice}>
          Start repeat practice <Icon name="arrow" size={17} />
        </button>
      </aside>
    </div>
  );
}

function KanaSession({
  cards,
  mode,
  direction,
  level,
  onRecord,
  onRestart,
  onRepeat,
}: {
  cards: KanaMemoryCard[];
  mode: Exclude<Mode, "chart">;
  direction: Direction;
  level: Level;
  onRecord: RecordAnswer;
  onRestart: () => void;
  onRepeat: () => void;
}) {
  const [memory, setMemory] = useState(() =>
    startKanaMemory(
      mode === "quiz" ? shuffle(cards).slice(0, 10) : shuffle(cards),
    ),
  );
  const [feedback, setFeedback] = useState<{
    correct: boolean;
    next: KanaMemorySession;
  } | null>(null);
  const [finished, setFinished] = useState(false);
  const [answerKind, setAnswerKind] = useState<AnswerKind>("type");
  const [answer, setAnswer] = useState("");
  const submitted = useRef(false);
  const input = useRef<HTMLInputElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);
  const card = memory.queue[0];
  const [choices, setChoices] = useState(() => kanaChoices(card));
  // Reading practice is always typed; writing the kana itself is optional.
  const typing = direction === "reading" || answerKind === "type";
  const stats = feedback?.next || memory;
  const mastered = Object.values(stats.streaks).filter(
    (streak) => streak >= 3,
  ).length;
  useEffect(() => () => stopJapaneseAudio(), []);
  useEffect(() => {
    if (feedback) nextButton.current?.focus();
    else if (typing) input.current?.focus();
  }, [feedback, typing]);

  function record(correct: boolean) {
    if (submitted.current) return;
    submitted.current = true;
    const next = answerKanaMemory(memory, correct);
    if (mode === "quiz") next.queue = [...memory.queue.slice(1), card];
    // Flashcards run once through the deck; repeat practice keeps cycling.
    if (mode === "flashcards") next.queue = memory.queue.slice(1);
    setFeedback({ correct, next });
    onRecord("kana", card.id, level, correct);
  }
  function next() {
    if (!feedback) return;
    stopJapaneseAudio();
    if (
      feedback.next.queue.length === 0 ||
      (mode === "quiz" && feedback.next.attempts >= 10)
    ) {
      setFinished(true);
      return;
    }
    setMemory(feedback.next);
    setChoices(kanaChoices(feedback.next.queue[0]));
    setFeedback(null);
    setAnswer("");
    submitted.current = false;
  }
  if (finished)
    return (
      <section className="panel completion">
        <span className="completion-icon">
          <Icon name="check" size={30} />
        </span>
        <p className="eyebrow">A LITTLE MORE FAMILIAR</p>
        <h2>
          {mode === "quiz" ? "Kana quiz complete" : "Practice round complete"}
        </h2>
        <p>
          {stats.correct} correct recalls in {stats.attempts} attempts.
        </p>
        {mode === "memory" && (
          <p>
            {mastered} of {cards.length} characters recalled correctly three
            times in a row.
          </p>
        )}
        <div className="kana-round-actions">
          <button className="button primary" onClick={onRepeat}>
            Keep guessing <Icon name="arrow" size={17} />
          </button>
          <button className="button secondary" onClick={onRestart}>
            <Icon name="refresh" size={17} /> New shuffled round
          </button>
        </div>
      </section>
    );

  return (
    <div className="practice-workspace kana-memory-workspace">
      <div className="session-meta">
        <span>
          {mode === "quiz"
            ? `Question ${Math.min(10, memory.attempts + 1)} of 10`
            : mode === "flashcards"
              ? `Card ${Math.min(cards.length, memory.attempts + 1)} of ${cards.length}`
              : `${stats.attempts} attempts · ${stats.correct} correct`}
        </span>
        <span>
          {mode === "memory"
            ? `${mastered}/${cards.length} recalled 3 times`
            : `${stats.correct} correct`}
        </span>
      </div>
      <ProgressBar
        value={
          mode === "quiz"
            ? stats.attempts * 10
            : mode === "flashcards"
              ? (stats.attempts / cards.length) * 100
              : (mastered / cards.length) * 100
        }
        label={mode === "memory" ? "Kana memory goal" : "Kana session progress"}
      />
      <section className="panel kana-memory-card">
        <span className="badge">
          {card.script === "hiragana" ? "Hiragana" : "Katakana"} ·{" "}
          {card.kana.group === "combination"
            ? "Combined sound"
            : card.kana.group === "voiced"
              ? "Voiced sound"
              : "Basic character"}
        </span>
        <p className="eyebrow">
          {direction === "reading"
            ? "HOW DO YOU READ THIS?"
            : `WHICH ${card.script.toUpperCase()} MATCHES THIS SOUND?`}
        </p>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (!answer.trim()) return;
            record(
              direction === "reading"
                ? matchesKanaReading(card.kana, answer)
                : answer.trim() === card.kana[card.script],
            );
          }}
        >
          <span
            className={
              direction === "reading" ? "large-kanji" : "kana-romaji-prompt"
            }
            lang={direction === "reading" ? "ja" : "en"}
          >
            {direction === "reading"
              ? card.kana[card.script]
              : card.kana.romaji}
          </span>
          {direction === "character" && !feedback && (
            <div className="segmented kana-answer-kind" aria-label="How to answer">
              {(["type", "choose"] as const).map((kind) => (
                <button
                  key={kind}
                  type="button"
                  className={answerKind === kind ? "active" : ""}
                  aria-pressed={answerKind === kind}
                  onClick={() => {
                    setAnswerKind(kind);
                    setAnswer("");
                  }}
                >
                  {kind === "type" ? "Write it" : "Choose it"}
                </button>
              ))}
            </div>
          )}
          {typing ? (
            <>
              <label htmlFor="kana-answer">
                {direction === "reading"
                  ? "Type the reading in romaji"
                  : `Type the ${card.script} character`}
              </label>
              <input
                ref={input}
                id="kana-answer"
                className="reading-input"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
                value={answer}
                onChange={(event) => setAnswer(event.target.value)}
                placeholder={direction === "reading" ? "romaji" : "かな"}
                disabled={Boolean(feedback)}
              />
              {direction === "character" && (
                <p className="helper-text">
                  Writing kana needs a Japanese keyboard. Switch to “Choose it”
                  if you do not have one set up.
                </p>
              )}
            </>
          ) : (
            <fieldset
              className="kana-choice-fieldset"
              disabled={Boolean(feedback)}
            >
              <legend className="sr-only">
                Choose the {card.script} character for {card.kana.romaji}
              </legend>
              <div className="kana-choice-grid">
                {choices.map((option) => (
                  <label
                    key={option}
                    className={`answer-option ${answer === option ? "selected" : ""} ${feedback && option === card.kana[card.script] ? "right" : ""} ${feedback && answer === option && !feedback.correct ? "wrong" : ""}`}
                  >
                    <input
                      type="radio"
                      name="kana-choice"
                      value={option}
                      checked={answer === option}
                      onChange={() => setAnswer(option)}
                    />
                    <span lang="ja">{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          )}
          {!feedback && (
            <div className="kana-round-actions">
              {mode === "flashcards" && (
                <button
                  type="button"
                  className="button secondary"
                  onClick={() => record(false)}
                >
                  Show answer
                </button>
              )}
              <button
                type="submit"
                className="button primary"
                disabled={!answer.trim()}
              >
                Check answer <Icon name="check" size={17} />
              </button>
            </div>
          )}
        </form>
        {feedback && (
          <>
            <AnswerFeedback
              correct={feedback.correct}
              answer={
                direction === "reading"
                  ? card.kana.romaji
                  : card.kana[card.script]
              }
              explanation={`${card.kana.hiragana} / ${card.kana.katakana} = ${card.kana.romaji}.${card.kana.aliases.length ? ` Also accepted in reading practice: ${card.kana.aliases.join(", ")}.` : ""} ${mode === "quiz" ? "Say it aloud before the next question." : feedback.correct ? "You will see this again after other cards." : "This card will return after a few other cards. Try recalling it again."}`}
            />
            <div className="flashcard-actions">
              <SpeakButton text={card.kana[card.script]} />
              <button
                ref={nextButton}
                className="button primary"
                onClick={next}
              >
                {mode === "quiz" && stats.attempts >= 10
                  ? "See results"
                  : "Next character"}
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </>
        )}
        {mode === "memory" && (
          <p className="helper-text">
            This card: {stats.streaks[card.id]} / 3 consecutive correct recalls.
            {mastered === cards.length
              ? " Goal reached! Keep practicing or finish whenever you like."
              : " A miss resets this card’s count."}
          </p>
        )}
      </section>
      {mode !== "quiz" && (
        <div className="kana-session-footer">
          <p>
            {mode === "flashcards"
              ? "Stop whenever you like; your answers are already saved."
              : "There is no limit. Take a break whenever you need one."}
          </p>
          <button
            className="button secondary"
            onClick={() => {
              stopJapaneseAudio();
              setFinished(true);
            }}
          >
            Finish this round
          </button>
        </div>
      )}
    </div>
  );
}
