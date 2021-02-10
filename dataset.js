const defaultDataset = {
  init: {
    answers: [
      { content: "悩みを聴いて欲しい", nextId: "job_offer" },
      {
        content: "ママの手料理が食べたい",
        nextId: "consultant",
      },
      { content: "ママについて知りたい", nextId: "community" },
      { content: "お付き合いしたい", nextId: "dating" },
    ],
    question: "いらっしゃい。何かようかしら？",
  },
  job_offer: {
    answers: [
      { content: "人生について", nextId: "website" },
      { content: "お金の悩み", nextId: "webapp" },
      { content: "夢が見つからない", nextId: "automation_tool" },
      { content: "その他", nextId: "other_jobs" },
    ],
    question: "悩みを言いなさい",
  },
  website: {
    answers: [
      { content: "問い合わせ", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "まあ、いきなり重い話ねえ。いいわ。まずは連絡して頂戴。",
  },
  webapp: {
    answers: [
      { content: "問い合わせ", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "元本保証の儲け話なら聞くわよ＄＄＄＄キラーン",
  },
  automation_tool: {
    answers: [
      { content: "問い合わせ", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "夢はあるわ！今すぐ連絡しなさい！",
  },
  other_jobs: {
    answers: [
      { content: "問い合わせる", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "私の何がしりたいの？ふふふ、いいわよ。とりあえず連絡しなさい",
  },
  consultant: {
    answers: [
      {
        content: "レシピ動画を見る",
        nextId:
          "https://www.youtube.com/channel/UCrHWsS4XVNBaA_jXSphykGA?view_as=subscriber",
      },
      { content: "しげじーママについて知りたい", nextId: "community" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "いいわよ。たっぷり食べさせてあげるわよお店にいらっしゃい。美味しいく食べる姿を見るのが私の好物なのよ♡♡♡♡。こられないならYouTubeを観なさい私の秘密のレシピをみせちゃってるのよ。",
  },
  community: {
    answers: [
      { content: "もっと知りたい", nextId: "community_activity" },
      {
        content: "お店に行きたい",
        nextId: "https://creativecafe.jp/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "いつも誰かの悩みを聞いているの。ふふふ、それがあたしの、生・き・が・い・なの♡♡♡。",
  },
  community_activity: {
    answers: [
      {
        content: "ファンレーターを送る",
        nextId: "contact",
      },
      {
        content: "しげじーママに会いたい",
        nextId: "https://creativecafe.jp/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "なんて嬉しいこと言ってくれるの。わかったわ私の秘密を教えてあげる♡いい？よく覚えておいてね。私の好物はハイボールとチョコバットよ。忘れないでねチョコバット。",
  },
  dating: {
    answers: [
      { content: "ランチに行く", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "なんてストレートな子なの！気に入ったわランチ行くわよ",
  },
};

export default defaultDataset;
