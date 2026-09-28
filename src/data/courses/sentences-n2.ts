import { sentences as s, type SentencePractice } from "./types";

export const n2Sentences: Record<string, SentencePractice> = {
  "professional-planning": s(
    "I can make a clear professional request and specify what must happen first.",
    "Coordinating a meeting or application",
    "formal",
    [
      [
        "内容をご確認の上、ご返信いただけますでしょうか。",
        "Could you reply after reviewing the contents?",
      ],
      [
        "お申し込みに際して、必要書類をご確認ください。",
        "Please check the required documents when applying.",
      ],
      [
        "日程を調整した上で、改めてご連絡いたします。",
        "I will contact you again after coordinating the schedule.",
      ],
      [
        "開始にあたって、注意点を共有させてください。",
        "Before we begin, please let me share the points to note.",
      ],
      [
        "お手数ですが、変更箇所をご確認いただけますか。",
        "Sorry for the trouble, but could you check the changes?",
      ],
      [
        "社外の方が参加される場合は、事前にお知らせください。",
        "Please let us know in advance if people from outside the company will attend.",
      ],
    ],
  ),
  "causal-arguments": s(
    "I can explain the cause of a problem and take responsibility for a commitment.",
    "Reporting a delay or error",
    "polite",
    [
      [
        "急ぐあまり、確認が一つ抜けてしまいました。",
        "In my rush, I missed one check.",
      ],
      [
        "こちらの説明不足が原因だと思われます。",
        "Our insufficient explanation appears to be the cause.",
      ],
      [
        "引き受けた以上、最後まで対応します。",
        "Having accepted the task, I will see it through.",
      ],
      [
        "同じことが起きないよう、手順を見直します。",
        "I will revise the procedure to prevent recurrence.",
      ],
      [
        "現時点では、原因を一つに絞ることはできません。",
        "At this point we cannot narrow it down to one cause.",
      ],
      [
        "分かったことと未確認の点を分けてお伝えします。",
        "I will distinguish what we know from what remains unverified.",
      ],
    ],
  ),
  "concession-nuance": s(
    "I can acknowledge an improvement while raising a remaining concern.",
    "Giving constructive feedback",
    "polite",
    [
      [
        "使いやすくなったものの、初めの設定はまだ複雑ですね。",
        "Although it is easier to use, initial setup is still complex.",
      ],
      [
        "無料とはいえ、予約は必要だそうです。",
        "Even though it is free, I hear a reservation is required.",
      ],
      [
        "準備したにもかかわらず、当日は慌ててしまいました。",
        "Despite preparing, I became flustered on the day.",
      ],
      [
        "人数は増えましたが、それだけで成功とは言えません。",
        "Numbers increased, but that alone does not establish success.",
      ],
      [
        "その点は評価できます。ただ、別の課題も残っています。",
        "That point is positive, but another issue remains.",
      ],
      [
        "便利さを保ちながら、説明を少し加えられませんか。",
        "Could we add a little explanation while keeping the convenience?",
      ],
    ],
  ),
  "scope-eligibility": s(
    "I can check eligibility, exceptions, and the exact conditions of an offer.",
    "Asking about a class or membership benefit",
    "polite",
    [
      [
        "この割引は、会員に限って使えるのでしょうか。",
        "Is this discount available only to members?",
      ],
      [
        "経験の有無にかかわらず、申し込めますか。",
        "Can I apply regardless of whether I have experience?",
      ],
      [
        "参加費以外に、必要な料金はありますか。",
        "Are there any charges besides the participation fee?",
      ],
      [
        "雨天の場合も、予定どおり実施されますか。",
        "Will it proceed as scheduled even if it rains?",
      ],
      [
        "機材の貸し出しは、割引の対象外なんですね。",
        "So equipment rental is excluded from the discount.",
      ],
      [
        "年齢制限はありませんが、事前予約は必要です。",
        "There is no age restriction, but advance booking is required.",
      ],
    ],
  ),
  "linked-changes": s(
    "I can explain changing needs and propose a proportionate response.",
    "Adjusting a service or group activity",
    "polite",
    [
      [
        "参加者の増加に伴って、会場を変更しました。",
        "We changed the venue as participant numbers increased.",
      ],
      [
        "ご希望に応じて、時間を調整できます。",
        "We can adjust the time to suit your wishes.",
      ],
      [
        "状況に応じて、やり方を変えていきましょう。",
        "Let's adapt our approach as the situation requires.",
      ],
      [
        "説明に従って進めたのですが、途中で止まりました。",
        "I followed the instructions, but it stopped partway through.",
      ],
      [
        "費用が増える一方なので、使い方を見直したいです。",
        "Costs keep rising, so I would like to review how we use it.",
      ],
      [
        "人数だけでなく、質問の内容も調べてみませんか。",
        "Shall we look at the questions people ask as well as their numbers?",
      ],
    ],
  ),
  "difficult-judgments": s(
    "I can explain a constrained choice without promising an unsafe or unrealistic result.",
    "Negotiating a deadline",
    "polite",
    [
      [
        "このままでは間に合わないので、日程を変えざるを得ません。",
        "At this rate we will miss the deadline, so we have no choice but to reschedule.",
      ],
      [
        "確認せずにお渡しするわけにはいきません。",
        "I cannot hand it over without checking.",
      ],
      [
        "今日中にできないことはありませんが、確認の時間が足りません。",
        "It is possible today, but there is not enough time for checking.",
      ],
      [
        "急いで決めると、後で誤解を招きかねません。",
        "Rushing the decision could cause misunderstandings later.",
      ],
      [
        "別の方法で対応できないか、検討します。",
        "I will consider whether we can handle it another way.",
      ],
      [
        "難しい点も含めて、先にご説明します。",
        "I will explain the situation in advance, including the difficulties.",
      ],
    ],
  ),
  "evidence-perspective": s(
    "I can state the basis and limits of a recommendation in everyday work.",
    "Discussing survey results or reviews",
    "polite",
    [
      [
        "利用者の意見をもとに、案内を修正しました。",
        "We revised the guide based on users' comments.",
      ],
      [
        "費用の面から見ると、こちらのほうが有利です。",
        "From a cost perspective, this option is better.",
      ],
      [
        "これは一部の結果にすぎないので、まだ断定できません。",
        "These are only partial results, so we cannot conclude yet.",
      ],
      [
        "何を根拠に判断したのか、教えていただけますか。",
        "Could you tell me what the judgment was based on?",
      ],
      [
        "普段の状況と比べてから、決めたいと思います。",
        "I would like to compare it with ordinary conditions before deciding.",
      ],
      [
        "調査結果に基づいて、優先順位を変えました。",
        "We changed our priorities based on the survey findings.",
      ],
    ],
  ),
  "balanced-comparisons": s(
    "I can compare total costs and explain both advantages and drawbacks.",
    "Choosing a phone plan or online service",
    "polite",
    [
      [
        "月額は安い反面、変更のたびに手数料がかかります。",
        "The monthly fee is low, but each change incurs a charge.",
      ],
      [
        "安いだけでなく、操作も簡単です。",
        "It is not only inexpensive but also easy to use.",
      ],
      [
        "楽になるどころか、前より手間が増えました。",
        "Far from making things easier, it added work.",
      ],
      [
        "料金だけで比べると、必要な機能を見落としそうです。",
        "Comparing only prices might overlook functions we need.",
      ],
      [
        "長く使うなら、維持費も含めて考えたいです。",
        "For long-term use, I want to include maintenance costs.",
      ],
      [
        "両方の利点を生かせる方法はないでしょうか。",
        "Could there be a way to use the advantages of both?",
      ],
    ],
  ),
  "timing-sequence": s(
    "I can state when a task will happen and distinguish preparation from completion.",
    "Repair updates and work handovers",
    "polite",
    [
      [
        "準備ができ次第、こちらからご連絡します。",
        "We will contact you as soon as preparations are ready.",
      ],
      [
        "確認している最中なので、もう少しお待ちください。",
        "We are in the middle of checking, so please wait a little longer.",
      ],
      [
        "書きかけの資料は、このフォルダーにあります。",
        "The unfinished document is in this folder.",
      ],
      [
        "取り付け後に動作を確認してから、お渡しします。",
        "We will hand it over after checking operation following installation.",
      ],
      [
        "外に出たとたん、雨が強くなりました。",
        "The moment I stepped outside, the rain grew heavier.",
      ],
      [
        "再開する前に、どこまで終わったか確認しましょう。",
        "Before resuming, let's check how much has been completed.",
      ],
    ],
  ),
  "formal-notices": s(
    "I can understand a formal notice and explain the practical change to someone else.",
    "Using a public facility during a closure",
    "formal",
    [
      [
        "改修工事につき、入口を一時変更しております。",
        "The entrance is temporarily changed because of renovation work.",
      ],
      [
        "返却に関するお問い合わせは、こちらで承ります。",
        "We handle inquiries about returns here.",
      ],
      [
        "通常より一時間早く受付を終了いたします。",
        "Reception closes one hour earlier than usual.",
      ],
      [
        "ご来館に先立ち、通知をご確認ください。",
        "Please check the notice before visiting.",
      ],
      [
        "お一人につき、一枚お取りください。",
        "Please take one sheet per person.",
      ],
      [
        "詳細が決まり次第、改めてご案内いたします。",
        "We will provide another notice as soon as details are settled.",
      ],
    ],
  ),
  "integrated-reading": s(
    "I can reconcile a general rule with an additional requirement for my situation.",
    "Confirming a group booking",
    "polite",
    [
      [
        "案内では身分証だけとありますが、団体でも同じですか。",
        "The guide says ID alone; is that also true for groups?",
      ],
      [
        "団体の場合は、確認書も必要ということですね。",
        "So a group also needs the confirmation form.",
      ],
      [
        "変更の連絡がない限り、九時に集合します。",
        "We will meet at nine unless a change is announced.",
      ],
      [
        "準備と片付けの時間も、予約に含める必要があります。",
        "We need to include setup and cleanup time in the booking.",
      ],
      [
        "二つの案内で異なる点を、確認させてください。",
        "Please let me clarify the points that differ between the two notices.",
      ],
      [
        "両方を読んで初めて、必要な手続きが分かりました。",
        "Only after reading both did I understand the required procedure.",
      ],
    ],
  ),
  "everyday-negotiation": s(
    "I can raise a problem with a service, state my own side of it, and settle on terms both parties accept.",
    "At a service counter or in a support e-mail",
    "formal",
    [
      [
        "{申|もう}し{訳|わけ}ありませんが、ご{返金|へんきん}は{難|むずか}しい{状況|じょうきょう}です。",
        "I am very sorry, but a refund is difficult in this case.",
      ],
      [
        "{記録|きろく}を{確認|かくにん}した{限|かぎ}りでは、{同|おな}じ{例|れい}はございません。",
        "As far as the records I checked go, there is no similar case.",
      ],
      [
        "{弊社|へいしゃ}といたしましては、{交換|こうかん}でのご{対応|たいおう}を{考|かんが}えております。",
        "From our side, we are thinking of handling this as an exchange.",
      ],
      [
        "{今回|こんかい}は{交換|こうかん}ということでいかがでしょうか。",
        "Shall we settle on an exchange this time?",
      ],
      [
        "{現物|げんぶつ}を{拝見|はいけん}しないことには、お{返事|へんじ}ができません。",
        "Until we see the item itself, we cannot give you an answer.",
      ],
      [
        "この{対応|たいおう}でご{納得|なっとく}いただけますでしょうか。",
        "Would you be satisfied with this arrangement?",
      ],
    ],
  ),
  "workplace-exchanges": s(
    "I can report progress, flag a risk early, and decline extra work while keeping the offer open.",
    "Reporting to a manager or a colleague at work",
    "formal",
    [
      [
        "{確認|かくにん}したところ、{数字|すうじ}が{古|ふる}いままでした。",
        "When I checked, the figures were still out of date.",
      ],
      [
        "このままでは{間|ま}に{合|あ}わないのではないかと{思|おも}います。",
        "I suspect we will not make it in time as things stand.",
      ],
      [
        "{提出|ていしゅつ}を{二日|ふつか}ほど{延|の}ばしていただければ{幸|さいわ}いです。",
        "I would be grateful for a two-day extension on the submission.",
      ],
      [
        "{今週|こんしゅう}は{余裕|よゆう}がなく、{来週|らいしゅう}でしたらお{手伝|てつだ}いできます。",
        "I have no room this week, but I could help next week.",
      ],
      [
        "{残業|ざんぎょう}で{対応|たいおう}できるかと{存|ぞん}じます。",
        "I believe overtime would be enough to cover it.",
      ],
      [
        "{一度|いちど}ご{相談|そうだん}させていただけますでしょうか。",
        "Could I possibly talk it over with you once?",
      ],
    ],
  ),
  "particles-formal": s(
    "I can use the connective particles that a report, a notice, or a briefing is written with.",
    "Writing or reading a formal report",
    "formal",
    [
      [
        "この{分野|ぶんや}における{研究|けんきゅう}は{進|すす}んでいます。",
        "Research in this field is advancing.",
      ],
      [
        "{大学|だいがく}をはじめ、{多|おお}くの{機関|きかん}が{参加|さんか}しました。",
        "Many institutions took part, universities among the first.",
      ],
      [
        "{調査|ちょうさ}は{三年|さんねん}にわたって{続|つづ}けられました。",
        "The survey was continued over three years.",
      ],
      [
        "{支援|しえん}は{地元|じもと}の{機関|きかん}を{通|つう}じて{行|おこな}われます。",
        "The support is delivered through local institutions.",
      ],
      [
        "{対象|たいしょう}となる{範囲|はんい}は{年々|ねんねん}{拡大|かくだい}しています。",
        "The scope of those covered expands year by year.",
      ],
      [
        "{会議|かいぎ}において{決定|けってい}された{事項|じこう}をご{確認|かくにん}ください。",
        "Please check the matters decided at the meeting.",
      ],
    ],
  ),
  "commuting-city": s(
    "I can follow a detour, explain a delay with more than one cause, and point out a rule for cyclists politely.",
    "Commuting through a city under roadworks",
    "polite",
    [
      [
        "{矢印|やじるし}に{沿|そ}って{歩|ある}くと、{駅|えき}の{東口|ひがしぐち}に{出|で}ます。",
        "Follow the arrows and you will come out at the east exit of the station.",
      ],
      [
        "{工事|こうじ}に{加|くわ}えて{雨|あめ}も{降|ふ}っていて、バスが{遅|おく}れています。",
        "On top of the roadworks it is raining, so the buses are running late.",
      ],
      [
        "{携帯|けいたい}の{電池|でんち}が{切|き}れて、{連絡|れんらく}のしようがありませんでした。",
        "My phone battery died, so there was no way to get in touch.",
      ],
      [
        "すみません、ここは{歩道|ほどう}なので{自転車|じてんしゃ}を{押|お}して{歩|ある}いてください。",
        "Excuse me, this is a pavement, so please walk your bicycle.",
      ],
      [
        "{通行止|つうこうど}めだったので、{川沿|かわぞ}いの{道|みち}を{回|まわ}って{来|き}ました。",
        "The road was closed, so I came round by the riverside road.",
      ],
      [
        "{遅延|ちえん}{証明書|しょうめいしょ}をもらったので、{会社|かいしゃ}に{出|だ}しておきます。",
        "I got a delay certificate from the station, so I will hand it in at work.",
      ],
    ],
  ),
  "seminar-data": s(
    "I can present a trend from a chart, qualify what the data shows, and answer a question from the floor.",
    "Presenting survey results in a university seminar",
    "polite",
    [
      [
        "こちらのグラフは、{通学|つうがく}{手段|しゅだん}の{推移|すいい}を{示|しめ}しています。",
        "This graph shows how the ways of getting to campus have changed.",
      ],
      [
        "{駐輪場|ちゅうりんじょう}ができたのを{境|さかい}に、{自転車|じてんしゃ}の{利用|りよう}が{増|ふ}えつつあります。",
        "Since the bicycle park opened, cycling has been on the rise.",
      ],
      [
        "{予想|よそう}に{反|はん}して、バスの{利用者|りようしゃ}は{減|へ}っていません。",
        "Contrary to expectations, the number of bus users has not fallen.",
      ],
      [
        "{回答者|かいとうしゃ}が{少|すく}ないので、{違|ちが}う{結果|けっか}もあり{得|え}ます。",
        "There were few respondents, so a different result is possible.",
      ],
      [
        "ご{質問|しつもん}ありがとうございます。{今|いま}の{段階|だんかい}では{何|なん}とも{言|い}えません。",
        "Thank you for the question. At this stage I cannot say either way.",
      ],
      [
        "{次|つぎ}の{調査|ちょうさ}では、{対象|たいしょう}を{広|ひろ}げる{予定|よてい}です。",
        "In the next survey we plan to widen the group we study.",
      ],
    ],
  ),
  "budget-meeting": s(
    "I can compare quotations, report figures against a target, and propose savings in a sales meeting.",
    "A sales meeting on budgets and quotations",
    "formal",
    [
      [
        "{価格|かかく}はもちろん、{納期|のうき}も{比|くら}べる{必要|ひつよう}があります。",
        "We need to compare the delivery date as well as, of course, the price.",
      ],
      [
        "{今期|こんき}の{売上|うりあげ}は{目標|もくひょう}の{九割|きゅうわり}にとどまりました。",
        "Sales this term stopped at 90 per cent of the target.",
      ],
      [
        "{来月|らいげつ}の{展示会|てんじかい}に{向|む}けて、{二社|にしゃ}から{見積|みつ}もりを{取|と}りました。",
        "Ahead of next month's trade fair, we obtained quotations from two companies.",
      ],
      [
        "{予算|よさん}の{削減|さくげん}を{機|き}に、{経費|けいひ}の{使|つか}い{方|かた}を{見直|みなお}しましょう。",
        "Let's take the budget cut as the moment to review how we spend.",
      ],
      [
        "{赤字|あかじ}を{避|さ}けたいなら、まず{無駄|むだ}を{減|へ}らすことです。",
        "If you want to avoid a loss, the first thing is to cut waste.",
      ],
      [
        "お{見積|みつ}もりの{内容|ないよう}について、{一点|いってん}{確認|かくにん}させてください。",
        "Please let me check one point about the content of the quotation.",
      ],
    ],
  ),
  "client-visit": s(
    "I can announce myself at reception, exchange business cards, and follow up a visit with a polite thank-you.",
    "Visiting a client company",
    "formal",
    [
      [
        "{東西|とうざい}{電機|でんき}の{佐藤|さとう}と{申|もう}します。{二時|にじ}にお{約束|やくそく}をいただいております。",
        "My name is Sato, from Tozai Electric. I have an appointment at two.",
      ],
      [
        "{名刺|めいし}を{頂戴|ちょうだい}いたします。",
        "Thank you; I humbly accept your business card.",
      ],
      [
        "{近|ちか}くまで{参|まい}りましたので、ご{挨拶|あいさつ}がてらお{伺|うかが}いしました。",
        "I was in the area, so I called in, partly to say hello.",
      ],
      [
        "{御社|おんしゃ}のご{要望|ようぼう}にこたえて、{提案書|ていあんしょ}を{修正|しゅうせい}いたしました。",
        "We have revised the proposal in response to your company's requests.",
      ],
      [
        "{今後|こんご}もご{期待|きたい}に{沿|そ}えるよう{努|つと}めてまいります。",
        "We will keep working to live up to your expectations.",
      ],
      [
        "{本日|ほんじつ}はお{忙|いそが}しいところ、お{時間|じかん}をいただきありがとうございました。",
        "Thank you for making time for us today despite your busy schedule.",
      ],
    ],
  ),
  "n2-integration": s(
    "I can propose a trial and summarize a balanced group decision.",
    "Deciding how to introduce a new process",
    "polite",
    [
      [
        "全面的に変える前に、一部で試してみませんか。",
        "Shall we try it in one area before changing everything?",
      ],
      [
        "続けるにしても、費用を確認する必要があります。",
        "Even if we continue, we need to check the cost.",
      ],
      [
        "誰も取り残すことなく、情報を共有したいです。",
        "I want to share information without leaving anyone out.",
      ],
      [
        "話し合った末に、三か月だけ試すことになりました。",
        "After discussion, we agreed to try it for just three months.",
      ],
      [
        "人数だけでなく、参加しにくくなった人がいないかも調べます。",
        "We will check not only numbers but also whether anyone finds participation harder.",
      ],
      [
        "結果を確認した上で、継続するか判断しましょう。",
        "Let's review the results before deciding whether to continue.",
      ],
    ],
  ),
};
