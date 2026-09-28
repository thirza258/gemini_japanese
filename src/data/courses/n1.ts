import {
  grammar as g,
  passage as p,
  problemSet,
  question as q,
  wordProblem,
  words,
  type CourseSeed,
} from "./types";

export const n1Courses: CourseSeed[] = [
  {
    slug: "claims-and-grounds",
    title: "Claims, premises & implicit grounds",
    summary:
      "Read abstract arguments, separate a premise from a conclusion, and identify what a strong claim actually asserts.",
    vocabulary: words(`前提|ぜんてい|premise
論拠|ろんきょ|grounds for an argument
妥当性|だとうせい|validity; appropriateness
検証|けんしょう|verification
恣意的|しいてき|arbitrary
一貫性|いっかんせい|consistency
解釈|かいしゃく|interpretation
示唆|しさ|suggestion; implication`),
    grammar: [
      g(
        "〜を踏まえて",
        "Noun + を踏まえて means taking a fact or prior discussion into account as a basis for the next action. It implies consideration rather than mechanically copying the source.",
        "過去の検証結果を踏まえて、前提を見直す。",
        "We reconsider the premises in light of earlier verification results.",
      ),
      g(
        "〜に即して",
        "Noun + に即して calls for alignment with a concrete reality, situation, or standard. It often contrasts practical facts with a formula applied without context.",
        "現場の実情に即して、運用を改める必要がある。",
        "Operations need revision in line with conditions on the ground.",
      ),
      g(
        "〜をもって",
        "This formal pattern can mark means, grounds, or a time boundary. In XをもってYとする, X is treated as sufficient grounds for Y; whether that inference is justified is a separate question.",
        "回答数の多さをもって、調査の妥当性を保証することはできない。",
        "A large response count alone cannot guarantee a survey's validity.",
      ),
      g(
        "〜に足る",
        "Dictionary form or a suitable action noun + に足る means sufficient or worthy to merit something. Trustworthiness depends on supporting reasons, not merely a confident style.",
        "信頼に足る根拠を示すことが求められる。",
        "Evidence worthy of trust must be presented.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 前回の議論を踏まえて提案する imply?",
        "The proposal builds on the earlier discussion",
        [
          "The proposal repeats the earlier discussion word for word",
          "The proposal ignores what was discussed before",
          "The proposal postpones the earlier discussion",
        ],
        "を踏まえて takes the earlier discussion into account as a basis for the next step; it implies consideration rather than copying.",
      ),
      q(
        "What does 実情に即した判断 emphasize?",
        "A judgment aligned with actual circumstances",
        [
          "A judgment independent of all facts",
          "An identical decision in every possible case",
          "A decision made before observing anything",
        ],
        "に即した requires attention to the actual situation rather than an abstract formula alone.",
      ),
      q(
        "Choose the formal means or grounds: 数値だけ ___ 成功と断定するのは早い。",
        "をもって",
        ["が早いか", "とあって", "そばから"],
        "をもって marks the numerical evidence being used as grounds, which the sentence judges insufficient.",
      ),
      q(
        "Choose the phrase meaning 'worthy of trust': ___ 根拠を示す。",
        "信頼に足る",
        ["信頼を踏まえた", "信頼に即した", "信頼をもって"],
        "に足る after an action noun such as 信頼 means sufficient or worthy to merit it; the other patterns mark a basis, alignment, or means.",
      ),
    ],
    reading: p(
      "When a measure becomes a premise",
      "数値で示された評価は、判断の恣意性を抑えるものとして歓迎される。しかし、何を測るかを決める段階には、すでに価値判断が含まれている。窓口の処理件数を増やすことが目標になれば、時間のかかる相談が避けられるかもしれない。数値そのものが誤っていなくても、それをもって仕事全体の質を論じるには、測定からこぼれ落ちたものを検討しなければならない。評価の透明性とは、計算方法を公開することだけではなく、何を重視し、何を十分には捉えられないのかを説明することでもある。指標を捨てる必要はないが、指標によって判断の前提まで見えなくしてはならない。",
      "Numerical evaluation is welcomed as a restraint on arbitrary judgment. Yet choosing what to measure already embeds values. Targeting more completed service cases may discourage complex consultations. Even correct numbers cannot establish overall quality without considering what measurement omits. Transparency requires explaining priorities and blind spots as well as calculations. Measures need not be abandoned, but must not hide the premises of judgment.",
      q(
        "What does the writer consider essential to transparent evaluation?",
        "Explaining the priorities and omissions built into a measure",
        [
          "Replacing all judgment with one number",
          "Abandoning measurement entirely",
          "Publishing calculations while ignoring their purpose",
        ],
        "The conclusion expands transparency from calculation methods to the values and omissions that shape the metric.",
      ),
      q(
        "What risk does the writer see in targeting the number of cases handled at the counter?",
        "Time-consuming consultations may be avoided",
        [
          "The figures themselves will be miscalculated",
          "Staff will refuse to publish the calculation method",
          "The counter will handle fewer cases overall",
        ],
        "窓口の処理件数を増やすことが目標になれば、時間のかかる相談が避けられるかもしれない names the side effect; the writer adds that the numbers need not be wrong.",
      ),
    ),
    listening: p(
      "A premise worth checking",
      "調査の回答率は高いのですが、回答したのはすでにサービスを利用している人だけです。したがって、未利用者にも同じ需要があるとまでは言えません。拡大の判断に先立ち、利用していない理由も確かめるべきでしょう。",
      "The response rate is high, but only existing users answered. We therefore cannot claim the same demand among nonusers. Before deciding to expand, we should examine why others do not use it.",
      q(
        "Which inference does the speaker reject?",
        "That current-user responses establish equal demand among nonusers",
        [
          "That any current users responded",
          "That investigation is possible",
          "That the response rate was high",
        ],
        "The rejected step is from the sampled group to an unsampled group, not the accuracy of the stated response rate.",
      ),
      q(
        "What does the speaker propose before deciding to expand?",
        "Finding out why nonusers do not use the service",
        [
          "Repeating the survey with current users only",
          "Expanding at once because the response rate is high",
          "Ending the service for current users",
        ],
        "拡大の判断に先立ち、利用していない理由も確かめるべきでしょう puts the check on nonusers' reasons before the expansion decision.",
      ),
    ),
    practice:
      "Identify the implicit premise in an argument. Write a qualified conclusion that states what the evidence supports and what remains untested.",
  },
  {
    slug: "advanced-concession",
    title: "Concession without overgeneralization",
    summary:
      "Follow layered concessions and recognize when a writer accepts a fact while rejecting its supposed implications.",
    vocabulary: words(`譲歩|じょうほ|concession
矛盾|むじゅん|contradiction
弊害|へいがい|harmful effect
余地|よち|room; scope
是非|ぜひ|merits and demerits
一概に|いちがいに|indiscriminately; categorically
看過|かんか|overlooking
慎重|しんちょう|cautious`),
    grammar: [
      g(
        "〜とはいえ",
        "At advanced level, track the scope of this concession: the premise is accepted, while a stronger inferred conclusion is restricted. It can connect whole paragraphs as well as clauses.",
        "改善が見られるとはいえ、弊害が解消したとは言い難い。",
        "Although improvement is visible, it is hard to say the harmful effects are resolved.",
      ),
      g(
        "〜といえども",
        "Noun or plain clause + といえども is a formal even though or even for. It often states that a general principle applies despite a person's status or an exceptional circumstance.",
        "専門家といえども、判断を誤ることはある。",
        "Even experts can make errors of judgment.",
      ),
      g(
        "〜ながらに・〜ながらの",
        "These can express a state existing unchanged or since birth, as in 生まれながらの. They are distinct from concessive ながらも and simultaneous-action ながら.",
        "昔ながらの方法にも、見直すべき点はある。",
        "Even traditional methods have aspects that should be reconsidered.",
      ),
      g(
        "〜にしても〜にしても",
        "This frames two alternatives and gives a conclusion valid for either. A writer may suspend the choice between them while asserting a shared requirement.",
        "続けるにしてもやめるにしても、説明は欠かせない。",
        "Whether continuing or stopping, an explanation is essential.",
      ),
    ],
    grammarChecks: [
      q(
        "In 値上げはやむを得ないとはいえ、説明が不十分だ, what does the speaker accept?",
        "That the price rise is unavoidable",
        [
          "That the explanation was sufficient",
          "That the price rise should be withdrawn",
          "That no explanation is needed at all",
        ],
        "とはいえ accepts the premise before it, やむを得ない, while objecting that the explanation still falls short.",
      ),
      q(
        "What does 専門家といえども免れない assert?",
        "Even experts are not exempt",
        [
          "Only experts are exempt",
          "No expert exists",
          "Expertise guarantees exemption",
        ],
        "といえども extends the statement to a group that might otherwise seem exceptional.",
      ),
      q(
        "What does 昔ながらの describe?",
        "Something retaining a traditional form",
        [
          "Two actions performed simultaneously yesterday",
          "A future conditional",
          "A newly invented replacement",
        ],
        "ながらの here describes an unchanged inherited style, not simultaneous action.",
      ),
      q(
        "What does 賛成するにしても反対するにしても、理由は示すべきだ require?",
        "Giving reasons whichever position one takes",
        [
          "Choosing to agree rather than to object",
          "Avoiding taking any position at all",
          "Giving reasons only when objecting",
        ],
        "The paired にしても frames both alternatives and states a requirement that holds for either choice.",
      ),
    ],
    reading: p(
      "Preserving what a tradition does",
      "伝統を守るという言葉は、形を変えないことと結び付けられがちである。とはいえ、その形が生まれた当時と生活条件が異なる以上、同じ手順を続けるだけでは、かつて果たしていた役割を保てない場合もある。祭りの準備を担う人が減った地域では、作業を簡略化したことによって、むしろ幅広い世代が関われるようになった。簡略化に伴う喪失を軽視してよいわけではない。しかし、形式の維持と継承そのものを同一視すれば、参加できる人がいなくなった後も形式だけが残ることになりかねない。守るべきものを問うことは、伝統への無関心ではなく、その役割を引き受け直す作業なのである。",
      "Preserving tradition is often equated with preserving form. But changed living conditions can mean identical procedures no longer preserve the original function. Simplifying festival preparation has sometimes let more generations participate. Losses from simplification still matter. Yet equating form with transmission may leave an empty form when no participants remain. Asking what deserves preservation can be a way of taking responsibility for tradition's role.",
      q(
        "Which position best captures the writer's view?",
        "Examine which changes preserve a tradition's role while considering losses",
        [
          "Every inherited form must be discarded",
          "Any change proves indifference to tradition",
          "Participation is irrelevant if procedures survive",
        ],
        "The argument concedes potential loss but separates fixed form from continued social function.",
      ),
      q(
        "What happened in areas with fewer people to prepare the festival?",
        "Simplifying the work let a wider range of generations take part",
        [
          "The festival was abandoned altogether",
          "Only the oldest residents kept preparing it",
          "The original procedures were restored in full",
        ],
        "作業を簡略化したことによって、むしろ幅広い世代が関われるようになった reports that simplification widened participation.",
      ),
    ),
    listening: p(
      "A concession in a meeting",
      "手順を減らしたことで負担が軽くなった点は評価できます。とはいえ、確認の責任まで曖昧になってよいわけではありません。元に戻すにしても改善を続けるにしても、誰が最終確認をするのかは明確にしましょう。",
      "Reducing steps has commendably eased the burden. Even so, responsibility for checking must not become unclear. Whether we revert or keep improving, let's specify who performs the final check.",
      q(
        "What requirement holds whichever option is chosen?",
        "Make final-check responsibility explicit",
        [
          "Restore every former step",
          "Abolish all checks",
          "Declare the change entirely unsuccessful",
        ],
        "The paired にしても alternatives share the final requirement without choosing one option yet.",
      ),
      q(
        "What does the speaker credit the change with?",
        "Fewer steps have lightened the workload",
        [
          "Checking responsibility has become clearer",
          "The old procedure has been restored",
          "Final checks are no longer needed",
        ],
        "手順を減らしたことで負担が軽くなった点は評価できます credits the reduced steps before とはいえ limits the concession.",
      ),
    ),
    practice:
      "Write an argument that acknowledges a benefit and a limitation without canceling either. Mark the exact scope of each concession.",
  },
  {
    slug: "boundaries-exceptions",
    title: "Boundaries, prerequisites & exclusions",
    summary:
      "Parse formal conditions and avoid confusing a necessary prerequisite with a guaranteed outcome.",
    vocabulary: words(`前提条件|ぜんていじょうけん|prerequisite
例外|れいがい|exception
適用|てきよう|application of a rule
免除|めんじょ|exemption
該当|がいとう|falling under a category
制約|せいやく|constraint
承諾|しょうだく|consent
範疇|はんちゅう|category; scope`),
    grammar: [
      g(
        "〜を除いて",
        "Noun + を除いて excludes a specified item or class from the following claim. Check whether later sentences introduce further conditions for the remaining group.",
        "緊急の場合を除いて、事前の承諾が必要だ。",
        "Prior consent is required except in emergencies.",
      ),
      g(
        "〜なくしては",
        "A noun or ない-stem + なくしては states that without a prerequisite, the following desirable outcome cannot happen. It commonly pairs with a negative possibility expression.",
        "相互の理解なくしては、合意は成立しない。",
        "Agreement cannot be reached without mutual understanding.",
      ),
      g(
        "〜をおいて",
        "Noun + をおいて, commonly followed by ほかに〜ない, singles something out as the only fitting option. It is a strong rhetorical evaluation, not a neutral list.",
        "この役割には、彼をおいてほかに適任者はいない。",
        "For this role, there is no suitable person other than him.",
      ),
      g(
        "〜に限ったことではない",
        "This denies that a problem or feature belongs exclusively to the named group. It broadens scope without claiming identical frequency or severity everywhere.",
        "情報の偏りは、若者に限ったことではない。",
        "Biased information is not a problem limited to young people.",
      ),
    ],
    grammarChecks: [
      q(
        "Who pays 1,000 yen under 学生を除いて、参加費は一律千円です?",
        "Everyone except students",
        [
          "Students only",
          "Everyone, students included",
          "Nobody, since entry is free",
        ],
        "を除いて removes students from the claim that follows, so the flat 千円 fee applies to everyone else.",
      ),
      q(
        "Does 理解なくしては合意できない guarantee agreement once understanding exists?",
        "No; it states a necessary condition, not a guarantee",
        [
          "Yes, it guarantees immediate agreement",
          "It says understanding prevents agreement",
          "It states that agreement is impossible in every case",
        ],
        "A prerequisite is required, but the sentence does not establish that it is sufficient.",
      ),
      q(
        "What does この仕事を任せられるのは、彼女をおいてほかにいない claim?",
        "She is the only suitable person for the job",
        [
          "She should set the job aside for now",
          "Anyone else could do the job equally well",
          "She has refused to take the job",
        ],
        "をおいて followed by ほかに〜ない singles out one person as the only fitting option; it has nothing to do with setting something aside.",
      ),
      q(
        "What does 都市に限ったことではない imply?",
        "The matter also occurs beyond cities",
        [
          "It occurs only in cities",
          "Every place has exactly the same severity",
          "Cities are excluded entirely",
        ],
        "The expression expands scope without quantifying equality across locations.",
      ),
    ],
    reading: p(
      "Equal access and equal treatment",
      "制度が誰にでも同じ条件で開かれていることは、公平さの重要な要素である。しかし、同じ条件を提示するだけで、利用の機会まで等しくなるとは限らない。申請書を読めること、平日の昼間に窓口へ行けることなど、表面には書かれていない前提があるからだ。だからといって、条件をすべてなくせばよいというわけでもない。制度の目的に照らし、必要な条件と、単に従来の運用から残っている制約を区別する必要がある。利用できなかった人の経験を確かめることなくしては、形式上の平等が実際に何をもたらしたのかを十分に評価できない。",
      "A service being open on the same stated terms is important to fairness, but identical conditions do not guarantee equal opportunity. Unstated prerequisites include being able to read the form or visit during weekday hours. This does not mean abolishing every condition. We need to distinguish requirements essential to the service's purpose from inherited restrictions. Without examining excluded users' experiences, formal equality's effects cannot be adequately assessed.",
      q(
        "What distinction does the writer recommend?",
        "Necessary conditions versus inherited restrictions unrelated to the purpose",
        [
          "All conditions versus no evaluation",
          "City residents versus every other person",
          "Equal wording versus abandoning fairness",
        ],
        "The proposed evaluation uses the institution's purpose to distinguish justified requirements from avoidable constraints.",
      ),
      q(
        "Which unstated prerequisite does the writer mention?",
        "Being free to visit the counter during weekday daytime",
        [
          "Paying an application fee in advance",
          "Living within the city boundary",
          "Having a recommendation from an official",
        ],
        "申請書を読めること、平日の昼間に窓口へ行けること are the hidden prerequisites behind identical stated terms.",
      ),
    ),
    listening: p(
      "A condition is not an approval",
      "応募資格を満たしていれば申請はできますが、それだけで採用が決まるわけではありません。資格は審査に進むための条件です。実際の採用については、提出された計画も検討した上で判断します。",
      "Meeting eligibility allows an application, but does not determine acceptance. Eligibility is a condition for proceeding to review. Acceptance also depends on examining the submitted plan.",
      q(
        "What does eligibility guarantee here?",
        "Permission to apply and proceed to review",
        [
          "Automatic acceptance",
          "Exemption from submitting a plan",
          "A fixed award amount",
        ],
        "The speaker separates the entry prerequisite from the later evaluative decision.",
      ),
      q(
        "What else is considered before a decision on acceptance?",
        "The plan the applicant submitted",
        [
          "The total number of applicants",
          "The applicant's previous awards",
          "The date the application arrived",
        ],
        "提出された計画も検討した上で判断します names the submitted plan as part of the acceptance decision.",
      ),
    ),
    practice:
      "For a formal rule, identify necessary conditions, exclusions, and any sufficient conditions. Do not infer guarantees from prerequisites.",
  },
  {
    slug: "rapid-sequences",
    title: "Rapid sequences & repeated reversals",
    summary:
      "Recognize literary and formal expressions for immediate events, recurring loss, and interrupted expectations.",
    vocabulary: words(`直前|ちょくぜん|immediately before
瞬間|しゅんかん|instant
相次ぐ|あいつぐ|to occur one after another
途端|とたん|the instant
繰り返す|くりかえす|to repeat
収まる|おさまる|to settle down
覆す|くつがえす|to overturn
立ち去る|たちさる|to leave a place`),
    grammar: [
      g(
        "〜が早いか",
        "Dictionary or sometimes た-form + が早いか depicts a second action occurring almost immediately. It is common in narrative description and does not normally introduce a command or future intention.",
        "扉が開くが早いか、人々は会場へ入った。",
        "The moment the doors opened, people entered the hall.",
      ),
      g(
        "〜や否や",
        "Dictionary form + や否や describes an immediate following event, usually in written narration. The phrase does not literally ask whether the first event occurred.",
        "知らせを聞くや否や、彼は立ち上がった。",
        "No sooner had he heard the news than he stood up.",
      ),
      g(
        "〜なり",
        "Dictionary form + なり can narrate an unexpected action immediately after another, usually with the same subject. Do not confuse it with noun + なりに, which means in one's own way.",
        "彼女は部屋に入るなり、窓を開けた。",
        "As soon as she entered the room, she opened the window.",
      ),
      g(
        "〜そばから",
        "Dictionary or た-form + そばから describes a recurring action being undone or overtaken almost immediately. It often conveys frustration and differs from a single sequence.",
        "覚えたそばから忘れてしまう。",
        "I keep forgetting things almost as soon as I learn them.",
      ),
    ],
    grammarChecks: [
      q(
        "Which sentence uses が早いか correctly?",
        "ベルが鳴るが早いか、生徒たちは教室を飛び出した。",
        [
          "ベルが鳴るが早いか、教室を出なさい。",
          "ベルが鳴るが早いか、明日は早く帰るつもりだ。",
          "ベルが鳴るが早いか、静かにしてください。",
        ],
        "が早いか narrates a second action that followed almost at once; it does not introduce a command, a request, or a future intention.",
      ),
      q(
        "What does 聞くや否や、飛び出した describe?",
        "Rushing out immediately upon hearing",
        [
          "Asking whether anything was heard",
          "Waiting a long time before leaving",
          "Planning to hear something next week",
        ],
        "や否や is a narrative immediate-sequence construction.",
      ),
      q(
        "What does 彼は家に帰るなり、寝てしまった describe?",
        "He fell asleep as soon as he got home",
        [
          "He fell asleep at home in his own way",
          "He went home instead of sleeping",
          "He planned to sleep after going home",
        ],
        "Dictionary form + なり narrates an action straight after another by the same subject; it is not noun + なりに, 'in one's own way'.",
      ),
      q(
        "Which pattern emphasizes repeated immediate undoing?",
        "片付けるそばから散らかる",
        ["片付けた上で出かける", "片付けるために帰る", "片付けて初めて気付く"],
        "そばから presents tidying as repeatedly followed by renewed mess.",
      ),
    ],
    reading: p(
      "Why repetition can feel useless",
      "覚えたそばから忘れてしまうと、学習は進んでいないように感じられる。だが、忘れたという経験は、それ以前に一度は注意を向けたことの裏返しでもある。問題は、忘却そのものを失敗とみなし、同じ項目に再び出会う機会を断ってしまうことだ。もちろん、ただ何度も眺めればよいというものではない。少し時間を置き、答えを見ずに思い出そうとする。その際に思い出せなかったものを、別の文脈で使ってみる。記憶を一度で固定することよりも、必要なときに取り戻す道筋を増やすことに目を向ければ、繰り返しの意味は違って見える。",
      "Forgetting as soon as we learn can feel like no progress. Yet forgetting also follows an earlier act of attention. The problem is treating forgetting as failure and preventing another encounter. Merely looking repeatedly is not enough: pause, try recalling without the answer, and use missed items in another context. Repetition looks different when the aim becomes more routes to retrieve knowledge rather than permanently fixing it in one attempt.",
      q(
        "How does the writer reframe repetition?",
        "As creating more ways to retrieve knowledge when needed",
        [
          "As proof that all previous learning was useless",
          "As looking at the answer continuously",
          "As a guarantee of perfect first-time memory",
        ],
        "The final contrast favors retrieval paths and contextual reuse over an expectation of one-time permanent storage.",
      ),
      q(
        "What does the writer suggest doing with items you could not recall?",
        "Try using them in a different context",
        [
          "Look at the answer again at once",
          "Drop them from further study",
          "Copy them out many times in a row",
        ],
        "その際に思い出せなかったものを、別の文脈で使ってみる recommends reusing the missed items in another context.",
      ),
    ),
    listening: p(
      "An interrupted impression",
      "説明が終わるが早いか質問が相次いだので、伝わらなかったのかと思いました。でも、聞いてみると、内容が分からないのではなく、自分の仕事にどう応用できるかを知りたかったようです。",
      "Questions came one after another the moment the explanation ended, so I thought it had not been understood. But the listeners wanted to know how to apply it to their work, rather than failing to understand the content.",
      q(
        "What did the questions indicate?",
        "Interest in applying the content to their own work",
        [
          "Proof that no one understood a word",
          "A demand to end the session",
          "Unrelated complaints about the room",
        ],
        "The speaker revises an initial negative interpretation after examining the questions' purpose.",
      ),
      q(
        "When did the questions begin?",
        "The moment the explanation ended",
        [
          "Halfway through the explanation",
          "A day after the session",
          "Only after a long silence",
        ],
        "説明が終わるが早いか質問が相次いだ: が早いか places the flood of questions immediately after the explanation ended.",
      ),
    ),
    practice:
      "Retell an event using one immediate-sequence pattern, then describe a recurring reversal with そばから. Keep single events and repetition separate.",
  },
  {
    slug: "emotion-restraint",
    title: "Emotion, restraint & evaluative tone",
    summary:
      "Recognize strong written emotion and distinguish sincere evaluation from formal understatement.",
    vocabulary: words(`感慨|かんがい|deep emotion; reflection
遺憾|いかん|regret
懸念|けねん|concern
敬意|けいい|respect
感謝|かんしゃ|gratitude
恐縮|きょうしゅく|feeling obliged; apologetic
切実|せつじつ|pressing; heartfelt
共感|きょうかん|empathy; resonance`),
    grammar: [
      g(
        "〜を禁じ得ない",
        "An emotion noun + を禁じ得ない means cannot suppress a feeling. It belongs mainly to formal writing and commentary, and usually describes the writer's involuntary response.",
        "その判断には疑問を禁じ得ない。",
        "I cannot help questioning that judgment.",
      ),
      g(
        "〜に堪えない",
        "With emotion nouns such as 感謝, this expresses an overwhelming feeling. With verbs such as 見る or 聞く, it instead means unbearable to watch or hear. The preceding word determines the sense.",
        "皆様のご支援には感謝に堪えません。",
        "I am profoundly grateful for everyone's support.",
      ),
      g(
        "〜極まりない",
        "A な-adjective stem or certain evaluative nouns + 極まりない expresses an extreme degree, often of a negative quality. It is forceful and unsuitable for a mild everyday complaint.",
        "確認もせずに断定するのは無責任極まりない。",
        "Making a categorical claim without checking is utterly irresponsible.",
      ),
      g(
        "〜限りだ",
        "With emotion-related い-adjectives or な-adjective + な, 限りだ expresses a strong personal feeling. It is distinct from the conditional or scope-related uses of 限り.",
        "長年の努力が実り、うれしい限りです。",
        "I am extremely pleased that years of effort have borne fruit.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 同情を禁じ得ない express?",
        "Being unable to hold back sympathy",
        [
          "Being forbidden to show sympathy",
          "Refusing to feel any sympathy",
          "Asking others to stop sympathizing",
        ],
        "を禁じ得ない means a feeling cannot be suppressed; it describes an involuntary response, not a prohibition.",
      ),
      q(
        "What does 感謝に堪えない express?",
        "Overwhelming gratitude",
        [
          "An inability to tolerate gratitude",
          "A refusal to thank anyone",
          "A neutral quantity of thanks",
        ],
        "With the emotion noun 感謝, に堪えない expresses a deeply felt emotion, not an unbearable spectacle.",
      ),
      q(
        "Which expression is a particularly forceful negative evaluation?",
        "無責任極まりない",
        ["少し気になる", "検討の余地がある", "念のため確認する"],
        "極まりない asserts an extreme degree and therefore has much stronger tone.",
      ),
      q(
        "What does 心細い限りだ express?",
        "A strong feeling of helplessness",
        [
          "A limit on how helpless one may feel",
          "A condition under which one feels helpless",
          "Helplessness only as far as one knows",
        ],
        "With an emotion adjective such as 心細い, 限りだ intensifies the speaker's own feeling; it is neither the scope 限り of 知る限り nor a condition.",
      ),
    ],
    reading: p(
      "What a formal apology leaves open",
      "公的な謝罪で「遺憾である」という言葉が使われると、誠意が足りないという批判が起こることがある。確かに、何を残念に思うのかが示されなければ、出来事への感想にとどまり、自らの責任を認めたのか分からない。しかし、強い感情語を重ねれば十分だというわけでもない。影響を受けた人が求めているのは、経緯の説明や再発を防ぐ具体策かもしれないからだ。謝罪の適切さは、語の強弱だけでなく、誰のどの行為を認め、相手の不利益にどう応えるのかという文脈の中で判断されるべきだろう。",
      "Formal apologies using the word regret are sometimes criticized as insincere. If the object of regret is unspecified, it can be unclear whether responsibility is accepted. Yet stronger emotional words alone are also insufficient. Affected people may need an explanation and concrete prevention measures. An apology should be judged through what conduct is acknowledged and how harm is addressed, rather than intensity of wording alone.",
      q(
        "What criterion does the writer prioritize?",
        "Acknowledgment of conduct and a response to the affected people",
        [
          "The emotional strength of a single word alone",
          "Avoiding every explanation of events",
          "Using the same apology regardless of context",
        ],
        "The conclusion places wording within the practical context of responsibility and response.",
      ),
      q(
        "Why can 遺憾である sound insincere, according to the writer?",
        "It may not show what is regretted or whether responsibility is accepted",
        [
          "It is too emotional for a formal setting",
          "It is an informal, everyday expression",
          "It names the affected people directly",
        ],
        "何を残念に思うのかが示されなければ…自らの責任を認めたのか分からない explains why the word alone can read as a mere reaction.",
      ),
    ),
    listening: p(
      "Reading an understated objection",
      "努力されたことは承知しています。ただ、この説明だけで十分だとする判断には、疑問を禁じ得ません。責任を追及するためではなく、同じ問題を繰り返さないために、確認の過程を示していただきたいのです。",
      "I recognize the effort made. However, I cannot help questioning the judgment that this explanation is sufficient. I would like to see the checking process, to prevent recurrence rather than to pursue blame.",
      q(
        "What concrete action is requested?",
        "Show the checking process",
        [
          "Offer only stronger emotional wording",
          "Stop examining the problem",
          "Deny that any effort was made",
        ],
        "The formal criticism leads to a specific request for process evidence, while acknowledging effort.",
      ),
      q(
        "Why does the speaker want the process shown?",
        "To keep the same problem from happening again",
        [
          "To find someone to blame",
          "To praise the effort that was made",
          "To bring the discussion to a quick end",
        ],
        "責任を追及するためではなく、同じ問題を繰り返さないために sets prevention, not blame, as the purpose.",
      ),
    ),
    practice:
      "Rewrite a strongly worded criticism as a measured request. Explain which details establish responsibility beyond emotional vocabulary.",
  },
  {
    slug: "principles-obligations",
    title: "Principles, obligations & professional judgment",
    summary:
      "Interpret emphatic duties and distinguish a role-based norm from a factual prediction.",
    vocabulary: words(`使命|しめい|mission; duty
倫理|りんり|ethics
配慮|はいりょ|consideration
裁量|さいりょう|discretion
遵守|じゅんしゅ|compliance
怠る|おこたる|to neglect
損なう|そこなう|to impair
担う|になう|to bear; to undertake`),
    grammar: [
      g(
        "〜べく",
        "Dictionary form + べく means with the intention of or in order to in formal prose; する may become すべく. It expresses purpose, unlike the obligation of べき.",
        "理解を深めるべく、対話の場を設けた。",
        "A forum for dialogue was established to deepen understanding.",
      ),
      g(
        "〜べからず",
        "This literary, formal prohibition follows a dictionary form, with する often becoming すべからず. It appears in rules and set expressions, not ordinary friendly requests.",
        "安全確認を怠るべからず。",
        "Safety checks must not be neglected.",
      ),
      g(
        "〜たるもの",
        "Noun + たるもの presents an expectation of someone occupying a role. It has an elevated, sometimes moralizing tone and states a norm rather than what every member actually does.",
        "責任者たるもの、異論にも耳を傾けるべきだ。",
        "A person in charge ought to listen to dissent as well.",
      ),
      g(
        "〜ずにはすまない",
        "Use the ない-stem + ずにはすまない, with する→せず, when responsibility or circumstances make an action unavoidable. It often implies that leaving the matter alone would be unacceptable.",
        "誤りが判明した以上、訂正せずにはすまない。",
        "Now that the error is known, a correction cannot be avoided.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 改善すべく describe?",
        "A purpose or intention to improve",
        [
          "A completed improvement guaranteed by law",
          "A prohibition on improvement",
          "A purely accidental result",
        ],
        "べく is a formal purpose construction; it does not guarantee achievement.",
      ),
      q(
        "Where would 立ち入るべからず most naturally appear?",
        "On a sign forbidding entry",
        [
          "In a friendly invitation to come in",
          "In a question asking whether to enter",
          "In a note thanking visitors for entering",
        ],
        "べからず is a literary, formal prohibition typical of rules and signs, not of friendly requests.",
      ),
      q(
        "What does 教師たるもの、生徒の話に耳を傾けるべきだ state?",
        "A norm for anyone in the role of teacher",
        [
          "A report of what every teacher actually does",
          "A rule that applies only to new teachers",
          "A complaint that no teacher listens",
        ],
        "たるもの presents an expectation attached to a role; it states a norm, not a description of what every teacher does.",
      ),
      q(
        "What does 説明せずにはすまない imply?",
        "An explanation is unavoidable given the responsibility",
        [
          "Explaining would be forbidden",
          "An explanation has already been accepted",
          "No responsibility is involved",
        ],
        "The negative construction means the matter cannot acceptably be left without an explanation.",
      ),
    ],
    reading: p(
      "Rules and responsibility",
      "規則を守ったのだから責任はない、という主張には一定の分かりやすさがある。規則が行動の基準を与える以上、それに従ったことは判断の重要な材料だからだ。しかし、想定されていない状況に直面したときまで、規則の文面だけで判断が完結するとは限らない。責任を担う立場には、その規則が何を守るためにあるのかを考え、必要なら上位の判断を求めることも期待される。これは個人が規則を好き勝手に変えてよいという意味ではない。むしろ、裁量を行使した理由も含めて説明できる仕組みを整えることが、形式的な遵守と実質的な責任を結び付けるのである。",
      "Saying compliance removes responsibility has an understandable appeal: following a rule is important evidence in evaluating conduct. But unforeseen situations cannot always be resolved by wording alone. Responsible roles may require considering the rule's purpose and seeking higher-level judgment. This does not license arbitrary rule changes. A system that explains the reasons for discretion can connect formal compliance with substantive responsibility.",
      q(
        "How should discretion be handled according to the writer?",
        "Within a system that makes its reasons explainable",
        [
          "As unlimited personal freedom to ignore rules",
          "As something never needed in unforeseen cases",
          "As proof that rules have no purpose",
        ],
        "The final proposal links discretion to explanation and accountability, avoiding both rigid literalism and arbitrary action.",
      ),
      q(
        "What does the writer explicitly say this does not mean?",
        "That individuals may change rules as they please",
        [
          "That rules give a standard for action",
          "That following a rule matters in judging conduct",
          "That unforeseen situations can arise",
        ],
        "これは個人が規則を好き勝手に変えてよいという意味ではない rules out arbitrary changes; the other three the writer accepts.",
      ),
    ),
    listening: p(
      "A norm rather than a prediction",
      "担当者たるもの、すべてを即答できるべきだという考えには賛成できません。不明な点を曖昧なまま答えるより、確認が必要だと伝え、いつ返答するかを約束するほうが責任ある対応だと思います。",
      "I do not agree that a person in charge should answer everything immediately. Rather than giving a vague answer, saying a check is needed and committing to a reply time is more responsible.",
      q(
        "What does the speaker recommend when unsure?",
        "Explain the need to check and commit to a reply time",
        [
          "Invent an immediate answer",
          "Refuse all responsibility",
          "Never answer any question",
        ],
        "The speaker rejects an unrealistic role norm and substitutes a concrete accountable response.",
      ),
      q(
        "Which view does the speaker disagree with?",
        "That a person in charge must be able to answer everything at once",
        [
          "That vague answers can cause problems",
          "That promising a reply time is responsible",
          "That some points may need checking",
        ],
        "担当者たるもの、すべてを即答できるべきだという考えには賛成できません names the role norm the speaker rejects.",
      ),
    ),
    practice:
      "Distinguish a norm, a prohibition, and a purpose in formal writing. Translate each into ordinary polite Japanese without changing its force.",
  },
  {
    slug: "inevitable-consequences",
    title: "Inevitable consequences & pressure to act",
    summary:
      "Recognize claims of inevitability and evaluate whether their causal premises really support them.",
    vocabulary: words(`必然|ひつぜん|inevitability
帰結|きけつ|consequence; conclusion
懸念|けねん|concern
余儀なく|よぎなく|unavoidably
波及|はきゅう|spread of an effect
打開|だかい|breaking a deadlock
窮地|きゅうち|predicament
促す|うながす|to prompt`),
    grammar: [
      g(
        "〜を余儀なくされる",
        "Noun + を余儀なくされる formally states that external circumstances force an unwelcome action. The active form を余儀なくさせる describes the cause imposing it.",
        "資材不足により、計画の変更を余儀なくされた。",
        "Material shortages forced a change of plan.",
      ),
      g(
        "〜ずにはおかない",
        "The ない-stem + ずにはおかない predicts an unavoidable effect or expresses strong resolve; する becomes せず. Unlike a simple obligation, it emphasizes that the action or influence will occur.",
        "この発見は、従来の見方を変えずにはおかない。",
        "This discovery is bound to change the established view.",
      ),
      g(
        "〜ないではおかない",
        "This is the related ない-form construction for an inevitable reaction or determined action. Interpret whether the subject is a cause producing an effect or a person making a commitment.",
        "その説明は、聞く人に疑問を抱かせないではおかない。",
        "That explanation is bound to make listeners question it.",
      ),
      g(
        "〜とあって",
        "A plain clause or noun + とあって highlights a special circumstance explaining a natural response. It often appears in reports about unusual demand or public interest.",
        "十年ぶりの公開とあって、多くの人が訪れた。",
        "As it was the first public showing in ten years, many people came.",
      ),
    ],
    grammarChecks: [
      q(
        "Who is constrained in 会社は撤退を余儀なくされた?",
        "The company is forced to withdraw",
        [
          "The company freely guarantees expansion",
          "The company forces an unnamed customer to withdraw",
          "No actor is affected",
        ],
        "The passive される presents the company as the party constrained by circumstances.",
      ),
      q(
        "What does 考え直させずにはおかない emphasize?",
        "A powerful effect that will compel reconsideration",
        [
          "A request not to think",
          "Permission to ignore evidence",
          "An event already proved false",
        ],
        "The construction emphasizes an unavoidable influence on how someone thinks.",
      ),
      q(
        "What does 記者は真相を明らかにしないではおかないと語った express?",
        "The reporter's determination to reveal the truth",
        [
          "The reporter's doubt that the truth can be known",
          "The reporter's decision to stop investigating",
          "The reporter's request for someone else to investigate",
        ],
        "With a person as subject, ないではおかない states a firm commitment; with a cause as subject it would predict an unavoidable effect.",
      ),
      q(
        "Which English best renders 入場無料とあって in 入場無料とあって、会場は大勢の人でにぎわった?",
        "Because entry was free",
        [
          "Although entry was free",
          "Unless entry was free",
          "Even if entry had not been free",
        ],
        "とあって presents a special circumstance, free entry, as the natural reason for the crowd.",
      ),
    ],
    reading: p(
      "A disruption that reveals a dependency",
      "ある部品の供給が止まり、複数の工場が生産計画の変更を余儀なくされた。これを例外的な事故として処理すれば、供給が再開した時点で問題は終わったように見える。しかし、同じ部品に依存する仕組みが残る限り、似た事態は別の原因でも起こり得る。今回の出来事が示したのは、事故の大きさだけでなく、平常時には見えにくかった依存関係である。代替先を増やせば費用が上がるかもしれないが、目先の効率だけを基準にその選択肢を排除することは、将来の中断による負担を計算の外に置くことでもある。",
      "A component supply interruption forced several factories to revise production. Treating it as an isolated accident makes the problem seem over when supply resumes. But dependence on the same component permits similar disruption from other causes. The event exposes hidden dependencies, not just a large accident. Alternative suppliers may cost more, yet excluding them solely for short-term efficiency leaves future interruption costs outside the calculation.",
      q(
        "What broader issue does the disruption reveal?",
        "A dependency whose risk remains after the immediate supply problem ends",
        [
          "That resuming supply removes every future risk",
          "That all alternatives are cost-free",
          "That component prices alone explain the whole problem",
        ],
        "The writer shifts from the single incident to the continuing structure that makes similar incidents consequential.",
      ),
      q(
        "What does the writer say about adding alternative suppliers?",
        "It may cost more, but rejecting it on efficiency alone ignores future disruption",
        [
          "It removes every risk at no extra cost",
          "It becomes unnecessary once supply resumes",
          "It should be decided by component prices alone",
        ],
        "代替先を増やせば費用が上がるかもしれないが…将来の中断による負担を計算の外に置く weighs higher cost against the ignored cost of future interruptions.",
      ),
    ),
    listening: p(
      "A forced change with remaining choices",
      "会場の閉鎖で日程変更を余儀なくされましたが、企画自体を中止する必要はありません。別会場なら追加費用がかかり、オンラインなら内容の調整が必要です。制約はありますが、選択の余地まで失われたわけではありません。",
      "The venue closure forced a date change, but the event need not be canceled. Another venue costs more, while online delivery needs adaptation. Constraints remain, but choices have not disappeared.",
      q(
        "Which conclusion does the speaker reject?",
        "That a forced date change eliminates every alternative",
        [
          "That the venue closed",
          "That another venue may cost more",
          "That online content needs adjustment",
        ],
        "The speaker separates the unavoidable change from the remaining choices about how to proceed.",
      ),
      q(
        "What drawback does the speaker mention for holding the event online?",
        "The content would need adjusting",
        [
          "It would cost more for a venue",
          "The event would have to be canceled",
          "The date could not be changed",
        ],
        "オンラインなら内容の調整が必要です; the additional cost belongs to the other-venue option.",
      ),
    ),
    practice:
      "Analyze a statement claiming inevitability. Identify the external constraint and which choices remain open despite it.",
  },
  {
    slug: "rhetoric-comparison",
    title: "Rhetorical comparison & precise evaluation",
    summary:
      "Interpret emphatic praise, limited criticism, and comparisons that foreground a speaker's values.",
    vocabulary: words(`匹敵|ひってき|being comparable
凌ぐ|しのぐ|to surpass
際立つ|きわだつ|to stand out
見劣り|みおとり|looking inferior
本質|ほんしつ|essence
均衡|きんこう|balance
妥協|だきょう|compromise
卓越|たくえつ|excellence`),
    grammar: [
      g(
        "〜に越したことはない",
        "Dictionary form, an い-adjective, or noun/な-adjective + である before this means it is best if possible. It recommends a preferable state without necessarily making it an absolute requirement.",
        "準備は早いに越したことはない。",
        "The earlier the preparation, the better.",
      ),
      g(
        "〜にもまして",
        "Noun + にもまして intensifies a comparison: more than even. It often compares the present with the past or highlights one value above another already recognized as important.",
        "以前にもまして、説明の透明性が求められている。",
        "Transparency of explanation is needed more than ever before.",
      ),
      g(
        "〜とまでは言わないが",
        "This retreats from a stronger claim while retaining a weaker criticism or request. Read the following clause for the actual position, rather than attributing the rejected stronger demand to the speaker.",
        "毎日とまでは言わないが、定期的に確認してほしい。",
        "I do not mean every day, but I would like regular checks.",
      ),
      g(
        "〜にひきかえ",
        "Noun or nominalized clause + にひきかえ contrasts two things with a marked evaluative gap, often disappointment. It is stronger and more subjective than simply listing differences.",
        "昨年の混乱にひきかえ、今年は運営が円滑だった。",
        "In contrast to last year's confusion, this year's operation was smooth.",
      ),
    ],
    grammarChecks: [
      q(
        "Does 早いに越したことはない state an absolute obligation?",
        "No; it identifies a preferable condition",
        [
          "Yes; it always forbids any delay",
          "It says early preparation is harmful",
          "It gives an exact legal deadline",
        ],
        "The phrase expresses what is best, while context determines any actual requirement.",
      ),
      q(
        "What does 今年は例年にもまして暑い mean?",
        "This year is even hotter than usual",
        [
          "This year is as hot as usual",
          "This year is less hot than usual",
          "This year's heat was just as expected",
        ],
        "にもまして intensifies the comparison: more than even the usual level, which was already notable.",
      ),
      q(
        "What is requested in 毎日とまでは言わないが、週一回は連絡してほしい?",
        "Contact at least once a week",
        [
          "Mandatory daily contact",
          "No further contact",
          "Contact once a year",
        ],
        "The stronger daily demand is explicitly set aside; the following clause contains the real request.",
      ),
      q(
        "What does 姉が社交的なのにひきかえ、妹は人見知りだ convey?",
        "A sharp, evaluative contrast between the two sisters",
        [
          "That both sisters are equally outgoing",
          "That the younger sister copies the elder",
          "That the elder sister has become shy",
        ],
        "にひきかえ sets two things against each other with a marked evaluative gap, stronger than simply listing a difference.",
      ),
    ],
    reading: p(
      "The meaning of a useful comparison",
      "二つの製品を比べるとき、性能が高いほうを選べば間違いがないと考えがちだ。しかし、使わない機能の多さは、利用者にとって必ずしも利点ではない。設定が複雑になれば、必要な操作にたどり着くまでの負担が増えることもある。性能は高いに越したことはない、と言う場合にも、何を性能と数えるかが問われる。比較表に並ぶ数値だけではなく、使う人がどの場面で何を達成したいのかを明らかにして初めて、優劣を判断する基準が定まる。比較は判断を代行するのではなく、判断に含まれる価値を見えるようにするために使うべきなのである。",
      "It is tempting to select the higher-performance product as a safe choice. Yet unused functions may offer no benefit and can make necessary operations harder to find. Even saying higher performance is preferable raises the question of what counts as performance. A useful standard emerges only after identifying the user's situation and goal. Comparison should reveal the values in a decision rather than substitute for judgment.",
      q(
        "What should determine the comparison criteria?",
        "The user's situation and intended achievement",
        [
          "The largest number of features alone",
          "Whatever specification is easiest to count",
          "A claim that every user has identical needs",
        ],
        "The writer makes use context and purpose prerequisites for meaningful comparison.",
      ),
      q(
        "Why are many features not always an advantage?",
        "Complex settings can make needed operations harder to reach",
        [
          "Extra features always cost more to buy",
          "Users cannot compare features at all",
          "Features wear out faster with use",
        ],
        "設定が複雑になれば、必要な操作にたどり着くまでの負担が増える explains how unused features can burden the user.",
      ),
    ),
    listening: p(
      "A limited request",
      "全面的に書き直してほしいとまでは言いません。ただ、専門外の人にも読む必要がある資料ですから、結論に至る前提だけは説明を足してもらえませんか。",
      "I am not asking for a complete rewrite. But people outside the specialty need to read this document, so could you add an explanation of the premises leading to the conclusion?",
      q(
        "What change is requested?",
        "Add an explanation of the premises",
        [
          "Rewrite the entire document",
          "Remove the conclusion",
          "Restrict reading to specialists only",
        ],
        "The speaker rejects a complete rewrite and makes a narrower request about background assumptions.",
      ),
      q(
        "Why is the extra explanation needed?",
        "People outside the specialty also need to read the document",
        [
          "The conclusion is mistaken",
          "The document is too short",
          "Specialists asked for a full rewrite",
        ],
        "専門外の人にも読む必要がある資料ですから gives the reason for explaining the premises.",
      ),
    ),
    practice:
      "Turn an exaggerated request into a precise, bounded one. Compare two options by an explicit criterion relevant to the user.",
  },
  {
    slug: "formal-negotiation",
    title: "Formal negotiation & sensitive requests",
    summary:
      "Follow conditions, refusal, and acknowledgment in professional exchanges without mistaking politeness for agreement.",
    vocabulary: words(`折衝|せっしょう|negotiation
譲歩|じょうほ|concession
承認|しょうにん|approval
了承|りょうしょう|acknowledgment; acceptance
意向|いこう|intention; wishes
差し支え|さしつかえ|hindrance; objection
見合わせる|みあわせる|to postpone; to hold off
取り計らう|とりはからう|to arrange appropriately`),
    grammar: [
      g(
        "〜かねる",
        "Verb stem + かねる politely states that complying is difficult or impossible under the circumstances. It is often a refusal, not just indecision. Contrast かねない, which warns of an undesirable possibility.",
        "現時点では、お約束いたしかねます。",
        "At this stage, I cannot make a commitment.",
      ),
      g(
        "〜を条件に",
        "Noun + を条件に makes an agreement dependent on a specified requirement. Receiving a proposal does not mean the condition has been met or the agreement is unconditional.",
        "内容の修正を条件に、掲載を認めます。",
        "Publication is approved on condition that the content is revised.",
      ),
      g(
        "〜ないまでも",
        "ない-form + までも grants that an ambitious level may not be reached while asking for a lesser one. It often means if not X, at least Y.",
        "すぐに解決できないまでも、見通しは示してほしい。",
        "Even if it cannot be resolved immediately, I want an outlook at least.",
      ),
      g(
        "〜にあって",
        "Noun + にあって formally locates a judgment in special circumstances or a role. にあっても adds concession. It is mainly written or elevated speech.",
        "困難な状況にあっても、説明を省くべきではない。",
        "Even in difficult circumstances, explanation should not be omitted.",
      ),
    ],
    grammarChecks: [
      q(
        "What does お受けいたしかねます normally communicate?",
        "A polite refusal or inability to accept",
        [
          "Enthusiastic acceptance",
          "A guarantee of future approval",
          "A warning that acceptance may happen accidentally",
        ],
        "かねる denies ability to comply. It differs from risk-related かねない.",
      ),
      q(
        "What does 期限の延長を条件に、契約に応じる mean?",
        "They will accept the contract if the deadline is extended",
        [
          "They accept the contract and will extend the deadline themselves",
          "They refuse the contract whatever happens",
          "The deadline has already been extended",
        ],
        "を条件に makes agreement depend on the stated requirement; the requirement has not necessarily been met yet.",
      ),
      q(
        "What is the minimum requested in 解決できないまでも、状況は教えてほしい?",
        "An update on the situation",
        [
          "A guaranteed immediate solution",
          "Silence until everything is solved",
          "A promise never to report progress",
        ],
        "ないまでも lowers the demand from complete resolution to information.",
      ),
      q(
        "What does 非常時にあっても冷静さを失わない describe?",
        "Staying calm even in an emergency",
        [
          "Staying calm only until an emergency starts",
          "Losing composure whenever an emergency occurs",
          "Avoiding every emergency by staying calm",
        ],
        "にあっても locates the statement in special circumstances and adds concession: even there, composure is kept.",
      ),
    ],
    reading: p(
      "Agreement that has not yet been reached",
      "打ち合わせで相手が「ご事情は承知しました」と述べたため、担当者は納期の延長が認められたと考えた。しかし、後日届いた文書には、延長を承認するとは書かれていなかった。事情を理解することと、提案に同意することは別である。対立を避けるための丁寧な表現が多い場面ほど、相手の態度を好意的に読みすぎる危険がある。円滑な関係を保つには、曖昧さを残したまま期待するのではなく、合意した点と今後判断する点を言葉にして確認する必要がある。それは不信を示す行為ではなく、異なる理解が後で対立に変わるのを防ぐ配慮でもある。",
      "When a counterpart said they understood the circumstances, the coordinator assumed a deadline extension was accepted. The later document contained no such approval. Understanding circumstances and agreeing to a proposal are different. Polite conflict-avoiding language can encourage optimistic overreading. Good relations require confirming agreed points and pending decisions, not relying on ambiguity. Such clarification can prevent divergent understandings from becoming conflict.",
      q(
        "Why does the writer favor explicit confirmation?",
        "To prevent different interpretations from turning into later conflict",
        [
          "To accuse the counterpart of dishonesty",
          "To replace every polite phrase with a threat",
          "To assume acknowledgment always means approval",
        ],
        "The final sentence frames clarification as consideration and prevention, not distrust.",
      ),
      q(
        "What mistake did the coordinator make?",
        "Taking an acknowledgment of the circumstances as approval",
        [
          "Sending the document too late",
          "Refusing the counterpart's proposal",
          "Asking for a shorter deadline",
        ],
        "ご事情は承知しました only acknowledged the situation; the later document never approved 延長, because 理解することと、提案に同意することは別である.",
      ),
    ),
    listening: p(
      "A conditional acceptance",
      "ご提案の趣旨は理解しております。ただ、現行の条件のままではお受けいたしかねます。対象期間を一か月に限り、結果を共有していただくことを条件とするのであれば、試行について検討可能です。",
      "We understand the intent of your proposal, but cannot accept the current terms. If it is limited to one month and results are shared, we can consider a trial.",
      q(
        "What is the current status?",
        "A trial may be considered under revised conditions",
        [
          "The original proposal is unconditionally approved",
          "Every possible trial is permanently refused",
          "A full rollout is already scheduled",
        ],
        "The speaker refuses the current terms and offers consideration, not final approval, under specific changes.",
      ),
      q(
        "Which conditions would make a trial possible?",
        "Limiting it to one month and sharing the results",
        [
          "Extending it to one year and sharing the results",
          "Keeping the current terms for one month",
          "Sharing the results without any time limit",
        ],
        "対象期間を一か月に限り、結果を共有していただくことを条件とする names both conditions for considering a trial.",
      ),
    ),
    practice:
      "Separate acknowledgment, consideration, conditional approval, and final agreement in a formal exchange. Write a polite clarification of the current status.",
  },
  {
    slug: "literary-perspective",
    title: "Literary perspective & implied meaning",
    summary:
      "Read narrator distance, counterfactual reflection, and emotional implications in short literary prose.",
    vocabulary: words(`面影|おもかげ|trace; remembered likeness
佇む|たたずむ|to stand quietly
余韻|よいん|lingering impression
隔たり|へだたり|distance; gap
眼差し|まなざし|gaze
戸惑い|とまどい|bewilderment
懐かしむ|なつかしむ|to remember fondly
省みる|かえりみる|to reflect on`),
    grammar: [
      g(
        "〜かのようだ",
        "Plain clause + かのようだ describes an appearance as if something were true without asserting it. Nouns commonly use であるかのようだ in formal prose.",
        "町は何も変わっていないかのように見えた。",
        "The town looked as if nothing had changed.",
      ),
      g(
        "〜んばかり",
        "Use a ない-stem + んばかり, with する→せん, for an appearance on the verge of an action: as if about to. It is literary and often describes intense expression or gesture.",
        "彼は何か言わんばかりに口を開いた。",
        "He opened his mouth as if about to say something.",
      ),
      g(
        "〜ものを",
        "A clause + ものを can express regret that an expected or preferable alternative did not occur. The regrettable consequence may be left unstated, so context supplies it.",
        "一言知らせてくれれば、迎えに行ったものを。",
        "If only you had let me know, I would have come to meet you.",
      ),
      g(
        "〜ともなく",
        "Dictionary form + ともなく describes an unfocused or unintentional action. It often repeats a perception verb: 見るともなく見る. It does not usually mean complete nonperformance.",
        "窓の外を眺めるともなく眺めていた。",
        "I was gazing absentmindedly out of the window.",
      ),
    ],
    grammarChecks: [
      q(
        "Does 何もなかったかのように assert that nothing happened?",
        "No; it describes an appearance or manner",
        [
          "Yes; it proves no event occurred",
          "It always means a future event",
          "It is a direct command",
        ],
        "かのように marks seeming or acting as if, leaving the underlying fact open.",
      ),
      q(
        "What does 泣き出さんばかりの顔 describe?",
        "A face that looked about to burst into tears",
        [
          "A face that had just stopped crying",
          "A face that never showed any tears",
          "A face that was crying only a little",
        ],
        "ない-stem + んばかり describes an appearance on the verge of an action: as if about to start crying.",
      ),
      q(
        "What feeling is conveyed by 相談してくれればよかったものを?",
        "Regret that the person did not consult the speaker",
        [
          "Certainty that consultation already happened",
          "A neutral timetable",
          "A prohibition on future consultation",
        ],
        "ものを points toward an unrealized preferable alternative and an implied regrettable result.",
      ),
      q(
        "What does ラジオを聞くともなく聞いていた describe?",
        "Listening to the radio without really paying attention",
        [
          "Refusing to listen to the radio at all",
          "Listening closely to every word on the radio",
          "Wanting to listen to the radio but being unable to",
        ],
        "Repeated as 聞くともなく聞く, ともなく describes an unfocused action; it does not mean the action was not done.",
      ),
    ],
    reading: p(
      "The unchanged bench",
      "久しぶりに訪れた駅前には、知らない店が並んでいた。道幅まで広くなったようで、記憶の中の町とは別の場所に見えた。ただ、角の小さな公園にあるベンチだけは昔のままだった。そこに腰を下ろすと、母を待ちながら何度も時計を見た夕方がよみがえった。当時は長すぎると思った時間が、今ではほんの短い出来事に感じられる。町が変わったのではなく、自分が変わったのだ、と言い切るつもりはない。けれど、同じベンチを前にしても、もう同じようには待てないことに気付いた。残っている物は、変わらなかった証拠であると同時に、変わったものを映す場所でもあるのだろう。",
      "Returning to the station area, I found unfamiliar shops and seemingly wider roads. Only a bench in a small park remained as before. Sitting there recalled evenings watching the clock while waiting for my mother. Time that once felt endless now seemed brief. I do not simply claim I changed rather than the town. Yet I could no longer wait in the same way. A surviving object can both testify to continuity and reveal what has changed.",
      q(
        "What does the bench come to represent?",
        "Continuity that also reveals a changed personal perspective",
        [
          "Proof that the entire town is unchanged",
          "Evidence that the narrator rejects every memory",
          "A guarantee that childhood feelings can be exactly restored",
        ],
        "The final sentence deliberately holds continuity and changed perception together.",
      ),
      q(
        "What memory does the bench bring back?",
        "Evenings spent waiting for the narrator's mother",
        [
          "Playing with friends after school",
          "Working at a shop near the station",
          "Walking to the station with the narrator's father",
        ],
        "母を待ちながら何度も時計を見た夕方がよみがえった names the memory: waiting for the mother and checking the clock.",
      ),
    ),
    listening: p(
      "What remains unsaid",
      "父は写真をしばらく見てから、「あのころは忙しかったな」とだけ言いました。懐かしいとも、戻りたいとも言いませんでしたが、すぐには写真を返さなかったんです。",
      "My father looked at the photograph for a while and only said, 'We were busy then.' He said neither that he felt nostalgic nor that he wanted to return, but he did not hand the picture back immediately.",
      q(
        "Which interpretation is best supported?",
        "The photograph held emotional significance, though the exact feeling is unstated",
        [
          "He explicitly said he wanted to return",
          "He showed no interest whatsoever",
          "He confirmed every past detail aloud",
        ],
        "The pause and reluctance to return it imply significance, while the narrator leaves the precise emotion open.",
      ),
      q(
        "What did the father actually say?",
        "Only that they were busy back then",
        [
          "That he missed those days",
          "That he wanted to go back",
          "That he remembered nothing about it",
        ],
        "「あのころは忙しかったな」とだけ言いました limits his words to that remark; he said neither 懐かしい nor 戻りたい.",
      ),
    ),
    practice:
      "Separate what a narrator explicitly states from what gestures imply. Support an inference with textual clues without inventing a definite emotion.",
  },
  {
    slug: "integrating-positions",
    title: "Integrating positions & layered conditions",
    summary:
      "Compare multiple texts, retain who holds each view, and derive an action that satisfies their combined conditions.",
    vocabulary: words(`整合性|せいごうせい|consistency; coherence
相反|そうはん|conflict; opposition
折衷|せっちゅう|combining approaches
留保|りゅうほ|reservation; withholding
優先順位|ゆうせんじゅんい|order of priority
実効性|じっこうせい|practical effectiveness
合致|がっち|conformity; agreement
精査|せいさ|close examination`),
    grammar: [
      g(
        "〜いかんで・〜いかんによって",
        "Noun, sometimes with の, + いかんで means depending on the nature or outcome of something. It is formal and commonly governs a subsequent decision.",
        "調査結果いかんで、実施時期を変更する。",
        "The implementation date will depend on the survey results.",
      ),
      g(
        "〜いかんにかかわらず",
        "Noun + のいかんにかかわらず means regardless of the nature or outcome of a factor. Unlike いかんで, it says the following rule does not depend on that factor.",
        "理由のいかんにかかわらず、報告は必要だ。",
        "A report is required regardless of the reason.",
      ),
      g(
        "〜を前提として",
        "Noun + を前提として makes an assumption or condition explicit. A proposal resting on a premise may need reevaluation if that premise fails.",
        "人員の確保を前提として、計画を承認した。",
        "The plan was approved on the premise that staff would be secured.",
      ),
      g(
        "〜とも相まって",
        "Noun + とも相まって describes factors acting together to produce an effect. It avoids attributing the result solely to one of several contributing circumstances.",
        "広報の改善が口コミとも相まって、参加者が増えた。",
        "Improved publicity combined with word of mouth to increase participation.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 交渉の結果いかんで、計画を見直す mean?",
        "Whether the plan is revised depends on how the negotiation turns out",
        [
          "The plan will be revised whatever the negotiation's outcome",
          "The negotiation will start only after the plan is revised",
          "The plan was revised before the negotiation began",
        ],
        "いかんで makes the following decision depend on the nature or outcome of the noun before it; いかんにかかわらず would remove that dependence.",
      ),
      q(
        "Which expression makes a decision independent of the stated factor?",
        "結果のいかんにかかわらず",
        ["結果いかんで", "結果を前提として", "結果に応じて"],
        "いかんにかかわらず removes dependence, unlike the other constructions.",
      ),
      q(
        "What does 費用の確保を前提として承認する leave conditional?",
        "Approval depends on securing funding",
        [
          "Funding is irrelevant",
          "All spending has already happened",
          "Approval is necessarily permanent without conditions",
        ],
        "The premise makes funding part of the basis for approval; it cannot be silently discarded.",
      ),
      q(
        "What caused the crowds in 連休が好天とも相まって、行楽地は大変な人出となった?",
        "The holidays together with the good weather",
        [
          "The good weather alone",
          "The holidays alone",
          "Neither the holidays nor the weather",
        ],
        "とも相まって presents the good weather as acting together with the holidays; neither is credited with the crowds alone.",
      ),
    ],
    reading: p(
      "Two documents, one decision",
      "【委員会の方針】展示の目的は、来館者が地域の歴史を自分の生活と結び付けて考えることである。資料の保存を優先するため、原本は一日四時間までしか展示できない。複製については時間の制限を設けない。\n【担当者の提案】仕事帰りの人にも参加してもらうべく、開館時間を延長したい。原本を見せることだけが目的ではないため、夕方は複製と聞き取り映像を用い、来館者同士が経験を話す時間を設ける。原本の展示時間は昼間に限定する。\n両者は資料の扱い方では異なる点に注目しているが、展示を何のために行うかという点では必ずしも対立していない。",
      "Committee policy: help visitors connect local history with their lives. To preserve originals, display them at most four hours daily; copies have no time limit. Staff proposal: extend opening for people after work, using copies and interview videos in the evening with visitor discussions, while originals remain daytime-only. Their emphasis differs, but their understanding of the exhibition's purpose need not conflict.",
      q(
        "Why can the proposal be consistent with the committee's policy?",
        "It preserves the original-display limit while serving the broader educational purpose",
        [
          "It removes the preservation limit entirely",
          "It displays originals all evening",
          "It treats originals as the only purpose of the exhibition",
        ],
        "The proposal satisfies the physical constraint and uses other materials to pursue the shared goal.",
      ),
      q(
        "What does the staff proposal offer in the evening?",
        "Copies, recorded interviews, and time for visitors to talk",
        [
          "The originals on display for four hours",
          "A lecture given by the committee",
          "Guided tours of the storage rooms",
        ],
        "夕方は複製と聞き取り映像を用い、来館者同士が経験を話す時間を設ける describes the evening programme.",
      ),
    ),
    listening: p(
      "Combining conditions",
      "委員会は予算内であることを条件に認めています。一方、現場は最低二人の担当者が必要だと言っています。費用だけを合わせて人を減らす案では、両方の条件を満たしたことにはなりません。期間を短くする案も含めて検討してください。",
      "The committee approves on condition that it stays within budget. The operational team says at least two staff are needed. Cutting staff solely to fit cost would not satisfy both conditions. Consider shortening the period too.",
      q(
        "Which alternative should be examined to retain both requirements?",
        "A shorter period with adequate staffing within budget",
        [
          "Reducing staff below the minimum",
          "Ignoring the budget condition",
          "Assuming either one condition is enough",
        ],
        "Shortening duration is proposed as a way to preserve staffing while controlling cost.",
      ),
      q(
        "What does the operational team say it needs?",
        "At least two members of staff",
        ["A larger budget", "A longer period", "Only one member of staff"],
        "現場は最低二人の担当者が必要だと言っています sets the staffing minimum; the budget condition comes from the committee.",
      ),
    ),
    practice:
      "Make a comparison table for two sources: purpose, constraint, proposed action, and shared ground. Derive an option satisfying both.",
  },
  {
    slug: "delicate-requests",
    title: "Delicate requests & refusals",
    summary:
      "Ask for something genuinely burdensome, refuse without ever saying no outright, and leave the relationship in better repair than the answer alone would suggest.",
    vocabulary: words(`依頼|いらい|a request
恐縮|きょうしゅく|feeling obliged
配慮|はいりょ|consideration
猶予|ゆうよ|a grace period
善処|ぜんしょ|doing what one can
婉曲|えんきょく|indirectness
含み|ふくみ|an implication
辞退|じたい|declining an offer`),
    grammar: [
      g(
        "ご〜いただけますでしょうか",
        "Stacking いただけます with でしょうか produces the most cautious request frame in ordinary business Japanese. Some style guides call it doubly polite and discourage it, yet it remains standard wherever the request being made is genuinely burdensome for the other side.",
        "ご{再考|さいこう}いただけますでしょうか。",
        "Might we ask you to reconsider?",
      ),
      g(
        "〜てはいかがでしょうか",
        "Rather than telling somebody what to do, てはいかがでしょうか offers the action as a possibility for them to weigh. The decision stays visibly theirs, which is what makes the pattern usable towards a superior where a plain suggestion would not be.",
        "{別|べつ}の{案|あん}もご{検討|けんとう}になってはいかがでしょうか。",
        "Might it be worth considering another proposal as well?",
      ),
      g(
        "〜は{控|ひか}えさせていただきます",
        "{控|ひか}える means to refrain, and the humble causative turns the refusal into something you are being permitted to do. It never names the other side's request as unacceptable, so it reads as restraint on your own part rather than rejection of theirs.",
        "{詳細|しょうさい}についてのご{説明|せつめい}は{控|ひか}えさせていただきます。",
        "We will refrain from explaining the details.",
      ),
      g(
        "〜ようお{願|ねが}い{申|もう}し{上|あ}げます",
        "The most formal request frame quotes the desired state with よう and then raises {願|ねが}う twice over into {申|もう}し{上|あ}げます. It never names the reader as the one who must act, and that absence is precisely what makes it feel respectful on the page.",
        "ご{理解|りかい}いただきますようお{願|ねが}い{申|もう}し{上|あ}げます。",
        "We humbly ask for your understanding.",
      ),
    ],
    grammarChecks: [
      q(
        "Which is the most cautious way to ask a client to consider something again?",
        "ご検討いただけますでしょうか",
        ["検討してください", "検討してもらえる?", "検討するべきです"],
        "Stacking いただけます with でしょうか makes the most careful request frame, fitting when the request is a real burden for the other side.",
      ),
      q(
        "Choose the suggestion that leaves the decision with the listener.",
        "ご確認になってはいかがでしょうか",
        ["確認してください", "確認しなさい", "確認するべきです"],
        "てはいかがでしょうか offers the action as an option to weigh; the other three instruct or pass judgment.",
      ),
      q(
        "Which declines without naming the request as unacceptable?",
        "回答は控えさせていただきます",
        ["回答しません", "回答できません", "回答したくありません"],
        "控えさせていただきます frames the refusal as restraint on the speaker's own part rather than as a rejection.",
      ),
      q(
        "Choose the most formal written request for cooperation.",
        "ご協力くださいますようお願い申し上げます",
        ["協力してください", "協力をお願いね", "協力しなさい"],
        "よう quotes the desired state and お願い申し上げます raises the request twice over, without naming the reader as the one who must act.",
      ),
    ],
    reading: p(
      "Declining an invitation",
      "このたびは{記念|きねん}{行事|ぎょうじ}へのご{招待|しょうたい}を{賜|たまわ}り、まことにありがとうございます。{長年|ながねん}にわたるご{配慮|はいりょ}に、{改|あらた}めて{御礼|おれい}{申|もう}し{上|あ}げます。{誠|まこと}に{恐縮|きょうしゅく}ではございますが、{当日|とうじつ}は{以前|いぜん}からの{予定|よてい}と{重|かさ}なっており、{出席|しゅっせき}は{控|ひか}えさせていただきます。ご{期待|きたい}にそえず、{心|こころ}よりおわび{申|もう}し{上|あ}げます。{代|か}わりに{弊社|へいしゃ}の{担当|たんとう}が{伺|うかが}う{形|かたち}でもよろしければ、{手配|てはい}いたしますので、ご{一報|いっぽう}いただけますでしょうか。{今後|こんご}とも{変|か}わらぬお{付|つ}き{合|あ}いをいただきますよう、お{願|ねが}い{申|もう}し{上|あ}げます。",
      "Thank you most sincerely for your invitation to the commemorative event, and let me express our gratitude once more for the consideration you have shown us over so many years. It is with real regret that I must say the day clashes with a prior commitment, and I shall have to refrain from attending. I apologise from the heart for falling short of your expectations. If a member of our staff attending in my place would be acceptable, we would gladly arrange it, so might we ask you to let us know. We hope for your continued goodwill in the years ahead.",
      q(
        "What does the writer propose instead of attending?",
        "Sending a member of staff",
        [
          "Attending on a different day",
          "Sending a written message",
          "Contributing to the costs",
        ],
        "弊社の担当が伺う形でもよろしければ offers a substitute attendee, conditional on the host finding that acceptable.",
      ),
      q(
        "Why is the writer unable to attend?",
        "The day clashes with an earlier commitment",
        [
          "The writer is unwell",
          "The invitation arrived too late",
          "The event has been postponed",
        ],
        "当日は以前からの予定と重なっており gives the reason before 出席は控えさせていただきます.",
      ),
    ),
    listening: p(
      "Asking for more time",
      "{恐縮|きょうしゅく}ではございますが、{今回|こんかい}の{件|けん}につきましては、もう{少|すこ}しご{猶予|ゆうよ}をいただけますでしょうか。{来週|らいしゅう}{半|なか}ばまでには{必|かなら}ずご{回答|かいとう}いたします。",
      "I am sorry to trouble you, but might we ask for a little more time on this matter? We will certainly give you an answer by the middle of next week.",
      q(
        "What does the speaker commit to?",
        "An answer by the middle of next week",
        ["A decision today", "A meeting next month", "A written apology"],
        "来週半ばまでには必ずご回答いたします sets the deadline the speaker is undertaking to meet.",
      ),
      q(
        "What is the speaker asking for?",
        "A little more time",
        ["A lower price", "An earlier meeting", "A written contract"],
        "もう少しご猶予をいただけますでしょうか asks for 猶予, a grace period before the answer is given.",
      ),
    ),
    practice:
      "Write a refusal in four moves: thank the reader, name the obstacle, decline with 控えさせていただきます, and offer one alternative with いかがでしょうか.",
  },
  {
    slug: "public-life-formalities",
    title: "Counters, notices & announcements",
    summary:
      "Follow the set language of public life: the window at a city office, the small print on a printed notice, and the announcement that closes a building for the day.",
    vocabulary: words(`窓口|まどぐち|a service window
受付|うけつけ|reception
書類|しょるい|documents
記入|きにゅう|filling in a form
名義|めいぎ|the name on an account
控え|ひかえ|a copy for your records
不備|ふび|something missing
案内|あんない|an announcement`),
    grammar: [
      g(
        "〜にあたりまして",
        "にあたって marks a significant occasion on which something is done, and にあたりまして is its spoken, ceremonial form. Reserve it for openings, closings, and beginnings; attached to an everyday errand it sounds inflated rather than respectful.",
        "ご{入場|にゅうじょう}にあたりまして、{整理券|せいりけん}をご{提示|ていじ}ください。",
        "On entering, please present your numbered ticket.",
      ),
      g(
        "〜をもちまして",
        "をもって names the point at which something takes effect or comes to an end, and をもちまして is its ceremonial spoken form. The same particle also marks a means in written style, as in {書面|しょめん}をもってご{連絡|れんらく}いたします。",
        "{本日|ほんじつ}をもちまして{受付|うけつけ}を{終了|しゅうりょう}いたします。",
        "Applications close as of today.",
      ),
      g(
        "〜{旨|むね}",
        "{旨|むね} stands for the substance of what was said or decided, and is quoted with the clause that precedes it. Notices and minutes use it wherever the content of a message matters and its exact wording does not.",
        "{欠席|けっせき}する{旨|むね}を{窓口|まどぐち}までご{連絡|れんらく}ください。",
        "Please inform the counter that you will be absent.",
      ),
      g(
        "Announcement style: 〜ております・〜でございます",
        "Public announcements replace います with おります and です with でございます even when nobody in particular is being honoured. The humility attaches to the speaker's own side rather than to any individual listener, which is why it suits a room full of strangers.",
        "ただ{今|いま}{窓口|まどぐち}が{大変|たいへん}{混雑|こんざつ}しております。",
        "The service windows are extremely busy at present.",
      ),
    ],
    grammarChecks: [
      q(
        "Which phrase marks the occasion on which something is done?",
        "開会にあたりまして",
        ["開会をもちまして", "開会する旨", "開会でございます"],
        "にあたりまして marks the significant occasion of an action, here the opening; をもちまして would mark the point at which something ends.",
      ),
      q(
        "Which marks the moment something closes?",
        "本日をもちまして",
        ["本日にあたりまして", "本日という旨で", "本日でございますので"],
        "をもって names the point at which something takes effect or ends; にあたって marks the occasion of an action.",
      ),
      q(
        "Choose the phrase for reporting the gist of a message.",
        "欠席する旨",
        ["欠席するにあたり", "欠席をもって", "欠席でございます"],
        "旨 stands for the substance of what was said, and is used where the exact wording does not matter.",
      ),
      q(
        "Which sentence is in public-announcement style?",
        "ただ今、受付は大変混雑しております",
        [
          "ただ今、受付はすごく混んでるよ",
          "ただ今、受付は大変混雑している",
          "ただ今、受付は大変混雑していますか",
        ],
        "Announcements replace います with おります, humbling the speaker's own side before a room full of strangers.",
      ),
    ],
    reading: p(
      "A notice at the city office",
      "{住所|じゅうしょ}{変更|へんこう}のお{手続|てつづ}きにあたりまして、{本人|ほんにん}{確認|かくにん}{書類|しょるい}が{必要|ひつよう}でございます。{窓口|まどぐち}で{申請書|しんせいしょ}にご{記入|きにゅう}のうえ、{番号札|ばんごうふだ}をお{取|と}りください。{記入|きにゅう}に{不備|ふび}がある{場合|ばあい}はお{呼|よ}び{出|だ}しすることがございますので、{控|ひか}えをお{手元|てもと}にお{持|も}ちください。なお、{代理|だいり}の{方|かた}がお{越|こ}しになる{場合|ばあい}は、{委任状|いにんじょう}と{名義|めいぎ}の{方|かた}の{身分|みぶん}{証明書|しょうめいしょ}が{必要|ひつよう}です。{郵送|ゆうそう}での{申請|しんせい}をご{希望|きぼう}の{方|かた}は、{返信|へんしん}{用|よう}{封筒|ふうとう}を{同封|どうふう}のうえ、{市民|しみん}{課|か}{宛|あて}にお{送|おく}りください。{本日|ほんじつ}の{受付|うけつけ}は{午後|ごご}{五時|ごじ}をもちまして{終了|しゅうりょう}いたします。{時間|じかん}に{余裕|よゆう}をもってお{越|こ}しくださいますようお{願|ねが}い{申|もう}し{上|あ}げます。",
      "For a change-of-address procedure, identification documents are required. Please fill in the application form at the window and take a numbered ticket. If anything is missing from the form you may be called back, so keep your copy to hand. If somebody attends on your behalf, a letter of authorisation and the identification of the person named on the account are both required. If you would rather apply by post, please enclose a reply envelope and send everything to the Citizens' Affairs Section. Today's reception closes at five in the afternoon. We ask that you allow yourself plenty of time.",
      q(
        "What is required if somebody comes on your behalf?",
        "A letter of authorisation and the named person's identification",
        [
          "Only a numbered ticket",
          "A copy of the completed form",
          "Nothing beyond the application form",
        ],
        "委任状と名義の方の身分証明書が必要です names both documents for a representative; the ticket and the copy apply to everyone.",
      ),
      q(
        "What should postal applicants enclose?",
        "A reply envelope",
        [
          "A numbered ticket",
          "A letter of authorisation",
          "Their copy of the completed form",
        ],
        "返信用封筒を同封のうえ、市民課宛にお送りください asks postal applicants to enclose a reply envelope.",
      ),
    ),
    listening: p(
      "A closing announcement",
      "{本日|ほんじつ}はご{来場|らいじょう}いただき、まことにありがとうございました。{当館|とうかん}は{午後|ごご}{六時|ろくじ}をもちまして{閉館|へいかん}いたします。お{忘|わす}れ{物|もの}のないよう、{今一度|いまいちど}お{手元|てもと}をお{確|たし}かめくださいますようお{願|ねが}い{申|もう}し{上|あ}げます。",
      "Thank you very much for visiting us today. The building closes at six in the evening. We ask that you check your belongings once more so that nothing is left behind.",
      q(
        "What are visitors asked to do?",
        "Check their belongings once more",
        [
          "Return to the entrance hall",
          "Show their tickets again",
          "Leave by a different exit",
        ],
        "今一度お手元をお確かめください asks visitors to check what they are carrying before the building closes.",
      ),
      q(
        "When does the building close?",
        "At six in the evening",
        [
          "At five in the afternoon",
          "At seven in the evening",
          "At six in the morning",
        ],
        "当館は午後六時をもちまして閉館いたします: をもちまして marks six p.m. as the closing point.",
      ),
    ),
    practice:
      "Rewrite a plain notice in announcement style: mark the occasion with にあたりまして, close it with をもちまして, and finish with くださいますようお願い申し上げます.",
    problems: problemSet(
      "Fees, deadlines & postage at a city office",
      "Official notices state a fee 1通あたり, per copy, and deadlines counted from a fixed day with 起算して. Before calculating, decide what each figure is charged on and whether the first day is counted.",
      words(`手数料|てすうりょう|a handling fee
合計|ごうけい|a total
起算|きさん|counting from a given day
以内|いない|within
翌日|よくじつ|the following day
返信用封筒|へんしんようふうとう|a reply envelope`),
      {
        text: "{住民票|じゅうみんひょう}の{写|うつ}しの{交付|こうふ}{手数料|てすうりょう}は、1{通|つう}あたり300{円|えん}でございます。3{通|つう}ご{請求|せいきゅう}の{場合|ばあい}、{手数料|てすうりょう}の{合計|ごうけい}はいくらになりますか。",
        translation:
          "The fee for issuing a copy of the residence certificate is 300 yen per copy. If you request three copies, what is the total fee?",
        steps: [
          "1通あたり means per copy, so the fee is charged once for every copy requested.",
          "Three copies: 300 × 3 = 900.",
          "The 合計, the total fee, is 900円.",
        ],
      },
      [
        wordProblem(
          "{住民票|じゅうみんひょう}の{写|うつ}しは1{通|つう}あたり300{円|えん}、{印鑑|いんかん}{登録|とうろく}{証明書|しょうめいしょ}は1{通|つう}あたり400{円|えん}でございます。{住民票|じゅうみんひょう}の{写|うつ}しを2{通|つう}と{印鑑|いんかん}{登録|とうろく}{証明書|しょうめいしょ}を1{通|つう}ご{請求|せいきゅう}の{場合|ばあい}、{手数料|てすうりょう}の{合計|ごうけい}はいくらになりますか。",
          "A copy of the residence certificate costs 300 yen per copy, and a seal registration certificate costs 400 yen per copy. If you request two copies of the residence certificate and one seal registration certificate, what is the total fee?",
          "1,000円",
          ["700円", "1,100円", "1,400円"],
          "Each fee is 1通あたり, per copy: 300 × 2 = 600 for the residence certificates and 400 × 1 = 400 for the seal certificate, so the 合計 is 600 + 400 = 1,000円.",
        ),
        wordProblem(
          "{転入|てんにゅう}{届|とどけ}は、{転入|てんにゅう}した{日|ひ}から{起算|きさん}して{14日|じゅうよっか}{以内|いない}にご{提出|ていしゅつ}ください（{転入|てんにゅう}した{日|ひ}を{含|ふく}みます）。3{月|がつ}25{日|にち}に{転入|てんにゅう}した{場合|ばあい}、{提出|ていしゅつ}の{期限|きげん}は{何月|なんがつ}{何日|なんにち}ですか。",
          "Please submit the moving-in notification within 14 days counted from the day you moved in (the day you moved in is included). If you moved in on 25 March, what is the deadline?",
          "4月7日",
          ["4月8日", "4月9日", "4月14日"],
          "起算して with the first day included makes 25 March day 1: 25–31 March are days 1–7 and 1–7 April are days 8–14, so the 期限 is 4月7日.",
        ),
        wordProblem(
          "{通知|つうち}を{受|う}け{取|と}った{日|ひ}の{翌日|よくじつ}から{起算|きさん}して{10日|とおか}{以内|いない}にご{回答|かいとう}ください。{6月|ろくがつ}{10日|とおか}に{通知|つうち}を{受|う}け{取|と}った{場合|ばあい}、{回答|かいとう}の{期限|きげん}は{何月|なんがつ}{何日|なんにち}ですか。",
          "Please reply within 10 days counted from the day after you receive the notice. If you received the notice on 10 June, what is the deadline for your reply?",
          "6月20日",
          ["6月19日", "6月21日", "7月10日"],
          "翌日から起算して makes the following day, 11 June, day 1, so day 10 is 20 June: the 期限 is 6月20日. Counting 10 June itself gives the 19th.",
        ),
        wordProblem(
          "{郵送|ゆうそう}で{申請|しんせい}される{場合|ばあい}は、{手数料|てすうりょう}のほか、110{円|えん}{分|ぶん}の{切手|きって}を{貼|は}った{返信|へんしん}{用|よう}{封筒|ふうとう}をご{同封|どうふう}ください。{戸籍|こせき}{謄本|とうほん}（1{通|つう}450{円|えん}）を2{通|つう}{請求|せいきゅう}する{場合|ばあい}、{手数料|てすうりょう}と{切手|きって}の{合計|ごうけい}はいくらになりますか。",
          "If you apply by post, please enclose, in addition to the fee, a reply envelope with 110 yen of stamps on it. If you request two copies of the family register (450 yen per copy), what is the total of the fee and the stamps?",
          "1,010円",
          ["560円", "1,120円", "900円"],
          "The 手数料 is 450 × 2 = 900, and one 返信用封筒 needs 110 yen of stamps once, not per copy, so the 合計 is 900 + 110 = 1,010円.",
        ),
      ],
    ),
  },
  {
    slug: "particles-precision",
    title: "Particles at their most precise",
    summary:
      "Four particles that can carry an argument on their own: what only one source could produce, what holds whatever the case, what not even the smallest amount changes, and what is out of the question entirely.",
    vocabulary: words(`真価|しんか|true worth
風土|ふうど|the character of a place
気概|きがい|spirit; mettle
一端|いったん|a glimpse of something
所産|しょさん|a product of something
妥協|だきょう|a compromise
是非|ぜひ|rights and wrongs
余地|よち|room; scope`),
    grammar: [
      g(
        "〜ならでは",
        "ならでは names what only that one source could produce: {職人|しょくにん}ならではの{技|わざ}。It is almost always followed by の and a noun, and the praise is built into the pattern itself, which is why it does not take a negative continuation.",
        "この{土地|とち}ならではの{風土|ふうど}が{料理|りょうり}に{表|あらわ}れています。",
        "The character that belongs to this place alone comes through in its food.",
      ),
      g(
        "〜であれ",
        "であれ concedes every case at once: {理由|りゆう}が{何|なん}であれ、{結論|けつろん}は{変|か}わらない。Repeated as であれ〜であれ it lists the alternatives it is dismissing. It belongs to written argument, where にしても would be the spoken equivalent.",
        "{理由|りゆう}が{何|なん}であれ、{妥協|だきょう}する{余地|よち}はありません。",
        "Whatever the reason, there is no room for compromise.",
      ),
      g(
        "〜たりとも",
        "たりとも follows a counter of one and comes in front of a negative: {一日|いちにち}たりとも{忘|わす}れたことはない。It is stronger than {一日|いちにち}も and distinctly literary, so it suits a declaration rather than an ordinary report.",
        "{一瞬|いっしゅん}たりとも{気|き}を{抜|ぬ}くことはできません。",
        "We cannot let our guard down for even an instant.",
      ),
      g(
        "〜はおろか",
        "はおろか dismisses the smaller case in order to make the larger one land: {漢字|かんじ}はおろか、ひらがなも{読|よ}めない。The second clause has to be the more surprising of the two, and it almost always carries も or さえ with it.",
        "{謝罪|しゃざい}はおろか、{説明|せつめい}さえありませんでした。",
        "There was not even an explanation, let alone an apology.",
      ),
    ],
    grammarChecks: [
      q(
        "Which names what only that source can offer?",
        "職人ならではの技",
        ["職人であれの技", "職人たりともの技", "職人はおろかの技"],
        "ならでは attributes something to one source alone and is followed by の and the noun it describes.",
      ),
      q(
        "What does 理由が何であれ、遅刻は認められない mean?",
        "Lateness is not accepted, whatever the reason",
        [
          "Lateness is accepted if there is a reason",
          "Only some reasons excuse lateness",
          "The reason for lateness must be written down",
        ],
        "であれ concedes every possible case at once, so no reason changes the conclusion.",
      ),
      q(
        "Choose the stronger version of 一日も休まなかった.",
        "一日たりとも休まなかった",
        [
          "一日であれ休まなかった",
          "一日はおろか休まなかった",
          "一日ならでは休まなかった",
        ],
        "たりとも follows a counter of one in front of a negative and is both more emphatic and more literary than も.",
      ),
      q(
        "What does 海外旅行はおろか、国内旅行もしたことがない mean?",
        "They have not even travelled within the country, let alone abroad",
        [
          "They have travelled abroad but never within the country",
          "They prefer domestic travel to going abroad",
          "They have travelled both at home and abroad",
        ],
        "はおろか sets aside the obvious case, travel abroad, so that the more surprising one carried by も, never travelling at home, lands.",
      ),
    ],
    reading: p(
      "An appraisal of a craft",
      "{職人|しょくにん}の{仕事|しごと}を{評|ひょう}するにあたり、{完成|かんせい}した{品|しな}だけを{見|み}るのでは{真価|しんか}をとらえたことにならない。{材料|ざいりょう}を{選|えら}ぶ{段階|だんかい}から{仕上|しあ}げに{至|いた}るまで、{一瞬|いっしゅん}たりとも{気|き}を{抜|ぬ}かない{姿勢|しせい}こそが、その{土地|とち}ならではの{品|しな}を{生|う}むのである。{評価|ひょうか}が{高|たか}い{理由|りゆう}が{何|なん}であれ、{買|か}い{手|て}が{目|め}にするのは{結果|けっか}の{一端|いったん}にすぎない。{近年|きんねん}は{効率|こうりつ}が{優先|ゆうせん}され、{手間|てま}を{惜|お}しまぬ{気概|きがい}はおろか、{技|わざ}を{受|う}け{継|つ}ぐ{余地|よち}さえ{失|うしな}われつつある。{風土|ふうど}の{所産|しょさん}である{技術|ぎじゅつ}を{残|のこ}すには、{是非|ぜひ}を{論|ろん}じる{前|まえ}に{支|ささ}える{仕組|しく}みが{要|い}る。",
      "In appraising a craftsman's work, looking only at the finished article does not amount to grasping its true worth. It is the refusal to relax for even an instant, from the choice of materials through to the finishing, that produces an article belonging to that place alone. Whatever the reason for a high reputation may be, what the buyer sees is no more than a glimpse of the result. In recent years efficiency has taken priority, and not only the spirit that spares no effort but even the scope to pass the craft on is being lost. Keeping alive a skill that is the product of a place calls for a supporting structure, before any argument about rights and wrongs.",
      q(
        "What does the passage say is being lost?",
        "Both the spirit and the scope to pass the craft on",
        [
          "Only the finished articles",
          "Only the buyers' interest",
          "Only the choice of materials",
        ],
        "はおろか dismisses the smaller loss so that the larger one lands: not merely the spirit, but even the scope to hand the craft on.",
      ),
      q(
        "What does the writer say is needed to keep the craft alive?",
        "A structure that supports it, before any debate over its merits",
        [
          "Lower prices for buyers",
          "Faster production methods",
          "More finished articles on display",
        ],
        "技術を残すには、是非を論じる前に支える仕組みが要る puts a supporting structure ahead of any argument over rights and wrongs.",
      ),
    ),
    listening: p(
      "A short comment on a workshop",
      "あの{工房|こうぼう}の{品|しな}は、この{土地|とち}ならではのものです。{値段|ねだん}が{高|たか}いという{声|こえ}もありますが、{手間|てま}を{考|かんが}えれば{妥協|だきょう}の{余地|よち}はありません。{一点|いってん}たりとも{同|おな}じものはないそうです。",
      "The pieces from that workshop belong to this place alone. Some say the prices are high, but given the labour involved there is no room for compromise. Apparently no two pieces are alike.",
      q(
        "What does the speaker say about the pieces?",
        "No two of them are the same",
        [
          "They are all identical",
          "They are made elsewhere",
          "They are sold cheaply",
        ],
        "一点たりとも同じものはない uses たりとも in front of a negative to rule out even one identical piece.",
      ),
      q(
        "How does the speaker respond to the complaint about prices?",
        "Given the labour involved, there is no room for compromise",
        [
          "The prices will soon be lowered",
          "The pieces are actually cheap",
          "The workshop agrees the prices are too high",
        ],
        "手間を考えれば妥協の余地はありません answers the 値段が高い criticism by pointing to the labour involved.",
      ),
    ),
    practice:
      "Take one paragraph of praise and sharpen it: attribute the quality with ならでは, concede every objection with であれ, rule out the smallest exception with たりとも, and dismiss the lesser case with はおろか.",
  },
  {
    slug: "shopping-street-hearing",
    title: "A shopping street's future: a public hearing",
    summary:
      "Follow a public hearing on reviving a declining shopping street, weigh residents' objections against the city's plan, and state a position that concedes one point without giving up the argument.",
    vocabulary: words(`商店街|しょうてんがい|a shopping street
活性化|かっせいか|revitalisation
空き店舗|あきてんぽ|an empty shop unit
公聴会|こうちょうかい|a public hearing
衰退|すいたい|decline
賑わい|にぎわい|bustle; liveliness
再開発|さいかいはつ|redevelopment
存続|そんぞく|continued existence; survival`),
    grammar: [
      g(
        "〜をよそに",
        "Noun + をよそに means pressing ahead while disregarding something that ought to have been taken into account: {住民|じゅうみん}の{不安|ふあん}をよそに. It carries the speaker's criticism, so it describes other people's conduct; nobody uses it approvingly of a decision they made themselves.",
        "{住民|じゅうみん}の{反対|はんたい}をよそに、{再開発|さいかいはつ}の{計画|けいかく}は{着々|ちゃくちゃく}と{進|すす}められた。",
        "The redevelopment plan pressed steadily ahead, regardless of the residents' opposition.",
      ),
      g(
        "〜に{至|いた}っては",
        "Xに{至|いた}っては singles out the most extreme case in a list of bad examples: after a general complaint, it names the instance where things have gone furthest. It is used for negative evaluation, and the sentence usually ends with a striking fact or figure.",
        "{空|あ}き{店舗|てんぽ}は{年々|ねんねん}{増|ふ}えており、{駅前|えきまえ}の{一角|いっかく}に{至|いた}っては{半数|はんすう}がシャッターを{下|お}ろしている。",
        "Empty units increase year after year, and in the block by the station, half the shops have their shutters down.",
      ),
      g(
        "〜を{皮切|かわき}りに",
        "Noun + を{皮切|かわき}りに names the first event in a series that follows it: this one opens, and more of the same comes after. It suits announcements of campaigns, tours and openings, and needs a continuing sequence in the main clause; it cannot describe a one-off event.",
        "{来月|らいげつ}の{朝市|あさいち}を{皮切|かわき}りに、{毎月|まいつき}{催|もよお}しを{開|ひら}いていく{予定|よてい}です。",
        "Starting with next month's morning market, we plan to hold an event every month.",
      ),
      g(
        "〜ならまだしも",
        "XならまだしもY grants that X would be tolerable and rejects Y, which goes further: a temporary closure would be one thing, but a permanent ban is another matter. The concession is conditional and grudging, so it sharpens an objection rather than softening it.",
        "{週末|しゅうまつ}だけの{歩行者|ほこうしゃ}{天国|てんごく}ならまだしも、{毎日|まいにち}の{車両|しゃりょう}{通行|つうこう}{禁止|きんし}には{賛成|さんせい}できません。",
        "A car-free street at weekends would be one thing, but I cannot agree to banning vehicles every day.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase that criticizes going ahead in disregard of objections: 住民の反対 ___ 工事が始まった。",
        "をよそに",
        ["を皮切りに", "に至っては", "ならまだしも"],
        "をよそに means pressing on while ignoring what should have been considered, here the residents' opposition.",
      ),
      q(
        "What does 駅前に至っては半数が閉店している add to a complaint about empty shops?",
        "The station block is the most extreme case",
        [
          "The station block is the only exception",
          "The station block will reopen first",
          "The station block has already recovered",
        ],
        "に至っては singles out the worst instance in a list of bad examples, here the block where half the shops have closed.",
      ),
      q(
        "Choose the pattern for the first event in a series: 朝市 ___ 毎月催しを開く。",
        "を皮切りに",
        ["を限りに", "をよそに", "に至っては"],
        "を皮切りに marks the market as the first of the regular events that will follow it; を限りに would mark a last time instead.",
      ),
      q(
        "What does 週末だけならまだしも、毎日は困る concede?",
        "A weekend-only ban would be tolerable",
        [
          "A daily ban would be tolerable",
          "Neither option is acceptable at all",
          "The speaker prefers a daily ban",
        ],
        "ならまだしも grants that the milder case might be accepted, and rejects the stronger one that follows it.",
      ),
    ],
    reading: p(
      "A hearing on the station-front street",
      "{駅前|えきまえ}{商店街|しょうてんがい}の{活性化|かっせいか}をめぐる{公聴会|こうちょうかい}が{先週|せんしゅう}{開|ひら}かれた。{市|し}は、{老朽化|ろうきゅうか}した{建物|たてもの}を{取|と}り{壊|こわ}し、{商業|しょうぎょう}{施設|しせつ}と{住宅|じゅうたく}を{一体的|いったいてき}に{整備|せいび}する{再開発|さいかいはつ}{案|あん}を{示|しめ}している。{空|あ}き{店舗|てんぽ}はこの{十年|じゅうねん}で{倍増|ばいぞう}し、{駅|えき}に{近|ちか}い{一角|いっかく}に{至|いた}っては{半数|はんすう}がシャッターを{下|お}ろしたままだ。{市|し}の{担当者|たんとうしゃ}は、{手|て}をこまねいていれば{商店街|しょうてんがい}の{存続|そんぞく}そのものが{危|あや}うくなると{訴|うった}えた。{一方|いっぽう}、{長年|ながねん}{店|みせ}を{営|いとな}んできた{住民|じゅうみん}からは、{説明|せつめい}を{求|もと}める{声|こえ}をよそに{計画|けいかく}が{進|すす}められてきたという{批判|ひはん}が{相次|あいつ}いだ。ある{店主|てんしゅ}は「{建|た}て{替|か}えならまだしも、{通|とお}りの{名前|なまえ}まで{消|き}えてしまうのは{納得|なっとく}できない」と{述|の}べた。{賑|にぎ}わいを{取|と}り{戻|もど}す{手段|しゅだん}は{再開発|さいかいはつ}に{限|かぎ}らないという{指摘|してき}もあった。{市|し}は{来月|らいげつ}の{朝市|あさいち}を{皮切|かわき}りに、{空|あ}き{店舗|てんぽ}を{使|つか}った{催|もよお}しを{試験的|しけんてき}に{開|ひら}き、その{結果|けっか}を{踏|ふ}まえて{計画|けいかく}を{見直|みなお}すとしている。",
      "A public hearing on reviving the shopping street in front of the station was held last week. The city has proposed a redevelopment plan that would demolish ageing buildings and develop shops and housing together. Empty units have doubled over the past ten years, and in the block nearest the station, half the shops still have their shutters down. A city official argued that if nothing is done, the very survival of the shopping street will be at risk. Residents who have run shops there for many years, on the other hand, repeatedly criticized the city for pressing ahead with the plan regardless of requests for an explanation. One shopkeeper said, “Rebuilding would be one thing, but I cannot accept the street's very name disappearing.” Others pointed out that redevelopment is not the only way to bring back the bustle. The city says that, starting with next month's morning market, it will hold trial events in the empty units and review the plan in light of the results.",
      q(
        "What will the city do before it revises the plan?",
        "Hold trial events in empty units, starting with a morning market",
        [
          "Demolish the block near the station first",
          "Cancel the redevelopment altogether",
          "Rename the shopping street",
        ],
        "朝市を皮切りに…試験的に開き、その結果を踏まえて計画を見直す: the trial events come first, and their results feed into the review.",
      ),
      q(
        "What does the shopkeeper object to most strongly?",
        "Losing the name of the street",
        [
          "Rebuilding the old buildings",
          "Holding a morning market",
          "Attending the public hearing",
        ],
        "建て替えならまだしも concedes that rebuilding might be tolerable; the objection falls on the street's name disappearing.",
      ),
    ),
    listening: p(
      "A resident takes the floor",
      "{商店街|しょうてんがい}を{残|のこ}したいという{思|おも}いは、{市|し}も{私|わたし}たちも{同|おな}じはずです。ただ、{十分|じゅうぶん}な{説明|せつめい}もないまま{日程|にってい}だけが{決|き}まっていくのには{納得|なっとく}がいきません。まずは{空|あ}き{店舗|てんぽ}を{一軒|いっけん}でも{借|か}りて、{若|わか}い{人|ひと}に{店|みせ}を{出|だ}してもらうところから{始|はじ}めてはどうでしょうか。",
      "Surely the city and we residents share the same wish to keep the shopping street. But I cannot accept the schedule being fixed without any proper explanation. Why not begin by renting even one empty unit and having young people open a shop there?",
      q(
        "What is the speaker's main complaint?",
        "Dates are being fixed without adequate explanation",
        [
          "The city does not want to keep the street",
          "Young people are opening too many shops",
          "The hearing has been held too late",
        ],
        "十分な説明もないまま日程だけが決まっていく is the complaint; the speaker says outright that the city shares the goal.",
      ),
      q(
        "What does the speaker propose as a first step?",
        "Letting young people open a shop in an empty unit",
        [
          "Demolishing the empty units",
          "Postponing the hearing",
          "Closing the street to traffic",
        ],
        "空き店舗を一軒でも借りて、若い人に店を出してもらうところから始めて proposes a small trial before any larger plan.",
      ),
    ),
    practice:
      "Summarize both sides of a local planning dispute in four sentences: criticize one decision with をよそに, give the worst case with に至っては, and concede a milder option with ならまだしも.",
  },
  {
    slug: "research-seminar",
    title: "A research seminar & formal problem statements",
    summary:
      "Follow a graduate research seminar, report a finding in the careful language of academic discussion, and read the fixed conventions of a formal problem statement before you calculate.",
    vocabulary: words(`仮説|かせつ|a hypothesis
先行研究|せんこうけんきゅう|previous research
標本|ひょうほん|a sample
確率|かくりつ|probability
比例|ひれい|proportion
独立|どくりつ|independence
考察|こうさつ|discussion of results
指導教員|しどうきょういん|a supervisor`),
    grammar: [
      g(
        "〜ものとする",
        "〜ものとする lays down a condition that is to be taken as given: in a problem, 〜は{独立|どくりつ}であるものとする means assume that it is independent, and in regulations it states a rule. It announces a premise rather than a fact, so the reasoning that follows is valid only inside that assumption.",
        "{各|かく}{試行|しこう}は{互|たが}いに{独立|どくりつ}であるものとする。",
        "Each trial shall be assumed to be independent of the others.",
      ),
      g(
        "〜を{求|もと}めよ・〜を{示|しめ}せ",
        "Exam papers and textbooks give instructions in the written imperative: {求|もと}める becomes {求|もと}めよ, {示|しめ}す becomes {示|しめ}せ, and {答|こた}える becomes {答|こた}えよ. The form is impersonal rather than rude, and it names exactly what the answer must be, so check whether it asks for a value, a proof, or a reason.",
        "{点|てん}Pの{座標|ざひょう}を{求|もと}めよ。また、その{理由|りゆう}を{示|しめ}せ。",
        "Find the coordinates of point P. Also show the reason.",
      ),
      g(
        "〜に{照|て}らして",
        "Noun + に{照|て}らして means judging something against a standard, a precedent, or a body of evidence: {先行|せんこう}{研究|けんきゅう}に{照|て}らして. The standard is named explicitly, which is what distinguishes it from a vaguer {考|かんが}えると, and it is at home in reports, rulings, and academic discussion.",
        "{先行|せんこう}{研究|けんきゅう}に{照|て}らして{考察|こうさつ}すると、この{結果|けっか}は{意外|いがい}ではない。",
        "Discussed in the light of previous research, this result is not surprising.",
      ),
      g(
        "〜ともなると・〜ともなれば",
        "Xともなると describes what is expected once a certain level or status is reached: {大学院|だいがくいん}ともなると, at the level of graduate school. It implies a step up from an ordinary case, and the main clause states the demand or difference that comes with that higher stage.",
        "{大学院|だいがくいん}ともなると、{自|みずか}ら{問|と}いを{立|た}てることが{求|もと}められる。",
        "Once you reach graduate school, you are expected to pose questions of your own.",
      ),
    ],
    grammarChecks: [
      q(
        "In a problem, what does 各試行は独立であるものとする do?",
        "It sets an assumption to be taken as given",
        [
          "It reports an experimental result",
          "It asks you to prove independence",
          "It says the trials were not independent",
        ],
        "ものとする lays down a premise for the reasoning that follows; it does not claim an observed fact.",
      ),
      q(
        "An exam question ends with 面積を求めよ. What must you give?",
        "The value of the area",
        [
          "A proof that the area exists",
          "An opinion about the area",
          "The method alone, without a value",
        ],
        "求めよ is the written imperative of 求める, find, so the answer is the numerical value of the area.",
      ),
      q(
        "Choose the phrase for judging against a named standard: 先行研究 ___ 結果を検討する。",
        "に照らして",
        ["ともなると", "をよそに", "を皮切りに"],
        "に照らして judges the result against the body of earlier research that is named before it.",
      ),
      q(
        "What does 大学院ともなると imply?",
        "Graduate school is a higher stage with greater demands",
        [
          "Graduate school is no different from any other stage",
          "Graduate school was reached by accident",
          "Graduate school is best avoided",
        ],
        "ともなると marks a step up to a level at which more is expected, and the main clause states the demand.",
      ),
    ],
    reading: p(
      "An interim report at the seminar",
      "{今週|こんしゅう}のゼミでは、{修士|しゅうし}{一年|いちねん}の{山下|やました}さんが{調査|ちょうさ}の{中間|ちゅうかん}{報告|ほうこく}を{行|おこな}った。{仮説|かせつ}は、{通学|つうがく}{時間|じかん}が{長|なが}い{学生|がくせい}ほど{図書館|としょかん}を{利用|りよう}する{回数|かいすう}が{少|すく}ないというものだ。{回答|かいとう}が{得|え}られた{二百人|にひゃくにん}の{標本|ひょうほん}では、{確|たし}かにその{傾向|けいこう}が{見|み}られた。だが{指導|しどう}{教員|きょういん}は、{先行|せんこう}{研究|けんきゅう}に{照|て}らすと、{通学|つうがく}{時間|じかん}の{長|なが}い{学生|がくせい}ほどアルバイトの{時間|じかん}も{長|なが}い{可能性|かのうせい}があると{指摘|してき}した。{二|ふた}つの{要因|よういん}が{無関係|むかんけい}であるものとして{分析|ぶんせき}すれば、{見|み}かけの{相関|そうかん}を{因果|いんが}{関係|かんけい}と{取|と}り{違|ちが}えかねない。{大学院|だいがくいん}ともなると、{結果|けっか}を{示|しめ}すだけでなく、{別|べつ}の{説明|せつめい}をどう{退|しりぞ}けたかまで{問|と}われる。{山下|やました}さんは、アルバイトの{時間|じかん}を{統制|とうせい}した{上|うえ}で{再分析|さいぶんせき}し、{来月|らいげつ}{改|あらた}めて{報告|ほうこく}することになった。",
      "At this week's seminar, first-year master's student Ms Yamashita gave an interim report on her survey. Her hypothesis is that the longer students spend commuting, the less often they use the library. In the sample of two hundred students who responded, that tendency did indeed appear. Her supervisor, however, pointed out that in the light of previous research, students with longer commutes may also spend longer in part-time jobs. Analysing the data on the assumption that the two factors are unrelated could lead her to mistake an apparent correlation for cause and effect. At graduate level you are asked not only to present results but also how you ruled out other explanations. Ms Yamashita is to reanalyse the data after controlling for part-time working hours and report again next month.",
      q(
        "What is the supervisor's main concern?",
        "Another factor may explain the apparent link",
        [
          "The sample of two hundred is far too small",
          "The hypothesis has already been proved",
          "The library keeps inaccurate records",
        ],
        "The supervisor points out that part-time work may rise with commuting time, so the link could be apparent rather than causal.",
      ),
      q(
        "What will Ms Yamashita do next?",
        "Reanalyse after controlling for part-time work",
        [
          "Collect a new sample next week",
          "Abandon her hypothesis",
          "Report the original numbers unchanged",
        ],
        "アルバイトの時間を統制した上で再分析し、来月改めて報告する: she controls for the second factor and reports again next month.",
      ),
    ),
    listening: p(
      "A question from the floor",
      "{結果|けっか}は{面白|おもしろ}いと{思|おも}います。ただ、この{標本|ひょうほん}はすべて{一|ひと}つの{大学|だいがく}から{集|あつ}めたものですよね。{他|ほか}の{大学|だいがく}にも{当|あ}てはまるかどうかは、{現時点|げんじてん}では{言|い}えないはずです。{結論|けつろん}の{書|か}き{方|かた}を{少|すこ}し{控|ひか}えめにしてはどうでしょう。",
      "I think the results are interesting. But this sample was all collected at a single university, wasn't it? At this point you surely cannot say whether it applies to other universities as well. How about phrasing the conclusion a little more modestly?",
      q(
        "What limitation does the speaker point out?",
        "All the data come from one university",
        [
          "The results are not interesting",
          "The sample comes from several countries",
          "The data were collected too long ago",
        ],
        "この標本はすべて一つの大学から集めたもの names the limitation: the sample covers a single university.",
      ),
      q(
        "What does the speaker suggest?",
        "Wording the conclusion more cautiously",
        [
          "Deleting the conclusion entirely",
          "Adding more universities before the seminar ends",
          "Presenting the results as universal",
        ],
        "結論の書き方を少し控えめにしてはどうでしょう recommends a more modest conclusion rather than new data.",
      ),
    ),
    practice:
      "Rewrite one of your results as a seminar report: state its assumption with ものとする, judge it against earlier work with に照らして, and end with the question that remains open.",
    problems: problemSet(
      "Formal problems: probability, ratios & equations",
      "Exam papers and research seminars state problems in a fixed formal style. Read the conditions set by ただし and ものとする before you calculate, then give exactly the quantity that 求めよ asks for.",
      words(`同様に確からしい|どうようにたしからしい|equally likely
少なくとも|すくなくとも|at least
同時に|どうじに|at the same time
比|ひ|a ratio
方程式|ほうていしき|an equation
〜とする|とする|let (a quantity) be`),
      {
        text: "{袋|ふくろ}の{中|なか}に{赤玉|あかだま}が3{個|こ}、{白玉|しろだま}が5{個|こ}{入|はい}っている。この{袋|ふくろ}から{玉|たま}を1{個|こ}{取|と}り{出|だ}すとき、それが{赤玉|あかだま}である{確率|かくりつ}を{求|もと}めよ。ただし、どの{玉|たま}が{取|と}り{出|だ}されることも{同様|どうよう}に{確|たし}からしいものとする。",
        translation:
          "A bag contains 3 red balls and 5 white balls. One ball is drawn from the bag; find the probability that it is red. Assume that each ball is equally likely to be drawn.",
        steps: [
          "Read the condition first: ただし…同様に確からしいものとする says every ball is equally likely, so you may simply count cases.",
          "There are 3 + 5 = 8 balls in all, and 3 of them are red.",
          "The probability is therefore 3/8. 求めよ asks for this value, not for a description of the method.",
        ],
      },
      [
        wordProblem(
          "{箱|はこ}の{中|なか}に{当|あ}たりくじが2{本|ほん}、はずれくじが4{本|ほん}{入|はい}っている。この{箱|はこ}から{同時|どうじ}に2{本|ほん}を{引|ひ}くとき、2{本|ほん}とも{当|あ}たりである{確率|かくりつ}を{求|もと}めよ。ただし、どのくじを{引|ひ}くことも{同様|どうよう}に{確|たし}からしいものとする。",
          "A box contains 2 winning lots and 4 losing lots. Two lots are drawn from the box at the same time; find the probability that both are winners. Assume that each lot is equally likely to be drawn.",
          "1/15",
          ["1/9", "2/15", "1/3"],
          "同時に2本 means the two lots are drawn together, without replacement. There are 6 × 5 ÷ 2 = 15 possible pairs, and only one of them holds both winners, so the probability is 1/15. Treating the draws as independent, with replacement, gives (2/6) × (2/6) = 1/9 instead.",
        ),
        wordProblem(
          "1{個|こ}のさいころを3{回|かい}{投|な}げるとき、{少|すく}なくとも1{回|かい}は6の{目|め}が{出|で}る{確率|かくりつ}を{求|もと}めよ。ただし、さいころのどの{目|め}が{出|で}ることも{同様|どうよう}に{確|たし}からしいものとする。",
          "A single die is thrown 3 times. Find the probability that a 6 comes up at least once. Assume that each face of the die is equally likely to come up.",
          "91/216",
          ["1/2", "125/216", "1/216"],
          "少なくとも1回 (at least once) is easiest through the complement. The probability that no 6 appears in three throws is (5/6) × (5/6) × (5/6) = 125/216, so the answer is 1 − 125/216 = 91/216. Adding 1/6 three times gives 1/2, which counts throws with more than one 6 twice over.",
        ),
        wordProblem(
          "ある{学部|がくぶ}では、{大学院|だいがくいん}への{進学|しんがく}を{希望|きぼう}する{学生|がくせい}と{就職|しゅうしょく}を{希望|きぼう}する{学生|がくせい}の{人数|にんずう}の{比|ひ}が2：5である。{就職|しゅうしょく}を{希望|きぼう}する{学生|がくせい}が150{人|にん}のとき、{進学|しんがく}を{希望|きぼう}する{学生|がくせい}の{人数|にんずう}を{求|もと}めよ。ただし、どの{学生|がくせい}もいずれか{一方|いっぽう}のみを{希望|きぼう}しているものとする。",
          "In a certain faculty, the ratio of students hoping to go on to graduate school to students hoping to find a job is 2 : 5. If 150 students hope to find a job, find the number hoping to go on to graduate school. Assume that every student hopes for exactly one of the two.",
          "60人",
          ["375人", "210人", "30人"],
          "The ratio 2：5 puts 進学 first and 就職 second, so the 150 job-seekers make up 5 shares and one share is 150 ÷ 5 = 30. 進学 takes 2 shares: 30 × 2 = 60. Reading the ratio the wrong way round gives 150 × 5 ÷ 2 = 375, and 210 is the whole faculty.",
        ),
        wordProblem(
          "ある{研究会|けんきゅうかい}の{参加費|さんかひ}は、{会員|かいいん}が2,000{円|えん}、{非会員|ひかいいん}が3,000{円|えん}である。{参加者|さんかしゃ}は{全部|ぜんぶ}で40{人|にん}、{参加費|さんかひ}の{合計|ごうけい}は95,000{円|えん}であった。{会員|かいいん}の{人数|にんずう}をx{人|にん}として{方程式|ほうていしき}を{立|た}て、{非会員|ひかいいん}の{人数|にんずう}を{求|もと}めよ。",
          "A study group charges members 2,000 yen and non-members 3,000 yen to take part. There were 40 participants in all, and the fees came to 95,000 yen. Let the number of members be x, set up an equation, and find the number of non-members.",
          "15人",
          ["25人", "5人", "20人"],
          "〜をx人として fixes x as the number of members, so there are 40 − x non-members. The fees give 2,000x + 3,000(40 − x) = 95,000, so 120,000 − 1,000x = 95,000 and x = 25. The question asks for 非会員, so the answer is 40 − 25 = 15; stopping at x gives the 25 members instead.",
        ),
      ],
    ),
  },
  {
    slug: "crisis-response",
    title: "A crisis at work: apology & prevention",
    summary:
      "Follow a company through a quality scandal: read its apology statement, judge conduct that falls short of a role, and explain the measures meant to stop the same thing happening again.",
    vocabulary: words(`不祥事|ふしょうじ|a scandal
謝罪会見|しゃざいかいけん|an apology press conference
隠蔽|いんぺい|a cover-up
再発防止|さいはつぼうし|preventing a recurrence
経緯|けいい|the sequence of events
信頼回復|しんらいかいふく|restoring trust
当事者|とうじしゃ|the party directly concerned
処分|しょぶん|disciplinary action`),
    grammar: [
      g(
        "〜まじき・〜にあるまじき",
        "Dictionary form + まじき means that ought never to be done, and Noun + にあるまじき names conduct unworthy of that role: {教師|きょうし}にあるまじき{行為|こうい}. It is a classical negative of obligation found in formal criticism, and it always passes a moral judgment on the conduct it modifies.",
        "{品質|ひんしつ}{記録|きろく}の{改|かい}ざんは、{製造業|せいぞうぎょう}にあるまじき{行為|こうい}だ。",
        "Falsifying quality records is conduct unworthy of a manufacturer.",
      ),
      g(
        "〜ともあろう〜が",
        "XともあろうYが expresses shock that somebody of X's standing, of whom better is expected, has behaved badly: {大手|おおて}{企業|きぎょう}ともあろうものが. Y is usually もの or a noun for a role, and the sentence goes on to name the disappointing conduct, often ending in とは or なんて.",
        "{業界|ぎょうかい}{最大手|さいおおて}ともあろう{企業|きぎょう}が、{報告|ほうこく}を{半年|はんとし}も{怠|おこた}っていたとは。",
        "To think that a company of the industry leader's standing neglected to report it for six months.",
      ),
      g(
        "〜てしかるべき",
        "Te-form + しかるべきだ means that something would be only proper, or ought to be the case: {公表|こうひょう}されてしかるべきだった. It is often used in hindsight to say what should have happened and did not, and the judgment rests on common standards rather than on a personal preference.",
        "{事故|じこ}の{情報|じょうほう}は、もっと{早|はや}く{公表|こうひょう}されてしかるべきだった。",
        "Information about the accident ought to have been made public much sooner.",
      ),
      g(
        "〜ばそれまでだ",
        "〜ばそれまでだ says that once the condition is met, that is the end of the matter and nothing more can be done: {信頼|しんらい}は{失|うしな}えばそれまでだ. It stresses how final or futile the outcome is, and often follows a list of efforts that a single failure would undo.",
        "どれほど{対策|たいさく}を{重|かさ}ねても、{現場|げんば}で{守|まも}られなければそれまでだ。",
        "However many measures we put in place, if they are not followed on the shop floor, that is the end of it.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 企業にあるまじき行為 say about the conduct?",
        "It is unworthy of a company",
        [
          "It is typical of a company",
          "It is required of a company",
          "It is unknown to a company",
        ],
        "にあるまじき passes judgment that the conduct falls below what the role of a company demands.",
      ),
      q(
        "Choose the phrase expressing shock at conduct below someone's standing: 大手企業 ___ ものが、事実を隠すとは。",
        "ともあろう",
        ["ならまだしも", "をよそに", "に至っては"],
        "ともあろうものが expects better of a leading company and introduces the disappointing conduct that follows.",
      ),
      q(
        "What does 公表されてしかるべきだった imply?",
        "It should have been made public but was not",
        [
          "It was made public at the proper time",
          "It must never be made public",
          "It may be made public if convenient",
        ],
        "てしかるべきだった states in hindsight what would have been proper, and implies that it did not happen.",
      ),
      q(
        "What does 信頼は失えばそれまでだ stress?",
        "Once trust is lost, nothing more can be done",
        [
          "Trust can always be rebuilt quickly",
          "Trust matters only at the start",
          "Losing trust is sometimes useful",
        ],
        "ばそれまでだ marks the condition after which the matter is finished and cannot be undone.",
      ),
    ],
    reading: p(
      "Our apology and the steps we will take",
      "このたび、{当社|とうしゃ}{製品|せいひん}の{一部|いちぶ}において、{出荷|しゅっか}{前|まえ}の{検査|けんさ}が{規定|きてい}どおりに{行|おこな}われていなかったことが{判明|はんめい}いたしました。お{客様|きゃくさま}をはじめ{関係者|かんけいしゃ}の{皆様|みなさま}に{多大|ただい}なご{迷惑|めいわく}とご{心配|しんぱい}をおかけしましたことを、{深|ふか}くお{詫|わ}び{申|もう}し{上|あ}げます。{調査|ちょうさ}の{結果|けっか}、{担当|たんとう}{部署|ぶしょ}では{人員|じんいん}{不足|ぶそく}を{理由|りゆう}に{検査|けんさ}の{一部|いちぶ}が{省略|しょうりゃく}され、その{事実|じじつ}が{上層部|じょうそうぶ}に{報告|ほうこく}されないまま{二年|にねん}{近|ちか}くが{経過|けいか}していました。{品質|ひんしつ}を{第一|だいいち}に{掲|かか}げる{企業|きぎょう}にあるまじき{事態|じたい}であり、{本来|ほんらい}であれば、より{早|はや}い{段階|だんかい}で{公表|こうひょう}されてしかるべきでした。{当社|とうしゃ}は{外部|がいぶ}の{専門家|せんもんか}による{検証|けんしょう}{委員会|いいんかい}を{設置|せっち}し、{経緯|けいい}の{解明|かいめい}と{再発|さいはつ}{防止|ぼうし}{策|さく}の{策定|さくてい}を{進|すす}めてまいります。{関係|かんけい}した{社員|しゃいん}の{処分|しょぶん}については、{委員会|いいんかい}の{報告|ほうこく}を{待|ま}って{決定|けってい}いたします。",
      "We have found that, for some of our products, pre-shipment inspections were not carried out as required. We offer our deepest apologies to our customers and to everyone concerned for the great inconvenience and worry we have caused. Our investigation found that the department responsible had skipped part of the inspection, citing a shortage of staff, and that nearly two years passed without this being reported to senior management. This is a situation unworthy of a company that puts quality first, and it ought to have been made public at a far earlier stage. We will set up a verification committee of outside experts, and proceed with establishing how this happened and drawing up measures to prevent a recurrence. Disciplinary action for the employees involved will be decided once the committee has reported.",
      q(
        "What failure does the statement admit?",
        "Skipped inspections went unreported for nearly two years",
        [
          "Customers misused the products",
          "Outside experts approved the shortcut",
          "Senior management ordered the inspections to stop",
        ],
        "検査の一部が省略され、その事実が上層部に報告されないまま二年近くが経過 describes both the shortcut and the long silence that followed.",
      ),
      q(
        "When will disciplinary action be decided?",
        "After the committee has reported",
        [
          "Immediately, before any investigation",
          "At the next shareholders' meeting",
          "Only if customers complain",
        ],
        "処分については、委員会の報告を待って決定いたします: the decision waits for the committee's findings.",
      ),
    ),
    listening: p(
      "Answering a reporter",
      "{記者|きしゃ}の{方|かた}からご{質問|しつもん}のありました{点|てん}ですが、{隠蔽|いんぺい}の{意図|いと}はなかったと{現時点|げんじてん}では{考|かんが}えております。ただ、{意図|いと}の{有無|うむ}にかかわらず、{報告|ほうこく}が{遅|おく}れたのは{私|わたくし}ども{経営陣|けいえいじん}の{責任|せきにん}です。{信頼|しんらい}は{一度|いちど}{失|うしな}えばそれまでだと{肝|きも}に{銘|めい}じ、{再発|さいはつ}{防止|ぼうし}に{全力|ぜんりょく}を{尽|つ}くしてまいります。",
      "On the point the reporter raised, we believe at present that there was no intention to conceal anything. However, whether or not there was such an intention, the delay in reporting is the responsibility of us, the management. Taking to heart that trust, once lost, cannot be won back, we will do everything in our power to prevent a recurrence.",
      q(
        "Where does the speaker place responsibility for the delay?",
        "On the management",
        [
          "On the reporter",
          "On the inspection staff alone",
          "On the outside experts",
        ],
        "報告が遅れたのは私ども経営陣の責任です accepts responsibility for the delay at the level of management.",
      ),
      q(
        "What does the speaker say about an intention to conceal?",
        "There was none, as far as they know at present",
        [
          "There clearly was, and they admit it",
          "The reporter has proved that there was",
          "The question will not be answered",
        ],
        "隠蔽の意図はなかったと現時点では考えております is a provisional view, limited by 現時点では.",
      ),
    ),
    practice:
      "Draft a four-part apology statement: state the facts, apologise with お詫び申し上げます, judge the conduct with にあるまじき and てしかるべきだった, and name one concrete measure against a recurrence.",
  },
  {
    slug: "formal-visits",
    title: "Formal visits: courtesy calls, thanks & condolences",
    summary:
      "Make a courtesy call with a set greeting, combine thanks with a second purpose in a single visit, and offer condolences with the fixed phrases and careful word choice the occasion requires.",
    vocabulary: words(`表敬訪問|ひょうけいほうもん|a courtesy call
弔問|ちょうもん|a condolence call
香典|こうでん|condolence money
遺族|いぞく|the bereaved family
手土産|てみやげ|a small gift brought on a visit
謝意|しゃい|gratitude
光栄|こうえい|an honour
冥福|めいふく|peace in the afterlife`),
    grammar: [
      g(
        "〜かたがた",
        "Noun + かたがた joins two purposes in one formal act: お{礼|れい}かたがたご{挨拶|あいさつ}に{伺|うかが}いました, I came to thank you and to pay my respects at the same time. It belongs to letters and formal visits, and the first noun is usually a courtesy such as お{礼|れい}, ご{報告|ほうこく}, or お{詫|わ}び.",
        "{先日|せんじつ}のお{礼|れい}かたがた、ご{挨拶|あいさつ}に{伺|うかが}いました。",
        "I have come to pay my respects and to thank you for the other day.",
      ),
      g(
        "〜の{至|いた}り",
        "Noun + の{至|いた}り expresses a feeling at its utmost degree: {光栄|こうえい}の{至|いた}りです, I am honoured beyond measure. It is fixed to a handful of nouns such as {光栄|こうえい}, {恐縮|きょうしゅく}, and {赤面|せきめん}, and appears in speeches and letters rather than in conversation.",
        "このような{席|せき}にお{招|まね}きいただき、{光栄|こうえい}の{至|いた}りでございます。",
        "It is the greatest honour to be invited to an occasion such as this.",
      ),
      g(
        "〜てやまない",
        "Te-form + やまない describes a feeling that never ceases: ご{健勝|けんしょう}を{祈|いの}ってやみません. It attaches to verbs of wishing and hoping such as {願|ねが}う, {祈|いの}る, and {期待|きたい}する, and closes formal speeches and letters with a wish that is meant sincerely and lastingly.",
        "{貴社|きしゃ}のますますのご{発展|はってん}を{願|ねが}ってやみません。",
        "We sincerely wish your company ever greater success.",
      ),
      g(
        "Condolences: お{悔|く}やみの{言葉|ことば} & {忌|い}み{言葉|ことば}",
        "At a condolence call, keep the words few: このたびはご{愁傷|しゅうしょう}{様|さま}でございます, or {心|こころ}よりお{悔|く}やみ{申|もう}し{上|あ}げます. Avoid {忌|い}み{言葉|ことば}, words that suggest misfortune repeating, such as {重|かさ}ね{重|がさ}ね and たびたび, and do not ask the family about the cause of death.",
        "このたびはご{愁傷|しゅうしょう}{様|さま}でございます。{心|こころ}よりお{悔|く}やみ{申|もう}し{上|あ}げます。",
        "Please accept my deepest sympathy. I offer my heartfelt condolences.",
      ),
    ],
    grammarChecks: [
      q(
        "What does お礼かたがた伺いました tell the host?",
        "The visit serves thanks and another purpose at once",
        [
          "The visit is only to complain",
          "The visit was made by chance",
          "The thanks will follow later by post",
        ],
        "かたがた joins two purposes in one formal act: thanking the host and paying a courtesy call.",
      ),
      q(
        "Choose the phrase for the utmost honour: お招きいただき、光栄 ___ です。",
        "の至り",
        ["かたがた", "てやまない", "ともなると"],
        "の至り expresses a feeling at its utmost, and it is fixed to nouns such as 光栄 and 恐縮.",
      ),
      q(
        "What does ご発展を願ってやみません express?",
        "A wish that never ceases",
        [
          "A wish that has just ended",
          "A doubt about the future",
          "A request to stop expanding",
        ],
        "てやまない attaches to verbs of wishing and says that the feeling continues without end.",
      ),
      q(
        "Which expression is best avoided when offering condolences?",
        "重ね重ね",
        ["お悔やみ申し上げます", "ご愁傷様でございます", "心より"],
        "重ね重ね suggests misfortune repeating, so it is one of the 忌み言葉 avoided at a condolence call.",
      ),
    ],
    reading: p(
      "Manners for a formal visit",
      "{改|あらた}まった{訪問|ほうもん}では、{用件|ようけん}を{短|みじか}く{伝|つた}えることが{何|なに}よりの{礼儀|れいぎ}とされる。{就任|しゅうにん}の{挨拶|あいさつ}や{表敬訪問|ひょうけいほうもん}であれば、{事前|じぜん}に{約束|やくそく}を{取|と}り、{手土産|てみやげ}は{相手|あいて}の{負担|ふたん}にならない{程度|ていど}のものを{選|えら}ぶ。お{礼|れい}かたがた{近況|きんきょう}を{報告|ほうこく}するのもよいが、{長居|ながい}は{禁物|きんもつ}だ。これに{対|たい}して{弔問|ちょうもん}では、{言葉|ことば}の{選|えら}び{方|かた}に{一層|いっそう}の{注意|ちゅうい}が{要|い}る。{遺族|いぞく}には「このたびはご{愁傷|しゅうしょう}{様|さま}でございます」と{短|みじか}く{述|の}べ、{亡|な}くなった{経緯|けいい}を{尋|たず}ねることは{控|ひか}える。「{重|かさ}ね{重|がさ}ね」や「たびたび」のように、{不幸|ふこう}が{重|かさ}なることを{連想|れんそう}させる{言葉|ことば}も{避|さ}けたい。{香典|こうでん}には{新札|しんさつ}を{使|つか}わないのが{一般的|いっぱんてき}だが、{地域|ちいき}や{宗教|しゅうきょう}によって{慣習|かんしゅう}が{異|こと}なるため、{迷|まよ}ったときは{周囲|しゅうい}に{確|たし}かめるのが{確実|かくじつ}である。",
      "On a formal visit, stating your business briefly is considered the greatest courtesy. For a greeting on taking up a post or for a courtesy call, make an appointment in advance, and choose a gift modest enough not to burden the host. It is fine to report your recent news while offering thanks, but staying long is to be avoided. At a condolence call, by contrast, still more care is needed in choosing your words. Say only briefly to the bereaved family, “Please accept my deepest sympathy,” and refrain from asking how the person died. Words that call to mind misfortune piling up, such as 重ね重ね and たびたび, are also best avoided. It is usual not to use brand-new banknotes for condolence money, but customs differ by region and religion, so when in doubt, the surest course is to check with those around you.",
      q(
        "What does the writer present as the greatest courtesy on a formal visit?",
        "Stating your business briefly",
        [
          "Bringing an expensive gift",
          "Staying as long as possible",
          "Asking the family how the person died",
        ],
        "用件を短く伝えることが何よりの礼儀とされる opens the column and frames advice for both kinds of visit.",
      ),
      q(
        "What does the writer advise when unsure about customs for condolence money?",
        "Check with the people around you",
        [
          "Always use brand-new banknotes",
          "Ask the bereaved family directly",
          "Follow the customs of your own region",
        ],
        "地域や宗教によって慣習が異なるため、迷ったときは周囲に確かめる: customs vary, so ask those around you.",
      ),
    ),
    listening: p(
      "A greeting on a courtesy call",
      "{本日|ほんじつ}はお{忙|いそが}しいところ、お{時間|じかん}をいただきありがとうございます。{新任|しんにん}のご{挨拶|あいさつ}かたがた、{昨年|さくねん}のご{支援|しえん}のお{礼|れい}に{伺|うかが}いました。{今後|こんご}とも{変|か}わらぬご{指導|しどう}のほど、よろしくお{願|ねが}い{申|もう}し{上|あ}げます。",
      "Thank you for sparing us your time today when you are so busy. I have come to greet you on taking up my new post and, at the same time, to thank you for your support last year. I humbly ask for your continued guidance.",
      q(
        "Why has the speaker come?",
        "To greet the host as a new appointee and to give thanks",
        [
          "To apologise for a mistake",
          "To offer condolences",
          "To ask for a new contract",
        ],
        "新任のご挨拶かたがた、昨年のご支援のお礼に伺いました joins two purposes with かたがた: a greeting and thanks.",
      ),
      q(
        "What is the speaker thanking the host for?",
        "Last year's support",
        ["Today's lunch", "A gift sent last month", "Attending a funeral"],
        "昨年のご支援のお礼 names the support given last year as the reason for the thanks.",
      ),
    ),
    practice:
      "Write two short speeches: a courtesy call that joins a greeting and thanks with かたがた and closes with てやみません, and a condolence of no more than two sentences that avoids every 忌み言葉.",
  },
  {
    slug: "n1-integration",
    title: "N1 integration: synthesis, nuance & judgment",
    summary:
      "Synthesize an abstract argument, follow a speaker's revised position, and distinguish evidence from persuasive force.",
    vocabulary: words(`総括|そうかつ|overall review
洞察|どうさつ|insight
再考|さいこう|reconsideration
射程|しゃてい|reach; scope of an argument
含意|がんい|implication
多様性|たようせい|diversity
持続|じぞく|continuance
吟味|ぎんみ|careful examination`),
    grammar: [
      g(
        "〜までもない",
        "Dictionary form + までもない means there is no need to go as far as an action. It can suggest an answer is evident, but rhetorical obviousness is not a substitute for evidence.",
        "言うまでもなく、前提の確認は重要だ。",
        "Needless to say, checking premises matters.",
      ),
      g(
        "〜にかたくない",
        "Words such as 想像する or 察する + にかたくない mean not difficult to imagine or understand. This signals a plausible interpretation, not direct observation of another person's mind.",
        "戸惑いがあったことは想像にかたくない。",
        "It is not hard to imagine that there was uncertainty.",
      ),
      g(
        "〜に至るまで",
        "Noun + に至るまで extends scope to an endpoint or fine detail: down to or even. Check the start and endpoint before assuming a claim covers everything outside them.",
        "細部に至るまで、理由が説明されている。",
        "Reasons are explained down to the details.",
      ),
      g(
        "〜と相まって",
        "Noun + と相まって presents interacting influences. In synthesis, it helps combine factors without falsely claiming that a single one fully explains the outcome.",
        "経験が新たな知識と相まって、判断を支えている。",
        "Experience combines with new knowledge to support judgment.",
      ),
    ],
    grammarChecks: [
      q(
        "What does わざわざ説明するまでもない imply?",
        "The point is obvious enough that explaining it is unnecessary",
        [
          "It must be explained in great detail",
          "It cannot be explained by anyone",
          "It was explained right up to the end",
        ],
        "までもない says an action is unnecessary because the point is evident; it is not a limit in time like まで.",
      ),
      q(
        "Does 想像にかたくない establish direct evidence of a person's feelings?",
        "No; it marks an easily imagined inference",
        [
          "Yes; it proves access to their thoughts",
          "It says imagination is impossible",
          "It eliminates the need for context",
        ],
        "The expression marks interpretive plausibility, not direct observation.",
      ),
      q(
        "What does 細部に至るまで確認した emphasize?",
        "Checking extended even to the details",
        [
          "Only the broad title was checked",
          "Every future event is guaranteed",
          "No details were available",
        ],
        "に至るまで highlights the endpoint of the stated scope.",
      ),
      q(
        "What does 円安が観光需要の回復と相まって、訪日客が急増した describe?",
        "Two factors working together to raise visitor numbers",
        [
          "A single cause explaining the whole increase",
          "A weaker yen that reduced tourism",
          "Visitor numbers that stayed level",
        ],
        "と相まって presents interacting influences, so the increase is not credited to either factor alone.",
      ),
    ],
    reading: p(
      "What it means to revise a view",
      "意見を変える人は一貫性に欠ける、と評されることがある。確かに、その場の都合に合わせて根拠を示さず立場を変えるなら、信頼を損なっても不思議ではない。だが、当初の前提が成り立たないと分かった後も同じ結論に固執することを、一貫性として評価してよいのだろうか。守るべきなのは、結論の形そのものより、判断に至る手続きかもしれない。新たな情報を吟味し、以前の説明のどこが修正を要するのかを明らかにする。その過程が見えるなら、結論の変更は信頼の破綻ではなく、判断が現実に応答している証拠ともなり得る。もちろん、変更したという事実だけで誠実さが保証されるわけではない。変更の理由を説明し続ける姿勢こそが問われるのである。",
      "Changing an opinion can be criticized as inconsistency. Convenient changes without reasons may indeed damage trust. But should clinging to a conclusion after its premises fail count as consistency? What deserves preservation may be the procedure of judgment: examine new information and show what needs revision. A visible process can make change evidence of responsiveness rather than broken trust. Change alone does not guarantee sincerity; continued explanation of its reasons is what matters.",
      q(
        "Which kind of consistency does the writer value?",
        "A transparent reasoning process that responds to new evidence",
        [
          "Keeping every conclusion unchanged regardless of facts",
          "Changing views whenever convenient without explanation",
          "Treating any revision as automatically sincere",
        ],
        "The writer preserves consistency of accountable procedure while allowing evidence-driven changes in conclusions.",
      ),
      q(
        "When does the writer agree that changing a view can damage trust?",
        "When the change is made for convenience without giving reasons",
        [
          "Whenever new evidence is examined",
          "When the earlier premises turn out to be false",
          "When the reasons for a change are explained",
        ],
        "その場の都合に合わせて根拠を示さず立場を変えるなら、信頼を損なっても不思議ではない concedes this case before the main argument.",
      ),
    ),
    listening: p(
      "Revising a recommendation",
      "先ほどは全面導入を勧めましたが、対象外になっていた利用者がいると分かりました。この情報を踏まえると、結論をそのままにすることはできません。導入を否定するのではなく、対象を広げた検証を先に行うべきだと考えを改めます。",
      "I earlier recommended full adoption, but we discovered a group of users had been excluded. In light of that information I cannot keep the same conclusion. I am not rejecting adoption; I now think a broader evaluation should come first.",
      q(
        "What is the speaker's revised position?",
        "Broaden evaluation before considering full adoption",
        [
          "Permanently reject every possible adoption",
          "Keep the original recommendation unchanged",
          "Ignore users outside the original sample",
        ],
        "The speaker changes the sequence and evidence requirement, while explicitly avoiding permanent rejection.",
      ),
      q(
        "What new information made the speaker change the recommendation?",
        "Some users had been left out of the evaluation",
        [
          "The adoption would cost too much",
          "The evaluation had already been completed",
          "Every user opposed the adoption",
        ],
        "対象外になっていた利用者がいると分かりました is the new fact that, once 踏まえると, prevents keeping the conclusion.",
      ),
    ),
    practice:
      "Complete the N1 reviews without translations. Summarize a text in Japanese, state one justified inference, and identify one conclusion the evidence does not warrant.",
  },
];
