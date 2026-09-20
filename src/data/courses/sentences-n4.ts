import { sentences as s, type SentencePractice } from "./types";

export const n4Sentences: Record<string, SentencePractice> = {
  "plain-speech": s(
    "I can explain a small problem and pass on someone's message.",
    "Talking to a colleague or teacher",
    "polite",
    [
      [
        "{電車|でんしゃ}が{遅|おく}れたので、{少|すこ}し{遅刻|ちこく}します。",
        "The train is delayed, so I will be a little late.",
      ],
      [
        "{田中|たなか}さんは{午後|ごご}{来|く}ると{言|い}っていました。",
        "Tanaka said they would come this afternoon.",
      ],
      [
        "このやり{方|かた}のほうがいいと{思|おも}います。",
        "I think this way is better.",
      ],
      [
        "すみません、よく{聞|き}こえなかったんです。",
        "Sorry, I couldn't hear clearly.",
      ],
      ["これはどういう{意味|いみ}ですか。", "What does this mean?"],
      [
        "{時間|じかん}が{変|か}わったそうですよ。",
        "I heard the time has changed.",
      ],
    ],
  ),
  "plans-decisions": s(
    "I can explain my plans and confirm a booking or changed arrangement.",
    "Making travel and weekend plans",
    "polite",
    [
      [
        "{来週|らいしゅう}{旅行|りょこう}する{予定|よてい}です。",
        "I am scheduled to travel next week.",
      ],
      [
        "{今夜|こんや}ホテルを{予約|よやく}するつもりです。",
        "I intend to book a hotel tonight.",
      ],
      [
        "{車|くるま}ではなく、{電車|でんしゃ}で{行|い}くことにしました。",
        "I decided to go by train instead of car.",
      ],
      [
        "{集合|しゅうごう}は{九時|くじ}になりました。",
        "The meeting time has been set for nine.",
      ],
      [
        "{予定|よてい}が{変|か}わったら、{連絡|れんらく}します。",
        "I will contact you if the plan changes.",
      ],
      [
        "もう{一泊|いっぱく}しようと{思|おも}っています。",
        "I am thinking of staying one more night.",
      ],
    ],
  ),
  "ability-change": s(
    "I can explain my current ability and a habit I am trying to build.",
    "Talking about learning and routines",
    "polite",
    [
      [
        "{前|まえ}より{漢字|かんじ}が{読|よ}めるようになりました。",
        "I can read more kanji than before.",
      ],
      [
        "{毎日|まいにち}{十分|じゅっぷん}{練習|れんしゅう}するようにしています。",
        "I make a point of practicing for ten minutes every day.",
      ],
      [
        "まだ{速|はや}い{会話|かいわ}は{聞|き}き{取|と}れません。",
        "I still cannot follow fast conversations.",
      ],
      [
        "{自転車|じてんしゃ}で{通|かよ}うようになりました。",
        "I have started commuting by bicycle.",
      ],
      [
        "ここから{駅|えき}の{看板|かんばん}が{見|み}えます。",
        "You can see the station sign from here.",
      ],
      [
        "{最近|さいきん}、{夜|よる}{遅|おそ}くまで{起|お}きないようにしています。",
        "Recently I try not to stay up late.",
      ],
    ],
  ),
  "giving-help": s(
    "I can request a favor and thank someone for practical help.",
    "Borrowing things and helping a friend move",
    "polite",
    [
      [
        "この{箱|はこ}を{運|はこ}ぶのを{手伝|てつだ}ってもらえませんか。",
        "Could you help me carry this box?",
      ],
      ["ペンを{貸|か}していただけませんか。", "Could you lend me a pen?"],
      [
        "{友達|ともだち}が{駅|えき}まで{迎|むか}えに{来|き}てくれました。",
        "A friend came to pick me up at the station.",
      ],
      [
        "{先生|せんせい}に{文章|ぶんしょう}を{直|なお}してもらいました。",
        "I had my teacher correct my writing.",
      ],
      [
        "{手伝|てつだ}ってくれて、ありがとうございます。",
        "Thank you for helping me.",
      ],
      [
        "わたしでよければ、お{手伝|てつだ}いします。",
        "If I can be of help, I would be happy to assist.",
      ],
    ],
  ),
  "rules-advice": s(
    "I can ask about requirements and explain a basic health or scheduling problem.",
    "At reception or arranging an absence",
    "polite",
    [
      [
        "{予約|よやく}しなくても{大丈夫|だいじょうぶ}ですか。",
        "Is it okay without a reservation?",
      ],
      [
        "{熱|ねつ}があるので、{今日|きょう}は{休|やす}みます。",
        "I have a fever, so I will be absent today.",
      ],
      [
        "{無理|むり}をしないほうがいいですよ。",
        "You should not push yourself too hard.",
      ],
      [
        "{保険証|ほけんしょう}を{持|も}ってきたほうがいいですか。",
        "Should I bring my insurance card?",
      ],
      [
        "ここに{住所|じゅうしょ}を{書|か}く{必要|ひつよう}があります。",
        "You need to write your address here.",
      ],
      [
        "{都合|つごう}が{悪|わる}くなったら、{前日|ぜんじつ}までに{連絡|れんらく}してください。",
        "If you become unavailable, please contact us by the previous day.",
      ],
    ],
  ),
  conditions: s(
    "I can respond to changing weather and give a conditional instruction.",
    "Travel directions and backup plans",
    "polite",
    [
      [
        "{雨|あめ}だったら、{室内|しつない}で{遊|あそ}びましょう。",
        "If it rains, let's do something indoors.",
      ],
      [
        "{駅|えき}に{着|つ}いたら、メッセージをください。",
        "Send me a message when you reach the station.",
      ],
      [
        "この{道|みち}をまっすぐ{行|い}くと、{橋|はし}があります。",
        "If you go straight along this road, there is a bridge.",
      ],
      [
        "{時間|じかん}があれば、お{茶|ちゃ}を{飲|の}みませんか。",
        "If you have time, would you like some tea?",
      ],
      [
        "{切符|きっぷ}を{買|か}うなら、あの{機械|きかい}が{使|つか}えます。",
        "If you want to buy a ticket, you can use that machine.",
      ],
      [
        "{分|わ}からなければ、{係|かかり}の{人|ひと}に{聞|き}いてください。",
        "If you do not understand, please ask a staff member.",
      ],
    ],
  ),
  "states-preparation": s(
    "I can report a household problem and describe what is already prepared.",
    "At home or in shared accommodation",
    "polite",
    [
      [
        "エアコンが{動|うご}かなくなりました。",
        "The air conditioner has stopped working.",
      ],
      ["{窓|まど}が{開|あ}いたままですよ。", "The window is still open."],
      [
        "{机|つくえ}に{鍵|かぎ}を{置|お}いてあります。",
        "The key has been left on the desk.",
      ],
      [
        "{来|く}る{前|まえ}に{電話|でんわ}しておいてください。",
        "Please phone in advance before coming.",
      ],
      [
        "{電車|でんしゃ}にかばんを{忘|わす}れてしまいました。",
        "I accidentally left my bag on the train.",
      ],
      [
        "{使|つか}ったら、{電源|でんげん}を{切|き}ってください。",
        "Please switch off the power after using it.",
      ],
    ],
  ),
  "passive-causative": s(
    "I can explain an unwanted event and ask permission to change a commitment.",
    "At work and at a lost-property counter",
    "polite",
    [
      [
        "{電車|でんしゃ}で{足|あし}を{踏|ふ}まれました。",
        "Someone stepped on my foot on the train.",
      ],
      [
        "{財布|さいふ}を{盗|ぬす}まれたかもしれません。",
        "My wallet may have been stolen.",
      ],
      [
        "{今日|きょう}は{早|はや}く{帰|かえ}らせていただけませんか。",
        "Could you let me leave early today?",
      ],
      [
        "もう{少|すこ}し{考|かんが}えさせてください。",
        "Please let me think a little longer.",
      ],
      [
        "{店員|てんいん}さんに{名前|なまえ}を{呼|よ}ばれました。",
        "The shop assistant called my name.",
      ],
      [
        "この{道具|どうぐ}を{使|つか}わせてもらってもいいですか。",
        "Could I have permission to use this tool?",
      ],
    ],
  ),
  "time-and-actions": s(
    "I can give a clear update about the stage of a task and its deadline.",
    "Coordinating tasks with a colleague",
    "polite",
    [
      ["いま{出|で}かけるところです。", "I am just about to go out."],
      [
        "{資料|しりょう}を{確認|かくにん}しているところです。",
        "I am in the middle of checking the materials.",
      ],
      ["さっき{終|お}わったところです。", "I finished just a moment ago."],
      [
        "{明日|あした}の{昼|ひる}までに{送|おく}ります。",
        "I will send it by noon tomorrow.",
      ],
      [
        "{説明|せつめい}を{聞|き}きながら、メモを{取|と}ります。",
        "I take notes while listening to the explanation.",
      ],
      [
        "{入|はい}ったばかりなので、まだ{慣|な}れていません。",
        "I have only just joined, so I am not used to things yet.",
      ],
    ],
  ),
  "uncertainty-appearance": s(
    "I can distinguish what I heard from what I suspect or can see.",
    "Weather, travel, and restaurant conversations",
    "polite",
    [
      [
        "{空|そら}が{暗|くら}くて、{雨|あめ}が{降|ふ}りそうです。",
        "The sky is dark and it looks like rain.",
      ],
      [
        "{予報|よほう}では{午後|ごご}から{晴|は}れるそうです。",
        "The forecast says it will clear up this afternoon.",
      ],
      [
        "{店|みせ}はもう{閉|し}まったみたいです。",
        "It looks like the shop has already closed.",
      ],
      ["{道|みち}が{混|こ}むかもしれません。", "The roads might be busy."],
      ["このケーキはおいしそうですね。", "This cake looks delicious."],
      [
        "{本当|ほんとう}かどうか、{調|しら}べてみます。",
        "I will check whether it is true.",
      ],
    ],
  ),
  "polite-service": s(
    "I can introduce myself formally and understand common service requests.",
    "Visiting an office or speaking to reception",
    "formal",
    [
      ["アニと{申|もう}します。", "My name is Ani."],
      [
        "{三時|さんじ}に{予約|よやく}しております。",
        "I have a reservation for three o'clock.",
      ],
      ["こちらでお{待|ま}ちください。", "Please wait here."],
      [
        "{明日|あした}{伺|うかが}ってもよろしいでしょうか。",
        "May I visit tomorrow?",
      ],
      [
        "お{名前|なまえ}をもう{一度|いちど}お{願|ねが}いできますか。",
        "Could I have your name once more?",
      ],
      [
        "お{忙|いそが}しいところ、ありがとうございます。",
        "Thank you for your time when you are busy.",
      ],
    ],
  ),
  "n4-integration": s(
    "I can change an arrangement, confirm requirements, and explain my choice.",
    "Changing a booking and checking daily-life procedures",
    "polite",
    [
      [
        "{予約|よやく}を{土曜日|どようび}に{変|か}えてもらえますか。",
        "Could you change my reservation to Saturday?",
      ],
      [
        "{午前|ごぜん}{十時|じゅうじ}なら{大丈夫|だいじょうぶ}です。",
        "Ten in the morning works for me.",
      ],
      [
        "{持|も}っていく{物|もの}を{教|おし}えてください。",
        "Please tell me what to bring.",
      ],
      [
        "この{書類|しょるい}だけでいいかどうか、{確認|かくにん}したいです。",
        "I want to check whether this document alone is enough.",
      ],
      [
        "{近|ちか}いし、{料金|りょうきん}も{安|やす}いので、ここにしました。",
        "I chose this place because it is nearby and inexpensive.",
      ],
      [
        "{説明|せつめい}が{分|わ}かりやすくて、{助|たす}かりました。",
        "The clear explanation was a great help.",
      ],
    ],
  ),
};
