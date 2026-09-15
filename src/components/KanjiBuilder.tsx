import { useState } from "react";
import { LEVELS, shuffle, type Level } from "../data/curriculum";
import {
  BUILDER_COURSES,
  COMPONENTS,
  KANJI_CHALLENGES,
  getCourseChallenges,
  type KanjiChallenge,
} from "../data/kanjiBuilder";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  SessionComplete,
  SpeakButton,
} from "./StudyUI";

interface Props {
  level: Level;
  learned: string[];
  onLevelChange: (level: Level) => void;
  onRecord: RecordAnswer;
}
export function KanjiBuilder({
  level,
  learned,
  onLevelChange,
  onRecord,
}: Props) {
  const courses = BUILDER_COURSES.filter((item) => item.level === level);
  const [courseId, setCourseId] = useState(courses[0].id);
  const course = courses.find((item) => item.id === courseId) || courses[0];
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [score, setScore] = useState(0);
  const lessons = getCourseChallenges(course);
  const lesson = lessons[index];
  function start() {
    setStarted(true);
    setIndex(0);
    setStartIndex(0);
    setScore(0);
  }
  return (
    <>
      <PageHeading
        eyebrow="KANJI CHALLENGE COURSES"
        title="Build a kanji. Make it click."
        description="Learn the components, put them together, and see the character as a whole."
      />
      {!started ? (
        <>
          <section className="panel builder-intro">
            <div>
              <span className="badge">A different way to remember</span>
              <h2>Small parts. New meaning.</h2>
              <p>
                Some components are kanji you already know. Others are a special
                form, like 亻, the person component from 人. Learn to recognize
                both.
              </p>
            </div>
            <div className="intro-equation">
              <div className="mini-equation" lang="ja">
                <span>木</span>
                <small>+</small>
                <span>木</span>
                <small>=</small>
                <span className="result">林</span>
              </div>
              <p>tree + tree → grove</p>
            </div>
          </section>
          <div className="section-heading">
            <div>
              <h2>{BUILDER_COURSES.length} courses, one step at a time</h2>
              <p>Choose a level, then a course to explore its components.</p>
            </div>
            <span className="quiet-label">
              {KANJI_CHALLENGES.length} BUILDING CHALLENGES
            </span>
          </div>
          <div
            className="level-path"
            role="group"
            aria-label="Choose a course level"
          >
            {LEVELS.map((item) => (
              <button
                key={item}
                className={item === level ? "selected" : ""}
                aria-pressed={item === level}
                onClick={() => onLevelChange(item)}
              >
                <strong>{item}</strong>
                <span>
                  {
                    BUILDER_COURSES.filter((course) => course.level === item)
                      .length
                  }{" "}
                  courses
                </span>
              </button>
            ))}
          </div>
          <div
            className="course-selector"
            role="group"
            aria-label={`${level} courses`}
          >
            {courses.map((item, i) => (
              <button
                key={item.id}
                className={`course-option ${item.id === course.id ? "selected" : ""}`}
                aria-pressed={item.id === course.id}
                aria-controls="builder-course-detail"
                onClick={() => setCourseId(item.id)}
              >
                <span className="badge">
                  {level} · COURSE {i + 1}
                </span>
                <strong>{item.title}</strong>
                <span>
                  {
                    item.challengeIds.filter((id) => learned.includes(id))
                      .length
                  }
                  {" / "}
                  {item.challengeIds.length} learned
                </span>
              </button>
            ))}
          </div>
          <section className="panel course-detail" id="builder-course-detail">
            <div className="course-description">
              <p className="eyebrow">
                COURSE {courses.indexOf(course) + 1} OF {courses.length} ·{" "}
                {level}
              </p>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="course-meta">
                <span>
                  <Icon name="build" size={16} /> {lessons.length} lessons
                </span>
                <span>
                  <Icon name="clock" size={16} /> About {lessons.length * 2}{" "}
                  minutes
                </span>
              </div>
              <button className="button primary" onClick={start}>
                Start course <Icon name="arrow" size={17} />
              </button>
            </div>
            <div className="lesson-list">
              {lessons.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIndex(i);
                    setStartIndex(i);
                    setScore(0);
                    setStarted(true);
                  }}
                >
                  <span className="lesson-number">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="lesson-kanji" lang="ja">
                    {item.kanji}
                  </span>
                  <span>
                    <strong>{item.meaning}</strong>
                    <small lang="ja">{item.parts.join(" + ")}</small>
                  </span>
                  {learned.includes(item.id) ? (
                    <Icon name="check" size={18} />
                  ) : (
                    <Icon name="chevron" size={17} />
                  )}
                </button>
              ))}
            </div>
          </section>
          <div className="learning-note">
            <Icon name="book" size={20} />
            <p>
              <strong>Components, radicals, and memory aids.</strong> A radical
              is the component used to index a kanji in a dictionary. Other
              visible pieces are components. Our memory stories help you
              remember the shapes; they are not claims about a character’s
              historical origin.{" "}
              <a
                href="https://kanjivg.tagaini.net/glossary.html"
                target="_blank"
                rel="noreferrer"
              >
                Learn about components ↗
              </a>
            </p>
          </div>
        </>
      ) : !lesson ? (
        <>
          <button className="text-link" onClick={() => setStarted(false)}>
            ← Back to courses
          </button>
          <SessionComplete
            title={
              startIndex === 0
                ? `${course.title} complete`
                : "Practice complete"
            }
            correct={score}
            total={lessons.length - startIndex}
            onRestart={start}
          />
        </>
      ) : (
        <>
          <div className="builder-session-heading">
            <button className="text-link" onClick={() => setStarted(false)}>
              ← All courses
            </button>
            <span>
              {course.title} · Lesson {index + 1} of {lessons.length}
            </span>
          </div>
          <ProgressBar
            value={(index / lessons.length) * 100}
            label="Kanji building course"
          />
          <BuildLesson
            key={lesson.id}
            lesson={lesson}
            onAnswer={(correct) => {
              onRecord("builder", lesson.id, level, correct);
              setScore((value) => value + (correct ? 1 : 0));
            }}
            onNext={() => setIndex((value) => value + 1)}
            last={index === lessons.length - 1}
          />
        </>
      )}
    </>
  );
}

function BuildLesson({
  lesson,
  onAnswer,
  onNext,
  last,
}: {
  lesson: KanjiChallenge;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
  last: boolean;
}) {
  const [phase, setPhase] = useState<"learn" | "build">("learn");
  const [slots, setSlots] = useState<string[]>(() =>
    lesson.parts.map(() => ""),
  );
  const [options] = useState(() =>
    shuffle([...new Set([...lesson.parts, ...lesson.distractors])]),
  );
  const [checked, setChecked] = useState(false);
  const [hint, setHint] = useState(false);
  const correct = slots.every((part, index) => part === lesson.parts[index]);
  const [activeComponent, setActiveComponent] = useState(lesson.parts[0]);
  const component = COMPONENTS[activeComponent];
  function insert(part: string) {
    if (checked) return;
    const empty = slots.indexOf("");
    if (empty < 0) return;
    setSlots((previous) =>
      previous.map((item, i) => (i === empty ? part : item)),
    );
  }
  function check() {
    if (checked || slots.some((part) => !part)) return;
    setChecked(true);
    onAnswer(correct);
  }
  return (
    <div className="builder-lesson-grid">
      <section className="panel build-panel">
        <div className="build-panel-heading">
          <span className="badge">
            {phase === "learn"
              ? "01 · Explore the components"
              : "02 · Build from memory"}
          </span>
          <span className="quiet-label">
            {lesson.layout === "left-right"
              ? "LEFT → RIGHT"
              : lesson.kanji === "憩"
                ? "TOP PAIR → BOTTOM"
                : lesson.layout === "triangle"
                  ? "TOP → BOTTOM PAIR"
                  : "TOP → BOTTOM"}
          </span>
        </div>
        {phase === "learn" ? (
          <>
            <div className="builder-character">
              <span className="large-kanji" lang="ja">
                {lesson.kanji}
              </span>
              <h2>{lesson.meaning}</h2>
              <p lang="ja">{lesson.reading}</p>
            </div>
            <div className="component-equation">
              {lesson.parts.map((part, i) => (
                <span className="equation-part" key={i}>
                  {i > 0 && <small>+</small>}
                  <button
                    className={activeComponent === part ? "selected" : ""}
                    onClick={() => setActiveComponent(part)}
                    aria-pressed={activeComponent === part}
                  >
                    <span lang="ja">{part}</span>
                    <small>{COMPONENTS[part]?.name || "component"}</small>
                  </button>
                </span>
              ))}
            </div>
            <p className="helper-text">Select a part to learn more about it.</p>
            <button
              className="button primary"
              onClick={() => setPhase("build")}
            >
              Try building it <Icon name="arrow" size={17} />
            </button>
          </>
        ) : (
          <>
            <p className="build-prompt">Build the kanji for</p>
            <h2 className="build-meaning">“{lesson.meaning}”</h2>
            <div
              className={`component-slots ${lesson.layout} ${lesson.kanji === "憩" ? "pair-top" : ""}`}
              aria-label="Kanji component slots"
            >
              {slots.map((part, i) => (
                <button
                  key={i}
                  disabled={checked}
                  className={part ? "filled" : ""}
                  onClick={() =>
                    setSlots((previous) =>
                      previous.map((item, position) =>
                        i === position ? "" : item,
                      ),
                    )
                  }
                  aria-label={`Component ${i + 1}${part ? `: ${part}, click to remove` : ", empty"}`}
                >
                  <span lang="ja">{part || <small>{i + 1}</small>}</span>
                </button>
              ))}
            </div>
            <p className="helper-text">
              Choose parts in the order shown. You can use a part more than
              once.
              <br />
              Tap a filled slot to remove it.
            </p>
            <div
              className="component-bank"
              aria-label="Available kanji components"
            >
              {options.map((part) => (
                <button
                  key={part}
                  disabled={checked || slots.every(Boolean)}
                  onClick={() => insert(part)}
                  aria-label={`Add ${part}`}
                  lang="ja"
                >
                  {part}
                </button>
              ))}
            </div>
            {hint && !checked && (
              <p className="hint-text" role="status">
                {lesson.hint}
              </p>
            )}
            {checked && (
              <>
                <div className="built-result">
                  <span lang="ja">{lesson.kanji}</span>
                  <span lang="ja">{lesson.parts.join(" + ")}</span>
                </div>
                <AnswerFeedback
                  correct={correct}
                  answer={lesson.kanji}
                  explanation={`${lesson.hint} ${lesson.memory}`}
                />
              </>
            )}
            <div className="question-footer">
              {checked ? (
                <span className="helper-text">
                  One character, a few familiar parts.
                </span>
              ) : (
                <button
                  className="text-link"
                  onClick={() => setHint((value) => !value)}
                >
                  {hint ? "Hide hint" : "Need a hint?"}
                </button>
              )}
              <button
                className="button primary"
                disabled={!checked && slots.some((part) => !part)}
                onClick={checked ? onNext : check}
              >
                {checked
                  ? last
                    ? "Finish course"
                    : "Next lesson"
                  : "Check kanji"}
                <Icon name="arrow" size={17} />
              </button>
            </div>
          </>
        )}
      </section>
      <aside className="builder-side">
        {phase === "learn" ? (
          <>
            <section className="panel component-detail">
              <p className="eyebrow">MEET THE COMPONENT</p>
              <span className="component-large" lang="ja">
                {activeComponent}
              </span>
              <h3>{component?.name || "Visual component"}</h3>
              <p>
                {component?.note ||
                  "Look for this shape within the complete kanji."}
              </p>
            </section>
            <section className="panel memory-note">
              <p className="eyebrow">A MEMORY STORY</p>
              <p>{lesson.memory}</p>
              <small>A mnemonic, not a historical explanation.</small>
            </section>
            <section className="panel word-note">
              <div className="section-heading">
                <p className="eyebrow">SEE IT IN A WORD</p>
                <SpeakButton text={lesson.word} />
              </div>
              <p lang="ja">
                <ruby>
                  {lesson.word}
                  <rt>{lesson.wordReading}</rt>
                </ruby>
              </p>
              <span>{lesson.wordMeaning}</span>
            </section>
          </>
        ) : (
          <section className="panel memory-note">
            <p className="eyebrow">A SMALL STUDY TIP</p>
            <h3>Recall before you reveal.</h3>
            <p>
              Picture the character and the position of each part. Take your
              time—there is no timer.
            </p>
            <p>You can always use a hint. Every attempt helps you learn.</p>
          </section>
        )}
      </aside>
    </div>
  );
}
