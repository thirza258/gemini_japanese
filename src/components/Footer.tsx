import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-600 to-indigo-600 p-[1.5px] flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-jp text-rose-400 font-bold text-base">
                  訳
                </div>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  Nevatal Japanese AI
                </span>
                <span className="block text-xs text-rose-400 font-mono">
                  translate.nevatal.tech
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-sm leading-relaxed font-normal">
              State-of-the-art Japanese neural translator providing contextual Furigana readings,
              Romaji transliterations, and deep grapheme-by-grapheme morphological breakdown.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                AI Service Online
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#translator" className="hover:text-rose-400 transition-colors">
                  Live Translator
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-rose-400 transition-colors">
                  Core Features
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-rose-400 transition-colors">
                  Morphology Visualizer
                </a>
              </li>
              <li>
                <a href="#jlpt" className="hover:text-rose-400 transition-colors">
                  JLPT Preparation
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-rose-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Supported Scripts & Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Features
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Kanji Decomposition</li>
              <li>Contextual Furigana</li>
              <li>Romaji Transliteration</li>
              <li>Native Audio (TTS)</li>
              <li>Politeness & Keigo Analysis</li>
              <li>Export & History Recall</li>
            </ul>
          </div>

          {/* SEO & Infrastructure */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="https://translate.nevatal.tech" className="hover:text-rose-400 transition-colors">
                  translate.nevatal.tech
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="hover:text-rose-400 transition-colors" target="_blank" rel="noreferrer">
                  XML Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" className="hover:text-rose-400 transition-colors" target="_blank" rel="noreferrer">
                  Robots.txt
                </a>
              </li>
              <li>
                <span className="text-slate-400">OpenRouter API</span>
              </li>
              <li>
                <span className="text-slate-400">React 18 + Vite</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Nevatal Tech. All rights reserved. Deployed at{' '}
            <a href="https://translate.nevatal.tech" className="text-rose-400 hover:underline">
              translate.nevatal.tech
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-jp text-slate-400">日本語 AI 翻訳ツール</span>
            <span>·</span>
            <span>English / 日本語</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
