import { useState, type FormEvent } from "react";
import { KANA, shuffle, type KanaGroup, type Level } from "../data/curriculum";
import { type RecordAnswer } from "../hooks/useStudy";
import {
  AnswerFeedback,
  Icon,
  PageHeading,
  ProgressBar,
  SessionComplete,
  SpeakButton,
} from "./StudyUI";

type Script = "hiragana" | "katakana";
export function KanaPractice({
  level,
  onRecord,
}: {
  level: Level;
  onRecord: RecordAnswer;
}) {
  const [script, setScript] = useState<Script>("hiragana");
  const [group, setGroup] = useState<KanaGroup>("basic");
  const [mode, setMode] = useState<"chart" | "quiz">("chart");
  const [deck, setDeck] = useState(() =>
    shuffle(KANA.filter((item) => item.group === "basic")).slice(0, 10),
  );
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [selectedKana, setSelectedKana] = useState(KANA[0]);
  function reset(nextGroup = group) {
    setDeck(
      shuffle(KANA.filter((item) => item.group === nextGroup)).slice(0, 10),
    );
    setIndex(0);
    setAnswer("");
    setChecked(false);
    setScore(0);
  }
  function check(event: FormEvent) {
    event.preventDefault();
    if (!card || !answer.trim() || checked) return;
    const normalized = answer
      .trim()
      .toLowerCase()
      .replace(/[\s'-]/g, "");
    const right = [card.romaji, ...card.aliases].includes(normalized);
    setChecked(true);
    setIsCorrect(right);
    setScore((value) => value + (right ? 1 : 0));
    onRecord("kana", `${script}-${card.id}`, level, right);
  }
  const card = deck[index];
  return (
    <>
      <PageHeading
        eyebrow="THE FOUNDATIONS · ALL LEVELS"
        title="Hiragana & katakana"
        description="Get to know the characters, then practice reading them from memory."
      />
      <div className="toolbar">
        <div className="segmented">
          <button
            className={script === "hiragana" ? "active" : ""}
            aria-pressed={script === "hiragana"}
            onClick={() => {
              setScript("hiragana");
              reset();
            }}
          >
            あ Hiragana
          </button>
          <button
            className={script === "katakana" ? "active" : ""}
            aria-pressed={script === "katakana"}
            onClick={() => {
              setScript("katakana");
              reset();
            }}
          >
            ア Katakana
          </button>
        </div>
        <div className="segmented">
          <button
            className={mode === "chart" ? "active" : ""}
            aria-pressed={mode === "chart"}
            onClick={() => setMode("chart")}
          >
            Study chart
          </button>
          <button
            className={mode === "quiz" ? "active" : ""}
            aria-pressed={mode === "quiz"}
            onClick={() => {
              reset();
              setMode("quiz");
            }}
          >
            Reading quiz
          </button>
        </div>
      </div>
      <div className="filter-row" aria-label="Kana group">
        {(["basic", "voiced", "combination"] as const).map((item) => (
          <button
            key={item}
            className={`filter-chip ${group === item ? "active" : ""}`}
            aria-pressed={group === item}
            onClick={() => {
              setGroup(item);
              reset(item);
              setSelectedKana(KANA.find((kana) => kana.group === item)!);
            }}
          >
            {item === "basic"
              ? "Basic characters · 46"
              : item === "voiced"
                ? "Dakuten & handakuten · 25"
                : "Combined sounds · 33"}
          </button>
        ))}
      </div>
      {mode === "chart" ? (
        <div className="kana-layout">
          <section className="panel kana-chart">
            <div className="section-heading">
              <h2>{script === "hiragana" ? "ひらがな" : "カタカナ"}</h2>
              <span className="helper-text">Select a character to explore</span>
            </div>
            <div
              className={`kana-grid ${group === "combination" ? "combinations" : ""}`}
            >
              {KANA.filter((item) => item.group === group).map((item) => (
                <button
                  className={`kana-cell ${selectedKana.id === item.id ? "selected" : ""}`}
                  key={item.id}
                  style={
                    group === "basic"
                      ? {
                          gridColumn: (
                            {
                              や: 1,
                              ゆ: 3,
                              よ: 5,
                              わ: 1,
                              を: 5,
                              ん: 1,
                            } as Record<string, number>
                          )[item.hiragana],
                        }
                      : undefined
                  }
                  onClick={() => setSelectedKana(item)}
                  aria-label={`${item[script]}, ${item.romaji}`}
                  aria-pressed={selectedKana.id === item.id}
                >
                  <span lang="ja">{item[script]}</span>
                  <small>{item.romaji}</small>
                </button>
              ))}
            </div>
          </section>
          <aside className="panel kana-detail">
            <span className="badge">
              {script === "hiragana" ? "Hiragana" : "Katakana"}
            </span>
            <span className="large-kanji" lang="ja">
              {selectedKana[script]}
            </span>
            <h2>{selectedKana.romaji}</h2>
            <SpeakButton text={selectedKana[script]} />
            <p>
              {script === "hiragana"
                ? "Hiragana is used for Japanese words, particles, and grammatical endings."
                : "Katakana is often used for loanwords, foreign names, and emphasis."}
            </p>
            <div className="paired-kana">
              <span>
                {script === "hiragana" ? "Katakana pair" : "Hiragana pair"}
              </span>
              <strong lang="ja">
                {selectedKana[script === "hiragana" ? "katakana" : "hiragana"]}
              </strong>
            </div>
            <p className="helper-text">
              {group === "basic"
                ? "As particles, は is pronounced “wa,” へ is “e,” and を is “o.” In the quiz, use the character reading shown in the chart."
                : group === "voiced"
                  ? "゛ adds voicing; ゜ changes the h-row to p. ぢ and づ share sounds with じ and ず in standard Japanese."
                  : "A small ゃ, ゅ, or ょ combines with an i-row character into one syllable, such as きゃ (kya)."}
            </p>
            <button
              className="button primary"
              onClick={() => {
                reset();
                setMode("quiz");
              }}
            >
              Practice reading <Icon name="arrow" size={17} />
            </button>
          </aside>
        </div>
      ) : !card ? (
        <SessionComplete
          correct={score}
          total={deck.length}
          onRestart={() => reset()}
        />
      ) : (
        <div className="practice-workspace">
          <div className="session-meta">
            <span>
              Character <strong>{index + 1}</strong> of {deck.length}
            </span>
            <span>{score} correct</span>
          </div>
          <ProgressBar
            value={(index / deck.length) * 100}
            label="Kana session"
          />
          <form className="panel kana-quiz" onSubmit={check}>
            <p className="eyebrow">HOW DO YOU READ THIS?</p>
            <span className="large-kanji" lang="ja">
              {card[script]}
            </span>
            <label htmlFor="kana-answer">Type the reading in romaji</label>
            <input
              id="kana-answer"
              key={`${script}-${group}-${index}`}
              autoFocus
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              placeholder="e.g. ka"
              disabled={checked}
            />
            {checked && (
              <AnswerFeedback
                correct={isCorrect}
                answer={card.romaji}
                explanation={`${card[script]} is read “${card.romaji}.” Its ${script === "hiragana" ? "katakana" : "hiragana"} pair is ${card[script === "hiragana" ? "katakana" : "hiragana"]}.`}
              />
            )}
            <div className="flashcard-actions">
              {checked ? (
                <>
                  <SpeakButton text={card[script]} />
                  <button
                    type="button"
                    className="button primary"
                    onClick={() => {
                      setIndex((value) => value + 1);
                      setAnswer("");
                      setChecked(false);
                    }}
                  >
                    {index === deck.length - 1
                      ? "See results"
                      : "Next character"}
                    <Icon name="arrow" size={17} />
                  </button>
                </>
              ) : (
                <button
                  type="submit"
                  className="button primary"
                  disabled={!answer.trim()}
                >
                  Check reading <Icon name="arrow" size={17} />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
