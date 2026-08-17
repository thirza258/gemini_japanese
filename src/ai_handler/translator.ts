import { SAMPLE_PHRASES } from '../data/japaneseSamples';

export type ScriptType =
  | 'kanji'
  | 'hiragana'
  | 'katakana'
  | 'mixed'
  | 'punctuation'
  | 'other';

export interface TranslationBreakdownItem {
  text: string;
  script: ScriptType;
  reading: string;
  romaji: string;
  translation: string;
}

export interface TranslationResponse {
  romaji: string;
  translation: string;
  breakdown: TranslationBreakdownItem[];
}

type OpenRouterRole = 'system' | 'user' | 'assistant';

interface OpenRouterMessage {
  role: OpenRouterRole;
  content: string;
}

interface OpenRouterChoice {
  message?: {
    content?: string | null;
  };
}

interface OpenRouterResponse {
  choices?: OpenRouterChoice[];
}

const openRouterApiUrl = 'https://openrouter.ai/api/v1/chat/completions';
const defaultModel = import.meta.env.VITE_OPENROUTER_MODEL || 'google/gemma-4-26b-a4b-it';
const envApiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
const openRouterAppTitle = 'Nevatal Japanese AI Translator';

const systemInstruction = `Return ONLY valid JSON with the following shape:
{
  "romaji": string,
  "translation": string,
  "breakdown": [
    {
      "text": string,
      "script": "kanji" | "hiragana" | "katakana" | "mixed" | "punctuation" | "other",
      "reading": string,
      "romaji": string,
      "translation": string
    }
  ]
}
Rules:
- Do not decide the split yourself. Return one breakdown item for each exact grapheme in the input, in the same order.
- Keep the provided text values unchanged.
- Use "kanji" for kanji characters, "hiragana" for hiragana-only characters, and "katakana" for katakana-only characters.
- Use "mixed" when a grapheme contains multiple script types.
- Use "punctuation" for punctuation marks and "other" for symbols or characters that do not fit the other categories.
- Set "reading" to the kana reading for that grapheme, in hiragana when possible.
- For kanji graphemes, reading should be the contextual furigana-style reading for that character.
- For each grapheme, translation should be a short meaning or gloss for that exact grapheme.
- Do not include markdown, backticks, or explanations.`;

const histories: OpenRouterMessage[] = [
  {
    role: 'user',
    content: '日本',
  },
  {
    role: 'assistant',
    content: '{"romaji":"nihon","translation":"Japan","breakdown":[{"text":"日","script":"kanji","reading":"に","romaji":"ni","translation":"sun/day"},{"text":"本","script":"kanji","reading":"ほん","romaji":"hon","translation":"origin/book"}]}',
  },
  {
    role: 'user',
    content: 'カタカナ',
  },
  {
    role: 'assistant',
    content: '{"romaji":"katakana","translation":"katakana","breakdown":[{"text":"カ","script":"katakana","reading":"か","romaji":"ka","translation":"ka sound"},{"text":"タ","script":"katakana","reading":"た","romaji":"ta","translation":"ta sound"},{"text":"カ","script":"katakana","reading":"か","romaji":"ka","translation":"ka sound"},{"text":"ナ","script":"katakana","reading":"な","romaji":"na","translation":"na sound"}]}',
  },
];

const responseFormat = {
  type: 'json_object',
};

function normalizeBreakdownItem(item: unknown): TranslationBreakdownItem {
  const entry = item as Partial<TranslationBreakdownItem>;
  const allowedScripts: ScriptType[] = [
    'kanji',
    'hiragana',
    'katakana',
    'mixed',
    'punctuation',
    'other',
  ];

  return {
    text: typeof entry.text === 'string' ? entry.text : '',
    script: allowedScripts.includes(entry.script as ScriptType)
      ? (entry.script as ScriptType)
      : 'other',
    reading: typeof entry.reading === 'string' ? entry.reading : '',
    romaji: typeof entry.romaji === 'string' ? entry.romaji : '',
    translation: typeof entry.translation === 'string' ? entry.translation : '',
  };
}

export function splitGraphemes(text: string): string[] {
  const segmenterCtor = (Intl as any).Segmenter;

  if (typeof segmenterCtor === 'function') {
    const segmenter = new segmenterCtor('ja', { granularity: 'grapheme' });
    return Array.from(segmenter.segment(text), (part: { segment: string }) => part.segment);
  }

  return Array.from(text);
}

export function isKanji(text: string): boolean {
  return /^[\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]+$/.test(text);
}

export function isHiragana(text: string): boolean {
  return /^[\u3040-\u309F]+$/.test(text);
}

export function isKatakana(text: string): boolean {
  return /^[\u30A0-\u30FF\u31F0-\u31FF]+$/.test(text);
}

export function isPunctuation(text: string): boolean {
  return /^[\s\p{P}\p{S}]+$/u.test(text);
}

export function detectScript(text: string): ScriptType {
  const hasKanji = isKanji(text);
  const hasHiragana = isHiragana(text);
  const hasKatakana = isKatakana(text);

  if (isPunctuation(text)) {
    return 'punctuation';
  }

  const scriptCount = [hasKanji, hasHiragana, hasKatakana].filter(Boolean).length;
  if (scriptCount > 1) {
    return 'mixed';
  }
  if (hasKanji) return 'kanji';
  if (hasHiragana) return 'hiragana';
  if (hasKatakana) return 'katakana';
  return 'other';
}

function katakanaToHiragana(text: string): string {
  return Array.from(text)
    .map((character) => {
      const codePoint = character.codePointAt(0);
      if (typeof codePoint !== 'number') {
        return character;
      }

      if (codePoint >= 0x30A1 && codePoint <= 0x30F6) {
        return String.fromCodePoint(codePoint - 0x60);
      }

      return character;
    })
    .join('');
}

function fallbackReading(text: string, script: ScriptType): string {
  if (script === 'hiragana') {
    return text;
  }
  if (script === 'katakana') {
    return katakanaToHiragana(text);
  }
  if (script === 'punctuation' || script === 'other') {
    return '';
  }
  return '';
}

function parseTranslationResponse(text: string | undefined, input: string): TranslationResponse {
  if (!text) {
    throw new Error('Translator returned an empty response.');
  }

  let parsed: Partial<TranslationResponse> & { breakdown?: unknown };
  try {
    parsed = JSON.parse(text) as Partial<TranslationResponse> & {
      breakdown?: unknown;
    };
  } catch {
    throw new Error('Translator returned malformed JSON.');
  }

  if (typeof parsed.romaji !== 'string' || typeof parsed.translation !== 'string') {
    throw new Error('Translator returned an invalid response.');
  }

  const segments = splitGraphemes(input);
  const breakdownItems = Array.isArray(parsed.breakdown)
    ? parsed.breakdown
    : [];

  const breakdown = Array.isArray(parsed.breakdown)
    ? segments.map((segment, index) => {
        const parsedItem = normalizeBreakdownItem(breakdownItems[index]);
        const script = detectScript(segment);
        return {
          text: segment,
          script,
          reading: parsedItem.reading || fallbackReading(segment, script),
          romaji: parsedItem.romaji,
          translation: parsedItem.translation,
        };
      })
    : segments.map((segment) => {
        const script = detectScript(segment);
        return {
          text: segment,
          script,
          reading: fallbackReading(segment, script),
          romaji: '',
          translation: '',
        };
      });

  return {
    romaji: parsed.romaji,
    translation: parsed.translation,
    breakdown,
  };
}

function buildMessages(input: string): OpenRouterMessage[] {
  const segments = splitGraphemes(input);

  return [
    {
      role: 'system',
      content: systemInstruction,
    },
    ...histories,
    {
      role: 'user',
      content: `Input: ${input}\nExact graphemes: ${JSON.stringify(segments)}`,
    },
  ];
}

function getOpenRouterReferer(): string {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return 'https://translate.nevatal.tech';
}

function getActiveApiKey(customKey?: string): string {
  if (customKey && customKey.trim().length > 0) {
    return customKey.trim();
  }
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('nevatal_openrouter_key');
    if (saved && saved.trim().length > 0) {
      return saved.trim();
    }
  }
  return envApiKey;
}

async function requestTranslation(input: string, customKey?: string, customModel?: string): Promise<string> {
  const apiKey = getActiveApiKey(customKey);
  const model = customModel || defaultModel;

  // Check if this input matches one of our rich cached samples
  const matchedSample = SAMPLE_PHRASES.find(
    (s) => s.japanese.trim() === input.trim()
  );

  if (!apiKey) {
    if (matchedSample && matchedSample.cachedResponse) {
      return JSON.stringify(matchedSample.cachedResponse);
    }
    throw new Error('API Key missing. Please provide an OpenRouter API key in settings or .env');
  }

  try {
    const response = await fetch(openRouterApiUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': getOpenRouterReferer(),
        'X-OpenRouter-Title': openRouterAppTitle,
      },
      body: JSON.stringify({
        model: model,
        messages: buildMessages(input),
        response_format: responseFormat,
        temperature: 0.1,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      // If error occurs and we have a cached sample, fallback gracefully
      if (matchedSample && matchedSample.cachedResponse) {
        return JSON.stringify(matchedSample.cachedResponse);
      }
      throw new Error(
        `OpenRouter request failed (${response.status}): ${errorText || response.statusText}`
      );
    }

    const payload = (await response.json()) as OpenRouterResponse;
    const content = payload.choices?.[0]?.message?.content ?? undefined;

    if (!content) {
      if (matchedSample && matchedSample.cachedResponse) {
        return JSON.stringify(matchedSample.cachedResponse);
      }
      throw new Error('OpenRouter returned an empty response.');
    }

    return content;
  } catch (err) {
    if (matchedSample && matchedSample.cachedResponse) {
      return JSON.stringify(matchedSample.cachedResponse);
    }
    throw err;
  }
}

export async function run({
  input,
  customKey,
  customModel,
}: {
  input: string;
  customKey?: string;
  customModel?: string;
}): Promise<TranslationResponse> {
  const responseText = await requestTranslation(input, customKey, customModel);
  return parseTranslationResponse(responseText, input);
}
