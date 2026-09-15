import { useState } from "react";
import { KANJI, shuffle, type Level } from "../data/curriculum";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  Icon,
  PageHeading,
  ProgressBar,
  SessionComplete,
  SpeakButton,
} from "./StudyUI";

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
  const card = deck[index];

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
  }
  function rate(known: boolean) {
    if (!revealed || !card) return;
    onRecord("kanji", card.id, level, known);
    setCorrect((count) => count + (known ? 1 : 0));
    setIndex((value) => value + 1);
    setRevealed(false);
  }

  return (
    <>
      <PageHeading
        eyebrow={`${level} · RECOGNITION & RECALL`}
        title="Kanji flashcards"
        description="Take a moment to remember. Then turn the card to check."
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
              {revealed ? "Meaning & readings" : "What does this kanji mean?"}
            </span>
          </div>
          <ProgressBar
            value={(index / deck.length) * 100}
            label="Flashcard session"
          />
          <section className={`panel flashcard ${revealed ? "revealed" : ""}`}>
            <div className="flashcard-top">
              <span className="badge">{level}</span>
              <SpeakButton text={card.reading} />
            </div>
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
            {revealed ? (
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
            an example word.
          </p>
        </div>
      )}
    </>
  );
}
