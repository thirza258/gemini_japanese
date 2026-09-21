# Gemini Japanese

A focused Japanese study website built with React, TypeScript, Vite, and a Node.js/SQLite backend. Light mode uses sakura pink, while dark mode uses a neutral white and grey palette. The first visit follows the device preference, and manual choices are saved.

## Study features

- **Landing page:** an introduction to the study tools, an interactive kanji preview, and a starting-level selector. A subtle sakura background animation supports pausing and reduced-motion preferences. The site footer links to each study tool and all five starting levels. “Get started” opens the sidebar workspace; its logo returns to the landing page. Direct links to study activities still work.
- **N5–N1 courses:** 81 ordered courses (15 at N5, N2 and N1; 18 at N4 and N3), with 486 lessons covering vocabulary and kanji, explained grammar, daily sentences, reading, listening, and course checkpoints. Courses contain 648 contextual vocabulary entries, 324 grammar explanations with examples, and 162 original reading/listening passages. Choose any lesson, correct missed checks, and resume at the first unfinished lesson. Completed lessons remain complete when reviewed.
- **Daily sentence courses:** 486 original examples, from greetings, meals, shopping, travel, and asking for help to menus, news and weather, business e-mail, reports and notices, workplace negotiation, and nuanced opinions. Each set has a practical Can-do goal, translations, register guidance, audio, recall mode, and comprehension checks. N5/N4 examples include optional furigana. The course library can be filtered to sentence practice and searched by topic or grammar.
- **Kanji flashcards:** 600 curated cards across N5–N1 (120 per level). Type the reading in hiragana, katakana, or romaji and the answer is checked for you, with common alternative spellings (shi/si, ji/zi, tsu/tu) and long-vowel forms accepted; a self-check mode keeps reveal-and-rate for meanings. Cards carry meanings, representative on’yomi and kun’yomi, example words, audio, shuffle, and a “still learning” deck.
- **Kanji builder:** 30 courses and 150 interactive challenges, with six five-lesson courses per level. Choose a level and a themed course, study the components, then place them in the correct order. Pieces are reusable for characters such as 林 and 森. Lessons include component notes, pronunciation examples, and clearly labeled memory stories. Course progress and lesson totals come from the curriculum data.
- **Particles and grammar:** 80 fill-the-gap questions (16 per level), with answer explanations and progressively more complex expressions. Every level also has a dedicated particle course in the course library, from は versus が through to ならでは and はおろか.
- **Hiragana and katakana:** 104 sounds per script (46 basic, 25 voiced, and 33 combined), with separate or mixed decks. Study charts, a single pass of flashcards, unlimited repeat practice, and ten-question quizzes support kana → reading and reading → kana. Every round is answered by typing the reading, or by writing the kana itself when a Japanese keyboard is available, with a choose-from-four fallback when it is not. Missed cards return after two other cards; correct cards return after the rest of the deck. Aim for three consecutive correct recalls per character in each practice round. Reading guesses accept common alternate romanizations, and reverse questions avoid ambiguous same-sound choices.
- **Reading room:** 25 original passages across the five levels (five per level), with optional furigana, English translations, vocabulary, audio, and comprehension checks.
- **Detailed translator:** Japanese-to-English translation, romaji, contextual character readings, script filters, copy, and the last 20 translations. The included sample phrases work without API access.
- **Accounts and guest access:** every page works without signing in. Guest progress, translation history, and translator connection settings stay in memory for the current visit. Email/password accounts save learning progress and the last 20 translations to the server.
- **Progress:** learned items, practice activity, accuracy, local-calendar streaks, configurable daily goals, and JSON export. Signed-in accounts retain the most recent 3,000 attempts.

The collections are curated practice sets, **not a complete exam syllabus**. Level assignments are approximate study groupings. The JLPT does not publish official kanji, vocabulary, or grammar item lists. See the [official level descriptions](https://www.jlpt.jp/e/about/levelsummary.html) and [JLPT FAQ](https://www.jlpt.jp/e/faq/). The distinction between radicals and other components follows the [KanjiVG glossary](https://kanjivg.tagaini.net/glossary.html). Component memory stories are mnemonics, not historical etymologies.

Course content is independently authored. Practical goals draw on the Can-do approach described in [Irodori](https://www.irodori.jpf.go.jp/en/about.html) and [JF Japanese e-Learning Minato](https://minato-jf.jp/). JF/CEFR and JLPT levels are different frameworks, with no one-to-one equivalence implied. Courses link to official resources for further study, recorded audio, and exam question formats. Kana recall streaks belong to the current practice round; individual attempts and course completion use the existing guest/account progress system.

## Local development

Use **Node.js 24 or newer**.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The command starts both Vite and the account API (port 8787); Vite proxies `/api` requests to it. No cloud account or authentication service configuration is needed. Exercises and sample translations remain available without signing in.

Guest practice resets on refresh or sign-in. A new signed-in session loads that account’s saved work. Signing out clears its data from the interface. Theme preference is the only setting persisted for anonymous visitors.

```sh
npm test       # Authentication, persistence, courses, kana scheduling, curriculum, and translator checks
npm run lint
npm run build
```

## Account storage and recovery

- Accounts, hashed sessions, and learning profiles live in `data/gemini-japanese.sqlite`. Override the path with `DATABASE_PATH`. The directory is excluded from Git and Docker build contexts.
- Passwords use salted scrypt hashes. Session cookies are HttpOnly, SameSite=Lax, and expire after 30 days; production cookies use Secure by default. No passwords or session tokens are stored in browser local storage.
- Profile reads and writes require a valid session. The server selects the account from that session and rejects requests from a stale account tab. Guest requests cannot read or write profiles.
- Registration displays a recovery code once. Save it to reset a forgotten password; email delivery is not required. Recovery codes are hashed in the database, single use, and rotated after password recovery. Recovery invalidates existing sessions. Signed-in users can generate a replacement code after confirming their password.
- Saving failures remain visible with a retry action. Pending writes are completed before normal sign-out. In-flight saves are serialized, and a failed initial load never overwrites saved progress.
- Custom translator keys stay on the signed-in user’s current device and are scoped to that account. They are never uploaded with learning progress. Existing anonymous storage is not imported into accounts.

## Production

```sh
npm run build
npm start
```

The Node server serves `dist/` and `/api` from one origin on port 3000. Put it behind an HTTPS reverse proxy that preserves the incoming `Host` header. Set `TRUST_PROXY=true` only behind your own proxy, which must replace or append the client address in `X-Forwarded-For`. For a local HTTP smoke test only, use `COOKIE_SECURE=false npm start`.

```sh
docker compose up --build
```

The Compose configuration exposes a local HTTP preview on port 5175 and keeps the SQLite database in the `learning-data` volume. For HTTPS deployment, set `COOKIE_SECURE=true`. Run one application instance against this SQLite database and back up the database with its WAL consistently. The static frontend alone does not provide authentication or account saving.

## Translator connection

The Node API provides the OpenRouter proxy in development and production:

- `OPENROUTER_API_KEY`: optional server-side key, read from the environment or `.env`. It is never included in the frontend bundle.
- `VITE_OPENROUTER_ENDPOINT`: endpoint override; defaults to `/api/openrouter/chat/completions`.
- `VITE_OPENROUTER_MODEL`: model ID override; the repository's existing default is retained.

Users can configure a custom endpoint, model ID, or personal key in **Translator settings**. Custom translations require a working connection. Requests time out after 60 seconds and are canceled when replaced or when leaving the translator. Guest connection settings are temporary. Signed-in settings use account-scoped browser storage; keys in browser storage remain accessible to scripts on the same origin.

## Content and implementation

- `src/data/curriculum.ts`: level descriptions, flashcards, grammar, kana, and reading passages.
- `src/data/courses/`: the five course paths, daily sentence sets, lesson assembly, grading, and resume logic.
- `src/data/kanaMemory.ts`: kana decks, reading aliases, repeat scheduling, and unambiguous reverse choices.
- `src/data/kanjiBuilder.ts`: construction courses, components, arrangements, and hints.
- `src/hooks/useStudy.ts` and `src/data/studySession.ts`: temporary guest sessions, account loading, and serialized saving.
- `src/auth/`: session state and authenticated API requests.
- `server/`: HTTP API, password and session handling, validation, and SQLite storage.
- `src/components/`: individual study activities and shared accessible controls.
- `src/index.css`: theme tokens, layouts, mobile styles, and reduced-motion support.

Audio uses the browser's speech synthesis; voice quality and Japanese voice availability depend on the device. Signed-in progress is available on other devices using the same account and server.
