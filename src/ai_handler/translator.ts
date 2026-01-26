import {
  GoogleGenAI,
  Type,
} from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const model = 'gemini-flash-lite-latest';

const systemInstruction = [
  {
    text: `Return ONLY valid JSON with the following shape:
{
  "romaji": string,
  "translation": string
}
Do not include markdown, backticks, or explanations.`,
  },
];

const histories = [
  {
    role: 'user',
    parts: [{ text: '何' }],
  },
  {
    role: 'model',
    parts: [{ text: '{"romaji":"nani","translation":"what"}' }],
  },
  {
    role: 'user',
    parts: [{ text: 'お母\nかあ\nさん' }],
  },
  {
    role: 'model',
    parts: [{ text: '{"romaji":"okaasan","translation":"mother"}' }],
  },
];

const config = {
  thinkingConfig: {
    thinkingBudget: 0,
  },
  responseMimeType: 'application/json',
  responseSchema: {
    type: Type.OBJECT,
    required: ['romaji', 'translation'],
    properties: {
      romaji: {
        type: Type.STRING,
      },
      translation: {
        type: Type.STRING,
      },
    },
  },
  systemInstruction,
};

export async function run({ input }: { input: string }) {
  const contents = [
    ...histories,
    {
      role: 'user',
      parts: [{ text: input }],
    },
  ];

  const response = await ai.models.generateContent({
    model,
    config,
    contents,
  });

  
  return response;
}
