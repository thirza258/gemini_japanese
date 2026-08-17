import React from 'react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: 'furigana',
      title: 'Contextual Furigana Disambiguation',
      badge: 'Reading Precision',
      description:
        "Japanese Kanji have dozens of On'yomi and Kun'yomi readings depending on surrounding words. Our AI determines the exact phonetic reading in natural context.",
      icon: (
        <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      example: '生: なま (Raw) vs い (Live) vs う (Born)',
    },
    {
      id: 'grapheme',
      title: 'Grapheme-by-Grapheme Semantic Decomposition',
      badge: 'Deep Morphology',
      description:
        'Instead of opaque full-sentence output, inspect the structural meaning and contribution of every single character, radical, and grammatical particle.',
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      example: '一期一会 ➔ [一(one) + 期(period) + 一(one) + 会(meet)]',
    },
    {
      id: 'tri-script',
      title: 'Tri-Script Dynamic Classification',
      badge: 'Kanji · Kana · Katakana',
      description:
        'Automatically categorizes each segment into Kanji, Hiragana, Katakana, mixed compounds, and punctuation with color-coded tags and stats.',
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      example: '東京 (Kanji) + の (Hiragana) + カフェ (Katakana)',
    },
    {
      id: 'nuance',
      title: 'Honorifics & Politeness Nuance (Keigo)',
      badge: 'Cultural AI',
      description:
        'Japanese social hierarchy is woven into verbs. Our model understands Sonkeigo (respectful), Kenjougo (humble), and Teineigo (polite) registers.',
      icon: (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      example: 'いらっしゃる vs おる vs 行く',
    },
    {
      id: 'audio',
      title: 'High-Fidelity Japanese Audio Speech',
      badge: 'Native TTS',
      description:
        'Listen to clear audio pronunciation for entire sentences or test individual Kanji mora readings to improve listening comprehension and speaking.',
      icon: (
        <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      example: 'Real-time Web Speech ja-JP synthesis',
    },
    {
      id: 'openrouter',
      title: 'OpenRouter Model Freedom',
      badge: 'LLM Powered',
      description:
        'Seamlessly powered by top-tier models (Gemma 27B, GPT-4o-mini, Claude, Mistral) via OpenRouter, ensuring instant response speed and high uptime.',
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      example: 'Custom API Key or Default Gemma 27B Engine',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 relative bg-slate-900/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 mb-3">
            <span>ENGINEERED FOR ACCURACY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Standard Translators Fail at Japanese
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Japanese is high-context, character-dense, and morphology-rich. Nevatal Japanese AI was
            architected from the ground up to illuminate every layer of meaning.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-rose-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/10 border border-rose-500/20 px-2.5 py-0.5 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-rose-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400">
                  {feature.example}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
