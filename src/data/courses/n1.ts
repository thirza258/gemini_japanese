import {
  grammar as g,
  passage as p,
  question as q,
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
        "Which pattern emphasizes repeated immediate undoing?",
        "片付けるそばから散らかる",
        ["片付けた上で出かける", "片付けるために帰る", "片付けて初めて気付く"],
        "そばから presents tidying as repeatedly followed by renewed mess.",
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
        "What is requested in 毎日とまでは言わないが、週一回は連絡してほしい?",
        "Contact at least once a week",
        [
          "Mandatory daily contact",
          "No further contact",
          "Contact once a year",
        ],
        "The stronger daily demand is explicitly set aside; the following clause contains the real request.",
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
        "What is the minimum requested in 解決できないまでも、状況は教えてほしい?",
        "An update on the situation",
        [
          "A guaranteed immediate solution",
          "Silence until everything is solved",
          "A promise never to report progress",
        ],
        "ないまでも lowers the demand from complete resolution to information.",
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
        "What feeling is conveyed by 相談してくれればよかったものを?",
        "Regret that the person did not consult the speaker",
        [
          "Certainty that consultation already happened",
          "A neutral timetable",
          "A prohibition on future consultation",
        ],
        "ものを points toward an unrealized preferable alternative and an implied regrettable result.",
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
    ),
    practice:
      "Make a comparison table for two sources: purpose, constraint, proposed action, and shared ground. Derive an option satisfying both.",
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
    ),
    practice:
      "Complete the N1 reviews without translations. Summarize a text in Japanese, state one justified inference, and identify one conclusion the evidence does not warrant.",
  },
];
