import React, { useState } from 'react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the Kanji and Character Breakdown work?',
      answer:
        'The translator combines Unicode grapheme segmentation with advanced LLM morphological parsing. For each segment, it automatically determines whether it is Kanji, Hiragana, Katakana, or punctuation, infers the exact Furigana reading in context (avoiding common On/Kun homophone errors), provides Romaji, and details the semantic gloss.',
    },
    {
      level: 'Learner Utility',
      question: 'Is Nevatal Japanese AI Translator suitable for JLPT preparation?',
      answer:
        'Yes, it was designed specifically to bridge the gap for Japanese learners across JLPT N5 through N1. Instead of simply providing an English sentence, it reveals the building blocks—helping you identify tricky particle usages, compound verbs, and nuances like honorific registers (Sonkeigo, Kenjougo).',
    },
    {
      question: 'Can it translate spoken, colloquial, or anime Japanese?',
      answer:
        'Absolutely. The AI model is trained on diverse conversational dialogue, casual contractions (like ちゃう, なきゃ, っす), youth slang, and anime idioms that standard dictionary tools frequently fail to tokenize.',
    },
    {
      question: 'Is this translation tool free to use at translate.nevatal.tech?',
      answer:
        'Yes, the web application is hosted and accessible completely free directly from your web browser at translate.nevatal.tech without requiring account creation or subscriptions.',
    },
    {
      question: 'Can I use my own OpenRouter API key or switch AI models?',
      answer:
        'Yes! You can click the "AI Config" button in the top navigation bar to supply your own OpenRouter API key or choose custom models such as google/gemma-4-26b-a4b-it, openai/gpt-4o-mini, or anthropic/claude-3.5-sonnet.',
    },
    {
      question: 'How accurate is the Japanese audio pronunciation?',
      answer:
        'We use the standard Web Speech API with Japanese (ja-JP) native voice profiles. You can trigger sentence-level audio playback or listen to individual character readings at your preferred learning pace.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 relative bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 mb-3">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions & Answers
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Everything you need to know about our Japanese AI translation architecture and features.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-rose-400 border-rose-500/30' : ''
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4 animate-fade-in font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
