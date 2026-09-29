import {
  grammar as g,
  passage as p,
  problemSet,
  question as q,
  wordProblem,
  words,
  type CourseSeed,
} from "./types";

export const n4Courses: CourseSeed[] = [
  {
    slug: "plain-speech",
    title: "Plain speech & reporting ideas",
    summary:
      "Move between polite and plain style, quote someone accurately, and add explanations to a conversation.",
    vocabulary: words(`意見|いけん|opinion
思う|おもう|to think
言う|いう|to say
説明|せつめい|explanation
意味|いみ|meaning
理由|りゆう|reason
約束|やくそく|promise; appointment
都合|つごう|availability; convenience`),
    grammar: [
      g(
        "Plain-style sentences",
        "Verbs use dictionary, ない, た, and なかった forms. Nouns and な-adjectives use だ, ではない, だった, and ではなかった. い-adjectives never take だ after their plain positive form.",
        "きのうは{忙|いそが}しかった。",
        "I was busy yesterday.",
      ),
      g(
        "〜と思います",
        "Put a plain clause before と思います to state your view. Keep だ with affirmative nouns and な-adjectives: 便利だと思います. A question such as どう思いますか asks for an opinion.",
        "この{方法|ほうほう}は{便利|べんり}だと{思|おも}います。",
        "I think this method is convenient.",
      ),
      g(
        "〜と言っていました",
        "Use と to quote the content of what someone said. 言っていました often reports an earlier message. Check whose words they are before treating them as the current speaker's opinion.",
        "{田中|たなか}さんは{明日|あした}{来|く}ると{言|い}っていました。",
        "Tanaka said they would come tomorrow.",
      ),
      g(
        "〜んです・〜のです",
        "Add explanatory んです to a plain clause; nouns and な-adjectives use なんです. It supplies relevant background or asks for an explanation, rather than just adding politeness.",
        "{電車|でんしゃ}が{遅|おく}れたんです。",
        "The train was delayed. (Explaining the situation.)",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the plain past of 忙しいです: きのうは ___。",
        "忙しかった",
        ["忙しいだった", "忙しかっただ", "忙しだった"],
        "An い-adjective forms its plain past by replacing い with かった, and it never takes だ or だった after it.",
      ),
      q(
        "Complete the opinion: この町は静か ___ 思います。",
        "だと",
        ["ですを", "なと", "にと"],
        "A noun or な-adjective retains plain だ before the quotation particle と.",
      ),
      q(
        "Report Tanaka's message: 田中さんは少し遅れる ___ 言っていました。",
        "と",
        ["を", "が", "に"],
        "と marks the content of what was said, so the quoted clause 少し遅れる comes right before 言っていました.",
      ),
      q(
        "Choose the explanation: 今日は休み ___。",
        "なんです",
        ["のですだ", "だんです", "いんです"],
        "休み is a noun, so explanatory のです becomes なのです or なんです.",
      ),
    ],
    reading: p(
      "A message about class",
      "{先生|せんせい}からメールが{来|き}た。{明日|あした}の{授業|じゅぎょう}は{教室|きょうしつ}の{工事|こうじ}で{図書館|としょかん}の{部屋|へや}を{使|つか}うそうだ。{開始|かいし}の{時間|じかん}はいつもと{同|おな}じだが、{入口|いりぐち}が{分|わ}かりにくいので、{少|すこ}し{早|はや}く{来|き}てほしいと{書|か}いてあった。わたしは{初|はじ}めて{行|い}く{友達|ともだち}と{駅|えき}で{待|ま}ち{合|あ}わせることにした。",
      "An email arrived from the teacher. Tomorrow's class will use a room in the library because the classroom is under construction. The starting time is unchanged, but the email asks us to come a little early because the entrance is hard to find. I decided to meet a friend who has never been there at the station.",
      q(
        "Why are students asked to arrive early?",
        "The entrance may be hard to find",
        [
          "Class starts earlier",
          "They must help with construction",
          "The library closes early",
        ],
        "入口が分かりにくいので gives the reason; the starting time is explicitly unchanged.",
      ),
      q(
        "What did the writer decide to do?",
        "Meet a friend at the station",
        [
          "Ask the teacher for directions",
          "Skip tomorrow's class",
          "Arrive at the usual time",
        ],
        "友達と駅で待ち合わせることにした: ことにした marks the writer's own decision to meet a friend who has never been there.",
      ),
    ),
    listening: p(
      "Reporting a message",
      "{山田|やまだ}さんは{今日|きょう}{来|き}ますか。さっき{電話|でんわ}があって、{仕事|しごと}が{終|お}わらないので{三十分|さんじゅっぷん}ほど{遅|おく}れると{言|い}っていました。{先|さき}に{始|はじ}めてほしいそうです。",
      "Is Yamada coming today? They phoned earlier and said they would be about thirty minutes late because work isn't finished. They would like us to start first.",
      q(
        "What should the others do?",
        "Start without waiting for Yamada",
        [
          "Cancel the meeting",
          "Wait for thirty minutes before starting",
          "Help Yamada finish work",
        ],
        "先に始めてほしい reports Yamada's request, rather than just the arrival delay.",
      ),
      q(
        "Why will Yamada be late?",
        "Their work is not finished",
        [
          "The train is delayed",
          "They are feeling unwell",
          "They forgot the meeting",
        ],
        "仕事が終わらないので gives the reason for the delay of about thirty minutes (三十分ほど).",
      ),
    ),
    practice:
      "Rewrite four polite sentences in plain style. Report a friend's plan with と言っていました and explain one change with んです.",
  },
  {
    slug: "plans-decisions",
    title: "Plans, decisions & intentions",
    summary:
      "Separate your intentions from arrangements, personal decisions, and rules made by others.",
    vocabulary: words(`予定|よてい|schedule; plan
予約|よやく|reservation
出発|しゅっぱつ|departure
準備|じゅんび|preparation
留学|りゅうがく|study abroad
決める|きめる|to decide
続ける|つづける|to continue
将来|しょうらい|future`),
    grammar: [
      g(
        "〜つもりです",
        "Use dictionary form + つもり for an intention and ない-form + つもり for an intention not to act. This reports the speaker's plan, not a guaranteed event.",
        "{来年|らいねん}{留学|りゅうがく}するつもりです。",
        "I intend to study abroad next year.",
      ),
      g(
        "〜予定です",
        "Dictionary form or noun + の precedes 予定. This emphasizes a schedule or arrangement. A scheduled event may still change.",
        "{九時|くじ}に{出発|しゅっぱつ}する{予定|よてい}です。",
        "We are scheduled to leave at nine.",
      ),
      g(
        "〜ことにする・〜ことになる",
        "ことにする presents a personal decision; ことになる presents a decision or development as settled by circumstances or others. Use dictionary or ない forms before こと.",
        "{毎朝|まいあさ}{走|はし}ることにしました。",
        "I decided to run every morning.",
      ),
      g(
        "Volitional + と思っています",
        "Ichidan verbs take よう, godan verbs change u to o + う, and irregulars are しよう and こよう. Volitional + と思っています describes an intention already being considered.",
        "{週末|しゅうまつ}に{予約|よやく}しようと{思|おも}っています。",
        "I am thinking of making a reservation this weekend.",
      ),
    ],
    grammarChecks: [
      q(
        "Say you intend not to buy one: 今年は車を ___ つもりです。",
        "買わない",
        ["買った", "買いない", "買わなかった"],
        "An intention not to act puts the ない-form before つもり: 買わないつもりです. A past form would describe something already done, not a plan.",
      ),
      q(
        "Choose the scheduled noun phrase: 来週は出張 ___ 予定です。",
        "の",
        ["を", "な", "に"],
        "A noun such as 出張 takes の before 予定: 出張の予定です. A verb uses its plain form directly, as in 出張する予定です.",
      ),
      q(
        "Which expression presents the speaker's own decision?",
        "勉強することにしました",
        [
          "勉強することになりました",
          "勉強するそうです",
          "勉強したことがあります",
        ],
        "ことにする foregrounds a decision made by the speaker.",
      ),
      q(
        "Choose the volitional form for 'I am thinking of going': 京都へ ___ と思っています。",
        "行こう",
        ["行きよう", "行くよう", "行けよう"],
        "A godan verb changes its final u sound to o and adds う, so 行く becomes 行こう before と思っています.",
      ),
    ],
    reading: p(
      "A changed itinerary",
      "{来月|らいげつ}、{京都|きょうと}へ{旅行|りょこう}する{予定|よてい}だ。はじめは{車|くるま}で{行|い}くつもりだったが、{運転|うんてん}できる{友達|ともだち}が{行|い}けなくなった。それで、{電車|でんしゃ}で{行|い}くことにした。ホテルはもう{予約|よやく}してあるので{変|か}えない。{駅|えき}からホテルまではバスを{使|つか}おうと{思|おも}っている。",
      "I plan to visit Kyoto next month. At first I intended to go by car, but the friend who can drive can no longer go. So I decided to travel by train. I will keep the hotel because it is already booked. I am thinking of taking a bus from the station to the hotel.",
      q(
        "Which part of the plan changed?",
        "The main transport, from car to train",
        ["The destination", "The hotel reservation", "The month of travel"],
        "The unavailable driver leads to 電車で行くことにした. The hotel explicitly stays the same.",
      ),
      q(
        "How will the writer get from the station to the hotel?",
        "By bus",
        ["On foot", "By car", "By taxi"],
        "駅からホテルまではバスを使おうと思っている: the volitional + と思っている shows the bus is the plan for that part of the trip.",
      ),
    ),
    listening: p(
      "Who decided?",
      "{来月|らいげつ}から{会議|かいぎ}はオンラインで{行|おこな}うことになりました。{会社|かいしゃ}が{決|き}めたんです。わたしは{家|いえ}から{参加|さんか}するつもりです。",
      "From next month, meetings will be held online. The company decided this. I intend to join from home.",
      q(
        "What did the company decide?",
        "Meetings will be online",
        [
          "Everyone must work from home",
          "Meetings will stop",
          "Only one person may attend",
        ],
        "The company decided the meeting format; joining from home is the speaker's own intention.",
      ),
      q(
        "Where does the speaker intend to join the meetings from?",
        "From home",
        ["From the office", "From a café", "From a client's office"],
        "家から参加するつもりです: つもり marks the speaker's own intention, separate from the company's decision about the format.",
      ),
    ),
    practice:
      "Describe an intention, a confirmed schedule, your own decision, and an externally made decision. Keep their sources clear.",
  },
  {
    slug: "ability-change",
    title: "Ability, habits & gradual change",
    summary:
      "Use potential verbs and explain how abilities or daily habits change over time.",
    vocabulary: words(`練習|れんしゅう|practice
習慣|しゅうかん|habit
健康|けんこう|health
自転車|じてんしゃ|bicycle
乗る|のる|to ride; to board
覚える|おぼえる|to memorize
聞こえる|きこえる|to be audible
見える|みえる|to be visible`),
    grammar: [
      g(
        "Potential verbs",
        "Godan verbs change u to e + る: 読める. Ichidan verbs replace る with られる: 食べられる. する becomes できる and 来る becomes 来られる. Potential verbs conjugate as ichidan verbs; use the standard られる form in formal study.",
        "{漢字|かんじ}が{読|よ}めます。",
        "I can read kanji.",
      ),
      g(
        "〜ようになります",
        "Use a potential or other nonvolitional verb + ようになる for a newly possible state or developing habit. A negative change uses なくなる: 食べなくなる.",
        "{自転車|じてんしゃ}に{乗|の}れるようになりました。",
        "I have become able to ride a bicycle.",
      ),
      g(
        "〜ようにしています",
        "Dictionary or ない form + ようにしている expresses a deliberate effort to maintain a habit. It does not claim that the goal is achieved perfectly every time.",
        "{毎日|まいにち}{歩|ある}くようにしています。",
        "I make a point of walking every day.",
      ),
      g(
        "見える・聞こえる",
        "These express something being visible or audible without deliberate effort. Compare 見られる, being able to watch, and 聞ける, being able to listen because circumstances allow it.",
        "ここから{海|うみ}が{見|み}えます。",
        "The sea is visible from here.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the potential form of 話す.",
        "話せる",
        ["話される", "話しれる", "話すれる"],
        "A godan verb changes its final u sound to e and adds る: 話せる.",
      ),
      q(
        "Express a new ability: 日本語で説明できる ___ なりました。",
        "ように",
        ["ために", "そうで", "つもりに"],
        "Potential + ようになる expresses becoming able to do something.",
      ),
      q(
        "Describe a habit you make an effort to keep: 毎晩早く寝る ___ しています。",
        "ように",
        ["そうに", "ところに", "ばかり"],
        "Dictionary form + ようにしている describes a deliberate effort to keep a habit, without claiming it works every single night.",
      ),
      q(
        "A sound reaches you without any effort: 隣の部屋から音楽が ___。",
        "聞こえます",
        ["聞けます", "聞きます", "聞かれます"],
        "聞こえる describes something audible without deliberate effort; 聞ける means being able to listen because circumstances allow it.",
      ),
    ],
    reading: p(
      "A small daily habit",
      "{以前|いぜん}は{駅|えき}までバスに{乗|の}っていたが、{最近|さいきん}は{歩|ある}くようにしている。はじめは{二十分|にじゅっぷん}{歩|ある}くだけで{疲|つか}れた。でも、{一|いっ}か{月|げつ}{続|つづ}けると、{階段|かいだん}も{楽|らく}に{上|あ}がれるようになった。{雨|あめ}が{強|つよ}い{日|ひ}は{無理|むり}をしないでバスを{使|つか}う。{毎日|まいにち}{必|かなら}ず{歩|ある}くことより、{長|なが}く{続|つづ}けることを{大切|たいせつ}にしたい。",
      "I used to take a bus to the station, but recently I try to walk. At first, just twenty minutes of walking made me tired. After a month, I could climb stairs easily too. On days with heavy rain I take the bus instead of pushing myself. I value continuing long term more than walking every single day.",
      q(
        "What matters most to the writer?",
        "Maintaining the habit over time",
        [
          "Never taking a bus",
          "Walking only on weekends",
          "Always walking faster",
        ],
        "The final sentence prioritizes 長く続けること over an absolute daily rule.",
      ),
      q(
        "What could the writer do after a month of walking?",
        "Climb stairs easily",
        [
          "Walk for two hours without rest",
          "Run all the way to the station",
          "Walk even in heavy rain",
        ],
        "一か月続けると、階段も楽に上がれるようになった: potential + ようになった marks the new ability after a month.",
      ),
    ),
    listening: p(
      "Telephone practice",
      "{日本語|にほんご}の{電話|でんわ}はどうですか。{前|まえ}は{名前|なまえ}も{聞|き}き{取|と}れませんでしたが、{今|いま}は{短|みじか}い{予約|よやく}ならできるようになりました。でも、{長|なが}い{説明|せつめい}はまだ{難|むずか}しいです。",
      "How are phone calls in Japanese? Before, I couldn't even catch names, but now I can make a short reservation. Long explanations are still difficult.",
      q(
        "What can the speaker now do?",
        "Make a short reservation",
        [
          "Understand every long explanation",
          "Interpret any meeting",
          "Speak without any difficulty",
        ],
        "The new ability is limited by 短い予約なら; long explanations remain difficult.",
      ),
      q(
        "What does the speaker still find difficult?",
        "Long explanations",
        [
          "Catching people's names",
          "Making a short reservation",
          "Answering the phone",
        ],
        "長い説明はまだ難しいです: まだ marks what is still hard, while catching names was the earlier problem.",
      ),
    ),
    practice:
      "Record what you can do now and what you could not do before. Choose one manageable daily habit and explain it with ようにしています.",
  },
  {
    slug: "giving-help",
    title: "Giving, receiving & asking for help",
    summary: "Track who benefits from an action and make considerate requests.",
    vocabulary: words(`手伝う|てつだう|to help
貸す|かす|to lend
借りる|かりる|to borrow
教える|おしえる|to teach; to tell
案内|あんない|guidance
お礼|おれい|thanks; expression of gratitude
荷物|にもつ|luggage
引っ越し|ひっこし|moving house`),
    grammar: [
      g(
        "〜てあげる",
        "Use a て-form + あげる when someone does a helpful action for another person. The grammatical subject is the helper. Avoid announcing favors to superiors as if they owe gratitude.",
        "{弟|おとうと}に{漢字|かんじ}を{教|おし}えてあげました。",
        "I helped my younger brother by teaching him kanji.",
      ),
      g(
        "〜てくれる",
        "Use てくれる when someone acts for the speaker or someone viewed as close to the speaker. The helper is the subject marked by が or は.",
        "{友達|ともだち}が{手伝|てつだ}ってくれました。",
        "A friend helped me.",
      ),
      g(
        "〜てもらう",
        "The subject is the recipient of help; に marks the person who performs the action. Compare 友達が教えてくれた with 私は友達に教えてもらった: the same favor can be described from different grammatical viewpoints.",
        "{先生|せんせい}に{作文|さくぶん}を{見|み}てもらいました。",
        "I had my teacher look at my composition.",
      ),
      g(
        "〜ていただけませんか",
        "Use this polite negative question to request someone's help. 〜てもらえませんか is less formal. A brief reason before the request helps the listener understand what is needed.",
        "もう{一度|いちど}{説明|せつめい}していただけませんか。",
        "Could you explain it once more?",
      ),
    ],
    grammarChecks: [
      q(
        "You taught your younger sister her homework: 妹に宿題を教えて ___。",
        "あげました",
        ["くれました", "もらいました", "いただきました"],
        "The speaker is the helper acting for the younger sister, so the て-form takes あげる; くれる and もらう describe help the speaker receives.",
      ),
      q(
        "Choose the form for help received: 友達が私を駅まで送って ___。",
        "くれました",
        ["もらいました", "あげました", "いましたです"],
        "The friend is the subject and acts for the speaker, so くれる fits.",
      ),
      q(
        "Who helped? 私は兄に荷物を運んでもらいました。",
        "The older brother",
        ["The speaker", "The younger brother", "The teacher"],
        "With てもらう, に marks the person doing the helpful action.",
      ),
      q(
        "Choose the most polite request to a teacher: もう一度説明して ___。",
        "いただけませんか",
        ["あげませんか", "くれ", "もらいました"],
        "〜ていただけませんか is a polite negative question asking someone to do something for you; 〜てもらえませんか would be less formal.",
      ),
    ],
    reading: p(
      "Moving day",
      "{引|ひ}っ{越|こ}しの{日|ひ}に、{友達|ともだち}のリーさんが{車|くるま}を{出|だ}してくれた。わたしはリーさんに{重|おも}い{荷物|にもつ}を{運|はこ}んでもらい、{自分|じぶん}では{小|ちい}さい{箱|はこ}を{運|はこ}んだ。{新|あたら}しい{部屋|へや}に{着|つ}いてから、{二人|ふたり}で{机|つくえ}を{組|く}み{立|た}てた。お{礼|れい}に{晩|ばん}ごはんを{作|つく}ってあげたかったが、{台所|だいどころ}がまだ{使|つか}えず、{近|ちか}くの{店|みせ}でごちそうした。",
      "On moving day, my friend Lee brought a car. Lee carried the heavy luggage for me while I carried small boxes. After arriving at the new room, we assembled a desk together. I wanted to cook dinner in thanks, but the kitchen was not usable yet, so I treated Lee at a nearby restaurant.",
      q(
        "How did the writer thank Lee?",
        "By treating Lee to a restaurant meal",
        [
          "By cooking at home",
          "By lending a car",
          "By assembling Lee's desk alone",
        ],
        "Cooking was only an unrealized intention. The actual thanks was a meal at a nearby restaurant.",
      ),
      q(
        "What did the writer carry on moving day?",
        "The small boxes",
        ["The heavy luggage", "Lee's car", "The new desk by themselves"],
        "リーさんに重い荷物を運んでもらい、自分では小さい箱を運んだ: てもらう gives the heavy luggage to Lee, and 自分では marks the writer's own share.",
      ),
    ),
    listening: p(
      "Borrowing a dictionary",
      "{辞書|じしょ}を{忘|わす}れたんですが、{貸|か}してもらえませんか。いま{使|つか}っていますから、10{分|ぷん}{待|ま}ってもらえますか。はい、{大丈夫|だいじょうぶ}です。",
      "I forgot my dictionary. Could you lend me yours? I'm using it now; could you wait ten minutes? Yes, that's fine.",
      q(
        "What will happen next?",
        "The borrower will wait ten minutes",
        [
          "The dictionary will be lent immediately",
          "The borrower will buy a dictionary",
          "The request is permanently refused",
        ],
        "The response requests a short wait, which the borrower accepts.",
      ),
      q(
        "Why does the first speaker want to borrow a dictionary?",
        "They forgot their own",
        [
          "Theirs is broken",
          "They want to buy one",
          "The teacher asked them to",
        ],
        "辞書を忘れたんですが gives the background with んですが before the request 貸してもらえませんか.",
      ),
    ),
    practice:
      "Describe one favor using both てくれる and てもらう. Identify the actor and recipient explicitly before forming the sentences.",
  },
  {
    slug: "rules-advice",
    title: "Rules, advice & explanations",
    summary:
      "Distinguish what is required, optional, recommended, or unexpected in daily situations.",
    vocabulary: words(`必要|ひつよう|necessary
連絡|れんらく|contact
受付|うけつけ|reception
具合|ぐあい|condition; state
病院|びょういん|hospital
無理|むり|overdoing it; unreasonable
払う|はらう|to pay
持つ|もつ|to hold; to have`),
    grammar: [
      g(
        "〜なくてもいい",
        "Replace the final い in a ない-form with くてもいい to say an action is not necessary. This gives permission not to act; it does not forbid the action.",
        "{明日|あした}は{来|こ}なくてもいいです。",
        "You do not have to come tomorrow.",
      ),
      g(
        "〜たほうがいい・〜ないほうがいい",
        "Use the た-form for positive advice and the ない-form for negative advice. The past-shaped form in positive advice does not describe a completed action.",
        "{早|はや}く{休|やす}んだほうがいいです。",
        "You should rest early.",
      ),
      g(
        "Reasons with ので",
        "Use a plain clause + ので to give a reason as background; nouns and な-adjectives take なので. It often suits explanations and requests without sounding as assertive as から.",
        "{用事|ようじ}があるので、{先|さき}に{帰|かえ}ります。",
        "I have something to do, so I will leave first.",
      ),
      g(
        "Unexpected contrast with のに",
        "Plain clause + のに highlights a result contrary to expectation. Nouns and な-adjectives take なのに. It often conveys surprise or dissatisfaction.",
        "{予約|よやく}したのに、{席|せき}がありませんでした。",
        "Although I had a reservation, there was no seat.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 払わなくてもいい mean?",
        "You do not have to pay",
        ["You must not pay", "You have to pay", "You already paid"],
        "なくてもいい removes an obligation; it is not a prohibition.",
      ),
      q(
        "Which sentence advises against going out?",
        "出かけないほうがいいです",
        [
          "出かけたほうがいいです",
          "出かけなくてもいいです",
          "出かけたのにいいです",
        ],
        "Negative advice uses the ない-form + ほうがいい; the た-form gives positive advice, and なくてもいい only removes an obligation.",
      ),
      q(
        "Give a reason with a noun: 明日は休み ___、ゆっくり寝ます。",
        "なので",
        ["だので", "ので", "のでな"],
        "A noun such as 休み takes な before ので, so the reason clause becomes 休みなので.",
      ),
      q(
        "Choose the unexpected contrast: 勉強した ___、試験は難しかった。",
        "のに",
        ["ので", "ために", "までに"],
        "Studying suggests preparedness, but the exam remained difficult; のに marks that contrast.",
      ),
    ],
    reading: p(
      "Joining the community class",
      "{初|はじ}めて{参加|さんか}する{方|かた}は、{受付|うけつけ}で{名前|なまえ}を{書|か}いてください。{会員|かいいん}の{方|かた}は{書|か}かなくてもかまいません。{道具|どうぐ}はこちらで{用意|ようい}するので、{持|も}ってくる{必要|ひつよう}はありません。{動|うご}きやすい{服|ふく}で{来|き}たほうがいいです。{欠席|けっせき}する{場合|ばあい}は、{前日|ぜんじつ}までに{連絡|れんらく}してください。",
      "First-time participants should write their names at reception. Members do not need to. Equipment will be provided, so bringing it is unnecessary. Comfortable clothes are recommended. If absent, please contact us by the previous day.",
      q(
        "Which action is a recommendation rather than a requirement?",
        "Wearing comfortable clothes",
        [
          "First-time participants writing their names",
          "Reporting an absence by the previous day",
          "Bringing all equipment",
        ],
        "来たほうがいい expresses advice. Bringing equipment is unnecessary, rather than a recommendation.",
      ),
      q(
        "Who does not need to write their name at reception?",
        "Members",
        [
          "First-time participants",
          "People who bring their own equipment",
          "People who will be absent",
        ],
        "会員の方は書かなくてもかまいません removes the obligation for members; first-time participants must still write their names.",
      ),
    ),
    listening: p(
      "A delayed application",
      "{申込書|もうしこみしょ}を{今日|きょう}{出|だ}したほうがいいですか。{締切|しめきり}は{金曜日|きんようび}なので、{今日|きょう}でなくてもいいですよ。でも、{写真|しゃしん}を{忘|わす}れないでください。",
      "Should I submit the application today? The deadline is Friday, so it doesn't have to be today. But don't forget the photograph.",
      q(
        "What must accompany the application?",
        "A photograph",
        ["Today's newspaper", "A membership card", "A train ticket"],
        "The timing is flexible before Friday, but the speaker specifically reminds the applicant to include a photo.",
      ),
      q(
        "When is the application deadline?",
        "Friday",
        ["Today", "Tomorrow", "Next Monday"],
        "締切は金曜日なので、今日でなくてもいい: the Friday deadline is why the form does not have to go in today.",
      ),
    ),
    practice:
      "Write instructions for an event with one requirement, one optional action, one recommendation, and one reason.",
  },
  {
    slug: "conditions",
    title: "Conditions & hypothetical situations",
    summary:
      "Choose と, たら, ば, and なら according to the kind of condition you mean.",
    vocabulary: words(`春|はる|spring
道|みち|road; way
交差点|こうさてん|intersection
曲がる|まがる|to turn
間に合う|まにあう|to be on time
押す|おす|to push
選ぶ|えらぶ|to choose
困る|こまる|to be troubled`),
    grammar: [
      g(
        "Automatic results with と",
        "Dictionary or ない form + と describes a reliable result, a machine operation, or a discovery. It generally does not introduce your request or invitation as the result.",
        "このボタンを{押|お}すと、ドアが{開|あ}きます。",
        "When you press this button, the door opens.",
      ),
      g(
        "〜たら",
        "Add ら to the plain past form to express if or when. たら can precede requests and intentions and can indicate that one event finishes before the next starts.",
        "{駅|えき}に{着|つ}いたら、{電話|でんわ}してください。",
        "Please call when you arrive at the station.",
      ),
      g(
        "〜ば",
        "Godan verbs change u to e + ば, ichidan verbs take れば, and い-adjectives take ければ. Negative ない becomes なければ. This emphasizes the condition needed for a result.",
        "{安|やす}ければ、{買|か}います。",
        "If it is inexpensive, I will buy it.",
      ),
      g(
        "〜なら",
        "Use なら to respond to a situation or topic supplied by the listener: if that is what you mean. Advice with なら can concern preparation before the mentioned action.",
        "{京都|きょうと}へ{行|い}くなら、{先|さき}にホテルを{予約|よやく}したほうがいいです。",
        "If you're going to Kyoto, you should book a hotel first.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the automatic result: 右に曲がる ___、駅が見えます。",
        "と",
        ["ために", "のに", "ながら"],
        "と fits a predictable result in directions.",
      ),
      q(
        "Ask someone to call you after they arrive at the station.",
        "駅に着いたら、電話してください",
        [
          "駅に着くと、電話してください",
          "駅に着くなら、電話してください",
          "駅に着いたのに、電話してください",
        ],
        "たら can lead into a request and shows that arriving comes first; と cannot introduce a request, and なら would mean before you arrive.",
      ),
      q(
        "Form the condition 'if it is not cold': 寒く ___、外で食べましょう。",
        "なければ",
        ["ないば", "なかったば", "なくばです"],
        "Negative ない becomes なければ in this conditional form.",
      ),
      q(
        "A friend says they are going to Kyoto. Advise them: 京都へ行く ___、秋がいいですよ。",
        "なら",
        ["と", "ながら", "までに"],
        "なら takes up the plan the listener has just mentioned and attaches advice to it: if Kyoto is where you are going.",
      ),
    ],
    reading: p(
      "Choosing a route",
      "{山|やま}の{公園|こうえん}へはバスでも{歩|ある}いても{行|い}ける。バスなら{二十分|にじゅっぷん}で{着|つ}くが、{一時間|いちじかん}に{一本|いっぽん}しかない。{歩|ある}けば{四十分|よんじゅっぷん}かかる。{天気|てんき}がよければ{川|かわ}のそばを{歩|ある}くのがおすすめだ。ただし、{雨|あめ}が{降|ふ}ったら{道|みち}が{滑|すべ}りやすくなるので、バスを{使|つか}ってほしい。",
      "You can reach the mountain park by bus or on foot. The bus takes twenty minutes but runs only once an hour. Walking takes forty minutes. In good weather, walking along the river is recommended. However, if it rains the path becomes slippery, so please use the bus.",
      q(
        "Which route is recommended in rain?",
        "The bus because the path becomes slippery",
        [
          "Walking because it is quicker",
          "The train because it runs often",
          "The river path in all weather",
        ],
        "雨が降ったら introduces the safety condition for switching to the bus.",
      ),
      q(
        "How long does it take to walk to the park?",
        "Forty minutes",
        ["Twenty minutes", "One hour", "Ten minutes"],
        "歩けば四十分かかる gives the walking time; 二十分 is the bus journey and 一時間に一本 is how often the bus runs.",
      ),
    ),
    listening: p(
      "A plan for rain",
      "{明日|あした}、{雨|あめ}だったらどうしますか。{小|ちい}さい{雨|あめ}なら{予定|よてい}どおり{行|い}きます。{風|かぜ}も{強|つよ}かったら、{来週|らいしゅう}にしましょう。",
      "What will we do if it rains tomorrow? If it's light rain, we'll go as planned. If the wind is also strong, let's move it to next week.",
      q(
        "When will they postpone?",
        "If rain is accompanied by strong wind",
        [
          "For any light rain",
          "If the weather is clear",
          "Only if the bus is late",
        ],
        "Light rain alone does not cancel the plan; strong wind as well triggers postponement.",
      ),
      q(
        "What happens if there is only light rain?",
        "They go as planned",
        [
          "They move it to next week",
          "They cancel it for good",
          "They take the bus instead",
        ],
        "小さい雨なら予定どおり行きます: with なら the speaker answers the rain question, and light rain keeps the original plan.",
      ),
    ),
    practice:
      "Write a machine instruction with と, an arrival request with たら, a price condition with ば, and travel advice with なら.",
  },
  {
    slug: "states-preparation",
    title: "States, preparation & accidents",
    summary:
      "Distinguish an action from its result and explain preparation, completion, and regret.",
    vocabulary: words(`開く|あく|to open (intransitive)
閉まる|しまる|to close (intransitive)
壊れる|こわれる|to break (intransitive)
壊す|こわす|to break something
消える|きえる|to go out; to disappear
消す|けす|to turn off; to erase
置く|おく|to put; to place
片付ける|かたづける|to tidy up`),
    grammar: [
      g(
        "Transitive & intransitive pairs",
        "Transitive verbs take an object with を: ドアを開ける. Intransitive verbs describe the thing changing, often with が: ドアが開く. Learn pairs as words; there is no single conversion rule for every pair.",
        "{窓|まど}が{開|あ}いています。",
        "The window is open.",
      ),
      g(
        "〜てあります",
        "A transitive て-form + ある presents an intentional action's resulting state. It suggests that someone has arranged something, even if the actor is not named.",
        "{机|つくえ}に{資料|しりょう}が{置|お}いてあります。",
        "The materials have been placed on the desk.",
      ),
      g(
        "〜ておきます",
        "Use ておく for preparation or leaving something in a useful state. In casual speech it often contracts to とく, as in 買っとく, but practice the full form first.",
        "{会議|かいぎ}の{前|まえ}に{資料|しりょう}を{読|よ}んでおきます。",
        "I will read the materials before the meeting.",
      ),
      g(
        "〜てしまいます",
        "てしまう can emphasize complete finishing or an unintended, regrettable action. Context determines which meaning applies; casual forms include ちゃう and じゃう.",
        "{切符|きっぷ}をなくしてしまいました。",
        "I unfortunately lost my ticket.",
      ),
    ],
    grammarChecks: [
      q(
        "Describe a resulting state: ドア ___ 閉まっています。",
        "が",
        ["を", "で", "と"],
        "閉まる is intransitive; the door is the subject, not an object.",
      ),
      q(
        "Someone has set the materials out in advance: 資料が机に置いて ___。",
        "あります",
        ["います", "おきます", "しまいます"],
        "A transitive verb such as 置く takes てある to show a state someone arranged; with が marking 資料, ている does not fit this transitive verb.",
      ),
      q(
        "Express preparation: 旅行の前に切符を買って ___。",
        "おきます",
        ["いますでした", "ありますかた", "みたいです"],
        "ておく marks buying the tickets in preparation for the trip.",
      ),
      q(
        "Express regret about losing your wallet: 財布をなくして ___。",
        "しまいました",
        ["おきました", "ありました", "みました"],
        "てしまう here marks an unintended, regrettable action; ておく would mean losing it on purpose as preparation.",
      ),
    ],
    reading: p(
      "Getting the room ready",
      "{明日|あした}の{説明会|せつめいかい}のために、{椅子|いす}を{三十|さんじゅう}{並|なら}べておいた。{資料|しりょう}は{入口|いりぐち}の{机|つくえ}に{置|お}いてある。{帰|かえ}る{前|まえ}に{窓|まど}を{閉|し}めようとしたら、{一|ひと}つだけ{閉|し}まらなかった。{無理|むり}に{動|うご}かすと{壊|こわ}してしまいそうだったので、{管理人|かんりにん}に{連絡|れんらく}してから{帰|かえ}った。",
      "I arranged thirty chairs for tomorrow's information session. The materials have been placed on the table at the entrance. Before leaving, I tried to close the windows, but one would not close. Since forcing it seemed likely to break it, I contacted the caretaker before going home.",
      q(
        "Why did the writer contact the caretaker?",
        "One window would not close",
        [
          "There were no materials",
          "Thirty chairs were broken",
          "The door was locked",
        ],
        "The unresolved problem is a single window. The writer avoids forcing and damaging it.",
      ),
      q(
        "Where have the materials been placed?",
        "On the table at the entrance",
        [
          "On the thirty chairs",
          "In the caretaker's office",
          "Beside the window that would not close",
        ],
        "資料は入口の机に置いてある: てある shows the writer set them out there in advance for tomorrow's session.",
      ),
    ),
    listening: p(
      "Preparing for guests",
      "お{客|きゃく}さんが{来|く}る{前|まえ}に、お{茶|ちゃ}を{買|か}っておいてください。コップはもう{洗|あら}ってありますから、{机|つくえ}に{並|なら}べるだけでいいです。",
      "Please buy tea before the guests arrive. The cups have already been washed, so you only need to arrange them on the table.",
      q(
        "Which task is already finished?",
        "Washing the cups",
        ["Buying the tea", "Arranging the cups", "Welcoming the guests"],
        "もう洗ってあります indicates the completed preparation; the other tasks remain.",
      ),
      q(
        "What is the listener asked to buy?",
        "Tea",
        ["Cups", "Snacks", "Flowers"],
        "お茶を買っておいてください asks for tea to be bought before the guests come, as preparation with ておく.",
      ),
    ),
    practice:
      "Describe your room using three intransitive states and two intentional preparations. Contrast 開いている with 開けてある.",
  },
  {
    slug: "passive-causative",
    title: "Passive & causative viewpoints",
    summary:
      "Understand who acts, who is affected, and who lets or makes another person act.",
    vocabulary: words(`呼ぶ|よぶ|to call
招待|しょうたい|invitation
注意|ちゅうい|caution; warning
褒める|ほめる|to praise
叱る|しかる|to scold
盗む|ぬすむ|to steal
子供|こども|child
親|おや|parent`),
    grammar: [
      g(
        "Passive forms",
        "Godan verbs take a + れる: 呼ばれる; ichidan verbs take られる: 褒められる. Irregulars are される and こられる. The affected person can become the topic and the actor is marked by に.",
        "{先生|せんせい}に{褒|ほ}められました。",
        "I was praised by the teacher.",
      ),
      g(
        "Affected-person passive",
        "A passive can express how someone else's action affects you, including an unpleasant effect. In 財布を盗まれた, the wallet remains marked with を and the speaker is the affected person.",
        "{電車|でんしゃ}で{足|あし}を{踏|ふ}まれました。",
        "Someone stepped on my foot on the train.",
      ),
      g(
        "Causative forms",
        "Godan verbs take a + せる: 行かせる. Ichidan verbs take させる: 食べさせる. Irregulars are させる and こさせる. The context tells you whether the meaning is make or allow.",
        "{母|はは}は{子供|こども}に{野菜|やさい}を{食|た}べさせました。",
        "The mother made or had her child eat vegetables.",
      ),
      g(
        "〜させてください",
        "Causative て-form + ください requests permission to perform an action yourself. The speaker is asking the listener to let them act, rather than asking the listener to do the task.",
        "{少|すこ}し{考|かんが}えさせてください。",
        "Please let me think for a moment.",
      ),
    ],
    grammarChecks: [
      q(
        "In 私は先生に呼ばれました, who called?",
        "The teacher",
        ["The speaker", "The parent", "The child"],
        "The passive subject is the person called; に marks the teacher as actor.",
      ),
      q(
        "Someone stepped on your foot on the train. Which sentence tells it from your side?",
        "足を踏まれました",
        ["足を踏みました", "足が踏みました", "足を踏ませました"],
        "In the affected-person passive 足を踏まれた, the foot keeps を and the speaker is the one affected by someone else's action.",
      ),
      q(
        "Choose the causative of 食べる: 母は子供に野菜を ___。",
        "食べさせました",
        ["食べられました", "食べませました", "食べさせられました"],
        "An ichidan verb such as 食べる takes させる, so 食べさせる means the mother made or let the child eat.",
      ),
      q(
        "What does 休ませてください request?",
        "Please let me rest",
        ["Please rest yourself", "I made someone rest", "Someone praised me"],
        "The causative request asks permission for the speaker to rest.",
      ),
    ],
    reading: p(
      "Learning in the kitchen",
      "{子供|こども}のころ、{母|はは}は{料理|りょうり}をよく{手伝|てつだ}わせた。はじめは{野菜|やさい}を{洗|あら}うだけだったが、{少|すこ}しずつ{包丁|ほうちょう}も{使|つか}わせてくれた。{失敗|しっぱい}しても、すぐに{叱|しか}られることはなかった。{自分|じぶん}で{作|つく}ったものを{家族|かぞく}に{褒|ほ}められたとき、もっと{練習|れんしゅう}したいと{思|おも}った。",
      "As a child, my mother often had me help with cooking. At first I only washed vegetables, but gradually she let me use a knife too. I was not immediately scolded when I made mistakes. When my family praised something I made myself, I wanted to practice more.",
      q(
        "What increased the writer's motivation?",
        "Being praised by the family",
        [
          "Being scolded immediately",
          "Never using a knife",
          "Avoiding all mistakes",
        ],
        "The last sentence connects praise for the writer's own dish to wanting more practice.",
      ),
      q(
        "What did the writer do in the kitchen at first?",
        "Only washed vegetables",
        [
          "Cooked whole meals alone",
          "Used a kitchen knife",
          "Did the shopping",
        ],
        "はじめは野菜を洗うだけだった: using a knife came later, when the mother gradually let the writer (使わせてくれた).",
      ),
    ),
    listening: p(
      "Permission to leave",
      "すみません、{子供|こども}の{学校|がっこう}から{電話|でんわ}があったので、{早|はや}く{帰|かえ}らせていただけませんか。わかりました。{残|のこ}りの{仕事|しごと}はこちらでやっておきます。",
      "Excuse me, my child's school called. Could you let me go home early? Certainly. We will take care of the remaining work.",
      q(
        "What is the first speaker asking to do?",
        "Leave work early",
        ["Call every employee", "Send the listener home", "Cancel the school"],
        "帰らせていただけませんか is a polite request for permission to leave.",
      ),
      q(
        "Why does the first speaker ask to leave early?",
        "Their child's school phoned",
        [
          "They feel unwell",
          "Their work is already finished",
          "They have a train to catch",
        ],
        "子供の学校から電話があったので gives the reason with ので before the request to go home early.",
      ),
    ),
    practice:
      "Rewrite three active sentences as passives while preserving who did what. Create one causative sentence and explain whether it means permission or compulsion.",
  },
  {
    slug: "time-and-actions",
    title: "Time, simultaneous actions & progress",
    summary:
      "Locate actions in time and distinguish a deadline from an ongoing interval.",
    vocabulary: words(`途中|とちゅう|on the way; in the middle
食事|しょくじ|meal
洗濯|せんたく|laundry
掃除|そうじ|cleaning
終わる|おわる|to finish
始める|はじめる|to begin something
急ぐ|いそぐ|to hurry
締切|しめきり|deadline`),
    grammar: [
      g(
        "〜ながら",
        "Attach ながら to the ます-stem for two actions by the same person. The main action goes in the final clause. This basic use describes overlap, not a sequence.",
        "{音楽|おんがく}を{聞|き}きながら、{掃除|そうじ}します。",
        "I clean while listening to music.",
      ),
      g(
        "〜ところです",
        "Dictionary form + ところ means about to act, ているところ means in the middle of acting, and たところ means just finished. The surrounding form supplies the time viewpoint.",
        "いま{出|で}かけるところです。",
        "I am just about to go out.",
      ),
      g(
        "〜たばかりです",
        "This means the speaker considers an action recent. Unlike たところ, the interval can be longer, such as a move last month, when it still feels new.",
        "{先月|せんげつ}{引|ひ}っ{越|こ}したばかりです。",
        "I only moved last month.",
      ),
      g(
        "まで & までに",
        "まで marks how long an action or state continues. までに marks a deadline by which a one-time action must finish. Compare 五時まで働く and 五時までに出す.",
        "{金曜日|きんようび}までに{出|だ}してください。",
        "Please submit it by Friday.",
      ),
    ],
    grammarChecks: [
      q(
        "Do two things at once: 音楽を聞き ___、勉強します。",
        "ながら",
        ["まで", "ばかり", "ところ"],
        "ながら follows the ます-stem 聞き and links two actions by the same person, with 勉強します as the main one.",
      ),
      q(
        "What does 食べているところです mean?",
        "I am in the middle of eating",
        ["I am about to eat", "I just finished eating", "I have never eaten"],
        "The ている form places the speaker inside the ongoing action.",
      ),
      q(
        "What does 先月引っ越したばかりです suggest?",
        "The move still feels recent",
        [
          "The move is planned for next month",
          "The speaker is moving right now",
          "The speaker has never moved",
        ],
        "たばかり says the speaker feels the action is recent, even though a month has passed since the move.",
      ),
      q(
        "Mark a submission deadline: 月曜日 ___ レポートを出します。",
        "までに",
        ["ながら", "ばかり", "ところ"],
        "Submission must be completed by Monday; までに gives the deadline.",
      ),
    ],
    reading: p(
      "A short phone call",
      "{昼休|ひるやす}みに{友達|ともだち}へ{電話|でんわ}したら、ちょうど{食事|しょくじ}を{始|はじ}めるところだと{言|い}われた。わたしも{午後|ごご}の{会議|かいぎ}までに{資料|しりょう}を{読|よ}まなければならなかったので、{長|なが}くは{話|はな}せなかった。{夜|よる}{八時|はちじ}にもう{一度|いちど}{電話|でんわ}することにした。{友達|ともだち}はその{時間|じかん}なら{家|いえ}にいるそうだ。",
      "I called a friend during lunch break, but they said they were just about to start eating. I also had to read materials before an afternoon meeting, so we could not talk long. We agreed I would call again at eight that evening. My friend said they would be home then.",
      q(
        "What was the friend doing at the time of the first call?",
        "About to start eating",
        [
          "Finishing the evening meal",
          "Reading meeting materials",
          "Already talking for hours",
        ],
        "食事を始めるところ places the friend just before eating. Reading materials was the writer's task.",
      ),
      q(
        "When will the writer call the friend again?",
        "At eight in the evening",
        [
          "During the next lunch break",
          "Before the afternoon meeting",
          "Tomorrow morning",
        ],
        "夜八時にもう一度電話することにした sets the second call, and the friend says they will be at home then.",
      ),
    ),
    listening: p(
      "Printing deadline",
      "{資料|しりょう}はできましたか。いま{確認|かくにん}しているところです。{三時|さんじ}までに{印刷|いんさつ}しておきます。では、{三時半|さんじはん}の{会議|かいぎ}に{間|ま}に{合|あ}いますね。",
      "Are the materials ready? I am checking them now. I will have them printed by three. Then they will be ready for the three-thirty meeting.",
      q(
        "By when will printing be finished?",
        "3:00",
        ["3:30", "2:30", "After the meeting"],
        "三時までに sets the printing deadline; 三時半 is the later meeting time.",
      ),
      q(
        "What is the speaker doing right now?",
        "Checking the materials",
        [
          "Printing the materials",
          "Attending the meeting",
          "Writing new materials",
        ],
        "いま確認しているところです places the speaker in the middle of checking; printing comes afterwards, by three.",
      ),
    ),
    practice:
      "Describe one task before, during, and immediately after it using ところ. Give a work interval with まで and a deadline with までに.",
  },
  {
    slug: "uncertainty-appearance",
    title: "Appearance, hearsay & uncertainty",
    summary:
      "Distinguish direct observation from a report, a comparison, or a guess.",
    vocabulary: words(`予報|よほう|forecast
空|そら|sky
雲|くも|cloud
似る|にる|to resemble
心配|しんぱい|worry
本当|ほんとう|true; real
確か|たしか|certain; if I remember correctly
調べる|しらべる|to investigate; to look up`),
    grammar: [
      g(
        "Appearance: 〜そうです",
        "Use a verb stem or an い-adjective without い + そう for an appearance-based judgment. な-adjectives attach directly. いい becomes よさそう and ない becomes なさそう.",
        "{雨|あめ}が{降|ふ}りそうです。",
        "It looks like it will rain.",
      ),
      g(
        "Hearsay: 〜そうです",
        "For reported information put the whole plain clause before そうです: 降るそうです. This differs from appearance 降りそうです in both form and source of knowledge.",
        "{予報|よほう}では、{明日|あした}は{雨|あめ}だそうです。",
        "According to the forecast, it will rain tomorrow.",
      ),
      g(
        "〜ようです・〜みたいです",
        "よう expresses resemblance or an inference from clues. Nouns take のよう, な-adjectives take なよう. The more conversational みたい follows nouns directly.",
        "この{石|いし}は{魚|さかな}のようです。",
        "This stone looks like a fish.",
      ),
      g(
        "〜かもしれません・〜でしょう",
        "かもしれない marks a possibility, while でしょう often expresses a tentative expectation or seeks agreement with intonation. Nouns and な-adjectives omit だ before these forms.",
        "{電車|でんしゃ}が{遅|おく}れるかもしれません。",
        "The train might be delayed.",
      ),
    ],
    grammarChecks: [
      q(
        "Say that a cake looks delicious: このケーキは ___。",
        "おいしそうです",
        ["おいしいそうです", "おいしいだそうです", "おいしくそうです"],
        "Appearance drops the final い before そう, so おいしそう means it looks delicious; おいしいそう would report what someone said.",
      ),
      q(
        "Which sentence reports information heard from someone?",
        "雨が降るそうです",
        ["雨が降りそうです", "雨を降ります", "雨が降るところです"],
        "Plain 降る + そう conveys hearsay; stem 降り + そう conveys appearance.",
      ),
      q(
        "Choose the noun comparison: 雲は魚 ___ ようです。",
        "の",
        ["な", "だ", "を"],
        "A noun takes の before よう when making a comparison. 魚のようです means it looks like a fish; the noun does not take な or だ here.",
      ),
      q(
        "What does 雨が降るかもしれません say about the rain?",
        "It is possible",
        ["It is certain", "It has already stopped", "Someone has reported it"],
        "かもしれない marks only a possibility; it neither promises rain nor reports what somebody else said.",
      ),
    ],
    reading: p(
      "Checking the weather",
      "{朝|あさ}の{予報|よほう}では{午後|ごご}から{晴|は}れるそうだったので、{洗濯物|せんたくもの}を{外|そと}に{出|だ}した。ところが、{昼|ひる}になると{黒|くろ}い{雲|くも}が{増|ふ}え、{雨|あめ}が{降|ふ}りそうになった。{予報|よほう}が{変|か}わったかもしれないと{思|おも}い、もう{一度|いちど}{調|しら}べた。{夕方|ゆうがた}に{雨|あめ}の{可能性|かのうせい}があると{書|か}いてあったので、{洗濯物|せんたくもの}を{中|なか}に{入|い}れた。",
      "The morning forecast said it would clear up in the afternoon, so I put the laundry outside. By noon dark clouds had increased and it looked like rain. Thinking the forecast might have changed, I checked again. It said rain was possible in the evening, so I brought the laundry inside.",
      q(
        "What first prompted the writer to recheck the forecast?",
        "Seeing dark clouds that suggested rain",
        [
          "A phone call from a friend",
          "Laundry already soaked by rain",
          "A television breaking",
        ],
        "The visual clue, dark clouds and 降りそう, prompts the new search; actual rain had not yet been stated.",
      ),
      q(
        "What did the writer finally do with the laundry?",
        "Brought it inside",
        ["Left it outside", "Washed it again", "Took it to a laundrette"],
        "夕方に雨の可能性があると書いてあったので、洗濯物を中に入れた: the updated forecast leads the writer to bring the laundry in.",
      ),
    ),
    listening: p(
      "A new restaurant",
      "{駅前|えきまえ}のレストラン、おいしそうですね。{友達|ともだち}が{行|い}ったそうです。どうだったんですか。{料理|りょうり}はおいしいけれど、{週末|しゅうまつ}は{混|こ}むそうですよ。",
      "The restaurant by the station looks good. A friend apparently went. How was it? They say the food is good, but it is crowded on weekends.",
      q(
        "Which detail comes from the friend's report?",
        "It is crowded on weekends",
        ["It is always empty", "It has closed", "The speaker cooked there"],
        "混むそう conveys reported information, distinct from the initial appearance-based impression.",
      ),
      q(
        "Where is the restaurant?",
        "In front of the station",
        [
          "Next to the friend's house",
          "Inside a department store",
          "Near the school",
        ],
        "駅前のレストラン places it in front of the station; the rest of the talk is about what the friend reported.",
      ),
    ),
    practice:
      "Write one observation with stem + そう and one report with plain form + そう. State the evidence or source for each.",
  },
  {
    slug: "polite-service",
    title: "Polite service & respectful language",
    summary:
      "Recognize basic honorific and humble forms in shops, workplaces, and formal messages.",
    vocabulary: words(`客|きゃく|customer; guest
店員|てんいん|shop assistant
社長|しゃちょう|company president
伺う|うかがう|to visit; to ask (humble)
申す|もうす|to be called; to say (humble)
拝見|はいけん|looking (humble)
案内状|あんないじょう|invitation notice
住所|じゅうしょ|address`),
    grammar: [
      g(
        "Respectful verbs",
        "Honorific verbs raise the person performing an action: いらっしゃる for 行く・来る・いる, 召し上がる for 食べる・飲む, and ご覧になる for 見る. Use them for someone being respected, not to elevate your own actions.",
        "{先生|せんせい}はもういらっしゃいます。",
        "The teacher is already here.",
      ),
      g(
        "Humble verbs",
        "Humble language presents the speaker's or in-group's action modestly toward someone else: 伺う, 申す, and 拝見する. Identify the actor before choosing a form.",
        "{明日|あした}、{会社|かいしゃ}に{伺|うかが}います。",
        "I will visit your company tomorrow.",
      ),
      g(
        "お + stem + になる・する",
        "お + ます-stem + になる is a common respectful pattern; お + stem + する is a humble pattern for an action directed toward another person. Some verbs instead use fixed special forms.",
        "{先生|せんせい}はもうお{帰|かえ}りになりました。",
        "The teacher has already left.",
      ),
      g(
        "お・ご + noun & ございます",
        "Honorific prefixes appear in common expressions such as お名前 and ご住所; memorize conventional combinations. ございます is a formal counterpart of あります, and でございます is formal です.",
        "こちらが{受付|うけつけ}でございます。",
        "This is the reception desk.",
      ),
    ],
    grammarChecks: [
      q(
        "Who is likely acting in 先生がご覧になります?",
        "The teacher looks",
        ["The student eats", "The speaker visits", "The teacher writes"],
        "ご覧になる is the respectful form of 見る, with 先生 as subject.",
      ),
      q(
        "Choose a humble sentence for your own visit.",
        "明日、伺います",
        [
          "明日、いらっしゃいます",
          "明日、召し上がります",
          "明日、ご覧になります",
        ],
        "伺う humbly describes the speaker's visit. The other forms elevate an actor or describe a different action.",
      ),
      q(
        "Say your teacher has already gone home: 先生はもう ___。",
        "お帰りになりました",
        ["お帰りしました", "帰らせました", "帰っております"],
        "お + ます-stem + になる raises the teacher's action; お + stem + する is the humble pattern for your own action toward someone.",
      ),
      q(
        "Which is the formal way to say こちらが受付です?",
        "こちらが受付でございます",
        [
          "こちらが受付ございます",
          "こちらが受付でいらっしゃいます",
          "こちらが受付でおります",
        ],
        "でございます is the formal counterpart of です; いらっしゃる is kept for respected people, not for a reception desk.",
      ),
    ],
    reading: p(
      "A visitor's confirmation",
      "{山田|やまだ}{様|さま}。{来週|らいしゅう}の{火曜日|かようび}、{午後|ごご}{二時|にじ}に{伺|うかが}います。ご{案内|あんない}いただいた{住所|じゅうしょ}を{確認|かくにん}いたしました。{当日|とうじつ}は{入口|いりぐち}で{名前|なまえ}を{申|もう}し{上|あ}げればよろしいでしょうか。{資料|しりょう}は{先|さき}にメールでお{送|おく}りします。どうぞよろしくお{願|ねが}いいたします。",
      "Dear Yamada, I will visit next Tuesday at 2 p.m. I have confirmed the address you provided. Should I give my name at the entrance that day? I will send the materials by email in advance. Thank you.",
      q(
        "What will happen before the visit?",
        "The writer will email the materials",
        [
          "Yamada will visit the writer",
          "The writer will change the address",
          "The visitor will arrive at noon",
        ],
        "先にメールでお送りします puts emailing the materials before the visit.",
      ),
      q(
        "When will the writer visit?",
        "Next Tuesday at 2 p.m.",
        [
          "This Tuesday at noon",
          "Next Thursday at 2 p.m.",
          "Next Tuesday at 10 a.m.",
        ],
        "来週の火曜日、午後二時に伺います: 伺う humbly states the writer's own visit, with the day and the time.",
      ),
    ),
    listening: p(
      "At reception",
      "{田中|たなか}と{申|もう}します。{三時|さんじ}に{山田|やまだ}さんと{約束|やくそく}があります。お{待|ま}ちしておりました。{山田|やまだ}はすぐ{参|まい}りますので、こちらでお{待|ま}ちください。",
      "My name is Tanaka. I have an appointment with Yamada at three. We have been expecting you. Yamada will come shortly, so please wait here.",
      q(
        "What should Tanaka do now?",
        "Wait at the indicated place",
        ["Return tomorrow", "Go home immediately", "Telephone another company"],
        "こちらでお待ちください is the reception staff's instruction; Yamada will come to the visitor.",
      ),
      q(
        "What time is Tanaka's appointment?",
        "Three o'clock",
        ["Two o'clock", "Four o'clock", "Half past three"],
        "三時に山田さんと約束があります gives the time; 申します is the visitor's humble way of giving their name.",
      ),
    ),
    practice:
      "Role-play a visitor and receptionist. Underline the actor in every honorific or humble sentence to check the direction of respect.",
  },
  {
    slug: "feeling-unwell",
    title: "Feeling unwell",
    summary:
      "Say what hurts and how long it has lasted, follow the advice you are given at a clinic or a pharmacy, and report somebody else's symptoms too.",
    vocabulary: words(`熱|ねつ|a fever
頭|あたま|head
喉|のど|throat
薬|くすり|medicine
風邪|かぜ|a cold
体|からだ|body
休む|やすむ|to rest; to take time off
治る|なおる|to get better`),
    grammar: [
      g(
        "Symptoms with が",
        "A symptom is the subject of the sentence, so it is marked with が rather than を: {頭|あたま}が{痛|いた}いです、{熱|ねつ}があります。Switch to は only when you contrast one part with another, as in {喉|のど}は{痛|いた}くないですが、{頭|あたま}が{痛|いた}いです。",
        "{頭|あたま}が{痛|いた}くて、{熱|ねつ}もあります。",
        "My head hurts and I have a fever as well.",
      ),
      g(
        "〜がする",
        "Some sensations are described with する instead of an adjective: めまいがします、さむけがします。The noun takes が, and the same pattern covers what you smell, hear, or taste, as in いいにおいがします。",
        "きのうからさむけがします。",
        "I have had chills since yesterday.",
      ),
      g(
        "〜てくる",
        "The て-form plus くる traces a change that has continued up to the present moment, while ていく points forward from now. {咳|せき}が{出|で}てきました reports a cough that has developed; よくなっていくでしょう predicts improvement still to come.",
        "だんだん{痛|いた}くなってきました。",
        "It has gradually become more painful.",
      ),
      g(
        "〜がる・〜がっている",
        "Adjectives of feeling describe only the speaker. For somebody else, replace the final い with がる, and use がっている for a state you can see in front of you. Saying {子|こ}どもが{痛|いた}いです would claim to feel the child's pain yourself.",
        "{子|こ}どもが{朝|あさ}から{頭|あたま}を{痛|いた}がっています。",
        "My child has been complaining of a headache since morning.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the particle: 喉 ___ 痛いです。",
        "が",
        ["を", "で", "に"],
        "A symptom is the subject of the sentence, so it is marked with が rather than を.",
      ),
      q(
        "Describe chills: さむけ ___ します。",
        "が",
        ["を", "に", "で"],
        "A sensation described with する takes が on the noun, so さむけがします means I have chills.",
      ),
      q(
        "What does 咳が出てきました report?",
        "A cough has developed up to now",
        [
          "A cough will start tomorrow",
          "The cough has completely gone",
          "Someone else has a cough",
        ],
        "〜てくる traces a change continuing up to the present, so the cough has started and built up until now.",
      ),
      q(
        "How do you say that somebody else looks to be in pain?",
        "痛がっています",
        ["痛いです", "痛かったです", "痛くなります"],
        "がる reports another person's feeling from the outside; 痛いです would claim that the speaker feels it.",
      ),
    ],
    reading: p(
      "Three days of fever",
      "{三日|みっか}ほど{前|まえ}から{熱|ねつ}があります。{昨日|きのう}は{喉|のど}も{痛|いた}くなってきました。{病院|びょういん}で{薬|くすり}をもらって、{今日|きょう}は{会社|かいしゃ}を{休|やす}みました。{医者|いしゃ}は「{三日|みっか}ぐらいで{治|なお}るでしょう」と{言|い}いました。でも、お{風呂|ふろ}には{入|はい}らないほうがいいそうです。",
      "I have had a fever for about three days. Yesterday my throat started hurting as well. I got medicine at the hospital and took today off work. The doctor said it would probably clear up in about three days. Apparently, though, I should not take a bath.",
      q(
        "What was the writer advised against?",
        "Taking a bath",
        ["Taking the medicine", "Resting at home", "Going to the hospital"],
        "お風呂には入らないほうがいい is the one thing discouraged; the medicine and the rest were both part of the advice.",
      ),
      q(
        "When did the writer's throat start to hurt?",
        "Yesterday",
        ["About three days ago", "This morning", "Last week"],
        "昨日は喉も痛くなってきました dates the sore throat to yesterday; the fever began about three days ago.",
      ),
    ),
    listening: p(
      "At the pharmacy",
      "この{薬|くすり}は{一日|いちにち}に{三回|さんかい}、{食後|しょくご}に{飲|の}んでください。{眠|ねむ}くなることがありますから、{運転|うんてん}はしないでください。",
      "Take this medicine three times a day, after meals. It can make you sleepy, so please do not drive.",
      q(
        "When should the medicine be taken?",
        "After meals, three times a day",
        [
          "Before meals, once a day",
          "Only at night",
          "Whenever the pain returns",
        ],
        "一日に三回、食後に gives both the frequency and the timing of the dose.",
      ),
      q(
        "Why should the listener not drive?",
        "The medicine can make you sleepy",
        [
          "The pharmacy is close by",
          "It is going to rain",
          "The dose is taken at night",
        ],
        "眠くなることがありますから gives the reason for 運転はしないでください.",
      ),
    ),
    practice:
      "Describe three symptoms with が, say how long each has lasted, then report the same symptoms for somebody else using がっています.",
  },
  {
    slug: "phone-and-messages",
    title: "Phone calls & messages",
    summary:
      "Open and close a call the way it is actually done, explain why you are calling before you ask for anything, and leave a message somebody else can pass on.",
    vocabulary: words(`電話|でんわ|a telephone call
伝言|でんごん|a message to pass on
都合|つごう|availability
会議|かいぎ|a meeting
遅れる|おくれる|to be late
戻る|もどる|to come back
確認|かくにん|confirmation
番号|ばんごう|a number`),
    grammar: [
      g(
        "Telephone set phrases",
        "A call opens with もしもし between friends, but at work you give your name first instead. {少々|しょうしょう}お{待|ま}ちください asks the caller to hold, and {失礼|しつれい}します closes the call in place of さようなら, which sounds abrupt on the telephone.",
        "もしもし、{田中|たなか}ですが、{山田|やまだ}さんはいらっしゃいますか。",
        "Hello, this is Tanaka. Is Yamada-san available?",
      ),
      g(
        "Prefacing with 〜んですが",
        "Starting with the background and trailing off with んですが prepares the listener before the request itself arrives. The unfinished ending is deliberate: it invites the other person to respond, and it sounds far softer than stating what you want straight out.",
        "{予約|よやく}を{変|か}えたいんですが、よろしいですか。",
        "I would like to change my booking — would that be all right?",
      ),
      g(
        "Softening a question with 〜でしょうか",
        "でしょうか replaces ですか when you want to sound less direct, which matters most with someone you have never met. いつ{戻|もど}りますか becomes いつお{戻|もど}りでしょうか: the same question, with more room left for the answer.",
        "ご{都合|つごう}はいかがでしょうか。",
        "How would that suit you?",
      ),
      g(
        "〜とお{伝|つた}えください",
        "Quote the message with と and attach お{伝|つた}えください to ask somebody to relay it. The お + stem + ください shape is politer than {伝|つた}えてください, and the と marks exactly where the quoted message ends.",
        "また{電話|でんわ}しますとお{伝|つた}えください。",
        "Please tell them that I will call again.",
      ),
    ],
    grammarChecks: [
      q(
        "Which phrase closes a business phone call?",
        "失礼します",
        ["いってきます", "おかえりなさい", "いただきます"],
        "失礼します ends a call politely; the other three belong at a door or a table, not on the telephone.",
      ),
      q(
        "Which opening prepares the listener before a request?",
        "予約を変えたいんですが",
        ["予約を変えろ", "予約を変えました", "予約を変えてもいいです"],
        "んですが gives the background and trails off, inviting the other person to respond before the request is spelled out.",
      ),
      q(
        "Choose the less direct question for someone you have not met.",
        "いつお戻りでしょうか",
        ["いつ戻る", "いつ戻った", "いつ戻るの"],
        "でしょうか asks indirectly and suits a stranger; the plain forms are not polite enough for a business call.",
      ),
      q(
        "Ask the listener to pass on a message: また電話します ___ お伝えください。",
        "と",
        ["を", "に", "が"],
        "と marks exactly where the quoted message ends, and お伝えください asks the listener politely to pass it on.",
      ),
    ],
    reading: p(
      "A note left on a desk",
      "{山田|やまだ}さんへ。{午前|ごぜん}{十時|じゅうじ}に{中村|なかむら}さんからお{電話|でんわ}がありました。{明日|あした}の{会議|かいぎ}が{三時|さんじ}に{変|か}わったそうです。{資料|しりょう}は{今日|きょう}じゅうに{送|おく}ると{言|い}っていました。{確認|かくにん}のお{電話|でんわ}をおねがいします。{番号|ばんごう}は{机|つくえ}の{上|うえ}のメモにあります。",
      "To Yamada-san. Nakamura-san called at ten this morning. Apparently tomorrow's meeting has moved to three o'clock. They said they would send the documents by the end of today. Please call back to confirm. The number is on the memo on your desk.",
      q(
        "What changed about the meeting?",
        "Its time",
        ["Its place", "Its topic", "The people attending"],
        "三時に変わった reports a new time; nothing in the note mentions a different room or a different agenda.",
      ),
      q(
        "Where can Yamada find the number to call?",
        "On the memo on the desk",
        [
          "In an email from Nakamura",
          "In tomorrow's meeting documents",
          "On the office noticeboard",
        ],
        "番号は机の上のメモにあります tells Yamada where the number for the confirmation call is.",
      ),
    ),
    listening: p(
      "Calling to say you will be late",
      "もしもし、{田中|たなか}ですが、{電車|でんしゃ}が{遅|おく}れていて、10{分|ぷん}ぐらい{遅|おく}れそうです。{会議|かいぎ}を{先|さき}に{始|はじ}めていただけますか。",
      "Hello, this is Tanaka. The train is delayed, so I will probably be about ten minutes late. Could you start the meeting without me?",
      q(
        "What does the caller ask for?",
        "That the meeting start without them",
        [
          "That the meeting be cancelled",
          "That someone meet them at the station",
          "That the documents be sent again",
        ],
        "先に始めていただけますか asks the others to begin first; the delay is explained, not used to call the meeting off.",
      ),
      q(
        "How late will the caller probably be?",
        "About ten minutes",
        ["About thirty minutes", "About an hour", "They will be on time"],
        "10分ぐらい遅れそうです: stem + そう gives the caller's own estimate of about ten minutes.",
      ),
    ),
    practice:
      "Make a short call out loud: give your name, preface the reason with んですが, ask one question with でしょうか, and leave a message with とお伝えください.",
  },
  {
    slug: "at-the-shopping-mall",
    title: "A day at the shopping mall",
    summary:
      "Read a floor guide, work out what a sale sign is actually offering, ask staff about sizes and stock, and follow the notices posted around the till.",
    vocabulary: words(`売り場|うりば|a sales floor
値段|ねだん|a price
半額|はんがく|half price
試着|しちゃく|trying clothes on
在庫|ざいこ|stock
会計|かいけい|the checkout
袋|ふくろ|a bag
階段|かいだん|stairs`),
    grammar: [
      g(
        "Sale signs: 〜{割引|わりびき}・{税込|ぜいこみ}",
        "{三割引|さんわりびき} takes three tenths off the price, so it is thirty per cent off, while {半額|はんがく} is half. {税込|ぜいこみ} means the tax is already inside the figure and {税別|ぜいべつ} means it is not, so the same number on two signs can come to two different totals at the till.",
        "こちらは{半額|はんがく}、{税込|ぜいこみ}{千円|せんえん}です。",
        "This one is half price: a thousand yen including tax.",
      ),
      g(
        "Thresholds on signs: {以上|いじょう} & {未満|みまん}",
        "{以上|いじょう} includes the number in front of it and {未満|みまん} excludes it, so {三千円以上|さんぜんえんいじょう} covers a purchase of exactly three thousand yen while {三千円未満|さんぜんえんみまん} does not. Shop offers turn on that one word, and it decides whether the deal applies to you.",
        "{三千円|さんぜんえん}{以上|いじょう}お{買|か}い{上|あ}げで{送料|そうりょう}が{無料|むりょう}になります。",
        "Purchases of three thousand yen or more come with free delivery.",
      ),
      g(
        "Labels with 〜{別|べつ} & 〜{向|む}け",
        "〜{別|べつ} sorts goods by a category, as in サイズ{別|べつ} or {色別|いろべつ}, and 〜{向|む}け says who something is intended for, as in {子|こ}ども{向|む}け. The first tells you how the shelf has been arranged; the second tells you whether the item is meant for you at all.",
        "{二階|にかい}は{子|こ}ども{向|む}けの{売|う}り{場|ば}です。",
        "The second floor is the children's section.",
      ),
      g(
        "〜の{方|かた}は on notices",
        "A printed notice addresses people as 〜の{方|かた}は rather than あなた, which would read as blunt. {試着|しちゃく}をご{希望|きぼう}の{方|かた}は means those who would like to try something on, and it is left to the reader to decide whether the line is about them.",
        "{試着|しちゃく}をご{希望|きぼう}の{方|かた}は、{店員|てんいん}にお{声|こえ}がけください。",
        "Those wishing to try something on, please speak to a member of staff.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 三割引 take off the price?",
        "Thirty per cent",
        ["Three per cent", "Three hundred yen", "Seventy per cent"],
        "割 counts tenths, so 三割引 takes three tenths, or thirty per cent, off; you still pay seventy per cent of the price.",
      ),
      q(
        "A sign reads 三千円未満は送料がかかります。You spend exactly 3,000 yen. What happens?",
        "Delivery is free",
        ["Delivery costs extra", "The order is refused", "The price is halved"],
        "未満 excludes the number itself, so exactly three thousand yen does not count as 未満 and no delivery charge applies.",
      ),
      q(
        "Which label tells you who an item is meant for?",
        "子ども向け",
        ["サイズ別", "税込", "半額"],
        "〜向け names the intended user, while 〜別 only says how the goods have been sorted on the shelf.",
      ),
      q(
        "A notice says 駐車券をお持ちの方は受付へ。Who should go to reception?",
        "People who have a parking ticket",
        [
          "Everybody in the mall",
          "Only members of staff",
          "People without a parking ticket",
        ],
        "〜の方は addresses whoever matches the description, here those holding a parking ticket (お持ちの方), rather than everybody.",
      ),
    ],
    reading: p(
      "The floor guide",
      "{一階|いっかい}は{食品|しょくひん}{売|う}り{場|ば}です。{二階|にかい}と{三階|さんがい}は{服|ふく}の{売|う}り{場|ば}で、{三階|さんがい}は{子|こ}ども{向|む}けです。{四階|よんかい}のレストランは{午前|ごぜん}{十一時|じゅういちじ}からです。{今週|こんしゅう}は{三千円|さんぜんえん}{以上|いじょう}お{買|か}い{上|あ}げの{方|かた}に、{駐車場|ちゅうしゃじょう}{一時間|いちじかん}{無料|むりょう}のサービスがあります。{試着|しちゃく}をご{希望|きぼう}の{方|かた}は{店員|てんいん}にお{声|こえ}がけください。",
      "The first floor is the food hall. The second and third floors sell clothes, and the third floor is for children. The restaurants on the fourth floor open from eleven in the morning. This week, customers spending three thousand yen or more get an hour of free parking. If you would like to try something on, please speak to a member of staff.",
      q(
        "Who gets an hour of free parking?",
        "Customers who spend 3,000 yen or more",
        [
          "Everybody who visits the mall",
          "Customers on the third floor only",
          "Customers who eat in a restaurant",
        ],
        "三千円以上お買い上げの方に sets the condition; the floors and the restaurant are described separately from the offer.",
      ),
      q(
        "Which floor sells children's clothes?",
        "The third floor",
        ["The first floor", "The second floor", "The fourth floor"],
        "二階と三階は服の売り場で、三階は子ども向けです: both floors sell clothes, and 向け marks the third as the children's floor.",
      ),
    ),
    listening: p(
      "Asking about a size",
      "すみません、このシャツのMサイズはありますか。{申|もう}し{訳|わけ}ございません、Mは{在庫|ざいこ}がありません。Lサイズでしたら{試着|しちゃく}していただけます。では、{試|ため}してみます。",
      "Excuse me, do you have this shirt in medium? I am very sorry, we have no medium in stock. If a large would do, you are welcome to try it on. Then I will try it.",
      q(
        "What does the shop offer instead?",
        "Trying on a large",
        ["Ordering a medium", "A discount on the shirt", "A different colour"],
        "Lサイズでしたら試着していただけます offers the larger size; nothing is said about ordering one in or reducing the price.",
      ),
      q(
        "Why can't the customer buy a medium?",
        "There are none in stock",
        [
          "Mediums are sold online only",
          "Mediums cost extra",
          "The shirt only comes in small",
        ],
        "Mは在庫がありません: the medium is out of stock, which is why the assistant offers the large instead.",
      ),
    ),
    practice:
      "Walk through a shop or a Japanese shopping site and copy down three signs: one price sign using 税込 or 割引, one threshold using 以上, and one line addressed to 〜の方は.",
    problems: problemSet(
      "Sale maths: discounts, tax & change",
      "Read each price problem for the words that tell you what to do: 割引 takes tenths off, 半額 halves the price, 税込 already includes the 10% tax, and おつり is the change you get back.",
      words(`割引|わりびき|a discount counted in tenths
半額|はんがく|half price
定価|ていか|the list price
税込|ぜいこみ|tax included
消費税|しょうひぜい|consumption tax
おつり|おつり|change from a payment`),
      {
        text: "{定価|ていか}2,000{円|えん}のTシャツが3{割引|わりびき}になっています。いくらで{買|か}えますか。",
        translation:
          "A T-shirt with a list price of 2,000 yen is 30% off. How much can you buy it for?",
        steps: [
          "3割引 means three tenths off: 2,000 × 0.3 = 600 yen comes off the 定価.",
          "Subtract the discount: 2,000 − 600 = 1,400 yen.",
          "Check another way: after 3割引 you still pay 7割, and 2,000 × 0.7 = 1,400 yen. The answer is 1,400円.",
        ],
      },
      [
        wordProblem(
          "{定価|ていか}1,200{円|えん}のかばんが{半額|はんがく}になっています。1,000{円|えん}{札|さつ}で{払|はら}うと、おつりはいくらですか。",
          "A bag with a list price of 1,200 yen is now half price. If you pay with a 1,000-yen note, how much change do you get?",
          "400円",
          ["600円", "200円", "500円"],
          "半額 halves the 定価: 1,200 ÷ 2 = 600 yen. おつり is what is left of the note: 1,000 − 600 = 400 yen. 600円 is the price, not the change.",
        ),
        wordProblem(
          "{税別|ぜいべつ}800{円|えん}の{傘|かさ}を{買|か}います。{消費税|しょうひぜい}は10%です。{税込|ぜいこみ}でいくら{払|はら}いますか。",
          "You are buying an umbrella priced at 800 yen before tax. Consumption tax is 10%. How much do you pay including tax?",
          "880円",
          ["800円", "80円", "720円"],
          "税別 means the tax is not in the price yet: 800 × 0.1 = 80 yen of tax. 税込 adds it on: 800 + 80 = 880 yen. 80円 is only the tax.",
        ),
        wordProblem(
          "Aの{店|みせ}ではジュースが3{本|ぼん}で360{円|えん}、Bの{店|みせ}では5{本|ほん}で550{円|えん}です。1{本|ぽん}あたりの{値段|ねだん}を{比|くら}べると、どちらがいくら{安|やす}いですか。",
          "At shop A, juice costs 360 yen for 3 bottles; at shop B, it costs 550 yen for 5 bottles. Comparing the price per bottle, which shop is cheaper, and by how much?",
          "Bの店が1本10円安い",
          ["Aの店が1本10円安い", "Bの店が1本20円安い", "どちらも同じ値段"],
          "1本あたり asks for the price of one bottle: A is 360 ÷ 3 = 120 yen and B is 550 ÷ 5 = 110 yen. B is cheaper by 120 − 110 = 10 yen a bottle, even though its total is higher.",
        ),
        wordProblem(
          "{税込|ぜいこみ}3,000{円|えん}のセーターが2{割引|わりびき}になっています。{割引|わりびき}のあとで、500{円|えん}のクーポンも{使|つか}えます。いくら{払|はら}いますか。",
          "A sweater costing 3,000 yen including tax is 20% off. After the discount, you can also use a 500-yen coupon. How much do you pay?",
          "1,900円",
          ["2,400円", "2,500円", "2,300円"],
          "2割引 takes two tenths off: 3,000 × 0.2 = 600, so the price becomes 2,400 yen. The coupon comes after the discount: 2,400 − 500 = 1,900 yen. The price is 税込, so no tax is added.",
        ),
      ],
    ),
  },
  {
    slug: "reading-a-menu",
    title: "Reading a menu",
    summary:
      "Work out what a set meal actually includes, order what you want without the parts you cannot eat, and ask what is in a dish before it reaches the table.",
    vocabulary: words(`定食|ていしょく|a set meal
飲み物|のみもの|a drink
料理|りょうり|a dish
辛い|からい|spicy
甘い|あまい|sweet
注文|ちゅうもん|an order
お勘定|おかんじょう|the bill
苦手|にがて|not good with something`),
    grammar: [
      g(
        "〜{付|つ}き & 〜{込|こ}み",
        "〜{付|つ}き says what comes with a dish, as in サラダ{付|つ}き or {飲|の}み{物|もの}{付|つ}き, and 〜{込|こ}み says what is already inside the price, as in {税込|ぜいこみ} or サービス{料込|りょうこ}み. One is about what arrives on the tray, the other about what you pay.",
        "この{定食|ていしょく}はサラダと{飲|の}み{物|もの}{付|つ}きです。",
        "This set meal comes with a salad and a drink.",
      ),
      g(
        "〜{抜|ぬ}きで",
        "〜{抜|ぬ}きで asks for a dish without one of its parts: ねぎ{抜|ぬ}きで、わさび{抜|ぬ}きで。It attaches to the ingredient you want left out rather than to the dish, and it is the ordinary way to handle something you cannot eat.",
        "わさび{抜|ぬ}きでおねがいできますか。",
        "Could I have it without wasabi, please?",
      ),
      g(
        "Choosing with 〜にします",
        "〜にします announces the choice you have settled on out of the options in front of you, which is exactly what a menu offers. {定食|ていしょく}にします chooses the set meal, whereas {定食|ていしょく}を{食|た}べます would only describe what you are about to do.",
        "わたしは{魚|さかな}の{定食|ていしょく}にします。",
        "I will go for the fish set meal.",
      ),
      g(
        "〜でお{願|ねが}いします",
        "で marks the form an order takes and お{願|ねが}いします turns it into a request, so {以上|いじょう}でお{願|ねが}いします rounds off an order and {別々|べつべつ}でお{願|ねが}いします asks for separate bills. It is shorter and far more natural than a full sentence.",
        "お{勘定|かんじょう}は{別々|べつべつ}でお{願|ねが}いします。",
        "Separate bills, please.",
      ),
    ],
    grammarChecks: [
      q(
        "A menu says ドリンク付き. What does it mean?",
        "A drink comes with it",
        [
          "The drink costs extra",
          "Drinks are sold out",
          "The price includes tax",
        ],
        "〜付き names what comes with the dish; tax already being in the price would be written 税込 instead.",
      ),
      q(
        "How do you ask for a dish without onion?",
        "ねぎ抜きで",
        ["ねぎ付きで", "ねぎ込みで", "ねぎにします"],
        "〜抜きで attaches to the ingredient you want left out, while 〜付き would add it to the dish instead.",
      ),
      q(
        "Announce your choice from the menu: わたしはカレー ___。",
        "にします",
        ["をします", "がします", "でします"],
        "〜にします announces the option you have settled on, which is exactly how you order from a menu.",
      ),
      q(
        "Ask for separate bills: お勘定は別々 ___。",
        "でお願いします",
        ["をお願いします", "でございます", "ください"],
        "で marks the form the payment takes and お願いします makes it a request, so 別々でお願いします asks for separate bills.",
      ),
    ],
    reading: p(
      "A lunch menu",
      "{昼|ひる}の{定食|ていしょく}は{午前|ごぜん}{十一時|じゅういちじ}から{午後|ごご}{二時|にじ}までです。どの{定食|ていしょく}もごはんとみそ{汁|しる}、サラダ{付|つ}きで、{値段|ねだん}はすべて{税込|ぜいこみ}です。{魚|さかな}の{定食|ていしょく}は{辛|から}くありませんが、とりの{定食|ていしょく}は{少|すこ}し{辛|から}いです。{飲|の}み{物|もの}は{別|べつ}で、{食後|しょくご}のコーヒーは{百円|ひゃくえん}{引|び}きになります。",
      "The lunch sets are served from eleven in the morning until two in the afternoon. Every set comes with rice, miso soup and a salad, and all the prices include tax. The fish set is not spicy, but the chicken set is a little spicy. Drinks are separate, and coffee after the meal is a hundred yen off.",
      q(
        "Which set is described as spicy?",
        "The chicken set",
        ["The fish set", "Both sets", "Neither set"],
        "とりの定食は少し辛いです marks the chicken set, and the fish set is explicitly described as 辛くありません.",
      ),
      q(
        "What comes with every lunch set?",
        "Rice, miso soup and a salad",
        ["A drink and a salad", "Coffee after the meal", "Rice and a dessert"],
        "どの定食もごはんとみそ汁、サラダ付き lists what every set includes; drinks are 別, sold separately.",
      ),
    ),
    listening: p(
      "Ordering lunch",
      "ご{注文|ちゅうもん}はお{決|き}まりですか。{魚|さかな}の{定食|ていしょく}にします。わさび{抜|ぬ}きでおねがいできますか。かしこまりました。お{飲|の}み{物|もの}はいかがですか。では、コーヒーで。{以上|いじょう}でおねがいします。",
      "Are you ready to order? I will have the fish set. Could I have it without wasabi? Certainly. Would you like a drink? Coffee, then. That is everything, thank you.",
      q(
        "What does the customer ask to leave out?",
        "Wasabi",
        ["The salad", "The rice", "The coffee"],
        "わさび抜きで names the one thing left out; the coffee is something the customer adds to the order.",
      ),
      q(
        "Which set does the customer order?",
        "The fish set",
        ["The chicken set", "The vegetable set", "Only a coffee"],
        "魚の定食にします announces the customer's choice with にします; the coffee is added to it as a drink.",
      ),
    ),
    practice:
      "Find a real Japanese menu online and note three things: what one set comes with using 付き, one ingredient you would leave out with 抜きで, and the choice you would announce with にします.",
  },
  {
    slug: "everyday-news",
    title: "Newspaper & weather",
    summary:
      "Read a short news item and a weather forecast as they are actually written. These forms are for recognising on the page rather than producing yourself: cut-down headlines and the cautious verbs that report without promising.",
    vocabulary: words(`新聞|しんぶん|a newspaper
記事|きじ|an article
天気予報|てんきよほう|a weather forecast
台風|たいふう|a typhoon
気温|きおん|temperature
事故|じこ|an accident
発表|はっぴょう|an announcement
今後|こんご|from now on`),
    grammar: [
      g(
        "Headline style: dropped particles",
        "Headlines strip out the particles and the polite ending, so {台風|たいふう}{九州|きゅうしゅう}{上陸|じょうりく} stands for a full sentence with に and した missing. Reading one means putting those parts back yourself, and a noun at the end usually does the work of a verb. Recognise the style rather than write in it.",
        "{台風|たいふう}{九州|きゅうしゅう}{上陸|じょうりく}、{列車|れっしゃ}{運休|うんきゅう}",
        "Typhoon makes landfall in Kyushu; trains suspended",
      ),
      g(
        "Forecasts with 〜{模様|もよう}・〜{見込|みこ}み",
        "A forecast avoids a plain assertion. 〜{模様|もよう} reports how things appear and 〜{見込|みこ}み gives what is expected, as in {雨|あめ}の{模様|もよう} or {回復|かいふく}する{見込|みこ}み. Both let the writer report without promising, so read them as likely rather than certain; you only need to recognise them.",
        "{明日|あした}は{雨|あめ}が{降|ふ}る{見込|みこ}みです。",
        "Rain is expected tomorrow.",
      ),
      g(
        "Warnings with 〜{恐|おそ}れがあります",
        "〜{恐|おそ}れがあります warns that something unwanted may happen, and it is only ever used of bad outcomes. {大雨|おおあめ}の{恐|おそ}れがあります warns of heavy rain, but いい{天気|てんき}の{恐|おそ}れがあります is impossible. In speech at this level, 〜かもしれません still does the job.",
        "{午後|ごご}から{大雨|おおあめ}の{恐|おそ}れがあります。",
        "There is a risk of heavy rain from the afternoon.",
      ),
      g(
        "{以降|いこう} & {現在|げんざい} in reports",
        "{以降|いこう} means from that point onwards and includes the point itself, so {三時以降|さんじいこう} covers three o'clock. {現在|げんざい} fixes the moment at which a figure was true, as in {午前|ごぜん}{九時|くじ}{現在|げんざい}, which matters whenever the number keeps moving.",
        "{午前|ごぜん}{九時|くじ}{現在|げんざい}、{復旧|ふっきゅう}の{見込|みこ}みは{立|た}っていません。",
        "As of nine in the morning, there is no prospect of service being restored.",
      ),
    ],
    grammarChecks: [
      q(
        "Read the headline 台風九州上陸 as a sentence.",
        "A typhoon has made landfall in Kyushu",
        [
          "A typhoon is leaving Kyushu",
          "Kyushu has had no typhoons",
          "A typhoon may reach Kyushu next year",
        ],
        "A headline drops the particles and the verb ending: 台風が九州に上陸した, with the noun 上陸 doing the work of a verb.",
      ),
      q(
        "A forecast says 雨が降る見込みです。How certain is it?",
        "It is expected but not promised",
        [
          "It is already raining",
          "It will definitely not rain",
          "It rained yesterday",
        ],
        "見込み reports an expectation, so the writer is forecasting rather than stating something as a fact.",
      ),
      q(
        "Which can fill the gap: ___の恐れがあります。",
        "大雨",
        ["いい天気", "楽しい休み", "安い値段"],
        "恐れがあります only ever warns of an unwanted outcome, so a pleasant result cannot go in front of it.",
      ),
      q(
        "A sign says 三時以降は入れます。Can you enter at exactly three?",
        "Yes, 以降 includes three o'clock",
        [
          "No, only after three",
          "No, only before three",
          "Only at three and no later",
        ],
        "以降 means from that point onwards and includes the point itself, so entry is possible from three o'clock.",
      ),
    ],
    reading: p(
      "A short news item",
      "{昨日|きのう}の{午後|ごご}、{大雨|おおあめ}のため{東|ひがし}{地区|ちく}の{道路|どうろ}が{通|とお}れなくなりました。けがをした{人|ひと}はいません。{市|し}の{発表|はっぴょう}によると、{今日|きょう}の{午後|ごご}{三時|さんじ}{以降|いこう}に{通|とお}れるようになる{見込|みこ}みです。{今後|こんご}も{雨|あめ}が{続|つづ}く{模様|もよう}で、{川|かわ}の{近|ちか}くでは{注意|ちゅうい}が{必要|ひつよう}です。",
      "Yesterday afternoon, heavy rain closed a road in the eastern district. Nobody was injured. According to the city's announcement, the road is expected to reopen from three o'clock this afternoon. Rain appears likely to continue, and care is needed near the river.",
      q(
        "When is the road expected to reopen?",
        "From three this afternoon",
        [
          "Yesterday afternoon",
          "Tomorrow morning",
          "Once the rain has stopped",
        ],
        "午後三時以降に通れるようになる見込みです gives the expected time, and 以降 includes three o'clock itself.",
      ),
      q(
        "Was anybody hurt?",
        "Nobody was injured",
        [
          "Several people were hurt",
          "One driver was injured",
          "The article does not say",
        ],
        "けがをした人はいません states plainly that nobody was injured when the road was closed.",
      ),
    ),
    listening: p(
      "The evening forecast",
      "{明日|あした}の{天気|てんき}です。{朝|あさ}は{晴|は}れますが、{昼|ひる}{過|す}ぎから{雲|くも}が{多|おお}くなる{見込|みこ}みです。{夜|よる}は{大雨|おおあめ}の{恐|おそ}れがありますので、{早|はや}めにお{帰|かえ}りください。{気温|きおん}は{今日|きょう}より{低|ひく}くなる{模様|もよう}です。",
      "Here is tomorrow's weather. It will be fine in the morning, but cloud is expected to build up from early afternoon. There is a risk of heavy rain at night, so please head home early. Temperatures appear likely to be lower than today.",
      q(
        "What is the warning about?",
        "Heavy rain at night",
        ["Snow in the morning", "Strong wind all day", "A rise in temperature"],
        "夜は大雨の恐れがあります is the one warning; the temperature is forecast to fall rather than rise.",
      ),
      q(
        "What will the temperature be like tomorrow?",
        "Lower than today",
        ["Higher than today", "The same as today", "Below freezing all day"],
        "気温は今日より低くなる模様です: 模様 reports the likely trend, a drop compared with today.",
      ),
    ),
    practice:
      "Take one Japanese headline and write it out as a full sentence with the particles put back, then rewrite a forecast line once with 見込み and once with 恐れがあります.",
  },
  {
    slug: "particles-linking",
    title: "Particles that link ideas",
    summary:
      "Turn a verb into something you can talk about, leave a list deliberately open, say how often you do something, and quote a friend the way people actually do it.",
    vocabulary: words(`泳ぐ|およぐ|to swim
趣味|しゅみ|a hobby
回|かい|times; occasions
週|しゅう|a week
練習|れんしゅう|practice
説明|せつめい|an explanation
準備|じゅんび|preparation
得意|とくい|being good at something`),
    grammar: [
      g(
        "の & こと as nominalisers",
        "To talk about an action you first turn the verb into a noun, with の or こと: {泳|およ}ぐのが{好|す}きです。の suits things you see, hear, and feel directly, while こと suits facts and abilities. After {好|す}き, {上手|じょうず}, and the verbs of the senses, の is the safer choice.",
        "{泳|およ}ぐのが{好|す}きです。",
        "I like swimming.",
      ),
      g(
        "に for frequency & purpose",
        "に fixes a point, and that covers how often as well as when: {週|しゅう}に{三回|さんかい} is three times a week, with the longer period named first. The same に marks the purpose of a trip when it follows a verb stem, as in {泳|およ}ぎに{行|い}く.",
        "{週|しゅう}に{三回|さんかい}プールへ{泳|およ}ぎに{行|い}きます。",
        "I go to the pool to swim three times a week.",
      ),
      g(
        "とか & など for loose lists",
        "と lists things exhaustively, but とか and など leave the list open: コーヒーとか{紅茶|こうちゃ}とか means coffee, tea, and so on. とか belongs in speech and など in writing, and both soften a statement by not claiming to have named everything.",
        "コーヒーとか{紅茶|こうちゃ}とかが{好|す}きです。",
        "I like coffee, tea, and that sort of thing.",
      ),
      g(
        "って for casual quoting",
        "In conversation って takes over from と for quoting and from という for naming: {明日|あした}{来|こ}ないって{言|い}ってた、{田中|たなか}さんって{人|ひと}。It is casual only, so keep と and という in writing and with anybody you would address using です.",
        "{明日|あした}は{雨|あめ}だって{言|い}っていました。",
        "They said it is going to rain tomorrow.",
      ),
    ],
    grammarChecks: [
      q(
        "Which particle turns 泳ぐ into something you can like?",
        "の",
        ["を", "に", "へ"],
        "の nominalises the verb so that it can take が in front of 好き; を and に cannot do that job.",
      ),
      q(
        "How often is 週に三回?",
        "Three times a week",
        ["Three weeks in a row", "In the third week", "Once every three weeks"],
        "The longer period is named first with に, so 週に三回 is three times within a single week.",
      ),
      q(
        "Which list leaves room for other things too?",
        "コーヒーとか紅茶とか",
        ["コーヒーと紅茶", "コーヒーも紅茶も", "コーヒーか紅茶"],
        "とか leaves the list open, meaning coffee, tea, and that sort of thing; と names every item and stops there.",
      ),
      q(
        "In casual speech, what replaces と in 明日は雨だと言っていました?",
        "って",
        ["を", "が", "ね"],
        "In conversation って takes over from the quoting と: 明日は雨だって言っていました. Keep と in writing.",
      ),
    ],
    reading: p(
      "A swimming habit",
      "{趣味|しゅみ}は{泳|およ}ぐことです。{週|しゅう}に{三回|さんかい}、{近|ちか}くのプールへ{泳|およ}ぎに{行|い}きます。{練習|れんしゅう}の{前|まえ}に{準備|じゅんび}{運動|うんどう}をするのが{大切|たいせつ}だと{先生|せんせい}が{説明|せつめい}してくれました。{友達|ともだち}は{水|みず}がつめたいって{言|い}っていましたが、わたしはつめたいのが{得意|とくい}です。",
      "My hobby is swimming. Three times a week I go to a nearby pool to swim. The teacher explained that doing warm-up exercises before practice is important. My friend said the water was cold, but I am fine with cold water.",
      q(
        "How often does the writer swim?",
        "Three times a week",
        ["Once a week", "Every day", "Three times a month"],
        "週に三回 names the longer period first, so it is three times within one week rather than one month.",
      ),
      q(
        "What did the teacher say is important?",
        "Warming up before practice",
        [
          "Swimming every day",
          "Swimming in cold water",
          "Practising with a friend",
        ],
        "練習の前に準備運動をするのが大切だ: の turns the warm-up into something that can be called 大切, and 先生が説明してくれました says who said it.",
      ),
    ),
    listening: p(
      "Talking about hobbies",
      "{趣味|しゅみ}は{何|なん}ですか。{本|ほん}を{読|よ}むのとか、{泳|およ}ぐのとかです。{泳|およ}ぐのはどこでですか。{駅|えき}の{近|ちか}くのプールです。{週|しゅう}に{二回|にかい}{行|い}きます。",
      "What are your hobbies? Reading books, swimming, that sort of thing. Where do you swim? At the pool near the station. I go twice a week.",
      q(
        "Where does the speaker swim?",
        "At a pool near the station",
        ["At the sea", "At a school pool", "At a friend's house"],
        "駅の近くのプールです names the place; nothing at all is said about the sea or about a school.",
      ),
      q(
        "How often does the speaker go swimming?",
        "Twice a week",
        ["Three times a week", "Once a week", "Every day"],
        "週に二回行きます names the week first with に and then the count, so it is twice within one week.",
      ),
    ),
    practice:
      "Describe one hobby in four lines: nominalise the verb with の, give a frequency with に, leave a list open with とか, and quote a friend with って.",
  },
  {
    slug: "street-signs",
    title: "On the street: signs, rules & asking the way",
    summary:
      "Read the short, blunt language of street signs, ask a passer-by how to get somewhere, and follow directions to cross the road safely.",
    vocabulary: words(`止まる|とまる|to stop
危ない|あぶない|dangerous
禁止|きんし|prohibition
交番|こうばん|a police box
信号|しんごう|a traffic light
横断歩道|おうだんほどう|a pedestrian crossing
迷う|まよう|to get lost
通る|とおる|to pass through`),
    grammar: [
      g(
        "Command form: {止|と}まれ・{急|いそ}げ",
        "The command form gives a blunt order. Group 1 verbs change the final う-row sound to the え-row: {止|と}まる becomes {止|と}まれ and {急|いそ}ぐ becomes {急|いそ}げ. Group 2 verbs change る to ろ, as in {見|み}ろ, and する and {来|く}る become しろ and {来|こ}い. You will meet it on road signs, in emergencies and in sports coaching, but never use it to ask a person for something.",
        "{危|あぶ}ない!{止|と}まれ!",
        "Look out! Stop!",
      ),
      g(
        "Dictionary form + な: don't",
        "Adding な to the dictionary form forbids an action: {入|はい}るな means do not enter and {触|さわ}るな means do not touch. It is even blunter than the command form, so it belongs on signs and in warnings rather than in conversation. Printed notices often use a noun + {禁止|きんし} instead, as in {駐車|ちゅうしゃ}{禁止|きんし}, no parking.",
        "ここに{自転車|じてんしゃ}を{止|と}めるな。",
        "Do not leave bicycles here.",
      ),
      g(
        "Embedded questions: どこ・{何|なに} + 〜か",
        "To put a question with a question word inside a longer sentence, end it with か in the plain form: {駅|えき}がどこにあるか{教|おし}えてください. After a noun, drop だ and keep か, as in {何番|なんばん}か. For a yes-or-no question, 〜かどうか makes the choice explicit.",
        "{次|つぎ}のバスが{何時|なんじ}に{来|く}るか{知|し}っていますか。",
        "Do you know what time the next bus comes?",
      ),
      g(
        "〜ばいいですか: asking what to do",
        "Use the ば-form + いいですか to ask what you should do: どう{行|い}けばいいですか asks how to get somewhere, and どこで{降|お}りればいいですか asks where to get off. The reply often repeats the pattern, as in {次|つぎ}の{駅|えき}で{降|お}りればいいですよ. 〜たらいいですか means the same and is common in conversation.",
        "{図書館|としょかん}へはどう{行|い}けばいいですか。",
        "How do I get to the library?",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the command form of 急ぐ (to hurry).",
        "急げ",
        ["急ぎ", "急ごう", "急ぐな"],
        "Group 1 verbs change the final う-row sound to the え-row, so 急ぐ becomes 急げ. 急ごう is the volitional let's form, and 急ぐな forbids hurrying.",
      ),
      q(
        "A sign on a gate says 入るな. What does it mean?",
        "Do not enter",
        ["Please come in", "Enter quickly", "You may enter"],
        "Dictionary form + な forbids the action, so 入るな means do not enter. It is blunt, which is why it suits a sign.",
      ),
      q(
        "Complete: 駅がどこにある ___ 教えてください。",
        "か",
        ["かどうか", "と", "を"],
        "A question word such as どこ inside a sentence takes か. かどうか is for yes-or-no questions, so it does not follow a question word.",
      ),
      q(
        "Ask which bus to take: 何番のバスに ___ いいですか。",
        "乗れば",
        ["乗る", "乗れ", "乗らない"],
        "〜ばいいですか asks what you should do, and the ば-form of 乗る is 乗れば. 乗れ is a command and cannot come before いいですか.",
      ),
    ],
    reading: p(
      "Signs on the way to the station",
      "{駅|えき}までの{道|みち}には、いろいろな{看板|かんばん}があります。{細|ほそ}い{道|みち}から{広|ひろ}い{道|みち}に{出|で}るところには、「{止|と}まれ」と{書|か}いてあります。{公園|こうえん}の{前|まえ}には「ここに{自転車|じてんしゃ}を{止|と}めるな」という{看板|かんばん}もあって、{初|はじ}めはこわいと{思|おも}いました。でも、{友達|ともだち}に{聞|き}くと、{看板|かんばん}の{言葉|ことば}は{短|みじか}いので{強|つよ}く{聞|き}こえますが、{怒|おこ}っているのではないそうです。{道|みち}に{迷|まよ}ったら、{交番|こうばん}でどう{行|い}けばいいか{聞|き}けばいいと{教|おし}えてくれました。",
      "There are all sorts of signs on the way to the station. Where a narrow street comes out onto a wide road, it says 'Stop'. In front of the park there is also a sign saying 'Do not leave bicycles here', and at first I found it frightening. But when I asked a friend, they said the words on signs sound strong because they are short, not because anybody is angry. My friend also told me that if I get lost, I can ask at a police box how to get where I am going.",
      q(
        "What did the friend explain about the signs?",
        "Their short wording only makes them sound strong",
        [
          "They are meant to scold people",
          "They are only for drivers",
          "They were written for children",
        ],
        "看板の言葉は短いので強く聞こえますが、怒っているのではない: the strength comes from the short wording, not from anger.",
      ),
      q(
        "Where does the 止まれ sign appear?",
        "Where a narrow street meets a wide road",
        ["In front of the park", "At the police box", "Outside the station"],
        "細い道から広い道に出るところ has the 止まれ sign; the sign in front of the park is the one about bicycles.",
      ),
    ),
    listening: p(
      "Asking the way to the library",
      "すみません、{図書館|としょかん}へはどう{行|い}けばいいですか。この{道|みち}をまっすぐ{行|い}って、{二|ふた}つ{目|め}の{信号|しんごう}を{右|みぎ}に{曲|ま}がってください。{横断歩道|おうだんほどう}を{渡|わた}ると、{左|ひだり}にあります。ありがとうございます。",
      "Excuse me, how do I get to the library? Go straight along this road and turn right at the second traffic light. Once you cross the pedestrian crossing, it is on the left. Thank you very much.",
      q(
        "Where should the speaker turn?",
        "Right at the second traffic light",
        [
          "Left at the first traffic light",
          "Right at the first corner",
          "Left after the library",
        ],
        "二つ目の信号を右に曲がってください gives both details: the second light, and a right turn.",
      ),
      q(
        "Where is the library once you have crossed?",
        "On the left",
        ["On the right", "Behind the police box", "Next to the station"],
        "横断歩道を渡ると、左にあります: after the crossing, the library is on the left-hand side.",
      ),
    ),
    practice:
      "Copy three signs from near your home and say each one politely: turn 止まれ into 止まってください and 入るな into 入らないでください. Then ask how to get somewhere with どう行けばいいですか.",
  },
  {
    slug: "school-life",
    title: "School life: clubs, tests & maths class",
    summary:
      "Follow a teacher's instructions, pass on what you were told to do, talk about club activities and exams, and work through multiplication and division problems in a maths class.",
    vocabulary: words(`部活|ぶかつ|club activities
試験|しけん|an exam
問題|もんだい|a question; a problem
答え|こたえ|an answer
計算|けいさん|a calculation
数学|すうがく|mathematics
教室|きょうしつ|a classroom
黒板|こくばん|a blackboard`),
    grammar: [
      g(
        "〜なさい",
        "Verb stem + なさい gives an instruction from someone with authority, such as a teacher or a parent: {書|か}きなさい, write it; {座|すわ}りなさい, sit down. Exam papers use it for every task, as in {次|つぎ}の{問題|もんだい}に{答|こた}えなさい. Do not use it to a teacher or a stranger; ask with 〜てください instead.",
        "{名前|なまえ}をていねいに{書|か}きなさい。",
        "Write your name neatly.",
      ),
      g(
        "〜ように{言|い}う・〜ように{頼|たの}む",
        "To pass on an instruction or a request, put the plain form + ように before {言|い}う or {頼|たの}む: {先生|せんせい}が{静|しず}かにするように{言|い}いました. For a negative instruction use 〜ないように. In the passive, 〜ように{言|い}われました reports an instruction you received yourself.",
        "{母|はは}に{早|はや}く{寝|ね}るように{言|い}われました。",
        "My mother told me to go to bed early.",
      ),
      g(
        "〜ずつ: the same amount each",
        "ずつ after a number and a counter shares or repeats that amount evenly: {一人|ひとり}{二枚|にまい}ずつ means two sheets for each person, and {毎日|まいにち}{十|じゅっ}ページずつ means ten pages every day. Without ずつ, {二枚|にまい} would only give the total. In a maths problem, ずつ usually tells you the size of each group.",
        "{毎日|まいにち}{漢字|かんじ}を{五|いつ}つずつ{覚|おぼ}えています。",
        "I am learning five kanji a day.",
      ),
      g(
        "Calculations aloud: かける・わる & 〜{倍|ばい}",
        "Read a sum aloud with たす for plus, ひく for minus, かける for times and わる for divided by, and use は for equals: 3かける4は12. 〜{倍|ばい} means times as much, so {三倍|さんばい} is three times the amount. When a division does not come out evenly, the part left over is あまり: 13わる4は3あまり1.",
        "15わる4は3あまり3です。",
        "Fifteen divided by four is three, remainder three.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the teacher's instruction meaning 'Write your name.'",
        "名前を書きなさい",
        [
          "名前を書きましょうか",
          "名前を書いたことがあります",
          "名前を書くつもりです",
        ],
        "Stem + なさい gives an instruction from a teacher or a parent: 書く becomes 書き + なさい. 書きましょうか would offer to write it instead.",
      ),
      q(
        "先生に教室を掃除するように言われました。What happened?",
        "The teacher told the speaker to clean the classroom",
        [
          "The speaker told the teacher to clean it",
          "The teacher cleaned the classroom",
          "The speaker offered to clean it",
        ],
        "〜ように言われました reports an instruction the speaker received: the teacher gave it, and the speaker is the one who has to clean.",
      ),
      q(
        "What does 一人に二枚ずつあげます mean?",
        "Each person gets two",
        [
          "Two are given out in total",
          "Only two people get one",
          "Each person gets one",
        ],
        "ずつ after 二枚 repeats the amount for every person, so each person receives two. Without ずつ, 二枚 would be the total.",
      ),
      q(
        "How do you say 12 ÷ 4 = 3 aloud?",
        "12わる4は3",
        ["12かける4は3", "12ひく4は3", "12たす4は3"],
        "わる divides and かける multiplies, and は links the sum to its result: 12わる4は3 is twelve divided by four is three.",
      ),
    ],
    reading: p(
      "Exam week",
      "{私|わたし}は{毎日|まいにち}{放課後|ほうかご}、テニス{部|ぶ}の{部活|ぶかつ}に{出|で}ています。でも、{今週|こんしゅう}は{試験|しけん}があるので、{部活|ぶかつ}は{休|やす}みです。{数学|すうがく}の{先生|せんせい}には、{毎日|まいにち}{問題|もんだい}を{五|いつ}つずつ{解|と}くように{言|い}われました。{昨日|きのう}は{計算|けいさん}を{間違|まちが}えて、{答|こた}えが{三倍|さんばい}になってしまいました。{先生|せんせい}は「{答|こた}えを{出|だ}したら、もう{一度|いちど}{確|たし}かめなさい」と{言|い}いました。",
      "Every day after school I go to tennis club. This week, though, there are exams, so club is off. My maths teacher told me to solve five problems each day. Yesterday I made a mistake in a calculation, and my answer came out three times too big. The teacher said, 'Once you have an answer, check it again.'",
      q(
        "Why is there no club this week?",
        "Because there are exams this week",
        [
          "Because the teacher is away",
          "Because the writer is ill",
          "Because the courts are closed",
        ],
        "今週は試験があるので、部活は休みです: ので gives the exams as the reason the club is off.",
      ),
      q(
        "What did the maths teacher tell the writer to do each day?",
        "Solve five problems",
        [
          "Solve three problems",
          "Check one answer",
          "Stay after school for tennis",
        ],
        "毎日問題を五つずつ解くように言われました: ずつ makes it five problems for every day.",
      ),
    ),
    listening: p(
      "The start of a maths lesson",
      "{教科書|きょうかしょ}の{三十|さんじゅっ}ページを{開|ひら}きなさい。{今日|きょう}はわり{算|ざん}の{練習|れんしゅう}をします。{分|わ}からないところがあったら、{手|て}を{上|あ}げて{質問|しつもん}しなさい。{宿題|しゅくだい}は{明日|あした}までに{出|だ}すようにしてください。",
      "Open your textbooks at page thirty. Today we will practise division. If there is anything you do not understand, raise your hand and ask. Please make sure you hand in your homework by tomorrow.",
      q(
        "What will the class practise today?",
        "Division",
        ["Multiplication", "Addition", "Fractions"],
        "今日はわり算の練習をします: わり算 is division, the operation named with わる.",
      ),
      q(
        "When is the homework due?",
        "By tomorrow",
        ["By next week", "At the end of the lesson", "There is no homework"],
        "宿題は明日までに出すようにしてください: までに sets tomorrow as the deadline.",
      ),
    ),
    practice:
      "Say three calculations aloud with かける and わる, then write one sharing problem of your own using 〜ずつ and ask a partner to solve it in Japanese.",
    problems: problemSet(
      "Maths class: multiplying, dividing & sharing",
      "Find the word that tells you what to do: かける and 〜倍 multiply, わる and 〜ずつ分ける divide, 分の names a fraction, and あまり is what is left when a division does not come out evenly.",
      words(`かける|かける|to multiply
わる|わる|to divide
倍|ばい|times as much
ずつ|ずつ|the same amount each
あまり|あまり|the remainder
分の|ぶんの|a fraction: 3分の1 is one third`),
      {
        text: "えんぴつが1{箱|はこ}に12{本|ほん}{入|はい}っています。3{箱|はこ}では、えんぴつは{全部|ぜんぶ}で{何本|なんぼん}ですか。",
        translation:
          "There are 12 pencils in one box. How many pencils are there altogether in 3 boxes?",
        steps: [
          "1箱に12本 gives the number in each box, and 3箱 is the number of boxes.",
          "全部で asks for the total, so multiply: 12 かける 3 は 36 (12 × 3 = 36).",
          "The answer is 36本; 本 is the counter for long, thin things such as pencils.",
        ],
      },
      [
        wordProblem(
          "{兄|あに}は{本|ほん}を8{冊|さつ}{持|も}っています。{弟|おとうと}は{兄|あに}の3{倍|ばい}の{本|ほん}を{持|も}っています。{弟|おとうと}は{本|ほん}を{何冊|なんさつ}{持|も}っていますか。",
          "My older brother has 8 books. My younger brother has three times as many books as my older brother. How many books does my younger brother have?",
          "24冊",
          ["11冊", "5冊", "16冊"],
          "3倍 means three times as much, so multiply the older brother's 8冊 by 3: 8 かける 3 は 24. Adding the numbers (8 + 3 = 11) is a common slip.",
        ),
        wordProblem(
          "クッキーが24{枚|まい}あります。6{人|にん}で{同|おな}じ{数|かず}ずつ{分|わ}けると、{1人|ひとり}{何枚|なんまい}になりますか。",
          "There are 24 cookies. If 6 people share them out equally, how many cookies does each person get?",
          "4枚",
          ["144枚", "18枚", "30枚"],
          "同じ数ずつ分ける means sharing out equally, so divide the 24枚 among 6人: 24 わる 6 は 4. Multiplying (24 × 6 = 144) would give far more cookies than there are.",
        ),
        wordProblem(
          "{子|こ}どもが30{人|にん}います。4{人|にん}ずつのグループを{作|つく}ると、グループはいくつできて、{何人|なんにん}あまりますか。",
          "There are 30 children. If you make groups of 4, how many groups can you make, and how many children are left over?",
          "7グループできて、2人あまる",
          [
            "7グループできて、あまりはない",
            "8グループできて、あまりはない",
            "6グループできて、6人あまる",
          ],
          "4人ずつ means groups of four, so divide: 30 わる 4 は 7 あまり 2, because 4 × 7 = 28 and 30 − 28 = 2. Seven groups can be made and two children あまる, are left over.",
        ),
        wordProblem(
          "チョコレートが24{個|こ}あります。その3{分|ぶん}の1を{妹|いもうと}にあげました。{妹|いもうと}に{何個|なんこ}あげましたか。",
          "There are 24 chocolates. I gave one third of them to my younger sister. How many did I give her?",
          "8個",
          ["72個", "16個", "21個"],
          "3分の1 is one third, so divide by 3: 24 わる 3 は 8. 16個 is the two thirds you kept, and 72個 comes from multiplying by 3 instead of dividing.",
        ),
      ],
    ),
  },
  {
    slug: "new-job",
    title: "At work: your first week in a new job",
    summary:
      "Get through a first week at work: ask how things are done, say when a task starts and finishes, keep going with practice, and describe what sometimes happens on busy days.",
    vocabulary: words(`職場|しょくば|a workplace
先輩|せんぱい|a senior colleague
休憩|きゅうけい|a break
制服|せいふく|a uniform
残業|ざんぎょう|overtime
入力|にゅうりょく|data entry
機械|きかい|a machine
返事|へんじ|a reply`),
    grammar: [
      g(
        "Verb stem + {方|かた}: how to do something",
        "Add {方|かた} to a verb's ます-stem to name the way something is done: {使|つか}い{方|かた}, how to use it, and {書|か}き{方|かた}, how to write it. The object then takes の instead of を, as in コピー{機|き}の{使|つか}い{方|かた}. For する-verbs, use the noun + の{仕方|しかた}: {入力|にゅうりょく}の{仕方|しかた}.",
        "レジの{使|つか}い{方|かた}を{教|おし}えてください。",
        "Please show me how to use the till.",
      ),
      g(
        "〜{始|はじ}める・〜{終|お}わる",
        "Attach {始|はじ}める or {終|お}わる to a verb's ます-stem to mark the start or the end of an action: {働|はたら}き{始|はじ}める, to start working, and {読|よ}み{終|お}わる, to finish reading. Both then conjugate as ordinary verbs, so {入力|にゅうりょく}し{終|お}わったら means once you have finished entering it.",
        "{四月|しがつ}からこの{会社|かいしゃ}で{働|はたら}き{始|はじ}めました。",
        "I started working at this company in April.",
      ),
      g(
        "〜{続|つづ}ける: keep on doing",
        "Verb stem + {続|つづ}ける means to keep doing something without stopping: {立|た}ち{続|つづ}ける, to keep standing, and {使|つか}い{続|つづ}ける, to go on using. It suits effort that lasts a long time or carries on despite difficulty; for a single, short action the plain verb is enough.",
        "{三時間|さんじかん}{立|た}ち{続|つづ}けて、{足|あし}が{疲|つか}れました。",
        "I stood for three hours straight, and my legs got tired.",
      ),
      g(
        "〜ことがある: things that sometimes happen",
        "Dictionary form + ことがある says that something happens now and then: {残業|ざんぎょう}することがあります, I sometimes work overtime. Compare the past form: {残業|ざんぎょう}したことがあります means I have worked overtime before. With a negative, 〜ないことがある says that something sometimes does not happen.",
        "{忙|いそが}しい{日|ひ}は{休憩|きゅうけい}が{取|と}れないことがあります。",
        "On busy days I sometimes cannot take a break.",
      ),
    ],
    grammarChecks: [
      q(
        "Ask a senior colleague how to use the copier.",
        "コピー機の使い方を教えてください",
        [
          "コピー機を使い方を教えてください",
          "コピー機の使うを教えてください",
          "コピー機を使ってもいいですか",
        ],
        "Stem + 方 makes a noun, so the object takes の: コピー機の使い方. 使ってもいいですか asks for permission, not for instructions.",
      ),
      q(
        "What does 書き終わったら、見せてください mean?",
        "Show me once you have finished writing it",
        [
          "Show me when you start writing it",
          "Show me before you write it",
          "Show me while you are writing it",
        ],
        "書き終わる means to finish writing, and 〜たら makes it the point after which the request applies.",
      ),
      q(
        "Choose the sentence meaning 'I kept working for three hours.'",
        "三時間働き続けました",
        [
          "三時間働き始めました",
          "三時間働いたことがあります",
          "三時間働くことがあります",
        ],
        "Stem + 続ける means to keep doing something. 働き始めました would only say that the work began.",
      ),
      q(
        "What does 忙しい日は残業することがあります mean?",
        "On busy days I sometimes work overtime",
        [
          "I have worked overtime once before",
          "I always work overtime on busy days",
          "I never work overtime",
        ],
        "Dictionary form + ことがある says something happens now and then. 残業したことがあります, with the past form, would describe a past experience.",
      ),
    ],
    reading: p(
      "One week in",
      "{新|あたら}しい{職場|しょくば}で{働|はたら}き{始|はじ}めて、{一週間|いっしゅうかん}になりました。{最初|さいしょ}の{日|ひ}は{制服|せいふく}の{着方|きかた}も{分|わ}からなくて、{先輩|せんぱい}に{教|おし}えてもらいました。{今|いま}はデータを{入力|にゅうりょく}する{仕事|しごと}をしています。{機械|きかい}の{使|つか}い{方|かた}はまだ{難|むずか}しいですが、メモを{見|み}ながら{練習|れんしゅう}を{続|つづ}けています。{忙|いそが}しい{日|ひ}は{休憩|きゅうけい}が{短|みじか}くなることもありますが、みんな{親切|しんせつ}なので、{早|はや}く{慣|な}れたいです。",
      "It has been a week since I started working at my new workplace. On the first day I did not even know how to put on the uniform, and a senior colleague showed me. Now I am doing data entry. Using the machine is still difficult, but I keep practising while looking at my notes. On busy days the break sometimes gets shorter, but everyone is kind, so I want to get used to things soon.",
      q(
        "How does the writer feel about the new job?",
        "It is still hard, but they want to settle in soon",
        [
          "They want to quit because the breaks are short",
          "It is too easy to be interesting",
          "They have already mastered every task",
        ],
        "機械の使い方はまだ難しい admits the difficulty, and みんな親切なので、早く慣れたいです shows the writer wants to settle in.",
      ),
      q(
        "What did the senior colleague help with on the first day?",
        "How to put on the uniform",
        [
          "How to use the machine",
          "Where to take a break",
          "How to write notes",
        ],
        "制服の着方も分からなくて、先輩に教えてもらいました: the colleague showed how to wear the uniform.",
      ),
    ),
    listening: p(
      "Today's task",
      "{今日|きょう}は{商品|しょうひん}のデータを{入力|にゅうりょく}してください。{入力|にゅうりょく}し{終|お}わったら、{私|わたし}に{知|し}らせてください。{分|わ}からないことがあったら、{途中|とちゅう}でも{聞|き}いていいですよ。{昼|ひる}の{休憩|きゅうけい}は{十二時|じゅうにじ}からです。はい、わかりました。",
      "Today, please enter the product data. When you have finished entering it, let me know. If there is anything you don't understand, you can ask even partway through. The lunch break starts at twelve. Yes, understood.",
      q(
        "What should the new employee do after finishing the data entry?",
        "Tell the senior colleague",
        [
          "Take a lunch break at once",
          "Start a new list alone",
          "Go home early",
        ],
        "入力し終わったら、私に知らせてください: once the entry is finished, the next step is to report back.",
      ),
      q(
        "When does the lunch break start?",
        "At twelve o'clock",
        [
          "At one o'clock",
          "When the data entry is finished",
          "At eleven o'clock",
        ],
        "昼の休憩は十二時からです gives the time; the break does not depend on finishing the task.",
      ),
    ),
    practice:
      "Write three sentences about a job or a class you started: one with 〜始めました, one asking about something with 〜方, and one saying what sometimes happens with 〜ことがあります.",
  },
  {
    slug: "homestay-visit",
    title: "Visiting a host family or a teacher's home",
    summary:
      "Arrive at a host family's or a teacher's home with the right set phrases, bring a gift along, and talk about the kindness you received with 〜てくださる and 〜ていただく.",
    vocabulary: words(`お土産|おみやげ|a gift brought from a trip
玄関|げんかん|an entrance hall
靴|くつ|shoes
迎える|むかえる|to meet; to welcome
遠慮|えんりょ|holding back out of politeness
手作り|てづくり|homemade
泊まる|とまる|to stay the night
和室|わしつ|a Japanese-style room`),
    grammar: [
      g(
        "Offering a gift: つまらないものですが",
        "When you hand over a gift, つまらないものですが, literally it is only a trifle, is a modest set phrase and not a real claim that the gift is worthless. Many people now say {気持|きも}ちだけですが or ほんの{気持|きも}ちですが, it is just a small token, instead. Hold the gift out with both hands and add どうぞ.",
        "これ、つまらないものですが、どうぞ。",
        "This is just a small thing, but please accept it.",
      ),
      g(
        "〜ていく・〜てくる: doing something on the way",
        "〜ていく adds going on somewhere after the action, and 〜てくる adds coming back: ケーキを{買|か}っていきます, I will buy a cake and take it along, and ちょっと{見|み}てきます, I will go and have a look and come back. This is a different use from 〜てくる for a change that develops over time.",
        "{駅|えき}でお{土産|みやげ}を{買|か}っていきます。",
        "I will buy a gift at the station and take it along.",
      ),
      g(
        "〜てくださる",
        "〜てくださる is the respectful form of 〜てくれる: a person you respect does something for you or your side. The helper is the subject, as in {先生|せんせい}が{迎|むか}えに{来|き}てくださいました. The ます-form is 〜てくださいます, and the て-form 〜てくださって is common when you thank someone.",
        "ホストファミリーのお{父|とう}さんが{駅|えき}まで{迎|むか}えに{来|き}てくださいました。",
        "My host father kindly came to meet me at the station.",
      ),
      g(
        "〜ていただく",
        "〜ていただく is the humble form of 〜てもらう: you receive a kind action from someone you respect. You are the subject, and に marks the person who helped, as in {先生|せんせい}に{作文|さくぶん}を{直|なお}していただきました. It tells the same favour as 〜てくださる, but from your side instead of theirs.",
        "お{母|かあ}さんに{着物|きもの}を{着|き}せていただきました。",
        "My host mother kindly dressed me in a kimono.",
      ),
    ],
    grammarChecks: [
      q(
        "You hand your host a box of sweets. Which modest set phrase goes with it?",
        "つまらないものですが",
        ["おじゃましました", "いただきます", "おかげさまで"],
        "つまらないものですが is the modest phrase for handing over a gift. おじゃましました closes a visit, いただきます comes before eating, and おかげさまで answers a kind enquiry.",
      ),
      q(
        "You will buy a cake on the way and take it along. Choose the sentence.",
        "ケーキを買っていきます",
        [
          "ケーキを買ってしまいます",
          "ケーキを買ってあります",
          "ケーキを買っています",
        ],
        "〜ていく adds going on somewhere after the action: buy the cake, then go. 買ってあります would say it has already been bought.",
      ),
      q(
        "Choose the respectful form: 先生が車で送って ___。",
        "くださいました",
        ["いただきました", "さしあげました", "あげました"],
        "With 先生が as the subject acting for you, use くださる, the respectful form of くれる. いただく needs 先生に, with you as the subject.",
      ),
      q(
        "Choose the particle: 私はお母さん ___ 着物を着せていただきました。",
        "に",
        ["が", "を", "で"],
        "With 〜ていただく you are the subject, and に marks the respected person who did the favour for you.",
      ),
    ],
    reading: p(
      "A thank-you letter",
      "{山本|やまもと}さんのご{家族|かぞく}へ。{先週|せんしゅう}は{本当|ほんとう}にお{世話|せわ}になりました。{駅|えき}まで{迎|むか}えに{来|き}てくださって、とてもうれしかったです。お{母|かあ}さんには{手作|てづく}りの{料理|りょうり}の{作|つく}り{方|かた}を{教|おし}えていただきました。{和室|わしつ}に{泊|と}まったのは{初|はじ}めてで、{楽|たの}しかったです。{国|くに}から{持|も}っていったお{土産|みやげ}を{喜|よろこ}んでくださって、{安心|あんしん}しました。また{遊|あそ}びに{行|い}ってもいいですか。",
      "To the Yamamoto family. Thank you so much for everything last week. I was very happy that you came to meet me at the station. Your mother taught me how to make her home cooking. It was my first time staying in a Japanese-style room, and I enjoyed it. I was relieved that you liked the gift I brought from my country. May I come and visit again?",
      q(
        "What is the main purpose of the letter?",
        "To thank the family for the stay",
        [
          "To ask for a recipe",
          "To apologise for a mistake",
          "To invite the family abroad",
        ],
        "お世話になりました opens the letter, and every sentence after it lists a kindness the writer received during the stay.",
      ),
      q(
        "Why was the writer relieved?",
        "The family liked the gift",
        [
          "The station was easy to find",
          "The meal was not spicy",
          "The room had a bed",
        ],
        "お土産を喜んでくださって、安心しました: the relief comes from the family being pleased with the gift.",
      ),
    ),
    listening: p(
      "At the front door",
      "ごめんください。いらっしゃい。どうぞ、{上|あ}がってください。おじゃまします。これ、つまらないものですが、どうぞ。まあ、ありがとうございます。{遠慮|えんりょ}しないで、ゆっくりしてくださいね。",
      "Hello, is anyone home? Welcome. Please come in. Thank you for having me. This is just a little something, but please take it. Oh, thank you very much. Don't hold back; make yourself at home.",
      q(
        "What does the visitor do after coming in?",
        "Hands over a small gift",
        ["Takes off a coat", "Asks for directions", "Refuses a drink"],
        "これ、つまらないものですが、どうぞ comes straight after おじゃまします, as the visitor hands over the gift.",
      ),
      q(
        "What does the host tell the visitor?",
        "To relax and not hold back",
        [
          "To wait outside for a moment",
          "To take the gift back home",
          "To leave before dinner",
        ],
        "遠慮しないで、ゆっくりしてくださいね asks the visitor not to hold back and to take their time.",
      ),
    ),
    practice:
      "Write a short thank-you message to someone who helped you: use 〜てくださって for what they did, 〜ていただきました for what you received, and end by asking whether you may visit again.",
  },
  {
    slug: "n4-integration",
    title: "N4 integration: everyday decisions",
    summary:
      "Combine conditions, reasons, experience, and comparison in practical notices and conversations.",
    vocabulary: words(`参加|さんか|participation
変更|へんこう|change
無料|むりょう|free of charge
有料|ゆうりょう|requiring payment
期間|きかん|period of time
申込書|もうしこみしょ|application form
比べる|くらべる|to compare
確認|かくにん|confirmation`),
    grammar: [
      g(
        "〜し〜し",
        "Plain forms + し list several reasons or features without claiming the list is exhaustive. Nouns and な-adjectives take だし. The conclusion may be implied or explicitly stated.",
        "{安|やす}いし、{近|ちか}いし、この{店|みせ}にしましょう。",
        "It is inexpensive and nearby, so let's choose this shop.",
      ),
      g(
        "〜すぎる",
        "Use a verb stem or an adjective stem + すぎる for excess. This is a negative evaluation relative to a suitable amount, not just a synonym for very.",
        "この{荷物|にもつ}は{重|おも}すぎます。",
        "This luggage is too heavy.",
      ),
      g(
        "〜やすい・〜にくい",
        "Attach to a verb's ます-stem for ease or difficulty of doing it. These forms conjugate like い-adjectives and usually describe a practical property rather than the speaker's skill alone.",
        "この{説明|せつめい}は{分|わ}かりやすいです。",
        "This explanation is easy to understand.",
      ),
      g(
        "〜かどうか",
        "Embed a yes/no question with かどうか, meaning whether or not. Embed a question containing a question word with just か. The surrounding main verb can be 確認する or 調べる.",
        "{予約|よやく}が{必要|ひつよう}かどうか{確認|かくにん}します。",
        "I will check whether a reservation is needed.",
      ),
    ],
    grammarChecks: [
      q(
        "Give the first of two reasons: 静か ___、便利だし、この部屋がいいです。",
        "だし",
        ["し", "なし", "でし"],
        "A な-adjective such as 静か takes だ before し, so the first reason becomes 静かだし.",
      ),
      q(
        "What does この荷物は重すぎます say?",
        "It is heavier than it should be",
        [
          "It is fairly light",
          "It is very heavy, which is ideal",
          "It used to be heavy",
        ],
        "すぎる is a negative judgment against a suitable amount: the luggage is too heavy, not merely very heavy.",
      ),
      q(
        "Choose 'easy to use': この道具は ___。",
        "使いやすい",
        ["使うやすい", "使ってやすい", "使いやす"],
        "The ます-stem 使い combines with やすい.",
      ),
      q(
        "Complete 'check whether it is free': 無料 ___ 確認します。",
        "かどうか",
        ["だかどうか", "のかどうです", "ためか"],
        "The affirmative noun omits だ before this embedded yes/no question.",
      ),
    ],
    reading: p(
      "Choosing a workshop",
      "{市|し}の{料理|りょうり}{教室|きょうしつ}には{昼|ひる}と{夜|よる}のコースがある。{昼|ひる}のコースは{初心者|しょしんしゃ}{向|む}けで、{材料費|ざいりょうひ}だけ{払|はら}えばよい。{夜|よる}のコースは{経験|けいけん}がある{人|ひと}{向|む}けで、{材料費|ざいりょうひ}のほかに{参加費|さんかひ}が{必要|ひつよう}だ。どちらも{道具|どうぐ}を{借|か}りられる。{料理|りょうり}を{始|はじ}めたばかりのわたしは、{休|やす}みの{水曜日|すいようび}に{昼|ひる}のコースへ{参加|さんか}しようと{思|おも}う。",
      "The city's cooking classes have daytime and evening courses. The daytime course is for beginners and only charges for ingredients. The evening course is for experienced people and charges a participation fee as well as ingredients. Both lend equipment. Having just started cooking, I plan to join the daytime course on my Wednesday off.",
      q(
        "What will the writer need to pay?",
        "Only the ingredient cost",
        [
          "Only a participation fee",
          "Both fees and equipment rental",
          "Nothing at all",
        ],
        "The writer chooses the beginner daytime course, which requires only 材料費.",
      ),
      q(
        "Who is the evening course for?",
        "People with cooking experience",
        [
          "Complete beginners",
          "Children",
          "People who need to borrow equipment",
        ],
        "夜のコースは経験がある人向け: 向け names who the course is meant for, and it also charges a 参加費.",
      ),
    ),
    listening: p(
      "Changing a reservation",
      "{予約|よやく}を{金曜日|きんようび}に{変|か}えたいんですが。{金曜日|きんようび}は{午後|ごご}なら{空|あ}いています。{午前中|ごぜんちゅう}がいいんです。では、{土曜日|どようび}の{十時|じゅうじ}はいかがですか。それでおねがいします。",
      "I would like to change my reservation to Friday. Friday afternoon is available. I would prefer the morning. Then how about ten on Saturday? That works, thank you.",
      q(
        "What is the new reservation?",
        "Saturday at 10 a.m.",
        ["Friday morning", "Friday afternoon", "Saturday afternoon"],
        "The first requested day is not the final booking. The last suggestion is accepted.",
      ),
      q(
        "Why doesn't the caller take Friday afternoon?",
        "They would rather have a morning slot",
        [
          "Friday is fully booked",
          "The office is closed on Friday",
          "They are busy on Saturday",
        ],
        "午前中がいいんです explains the caller's preference with んです, so the free Friday afternoon is turned down.",
      ),
    ),
    practice:
      "Complete the mixed review without opening the notes. Revisit any missed verb-form lessons, then summarize a practical notice with who, when, cost, and exceptions.",
  },
];
