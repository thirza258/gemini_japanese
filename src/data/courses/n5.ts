import {
  grammar as g,
  passage as p,
  question as q,
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
        "Choose the topic particle: わたし ___ 学生です。",
        "は",
        ["を", "で", "と"],
        "は marks what the sentence is about and is pronounced wa here.",
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
        "Choose the natural time marker: 六時 ___ 起きます。",
        "に",
        ["を", "の", "が"],
        "A specific clock time such as 六時 takes に to mark when an action happens. Words such as 今日 and 毎日 normally do not need に.",
      ),
      q(
        "Which phrase means 'for two hours'?",
        "二時間",
        ["二時", "二日", "二月"],
        "間 makes 二時間 a duration. 二時 is two o'clock, 二日 is two days or the second, and 二月 is February.",
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
    ),
    practice:
      "Read five prices and write your daily schedule with に. Practice all seven weekdays and the irregular dates aloud.",
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
        "Mark transport: バス ___ 学校へ行きます。",
        "で",
        ["を", "が", "の"],
        "で identifies the means of transport, the bus.",
      ),
      q(
        "Choose the polite past negative of 食べます.",
        "食べませんでした",
        ["食べませんです", "食べましたない", "食べないました"],
        "Replace ます with ませんでした to describe something you did not eat.",
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
        "Choose the modifier: ___ 部屋です。 (a quiet room)",
        "静かな",
        ["静かい", "静かの", "静かです"],
        "静か is a な-adjective, so it takes な before 部屋.",
      ),
      q(
        "Choose the past of 寒いです.",
        "寒かったです",
        ["寒いでした", "寒くでした", "寒かったでした"],
        "An い-adjective forms its own past with かった; です remains unchanged.",
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
        "How do you read 二人?",
        "ふたり",
        ["ににん", "にひと", "ふたつ"],
        "The counters for one and two people are irregular: ひとり and ふたり.",
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
        "Ask permission to sit: ここに座って ___ ですか。",
        "もいい",
        ["はいけません", "たい", "ません"],
        "〜てもいいですか asks whether an action is allowed.",
      ),
      q(
        "Say 'I am writing': 手紙を ___。",
        "書いています",
        ["書きています", "書くています", "書いたいます"],
        "書く forms 書いて, which combines with います for an ongoing action.",
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
    ),
    practice:
      "Describe an actual past day and a lifetime experience separately. Add a clause describing a thing you bought, read, or made.",
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
        "Choose the form before 前に: 日本へ ___ 前に、日本語を勉強します。",
        "行く",
        ["行った", "行って", "行きます"],
        "A dictionary form comes before 前に, even when another tense appears later.",
      ),
      q(
        "Complete a reason: 雨です ___、うちにいます。",
        "から",
        ["まで", "だけ", "より"],
        "から connects the reason, rain, with the decision to stay home.",
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
    ),
    practice:
      "Review all 12 N5 courses, then retry missed checks with translations hidden. Read a notice once for the purpose, once for time/place, and once for exceptions. Use the official sample questions for a separate exam-format check.",
  },
];
