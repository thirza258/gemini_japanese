import React, { useState } from 'react';
import { run, type TranslationResponse } from '../ai_handler/translator';

function Translator() {
  const [input, setInput] = useState('');
  const [romaji, setRomaji] = useState('');
  const [translation, setTranslation] = useState('');
  const [breakdown, setBreakdown] = useState<TranslationResponse['breakdown']>([]);
  const [history, setHistory] = useState<Array<{ input: string } & TranslationResponse>>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const isJapanese = (text: string): boolean => {
    const japaneseRegex = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/;
    return japaneseRegex.test(text);
  };

  const translateText = async () => {
    setError('');
    setRomaji('');
    setTranslation('');
    setBreakdown([]);
    setLoading(true);

    if (!isJapanese(input)) {
      setError('Please enter valid Japanese text.');
      setLoading(false);
      return;
    }

    try {
      const response = await run({ input });

      setRomaji(response.romaji);
      setTranslation(response.translation);
      setBreakdown(response.breakdown);

      setHistory((prevHistory) => [
        ...prevHistory,
        {
          input,
          ...response,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error
        ? err.message
        : 'Translation failed. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl p-4 text-slate-900">
      <h1 className="mb-4 text-2xl font-bold">OpenRouter Japanese Translator</h1>
      <textarea
        className="mb-4 w-full rounded border border-gray-300 p-3"
        placeholder="Enter Japanese text (Hiragana, Katakana, or Kanji)"
        value={input}
        onChange={handleInputChange}
        rows={5}
      />
      <div className="flex items-center gap-3">
        <button
          className="rounded bg-blue-500 px-4 py-2 text-white disabled:cursor-not-allowed disabled:bg-blue-300"
          onClick={translateText}
          disabled={loading}
        >
          Translate
        </button>
        {loading && <p className="text-gray-500">Loading...</p>}
      </div>
      {error && <p className="mt-3 text-red-500">{error}</p>}

      <div className="mt-6 rounded border border-gray-200 bg-white/90 p-4">
        <h2 className="text-xl font-bold">Romaji</h2>
        <p className="mb-4 mt-1 break-words">{romaji || '-'}</p>

        <h2 className="text-xl font-bold">Translation</h2>
        <p className="mt-1 break-words">{translation || '-'}</p>

        <h2 className="mt-6 text-xl font-bold">Character Breakdown</h2>
        {breakdown.length === 0 ? (
          <p className="mt-1 text-gray-500">No breakdown available yet.</p>
        ) : (
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {breakdown.map((item, index) => (
              <div
                key={`${item.text}-${index}`}
                className="rounded border border-gray-200 bg-slate-50 p-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col items-start">
                    {item.reading && (
                      <span className="text-xs leading-none text-slate-500">
                        {item.reading}
                      </span>
                    )}
                    <p className="text-lg font-semibold leading-tight">{item.text}</p>
                  </div>
                  <span className="rounded-full bg-slate-200 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    {item.script}
                  </span>
                </div>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Reading:</span> {item.reading || '-'}
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Romaji:</span> {item.romaji || '-'}
                </p>
                <p className="mt-1 text-sm">
                  <span className="font-semibold">Meaning:</span> {item.translation || '-'}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-6">
        <h2 className="mb-2 text-xl font-bold">Translation History</h2>
        <div className="space-y-3">
          {history.map((item, index) => (
            <div key={index} className="rounded border border-gray-300 bg-white p-3">
              <p><strong>Input:</strong> {item.input}</p>
              <p><strong>Romaji:</strong> {item.romaji}</p>
              <p><strong>Translation:</strong> {item.translation}</p>
              <p className="mt-2 text-sm font-semibold">Breakdown:</p>
              <ul className="mt-1 space-y-1 text-sm">
                {item.breakdown.map((part, partIndex) => (
                  <li key={`${part.text}-${partIndex}`}>
                    <span className="font-semibold">
                      {part.reading ? `${part.reading} ` : ''}
                      {part.text}
                    </span>{' '}
                    ({part.script}) - {part.romaji || '-'} - {part.translation || '-'}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Translator;
