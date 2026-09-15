import { useEffect, useRef, useState } from "react";
import { run } from "../ai_handler/translator";
import { SAMPLE_PHRASES } from "../data/japaneseSamples";
import { Icon, PageHeading, SpeakButton } from "./StudyUI";

import type { HistoryEntry } from "../data/learningProgress";
const defaultSample = SAMPLE_PHRASES.find(
  (item) => item.id === "sakura-mankai",
)!;
export function InteractiveTranslator({
  onOpenSettings,
  history,
  onSaveHistory,
  signedIn,
}: {
  onOpenSettings: () => void;
  history: HistoryEntry[];
  onSaveHistory: (entry: HistoryEntry) => void;
  signedIn: boolean;
}) {
  const [input, setInput] = useState(defaultSample.japanese);
  const [result, setResult] = useState<HistoryEntry>({
    input: defaultSample.japanese,
    timestamp: 0,
    ...defaultSample.cachedResponse!,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("all");
  const [copied, setCopied] = useState(false);
  const requestId = useRef(0);
  const requestController = useRef<AbortController | null>(null);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(
    () => () => {
      requestId.current++;
      requestController.current?.abort();
      clearTimeout(copyTimer.current);
    },
    [],
  );
  async function translate(text = input) {
    const query = text.trim();
    setError("");
    if (!query || !/[\u3040-\u30ff\u3400-\u9fff]/.test(query)) {
      setError("Enter Japanese text using hiragana, katakana, or kanji.");
      return;
    }
    const currentRequest = ++requestId.current;
    requestController.current?.abort();
    const controller = new AbortController();
    requestController.current = controller;
    setLoading(true);
    try {
      const response = await run({ input: query, signal: controller.signal });
      if (requestId.current !== currentRequest) return;
      const entry = { input: query, timestamp: Date.now(), ...response };
      setResult(entry);
      setFilter("all");
      onSaveHistory(entry);
    } catch (err) {
      if (requestId.current === currentRequest && !controller.signal.aborted)
        setError(
          err instanceof Error
            ? err.message
            : "Translation could not be completed. Please try again.",
        );
    } finally {
      if (requestId.current === currentRequest) setLoading(false);
    }
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(
        `${result.input}\n${result.romaji}\n${result.translation}`,
      );
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(
        "Clipboard access is unavailable. You can select and copy the text instead.",
      );
    }
  }
  const filtered = result.breakdown.filter(
    (item) => filter === "all" || item.script === filter,
  );
  return (
    <>
      <PageHeading
        eyebrow="TRANSLATE & UNDERSTAND"
        title="A little more than a translation."
        description="Explore natural English, romaji, and the characters that make a sentence."
      >
        <button className="button secondary" onClick={onOpenSettings}>
          <Icon name="settings" size={17} /> Translator settings
        </button>
      </PageHeading>
      <div className="translator-samples">
        <span className="field-label">TRY A PHRASE</span>
        {SAMPLE_PHRASES.slice(0, 5).map((sample) => (
          <button
            className="filter-chip"
            key={sample.id}
            onClick={() => {
              setInput(sample.japanese);
              void translate(sample.japanese);
            }}
            lang="ja"
          >
            {sample.japanese}
          </button>
        ))}
      </div>
      <div className="translator-grid">
        <section className="panel translator-input">
          <div className="section-heading">
            <label htmlFor="japanese-input">Japanese</label>
            <span className="quiet-label">日本語</span>
          </div>
          <textarea
            id="japanese-input"
            lang="ja"
            rows={5}
            maxLength={300}
            value={input}
            disabled={loading}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (
                (event.ctrlKey || event.metaKey) &&
                event.key === "Enter" &&
                !loading
              ) {
                event.preventDefault();
                void translate();
              }
            }}
            placeholder="日本語を入力してください…"
          />
          <div className="translator-input-bottom">
            <span className="helper-text">{input.length} / 300</span>
            <button
              className="button primary"
              disabled={loading || !input.trim()}
              onClick={() => void translate()}
            >
              {loading ? (
                <>
                  <span className="spinner" /> Translating…
                </>
              ) : (
                <>
                  Translate <Icon name="arrow" size={17} />
                </>
              )}
            </button>
          </div>
          <p className="helper-text">⌘ / Ctrl + Enter to translate</p>
        </section>
        <section
          className="panel translator-result"
          aria-busy={loading}
          aria-live="polite"
        >
          <div className="section-heading">
            <h2>English translation</h2>
            <div className="inline-actions">
              <SpeakButton
                text={result.input}
                label="Listen to translated Japanese"
              />
              <button className="text-link" onClick={() => void copy()}>
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
          <p className="translation-english">{result.translation}</p>
          <p className="field-label">ROMAJI</p>
          <p className="translation-romaji">{result.romaji}</p>
          {result.input !== input.trim() && (
            <p className="result-source">
              Showing result for <span lang="ja">{result.input}</span>
            </p>
          )}
        </section>
      </div>
      {error && (
        <div className="answer-feedback incorrect" role="alert">
          <strong>Let’s try that again.</strong>
          <p>{error}</p>
          <button className="text-link" onClick={onOpenSettings}>
            Open translator settings
          </button>
        </div>
      )}
      <section className="panel breakdown-panel">
        <div className="section-heading">
          <div>
            <h2>Character by character</h2>
            <p>Readings and meanings in this sentence.</p>
          </div>
          <span className="badge">{result.breakdown.length} characters</span>
        </div>
        <div className="filter-row">
          {["all", "kanji", "hiragana", "katakana"].map((script) => (
            <button
              className={`filter-chip ${filter === script ? "active" : ""}`}
              key={script}
              aria-pressed={filter === script}
              onClick={() => setFilter(script)}
            >
              {script === "all"
                ? "All characters"
                : script.charAt(0).toUpperCase() + script.slice(1)}
            </button>
          ))}
        </div>
        <div className="breakdown-grid">
          {filtered.map((item, i) => (
            <article className="character-card" key={`${item.text}-${i}`}>
              <div className="character-card-heading">
                <span className="script-label">{item.script}</span>
                <SpeakButton
                  text={item.reading || item.text}
                  label={`Listen to ${item.text}`}
                />
              </div>
              <ruby lang="ja">
                {item.text}
                <rt>{item.reading || " "}</rt>
              </ruby>
              <span className="character-romaji">{item.romaji || "—"}</span>
              <p>{item.translation || "No standalone meaning"}</p>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="empty-filter">
            This sentence has no {filter} characters.
          </p>
        )}
        <p className="helper-text">
          Some kana are parts of words or endings and have no independent
          meaning. Read them together in context.
        </p>
      </section>
      <section className="panel translation-history">
        <div className="section-heading">
          <div>
            <h2>Recent translations</h2>
            <p>
              {signedIn
                ? "Revisit the last 20 phrases you explored."
                : "Your recent phrases stay here for this visit only."}
            </p>
          </div>
          <span className="badge">{history.length} phrases</span>
        </div>
        {history.length ? (
          history.map((entry, i) => (
            <button
              key={`${entry.input}-${i}`}
              onClick={() => {
                requestId.current++;
                requestController.current?.abort();
                setLoading(false);
                setInput(entry.input);
                setResult(entry);
                setError("");
                setFilter("all");
              }}
            >
              <span>
                <strong lang="ja">{entry.input}</strong>
                <small>{entry.translation}</small>
              </span>
              <Icon name="arrow" size={17} />
            </button>
          ))
        ) : (
          <p className="empty-filter">
            Translate a phrase to start your history.
          </p>
        )}
      </section>
      <p className="curriculum-note">
        Sample phrases work immediately. Custom translations use your configured
        OpenRouter connection and may need an API key.
      </p>
    </>
  );
}
