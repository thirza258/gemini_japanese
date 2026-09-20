import {
  grammar as g,
  passage as p,
  question as q,
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
        "Complete the opinion: この町は静か ___ 思います。",
        "だと",
        ["ですを", "なと", "にと"],
        "A noun or な-adjective retains plain だ before the quotation particle と.",
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
        "Who helped? 私は兄に荷物を運んでもらいました。",
        "The older brother",
        ["The speaker", "The younger brother", "The teacher"],
        "With てもらう, に marks the person doing the helpful action.",
      ),
      q(
        "Choose the form for help received: 友達が私を駅まで送って ___。",
        "くれました",
        ["もらいました", "あげました", "いましたです"],
        "The friend is the subject and acts for the speaker, so くれる fits.",
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
    ),
    listening: p(
      "Borrowing a dictionary",
      "{辞書|じしょ}を{忘|わす}れたんですが、{貸|か}してもらえませんか。いま{使|つか}っていますから、{十分|じゅっぷん}{待|ま}ってもらえますか。はい、{大丈夫|だいじょうぶ}です。",
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
        "Form the condition 'if it is not cold': 寒く ___、外で食べましょう。",
        "なければ",
        ["ないば", "なかったば", "なくばです"],
        "Negative ない becomes なければ in this conditional form.",
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
        "Express preparation: 旅行の前に切符を買って ___。",
        "おきます",
        ["いますでした", "ありますかた", "みたいです"],
        "ておく marks buying the tickets in preparation for the trip.",
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
        "Mark a submission deadline: 月曜日 ___ レポートを出します。",
        "までに",
        ["ながら", "ばかり", "ところ"],
        "Submission must be completed by Monday; までに gives the deadline.",
      ),
      q(
        "What does 食べているところです mean?",
        "I am in the middle of eating",
        ["I am about to eat", "I just finished eating", "I have never eaten"],
        "The ている form places the speaker inside the ongoing action.",
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
        "Who is likely acting in 先生がご覧になります?",
        "The teacher looks",
        ["The student eats", "The speaker visits", "The teacher writes"],
        "ご覧になる is the respectful form of 見る, with 先生 as subject.",
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
    ),
    practice:
      "Role-play a visitor and receptionist. Underline the actor in every honorific or humble sentence to check the direction of respect.",
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
    ),
    practice:
      "Complete the mixed review without opening the notes. Revisit any missed verb-form lessons, then summarize a practical notice with who, when, cost, and exceptions.",
  },
];
