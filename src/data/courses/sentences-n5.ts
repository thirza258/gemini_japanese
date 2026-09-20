import { sentences as s, type SentencePractice } from "./types";

export const n5Sentences: Record<string, SentencePractice> = {
  "first-conversations": s(
    "I can greet someone, introduce myself, and ask for help understanding.",
    "Meeting a neighbor or classmate",
    "polite",
    [
      ["はじめまして。アニです。", "Nice to meet you. I'm Ani."],
      ["インドネシアから{来|き}ました。", "I came from Indonesia."],
      ["お{名前|なまえ}は{何|なん}ですか。", "What is your name?"],
      [
        "すみません、もう{一度|いちど}おねがいします。",
        "Sorry, once more, please.",
      ],
      [
        "もう{少|すこ}しゆっくりおねがいします。",
        "A little more slowly, please.",
      ],
      ["ありがとうございます。またあした。", "Thank you. See you tomorrow."],
    ],
  ),
  "things-around-you": s(
    "I can identify an object and check who owns it.",
    "At a desk or lost-property counter",
    "polite",
    [
      ["これは{何|なん}ですか。", "What is this?"],
      ["それはわたしのかばんです。", "That is my bag."],
      ["この{傘|かさ}はだれのですか。", "Whose umbrella is this?"],
      ["あの{青|あお}い{本|ほん}です。", "It is that blue book over there."],
      ["わたしのはこれじゃありません。", "This one is not mine."],
      ["これも{田中|たなか}さんのですか。", "Is this also Tanaka's?"],
    ],
  ),
  "numbers-time": s(
    "I can ask the time, read a price, and arrange a meeting time.",
    "Checking schedules and prices",
    "polite",
    [
      ["{今|いま}、{何時|なんじ}ですか。", "What time is it now?"],
      ["これはいくらですか。", "How much is this?"],
      ["{三百円|さんびゃくえん}です。", "It is three hundred yen."],
      ["{九時|くじ}から{五時|ごじ}までです。", "It is from nine to five."],
      [
        "{土曜日|どようび}の{二時|にじ}はどうですか。",
        "How about two o'clock on Saturday?",
      ],
      [
        "では、{二時半|にじはん}に{会|あ}いましょう。",
        "Then let's meet at two thirty.",
      ],
    ],
  ),
  "daily-routines": s(
    "I can describe my day and how I travel to school or work.",
    "Talking about an ordinary weekday",
    "polite",
    [
      [
        "{毎朝|まいあさ}{六時|ろくじ}に{起|お}きます。",
        "I get up at six every morning.",
      ],
      ["うちで{朝|あさ}ごはんを{食|た}べます。", "I eat breakfast at home."],
      ["バスで{会社|かいしゃ}へ{行|い}きます。", "I go to work by bus."],
      ["{昼|ひる}ごはんは{十二時|じゅうにじ}です。", "Lunch is at twelve."],
      [
        "きのうは{友達|ともだち}と{帰|かえ}りました。",
        "Yesterday I went home with a friend.",
      ],
      [
        "{夜|よる}はあまりテレビを{見|み}ません。",
        "I do not watch much television at night.",
      ],
    ],
  ),
  "places-existence": s(
    "I can ask where a place is and understand a simple location.",
    "Finding your way around a station",
    "polite",
    [
      ["すみません、トイレはどこですか。", "Excuse me, where is the restroom?"],
      ["{出口|でぐち}はあちらです。", "The exit is over there."],
      [
        "{銀行|ぎんこう}は{駅|えき}の{隣|となり}です。",
        "The bank is next to the station.",
      ],
      [
        "この{近|ちか}くにコンビニがありますか。",
        "Is there a convenience store near here?",
      ],
      [
        "{先生|せんせい}は{教室|きょうしつ}にいます。",
        "The teacher is in the classroom.",
      ],
      [
        "{二階|にかい}の{右|みぎ}です。",
        "It is on the right on the second floor.",
      ],
    ],
  ),
  "describing-preferences": s(
    "I can describe a place and say what I like or prefer.",
    "Choosing food and places with a friend",
    "polite",
    [
      ["この{店|みせ}は{静|しず}かですね。", "This shop is quiet, isn't it?"],
      ["{辛|から}い{食|た}べ{物|もの}が{好|す}きです。", "I like spicy food."],
      [
        "コーヒーはあまり{好|す}きじゃありません。",
        "I do not like coffee very much.",
      ],
      ["こちらのほうが{安|やす}いです。", "This one is cheaper."],
      ["どれがいちばん{大|おお}きいですか。", "Which is the biggest?"],
      ["きのうはとても{寒|さむ}かったです。", "It was very cold yesterday."],
    ],
  ),
  "shopping-requests": s(
    "I can order a meal and make basic requests in a shop.",
    "Ordering and paying at a café",
    "polite",
    [
      ["このパンを{二|ふた}つください。", "Two of these breads, please."],
      ["お{水|みず}をおねがいします。", "Water, please."],
      ["{少|すこ}し{待|ま}ってください。", "Please wait a moment."],
      ["{持|も}ち{帰|かえ}りでおねがいします。", "To take away, please."],
      ["カードで{払|はら}えますか。", "Can I pay by card?"],
      ["レシートをください。", "A receipt, please."],
    ],
  ),
  "invitations-wishes": s(
    "I can invite someone, accept, or suggest another time.",
    "Planning an outing",
    "polite",
    [
      [
        "{一緒|いっしょ}にお{昼|ひる}を{食|た}べませんか。",
        "Would you like to have lunch together?",
      ],
      ["いいですね。{行|い}きましょう。", "Sounds good. Let's go."],
      [
        "すみません、{今日|きょう}はちょっと。",
        "Sorry, today is a little difficult.",
      ],
      ["あしたはどうですか。", "How about tomorrow?"],
      [
        "{新|あたら}しい{映画|えいが}を{見|み}たいです。",
        "I want to see the new movie.",
      ],
      [
        "{駅|えき}の{前|まえ}で{会|あ}いましょう。",
        "Let's meet in front of the station.",
      ],
    ],
  ),
  "connected-actions": s(
    "I can ask permission and say what I am doing now.",
    "Sharing a room or study space",
    "polite",
    [
      ["ここに{座|すわ}ってもいいですか。", "May I sit here?"],
      ["はい、どうぞ。", "Yes, go ahead."],
      ["{窓|まど}を{閉|し}めてください。", "Please close the window."],
      [
        "{今|いま}、{宿題|しゅくだい}をしています。",
        "I am doing homework now.",
      ],
      ["{食|た}べてから、{出|で}かけます。", "I will go out after eating."],
      [
        "ここでは{写真|しゃしん}を{撮|と}らないでください。",
        "Please do not take photos here.",
      ],
    ],
  ),
  "plain-forms-rules": s(
    "I can explain a basic ability, need, or practical problem.",
    "Asking for assistance in daily life",
    "polite",
    [
      [
        "{日本語|にほんご}は{少|すこ}し{話|はな}せます。",
        "I can speak a little Japanese.",
      ],
      ["この{漢字|かんじ}が{読|よ}めません。", "I cannot read this kanji."],
      [
        "{名前|なまえ}を{書|か}かなければなりませんか。",
        "Do I have to write my name?",
      ],
      [
        "{今日|きょう}は{来|こ}なくてもいいです。",
        "You do not have to come today.",
      ],
      ["{財布|さいふ}がありません。", "I do not have my wallet."],
      ["すみません、{手伝|てつだ}ってください。", "Excuse me, please help me."],
    ],
  ),
  "past-and-experience": s(
    "I can talk about a past day and something I have tried.",
    "Chatting about the weekend",
    "polite",
    [
      [
        "{週末|しゅうまつ}は{何|なに}をしましたか。",
        "What did you do on the weekend?",
      ],
      [
        "{友達|ともだち}と{海|うみ}へ{行|い}きました。",
        "I went to the sea with a friend.",
      ],
      ["とても{楽|たの}しかったです。", "It was very enjoyable."],
      ["{京都|きょうと}へ{行|い}ったことがあります。", "I have been to Kyoto."],
      [
        "これはきのう{買|か}ったお{菓子|かし}です。",
        "These are the sweets I bought yesterday.",
      ],
      [
        "{家|いえ}で{料理|りょうり}をしたり、{本|ほん}を{読|よ}んだりしました。",
        "I did things such as cooking and reading at home.",
      ],
    ],
  ),
  "n5-integration": s(
    "I can handle a short everyday exchange from greeting to a clear plan.",
    "Arranging a visit and checking details",
    "polite",
    [
      [
        "{明日|あした}は{何時|なんじ}がいいですか。",
        "What time is good tomorrow?",
      ],
      [
        "{午前中|ごぜんちゅう}は{仕事|しごと}があります。",
        "I have work in the morning.",
      ],
      [
        "{午後|ごご}{三時|さんじ}に{行|い}きます。",
        "I will come at three in the afternoon.",
      ],
      [
        "{雨|あめ}ですから、バスで{行|い}きます。",
        "It is raining, so I will come by bus.",
      ],
      ["{着|つ}いたら、{電話|でんわ}します。", "I will call when I arrive."],
      [
        "では、またあした。よろしくおねがいします。",
        "Then see you tomorrow. Thank you in advance.",
      ],
    ],
  ),
};
