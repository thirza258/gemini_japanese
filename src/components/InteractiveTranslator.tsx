import React, { useState, useEffect, useRef } from 'react';
import { run, type TranslationResponse, type ScriptType } from '../ai_handler/translator';
import { SAMPLE_PHRASES, type SamplePhrase } from '../data/japaneseSamples';
import { playJapaneseAudio } from '../utils/speech';

interface InteractiveTranslatorProps {
  initialInput?: string;
  onOpenSettings: () => void;
}

export const InteractiveTranslator: React.FC<InteractiveTranslatorProps> = ({
  initialInput = '',
  onOpenSettings,
}) => {
  const [input, setInput] = useState(initialInput || '桜が満開です');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [romaji, setRomaji] = useState('');
  const [translation, setTranslation] = useState('');
  const [breakdown, setBreakdown] = useState<TranslationResponse['breakdown']>([]);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'kanji' | 'kana' | 'other'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playingCharIndex, setPlayingCharIndex] = useState<number | null>(null);
  const [history, setHistory] = useState<Array<{ id: string; timestamp: number; input: string } & TranslationResponse>>([]);

  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Load history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('nevatal_translation_history');
      if (saved) {
        setHistory(JSON.parse(saved));
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  // Sync initial input when changed from parent
  useEffect(() => {
    if (initialInput && initialInput.trim().length > 0) {
      setInput(initialInput);
      executeTranslation(initialInput);
    }
  }, [initialInput]);

  // Initial translation for default text if empty
  useEffect(() => {
    if (!translation && input === '桜が満開です') {
      executeTranslation('桜が満開です');
    }
  }, []);

  const saveToHistory = (newEntry: { input: string } & TranslationResponse) => {
    const updated = [
      {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        timestamp: Date.now(),
        ...newEntry,
      },
      ...history.slice(0, 19), // Keep last 20
    ];
    setHistory(updated);
    try {
      localStorage.setItem('nevatal_translation_history', JSON.stringify(updated));
    } catch {
      // Ignore storage errors
    }
  };

  const isJapanese = (text: string): boolean => {
    const japaneseRegex = /[\u3040-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]/;
    return japaneseRegex.test(text);
  };

  const executeTranslation = async (textToTranslate?: string) => {
    const query = (textToTranslate !== undefined ? textToTranslate : input).trim();
    setError('');

    if (!query) {
      setError('Please enter Japanese text to translate.');
      return;
    }

    if (!isJapanese(query)) {
      setError('Please enter valid Japanese text (Hiragana, Katakana, or Kanji).');
      return;
    }

    setLoading(true);

    try {
      const response = await run({ input: query });
      setRomaji(response.romaji);
      setTranslation(response.translation);
      setBreakdown(response.breakdown);

      saveToHistory({
        input: query,
        ...response,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Translation failed. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      executeTranslation();
    }
  };

  const handleCopy = (text: string, key: string) => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handlePaste = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        setInput(text);
      }
    } catch (e) {
      console.warn('Clipboard paste blocked:', e);
    }
  };

  const handleSpeakMain = async () => {
    if (!input || isPlayingAudio) return;
    setIsPlayingAudio(true);
    await playJapaneseAudio(input);
    setIsPlayingAudio(false);
  };

  const handleSpeakChar = async (char: string, index: number) => {
    setPlayingCharIndex(index);
    await playJapaneseAudio(char);
    setPlayingCharIndex(null);
  };

  const handleSelectPreset = (sample: SamplePhrase) => {
    setInput(sample.japanese);
    if (sample.cachedResponse) {
      setRomaji(sample.cachedResponse.romaji);
      setTranslation(sample.cachedResponse.translation);
      setBreakdown(sample.cachedResponse.breakdown);
      setError('');
    } else {
      executeTranslation(sample.japanese);
    }
  };

  const filteredBreakdown = breakdown.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'kanji') return item.script === 'kanji';
    if (activeFilter === 'kana') return item.script === 'hiragana' || item.script === 'katakana';
    if (activeFilter === 'other') return item.script === 'punctuation' || item.script === 'other' || item.script === 'mixed';
    return true;
  });

  const kanjiCount = breakdown.filter((b) => b.script === 'kanji').length;
  const hiraganaCount = breakdown.filter((b) => b.script === 'hiragana').length;
  const katakanaCount = breakdown.filter((b) => b.script === 'katakana').length;

  const categories = ['All', 'JLPT N5-N3', 'Daily Life', 'Anime & Manga', 'Business Keigo', 'Proverbs & Idioms'];

  const displayedSamples = SAMPLE_PHRASES.filter(
    (s) => selectedCategory === 'All' || s.category === selectedCategory
  );

  return (
    <section id="translator" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 mb-3">
            <span>LIVE INTERACTIVE TRANSLATOR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Deep Japanese Character Analysis Workspace
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Paste any Japanese phrase, sentence, or kanji compound below to receive full grammatical
            breakdown, furigana readings, romaji, and semantic gloss.
          </p>
        </div>

        {/* Preset Category Selector Chips */}
        <div className="mb-6">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Quick Preset Library:
            </span>
            <div className="flex items-center gap-1 overflow-x-auto pb-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-colors whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white font-medium shadow-sm'
                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            {displayedSamples.map((sample) => (
              <button
                key={sample.id}
                onClick={() => handleSelectPreset(sample)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white transition-all whitespace-nowrap shadow-sm group"
              >
                <span className="font-jp font-semibold text-rose-300 group-hover:text-rose-200">
                  {sample.japanese}
                </span>
                <span className="text-slate-400 text-[11px]">— {sample.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Workspace Grid */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column: Input Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="glass-panel rounded-2xl p-5 flex-1 flex flex-col border border-slate-800 shadow-xl">
              {/* Input Header Toolbar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-jp text-base font-bold text-white">日本語</span>
                  <span className="text-xs text-slate-400 font-medium">Japanese Input</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePaste}
                    title="Paste from clipboard"
                    className="p-1.5 rounded-md text-xs text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    Paste
                  </button>
                  <button
                    onClick={() => {
                      setInput('');
                      setError('');
                    }}
                    title="Clear input"
                    className="p-1.5 rounded-md text-xs text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>

              {/* Japanese Textarea */}
              <div className="relative flex-1 min-h-[160px] flex flex-col">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter Japanese text here... (漢字, ひらがな, カタカナ)"
                  className="w-full flex-1 bg-slate-900/80 border border-slate-800 rounded-xl p-3.5 text-base sm:text-lg font-jp text-white placeholder-slate-500 focus:outline-none focus:border-rose-500/80 focus:ring-1 focus:ring-rose-500/40 resize-none transition-all"
                  rows={6}
                />
              </div>

              {/* Input Footer & Translate Button */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-xs text-slate-400 w-full sm:w-auto justify-between sm:justify-start">
                  <span>{input.length} characters</span>
                  <span className="hidden sm:inline text-slate-400">·</span>
                  <span className="hidden sm:inline text-[11px] text-slate-400">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">Ctrl+Enter</kbd>
                  </span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleSpeakMain}
                    disabled={!input || isPlayingAudio}
                    title="Listen to Japanese pronunciation"
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-rose-300 hover:text-rose-200 transition-colors disabled:opacity-40"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 3.5a.75.75 0 00-1.28-.53L4.94 6.75H2.75A1.75 1.75 0 001 8.5v3a1.75 1.75 0 001.75 1.75h2.19l3.78 3.78a.75.75 0 001.28-.53V3.5zM12.28 6.72a.75.75 0 011.06 0 5.25 5.25 0 010 7.42.75.75 0 01-1.06-1.06 3.75 3.75 0 000-5.3.75.75 0 010-1.06z" />
                    </svg>
                  </button>

                  <button
                    onClick={() => executeTranslation()}
                    disabled={loading || !input.trim()}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 shadow-md shadow-rose-600/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                        </svg>
                        <span>Analyzing...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        <span>Translate</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message Box */}
              {error && (
                <div className="mt-3 p-3 rounded-xl bg-rose-950/60 border border-rose-800/80 text-xs text-rose-300 flex items-start justify-between gap-2">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span>{error}</span>
                  </div>
                  <button
                    onClick={onOpenSettings}
                    className="text-xs font-semibold underline text-rose-300 hover:text-white"
                  >
                    Settings
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Comprehensive Output Display */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {/* Translation & Romaji Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
              {/* English Translation */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                      English Translation
                    </span>
                  </div>
                  {translation && (
                    <button
                      onClick={() => handleCopy(translation, 'translation')}
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-900/80 border border-slate-800 transition-colors"
                    >
                      {copiedKey === 'translation' ? (
                        <span className="text-emerald-400 font-medium">Copied!</span>
                      ) : (
                        <span>Copy</span>
                      )}
                    </button>
                  )}
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 min-h-[56px] flex items-center">
                  <p className="text-base sm:text-lg font-medium text-white break-words">
                    {translation || (loading ? 'Generating nuanced English translation...' : 'Translation will appear here.')}
                  </p>
                </div>
              </div>

              {/* Romaji Transliteration */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Romaji Transliteration
                  </span>
                  {romaji && (
                    <button
                      onClick={() => handleCopy(romaji, 'romaji')}
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 transition-colors"
                    >
                      {copiedKey === 'romaji' ? (
                        <span className="text-emerald-400 font-medium">Copied!</span>
                      ) : (
                        <span>Copy</span>
                      )}
                    </button>
                  )}
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 min-h-[44px] flex items-center">
                  <p className="text-sm font-mono text-rose-300/90 break-words">
                    {romaji || (loading ? 'Calculating pronunciation...' : '—')}
                  </p>
                </div>
              </div>

              {/* Script Breakdown Statistics */}
              {breakdown.length > 0 && (
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>Script Composition ({breakdown.length} Graphemes)</span>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        Kanji: {kanjiCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        Hiragana: {hiraganaCount}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        Katakana: {katakanaCount}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Character Breakdown Decomposition Section */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-slate-800 mb-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Character-by-Character Breakdown</span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-normal">
                      {filteredBreakdown.length} Items
                    </span>
                  </h3>
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeFilter === 'all' ? 'bg-rose-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setActiveFilter('kanji')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeFilter === 'kanji' ? 'bg-rose-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Kanji ({kanjiCount})
                  </button>
                  <button
                    onClick={() => setActiveFilter('kana')}
                    className={`px-2 py-1 rounded transition-colors ${
                      activeFilter === 'kana' ? 'bg-rose-600 text-white font-medium' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Kana ({hiraganaCount + katakanaCount})
                  </button>
                </div>
              </div>

              {/* Character Breakdown Cards Grid */}
              {loading ? (
                <div className="py-12 flex flex-col items-center justify-center text-slate-400 space-y-3">
                  <svg className="animate-spin h-8 w-8 text-rose-500" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <p className="text-sm">Dissecting Japanese graphemes and contextual readings...</p>
                </div>
              ) : filteredBreakdown.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-sm">
                  No breakdown items available for this filter.
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 max-h-[380px] overflow-y-auto pr-1">
                  {filteredBreakdown.map((item, index) => {
                    const getScriptBadgeColor = (script: ScriptType) => {
                      switch (script) {
                        case 'kanji':
                          return 'bg-rose-500/10 text-rose-300 border-rose-500/30';
                        case 'hiragana':
                          return 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30';
                        case 'katakana':
                          return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
                        default:
                          return 'bg-slate-800 text-slate-400 border-slate-700';
                      }
                    };

                    return (
                      <div
                        key={`${item.text}-${index}`}
                        className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-rose-500/40 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          {/* Top Row: Character, Furigana, Script Badge & Audio */}
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex flex-col">
                              {item.reading ? (
                                <span className="font-jp text-xs font-semibold text-rose-400 leading-none">
                                  {item.reading}
                                </span>
                              ) : (
                                <span className="text-[10px] text-slate-400 leading-none">—</span>
                              )}
                              <span className="font-jp text-2xl font-bold text-white tracking-wide mt-0.5">
                                {item.text}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5">
                              <span
                                className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full border ${getScriptBadgeColor(
                                  item.script
                                )}`}
                              >
                                {item.script}
                              </span>
                              <button
                                onClick={() => handleSpeakChar(item.text, index)}
                                title={`Pronounce ${item.text}`}
                                className="p-1 text-slate-400 hover:text-rose-300 rounded hover:bg-slate-800 transition-colors"
                              >
                                {playingCharIndex === index ? (
                                  <span className="text-[10px] text-rose-400">...</span>
                                ) : (
                                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 3.5a.75.75 0 00-1.28-.53L4.94 6.75H2.75A1.75 1.75 0 001 8.5v3a1.75 1.75 0 001.75 1.75h2.19l3.78 3.78a.75.75 0 001.28-.53V3.5z" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Romaji & Meaning */}
                          <div className="mt-2.5 space-y-1 text-xs">
                            <div className="flex items-center justify-between text-slate-400">
                              <span>Romaji:</span>
                              <span className="font-mono text-slate-200 font-medium">
                                {item.romaji || '—'}
                              </span>
                            </div>
                            <div className="text-slate-300 pt-1 border-t border-slate-800/60">
                              <span className="text-[11px] text-slate-400">Meaning: </span>
                              <span className="font-medium text-slate-100">
                                {item.translation || '—'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Translation History Accordion */}
        {history.length > 0 && (
          <div className="mt-8 glass-panel rounded-2xl p-5 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Recent Translation History ({history.length})
                </h4>
              </div>
              <button
                onClick={() => {
                  setHistory([]);
                  localStorage.removeItem('nevatal_translation_history');
                }}
                className="text-xs text-slate-400 hover:text-rose-400 transition-colors"
              >
                Clear History
              </button>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-56 overflow-y-auto pr-1">
              {history.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setInput(item.input);
                    setRomaji(item.romaji);
                    setTranslation(item.translation);
                    setBreakdown(item.breakdown);
                  }}
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-rose-500/40 transition-all cursor-pointer text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-jp font-bold text-sm text-white group-hover:text-rose-300 transition-colors truncate">
                      {item.input}
                    </span>
                    <span className="text-[10px] text-slate-400 flex-shrink-0">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">{item.translation}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
