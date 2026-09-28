import {
  grammar as g,
  passage as p,
  problemSet,
  question as q,
  wordProblem,
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
        "Choose the form for something that lasts the whole interval: 夏休みの ___、ずっと祖父の家にいました。",
        "間",
        ["間に", "うちに", "につれて"],
        "ずっと shows the stay filled the whole holiday, so 間 fits; 間に would place one event at a single point inside it.",
      ),
      q(
        "Choose a recurring occasion: 旅行する ___、写真を整理します。",
        "たびに",
        ["まま", "ところを", "せいで"],
        "たびに connects photo organization to every trip.",
      ),
      q(
        "What does 秋が深まるにつれて、葉が赤くなる mean?",
        "As autumn deepens, the leaves gradually turn red",
        [
          "Before autumn deepens, the leaves turn red",
          "Every time autumn comes, the leaves fall at once",
          "While it is still autumn, the leaves stay green",
        ],
        "につれて links two developments that move together: the leaves redden step by step as autumn deepens.",
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
      q(
        "What does the writer now try to do?",
        "Speak first to people who have just moved in",
        [
          "Wait for newcomers to greet them",
          "Skip the monthly cleanup",
          "Teach Japanese at the cleanup",
        ],
        "新しく来た人にこちらから声をかけるようにしている: こちらから shows the writer now makes the first approach to newcomers.",
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
      q(
        "When is it expected to rain?",
        "From the evening",
        ["From the morning", "Right now", "Tomorrow afternoon"],
        "夕方から雨になるそうです reports the forecast, which is why the outdoor photographs come first.",
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
        "Choose 'I will try writing with it once and see': このペンで一度 ___。",
        "書いてみます",
        ["書いてしまいます", "書いたままです", "書きっぱなしです"],
        "て-form + みる tries an action to find out how it turns out; the other forms describe a regretted result or a state left unchanged.",
      ),
      q(
        "Choose 'with the window still closed': 窓を閉めた ___ にしてください。",
        "まま",
        ["たび", "ほど", "ばかりに"],
        "た-form + まま asks for the state to stay unchanged.",
      ),
      q(
        "What does 窓を開けっぱなしにして出かけた suggest?",
        "The window was left open when it should have been shut",
        [
          "The window was shut before going out",
          "Someone tried but failed to open the window",
          "The window was opened after coming home",
        ],
        "っぱなし describes an action left unattended, usually with the sense that it should have been dealt with.",
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
      q(
        "What did the writer decide to do from now on?",
        "Check simple causes first before assuming a fault",
        [
          "Keep a spare microphone at all times",
          "Stop joining online meetings",
          "Let a colleague run every meeting",
        ],
        "簡単な原因から順に確認することにした: ことにした marks the writer's new rule of starting with the simple causes.",
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
      q(
        "What was checked before the restart was suggested?",
        "Whether there was paper in the printer",
        [
          "Whether the cable was damaged",
          "Who was responsible for the printer",
          "How old the printer was",
        ],
        "紙は入っていますか comes first, and はい confirms the paper before the restart is suggested.",
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
        "Choose the purpose of a deliberate action: 日本の大学に入る ___、毎日勉強しています。",
        "ために",
        ["ように", "たびに", "つもりだった"],
        "入る is an action the speaker sets out to do, so ために states the purpose; ように suits a hoped-for state such as 入れる or 聞こえる.",
      ),
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
      q(
        "What does 電話するつもりだったが、忘れてしまった tell you?",
        "The speaker planned to call but did not",
        [
          "The speaker called as planned",
          "The speaker never meant to call",
          "The speaker is about to call now",
        ],
        "つもりだった reports a past intention, and が with 忘れてしまった shows the plan was never carried out.",
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
      q(
        "What happened after the writer changed the plan?",
        "Progress slowed, but familiar words turned up more often",
        [
          "The writer learned fifty more words a day",
          "The writer forgot all the earlier words",
          "The exam was moved to an earlier date",
        ],
        "進む速度は遅くなったが…知っている言葉に出会う回数は増えた gives both halves of the result.",
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
      q(
        "What will the second speaker do?",
        "Send a notice about next month's enrollment",
        [
          "Extend Friday's deadline",
          "Enroll the speaker on the spot",
          "Cancel next month's course",
        ],
        "忘れないように、案内を送りますね: the notice is sent so that the next enrollment is not missed.",
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
        "What is the function of ため in 工事のため、通れません?",
        "It gives the cause of the closure",
        [
          "It states the pedestrian's purpose",
          "It reports a comparison",
          "It grants permission",
        ],
        "Construction causes the route to be unavailable; nobody is trying to achieve the closure as a personal goal.",
      ),
      q(
        "Choose the grateful cause: 先生のお ___ で、よく分かりました。",
        "かげ",
        ["せい", "ためし", "ところ"],
        "おかげで credits the teacher for a positive result.",
      ),
      q(
        "Choose the cause of an unwelcome result: 渋滞の ___、会議に遅れました。",
        "せいで",
        ["おかげで", "ように", "につれて"],
        "Arriving late is an unwelcome result, so せいで attributes it to the traffic jam; おかげで would credit a cause for a good outcome.",
      ),
      q(
        "Choose the personal excuse: 急いでいた ___、傘を忘れてしまいました。",
        "ものだから",
        ["おかげで", "につれて", "ように"],
        "ものだから gives the speaker's own explanation, close to an excuse, for forgetting the umbrella.",
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
      q(
        "How did the parcel finally reach the writer?",
        "The delivery worker checked, and it arrived the next day",
        [
          "The shop sent a replacement",
          "The writer collected it from the shop",
          "It was returned to the shop",
        ],
        "配達員が確認してくれたおかげで、荷物は翌日に届いた credits the delivery worker for the next-day arrival.",
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
      q(
        "What does the speaker suggest doing today?",
        "Checking the content once more",
        [
          "Moving the deadline again",
          "Starting a new project",
          "Asking another department for help",
        ],
        "確認する時間は短かったので…もう一度見直しましょう: the short review time is the reason for checking again today.",
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
      q(
        "What does 料理を作ってもらうかわりに、皿を洗います mean?",
        "In return for the cooking, I will wash the dishes",
        [
          "I will wash the dishes instead of eating",
          "Even if someone cooks, I will not wash up",
          "Because I cooked, someone else will wash up",
        ],
        "かわりに here marks a trade: washing the dishes pays back the favor of having the meal cooked.",
      ),
      q(
        "Choose 'even if it is expensive': 高く ___、この辞書を買います。",
        "ても",
        ["たら", "ながら", "わりに"],
        "い-adjectives take くても for a concession: 高くても means the purchase goes ahead whatever the price.",
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
      q(
        "What did the writer discover by visiting at night?",
        "The room near the station had heavy road noise",
        [
          "The quiet room was far from any shops",
          "Both rooms were equally noisy",
          "The station was closed at night",
        ],
        "夜も見に行くと、近い部屋は道路の音がかなり大きかった: the night visit exposed the noise at the room near the station.",
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
      q(
        "Which bag does the speaker choose for everyday use?",
        "The light one",
        ["The large one", "Neither bag", "Whichever is cheaper"],
        "毎日使うなら、わたしは軽いほうにします: for daily use the speaker picks the light bag despite its size.",
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
        "Choose a grounded expectation: 九時に出たから、もう着いている ___ です。",
        "はず",
        ["つもり", "ため", "まま"],
        "A known departure time supports an expectation with はず.",
      ),
      q(
        "Choose the strong inference: 窓が全部閉まっているから、留守 ___。",
        "に違いない",
        ["とは限らない", "つもりだ", "ために"],
        "The closed windows are the clue, and に違いない states a strong conviction that nobody is home; after a noun it needs no だ.",
      ),
      q(
        "What does 毎日走っているから、元気なわけです mean?",
        "They run every day, which explains why they are so energetic",
        [
          "They must run every day to stay energetic",
          "It is strange that they are tired",
          "They will start running tomorrow",
        ],
        "わけです draws the logical conclusion from a known fact: the daily running accounts for the energy.",
      ),
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
      q(
        "Why was the textbook hard for the writer to use?",
        "Its explanations were short, and the writer wanted many examples",
        [
          "It was too expensive",
          "Its example sentences were too long",
          "It covered only advanced grammar",
        ],
        "説明が短く、例文をたくさん読みたいわたしには使いにくかった ties the difficulty to the writer's own need for examples.",
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
      q(
        "What do they decide to do?",
        "Call Sato once",
        [
          "Wait at the station",
          "Assume Sato is not coming",
          "Take the next train themselves",
        ],
        "決めずに、一度電話してみましょう: instead of concluding anything, they will try a single phone call.",
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
      q(
        "Complete the hypothetical concession: たとえ雨が ___、試合は行います。",
        "降っても",
        ["降れば", "降るなら", "降ったので"],
        "たとえ is completed by a ても form: even if it rains, the match still goes ahead.",
      ),
      q(
        "What does 今から出たとしても、間に合わない mean?",
        "Even supposing we left now, we would not make it",
        [
          "If we leave now, we will make it",
          "We left just now, so we made it",
          "We will not leave until it is too late",
        ],
        "としても accepts the hypothetical premise of leaving now and still concludes that it will be too late.",
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
      q(
        "According to the passage, what matters more than detailed knowledge?",
        "Talking about how you yourself felt",
        [
          "Finishing the whole book first",
          "Agreeing with the other members",
          "Reading the book twice",
        ],
        "詳しい知識より、自分がどう感じたかを話すことが大切だ ranks a personal response above detailed knowledge.",
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
      q(
        "What must a group of six or more do?",
        "Contact them by the previous day",
        [
          "Come without contacting them",
          "Split into smaller groups",
          "Call on the day of the visit",
        ],
        "六人以上の場合は、前日までにご連絡ください sets the rule for larger groups; 以上 includes six itself.",
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
        "あと10分しかありません。",
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
        "What does ゲームばかりしている mean?",
        "Doing nothing but play games",
        [
          "Playing games for about an hour",
          "Having just started a game",
          "Hardly ever playing games",
        ],
        "After a noun, ばかり means nothing but or mostly that; たばかり, by contrast, would mark an action just completed.",
      ),
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
      q(
        "Choose 'so tired I could not stand': 立てない ___ 疲れました。",
        "くらい",
        ["しか", "ばかり", "ほどではなく"],
        "くらい illustrates the degree with an example: the tiredness went as far as not being able to stand.",
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
      q(
        "How much did the writer sometimes throw away before?",
        "Nearly half",
        ["Almost nothing", "About a quarter", "Everything bought"],
        "半分近く捨ててしまうこともあった: close to half was sometimes thrown away when the writer bought in bulk.",
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
      q(
        "How many people need a copy in total?",
        "Twenty-one",
        ["Eighteen", "Twenty", "Twenty-three"],
        "Eighteen participants plus three teachers makes twenty-one, which is why twenty copies leave them 一部足りない, one short.",
      ),
    ),
    practice:
      "Compare two budgets using しか, だけ, and ほど〜ない. Explain whether each statement gives a quantity or an evaluation.",
    problems: problemSet(
      "Halves, tenths & what is left over",
      "Each problem turns on one quantity word. Decide whether 割 and 半分 take a share of the whole, and whether 余る or 足りない asks what remains or what is missing.",
      words(`割|わり|a tenth: 2割 is 20%
ずつ|ずつ|each; the same amount apiece
残り|のこり|what remains
そのうち|そのうち|of those; out of that total
足りない|たりない|to be short; not enough`),
      {
        text: "クラスの{学生|がくせい}は30{人|にん}です。そのうち4{割|わり}が{電車|でんしゃ}で{通学|つうがく}しています。{電車|でんしゃ}で{通学|つうがく}している{学生|がくせい}は{何人|なんにん}ですか。",
        translation:
          "There are 30 students in the class. Four tenths of them travel to school by train. How many students travel by train?",
        steps: [
          "そのうち points back to the whole: the 30 students in the class.",
          "4割 is four tenths of that whole, or 40%: 30 × 0.4 = 12.",
          "Answer: 12人 travel to school by train.",
        ],
      },
      [
        wordProblem(
          "パーティーのために{飲|の}み{物|もの}を24{本|ほん}{買|か}いました。その{半分|はんぶん}が{飲|の}まれ、{残|のこ}りの{半分|はんぶん}は{参加者|さんかしゃ}が{持|も}って{帰|かえ}りました。{飲|の}み{物|もの}は{何本|なんぼん}{余|あま}っていますか。",
          "You bought 24 bottles of drink for a party. Half of them were drunk, and the guests took home half of the rest. How many bottles are left over?",
          "6本",
          ["12本", "18本", "0本"],
          "その半分が飲まれ leaves 24 − 12 = 12 bottles. 残りの半分 means half of those 12, so 6 go home: 12 − 6 = 6本 余っている.",
        ),
        wordProblem(
          "ある{店|みせ}の{先月|せんげつ}の{売|う}り{上|あ}げは80{万円|まんえん}でした。{今月|こんげつ}は{先月|せんげつ}より2{割|わり}{減|へ}りました。{今月|こんげつ}の{売|う}り{上|あ}げはいくらですか。",
          "Last month a shop's sales came to 800,000 yen. This month they fell by two tenths compared with last month. What were this month's sales?",
          "64万円",
          ["16万円", "78万円", "96万円"],
          "2割減りました means 20% less than last month: 80万円 × 0.2 = 16万円 lost, so 80万円 − 16万円 = 64万円.",
        ),
        wordProblem(
          "{子|こ}ども{会|かい}で、{参加者|さんかしゃ}18{人|にん}に{色紙|いろがみ}を5{枚|まい}ずつ{配|くば}ります。{色紙|いろがみ}は80{枚|まい}しかありません。{何枚|なんまい}{足|た}りませんか。",
          "At a children's club, each of the 18 children is to be given 5 sheets of colored paper. There are only 80 sheets. How many sheets short are you?",
          "10枚",
          ["90枚", "16枚", "2枚"],
          "5枚ずつ means five for every child: 18 × 5 = 90 sheets are needed. With only 80 (しかありません), 90 − 80 = 10枚 足りない.",
        ),
        wordProblem(
          "ある{会社|かいしゃ}の{社員|しゃいん}は50{人|にん}で、そのうち{女性|じょせい}は32{人|にん}です。{男性|だんせい}の{割合|わりあい}は{何|なん}%ですか。",
          "A company has 50 employees, and 32 of them are women. What percentage of the staff are men?",
          "36%",
          ["64%", "18%", "32%"],
          "そのうち女性は32人 leaves 50 − 32 = 18 men. 割合 compares them with the whole 50: 18 ÷ 50 = 0.36, which is 36%.",
        ),
      ],
    ),
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
        "Mark a topic before a noun: 環境 ___ 記事を読みました。",
        "についての",
        ["にとってのです", "についてはの", "をについて"],
        "についての connects the topic 環境 to 記事.",
      ),
      q(
        "Choose the target of the response: お客様の質問 ___、丁寧に答えてください。",
        "に対して",
        ["にとって", "によって", "についての"],
        "The answer is aimed at the customer's question, so に対して marks the target of the action.",
      ),
      q(
        "Frame a learner's evaluation: 私 ___、この辞書は便利です。",
        "にとって",
        ["について", "に対する", "によるの"],
        "便利 is evaluated from the speaker's standpoint.",
      ),
      q(
        "What does 値段は店によって違います mean?",
        "The price differs from shop to shop",
        [
          "The shop decided the price alone",
          "The price is the same in every shop",
          "The price is a topic for the shop",
        ],
        "によって with 違う expresses variation: the price changes depending on which shop you look at.",
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
      q(
        "What change did the teacher make?",
        "Always kept time for questions at the end of class",
        [
          "Stopped explaining in Japanese",
          "Asked students to interrupt more often",
          "Gave quiet students extra homework",
        ],
        "質問の時間を授業の最後に必ず設けることにした: questions moved to a fixed slot at the end, and the silent students then spoke up.",
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
      q(
        "Which information is singled out as especially needed?",
        "How to put out the garbage",
        ["Restaurants for tourists", "Train timetables", "Hotel prices"],
        "特に、ごみの出し方に関する説明が必要です picks out garbage instructions as the most needed addition.",
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
        "What does この寮では十時までに帰ることになっている express?",
        "An established rule of the dormitory",
        [
          "The speaker's own sudden decision",
          "A guess about the other residents",
          "A past habit the speaker has given up",
        ],
        "ことになっている reports an arrangement already fixed, rather than a decision the speaker has just made.",
      ),
      q(
        "Choose the speaker's judgment of what ought to be done: 約束は守る ___ です。",
        "べき",
        ["ことはない", "ことになっている", "わけ"],
        "べき gives the speaker's view of what one ought to do; ことはない would say the opposite, that it is unnecessary.",
      ),
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
      q(
        "What did the writer first try to do?",
        "Correct the mistake alone without telling anyone",
        [
          "Report it to the supervisor at once",
          "Ask the customer to pay the difference",
          "Hide the records from the senior colleague",
        ],
        "自分だけで直そうとした: ようとした shows the writer set out to fix it alone before being told to report it.",
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
      q(
        "What had the first speaker done?",
        "Misspoken once during a presentation",
        [
          "Forgotten to bring any notes",
          "Given wrong figures several times",
          "Missed the presentation",
        ],
        "発表で一度言い間違えたんです reports a single slip; accuracy with numbers comes up only as advice for next time.",
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
        "Choose the word that links a name to a noun: 「さくら」 ___ 店を知っていますか。",
        "という",
        ["というより", "つまり", "一方で"],
        "という connects the name さくら to the noun 店, giving a shop called Sakura.",
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
      q(
        "Which expression signals a restatement?",
        "言い換えると",
        ["それにもかかわらず", "その前に", "たとえ"],
        "言い換えると explicitly introduces another way of expressing the preceding point.",
      ),
      q(
        "What does 都会は仕事が多い一方で、家賃が高い express?",
        "Cities have plenty of work, but on the other side, rent is high",
        [
          "Rent is high because there is plenty of work",
          "There is little work, so rent is low",
          "Cities have plenty of work instead of high rent",
        ],
        "一方で sets a second side beside the first: plentiful work and high rent are both true of the city.",
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
      q(
        "What can happen if you simply delete the examples?",
        "The writer's main point may be lost as well",
        [
          "The summary becomes too long",
          "The reasons become easier to see",
          "The conclusion turns into an example",
        ],
        "例だけを消しても、筆者が最も伝えたい点まで消えてしまう場合がある: まで shows even the key point can disappear.",
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
      q(
        "What drawback have people mentioned?",
        "Notifications at night make it hard to rest",
        [
          "Messages have become slower",
          "The app costs too much",
          "Nobody uses the app at night",
        ],
        "一方で、夜にも通知が来て、休みにくいという声があります introduces the downside that balances faster contact.",
      ),
    ),
    practice:
      "Mark a passage's claim, reason, example, and conclusion. Write a two-sentence summary that preserves the relationship between them.",
  },
  {
    slug: "neighbourhood-life",
    title: "Living alongside neighbours",
    summary:
      "Handle the small negotiations of living next to people: rubbish days, noise at night, an apology offered early, and a request that leaves everyone able to say yes.",
    vocabulary: words(`近所|きんじょ|the neighbourhood
迷惑|めいわく|a nuisance
騒音|そうおん|noise
掃除|そうじ|cleaning
挨拶|あいさつ|a greeting
規則|きそく|rules
苦情|くじょう|a complaint
助かる|たすかる|to be a help`),
    grammar: [
      g(
        "〜ないといけない・〜なきゃ",
        "なければならない has two everyday shortenings: ないといけない in ordinary polite conversation, and なきゃ or なくちゃ in casual speech. All three state the same obligation, but なきゃ belongs with friends and family rather than with a landlord or a stranger.",
        "{管理人|かんりにん}さんに{言|い}わないといけませんね。",
        "We will have to tell the building manager.",
      ),
      g(
        "〜てくれると{助|たす}かります",
        "てくれる marks an action done for your benefit, and {助|たす}かります turns it into a soft request. It asks for something without issuing an order, which is what you want with people you have to keep living beside. いただけると{助|たす}かります is the politer version.",
        "{夜|よる}は{静|しず}かにしてくれると{助|たす}かります。",
        "It would be a help if you could keep it quiet at night.",
      ),
      g(
        "〜ばよかった",
        "The ば-form plus よかった expresses regret about what you did or failed to do. For an action you did take and now regret, use なければよかった instead. The pattern always looks backwards, so it never states a present plan.",
        "もっと{早|はや}く{挨拶|あいさつ}すればよかったです。",
        "I should have introduced myself sooner.",
      ),
      g(
        "〜ついでに",
        "ついでに adds a second action you carry out while you are already doing the first. The purpose stays with the first action, so the offer sounds casual and helpful rather than like a favour you are granting.",
        "{買|か}い{物|もの}のついでに、ごみを{出|だ}しておきます。",
        "I will put the rubbish out while I am going shopping anyway.",
      ),
    ],
    grammarChecks: [
      q(
        "Which shortening suits a conversation with a landlord?",
        "言わないといけません",
        ["言わなきゃ", "言わなくちゃ", "言わなきゃだめ"],
        "ないといけない keeps the polite register; なきゃ and なくちゃ are casual contractions for friends and family.",
      ),
      q(
        "Which is the softest way to ask a neighbour to turn the music down?",
        "音を小さくしてくれると助かります",
        [
          "音を小さくしなさい",
          "音を小さくしなきゃ",
          "音を小さくすればよかった",
        ],
        "てくれると助かります frames the request as a favour that would help you, so it asks without giving an order.",
      ),
      q(
        "Choose the natural regret: もっと早く___。",
        "挨拶すればよかった",
        ["挨拶すればいい", "挨拶してよかった", "挨拶するでしょう"],
        "ばよかった looks back at what should have been done; してよかった says the speaker is glad they did it.",
      ),
      q(
        "What does 駅に行くついでに、手紙を出してきます mean?",
        "I will post the letter while I am going to the station anyway",
        [
          "I am going to the station only to post the letter",
          "I will post the letter instead of going to the station",
          "I posted the letter before going to the station",
        ],
        "ついでに adds a second errand to a trip already being made; the main purpose is still going to the station.",
      ),
    ],
    reading: p(
      "A notice in the entrance hall",
      "いつも{掃除|そうじ}にご{協力|きょうりょく}いただき、ありがとうございます。{燃|も}えるごみは{火曜日|かようび}と{金曜日|きんようび}の{朝|あさ}に{出|だ}すことになっています。{前日|ぜんじつ}の{夜|よる}に{出|だ}すと{近所|きんじょ}の{迷惑|めいわく}になりますので、おやめください。また、{夜|よる}{十時|じゅうじ}を{過|す}ぎてからの{洗濯|せんたく}については{騒音|そうおん}の{苦情|くじょう}が{多|おお}く{寄|よ}せられています。{静|しず}かにしていただけると{助|たす}かります。",
      "Thank you as always for helping with the cleaning. Burnable rubbish is to be put out on Tuesday and Friday mornings. Putting it out the night before is a nuisance for the neighbourhood, so please refrain. We also receive many noise complaints about laundry done after ten at night. It would be a help if you could keep things quiet.",
      q(
        "What does the notice ask residents to stop doing?",
        "Putting rubbish out the night before",
        [
          "Cleaning the entrance hall",
          "Using the laundry at all",
          "Greeting the neighbours",
        ],
        "前日の夜に出す…おやめください targets the timing; laundry is only discouraged late at night, not forbidden.",
      ),
      q(
        "When is burnable rubbish to be put out?",
        "On Tuesday and Friday mornings",
        [
          "On Monday and Thursday mornings",
          "Any night after ten",
          "On Tuesday and Friday evenings",
        ],
        "燃えるごみは火曜日と金曜日の朝に出すことになっています fixes both the days and the time of day.",
      ),
    ),
    listening: p(
      "Apologising to a neighbour",
      "{昨日|きのう}の{夜|よる}はうるさくてすみませんでした。{友達|ともだち}が{来|き}ていて、つい{遅|おそ}くなってしまいました。{今度|こんど}から{気|き}をつけます。",
      "I am sorry it was noisy last night. Friends were over and it went on later than I meant it to. I will be careful from now on.",
      q(
        "What does the speaker promise?",
        "To be more careful in future",
        ["To move out", "To stop inviting friends", "To clean the hallway"],
        "今度から気をつけます is a promise about future behaviour; nothing is said about the friends or the building itself.",
      ),
      q(
        "Why was it noisy last night?",
        "Friends were visiting and it went on late",
        [
          "The speaker was moving furniture",
          "There was building work next door",
          "The television was left on all night",
        ],
        "友達が来ていて、つい遅くなってしまいました gives the reason; つい and てしまう show it ran later than intended.",
      ),
    ),
    practice:
      "Write a four-line note to a neighbour: thank them, state one rule, make one request with てくれると助かります, and add one regret with ばよかった.",
  },
  {
    slug: "appointments-and-changes",
    title: "Appointments & changes",
    summary:
      "Book a time, move it when plans fall through, and confirm the new details clearly enough that nobody turns up on the wrong day or at the wrong address.",
    vocabulary: words(`予定|よてい|a plan
日程|にってい|a schedule of dates
変更|へんこう|a change
連絡先|れんらくさき|contact details
担当|たんとう|the person in charge
訪問|ほうもん|a visit
調整|ちょうせい|adjustment
改めて|あらためて|again another time`),
    grammar: [
      g(
        "〜させていただく",
        "The humble causative asks permission and carries out the action in a single phrase: {説明|せつめい}させていただきます. It literally means to receive the favour of being allowed to act, so keep it for occasions where the other side really is granting something; used everywhere it sounds heavy.",
        "{日程|にってい}を{変更|へんこう}させていただけますか。",
        "Could I ask to be allowed to change the date?",
      ),
      g(
        "〜でしたら・〜ようでしたら",
        "でしたら is the polite conditional of なら and picks up the condition the other person has just raised. ようでしたら adds a layer of guesswork on top, so ご{都合|つごう}が{悪|わる}いようでしたら means if it looks inconvenient for you.",
        "{金曜日|きんようび}がご{都合|つごう}が{悪|わる}いようでしたら、{来週|らいしゅう}でもかまいません。",
        "If Friday looks inconvenient for you, next week is fine too.",
      ),
      g(
        "〜とのことです",
        "とのことです reports what you were told while keeping a step back from it: {担当|たんとう}は{出張|しゅっちょう}とのことです. It is more formal than そうです and fills business e-mail, where the writer is passing on somebody else's message rather than vouching for it.",
        "{担当|たんとう}は{来週|らいしゅう}まで{出張|しゅっちょう}とのことです。",
        "I am told the person in charge is away on business until next week.",
      ),
      g(
        "〜ずに",
        "ずに is the written-style equivalent of ないで and attaches to the ない-stem, so {連絡|れんらく}しないで becomes {連絡|れんらく}せずに. The irregular する turns into せずに, never しずに. It suits notices and business writing more than casual speech.",
        "{連絡|れんらく}せずに{欠席|けっせき}しないでください。",
        "Please do not miss it without getting in touch.",
      ),
    ],
    grammarChecks: [
      q(
        "Which asks permission most humbly?",
        "変更させていただけますか",
        ["変更してもいいですか", "変更しますか", "変更しませんか"],
        "させていただく treats the change as a favour the listener grants; してもいいですか only asks whether it is allowed.",
      ),
      q(
        "What does ご都合が悪いようでしたら add to a request?",
        "If it seems inconvenient for you",
        [
          "Because it is inconvenient for me",
          "Even though it is convenient",
          "Whenever it was inconvenient",
        ],
        "ようでしたら is a polite conditional with a layer of guesswork, so it offers an alternative without assuming the other person's answer.",
      ),
      q(
        "Choose the phrase that passes on a message you were given: 部長は午後から会議 ___。",
        "とのことです",
        ["させていただきます", "でしたら", "せずに"],
        "とのことです reports what you were told while keeping a step back from it, which suits relaying the manager's schedule.",
      ),
      q(
        "Choose the written-style 'without': 連絡___変更しないでください。",
        "せずに",
        ["しずに", "しなくて", "しないと"],
        "する becomes せずに in this pattern, and しずに is not a possible form of the verb.",
      ),
    ],
    reading: p(
      "Moving an appointment by e-mail",
      "{先日|せんじつ}はお{時間|じかん}をいただき、ありがとうございました。{申|もう}し{訳|わけ}ありませんが、{担当|たんとう}が{急|きゅう}に{出張|しゅっちょう}になったとのことで、{来週|らいしゅう}の{訪問|ほうもん}の{日程|にってい}を{変更|へんこう}させていただけないでしょうか。{水曜日|すいようび}か{木曜日|もくようび}の{午後|ごご}でしたら{調整|ちょうせい}できます。どちらもご{都合|つごう}が{悪|わる}いようでしたら、{改|あらた}めてこちらからご{連絡|れんらく}いたします。",
      "Thank you for your time the other day. I am sorry to say that the person in charge has suddenly been sent on a business trip, so could we change the date of next week's visit? Wednesday or Thursday afternoon can be arranged. If neither suits you, I will contact you again with other options.",
      q(
        "What does the writer offer if the proposed days do not work?",
        "To get in touch again themselves",
        [
          "To send somebody else instead",
          "To cancel the visit",
          "To meet in the morning",
        ],
        "改めてこちらからご連絡いたします promises a fresh approach from the writer's side, not a substitute or a cancellation.",
      ),
      q(
        "Why does the date need to change?",
        "The person in charge has suddenly been sent on a business trip",
        [
          "The reader asked to cancel the visit",
          "The office is closed next week",
          "The writer is unwell",
        ],
        "担当が急に出張になったとのことで gives the reason, reported at one remove with とのことで.",
      ),
    ),
    listening: p(
      "Confirming on the phone",
      "では、{来週|らいしゅう}の{水曜日|すいようび}、{午後|ごご}{二時|にじ}にお{伺|うかが}いします。{場所|ばしょ}は{前回|ぜんかい}と{同|おな}じでよろしいでしょうか。{変更|へんこう}がありましたら、{前日|ぜんじつ}までにご{連絡|れんらく}ください。",
      "So, I will visit next Wednesday at two in the afternoon. Is the place the same as last time? If anything changes, please get in touch by the day before.",
      q(
        "What is the speaker checking?",
        "Whether the location is unchanged",
        [
          "Whether the price is agreed",
          "Who will attend",
          "Whether the documents arrived",
        ],
        "場所は前回と同じでよろしいでしょうか asks about the venue; the day and the time have already been settled.",
      ),
      q(
        "When will the speaker visit?",
        "Next Wednesday at two in the afternoon",
        [
          "This Wednesday at two in the afternoon",
          "Next Thursday at two in the afternoon",
          "Next Wednesday morning",
        ],
        "来週の水曜日、午後二時にお伺いします fixes the visit; 伺う is the humble verb for going to the other person's place.",
      ),
    ),
    practice:
      "Draft a three-line reschedule message: apologise, ask with させていただけないでしょうか, and offer two alternatives with でしたら.",
  },
  {
    slug: "business-email",
    title: "Reading a business e-mail",
    summary:
      "Open, read and answer a work e-mail: the fixed greeting, what the subject line commits you to, where the real request hides in the middle, and how to reply without sounding blunt.",
    vocabulary: words(`件名|けんめい|a subject line
添付|てんぷ|an attachment
返信|へんしん|a reply
宛先|あてさき|the addressee
承知|しょうち|acknowledging
折り返し|おりかえし|getting back to someone
早速|さっそく|promptly
署名|しょめい|a signature block`),
    grammar: [
      g(
        "{件名|けんめい} & 〜の{件|けん}につきまして",
        "A work e-mail names its topic twice: once in the {件名|けんめい} and again in the opening line as 〜の{件|けん}につきまして. The second is not a repetition. It fixes which thread the message belongs to before any request arrives, which is why it is the first place to look.",
        "{来週|らいしゅう}の{会議|かいぎ}の{件|けん}につきまして、ご{連絡|れんらく}いたします。",
        "I am writing regarding next week's meeting.",
      ),
      g(
        "Set openings: お{世話|せわ}になっております",
        "Almost every work e-mail opens with いつもお{世話|せわ}になっております, which thanks the reader for an ongoing relationship rather than for anything in particular. A first approach uses {初|はじ}めてご{連絡|れんらく}いたします instead. Leaving the opening out reads as curt rather than efficient.",
        "いつも{大変|たいへん}お{世話|せわ}になっております。",
        "Thank you, as always, for your continued support.",
      ),
      g(
        "〜のほど",
        "〜のほど softens a request by blurring its edges, so ご{確認|かくにん}のほどよろしくお{願|ねが}いいたします asks for a check without pinning down exactly what or by when. It attaches to a noun of action, and it belongs in writing rather than in speech.",
        "ご{確認|かくにん}のほどよろしくお{願|ねが}いいたします。",
        "I would be grateful if you could look this over.",
      ),
      g(
        "〜たく{存|ぞん}じます",
        "The verb stem plus たく{存|ぞん}じます states what the writer would like to do, in humble written style. {存|ぞん}じます is simply the humble form of {思|おも}います, so you will meet it again in 〜かと{存|ぞん}じます. It never describes what the reader wants, only the writer.",
        "{一度|いちど}お{打|う}ち{合|あ}わせをお{願|ねが}いしたく{存|ぞん}じます。",
        "I would like to ask you for a meeting.",
      ),
    ],
    grammarChecks: [
      q(
        "Where does a work e-mail state what it is about?",
        "In the 件名 and again as 〜の件につきまして",
        [
          "Only in the signature block",
          "Only in the closing line",
          "Nowhere; it is left understood",
        ],
        "The subject line names the topic and the opening line fixes the thread with 〜の件につきまして before the request itself arrives.",
      ),
      q(
        "How should an e-mail to someone you have never contacted begin?",
        "初めてご連絡いたします",
        [
          "いつもお世話になっております",
          "以上、よろしくお願いいたします",
          "ご確認のほどお願いいたします",
        ],
        "いつもお世話になっております thanks an existing relationship, so a first approach opens with 初めてご連絡いたします instead.",
      ),
      q(
        "Choose the softened written request.",
        "ご確認のほどよろしくお願いいたします",
        ["確認してください", "確認しましたか", "確認しておいて"],
        "〜のほど blurs the edges of the request, which is what makes it fit written business Japanese rather than speech.",
      ),
      q(
        "Whose wish does お伺いしたく存じます express?",
        "The writer's own wish to visit",
        [
          "The reader's wish to visit",
          "A plan made by a third person",
          "A company rule about visits",
        ],
        "The verb stem plus たく存じます states what the writer would like to do, in humble written style; it never describes the reader.",
      ),
    ],
    reading: p(
      "An e-mail about a deadline",
      "いつも{大変|たいへん}お{世話|せわ}になっております。{来月|らいげつ}の{研修|けんしゅう}の{件|けん}につきまして、ご{連絡|れんらく}いたします。{添付|てんぷ}の{資料|しりょう}をご{確認|かくにん}のほどよろしくお{願|ねが}いいたします。{参加|さんか}される{方|かた}のお{名前|なまえ}を、{今週|こんしゅう}{金曜日|きんようび}までにご{返信|へんしん}いただけますでしょうか。なお、{会場|かいじょう}が{変|か}わる{可能性|かのうせい}がございますので、{決|き}まり{次第|しだい}、{改|あらた}めてご{案内|あんない}したく{存|ぞん}じます。ご{不明|ふめい}な{点|てん}がございましたら、{折|お}り{返|かえ}しご{連絡|れんらく}ください。",
      "Thank you, as always, for your continued support. I am writing regarding next month's training. Please take a look at the attached materials. Could you reply with the names of those attending by this Friday? Also, the venue may change, so I would like to send fresh details once it is settled. If anything is unclear, please get back in touch.",
      q(
        "What must the reader send by Friday?",
        "The names of those attending",
        ["The venue details", "The attached materials", "A signed agreement"],
        "参加される方のお名前を…ご返信いただけますでしょうか carries the Friday deadline; the venue is the writer's own follow-up, not the reader's task.",
      ),
      q(
        "What does the writer say may still change?",
        "The venue",
        [
          "The Friday deadline",
          "The date of the training",
          "The attached materials",
        ],
        "会場が変わる可能性がございます flags the venue as unsettled, with fresh details promised once it is decided.",
      ),
    ),
    listening: p(
      "Acknowledging an e-mail by phone",
      "{先|さき}ほどのメール、{拝見|はいけん}いたしました。{添付|てんぷ}の{資料|しりょう}も{確認|かくにん}いたしました。{参加者|さんかしゃ}の{名前|なまえ}は{明日|あした}までにご{返信|へんしん}いたします。{会場|かいじょう}が{決|き}まりましたら、{折|お}り{返|かえ}しご{連絡|れんらく}ください。",
      "I have read the e-mail you just sent, and I have checked the attached materials as well. I will reply with the participants' names by tomorrow. Once the venue is settled, please get back to me.",
      q(
        "What does the speaker undertake to send?",
        "The participants' names",
        ["The attached materials", "The venue details", "A new subject line"],
        "参加者の名前は明日までにご返信いたします is what the speaker promises; the venue is what they are waiting to receive.",
      ),
      q(
        "What has the speaker already done?",
        "Read the e-mail and checked the attachment",
        [
          "Sent the participants' names",
          "Booked the venue",
          "Replied to everyone on the list",
        ],
        "拝見いたしました and 確認いたしました are both completed actions; the names are still to follow by tomorrow.",
      ),
    ),
    practice:
      "Take one e-mail you have received and label its parts: the 件名, the opening greeting, the line carrying the actual request, and the deadline attached to it.",
  },
  {
    slug: "reports-and-minutes",
    title: "Reports & meeting minutes",
    summary:
      "Read a written report the way it is built: the plain written style, the finding that follows the check, the decisions recorded as decisions, and the single word that closes the whole document.",
    vocabulary: words(`報告書|ほうこくしょ|a written report
議事録|ぎじろく|meeting minutes
決定|けってい|a decision
課題|かだい|an issue to address
対策|たいさく|a countermeasure
現状|げんじょう|the present situation
以上|いじょう|that is all
概要|がいよう|an outline`),
    grammar: [
      g(
        "である{体|たい} in written reports",
        "A report drops です・ます for the plain written style: {必要|ひつよう}である、{報告|ほうこく}する。Nouns and な-adjectives take である rather than だ, which reads as more formal still. Mixing the two styles inside one document is the commonest mistake of all.",
        "{現状|げんじょう}の{対策|たいさく}では{不十分|ふじゅうぶん}であると{考|かんが}えられる。",
        "The present measures are considered insufficient.",
      ),
      g(
        "〜した{結果|けっか}",
        "The た-form plus {結果|けっか} reports what came out of an action once it had finished: {調査|ちょうさ}した{結果|けっか}、{原因|げんいん}が{分|わ}かった。It keeps the work and the finding in separate halves of the sentence, which is exactly the shape a report needs.",
        "{調査|ちょうさ}した{結果|けっか}、{原因|げんいん}は{設定|せってい}ミスであることが{分|わ}かった。",
        "As a result of the investigation, the cause was found to be a setting error.",
      ),
      g(
        "{下記|かき}のとおり & 〜{通|とお}り",
        "〜のとおり points the reader at something they can go and check: {下記|かき}のとおり、{別紙|べっし}のとおり、ご{連絡|れんらく}したとおり。After a noun it takes の, and after a verb the の disappears. It saves repeating content that is already written elsewhere.",
        "{会議|かいぎ}の{内容|ないよう}は{下記|かき}のとおりである。",
        "The content of the meeting is as set out below.",
      ),
      g(
        "Closing a report with {以上|いじょう}",
        "A report, a set of minutes and many e-mails end with {以上|いじょう} standing alone, meaning that is the whole of it. This is not the quantity sense that pairs with {未満|みまん} after a number; here it simply signals that nothing has been cut off, so a document without it can read as unfinished.",
        "{以上|いじょう}、ご{報告|ほうこく}いたします。",
        "That concludes my report.",
      ),
    ],
    grammarChecks: [
      q(
        "Which form belongs in a written report?",
        "不十分である",
        ["不十分です", "不十分でした", "不十分じゃない"],
        "Reports use the plain written style, in which nouns and な-adjectives take である rather than です.",
      ),
      q(
        "Choose the phrase for what a completed tally showed: アンケートを集計 ___、満足度が上がったことが分かった。",
        "した結果",
        ["する結果", "したとおり", "するため"],
        "The た-form plus 結果 reports the finding that followed a finished action: the tally came first, then what it showed.",
      ),
      q(
        "Choose the phrase that points to details set out below: 日程は ___ です。",
        "下記のとおり",
        ["下記とおり", "下記のため", "下記以上"],
        "After a noun, とおり takes の: 下記のとおり sends the reader to the details listed below.",
      ),
      q(
        "What does 以上 mean standing alone at the end of a document?",
        "That is the whole of it",
        [
          "More than that amount",
          "Please reply at once",
          "Continued on the next page",
        ],
        "As a closing line 以上 marks the end of the document; the quantity sense belongs directly after a number instead.",
      ),
    ],
    reading: p(
      "Minutes of a short meeting",
      "{会議|かいぎ}の{概要|がいよう}は{下記|かき}のとおりである。{現状|げんじょう}の{報告|ほうこく}では、{先月|せんげつ}の{問合|といあわ}せ{件数|けんすう}が{前月|ぜんげつ}より{増|ふ}えていることが{示|しめ}された。{原因|げんいん}を{調査|ちょうさ}した{結果|けっか}、{案内|あんない}ページの{説明|せつめい}が{分|わ}かりにくいことが{主|おも}な{課題|かだい}であると{分|わ}かった。{対策|たいさく}として、{来月|らいげつ}までにページを{書|か}き{直|なお}すことが{決定|けってい}された。{担当|たんとう}は{営業|えいぎょう}{部|ぶ}とする。{以上|いじょう}。",
      "An outline of the meeting is set out below. The report on the present situation showed that the number of enquiries last month had risen compared with the month before. Investigation of the cause found that the main issue was an unclear explanation on the information page. As a countermeasure, it was decided to rewrite the page by next month. The sales department is to be responsible. That is all.",
      q(
        "What was decided at the meeting?",
        "To rewrite the information page by next month",
        [
          "To reduce the number of enquiries",
          "To move the sales department",
          "To hold another meeting next month",
        ],
        "来月までにページを書き直すことが決定された is the recorded decision; the enquiry figures are the finding that led to it.",
      ),
      q(
        "What did the report on the present situation show?",
        "Enquiries rose last month compared with the month before",
        [
          "Enquiries fell after the page was rewritten",
          "The sales department lost staff",
          "The page had already been rewritten",
        ],
        "先月の問合せ件数が前月より増えていることが示された reports the rise that prompted the investigation.",
      ),
    ),
    listening: p(
      "Reporting the outcome aloud",
      "{調査|ちょうさ}した{結果|けっか}、{原因|げんいん}は{案内|あんない}ページの{説明|せつめい}であることが{分|わ}かりました。{対策|たいさく}は{下記|かき}のとおりで、{来月|らいげつ}までに{書|か}き{直|なお}します。{担当|たんとう}は{営業|えいぎょう}{部|ぶ}です。{以上|いじょう}、ご{報告|ほうこく}いたします。",
      "The investigation found that the cause was the explanation on the information page. The countermeasures are as set out below, and we will rewrite it by next month. The sales department is responsible. That concludes my report.",
      q(
        "Who will carry out the countermeasure?",
        "The sales department",
        [
          "The person giving the report",
          "An outside company",
          "Nobody has been decided yet",
        ],
        "担当は営業部です assigns the responsibility; the speaker is reporting the decision rather than volunteering for it.",
      ),
      q(
        "What did the investigation find?",
        "The cause was the explanation on the information page",
        [
          "The cause was a staff shortage",
          "The website had crashed",
          "No cause could be found",
        ],
        "調査した結果、原因は案内ページの説明であることが分かりました states the finding the investigation produced.",
      ),
    ),
    practice:
      "Rewrite a three-line update in report style: put it into である form, join the check and the finding with した結果, and close it with 以上.",
  },
  {
    slug: "workplace-documents",
    title: "Notices, forms & instructions",
    summary:
      "Read the paperwork that circulates at work: a notice with the exception buried in the middle of it, a form that labels what is done and what is not, and instructions written as rules for nobody in particular.",
    vocabulary: words(`通知|つうち|a notice
申請書|しんせいしょ|an application form
提出|ていしゅつ|submission
期限|きげん|a deadline
記入例|きにゅうれい|a filled-in example
社内|しゃない|within the company
該当|がいとう|being applicable
備考|びこう|remarks`),
    grammar: [
      g(
        "なお & ただし in notices",
        "なお adds a further point that stands on its own feet, while ただし attaches an exception to what was just said. A notice reading {全員|ぜんいん}{提出|ていしゅつ}のこと。ただし、{提出|ていしゅつ}{済|ず}みの{方|かた}は{不要|ふよう} hides the part that may let you off behind that ただし.",
        "ただし、{該当|がいとう}しない{方|かた}は{提出|ていしゅつ}{不要|ふよう}です。",
        "However, those to whom this does not apply need not submit it.",
      ),
      g(
        "〜{済|ず}み & {未|み}〜",
        "〜{済|ず}み marks something already done and {未|み}〜 marks something still outstanding: {確認|かくにん}{済|ず}み、{未|み}{提出|ていしゅつ}。Both attach straight to a noun of action, and a form uses them as status labels rather than as sentences, so they carry no verb of their own.",
        "{提出|ていしゅつ}{済|ず}みの{方|かた}は、{記入|きにゅう}の{必要|ひつよう}はありません。",
        "Those who have already submitted it need not fill it in.",
      ),
      g(
        "〜ごとに",
        "〜ごとに means at every one of something, with nothing skipped: {部署|ぶしょ}ごとに、{三|さん}か{月|げつ}ごとに。It differs from 〜おきに, which counts the gaps in between, so {二日|ふつか}ごとに and {二日|ふつか}おきに do not describe the same interval at all.",
        "{申請書|しんせいしょ}は{部署|ぶしょ}ごとにまとめて{提出|ていしゅつ}してください。",
        "Please submit the application forms together, by department.",
      ),
      g(
        "〜こと as a written instruction",
        "A rule written for the page ends in the dictionary form plus こと: {期限|きげん}までに{提出|ていしゅつ}すること。It issues an instruction without addressing anybody, which is why notices and manuals are full of it; said aloud to a person standing in front of you it would sound cold.",
        "{期限|きげん}までに{必|かなら}ず{提出|ていしゅつ}すること。",
        "Be sure to submit it by the deadline.",
      ),
    ],
    grammarChecks: [
      q(
        "A notice reads 全員提出のこと。ただし、提出済みの方は不要。Who can skip it?",
        "Those who have already submitted it",
        ["Everybody", "Nobody", "Only new employees"],
        "ただし introduces the exception, and 提出済み names exactly the people that exception covers.",
      ),
      q(
        "Which label marks something not yet done on a form?",
        "未提出",
        ["提出済み", "提出ごと", "提出のこと"],
        "未〜 marks an action still outstanding, whereas 〜済み marks one that has already been completed.",
      ),
      q(
        "A notice says 点検は三か月ごとに行います. How often is the inspection?",
        "Every three months",
        ["Once, three months from now", "Three times a month", "Only in March"],
        "ごとに means at every one of the stated units, so the inspection comes round every three months with none skipped.",
      ),
      q(
        "What is 期限までに提出すること on a notice?",
        "A written instruction to submit it by the deadline",
        [
          "A question asking whether it was submitted",
          "A report that it has been submitted",
          "The writer's personal wish to submit it",
        ],
        "Dictionary form plus こと at the end of a written rule issues an instruction without addressing anybody in particular.",
      ),
    ],
    reading: p(
      "A notice on the company board",
      "{社内|しゃない}{通知|つうち}。{健康|けんこう}{診断|しんだん}の{申請書|しんせいしょ}を{配|くば}りました。{期限|きげん}までに{必|かなら}ず{提出|ていしゅつ}すること。{申請書|しんせいしょ}は{部署|ぶしょ}ごとにまとめて{総務|そうむ}{部|ぶ}へお{出|だ}しください。なお、{記入例|きにゅうれい}は{掲示板|けいじばん}に{貼|は}ってあります。ただし、{昨年度|さくねんど}に{受診|じゅしん}{済|ず}みの{方|かた}と、{今年度|こんねんど}{入社|にゅうしゃ}の{方|かた}は{該当|がいとう}しませんので、{提出|ていしゅつ}は{不要|ふよう}です。ご{不明|ふめい}な{点|てん}は{備考|びこう}{欄|らん}にご{記入|きにゅう}ください。",
      "Company notice. Application forms for the health check have been handed out. Be sure to submit yours by the deadline. Please collect the forms by department and hand them in to the general affairs department. In addition, a filled-in example is posted on the board. However, those who had a check last year and those who joined this year are not covered, so they need not submit one. If anything is unclear, please write it in the remarks column.",
      q(
        "Who does not need to submit the form?",
        "People checked last year and people who joined this year",
        [
          "Everybody in the general affairs department",
          "Anybody who has missed the deadline",
          "Only the people who joined this year",
        ],
        "ただし introduces two exempt groups and 該当しません covers both of them, not only the new joiners.",
      ),
      q(
        "Where can staff see a filled-in example of the form?",
        "On the notice board",
        [
          "In the remarks column",
          "At the general affairs department",
          "Attached to an e-mail",
        ],
        "なお、記入例は掲示板に貼ってあります adds, as a separate point, where the example has been posted.",
      ),
    ),
    listening: p(
      "A reminder at the morning meeting",
      "{健康|けんこう}{診断|しんだん}の{申請書|しんせいしょ}ですが、{期限|きげん}は{今週|こんしゅう}の{金曜日|きんようび}です。{部署|ぶしょ}ごとにまとめますので、{木曜日|もくようび}までに{私|わたし}にお{渡|わた}しください。{提出|ていしゅつ}{済|ず}みの{方|かた}は{結構|けっこう}です。",
      "About the health check application forms: the deadline is this Friday. I will be collecting them by department, so please hand yours to me by Thursday. Those who have already submitted one need not bother.",
      q(
        "By when should forms reach the speaker?",
        "Thursday",
        ["Friday", "Next Monday", "The end of the month"],
        "The official deadline is Friday, but the speaker asks for them by Thursday in order to collect them by department first.",
      ),
      q(
        "Who does not need to hand anything in?",
        "Those who have already submitted it",
        [
          "Everyone in the department",
          "Anyone who missed the deadline",
          "Those who will hand it in on Friday",
        ],
        "提出済みの方は結構です: 済み marks those already done, and 結構です tells them nothing more is needed.",
      ),
    ),
    practice:
      "Take one notice and mark three things in it: the instruction written with こと, the exception introduced by ただし, and any status label using 済み or 未.",
  },
  {
    slug: "particles-nuance",
    title: "Particles that shade a statement",
    summary:
      "Add weight, dismissal, or a sweeping negative to a sentence you can already build, and hear the difference between insisting on something and brushing it aside.",
    vocabulary: words(`努力|どりょく|effort
経験|けいけん|experience
機会|きかい|an opportunity
価値|かち|value
自信|じしん|confidence
失敗|しっぱい|a failure
結果|けっか|a result
理解|りかい|understanding`),
    grammar: [
      g(
        "〜こそ for emphasis",
        "こそ singles out the word in front of it as the one that really counts: {今度|こんど}こそ means this time for certain, and こちらこそ returns a greeting by insisting the credit belongs to you. It replaces は or が rather than stacking on top of them.",
        "{今度|こんど}こそ{成功|せいこう}させたいです。",
        "This time I really want to make it work.",
      ),
      g(
        "〜も with a negative",
        "も after a counter and in front of a negative sweeps the whole range away: {一人|ひとり}も{来|こ}なかった means not a single person came. Without も the sentence only says that few came, so も is what turns a small number into none at all.",
        "その{機会|きかい}は{一度|いちど}もありませんでした。",
        "There was not a single such opportunity.",
      ),
      g(
        "〜なんて for dismissal",
        "なんて quotes something in order to brush it aside: {無理|むり}なんて{言|い}わないでください。It carries the speaker's own attitude, usually surprise or scorn, so it is never the neutral quoting particle that と is.",
        "{失敗|しっぱい}したなんて{思|おも}っていません。",
        "I do not think of it as having failed at all.",
      ),
      g(
        "〜でも for 'even'",
        "After a noun, でも means even: {子|こ}どもでも{分|わ}かります. With a question word it sweeps everything in, as in {誰|だれ}でも and いつでも. It also floats a loose suggestion, so お{茶|ちゃ}でもどうですか means tea or something like it.",
        "{子|こ}どもでも{分|わ}かる{説明|せつめい}がほしいです。",
        "I want an explanation even a child could follow.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the reply to ありがとうございました that insists the thanks belong on your side.",
        "こちらこそ",
        ["こちらでも", "こちらなんて", "こちらしか"],
        "こそ singles out the word before it, so こちらこそ insists that the gratitude really belongs on your side.",
      ),
      q(
        "What does 一人も来なかった mean?",
        "Nobody came at all",
        ["One person came", "Only one person came", "A few people came"],
        "も in front of a negative sweeps the whole range away, so not even one single person came.",
      ),
      q(
        "Choose the phrase that brushes a remark aside.",
        "無理なんて言わないで",
        ["無理と言わないで", "無理こそ言わないで", "無理でも言わないで"],
        "なんて carries the speaker's dismissal of the remark, while と would simply quote the same words neutrally.",
      ),
      q(
        "What does 日曜日でも店は開いています mean?",
        "The shop is open even on Sundays",
        [
          "The shop is open only on Sundays",
          "The shop is closed on Sundays",
          "The shop was open last Sunday too",
        ],
        "でも after a noun means even: Sunday is the day you would least expect it, yet the shop is open.",
      ),
    ],
    reading: p(
      "A second attempt",
      "{去年|きょねん}の{試験|しけん}では{一問|いちもん}も{解|と}けませんでした。{自信|じしん}をなくして、もうやめようかとも{思|おも}いました。でも、{失敗|しっぱい}なんて{何度|なんど}でもしていいと{先生|せんせい}に{言|い}われました。{努力|どりょく}した{経験|けいけん}にこそ{価値|かち}があるそうです。{今度|こんど}こそいい{結果|けっか}を{出|だ}したいと{思|おも}っています。",
      "In last year's exam I could not solve a single question. I lost my confidence and even thought about giving up. But my teacher told me it is fine to fail as many times as you like. Apparently it is the experience of having made the effort that really has value. This time I want to get a good result.",
      q(
        "What does the teacher say has value?",
        "The experience of having made the effort",
        ["Passing the exam", "Giving up early", "Answering every question"],
        "努力した経験にこそ価値がある singles out the experience itself with こそ, rather than the result it produced.",
      ),
      q(
        "How did the writer do in last year's exam?",
        "Could not solve a single question",
        [
          "Solved about half of the questions",
          "Passed with a good result",
          "Did not sit the exam",
        ],
        "一問も解けませんでした uses も with a negative to say not even one question was solved.",
      ),
    ),
    listening: p(
      "Encouraging a colleague",
      "{準備|じゅんび}する{時間|じかん}が{一日|いちにち}もありませんでした。{大丈夫|だいじょうぶ}ですよ。{今度|こんど}こそうまくいきます。{理解|りかい}できないなんてことはありません。",
      "I did not have even one day to prepare. It's all right. This time it will go well. It is not as though you cannot understand it.",
      q(
        "What does the second speaker say?",
        "It will go well this time",
        [
          "There was enough time",
          "The task is impossible",
          "They will do it instead",
        ],
        "今度こそうまくいきます uses こそ to insist that this particular attempt is the one that will count.",
      ),
      q(
        "How much time did the first speaker have to prepare?",
        "Not even one day",
        ["Exactly one day", "A whole week", "More than enough"],
        "一日もありませんでした sweeps the range to zero: there was not a single day to prepare.",
      ),
    ),
    practice:
      "Rewrite three flat sentences: add こそ to the part that matters, turn one into a sweeping negative with も, and dismiss one remark with なんて.",
  },
  {
    slug: "trouble-while-out",
    title: "Trouble while out: lost items & near misses",
    summary:
      "Report a lost wallet at a police box, describe it well enough to be recognised, and explain a near miss on the street calmly, from what happened to how badly anyone was hurt.",
    vocabulary: words(`交番|こうばん|a police box
落とし物|おとしもの|a lost item
届ける|とどける|to hand in
特徴|とくちょう|a distinguishing feature
見つかる|みつかる|to be found
怪我|けが|an injury
転ぶ|ころぶ|to fall over
警察|けいさつ|the police`),
    grammar: [
      g(
        "〜ところだった",
        "Dictionary form + ところだった says something very nearly happened but in the end did not: {車|くるま}にぶつかるところだった. Unlike ところです, which fixes a moment in time, it looks back at a near miss with relief. もう{少|すこ}しで or {危|あぶ}なく in front stresses how close it came.",
        "もう{少|すこ}しで{自転車|じてんしゃ}にぶつかるところでした。",
        "I very nearly collided with a bicycle.",
      ),
      g(
        "〜っぽい",
        "っぽい turns a noun or a verb stem into an い-adjective meaning -ish. With a colour it helps describe something you cannot pin down exactly: {黒|くろ}っぽい{財布|さいふ} is a blackish wallet. After a person noun it means behaving like one, as in {子|こ}どもっぽい, and after a verb stem it names a habit, as in {忘|わす}れっぽい, forgetful. It suits speech rather than formal documents.",
        "{黒|くろ}っぽい{革|かわ}の{財布|さいふ}です。",
        "It is a blackish leather wallet.",
      ),
      g(
        "〜{気|き}がする",
        "A plain clause + {気|き}がする reports a hunch you cannot prove yet: {電車|でんしゃ}に{置|お}いてきた{気|き}がします. It is softer than と{思|おも}います, because it presents the idea as a feeling rather than a judgement. Compare {音|おと}がする, which reports a sound rather than an idea.",
        "{駅|えき}のベンチに{置|お}いてきた{気|き}がします。",
        "I have a feeling I left it on a bench at the station.",
      ),
      g(
        "〜で{済|す}む・〜ずに{済|す}む",
        "{済|す}む means a matter was settled with no more than something: {軽|かる}い{怪我|けが}で{済|す}んだ says the injury went no further than a light one. With a verb, ずに{済|す}む or ないで{済|す}む means you were spared it altogether: {入院|にゅういん}せずに{済|す}んだ. Both carry relief that things were not worse.",
        "{幸|さいわ}い、{軽|かる}い{怪我|けが}で{済|す}みました。",
        "Luckily, it was only a light injury.",
      ),
    ],
    grammarChecks: [
      q(
        "Which sentence describes a near miss?",
        "車にぶつかるところでした",
        [
          "車にぶつかったところです",
          "車にぶつかっているところです",
          "車にぶつかるところです",
        ],
        "Dictionary form + ところだった looks back at something that almost happened but did not; ところです places you at a moment in the present.",
      ),
      q(
        "Describe a wallet whose colour you are not sure of: ___財布です。",
        "黒っぽい",
        ["黒らしい", "黒がちな", "黒気味の"],
        "っぽい after a colour gives -ish, so 黒っぽい is blackish. らしい, がち and 気味 do not attach to a colour this way.",
      ),
      q(
        "Which states a hunch rather than a firm opinion?",
        "電車に置いてきた気がします",
        [
          "電車に置いてきたと言います",
          "電車に置いてきたはずがありません",
          "電車に置いてきたことがあります",
        ],
        "気がする presents an idea as a feeling you cannot prove yet; と言います reports words, and ことがあります describes past experience.",
      ),
      q(
        "Choose the phrase of relief: 幸い、軽い怪我___。",
        "で済みました",
        ["に済みました", "を済ませました", "ずに済みました"],
        "Noun + で済む means the damage went no further than that noun. ずに済む attaches to a verb, not to a noun such as 怪我.",
      ),
    ],
    reading: p(
      "A report at the police box",
      "{昨日|きのう}の{夕方|ゆうがた}、{駅前|えきまえ}の{交番|こうばん}に{行|い}きました。{電車|でんしゃ}を{降|お}りようとしたとき、{財布|さいふ}がないことに{気|き}がついたからです。{警察|けいさつ}の{人|ひと}に{特徴|とくちょう}を{聞|き}かれたので、「{黒|くろ}っぽい{革|かわ}の{財布|さいふ}で、{中|なか}に{学生証|がくせいしょう}が{入|はい}っています」と{説明|せつめい}しました。{駅|えき}のベンチに{置|お}いてきた{気|き}がすると{言|い}うと、{落|お}とし{物|もの}の{届|とど}けを{出|だ}すように{言|い}われました。{今朝|けさ}、{交番|こうばん}から{財布|さいふ}が{見|み}つかったという{電話|でんわ}がありました。{誰|だれ}かが{届|とど}けてくれたおかげで、{学生証|がくせいしょう}を{再発行|さいはっこう}せずに{済|す}みました。",
      "Yesterday evening I went to the police box in front of the station, because as I was about to get off the train I noticed my wallet was gone. The officer asked me what it looked like, so I explained, “It is a blackish leather wallet with my student ID inside.” When I said I had a feeling I had left it on a bench at the station, I was told to file a lost-property report. This morning the police box phoned to say the wallet had been found. Because somebody handed it in, I did not have to get my student ID reissued.",
      q(
        "Why did the writer go to the police box?",
        "Their wallet was missing",
        [
          "They had found a wallet",
          "They had been in an accident",
          "They needed a new student ID",
        ],
        "財布がないことに気がついたからです gives the reason: the writer noticed their own wallet had gone missing on the train.",
      ),
      q(
        "What was the writer spared in the end?",
        "Having their student ID reissued",
        [
          "Filing a lost-property report",
          "Going back to the station",
          "Describing the wallet",
        ],
        "学生証を再発行せずに済みました: because someone handed the wallet in, the ID card did not need replacing. The report was still filed.",
      ),
    ),
    listening: p(
      "A near miss on the pavement",
      "{大丈夫|だいじょうぶ}ですか。すみません、{急|いそ}いでいて、もう{少|すこ}しでぶつかるところでした。いえ、{私|わたし}も{前|まえ}を{見|み}ていなかったんです。{転|ころ}んだときに{手|て}を{少|すこ}しすりむいただけなので、{病院|びょういん}に{行|い}かずに{済|す}みそうです。",
      "Are you all right? I am sorry, I was in a hurry and very nearly ran into you. No, I was not looking where I was going either. I only grazed my hand a little when I fell, so it looks as though I will not need to go to hospital.",
      q(
        "What does the first speaker apologise for?",
        "Nearly running into the other person",
        [
          "Knocking over the other person's bag",
          "Being late for a meeting",
          "Taking the other person's seat",
        ],
        "もう少しでぶつかるところでした describes a collision that almost happened; the speaker was hurrying and apologises for it.",
      ),
      q(
        "How badly is the second speaker hurt?",
        "Only a slight graze on the hand",
        [
          "A broken wrist",
          "A head injury that needs hospital",
          "No injury, but a damaged phone",
        ],
        "手を少しすりむいただけ and 病院に行かずに済みそう show the injury is minor enough to avoid a trip to hospital.",
      ),
    ),
    practice:
      "Role-play a visit to a police box: describe a lost item with っぽい, give a hunch about where you left it with 気がする, and finish with a sentence of relief using で済む or ずに済む.",
  },
  {
    slug: "campus-life",
    title: "Campus life: seminars, reports & statistics",
    summary:
      "Follow a university seminar, define the key terms in a report, compare figures from a survey, and work through the numbers of a statistics class in Japanese.",
    vocabulary: words(`講義|こうぎ|a lecture
研究|けんきゅう|research
専攻|せんこう|a major subject
単位|たんい|a course credit
学期|がっき|a term; a semester
平均|へいきん|an average
回答|かいとう|a response to a survey
図表|ずひょう|charts and tables`),
    grammar: [
      g(
        "〜に{比|くら}べて・〜と{比|くら}べて",
        "Noun + に{比|くら}べて or と{比|くら}べて sets up a point of comparison and then says how the topic differs from it: {去年|きょねん}に{比|くら}べて{増|ふ}えた. It is the natural way to report survey figures and trends. Formal writing shortens it to に{比|くら}べ, with no て.",
        "{去年|きょねん}に{比|くら}べて、{回答|かいとう}した{学生|がくせい}が{増|ふ}えました。",
        "Compared with last year, more students responded.",
      ),
      g(
        "〜を{中心|ちゅうしん}に",
        "Noun + を{中心|ちゅうしん}に names the core of an activity while allowing that other things are included: {若者|わかもの}を{中心|ちゅうしん}に{人気|にんき}がある. Before another noun it becomes を{中心|ちゅうしん}とした, as in {留学生|りゅうがくせい}を{中心|ちゅうしん}とした{調査|ちょうさ}.",
        "このゼミでは、{環境|かんきょう}{問題|もんだい}を{中心|ちゅうしん}に{研究|けんきゅう}しています。",
        "In this seminar we mainly research environmental issues.",
      ),
      g(
        "〜とは・〜というのは",
        "Put a term before とは or というのは to define or explain it, and close the sentence with のことです or という{意味|いみ}です: {平均|へいきん}とは、{合計|ごうけい}を{人数|にんずう}で{割|わ}った{数|かず}のことです. とは is the written, textbook form; というのは is the one you hear in conversation.",
        "ゼミというのは、{少人数|しょうにんずう}で{研究|けんきゅう}や{発表|はっぴょう}をする{授業|じゅぎょう}のことです。",
        "A zemi is a small-group class where you research and give presentations.",
      ),
      g(
        "Proportions: 〜{割|わり}・〜%・〜{分|ぶん}の〜",
        "Japanese gives a proportion three ways. {割|わり} counts tenths, so {三割|さんわり} is 30%; パーセント follows the number, as in 25パーセント; and a fraction names the whole first, so {四分|よんぶん}の{一|いち} is one quarter. Saying the whole before the part is the step learners most often reverse.",
        "{学生|がくせい}の{三割|さんわり}が、アルバイトをしていると{答|こた}えました。",
        "Thirty percent of the students answered that they have a part-time job.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase that compares with last year: 去年___、回答が増えました。",
        "に比べて",
        ["について", "によって", "にとって"],
        "に比べて sets last year up as the point of comparison; について, によって and にとって mark a topic, a cause or means, and a viewpoint.",
      ),
      q(
        "What does 留学生を中心とした調査 describe?",
        "A survey mainly of international students",
        [
          "A survey only of Japanese students",
          "A survey that left out international students",
          "A survey held in the middle of the campus",
        ],
        "を中心とした names the core group of the survey while allowing others to take part; 中心 here is not a place on campus.",
      ),
      q(
        "Which sentence defines a term?",
        "平均とは、合計を人数で割った数のことです",
        [
          "平均によって、合計を人数で割りました",
          "平均なら、合計を人数で割ってください",
          "平均だから、合計を人数で割ったのです",
        ],
        "とは introduces the term being defined, and のことです closes the definition; the other sentences give an instruction or a reason.",
      ),
      q(
        "What does 四分の一 mean?",
        "One quarter",
        ["Four quarters", "Forty percent", "One fifth"],
        "A Japanese fraction names the whole first, so 四分の一 is one of four equal parts, a quarter. Forty percent would be 四割.",
      ),
    ],
    reading: p(
      "A seminar report on part-time work",
      "{私|わたし}たちのゼミでは、{学生|がくせい}の{生活|せいかつ}を{中心|ちゅうしん}に{研究|けんきゅう}しています。{今学期|こんがっき}は、{二年生|にねんせい}{二百人|にひゃくにん}にアルバイトについてのアンケートを{行|おこな}いました。{回答|かいとう}した{学生|がくせい}の{六割|ろくわり}がアルバイトをしていて、{一週間|いっしゅうかん}の{平均|へいきん}は{十二時間|じゅうにじかん}でした。{去年|きょねん}の{調査|ちょうさ}に{比|くら}べて、{時間|じかん}は{少|すこ}し{減|へ}っています。{授業|じゅぎょう}の{単位|たんい}を{落|お}とさないように、{働|はたら}く{時間|じかん}を{減|へ}らした{学生|がくせい}が{多|おお}いようです。",
      "Our seminar mainly researches student life. This term we gave two hundred second-year students a questionnaire about part-time work. Sixty percent of those who responded have a part-time job, and they work twelve hours a week on average. Compared with last year's survey, the hours have fallen slightly. It seems many students have cut their working hours so that they do not fail any of their course credits.",
      q(
        "What was the questionnaire about?",
        "Second-year students' part-time work",
        [
          "How students choose a seminar",
          "Which lectures students prefer",
          "How much students spend on food",
        ],
        "二年生二百人にアルバイトについてのアンケートを行いました states both the group asked and the topic of the questionnaire.",
      ),
      q(
        "How have the students' working hours changed since last year?",
        "They have fallen slightly",
        [
          "They have doubled",
          "They have not changed",
          "They have risen to twelve hours",
        ],
        "去年の調査に比べて、時間は少し減っています compares the two years: the hours went down a little, apparently to protect course credits.",
      ),
    ),
    listening: p(
      "A statistics class",
      "では、{問題|もんだい}です。あるクラスの{学生|がくせい}は{四十人|よんじゅうにん}で、そのうち{四分|よんぶん}の{一|いち}が{自転車|じてんしゃ}で{通学|つうがく}しています。{自転車|じてんしゃ}で{来|く}る{学生|がくせい}は{何人|なんにん}でしょうか。{答|こた}えは{十人|じゅうにん}ですね。{全体|ぜんたい}を{先|さき}に{言|い}うのが、{分数|ぶんすう}の{読|よ}み{方|かた}のポイントです。",
      "Now, a problem. A class has forty students, and a quarter of them come to school by bicycle. How many students come by bicycle? The answer is ten. The key to reading a fraction is to say the whole first.",
      q(
        "How many students cycle to school?",
        "Ten",
        ["Four", "Thirty", "Forty"],
        "四十人のうち四分の一 means a quarter of forty, and the teacher confirms the answer as 十人.",
      ),
      q(
        "What tip does the teacher give?",
        "Say the whole before the part in a fraction",
        [
          "Always turn a fraction into a percentage",
          "Count the students twice",
          "Say the part before the whole in a fraction",
        ],
        "全体を先に言うのが、分数の読み方のポイントです: in 四分の一 the whole, 四, comes before the part, 一.",
      ),
    ),
    practice:
      "Summarise a small survey of your own: define one term with とは, compare two figures with に比べて, and give one result as a 割, as a percentage, and as a fraction.",
    problems: problemSet(
      "Statistics class: percentages, averages & speed",
      "Find the whole before you calculate: そのうち points back to it, 割 and % take a share of it, 平均 divides a total by how many there are, and 時速 is a distance divided by hours.",
      words(`割合|わりあい|a proportion
合計|ごうけい|a total
割る|わる|to divide
距離|きょり|distance
時速|じそく|speed per hour
比|ひ|a ratio`),
      {
        text: "テストを{受|う}けた{学生|がくせい}は50{人|にん}で、そのうち6{割|わり}が{合格|ごうかく}しました。{合格|ごうかく}した{学生|がくせい}は{何人|なんにん}ですか。",
        translation:
          "Fifty students took the test, and 60% of them passed. How many students passed?",
        steps: [
          "そのうち points back to the 50 students, so the whole is 50.",
          "6割 means six tenths, or 0.6.",
          "Multiply the whole by the share: 50 × 0.6 = 30, so 30人 passed.",
        ],
      },
      [
        wordProblem(
          "アンケートに{答|こた}えた{学生|がくせい}は200{人|にん}でした。そのうち35%が「{毎日|まいにち}{図書館|としょかん}を{使|つか}う」と{答|こた}えました。{毎日|まいにち}{図書館|としょかん}を{使|つか}う{学生|がくせい}は{何人|なんにん}ですか。",
          "Two hundred students answered the questionnaire. Of them, 35% said they use the library every day. How many students use the library every day?",
          "70人",
          ["35人", "130人", "7人"],
          "そのうち refers back to the 200 students, and 35% is 0.35: 200 × 0.35 = 70, so 70人. 130人 is the other 65%, and 35人 mistakes the percentage for a number of people.",
        ),
        wordProblem(
          "ゼミの{学生|がくせい}5{人|にん}がレポートを{書|か}きました。{枚数|まいすう}は3{枚|まい}、5{枚|まい}、4{枚|まい}、6{枚|まい}、7{枚|まい}でした。{1人|ひとり}{平均|へいきん}{何枚|なんまい}{書|か}きましたか。",
          "Five students in the seminar wrote reports. Their lengths were 3, 5, 4, 6 and 7 pages. How many pages did each student write on average?",
          "5枚",
          ["25枚", "4枚", "6枚"],
          "平均 is the total divided by how many there are: 3 + 5 + 4 + 6 + 7 = 25 pages, and 25 ÷ 5 = 5, so 5枚. 25枚 is the total before dividing, and 4枚 is only the middle number in the list.",
        ),
        wordProblem(
          "{駅|えき}から{大学|だいがく}まで3キロあります。{自転車|じてんしゃ}で15{分|ふん}かかりました。{自転車|じてんしゃ}の{速|はや}さは{時速|じそく}{何|なん}キロですか。",
          "It is 3 km from the station to the university, and the trip took 15 minutes by bicycle. What was the bicycle's speed in kilometres per hour?",
          "時速12キロ",
          ["時速5キロ", "時速45キロ", "時速0.2キロ"],
          "時速 asks for kilometres per hour. 15分 is a quarter of an hour, 0.25時間, so 3 ÷ 0.25 = 12, giving 時速12キロ. 3 ÷ 15 = 0.2 is the distance per minute, not per hour.",
        ),
        wordProblem(
          "{講義|こうぎ}の{登録者|とうろくしゃ}は120{人|にん}で、{男子|だんし}と{女子|じょし}の{比|ひ}は2{対|たい}3です。{女子|じょし}は{何人|なんにん}ですか。",
          "A lecture has 120 registered students, and the ratio of men to women is 2 to 3. How many women are there?",
          "72人",
          ["48人", "40人", "60人"],
          "A 比 of 2対3 splits the whole into 2 + 3 = 5 equal parts. Each part is 120 ÷ 5 = 24, and 女子 has 3 parts: 24 × 3 = 72, so 72人. 48人 is the number of 男子.",
        ),
      ],
    ),
  },
  {
    slug: "job-interview",
    title: "Job interviews: motivation, strengths & habits",
    summary:
      "Answer the standard questions of a Japanese job interview: why you applied, what you did as a student, what your strengths are, and which habits show how you work.",
    vocabulary: words(`面接|めんせつ|a job interview
応募|おうぼ|an application
履歴書|りれきしょ|a CV; a résumé
志望動機|しぼうどうき|reasons for applying
長所|ちょうしょ|a strong point
短所|たんしょ|a weak point
採用|さいよう|being hired
御社|おんしゃ|your company (spoken)`),
    grammar: [
      g(
        "〜をきっかけに",
        "Noun + をきっかけに names the event that set something off: {留学|りゅうがく}をきっかけに{日本|にほん}の{会社|かいしゃ}に{興味|きょうみ}を{持|も}った. It suits the story of how an interest or a decision began, which is exactly what an interviewer asks about. A clause needs こと first: {入院|にゅういん}したことをきっかけに.",
        "アルバイトをきっかけに、{接客|せっきゃく}の{仕事|しごと}に{興味|きょうみ}を{持|も}ちました。",
        "My part-time job was what got me interested in customer-service work.",
      ),
      g(
        "〜として",
        "Noun + として gives the role or capacity in which you act: リーダーとして, {社会人|しゃかいじん}として. Before another noun it becomes としての, as in リーダーとしての{経験|けいけん}. It lets you describe what you did through the position you held rather than by listing tasks.",
        "{大学|だいがく}では、サークルのリーダーとして{合宿|がっしゅく}を{企画|きかく}しました。",
        "At university, I organised our club's training camp as its leader.",
      ),
      g(
        "〜ことにしている",
        "Dictionary form + ことにしている describes a personal rule you keep because you once decided on it: {毎朝|まいあさ}ニュースを{読|よ}むことにしています. Compare ことにした, the single decision, and ようにしている, which stresses effort rather than a fixed rule. In an interview it shows a habit you chose on purpose.",
        "{仕事|しごと}の{前|まえ}に、その{日|ひ}の{予定|よてい}を{確認|かくにん}することにしています。",
        "I make a point of checking the day's schedule before I start work.",
      ),
      g(
        "{長所|ちょうしょ}は〜ところです",
        "ところ after a plain clause can mean a side of someone's character, so {長所|ちょうしょ}は{最後|さいご}まであきらめないところです names a strength. It differs from {食|た}べるところです, where ところ places an action in time. Follow the answer with a short example, or it sounds like a slogan.",
        "{私|わたし}の{長所|ちょうしょ}は、{最後|さいご}まであきらめないところです。",
        "My strength is that I never give up before the end.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase for what set your interest off: 留学___、日本の会社に興味を持ちました。",
        "をきっかけに",
        ["をもとに", "のかわりに", "のくせに"],
        "をきっかけに names the event that started the interest; をもとに names source material, and かわりに and くせに express substitution and criticism.",
      ),
      q(
        "Which phrase describes experience gained in a role?",
        "リーダーとしての経験",
        [
          "リーダーにしての経験",
          "リーダーとした経験",
          "リーダーについての経験",
        ],
        "Before a noun, として becomes としての. リーダーについての経験 would mean experience about leaders, not experience as one.",
      ),
      q(
        "Which describes a habit you keep as a personal rule?",
        "毎朝ニュースを読むことにしています",
        [
          "毎朝ニュースを読むことにしました",
          "毎朝ニュースを読むことになっています",
          "毎朝ニュースを読んだことがあります",
        ],
        "ことにしている is a rule you set yourself and keep following; ことにした is the one-off decision, and ことになっている is a rule set by others.",
      ),
      q(
        "What does 長所は最後まであきらめないところです mean?",
        "My strength is that I never give up",
        [
          "My strength is the place where I never give up",
          "I am about to give up at the end",
          "I have just given up at the end",
        ],
        "ところ here means a side of someone's character, not a place or a moment in time, so the sentence names a strength.",
      ),
    ],
    reading: p(
      "Notes for an interview",
      "{来週|らいしゅう}、ホテルの{面接|めんせつ}があります。{志望動機|しぼうどうき}は、{二年前|にねんまえ}の{日本|にほん}{旅行|りょこう}をきっかけに{接客|せっきゃく}に{興味|きょうみ}を{持|も}ったことです。{大学|だいがく}では{留学生|りゅうがくせい}{会|かい}のリーダーとして、{新入生|しんにゅうせい}の{案内|あんない}をしてきました。{長所|ちょうしょ}は、{困|こま}っている{人|ひと}にすぐ{声|こえ}をかけられるところです。{短所|たんしょ}は{心配性|しんぱいしょう}なところですが、{準備|じゅんび}を{早|はや}めにすることにしているので、{仕事|しごと}では{役|やく}に{立|た}っていると{思|おも}います。",
      "Next week I have an interview at a hotel. My reason for applying is that a trip to Japan two years ago got me interested in customer service. At university I have been showing new students around as leader of the international students' association. My strength is that I am quick to offer help to people who look lost. My weakness is that I worry a lot, but because I make a point of preparing early, I think it actually helps me at work.",
      q(
        "What started the writer's interest in customer service?",
        "A trip to Japan two years ago",
        [
          "A part-time job at a hotel",
          "A class at university",
          "Advice from a teacher",
        ],
        "二年前の日本旅行をきっかけに names the trip as the event that set off the interest in 接客.",
      ),
      q(
        "How does the writer present their weakness?",
        "As worrying, balanced by always preparing early",
        [
          "As being too quiet with strangers",
          "As arriving late to meetings",
          "As having no experience as a leader",
        ],
        "短所は心配性なところですが is followed by 準備を早めにすることにしている, a habit that turns the weakness into something useful.",
      ),
    ),
    listening: p(
      "The first interview question",
      "では、{応募|おうぼ}した{理由|りゆう}を{教|おし}えてください。はい。{学生|がくせい}のときにカフェでアルバイトをしたことをきっかけに、お{客様|きゃくさま}と{話|はな}す{仕事|しごと}がしたいと{思|おも}うようになりました。{御社|おんしゃ}は{新人|しんじん}の{研修|けんしゅう}が{充実|じゅうじつ}していると{聞|き}き、{応募|おうぼ}いたしました。",
      "Now, please tell us why you applied. Yes. Working part-time at a café as a student made me want a job talking with customers. I heard that your company has a thorough training programme for new staff, so I applied.",
      q(
        "Why does the candidate want this kind of work?",
        "A café job made them want to work with customers",
        [
          "They studied hotel management",
          "A friend works at the company",
          "They want a higher salary",
        ],
        "カフェでアルバイトをしたことをきっかけに introduces the café job as the starting point of wanting a job talking with お客様.",
      ),
      q(
        "What had the candidate heard about the company?",
        "Its training for new staff is thorough",
        [
          "It is hiring many students",
          "It pays well for overtime",
          "It has cafés abroad",
        ],
        "新人の研修が充実していると聞き gives what attracted the candidate to this particular company.",
      ),
    ),
    practice:
      "Prepare three interview answers: why you applied, using をきっかけに; what you did as a student, using として; and one strength with ところです, backed by a habit you keep with ことにしている.",
  },
  {
    slug: "hospital-visit",
    title: "Visiting someone in hospital",
    summary:
      "Visit a friend or colleague in hospital: check the visiting rules, ask how they are feeling, and leave with words that wish them well without tiring them out.",
    vocabulary: words(`お見舞い|おみまい|visiting someone who is ill
入院|にゅういん|a stay in hospital
退院|たいいん|leaving hospital
面会時間|めんかいじかん|visiting hours
病室|びょうしつ|a hospital room
看護師|かんごし|a nurse
手術|しゅじゅつ|an operation
回復|かいふく|recovery`),
    grammar: [
      g(
        "〜{気味|ぎみ}",
        "{気味|ぎみ} after a noun or a verb stem means a slight touch of something, usually unwelcome: {風邪|かぜ}{気味|ぎみ}, {疲|つか}れ{気味|ぎみ}. It names a mild state rather than the full condition, so {風邪|かぜ}{気味|ぎみ}なので{遠慮|えんりょ}します is a considerate reason not to visit a patient.",
        "{少|すこ}し{風邪|かぜ}{気味|ぎみ}なので、{今日|きょう}のお{見舞|みま}いはやめておきます。",
        "I have a bit of a cold, so I will not visit today.",
      ),
      g(
        "〜がち",
        "がち after a noun or a verb stem says something tends to happen, often more than you would like: {入院中|にゅういんちゅう}は{運動|うんどう}{不足|ぶそく}になりがちです. Unlike {気味|ぎみ}, which describes how you are now, がち describes a pattern over time. It is rarely used for good tendencies.",
        "{入院中|にゅういんちゅう}は、{気持|きも}ちが{暗|くら}くなりがちです。",
        "While in hospital, people tend to feel low.",
      ),
      g(
        "〜てほしい・〜ないでほしい",
        "て-form + ほしい says you want someone else to do something: {早|はや}く{元気|げんき}になってほしい. Use ないでほしい for what you want them not to do: {無理|むり}しないでほしい. The person asked takes に, and saying it straight to a superior sounds too direct, so keep it for friends or for talking about someone.",
        "{無理|むり}しないでほしいと、みんな{言|い}っていましたよ。",
        "Everyone was saying they do not want you to push yourself.",
      ),
      g(
        "〜ますように",
        "ますように at the end of a sentence turns it into a wish or a small prayer that something will turn out well: {早|はや}くよくなりますように. It is common on get-well cards and at shrines. Unlike てほしい, it does not ask anyone to act; it simply hopes for the outcome.",
        "{手術|しゅじゅつ}がうまくいきますように。",
        "I hope the operation goes well.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the reason for staying away from a patient: 少し風邪___なので、今日は行きません。",
        "気味",
        ["がち", "っぽさ", "らしさ"],
        "気味 names a slight touch of a condition you have now; がち describes a tendency over time and does not fit a single day.",
      ),
      q(
        "What does 入院中は運動不足になりがちです mean?",
        "In hospital, people tend not to get enough exercise",
        [
          "In hospital, people are not allowed to exercise",
          "In hospital, exercise is compulsory",
          "In hospital, people get slightly too much exercise",
        ],
        "がち says something tends to happen, usually an unwelcome pattern; here it is a lack of exercise during a hospital stay.",
      ),
      q(
        "Which sentence asks someone not to push themselves?",
        "無理しないでほしいです",
        ["無理してほしいです", "無理しないでしまいます", "無理しがちです"],
        "ないでほしい says what you want someone else not to do; してほしい would ask them to push themselves.",
      ),
      q(
        "Which is a wish for a get-well card?",
        "早くよくなりますように",
        [
          "早くよくなるように言いました",
          "早くよくなってしまいました",
          "早くよくなるところでした",
        ],
        "ますように at the end of a sentence expresses a hope that things turn out well; the other sentences report words or events.",
      ),
    ],
    reading: p(
      "A visit to the ward",
      "{先週|せんしゅう}、{足|あし}の{手術|しゅじゅつ}を{受|う}けた{田中|たなか}さんのお{見舞|みま}いに{行|い}きました。{面会時間|めんかいじかん}は{午後|ごご}{二時|にじ}から{七時|しちじ}までで、{病室|びょうしつ}には{一度|いちど}に{二人|ふたり}までしか{入|はい}れません。{田中|たなか}さんは「{入院中|にゅういんちゅう}は{体|からだ}を{動|うご}かさないので、{太|ふと}りがちなんです」と{笑|わら}っていました。{看護師|かんごし}さんの{話|はなし}では、{回復|かいふく}は{順調|じゅんちょう}で、{来週|らいしゅう}には{退院|たいいん}できるそうです。{会社|かいしゃ}のみんなから、{無理|むり}しないでほしいというカードを{預|あず}かってきたので、{渡|わた}してきました。",
      "I went to visit Mr Tanaka, who had an operation on his leg last week. Visiting hours are from two to seven in the afternoon, and no more than two people can be in the room at one time. Mr Tanaka laughed and said, “You hardly move in hospital, so you tend to put on weight.” According to the nurse, his recovery is going well and he should be able to leave hospital next week. Everyone at work had given me a card saying they did not want him to push himself, so I handed it over.",
      q(
        "How is Mr Tanaka's recovery going?",
        "Well; he may leave hospital next week",
        [
          "Slowly; he needs another operation",
          "He has already left hospital",
          "Nobody has told the writer",
        ],
        "看護師さんの話では、回復は順調で、来週には退院できるそうです reports the nurse's news: the recovery is on track.",
      ),
      q(
        "How many visitors may be in the room at once?",
        "Two at most",
        ["Only one", "Any number", "Up to seven"],
        "一度に二人までしか入れません sets the limit at two people at a time; 七時 is when visiting hours end.",
      ),
    ),
    listening: p(
      "At the bedside",
      "お{加減|かげん}はいかがですか。おかげさまで、だいぶよくなりました。よかったです。でも、{疲|つか}れ{気味|ぎみ}に{見|み}えるので、{今日|きょう}はこれで{失礼|しつれい}しますね。{早|はや}く{退院|たいいん}できますように。",
      "How are you feeling? Much better, thank you. I am glad. But you look a little tired, so I will leave it there for today. I hope you can go home soon.",
      q(
        "Why does the visitor leave early?",
        "The patient looks a little tired",
        [
          "Visiting hours are over",
          "The nurse asked them to go",
          "The visitor has a cold",
        ],
        "疲れ気味に見えるので gives the visitor's reason for leaving: the patient looks slightly tired.",
      ),
      q(
        "How does the patient say they are?",
        "Much better than before",
        [
          "Worse than yesterday",
          "About to have an operation",
          "Ready to leave today",
        ],
        "おかげさまで、だいぶよくなりました means the patient has improved a great deal, and thanks the visitor for asking.",
      ),
    ),
    practice:
      "Write a short get-well card: mention one tendency with がち, ask the person not to overdo it with ないでほしい, and end with a wish using ますように.",
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
        "In 天気予報によると、明日は雪だそうです, what does によると mark?",
        "The source of the information",
        [
          "The reason it will snow",
          "The person hoping for snow",
          "The time the snow will start",
        ],
        "によると names whose information is being relayed, and そうです at the end confirms that it is reported rather than the speaker's own claim.",
      ),
      q(
        "What does らしい mean in 今日は春らしい暖かい日だ?",
        "Typical of spring",
        ["Apparently it is spring", "Unlike spring", "Just before spring"],
        "After a noun, らしい can describe a characteristic quality: the day has the warmth you would expect of spring.",
      ),
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
      q(
        "What was finally agreed?",
        "Participants would bring only drinks instead of a meal being provided",
        [
          "The gathering would be canceled",
          "A more expensive meal would be served",
          "The fee would be doubled",
        ],
        "食事を用意するかわりに、参加者が飲み物だけ持ってくる形になった records the compromise reached after discussion.",
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
      q(
        "Who is online said to be convenient for?",
        "People who live far away",
        [
          "People who want to talk face to face",
          "Everyone without exception",
          "Only the organizers",
        ],
        "遠くの人には便利ですが names the group online suits; が then turns to those who want to meet in person.",
      ),
    ),
    practice:
      "Retake the course reviews with helpers hidden. When two answers seem plausible, identify the exact sentence that supports one and rules out the other.",
  },
];
