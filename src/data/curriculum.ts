export const LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const;
export type Level = (typeof LEVELS)[number];
export type StudyModule =
  "kanji" | "builder" | "particles" | "kana" | "reading";
export type Page = "dashboard" | StudyModule | "translator" | "progress";

export const LEVEL_DETAILS: Record<
  Level,
  { title: string; description: string; focus: string[] }
> = {
  N5: {
    title: "First steps",
    description: "Build a foundation in everyday Japanese.",
    focus: [
      "Everyday kanji & vocabulary",
      "Basic particles & polite sentences",
      "Short, familiar reading passages",
    ],
  },
  N4: {
    title: "Everyday Japanese",
    description: "Find your confidence in daily conversations.",
    focus: [
      "Verbs & everyday expressions",
      "Comparisons, reasons & conditions",
      "Connected sentences & daily life",
    ],
  },
  N3: {
    title: "Making connections",
    description: "Move from the basics to more natural expression.",
    focus: [
      "Abstract ideas & useful compounds",
      "Nuance, intention & connecting ideas",
      "Everyday articles & viewpoints",
    ],
  },
  N2: {
    title: "Going deeper",
    description: "Understand more complex ideas and written Japanese.",
    focus: [
      "Formal vocabulary & compound kanji",
      "Complex grammar & written expressions",
      "Arguments, context & implied meaning",
    ],
  },
  N1: {
    title: "Nuance & fluency",
    description: "Explore advanced expression and subtle meaning.",
    focus: [
      "Advanced kanji & precise vocabulary",
      "Formal patterns & subtle distinctions",
      "Abstract topics & critical reading",
    ],
  },
};

export interface KanjiCard {
  id: string;
  level: Level;
  character: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  word: string;
  reading: string;
  translation: string;
}

// Curated study groupings, not official JLPT vocabulary lists. Readings are representative.
type KanjiEntry = [string, string, string, string, string, string, string];
const kanjiEntries: Record<Level, KanjiEntry[]> = {
  N5: [
    ["日", "day; sun", "ニチ・ジツ", "ひ・か", "日本", "にほん", "Japan"],
    [
      "月",
      "moon; month",
      "ゲツ・ガツ",
      "つき",
      "月曜日",
      "げつようび",
      "Monday",
    ],
    ["火", "fire", "カ", "ひ", "火山", "かざん", "volcano"],
    ["水", "water", "スイ", "みず", "水曜日", "すいようび", "Wednesday"],
    [
      "木",
      "tree; wood",
      "モク・ボク",
      "き・こ",
      "木曜日",
      "もくようび",
      "Thursday",
    ],
    [
      "金",
      "gold; money",
      "キン・コン",
      "かね・かな",
      "お金",
      "おかね",
      "money",
    ],
    ["土", "earth; soil", "ド・ト", "つち", "土曜日", "どようび", "Saturday"],
    [
      "人",
      "person",
      "ジン・ニン",
      "ひと",
      "日本人",
      "にほんじん",
      "Japanese person",
    ],
    ["山", "mountain", "サン", "やま", "山", "やま", "mountain"],
    ["川", "river", "セン", "かわ", "川", "かわ", "river"],
    ["田", "rice field", "デン", "た", "田んぼ", "たんぼ", "rice paddy"],
    ["本", "book; origin", "ホン", "もと", "本", "ほん", "book"],
    ["学", "study; learning", "ガク", "まなぶ", "学生", "がくせい", "student"],
    [
      "生",
      "life; birth",
      "セイ・ショウ",
      "いきる・うまれる",
      "先生",
      "せんせい",
      "teacher",
    ],
    ["先", "before; ahead", "セン", "さき", "先月", "せんげつ", "last month"],
    ["大", "big", "ダイ・タイ", "おおきい", "大学", "だいがく", "university"],
    [
      "小",
      "small",
      "ショウ",
      "ちいさい・こ",
      "小学校",
      "しょうがっこう",
      "elementary school",
    ],
    ["中", "middle; inside", "チュウ", "なか", "中国", "ちゅうごく", "China"],
    ["食", "eat; food", "ショク", "たべる・くう", "食べる", "たべる", "to eat"],
    [
      "行",
      "go; carry out",
      "コウ・ギョウ",
      "いく・おこなう",
      "銀行",
      "ぎんこう",
      "bank",
    ],
  ],
  N4: [
    ["旅", "travel", "リョ", "たび", "旅行", "りょこう", "trip; travel"],
    ["駅", "station", "エキ", "—", "駅員", "えきいん", "station attendant"],
    ["店", "shop", "テン", "みせ", "店員", "てんいん", "shop assistant"],
    ["近", "near", "キン", "ちかい", "近所", "きんじょ", "neighborhood"],
    ["遠", "far", "エン", "とおい", "遠く", "とおく", "far away"],
    ["借", "borrow", "シャク", "かりる", "借りる", "かりる", "to borrow"],
    ["貸", "lend", "タイ", "かす", "貸す", "かす", "to lend"],
    ["待", "wait", "タイ", "まつ", "待つ", "まつ", "to wait"],
    ["持", "hold; have", "ジ", "もつ", "気持ち", "きもち", "feeling"],
    [
      "教",
      "teach",
      "キョウ",
      "おしえる・おそわる",
      "教室",
      "きょうしつ",
      "classroom",
    ],
    ["習", "learn", "シュウ", "ならう", "練習", "れんしゅう", "practice"],
    [
      "試",
      "try; test",
      "シ",
      "ためす・こころみる",
      "試験",
      "しけん",
      "examination",
    ],
    ["験", "test; experience", "ケン", "—", "経験", "けいけん", "experience"],
    ["働", "work", "ドウ", "はたらく", "働く", "はたらく", "to work"],
    ["動", "move", "ドウ", "うごく・うごかす", "動物", "どうぶつ", "animal"],
    [
      "開",
      "open",
      "カイ",
      "あく・ひらく",
      "開ける",
      "あける",
      "to open something",
    ],
    [
      "閉",
      "close",
      "ヘイ",
      "しまる・とじる",
      "閉める",
      "しめる",
      "to close something",
    ],
    ["思", "think", "シ", "おもう", "思う", "おもう", "to think"],
    ["知", "know", "チ", "しる", "知る", "しる", "to learn; to find out"],
    ["住", "live; reside", "ジュウ", "すむ", "住所", "じゅうしょ", "address"],
  ],
  N3: [
    [
      "政",
      "politics; government",
      "セイ・ショウ",
      "まつりごと",
      "政治",
      "せいじ",
      "politics",
    ],
    ["議", "deliberation", "ギ", "—", "会議", "かいぎ", "meeting; conference"],
    ["民", "people", "ミン", "たみ", "市民", "しみん", "citizen"],
    [
      "連",
      "connect; take along",
      "レン",
      "つれる・つらなる",
      "連絡",
      "れんらく",
      "contact",
    ],
    [
      "相",
      "mutual; aspect",
      "ソウ・ショウ",
      "あい",
      "相談",
      "そうだん",
      "consultation",
    ],
    [
      "関",
      "connection; barrier",
      "カン",
      "かかわる・せき",
      "関係",
      "かんけい",
      "relationship",
    ],
    ["感", "feeling", "カン", "—", "感謝", "かんしゃ", "gratitude"],
    [
      "情",
      "emotion; circumstances",
      "ジョウ・セイ",
      "なさけ",
      "情報",
      "じょうほう",
      "information",
    ],
    ["報", "report; reward", "ホウ", "むくいる", "報告", "ほうこく", "report"],
    [
      "確",
      "certain",
      "カク",
      "たしか・たしかめる",
      "確認",
      "かくにん",
      "confirmation",
    ],
    [
      "認",
      "recognize",
      "ニン",
      "みとめる",
      "認める",
      "みとめる",
      "to acknowledge",
    ],
    [
      "解",
      "solve; untie",
      "カイ・ゲ",
      "とく・とける",
      "理解",
      "りかい",
      "understanding",
    ],
    ["決", "decide", "ケツ", "きめる・きまる", "決定", "けってい", "decision"],
    [
      "選",
      "choose",
      "セン",
      "えらぶ",
      "選手",
      "せんしゅ",
      "athlete; competitor",
    ],
    [
      "得",
      "gain",
      "トク",
      "える・うる",
      "得意",
      "とくい",
      "good at; strong point",
    ],
    ["失", "lose", "シツ", "うしなう", "失敗", "しっぱい", "failure"],
    [
      "変",
      "change; unusual",
      "ヘン",
      "かわる・かえる",
      "変化",
      "へんか",
      "change",
    ],
    [
      "化",
      "transform",
      "カ・ケ",
      "ばける・ばかす",
      "文化",
      "ぶんか",
      "culture",
    ],
    ["比", "compare", "ヒ", "くらべる", "比較", "ひかく", "comparison"],
    ["較", "compare", "カク", "—", "比較的", "ひかくてき", "relatively"],
  ],
  N2: [
    [
      "環",
      "ring; surroundings",
      "カン",
      "—",
      "環境",
      "かんきょう",
      "environment",
    ],
    [
      "境",
      "boundary; condition",
      "キョウ・ケイ",
      "さかい",
      "国境",
      "こっきょう",
      "national border",
    ],
    ["資", "resources; capital", "シ", "—", "資源", "しげん", "resources"],
    ["源", "source", "ゲン", "みなもと", "電源", "でんげん", "power supply"],
    ["効", "effect", "コウ", "きく", "効果", "こうか", "effect"],
    [
      "率",
      "rate; lead",
      "リツ・ソツ",
      "ひきいる",
      "効率",
      "こうりつ",
      "efficiency",
    ],
    [
      "構",
      "structure; set up",
      "コウ",
      "かまえる・かまう",
      "構成",
      "こうせい",
      "composition; structure",
    ],
    ["築", "build", "チク", "きずく", "建築", "けんちく", "architecture"],
    [
      "責",
      "responsibility; blame",
      "セキ",
      "せめる",
      "責任",
      "せきにん",
      "responsibility",
    ],
    [
      "任",
      "entrust; duty",
      "ニン",
      "まかせる・まかす",
      "担当任務",
      "たんとうにんむ",
      "assigned duty",
    ],
    ["評", "evaluate", "ヒョウ", "—", "評価", "ひょうか", "evaluation"],
    ["価", "value", "カ", "あたい", "価値", "かち", "value"],
    [
      "制",
      "control; system",
      "セイ",
      "—",
      "制度",
      "せいど",
      "system; institution",
    ],
    ["限", "limit", "ゲン", "かぎる", "制限", "せいげん", "restriction"],
    ["適", "suitable", "テキ", "—", "適切", "てきせつ", "appropriate"],
    [
      "応",
      "respond",
      "オウ",
      "こたえる",
      "対応",
      "たいおう",
      "response; handling",
    ],
    ["提", "present; carry", "テイ", "さげる", "提案", "ていあん", "proposal"],
    [
      "供",
      "offer; accompany",
      "キョウ・ク",
      "そなえる・とも",
      "提供",
      "ていきょう",
      "provision; offering",
    ],
    [
      "条",
      "clause; condition",
      "ジョウ",
      "—",
      "条件",
      "じょうけん",
      "condition",
    ],
    ["件", "matter; case", "ケン", "—", "事件", "じけん", "incident"],
  ],
  N1: [
    ["概", "outline; generally", "ガイ", "—", "概念", "がいねん", "concept"],
    ["念", "thought; concern", "ネン", "—", "懸念", "けねん", "concern"],
    [
      "懸",
      "suspend; be concerned",
      "ケン・ケ",
      "かける・かかる",
      "懸命",
      "けんめい",
      "with all one’s effort",
    ],
    [
      "顕",
      "evident",
      "ケン",
      "—",
      "顕著",
      "けんちょ",
      "remarkable; conspicuous",
    ],
    [
      "著",
      "author; remarkable",
      "チョ",
      "あらわす・いちじるしい",
      "著しい",
      "いちじるしい",
      "striking; significant",
    ],
    [
      "緻",
      "fine; detailed",
      "チ",
      "—",
      "緻密",
      "ちみつ",
      "meticulous; precise",
    ],
    [
      "密",
      "dense; secret",
      "ミツ",
      "—",
      "厳密",
      "げんみつ",
      "strict; rigorous",
    ],
    ["矛", "spear", "ム", "ほこ", "矛盾", "むじゅん", "contradiction"],
    ["盾", "shield", "ジュン", "たて", "盾", "たて", "shield"],
    [
      "妥",
      "appropriate; settle",
      "ダ",
      "—",
      "妥当",
      "だとう",
      "reasonable; valid",
    ],
    [
      "当",
      "hit; appropriate",
      "トウ",
      "あたる・あてる",
      "該当",
      "がいとう",
      "applicability; corresponding to",
    ],
    [
      "該",
      "the aforementioned",
      "ガイ",
      "—",
      "該当者",
      "がいとうしゃ",
      "person concerned; eligible person",
    ],
    ["脈", "vein; continuity", "ミャク", "—", "文脈", "ぶんみゃく", "context"],
    [
      "趣",
      "meaning; flavor",
      "シュ",
      "おもむき",
      "趣旨",
      "しゅし",
      "purpose; main point",
    ],
    [
      "旨",
      "purport; delicious",
      "シ",
      "むね・うまい",
      "要旨",
      "ようし",
      "summary; gist",
    ],
    [
      "促",
      "urge; encourage",
      "ソク",
      "うながす",
      "促進",
      "そくしん",
      "promotion; acceleration",
    ],
    [
      "抑",
      "suppress",
      "ヨク",
      "おさえる",
      "抑制",
      "よくせい",
      "restraint; suppression",
    ],
    [
      "遂",
      "accomplish",
      "スイ",
      "とげる",
      "遂行",
      "すいこう",
      "execution; carrying out",
    ],
    [
      "履",
      "fulfill; wear on feet",
      "リ",
      "はく",
      "履歴",
      "りれき",
      "history; record",
    ],
    [
      "遷",
      "transition; move",
      "セン",
      "—",
      "変遷",
      "へんせん",
      "transition; historical change",
    ],
  ],
};

export const KANJI: KanjiCard[] = LEVELS.flatMap((level) =>
  kanjiEntries[level].map(
    ([character, meaning, onyomi, kunyomi, word, reading, translation]) => ({
      id: `${level}-${character}`,
      level,
      character,
      meaning,
      onyomi,
      kunyomi,
      word,
      reading,
      translation,
    }),
  ),
);

export interface ParticleQuestion {
  id: string;
  level: Level;
  sentence: string;
  translation: string;
  options: string[];
  answer: string;
  explanation: string;
  point: string;
}
type ParticleEntry = [string, string, string[], string, string, string];
const particleEntries: Record<Level, ParticleEntry[]> = {
  N5: [
    [
      "わたしは毎日、図書館＿本を読みます。",
      "I read books at the library every day.",
      ["に", "で", "を", "が"],
      "で",
      "で marks the place where an action happens. Reading is the action, and the library is its location. に often marks a destination or the location of something that exists.",
      "The place of an action · で",
    ],
    [
      "朝ごはん＿食べます。",
      "I eat breakfast.",
      ["が", "に", "を", "へ"],
      "を",
      "を marks the direct object of an action. 朝ごはん is what you eat. The particle を is pronounced “o.”",
      "The direct object · を",
    ],
    [
      "つくえの上＿本があります。",
      "There is a book on the desk.",
      ["を", "に", "で", "と"],
      "に",
      "に marks the location of something that exists with あります or います. Compare 本を読みます: an action at a location uses で.",
      "Where something exists · に",
    ],
    [
      "これはわたし＿かばんです。",
      "This is my bag.",
      ["を", "が", "の", "で"],
      "の",
      "の connects nouns and can show possession. わたしのかばん means “my bag.”",
      "Possession · の",
    ],
    [
      "だれ＿来ましたか。",
      "Who came?",
      ["は", "を", "で", "が"],
      "が",
      "Use が after a question word when asking who or what the subject is. だれが asks which person performed the action.",
      "Identifying the subject · が",
    ],
    [
      "七時＿起きます。",
      "I get up at seven o’clock.",
      ["に", "で", "を", "と"],
      "に",
      "に marks a specific time such as 七時 (seven o’clock). Relative time words such as 今日 usually do not need に.",
      "A specific time · に",
    ],
  ],
  N4: [
    [
      "コーヒー＿お茶のほうが好きです。",
      "I like tea more than coffee.",
      ["まで", "より", "ほど", "だけ"],
      "より",
      "より marks the comparison baseline. AよりBのほうが好き means “I like B more than A.”",
      "Comparing two things · より",
    ],
    [
      "この店は九時＿開いています。",
      "This shop is open until nine.",
      ["まで", "までに", "ほど", "より"],
      "まで",
      "まで marks the end of a continuing action or state. までに gives a deadline for completing an action.",
      "Until vs. by · まで",
    ],
    [
      "宿題は金曜日＿出してください。",
      "Please submit your homework by Friday.",
      ["まで", "までに", "ながら", "ほど"],
      "までに",
      "までに indicates a deadline: complete the submission no later than Friday. まで alone describes something continuing until that time.",
      "A deadline · までに",
    ],
    [
      "百円＿持っていません。",
      "I have only one hundred yen.",
      ["だけ", "しか", "ばかり", "ほど"],
      "しか",
      "しか is used with a negative verb to express “nothing but” or “only.” 百円しか持っていません emphasizes that the amount is limited.",
      "Only, with a negative · しか",
    ],
    [
      "音楽を聞き＿、料理をします。",
      "I cook while listening to music.",
      ["ので", "ながら", "のに", "まで"],
      "ながら",
      "Verb stem + ながら describes two actions by the same person at the same time. The main action comes at the end of the sentence.",
      "Doing two things · ながら",
    ],
    [
      "雨が降っている＿、出かけません。",
      "Because it is raining, I will not go out.",
      ["のに", "ながら", "ので", "ほど"],
      "ので",
      "ので gives a reason or cause. Here the rain explains the decision to stay in. のに would mean “although,” which changes the intended meaning.",
      "Giving a reason · ので",
    ],
  ],
  N3: [
    [
      "この問題＿、どう思いますか。",
      "What do you think about this issue?",
      ["について", "によって", "にとって", "に比べて"],
      "について",
      "について introduces the topic being discussed or considered. It means “about” or “regarding.”",
      "Introducing a topic · について",
    ],
    [
      "わたし＿、家族が一番大切です。",
      "For me, family is the most important thing.",
      ["によって", "に対して", "にとって", "について"],
      "にとって",
      "にとって identifies whose perspective or evaluation is being expressed. Here it is the speaker’s personal sense of importance.",
      "A point of view · にとって",
    ],
    [
      "去年＿、今年は雨が多いです。",
      "Compared with last year, there is more rain this year.",
      ["に比べて", "について", "にとって", "として"],
      "に比べて",
      "に比べて explicitly compares one thing with another. 去年 is the reference point for the comparison.",
      "Making a comparison · に比べて",
    ],
    [
      "彼は教師＿働いています。",
      "He works as a teacher.",
      ["について", "として", "にとって", "によると"],
      "として",
      "として marks a role, capacity, or status. 教師として means “in the capacity of a teacher.”",
      "A role or capacity · として",
    ],
    [
      "天気予報＿、明日は雪だそうです。",
      "According to the weather forecast, it will snow tomorrow.",
      ["にとって", "に対して", "によると", "として"],
      "によると",
      "によると identifies the source of information. It often appears with hearsay expressions such as そうです.",
      "A source of information · によると",
    ],
    [
      "勉強した＿、試験に落ちてしまいました。",
      "Although I studied, I unfortunately failed the test.",
      ["おかげで", "のに", "ために", "ついでに"],
      "のに",
      "のに expresses an unexpected contrast between what happened and the result. Studying would usually lead you to expect success.",
      "An unexpected result · のに",
    ],
  ],
  N2: [
    [
      "年齢＿、どなたでも参加できます。",
      "Anyone can participate, regardless of age.",
      ["を問わず", "をめぐって", "に先立って", "に沿って"],
      "を問わず",
      "Noun + を問わず means “regardless of.” It removes the noun as a condition or restriction, here allowing participation at any age.",
      "Regardless of · を問わず",
    ],
    [
      "この計画は調査結果＿作られました。",
      "This plan was made on the basis of the survey results.",
      ["をめぐって", "に基づいて", "に反して", "に先立って"],
      "に基づいて",
      "に基づいて shows the evidence, rules, or foundation on which something is based. The survey results provide the basis for the plan.",
      "Based on · に基づいて",
    ],
    [
      "開会＿、会長からご挨拶があります。",
      "Before the opening, the chair will give a greeting.",
      ["に先立って", "に反して", "を問わず", "にわたって"],
      "に先立って",
      "に先立って is a formal expression meaning “prior to.” It introduces something done in preparation for or before an event.",
      "Prior to · に先立って",
    ],
    [
      "予想＿、売り上げが伸びました。",
      "Contrary to expectations, sales increased.",
      ["に沿って", "に応じて", "に反して", "に基づいて"],
      "に反して",
      "に反して describes a result that goes against an expectation, rule, or intention. Here the increase was unexpected.",
      "Contrary to · に反して",
    ],
    [
      "経験＿、給料が決まります。",
      "Salary is determined according to experience.",
      ["に応じて", "に反して", "をめぐって", "に先立って"],
      "に応じて",
      "に応じて expresses adjustment according to a condition or degree. The salary changes depending on the amount of experience.",
      "According to circumstances · に応じて",
    ],
    [
      "会議は三日間＿行われました。",
      "The conference was held over three days.",
      ["に先立って", "にわたって", "を問わず", "に反して"],
      "にわたって",
      "にわたって describes the full extent of a period or area. It emphasizes that the conference spanned three days.",
      "Over a span · にわたって",
    ],
  ],
  N1: [
    [
      "この成果は皆様のご協力＿ものです。",
      "This achievement is possible only because of everyone’s cooperation.",
      ["あっての", "をよそに", "に即した", "を皮切りに"],
      "あっての",
      "Noun + あっての + noun emphasizes an indispensable condition. The result could not exist without everyone’s cooperation.",
      "An essential condition · あっての",
    ],
    [
      "彼は周囲の心配＿、一人で旅に出た。",
      "Ignoring the concern of those around him, he set out alone.",
      ["をもって", "をよそに", "に即して", "と相まって"],
      "をよそに",
      "をよそに describes acting without regard for other people’s concern, expectations, or criticism. It suggests a disconnect from those feelings.",
      "Without regard for · をよそに",
    ],
    [
      "本日＿、当店は閉店いたします。",
      "As of today, this shop will close permanently.",
      ["をもって", "をよそに", "と相まって", "を皮切りに"],
      "をもって",
      "In formal announcements, a time expression + をもって marks an endpoint or effective cutoff. Here today is the shop’s final day.",
      "A formal endpoint · をもって",
    ],
    [
      "現実＿、計画を見直す必要がある。",
      "We need to revise the plan in line with reality.",
      ["をよそに", "に即して", "を皮切りに", "と相まって"],
      "に即して",
      "に即して means “in keeping with” actual conditions, facts, or standards. The plan must reflect the reality of the situation.",
      "In line with · に即して",
    ],
    [
      "東京公演＿、全国ツアーが始まった。",
      "Starting with the Tokyo performance, the nationwide tour began.",
      ["を皮切りに", "をよそに", "に即して", "あっての"],
      "を皮切りに",
      "を皮切りに marks the first event in a series of similar actions. The Tokyo performance is the tour’s starting point.",
      "The first in a series · を皮切りに",
    ],
    [
      "美しい景色が温かい接客＿、忘れられない旅になった。",
      "The beautiful scenery, combined with warm hospitality, made it an unforgettable trip.",
      ["をよそに", "をもって", "と相まって", "を皮切りに"],
      "と相まって",
      "と相まって describes two factors working together to produce an effect. The scenery and hospitality jointly made the trip memorable.",
      "Combined with · と相まって",
    ],
  ],
};
export const PARTICLES: ParticleQuestion[] = LEVELS.flatMap((level) =>
  particleEntries[level].map(
    ([sentence, translation, options, answer, explanation, point], index) => ({
      id: `${level}-particle-${index}`,
      level,
      sentence,
      translation,
      options,
      answer,
      explanation,
      point,
    }),
  ),
);

export type KanaGroup = "basic" | "voiced" | "combination";
export interface KanaCharacter {
  id: string;
  hiragana: string;
  katakana: string;
  romaji: string;
  aliases: string[];
  group: KanaGroup;
}
const kanaGroups: Record<KanaGroup, string> = {
  basic:
    "あ:a い:i う:u え:e お:o か:ka き:ki く:ku け:ke こ:ko さ:sa し:shi す:su せ:se そ:so た:ta ち:chi つ:tsu て:te と:to な:na に:ni ぬ:nu ね:ne の:no は:ha ひ:hi ふ:fu へ:he ほ:ho ま:ma み:mi む:mu め:me も:mo や:ya ゆ:yu よ:yo ら:ra り:ri る:ru れ:re ろ:ro わ:wa を:wo ん:n",
  voiced:
    "が:ga ぎ:gi ぐ:gu げ:ge ご:go ざ:za じ:ji ず:zu ぜ:ze ぞ:zo だ:da ぢ:ji づ:zu で:de ど:do ば:ba び:bi ぶ:bu べ:be ぼ:bo ぱ:pa ぴ:pi ぷ:pu ぺ:pe ぽ:po",
  combination:
    "きゃ:kya きゅ:kyu きょ:kyo しゃ:sha しゅ:shu しょ:sho ちゃ:cha ちゅ:chu ちょ:cho にゃ:nya にゅ:nyu にょ:nyo ひゃ:hya ひゅ:hyu ひょ:hyo みゃ:mya みゅ:myu みょ:myo りゃ:rya りゅ:ryu りょ:ryo ぎゃ:gya ぎゅ:gyu ぎょ:gyo じゃ:ja じゅ:ju じょ:jo びゃ:bya びゅ:byu びょ:byo ぴゃ:pya ぴゅ:pyu ぴょ:pyo",
};
const kanaAliases: Record<string, string[]> = {
  shi: ["si"],
  chi: ["ti"],
  tsu: ["tu"],
  fu: ["hu"],
  ji: ["zi"],
  wo: ["o"],
  n: ["nn"],
  sha: ["sya"],
  shu: ["syu"],
  sho: ["syo"],
  cha: ["tya", "cya"],
  chu: ["tyu", "cyu"],
  cho: ["tyo", "cyo"],
  ja: ["jya", "zya"],
  ju: ["jyu", "zyu"],
  jo: ["jyo", "zyo"],
};
export const KANA: KanaCharacter[] = (
  Object.keys(kanaGroups) as KanaGroup[]
).flatMap((group) =>
  kanaGroups[group].split(" ").map((entry) => {
    const [hiragana, romaji] = entry.split(":");
    return {
      id: hiragana,
      hiragana,
      katakana: Array.from(hiragana)
        .map((char) => String.fromCharCode(char.charCodeAt(0) + 0x60))
        .join(""),
      romaji,
      aliases: [
        ...(kanaAliases[romaji] || []),
        ...(hiragana === "ぢ" ? ["di"] : hiragana === "づ" ? ["du"] : []),
      ],
      group,
    };
  }),
);

export interface ReadingPassage {
  id: string;
  level: Level;
  title: string;
  category: string;
  text: string;
  translation: string;
  vocabulary: [string, string, string][];
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}
export const READINGS: ReadingPassage[] = [
  {
    id: "n5-morning",
    level: "N5",
    title: "A quiet morning",
    category: "Daily life",
    text: "わたしは{毎朝|まいあさ}、{七時|しちじ}に{起|お}きます。パンを{食|た}べて、お{茶|ちゃ}を{飲|の}みます。{八時|はちじ}に{学校|がっこう}へ{行|い}きます。{学校|がっこう}は{家|いえ}の{近|ちか}くにあります。",
    translation:
      "I get up at seven every morning. I eat bread and drink tea. I go to school at eight. The school is near my house.",
    vocabulary: [
      ["毎朝", "まいあさ", "every morning"],
      ["起きる", "おきる", "to get up"],
      ["近く", "ちかく", "nearby"],
    ],
    question: "What does the writer do at eight o’clock?",
    options: ["Gets up", "Goes to school", "Drinks coffee", "Returns home"],
    answer: "Goes to school",
    explanation:
      "八時に学校へ行きます means “I go to school at eight.” 七時 is the time the writer gets up.",
  },
  {
    id: "n5-cafe",
    level: "N5",
    title: "At the café",
    category: "Out & about",
    text: "ここは{小|ちい}さいカフェです。コーヒーは{三百円|さんびゃくえん}です。ケーキもあります。わたしはコーヒーとケーキを{買|か}いました。{友達|ともだち}はお{茶|ちゃ}を{飲|の}みました。",
    translation:
      "This is a small café. Coffee is 300 yen. There is cake too. I bought coffee and cake. My friend drank tea.",
    vocabulary: [
      ["小さい", "ちいさい", "small"],
      ["買う", "かう", "to buy"],
      ["友達", "ともだち", "friend"],
    ],
    question: "What did the friend drink?",
    options: ["Coffee", "Water", "Tea", "Milk"],
    answer: "Tea",
    explanation:
      "友達はお茶を飲みました says the friend drank tea. The writer bought the coffee.",
  },
  {
    id: "n5-sunday",
    level: "N5",
    title: "Sunday in the park",
    category: "Free time",
    text: "{日曜日|にちようび}に{母|はは}と{公園|こうえん}へ{行|い}きました。{天気|てんき}はよかったです。{公園|こうえん}には{大|おお}きい{木|き}がたくさんあります。わたしたちは{木|き}の{下|した}でお{弁当|べんとう}を{食|た}べました。",
    translation:
      "On Sunday I went to the park with my mother. The weather was nice. There are many big trees in the park. We ate our boxed lunches under a tree.",
    vocabulary: [
      ["公園", "こうえん", "park"],
      ["天気", "てんき", "weather"],
      ["下", "した", "under; below"],
    ],
    question: "Where did they eat lunch?",
    options: ["At home", "In a café", "Under a tree", "At school"],
    answer: "Under a tree",
    explanation:
      "木の下で means “under a tree.” で marks where the action of eating happened.",
  },
  {
    id: "n4-library",
    level: "N4",
    title: "A library notice",
    category: "Notices",
    text: "{図書館|としょかん}からのお{知|し}らせです。{来週|らいしゅう}の{月曜日|げつようび}は{休|やす}みです。{本|ほん}を{返|かえ}したい{人|ひと}は、{入口|いりぐち}の{横|よこ}にある{箱|はこ}に{入|い}れてください。CDは{壊|こわ}れるかもしれないので、{火曜日|かようび}にカウンターへ{持|も}ってきてください。",
    translation:
      "A notice from the library: we will be closed next Monday. If you want to return books, please put them in the box next to the entrance. CDs might break, so please bring them to the counter on Tuesday.",
    vocabulary: [
      ["返す", "かえす", "to return something"],
      ["入口", "いりぐち", "entrance"],
      ["壊れる", "こわれる", "to break"],
    ],
    question: "How should you return a CD?",
    options: [
      "Put it in the box on Monday",
      "Bring it to the counter on Tuesday",
      "Leave it by the entrance",
      "Mail it to the library",
    ],
    answer: "Bring it to the counter on Tuesday",
    explanation:
      "The box is for books. Because CDs might break, the notice specifically asks for them at the counter on Tuesday.",
  },
  {
    id: "n4-trip",
    level: "N4",
    title: "A change of plans",
    category: "Travel",
    text: "{週末|しゅうまつ}、{友達|ともだち}と{山|やま}に{登|のぼ}るつもりでした。しかし、{雨|あめ}が{降|ふ}りそうだったので、{美術館|びじゅつかん}へ{行|い}くことにしました。{初|はじ}めて{見|み}る{絵|え}がたくさんあって、{楽|たの}しかったです。{今度|こんど}、{晴|は}れたら{山|やま}に{行|い}きたいです。",
    translation:
      "I had planned to climb a mountain with a friend over the weekend. But it looked like rain, so we decided to go to an art museum. There were many paintings I had never seen, and it was fun. Next time, if the weather is clear, I want to go to the mountain.",
    vocabulary: [
      ["登る", "のぼる", "to climb"],
      ["美術館", "びじゅつかん", "art museum"],
      ["晴れる", "はれる", "to become clear (weather)"],
    ],
    question: "Why did the writer go to the museum?",
    options: [
      "The mountain was closed",
      "Their friend dislikes climbing",
      "Rain seemed likely",
      "They had already bought tickets",
    ],
    answer: "Rain seemed likely",
    explanation:
      "雨が降りそうだったので means “because it looked like it would rain.” そう expresses an impression based on signs.",
  },
  {
    id: "n4-cooking",
    level: "N4",
    title: "Learning to cook",
    category: "Daily life",
    text: "{一人|ひとり}で{住|す}み{始|はじ}めてから、{料理|りょうり}をするようになりました。{前|まえ}は{毎日|まいにち}コンビニでお{弁当|べんとう}を{買|か}っていましたが、{今|いま}は{週|しゅう}に{四回|よんかい}ぐらい{自分|じぶん}で{作|つく}ります。まだ{上手|じょうず}ではありませんが、{少|すこ}しずつ{作|つく}れる{料理|りょうり}が{増|ふ}えています。",
    translation:
      "Since I started living alone, I have begun cooking. Before, I bought boxed lunches at a convenience store every day, but now I cook for myself about four times a week. I am not good at it yet, but the number of dishes I can make is gradually growing.",
    vocabulary: [
      ["料理", "りょうり", "cooking; dish"],
      ["自分", "じぶん", "oneself"],
      ["増える", "ふえる", "to increase"],
    ],
    question: "Which statement is true now?",
    options: [
      "The writer never cooks",
      "The writer cooks about four times a week",
      "The writer lives with family",
      "The writer is a professional cook",
    ],
    answer: "The writer cooks about four times a week",
    explanation:
      "週に四回ぐらい自分で作ります gives the current frequency. 前は introduces the earlier habit of buying lunch every day.",
  },
  {
    id: "n3-habit",
    level: "N3",
    title: "Small habits, real progress",
    category: "Learning",
    text: "{外国語|がいこくご}の{勉強|べんきょう}では、{長|なが}い{時間|じかん}{机|つくえ}に{向|む}かうことだけが{大切|たいせつ}なのではない。たとえ{十分|じゅっぷん}でも、{毎日|まいにち}{続|つづ}けることで{覚|おぼ}えたことを{忘|わす}れにくくなる。{忙|いそが}しい{日|ひ}には、{通勤中|つうきんちゅう}に{単語|たんご}を{確認|かくにん}するだけでもよい。{自分|じぶん}の{生活|せいかつ}に{合|あ}った{方法|ほうほう}を{見|み}つけることが、{続|つづ}けるための{第一歩|だいいっぽ}だ。",
    translation:
      "When learning a foreign language, spending long hours at a desk is not the only thing that matters. Even ten minutes of daily practice can make what you have learned harder to forget. On busy days, simply reviewing words on your commute is fine. Finding a method that fits your life is the first step toward keeping it up.",
    vocabulary: [
      ["続ける", "つづける", "to continue"],
      ["通勤中", "つうきんちゅう", "while commuting"],
      ["方法", "ほうほう", "method"],
    ],
    question: "What does the writer recommend?",
    options: [
      "Studying only when you have hours free",
      "Choosing a sustainable daily routine",
      "Memorizing only on the train",
      "Avoiding vocabulary review",
    ],
    answer: "Choosing a sustainable daily routine",
    explanation:
      "The final sentence stresses finding a method that fits your life. The ten-minute session and commute are examples of making practice sustainable.",
  },
  {
    id: "n3-shopping",
    level: "N3",
    title: "Shopping with less waste",
    category: "Society",
    text: "{最近|さいきん}、{近所|きんじょ}に{量|はか}り{売|う}りの{店|みせ}ができた。{米|こめ}やナッツなどを、{必要|ひつよう}な{分|ぶん}だけ{買|か}うことができる。{容器|ようき}を{持参|じさん}すれば、{包装|ほうそう}のごみも{減|へ}らせる。{普通|ふつう}のスーパーより{少|すこ}し{高|たか}い{商品|しょうひん}もあるが、{使|つか}い{切|き}れる{量|りょう}を{買|か}うので、{結果的|けっかてき}に{無駄|むだ}な{出費|しゅっぴ}が{少|すく}なくなった。",
    translation:
      "Recently, a shop selling goods by weight opened in my neighborhood. You can buy just the amount of rice, nuts, and other things you need. Bringing your own containers also reduces packaging waste. Some products cost a little more than at a regular supermarket, but buying amounts I can finish has ultimately reduced wasteful spending.",
    vocabulary: [
      ["量り売り", "はかりうり", "selling by weight"],
      ["容器", "ようき", "container"],
      ["無駄", "むだ", "waste"],
    ],
    question: "Why has wasteful spending decreased?",
    options: [
      "Everything in the shop is cheaper",
      "The shop gives free containers",
      "The writer buys quantities they can finish",
      "The writer no longer buys food",
    ],
    answer: "The writer buys quantities they can finish",
    explanation:
      "The text contrasts higher prices for some items with less waste from buying usable quantities. The saving comes from avoiding unused purchases.",
  },
  {
    id: "n3-work",
    level: "N3",
    title: "A different way to work",
    category: "Work",
    text: "{会社|かいしゃ}で{在宅勤務|ざいたくきんむ}が{始|はじ}まってから、{通勤|つうきん}の{負担|ふたん}は{減|へ}った。{一方|いっぽう}で、{同僚|どうりょう}に{気軽|きがる}に{質問|しつもん}する{機会|きかい}も{減|へ}ってしまった。そこで、{私|わたし}たちのチームは{毎朝|まいあさ}{短|みじか}いオンラインの{会話|かいわ}の{時間|じかん}を{設|もう}けた。{仕事|しごと}の{報告|ほうこく}だけでなく、ちょっとした{相談|そうだん}もできるため、{以前|いぜん}より{安心|あんしん}して{働|はたら}けるようになった。",
    translation:
      "Since remote work began at our company, the burden of commuting has decreased. On the other hand, opportunities to casually ask colleagues questions also decreased. So our team created a short online conversation time every morning. Because we can discuss small concerns as well as report on work, we now feel more at ease working.",
    vocabulary: [
      ["在宅勤務", "ざいたくきんむ", "working from home"],
      ["同僚", "どうりょう", "colleague"],
      ["相談", "そうだん", "consultation; discussion"],
    ],
    question: "What problem does the morning call address?",
    options: [
      "The cost of commuting",
      "Fewer chances for casual questions and discussion",
      "A shortage of computers",
      "Working too early in the morning",
    ],
    answer: "Fewer chances for casual questions and discussion",
    explanation:
      "一方で introduces the drawback of remote work: reduced informal contact. The call restores opportunities to ask questions and discuss concerns.",
  },
  {
    id: "n2-convenience",
    level: "N2",
    title: "The price of convenience",
    category: "Opinion",
    text: "{便利|べんり}なサービスが{増|ふ}えるにつれて、{私|わたし}たちは{待|ま}つことに{慣|な}れなくなっている。{注文|ちゅうもん}した{商品|しょうひん}が{翌日|よくじつ}{届|とど}くのはありがたい。しかし、その{速|はや}さを{当然|とうぜん}と{考|かんが}えると、{現場|げんば}で{働|はたら}く{人|ひと}への{負担|ふたん}を{見落|みお}としかねない。{便利|べんり}さそのものを{否定|ひてい}する{必要|ひつよう}はないが、{急|いそ}がない{買|か}い{物|もの}なら{配送|はいそう}に{余裕|よゆう}を{持|も}たせるなど、{利用|りよう}する{側|がわ}にもできることはある。",
    translation:
      "As convenient services multiply, we are becoming less accustomed to waiting. It is welcome when an order arrives the next day. But taking that speed for granted risks overlooking the burden on workers. We need not reject convenience itself; users can also do something, such as allowing more delivery time for purchases that are not urgent.",
    vocabulary: [
      ["当然", "とうぜん", "natural; to be expected"],
      ["見落とす", "みおとす", "to overlook"],
      ["余裕", "よゆう", "leeway; room to spare"],
    ],
    question: "What is the writer’s main position?",
    options: [
      "All delivery services should close",
      "Convenience should be used with consideration for workers",
      "Next-day delivery is always necessary",
      "Workers alone must solve delivery problems",
    ],
    answer: "Convenience should be used with consideration for workers",
    explanation:
      "The writer explicitly says convenience need not be rejected, then proposes a practical choice users can make. This supports a balanced, considerate use of services.",
  },
  {
    id: "n2-cities",
    level: "N2",
    title: "A place to pause",
    category: "Urban life",
    text: "{街|まち}の{豊|ゆた}かさは、{店|みせ}の{数|かず}や{交通|こうつう}の{便利|べんり}さだけでは{測|はか}れない。お{金|かね}を{使|つか}わずに{座|すわ}れるベンチや、{誰|だれ}でも{立|た}ち{寄|よ}れる{広場|ひろば}も{重要|じゅうよう}だ。こうした{場所|ばしょ}は{直接|ちょくせつ}{利益|りえき}を{生|う}まないため、{開発|かいはつ}の{際|さい}に{後回|あとまわ}しにされがちである。だが、{人々|ひとびと}が{安心|あんしん}して{過|す}ごせる{空間|くうかん}こそが、{長期的|ちょうきてき}には{街|まち}への{愛着|あいちゃく}を{育|そだ}てるのではないだろうか。",
    translation:
      "The richness of a city cannot be measured solely by its number of shops or convenient transport. Benches where one can sit without spending money and squares open to everyone are important too. Such places tend to be given low priority in development because they do not directly generate profit. Yet spaces where people can spend time comfortably may be precisely what builds attachment to a city in the long run.",
    vocabulary: [
      ["後回し", "あとまわし", "putting off; lower priority"],
      ["長期的", "ちょうきてき", "long-term"],
      ["愛着", "あいちゃく", "attachment; affection"],
    ],
    question: "Why do public spaces tend to receive lower priority?",
    options: [
      "People never use them",
      "They do not directly produce profit",
      "They make transport less convenient",
      "They are always expensive to enter",
    ],
    answer: "They do not directly produce profit",
    explanation:
      "直接利益を生まないため states the reason. The writer then argues for their less immediate value: people’s attachment to their city.",
  },
  {
    id: "n2-feedback",
    level: "N2",
    title: "What useful feedback looks like",
    category: "Work & learning",
    text: "{相手|あいて}の{成長|せいちょう}を{促|うなが}すには、ただ「よかった」と{伝|つた}えるだけでは{不十分|ふじゅうぶん}だ。どの{部分|ぶぶん}が、なぜよかったのかを{具体的|ぐたいてき}に{示|しめ}すことで、{相手|あいて}は{次|つぎ}に{何|なに}を{生|い}かせばよいか{理解|りかい}できる。{改善点|かいぜんてん}を{伝|つた}える{場合|ばあい}も{同様|どうよう}である。{人格|じんかく}を{評価|ひょうか}するのではなく、{行動|こうどう}に{焦点|しょうてん}を{当|あ}てることが、{建設的|けんせつてき}な{対話|たいわ}につながる。",
    translation:
      "Simply saying “that was good” is insufficient to encourage someone’s growth. Showing specifically which part was good and why helps them understand what to carry forward. The same is true when suggesting improvements. Focusing on actions rather than judging personality leads to constructive dialogue.",
    vocabulary: [
      ["具体的", "ぐたいてき", "concrete; specific"],
      ["焦点", "しょうてん", "focus"],
      ["建設的", "けんせつてき", "constructive"],
    ],
    question: "Which feedback best follows the writer’s advice?",
    options: [
      "“You are naturally talented.”",
      "“That was good.”",
      "“Your examples made the explanation easy to follow.”",
      "“You are a careless person.”",
    ],
    answer: "“Your examples made the explanation easy to follow.”",
    explanation:
      "This identifies a specific action (using examples) and explains its effect (clarity). The other choices are vague or judge a person’s character.",
  },
  {
    id: "n1-ambiguity",
    level: "N1",
    title: "Leaving room for ambiguity",
    category: "Language & thought",
    text: "{曖昧|あいまい}さは、しばしば{論理|ろんり}の{欠如|けつじょ}として{退|しりぞ}けられる。だが、あらゆる{事象|じしょう}を{明快|めいかい}な{言葉|ことば}に{還元|かんげん}しようとする{姿勢|しせい}は、{言語化|げんごか}しきれない{経験|けいけん}の{豊|ゆた}かさを{切|き}り{捨|す}てることにもなりかねない。むろん、{正確|せいかく}さが{求|もと}められる{場面|ばめん}で{曖昧|あいまい}な{表現|ひょうげん}に{逃|に}げるのは{適切|てきせつ}ではない。{肝要|かんよう}なのは、{明確|めいかく}にするべきことと、あえて{余白|よはく}を{残|のこ}すべきことを、{文脈|ぶんみゃく}に{即|そく}して{見極|みきわ}める{態度|たいど}であろう。",
    translation:
      "Ambiguity is often dismissed as a lack of logic. Yet attempting to reduce every phenomenon to clear language risks discarding the richness of experiences that cannot be fully verbalized. Of course, retreating into ambiguity when precision is required is inappropriate. What matters is discerning, in context, what should be made explicit and where room should deliberately remain.",
    vocabulary: [
      ["還元", "かんげん", "reduction; returning to a simpler basis"],
      ["肝要", "かんよう", "essential"],
      ["見極める", "みきわめる", "to discern; to ascertain"],
    ],
    question: "Which best captures the writer’s argument?",
    options: [
      "Ambiguity is always preferable to precision",
      "All experiences can be expressed exactly",
      "Context should determine the balance between clarity and ambiguity",
      "Logical language has no value",
    ],
    answer:
      "Context should determine the balance between clarity and ambiguity",
    explanation:
      "The writer qualifies both extremes: rigid clarity can erase richness, while ambiguity can evade needed precision. The conclusion calls for contextual judgment.",
  },
  {
    id: "n1-tradition",
    level: "N1",
    title: "Tradition as a living practice",
    category: "Culture",
    text: "{伝統|でんとう}を{守|まも}るとは、{過去|かこ}の{形式|けいしき}をそのまま{凍結|とうけつ}することなのだろうか。{今日|こんにち}{伝統|でんとう}と{呼|よ}ばれるものも、{成立|せいりつ}した{当時|とうじ}は{時代|じだい}の{要請|ようせい}に{応|こた}える{革新|かくしん}であったかもしれない。{形式|けいしき}の{維持|いじ}にのみ{固執|こしつ}すれば、それを{支|ささ}えてきた{精神|せいしん}をかえって{損|そこ}なう{恐|おそ}れがある。{変化|へんか}を{拒|こば}むことではなく、{何|なに}を{受|う}け{継|つ}ぎ、{何|なに}を{更新|こうしん}するかを{問|と}い{続|つづ}ける{営|いとな}みこそ、{伝統|でんとう}の{継承|けいしょう}にほかならない。",
    translation:
      "Does preserving tradition mean freezing forms from the past exactly as they are? What is called tradition today may, at its inception, have been an innovation responding to the needs of its time. Clinging solely to preserving form may instead undermine the spirit that sustained it. Inheriting tradition is precisely the ongoing effort to ask what to carry forward and what to renew, rather than rejecting change.",
    vocabulary: [
      ["要請", "ようせい", "demand; requirement"],
      ["固執", "こしつ", "insistence; clinging to"],
      ["継承", "けいしょう", "inheritance; succession"],
    ],
    question: "What apparent paradox does the writer identify?",
    options: [
      "Traditions never change",
      "Preserving only a tradition’s form may damage its spirit",
      "All innovations inevitably become traditions",
      "Traditions have no connection to their era",
    ],
    answer: "Preserving only a tradition’s form may damage its spirit",
    explanation:
      "かえって signals the reversal: rigidly protecting form can have the opposite of the intended effect. The writer favors thoughtful renewal that carries the underlying spirit forward.",
  },
  {
    id: "n1-data",
    level: "N1",
    title: "Beyond what can be measured",
    category: "Critical thinking",
    text: "{数値|すうち}は{判断|はんだん}の{客観性|きゃっかんせい}を{支|ささ}える{有力|ゆうりょく}な{手段|しゅだん}である。しかし、{測定|そくてい}できるものだけを{評価|ひょうか}の{対象|たいしょう}にすれば、{測定|そくてい}しにくい{価値|かち}は{存在|そんざい}しないも{同然|どうぜん}に{扱|あつか}われかねない。たとえば、{職場|しょくば}の{信頼関係|しんらいかんけい}は{短期的|たんきてき}な{成果|せいか}に{直結|ちょっけつ}しなくとも、{組織|そしき}の{持続性|じぞくせい}を{左右|さゆう}する。{数値|すうち}を{活用|かつよう}することと、{数値|すうち}に{判断|はんだん}を{委|ゆだ}ねることは{同義|どうぎ}ではない。その{区別|くべつ}を{忘|わす}れないことが{求|もと}められる。",
    translation:
      "Numbers are a powerful tool for supporting objective judgment. But if we evaluate only what can be measured, values that are difficult to measure risk being treated as though they do not exist. For example, trust in a workplace can determine an organization’s sustainability even if it does not directly produce short-term results. Using numbers is not the same as entrusting judgment to them. We must remember that distinction.",
    vocabulary: [
      ["客観性", "きゃっかんせい", "objectivity"],
      ["左右する", "さゆうする", "to influence; to determine"],
      ["委ねる", "ゆだねる", "to entrust"],
    ],
    question: "Why is workplace trust mentioned?",
    options: [
      "To prove that numerical evidence is useless",
      "As a valuable factor that may escape short-term measurement",
      "To argue that all trust can be quantified",
      "As the only source of objective judgment",
    ],
    answer: "As a valuable factor that may escape short-term measurement",
    explanation:
      "Trust illustrates the risk of ignoring hard-to-measure value. The writer accepts numbers as useful but rejects allowing them to replace judgment entirely.",
  },
];

export function plainJapanese(text: string): string {
  return text.replace(/\{([^|}]+)\|([^}]+)\}/g, "$1");
}

export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
