import React from 'react';

export const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      feature: 'Contextual Furigana Reading Generation',
      nevatal: true,
      googleTranslate: false,
      staticDictionary: 'Partial (Dictionary form only)',
      nevatalNote: 'Selects the exact On/Kun reading matching sentence syntax',
    },
    {
      feature: 'Grapheme-by-Grapheme Semantic Breakdown',
      nevatal: true,
      googleTranslate: false,
      staticDictionary: 'Manual lookup per character',
      nevatalNote: 'Automated decomposition of every Kanji and Kana particle',
    },
    {
      feature: 'Tri-Script Classification (Kanji / Kana / Katakana)',
      nevatal: true,
      googleTranslate: false,
      staticDictionary: false,
      nevatalNote: 'Color-coded tags and script composition statistics',
    },
    {
      feature: 'Romaji Transliteration per Character & Sentence',
      nevatal: true,
      googleTranslate: 'Full sentence only',
      staticDictionary: 'Word only',
      nevatalNote: 'Available at both macro sentence level & micro character level',
    },
    {
      feature: 'Nuanced Keigo (Honorifics / Kenjougo) Awareness',
      nevatal: true,
      googleTranslate: 'Frequently flattens politeness',
      staticDictionary: false,
      nevatalNote: 'Accurately explains humble vs respectful registers',
    },
    {
      feature: 'Instant Japanese Native TTS Audio',
      nevatal: true,
      googleTranslate: true,
      staticDictionary: 'Limited',
      nevatalNote: 'Play whole sentence or individual Kanji components',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 mb-3">
            <span>DIRECT FEATURE COMPARISON</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Nevatal Outperforms Generic Tools
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Compare our contextual neural decomposition against standard translation services and static dictionaries.
          </p>
        </div>

        <div className="glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/90 text-xs uppercase tracking-wider text-slate-300">
                  <th className="py-4 px-6 font-bold">Capabilities</th>
                  <th className="py-4 px-6 font-bold text-rose-400 bg-rose-500/10 border-x border-rose-500/20">
                    <div className="flex items-center gap-1.5">
                      <span>訳</span>
                      <span>Nevatal AI</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 font-semibold text-slate-400">Google Translate</th>
                  <th className="py-4 px-6 font-semibold text-slate-400">Static Dictionaries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-sm">
                {comparisonItems.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-900/40 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-white">
                      <div>{item.feature}</div>
                      <div className="text-xs text-slate-400 font-normal mt-0.5">
                        {item.nevatalNote}
                      </div>
                    </td>

                    {/* Nevatal Column */}
                    <td className="py-4 px-6 bg-rose-500/5 border-x border-rose-500/20">
                      <div className="flex items-center gap-2 text-rose-400 font-bold">
                        <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Supported</span>
                      </div>
                    </td>

                    {/* Google Translate Column */}
                    <td className="py-4 px-6 text-slate-400">
                      {item.googleTranslate === true ? (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Yes</span>
                        </div>
                      ) : item.googleTranslate === false ? (
                        <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>No</span>
                        </div>
                      ) : (
                        <span className="text-xs">{item.googleTranslate}</span>
                      )}
                    </td>

                    {/* Static Dictionary Column */}
                    <td className="py-4 px-6 text-slate-400">
                      {item.staticDictionary === true ? (
                        <div className="flex items-center gap-2 text-emerald-400">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>Yes</span>
                        </div>
                      ) : item.staticDictionary === false ? (
                        <div className="flex items-center gap-2 text-slate-400">
                          <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                          <span>No</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400">{item.staticDictionary}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
