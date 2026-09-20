import { useEffect, useRef, useState } from "react";
import {
  LEVELS,
  LEVEL_DETAILS,
  plainJapanese,
  shuffle,
  type Level,
  type Page,
} from "../data/curriculum";
import {
  COURSE_PATHS,
  COURSE_REFERENCES,
  JLPT_COURSES,
  getCourseProgress,
  getCourses,
  getResumeLesson,
  gradeCourseLesson,
  type CourseLesson,
  type JlptCourse,
} from "../data/courses";
import type { RecordAnswer } from "../hooks/useStudy";
import { stopJapaneseAudio } from "../utils/speech";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  RubyText,
  SpeakButton,
} from "./StudyUI";
import "../courses.css";

interface Props {
  level: Level;
  learned: string[];
  onLevelChange: (level: Level) => void;
  onNavigate: (page: Page) => void;
  onRecord: RecordAnswer;
}

export function Courses({
  level,
  learned,
  onLevelChange,
  onNavigate,
  onRecord,
}: Props) {
  const courses = getCourses(level);
  const [selection, setSelection] = useState<{
    courseId: string;
    lessonId: string;
  } | null>(null);
  const [view, setView] = useState<"courses" | "sentences">("courses");
  const [search, setSearch] = useState("");
  const course = courses.find((item) => item.id === selection?.courseId);
  const lesson = course?.lessons.find(
    (item) => item.id === selection?.lessonId,
  );
  const resume = getResumeLesson(courses, learned);
  const completed = courses.reduce(
    (sum, item) => sum + getCourseProgress(item, learned).completed,
    0,
  );
  const lessonCount = courses.reduce(
    (sum, item) => sum + item.lessons.length,
    0,
  );
  const sentenceCount = courses.reduce(
    (sum, item) => sum + item.sentencePractice.sentences.length,
    0,
  );
  const visible = courses.filter((item) =>
    `${item.title} ${item.summary} ${item.sentencePractice.canDo} ${item.sentencePractice.situation} ${item.grammar.map((point) => point.pattern).join(" ")}`
      .toLowerCase()
      .includes(search.trim().toLowerCase()),
  );

  function openCourse(item: JlptCourse, sentencesOnly = false) {
    const next = sentencesOnly
      ? item.lessons.find((entry) => entry.kind === "sentences")!
      : getResumeLesson([item], learned)?.lesson || item.lessons[0];
    setSelection({ courseId: item.id, lessonId: next.id });
  }

  if (course && lesson) {
    const progress = getCourseProgress(course, learned);
    const lessonIndex = course.lessons.indexOf(lesson);
    const nextCourse = courses[courses.indexOf(course) + 1];
    const nextLesson = course.lessons[lessonIndex + 1];
    return (
      <>
        <button
          className="text-link course-back"
          onClick={() => setSelection(null)}
        >
          ← All {level} courses
        </button>
        <PageHeading
          eyebrow={`${level} · COURSE ${course.order} OF ${courses.length}`}
          title={course.title}
          description={course.summary}
        />
        <div className="course-study-layout">
          <aside className="panel course-outline">
            <p className="eyebrow">YOUR COURSE</p>
            <p>
              {progress.completed} of {progress.total} lessons complete
            </p>
            <ProgressBar
              value={progress.percent}
              label={`${course.title} completion`}
            />
            <nav aria-label="Course lessons">
              {course.lessons.map((item, i) => (
                <button
                  key={item.id}
                  aria-current={item.id === lesson.id ? "step" : undefined}
                  className={item.id === lesson.id ? "selected" : ""}
                  onClick={() =>
                    setSelection({ courseId: course.id, lessonId: item.id })
                  }
                >
                  <span className="lesson-step">
                    {learned.includes(item.id) ? (
                      <Icon name="check" size={16} />
                    ) : (
                      i + 1
                    )}
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <small>
                      {learned.includes(item.id)
                        ? "Completed · review anytime"
                        : `About ${item.minutes} min`}
                    </small>
                  </span>
                </button>
              ))}
            </nav>
            <p className="helper-text">
              Work through the lessons in order, or open any topic you need.
              Correct all checks to complete a lesson.
            </p>
            {level === "N5" && (
              <button
                className="button secondary"
                onClick={() => onNavigate("kana")}
              >
                Practice kana flashcards <Icon name="cards" size={16} />
              </button>
            )}
          </aside>
          <CourseLessonView
            key={lesson.id}
            course={course}
            lesson={lesson}
            learned={learned.includes(lesson.id)}
            onRecord={onRecord}
            onNext={() => {
              if (nextLesson)
                setSelection({ courseId: course.id, lessonId: nextLesson.id });
              else if (nextCourse) openCourse(nextCourse);
              else setSelection(null);
            }}
            nextLabel={
              nextLesson
                ? "Next lesson"
                : nextCourse
                  ? "Next course"
                  : "Back to learning path"
            }
          />
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeading
        eyebrow="STRUCTURED LEARNING · N5 TO N1"
        title="Your Japanese course library"
        description={`${JLPT_COURSES.length} courses. Everyday language, clear explanations, and a path from your first words to nuanced expression.`}
      />
      <div
        className="level-path course-levels"
        aria-label="Choose a course level"
      >
        {LEVELS.map((item) => (
          <button
            key={item}
            aria-pressed={level === item}
            className={level === item ? "selected" : ""}
            onClick={() => onLevelChange(item)}
          >
            <strong>{item}</strong>
            <span>{LEVEL_DETAILS[item].title}</span>
          </button>
        ))}
      </div>
      <section className="panel course-path-intro">
        <div>
          <span className="badge">
            {level} · {LEVEL_DETAILS[level].title}
          </span>
          <h2>{COURSE_PATHS[level].outcome}</h2>
          <p>{COURSE_PATHS[level].prerequisite}</p>
          <div className="course-facts">
            <span>{courses.length} courses</span>
            <span>{lessonCount} lessons</span>
            <span>{sentenceCount} daily sentences</span>
            <span>{courses.length * 2} reading & listening passages</span>
          </div>
        </div>
        <div className="course-resume">
          <strong>
            {completed} / {lessonCount} lessons complete
          </strong>
          <ProgressBar
            value={(completed / lessonCount) * 100}
            label={`${level} course progress`}
          />
          <button
            className="button primary"
            onClick={() =>
              resume
                ? setSelection({
                    courseId: resume.course.id,
                    lessonId: resume.lesson.id,
                  })
                : openCourse(courses[0])
            }
          >
            {completed === lessonCount
              ? "Review this level"
              : completed
                ? "Continue learning"
                : "Start this level"}
            <Icon name="arrow" size={17} />
          </button>
          {level === "N5" && (
            <button className="text-link" onClick={() => onNavigate("kana")}>
              Start with kana flashcards
            </button>
          )}
        </div>
      </section>
      <div className="toolbar course-library-toolbar">
        <div className="segmented">
          <button
            aria-pressed={view === "courses"}
            className={view === "courses" ? "active" : ""}
            onClick={() => setView("courses")}
          >
            Full courses
          </button>
          <button
            aria-pressed={view === "sentences"}
            className={view === "sentences" ? "active" : ""}
            onClick={() => setView("sentences")}
          >
            Daily sentences
          </button>
        </div>
        <label className="course-search">
          <span className="sr-only">Search {level} courses and situations</span>
          <input
            type="search"
            placeholder="Search a topic, situation, or grammar…"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
      </div>
      <p className="helper-text" aria-live="polite">
        {visible.length} {level}{" "}
        {view === "sentences"
          ? "sentence lessons · Read, listen, recall, and choose a natural sentence."
          : "courses · Vocabulary, grammar, daily sentences, reading, listening, and a checkpoint in every course."}
      </p>
      <div className="course-library-grid">
        {visible.map((item) => {
          const progress = getCourseProgress(item, learned);
          return (
            <article className="panel jlpt-course-card" key={item.id}>
              <div className="section-heading">
                <span className="eyebrow">
                  {level} · {String(item.order).padStart(2, "0")}
                </span>
                {progress.completed === progress.total && (
                  <span className="badge">
                    <Icon name="check" size={14} /> Completed
                  </span>
                )}
              </div>
              <h2>{item.title}</h2>
              <p>
                {view === "sentences"
                  ? item.sentencePractice.situation
                  : item.summary}
              </p>
              <div className="course-can-do">
                <Icon name="target" size={18} />
                <span>{item.sentencePractice.canDo}</span>
              </div>
              <p className="helper-text">
                {view === "sentences"
                  ? `${item.sentencePractice.sentences.length} sentences · ${item.sentencePractice.register} Japanese`
                  : `${item.lessons.length} lessons · ${item.grammar.length} grammar topics · ${item.vocabulary.length} words`}
              </p>
              <div className="course-card-footer">
                <ProgressBar
                  value={progress.percent}
                  label={`${item.title} progress`}
                />
                <div>
                  <small>
                    {progress.completed}/{progress.total} complete
                  </small>
                  <button
                    className="text-link"
                    onClick={() => openCourse(item, view === "sentences")}
                  >
                    {view === "sentences"
                      ? "Practice sentences"
                      : progress.completed
                        ? "Continue course"
                        : "Open course"}
                    <Icon name="arrow" size={16} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      {!visible.length && (
        <section className="panel course-empty">
          <p>
            No courses match “{search}” in {level}.
          </p>
          <button className="button secondary" onClick={() => setSearch("")}>
            Show all {level} courses
          </button>
        </section>
      )}
      <details className="panel course-sources">
        <summary>About the curriculum & further practice</summary>
        <p>
          Original lessons with practical Can-do goals, informed by the everyday
          communication approach used in Irodori and Minato. These are
          independent study groupings, not an official JLPT syllabus or a
          complete vocabulary list. JF/CEFR levels and JLPT levels are different
          frameworks; no one-to-one equivalence is implied.
        </p>
        <p>
          Keep building vocabulary through regular reading and listening. The
          checkpoints review these courses; they are not full-length JLPT mock
          exams. Listening here uses your device’s Japanese speech voice. Use
          the official resources below for recorded speakers and additional
          practice.
        </p>
        <ul>
          {COURSE_REFERENCES.map((source) => (
            <li key={source.url}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title} ↗
              </a>
              <span>{source.description}</span>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}

function CourseLessonView({
  course,
  lesson,
  learned,
  onRecord,
  onNext,
  nextLabel,
}: {
  course: JlptCourse;
  lesson: CourseLesson;
  learned: boolean;
  onRecord: RecordAnswer;
  onNext: () => void;
  nextLabel: string;
}) {
  const [furigana, setFurigana] = useState(
    course.level === "N5" || course.level === "N4",
  );
  const [recall, setRecall] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    heading.current?.focus();
    return () => stopJapaneseAudio();
  }, [lesson.id]);
  const passage =
    lesson.kind === "reading"
      ? course.reading
      : lesson.kind === "listening"
        ? course.listening
        : null;
  const hasFurigana = /\{[^}]+\}/.test(
    JSON.stringify([course.grammar, course.sentencePractice, passage]),
  );
  return (
    <div className="course-lesson-content">
      <article className="panel course-lesson-body">
        <div className="section-heading">
          <p className="eyebrow">
            LESSON {course.lessons.indexOf(lesson) + 1} · ABOUT {lesson.minutes}{" "}
            MIN
          </p>
          {learned && (
            <span className="badge">
              <Icon name="check" size={14} /> Completed
            </span>
          )}
        </div>
        <h2 ref={heading} tabIndex={-1}>
          {lesson.title}
        </h2>
        {hasFurigana &&
          lesson.kind !== "vocabulary" &&
          lesson.kind !== "review" && (
            <label className="course-toggle">
              <input
                type="checkbox"
                checked={furigana}
                onChange={(event) => setFurigana(event.target.checked)}
              />{" "}
              Show furigana
            </label>
          )}
        {lesson.kind === "vocabulary" && (
          <>
            <p>
              Read each word aloud, then cover the reading and recall it. Learn
              kanji in these words; their readings can change in other
              compounds.
            </p>
            <div className="course-word-list">
              {course.vocabulary.map((word) => (
                <div key={word.word}>
                  <ruby lang="ja">
                    {word.word}
                    <rt>{word.reading}</rt>
                  </ruby>
                  <span>{word.meaning}</span>
                  <SpeakButton
                    text={word.word}
                    label={`Listen to ${word.word}`}
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {lesson.kind === "grammar" && (
          <div className="course-grammar-list">
            {course.grammar.map((point) => (
              <section key={point.pattern}>
                <h3>{point.pattern}</h3>
                <p>{point.explanation}</p>
                <div className="course-example">
                  <RubyText text={point.example} show={furigana} />
                  <SpeakButton text={plainJapanese(point.example)} />
                </div>
                <p className="helper-text">{point.translation}</p>
              </section>
            ))}
          </div>
        )}
        {lesson.kind === "sentences" && (
          <>
            <p className="course-can-do">
              <Icon name="target" size={20} />
              <strong>{course.sentencePractice.canDo}</strong>
            </p>
            <p>
              {course.sentencePractice.situation} ·{" "}
              <strong>{course.sentencePractice.register}</strong> Japanese
            </p>
            <p>
              Listen, repeat aloud, then change one detail to make the sentence
              your own. Formal expressions suit professional settings; use
              simple polite Japanese for everyday casual encounters.
            </p>
            <label className="course-toggle">
              <input
                type="checkbox"
                checked={recall}
                onChange={(event) => setRecall(event.target.checked)}
              />{" "}
              Recall mode: try the Japanese before revealing it
            </label>
            <div className="daily-sentence-list">
              {course.sentencePractice.sentences.map((sentence, i) => (
                <section key={`${lesson.id}-${i}-${recall}`}>
                  <span className="eyebrow">SENTENCE {i + 1}</span>
                  {recall ? (
                    <>
                      <p>{sentence.translation}</p>
                      <details>
                        <summary>Reveal Japanese</summary>
                        <div className="course-example">
                          <RubyText text={sentence.text} show={furigana} />
                          <SpeakButton text={plainJapanese(sentence.text)} />
                        </div>
                      </details>
                    </>
                  ) : (
                    <>
                      <div className="course-example">
                        <RubyText text={sentence.text} show={furigana} />
                        <SpeakButton text={plainJapanese(sentence.text)} />
                      </div>
                      <p>{sentence.translation}</p>
                    </>
                  )}
                </section>
              ))}
            </div>
          </>
        )}
        {passage && (
          <>
            <h3>{passage.title}</h3>
            {lesson.kind === "listening" ? (
              <>
                <p>
                  Listen once for the situation, then again for the requested
                  detail. Try the question before revealing the transcript.
                </p>
                <div className="course-audio">
                  <SpeakButton
                    text={plainJapanese(passage.text)}
                    label="Play listening practice"
                  />
                  <span>Play Japanese audio · replay as needed</span>
                </div>
                <p className="helper-text">
                  Device speech voice. If audio is unavailable, use the
                  transcript.
                </p>
                <details className="course-transcript">
                  <summary>Show listening transcript</summary>
                  <p className="course-japanese">
                    <RubyText text={passage.text} show={furigana} />
                  </p>
                </details>
              </>
            ) : (
              <>
                <div className="course-audio">
                  <SpeakButton
                    text={plainJapanese(passage.text)}
                    label="Listen to the reading"
                  />
                  <span>
                    Read for the situation, key details, and the writer’s point.
                  </span>
                </div>
                <p className="course-japanese">
                  <RubyText text={passage.text} show={furigana} />
                </p>
              </>
            )}
            <details className="course-transcript">
              <summary>Show English translation</summary>
              <p>{passage.translation}</p>
            </details>
          </>
        )}
        {lesson.kind === "review" && (
          <>
            <p>
              This checkpoint combines words, grammar, sentences, reading, and
              listening from the course. Answer without opening the earlier
              notes, then review any missed checks.
            </p>
            <div className="course-can-do">
              <Icon name="target" size={20} />
              <p>{course.practice}</p>
            </div>
          </>
        )}
      </article>
      <CourseQuiz
        key={lesson.id}
        course={course}
        lesson={lesson}
        onRecord={onRecord}
        onNext={onNext}
        nextLabel={nextLabel}
      />
    </div>
  );
}

function CourseQuiz({
  course,
  lesson,
  onRecord,
  onNext,
  nextLabel,
}: {
  course: JlptCourse;
  lesson: CourseLesson;
  onRecord: RecordAnswer;
  onNext: () => void;
  nextLabel: string;
}) {
  const [questions] = useState(() =>
    lesson.questions.map((question) => ({
      ...question,
      options: shuffle(question.options),
    })),
  );
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const submitted = useRef(false);
  const result = gradeCourseLesson(questions, answers);
  return (
    <form
      className="panel course-quiz"
      onSubmit={(event) => {
        event.preventDefault();
        if (submitted.current || result.answered !== result.total) return;
        submitted.current = true;
        setChecked(true);
        onRecord("courses", lesson.id, course.level, result.passed);
      }}
    >
      <p className="eyebrow">
        CHECK YOUR UNDERSTANDING · {questions.length} QUESTIONS
      </p>
      {questions.map((question, i) => (
        <fieldset key={question.id} className="course-question">
          <legend>
            {i + 1}. {question.prompt}
          </legend>
          {lesson.kind === "review" && question.text && (
            <p className="course-japanese">
              <RubyText text={question.text} show={false} />
            </p>
          )}
          {lesson.kind === "review" && question.audio && (
            <div className="course-review-audio">
              <SpeakButton
                text={plainJapanese(question.audio)}
                label="Play checkpoint listening"
              />
              <details>
                <summary>Show transcript if needed</summary>
                <p className="course-japanese">
                  <RubyText text={question.audio} show={false} />
                </p>
              </details>
            </div>
          )}
          <div className="answer-options single-column">
            {question.options.map((option) => (
              <label
                key={option}
                className={`answer-option ${answers[question.id] === option ? "selected" : ""} ${checked && option === question.answer ? "right" : ""} ${checked && answers[question.id] === option && option !== question.answer ? "wrong" : ""}`}
              >
                <input
                  type="radio"
                  name={question.id}
                  value={option}
                  checked={answers[question.id] === option}
                  disabled={checked}
                  onChange={() =>
                    setAnswers((previous) => ({
                      ...previous,
                      [question.id]: option,
                    }))
                  }
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {checked && (
            <AnswerFeedback
              correct={answers[question.id] === question.answer}
              answer={question.answer}
              explanation={question.explanation}
            />
          )}
        </fieldset>
      ))}
      <div className="course-quiz-result" role="status">
        {checked
          ? result.passed
            ? `Lesson complete — ${result.correct} of ${result.total} correct.`
            : `${result.correct} of ${result.total} correct. Read the explanations, then retry the missed checks.`
          : `${result.answered} of ${result.total} answered. Complete every check to finish this lesson.`}
      </div>
      <div className="question-footer">
        {!checked ? (
          <button
            type="submit"
            className="button primary"
            disabled={result.answered !== result.total}
          >
            Check answers <Icon name="check" size={17} />
          </button>
        ) : result.passed ? (
          <button type="button" className="button primary" onClick={onNext}>
            {nextLabel}
            <Icon name="arrow" size={17} />
          </button>
        ) : (
          <button
            type="button"
            className="button secondary"
            onClick={() => {
              setAnswers((previous) =>
                Object.fromEntries(
                  questions
                    .filter(
                      (question) => previous[question.id] === question.answer,
                    )
                    .map((question) => [question.id, question.answer]),
                ),
              );
              submitted.current = false;
              setChecked(false);
            }}
          >
            <Icon name="refresh" size={17} /> Retry missed checks
          </button>
        )}
      </div>
    </form>
  );
}
