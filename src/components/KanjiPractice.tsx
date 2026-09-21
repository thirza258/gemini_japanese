import { useEffect, useRef, useState } from "react";
import { KANJI, shuffle, type Level } from "../data/curriculum";
import { acceptedKanjiReadings, matchesReading } from "../data/readingInput";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  SessionComplete,
  SpeakButton,
} from "./StudyUI";

type AnswerMode = "type" | "self";

export function KanjiPractice({
  level,
  learned,
  onRecord,
}: {
  level: Level;
  learned: string[];
  onRecord: RecordAnswer;
}) {
  const available = KANJI.filter((card) => card.level === level);
  const [deck, setDeck] = useState(available);
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [reviewOnly, setReviewOnly] = useState(false);
  const [shuffled, setShuffled] = useState(false);
  const [answerMode, setAnswerMode] = useState<AnswerMode>("type");
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState<boolean | null>(null);
  const input = useRef<HTMLInputElement>(null);
  const graded = useRef(false);
  const card = deck[index];
  // The example word is the prompt, unless the card's word is the kanji itself.
  const promptsWithWord = card && card.word !== card.character;

  useEffect(() => {
    if (answerMode === "type" && result === null) input.current?.focus();
  }, [answerMode, index, result]);

  function reset(review = reviewOnly, random = shuffled) {
    const cards = available.filter(
      (item) => !review || !learned.includes(item.id),
    );
    setDeck(random ? shuffle(cards) : cards);
    setIndex(0);
    setRevealed(false);
    setCorrect(0);
    setReviewOnly(review);
    setShuffled(random);
    setAnswer("");
    setResult(null);
    graded.current = false;
  }
  function record(known: boolean) {
    if (graded.current) return;
    graded.current = true;
    onRecord("kanji", card.id, level, known);
    setCorrect((count) => count + (known ? 1 : 0));
  }
  function next() {
    setIndex((value) => value + 1);
    setRevealed(false);
    setAnswer("");
    setResult(null);
    graded.current = false;
  }
  function check(event: React.FormEvent) {
    event.preventDefault();
    if (!card || result !== null || !answer.trim()) return;
    const known = acceptedKanjiReadings(card).some((reading) =>
      matchesReading(reading, answer),
    );
    setResult(known);
    setRevealed(true);
    record(known);
  }
  function giveUp() {
    if (!card || result !== null) return;
    setResult(false);
    setRevealed(true);
    record(false);
  }
  function rate(known: boolean) {
    if (!revealed || !card) return;
    record(known);
    next();
  }
  function switchMode(mode: AnswerMode) {
    setAnswerMode(mode);
    setRevealed(false);
    setAnswer("");
    setResult(null);
    graded.current = false;
  }

  return (
    <>
      <PageHeading
        eyebrow={`${level} · RECOGNITION & RECALL`}
        title="Kanji flashcards"
        description="Recall the reading and type it in kana or romaji. Switch to self-check when you would rather practice meanings."
      />
      <div className="toolbar">
        <div className="segmented">
          <button
            className={!reviewOnly ? "active" : ""}
            aria-pressed={!reviewOnly}
            onClick={() => reset(false)}
          >
            All cards <span>{available.length}</span>
          </button>
          <button
            className={reviewOnly ? "active" : ""}
            aria-pressed={reviewOnly}
            onClick={() => reset(true)}
          >
            Still learning{" "}
            <span>
              {available.filter((item) => !learned.includes(item.id)).length}
            </span>
          </button>
        </div>
        <div className="segmented" aria-label="How to answer">
          <button
            className={answerMode === "type" ? "active" : ""}
            aria-pressed={answerMode === "type"}
            onClick={() => switchMode("type")}
          >
            Type the reading
          </button>
          <button
            className={answerMode === "self" ? "active" : ""}
            aria-pressed={answerMode === "self"}
            onClick={() => switchMode("self")}
          >
            Self-check
          </button>
        </div>
        <button
          className={`button subtle ${shuffled ? "is-selected" : ""}`}
          aria-pressed={shuffled}
          onClick={() => reset(reviewOnly, !shuffled)}
        >
          <Icon name="refresh" size={16} /> Shuffle
        </button>
      </div>
      {deck.length === 0 ? (
        <section className="panel completion">
          <h2>All caught up.</h2>
          <p>
            You have marked every {level} card as learned. Revisit the full deck
            to keep them fresh.
          </p>
          <button className="button primary" onClick={() => reset(false)}>
            Review all cards
          </button>
        </section>
      ) : !card ? (
        <SessionComplete
          correct={correct}
          total={deck.length}
          onRestart={() => reset()}
        />
      ) : (
        <div className="practice-workspace">
          <div className="session-meta">
            <span>
              Card <strong>{index + 1}</strong> of {deck.length}
            </span>
            <span>
              {level} ·{" "}
              {revealed
                ? "Meaning & readings"
                : answerMode === "type"
                  ? promptsWithWord
                    ? "How is this word read?"
                    : "How is this kanji read?"
                  : "What does this kanji mean?"}
            </span>
          </div>
          <ProgressBar
            value={(index / deck.length) * 100}
            label="Flashcard session"
          />
          <section className={`panel flashcard ${revealed ? "revealed" : ""}`}>
            <div className="flashcard-top">
              <span className="badge">{level}</span>
              {/* Hearing the reading would give a typed answer away. */}
              {(answerMode === "self" || result !== null) && (
                <SpeakButton text={card.reading} />
              )}
            </div>
            {answerMode === "type" ? (
              <form className="reading-prompt" onSubmit={check}>
                <span className="large-kanji" lang="ja">
                  {card.character}
                </span>
                {promptsWithWord && (
                  <span className="reading-prompt-word" lang="ja">
                    {card.word}
                  </span>
                )}
                <label className="reading-answer-label" htmlFor="kanji-answer">
                  {promptsWithWord
                    ? "Type the reading in hiragana, katakana, or romaji"
                    : "Type any reading of this kanji, in kana or romaji"}
                </label>
                <input
                  ref={input}
                  id="kanji-answer"
                  className="reading-input"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  value={answer}
                  onChange={(event) => setAnswer(event.target.value)}
                  placeholder="かな or romaji"
                  disabled={result !== null}
                />
                {result === null && (
                  <div className="flashcard-actions">
                    <button
                      type="button"
                      className="button secondary"
                      onClick={giveUp}
                    >
                      Show answer
                    </button>
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
            ) : (
              <button
                className="flashcard-face"
                onClick={() => setRevealed((value) => !value)}
                aria-label={
                  revealed
                    ? "Hide meaning and readings"
                    : "Reveal meaning and readings"
                }
                aria-expanded={revealed}
              >
                <span className="large-kanji" lang="ja">
                  {card.character}
                </span>
                {revealed ? (
                  <>
                    <h2>{card.meaning}</h2>
                    <span className="quiet-label">TAP TO HIDE ANSWER</span>
                  </>
                ) : (
                  <span className="flip-prompt">
                    <Icon name="refresh" size={16} /> Tap to reveal
                  </span>
                )}
              </button>
            )}
            {result !== null && (
              <AnswerFeedback
                correct={result}
                answer={card.reading}
                explanation={`${card.word} is read ${card.reading} and means “${card.translation}.” On its own, ${card.character} means ${card.meaning}${promptsWithWord ? "" : `, and also takes the reading ${card.onyomi}`}. A kanji takes other readings in other words, so learn the word as a whole.`}
              />
            )}
            {revealed && (
              <div className="flashcard-answer">
                <div className="reading-pair">
                  <div>
                    <span className="field-label">
                      ON’YOMI · CHINESE-DERIVED
                    </span>
                    <p lang="ja">{card.onyomi}</p>
                  </div>
                  <div>
                    <span className="field-label">KUN’YOMI · JAPANESE</span>
                    <p lang="ja">{card.kunyomi}</p>
                  </div>
                </div>
                <div className="example-word">
                  <div>
                    <span className="field-label">IN A WORD</span>
                    <p lang="ja">
                      <ruby>
                        {card.word}
                        <rt>{card.reading}</rt>
                      </ruby>
                    </p>
                    <span>{card.translation}</span>
                  </div>
                  <SpeakButton
                    text={card.word}
                    label="Listen to example word"
                  />
                </div>
              </div>
            )}
          </section>
          <div className="flashcard-actions">
            {answerMode === "type" ? (
              result !== null && (
                <button className="button primary" onClick={next}>
                  Next card <Icon name="arrow" size={17} />
                </button>
              )
            ) : revealed ? (
              <>
                <button
                  className="button secondary"
                  onClick={() => rate(false)}
                >
                  <Icon name="refresh" size={17} /> Still learning
                </button>
                <button className="button primary" onClick={() => rate(true)}>
                  <Icon name="check" size={17} /> I knew this
                </button>
              </>
            ) : (
              <button
                className="button primary"
                onClick={() => setRevealed(true)}
              >
                Show answer <Icon name="arrow" size={17} />
              </button>
            )}
          </div>
          <p className="helper-text">
            Readings change with context. These are representative readings and
            an example word. Typing accepts kana or romaji, including si/shi and
            zi/ji spellings.
          </p>
        </div>
      )}
    </>
  );
}
