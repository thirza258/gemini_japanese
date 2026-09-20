import {
  grammar as g,
  passage as p,
  question as q,
  words,
  type CourseSeed,
} from "./types";

export const n3Courses: CourseSeed[] = [
  {
    slug: "change-over-time",
    title: "Experience & change over time",
    summary:
      "Follow gradual developments and distinguish a continuing interval from a single opportunity within it.",
    vocabulary: words(`生活|せいかつ|daily life
環境|かんきょう|environment
慣れる|なれる|to become accustomed
増える|ふえる|to increase
減る|へる|to decrease
機会|きかい|opportunity
成長|せいちょう|growth
気付く|きづく|to notice`),
    grammar: [
      g(
        "〜うちに",
        "Dictionary, ない, or ている form + うちに marks an opportunity before a state changes or a change arising during an activity. Nouns use のうちに and な-adjectives use なうちに.",
        "忘れないうちに、メモしておきます。",
        "I will write it down before I forget.",
      ),
      g(
        "〜間・〜間に",
        "間 describes something lasting throughout an interval. 間に locates an event within that interval. Use noun + の or a suitable plain verb form before either.",
        "留守の間に、荷物が届きました。",
        "A parcel arrived while I was out.",
      ),
      g(
        "〜たびに",
        "Dictionary form or noun + のたびに means every time a recurring event happens. It presents a regular association, rather than merely one occasion.",
        "この町に来るたびに、新しい店を見つけます。",
        "Every time I come to this town, I find a new shop.",
      ),
      g(
        "〜につれて",
        "Dictionary form or a change-related noun + につれて links two gradual developments. Both sides normally describe change, rather than a one-time instruction.",
        "生活に慣れるにつれて、友達が増えました。",
        "As I grew used to life here, I made more friends.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the opportunity: 温かい ___ 食べてください。",
        "うちに",
        ["たびに", "につれて", "ために"],
        "The food should be eaten before it cools, while the favorable state still lasts.",
      ),
      q(
        "Choose a recurring occasion: 旅行する ___、写真を整理します。",
        "たびに",
        ["まま", "ところを", "せいで"],
        "たびに connects photo organization to every trip.",
      ),
    ],
    reading: p(
      "Finding a place in town",
      "引っ越したばかりのころ、近所の人と話す機会はほとんどなかった。ある日、町の掃除に参加すると、道具の使い方を教えてもらいながら自然に会話が始まった。それから毎月参加するうちに、道であいさつする相手が増えた。日本語が上手になってから参加しようと思っていたが、参加すること自体が練習になったのだ。今では、新しく来た人にこちらから声をかけるようにしている。",
      "Just after moving, I had almost no chances to talk with neighbors. At a community cleanup, conversation started naturally while someone taught me to use the tools. As I joined each month, I came to know more people to greet. I had planned to wait until my Japanese improved, but participating itself became practice. Now I try to approach newcomers myself.",
      q(
        "What did the writer discover?",
        "Participation itself helped build language ability and connections",
        [
          "Perfect Japanese was required first",
          "Cleaning prevented conversation",
          "Neighbors disliked newcomers",
        ],
        "The writer reverses the initial assumption: joining was a way to practice, not a reward for already being fluent.",
      ),
    ),
    listening: p(
      "Before the weather changes",
      "夕方から雨になるそうです。資料の確認は室内でできますから、晴れているうちに外の写真を撮りませんか。そうですね。戻ってから、みんなで資料を確認しましょう。",
      "It is supposed to rain this evening. We can check the materials indoors, so shall we take the outdoor photographs while it is still sunny? Yes. Let's review the materials together after returning.",
      q(
        "What will they do first?",
        "Take the outdoor photographs",
        [
          "Review the materials indoors",
          "Wait for evening rain",
          "Cancel both tasks",
        ],
        "晴れているうちに gives the time-sensitive task priority. The document check is moved until after returning.",
      ),
    ),
    practice:
      "Describe a gradual change in your life. Include a recurring event with たびに and something to do while an opportunity lasts with うちに.",
  },
  {
    slug: "actions-and-results",
    title: "Trying things & leaving states unchanged",
    summary:
      "Explain attempts, unintended results, and the difference between a maintained state and an action left running.",
    vocabulary: words(`試す|ためす|to try; to test
結果|けっか|result
方法|ほうほう|method
失敗|しっぱい|failure; mistake
成功|せいこう|success
電源|でんげん|power supply
残す|のこす|to leave something
確かめる|たしかめる|to make sure`),
    grammar: [
      g(
        "〜てみる",
        "The て-form + みる means trying an action to discover its result. It differs from an unsuccessful attempt expressed with ようとする.",
        "別の方法を試してみましょう。",
        "Let's try another method and see.",
      ),
      g(
        "〜まま",
        "Noun + の, た-form, or ない-form + まま describes an unchanged state. It need not imply that someone was careless; context can make the state intentional.",
        "靴を履いたまま、入らないでください。",
        "Please do not enter with your shoes still on.",
      ),
      g(
        "〜っぱなし",
        "A verb stem + っぱなし often describes an action or result left unattended, with a sense that something should have been done. It can also express prolonged continuation.",
        "電気をつけっぱなしにしてしまいました。",
        "I accidentally left the light on.",
      ),
      g(
        "〜てしまう & contractions",
        "Beyond completion, てしまう often expresses regret about a result. In conversation, てしまう becomes ちゃう and でしまう becomes じゃう. Recognize these without using them in formal writing.",
        "大事なメールを消しちゃった。",
        "I accidentally deleted an important email.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose 'with the window still closed': 窓を閉めた ___ にしてください。",
        "まま",
        ["たび", "ほど", "ばかりに"],
        "た-form + まま asks for the state to stay unchanged.",
      ),
      q(
        "What is the full form of 飲んじゃった?",
        "飲んでしまった",
        ["飲んでみた", "飲まなかった", "飲もうとした"],
        "でしまった contracts to じゃった in casual speech.",
      ),
    ],
    reading: p(
      "A useful mistake",
      "オンライン会議で声が聞こえないと言われ、マイクが壊れたのだと思った。新しいものを注文しようとしたところ、同僚に設定を確かめてみるように言われた。調べると、前の会議で音を消したままになっていただけだった。この経験から、問題が起きたときは、すぐに道具の故障と決めつけず、簡単な原因から順に確認することにした。",
      "During an online meeting I was told my voice was inaudible, so I thought the microphone was broken. As I was about to order a new one, a colleague suggested checking the settings. It turned out it had simply remained muted after the previous meeting. I decided to check simple possible causes first instead of immediately assuming equipment failure.",
      q(
        "What actually caused the problem?",
        "The microphone had remained muted",
        [
          "The new microphone was broken",
          "The colleague disconnected the network",
          "The order had not arrived",
        ],
        "音を消したまま identifies an unchanged setting. The suspected hardware fault was not the cause.",
      ),
    ),
    listening: p(
      "Before replacing a device",
      "プリンターが動かないんです。紙は入っていますか。はい。では、一度電源を切って、入れ直してみてください。それでも動かなければ、担当者に連絡しましょう。",
      "The printer isn't working. Is there paper? Yes. Then try turning it off and back on. If it still does not work, let's contact the person responsible.",
      q(
        "What should be tried before contacting someone?",
        "Restarting the printer",
        [
          "Buying a replacement",
          "Removing all paper",
          "Leaving it running all night",
        ],
        "The restart is a diagnostic trial with てみる; contact comes only if the problem persists.",
      ),
    ),
    practice:
      "Explain a minor problem and a sensible trial solution. Use both まま and っぱなし in sentences that make their different implications clear.",
  },
  {
    slug: "purpose-intention",
    title: "Purpose, effort & unrealized intentions",
    summary:
      "Explain the purpose of an action, the outcome you hope for, and plans that did not happen.",
    vocabulary: words(`目標|もくひょう|goal
目的|もくてき|purpose
努力|どりょく|effort
申し込む|もうしこむ|to apply
間違える|まちがえる|to make a mistake
準備|じゅんび|preparation
集中|しゅうちゅう|concentration
予定|よてい|plan; schedule`),
    grammar: [
      g(
        "〜ために",
        "Dictionary form or noun + のために states a purposeful action or benefit. With volitional verbs, the same person generally controls the purpose and the action taken to achieve it.",
        "留学するために、お金をためています。",
        "I am saving money in order to study abroad.",
      ),
      g(
        "〜ように",
        "Use ように for a desired state, potential outcome, or avoidance, especially with potential verbs and ない forms. Contrast 合格するために with 合格できるように: purpose versus making an outcome possible.",
        "忘れないように、予定をメモします。",
        "I note the schedule so that I will not forget.",
      ),
      g(
        "Volitional + とする",
        "ようとする expresses trying or being about to do something. A following interruption often means the intended action never happened.",
        "出かけようとしたとき、電話が鳴りました。",
        "The phone rang just as I was about to leave.",
      ),
      g(
        "〜つもりだった",
        "A past intention does not by itself say whether the action happened. In a contrast with が or のに, it commonly explains a plan that was changed or could not be carried out.",
        "歩くつもりでしたが、雨でバスに乗りました。",
        "I intended to walk, but took a bus because of the rain.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the desired ability: 後ろの人にも聞こえる ___、大きな声で話します。",
        "ように",
        ["つもりで", "ばかりに", "たびに"],
        "聞こえる is a nonvolitional audible state, so ように fits the hoped-for outcome.",
      ),
      q(
        "What happened? 予約しようとしたが、店は休みだった。",
        "The attempted reservation was interrupted by the shop being closed",
        [
          "A reservation was definitely completed",
          "The speaker never intended to reserve",
          "The shop opened especially for the speaker",
        ],
        "ようとした marks an attempt, and が introduces the obstacle.",
      ),
    ],
    reading: p(
      "A better study plan",
      "試験に合格するために、毎日新しい単語を五十覚えようと決めた。しかし、数日たつと前の単語を忘れていることに気付いた。そこで、新しい単語を増やすだけでなく、覚えたものを使えるように短い文章を書くことにした。最初の計画より進む速度は遅くなったが、読んだ文章の中で知っている言葉に出会う回数は増えた。",
      "To pass an exam I decided to learn fifty new words daily. After a few days, I noticed I was forgetting earlier words. So, rather than only increasing new words, I began writing short passages to make the words usable. Progress was slower than the initial plan, but I recognized familiar words in reading more often.",
      q(
        "Why did the writer add writing practice?",
        "To make learned words usable and better retained",
        [
          "To avoid all new vocabulary",
          "To write fifty essays daily",
          "To finish the course sooner at any cost",
        ],
        "使えるように identifies the desired outcome. The aim is useful retention rather than a larger raw count.",
      ),
    ),
    listening: p(
      "A missed application",
      "週末に講座へ申し込むつもりだったんですが、締切は金曜日だったんです。次の募集はありますか。来月ありますよ。今度は忘れないように、案内を送りますね。",
      "I intended to apply for the course over the weekend, but the deadline was Friday. Is there another enrollment period? Yes, next month. I'll send you a notice so you don't forget this time.",
      q(
        "Why was the first application missed?",
        "The deadline came before the planned application time",
        [
          "The course had no future sessions",
          "The notice was deliberately rejected",
          "The speaker completed an incorrect exam",
        ],
        "The intended weekend action was too late for Friday's deadline.",
      ),
    ),
    practice:
      "Write a realistic study goal with ために and an enabling action with ように. Describe a past plan that changed and explain the obstacle.",
  },
  {
    slug: "causes-consequences",
    title: "Causes, consequences & responsibility",
    summary:
      "Explain positive and negative outcomes while distinguishing a cause from the speaker's evaluation of it.",
    vocabulary: words(`原因|げんいん|cause
影響|えいきょう|influence; effect
遅刻|ちこく|lateness
故障|こしょう|breakdown
協力|きょうりょく|cooperation
解決|かいけつ|solution
責任|せきにん|responsibility
助かる|たすかる|to be helped; to be saved`),
    grammar: [
      g(
        "〜ため・〜ために: cause",
        "In explanatory writing, a plain clause or noun + のため states a cause. Unlike purpose ために, the clause may describe a nonvolitional event, such as weather or a breakdown.",
        "大雪のため、電車が止まりました。",
        "The train stopped because of heavy snow.",
      ),
      g(
        "〜おかげで",
        "Use a plain clause, noun + の, or な-adjective + な before おかげで to credit a favorable cause. The result is normally viewed positively, though irony is possible in context.",
        "皆さんが協力してくれたおかげで、間に合いました。",
        "Thanks to everyone's help, we made it in time.",
      ),
      g(
        "〜せいで",
        "せいで attributes an unfavorable result to a cause. It can imply blame, so distinguish evidence about the cause from the speaker's frustration.",
        "寝不足のせいで、集中できません。",
        "I cannot concentrate because of insufficient sleep.",
      ),
      g(
        "〜ものだから",
        "A plain clause + ものだから gives a personal explanation or excuse. Nouns and な-adjectives use なものだから. Conversational もので is also common.",
        "初めてなものだから、道に迷ってしまいました。",
        "Since it was my first time, I got lost.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the grateful cause: 先生のお ___ で、よく分かりました。",
        "かげ",
        ["せい", "ためし", "ところ"],
        "おかげで credits the teacher for a positive result.",
      ),
      q(
        "What is the function of ため in 工事のため、通れません?",
        "It gives the cause of the closure",
        [
          "It states the pedestrian's purpose",
          "It reports a comparison",
          "It grants permission",
        ],
        "Construction causes the route to be unavailable; nobody is trying to achieve the closure as a personal goal.",
      ),
    ],
    reading: p(
      "Why the delivery was late",
      "商品が届かず、店の発送が遅かったせいだと思って問い合わせた。すると、商品は予定どおり送られていたが、わたしが住所の部屋番号を書き忘れていたことが分かった。配達員が確認してくれたおかげで、荷物は翌日に届いた。相手の責任だと決める前に、自分が伝えた情報も確かめる必要があると感じた。",
      "When a product did not arrive, I contacted the shop, assuming it had shipped late. It turned out the item had been sent on schedule, but I had omitted my apartment number. Thanks to the delivery worker checking, it arrived the next day. I realized I should verify my own information before deciding the other party was responsible.",
      q(
        "What was the actual cause of the delay?",
        "The writer omitted the apartment number",
        [
          "The shop dispatched late",
          "The product was never available",
          "The delivery worker refused to check",
        ],
        "The first blame is corrected after inquiry. Missing address information is the verified cause.",
      ),
    ),
    listening: p(
      "A completed project",
      "締切が早まったので心配でしたが、別の部署も手伝ってくれたおかげで、予定より早く終わりました。ただ、確認する時間は短かったので、今日は内容をもう一度見直しましょう。",
      "I was worried because the deadline moved earlier, but help from another department let us finish ahead of schedule. However, review time was short, so today let's check the content again.",
      q(
        "What made early completion possible?",
        "Help from another department",
        [
          "Canceling the deadline",
          "Skipping all work",
          "Having unlimited review time",
        ],
        "おかげで credits cooperation; the short review time is a remaining concern.",
      ),
    ),
    practice:
      "Explain one good result with おかげで and one problem with せいで. Rewrite the problem as a neutral cause using ため.",
  },
  {
    slug: "contrasts-tradeoffs",
    title: "Contrasts, expectations & trade-offs",
    summary:
      "Read beyond an initial impression to understand concessions, substitutions, and unexpected results.",
    vocabulary: words(`値段|ねだん|price
評判|ひょうばん|reputation
満足|まんぞく|satisfaction
不便|ふべん|inconvenient
代わり|かわり|substitute; compensation
期待|きたい|expectation
得意|とくい|skilled; strong at
苦手|にがて|not good at; uncomfortable with`),
    grammar: [
      g(
        "〜わりに",
        "A plain clause, noun + の, or な-adjective + な before わりに contrasts a result with the expectation suggested by a fact. It often means considering or for.",
        "この部屋は狭いわりに、使いやすいです。",
        "For a small room, this is easy to use.",
      ),
      g(
        "〜くせに",
        "Like のに, くせに marks an unexpected contrast, but commonly adds criticism or annoyance about a person. Avoid using it as a neutral substitute in formal explanations.",
        "知っているくせに、教えてくれません。",
        "They know, yet won't tell me.",
      ),
      g(
        "〜かわりに",
        "Plain verb or noun + の + かわりに can express substitution or a compensating trade-off. Context determines whether it means instead of or in return for.",
        "駅から遠いかわりに、家賃が安いです。",
        "In exchange for being far from the station, the rent is low.",
      ),
      g(
        "〜ても",
        "The て-form + も states that a result holds despite a condition. With nouns and な-adjectives use でも; with い-adjectives use くても.",
        "少し高くても、長く使える物を選びます。",
        "Even if it costs a little more, I choose something I can use for a long time.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose 'considering the price': 安い ___、しっかりしています。",
        "わりに",
        ["ために", "につれて", "たびに"],
        "The sturdiness exceeds the expectation created by a low price.",
      ),
      q(
        "Which pattern usually adds criticism?",
        "くせに",
        ["おかげで", "ために", "ように"],
        "くせに commonly expresses an annoyed or blaming contrast.",
      ),
    ],
    reading: p(
      "Choosing an apartment",
      "二つの部屋を見て、駅に近いほうにしようと思っていた。しかし、実際に夜も見に行くと、近い部屋は道路の音がかなり大きかった。もう一つは駅まで十五分かかるかわりに、静かで日当たりもよかった。毎日の通勤は少し不便になっても、家で落ち着いて勉強できることを優先し、後者に決めた。",
      "After seeing two apartments, I initially planned to choose the one near the station. Visiting at night revealed considerable road noise. The other was a fifteen-minute walk from the station but was quiet and sunny. Even if commuting became less convenient, I prioritized studying peacefully at home and chose the latter.",
      q(
        "What determined the final choice?",
        "A quiet environment for studying",
        [
          "The shortest possible commute",
          "The lowest stated rent",
          "Being next to a main road",
        ],
        "The final decision prioritizes calm study despite a less convenient commute. No rent comparison is given.",
      ),
    ),
    listening: p(
      "Comparing two bags",
      "このかばん、軽いわりに丈夫ですね。ええ。でも、少し小さいです。大きいほうはどうですか。たくさん入るかわりに、重いですね。毎日使うなら、わたしは軽いほうにします。",
      "This bag is sturdy considering how light it is. Yes, but it is a little small. What about the large one? It holds a lot, but is heavy. For everyday use I would choose the light one.",
      q(
        "What trade-off does the large bag have?",
        "Greater capacity but more weight",
        [
          "Less weight but a higher price",
          "Better color but less durability",
          "Smaller size and less capacity",
        ],
        "たくさん入るかわりに、重い names the benefit and its compensating disadvantage.",
      ),
    ),
    practice:
      "Compare two realistic options and explain a trade-off with かわりに. Use わりに for a result that differs from your expectation.",
  },
  {
    slug: "certainty-inference",
    title: "Evidence, certainty & partial denial",
    summary:
      "Separate what is expected, inferred, logically explained, and only partly denied.",
    vocabulary: words(`証拠|しょうこ|evidence
確実|かくじつ|certain; reliable
留守|るす|absence from home
連絡先|れんらくさき|contact details
判断|はんだん|judgment
普通|ふつう|ordinary; normal
必ず|かならず|without fail
可能性|かのうせい|possibility`),
    grammar: [
      g(
        "〜はずです",
        "Use a plain clause, noun + の, or な-adjective + な before はず to express an expectation grounded in what you know. It is not direct proof that the event occurred.",
        "もう出発したので、そろそろ着くはずです。",
        "They have already left, so they should arrive soon.",
      ),
      g(
        "〜に違いない",
        "Attach to a plain clause, dropping だ after nouns and な-adjectives, for a strong inference. The speaker feels sure based on clues; the statement may still be an inference rather than observed fact.",
        "電気がついているので、誰かいるに違いありません。",
        "The light is on, so someone must be there.",
      ),
      g(
        "〜わけです",
        "わけ explains a logical consequence or realization: that explains why. Nouns and な-adjectives use なわけ. It organizes known facts rather than adding a new unsupported guess.",
        "三年住んでいたんですね。詳しいわけです。",
        "You lived there for three years. That explains why you know it well.",
      ),
      g(
        "〜とは限らない",
        "A plain clause + とは限らない denies that something is always true. It does not say the opposite always happens. Words such as 必ずしも often accompany this limited denial.",
        "高い物が必ずしも丈夫だとは限りません。",
        "An expensive item is not necessarily durable.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 人気があるとは限らない mean?",
        "It is not necessarily popular",
        [
          "It is never popular",
          "It is certainly popular",
          "It used to be popular",
        ],
        "とは限らない rejects a universal assumption without asserting the opposite in every case.",
      ),
      q(
        "Choose a grounded expectation: 九時に出たから、もう着いている ___ です。",
        "はず",
        ["つもり", "ため", "まま"],
        "A known departure time supports an expectation with はず.",
      ),
    ],
    reading: p(
      "Popularity and suitability",
      "人気のある教材なら、自分にも合うはずだと思って買った。しかし、説明が短く、例文をたくさん読みたいわたしには使いにくかった。友達は同じ教材を便利だと言っている。すでに基礎を学んでいて、確認だけしたい人には向いているのだろう。多くの人に選ばれているからといって、誰にでも最適だとは限らない。",
      "I bought a popular textbook expecting it to suit me too. But its explanations were brief, and it was difficult for me because I wanted many examples. A friend finds the same book convenient. It probably suits someone who knows the basics and only wants review. Being widely chosen does not make something ideal for everyone.",
      q(
        "What is the writer's conclusion?",
        "Suitability depends on a learner's needs",
        [
          "The textbook is useless for everyone",
          "Popularity guarantees quality for every learner",
          "The friend has not studied the basics",
        ],
        "The final limited denial leaves room for the book to suit some learners while not suiting the writer.",
      ),
    ),
    listening: p(
      "An uncertain arrival",
      "佐藤さんはもう着いたはずですよね。電車は予定どおりでしたが、駅からの道で迷ったかもしれません。まだ来ていないと決めずに、一度電話してみましょう。",
      "Sato should have arrived by now, right? The train was on time, but they may have gotten lost from the station. Let's call once instead of deciding they have not come.",
      q(
        "What is known rather than guessed?",
        "The train was on time",
        [
          "Sato definitely got lost",
          "Sato certainly arrived at the meeting room",
          "Sato canceled the visit",
        ],
        "The train's timing is stated as a fact. Arrival is an expectation and getting lost is a possibility.",
      ),
    ),
    practice:
      "Label four statements as fact, expectation, strong inference, or limited denial. Explain the evidence behind each inference.",
  },
  {
    slug: "conditions-limits",
    title: "Conditions, limits & exceptions",
    summary:
      "Understand minimum conditions, hypothetical concessions, and relationships that grow together.",
    vocabulary: words(`条件|じょうけん|condition
場合|ばあい|case; situation
必要|ひつよう|necessary
十分|じゅうぶん|sufficient
以外|いがい|except; other than
以上|いじょう|at least; more than
以下|いか|at most; below
関係|かんけい|relationship`),
    grammar: [
      g(
        "〜ば〜ほど",
        "Repeat a word in conditional and plain forms to link increasing degrees: 読めば読むほど. For い-adjectives use 安ければ安いほど; for な-adjectives, 便利なら便利なほど.",
        "練習すればするほど、自然に話せます。",
        "The more you practice, the more naturally you can speak.",
      ),
      g(
        "〜さえ〜ば",
        "さえ marks a minimal sufficient condition, followed by a conditional. With a noun use 時間さえあれば; with a stem use 確認しさえすれば. The speaker treats this condition as enough in the given situation.",
        "住所さえ分かれば、届けられます。",
        "As long as I know the address, I can deliver it.",
      ),
      g(
        "たとえ〜ても",
        "たとえ emphasizes a hypothetical concession: even if. The conclusion remains valid despite that imagined condition, which need not actually occur.",
        "たとえ失敗しても、もう一度試します。",
        "Even if I fail, I will try again.",
      ),
      g(
        "〜としても",
        "Plain form + としても temporarily accepts a hypothetical premise and says the conclusion still follows. It often supports a reasoned judgment rather than a simple timeline.",
        "今から急いだとしても、間に合わないでしょう。",
        "Even if we hurry now, we probably will not make it.",
      ),
    ],
    grammarChecks: [
      q(
        "Complete the proportional pattern: 調べれば調べる ___、面白くなる。",
        "ほど",
        ["だけに", "まま", "なら"],
        "ば〜ほど links increasing research to increasing interest.",
      ),
      q(
        "What does 切符さえあれば入れます mean?",
        "Having a ticket is sufficient for entry",
        [
          "Tickets never permit entry",
          "A ticket and three unnamed conditions are required",
          "Only staff may enter",
        ],
        "さえ identifies the ticket as the minimal sufficient condition in this statement.",
      ),
    ],
    reading: p(
      "A flexible participation rule",
      "地域の読書会は、指定された本を最後まで読んでいなくても参加できる。ただし、一ページも読まずに来ると話に入りにくいので、少なくとも一つ、気になった文を選んでおいてほしい。詳しい知識より、自分がどう感じたかを話すことが大切だ。たとえ他の人と意見が違っても、その理由を聞くことで本の見方が広がる。",
      "The local reading group allows attendance even if you have not finished the assigned book. However, reading nothing makes joining the discussion difficult, so please choose at least one sentence that caught your attention. Talking about your response matters more than detailed knowledge. Even if opinions differ, hearing why broadens how you see the book.",
      q(
        "What preparation is requested?",
        "Choose at least one sentence of interest",
        [
          "Finish every page without exception",
          "Learn the author's entire biography",
          "Agree with everyone else",
        ],
        "The rule explicitly permits unfinished reading but asks for one selected sentence.",
      ),
    ),
    listening: p(
      "A minimum requirement",
      "見学は予約が必要ですか。五人以下なら必要ありません。六人以上の場合は、前日までにご連絡ください。三人で行く予定です。では、そのままお越しください。",
      "Do we need a reservation for a visit? Not for five or fewer people. For six or more, contact us by the previous day. We plan to come as three. Then please come directly.",
      q(
        "Does the group of three need to reserve?",
        "No, because it has five or fewer people",
        [
          "Yes, because every group must reserve",
          "Yes, but only after arriving",
          "No, because it has at least six people",
        ],
        "以下 includes five and smaller numbers, so a group of three meets the no-reservation condition.",
      ),
    ),
    practice:
      "Write rules with a minimum condition, an exception, and a concession. Check carefully whether 以上 and 以下 include the boundary number.",
  },
  {
    slug: "quantity-emphasis",
    title: "Quantity, degree & emphasis",
    summary:
      "Distinguish approximate amounts, restrictions, strong degrees, and surprisingly easy examples.",
    vocabulary: words(`割合|わりあい|proportion
程度|ていど|degree; extent
半分|はんぶん|half
ほとんど|ほとんど|almost; hardly (with negative)
少なくとも|すくなくとも|at least
余る|あまる|to be left over
足りる|たりる|to be enough
限る|かぎる|to limit`),
    grammar: [
      g(
        "〜ばかり",
        "ばかり after a noun can mean mostly or nothing but; after a quantity it can mean approximately. Do not confuse these with たばかり, which describes a recent action.",
        "甘い物ばかり食べています。",
        "I keep eating nothing but sweet things.",
      ),
      g(
        "〜しか〜ない",
        "しか pairs with a negative predicate to mean only, often emphasizing insufficiency. だけ is more neutral and need not take a negative.",
        "あと十分しかありません。",
        "There are only ten minutes left.",
      ),
      g(
        "〜ほど〜ない",
        "A comparison with ほど and a negative means not as much as the reference point. Keep track of which item appears before ほど, because that is the standard of comparison.",
        "今日は昨日ほど寒くありません。",
        "Today is not as cold as yesterday.",
      ),
      g(
        "〜くらい・〜ぐらい",
        "These mark an approximate amount or a degree illustrated by an example. A noun + くらい can also minimize a task: that much at least. Context distinguishes approximation from evaluation.",
        "声が出ないくらい驚きました。",
        "I was so surprised that I could not speak.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the required ending: 千円しか ___。",
        "ありません",
        ["あります", "ですあります", "ありましょう"],
        "しか requires a negative predicate even though the overall meaning is only one thousand yen.",
      ),
      q(
        "What does AはBほど高くない mean?",
        "A is not as expensive as B",
        [
          "B is cheaper than A",
          "A and B have exactly the same price",
          "Neither price is compared",
        ],
        "B before ほど is the reference; A falls below it in expense.",
      ),
    ],
    reading: p(
      "A smaller shopping basket",
      "安いときに買っておけば得だと思い、野菜をたくさん買っていた。しかし、一人暮らしでは使い切れず、半分近く捨ててしまうこともあった。今は二、三日で使える量だけ買う。値段は前ほど安くないが、捨てる物がほとんどなくなった。買ったときの金額だけでなく、実際に使えた量を考えると、今のほうが無駄が少ない。",
      "I used to buy lots of vegetables when cheap, thinking I was saving money. Living alone, I sometimes threw away nearly half. Now I buy only what I can use in two or three days. The prices are not as low, but I hardly discard anything. Considering what actually gets used instead of just the price at purchase, there is less waste now.",
      q(
        "How does the writer evaluate savings now?",
        "By considering how much is actually used",
        [
          "Only by the lowest unit price",
          "By always buying the largest quantity",
          "By ignoring discarded food",
        ],
        "The conclusion contrasts purchase price alone with usable quantity.",
      ),
    ),
    listening: p(
      "Enough for the group?",
      "資料は二十部あります。参加者は十八人でしたね。ええ、でも先生が三人来ます。では、一部足りませんね。念のため、あと三部印刷しておきましょう。",
      "There are twenty copies. There are eighteen participants, right? Yes, but three teachers are coming too. Then we are one short. Let's print three more to be safe.",
      q(
        "How many additional copies will they print?",
        "Three",
        ["One", "Eighteen", "Twenty-one"],
        "The shortage is one, but the agreed action is to print three extra copies as a precaution.",
      ),
    ),
    practice:
      "Compare two budgets using しか, だけ, and ほど〜ない. Explain whether each statement gives a quantity or an evaluation.",
  },
  {
    slug: "topics-perspectives",
    title: "Topics, perspectives & social situations",
    summary:
      "Connect information to its topic, target, perspective, or source of variation.",
    vocabulary: words(`文化|ぶんか|culture
社会|しゃかい|society
立場|たちば|position; standpoint
態度|たいど|attitude
世代|せだい|generation
違い|ちがい|difference
共通|きょうつう|common; shared
理解|りかい|understanding`),
    grammar: [
      g(
        "〜について",
        "Noun + について marks a topic: about. Before another noun use についての. It says what a discussion concerns without identifying its recipient.",
        "日本の生活について話しました。",
        "We talked about life in Japan.",
      ),
      g(
        "〜に対して",
        "Noun + に対して marks the target of an attitude or action, and can also contrast two groups. Before a noun use に対する.",
        "質問に対して、丁寧に答えました。",
        "They answered the question carefully.",
      ),
      g(
        "〜にとって",
        "Noun + にとって frames an evaluation from someone's standpoint. It is suitable for important, difficult, or useful, not a direct substitute for the recipient of a gift.",
        "初心者にとって、この説明は難しいです。",
        "For a beginner, this explanation is difficult.",
      ),
      g(
        "〜によって",
        "によって can express variation, means, cause, or an agent in a formal passive. Identify the surrounding predicate to select the sense: 人によって違う means differs by person.",
        "生活の習慣は国によって違います。",
        "Everyday customs differ by country.",
      ),
    ],
    grammarChecks: [
      q(
        "Frame a learner's evaluation: 私 ___、この辞書は便利です。",
        "にとって",
        ["について", "に対する", "によるの"],
        "便利 is evaluated from the speaker's standpoint.",
      ),
      q(
        "Mark a topic before a noun: 環境 ___ 記事を読みました。",
        "についての",
        ["にとってのです", "についてはの", "をについて"],
        "についての connects the topic 環境 to 記事.",
      ),
    ],
    reading: p(
      "A quiet classroom?",
      "授業中に質問しない学生を見て、先生は内容に興味がないのだと思った。しかし、学生に聞くと、説明の途中で話すのは失礼だと考えていたことが分かった。積極的な態度の表し方は、学んできた環境によって違う。そこで先生は、質問の時間を授業の最後に必ず設けることにした。すると、それまで黙っていた学生からも多くの質問が出た。",
      "Seeing students ask no questions, a teacher assumed they were uninterested. The students explained that they thought interrupting an explanation was impolite. Ways of showing engagement vary with learning environments. The teacher therefore always set aside question time at the end. Students who had been silent then asked many questions.",
      q(
        "What explains the earlier silence?",
        "A different understanding of when it is polite to ask",
        [
          "A complete lack of interest",
          "Having no questions at all",
          "Not understanding any spoken Japanese",
        ],
        "The students' account corrects the teacher's assumption and leads to a change in question timing.",
      ),
    ),
    listening: p(
      "Choosing a guide",
      "この案内は旅行者にとって便利ですが、住んでいる人には基本的すぎるかもしれません。そうですね。生活についての情報も追加しましょう。特に、ごみの出し方に関する説明が必要です。",
      "This guide is useful for travelers but may be too basic for residents. Yes. Let's add information about daily life, especially instructions on putting out garbage.",
      q(
        "Who needs the additional information?",
        "People living in the area",
        [
          "Only short-term tourists",
          "The guide's printer",
          "People leaving the country permanently",
        ],
        "The current guide suits travelers; the proposed additions address residents' daily needs.",
      ),
    ),
    practice:
      "Discuss one topic from two people's perspectives. Use について for the topic and にとって for each person's evaluation.",
  },
  {
    slug: "duties-expectations",
    title: "Duties, expectations & imposed actions",
    summary:
      "Distinguish a shared rule, personal advice, an unnecessary worry, and an action someone was made to do.",
    vocabulary: words(`規則|きそく|rule
義務|ぎむ|obligation
守る|まもる|to protect; to obey
断る|ことわる|to refuse
許可|きょか|permission
提出|ていしゅつ|submission
報告|ほうこく|report
無理矢理|むりやり|forcibly`),
    grammar: [
      g(
        "〜ことになっている",
        "Dictionary or ない form + ことになっている reports an established arrangement or rule. It presents how things are set up, rather than a spontaneous personal decision.",
        "ここでは靴を脱ぐことになっています。",
        "The rule here is to remove your shoes.",
      ),
      g(
        "〜べきだ",
        "Dictionary form + べき expresses the speaker's judgment of what ought to be done; する can become すべき. べきではない advises against doing something. Avoid it for simple schedules or physical necessity.",
        "間違いに気付いたら、報告すべきです。",
        "If you notice an error, you should report it.",
      ),
      g(
        "〜ことはない",
        "Dictionary form + ことはない often reassures someone that an action is unnecessary. Distinguish this from たことがない, which denies past experience.",
        "一度失敗しただけで、やめることはありません。",
        "There is no need to quit just because you failed once.",
      ),
      g(
        "Causative passive",
        "Combine the causative with passive to express being made to act: 食べさせられる, 書かせられる. Many godan verbs shorten to 書かされる. す verbs keep forms such as 話させられる; the coercing person is marked by に.",
        "子供のころ、毎日ピアノを練習させられました。",
        "As a child, I was made to practice piano every day.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 心配することはない mean here?",
        "There is no need to worry",
        ["I have never worried", "Worrying is compulsory", "I worry every day"],
        "Dictionary form + ことはない reassures the listener about unnecessary action.",
      ),
      q(
        "In 先生に作文を書かされました, who wrote the composition?",
        "The speaker, at the teacher's insistence",
        [
          "The teacher, at the speaker's insistence",
          "Nobody",
          "An unnamed friend voluntarily",
        ],
        "The causative passive presents the speaker as the person made to write.",
      ),
    ],
    reading: p(
      "Reporting a small error",
      "店では、金額を間違えた場合は、金額の大小に関係なく責任者に報告することになっている。新人のわたしは、小さな間違いで迷惑をかけることはないと思い、自分だけで直そうとした。しかし、先輩に、記録が合わなくなるので必ず伝えるべきだと言われた。報告は誰かを叱るためではなく、同じ問題を防ぐためでもあるのだと理解した。",
      "At the shop, any error in an amount must be reported to the supervisor, however small. As a newcomer, I thought I need not bother anyone over a small mistake and tried to correct it alone. A senior colleague said I should always report it because the records would otherwise disagree. I understood that reporting is also for preventing repeated problems, rather than simply scolding someone.",
      q(
        "Why is reporting even a small error necessary?",
        "To keep records consistent and help prevent recurrence",
        [
          "Only to punish the newest worker",
          "Because small sums never matter",
          "To avoid correcting the error",
        ],
        "The explanation connects reporting to matching records and preventing the same problem.",
      ),
    ),
    listening: p(
      "A reassuring response",
      "発表で一度言い間違えたんです。そんなに気にすることはありませんよ。ただ、数字は正確に伝えるべきですから、次はメモを見ながら確認するといいですね。",
      "I made one verbal mistake during the presentation. You need not worry so much. But numbers should be communicated accurately, so next time it would help to check your notes.",
      q(
        "What advice is given?",
        "Do not dwell on the mistake, but check numbers against notes",
        [
          "Stop giving presentations",
          "Ignore all number errors",
          "Memorize every word without notes",
        ],
        "The response combines reassurance with a specific improvement for accuracy.",
      ),
    ),
    practice:
      "Describe a rule with ことになっている, your own advice with べき, and reassurance with ことはない. Keep their force distinct.",
  },
  {
    slug: "reading-structure",
    title: "Following explanations & text structure",
    summary:
      "Track definitions, corrections, summaries, and contrasting viewpoints through a connected text.",
    vocabulary: words(`文章|ぶんしょう|passage; writing
筆者|ひっしゃ|writer; author
内容|ないよう|content
具体的|ぐたいてき|concrete; specific
抽象的|ちゅうしょうてき|abstract
例|れい|example
結論|けつろん|conclusion
要点|ようてん|main point`),
    grammar: [
      g(
        "〜という",
        "という links a name or quoted description to a noun. In 〜ということ, it packages a statement as an idea or fact. Read the whole preceding clause before assigning its meaning.",
        "「もったいない」という言葉を説明します。",
        "I will explain the expression mottainai.",
      ),
      g(
        "〜というより",
        "This revises a description: rather than X, more accurately Y. The writer is adjusting the label or emphasis, not necessarily denying every part of X.",
        "失敗というより、よい練習になりました。",
        "Rather than a failure, it became useful practice.",
      ),
      g(
        "つまり・言い換えると",
        "These introduce a restatement or summary. Identify which earlier claims are being condensed and avoid treating a restatement as new independent evidence.",
        "毎日少しずつ続ける。つまり、習慣にすることが大切です。",
        "Keep doing a little every day. In other words, making it a habit matters.",
      ),
      g(
        "一方で",
        "A plain clause + 一方で, or sentence-initial 一方, introduces another side or a contrasting development. Both sides can be true simultaneously.",
        "便利になった一方で、新しい問題も生まれました。",
        "While it became more convenient, new problems also arose.",
      ),
    ],
    grammarChecks: [
      q(
        "Which expression signals a restatement?",
        "言い換えると",
        ["それにもかかわらず", "その前に", "たとえ"],
        "言い換えると explicitly introduces another way of expressing the preceding point.",
      ),
      q(
        "What does 疲れたというより、眠い mean?",
        "Sleepy is a more accurate description than tired",
        [
          "The speaker is neither tired nor sleepy",
          "Tiredness caused someone else's sleep",
          "Sleepiness has ended",
        ],
        "というより corrects the wording toward the second description.",
      ),
    ],
    reading: p(
      "The role of a summary",
      "文章を短くすることと、要約することは同じではない。例だけを消しても、筆者が最も伝えたい点まで消えてしまう場合がある。要約では、まず結論とそれを支える理由を探す必要がある。そのうえで、例が理由を理解するために欠かせないかどうかを考える。つまり、文字数を減らすというより、文章の関係を見えるように整理する作業なのである。",
      "Shortening a text and summarizing it are not the same. Merely deleting examples can also remove the point the writer most wants to convey. A summary requires first identifying the conclusion and supporting reasons, then deciding whether an example is essential to understanding them. In other words, it is less a task of reducing characters than of organizing relationships so they are visible.",
      q(
        "What should a useful summary preserve?",
        "The conclusion and its supporting relationships",
        [
          "Only the first sentence",
          "Every example but no conclusion",
          "A fixed number of words regardless of meaning",
        ],
        "The writer defines summarizing through conclusions, reasons, and the relationships between them.",
      ),
    ),
    listening: p(
      "Two sides of an app",
      "新しいアプリで連絡は速くなりました。一方で、夜にも通知が来て、休みにくいという声があります。つまり、道具をやめるのではなく、使う時間のルールを決める必要があるんです。",
      "The new app has sped up communication. On the other hand, people say nighttime notifications make it hard to rest. In other words, we need rules for usage times rather than abandoning the tool.",
      q(
        "What conclusion does the speaker draw?",
        "Set rules for when the app is used",
        [
          "Immediately abandon the app",
          "Send more nighttime notifications",
          "Deny that communication improved",
        ],
        "つまり introduces the conclusion, combining the benefit with the identified drawback.",
      ),
    ),
    practice:
      "Mark a passage's claim, reason, example, and conclusion. Write a two-sentence summary that preserves the relationship between them.",
  },
  {
    slug: "n3-integration",
    title: "N3 integration: messages & viewpoints",
    summary:
      "Combine reported information, qualification, comparison, and practical decisions in a cumulative review.",
    vocabulary: words(`提案|ていあん|proposal
賛成|さんせい|agreement
反対|はんたい|opposition
相談|そうだん|consultation
調整|ちょうせい|adjustment
優先|ゆうせん|priority
選択|せんたく|choice
納得|なっとく|acceptance; being convinced`),
    grammar: [
      g(
        "〜によると・〜によれば",
        "Mark the source of a report with noun + によると or によれば, often followed by そうだ or らしい. This identifies whose information is being relayed.",
        "案内によると、予約が必要だそうです。",
        "According to the notice, a reservation is required.",
      ),
      g(
        "〜らしい",
        "らしい can relay information or make an inference; after a noun it can also describe a typical quality, as in 春らしい. Use context to separate apparently from characteristic of.",
        "来週、新しい店が開くらしいです。",
        "Apparently a new shop will open next week.",
      ),
      g(
        "〜わけではない",
        "This denies an interpretation or generalization rather than every instance. 全部分からないわけではない can mean it is not that I understand none of it, so track the scope of each negative carefully.",
        "反対しているわけではありません。確認したいだけです。",
        "It is not that I oppose it. I just want to check.",
      ),
      g(
        "〜ような・〜ように",
        "Use ような before a noun and ように before a verb or adjective for a comparison, example, or manner. Nouns commonly take の before よう, as in 先生のような人.",
        "誰でも使えるような案内を作りましょう。",
        "Let's make a guide that anyone can use.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 行きたくないわけではない express?",
        "It is not that the speaker does not want to go",
        [
          "The speaker absolutely refuses to go",
          "The speaker has already gone",
          "The event is canceled",
        ],
        "The outer negative rejects the interpretation of unwillingness; another obstacle may exist.",
      ),
      q(
        "Choose the form before a noun: 子供にも分かる ___ 説明",
        "ような",
        ["ように", "ようだに", "ようでの"],
        "ような modifies 説明; ように would normally modify a following predicate.",
      ),
    ],
    reading: p(
      "Revising a group plan",
      "地域の交流会で料理を出す案に対して、わたしは費用を確認したいと言った。すると、企画そのものに反対なのかと聞かれた。反対しているわけではない。参加費が高くなると、来られない人が出るのではないかと心配したのだ。話し合いの結果、食事を用意するかわりに、参加者が飲み物だけ持ってくる形になった。内容を減らしたが、参加しやすさは上がったと思う。",
      "When food was proposed for a community gathering, I asked to check the cost and was asked whether I opposed the event itself. I did not. I worried higher participation fees might exclude some people. After discussion, we agreed participants would bring drinks instead of providing a meal. Although we reduced the offering, I think we improved access.",
      q(
        "What motivated the writer's question about cost?",
        "Concern that higher fees might exclude participants",
        [
          "Opposition to any community event",
          "A wish for a more expensive meal",
          "An inability to bring a drink",
        ],
        "わけではない rejects opposition as the motive; the following sentence supplies the actual concern.",
      ),
    ),
    listening: p(
      "Making a balanced decision",
      "全員がオンラインを希望しているわけではありません。遠くの人には便利ですが、直接話したい人もいます。では、月に一度は会場で開いて、ほかの回はオンラインにする案を出してみましょう。",
      "Not everyone prefers online meetings. They suit people far away, but some want to talk in person. Then let's propose meeting at a venue once a month and holding the other sessions online.",
      q(
        "What proposal balances the different preferences?",
        "One in-person meeting monthly, with the rest online",
        [
          "All meetings online",
          "All meetings in person",
          "No further meetings",
        ],
        "The limited denial motivates a mixed format; neither preference is treated as universal.",
      ),
    ),
    practice:
      "Retake the course reviews with helpers hidden. When two answers seem plausible, identify the exact sentence that supports one and rules out the other.",
  },
];
