import {
  grammar as g,
  passage as p,
  question as q,
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
        "Choose the concession: 参加費は無料だ。___、事前の申し込みは必要だ。",
        "とはいえ",
        ["したがって", "なぜなら", "例えば"],
        "The second sentence limits the possible inference that free means no application is needed.",
      ),
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
        "What does 年齢を問わず mean?",
        "Regardless of age",
        [
          "Only for adults",
          "After asking someone's age",
          "Except for every age group",
        ],
        "を問わず removes age as a selection criterion, but says nothing about other conditions.",
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
        "Choose adaptation to need: 利用者の希望 ___、時間を調整します。",
        "に応じて",
        ["にもかかわらず", "に限らずの", "をめぐると"],
        "The schedule is adjusted to the users' wishes, a responsive action.",
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
    ),
    practice:
      "Describe a trend with に伴って and a deliberate response with に応じて. Explain why the response addresses the cause.",
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
        "Choose the form for planned follow-up: 結果が分かり ___、お知らせします。",
        "次第",
        ["とたん", "最中", "かけの"],
        "A verb stem + 次第 suits a planned notification as soon as information becomes available.",
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
        "Choose the disputed issue: 建設計画 ___、意見が分かれています。",
        "をめぐって",
        ["に先立つの", "かけての", "につれての"],
        "The construction plan is the issue around which opinions differ.",
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
    ),
    practice:
      "Compare two short notices. List shared rules, differences, and the action required for a specific person's circumstances.",
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
        "Choose a result after deliberation: 検討の ___、別の方法を採用した。",
        "末に",
        ["最中で", "うちへ", "限りも"],
        "の末に marks the eventual result of a process of consideration.",
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
    ),
    practice:
      "Finish all N2 reviews, then summarize an argument with its claim, concession, evidence, and proposed action. Practice official sample formats separately.",
  },
];
