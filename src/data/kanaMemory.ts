import {
  KANA,
  shuffle,
  type KanaCharacter,
  type KanaGroup,
} from "./curriculum";

export type KanaScript = "hiragana" | "katakana";
export type KanaScriptChoice = KanaScript | "both";
export type KanaGroupChoice = KanaGroup | "all";
export interface KanaMemoryCard {
  id: string;
  script: KanaScript;
  kana: KanaCharacter;
}
export interface KanaMemorySession {
  queue: KanaMemoryCard[];
  streaks: Record<string, number>;
  attempts: number;
  correct: number;
}

export function makeKanaDeck(
  script: KanaScriptChoice,
  group: KanaGroupChoice,
): KanaMemoryCard[] {
  const scripts: KanaScript[] =
    script === "both" ? ["hiragana", "katakana"] : [script];
  return KANA.filter((item) => group === "all" || item.group === group).flatMap(
    (kana) =>
      scripts.map((current) => ({
        id: `${current}-${kana.id}`,
        script: current,
        kana,
      })),
  );
}

export function startKanaMemory(
  cards: readonly KanaMemoryCard[],
): KanaMemorySession {
  return {
    queue: [...cards],
    streaks: Object.fromEntries(cards.map((card) => [card.id, 0])),
    attempts: 0,
    correct: 0,
  };
}

export function matchesKanaReading(
  kana: KanaCharacter,
  answer: string,
): boolean {
  const normalized = answer
    .trim()
    .toLowerCase()
    .replace(/[\s'-]/g, "");
  return [kana.romaji, ...kana.aliases].includes(normalized);
}

export function answerKanaMemory(
  session: KanaMemorySession,
  correct: boolean,
): KanaMemorySession {
  const [card, ...queue] = session.queue;
  if (!card) return session;
  const streaks = {
    ...session.streaks,
    [card.id]: correct ? Math.min(3, session.streaks[card.id] + 1) : 0,
  };
  // A miss returns after two intervening cards when possible. A recalled card
  // goes to the back, requiring spaced retrieval rather than immediate copying.
  queue.splice(correct ? queue.length : Math.min(2, queue.length), 0, card);
  return {
    queue,
    streaks,
    attempts: session.attempts + 1,
    correct: session.correct + (correct ? 1 : 0),
  };
}

export function kanaChoices(card: KanaMemoryCard): string[] {
  const accepted = new Set([card.kana.romaji, ...card.kana.aliases]);
  const alternatives = shuffle(
    KANA.filter(
      (item) =>
        item.group === card.kana.group &&
        ![item.romaji, ...item.aliases].some((reading) =>
          accepted.has(reading),
        ),
    ),
  );
  return shuffle([
    card.kana[card.script],
    ...alternatives.slice(0, 3).map((item) => item[card.script]),
  ]);
}
