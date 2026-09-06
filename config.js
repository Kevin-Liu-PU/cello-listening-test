// Listening-test configuration. Edit this file only.
// formUrl: the Google Form "formResponse" endpoint (viewform URL with /viewform replaced by /formResponse).
// entry: the Google Form field ids (entry.NNNNN) for each column, taken from a pre-filled link.
// Leave formUrl empty to run without collection (answers stay in the browser and can be copied on the last screen).
window.LT_CONFIG = {
  version: "2026-09-06a",
  formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfo4FH_zRXYcWteCwzu677GPxlOCM3QqdXDYY6RteehC09gIg/formResponse",
  entry: {
    listener: "entry.1757038299", background: "entry.1076943540", headphones: "entry.1294350542",
    piece: "entry.1067321661", pair: "entry.1376800245",
    prefer: "entry.281010762", confidence: "entry.1442183737", tone: "entry.1410486105", attack: "entry.1075060316", release: "entry.260098427", notes: "entry.921066493",
    meta: "entry.1445397111"
  },
  fallbackEmail: "",
  pieces: [
    { id: "twinkle",  pairs: 3, name: { en: "Twinkle, Twinkle (short)", zh: "小星星（短版）" },
      desc: { en: "mf, 42 strokes, about 35 s", zh: "mf，42 弓，约 35 秒" } },
    { id: "maysong",  pairs: 3, name: { en: "May Song (excerpt)", zh: "五月之歌（选段）" },
      desc: { en: "f and mf, 44 strokes, about 35 s", zh: "f/mf，44 弓，约 35 秒" } },
    { id: "bach",     pairs: 3, name: { en: "Bach, Cello Suite No. 1, Sarabande, bars 1 to 8", zh: "巴赫第一无伴奏组曲 萨拉班德 1-8 小节" },
      desc: { en: "mf, 42 strokes, about 36 s", zh: "mf，42 弓，约 36 秒" } },
    { id: "popper",   pairs: 3, name: { en: "Popper, Hungarian Rhapsody, bars 9 to 24", zh: "波珀 匈牙利狂想曲 9-24 小节" },
      desc: { en: "pp and f, 32 strokes, about 22 s", zh: "pp/f，32 弓，约 22 秒" } },
    { id: "vocalise", pairs: 3, name: { en: "Rachmaninoff, Vocalise (opening)", zh: "拉赫玛尼诺夫 练声曲（开头）" },
      desc: { en: "p to ff, 14 strokes, about 16 s", zh: "p 到 ff，14 弓，约 16 秒" } },
    { id: "notes_twinkle",  pairs: 3, part: 2, name: { en: "Single notes: Twinkle", zh: "单音：小星星" }, desc: { en: "3 long notes, 1 to 2 s each", zh: "3 个长音，各 1–2 秒" } },
    { id: "notes_maysong",  pairs: 3, part: 2, name: { en: "Single notes: May Song", zh: "单音：五月之歌" }, desc: { en: "3 long notes", zh: "3 个长音" } },
    { id: "notes_bach",     pairs: 3, part: 2, name: { en: "Single notes: Bach Sarabande", zh: "单音：巴赫萨拉班德" }, desc: { en: "3 long notes", zh: "3 个长音" } },
    { id: "notes_popper",   pairs: 3, part: 2, name: { en: "Single notes: Popper", zh: "单音：波珀" }, desc: { en: "3 long notes", zh: "3 个长音" } },
    { id: "notes_vocalise", pairs: 3, part: 2, name: { en: "Single notes: Vocalise", zh: "单音：练声曲" }, desc: { en: "3 long notes", zh: "3 个长音" } }
  ]
};
