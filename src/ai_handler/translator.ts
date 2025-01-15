import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const histories = [
  {
    role: "user",
    parts: [{ text: "何" }],
  },
  {
    role: "model",
    parts: [{ text: '```json\n{"romaji": "nani", "translate": "what"}\n```' }],
  },
  {
    role: "user",
    parts: [{ text: "お母\nかあ\nさん" }],
  },
  {
    role: "model",
    parts: [
      { text: '```json\n{"romaji": "okaasan", "translate": "mother"}\n```' },
    ],
  },
];

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction:
    "return the prompt with their romaji(Alphabet) and translate",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
  responseSchema: {
    type: SchemaType.OBJECT,
    properties: {
      romaji: {
        type: SchemaType.STRING,
      },
      translate: {
        type: SchemaType.STRING,
      },
    },
  },
};

export async function run({ input }: { input: string }) {
  const chatSession = model.startChat({
    generationConfig,
    history: histories,
  });

  const result = await chatSession.sendMessage(input);
  return result;
}
