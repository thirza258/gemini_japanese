import { useState } from "react";
import { PARTICLES, shuffle, type Level } from "../data/curriculum";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  SessionComplete,
  SpeakButton,
} from "./StudyUI";

export function ParticlePractice({
  level,
  onRecord,
}: {
  level: Level;
  onRecord: RecordAnswer;
}) {
  const [questions, setQuestions] = useState(() =>
    PARTICLES.filter((item) => item.level === level),
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState(false);
  const [correct, setCorrect] = useState(0);
  const question = questions[index];
  function check() {
    if (checked || !selected || !question) return;
    setChecked(true);
    const right = selected === question.answer;
    setCorrect((value) => value + (right ? 1 : 0));
    onRecord("particles", question.id, level, right);
  }
  function next() {
    setIndex((value) => value + 1);
    setSelected("");
    setChecked(false);
  }
  function reset() {
    setQuestions(shuffle(PARTICLES.filter((item) => item.level === level)));
    setIndex(0);
    setSelected("");
    setChecked(false);
    setCorrect(0);
  }
  return (
    <>
      <PageHeading
        eyebrow={`${level} · UNDERSTAND THE CONNECTIONS`}
        title="Particles & grammar"
        description="Choose the missing particle or expression. Learn the reason behind each answer."
      />
      {!question ? (
        <SessionComplete
          correct={correct}
          total={questions.length}
          onRestart={reset}
        />
      ) : (
        <div className="practice-workspace">
          <div className="session-meta">
            <span>
              Question <strong>{index + 1}</strong> of {questions.length}
            </span>
            <span>{correct} correct</span>
          </div>
          <ProgressBar
            value={(index / questions.length) * 100}
            label="Grammar session"
          />
          <section className="panel question-panel">
            <span className="badge">{level} · Fill the gap</span>
            <h2 className="japanese-sentence" lang="ja">
              {question.sentence.split("＿")[0]}
              <span
                className={`sentence-gap ${checked ? (selected === question.answer ? "right" : "wrong") : ""}`}
              >
                {selected || "？"}
              </span>
              {question.sentence.split("＿")[1]}
            </h2>
            <p className="sentence-translation">{question.translation}</p>
            <div className="answer-options">
              {question.options.map((option, i) => (
                <button
                  key={option}
                  disabled={checked}
                  onClick={() => setSelected(option)}
                  aria-pressed={selected === option}
                  className={`answer-option ${selected === option ? "selected" : ""} ${checked && option === question.answer ? "right" : ""} ${checked && selected === option && option !== question.answer ? "wrong" : ""}`}
                >
                  <span className="option-number">{i + 1}</span>
                  <span lang="ja">{option}</span>
                  {checked && option === question.answer && (
                    <Icon name="check" size={18} />
                  )}
                </button>
              ))}
            </div>
            {checked && (
              <>
                <AnswerFeedback
                  correct={selected === question.answer}
                  answer={question.answer}
                  explanation={question.explanation}
                />
                <div className="grammar-point">
                  <span>{question.point}</span>
                  <SpeakButton
                    text={question.sentence.replace("＿", question.answer)}
                    label="Listen to the completed sentence"
                  />
                </div>
              </>
            )}
            <div className="question-footer">
              <span className="helper-text">
                {checked
                  ? "Understanding why is part of learning."
                  : "Choose the answer that fits the English meaning."}
              </span>
              <button
                className="button primary"
                disabled={!selected}
                onClick={checked ? next : check}
              >
                {checked
                  ? index === questions.length - 1
                    ? "See results"
                    : "Next question"
                  : "Check answer"}
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
