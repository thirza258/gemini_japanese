import React from 'react';

export const JlptSection: React.FC = () => {
  const levels = [
    {
      level: 'JLPT N5 - N4',
      badge: 'Beginner & Elementary',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
      description: 'Master basic sentence structure, essential particles (は, が, を, に, で), Hiragana/Katakana phonetic reading, and fundamental Jouyou Kanji.',
      sample: '私は日本語を勉強しています (I am studying Japanese)',
    },
    {
      level: 'JLPT N3',
      badge: 'Intermediate Bridge',
      color: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
      description: 'Break down multi-kanji compound nouns (Jukugo), transitivity pairs, casual spoken contractions, and complex connective conjunctions.',
      sample: '雨が降りそうなので傘を持っていく (It looks like rain so I will take an umbrella)',
    },
    {
      level: 'JLPT N2 - N1',
      badge: 'Advanced & Native Fluency',
      color: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
      description: 'Decipher sophisticated Keigo (Sonkeigo/Kenjougo), rare On’yomi readings, political & editorial vocabulary, idiomatic Yojijukugo, and literary nuance.',
      sample: '誠心誠意を尽くして対応させていただきます (We will respond with utmost sincerity and dedication)',
    },
  ];

  return (
    <section id="jlpt" className="py-16 md:py-24 relative bg-slate-900/30 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-rose-400 mb-3">
            <span>TAILORED FOR JAPANESE LEARNERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accelerate Your JLPT Mastery (N5 to N1)
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Standard translators only give you the destination. Nevatal Japanese AI gives you the map,
            the compass, and the individual building blocks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((lvl) => (
            <div
              key={lvl.level}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between hover:border-rose-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-rose-200 transition-colors">
                    {lvl.level}
                  </h3>
                  <span className={`text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full border ${lvl.color}`}>
                    {lvl.badge}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mt-3">
                  {lvl.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Example Practice Target
                </span>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-jp text-xs text-rose-300">
                  {lvl.sample}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
