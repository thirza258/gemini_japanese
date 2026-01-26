import React, { useState } from 'react';
import { run } from '../ai_handler/translator';

function Translator() {
  const [input, setInput] = useState('');
  const [romaji, setRomaji] = useState('');
  const [translation, setTranslation] = useState('');
  const [history, setHistory] = useState<{ input: string; romaji: string; translation: string }[]>([]);
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
    setLoading(true);
    if (!isJapanese(input)) {
      setError('Please enter valid Japanese text.');
      setLoading(false);
      return;
    }

    const response = await run({ input });
    if(!response || !response.text) {
      setError('Translation failed. Please try again.');
      return;
    }
    const responseJson = JSON.parse(response.text);

    const translatedRomaji = responseJson.romaji;
    const translatedText = responseJson.translation;

    setRomaji(translatedRomaji);
    setTranslation(translatedText);
    setLoading(false);

    setHistory((prevHistory) => [
      ...prevHistory,
      {
        input,
        romaji: translatedRomaji,
        translation: translatedText,
      },
    ]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gemini Japanese Translator</h1>
      <textarea
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter Japanese text (Hiragana, Katakana, or Kanji)"
        value={input}
        onChange={handleInputChange}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={translateText}
      >
        Translate
      </button>
      <div className="mt-4">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <>
        <h2 className="text-xl font-bold">Romaji:</h2>
        <p className="mb-2">{romaji}</p>
        <h2 className="text-xl font-bold">Translation:</h2>
        <p>{translation}</p>
          </>
        )}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Translation History:</h2>
        <div className="history-container">
          {history.map((item, index) => (
            <div key={index} className="p-2 border border-gray-300 rounded mb-2">
              <p><strong>Input:</strong> {item.input}</p>
              <p><strong>Romaji:</strong> {item.romaji}</p>
              <p><strong>Translation:</strong> {item.translation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Translator;
