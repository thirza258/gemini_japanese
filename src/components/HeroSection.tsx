import React, { useState } from 'react';
import { playJapaneseAudio } from '../utils/speech';

interface HeroSectionProps {
  onSelectSample: (phrase: string) => void;
  onScrollToTranslator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSelectSample,
  onScrollToTranslator,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeTab, setActiveTab] = useState<'sample1' | 'sample2'>('sample1');

  const demoPhrases = {
    sample1: {
      text: '一期一会',
      romaji: 'ichigo ichie',
      translation: 'Once-in-a-lifetime encounter / Cherish every meeting',
      items: [
        { char: '一', reading: 'いち', script: 'Kanji', meaning: 'one / single', romaji: 'ichi' },
        { char: '期', reading: 'ご', script: 'Kanji', meaning: 'period / lifetime', romaji: 'go' },
        { char: '一', reading: 'いち', script: 'Kanji', meaning: 'one / single', romaji: 'ichi' },
        { char: '会', reading: 'え', script: 'Kanji', meaning: 'meeting / encounter', romaji: 'e' },
      ],
    },
    sample2: {
      text: '桜が満開です',
      romaji: 'sakura ga mankai desu',
      translation: 'The cherry blossoms are in full bloom.',
      items: [
        { char: '桜', reading: 'さくら', script: 'Kanji', meaning: 'cherry blossom', romaji: 'sakura' },
        { char: 'が', reading: 'が', script: 'Hiragana', meaning: 'subject particle', romaji: 'ga' },
        { char: '満', reading: 'まん', script: 'Kanji', meaning: 'full / complete', romaji: 'man' },
        { char: '開', reading: 'かい', script: 'Kanji', meaning: 'bloom / open', romaji: 'kai' },
        { char: 'で', reading: 'で', script: 'Hiragana', meaning: 'copula te-form', romaji: 'de' },
        { char: 'す', reading: 'す', script: 'Hiragana', meaning: 'polite ending', romaji: 'su' },
      ],
    },
  };

  const currentDemo = demoPhrases[activeTab];

  const handlePlayVoice = async () => {
    setIsPlayingAudio(true);
    await playJapaneseAudio(currentDemo.text);
    setIsPlayingAudio(false);
  };

  const quickChips = [
    { label: '一期一会', sub: 'Proverb' },
    { label: '桜が満開です', sub: 'Daily' },
    { label: 'お疲れ様でした', sub: 'Business' },
    { label: '東京特許許可局', sub: 'JLPT' },
    { label: '雨降って地固まる', sub: 'Idiom' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-rose-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-sm text-xs text-slate-300">
              <span className="font-jp font-bold text-rose-400">日本語 AI 翻訳</span>
              <span className="w-1 h-1 rounded-full bg-slate-500"></span>
              <span className="text-slate-300">Grapheme-by-Grapheme Semantic Engine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18]">
              Translate Japanese with{' '}
              <span className="text-gradient-sakura">True Depth</span>, Furigana & Character Breakdown
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Go beyond flat machine translations. Understand the grammar, Kanji morphology,
              contextual Furigana readings, and Romaji for every Japanese word and character in real-time.
            </p>

            {/* Quick action preset chips */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Click any phrase to try immediately:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {quickChips.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => {
                      onSelectSample(chip.label);
                      onScrollToTranslator();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-rose-500/40 text-xs text-slate-200 hover:text-white transition-all shadow-sm group"
                  >
                    <span className="font-jp font-medium">{chip.label}</span>
                    <span className="text-[10px] px-1 py-0.5 rounded bg-slate-800 text-slate-400 group-hover:text-rose-300">
                      {chip.sub}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onScrollToTranslator}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-rose-600 hover:from-rose-500 hover:to-rose-400 rounded-xl shadow-lg shadow-rose-600/30 hover:shadow-rose-600/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                <span>Launch Live Translator</span>
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 rounded-xl transition-all"
              >
                Explore Features
              </a>
            </div>

            {/* Highlights metrics */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">3 Scripts</div>
                <div className="text-xs text-slate-400">Kanji · Kana · Katakana</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-rose-400">100%</div>
                <div className="text-xs text-slate-400">Contextual Furigana</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white">Zero Cost</div>
                <div className="text-xs text-slate-400">OpenRouter AI Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Demo Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 shadow-2xl shadow-rose-950/20 border border-slate-800 relative">
              {/* Tab Selector */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Interactive Breakdown Preview
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                  <button
                    onClick={() => setActiveTab('sample1')}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                      activeTab === 'sample1'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    一期一会
                  </button>
                  <button
                    onClick={() => setActiveTab('sample2')}
                    className={`px-2.5 py-1 text-xs rounded font-medium transition-all ${
                      activeTab === 'sample2'
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    桜が満開です
                  </button>
                </div>
              </div>

              {/* Japanese Source Display */}
              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Original Japanese
                  </span>
                  <button
                    onClick={handlePlayVoice}
                    disabled={isPlayingAudio}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs text-rose-300 hover:text-rose-200 transition-colors disabled:opacity-50"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a.75.75 0 00-1.28-.53L4.94 6.75H2.75A1.75 1.75 0 001 8.5v3a1.75 1.75 0 001.75 1.75h2.19l3.78 3.78a.75.75 0 001.28-.53V3.5zM12.28 6.72a.75.75 0 011.06 0 5.25 5.25 0 010 7.42.75.75 0 01-1.06-1.06 3.75 3.75 0 000-5.3.75.75 0 010-1.06z" />
                    </svg>
                    <span>{isPlayingAudio ? 'Playing...' : 'Audio'}</span>
                  </button>
                </div>
                <div className="font-jp text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {currentDemo.text}
                </div>
                <div className="text-xs font-mono text-rose-300/90 mt-1">
                  Romaji: {currentDemo.romaji}
                </div>
              </div>

              {/* English Translation */}
              <div className="mt-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                  Natural English Translation
                </div>
                <p className="text-sm font-medium text-slate-200">{currentDemo.translation}</p>
              </div>

              {/* Character by Character Breakdown Cards */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  <span>Deconstructed Graphemes</span>
                  <span className="text-rose-400">{currentDemo.items.length} Elements</span>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-56 overflow-y-auto pr-1">
                  {currentDemo.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-rose-500/40 transition-all text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-jp text-xl font-bold text-white">{item.char}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold uppercase bg-slate-800 text-slate-300 border border-slate-700">
                          {item.script}
                        </span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-1 text-xs">
                        <span className="font-jp text-rose-400 font-medium">{item.reading}</span>
                        <span className="text-slate-400 text-[11px]">({item.romaji})</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-1 leading-tight line-clamp-1">
                        {item.meaning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action trigger button */}
              <div className="mt-4 pt-3 border-t border-slate-800">
                <button
                  onClick={() => {
                    onSelectSample(currentDemo.text);
                    onScrollToTranslator();
                  }}
                  className="w-full py-2 px-3 text-xs font-semibold text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Load this sample into the interactive workspace</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
