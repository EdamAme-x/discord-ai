export type Wadai = {
  text: string;
  priority: number;
};

export type Job = {
  title: string;
  priority: number;
};

export type MiniWadai = {
  text: string;
  priority: number;
};

export class GenWadai {
  private generateRandomNumber(): number {
    return Math.floor(Math.random() * 100);
  }

  private generateRandomElement<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public generateWadai(): string {
    const date = new Date().toDateString();
    let result = "";

    result += this.generateRandomElement(this.base)
      .text.replaceAll(
        "{{random_number}}",
        this.generateRandomNumber().toString()
      )
      .replaceAll("{{date}}", date)
      .replaceAll("{{job}}", this.generateJob())
      .replaceAll("{{mini}}", this.generateMiniWadai())
      .replaceAll("{{assets}}", this.generateAssets());

    return result;
  }

  public generateMiniWadai(): string {
    const date = new Date().toDateString();
    const miniWadai = this.generateRandomElement(this.mini);

    return miniWadai.text
      .replaceAll("{{random_number}}", this.generateRandomNumber().toString())
      .replaceAll("{{date}}", date);
  }

  public generateJob(): string {
    const date = new Date().toDateString();
    const job = this.generateRandomElement(this.jobs);

    return job.title
      .replaceAll("{{random_number}}", this.generateRandomNumber().toString())
      .replaceAll("{{date}}", date);
  }

  public generateAssets(): string {
    const date = new Date().toDateString();
    const asset = this.generateRandomElement(this.assets);

    return asset.replaceAll("{{date}}", date).replaceAll("{{random_number}}", this.generateRandomNumber().toString());
  }

  assets: string[] = [
    "スイーツ",
    "ケーキ",
    "ハンバーガー",
    "ピザ",
    "ファストフード店",
    "ピアス",
    "挨拶",
    "感謝",
    "朝",
    "夜",
    "謝罪",
    "謝罪",
    "お願い",
    "否定",
    "肯定",
    "祝福",
    "ごはん",
    "水",
    "コーヒー",
    "テレビ",
    "電話",
    "パソコン",
    "車",
    "自転車",
    "歩行",
    "ランニング",
    "泳ぎ",
    "読書",
    "書き物",
    "聞き取り",
    "話すこと",
    "笑顔",
    "涙",
    "眠り",
    "夢",
    "仕事",
    "勉強",
    "学校",
    "家族",
    "友達",
    "恋愛",
    "音楽",
    "映画",
    "本",
    "花",
    "空",
    "海",
    "山",
    "公園",
    "旅行",
    "買い物",
    "料理",
    "運動",
    "休息"
];


  base: Wadai[] = [
    {
      text: "おはよw ({{job}})",
      priority: 1,
    },
    {
      text: "おはよwww {{mini}}",
      priority: 1,
    },
    {
      text: "実は明日自殺する ;; {{mini}}",
      priority: 0.3,
    },
    {
      text: "彼女出来たww {{mini}}",
      priority: 0.5,
    },
    {
      text: "彼女と別れた ;; {{mini}}",
      priority: 0.75,
    },
    {
      text: "暇すぎぃ",
      priority: 0.95,
    },
    {
      text: "どうも 今日も元気な{{job}}です() {{mini}}",
      priority: 0.5,
    },
    {
      text: "皆改めてよろしく()",
      priority: 0.5,
    },
    {
      text: "実は{{random_number}}歳です()",
      priority: 0.5,
    },
    {
      text: "皆何歳？",
      priority: 0.5,
    },
    {
      text: "最近何してる？",
      priority: 1,
    },
    {
      text: "最近何してるん？",
      priority: 1,
    },
    {
      text: "[@] サーバーが異常な反応を示しています。プランの利用額が80万円を超えました。",
      priority: 0.1,
    },
    {
      text: "ま、さっきの嘘なんだけどね()",
      priority: 1,
    },
    {
      text: "今日は待ちに待った{{date}}だ！",
      priority: 1,
    },
    {
      text: "勿論俺らは抵抗するで金で👆 ({{job}})",
      priority: 1,
    },
    {
      text: "君のスリーサイズ教えてくれるかなぁ？",
      priority: 1,
    },
    {
      text: "にょっす🐮❣",
      priority: 1,
    },
    {
      text: "チー牛死ね",
      priority: 1,
    },
    {
      text: "↑こいつかわいい",
      priority: 1,
    },
    {
      text: "↑結婚しよ",
      priority: 1,
    },
    {
      text: "僕AIですらないbotだから感情無いんだごめん ;;",
      priority: 1,
    },
    {
      text: "僕かっこよ どうも{{job}}です。",
      priority: 1,
    },
    {
      text: "僕かっこよ どうも{{job}}です。",
      priority: 1,
    },
    {
        text: "荒らしやめてぇ！",
        priority: 1,
    },
    {
        text: "数字なら{{random_number}}が好き。",
        priority: 1,
    },
    {
        text: "皆何が好き？",
        priority: 1,
    },
    {
        text: "おススメの音楽教えて",
        priority: 1,
    },
    {
        text: "ち〇こしゃぶりたい",
        priority: 1,
    },
    {
        text: "おススメのゲーム教えて",
        priority: 1,
    },
    {
        text: "おススメの{{assets}}教えて",
        priority: 1,
    },
    {
        text: "{{assets}}ってどれが有名？",
        priority: 1,
    },
    {
        text: "{{assets}}愛好家です。",
        priority: 1,
    },
    {
        text: "{{assets}}って何が有名？",
        priority: 1,
    },
    {
        text: "{{assets}}って何がオススメ",
        priority: 1,
    },
    {
        text: "{{assets}}嫌いな奴殺すわ",
        priority: 1,
    },
  ];

  jobs: Job[] = [
    {
      title: "社不",
      priority: 1.25,
    },
    {
      title: "独身",
      priority: 1.2,
    },
    {
      title: "学生",
      priority: 1,
    },
    {
      title: "24歳一般人",
      priority: 1,
    },
    {
      title: "都内タワマン80階住エリート",
      priority: 1.2,
    },
    {
      title: "田舎アパート1階住みエリート",
      priority: 0.6,
    },
  ];

  mini: MiniWadai[] = [
    {
      text: "それにしても寒すぎ",
      priority: 1,
    },
    {
      text: "それにしても暑過ぎぃ",
      priority: 1,
    },
    {
      text: "どうでもいいかごめん()",
      priority: 1,
    },
    {
      text: "...()",
      priority: 0.7,
    },
    {
      text: "なんてね() 僕なんて死んじゃえばいいよね。。。",
      priority: 0.7,
    },
    {
      text: "何言ってんだ俺・・・",
      priority: 0.7,
    },
    {
      text: "ｇｆんぜふぁｗｆｋｊはいｋｄぴおｋｈEpighkhnlvひえｌｗ",
      priority: 0.8,
    },
    {
      text: "くぁｗせｄｒｆｔｇｙふじこｌｐ",
      priority: 0.8,
    },
    {
      text: "眠い",
      priority: 0.8,
    },
    {
      text: "うんこ！(意味は無い)",
      priority: 0.8,
    },
    {
      text: "ごめん寝る",
      priority: 0.8,
    },
    {
      text: "明日が楽しみ",
      priority: 0.8,
    },
  ];
}
