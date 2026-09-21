import { KANA, type KanjiCard } from "./curriculum";

// Longest first, so a combination mora such as きゃ wins over its first character.
const MORAE: [string, string[]][] = KANA.map(
  (kana) => [kana.hiragana, [kana.romaji, ...kana.aliases]] as [string, string[]],
).sort((a, b) => b[0].length - a[0].length);

const MACRONS: Record<string, string> = {
  ā: "aa",
  ī: "ii",
  ū: "uu",
  ē: "ee",
  ō: "ou",
  â: "aa",
  î: "ii",
  û: "uu",
  ê: "ee",
  ô: "ou",
};

/** Katakana in, hiragana out; anything else is left alone. */
export function toHiragana(text: string): string {
  return text.replace(/[ァ-ヶ]/g, (character) =>
    String.fromCharCode(character.charCodeAt(0) - 0x60),
  );
}

export function normalizeRomaji(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .normalize("NFC")
    .replace(/[āīūēōâîûêô]/g, (vowel) => MACRONS[vowel])
    .replace(/[\s'’\-・.]/g, "");
}

// Every romaji spelling a reading can legitimately take, including the
// alternative systems the kana table already records (shi/si, ja/zya, …).
export function romajiForms(reading: string): Set<string> {
  const kana = toHiragana(reading);
  let forms = [""];
  let sokuon = false;
  for (let i = 0; i < kana.length; ) {
    if (kana[i] === "っ") {
      sokuon = true;
      i += 1;
      continue;
    }
    if (kana[i] === "ー") {
      // A long mark repeats the vowel the previous mora ended on.
      forms = forms.map((form) => form + (form.match(/[aiueo]$/)?.[0] || ""));
      i += 1;
      continue;
    }
    const mora = MORAE.find((entry) => kana.startsWith(entry[0], i));
    if (!mora) {
      forms = forms.map((form) => form + kana[i]);
      i += 1;
      continue;
    }
    const spellings = sokuon
      ? mora[1].map((romaji) =>
          /^[aiueo]/.test(romaji) ? romaji : romaji[0] + romaji,
        )
      : mora[1];
    sokuon = false;
    // Guard against a combinatorial blow-up on an unusually long reading.
    forms =
      forms.length * spellings.length > 400
        ? forms.map((form) => form + spellings[0])
        : forms.flatMap((form) => spellings.map((romaji) => form + romaji));
    i += mora[0].length;
  }
  // おう and おお are both written ou or oo by different learners.
  return new Set(
    forms.flatMap((form) => [
      form,
      form.replace(/ou/g, "oo"),
      form.replace(/oo/g, "ou"),
    ]),
  );
}

/** Accepts the reading written in hiragana, in katakana, or in romaji. */
export function matchesReading(expected: string, input: string): boolean {
  const typed = input.trim();
  if (!typed) return false;
  if (toHiragana(typed) === toHiragana(expected)) return true;
  return romajiForms(expected).has(normalizeRomaji(typed));
}

/**
 * Which readings a flashcard should accept. A card whose example word is a
 * compound has exactly one answer; a card prompting with the bare character
 * asks "how is this read", which its on'yomi answers just as well as its kun.
 */
export function acceptedKanjiReadings(card: KanjiCard): string[] {
  if (card.word !== card.character) return [card.reading];
  return [
    ...new Set(
      [card.reading, card.onyomi, card.kunyomi]
        .flatMap((entry) => entry.split("・"))
        .map((entry) => entry.trim())
        .filter((entry) => entry && entry !== "—"),
    ),
  ];
}
