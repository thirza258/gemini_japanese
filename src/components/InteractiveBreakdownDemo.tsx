import React, { useState } from 'react';
import { playJapaneseAudio } from '../utils/speech';

export const InteractiveBreakdownDemo: React.FC = () => {
  const demos = [
    {
      id: 'nana-korobi',
      japanese: '七転び八起き',
      romaji: 'nanakorobi yaoki',
      english: 'Fall down seven times, stand up eight (Never give up).',
      context: 'Classic Japanese Yojijukugo idiom on perseverance and resilience.',
      tokens: [
        { char: '七', reading: 'なな', type: 'Kanji', romaji: 'nana', gloss: 'seven' },
        { char: '転', reading: 'ころ', type: 'Kanji', romaji: 'koro', gloss: 'fall / tumble' },
        { char: 'び', reading: 'び', type: 'Hiragana', romaji: 'bi', gloss: 'okurigana verb suffix' },
        { char: '八', reading: 'や', type: 'Kanji', romaji: 'ya', gloss: 'eight' },
        { char: '起', reading: 'お', type: 'Kanji', romaji: 'o', gloss: 'wake / rise up' },
        { char: 'き', reading: 'き', type: 'Hiragana', romaji: 'ki', gloss: 'okurigana verb suffix' },
      ],
    },
    {
      id: 'juunin-toiro',
      japanese: '十人十色',
      romaji: 'jūnin toiro',
      english: 'Ten men, ten colors (To each their own / Everyone is unique).',
      context: 'Cultural proverb highlighting individuality and diversity of thought.',
      tokens: [
        { char: '十', reading: 'じゅう', type: 'Kanji', romaji: 'jū', gloss: 'ten' },
        { char: '人', reading: 'にん', type: 'Kanji', romaji: 'nin', gloss: 'people / counter' },
        { char: '十', reading: '十 (と)', type: 'Kanji', romaji: 'to', gloss: 'ten' },
        { char: '色', reading: 'いろ', type: 'Kanji', romaji: 'iro', gloss: 'colors / personalities' },
      ],
    },
    {
      id: 'keigo-onegai',
      japanese: '何卒よろしくお願い申し上げます',
      romaji: 'nanitozo yoroshiku onegai moushiagemasu',
      english: 'I humbly request your highest favor and kind cooperation.',
      context: 'Highest form of business Keigo (Kenjougo humble honorifics).',
      tokens: [
        { char: '何', reading: 'なに', type: 'Kanji', romaji: 'nani', gloss: 'what' },
        { char: '卒', reading: 'とぞ', type: 'Kanji', romaji: 'tozo', gloss: 'by all means / kindly' },
        { char: 'よ', reading: 'よ', type: 'Hiragana', romaji: 'yo', gloss: 'good' },
        { char: 'ろ', reading: 'ろ', type: 'Hiragana', romaji: 'ro', gloss: 'mora' },
        { char: 'し', reading: 'し', type: 'Hiragana', romaji: 'shi', gloss: 'inflection' },
        { char: 'く', reading: 'く', type: 'Hiragana', romaji: 'ku', gloss: 'adverbial' },
        { char: 'お', reading: 'お', type: 'Hiragana', romaji: 'o', gloss: 'honorific' },
        { char: '願', reading: 'ねが', type: 'Kanji', romaji: 'nega', gloss: 'wish / request' },
        { char: 'い', reading: 'い', type: 'Hiragana', romaji: 'i', gloss: 'stem' },
        { char: '申', reading: 'もう', type: 'Kanji', romaji: 'mou', gloss: 'humbly say (Kenjougo)' },
        { char: 'し', reading: 'し', type: 'Hiragana', romaji: 'shi', gloss: 'connector' },
        { char: '上', reading: 'あ', type: 'Kanji', romaji: 'a', gloss: 'offer upwards' },
        { char: 'げ', reading: 'げ', type: 'Hiragana', romaji: 'ge', gloss: 'verb suffix' },
        { char: 'ま', reading: 'ま', type: 'Hiragana', romaji: 'ma', gloss: 'polite' },
        { char: 'す', reading: 'す', type: 'Hiragana', romaji: 'su', gloss: 'ending' },
      ],
    },
  ];

  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [activeTokenIndex, setActiveTokenIndex] = useState<number | null>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const current = demos[selectedDemoIndex];

  const handlePlayVoice = async () => {
    setIsPlayingAudio(true);
    await playJapaneseAudio(current.japanese);
    setIsPlayingAudio(false);
  };

  return (
    <section id="demo" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-indigo-400 mb-3">
            <span>INTERACTIVE MORPHOLOGY VISUALIZER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How Neural Dissection Works
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Hover or click on individual Kanji and Kana tokens to see their precise phonetic furigana,
            Romaji pronunciation, and contextual linguistic role.
          </p>
        </div>

        {/* Demo Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {demos.map((d, index) => (
            <button
              key={d.id}
              onClick={() => {
                setSelectedDemoIndex(index);
                setActiveTokenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                selectedDemoIndex === index
                  ? 'bg-rose-600 text-white border-rose-500 shadow-md shadow-rose-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="font-jp">{d.japanese}</span>
            </button>
          ))}
        </div>

        {/* Interactive Visualizer Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl max-w-4xl mx-auto">
          {/* Top Bar with Audio */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Selected Phrase
              </span>
              <h3 className="font-jp text-3xl sm:text-4xl font-extrabold text-white mt-1">
                {current.japanese}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">Romaji: {current.romaji}</p>
            </div>

            <button
              onClick={handlePlayVoice}
              disabled={isPlayingAudio}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-sm font-medium text-rose-300 hover:text-rose-200 transition-all self-start sm:self-auto shadow-sm disabled:opacity-50"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 3.5a.75.75 0 00-1.28-.53L4.94 6.75H2.75A1.75 1.75 0 001 8.5v3a1.75 1.75 0 001.75 1.75h2.19l3.78 3.78a.75.75 0 001.28-.53V3.5zM12.28 6.72a.75.75 0 011.06 0 5.25 5.25 0 010 7.42.75.75 0 01-1.06-1.06 3.75 3.75 0 000-5.3.75.75 0 010-1.06z" />
              </svg>
              <span>{isPlayingAudio ? 'Speaking...' : 'Listen Pronunciation'}</span>
            </button>
          </div>

          {/* Meaning & Context */}
          <div className="my-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                English Translation
              </span>
              <p className="text-sm font-semibold text-white">{current.english}</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                Linguistic Note
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{current.context}</p>
            </div>
          </div>

          {/* Interactive Graphemes Strip */}
          <div className="pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
              Click any token to inspect individual breakdown:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {current.tokens.map((token, index) => {
                const isSelected = activeTokenIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTokenIndex(index)}
                    className={`p-3 rounded-xl border flex flex-col items-center min-w-[64px] transition-all ${
                      isSelected
                        ? 'bg-rose-600/20 border-rose-500 ring-2 ring-rose-500/30 scale-105'
                        : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                    }`}
                  >
                    <span className="text-[11px] font-jp font-semibold text-rose-400">
                      {token.reading}
                    </span>
                    <span className="font-jp text-2xl font-bold text-white my-1">
                      {token.char}
                    </span>
                    <span className="text-[10px] uppercase font-mono text-slate-400">
                      {token.romaji}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Token Detail Panel */}
          {activeTokenIndex !== null && current.tokens[activeTokenIndex] && (
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-rose-500/30 flex items-center justify-between gap-4 animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-rose-600/15 border border-rose-500/30 flex items-center justify-center font-jp text-3xl font-bold text-rose-300">
                  {current.tokens[activeTokenIndex].char}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-rose-400 font-jp">
                      Reading: {current.tokens[activeTokenIndex].reading}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 uppercase font-semibold">
                      {current.tokens[activeTokenIndex].type}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-white mt-1">
                    Semantic Role: <span className="text-slate-200">{current.tokens[activeTokenIndex].gloss}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
                    Romaji: {current.tokens[activeTokenIndex].romaji}
                  </div>
                </div>
              </div>

              <button
                onClick={() => playJapaneseAudio(current.tokens[activeTokenIndex].char)}
                title="Pronounce character"
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-rose-300 transition-colors flex-shrink-0"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a.75.75 0 00-1.28-.53L4.94 6.75H2.75A1.75 1.75 0 001 8.5v3a1.75 1.75 0 001.75 1.75h2.19l3.78 3.78a.75.75 0 001.28-.53V3.5zM12.28 6.72a.75.75 0 011.06 0 5.25 5.25 0 010 7.42.75.75 0 01-1.06-1.06 3.75 3.75 0 000-5.3.75.75 0 010-1.06z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
