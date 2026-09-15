import { useState } from "react";
import {
  READINGS,
  plainJapanese,
  type Level,
  type ReadingPassage,
} from "../data/curriculum";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  RubyText,
  SpeakButton,
} from "./StudyUI";

export function ReadingRoom({
  level,
  learned,
  onRecord,
}: {
  level: Level;
  learned: string[];
  onRecord: RecordAnswer;
}) {
  const passages = READINGS.filter((item) => item.level === level);
  const [index, setIndex] = useState(0);
  const passage = passages[index];
  return (
    <>
      <PageHeading
        eyebrow={`${level} · READ FOR UNDERSTANDING`}
        title="The reading room"
        description="A few paragraphs. A new perspective. Take Japanese one sentence at a time."
      />
      <div className="reading-layout">
        <aside className="panel reading-list">
          <p className="eyebrow">{level} READING COLLECTION</p>
          {passages.map((item, i) => (
            <button
              className={i === index ? "selected" : ""}
              key={item.id}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            >
              <span className="reading-list-number">0{i + 1}</span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.category}</small>
              </span>
              {learned.includes(item.id) && <Icon name="check" size={16} />}
            </button>
          ))}
          <div className="reading-tip">
            <Icon name="book" size={19} />
            <p>
              Try reading once without the translation. Then turn on the helpers
              you need.
            </p>
          </div>
        </aside>
        <ReadingLesson
          key={passage.id}
          passage={passage}
          onRecord={onRecord}
          onNext={
            index < passages.length - 1
              ? () => setIndex((value) => value + 1)
              : undefined
          }
        />
      </div>
    </>
  );
}

function ReadingLesson({
  passage,
  onRecord,
  onNext,
}: {
  passage: ReadingPassage;
  onRecord: RecordAnswer;
  onNext?: () => void;
}) {
  const [furigana, setFurigana] = useState(
    ["N5", "N4"].includes(passage.level),
  );
  const [translation, setTranslation] = useState(false);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  function check() {
    if (!selected || checked) return;
    setChecked(true);
    onRecord("reading", passage.id, passage.level, selected === passage.answer);
  }
  return (
    <div className="reading-content">
      <article className="panel passage-panel">
        <div className="section-heading">
          <span className="badge">
            {passage.level} · {passage.category}
          </span>
          <SpeakButton
            text={plainJapanese(passage.text)}
            label="Listen to the passage"
          />
        </div>
        <h2>{passage.title}</h2>
        <div className="reading-toggles">
          <label>
            <input
              type="checkbox"
              checked={furigana}
              onChange={(event) => setFurigana(event.target.checked)}
            />{" "}
            Show furigana
          </label>
          <label>
            <input
              type="checkbox"
              checked={translation}
              onChange={(event) => setTranslation(event.target.checked)}
            />{" "}
            Show translation
          </label>
        </div>
        <p className="passage-text">
          <RubyText text={passage.text} show={furigana} />
        </p>
        {translation && (
          <div className="passage-translation">
            <p className="eyebrow">ENGLISH TRANSLATION</p>
            <p>{passage.translation}</p>
          </div>
        )}
        <details className="vocabulary-details">
          <summary>
            Vocabulary to know <span>{passage.vocabulary.length} words</span>
          </summary>
          <div className="vocabulary-list">
            {passage.vocabulary.map(([word, reading, meaning]) => (
              <div key={word}>
                <ruby lang="ja">
                  {word}
                  <rt>{reading}</rt>
                </ruby>
                <span>{meaning}</span>
                <SpeakButton text={word} label={`Listen to ${word}`} />
              </div>
            ))}
          </div>
        </details>
      </article>
      <section className="panel comprehension-panel">
        <p className="eyebrow">CHECK YOUR UNDERSTANDING</p>
        <h3>{passage.question}</h3>
        <div className="answer-options single-column">
          {passage.options.map((option, i) => (
            <button
              className={`answer-option ${selected === option ? "selected" : ""} ${checked && option === passage.answer ? "right" : ""} ${checked && selected === option && option !== passage.answer ? "wrong" : ""}`}
              key={option}
              disabled={checked}
              aria-pressed={selected === option}
              onClick={() => setSelected(option)}
            >
              <span className="option-number">
                {String.fromCharCode(65 + i)}
              </span>
              <span>{option}</span>
            </button>
          ))}
        </div>
        {checked && (
          <AnswerFeedback
            correct={selected === passage.answer}
            answer={passage.answer}
            explanation={passage.explanation}
          />
        )}
        <div className="question-footer">
          <span className="helper-text">
            {checked
              ? "Your reading progress has been recorded."
              : "Look for evidence in the passage."}
          </span>
          {checked ? (
            onNext ? (
              <button className="button primary" onClick={onNext}>
                Next passage <Icon name="arrow" size={17} />
              </button>
            ) : (
              <span className="badge">
                <Icon name="check" size={14} /> Last passage in this collection
              </span>
            )
          ) : (
            <button
              className="button primary"
              disabled={!selected}
              onClick={check}
            >
              Check answer <Icon name="arrow" size={17} />
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
