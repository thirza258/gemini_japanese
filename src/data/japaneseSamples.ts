import { TranslationResponse } from '../ai_handler/translator';

export interface SamplePhrase {
  id: string;
  category: 'JLPT N5-N3' | 'Daily Life' | 'Anime & Manga' | 'Business Keigo' | 'Proverbs & Idioms';
  japanese: string;
  title: string;
  cachedResponse?: TranslationResponse;
}

export const SAMPLE_PHRASES: SamplePhrase[] = [
  {
    id: 'ichigo-ichie',
    category: 'Proverbs & Idioms',
    title: 'Once-in-a-lifetime encounter',
    japanese: '一期一会',
    cachedResponse: {
      romaji: 'ichigoichie',
      translation: 'Once-in-a-lifetime encounter / Treasure every meeting, for it will never recur',
      breakdown: [
        { text: '一', script: 'kanji', reading: 'いち', romaji: 'ichi', translation: 'one / single' },
        { text: '期', script: 'kanji', reading: 'ご', romaji: 'go', translation: 'period / lifetime' },
        { text: '一', script: 'kanji', reading: 'いち', romaji: 'ichi', translation: 'one / single' },
        { text: '会', script: 'kanji', reading: 'え', romaji: 'e', translation: 'meeting / gathering' },
      ],
    },
  },
  {
    id: 'sakura-mankai',
    category: 'Daily Life',
    title: 'Cherry blossoms in full bloom',
    japanese: '桜が満開です',
    cachedResponse: {
      romaji: 'sakura ga mankai desu',
      translation: 'The cherry blossoms are in full bloom.',
      breakdown: [
        { text: '桜', script: 'kanji', reading: 'さくら', romaji: 'sakura', translation: 'cherry blossom' },
        { text: 'が', script: 'hiragana', reading: 'が', romaji: 'ga', translation: 'subject particle' },
        { text: '満', script: 'kanji', reading: 'まん', romaji: 'man', translation: 'full / complete' },
        { text: '開', script: 'kanji', reading: 'かい', romaji: 'kai', translation: 'open / bloom' },
        { text: 'で', script: 'hiragana', reading: 'で', romaji: 'de', translation: 'copula te-form' },
        { text: 'す', script: 'hiragana', reading: 'す', romaji: 'su', translation: 'polite copula' },
      ],
    },
  },
  {
    id: 'otsukaresama',
    category: 'Business Keigo',
    title: 'Thank you for your hard work',
    japanese: 'お疲れ様でした',
    cachedResponse: {
      romaji: 'otsukaresama deshita',
      translation: 'Thank you for your hard work / Good job today.',
      breakdown: [
        { text: 'お', script: 'hiragana', reading: 'お', romaji: 'o', translation: 'polite honorific prefix' },
        { text: '疲', script: 'kanji', reading: 'つか', romaji: 'tsuka', translation: 'tired / fatigue' },
        { text: 'れ', script: 'hiragana', reading: 'れ', romaji: 're', translation: 'verb stem suffix' },
        { text: '様', script: 'kanji', reading: 'さま', romaji: 'sama', translation: 'honorific state/appearance' },
        { text: 'で', script: 'hiragana', reading: 'で', romaji: 'de', translation: 'copula particle' },
        { text: 'し', script: 'hiragana', reading: 'し', romaji: 'shi', translation: 'past auxiliary' },
        { text: 'た', script: 'hiragana', reading: 'た', romaji: 'ta', translation: 'past tense ending' },
      ],
    },
  },
  {
    id: 'yoroshiku',
    category: 'Daily Life',
    title: 'Nice to meet you / Please treat me well',
    japanese: 'よろしくお願いします',
    cachedResponse: {
      romaji: 'yoroshiku onegaishimasu',
      translation: 'Pleased to meet you / I look forward to working with you.',
      breakdown: [
        { text: 'よ', script: 'hiragana', reading: 'よ', romaji: 'yo', translation: 'good / well' },
        { text: 'ろ', script: 'hiragana', reading: 'ろ', romaji: 'ro', translation: 'phonetic mora' },
        { text: 'し', script: 'hiragana', reading: 'し', romaji: 'shi', translation: 'adverbial part' },
        { text: 'く', script: 'hiragana', reading: 'く', romaji: 'ku', translation: 'adverbial inflection' },
        { text: 'お', script: 'hiragana', reading: 'お', romaji: 'o', translation: 'honorific prefix' },
        { text: '願', script: 'kanji', reading: 'ねが', romaji: 'nega', translation: 'wish / request' },
        { text: 'い', script: 'hiragana', reading: 'い', romaji: 'i', translation: 'verb stem' },
        { text: 'し', script: 'hiragana', reading: 'し', romaji: 'shi', translation: 'do (suru stem)' },
        { text: 'ま', script: 'hiragana', reading: 'ま', romaji: 'ma', translation: 'polite auxiliary' },
        { text: 'す', script: 'hiragana', reading: 'す', romaji: 'su', translation: 'polite ending' },
      ],
    },
  },
  {
    id: 'ame-futte',
    category: 'Proverbs & Idioms',
    title: 'Adversity builds character',
    japanese: '雨降って地固まる',
    cachedResponse: {
      romaji: 'ame futte ji katamaru',
      translation: 'Adversity builds character / After the rain, the ground hardens.',
      breakdown: [
        { text: '雨', script: 'kanji', reading: 'あめ', romaji: 'ame', translation: 'rain' },
        { text: '降', script: 'kanji', reading: 'ふ', romaji: 'fu', translation: 'fall / descend' },
        { text: 'っ', script: 'hiragana', reading: 'っ', romaji: 't', translation: 'small tsu geminate' },
        { text: 'て', script: 'hiragana', reading: 'て', romaji: 'te', translation: 'te-form connector' },
        { text: '地', script: 'kanji', reading: 'じ', romaji: 'ji', translation: 'earth / ground' },
        { text: '固', script: 'kanji', reading: 'かた', romaji: 'kata', translation: 'harden / firm' },
        { text: 'ま', script: 'hiragana', reading: 'ま', romaji: 'ma', translation: 'intransitive stem' },
        { text: 'る', script: 'hiragana', reading: 'る', romaji: 'ru', translation: 'dictionary ending' },
      ],
    },
  },
  {
    id: 'anime-shinjiru',
    category: 'Anime & Manga',
    title: 'Believe in the you that believes in yourself',
    japanese: '自分を信じる',
    cachedResponse: {
      romaji: 'jibun o shinjiru',
      translation: 'Believe in yourself.',
      breakdown: [
        { text: '自', script: 'kanji', reading: 'じ', romaji: 'ji', translation: 'oneself' },
        { text: '分', script: 'kanji', reading: 'ぶん', romaji: 'bun', translation: 'part / person' },
        { text: 'を', script: 'hiragana', reading: 'を', romaji: 'o', translation: 'direct object particle' },
        { text: '信', script: 'kanji', reading: 'しん', romaji: 'shin', translation: 'trust / believe' },
        { text: 'じ', script: 'hiragana', reading: 'じ', romaji: 'ji', translation: 'verb stem kana' },
        { text: 'る', script: 'hiragana', reading: 'る', romaji: 'ru', translation: 'verb ending' },
      ],
    },
  },
  {
    id: 'tokyo-patent',
    category: 'JLPT N5-N3',
    title: 'Tokyo Patent Office (Tongue Twister)',
    japanese: '東京特許許可局',
    cachedResponse: {
      romaji: 'tōkyō tokkyo kyokakyoku',
      translation: 'Tokyo Patent Approval Bureau (Famous tongue twister)',
      breakdown: [
        { text: '東', script: 'kanji', reading: 'とう', romaji: 'tō', translation: 'east' },
        { text: '京', script: 'kanji', reading: 'きょう', romaji: 'kyō', translation: 'capital' },
        { text: '特', script: 'kanji', reading: 'とく', romaji: 'toku', translation: 'special / patent' },
        { text: '許', script: 'kanji', reading: 'きょ', romaji: 'kyo', translation: 'permit / license' },
        { text: '許', script: 'kanji', reading: 'きょ', romaji: 'kyo', translation: 'permit / approval' },
        { text: '可', script: 'kanji', reading: 'か', romaji: 'ka', translation: 'possible / pass' },
        { text: '局', script: 'kanji', reading: 'きょく', romaji: 'kyoku', translation: 'bureau / office' },
      ],
    },
  },
];
