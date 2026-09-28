import {
  grammar as g,
  passage as p,
  problemSet,
  question as q,
  wordProblem,
  words,
  type CourseSeed,
} from "./types";

export const n2Courses: CourseSeed[] = [
  {
    slug: "professional-planning",
    title: "Professional planning & formal requests",
    summary:
      "Read workplace guidance, distinguish preparation from later action, and recognize the direction of polite requests.",
    vocabulary: words(`導入|どうにゅう|introduction; implementation
手続き|てつづき|procedure
担当|たんとう|being in charge
了承|りょうしょう|acknowledgment; acceptance
検討|けんとう|consideration; examination
日程|にってい|schedule
実施|じっし|implementation
調整|ちょうせい|coordination; adjustment`),
    grammar: [
      g(
        "〜にあたって",
        "Noun or dictionary form + にあたって frames an important undertaking and the preparation appropriate to it. It suits deliberate occasions such as beginning a project, rather than every accidental event.",
        "新制度を導入するにあたって、説明会を開きます。",
        "We will hold a briefing in preparation for introducing the new system.",
      ),
      g(
        "〜に際して",
        "This formal expression means on the occasion of. Nouns and dictionary forms can precede it; に際しての modifies a following noun. It often appears in notices and procedural guidance.",
        "お申し込みに際して、住所をご確認ください。",
        "When applying, please check your address.",
      ),
      g(
        "〜た上で",
        "Use a た-form or noun + の上で for an action taken after a prerequisite is completed. Contrast dictionary form + 上で, meaning in doing or for the purpose of doing.",
        "内容を確認した上で、署名してください。",
        "Please sign after checking the contents.",
      ),
      g(
        "お・ご〜いただく",
        "This humble recipient-oriented construction describes receiving another person's action. ご確認いただく means have someone kindly check; お待ちいただく means have someone wait. The respected listener performs the action.",
        "日程をご確認いただけますか。",
        "Could you check the schedule?",
      ),
    ],
    grammarChecks: [
      q(
        "Which sentence uses にあたって naturally?",
        "新しい店を開くにあたって、近所に挨拶をした。",
        [
          "財布を落とすにあたって、警察に届けた。",
          "雨が降るにあたって、傘を持って出た。",
          "駅で転ぶにあたって、足をけがした。",
        ],
        "にあたって frames a deliberate undertaking and the preparation for it, like opening a shop; losing a wallet, rain, and a fall are not planned occasions.",
      ),
      q(
        "What does 入会に際して mean in 入会に際して、写真が一枚必要です?",
        "On the occasion of joining",
        [
          "After leaving the club",
          "Instead of joining",
          "Despite having joined",
        ],
        "に際して means on the occasion of, so the photo is needed at the point of joining; notices use it for exactly this kind of procedure.",
      ),
      q(
        "Choose the prerequisite form: 内容を ___ 上で、ご返信ください。",
        "確認した",
        ["確認しての", "確認します", "確認し"],
        "た上で puts checking before replying as a completed prerequisite.",
      ),
      q(
        "Who checks in お客様にご確認いただきます?",
        "The customer",
        ["Only the speaker", "Nobody", "An unnamed third-party technician"],
        "The speaker receives the customer's checking action; に marks that customer.",
      ),
    ],
    reading: p(
      "Introducing a booking system",
      "会議室の予約制度を変更するにあたって、利用者への説明会を実施する。従来は担当者にメールを送る必要があったが、来月からは利用者自身が空き状況を確認し、予約できるようになる。ただし、社外の参加者がいる場合は、入館手続きのため、予約後に担当者へ連絡しなければならない。予約操作が簡単になったからといって、必要な手続きがすべて自動化されるわけではない。説明会では、操作方法だけでなく、この例外も確認する予定である。",
      "A briefing will accompany changes to meeting-room booking. Previously users emailed a coordinator; from next month they can check availability and book directly. However, when outside guests attend, the coordinator must still be contacted after booking for entry procedures. Easier booking does not mean all necessary procedures are automated. The briefing will cover this exception as well as the controls.",
      q(
        "When is contact with the coordinator still required?",
        "After booking a room for a meeting with outside guests",
        [
          "Before every ordinary internal booking",
          "Only when the booking system fails",
          "Never after the change",
        ],
        "The exception concerns entry procedures for outside participants and applies after the room is booked.",
      ),
      q(
        "How did room booking work before the change?",
        "Users e-mailed the person in charge",
        [
          "Users booked directly online",
          "Rooms could not be booked in advance",
          "Only outside guests could book",
        ],
        "従来は担当者にメールを送る必要があった describes the old procedure; booking directly is what changes from next month.",
      ),
    ),
    listening: p(
      "Confirm before sending",
      "案内文はほぼ完成しましたが、会場の担当者から時間の確認がまだ来ていません。先に送ってしまうと訂正が必要になるかもしれないので、返事を確認した上で配信してください。名簿の整理は今のうちに進めておいてください。",
      "The announcement is almost ready, but the venue coordinator has not confirmed the time. Sending it now may require a correction, so distribute it after checking the reply. You can organize the mailing list in the meantime.",
      q(
        "Which task can proceed immediately?",
        "Organizing the mailing list",
        [
          "Sending the unconfirmed announcement",
          "Changing the venue",
          "Publishing a correction",
        ],
        "Distribution depends on confirmation; list preparation is explicitly allowed now.",
      ),
      q(
        "What is the announcement still waiting for?",
        "The venue's confirmation of the time",
        [
          "The final wording of the text",
          "Approval from a manager",
          "An updated mailing list",
        ],
        "会場の担当者から時間の確認がまだ来ていません: the text is almost done, and only the venue's time confirmation is missing.",
      ),
    ),
    practice:
      "Write a short procedural notice with a prerequisite and an exception. Check that every polite request clearly identifies who should act.",
  },
  {
    slug: "causal-arguments",
    title: "Causes, grounds & commitments",
    summary:
      "Distinguish a regrettable cause, excessive behavior, evidence for a conclusion, and an obligation arising from a commitment.",
    vocabulary: words(`要因|よういん|factor
背景|はいけい|background
根拠|こんきょ|grounds; basis
負担|ふたん|burden
責任|せきにん|responsibility
達成|たっせい|achievement
延期|えんき|postponement
見直し|みなおし|review; revision`),
    grammar: [
      g(
        "〜あまり",
        "A plain verb, noun + の, or な-adjective + な before あまり gives an excessive degree as the cause of an often undesirable result. The excess, not mere intensity, is central.",
        "結果を急ぐあまり、確認を忘れてしまいました。",
        "In my excessive hurry for results, I forgot to check.",
      ),
      g(
        "〜ばかりに",
        "A plain clause + ばかりに singles out a cause of an unwelcome result, often with regret. Nouns and な-adjectives can use である. It is more evaluative than a neutral ため.",
        "一文字間違えたばかりに、検索できませんでした。",
        "Because I mistyped just one character, I could not find it.",
      ),
      g(
        "〜ことから",
        "A plain clause + ことから presents an observed fact as the reason for a name, inference, or conclusion. It is common in explanatory writing.",
        "窓に明かりがあることから、まだ誰かいると分かります。",
        "The light in the window indicates someone is still there.",
      ),
      g(
        "〜以上は",
        "A plain clause + 以上は means now that or since the premise holds, a responsibility or necessary conclusion follows. It frequently pairs with determination or obligation.",
        "引き受けた以上は、最後まで責任を持ちます。",
        "Now that I have accepted, I will take responsibility to the end.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose excess as the cause: 完璧を求める ___、締切に間に合わなかった。",
        "あまり",
        ["際に", "につれて", "限りで"],
        "Pursuing perfection excessively caused the missed deadline.",
      ),
      q(
        "Choose the regretful cause: パスワードを一文字間違えた ___、ログインできなかった。",
        "ばかりに",
        ["反面", "に限り", "にあたって"],
        "ばかりに singles out one small cause, a single mistyped character, for an unwelcome result, with a note of regret.",
      ),
      q(
        "What does ことから introduce in 富士山が見えることから、富士見町と呼ばれている?",
        "The fact that explains the name",
        [
          "A condition that must be met first",
          "A result that happened by chance",
          "An exception to a rule",
        ],
        "ことから presents an observed fact, that Mt Fuji can be seen, as the reason for the name 富士見町.",
      ),
      q(
        "What does 約束した以上は imply?",
        "The promise creates a responsibility",
        [
          "The promise is only hypothetical",
          "The promise was never made",
          "Responsibility is unrelated to the promise",
        ],
        "以上は treats the established promise as grounds for what should follow.",
      ),
    ],
    reading: p(
      "The cost of rushing",
      "あるチームでは、問い合わせへの返答時間を短くすることを目標にした。数値は改善したが、同じ利用者からの再問い合わせが増えた。早く返そうとするあまり、質問の背景を確かめずに定型文を送っていたのである。返答の速さは重要だが、それだけを成果の根拠にすることはできない。利用者の問題が解決したかどうかも確認するようにしたところ、一件にかかる時間は少し増えたものの、全体の問い合わせ件数は減った。",
      "A team aimed to shorten response times. The metric improved, but repeat inquiries increased: in their rush, staff sent standard replies without checking context. Speed matters, but cannot alone demonstrate success. After the team also checked whether users' problems were resolved, time per case rose slightly while the total number of inquiries fell.",
      q(
        "Why did the original improvement fail to capture success?",
        "Faster replies did not necessarily solve users' problems",
        [
          "No replies were sent",
          "Every user wanted a slower answer",
          "The number of staff was the only metric",
        ],
        "Repeat inquiries expose the gap between a short reply time and an actual solution.",
      ),
      q(
        "What happened once staff also checked whether problems were solved?",
        "Each case took a little longer, but total inquiries fell",
        [
          "Each case became faster and inquiries rose",
          "Inquiries stopped completely",
          "Staff went back to standard replies",
        ],
        "一件にかかる時間は少し増えたものの、全体の問い合わせ件数は減った: slower cases, but fewer inquiries overall.",
      ),
    ),
    listening: p(
      "A responsibility after acceptance",
      "人手が足りないことは分かっています。ただ、納期を約束した以上、黙って遅らせるわけにはいきません。まず作業量を確認し、難しい場合は今日中に先方と相談しましょう。",
      "I know we are short of people. But since we promised a delivery date, we cannot simply delay without saying anything. First check the workload, and if necessary consult the client today.",
      q(
        "What obligation does the speaker emphasize?",
        "Communicating with the client if the promise is at risk",
        [
          "Hiding the delay",
          "Guaranteeing success without checking",
          "Canceling all tasks immediately",
        ],
        "The commitment demands responsible communication, with workload review before deciding what to negotiate.",
      ),
      q(
        "What should be done first?",
        "Check the workload",
        [
          "Hire more staff",
          "Deliver whatever is finished",
          "Ask the client for a new deadline at once",
        ],
        "まず作業量を確認し sets the first step; consulting the client comes only if the check shows the deadline is at risk.",
      ),
    ),
    practice:
      "Identify a cause and the evidence supporting it in a short report. Avoid treating a target metric as proof of the underlying outcome.",
  },
  {
    slug: "concession-nuance",
    title: "Concession & qualified conclusions",
    summary:
      "Read arguments that acknowledge a fact while limiting the conclusion drawn from it.",
    vocabulary: words(`一応|いちおう|for the time being; provisionally
改善|かいぜん|improvement
課題|かだい|issue; task
依然|いぜん|still; as before
必ずしも|かならずしも|not necessarily (with negative)
反映|はんえい|reflection; incorporation
評価|ひょうか|evaluation
実態|じったい|actual state`),
    grammar: [
      g(
        "〜ものの",
        "A plain clause + ものの concedes a fact before a contrasting limitation. な-adjectives take なものの. It is common in writing and does not erase the truth of the first clause.",
        "説明は読んだものの、操作はまだ不安です。",
        "Although I read the instructions, I am still unsure about operating it.",
      ),
      g(
        "〜ながらも",
        "Verb stems, state expressions, nouns, and adjective forms can take concessive ながらも. Unlike simultaneous-action ながら, it means although and often contrasts a state with behavior.",
        "不便ながらも、長く使われています。",
        "Although inconvenient, it continues to be used.",
      ),
      g(
        "〜とはいえ",
        "This acknowledges a preceding statement but qualifies its implications: even so. It can follow a clause or start a new sentence. The second part restricts an overly broad conclusion.",
        "無料とはいえ、予約は必要です。",
        "Even though it is free, a reservation is required.",
      ),
      g(
        "〜にもかかわらず",
        "This formal despite emphasizes a result contrary to an established fact or expectation. Nouns attach directly, and clauses use appropriate plain forms.",
        "十分に準備したにもかかわらず、問題が起きました。",
        "Despite thorough preparation, a problem occurred.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 改善したものの、問題は残る state?",
        "There was improvement, but problems remain",
        [
          "No improvement occurred",
          "All problems disappeared",
          "Improvement is forbidden",
        ],
        "ものの preserves the first fact while introducing an unresolved limitation.",
      ),
      q(
        "What does ながらも mean in 狭いながらも、明るい部屋です?",
        "Although it is small",
        [
          "While it is getting smaller",
          "Because it is small",
          "Only if it is small",
        ],
        "Concessive ながらも means although: the room is small, yet bright. It is not the ながら of two simultaneous actions.",
      ),
      q(
        "Choose the concession: 参加費は無料だ。___、事前の申し込みは必要だ。",
        "とはいえ",
        ["したがって", "なぜなら", "例えば"],
        "The second sentence limits the possible inference that free means no application is needed.",
      ),
      q(
        "Choose 'despite': 何度も注意した ___、同じ間違いが続いた。",
        "にもかかわらず",
        ["に限らず", "をもとに", "に応じて"],
        "にもかかわらず marks a result contrary to an established fact: warnings were given many times, yet the same mistake continued.",
      ),
    ],
    reading: p(
      "A shorter form",
      "行政の申請書がオンライン化され、入力項目も減った。利用者の負担は確かに軽くなったものの、問い合わせは予想ほど減っていない。専門用語の意味が分からず、入力の途中で止まる人がいるからだ。手順が短いことと、理解しやすいことは同じではない。担当者は、項目をさらに減らすのではなく、必要な説明を各欄のそばに置く方針に変えた。効率化を進めたとはいえ、利用者が判断できる情報まで削ってはならないのである。",
      "A government application went online and reduced its fields. Burden genuinely fell, but inquiries did not decline as much as expected because some users stopped at unfamiliar terms. Fewer steps do not automatically mean easier understanding. Staff therefore placed explanations beside the fields instead of cutting more fields. Streamlining should not remove information users need for decisions.",
      q(
        "Which distinction is central to the writer's argument?",
        "A short procedure and an understandable procedure are not identical",
        [
          "Every online form is harder than paper",
          "All explanations should be removed",
          "Inquiries prove nothing improved",
        ],
        "The passage acknowledges improvement but identifies understanding as a separate requirement.",
      ),
      q(
        "What did the staff decide to do?",
        "Place explanations beside each field",
        [
          "Remove even more fields",
          "Return to paper forms",
          "Close the inquiry line",
        ],
        "項目をさらに減らすのではなく、必要な説明を各欄のそばに置く方針に変えた names the new approach.",
      ),
    ),
    listening: p(
      "A qualified success",
      "来場者は増えました。とはいえ、アンケートを見ると、案内が分かりにくかったという意見が多いですね。人数が増えたから成功だと決めずに、次は会場の表示を見直しましょう。",
      "Attendance increased. Even so, surveys contain many comments that the guidance was confusing. Let's not decide it succeeded just because numbers rose; next time we should revise the signage.",
      q(
        "How does the speaker assess the event?",
        "Attendance improved, but navigation still needs work",
        [
          "It completely failed with no visitors",
          "Higher attendance resolves every issue",
          "Surveys should be ignored",
        ],
        "とはいえ qualifies the positive attendance result with evidence about visitor experience.",
      ),
      q(
        "What does the speaker propose for next time?",
        "Revising the signs at the venue",
        [
          "Limiting the number of visitors",
          "Dropping the survey",
          "Moving to a larger venue",
        ],
        "次は会場の表示を見直しましょう proposes revising the signage, based on the survey comments about confusing guidance.",
      ),
    ),
    practice:
      "Write a balanced evaluation that concedes an achievement with ものの and identifies one remaining limitation with とはいえ.",
  },
  {
    slug: "scope-eligibility",
    title: "Scope, eligibility & exceptions",
    summary:
      "Interpret the exact reach of offers, rules, and claims without losing exclusions or boundaries.",
    vocabulary: words(`対象|たいしょう|target; eligible group
制限|せいげん|restriction
資格|しかく|qualification
年齢|ねんれい|age
有効|ゆうこう|valid; effective
共通|きょうつう|shared; common
例外|れいがい|exception
範囲|はんい|range; scope`),
    grammar: [
      g(
        "〜に限り",
        "Noun + に限り restricts a statement to a particular group, day, or condition. It often appears in formal notices and offers.",
        "会員に限り、先行予約ができます。",
        "Advance reservations are available to members only.",
      ),
      g(
        "〜に限らず",
        "This expands the scope beyond one named category: not limited to. It commonly pairs with も to include an additional group.",
        "学生に限らず、社会人も参加できます。",
        "Participation is open to working adults as well as students.",
      ),
      g(
        "〜を問わず",
        "Noun + を問わず means regardless of a category such as age or experience. It does not remove other requirements that a notice may state separately.",
        "経験を問わず、応募できます。",
        "You may apply regardless of experience.",
      ),
      g(
        "〜にかかわらず",
        "This says a conclusion holds irrespective of a condition or difference. It can follow a noun or paired alternatives such as あるかないか. Distinguish it from にもかかわらず, despite.",
        "天候にかかわらず、室内で実施します。",
        "We will hold it indoors regardless of the weather.",
      ),
    ],
    grammarChecks: [
      q(
        "Which expression restricts eligibility to members?",
        "会員に限り",
        ["会員に限らず", "会員を含めて誰でも", "会員かどうかにかかわらず"],
        "に限り restricts the group, whereas に限らず extends it.",
      ),
      q(
        "What does 週末に限らず、平日も混んでいます mean?",
        "It is crowded on weekdays as well as at weekends",
        [
          "It is crowded only at weekends",
          "It is never crowded on weekdays",
          "It is crowded regardless of the weather",
        ],
        "に限らず extends the statement beyond weekends, and 平日も adds weekdays to it.",
      ),
      q(
        "What does 年齢を問わず mean?",
        "Regardless of age",
        [
          "Only for adults",
          "After asking someone's age",
          "Except for every age group",
        ],
        "を問わず removes age as a selection criterion, but says nothing about other conditions.",
      ),
      q(
        "Choose 'regardless of': 経験があるかないか ___、研修を受けてください。",
        "にかかわらず",
        ["にもかかわらず", "に限り", "に先立って"],
        "にかかわらず follows the paired alternatives あるかないか: the training applies either way. にもかかわらず, despite, needs a single established fact.",
      ),
    ],
    reading: p(
      "A workshop offer",
      "市民向けの写真講座は、年齢や撮影経験を問わず申し込める。市内在住者に限り参加費が半額になるが、機材の貸し出し料金は割引の対象外である。自分のカメラを持参する場合、この料金はかからない。雨天でも講座は中止せず、室内で撮影を行う。申し込みは先着順で、定員に達した時点で締め切る。初心者だけでなく、これまで独学で学んできた人にも、作品について意見を交換する機会として利用してほしい。",
      "The photography course accepts all ages and experience levels. City residents alone receive half-price participation, but equipment rental is excluded from the discount. Those bringing their own cameras pay no rental fee. Rain moves photography indoors instead of canceling the class. Enrollment closes when capacity is reached. The course also invites self-taught photographers to exchange views.",
      q(
        "Which cost is not discounted for city residents?",
        "Equipment rental",
        [
          "The participation fee",
          "Both costs are always halved",
          "No cost is mentioned",
        ],
        "The notice explicitly excludes 機材の貸し出し料金 from the resident discount.",
      ),
      q(
        "When does enrollment close?",
        "As soon as the class is full",
        [
          "The day before the class",
          "When rain is forecast",
          "After a lottery among applicants",
        ],
        "先着順で、定員に達した時点で締め切る: first come, first served, closing the moment capacity is reached.",
      ),
    ),
    listening: p(
      "A membership benefit",
      "今月に限り、新規会員は体験講座を無料で受けられます。すでに会員の方は対象外ですが、通常の割引は使えます。どちらの場合も、事前予約が必要です。",
      "This month only, new members can take a trial class for free. Existing members are excluded from that offer but can use their usual discount. Advance reservations are required in either case.",
      q(
        "What applies to both new and existing members?",
        "They must reserve in advance",
        [
          "The trial is free",
          "They are ineligible for all discounts",
          "They must wait until next month",
        ],
        "どちらの場合も broadens only the reservation requirement to both groups.",
      ),
      q(
        "What can existing members still use?",
        "Their usual discount",
        [
          "The free trial class",
          "Nothing this month",
          "A discount from next month only",
        ],
        "すでに会員の方は対象外ですが、通常の割引は使えます: existing members miss the free trial but keep their usual discount.",
      ),
    ),
    practice:
      "Annotate an offer with eligible group, time period, excluded costs, and requirements that still apply to everyone.",
  },
  {
    slug: "linked-changes",
    title: "Linked changes & responsive action",
    summary:
      "Follow trends and distinguish responding to a need from describing a change that accompanies another.",
    vocabulary: words(`需要|じゅよう|demand
供給|きょうきゅう|supply
増加|ぞうか|increase
減少|げんしょう|decrease
規模|きぼ|scale
状況|じょうきょう|situation
対応|たいおう|response
段階|だんかい|stage; phase`),
    grammar: [
      g(
        "〜に伴って",
        "Noun or dictionary form + に伴って links one change or event with another that accompanies it. It is common in formal descriptions of social and operational changes.",
        "利用者の増加に伴って、窓口を増やしました。",
        "We added service counters as user numbers increased.",
      ),
      g(
        "〜に応じて",
        "Noun + に応じて describes adapting an action to a need, degree, or situation. It emphasizes a suitable response, rather than mere simultaneous change.",
        "経験に応じて、課題を選んでください。",
        "Choose tasks according to your experience.",
      ),
      g(
        "〜に従って",
        "This can mean following a rule or instruction, or as one change progresses. Context distinguishes compliance from proportional development.",
        "説明に従って、設定を変更してください。",
        "Change the settings according to the instructions.",
      ),
      g(
        "〜一方だ",
        "Dictionary form + 一方だ describes a continuing trend in one direction. It often describes an unwelcome increase or deterioration, but the main meaning is continued progression.",
        "修理の費用は増える一方です。",
        "Repair costs keep increasing.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the accompanying change: 人口の増加 ___、学校が新しく建てられた。",
        "に伴って",
        ["に限り", "を問わず", "にすぎず"],
        "に伴って links the new schools to the population rise they accompanied, the formal way to report one change alongside another.",
      ),
      q(
        "Choose adaptation to need: 利用者の希望 ___、時間を調整します。",
        "に応じて",
        ["にもかかわらず", "に限らずの", "をめぐると"],
        "The schedule is adjusted to the users' wishes, a responsive action.",
      ),
      q(
        "What does に従って express in 山を登るに従って、気温が下がる?",
        "A change that progresses with the climb",
        [
          "Obeying an instruction",
          "A contrast between two places",
          "A condition that stops the climb",
        ],
        "Here に従って describes proportional development: the higher you climb, the lower the temperature. With 説明に従って it would mean following instructions.",
      ),
      q(
        "What does 減る一方だ describe?",
        "A continuing decrease",
        [
          "A decrease followed by an increase",
          "Two opposing viewpoints",
          "A fixed unchanged amount",
        ],
        "Verb + 一方だ describes a one-direction trend, unlike contrasting 一方で.",
      ),
    ],
    reading: p(
      "More visitors, different needs",
      "観光客の増加に伴って、駅の案内所には長い列ができるようになった。職員を増やす案も出たが、質問の内容を調べると、多くはバスの乗り場と運行時刻に集中していた。そこで、案内板を分かりやすくし、複雑な相談にだけ職員が対応する仕組みに変えた。人数に応じて同じ窓口を増やすだけでは、混雑の原因は変わらない。必要な情報を、必要な場所で得られるようにすることも対応の一つである。",
      "Growing tourism created long lines at the station information desk. Hiring more staff was suggested, but most questions concerned bus stops and times. Clearer signs let staff focus on complex inquiries. Simply adding more identical counters in proportion to visitors would not address the cause. Providing the right information where needed is another response.",
      q(
        "Why were clearer signs chosen?",
        "Many inquiries concerned the same simple information",
        [
          "Staff were no longer needed for any question",
          "Bus services had stopped",
          "Visitor numbers were falling",
        ],
        "The inquiry analysis identifies repeated simple questions that signs could answer without a staff interaction.",
      ),
      q(
        "What was first suggested to deal with the long lines?",
        "Hiring more staff",
        [
          "Moving the desk to another station",
          "Closing the information desk",
          "Cutting bus services",
        ],
        "職員を増やす案も出たが: adding staff was proposed first, then set aside once the questions were analysed.",
      ),
    ),
    listening: p(
      "Adjusting a class",
      "参加者の経験に応じて、二つのグループに分けましょう。人数で半分にするのではありません。初めての人には基本操作を、経験のある人には応用課題を用意してください。",
      "Let's make two groups according to experience, rather than simply splitting the numbers in half. Prepare basic operations for beginners and applied tasks for experienced participants.",
      q(
        "What determines the groups?",
        "Prior experience",
        ["Equal group size", "Alphabetical order", "Arrival time"],
        "経験に応じて identifies the grouping criterion; the speaker explicitly rejects a purely numerical split.",
      ),
      q(
        "What should experienced participants be given?",
        "Applied tasks",
        ["Basic operations", "No tasks at all", "The same tasks as beginners"],
        "経験のある人には応用課題を用意してください: applied tasks for the experienced, basic operations for first-timers.",
      ),
    ),
    practice:
      "Describe a trend with に伴って and a deliberate response with に応じて. Explain why the response addresses the cause.",
    problems: problemSet(
      "Reading trends: percentages & multiples",
      "Trend reports give a change as a percentage or a multiple of an earlier figure. Find the base first: 〜%増 and 〜%減 apply to the earlier amount, and 〜倍 multiplies it.",
      words(`増加率|ぞうかりつ|rate of increase
前年比|ぜんねんひ|compared with the previous year
倍|ばい|times; -fold
不足分|ふそくぶん|the shortfall
生産量|せいさんりょう|the amount produced`),
      {
        text: "ある{町|まち}を{訪|おとず}れた{観光客|かんこうきゃく}は、{昨年|さくねん}は40{万|まん}{人|にん}だった。{今年|ことし}は{前年比|ぜんねんひ}15%{増|ぞう}だった。{今年|ことし}の{観光客|かんこうきゃく}は{何|なん}{人|にん}か。",
        translation:
          "Last year 400,000 tourists visited a town. This year the number was up 15% on the previous year. How many tourists came this year?",
        steps: [
          "前年比15%増 applies the 15% to last year's figure, 40万人 (400,000).",
          "15% of 40万人 is 6万人: 400,000 × 0.15 = 60,000.",
          "40万 + 6万 = 46万人, so 460,000 tourists came this year.",
        ],
      },
      [
        wordProblem(
          "ある{教室|きょうしつ}の{会員|かいいん}は、3{年前|ねんまえ}は2,500{人|にん}だったが、{今年|ことし}は3,000{人|にん}に{増|ふ}えた。3{年前|ねんまえ}と{比|くら}べた{増加率|ぞうかりつ}は{何|なん}%か。",
          "A hobby school had 2,500 members three years ago, and this year the number has grown to 3,000. What is the rate of increase compared with three years ago?",
          "20%",
          ["約17%", "120%", "約83%"],
          "増加率 compares the increase with the earlier figure: 3,000 − 2,500 = 500, and 500 ÷ 2,500 = 0.2, or 20%. Dividing by this year's 3,000 instead gives about 17%.",
        ),
        wordProblem(
          "{今年|ことし}の{米|こめ}の{生産量|せいさんりょう}は{前年比|ぜんねんひ}20%{減|げん}の4{万|まん}トンだった。{前年|ぜんねん}の{生産量|せいさんりょう}は{何|なん}トンか。",
          "This year's rice production was 40,000 tonnes, down 20% on the previous year. How many tonnes were produced the previous year?",
          "5万トン",
          ["4万8,000トン", "3万2,000トン", "8,000トン"],
          "前年比20%減 means this year is 80% of last year, so last year = 4万 ÷ 0.8 = 5万トン. Adding 20% to this year's 4万 gives 4万8,000トン, which applies the change to the wrong year.",
        ),
        wordProblem(
          "{動画|どうが}{配信|はいしん}の{需要|じゅよう}は{伸|の}び{続|つづ}け、{現在|げんざい}の{利用|りよう}{件数|けんすう}は5{年前|ねんまえ}の1.5{倍|ばい}の1,200{万|まん}{件|けん}になった。5{年前|ねんまえ}の{利用|りよう}{件数|けんすう}は{何|なん}{万|まん}{件|けん}か。",
          "Demand for video streaming keeps growing: usage now stands at 12 million, 1.5 times the figure five years ago. What was the usage figure five years ago?",
          "800万件",
          ["1,800万件", "600万件", "400万件"],
          "現在は5年前の1.5倍 means the earlier figure × 1.5 = 1,200万件, so it was 1,200万 ÷ 1.5 = 800万件. Taking 50% off 1,200万 gives 600万, the usual trap.",
        ),
        wordProblem(
          "ある{地域|ちいき}では、{野菜|やさい}の{需要|じゅよう}が100{万|まん}トン、{供給|きょうきゅう}が80{万|まん}トンである。{来年|らいねん}は{供給|きょうきゅう}を15%{増|ふ}やす{計画|けいかく}だ。{需要|じゅよう}が{変|か}わらない{場合|ばあい}、{来年|らいねん}の{不足分|ふそくぶん}は{何|なん}{万|まん}トンか。",
          "In one region, demand for vegetables is 1 million tonnes and supply is 800,000 tonnes. Next year supply is planned to rise by 15%. If demand stays the same, how large will next year's shortfall be?",
          "8万トン",
          ["5万トン", "20万トン", "17万トン"],
          "供給を15%増やす makes supply 80万 × 1.15 = 92万トン. Demand stays at 100万, so the shortfall is 100万 − 92万 = 8万トン. Taking 15% off today's 20万 shortfall gives 17万, which applies the change to the wrong figure.",
        ),
      ],
    ),
  },
  {
    slug: "difficult-judgments",
    title: "Difficult judgments & constrained choices",
    summary:
      "Distinguish practical compulsion, social responsibility, qualified possibility, and an undesirable risk.",
    vocabulary: words(`判断|はんだん|judgment
選択肢|せんたくし|option
事情|じじょう|circumstances
損失|そんしつ|loss
誤解|ごかい|misunderstanding
慎重|しんちょう|careful; cautious
延期|えんき|postponement
承認|しょうにん|approval`),
    grammar: [
      g(
        "〜ざるを得ない",
        "Use the ない-stem + ざるを得ない for no practical alternative but to act. する is irregular: せざるを得ない. The speaker need not want the action.",
        "資料が足りず、判断を延期せざるを得ません。",
        "With insufficient materials, we have no choice but to postpone the decision.",
      ),
      g(
        "〜わけにはいかない",
        "Dictionary form + わけにはいかない expresses that responsibility or circumstances prevent an action. It is not physical inability. ないわけにはいかない instead means one cannot avoid doing it.",
        "約束があるので、帰るわけにはいきません。",
        "I have a commitment, so I cannot simply go home.",
      ),
      g(
        "〜ないことはない",
        "This double negative grants a limited possibility, often followed by a reservation. It is weaker and less enthusiastic than a direct affirmative.",
        "できないことはありませんが、時間がかかります。",
        "It is possible, but it will take time.",
      ),
      g(
        "〜かねない",
        "Verb stem + かねない warns of a possible unfavorable consequence. Contrast かねる, which politely expresses difficulty or inability to comply.",
        "説明不足は誤解を招きかねません。",
        "Insufficient explanation could lead to misunderstanding.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the irregular form: 中止 ___ を得ない。",
        "せざる",
        ["しざる", "するざる", "しないざる"],
        "する changes to せざる in this pattern.",
      ),
      q(
        "What does 断らないわけにはいかない mean?",
        "There is no option but to refuse",
        [
          "Refusal is impossible",
          "Refusal is already complete",
          "The speaker enthusiastically accepts",
        ],
        "The negative verb plus わけにはいかない means one cannot avoid refusing.",
      ),
      q(
        "What does 行けないことはないが、少し遠い convey?",
        "Going is possible, but with a reservation",
        [
          "Going is completely impossible",
          "The speaker is eager to go",
          "The speaker has already gone",
        ],
        "ないことはない grants a limited possibility, and the が clause adds the reservation; it is weaker than a plain 行けます.",
      ),
      q(
        "Choose the warning: このままでは大きな事故につながり ___。",
        "かねない",
        ["かねる", "次第だ", "ざるを得ない"],
        "Stem + かねない warns of a possible bad result; かねる instead says the speaker cannot comply, which makes no sense of an accident.",
      ),
    ],
    reading: p(
      "When a delay is responsible",
      "新しいサービスの公開日が近づいたが、重要な確認が終わっていなかった。予定どおり公開できないことはなかったものの、不具合が起きれば利用者に損失を与えかねない。担当者は延期を提案した。準備に費用をかけた以上、公開すべきだという意見もあったが、すでに使った費用を理由に、未確認の部分を無視するわけにはいかない。最終的には、確認事項と新しい予定を説明した上で、公開を延期することになった。",
      "A service launch approached before important checks were finished. Launching was technically possible, but defects could harm users. The lead proposed postponement. Some argued that money already spent justified release, but past spending could not excuse ignoring unchecked areas. The team explained the outstanding checks and revised schedule, then postponed.",
      q(
        "What was the main argument for postponement?",
        "Unverified issues could harm users",
        [
          "Launching was physically impossible in every sense",
          "No money had been spent",
          "Users demanded fewer checks",
        ],
        "The passage allows technical possibility but emphasizes the risk expressed by 与えかねない.",
      ),
      q(
        "Which argument for launching on schedule does the writer reject?",
        "Money had already been spent on preparation",
        [
          "Users were asking for fewer checks",
          "The launch date was set by law",
          "A rival had already launched",
        ],
        "準備に費用をかけた以上、公開すべきだ is rejected: money already spent cannot excuse ignoring unchecked parts.",
      ),
    ),
    listening: p(
      "A cautious answer",
      "今日中の納品はできないことはありません。ただ、最終確認を省く必要があります。それでは間違いを見落としかねませんね。確認を済ませて、明日の午前に届ける案を先方に伝えましょう。",
      "Delivery today is possible, but it would mean skipping the final check. Then we could overlook errors. Let's propose finishing the check and delivering tomorrow morning.",
      q(
        "What delivery plan is proposed?",
        "Tomorrow morning after the final check",
        [
          "Today without any checking",
          "No delivery at all",
          "Today with a guarantee of perfection",
        ],
        "The qualified possibility is rejected in favor of a checked delivery the following morning.",
      ),
      q(
        "What would delivering today require?",
        "Skipping the final check",
        [
          "Hiring extra staff",
          "Paying a higher fee",
          "Asking the client to collect it",
        ],
        "最終確認を省く必要があります: delivery today is possible only by skipping the final check, which risks overlooked errors.",
      ),
    ),
    practice:
      "Explain a constrained decision using ざるを得ない. Contrast inability, responsibility, and risk in three separate sentences.",
  },
  {
    slug: "evidence-perspective",
    title: "Evidence, perspective & measured claims",
    summary:
      "Identify a claim's basis, viewpoint, and limits when reading reports and recommendations.",
    vocabulary: words(`資料|しりょう|materials; data
統計|とうけい|statistics
調査|ちょうさ|survey; investigation
傾向|けいこう|tendency
基準|きじゅん|criterion; standard
視点|してん|viewpoint
仮説|かせつ|hypothesis
推測|すいそく|inference; conjecture`),
    grammar: [
      g(
        "〜に基づいて",
        "Noun + に基づいて presents an established basis for a decision or action, such as evidence, rules, or data. に基づく modifies a following noun.",
        "調査結果に基づいて、計画を見直します。",
        "We will revise the plan based on the survey results.",
      ),
      g(
        "〜をもとに",
        "This identifies source material used to create or develop something. Unlike strict compliance with a rule, it allows transformation and interpretation of the source.",
        "利用者の意見をもとに、案内を作り直しました。",
        "We redesigned the guide using users' comments as source material.",
      ),
      g(
        "〜から見ると",
        "Noun + から見ると frames a judgment from a standpoint or available evidence. Related forms are から見れば and から見て. A perspective is not automatically universal.",
        "費用の面から見ると、この案が有利です。",
        "From a cost perspective, this proposal is advantageous.",
      ),
      g(
        "〜にすぎない",
        "This limits a claim to merely or no more than the stated thing. It commonly follows a noun or plain verb clause and counters an exaggerated interpretation.",
        "これは一つの例にすぎません。",
        "This is merely one example.",
      ),
    ],
    grammarChecks: [
      q(
        "Which expression grounds a decision in evidence?",
        "データに基づいて",
        ["データにもかかわらず", "データに限らず", "データを問わず"],
        "に基づいて makes the data the foundation for the decision.",
      ),
      q(
        "What does をもとに express in 実話をもとに映画を作った?",
        "The true story was the source material for the film",
        [
          "The film strictly follows a legal rule",
          "The film was made despite the true story",
          "The film replaced the true story",
        ],
        "をもとに names the source material that was developed into something new, here a film adapted from a true story.",
      ),
      q(
        "Choose the phrase that frames a viewpoint: 利用者の立場 ___、この説明は分かりにくい。",
        "から見ると",
        ["に限り", "にすぎず", "どころか"],
        "から見ると frames the judgment from the user's standpoint; that perspective, not a universal fact, finds the explanation unclear.",
      ),
      q(
        "What does 一部の回答にすぎない emphasize?",
        "The responses are only a limited subset",
        [
          "The responses include everyone",
          "All responses are false",
          "No response exists",
        ],
        "にすぎない restricts scope; it does not by itself question truth.",
      ),
    ],
    reading: p(
      "A survey with a narrow window",
      "駅前の店で利用者にアンケートを行ったところ、営業時間の延長を望む回答が多かった。店はすぐに閉店時間を遅らせようとしたが、調査は夕方だけに実施されていた。朝に利用する人の希望はほとんど反映されていない。得られた結果は重要な資料ではあるものの、すべての利用者の意見を示すものではない。時間帯を変えて調べた上で、延長する日を限定する案も含め、費用と需要を検討することになった。",
      "A shop's survey found many requests for later opening hours. Before acting, staff noticed it had only surveyed evening customers, barely representing morning users. The results were useful but not the views of all customers. They decided to survey other times and consider costs and demand, including extending only selected days.",
      q(
        "What limits the initial survey's conclusion?",
        "It sampled customers only in the evening",
        [
          "Every response was deliberately false",
          "Morning customers cannot have opinions",
          "The shop had no existing opening hours",
        ],
        "The time-limited sample restricts whose preferences the results represent.",
      ),
      q(
        "Which option will the shop consider?",
        "Extending the hours on some days only",
        [
          "Closing earlier every day",
          "Stopping all surveys",
          "Opening only in the morning",
        ],
        "延長する日を限定する案も含め: extending on selected days is one option to weigh against costs and demand.",
      ),
    ),
    listening: p(
      "A claim kept in proportion",
      "今回の数字だけを見ると、売上は伸びています。ただし、特別な催しがあった一週間の結果にすぎません。通常の週と比べてから、継続的な傾向かどうか判断しましょう。",
      "These figures show higher sales, but they cover only a week with a special event. Let's compare ordinary weeks before judging whether this is a continuing trend.",
      q(
        "What is needed before claiming a sustained trend?",
        "Comparison with ordinary weeks",
        [
          "Repeating the special-week result as proof",
          "Ignoring all sales figures",
          "Canceling future events",
        ],
        "The limited observation is insufficient for a lasting-trend claim without a broader comparison.",
      ),
      q(
        "Why might the sales figures be misleading?",
        "They come from a week with a special event",
        [
          "They were entered incorrectly",
          "They cover a whole year",
          "They include only online sales",
        ],
        "特別な催しがあった一週間の結果にすぎません limits the figures to one unusual week.",
      ),
    ),
    practice:
      "Summarize a small dataset with its scope and limitations. Distinguish a grounded conclusion from a hypothesis needing more evidence.",
  },
  {
    slug: "balanced-comparisons",
    title: "Balanced comparisons & stronger contrasts",
    summary:
      "Recognize added benefits, paired drawbacks, and results that go beyond reversing an expectation.",
    vocabulary: words(`利点|りてん|advantage
欠点|けってん|drawback
効率|こうりつ|efficiency
維持|いじ|maintenance
費用|ひよう|cost
効果|こうか|effect
操作|そうさ|operation
負荷|ふか|load; burden`),
    grammar: [
      g(
        "〜だけでなく",
        "This adds another fact beyond the first: not only. The following clause often uses も. Ensure the added items are logically compatible and refer to the intended subject.",
        "速いだけでなく、操作も簡単です。",
        "It is not only fast but also easy to operate.",
      ),
      g(
        "〜ばかりか",
        "This adds a further, often more striking fact. It can amplify a positive or negative evaluation rather than merely listing equal items.",
        "遅刻したばかりか、資料まで忘れました。",
        "They were not only late but even forgot the materials.",
      ),
      g(
        "〜どころか",
        "This strongly rejects or exceeds an expected description: far from X, Y. Sometimes Y is the opposite; sometimes it goes far beyond the first amount or extent.",
        "休むどころか、前より忙しくなりました。",
        "Far from getting rest, I became busier than before.",
      ),
      g(
        "〜反面",
        "A plain clause or な-adjective + な反面 gives another side of the same thing. Both the advantage and the drawback can remain true.",
        "自由に選べる反面、判断の負担も増えます。",
        "You can choose freely, but the burden of deciding also increases.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose 'not only': この店は安い ___、品質もいい。",
        "だけでなく",
        ["反面", "に応じて", "にすぎず"],
        "だけでなく adds a second, compatible point, and も in the next clause marks it; 反面 would need a drawback.",
      ),
      q(
        "What does ばかりか add in 彼は謝らなかったばかりか、相手を責めた?",
        "A further, more striking fact",
        [
          "A reason for apologising",
          "A contrast that cancels the first fact",
          "A condition for blaming",
        ],
        "ばかりか adds something more striking than the first fact: not only no apology, but blaming the other person as well.",
      ),
      q(
        "Choose a strong reversal: 楽になる ___、仕事が増えた。",
        "どころか",
        ["に応じて", "にあたって", "をもとに"],
        "Instead of becoming easier, the situation became harder: a strong reversal.",
      ),
      q(
        "What does 安い反面、壊れやすい do?",
        "Pairs an advantage with a drawback",
        [
          "Denies that it is cheap",
          "Says price caused a specific breakage",
          "Gives a deadline",
        ],
        "反面 preserves both sides of the evaluation.",
      ),
    ],
    reading: p(
      "The hidden work of convenience",
      "予約アプリを導入すれば、受付の仕事が減ると期待されていた。確かに電話は少なくなったが、入力の誤りや予約の変更に対応する仕事が新たに生まれた。導入直後は楽になるどころか、職員の負担が増えたほどだ。ただし、これはアプリが無意味だということではない。利用者が自分で修正できる範囲を広げ、例外への対応方法を整理すれば、便利さを保ちながら負担を減らせる。道具だけを変えて、仕事の進め方を変えなかった点が課題だったのである。",
      "A booking app was expected to reduce reception work. Calls fell, but correcting input and changes created new tasks. Initially staff became busier rather than relieved. That does not make the app worthless: letting users fix more items and organizing exception handling can preserve convenience while reducing burden. The problem was changing the tool without adapting the work process.",
      q(
        "What improvement does the writer propose?",
        "Revise the process and users' ability to correct bookings",
        [
          "Assume all digital tools are useless",
          "Restore every old procedure unchanged",
          "Judge success only by phone-call counts",
        ],
        "The conclusion targets the surrounding workflow, not the mere existence of the tool.",
      ),
      q(
        "What fell after the app was introduced?",
        "Phone calls",
        ["Input errors", "Booking changes", "Staff workload at first"],
        "確かに電話は少なくなったが: calls fell, while correcting input and handling changes became new work.",
      ),
    ),
    listening: p(
      "Comparing two services",
      "安いプランは料金を抑えられる反面、変更のたびに手数料がかかります。高いプランは月額が高いですが、変更は無料です。予定がよく変わるなら、月額だけで比べないほうがいいですね。",
      "The cheaper plan lowers the base fee but charges for each change. The expensive plan has a higher monthly fee but free changes. If your schedule changes often, don't compare only the monthly price.",
      q(
        "What should frequent changers compare?",
        "Total cost including change fees",
        [
          "Only the advertised monthly fee",
          "Only the plan names",
          "Neither cost nor flexibility",
        ],
        "The trade-off means frequent change fees can outweigh the cheaper base price.",
      ),
      q(
        "What is the advantage of the expensive plan?",
        "Changes are free",
        [
          "A lower monthly fee",
          "No booking is needed",
          "A refund for each change",
        ],
        "高いプランは月額が高いですが、変更は無料です: the expensive plan trades a higher monthly fee for free changes.",
      ),
    ),
    practice:
      "Compare two services using 反面, then write one case where a result is the opposite of expectation using どころか.",
  },
  {
    slug: "timing-sequence",
    title: "Precise timing & interrupted actions",
    summary:
      "Interpret actions in progress, unfinished tasks, sudden changes, and immediate follow-up instructions.",
    vocabulary: words(`作業|さぎょう|task; work
中断|ちゅうだん|interruption
再開|さいかい|resumption
直後|ちょくご|immediately after
完了|かんりょう|completion
途中|とちゅう|midway
到着|とうちゃく|arrival
順序|じゅんじょ|order; sequence`),
    grammar: [
      g(
        "〜最中に",
        "ている form or noun + の最中に places another event right in the middle of an ongoing activity, often an interruption. It emphasizes the activity's active progress.",
        "説明している最中に、電話が鳴りました。",
        "The phone rang in the middle of the explanation.",
      ),
      g(
        "〜かけ",
        "Verb stem + かけ describes something begun but unfinished, or just about to happen in some contexts. It can modify a noun with の or combine with る.",
        "読みかけの本を机に置きました。",
        "I put the partly read book on the desk.",
      ),
      g(
        "〜たとたんに",
        "た-form + とたんに links an immediately following, often unexpected event. It usually does not introduce a deliberate request or plan by the speaker.",
        "外に出たとたんに、雨が降り始めました。",
        "Just as I went outside, it began to rain.",
      ),
      g(
        "〜次第",
        "Verb stem + 次第 means as soon as the first event is complete, typically followed by a planned action or notice. Noun + 次第だ instead means depends on, so distinguish the structures.",
        "準備ができ次第、ご連絡します。",
        "I will contact you as soon as preparations are ready.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the interruption in progress: 会議の ___、電話が鳴った。",
        "最中に",
        ["次第", "とたんに", "かけに"],
        "Noun + の最中に places the ringing phone right in the middle of the ongoing meeting.",
      ),
      q(
        "What does 書きかけのメール describe?",
        "An email begun but not yet finished",
        [
          "A message never started",
          "A sent message necessarily read by everyone",
          "A printed instruction booklet",
        ],
        "かけ marks the unfinished state of the writing.",
      ),
      q(
        "What does 立ち上がったとたんに、めまいがした describe?",
        "An unexpected event right after standing up",
        [
          "A planned action after standing up",
          "Two actions done together on purpose",
          "Standing up after the dizziness had passed",
        ],
        "たとたんに links an immediate, unexpected event to the moment of standing; it is not used for a deliberate follow-up plan.",
      ),
      q(
        "Choose the form for planned follow-up: 結果が分かり ___、お知らせします。",
        "次第",
        ["とたん", "最中", "かけの"],
        "A verb stem + 次第 suits a planned notification as soon as information becomes available.",
      ),
    ],
    reading: p(
      "An interrupted handover",
      "引き継ぎの説明をしている最中に、急な対応が必要になり、話が途中で終わってしまった。説明した側は、重要な点は伝えたつもりだったが、受け取った側には作業の順序が分からなかった。後から確認すると、手順の目的は説明されていたものの、例外が起きた場合の判断が抜けていた。そこで、再開時には最初から全部話し直すのではなく、どこまで理解できたかを確かめ、残った疑問から説明することにした。",
      "A handover was interrupted by an urgent issue. The explainer thought the key points were covered, but the recipient did not know the work order. A later check showed the purpose had been explained, while decisions for exceptions were missing. On resuming, they checked existing understanding and began with unresolved questions instead of repeating everything.",
      q(
        "How will the explanation resume?",
        "By checking understanding and addressing remaining questions",
        [
          "By assuming everything was understood",
          "By automatically repeating every word from the beginning",
          "By abandoning exception handling",
        ],
        "The final sentence explicitly replaces a complete restart with an understanding check and targeted explanation.",
      ),
      q(
        "What was missing from the first explanation?",
        "How to decide when an exception occurs",
        [
          "The purpose of the procedure",
          "The name of the person in charge",
          "The deadline for the task",
        ],
        "手順の目的は説明されていたものの、例外が起きた場合の判断が抜けていた: the purpose was covered, the decisions for exceptions were not.",
      ),
    ),
    listening: p(
      "When to contact the customer",
      "修理はまだ作業中です。部品が届き次第、取り付けます。ただ、お客様への連絡は、取り付けた直後ではなく、動作確認が終わってからお願いします。",
      "The repair is still in progress. We will install the part as soon as it arrives. But please contact the customer after testing is complete, not immediately after installation.",
      q(
        "When should the customer be contacted?",
        "After the operation check is complete",
        [
          "As soon as the part arrives",
          "Immediately after installation without testing",
          "Before repair begins",
        ],
        "The request distinguishes part arrival, installation, and the final testing prerequisite.",
      ),
      q(
        "When will the part be installed?",
        "As soon as it arrives",
        [
          "After the customer calls",
          "Tomorrow morning",
          "After the operation check",
        ],
        "部品が届き次第、取り付けます: installation follows the moment the part arrives.",
      ),
    ),
    practice:
      "Write a process with one interruption and a planned follow-up. Use とたん for an unexpected event and 次第 for a deliberate response.",
  },
  {
    slug: "formal-notices",
    title: "Formal notices & public discussion",
    summary:
      "Read concise announcements and follow how formal texts frame a topic, preparation, or dispute.",
    vocabulary: words(`通知|つうち|notice
施設|しせつ|facility
改修|かいしゅう|renovation
周辺|しゅうへん|surrounding area
協議|きょうぎ|consultation; deliberation
方針|ほうしん|policy; course of action
期間|きかん|period
了承|りょうしょう|acceptance; understanding`),
    grammar: [
      g(
        "〜につき",
        "In notices, noun + につき gives a formal reason, such as 工事中につき. In quantity expressions it can instead mean per: 一人につき一枚. Context determines the function.",
        "改修工事中につき、入口を変更します。",
        "Due to renovation work, the entrance will change.",
      ),
      g(
        "〜に関して",
        "Noun + に関して formally introduces a topic. に関する modifies a noun. It is close to について, with a more formal register.",
        "申請に関する質問を受け付けます。",
        "We accept questions concerning applications.",
      ),
      g(
        "〜をめぐって",
        "Noun + をめぐって frames an issue around which discussion, disagreement, or competing action occurs. It is not interchangeable with a neutral topic marker in every sentence.",
        "施設の利用方法をめぐって、話し合いが続いています。",
        "Discussions continue over how to use the facility.",
      ),
      g(
        "〜に先立って",
        "Noun or dictionary form + に先立って means prior to a significant event, often for preparation. に先立つ modifies a noun.",
        "開館に先立って、近隣住民への説明会を行います。",
        "Before opening, we will hold a briefing for nearby residents.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 一組につき二枚 mean?",
        "Two tickets per group",
        [
          "Only two groups total",
          "Two groups per ticket",
          "Two tickets because of construction",
        ],
        "With quantities, につき expresses a per-unit allocation.",
      ),
      q(
        "Which introduces the topic in the formal register of a notice?",
        "申請に関して",
        ["申請のことだけど", "申請って", "申請なんか"],
        "に関して introduces the topic formally, close to について; the others are conversational, and なんか even sounds dismissive.",
      ),
      q(
        "Choose the disputed issue: 建設計画 ___、意見が分かれています。",
        "をめぐって",
        ["に先立つの", "かけての", "につれての"],
        "The construction plan is the issue around which opinions differ.",
      ),
      q(
        "What does 開会に先立って mean in 開会に先立って、市長があいさつした?",
        "Before the opening",
        [
          "After the closing",
          "Instead of the opening",
          "Throughout the session",
        ],
        "に先立って means prior to a significant event: the mayor's greeting came before the session opened.",
      ),
    ],
    reading: p(
      "Library renovation notice",
      "館内改修につき、来月一日から十五日まで通常の閲覧室は利用できません。ただし、予約資料の受け取りは西側の臨時窓口で行います。窓口の受付時間は午前十時から午後四時までで、通常より一時間早く終了します。返却は正面の返却箱をご利用ください。工事期間中もオンライン予約は可能ですが、他館から取り寄せる資料は到着が遅れる場合があります。来館前に、受け取り可能の通知をご確認ください。",
      "The normal reading room is unavailable from the first through the fifteenth next month for renovation. Reserved items can be collected at a temporary west-side counter from 10 a.m. to 4 p.m., closing an hour earlier than usual. Returns use the front return box. Online reservations remain available, but transfers from other branches may be delayed. Check the ready-for-pickup notice before visiting.",
      q(
        "What should a borrower do before collecting a transferred item?",
        "Confirm that the pickup-ready notice has arrived",
        [
          "Assume any online reservation is already available",
          "Use the closed reading room",
          "Arrive after the usual closing time",
        ],
        "An online reservation is still possible, but transfer delays mean readiness must be confirmed separately.",
      ),
      q(
        "Where should borrowers return items during the renovation?",
        "The return box at the front",
        [
          "The temporary counter on the west side",
          "The closed reading room",
          "The online reservation page",
        ],
        "返却は正面の返却箱をご利用ください: returns go to the front box, while pickups use the west-side counter.",
      ),
    ),
    listening: p(
      "A briefing before opening",
      "開店に先立って、近隣の方への説明を行います。営業時間は決まりましたが、搬入の時間についてはまだ協議中です。決まっていない点を、決定事項として伝えないようにしてください。",
      "Before the shop opens, we will brief neighbors. Business hours are settled, but delivery times are still under discussion. Please do not present unsettled points as final decisions.",
      q(
        "Which information is not yet finalized?",
        "Delivery times",
        [
          "The business hours",
          "The existence of the briefing",
          "The need to distinguish decisions from proposals",
        ],
        "The speaker contrasts fixed 営業時間 with 搬入の時間 still under discussion.",
      ),
      q(
        "What will happen before the shop opens?",
        "A briefing for neighbours",
        [
          "A sale for the first customers",
          "A vote on business hours",
          "The first delivery of stock",
        ],
        "開店に先立って、近隣の方への説明を行います: the briefing for neighbours comes before the opening.",
      ),
    ),
    practice:
      "Extract dates, changed procedures, and exceptions from a notice. Rewrite it in plain spoken Japanese for someone visiting the facility.",
  },
  {
    slug: "integrated-reading",
    title: "Comparing sources & retrieving information",
    summary:
      "Combine a policy with a separate message, and distinguish requirements from helpful but optional actions.",
    vocabulary: words(`照合|しょうごう|comparison; checking against
一致|いっち|agreement; match
相違|そうい|difference
項目|こうもく|item; field
条件|じょうけん|condition
手配|てはい|arrangement
有無|うむ|presence or absence
締切|しめきり|deadline`),
    grammar: [
      g(
        "〜ない限り",
        "ない-form + 限り means unless. The stated result will hold if the exception is not met. Read both the condition and the result before choosing an action.",
        "連絡がない限り、予定どおり実施します。",
        "Unless there is notice, we will proceed as scheduled.",
      ),
      g(
        "〜て初めて",
        "This makes an experience or event the point at which something becomes possible or understood for the first time. It often highlights a necessary step rather than merely chronological order.",
        "両方の資料を読んで初めて、違いが分かりました。",
        "Only after reading both documents did I understand the difference.",
      ),
      g(
        "〜にほかならない",
        "This emphatically identifies a cause or essence: nothing other than. It is an argumentative claim and should be evaluated against the writer's supporting reasons.",
        "改善の理由は、利用者の声を聞いたことにほかなりません。",
        "The improvement came precisely from listening to users.",
      ),
      g(
        "〜さえ",
        "さえ can mean even, presenting an extreme example. Compare a minimal condition with さえ〜ば: the presence of a conditional changes the overall construction.",
        "経験者でさえ、説明なしでは迷いました。",
        "Even experienced users were confused without explanation.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 変更の連絡がない限り、九時集合 mean?",
        "Meet at nine unless a change is announced",
        [
          "A change is definitely announced",
          "Never meet at nine",
          "Meeting time is entirely unspecified",
        ],
        "ない限り keeps the nine o'clock instruction active until the stated exception occurs.",
      ),
      q(
        "Choose the first enabling experience: 自分で使って ___、便利さが分かった。",
        "初めて",
        ["限りの", "めぐって", "つき"],
        "て初めて identifies use as the experience that enabled understanding.",
      ),
      q(
        "What does にほかならない emphasize in 成功の理由は、準備の努力にほかならない?",
        "The preparation was precisely the reason",
        [
          "Preparation was only a minor factor",
          "The reason is still unknown",
          "Success came despite the preparation",
        ],
        "にほかならない identifies the cause emphatically: nothing other than the effort put into preparation.",
      ),
      q(
        "Which sentence uses さえ for a minimal condition?",
        "住所さえ分かれば、届けられます。",
        [
          "専門家でさえ、答えられなかった。",
          "子どもでさえ知っている。",
          "雨さえ降り出した。",
        ],
        "さえ〜ば sets a minimal condition: only the address is needed. The others use さえ for an extreme example, meaning even.",
      ),
    ],
    reading: p(
      "Policy plus organizer's message",
      "【施設の案内】会議室は二時間単位で予約できます。準備と片付けも予約時間に含まれます。飲食は可能ですが、ごみは各自で持ち帰ってください。予約変更は前日の正午まで受け付けます。\n【主催者から】説明会は午後二時から三時半までです。準備に三十分、片付けに三十分必要なので、部屋は午後一時半から四時まで使いたいと思います。施設の予約単位を確認し、不足がないよう手配してください。",
      "Facility policy: rooms are booked in two-hour units, including setup and cleanup. Food is allowed, but take trash home. Changes are accepted until noon the previous day. Organizer's message: the briefing runs 2–3:30 p.m. Setup and cleanup each take thirty minutes, so we need the room 1:30–4 p.m. Check the booking units and reserve enough time.",
      q(
        "How much room time must be booked under the policy?",
        "Four hours, because two hours cannot cover the required two and a half",
        [
          "Two hours, counting only the briefing",
          "One and a half hours",
          "Thirty minutes for preparation only",
        ],
        "Combine the organizer's 2.5-hour requirement with the facility's two-hour booking units. The next sufficient whole unit is four hours.",
      ),
      q(
        "Until when can a booking be changed?",
        "Noon on the previous day",
        [
          "The morning of the briefing",
          "Two hours before the room is used",
          "Any time before 4 p.m.",
        ],
        "予約変更は前日の正午まで受け付けます: changes close at noon the day before.",
      ),
    ),
    listening: p(
      "A changed requirement",
      "案内では身分証だけでよいと書いてありますが、団体予約の場合は代表者の確認書も必要です。今回は団体なので、こちらから届いた確認書を印刷して持ってきてください。身分証も忘れずにお願いします。",
      "The guide says ID alone is enough, but group bookings also require the representative's confirmation form. This is a group, so print and bring the confirmation we sent. Do not forget ID either.",
      q(
        "What should be brought for this booking?",
        "ID and the printed confirmation form",
        ["ID only", "The form only", "Neither because it is a group"],
        "The spoken message adds a group-specific requirement without removing the general ID requirement.",
      ),
      q(
        "Why is an extra document needed this time?",
        "It is a group booking",
        [
          "The guide has been withdrawn",
          "The listener lost their ID",
          "The venue has changed",
        ],
        "団体予約の場合は代表者の確認書も必要です, and 今回は団体なので applies that rule to this booking.",
      ),
    ),
    practice:
      "Compare two short notices. List shared rules, differences, and the action required for a specific person's circumstances.",
  },
  {
    slug: "everyday-negotiation",
    title: "Returns, complaints & terms",
    summary:
      "Raise a problem with a product or a service, state your side of it without hardening the exchange, and land on terms that both parties can record as agreed.",
    vocabulary: words(`返品|へんぴん|returning goods
対応|たいおう|handling
不具合|ふぐあい|a fault
保証|ほしょう|a guarantee
交換|こうかん|an exchange
納得|なっとく|being convinced
妥協|だきょう|a compromise
手続き|てつづき|a procedure`),
    grammar: [
      g(
        "〜ということで",
        "ということで closes a discussion by naming the conclusion both sides are settling on. It presents the outcome as something shared rather than imposed, which is exactly why so many negotiations end with it instead of with a bare statement of the result.",
        "{今回|こんかい}は{交換|こうかん}ということでいかがでしょうか。",
        "Shall we settle on an exchange this time?",
      ),
      g(
        "〜といたしましては",
        "としては states a position from one particular standpoint, and the humble いたしまして raises it for business use. It signals that what follows is your side's position rather than an established fact, which leaves the other side room to state theirs.",
        "{弊社|へいしゃ}といたしましては、{交換|こうかん}でのご{対応|たいおう}を{考|かんが}えております。",
        "From our side, we are thinking in terms of handling this as an exchange.",
      ),
      g(
        "〜ないことには",
        "The ない-form plus ことには sets an indispensable condition, and the clause that follows must itself be negative. It is stronger than なければ: it says that nothing at all can move until the condition has been met.",
        "{現物|げんぶつ}を{拝見|はいけん}しないことには、お{返事|へんじ}ができません。",
        "Until we can see the item itself, we are unable to give you an answer.",
      ),
      g(
        "〜{限|かぎ}りでは",
        "A dictionary or た-form plus {限|かぎ}りでは limits a statement to the evidence you have actually seen. It protects you from claiming more than you checked, which is why reports and negotiations lean on it so heavily.",
        "{記録|きろく}を{確認|かくにん}した{限|かぎ}りでは、{同|おな}じ{不具合|ふぐあい}は{出|で}ておりません。",
        "As far as the records I have checked go, the same fault has not occurred.",
      ),
    ],
    grammarChecks: [
      q(
        "Which phrase settles on the outcome both sides accept?",
        "交換ということで",
        ["交換しないことには", "交換した限りでは", "交換といたしましては"],
        "ということで names the agreed conclusion; the others set a condition, limit a claim, or mark one side's standpoint.",
      ),
      q(
        "What does 弊社といたしましては signal?",
        "What follows is the company's own position",
        [
          "What follows is a legal requirement",
          "The customer has already agreed",
          "The company refuses to discuss it",
        ],
        "といたしましては states a view from the speaker's standpoint in humble business form, leaving the other side room to state theirs.",
      ),
      q(
        "What does 担当者に確認しないことには、お答えできません mean?",
        "No answer is possible until the person in charge is consulted",
        [
          "The person in charge has already answered",
          "An answer can be given without checking",
          "The person in charge refuses to answer",
        ],
        "ないことには makes checking with the person in charge the one condition without which no answer can be given.",
      ),
      q(
        "Choose the phrase that limits a claim to what was actually checked.",
        "確認した限りでは",
        ["確認しないことには", "確認ということで", "確認といたしましては"],
        "限りでは keeps the statement inside the evidence the speaker has seen, and claims nothing beyond it.",
      ),
    ],
    reading: p(
      "A reply from customer support",
      "このたびは{弊社|へいしゃ}{製品|せいひん}に{不具合|ふぐあい}がございましたこと、{深|ふか}くおわび{申|もう}し{上|あ}げます。お{送|おく}りいただいた{写真|しゃしん}を{確認|かくにん}いたしました{限|かぎ}りでは、{初期|しょき}{不良|ふりょう}であると{判断|はんだん}しております。{保証|ほしょう}{期間|きかん}はすでに{過|す}ぎておりますが、{今回|こんかい}は{無料|むりょう}で{交換|こうかん}させていただきます。{弊社|へいしゃ}といたしましては、{返品|へんぴん}による{返金|へんきん}ではなく{交換|こうかん}ということでお{願|ねが}いできればと{考|かんが}えております。{同封|どうふう}の{用紙|ようし}にご{記入|きにゅう}いただかないことには{手続|てつづ}きが{進|すす}められませんので、ご{記入|きにゅう}のうえご{返送|へんそう}ください。",
      "We sincerely apologise for the fault in our product. As far as the photographs you sent allow us to judge, we consider it a manufacturing defect. Although the warranty period has already passed, we will replace the item free of charge this time. From our side, we would ask you to accept an exchange rather than a refund through a return. The procedure cannot move forward until the enclosed form is filled in, so please complete it and send it back to us.",
      q(
        "What does the company ask the customer to accept?",
        "An exchange instead of a refund",
        [
          "A repair at their own cost",
          "A longer warranty period",
          "A delay of several weeks",
        ],
        "返金ではなく交換ということで names the outcome the company is proposing; the exchange itself is offered free of charge.",
      ),
      q(
        "What must the customer do for the procedure to go ahead?",
        "Fill in and return the enclosed form",
        [
          "Send more photographs",
          "Bring the product to a shop",
          "Buy an extended warranty first",
        ],
        "同封の用紙にご記入いただかないことには手続きが進められません: nothing moves until the enclosed form comes back.",
      ),
    ),
    listening: p(
      "At the service counter",
      "レシートがないので{返品|へんぴん}は{難|むずか}しいのですが、{同|おな}じ{商品|しょうひん}との{交換|こうかん}でしたら{対応|たいおう}できます。{在庫|ざいこ}を{確認|かくにん}しないことにはお{答|こた}えできませんので、10{分|ぷん}ほどお{時間|じかん}をいただけますか。",
      "Without a receipt a return is difficult, but we can handle an exchange for the same item. I cannot answer until I have checked the stock, so could you give me about ten minutes?",
      q(
        "What can the counter offer?",
        "An exchange for the same item",
        ["A full refund", "A store credit", "A free repair"],
        "同じ商品との交換でしたら対応できます is the one option offered; the return itself is described as difficult.",
      ),
      q(
        "Why does the clerk ask for about ten minutes?",
        "To check whether the item is in stock",
        [
          "To find the receipt",
          "To call the manufacturer",
          "To process a refund",
        ],
        "在庫を確認しないことにはお答えできません: the ten minutes are for the stock check the answer depends on.",
      ),
    ),
    practice:
      "Write a four-line reply to a complaint: apologise, report what you checked with 限りでは, state your side with といたしましては, and name the settlement with ということで.",
  },
  {
    slug: "workplace-exchanges",
    title: "Reporting, asking & declining at work",
    summary:
      "Report progress before anybody has to ask, flag a risk while there is still time to act on it, and turn down extra work without closing the door on the next request.",
    vocabulary: words(`進捗|しんちょく|progress
報告|ほうこく|a report
相談|そうだん|talking something over
残業|ざんぎょう|overtime
締切|しめきり|a deadline
引き継ぎ|ひきつぎ|a handover
指示|しじ|instructions
余裕|よゆう|room to spare`),
    grammar: [
      g(
        "〜たところ",
        "The た-form plus ところ reports what you found when you did something: {確認|かくにん}したところ、{数字|すうじ}が{違|ちが}っていました. It introduces a discovery neutrally and keeps the checking separate from what the check turned up, which keeps blame out of a progress report.",
        "{確認|かくにん}したところ、{締切|しめきり}が{来週|らいしゅう}に{変|か}わっていました。",
        "When I checked, the deadline had moved to next week.",
      ),
      g(
        "〜のではないかと{思|おも}います",
        "Wrapping a claim in のではないかと{思|おも}います turns it into a suggestion. The negative question inside does not make the sentence negative; it simply leaves the listener room to disagree, which is what makes it usable for raising a risk in a meeting.",
        "この{進|すす}め{方|かた}では{間|ま}に{合|あ}わないのではないかと{思|おも}います。",
        "I suspect we will not make it in time at this rate.",
      ),
      g(
        "〜ば{幸|さいわ}いです",
        "The ば-form plus {幸|さいわ}いです makes a request sound like a hope rather than a demand. It is at home in written Japanese and with someone senior; spoken between close colleagues it can come across as stiff or distant.",
        "{提出|ていしゅつ}を{二日|ふつか}ほど{延|の}ばしていただければ{幸|さいわ}いです。",
        "I would be grateful if the submission could be put back by about two days.",
      ),
      g(
        "〜かと{存|ぞん}じます",
        "{存|ぞん}じます is the humble form of {思|おも}います, and かと adds a layer of tentativeness on top of it. Together they state an opinion while declining to insist on it, which is why business correspondence is full of the pair.",
        "{来週|らいしゅう}でしたら{対応|たいおう}できるかと{存|ぞん}じます。",
        "I believe we could manage it if it were next week.",
      ),
    ],
    grammarChecks: [
      q(
        "Which reports what was found on checking?",
        "確認したところ",
        ["確認するにあたり", "確認した限りでは", "確認するかと存じます"],
        "たところ introduces what the speaker discovered on checking, rather than limiting a claim or stating an opinion.",
      ),
      q(
        "Choose the softest way to raise a concern.",
        "間に合わないのではないかと思います",
        ["間に合いません", "間に合わないでしょう", "間に合うはずがありません"],
        "のではないかと思います frames the concern as a suspicion and leaves room for another view of the schedule.",
      ),
      q(
        "Which request sounds like a hope rather than a demand in an e-mail to a senior colleague?",
        "ご確認いただければ幸いです",
        ["確認してください", "確認しろ", "確認してね"],
        "ば幸いです phrases the request as the writer's hope, which suits writing to someone senior; the others are direct requests or orders.",
      ),
      q(
        "What does かと存じます add in 来週でしたら対応できるかと存じます?",
        "A humble, tentative opinion",
        ["A firm promise", "A refusal", "A question to the listener"],
        "存じます is humble 思います, and かと makes it tentative, so the speaker offers next week without insisting on it.",
      ),
    ],
    reading: p(
      "A progress report by e-mail",
      "{先週|せんしゅう}ご{指示|しじ}いただいた{件|けん}について、{現在|げんざい}の{進捗|しんちょく}をご{報告|ほうこく}いたします。{資料|しりょう}を{確認|かくにん}したところ、{数字|すうじ}が{一部|いちぶ}{古|ふる}いままになっておりました。{担当|たんとう}に{確認|かくにん}のうえ、{修正|しゅうせい}したものをお{送|おく}りいたします。{締切|しめきり}までに{余裕|よゆう}がないため、このままでは{間|ま}に{合|あ}わないのではないかと{思|おも}います。{可能|かのう}でしたら、{提出|ていしゅつ}を{二日|ふつか}ほど{延|の}ばしていただければ{幸|さいわ}いです。{難|むずか}しいようでしたら{残業|ざんぎょう}で{対応|たいおう}できるかと{存|ぞん}じますので、ご{指示|しじ}をいただけますでしょうか。",
      "This is a report on the current progress of the matter you gave me instructions on last week. When I checked the documents, some of the figures were still out of date. I will confirm them with the person responsible and send you a corrected version. There is little leeway before the deadline, so I suspect we will not make it as things stand. If possible, I would be grateful if the submission could be put back by about two days. If that is difficult, I believe overtime could cover it, so could I ask for your instructions?",
      q(
        "What does the writer ask for first?",
        "A two-day extension",
        [
          "Permission to work overtime",
          "Somebody else to take the task over",
          "A new set of instructions",
        ],
        "延ばしていただければ幸いです is the request; overtime appears only as the fallback if the extension is refused.",
      ),
      q(
        "What problem did the writer find in the documents?",
        "Some figures were out of date",
        [
          "A page was missing",
          "The deadline was wrong",
          "The file would not open",
        ],
        "資料を確認したところ、数字が一部古いままになっておりました reports the finding: some figures had not been updated.",
      ),
    ),
    listening: p(
      "Declining extra work",
      "{申|もう}し{訳|わけ}ありませんが、{今週|こんしゅう}は{引|ひ}き{継|つ}ぎがあって{余裕|よゆう}がありません。{来週|らいしゅう}でしたらお{手伝|てつだ}いできるかと{存|ぞん}じますので、{一度|いちど}ご{相談|そうだん}させていただけますか。",
      "I am sorry, but I have a handover this week and have no room to spare. I believe I could help next week, so could we talk it over once?",
      q(
        "What does the speaker offer instead?",
        "Help the following week",
        [
          "Finding a replacement",
          "Working through the weekend",
          "Cancelling the handover",
        ],
        "来週でしたらお手伝いできる keeps the offer open with different timing rather than refusing outright.",
      ),
      q(
        "Why can the speaker not help this week?",
        "They have a handover this week",
        [
          "They are on holiday",
          "They lack the skills needed",
          "They are working overtime for a client",
        ],
        "今週は引き継ぎがあって余裕がありません gives the handover as the reason there is no room this week.",
      ),
    ),
    practice:
      "Write a five-line progress report: state the task, report a finding with たところ, raise one risk with のではないかと思います, make one request with ば幸いです, and offer a fallback with かと存じます.",
  },
  {
    slug: "particles-formal",
    title: "Particles in formal writing",
    summary:
      "Read the connective particles that hold a report or a public notice together, and use them where a plain に or で would sound too conversational for the page.",
    vocabulary: words(`分野|ぶんや|a field
機関|きかん|an institution
普及|ふきゅう|widespread uptake
連携|れんけい|collaboration
実績|じっせき|a track record
対象|たいしょう|the target group
支援|しえん|support
範囲|はんい|a scope`),
    grammar: [
      g(
        "〜において・〜における",
        "において marks the setting of something in formal writing, where で would do the job in speech: {会議|かいぎ}において{決定|けってい}された。In front of a noun it becomes における, as in {日本|にほん}における{普及|ふきゅう}。It covers a place, a time, and a field of activity alike.",
        "この{分野|ぶんや}における{研究|けんきゅう}は{進|すす}んでいます。",
        "Research in this field is advancing.",
      ),
      g(
        "〜をはじめ",
        "をはじめ names the leading example of a group and leaves the rest understood: {東京|とうきょう}をはじめ、{各地|かくち}で{行|おこな}われた。In front of a noun it takes the form をはじめとする。The item you name should be the most prominent one, not simply any member.",
        "{大学|だいがく}をはじめ、{多|おお}くの{機関|きかん}が{参加|さんか}しました。",
        "Many institutions took part, universities among the first.",
      ),
      g(
        "〜にわたって",
        "にわたって states the extent something covers, whether in time, in space, or in subject matter: {三年|さんねん}にわたって、{全国|ぜんこく}にわたって。In front of a noun it becomes にわたる。It stresses the whole span rather than any single point inside it.",
        "{調査|ちょうさ}は{三年|さんねん}にわたって{続|つづ}けられました。",
        "The survey was continued over three years.",
      ),
      g(
        "〜を通じて・〜を通して",
        "を通じて names the route by which something travels: インターネットを{通|つう}じて、{友人|ゆうじん}を{通|とお}して。It also covers a whole period, as in {一年|いちねん}を{通|つう}じて。を通して leans towards a channel the writer deliberately chose.",
        "{支援|しえん}は{地元|じもと}の{機関|きかん}を{通|つう}じて{行|おこな}われます。",
        "The support is delivered through local institutions.",
      ),
    ],
    grammarChecks: [
      q(
        "Which fits a written notice: 会議 ___ 決定された。",
        "において",
        ["にわたって", "をはじめ", "を通じて"],
        "において marks the setting in which something happened; the others state an extent, a leading example, or a route.",
      ),
      q(
        "Choose the phrase that names a leading example.",
        "東京をはじめ",
        ["東京において", "東京にわたって", "東京を通じて"],
        "をはじめ picks out the most prominent member of a group and leaves the remainder understood.",
      ),
      q(
        "Choose the phrase that states the whole span: 工事は十年 ___ 続いた。",
        "にわたって",
        ["において", "をはじめ", "に対して"],
        "にわたって stresses the whole span of ten years; において marks a setting and をはじめ a leading example.",
      ),
      q(
        "What does を通じて mark in 友人を通じて、仕事を紹介してもらった?",
        "The route by which the introduction came",
        [
          "The place where the work happens",
          "The period the work lasted",
          "The leading example among many friends",
        ],
        "を通じて names the route: the job introduction came by way of a friend.",
      ),
    ],
    reading: p(
      "A programme report",
      "{本|ほん}{事業|じぎょう}は、{昨年度|さくねんど}より{三年|さんねん}にわたって{実施|じっし}されているものである。{都市部|としぶ}をはじめ、{地方|ちほう}の{各地|かくち}においても{同様|どうよう}の{取|と}り{組|く}みが{広|ひろ}がりつつある。{支援|しえん}は{地元|じもと}の{機関|きかん}を{通|つう}じて{提供|ていきょう}され、{対象|たいしょう}となる{範囲|はんい}は{年々|ねんねん}{拡大|かくだい}している。{連携|れんけい}する{団体|だんたい}の{数|かず}も{増|ふ}えており、この{分野|ぶんや}における{実績|じっせき}は{着実|ちゃくじつ}に{積|つ}み{上|あ}がってきた。{今後|こんご}は{普及|ふきゅう}の{速度|そくど}をいかに{保|たも}つかが{課題|かだい}である。",
      "This programme has been running for three years, since last fiscal year. Similar initiatives are spreading in regional areas as well as in the cities. Support is provided through local institutions, and the scope of those covered expands year by year. The number of partner organisations is rising too, and the track record in this field has steadily accumulated. The question from here is how to maintain the pace of uptake.",
      q(
        "How is the support delivered?",
        "Through local institutions",
        [
          "Directly by the government",
          "Only in the cities",
          "Through a single national body",
        ],
        "地元の機関を通じて提供され names the route; the cities appear as the leading example of where it spread, not as the only place.",
      ),
      q(
        "What does the report name as the challenge ahead?",
        "Keeping up the pace of uptake",
        [
          "Finding local institutions",
          "Starting the programme in the cities",
          "Reducing the number of partners",
        ],
        "今後は普及の速度をいかに保つかが課題である names maintaining the pace of uptake as the remaining challenge.",
      ),
    ),
    listening: p(
      "A briefing",
      "{本|ほん}{事業|じぎょう}は{三年|さんねん}にわたって{続|つづ}いております。{都市部|としぶ}をはじめ、{地方|ちほう}においても{参加|さんか}{団体|だんたい}が{増|ふ}えました。{今後|こんご}も{地元|じもと}の{機関|きかん}を{通|つう}じて{支援|しえん}を{続|つづ}けてまいります。",
      "This programme has continued for three years. The number of participating organisations has grown in regional areas as well as in the cities. We will go on providing support through local institutions.",
      q(
        "What has grown?",
        "The number of participating organisations",
        ["The budget", "The number of cities", "The length of the programme"],
        "参加団体が増えました names what grew; the three-year span is stated as a fact rather than as something that increased.",
      ),
      q(
        "Where have participating organisations increased?",
        "In regional areas as well as the cities",
        ["Only in the cities", "Only abroad", "Nowhere yet"],
        "都市部をはじめ、地方においても参加団体が増えました: the cities lead, and regional areas have seen growth too.",
      ),
    ),
    practice:
      "Rewrite a plain progress note for the page: replace で with において, name the leading example with をはじめ, state the span with にわたって, and name the route with を通じて.",
  },
  {
    slug: "commuting-city",
    title: "Commuting, detours & rules of the road",
    summary:
      "Get through a city commute under roadworks: follow a detour along the route that has been set out, explain a delay that has more than one cause, and point out the unwritten rules for cycling and parking.",
    vocabulary: words(`通勤|つうきん|commuting to work
渋滞|じゅうたい|a traffic jam
通行止め|つうこうどめ|a road closure
工事|こうじ|construction work
歩道|ほどう|a pavement
駐輪場|ちゅうりんじょう|a bicycle parking area
遅延|ちえん|a delay
標識|ひょうしき|a road sign`),
    grammar: [
      g(
        "〜に{沿|そ}って",
        "Noun + に{沿|そ}って means along something that runs beside you, such as a river or a road, or in line with a plan, a policy, or a set of instructions. Before a noun it becomes に{沿|そ}った, as in {計画|けいかく}に{沿|そ}った{工事|こうじ}. Compared with に{従|したが}って, it keeps the image of a line you move beside.",
        "{矢印|やじるし}に{沿|そ}って、{川沿|かわぞ}いの{道|みち}をお{進|すす}みください。",
        "Please follow the arrows along the riverside road.",
      ),
      g(
        "〜に{加|くわ}えて",
        "Noun + に{加|くわ}えて adds a second factor on top of the first: {雨|あめ}に{加|くわ}えて{風|かぜ}も{強|つよ}い. It is common in news and announcements that list causes, and the added item usually takes も. In conversation, 〜だけじゃなくて says much the same thing less formally.",
        "{工事|こうじ}に{加|くわ}えて{事故|じこ}もあり、{道|みち}がひどく{混|こ}んでいます。",
        "On top of the roadworks there has been an accident, so the roads are badly congested.",
      ),
      g(
        "〜ようがない",
        "Verb stem + ようがない says there is no way to do something because the means are missing, not the will: {電話|でんわ}が{通|つう}じないので{連絡|れんらく}のしようがない. A する-noun takes のしようがない. It presents the inability as a matter of circumstance, which is why it often appears when explaining a delay.",
        "{電車|でんしゃ}も{止|と}まっていて、{行|い}きようがありませんでした。",
        "The trains had stopped as well, so there was no way to get there.",
      ),
      g(
        "〜ものではない",
        "Dictionary form + ものではない states a social rule about what people should not do, the way an older relative or a teacher might: {人|ひと}の{悪口|わるぐち}を{言|い}うものではない. It appeals to common sense rather than to a regulation, so said directly to someone it can sound like a lecture.",
        "{歩道|ほどう}に{自転車|じてんしゃ}を{止|と}めておくものではありません。",
        "You should not leave a bicycle standing on the pavement.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase for following the arrows: 矢印 ___ 進んでください。",
        "に沿って",
        ["に加えて", "をめぐって", "につき"],
        "に沿って means along a line or in line with guidance; the arrows mark the route to follow.",
      ),
      q(
        "What does 雨に加えて風も強い add?",
        "Strong wind on top of the rain",
        [
          "Wind instead of rain",
          "Rain because of the wind",
          "Wind that has now stopped",
        ],
        "に加えて adds a second factor to the first, and も marks the added item: the wind is strong as well as it raining.",
      ),
      q(
        "Which says there were no means of getting in touch?",
        "連絡のしようがなかった",
        [
          "連絡しないことはなかった",
          "連絡するものではなかった",
          "連絡したばかりだった",
        ],
        "With a する-noun, ようがない becomes のしようがない: the means of contacting anyone were missing.",
      ),
      q(
        "Choose the sentence that states a social rule.",
        "歩道に自転車を止めるものではない",
        [
          "歩道に自転車を止めるものだった",
          "歩道に自転車を止めようがない",
          "歩道に自転車を止めるわけではない",
        ],
        "Dictionary form + ものではない says what people should not do as a matter of common sense.",
      ),
    ],
    reading: p(
      "Roadworks outside the station",
      "{駅前|えきまえ}{通|どお}りの{工事|こうじ}が{始|はじ}まって{一週間|いっしゅうかん}になる。{工事|こうじ}による{通行止|つうこうど}めに{加|くわ}えて、{雨|あめ}の{日|ひ}には{駅|えき}へ{向|む}かう{車|くるま}も{増|ふ}えるため、{渋滞|じゅうたい}は{以前|いぜん}よりひどくなった。{車|くるま}で{通|とお}る{人|ひと}は{標識|ひょうしき}に{沿|そ}って{川沿|かわぞ}いの{道|みち}を{回|まわ}るしかないが、そこも{混|こ}んでいて、{時間|じかん}の{読|よ}みようがないという。そこで{自転車|じてんしゃ}で{通勤|つうきん}する{人|ひと}が{増|ふ}えたが、{駅前|えきまえ}の{駐輪場|ちゅうりんじょう}は{工事|こうじ}のために{半分|はんぶん}しか{使|つか}えない。{駐輪場|ちゅうりんじょう}がいっぱいでも、{歩道|ほどう}に{自転車|じてんしゃ}を{止|と}めるものではない。{歩道|ほどう}は{歩|ある}く{人|ひと}のための{場所|ばしょ}である。{少|すこ}し{早|はや}めに{家|いえ}を{出|で}て、{駅|えき}まで{歩|ある}くのも{一|ひと}つの{方法|ほうほう}だろう。",
      "It has been a week since the roadworks on the station road began. On top of the closure caused by the works, more cars head for the station on rainy days, so the congestion is worse than before. Drivers have no choice but to follow the signs round by the riverside road, but that is busy too, and people say there is no way to judge how long a journey will take. More people now cycle to work as a result, but only half of the bicycle park by the station can be used because of the works. Even when it is full, you should not leave a bicycle on the pavement. The pavement is a place for people on foot. Leaving home a little earlier and walking to the station is another option.",
      q(
        "Why is the congestion worse than before?",
        "A road closure plus extra cars on rainy days",
        [
          "The riverside road has been closed",
          "The bicycle park has been removed",
          "The trains have stopped running",
        ],
        "通行止めに加えて adds the rainy-day traffic on top of the closure; the two together make the congestion worse.",
      ),
      q(
        "What does the writer say people should not do?",
        "Leave a bicycle on the pavement",
        [
          "Drive along the riverside road",
          "Walk to the station",
          "Leave home earlier than usual",
        ],
        "歩道に自転車を止めるものではない states a rule of common sense: the pavement belongs to people on foot, even when the bicycle park is full.",
      ),
    ),
    listening: p(
      "A delay announcement",
      "ただいま、{大雨|おおあめ}の{影響|えいきょう}に{加|くわ}えて、{線路|せんろ}の{点検|てんけん}を{行|おこな}っているため、{上|のぼ}り{線|せん}に{遅|おく}れが{出|で}ております。{運転|うんてん}{再開|さいかい}の{見込|みこ}みは{立|た}っておりません。お{急|いそ}ぎのお{客様|きゃくさま}は、{係員|かかりいん}の{案内|あんない}に{沿|そ}ってバスをご{利用|りよう}ください。",
      "Owing to the heavy rain, and to an inspection of the track now under way, there are delays on the inbound line. There is no estimate yet of when services will resume. Passengers who are in a hurry, please follow the staff's directions and use the buses.",
      q(
        "Why are the trains delayed?",
        "Heavy rain and a track inspection",
        [
          "An accident at the station",
          "Roadworks beside the line",
          "A shortage of drivers",
        ],
        "大雨の影響に加えて線路の点検 gives two causes, the second added on top of the first with に加えて.",
      ),
      q(
        "What should passengers in a hurry do?",
        "Take a bus, following the staff's directions",
        [
          "Wait on the platform for the next train",
          "Walk to the next station",
          "Ask for a refund at the gate",
        ],
        "係員の案内に沿ってバスをご利用ください sends hurried passengers to the buses along the route the staff show them.",
      ),
    ),
    practice:
      "Write a short detour notice: send traffic along a route with に沿って, add a second cause with に加えて, explain what cannot be done with ようがない, and finish with one ものではない rule for cyclists.",
  },
  {
    slug: "seminar-data",
    title: "Seminar presentations & reading the data",
    summary:
      "Present a finding in a university seminar: describe a trend on a chart, say where a trend turned and what surprised you, qualify what the data can show, and work out changes and shares from the numbers themselves.",
    vocabulary: words(`発表|はっぴょう|a presentation
前年比|ぜんねんひ|a comparison with the previous year
構成比|こうせいひ|a share of the total
平均|へいきん|an average
増加率|ぞうかりつ|a rate of increase
推移|すいい|a change over time
図表|ずひょう|charts and tables
質疑応答|しつぎおうとう|questions and answers`),
    grammar: [
      g(
        "〜つつある",
        "Verb stem + つつある describes a change that is under way and not yet complete: {利用者|りようしゃ}は{増|ふ}えつつある. It belongs to formal speech and writing about trends; where {増|ふ}えている can simply report a result, {増|ふ}えつつある insists that the shift is still in progress.",
        "{若|わか}い{世代|せだい}の{新聞|しんぶん}{離|ばな}れが{進|すす}みつつあります。",
        "Young people are steadily moving away from newspapers.",
      ),
      g(
        "〜を{境|さかい}に",
        "Noun + を{境|さかい}に marks the point at which a trend turns or a state changes: {値上|ねあ}げを{境|さかい}に{利用者|りようしゃ}が{減|へ}り{始|はじ}めた. It divides a chart into a before and an after, and the main clause says what changed from that point on. を{境|さかい}にして means the same, and the point can be a date, an event, or a threshold.",
        "{駐輪場|ちゅうりんじょう}が{広|ひろ}くなった{三年前|さんねんまえ}を{境|さかい}に、{自転車|じてんしゃ}の{利用者|りようしゃ}が{増|ふ}え{始|はじ}めました。",
        "Cycling began to rise from three years ago, when the bicycle park was enlarged.",
      ),
      g(
        "〜に{反|はん}して",
        "Noun + に{反|はん}して introduces a result that goes against an expectation, a forecast, or somebody's wishes: {予想|よそう}に{反|はん}して. It frames the surprise as a contrast with what was assumed, which makes it a natural way to present an unexpected finding. With a rule, the same phrase means in breach of it.",
        "{予想|よそう}に{反|はん}して、{回答者|かいとうしゃ}の{数|かず}は{減|へ}りました。",
        "Contrary to expectations, the number of respondents fell.",
      ),
      g(
        "〜{得|う}る・〜{得|え}ない",
        "Verb stem + {得|う}る says that something can happen, and 〜{得|え}ない that it cannot: {起|お}こり{得|う}る{誤差|ごさ}. It concerns logical possibility rather than a person's skill, so it describes outcomes and explanations. The dictionary form may also be read える, but the negative and the polite form always use え.",
        "{調査|ちょうさ}の{方法|ほうほう}によっては、{違|ちが}う{結果|けっか}もあり{得|え}ます。",
        "Depending on the survey method, a different result is also possible.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase for a decrease that is still in progress.",
        "減りつつある",
        ["減ったところだ", "減ったことがある", "減らずにすむ"],
        "Verb stem + つつある presents the decrease as an ongoing shift; the other phrases report a finished event, a past experience, or avoiding the decrease.",
      ),
      q(
        "Fill the gap so that 2020 is the turning point: 2020年 ___ 利用者が増え始めた。",
        "を境に",
        ["に反して", "をもとに", "に沿って"],
        "を境に marks 2020 as the dividing line on the chart: the rise in users begins from that point on.",
      ),
      q(
        "What does 予想に反して signal?",
        "The result went against the forecast",
        [
          "The result confirmed the forecast",
          "The forecast was withdrawn",
          "The result has not come in yet",
        ],
        "に反して introduces an outcome that contradicts what was expected before the figures came in.",
      ),
      q(
        "Which says an error is possible but not certain?",
        "誤差もあり得る",
        ["誤差もあり得ない", "誤差があるに違いない", "誤差があったはずだ"],
        "Verb stem + 得る states a possibility; 得ない rules it out, and に違いない or はずだ would claim far more certainty.",
      ),
    ],
    reading: p(
      "Presenting a survey result",
      "それでは、{調査|ちょうさ}の{結果|けっか}をご{報告|ほうこく}します。こちらの{図表|ずひょう}は、{学生|がくせい}の{通学|つうがく}{手段|しゅだん}の{推移|すいい}を{示|しめ}したものです。{自転車|じてんしゃ}の{利用|りよう}は{駐輪場|ちゅうりんじょう}が{広|ひろ}くなった{三年前|さんねんまえ}を{境|さかい}に{増|ふ}えつつあり、{全体|ぜんたい}に{占|し}める{割合|わりあい}は{二割|にわり}から{三割|さんわり}になりました。{一方|いっぽう}、{運賃|うんちん}が{上|あ}がったバスは、{予想|よそう}に{反|はん}して{利用者|りようしゃ}が{減|へ}っていません。ただし、{回答者|かいとうしゃ}は{二百人|にひゃくにん}ほどで、{学部|がくぶ}にも{偏|かたよ}りがあるため、{違|ちが}う{結果|けっか}もあり{得|え}ます。{次|つぎ}の{調査|ちょうさ}では、{対象|たいしょう}を{広|ひろ}げる{予定|よてい}です。",
      "Now I will report the results of the survey. This chart shows how the ways students get to campus have changed over time. Cycling has been rising ever since the bicycle park was enlarged three years ago, and its share of the total has grown from 20 per cent to 30 per cent. Meanwhile, contrary to expectations, the bus has not lost riders even though its fares went up. However, there were only about 200 respondents and they are unevenly spread across faculties, so a different result is possible. In the next survey we plan to widen the group we study.",
      q(
        "What is the main change the chart shows?",
        "Cycling has risen since the bicycle park was enlarged",
        [
          "Bus use has fallen sharply",
          "Fewer students now travel to campus",
          "Fares have made cycling more expensive",
        ],
        "駐輪場が広くなった三年前を境に増えつつあり names the turning point and the rise that has followed it.",
      ),
      q(
        "Why does the presenter say a different result is possible?",
        "The sample is small and uneven across faculties",
        [
          "The survey questions were changed",
          "Bus fares have gone down again",
          "The figures are three years old",
        ],
        "回答者は二百人ほどで、学部にも偏りがある gives the reasons for caution that lead to 違う結果もあり得ます.",
      ),
    ),
    listening: p(
      "A question from the floor",
      "{質問|しつもん}してもよろしいでしょうか。{自転車|じてんしゃ}が{増|ふ}えつつあるとのことですが、{雨|あめ}の{日|ひ}も{同|おな}じ{傾向|けいこう}でしょうか。ありがとうございます。{雨|あめ}の{日|ひ}のデータはまだ{少|すく}ないので、{今|いま}の{段階|だんかい}では{何|なん}とも{言|い}えません。{次回|じかい}の{調査|ちょうさ}で{確|たし}かめます。",
      "May I ask a question? You said cycling is on the rise, but is the trend the same on rainy days? Thank you. There is still little data for rainy days, so at this stage I cannot say either way. I will check it in the next survey.",
      q(
        "What does the questioner want to know?",
        "Whether the trend holds on rainy days",
        [
          "How many students were asked",
          "Why the bus fares went up",
          "When the next survey will start",
        ],
        "雨の日も同じ傾向でしょうか asks whether the rise in cycling also holds in wet weather.",
      ),
      q(
        "How does the presenter answer?",
        "There is not yet enough data to say",
        [
          "The trend is the same in the rain",
          "Cycling falls sharply in the rain",
          "The question is outside the study",
        ],
        "雨の日のデータはまだ少ない and 今の段階では何とも言えません decline to claim anything until the next survey.",
      ),
    ),
    practice:
      "Present one chart in four sentences: a trend with つつある, the point where it turned with を境に, a surprise with に反して, and a caution about the data with あり得る.",
    problems: problemSet(
      "Seminar statistics: change, shares & averages",
      "Read each figure the way a seminar handout states it. 前年比 and 前年に比べて compare with last year, 全体の何%を占める asks for a share of the whole, 平均 means add up and divide, and ポイント measures the gap between two percentages.",
      words(`合計|ごうけい|a total
差|さ|a difference
割合を占める|わりあいをしめる|to make up a share of
増|ぞう|an increase on a figure
上昇|じょうしょう|a rise`),
      {
        text: "あるゼミの{参加者|さんかしゃ}は、{去年|きょねん}が40{人|にん}、{今年|ことし}が50{人|にん}でした。{参加者|さんかしゃ}は{前年|ぜんねん}に{比|くら}べて{何|なん}%{増|ふ}えましたか。",
        translation:
          "A seminar had 40 participants last year and 50 this year. By what percentage did the number of participants rise compared with the previous year?",
        steps: [
          "Find the difference (差) first: 50 − 40 = 10 people.",
          "前年に比べて makes last year's 40 the base, not this year's 50.",
          "Divide the difference by the base: 10 ÷ 40 = 0.25, so participants rose by 25%.",
        ],
      },
      [
        wordProblem(
          "{昨年度|さくねんど}の{図書館|としょかん}の{利用者|りようしゃ}は8,000{人|にん}でした。{今年度|こんねんど}の{利用者|りようしゃ}は{前年比|ぜんねんひ}15%{増|ぞう}です。{今年度|こんねんど}の{利用者|りようしゃ}は{何人|なんにん}ですか。",
          "Last year the library had 8,000 users. This year the number of users is up 15% on the previous year. How many users were there this year?",
          "9,200人",
          ["1,200人", "6,800人", "8,015人"],
          "前年比15%増 means 15% more than last year's 8,000: 8,000 × 0.15 = 1,200, and 8,000 + 1,200 = 9,200人. 1,200 is only the increase.",
        ),
        wordProblem(
          "アンケートに{答|こた}えた{学生|がくせい}は{全部|ぜんぶ}で250{人|にん}で、そのうち50{人|にん}が{自転車|じてんしゃ}で{通学|つうがく}しています。{自転車|じてんしゃ}で{通学|つうがく}する{学生|がくせい}は、{回答者|かいとうしゃ}{全体|ぜんたい}の{何|なん}%を{占|し}めていますか。",
          "250 students answered the questionnaire, and 50 of them cycle to campus. What percentage of all respondents do the students who cycle make up?",
          "20%",
          ["25%", "5%", "50%"],
          "全体の何%を占める asks for a share of the whole 250: 50 ÷ 250 = 0.2, so 20%. Dividing by the 200 who do not cycle (25%) uses the wrong total.",
        ),
        wordProblem(
          "{次|つぎ}の{表|ひょう}は、4つのゼミの{発表|はっぴょう}{時間|じかん}をまとめたものです。Aゼミ18{分|ぷん}、Bゼミ22{分|ふん}、Cゼミ25{分|ふん}、Dゼミ15{分|ふん}。{発表|はっぴょう}{時間|じかん}の{平均|へいきん}は{何分|なんぷん}ですか。",
          "The table below sums up the presentation times of four seminars: seminar A 18 minutes, B 22 minutes, C 25 minutes and D 15 minutes. What is the average presentation time?",
          "20分",
          ["80分", "16分", "25分"],
          "平均 means add up the times and divide by how many there are: 18 + 22 + 25 + 15 = 80 (合計), and 80 ÷ 4 = 20分. 80 is only the total.",
        ),
        wordProblem(
          "オンライン{授業|じゅぎょう}を{選|えら}んだ{学生|がくせい}の{割合|わりあい}は、{去年|きょねん}が20%、{今年|ことし}が30%でした。この{割合|わりあい}は{何|なん}ポイント{上昇|じょうしょう}しましたか。",
          "The share of students choosing online classes was 20% last year and 30% this year. By how many percentage points did this share rise?",
          "10ポイント",
          ["50ポイント", "1.5ポイント", "30ポイント"],
          "ポイント measures the gap between two percentages: 30 − 20 = 10ポイント. The relative rise, 10 ÷ 20 = 50%, is a different figure, and 30 is simply this year's share.",
        ),
      ],
    ),
  },
  {
    slug: "budget-meeting",
    title: "Budgets, quotations & the sales meeting",
    summary:
      "Take part in a sales meeting: compare two quotations on more than price, report figures that fell short of the target, take a budget cut as the moment to change how money is spent, and set a goal for the next half.",
    vocabulary: words(`予算|よさん|a budget
見積もり|みつもり|a quotation
売上|うりあげ|sales
経費|けいひ|expenses
利益|りえき|a profit
取引先|とりひきさき|a client company
削減|さくげん|a cut
赤字|あかじ|a loss; being in the red`),
    grammar: [
      g(
        "〜はもちろん",
        "Noun + はもちろん treats the first item as too obvious to argue about, then adds the one you want noticed: {価格|かかく}はもちろん、{納期|のうき}も{大切|たいせつ}だ. The added item normally takes も. はもとより means the same thing and sounds more formal and written.",
        "{価格|かかく}はもちろん、アフターサービスも{比|くら}べる{必要|ひつよう}があります。",
        "We need to compare the after-sales service as well as, of course, the price.",
      ),
      g(
        "〜に{向|む}けて",
        "Noun + に{向|む}けて points an effort at a goal or a date that lies ahead: {目標|もくひょう}{達成|たっせい}に{向|む}けて. Before a noun it becomes に{向|む}けた, as in {発売|はつばい}に{向|む}けた{準備|じゅんび}. It describes the direction the work is heading, and is common in plans, reports, and speeches.",
        "{来月|らいげつ}の{発売|はつばい}に{向|む}けて、{準備|じゅんび}を{進|すす}めています。",
        "We are pressing ahead with preparations for next month's launch.",
      ),
      g(
        "〜を{機|き}に",
        "Noun + を{機|き}に marks an event taken as the moment to start or change something: {移転|いてん}を{機|き}に{業務|ぎょうむ}を{見直|みなお}す. It implies a deliberate decision prompted by the occasion. をきっかけに is close in meaning but more everyday, and is used even for changes nobody planned.",
        "{新年度|しんねんど}を{機|き}に、{経費|けいひ}の{使|つか}い{方|かた}を{見直|みなお}します。",
        "We are taking the new financial year as the moment to review how we spend.",
      ),
      g(
        "〜ことだ",
        "Dictionary or ない form + ことだ gives advice as the one thing that matters: {早|はや}く{寝|ね}ることだ. It speaks from experience or seniority, so it is natural from a manager to a junior colleague but sounds presumptuous addressed to a superior. In polite speech it becomes ことです.",
        "{予算|よさん}を{守|まも}りたいなら、まず{細|こま}かい{経費|けいひ}を{見直|みなお}すことだ。",
        "If you want to stay within budget, the first thing to do is review the small expenses.",
      ),
    ],
    grammarChecks: [
      q(
        "Choose the phrase that treats the price as obvious: 価格 ___、納期も確認してください。",
        "はもちろん",
        ["に向けて", "を機に", "どころか"],
        "はもちろん takes the price as given and adds the delivery date with も.",
      ),
      q(
        "What does 発売に向けた準備 describe?",
        "Preparation aimed at the launch",
        [
          "Preparation cancelled by the launch",
          "Preparation that followed the launch",
          "Preparation the launch made unnecessary",
        ],
        "に向けた points the preparation at a launch that is still ahead.",
      ),
      q(
        "Which marks an occasion chosen for making a change?",
        "移転を機に",
        ["移転に向けて", "移転はもちろん", "移転にかかわらず"],
        "を機に presents the move as the moment chosen to start doing things differently; に向けて only looks ahead to it.",
      ),
      q(
        "Who would naturally say まず経費を見直すことだ?",
        "A manager advising a junior colleague",
        [
          "A new employee addressing the company president",
          "A shop assistant greeting a customer",
          "A newsreader reporting the figures",
        ],
        "ことだ gives advice from experience or seniority, so it suits a manager speaking to a junior.",
      ),
    ],
    reading: p(
      "Choosing between two quotations",
      "{来年|らいねん}{三月|さんがつ}の{展示会|てんじかい}に{向|む}けて、{二社|にしゃ}から{見積|みつ}もりを{取|と}りました。A{社|しゃ}はB{社|しゃ}より{二割|にわり}ほど{安|やす}いのですが、{会場|かいじょう}の{設営|せつえい}{費用|ひよう}が{含|ふく}まれていません。{価格|かかく}はもちろん、{何|なに}が{含|ふく}まれているかも{比|くら}べる{必要|ひつよう}があります。また、{今期|こんき}は{売上|うりあげ}が{目標|もくひょう}に{届|とど}かず、{部|ぶ}の{予算|よさん}も{削減|さくげん}されました。これを{機|き}に、{細|こま}かい{経費|けいひ}も{見直|みなお}したいと{思|おも}います。{赤字|あかじ}を{出|だ}さないためには、まず{無駄|むだ}な{支出|ししゅつ}を{減|へ}らすことです。{来週|らいしゅう}の{会議|かいぎ}までに、{各自|かくじ}の{意見|いけん}をまとめておいてください。",
      "Ahead of the trade fair next March, we obtained quotations from two companies. Company A is about 20 per cent cheaper than Company B, but its price does not include the cost of setting up at the venue. We need to compare not only the price, of course, but also what is included. In addition, this term our sales fell short of the target and the department's budget has been cut. I would like to take this as the moment to review even small expenses. To avoid making a loss, the first thing to do is to cut wasteful spending. Please each put your views in order before next week's meeting.",
      q(
        "Why can the two quotations not be compared on price alone?",
        "Company A's price leaves out the set-up cost",
        [
          "Company B has not sent its figures",
          "The date of the trade fair has changed",
          "Both companies charge the same amount",
        ],
        "設営費用が含まれていません shows that A's lower figure covers less, which is why the writer adds 何が含まれているかも比べる.",
      ),
      q(
        "What does the writer want to review, prompted by the budget cut?",
        "Even small everyday expenses",
        [
          "The sales target for next term",
          "The date of the trade fair",
          "The number of staff in the department",
        ],
        "これを機に、細かい経費も見直したい takes the cut as the occasion for reviewing small expenses.",
      ),
    ),
    listening: p(
      "Plans for the second half",
      "{上半期|かみはんき}の{売上|うりあげ}は、{目標|もくひょう}の{九割|きゅうわり}にとどまりました。{下半期|しもはんき}は{新商品|しんしょうひん}の{発売|はつばい}に{向|む}けて、{取引先|とりひきさき}への{訪問|ほうもん}を{増|ふ}やします。ただし{経費|けいひ}は{増|ふ}やさないよう、{遠方|えんぽう}の{取引先|とりひきさき}とはオンラインで{打|う}ち{合|あ}わせをします。",
      "First-half sales stopped at 90 per cent of the target. In the second half, ahead of the new product's launch, we will visit clients more often. To avoid increasing expenses, however, we will hold meetings online with clients who are far away.",
      q(
        "What is the plan for the second half?",
        "More client visits ahead of the new launch",
        [
          "Cancelling the new product",
          "Dropping some of the clients",
          "Raising the sales target",
        ],
        "新商品の発売に向けて、取引先への訪問を増やします states the plan and what it is aimed at.",
      ),
      q(
        "How will they keep expenses down?",
        "By meeting distant clients online",
        [
          "By visiting only nearby clients",
          "By postponing the launch",
          "By reducing the sales staff",
        ],
        "遠方の取引先とはオンラインで打ち合わせをします keeps the travel costs of the extra contact down.",
      ),
    ),
    practice:
      "Compare two quotations in a short e-mail: use はもちろん for the obvious point, に向けて for the goal, を機に for the occasion of a change, and give one piece of advice with ことだ.",
  },
  {
    slug: "client-visit",
    title: "Visiting a client's office",
    summary:
      "Handle a business visit from start to finish: announce yourself at reception, exchange business cards, present what you changed at the client's request, commit to the next step in humble speech, and follow up the same day.",
    vocabulary: words(`名刺|めいし|a business card
応接室|おうせつしつ|a reception room
手土産|てみやげ|a gift brought on a visit
担当者|たんとうしゃ|the person in charge
打ち合わせ|うちあわせ|a business meeting
提案書|ていあんしょ|a written proposal
御社|おんしゃ|your company (in speech)
弊社|へいしゃ|our company (humble)`),
    grammar: [
      g(
        "〜がてら",
        "Noun or verb stem + がてら combines two purposes in one outing: ご{挨拶|あいさつ}がてら{寄|よ}る means dropping by partly to say hello. The first part is the occasion, and the main verb is usually a movement such as {行|い}く, {来|く}る, or {寄|よ}る. It sounds conversational, so a formal letter uses 〜かたがた instead.",
        "{近|ちか}くまで{参|まい}りましたので、ご{挨拶|あいさつ}がてらお{寄|よ}りしました。",
        "I was in the area, so I dropped by, partly to say hello.",
      ),
      g(
        "〜にこたえて",
        "Noun + にこたえて describes acting in response to a request, an expectation, or public opinion: ご{要望|ようぼう}にこたえて{改良|かいりょう}しました. It is written in kana or as {応|こた}えて, and it presents the action as meeting what the other side asked for, which makes it useful when presenting a proposal to a client.",
        "{御社|おんしゃ}のご{要望|ようぼう}にこたえて、{納期|のうき}を{一週間|いっしゅうかん}{早|はや}めました。",
        "In response to your company's request, we brought the delivery date forward by a week.",
      ),
      g(
        "〜てまいります",
        "まいる is the humble form of {行|い}く and {来|く}る, and verb て-form + まいります humbly states how your side will carry on from now: {改善|かいぜん}してまいります. It is the standard way to close a business commitment, and it speaks only of your own side's efforts, never of what the client will do.",
        "{今後|こんご}とも、{品質|ひんしつ}の{向上|こうじょう}に{努|つと}めてまいります。",
        "We will continue to strive to improve quality.",
      ),
      g(
        "〜をこめて",
        "Noun + をこめて says what feeling is put into an action or a thing: {感謝|かんしゃ}の{気持|きも}ちをこめて. It often closes a thank-you, and before a noun it becomes をこめた, as in {心|こころ}をこめた{手紙|てがみ}. It is written in kana or as {込|こ}めて.",
        "{感謝|かんしゃ}の{気持|きも}ちをこめて、お{礼|れい}のメールをお{送|おく}りしました。",
        "I sent a thank-you e-mail full of gratitude.",
      ),
    ],
    grammarChecks: [
      q(
        "What does ご挨拶がてら寄りました mean?",
        "I dropped by, partly to say hello",
        [
          "I dropped by instead of saying hello",
          "I said hello without dropping by",
          "I dropped by only to deliver a document",
        ],
        "がてら joins two purposes to one outing: the visit was also a chance to say hello.",
      ),
      q(
        "Choose the phrase meaning 'in response to': お客様の声 ___、デザインを変更しました。",
        "にこたえて",
        ["がてら", "をこめて", "に先立って"],
        "にこたえて presents the design change as meeting what customers asked for.",
      ),
      q(
        "Which is a humble commitment about your own side's efforts?",
        "改善してまいります",
        [
          "改善していらっしゃいます",
          "改善してくださいます",
          "改善してもらいます",
        ],
        "てまいります humbly states how your side will carry on; the others honour or describe someone else's actions.",
      ),
      q(
        "What does 感謝の気持ちをこめて add to a message?",
        "That it is written with gratitude",
        [
          "That it replaces a thank-you",
          "That no thanks are needed",
          "That thanks will follow later",
        ],
        "をこめて names the feeling put into the action: the message carries the writer's gratitude.",
      ),
    ],
    reading: p(
      "Before your first client visit",
      "{取引先|とりひきさき}を{訪問|ほうもん}するときは、{約束|やくそく}の{五分前|ごふんまえ}に{受付|うけつけ}に{着|つ}くようにしましょう。{受付|うけつけ}では{会社名|かいしゃめい}と{名前|なまえ}、{担当者|たんとうしゃ}の{名前|なまえ}をはっきり{伝|つた}えます。{応接室|おうせつしつ}では{入口|いりぐち}に{近|ちか}い{席|せき}に{座|すわ}り、{担当者|たんとうしゃ}が{入|はい}ってきたら{立|た}ち{上|あ}がって{挨拶|あいさつ}します。{名刺|めいし}は{相手|あいて}が{読|よ}める{向|む}きにして、{両手|りょうて}で{渡|わた}します。{話|はな}すときは{相手|あいて}の{会社|かいしゃ}を「{御社|おんしゃ}」、{自分|じぶん}の{会社|かいしゃ}を「{弊社|へいしゃ}」と{呼|よ}びますが、メールなどの{書|か}き{言葉|ことば}では「{貴社|きしゃ}」を{使|つか}います。{訪問|ほうもん}の{後|あと}は、その{日|ひ}のうちに{感謝|かんしゃ}の{気持|きも}ちをこめてお{礼|れい}のメールを{送|おく}りましょう。",
      "When you visit a client, aim to arrive at reception five minutes before the appointment. At reception, clearly give your company name, your own name, and the name of the person you are meeting. In the reception room, sit in the seat nearest the door, and stand up to greet the person in charge when they come in. Hand over your business card with both hands, turned so that the other person can read it. When speaking, you call the other company 御社 and your own 弊社, but in written language such as e-mail you use 貴社. After the visit, send a thank-you e-mail, full of gratitude, on the same day.",
      q(
        "How does the guide say you refer to the client's company?",
        "御社 when speaking, 貴社 in writing",
        [
          "御社 in both speech and writing",
          "弊社 when speaking, 御社 in writing",
          "貴社 when speaking, 御社 in writing",
        ],
        "話すときは「御社」 and 書き言葉では「貴社」 separate spoken and written usage; 弊社 is always the speaker's own company.",
      ),
      q(
        "When should the thank-you e-mail be sent?",
        "On the day of the visit",
        [
          "Before the visit",
          "Within a week of the visit",
          "Only if a deal is agreed",
        ],
        "その日のうちに…お礼のメールを送りましょう asks for the e-mail before the day of the visit is over.",
      ),
    ),
    listening: p(
      "At the reception desk",
      "いらっしゃいませ。{恐|おそ}れ{入|い}ります。{東西|とうざい}{電機|でんき}の{佐藤|さとう}と{申|もう}します。{営業部|えいぎょうぶ}の{田中様|たなかさま}と{二時|にじ}にお{約束|やくそく}をいただいております。{佐藤様|さとうさま}ですね。お{待|ま}ちしておりました。ただ{今|いま}{田中|たなか}を{呼|よ}んでまいりますので、こちらでお{待|ま}ちください。",
      "Welcome. Excuse me. My name is Sato, from Tozai Electric. I have a two o'clock appointment with Mr Tanaka of the sales department. Mr Sato, yes. We have been expecting you. I will go and call Tanaka now, so please wait here.",
      q(
        "What is the visitor doing?",
        "Announcing an appointment at reception",
        [
          "Cancelling the appointment",
          "Asking the way to the station",
          "Delivering a parcel",
        ],
        "田中様と二時にお約束をいただいております announces the visitor and the appointment to the receptionist.",
      ),
      q(
        "Why does the receptionist say 田中 without 様?",
        "Tanaka works for the receptionist's own company",
        [
          "Tanaka is younger than the visitor",
          "The receptionist forgot the honorific",
          "Tanaka is out of the office",
        ],
        "Speaking to an outsider, staff refer to their own colleagues without 様, even senior ones; 呼んでまいります is humble for the same reason.",
      ),
    ),
    practice:
      "Role-play a visit: announce yourself at reception, give your card, explain one change made にこたえて the client's request, close with てまいります, and write a thank-you line with をこめて.",
  },
  {
    slug: "n2-integration",
    title: "N2 integration: proposals & outcomes",
    summary:
      "Follow a qualified argument and select a practical action after weighing competing requirements.",
    vocabulary: words(`合意|ごうい|agreement
見通し|みとおし|outlook; prospect
過程|かてい|process
成果|せいか|result; achievement
代替|だいたい|substitution; alternative
妥当|だとう|reasonable; appropriate
継続|けいぞく|continuation
実現|じつげん|realization`),
    grammar: [
      g(
        "〜ものなら",
        "Potential form + ものなら often introduces a difficult or unlikely wish: if only it were possible. Volitional + ものなら can warn of a severe consequence if one tries an action; distinguish the preceding form.",
        "やり直せるものなら、最初から確認したいです。",
        "If I could do it over, I would check from the beginning.",
      ),
      g(
        "〜にしても",
        "This can concede an assumed case or frame either alternative in AにしてもBにしても. It often leads to a judgment that holds despite the premise.",
        "延期するにしても、理由を伝える必要があります。",
        "Even if we postpone, we need to explain why.",
      ),
      g(
        "〜ことなく",
        "Dictionary form + ことなく means without doing, usually in formal writing. It connects the absence of one action with another action or result.",
        "誰も取り残すことなく、情報を届けたいです。",
        "We want to provide information without leaving anyone behind.",
      ),
      g(
        "〜末に",
        "た-form or noun + の末に presents an outcome after a lengthy or difficult process. It differs from a simple after by highlighting the effort or deliberation.",
        "話し合った末に、計画を変更しました。",
        "After extensive discussion, we changed the plan.",
      ),
    ],
    grammarChecks: [
      q(
        "What does 戻れるものなら、学生時代に戻りたい express?",
        "A wish the speaker thinks is unlikely",
        [
          "A plan that is already decided",
          "A warning of a bad result",
          "A reason for returning",
        ],
        "Potential form + ものなら introduces a hard-to-realise wish: if only it were possible to go back. Volitional + ものなら would warn of consequences.",
      ),
      q(
        "Choose the concession: 参加しない ___、連絡だけはしてください。",
        "にしても",
        ["末に", "ことなく", "ものなら"],
        "にしても concedes the assumed case, not attending, and the judgment that follows still holds: at least get in touch.",
      ),
      q(
        "What does 確認することなく送った mean?",
        "It was sent without being checked",
        [
          "It was checked before sending",
          "It was never sent",
          "Checking was legally forbidden",
        ],
        "ことなく expresses the omitted action; it does not establish a rule prohibiting checks.",
      ),
      q(
        "Choose a result after deliberation: 検討の ___、別の方法を採用した。",
        "末に",
        ["最中で", "うちへ", "限りも"],
        "の末に marks the eventual result of a process of consideration.",
      ),
    ],
    reading: p(
      "A trial before a permanent change",
      "自治会では、集まりをすべてオンラインにする案が出た。遠方からも参加できる反面、機器の操作に不安がある人が参加しにくくなる恐れがあった。どちらか一方を選ぶのではなく、三か月だけ会場とオンラインを併用し、参加状況を確かめることになった。ただし、人数が増えたかだけで判断せず、これまで参加していた人が来られなくなっていないかも調べる。便利さを実現するには、平均的な成果に隠れた不利益まで見直す必要があるからだ。",
      "A neighborhood association proposed moving all gatherings online. This helps distant participants but may exclude people uneasy with equipment. They chose a three-month hybrid trial. Evaluation will examine not just higher attendance but whether previous participants become unable to attend. Achieving convenience requires noticing disadvantages hidden by average results.",
      q(
        "What makes the proposed evaluation balanced?",
        "It checks both participation gains and people who may be excluded",
        [
          "It counts only the new online participants",
          "It assumes a higher total benefits everyone",
          "It refuses to review the trial",
        ],
        "The evaluation explicitly looks for loss of access among existing participants as well as overall gains.",
      ),
      q(
        "What was the concern about moving fully online?",
        "People unsure of the equipment might find it hard to take part",
        [
          "Distant members could not join",
          "The hall would have to close",
          "Costs would rise sharply",
        ],
        "機器の操作に不安がある人が参加しにくくなる恐れがあった: the risk was excluding members unsure of the devices.",
      ),
    ),
    listening: p(
      "Choosing what happens next",
      "新しい案は費用の面では有利ですが、準備期間が足りません。全面的に切り替えるのではなく、一部で試すのはどうでしょう。そうですね。試験結果を確認した上で、来期に広げるかどうか決めましょう。",
      "The new proposal has a cost advantage, but preparation time is insufficient. How about trying it in one area instead of switching completely? Agreed. Let's review the trial and decide whether to expand next term.",
      q(
        "What is agreed now?",
        "A limited trial before deciding on wider adoption",
        [
          "Immediate complete replacement",
          "Permanent cancellation",
          "Expansion without checking results",
        ],
        "Both speakers accept a staged trial, with expansion dependent on later results.",
      ),
      q(
        "What is the drawback of the new proposal?",
        "There is not enough time to prepare",
        ["It costs more", "Nobody supports it", "It cannot be tested"],
        "費用の面では有利ですが、準備期間が足りません: the cost advantage comes with too little preparation time.",
      ),
    ),
    practice:
      "Finish all N2 reviews, then summarize an argument with its claim, concession, evidence, and proposed action. Practice official sample formats separately.",
  },
];
