import { SAMPLE_PHRASES } from "../data/japaneseSamples";
import {
  getStoredApiKey,
  getStoredEndpoint,
  getStoredModel,
  decryptApiKey,
  isEncrypted,
  normalizeEndpoint,
} from "../utils/crypto";

export type ScriptType =
  "kanji" | "hiragana" | "katakana" | "mixed" | "punctuation" | "other";

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

type OpenRouterRole = "system" | "user" | "assistant";

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

const openRouterAppTitle = "Nevatal Japanese AI Translator";

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
- Kana within a word or ending do not have independent meanings. Identify them as part of the complete word or ending instead of inventing a meaning.
- If a compound has an indivisible whole-word reading, put that reading on its first character, leave the other readings empty, and explain the shared compound in the gloss. Do not invent per-character readings.
- Do not include markdown, backticks, or explanations.`;

const histories: OpenRouterMessage[] = [
  {
    role: "user",
    content: "日本",
  },
  {
    role: "assistant",
    content:
      '{"romaji":"nihon","translation":"Japan","breakdown":[{"text":"日","script":"kanji","reading":"に","romaji":"ni","translation":"sun/day"},{"text":"本","script":"kanji","reading":"ほん","romaji":"hon","translation":"origin/book"}]}',
  },
  {
    role: "user",
    content: "カタカナ",
  },
  {
    role: "assistant",
    content:
      '{"romaji":"katakana","translation":"katakana","breakdown":[{"text":"カ","script":"katakana","reading":"か","romaji":"ka","translation":"ka sound"},{"text":"タ","script":"katakana","reading":"た","romaji":"ta","translation":"ta sound"},{"text":"カ","script":"katakana","reading":"か","romaji":"ka","translation":"ka sound"},{"text":"ナ","script":"katakana","reading":"な","romaji":"na","translation":"na sound"}]}',
  },
];

const responseFormat = {
  type: "json_object",
};

function normalizeBreakdownItem(item: unknown): TranslationBreakdownItem {
  const entry =
    item && typeof item === "object"
      ? (item as Partial<TranslationBreakdownItem>)
      : {};
  const allowedScripts: ScriptType[] = [
    "kanji",
    "hiragana",
    "katakana",
    "mixed",
    "punctuation",
    "other",
  ];

  return {
    text: typeof entry.text === "string" ? entry.text : "",
    script: allowedScripts.includes(entry.script as ScriptType)
      ? (entry.script as ScriptType)
      : "other",
    reading: typeof entry.reading === "string" ? entry.reading : "",
    romaji: typeof entry.romaji === "string" ? entry.romaji : "",
    translation: typeof entry.translation === "string" ? entry.translation : "",
  };
}

interface IntlWithSegmenter {
  Segmenter?: new (
    locales?: string | string[],
    options?: { granularity?: "grapheme" | "word" | "sentence" },
  ) => {
    segment: (input: string) => Iterable<{ segment: string }>;
  };
}

export function splitGraphemes(text: string): string[] {
  const segmenterCtor = (Intl as unknown as IntlWithSegmenter).Segmenter;

  if (typeof segmenterCtor === "function") {
    const segmenter = new segmenterCtor("ja", { granularity: "grapheme" });
    return Array.from(
      segmenter.segment(text),
      (part: { segment: string }) => part.segment,
    );
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
    return "punctuation";
  }

  const scriptCount = [hasKanji, hasHiragana, hasKatakana].filter(
    Boolean,
  ).length;
  if (scriptCount > 1) {
    return "mixed";
  }
  if (hasKanji) return "kanji";
  if (hasHiragana) return "hiragana";
  if (hasKatakana) return "katakana";
  return "other";
}

function katakanaToHiragana(text: string): string {
  return Array.from(text)
    .map((character) => {
      const codePoint = character.codePointAt(0);
      if (typeof codePoint !== "number") {
        return character;
      }

      if (codePoint >= 0x30a1 && codePoint <= 0x30f6) {
        return String.fromCodePoint(codePoint - 0x60);
      }

      return character;
    })
    .join("");
}

function fallbackReading(text: string, script: ScriptType): string {
  if (script === "hiragana") {
    return text;
  }
  if (script === "katakana") {
    return katakanaToHiragana(text);
  }
  if (script === "punctuation" || script === "other") {
    return "";
  }
  return "";
}

export const DEFAULT_FREE_MODELS: string[] = [
  "openrouter/free",
  "google/gemma-4-26b-a4b-it:free",
  "google/gemma-4-31b-it:free",
  "nvidia/nemotron-3.5-lightning:free",
  "nvidia/nemotron-3.5-super-vl:free",
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "cohere/north-mini-code:free",
  "liquid/lfm-2.5-2.6b:free",
  "recursive/flint-v1.0:free",
  "dots-studio/dots-3-note-preview:free",
];

export function getShuffledFreeModels(excludeModel?: string): string[] {
  const models = DEFAULT_FREE_MODELS.filter((m) => m !== excludeModel);
  for (let i = models.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [models[i], models[j]] = [models[j], models[i]];
  }
  return models;
}

export function isCreditExhausted(status: number, text?: string): boolean {
  if (status === 402) return true;
  if (!text) return false;
  const lower = text.toLowerCase();
  return (
    lower.includes("402") ||
    lower.includes("insufficient credit") ||
    lower.includes("payment required") ||
    lower.includes("credit limit") ||
    lower.includes("credits is over") ||
    lower.includes("credits are over") ||
    lower.includes("out of credits") ||
    lower.includes("balance is too low") ||
    lower.includes("quota")
  );
}

function parseTranslationResponse(
  text: string | undefined,
  input: string,
): TranslationResponse {
  if (!text) {
    throw new Error("Translator returned an empty response.");
  }

  // Strip code fences in case free models wrap output in ```json
  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```$/, "")
    .trim();

  let parsed: Partial<TranslationResponse> & { breakdown?: unknown };
  try {
    parsed = JSON.parse(cleaned) as Partial<TranslationResponse> & {
      breakdown?: unknown;
    };
  } catch {
    throw new Error("Translator returned malformed JSON.");
  }

  if (
    !parsed ||
    typeof parsed.romaji !== "string" ||
    typeof parsed.translation !== "string"
  ) {
    throw new Error("Translator returned an invalid response.");
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
          romaji: "",
          translation: "",
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
      role: "system",
      content: systemInstruction,
    },
    ...histories,
    {
      role: "user",
      content: `Input: ${input}\nExact graphemes: ${JSON.stringify(segments)}`,
    },
  ];
}

function getOpenRouterReferer(): string {
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }

  return "https://translate.nevatal.id";
}

async function resolveApiKey(
  customKey?: string,
  customPassphrase?: string,
): Promise<string> {
  if (customKey && customKey.trim().length > 0) {
    const trimmed = customKey.trim();
    if (isEncrypted(trimmed)) {
      try {
        return await decryptApiKey(trimmed, customPassphrase);
      } catch (err) {
        console.warn("Failed to decrypt custom key:", err);
        return trimmed;
      }
    }
    return trimmed;
  }
  return await getStoredApiKey(customPassphrase);
}

async function requestTranslation(
  input: string,
  customKey?: string,
  customModel?: string,
  customEndpoint?: string,
  customPassphrase?: string,
  signal?: AbortSignal,
): Promise<string> {
  const apiKey = await resolveApiKey(customKey, customPassphrase);
  const model =
    customModel && customModel.trim() ? customModel.trim() : getStoredModel();
  const endpoint = customEndpoint
    ? normalizeEndpoint(customEndpoint)
    : getStoredEndpoint();

  // Check if this input matches one of our rich cached samples
  const matchedSample = SAMPLE_PHRASES.find(
    (s) => s.japanese.trim() === input.trim(),
  );

  const isProxyEndpoint =
    endpoint.startsWith("/") ||
    (typeof window !== "undefined" &&
      endpoint.includes(window.location?.host || ""));

  if (!apiKey && !isProxyEndpoint) {
    if (matchedSample && matchedSample.cachedResponse) {
      return JSON.stringify(matchedSample.cachedResponse);
    }
    throw new Error(
      "API Key missing. When connecting directly to OpenRouter, please configure your API key in settings or use the default server proxy (/api/openrouter/chat/completions).",
    );
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "HTTP-Referer": getOpenRouterReferer(),
    "X-OpenRouter-Title": openRouterAppTitle,
  };

  // Only attach Authorization header if a custom API key is present.
  // For the default server proxy, omit Authorization so Nginx / Vite dev proxy injects the server key securely.
  if (apiKey) {
    headers["Authorization"] = `Bearer ${apiKey}`;
  }

  const createRequestBody = (targetModel: string) =>
    JSON.stringify({
      model: targetModel,
      messages: buildMessages(input),
      response_format: responseFormat,
      temperature: 0.1,
      max_tokens: Math.min(
        16384,
        Math.max(2048, splitGraphemes(input).length * 75),
      ),
    });

  try {
    let response = await fetch(endpoint, {
      method: "POST",
      headers,
      signal,
      body: createRequestBody(model),
    });

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      if (isCreditExhausted(response.status, errText)) {
        console.warn(
          `OpenRouter credits exhausted for ${model}. Falling back to shuffled free models...`,
        );
        const freeModels = getShuffledFreeModels(model);
        let fallbackSucceeded = false;
        for (const freeModel of freeModels) {
          try {
            console.info(`Attempting translation fallback to: ${freeModel}`);
            const fbResponse = await fetch(endpoint, {
              method: "POST",
              headers,
              signal,
              body: createRequestBody(freeModel),
            });
            if (fbResponse.ok) {
              response = fbResponse;
              fallbackSucceeded = true;
              console.info(`Translation fallback succeeded with: ${freeModel}`);
              break;
            }
          } catch (fbErr) {
            if (signal?.aborted) throw fbErr;
            console.warn(`Fallback to ${freeModel} failed:`, fbErr);
          }
        }
        if (!fallbackSucceeded) {
          if (matchedSample && matchedSample.cachedResponse) {
            return JSON.stringify(matchedSample.cachedResponse);
          }
          throw new Error(
            "Credits are exhausted and free model fallbacks were unavailable. Add credits or try again shortly.",
          );
        }
      } else {
        // If error occurs and we have a cached sample, fallback gracefully
        if (matchedSample && matchedSample.cachedResponse) {
          return JSON.stringify(matchedSample.cachedResponse);
        }
        if (response.status === 401 || response.status === 403) {
          throw new Error(
            "The translation service needs a valid API key. Add your OpenRouter key in Translator settings, or configure the server connection.",
          );
        }
        if (response.status === 429) {
          throw new Error(
            "The translation service is busy or has reached its usage limit. Wait a moment, then try again.",
          );
        }
        throw new Error(
          `The translation service could not complete this request (${response.status}). Check your model and connection in Translator settings.`,
        );
      }
    }

    const payload = (await response.json()) as OpenRouterResponse;
    const content = payload.choices?.[0]?.message?.content ?? undefined;

    if (!content) {
      if (matchedSample && matchedSample.cachedResponse) {
        return JSON.stringify(matchedSample.cachedResponse);
      }
      throw new Error("OpenRouter returned an empty response.");
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
  customEndpoint,
  customPassphrase,
  signal,
}: {
  input: string;
  customKey?: string;
  customModel?: string;
  customEndpoint?: string;
  customPassphrase?: string;
  signal?: AbortSignal;
}): Promise<TranslationResponse> {
  const query = input.trim();
  if (!query) throw new Error("Enter Japanese text to translate.");
  const sample = SAMPLE_PHRASES.find((item) => item.japanese === query);
  if (sample?.cachedResponse) return sample.cachedResponse;

  const controller = new AbortController();
  const abort = () => controller.abort();
  if (signal?.aborted) controller.abort();
  signal?.addEventListener("abort", abort, { once: true });
  let timedOut = false;
  const timeout = setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, 60000);
  try {
    const responseText = await requestTranslation(
      query,
      customKey,
      customModel,
      customEndpoint,
      customPassphrase,
      controller.signal,
    );
    return parseTranslationResponse(responseText, query);
  } catch (error) {
    if (timedOut)
      throw new Error(
        "The translation took too long. Try a shorter sentence or another model.",
      );
    throw error;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener("abort", abort);
  }
}
