import {
  grammar as g,
  passage as p,
  problemSet,
  question as q,
  wordProblem,
  words,
  type CourseSeed,
} from "./types";

export const n5Courses: CourseSeed[] = [
  {
    slug: "first-conversations",
    title: "Sounds & first conversations",
    summary:
      "Read the five vowel sounds, introduce yourself, and turn a statement into a polite question. Use the kana charts alongside this first course.",
    vocabulary: words(`私|わたし|I; me
学生|がくせい|student
先生|せんせい|teacher
日本|にほん|Japan
名前|なまえ|name
友達|ともだち|friend
はい|はい|yes
いいえ|いいえ|no`),
    grammar: [
      g(
        "Japanese sounds & scripts",
        "Hiragana represents sounds; katakana usually writes loanwords. The vowels are あ a, い i, う u, え e, お o. Long vowels and small っ change word meaning: おばさん is aunt, おばあさん is grandmother. Practice both charts in the kana tool.",
        "こんにちは。",
        "Hello. (The final は in this greeting is pronounced wa.)",
      ),
      g(
        "A は B です",
        "Put the topic before は (pronounced wa) and the identity after it. です makes a noun sentence polite. Japanese often omits a topic that is already clear.",
        "わたしは{学生|がくせい}です。",
        "I am a student.",
      ),
      g(
        "Noun + じゃありません",
        "Negate a polite noun sentence with じゃありません or the more formal ではありません. Do not add ない directly to a noun.",
        "{先生|せんせい}じゃありません。",
        "I am not a teacher.",
      ),
      g(
        "Questions with か",
        "Add か at the end of a polite sentence. Answer with はい or いいえ and the relevant fact; the word order stays the same.",
        "{学生|がくせい}ですか。",
        "Are you a student?",
      ),
    ],
    grammarChecks: [
      q(
        "おばあさん means grandmother. What does おばさん, with a short vowel, mean?",
        "Aunt",
        ["Grandmother", "Older sister", "Granddaughter"],
        "The long vowel changes the word: おばさん with a short ば is aunt, while おばあさん with a long あ is grandmother.",
      ),
      q(
        "Choose the topic particle: わたし ___ 学生です。",
        "は",
        ["を", "で", "と"],
        "は marks what the sentence is about and is pronounced wa here.",
      ),
      q(
        "Make it negative: わたしは学生 ___。 (I am not a student.)",
        "じゃありません",
        ["ないです", "ありません", "じゃいません"],
        "A noun sentence is negated with じゃありません or ではありません. ない cannot attach directly to the noun 学生.",
      ),
      q(
        "Make this a polite question: 先生です___。",
        "か",
        ["を", "に", "の"],
        "Sentence-final か turns the statement into a question.",
      ),
    ],
    reading: p(
      "A new classmate",
      "はじめまして。わたしはアニです。インドネシアから{来|き}ました。{学生|がくせい}です。{日本語|にほんご}の{先生|せんせい}は{田中|たなか}さんです。どうぞよろしくおねがいします。",
      "Nice to meet you. I am Ani. I came from Indonesia. I am a student. My Japanese teacher is Ms. Tanaka. I look forward to getting to know you.",
      q(
        "Who is the teacher?",
        "Ms. Tanaka",
        ["Ani", "Ani's friend", "No teacher is named"],
        "日本語の先生は田中さんです identifies the teacher; Ani identifies herself as a student.",
      ),
      q(
        "Where does Ani come from?",
        "Indonesia",
        ["Japan", "India", "Thailand"],
        "インドネシアから来ました gives her home country: から marks the place she came from.",
      ),
    ),
    listening: p(
      "At the classroom door",
      "アニさんですか。はい、アニです。{先生|せんせい}ですか。いいえ、{学生|がくせい}です。",
      "Are you Ani? Yes, I am Ani. Are you a teacher? No, I am a student.",
      q(
        "What does Ani say she is?",
        "A student",
        ["A teacher", "A doctor", "A shopkeeper"],
        "Listen beyond いいえ: 学生です supplies the corrected identity.",
      ),
      q(
        "What does Ani confirm with はい?",
        "That she is Ani",
        [
          "That she is a teacher",
          "That she is from Japan",
          "That she knows the speaker",
        ],
        "アニさんですか is answered はい、アニです, confirming her name; the later いいえ corrects the guess that she is a teacher.",
      ),
    ),
    practice:
      "Introduce yourself with your name and role, then ask a partner the same question. Read あいうえお aloud and study the basic kana charts before course 2.",
  },
  {
    slug: "things-around-you",
    title: "Things around you",
    summary:
      "Identify objects, express possession, and ask which item somebody means.",
    vocabulary: words(`本|ほん|book
机|つくえ|desk
椅子|いす|chair
かばん|かばん|bag
時計|とけい|clock; watch
傘|かさ|umbrella
辞書|じしょ|dictionary
鉛筆|えんぴつ|pencil`),
    grammar: [
      g(
        "これ・それ・あれ",
        "これ is near the speaker, それ near the listener, and あれ away from both. These stand alone as nouns; do not put a noun immediately after them.",
        "これは{本|ほん}です。",
        "This is a book.",
      ),
      g(
        "この・その・あの + noun",
        "Use この, その, or あの directly before a noun: this, that near you, or that over there. Unlike これ, they cannot stand alone. どの asks which member of a set: どの本ですか.",
        "その{傘|かさ}はわたしのです。",
        "That umbrella is mine.",
      ),
      g(
        "Noun の noun",
        "の connects an owner or category to another noun. The second noun can be omitted if everyone knows the item being discussed.",
        "これは{友達|ともだち}の{辞書|じしょ}です。",
        "This is my friend's dictionary.",
      ),
      g(
        "も & 何",
        "も replaces は when adding a similar fact: also. 何 asks what; it is usually read なん before です.",
        "これも{鉛筆|えんぴつ}です。あれは{何|なん}ですか。",
        "This is also a pencil. What is that?",
      ),
    ],
    grammarChecks: [
      q(
        "Point to a building far from you both: ___ は銀行です。",
        "あれ",
        ["これ", "それ", "あの"],
        "あれ points to something away from both the speaker and the listener and stands alone before は. あの would need a noun after it.",
      ),
      q(
        "Choose the word before the noun: ___ かばんは田中さんのです。",
        "この",
        ["これ", "ここ", "こちらのです"],
        "この modifies かばん. これ would stand alone.",
      ),
      q(
        "Say 'my book': わたし ___ 本",
        "の",
        ["を", "で", "か"],
        "の connects the owner わたし to the thing owned, 本.",
      ),
      q(
        "Say 'That is also a pen': これはペンです。それ ___ ペンです。",
        "も",
        ["は", "が", "を"],
        "も replaces は when adding a similar fact, so それもペンです means that is a pen too.",
      ),
    ],
    reading: p(
      "The desk by the window",
      "これはわたしの{机|つくえ}です。{本|ほん}と{辞書|じしょ}があります。この{本|ほん}はわたしのです。でも、その{辞書|じしょ}は{友達|ともだち}のです。{青|あお}い{かばん|かばん}も{友達|ともだち}のです。",
      "This is my desk. There are a book and a dictionary. This book is mine, but that dictionary belongs to a friend. The blue bag also belongs to my friend.",
      q(
        "Which item belongs to the writer?",
        "The book",
        ["The dictionary", "The blue bag", "The umbrella"],
        "この本はわたしのです gives ownership. The dictionary and bag are the friend's.",
      ),
      q(
        "Which two things belong to the friend?",
        "The dictionary and the blue bag",
        [
          "The book and the desk",
          "The desk and the dictionary",
          "The book and the blue bag",
        ],
        "その辞書は友達のです names the dictionary, and 青いかばんも友達のです adds the bag with も. The book and desk are the writer's.",
      ),
    ),
    listening: p(
      "Whose umbrella?",
      "この{傘|かさ}は{先生|せんせい}のですか。いいえ、わたしのではありません。あの{赤|あか}い{傘|かさ}がわたしのです。",
      "Is this umbrella yours, teacher? No, it is not mine. That red umbrella over there is mine.",
      q(
        "Which umbrella is the teacher's?",
        "The red one over there",
        ["The one near the speaker", "The blue one", "Both umbrellas"],
        "あの赤い傘 points to the red umbrella away from the speakers.",
      ),
      q(
        "Does the umbrella near the speakers belong to the teacher?",
        "No, it does not",
        [
          "Yes, it does",
          "It belongs to both of them",
          "The teacher is not sure",
        ],
        "いいえ、わたしのではありません denies that この傘, the one close by, is the teacher's.",
      ),
    ),
    practice:
      "Label eight objects in your room. Make one これ sentence and one この + noun sentence for each, then explain who owns three objects.",
  },
  {
    slug: "numbers-time",
    title: "Numbers, dates & time",
    summary:
      "Read prices, say when something happens, and distinguish a time from a duration.",
    vocabulary: words(`一つ|ひとつ|one thing
二つ|ふたつ|two things
三百円|さんびゃくえん|three hundred yen
今日|きょう|today
明日|あした|tomorrow
月曜日|げつようび|Monday
七時|しちじ|seven o'clock
半|はん|half`),
    grammar: [
      g(
        "Numbers & counters",
        "Count いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. Join tens before units: 二十三 is 23. Counters depend on the object; ひとつ, ふたつ, みっつ count general things. Hundreds include sound changes such as さんびゃく.",
        "りんごを{二|ふた}つください。",
        "Two apples, please.",
      ),
      g(
        "Time + に",
        "に marks a specified time, such as 七時に. Normally omit に after 今日, 明日, 毎日, and other relative time expressions. A duration uses 間 where appropriate: 二時間 means two hours.",
        "{七時半|しちじはん}に{起|お}きます。",
        "I get up at seven thirty.",
      ),
      g(
        "から・まで",
        "から marks a starting point and まで an ending point in time or space. 半 means half past the hour; 四時, 七時, and 九時 are よじ, しちじ, and くじ.",
        "{九時|くじ}から{五時|ごじ}までです。",
        "It is from nine to five.",
      ),
      g(
        "Dates & question counters",
        "Ask 何時 (なんじ) for an hour, いくら for a price, and いくつ for a number of things. Learn irregular dates as words: 一日ついたち, 二日ふつか, 三日みっか, 四日よっか, 十日とおか, 二十日はつか.",
        "{今日|きょう}は{五月|ごがつ}{三日|みっか}です。",
        "Today is May third.",
      ),
    ],
    grammarChecks: [
      q(
        "How is 三百 read?",
        "さんびゃく",
        ["さんひゃく", "さんぴゃく", "さんぜん"],
        "百 changes its sound after 三: 三百 is さんびゃく, while 六百 and 八百 become ろっぴゃく and はっぴゃく. さんぜん is 三千.",
      ),
      q(
        "Choose the natural time marker: 六時 ___ 起きます。",
        "に",
        ["を", "の", "が"],
        "A specific clock time such as 六時 takes に to mark when an action happens. Words such as 今日 and 毎日 normally do not need に.",
      ),
      q(
        "Complete the span: 九時 ___ 五時まで働きます。",
        "から",
        ["まで", "に", "で"],
        "から marks the starting point 九時 and まで the end point 五時, so the pair gives the whole working day.",
      ),
      q(
        "Which word means 'the second of the month'?",
        "二日",
        ["二時", "二時間", "二月"],
        "二日 is read ふつか and means the second of the month or two days. 二時 is two o'clock, 二時間 is two hours, and 二月 is February.",
      ),
    ],
    reading: p(
      "Library hours",
      "{図書館|としょかん}は{月曜日|げつようび}から{土曜日|どようび}まで{開|あ}いています。{時間|じかん}は{午前|ごぜん}{九時|くじ}から{午後|ごご}{六時|ろくじ}までです。{日曜日|にちようび}は{休|やす}みです。{本|ほん}は{一人|ひとり}{三冊|さんさつ}までです。",
      "The library is open Monday through Saturday, from 9 a.m. to 6 p.m. It is closed on Sunday. Each person may borrow up to three books.",
      q(
        "When is the library closed?",
        "Sunday",
        ["Monday", "Saturday", "Every afternoon"],
        "日曜日は休みです identifies the closed day; the other days are in the opening range.",
      ),
      q(
        "How many books can one person borrow?",
        "Up to three",
        ["Up to one", "Up to six", "As many as they like"],
        "一人三冊までです sets the limit: three books for each person, with まで marking the maximum.",
      ),
    ),
    listening: p(
      "A meeting time",
      "あした、{何時|なんじ}に{会|あ}いますか。{二時|にじ}はどうですか。すみません。{二時半|にじはん}はどうですか。はい、では{二時半|にじはん}に。",
      "What time shall we meet tomorrow? How about two? Sorry, how about two thirty? Yes, then at two thirty.",
      q(
        "What is the agreed time?",
        "2:30",
        ["2:00", "3:00", "1:30"],
        "The last reply confirms 二時半, replacing the first suggestion.",
      ),
      q(
        "Which time is turned down?",
        "2:00",
        ["2:30", "3:00", "1:30"],
        "すみません answers 二時はどうですか, declining two o'clock before 二時半 is suggested instead.",
      ),
    ),
    practice:
      "Read five prices and write your daily schedule with に. Practice all seven weekdays and the irregular dates aloud.",
    problems: problemSet(
      "Adding up times, prices & dates",
      "Read the numbers first, then the word that says what to do with them: 全部で asks for a total, おつり for the change, 何時間 for a length of time, and あと for how many days are left.",
      words(`全部で|ぜんぶで|in total; altogether
おつり|おつり|change (money you get back)
何時間|なんじかん|how many hours
あと|あと|more; still to go`),
      {
        text: "アルバイトは{午前|ごぜん}{9時|くじ}から{午後|ごご}{1時|いちじ}までです。{何時間|なんじかん}ですか。",
        translation:
          "The part-time job runs from 9 a.m. to 1 p.m. How many hours is that?",
        steps: [
          "から marks the start, 午前9時, and まで marks the end, 午後1時.",
          "午後1時 is 13:00, so count the hours from 9 to 13: 13 − 9 = 4.",
          "何時間 asks for a length of time, so the answer is 4時間 (よじかん), not a clock time.",
        ],
      },
      [
        wordProblem(
          "パンは120{円|えん}、ジュースは150{円|えん}です。パンを{2つ|ふたつ}とジュースを{1つ|ひとつ}{買|か}います。{全部|ぜんぶ}でいくらですか。",
          "Bread rolls are 120 yen and juice is 150 yen. I buy two rolls and one juice. How much is that altogether?",
          "390円",
          ["270円", "420円", "540円"],
          "全部で asks for the total. Two rolls cost 120 + 120 = 240円, and one juice adds 150円, so 240 + 150 = 390円.",
        ),
        wordProblem(
          "650{円|えん}の{本|ほん}を{買|か}って、1,000{円|えん}を{出|だ}しました。おつりはいくらですか。",
          "I bought a 650-yen book and handed over 1,000 yen. How much change do I get back?",
          "350円",
          ["450円", "250円", "1,650円"],
          "おつり is the money that comes back: the 1,000円 handed over minus the 650円 price, so 1,000 − 650 = 350円.",
        ),
        wordProblem(
          "{映画|えいが}は{午後|ごご}{2時|にじ}から{4時半|よじはん}までです。{何時間|なんじかん}ですか。",
          "The movie runs from 2 p.m. to 4:30. How many hours long is it?",
          "2時間半",
          ["2時間", "4時間半", "6時間半"],
          "から〜まで gives the span: 2時 to 4時 is 2時間, and 半 adds half an hour, so the movie lasts 2時間半.",
        ),
        wordProblem(
          "{今日|きょう}は{5月|ごがつ}{3日|みっか}です。テストは{5月|ごがつ}{10日|とおか}です。あと{何日|なんにち}ですか。",
          "Today is May 3. The test is on May 10. How many more days are there until the test?",
          "7日",
          ["8日", "6日", "13日"],
          "あと asks how many days are still to go: from 3日 to 10日 is 10 − 3 = 7, so the test is 7日 (なのか) away.",
        ),
      ],
    ),
  },
  {
    slug: "daily-routines",
    title: "Daily routines & movement",
    summary:
      "Use polite verbs to describe habits, completed actions, destinations, and transport.",
    vocabulary: words(`食べる|たべる|to eat
飲む|のむ|to drink
行く|いく|to go
帰る|かえる|to return home
起きる|おきる|to get up
寝る|ねる|to sleep
電車|でんしゃ|train
学校|がっこう|school`),
    grammar: [
      g(
        "ます・ません",
        "ます describes a polite habit or future action; ません negates it. Verb stems are learned with their groups: 食べる→食べます, 飲む→飲みます, する→します, 来る→来ます.",
        "{毎朝|まいあさ}、パンを{食|た}べます。",
        "I eat bread every morning.",
      ),
      g(
        "ました・ませんでした",
        "Use ました for a completed polite action and ませんでした for a negative past action. Japanese uses time words to distinguish habitual and future meanings of the nonpast.",
        "きのうはコーヒーを{飲|の}みませんでした。",
        "I did not drink coffee yesterday.",
      ),
      g(
        "を & action-place で",
        "を marks the object of an action and is pronounced o. で marks where an action happens. This differs from the location に used with existence verbs.",
        "{家|いえ}で{本|ほん}を{読|よ}みます。",
        "I read a book at home.",
      ),
      g(
        "に・へ・で・と",
        "に or へ marks a destination; へ is pronounced e. で marks transport, while と introduces a companion. Walking is normally expressed with 歩いて rather than 歩きで.",
        "{友達|ともだち}と{電車|でんしゃ}で{学校|がっこう}へ{行|い}きます。",
        "I go to school by train with a friend.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the polite form of 飲む: 毎朝お茶を ___。",
        "飲みます",
        ["飲むます", "飲まます", "飲みいます"],
        "飲む is a godan verb: its stem 飲み takes ます. 飲むます wrongly keeps the dictionary ending.",
      ),
      q(
        "Choose the polite past negative of 食べます.",
        "食べませんでした",
        ["食べませんです", "食べましたない", "食べないました"],
        "Replace ます with ませんでした to describe something you did not eat.",
      ),
      q(
        "Choose the pair: 家 ___ 本 ___ 読みます。 (I read a book at home.)",
        "で・を",
        ["を・で", "に・を", "へ・が"],
        "で marks 家 as the place where the reading happens, and を marks 本 as the thing being read.",
      ),
      q(
        "Mark transport: バス ___ 学校へ行きます。",
        "で",
        ["を", "が", "の"],
        "で identifies the means of transport, the bus.",
      ),
    ],
    reading: p(
      "A different morning",
      "いつも{七時|しちじ}に{起|お}きます。でも、きのうは{六時|ろくじ}に{起|お}きました。{家|いえ}でパンを{食|た}べました。それから、{友達|ともだち}と{学校|がっこう}へ{行|い}きました。いつもは{電車|でんしゃ}ですが、きのうはバスで{行|い}きました。",
      "I usually get up at seven, but yesterday I got up at six. I ate bread at home, then went to school with a friend. I usually take the train, but yesterday we went by bus.",
      q(
        "How did the writer go to school yesterday?",
        "By bus",
        ["By train", "On foot", "By bicycle"],
        "The contrast after ですが changes the usual train journey to yesterday's bus journey.",
      ),
      q(
        "What time did the writer get up yesterday?",
        "At six",
        ["At seven", "At eight", "At half past six"],
        "きのうは六時に起きました gives yesterday's time; いつも七時に起きます describes the usual morning.",
      ),
    ),
    listening: p(
      "After class",
      "きょうは{図書館|としょかん}へ{行|い}きますか。いいえ、{行|い}きません。{家|いえ}へ{帰|かえ}ります。うちで{日本語|にほんご}を{勉強|べんきょう}します。",
      "Are you going to the library today? No. I am going home. I will study Japanese at home.",
      q(
        "Where will the second speaker study?",
        "At home",
        ["At the library", "At school", "On the train"],
        "うちで日本語を勉強します gives the study location; the library plan was rejected.",
      ),
      q(
        "What will the second speaker study?",
        "Japanese",
        ["English", "Maths", "Music"],
        "日本語を勉強します names the subject: を marks 日本語 as what is being studied.",
      ),
    ),
    practice:
      "Describe yesterday and tomorrow using four different verbs. Include a companion, a destination, a transport method, and an action location.",
  },
  {
    slug: "places-existence",
    title: "Home, town & directions",
    summary:
      "Describe where things and people are and follow simple directions around town.",
    vocabulary: words(`駅|えき|station
銀行|ぎんこう|bank
郵便局|ゆうびんきょく|post office
部屋|へや|room
猫|ねこ|cat
上|うえ|above; on top
下|した|below; underneath
隣|となり|next to`),
    grammar: [
      g(
        "あります・います",
        "Use あります for inanimate things and います for people and animals. Introduce their location with に and the thing that exists with が.",
        "{部屋|へや}に{猫|ねこ}がいます。",
        "There is a cat in the room.",
      ),
      g(
        "Location nouns + の",
        "Connect a landmark to a position with の: 机の上, 駅の前, 家の後ろ. Add に when locating something there.",
        "{本|ほん}は{机|つくえ}の{上|うえ}にあります。",
        "The book is on the desk.",
      ),
      g(
        "ここ・そこ・あそこ・どこ",
        "These words refer to places: here, there near you, over there, and where. They can form a polite location sentence with です.",
        "{銀行|ぎんこう}はどこですか。あそこです。",
        "Where is the bank? It is over there.",
      ),
      g(
        "と & や for lists",
        "と lists the named items as a complete set in context. や gives representative examples and often pairs with など, meaning and so on.",
        "{駅|えき}の{前|まえ}に{銀行|ぎんこう}や{店|みせ}があります。",
        "There are places such as a bank and shops in front of the station.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the existence verb: 公園に犬が ___。",
        "います",
        ["あります", "ですます", "します"],
        "A dog is animate, so its existence uses います.",
      ),
      q(
        "Complete 'under the chair': 椅子 ___ 下",
        "の",
        ["を", "が", "も"],
        "の joins the landmark 椅子 to the position 下.",
      ),
      q(
        "Ask where the toilet is: トイレは ___ ですか。",
        "どこ",
        ["どれ", "どの", "だれ"],
        "どこ asks for a place. どれ asks which thing, どの needs a noun after it, and だれ asks who.",
      ),
      q(
        "Nothing else is in the bag. Complete: かばんの中に本 ___ ノートがあります。",
        "と",
        ["や", "も", "を"],
        "と lists the items as a complete set, so only the book and the notebook are in the bag. や would present them as examples.",
      ),
    ],
    reading: p(
      "Finding the classroom",
      "{教室|きょうしつ}は{二階|にかい}にあります。{階段|かいだん}の{右|みぎ}です。{教室|きょうしつ}の{中|なか}に{机|つくえ}が{六|むっ}つあります。{先生|せんせい}の{机|つくえ}は{窓|まど}の{前|まえ}です。{時計|とけい}はドアの{上|うえ}にあります。",
      "The classroom is on the second floor, to the right of the stairs. Inside are six desks. The teacher's desk is in front of the window. The clock is above the door.",
      q(
        "Where is the clock?",
        "Above the door",
        ["Under a desk", "In front of the window", "Beside the stairs"],
        "ドアの上 is the clock's location; the window describes the teacher's desk.",
      ),
      q(
        "How many desks are in the classroom?",
        "Six",
        ["Two", "Three", "Eight"],
        "机が六つあります counts the desks with the general counter: 六つ (むっつ) is six.",
      ),
    ),
    listening: p(
      "Near the station",
      "すみません、{郵便局|ゆうびんきょく}はどこですか。{駅|えき}の{左|ひだり}に{銀行|ぎんこう}がありますね。その{銀行|ぎんこう}の{隣|となり}です。ありがとうございます。",
      "Excuse me, where is the post office? There is a bank to the left of the station, right? It is next to that bank. Thank you.",
      q(
        "What is next to the post office?",
        "The bank",
        ["The school", "The park", "The library"],
        "その銀行の隣 identifies the bank as the landmark immediately beside the post office.",
      ),
      q(
        "Where is the bank?",
        "To the left of the station",
        [
          "To the right of the station",
          "Next to the school",
          "Inside the station",
        ],
        "駅の左に銀行があります places the bank on the station's left; the post office is next to that bank.",
      ),
    ),
    practice:
      "Draw a small map and describe five locations with の and に. Contrast an object that あります with an animal or person that います.",
  },
  {
    slug: "describing-preferences",
    title: "Descriptions & preferences",
    summary:
      "Use both adjective families, explain what you like, and compare familiar things.",
    vocabulary: words(`大きい|おおきい|big
小さい|ちいさい|small
新しい|あたらしい|new
古い|ふるい|old
静か|しずか|quiet
好き|すき|liked; favorite
暑い|あつい|hot (weather)
寒い|さむい|cold (weather)`),
    grammar: [
      g(
        "い-adjectives",
        "Put an い-adjective directly before a noun. For its negative change い to くない, and for past change it to かった. いい is irregular: よくない and よかった.",
        "この{部屋|へや}は{大|おお}きくないです。",
        "This room is not big.",
      ),
      g(
        "な-adjectives",
        "な-adjectives take な before a noun, but です at the end of a polite sentence. Negate with じゃありません and use でした for the past. きれい is a な-adjective despite ending in い.",
        "{静|しず}かな{町|まち}です。",
        "It is a quiet town.",
      ),
      g(
        "好き・嫌い・上手 + が",
        "These describe a preference or ability, rather than a transitive action. Mark the thing liked or done well with が. Use とても for very and あまり + negative for not very.",
        "わたしは{猫|ねこ}が{好|す}きです。",
        "I like cats.",
      ),
      g(
        "より・ほうが・いちばん",
        "AよりBのほうが compares B against A. の中で〜がいちばん identifies the top member of a set. Adjectives do not change form to mean more.",
        "バスより{電車|でんしゃ}のほうが{速|はや}いです。",
        "The train is faster than the bus.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the past of 寒いです.",
        "寒かったです",
        ["寒いでした", "寒くでした", "寒かったでした"],
        "An い-adjective forms its own past with かった; です remains unchanged.",
      ),
      q(
        "Choose the modifier: ___ 部屋です。 (a quiet room)",
        "静かな",
        ["静かい", "静かの", "静かです"],
        "静か is a な-adjective, so it takes な before 部屋.",
      ),
      q(
        "Mark what is liked: わたしは音楽 ___ 好きです。",
        "が",
        ["を", "で", "に"],
        "好き describes a preference rather than an action, so the thing liked, 音楽, takes が.",
      ),
      q(
        "Compare: 電車はバス ___ 速いです。 (The train is faster than the bus.)",
        "より",
        ["ほう", "から", "まで"],
        "より marks the standard of comparison: バスより速い means faster than the bus.",
      ),
    ],
    reading: p(
      "Two cafés",
      "{駅|えき}の{前|まえ}にカフェが{二|ふた}つあります。さくらカフェは{大|おお}きいですが、いつもにぎやかです。もりカフェは{小|ちい}さくて{静|しず}かです。わたしは{本|ほん}を{読|よ}みますから、もりカフェのほうが{好|す}きです。",
      "There are two cafés in front of the station. Sakura Café is big but always lively. Mori Café is small and quiet. I read books, so I prefer Mori Café.",
      q(
        "Why does the writer prefer Mori Café?",
        "It is quiet for reading",
        ["It is bigger", "It is cheaper", "It is nearer the station"],
        "The writer links reading to a preference for the quiet café. Price is not mentioned.",
      ),
      q(
        "What is Sakura Café like?",
        "Big and always lively",
        ["Small and quiet", "Big and quiet", "Small and lively"],
        "さくらカフェは大きいですが、いつもにぎやかです: it is big, and が adds that it is always lively.",
      ),
    ),
    listening: p(
      "Favorite season",
      "どの{季節|きせつ}がいちばん{好|す}きですか。{夏|なつ}は{暑|あつ}いですから、あまり{好|す}きじゃありません。{春|はる}がいちばん{好|す}きです。",
      "Which season do you like best? Summer is hot, so I do not like it very much. I like spring best.",
      q(
        "Which season does the speaker like best?",
        "Spring",
        ["Summer", "Autumn", "Winter"],
        "春がいちばん好きです is the preference; summer is mentioned as a contrast.",
      ),
      q(
        "Why doesn't the speaker like summer very much?",
        "It is hot",
        ["It is cold", "It is rainy", "It is too short"],
        "夏は暑いですから gives the reason with から before あまり好きじゃありません.",
      ),
    ),
    practice:
      "Compare two places you know. Use one い-adjective, one な-adjective, a negative, and a sentence with ほうが.",
  },
  {
    slug: "shopping-requests",
    title: "Shopping & polite requests",
    summary:
      "Order food, count people and objects, and ask someone to do something with the て-form.",
    vocabulary: words(`水|みず|water
お茶|おちゃ|tea
魚|さかな|fish
肉|にく|meat
野菜|やさい|vegetables
買う|かう|to buy
待つ|まつ|to wait
安い|やすい|inexpensive`),
    grammar: [
      g(
        "て-form: verb groups",
        "For ichidan verbs remove る and add て: 食べて. For godan verbs: う・つ・る→って, む・ぶ・ぬ→んで, く→いて, ぐ→いで, す→して. 行く is exceptional: 行って. する→して and 来る→来て (きて).",
        "ここで{待|ま}ってください。",
        "Please wait here.",
      ),
      g(
        "〜てください",
        "Add ください to the て-form for a polite request. For an item rather than an action, use noun + をください. A request can be polite without being suitable for every very formal situation.",
        "お{茶|ちゃ}をください。",
        "Tea, please.",
      ),
      g(
        "Counters in a sentence",
        "A quantity usually follows the noun and particle: 本を二冊. 人 counts people, with irregular 一人ひとり and 二人ふたり. 枚 counts flat objects; 本 counts long objects and changes pronunciation in 一本いっぽん.",
        "{切手|きって}を{三枚|さんまい}ください。",
        "Three stamps, please.",
      ),
      g(
        "だけ & も with quantities",
        "だけ limits a quantity to only. も can emphasize that a quantity is surprisingly large. Quantity words normally do not take を themselves when the object is already marked.",
        "{水|みず}を{一|ひと}つだけください。",
        "Just one water, please.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the request form of 飲む: 水を ___ ください。",
        "飲んで",
        ["飲みて", "飲って", "飲むて"],
        "A godan verb ending in む changes to んで in the て-form.",
      ),
      q(
        "Ask for an item, not an action: 切手 ___ ください。",
        "を",
        ["て", "で", "が"],
        "An item takes noun + をください. The て-form + ください is for asking someone to do an action.",
      ),
      q(
        "How do you read 二人?",
        "ふたり",
        ["ににん", "にひと", "ふたつ"],
        "The counters for one and two people are irregular: ひとり and ふたり.",
      ),
      q(
        "Say 'just one': 水を一つ ___ ください。",
        "だけ",
        ["も", "まで", "から"],
        "だけ limits the quantity to only one. も after a number would stress that the amount is large.",
      ),
    ],
    reading: p(
      "A lunch order",
      "お{弁当|べんとう}は{魚|さかな}と{肉|にく}の{二種類|にしゅるい}です。{魚|さかな}は{六百円|ろっぴゃくえん}、{肉|にく}は{七百円|ななひゃくえん}です。どちらも{野菜|やさい}があります。お{茶|ちゃ}は{百円|ひゃくえん}です。わたしは{魚|さかな}のお{弁当|べんとう}とお{茶|ちゃ}を{買|か}います。",
      "There are fish and meat lunch boxes. Fish costs 600 yen and meat 700 yen. Both have vegetables. Tea is 100 yen. I will buy a fish lunch box and tea.",
      q(
        "How much will the writer pay?",
        "700 yen",
        ["600 yen", "800 yen", "1,300 yen"],
        "The selected fish lunch is 600 yen and tea is 100 yen, making 700 yen.",
      ),
      q(
        "What comes with both lunch boxes?",
        "Vegetables",
        ["Rice balls", "Tea", "Fruit"],
        "どちらも野菜があります: どちらも means both, so each lunch box includes vegetables. The tea costs extra.",
      ),
    ),
    listening: p(
      "At the café counter",
      "コーヒーを{二|ふた}つください。{温|あたた}かいコーヒーですか。はい。それから、サンドイッチを{一|ひと}つください。{少|すこ}し{待|ま}ってください。",
      "Two coffees, please. Hot coffee? Yes. And one sandwich, please. Please wait a moment.",
      q(
        "What is the order?",
        "Two hot coffees and one sandwich",
        [
          "One coffee and two sandwiches",
          "Two cold coffees",
          "One hot coffee only",
        ],
        "The customer confirms hot coffee, orders two, and then adds one sandwich.",
      ),
      q(
        "What is the customer asked to do at the end?",
        "Wait a little",
        ["Pay now", "Choose a size", "Sit down"],
        "少し待ってください uses 〜てください to ask the customer to wait a little while the order is made.",
      ),
    ),
    practice:
      "Conjugate 買う, 待つ, 飲む, 書く, 話す, 食べる, する, and 来る into the て-form. Use three of them in requests.",
  },
  {
    slug: "invitations-wishes",
    title: "Invitations, wishes & outings",
    summary:
      "Invite a friend, describe what you want, and explain the purpose of a journey.",
    vocabulary: words(`映画|えいが|movie
音楽|おんがく|music
公園|こうえん|park
週末|しゅうまつ|weekend
見る|みる|to watch; to see
聞く|きく|to listen; to ask
遊ぶ|あそぶ|to play; to spend time
忙しい|いそがしい|busy`),
    grammar: [
      g(
        "〜ませんか",
        "A negative question can invite someone politely. It leaves room for them to decline. The reply can accept with いいですね or explain a scheduling problem.",
        "{一緒|いっしょ}に{映画|えいが}を{見|み}ませんか。",
        "Would you like to watch a movie together?",
      ),
      g(
        "〜ましょう・〜ましょうか",
        "Replace ます with ましょう to suggest doing something together. ましょうか can offer help or ask whether to proceed, depending on context.",
        "{公園|こうえん}へ{行|い}きましょう。",
        "Let's go to the park.",
      ),
      g(
        "〜たい & ほしい",
        "Add たい to the ます-stem to express your desire to act; it conjugates like an い-adjective. Use noun + がほしい for an object you want. Avoid assuming somebody else's unspoken desires.",
        "{日本|にほん}へ{行|い}きたいです。",
        "I want to go to Japan.",
      ),
      g(
        "Verb stem + に行く",
        "A ます-stem followed by に and a movement verb expresses purpose. Compare destination に in 学校に行く with purpose に in 勉強しに行く.",
        "{音楽|おんがく}を{聞|き}きに{行|い}きます。",
        "I am going to listen to music.",
      ),
    ],
    grammarChecks: [
      q(
        "Invite a friend politely: 一緒に昼ご飯を ___。",
        "食べませんか",
        ["食べません", "食べたいですか", "食べましたか"],
        "A negative question, 〜ませんか, is a polite invitation. 食べません on its own only says you do not eat.",
      ),
      q(
        "Offer help: 荷物を ___。 (Shall I carry your bags?)",
        "持ちましょうか",
        ["持ちませんか", "持ちたいです", "持ちましたか"],
        "〜ましょうか offers to do something for the listener. 持ちませんか would invite them to do the carrying.",
      ),
      q(
        "Express a desire to read: 本を ___ です。",
        "読みたい",
        ["読むたい", "読んでたいです", "読またい"],
        "Remove ます from 読みます to get the stem 読み, then add たい. 読みたい means want to read; 読むたい incorrectly keeps the dictionary ending.",
      ),
      q(
        "Express purpose: パンを ___ に行きます。",
        "買い",
        ["買う", "買って", "買った"],
        "買い is the verb stem. 買いに行く means go to buy.",
      ),
    ],
    reading: p(
      "Weekend messages",
      "{土曜日|どようび}に{映画|えいが}を{見|み}ませんか。{新|あたら}しい{映画|えいが}です。——すみません。{土曜日|どようび}は{忙|いそが}しいです。{日曜日|にちようび}は{時間|じかん}があります。——では、{日曜日|にちようび}の{午後|ごご}に{行|い}きましょう。{駅|えき}で{会|あ}いましょう。",
      "Would you like to see a new movie on Saturday? — Sorry, I am busy on Saturday. I have time on Sunday. — Then let's go on Sunday afternoon. Let's meet at the station.",
      q(
        "What plan do the messages settle on?",
        "A movie on Sunday afternoon",
        [
          "A movie on Saturday morning",
          "Music on Sunday evening",
          "Shopping on Saturday",
        ],
        "The second message rules out Saturday; the final one confirms Sunday afternoon.",
      ),
      q(
        "Where will they meet?",
        "At the station",
        ["At the cinema", "At the park", "At home"],
        "駅で会いましょう closes the messages: で marks the station as the place where they will meet.",
      ),
    ),
    listening: p(
      "An offer to help",
      "{荷物|にもつ}が{多|おお}いですね。{持|も}ちましょうか。ありがとうございます。この{小|ちい}さいかばんをおねがいします。{大|おお}きいかばんはわたしが{持|も}ちます。",
      "You have a lot of luggage. Shall I carry some? Thank you. This small bag, please. I will carry the big bag.",
      q(
        "Which bag should the helper carry?",
        "The small bag",
        ["The big bag", "Both bags", "Neither bag"],
        "この小さいかばんをお願いします accepts help with the small bag only.",
      ),
      q(
        "Who will carry the big bag?",
        "The person with the luggage",
        ["The helper", "Both of them", "Nobody"],
        "大きいかばんはわたしが持ちます: the person being helped says they will carry the big bag themselves.",
      ),
    ),
    practice:
      "Write an invitation and a polite reply that changes the day. Add something you want to do and a purpose-of-movement sentence.",
  },
  {
    slug: "connected-actions",
    title: "Connected actions & ongoing states",
    summary:
      "Connect actions, describe what is happening now, and ask about permission.",
    vocabulary: words(`開ける|あける|to open something
閉める|しめる|to close something
読む|よむ|to read
書く|かく|to write
電話|でんわ|telephone; phone call
窓|まど|window
写真|しゃしん|photograph
今|いま|now`),
    grammar: [
      g(
        "て-form sequences",
        "Join actions with a て-form; the final verb supplies tense and politeness. Use てから when it is important that the first action finishes before the next.",
        "{朝|あさ}ごはんを{食|た}べてから、{出|で}かけます。",
        "I go out after eating breakfast.",
      ),
      g(
        "〜ています",
        "The て-form + います can describe an ongoing action or an enduring result. 読んでいます is reading; 結婚しています is being married. Interpret the state according to the verb.",
        "{今|いま}、{本|ほん}を{読|よ}んでいます。",
        "I am reading a book now.",
      ),
      g(
        "〜てもいいです",
        "The て-form + もいい asks or grants permission. The question 〜てもいいですか is useful before taking an action that affects another person.",
        "{窓|まど}を{開|あ}けてもいいですか。",
        "May I open the window?",
      ),
      g(
        "〜てはいけません",
        "The て-form + はいけません prohibits an action. In signs and instructions it states a rule; it is stronger than simply recommending against something.",
        "ここで{写真|しゃしん}を{撮|と}ってはいけません。",
        "You must not take photos here.",
      ),
    ],
    grammarChecks: [
      q(
        "Order two actions: 手を ___、ご飯を食べます。 (I eat after washing my hands.)",
        "洗ってから",
        ["洗うから", "洗いてから", "洗ったから"],
        "〜てから means after doing: 洗ってから puts washing first. 洗うから would give a reason instead.",
      ),
      q(
        "Say 'I am writing': 手紙を ___。",
        "書いています",
        ["書きています", "書くています", "書いたいます"],
        "書く forms 書いて, which combines with います for an ongoing action.",
      ),
      q(
        "Ask permission to sit: ここに座って ___ ですか。",
        "もいい",
        ["はいけません", "たい", "ません"],
        "〜てもいいですか asks whether an action is allowed.",
      ),
      q(
        "State a rule: ここでたばこを ___。 (You must not smoke here.)",
        "吸ってはいけません",
        ["吸ってもいいです", "吸ってください", "吸っています"],
        "〜てはいけません prohibits the action. 〜てもいいです would allow it, and 〜てください would ask for it.",
      ),
    ],
    reading: p(
      "Study room rules",
      "この{部屋|へや}では{本|ほん}を{読|よ}んだり、{勉強|べんきょう}したりできます。{水|みず}を{飲|の}んでもいいです。でも、{食|た}べ{物|もの}を{食|た}べてはいけません。{電話|でんわ}は{外|そと}でおねがいします。{使|つか}ってから、{椅子|いす}を{元|もと}の{場所|ばしょ}に{戻|もど}してください。",
      "You can read or study in this room. Drinking water is allowed, but eating food is not. Please make phone calls outside. After using the room, return the chairs to their original places.",
      q(
        "What is permitted inside the room?",
        "Drinking water",
        ["Eating lunch", "Making phone calls", "Leaving chairs anywhere"],
        "水を飲んでもいいです grants permission. Food and phone calls are restricted.",
      ),
      q(
        "What should you do after using the room?",
        "Put the chairs back",
        ["Open the windows", "Turn off your phone", "Clean the desks"],
        "使ってから、椅子を元の場所に戻してください asks you to return the chairs once you have finished.",
      ),
    ),
    listening: p(
      "Before leaving",
      "もう{出|で}かけますか。いいえ、{今|いま}メールを{書|か}いています。メールを{書|か}いてから、{出|で}かけます。あと{五分|ごふん}{待|ま}ってください。",
      "Are you leaving now? No, I am writing an email. I will leave after writing it. Please wait five more minutes.",
      q(
        "What must happen before the speaker leaves?",
        "Finish writing the email",
        ["Make a phone call", "Eat breakfast", "Read a book"],
        "メールを書いてから establishes the necessary order.",
      ),
      q(
        "How much longer does the speaker ask the listener to wait?",
        "Five more minutes",
        ["Fifteen minutes", "One hour", "Until tomorrow"],
        "あと五分待ってください: あと adds five more minutes before they leave.",
      ),
    ),
    practice:
      "Describe three things happening around you. Write two permissions and two prohibitions for an imaginary classroom.",
  },
  {
    slug: "plain-forms-rules",
    title: "Plain forms, ability & rules",
    summary:
      "Recognize dictionary and negative forms and express ability and everyday obligations.",
    vocabulary: words(`泳ぐ|およぐ|to swim
話す|はなす|to speak
運転|うんてん|driving
薬|くすり|medicine
宿題|しゅくだい|homework
忘れる|わすれる|to forget
入る|はいる|to enter
休む|やすむ|to rest; to be absent`),
    grammar: [
      g(
        "Dictionary & ない forms",
        "Ichidan negatives replace る with ない: 食べない. Godan verbs change the final u sound to a + ない: 飲まない, 話さない; う becomes わない. Exceptions are しない, 来ない (こない), and ある→ない.",
        "きょうは{学校|がっこう}へ{行|い}かない。",
        "I am not going to school today. (Plain style.)",
      ),
      g(
        "〜ないでください",
        "Attach でください to a negative plain verb to ask someone not to do something. This is a request; てはいけません directly states a prohibition.",
        "{宿題|しゅくだい}を{忘|わす}れないでください。",
        "Please do not forget your homework.",
      ),
      g(
        "〜なければなりません",
        "Remove the final い of ない and add ければなりません to express obligation. A common alternative is なくてはいけません. These double-negative patterns mean must do.",
        "{薬|くすり}を{飲|の}まなければなりません。",
        "I must take medicine.",
      ),
      g(
        "Dictionary form + ことができます",
        "Nominalize a verb with こと, then add ができます to express ability. Nouns for activities can use ができます directly. This construction does not use the ます-stem.",
        "{日本語|にほんご}を{話|はな}すことができます。",
        "I can speak Japanese.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the negative plain form of 買う.",
        "買わない",
        ["買あない", "買うない", "買いない"],
        "The final う becomes わ before ない.",
      ),
      q(
        "Ask someone not to go yet: まだ ___ ください。",
        "行かないで",
        ["行かなくて", "行って", "行かない"],
        "〜ないでください asks someone not to do something: でください attaches to the plain negative 行かない.",
      ),
      q(
        "Say 'I must go to school': 学校へ ___。",
        "行かなければなりません",
        ["行かなくてもいいです", "行ってはいけません", "行かないでください"],
        "〜なければなりません expresses obligation. 行かなくてもいいです would say you do not have to go.",
      ),
      q(
        "Complete the ability expression: 漢字を ___ ことができます。",
        "読む",
        ["読みます", "読み", "読んで"],
        "A dictionary-form verb precedes ことができます.",
      ),
    ],
    reading: p(
      "Swimming class",
      "{日曜日|にちようび}に{水泳|すいえい}のクラスがあります。{泳|およ}ぐことができない{人|ひと}も{参加|さんか}できます。{九時|くじ}までに{来|き}てください。プールに{入|はい}る{前|まえ}にシャワーを{浴|あ}びなければなりません。タオルを{忘|わす}れないでください。",
      "There is a swimming class on Sunday. People who cannot swim can also participate. Please arrive by nine. You must shower before entering the pool. Do not forget a towel.",
      q(
        "Who may join the class?",
        "People who cannot swim as well as swimmers",
        [
          "Only experienced swimmers",
          "Only people arriving after nine",
          "Only people without towels",
        ],
        "泳ぐことができない人も参加できます explicitly includes beginners.",
      ),
      q(
        "What must you do before entering the pool?",
        "Take a shower",
        ["Buy a ticket", "Eat lunch", "Put on a hat"],
        "プールに入る前にシャワーを浴びなければなりません states the obligation with 〜なければなりません.",
      ),
    ),
    listening: p(
      "A reminder",
      "あしたのクラスには{辞書|じしょ}を{持|も}ってきてください。{宿題|しゅくだい}は{金曜日|きんようび}までですから、あした{出|だ}さなくてもいいです。",
      "Please bring a dictionary to tomorrow's class. Homework is due Friday, so you do not have to submit it tomorrow.",
      q(
        "What is required tomorrow?",
        "Bring a dictionary",
        ["Submit the homework", "Buy a towel", "Miss the class"],
        "The dictionary is requested tomorrow; なくてもいい means homework submission tomorrow is unnecessary.",
      ),
      q(
        "When is the homework due?",
        "By Friday",
        ["Tomorrow", "By Monday", "Next month"],
        "宿題は金曜日までです: まで marks Friday as the deadline, which is why it need not be handed in tomorrow.",
      ),
    ),
    practice:
      "Make a dictionary/ます/ない chart for eight verbs. Describe two abilities, two obligations, and one request not to do something.",
  },
  {
    slug: "past-and-experience",
    title: "Past events & experiences",
    summary:
      "Build the plain past, describe experiences, and connect nouns to short modifying clauses.",
    vocabulary: words(`旅行|りょこう|trip; travel
去年|きょねん|last year
海|うみ|sea
山|やま|mountain
登る|のぼる|to climb
作る|つくる|to make
会う|あう|to meet
楽しい|たのしい|enjoyable`),
    grammar: [
      g(
        "Plain past: た-form",
        "The た-form follows the て-form sound changes with た instead of て and だ instead of で: 書いた, 飲んだ, 買った. Negative past changes ない to なかった.",
        "きのう、{友達|ともだち}に{会|あ}った。",
        "I met a friend yesterday.",
      ),
      g(
        "〜たことがあります",
        "A た-form + ことがあります describes an experience at some unspecified earlier time. Use an ordinary past sentence for a specific event such as yesterday's lunch.",
        "{日本|にほん}へ{行|い}ったことがあります。",
        "I have been to Japan.",
      ),
      g(
        "〜たり〜たりします",
        "Use た-form + り to give representative activities, then finish with します. The final する supplies the tense; the listed activities are examples rather than a strict sequence.",
        "{本|ほん}を{読|よ}んだり、{音楽|おんがく}を{聞|き}いたりしました。",
        "I did things such as reading books and listening to music.",
      ),
      g(
        "Clauses before nouns",
        "Put a plain-form clause directly before the noun it describes. Japanese does not insert an English-style relative pronoun such as which. 時, 前, and 後 can also follow modifying clauses.",
        "きのう{買|か}った{本|ほん}を{読|よ}みます。",
        "I will read the book I bought yesterday.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the past of 飲む.",
        "飲んだ",
        ["飲った", "飲いた", "飲みた"],
        "む verbs use んだ in the plain past.",
      ),
      q(
        "Say 'I have eaten sushi before': すしを ___ ことがあります。",
        "食べた",
        ["食べる", "食べて", "食べます"],
        "An experience uses the た-form: 食べたことがあります. With the dictionary form, 食べることがあります means you sometimes eat it.",
      ),
      q(
        "Which sentence lists example activities rather than a fixed order?",
        "本を読んだり、音楽を聞いたりします",
        [
          "本を読んでから、音楽を聞きます",
          "本を読んで、音楽を聞きます",
          "本を読みますから、音楽を聞きます",
        ],
        "〜たり〜たりします gives representative activities. The て-form and てから describe one action after the other.",
      ),
      q(
        "Complete 'the photograph I took yesterday': きのう ___ 写真",
        "撮った",
        ["撮りましたの", "撮りますの", "撮り"],
        "The plain past directly modifies 写真; no の or polite ending is inserted.",
      ),
    ],
    reading: p(
      "A first mountain trip",
      "{去年|きょねん}、{友達|ともだち}と{山|やま}へ{行|い}きました。それまで{山|やま}に{登|のぼ}ったことがありませんでした。{朝|あさ}は{寒|さむ}かったですが、{昼|ひる}は{暖|あたた}かかったです。{写真|しゃしん}を{撮|と}ったり、お{弁当|べんとう}を{食|た}べたりしました。また{行|い}きたいです。",
      "Last year I went to a mountain with friends. Before that I had never climbed a mountain. It was cold in the morning but warm at noon. We took photos and ate lunch. I want to go again.",
      q(
        "What was new for the writer?",
        "Climbing a mountain",
        [
          "Eating a lunch box",
          "Taking any photograph",
          "Meeting those friends",
        ],
        "それまで山に登ったことがありませんでした means there had been no previous mountain-climbing experience.",
      ),
      q(
        "What was the weather like at noon?",
        "Warm",
        ["Cold", "Rainy", "Windy"],
        "朝は寒かったですが、昼は暖かかったです: が contrasts the cold morning with a warm noon.",
      ),
    ),
    listening: p(
      "The weekend meal",
      "{週末|しゅうまつ}は{何|なに}をしましたか。{友達|ともだち}がうちに{来|き}ました。{一緒|いっしょ}にカレーを{作|つく}って、{食|た}べました。レストランには{行|い}きませんでした。",
      "What did you do on the weekend? A friend came to my home. We made and ate curry together. We did not go to a restaurant.",
      q(
        "Where did they eat?",
        "At the speaker's home",
        ["At a restaurant", "At school", "On a mountain"],
        "The friend came to the speaker's home, where they cooked; the restaurant visit is explicitly negated.",
      ),
      q(
        "What did they make?",
        "Curry",
        ["Sushi", "A cake", "Sandwiches"],
        "一緒にカレーを作って、食べました: they made curry together and then ate it.",
      ),
    ),
    practice:
      "Describe an actual past day and a lifetime experience separately. Add a clause describing a thing you bought, read, or made.",
  },
  {
    slug: "everyday-greetings",
    title: "Greetings through the day",
    summary:
      "Move through one ordinary day in Japanese: the greeting for each part of it, the phrases said at the door, and すみません for thanks, an apology, or attention.",
    vocabulary: words(`朝|あさ|morning
昼|ひる|midday
晩|ばん|evening
家族|かぞく|family
元気|げんき|well; cheerful
今日|きょう|today
明日|あした|tomorrow
少し|すこし|a little`),
    grammar: [
      g(
        "Greetings for each part of the day",
        "おはようございます belongs to the morning, こんにちは to the middle of the day, and こんばんは to the evening. With family and close friends the shorter おはよう is enough. These are fixed phrases, so the は written inside こんにちは and こんばんは is still pronounced wa.",
        "こんばんは。{今日|きょう}はさむいですね。",
        "Good evening. It is cold today, isn't it?",
      ),
      g(
        "いってきます & ただいま",
        "Four phrases come in pairs at the door. The person going out says いってきます and the person staying answers いってらっしゃい. The person coming back says ただいま and is welcomed with おかえりなさい. Learn each phrase together with its reply rather than on its own.",
        "いってきます。{六時|ろくじ}に{帰|かえ}ります。",
        "I'm off. I will be back at six.",
      ),
      g(
        "すみません: thanks, apology & attention",
        "すみません apologises, thanks someone for the trouble they took, and calls a stranger's attention. ありがとうございます only thanks, and ごめんなさい only apologises and sounds more personal. When you are not sure which one fits, すみません is the safe choice.",
        "すみません、ちょっといいですか。",
        "Excuse me, do you have a moment?",
      ),
      g(
        "Sentence-final ね & よ",
        "ね invites the listener to agree about something you both notice, and よ tells them something they may not know yet. Leaving both off sounds flat rather than rude, but using よ where ね belongs can sound as though you are correcting the listener.",
        "{明日|あした}は{雨|あめ}ですよ。",
        "It is going to rain tomorrow, you know.",
      ),
    ],
    grammarChecks: [
      q(
        "Which greeting fits the evening?",
        "こんばんは",
        ["おはようございます", "こんにちは", "おやすみなさい"],
        "こんばんは greets someone in the evening; おやすみなさい is said before going to sleep, not on meeting.",
      ),
      q(
        "You are leaving the house. What do you say?",
        "いってきます",
        ["ただいま", "おかえりなさい", "いってらっしゃい"],
        "The person going out says いってきます, and the person staying behind answers いってらっしゃい.",
      ),
      q(
        "You want a shop assistant's attention. What do you say?",
        "すみません",
        ["ごめんなさい", "ありがとうございます", "おやすみなさい"],
        "すみません calls a stranger's attention as well as apologising and thanking. ごめんなさい only apologises.",
      ),
      q(
        "Tell a friend something they may not know: 明日はテストです ___。",
        "よ",
        ["ね", "か", "を"],
        "よ gives the listener new information. ね would assume they already know and invite them to agree.",
      ),
    ],
    reading: p(
      "One day at home",
      "{朝|あさ}、{家族|かぞく}に「おはよう」と{言|い}います。{学校|がっこう}へ{行|い}くとき、「いってきます」と{言|い}います。{母|はは}は「いってらっしゃい」と{言|い}います。{夕方|ゆうがた}、うちに{帰|かえ}って「ただいま」と{言|い}います。{晩|ばん}は「おやすみなさい」と{言|い}って、{寝|ね}ます。",
      "In the morning I say “good morning” to my family. When I leave for school I say “I'm off.” My mother says “have a good day.” In the evening I come home and say “I'm back.” At night I say “good night” and go to sleep.",
      q(
        "What does the writer's mother say at the door?",
        "いってらっしゃい",
        ["いってきます", "ただいま", "おやすみなさい"],
        "いってきます is said by the person leaving; the mother stays at home, so she answers いってらっしゃい.",
      ),
      q(
        "What does the writer say on coming home?",
        "ただいま",
        ["おかえりなさい", "いってきます", "おはよう"],
        "うちに帰って「ただいま」と言います: the person coming back says ただいま, and おかえりなさい is the reply.",
      ),
    ),
    listening: p(
      "Meeting a neighbour",
      "こんにちは。おひさしぶりです。お{元気|げんき}ですか。はい、{元気|げんき}です。すみません、{少|すこ}しいそいでいます。また{明日|あした}。",
      "Hello. It has been a while. How are you? Yes, I'm well. Sorry, I'm in a bit of a hurry. See you tomorrow.",
      q(
        "Why is the conversation short?",
        "The speaker is in a hurry",
        [
          "The speaker feels unwell",
          "The speaker does not know the neighbour",
          "The neighbour is leaving town",
        ],
        "少しいそいでいます gives the reason; the same speaker answers 元気です, so health is not the problem.",
      ),
      q(
        "When will they see each other next?",
        "Tomorrow",
        ["Tonight", "Next week", "This afternoon"],
        "また明日 at the end means see you tomorrow: また is again and 明日 is tomorrow.",
      ),
    ),
    practice:
      "Say the greeting for each part of one day out loud, then match いってきます, いってらっしゃい, ただいま, and おかえりなさい to the person who says each one.",
  },
  {
    slug: "home-and-meals",
    title: "At home and at the table",
    summary:
      "Sit down to a meal in Japanese: name what is on the table, offer and decline politely, and say the set phrases that open and close every meal.",
    vocabulary: words(`朝ご飯|あさごはん|breakfast
昼ご飯|ひるごはん|lunch
晩ご飯|ばんごはん|dinner
台所|だいどころ|kitchen
野菜|やさい|vegetables
魚|さかな|fish
お茶|おちゃ|green tea
皿|さら|plate`),
    grammar: [
      g(
        "いただきます & ごちそうさまでした",
        "いただきます is said before eating and ごちそうさまでした after finishing. Both thank everyone behind the meal, not only the person who cooked it, so they are used at home as well as in a restaurant. Their form never changes with the speaker or the food.",
        "いただきます。この{魚|さかな}はおいしいです。",
        "Thank you for the meal. This fish is delicious.",
      ),
      g(
        "Offering with いかがですか",
        "いかがですか offers something politely and is the polite partner of どうですか. Accept it with はい、いただきます and decline it gently with いいえ、けっこうです。A flat いりません is grammatical but sounds blunt at somebody else's table.",
        "お{茶|ちゃ}はいかがですか。",
        "Would you like some tea?",
      ),
      g(
        "もう & まだ",
        "もう with a past verb says something is already finished, and まだ with a negative says it has not happened yet. もう{食|た}べましたか is answered with はい、もう{食|た}べました or with the very common short reply いいえ、まだです。",
        "もう{昼|ひる}ご{飯|はん}を{食|た}べましたか。",
        "Have you already had lunch?",
      ),
      g(
        "どうぞ & どうも",
        "どうぞ offers or invites: take one, go ahead, please come in. どうも is a light thank-you on its own and also strengthens ありがとうございます. At a table the two often answer each other, one person offering and the other thanking.",
        "どうぞ、{食|た}べてください。",
        "Please, go ahead and eat.",
      ),
    ],
    grammarChecks: [
      q(
        "You have just finished eating. What do you say?",
        "ごちそうさまでした",
        ["いただきます", "いってきます", "おやすみなさい"],
        "ごちそうさまでした is said after a meal; いただきます is said before you start eating.",
      ),
      q(
        "Which reply politely declines more tea?",
        "いいえ、けっこうです",
        ["はい、いただきます", "もういちどおねがいします", "どういたしまして"],
        "けっこうです declines what is being offered, while いただきます accepts it.",
      ),
      q(
        "Choose the natural answer: もう晩ご飯を食べましたか。 — いいえ、___。",
        "まだです",
        ["もうです", "まだでした", "もうありません"],
        "まだです is the standard short answer for something that has not happened yet.",
      ),
      q(
        "You hand someone a cup of tea. Which word offers it?",
        "どうぞ",
        ["どうも", "どうして", "どれ"],
        "どうぞ offers something or invites someone to go ahead. どうも is the light thank-you that answers it.",
      ),
    ],
    reading: p(
      "Dinner at home",
      "{今日|きょう}の{晩|ばん}ご{飯|はん}は{魚|さかな}と{野菜|やさい}です。{母|はは}が{台所|だいどころ}で{作|つく}りました。わたしは{皿|さら}をならべました。みんなで「いただきます」と{言|い}ってから、{食|た}べました。{父|ちち}は「この{魚|さかな}はおいしいですね」と{言|い}いました。",
      "Today's dinner is fish and vegetables. My mother made it in the kitchen. I set out the plates. We all said “itadakimasu” and then ate. My father said, “This fish is delicious, isn't it?”",
      q(
        "What did the writer do before the meal?",
        "Set out the plates",
        ["Cooked the fish", "Bought the vegetables", "Made the tea"],
        "皿をならべました says the writer laid out the plates; the mother did the cooking.",
      ),
      q(
        "What did the father say about the fish?",
        "It is delicious",
        ["It is too salty", "It is small", "It is cold"],
        "父は「この魚はおいしいですね」と言いました: おいしい means delicious, and ね invites agreement.",
      ),
    ),
    listening: p(
      "Offering a second helping",
      "お{茶|ちゃ}はいかがですか。ありがとうございます。いただきます。ケーキもどうぞ。いいえ、けっこうです。もうおなかがいっぱいです。",
      "Would you like some tea? Thank you, I'll have some. Please have some cake too. No, thank you. I'm already full.",
      q(
        "Which does the guest decline?",
        "The cake",
        ["The tea", "The fish", "The plates"],
        "The guest accepts the tea with いただきます and declines the cake with けっこうです.",
      ),
      q(
        "Why does the guest decline the cake?",
        "They are already full",
        ["They do not like cake", "They are in a hurry", "They want more tea"],
        "もうおなかがいっぱいです follows けっこうです and gives the reason: the guest is already full.",
      ),
    ),
    practice:
      "Lay out a pretend meal and say いただきます, offer one dish with いかがですか, and answer もう食べましたか both ways before closing with ごちそうさまでした.",
  },
  {
    slug: "particles-core",
    title: "Particles that hold a sentence together",
    summary:
      "Sort out the small words that decide who did what to whom: when to reach for は and when for が, and what を, の, and a contrasting は are each quietly doing.",
    vocabulary: words(`助詞|じょし|a particle
文|ぶん|a sentence
主語|しゅご|the subject
公園|こうえん|a park
橋|はし|a bridge
道|みち|a road
弟|おとうと|younger brother
色|いろ|colour`),
    grammar: [
      g(
        "は & が: known and new",
        "は marks what the sentence is about, something you both already have in mind, while が introduces what is new or answers a question word. だれが{来|き}ましたか is answered with {弟|おとうと}が{来|き}ました, because the person is the new part. Once they are established, switch to は.",
        "{弟|おとうと}が{来|き}ました。{弟|おとうと}は{学生|がくせい}です。",
        "My younger brother came. He is a student.",
      ),
      g(
        "は for contrast & negation",
        "は also marks a contrast, which is why it turns up so often in negative sentences: コーヒーは{飲|の}みません leaves open that you drink something else. When it takes over from を or が this way, the original particle simply drops rather than stacking up behind it.",
        "{肉|にく}は{食|た}べませんが、{魚|さかな}は{食|た}べます。",
        "I do not eat meat, but I do eat fish.",
      ),
      g(
        "の standing in for a noun",
        "の joins two nouns, but it also stands in for a noun you have already mentioned: {赤|あか}いのをください means the red one, please. Use it when the thing is obvious from the situation; repeating the whole noun is not wrong, only heavier than it needs to be.",
        "{青|あお}いのと{赤|あか}いの、どちらがいいですか。",
        "The blue one or the red one — which would you like?",
      ),
      g(
        "を for a place you move through",
        "を usually marks the object of a verb, but with verbs of motion it marks the space you move along or out of: {公園|こうえん}を{歩|ある}く、{橋|はし}を{渡|わた}る、{家|いえ}を{出|で}る. The place is not being acted on; it is simply the route the movement takes.",
        "{毎朝|まいあさ}{公園|こうえん}を{歩|ある}きます。",
        "I walk through the park every morning.",
      ),
    ],
    grammarChecks: [
      q(
        "Someone asks だれが来ましたか。Which answer is natural?",
        "弟が来ました",
        ["弟は来ました", "弟も来ました", "弟を来ました"],
        "A question word takes が, and the answer keeps が because the person is still the new information.",
      ),
      q(
        "Contrast two drinks: コーヒー ___ 飲みませんが、お茶は飲みます。",
        "は",
        ["が", "に", "で"],
        "は contrasts コーヒー with お茶: not coffee, but tea. It takes over from を, which drops rather than stacking.",
      ),
      q(
        "Say 'The red one, please': 赤い ___ をください。",
        "の",
        ["が", "な", "も"],
        "の stands in for a noun that is already understood, so 赤いの means the red one.",
      ),
      q(
        "Choose the particle: 毎朝、公園 ___ 歩きます。",
        "を",
        ["に", "で", "へ"],
        "With a verb of motion を marks the route you move along, not a thing that is being acted on.",
      ),
    ],
    reading: p(
      "Two brothers at the park",
      "わたしは{毎朝|まいあさ}{公園|こうえん}を{歩|ある}きます。{今日|きょう}は{弟|おとうと}も{来|き}ました。{弟|おとうと}は{鳥|とり}が{好|す}きです。{青|あお}い{鳥|とり}がいましたが、{赤|あか}いのはいませんでした。{橋|はし}の{上|うえ}から{見|み}ると、{道|みち}がよく{見|み}えます。",
      "I walk through the park every morning. Today my younger brother came too. He likes birds. There was a blue bird, but there was not a red one. Looking from the bridge, you can see the road clearly.",
      q(
        "What does the passage say about a red bird?",
        "There was not one",
        [
          "It flew over the bridge",
          "The brother caught it",
          "It was standing on the road",
        ],
        "赤いのはいませんでした uses の for the bird and は to contrast it with the blue one that was there.",
      ),
      q(
        "What does the younger brother like?",
        "Birds",
        ["Bridges", "Flowers", "Cats"],
        "弟は鳥が好きです: 好き takes が, so 鳥 is what the brother likes.",
      ),
    ),
    listening: p(
      "Choosing a colour",
      "どの{色|いろ}がいいですか。{青|あお}いのがいいです。{赤|あか}いのはちょっと…。では、{青|あお}いのにしましょう。",
      "Which colour would you like? The blue one is good. The red one is a bit... Then let's go with the blue one.",
      q(
        "Which one does the speaker choose?",
        "The blue one",
        ["The red one", "Neither one", "Both of them"],
        "青いのがいいです picks the blue one, and 赤いのは with a trailing pause is a soft way of declining the red.",
      ),
      q(
        "How does the speaker feel about the red one?",
        "They are not keen on it",
        [
          "They like it best",
          "They want both colours",
          "They already have one",
        ],
        "赤いのはちょっと… trails off politely: ちょっと with a pause is a soft way of saying no.",
      ),
    ),
    practice:
      "Write three pairs of sentences: one answering a だれが question, one contrasting two foods with は, and one describing a walk with を.",
  },
  {
    slug: "on-the-street",
    title: "On the street: asking the way",
    summary:
      "Stop someone politely, ask where a place is, and follow directions that count corners and traffic lights. Then find the right bus and say where to get off.",
    vocabulary: words(`信号|しんごう|a traffic light
角|かど|a corner
曲がる|まがる|to turn
まっすぐ|まっすぐ|straight ahead
交番|こうばん|a police box
バス停|ばすてい|a bus stop
乗る|のる|to get on; to ride
降りる|おりる|to get off`),
    grammar: [
      g(
        "〜つ{目|め}の + place",
        "Add 目 to a number of things to count along a route: {一|ひと}つ{目|め} is the first, {二|ふた}つ{目|め} the second, and {三|みっ}つ{目|め} the third. Join it to the landmark with の, as in {二|ふた}つ{目|め}の{信号|しんごう}, the second traffic light. Without 目, {二|ふた}つの{信号|しんごう} only means two traffic lights.",
        "{二|ふた}つ{目|め}の{角|かど}を{右|みぎ}に{曲|ま}がってください。",
        "Please turn right at the second corner.",
      ),
      g(
        "〜を{右|みぎ}・{左|ひだり}に{曲|ま}がる",
        "When you turn, the corner or traffic light you turn at takes を and the direction takes に: {角|かど}を{左|ひだり}に{曲|ま}がります. まっすぐ{行|い}きます means go straight on, and まっすぐ needs no particle of its own. Directions are usually given as a chain of て-forms, one step at a time.",
        "{信号|しんごう}を{左|ひだり}に{曲|ま}がります。",
        "Turn left at the traffic light.",
      ),
      g(
        "どうやって & どのくらいかかりますか",
        "どうやって asks how you get somewhere: by bus, by train, or on foot. どのくらいかかりますか asks how long it takes, and the answer adds ぐらい to a number to mean about: 10{分|ぷん}ぐらいです. On foot is {歩|ある}いて, as in {歩|ある}いて{五分|ごふん}です, five minutes' walk.",
        "{駅|えき}までどのくらいかかりますか。",
        "How long does it take to get to the station?",
      ),
      g(
        "〜に{乗|の}る・〜を{降|お}りる",
        "You get on a bus or train with に and get off it with を: バスに{乗|の}ります, バスを{降|お}ります. The stop where you get off takes で: {駅前|えきまえ}で{降|お}ります. To ask which bus to take, say {何番|なんばん}のバスですか, and listen for the number in the answer.",
        "{三番|さんばん}のバスに{乗|の}って、{駅前|えきまえ}で{降|お}ります。",
        "Take the number 3 bus and get off in front of the station.",
      ),
    ],
    grammarChecks: [
      q(
        "Which phrase means 'the third traffic light'?",
        "三つ目の信号",
        ["三つの信号", "三時の信号", "三人の信号"],
        "目 after a number of things counts along the route, and の joins it to 信号. 三つの信号 simply means three traffic lights.",
      ),
      q(
        "Choose the particles: 角 ___ 右 ___ 曲がります。",
        "を・に",
        ["に・を", "で・へ", "が・を"],
        "The corner you turn at takes を and the direction you turn takes に, so the sentence is 角を右に曲がります.",
      ),
      q(
        "Which question asks how long it takes?",
        "どのくらいかかりますか",
        ["どうやって行きますか", "どこですか", "いくらですか"],
        "どのくらいかかりますか asks for the time needed. どうやって asks how you travel, どこ asks where, and いくら asks the price.",
      ),
      q(
        "Choose the particle: 駅前でバス ___ 降ります。",
        "を",
        ["に", "へ", "が"],
        "You get off a vehicle with を, as in バスを降ります. Getting on uses に instead: バスに乗ります.",
      ),
    ],
    reading: p(
      "Directions to the library",
      "{駅|えき}から{図書館|としょかん}まで{歩|ある}いて10{分|ぷん}ぐらいです。{駅|えき}の{前|まえ}の{道|みち}をまっすぐ{行|い}ってください。{二|ふた}つ{目|め}の{信号|しんごう}を{右|みぎ}に{曲|ま}がります。{少|すこ}し{歩|ある}くと、{左|ひだり}に{交番|こうばん}があります。{図書館|としょかん}はその{交番|こうばん}の{隣|となり}です。",
      "The library is about ten minutes' walk from the station. Go straight along the road in front of the station. Turn right at the second traffic light. After a short walk, there is a police box on the left. The library is next to that police box.",
      q(
        "Where do you turn right?",
        "At the second traffic light",
        ["At the first corner", "In front of the station", "At the police box"],
        "二つ目の信号を右に曲がります gives the turn. The police box comes after the turn, on the left.",
      ),
      q(
        "What is next to the library?",
        "A police box",
        ["A bus stop", "The station", "A traffic light"],
        "図書館はその交番の隣です places the library right beside the police box on the left side of the road.",
      ),
    ),
    listening: p(
      "At the bus stop",
      "すみません、このバスは{駅|えき}に{行|い}きますか。いいえ、{駅|えき}は{五番|ごばん}のバスですよ。そうですか。{駅|えき}までどのくらいかかりますか。{二十分|にじゅっぷん}ぐらいです。ありがとうございます。",
      "Excuse me, does this bus go to the station? No, for the station it's the number 5 bus. I see. How long does it take to the station? About twenty minutes. Thank you.",
      q(
        "Which bus goes to the station?",
        "The number 5 bus",
        ["This bus", "The number 2 bus", "The number 20 bus"],
        "駅は五番のバスですよ corrects the speaker: this bus does not go there, but bus number 5 does.",
      ),
      q(
        "How long is the ride to the station?",
        "About twenty minutes",
        ["About five minutes", "About two minutes", "About ten minutes"],
        "二十分ぐらいです answers どのくらいかかりますか, and ぐらい makes the time approximate.",
      ),
    ),
    practice:
      "Draw the route from your home to the nearest station. Describe it aloud with まっすぐ, 〜つ目の, and 〜を右に曲がる, then ask a partner how long it takes and which bus to take.",
  },
  {
    slug: "at-school",
    title: "At school: the classroom & maths class",
    summary:
      "Ask what a word means, say when something happens with とき, and read simple sums aloud. The maths class ends with word problems written in Japanese.",
    vocabulary: words(`教室|きょうしつ|a classroom
授業|じゅぎょう|a class; a lesson
質問|しつもん|a question
答え|こたえ|an answer
算数|さんすう|arithmetic
数|かず|a number
同じ|おなじ|the same
休み時間|やすみじかん|a break between classes`),
    grammar: [
      g(
        "〜とき",
        "とき means when or at the time. It follows a plain verb, an い-adjective, a な-adjective with な, or a noun with の: {分|わ}からないとき, {寒|さむ}いとき, {暇|ひま}なとき, {子|こ}どものとき. The main part of the sentence comes after it and says what happens at that time.",
        "{分|わ}からないとき、{手|て}を{挙|あ}げてください。",
        "When you don't understand, please raise your hand.",
      ),
      g(
        "〜は{日本語|にほんご}で{何|なん}ですか",
        "で marks the language something is said in, so 〜は{日本語|にほんご}で{何|なん}ですか asks for the Japanese word. To ask what a word means, say 〜はどういう{意味|いみ}ですか. Both are polite questions you can ask a teacher or a classmate at any point in a lesson.",
        "これは{日本語|にほんご}で{何|なん}ですか。",
        "What is this called in Japanese?",
      ),
      g(
        "たす・ひく: saying a sum",
        "Read a sum from left to right: 3たす5は8です means 3 + 5 = 8, and 9ひく4は5です means 9 − 4 = 5. は introduces the result. たす is to add and ひく is to take away, and word problems use them as verbs too: 5に3をたす, 9から4をひく.",
        "10ひく3は7です。",
        "Ten minus three is seven.",
      ),
      g(
        "〜と{同|おな}じ・〜とちがう",
        "AはBと{同|おな}じです says A is the same as B, and AはBとちがいます says it is different. Before a noun, {同|おな}じ joins directly, with no な or の: {同|おな}じ{答|こた}え, the same answer. On its own, ちがいます also tells someone politely that they are wrong.",
        "わたしの{答|こた}えは{田中|たなか}さんと{同|おな}じです。",
        "My answer is the same as Tanaka's.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the form before とき: ___ とき、先生に聞きます。 (when I don't understand)",
        "分からない",
        ["分からないの", "分からなくて", "分かりません"],
        "とき follows a plain verb directly, so the plain negative 分からない comes before it. The polite 分かりません cannot stand before とき.",
      ),
      q(
        "Which question asks for the Japanese word?",
        "これは日本語で何ですか",
        [
          "これは日本語が何ですか",
          "これは日本語に何ですか",
          "これは日本語を何ですか",
        ],
        "で marks the language something is said in, so 日本語で何ですか asks what the thing is called in Japanese.",
      ),
      q(
        "Which says 8 − 3 = 5?",
        "8ひく3は5です",
        ["8たす3は5です", "8と3は5です", "8から3は5です"],
        "ひく means minus, and は introduces the result. たす means plus, so 8たす3 would be 11.",
      ),
      q(
        "Choose the particle: わたしの答えは田中さん ___ 同じです。",
        "と",
        ["が", "を", "に"],
        "同じ takes と for the thing it is compared with: AはBと同じです. The same particle works with ちがいます.",
      ),
    ],
    reading: p(
      "The class timetable",
      "わたしの{学校|がっこう}の{授業|じゅぎょう}は{八時半|はちじはん}からです。{一時間目|いちじかんめ}は{算数|さんすう}で、{二時間目|にじかんめ}は{国語|こくご}です。{休|やす}み{時間|じかん}は10{分|ぷん}です。{分|わ}からないとき、わたしはいつも{先生|せんせい}に{質問|しつもん}します。{昼|ひる}ご{飯|はん}のとき、{友達|ともだち}と{教室|きょうしつ}で{食|た}べます。",
      "Classes at my school start at eight thirty. First period is arithmetic, and second period is Japanese. The break between classes is ten minutes. When I don't understand something, I always ask the teacher a question. At lunchtime, I eat with my friends in the classroom.",
      q(
        "What is the first class of the day?",
        "Arithmetic",
        ["Japanese", "Lunch", "A ten-minute break"],
        "一時間目は算数で gives the first period. 国語, the Japanese class, comes second.",
      ),
      q(
        "What does the writer do when they don't understand?",
        "Asks the teacher a question",
        ["Asks a friend at lunch", "Reads a book", "Goes home early"],
        "分からないとき、わたしはいつも先生に質問します: とき sets the situation, and the main clause says what the writer does.",
      ),
    ),
    listening: p(
      "In maths class",
      "では、{問題|もんだい}です。7たす6はいくつですか。はい、13です。そうですね。じゃあ、13ひく8はいくつですか。4です。いいえ、ちがいます。もう{一度|いちど}{考|かんが}えてください。あ、5です。はい、そうです。",
      "Now, here is a problem. What is seven plus six? Yes — thirteen. That's right. Then what is thirteen minus eight? Four. No, that's not right. Please think again. Oh — five. Yes, that's it.",
      q(
        "What is the first problem the teacher asks?",
        "7 + 6",
        ["13 − 8", "7 − 6", "6 + 8"],
        "7たす6はいくつですか comes first, and たす means plus. The student answers 13 correctly.",
      ),
      q(
        "What is the correct answer to the second problem?",
        "5",
        ["4", "13", "21"],
        "13 − 8 = 5. The student first says 4, hears ちがいます, thinks again, and the teacher confirms 5 with はい、そうです.",
      ),
    ),
    practice:
      "Write three sums in Japanese with たす and ひく and read them aloud. Then ask a classmate これは日本語で何ですか about three things in the room, and describe one school habit with とき.",
    problems: problemSet(
      "Maths class: adding and taking away",
      "Read each problem for its numbers and for the word that says what to do with them: ぜんぶで and あわせて add, のこり takes away, and どちらが〜多い asks for a difference.",
      words(`たす|たす|to add; plus
ひく|ひく|to take away; minus
ぜんぶで|ぜんぶで|altogether; in total
あわせて|あわせて|added together
のこり|のこり|what is left
ちがい|ちがい|the difference`),
      {
        text: "{教室|きょうしつ}にえんぴつが12{本|ほん}あります。{先生|せんせい}が5{本|ほん}{持|も}って{来|き}ました。えんぴつはぜんぶで{何本|なんぼん}ですか。",
        translation:
          "There are 12 pencils in the classroom. The teacher brought 5 more. How many pencils are there altogether?",
        steps: [
          "ぜんぶで asks for the total, so add the two numbers: 12 + 5.",
          "12 + 5 = 17. Keep the counter for long objects: 17本 (じゅうななほん).",
        ],
      },
      [
        wordProblem(
          "たまごが10こあります。4こ{使|つか}いました。のこりは{何|なん}こですか。",
          "There are 10 eggs. 4 were used. How many are left?",
          "6こ",
          ["14こ", "4こ", "5こ"],
          "のこり asks what is left: 10 − 4 = 6, so 6こ. Adding the numbers (14こ) would give a total, and 4こ is the number used.",
        ),
        wordProblem(
          "{教室|きょうしつ}に{男|おとこ}の{子|こ}が8{人|にん}、{女|おんな}の{子|こ}が7{人|にん}います。あわせて{何人|なんにん}ですか。",
          "In the classroom there are 8 boys and 7 girls. How many children are there altogether?",
          "15人",
          ["1人", "14人", "56人"],
          "あわせて asks for the numbers added together: 8 + 7 = 15, so 15人. 8 − 7 = 1 would be the difference, not the total.",
        ),
        wordProblem(
          "{赤|あか}い{紙|かみ}が6まい、{青|あお}い{紙|かみ}が9まいあります。どちらが{何|なん}まい{多|おお}いですか。",
          "There are 6 red sheets of paper and 9 blue sheets. Which colour has more, and by how many sheets?",
          "あおいほうが3まい",
          ["あかいほうが3まい", "あおいほうが15まい", "あかいほうが15まい"],
          "どちらが何まい多い asks which group is larger and by how much: 9 − 6 = 3, and the blue paper is the larger group, so あおいほうが3まい.",
        ),
        wordProblem(
          "500{円|えん}あります。120{円|えん}のパンと250{円|えん}のジュースを{買|か}いました。のこりはいくらですか。",
          "You have 500 yen. You buy bread for 120 yen and juice for 250 yen. How much money is left?",
          "130円",
          ["370円", "380円", "250円"],
          "First add what was spent: 120 + 250 = 370円. のこり asks what is left of the 500円: 500 − 370 = 130円. 370円 is the amount spent, not what is left.",
        ),
      ],
    ),
  },
  {
    slug: "part-time-job",
    title: "At work: a part-time job",
    summary:
      "Greet co-workers with the set phrases of a workplace, say how often you work, and turn down an extra shift politely without a flat no.",
    vocabulary: words(`仕事|しごと|work; a job
店長|てんちょう|a store manager
働く|はたらく|to work
毎週|まいしゅう|every week
時々|ときどき|sometimes
夕方|ゆうがた|early evening
大変|たいへん|hard; tough
休み|やすみ|a day off`),
    grammar: [
      g(
        "おつかれさまです & お{先|さき}に{失礼|しつれい}します",
        "Co-workers greet each other with おつかれさまです when they arrive, pass in a corridor, or finish for the day. When you leave before others, say お{先|さき}に{失礼|しつれい}します, and the people staying answer おつかれさまでした. On your first day, add よろしくおねがいします.",
        "お{先|さき}に{失礼|しつれい}します。",
        "Excuse me for leaving before you.",
      ),
      g(
        "いつも・よく・ときどき",
        "These adverbs say how often something happens: いつも, always; よく, often; ときどき, sometimes. They usually come after the topic and before the rest of the sentence, and they go with a positive verb. {毎週|まいしゅう} and {毎日|まいにち} name a fixed schedule instead of a rough frequency.",
        "{土曜日|どようび}はよく{働|はたら}きます。",
        "I often work on Saturdays.",
      ),
      g(
        "あまり〜ません・ぜんぜん〜ません",
        "あまり with a negative verb means not often or not much, and ぜんぜん with a negative means not at all. Both need the negative ending: あまり{働|はたら}きません, ぜんぜん{休|やす}みません. Casual speech sometimes uses ぜんぜん with positive words, but keep it with a negative in polite Japanese.",
        "{日曜日|にちようび}はあまり{働|はたら}きません。",
        "I don't work much on Sundays.",
      ),
      g(
        "Declining softly: 〜はちょっと…",
        "Japanese speakers often decline without actually saying no. Name the day or the request, add はちょっと, and let the sentence trail off: {土曜日|どようび}はちょっと…. Putting すみません first, and a short reason if you have one, keeps the refusal friendly rather than blunt.",
        "すみません、{土曜日|どようび}はちょっと…。",
        "Sorry, Saturday is a bit difficult...",
      ),
    ],
    grammarChecks: [
      q(
        "A co-worker says お先に失礼します as they leave. How do you answer?",
        "おつかれさまでした",
        ["お先に失礼します", "いってらっしゃい", "いただきます"],
        "The people staying answer おつかれさまでした. お先に失礼します is said only by the person who leaves first.",
      ),
      q(
        "Which word means 'often'?",
        "よく",
        ["いつも", "ときどき", "あまり"],
        "よく means often. いつも is always, ときどき is sometimes, and あまり needs a negative verb after it.",
      ),
      q(
        "Choose the verb: 日曜日はぜんぜん ___。",
        "働きません",
        ["働きます", "働いています", "働きましょう"],
        "ぜんぜん needs a negative verb to mean not at all, so the negative 働きません completes the sentence.",
      ),
      q(
        "Your manager asks you to work on Sunday, but you can't. What is the softest reply?",
        "すみません、日曜日はちょっと…",
        ["日曜日はだめです", "いいえ、働きません", "日曜日は休みましょう"],
        "はちょっと… declines without a direct no, and すみません first keeps it friendly. The other replies sound blunt or change the subject.",
      ),
    ],
    reading: p(
      "A message from the manager",
      "みなさん、おつかれさまです。{店長|てんちょう}の{山田|やまだ}です。{来週|らいしゅう}のシフトです。{月曜日|げつようび}と{水曜日|すいようび}は{夕方|ゆうがた}の{五時|ごじ}から{九時|くじ}までです。{土曜日|どようび}はいつも{忙|いそが}しいですから、{朝|あさ}{十時|じゅうじ}から{来|き}てください。{日曜日|にちようび}は{店|みせ}が{休|やす}みです。よろしくおねがいします。",
      "Hello everyone, thanks for your hard work. This is Yamada, the manager. Here is next week's shift. On Monday and Wednesday it is from five to nine in the evening. Saturday is always busy, so please come from ten in the morning. On Sunday the shop is closed. Thank you.",
      q(
        "Why should staff come at ten on Saturday?",
        "Saturday is always busy",
        ["The shop opens late", "Sunday is a day off", "The manager is away"],
        "土曜日はいつも忙しいですから gives the reason with から before the request to come at ten.",
      ),
      q(
        "When is the shop closed?",
        "On Sunday",
        ["On Monday", "On Wednesday", "On Saturday evening"],
        "日曜日は店が休みです. Monday and Wednesday are evening shifts from five to nine.",
      ),
    ),
    listening: p(
      "Asking for an extra shift",
      "リンさん、{今週|こんしゅう}の{土曜日|どようび}、{働|はたら}きませんか。すみません、{土曜日|どようび}はちょっと…。そうですか。じゃあ、{金曜日|きんようび}はどうですか。{金曜日|きんようび}はだいじょうぶです。",
      "Lin, could you work this Saturday? Sorry, Saturday is a bit difficult... I see. Then how about Friday? Friday is fine.",
      q(
        "Can Lin work on Saturday?",
        "No, Lin declines politely",
        ["Yes, all day", "Yes, in the morning only", "Lin does not answer"],
        "土曜日はちょっと… is a soft refusal. Lin never says いいえ, but the meaning is no.",
      ),
      q(
        "Which day will Lin work instead?",
        "Friday",
        ["Saturday", "Sunday", "Monday"],
        "The manager suggests 金曜日, and Lin answers 金曜日はだいじょうぶです, meaning Friday is fine.",
      ),
    ),
    practice:
      "Write your weekly schedule with いつも, よく, ときどき, and あまり〜ません. Then role-play a manager asking for an extra shift, and decline one day softly with はちょっと… before accepting another.",
  },
  {
    slug: "visiting-a-home",
    title: "Visiting a friend's home",
    summary:
      "Arrive at a friend's door with the right phrases, hand over a small gift, compliment the home and the meal, and leave politely when it gets late.",
    vocabulary: words(`家|いえ|a house; a home
庭|にわ|a garden
広い|ひろい|spacious
明るい|あかるい|bright
お土産|おみやげ|a small gift; a souvenir
靴|くつ|shoes
暗い|くらい|dark
遅い|おそい|late`),
    grammar: [
      g(
        "ごめんください & おじゃまします",
        "At the door of a house, ごめんください calls to the people inside. As you step in, say おじゃまします, literally I am going to disturb you. The host welcomes you with どうぞ、おあがりください, please come up, because the floor inside is a step higher than the entrance where shoes come off.",
        "おじゃまします。これ、どうぞ。",
        "Thank you for having me. This is for you.",
      ),
      g(
        "Linking adjectives: 〜くて・〜で",
        "To join two descriptions, change the final い of an い-adjective to くて: {広|ひろ}くて{明|あか}るい, and いい becomes よくて. A な-adjective or a noun takes で instead: きれいで{静|しず}か. Only the last adjective carries the tense and politeness: {広|ひろ}くてきれいですね.",
        "{広|ひろ}くて{明|あか}るい{部屋|へや}ですね。",
        "What a spacious, bright room.",
      ),
      g(
        "〜くなる・〜になる",
        "なる means to become. An い-adjective changes its final い to く before it: {暗|くら}くなりました, it has got dark. A な-adjective or a noun takes に: きれいになりました, {七時|しちじ}になりました. The past なりました reports a change that has already happened.",
        "もう{暗|くら}くなりましたね。",
        "It has already got dark, hasn't it?",
      ),
      g(
        "そろそろ{失礼|しつれい}します & おじゃましました",
        "When it is time to go, そろそろ{失礼|しつれい}します signals that you are about to leave without sounding abrupt. At the door, the past おじゃましました thanks the host for having you, and the host often answers また{来|き}てください or またどうぞ.",
        "そろそろ{失礼|しつれい}します。おじゃましました。",
        "I should be going. Thank you for having me.",
      ),
    ],
    grammarChecks: [
      q(
        "You are stepping into a friend's home. What do you say?",
        "おじゃまします",
        ["おじゃましました", "いってきます", "ただいま"],
        "おじゃまします is said on entering someone else's home. おじゃましました is the past form used when you leave, and ただいま is only for your own home.",
      ),
      q(
        "Join the adjectives: 広い + きれい → ___ きれいな部屋",
        "広くて",
        ["広いで", "広くで", "広いて"],
        "An い-adjective drops い and adds くて to link to the next description, so the phrase is 広くてきれいな部屋.",
      ),
      q(
        "Choose the change: 外がもう ___ なりました。 (dark)",
        "暗く",
        ["暗い", "暗に", "暗くて"],
        "An い-adjective becomes く before なる, so 暗くなりました means it has got dark.",
      ),
      q(
        "You are at the door after dinner, about to go home. What do you say to the host?",
        "おじゃましました",
        ["おじゃまします", "いただきます", "ごめんください"],
        "The past おじゃましました thanks the host as you leave. おじゃまします is for entering, and ごめんください calls at the door.",
      ),
    ],
    reading: p(
      "A thank-you message",
      "きのうは{本当|ほんとう}にありがとうございました。{広|ひろ}くて{明|あか}るくて、いい{家|いえ}ですね。{庭|にわ}もとてもきれいでした。お{母|かあ}さんの{料理|りょうり}はとてもおいしかったです。{帰|かえ}るとき、{外|そと}はもう{暗|くら}かったです。とても{楽|たの}しかったです。また{遊|あそ}びに{行|い}ってもいいですか。",
      "Thank you so much for yesterday. Your home is spacious and bright — a lovely house. The garden was very pretty too. Your mother's cooking was delicious. When I went home, it was already dark outside. I had a really good time. May I come and visit again?",
      q(
        "What is the main purpose of the message?",
        "To thank a friend for a visit",
        [
          "To invite a friend for dinner",
          "To apologise for being late",
          "To ask for directions",
        ],
        "It opens with きのうは本当にありがとうございました and ends by asking to visit again, so it thanks the friend for yesterday.",
      ),
      q(
        "What does the writer say about the cooking?",
        "It was delicious",
        ["There was too much", "The writer made it", "It was a little cold"],
        "お母さんの料理はとてもおいしかったです uses the past of おいしい to praise the meal.",
      ),
    ),
    listening: p(
      "At the front door",
      "ごめんください。あ、アナさん、いらっしゃい。どうぞ、おあがりください。おじゃまします。これ、ケーキです。みなさんでどうぞ。わあ、ありがとうございます。",
      "Hello? Oh, Ana, welcome. Please come in. Thank you for having me. This is a cake — for everyone. Oh, thank you very much.",
      q(
        "What does Ana say as she steps inside?",
        "おじゃまします",
        ["ごめんください", "いらっしゃい", "おあがりください"],
        "Ana calls ごめんください at the door and says おじゃまします as she steps in. いらっしゃい and おあがりください are the host's words.",
      ),
      q(
        "What has Ana brought?",
        "A cake for everyone",
        ["Flowers for the host", "Tea for the mother", "Nothing at all"],
        "これ、ケーキです。みなさんでどうぞ offers the cake to be shared by the whole family.",
      ),
    ),
    practice:
      "Role-play a visit from the door to the goodbye: ごめんください, おじゃまします, a small gift, two compliments with 〜くて, and そろそろ失礼します when it gets dark.",
  },
  {
    slug: "n5-integration",
    title: "N5 integration: plans, reasons & notices",
    summary:
      "Combine the foundations to read notices, follow changes to a plan, and complete a mixed review.",
    vocabulary: words(`雨|あめ|rain
天気|てんき|weather
時間|じかん|time; hours
入口|いりぐち|entrance
出口|でぐち|exit
切符|きっぷ|ticket
午前|ごぜん|a.m.; morning
午後|ごご|p.m.; afternoon`),
    grammar: [
      g(
        "Reasons with から",
        "Place から after the reason clause and give the result or decision next. A polite sentence can end in ですから or ますから before the next clause.",
        "{雨|あめ}ですから、バスで{行|い}きます。",
        "Because it is raining, I will go by bus.",
      ),
      g(
        "Contrast with が・でも",
        "Connect two clauses with が for but. Start a separate sentence with でも. Keep track of the final decision after a contrasting or negative statement.",
        "{行|い}きたいですが、{時間|じかん}がありません。",
        "I want to go, but I do not have time.",
      ),
      g(
        "前に・後で",
        "Use a dictionary-form verb + 前に for before doing; use a た-form + 後で for after doing. Nouns use の: 食事の後で. The forms describe the order even if the whole story is in the past.",
        "{寝|ね}る{前|まえ}に、{本|ほん}を{読|よ}みます。",
        "Before sleeping, I read a book.",
      ),
      g(
        "Question words & negative answers",
        "だれ asks who, いつ when, どう how, and どうして why. With も and a negative, question words mean nobody or nothing: だれもいません, 何も食べません. Do not mistake a negative option for a final affirmative plan.",
        "けさは{何|なに}も{食|た}べませんでした。",
        "I did not eat anything this morning.",
      ),
    ],
    grammarChecks: [
      q(
        "Complete a reason: 雨です ___、うちにいます。",
        "から",
        ["まで", "だけ", "より"],
        "から connects the reason, rain, with the decision to stay home.",
      ),
      q(
        "Join with 'but': 安いです ___、おいしくありません。",
        "が",
        ["から", "と", "を"],
        "が between two clauses means but. から would turn the first clause into a reason.",
      ),
      q(
        "Choose the form before 前に: 日本へ ___ 前に、日本語を勉強します。",
        "行く",
        ["行った", "行って", "行きます"],
        "A dictionary form comes before 前に, even when another tense appears later.",
      ),
      q(
        "Say 'Nobody is here': ここにはだれ ___ いません。",
        "も",
        ["が", "は", "を"],
        "A question word + も with a negative means nobody: だれもいません.",
      ),
    ],
    reading: p(
      "A picnic announcement",
      "{土曜日|どようび}に{公園|こうえん}でピクニックをします。{午前|ごぜん}{十時|じゅうじ}に{北|きた}の{入口|いりぐち}で{会|あ}いましょう。お{弁当|べんとう}と{飲|の}み{物|もの}を{持|も}ってきてください。{雨|あめ}のときは、{公園|こうえん}へ{行|い}きません。{駅|えき}の{前|まえ}のカフェで{会|あ}います。{時間|じかん}は{同|おな}じです。",
      "There will be a picnic at the park on Saturday. Meet at the north entrance at 10 a.m. Bring lunch and a drink. If it rains, we will not go to the park. We will meet at the café in front of the station at the same time.",
      q(
        "It rains on Saturday. Where and when should you go?",
        "The café at 10 a.m.",
        [
          "The north entrance at 10 a.m.",
          "The café at noon",
          "The station at 9 a.m.",
        ],
        "Rain changes the place to the café, but 時間は同じ keeps the 10 a.m. time.",
      ),
      q(
        "What should you bring to the picnic?",
        "Lunch and a drink",
        ["A ticket and a map", "An umbrella and a chair", "Money for the café"],
        "お弁当と飲み物を持ってきてください lists what to bring: と names both lunch and a drink.",
      ),
    ),
    listening: p(
      "The final plan",
      "{映画|えいが}の{前|まえ}にごはんを{食|た}べませんか。すみません、{時間|じかん}がありません。{映画|えいが}の{後|あと}で{食|た}べましょう。いいですね。では、{映画館|えいがかん}の{入口|いりぐち}で{会|あ}いましょう。",
      "Shall we eat before the movie? Sorry, there is no time. Let's eat after the movie. Sounds good. Then let's meet at the cinema entrance.",
      q(
        "What is the final plan?",
        "Meet at the cinema, then eat after the movie",
        [
          "Eat first at a restaurant",
          "Cancel the movie",
          "Meet at the station after eating",
        ],
        "The first suggestion is declined. The accepted sequence is cinema first and food afterward.",
      ),
      q(
        "Why do they not eat before the movie?",
        "There is no time",
        ["The restaurant is closed", "They are not hungry", "It is raining"],
        "すみません、時間がありません declines eating first because there is no time, so they eat after the movie.",
      ),
    ),
    practice:
      "Review the earlier N5 courses, then retry missed checks with translations hidden. Read a notice once for the purpose, once for time/place, and once for exceptions. Use the official sample questions for a separate exam-format check.",
  },
];
