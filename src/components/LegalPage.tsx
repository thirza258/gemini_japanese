import React, { useState, useEffect } from 'react';
import { Icon } from './StudyUI';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onNavigateHome: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onNavigateHome,
}) => {
  const [tab, setTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [tab]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
          >
            <Icon name="arrow" size={14} className="rotate-180" />
            <span>Return to Japanese App</span>
          </button>
          <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-gradient-to-tr from-rose-600 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
              訳
            </span>
            Nevatal Japanese AI
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab('privacy')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              tab === 'privacy'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setTab('terms')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              tab === 'terms'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            Terms of Service
          </button>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        {tab === 'privacy' ? (
          <article className="space-y-8 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-300">
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-rose-400">Legal &amp; Transparency</span>
              <h1 className="text-3xl font-bold text-white mt-1">Privacy Policy</h1>
              <p className="text-xs text-slate-400 mt-2">Last updated: November 1, 2026</p>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                1. Self-Hosted Infrastructure Guarantee
              </h2>
              <p>
                Nevatal Japanese AI is an independently operated, <strong>fully self-hosted platform</strong>. Your personal study logs, Kanji SRS flashcard progress, JLPT mastery scores, and local custom notes are retained on self-hosted instances and client-side browser storage (localStorage / IndexedDB).
              </p>
              <p>
                We do not sell, rent, monetize, or transmit your learning history or personal information to third-party data brokers or advertisement networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                2. AI Provider Disclosure (OpenRouter)
              </h2>
              <p>
                Our deep linguistic features—including contextual Furigana readings, Romaji transliterations, morphological kanji decomposition, and contextual example sentences—utilize language models provided via <strong>OpenRouter</strong>.
              </p>
              <p>
                When you submit a Japanese or English sentence for translation or breakdown, the text is securely transmitted to OpenRouter endpoints for inferencing. By using these AI features, you agree to OpenRouter's policies:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-slate-300">
                <li>
                  <a
                    href="https://openrouter.ai/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 hover:underline font-medium"
                  >
                    OpenRouter Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://openrouter.ai/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-400 hover:underline font-medium"
                  >
                    OpenRouter Terms of Service
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                3. Data Storage &amp; Cookies
              </h2>
              <p>
                The application uses essential browser storage to remember your JLPT level preference, theme setting (Dark/Light), active streak, and offline practice queues. No cross-site tracking cookies are deployed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                4. Data Control &amp; Deletion
              </h2>
              <p>
                You may clear your study progress, history logs, and saved flashcards at any time by clearing your browser cache or using the in-app progress reset tools.
              </p>
            </section>
          </article>
        ) : (
          <article className="space-y-8 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 leading-relaxed text-sm text-slate-300">
            <div>
              <span className="text-xs uppercase tracking-wider font-mono text-rose-400">Terms &amp; Conditions</span>
              <h1 className="text-3xl font-bold text-white mt-1">Terms of Service</h1>
              <p className="text-xs text-slate-400 mt-2">Last updated: November 1, 2026</p>
            </div>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Nevatal Japanese AI, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please discontinue using the service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                2. Educational Use Only
              </h2>
              <p>
                Nevatal Japanese AI provides educational tools, dictionaries, and automated AI translations for Japanese language learners. While we strive for linguistic accuracy, machine translations may contain occasional inaccuracies or nuances that differ from natural human speech.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                3. Third-Party AI Services (OpenRouter)
              </h2>
              <p>
                AI inference functionality is subject to the{' '}
                <a
                  href="https://openrouter.ai/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-400 hover:underline font-medium"
                >
                  OpenRouter Terms of Service
                </a>
                . Users must not use translation or chat features to submit malicious, illegal, or abusive content.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                4. Self-Hosted Availability &amp; Disclaimer
              </h2>
              <p>
                The platform is provided on an "as-is" and "as-available" basis without warranties of any kind. The maintainers shall not be liable for any downtime, data loss, or reliance on automated translations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold text-white border-b border-slate-800 pb-2">
                5. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these terms as new features are introduced. Continued use of the platform constitutes acceptance of updated terms.
              </p>
            </section>
          </article>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Nevatal Japanese AI · Fully Self-Hosted</p>
      </footer>
    </div>
  );
};
