export const OMAKASE_PRICE = 1850000;
export const SAKE_PAIRING_PRICE = 1150000;
export const TEA_PAIRING_PRICE = 480000;

export const menuTabs = [
  {
    id: "omakase",
    label: "Menu Omakase (18 Tahapan)",
    kanji: "料理",
    watermark: "冬のおまかせ",
    priceLabel: "Investasi Kuliner",
    price: OMAKASE_PRICE,
    note: "*Menu berganti setiap pekan mengikuti tangkapan laut terbaik dari perairan lokal Indonesia dan pasar Toyosu Tokyo.",
  },
  {
    id: "sake",
    label: "Sake Pairing Kurasi (5 Label)",
    kanji: "酒",
    watermark: "厳選銘酒",
    priceLabel: "Paket Pairing Khusus",
    price: SAKE_PAIRING_PRICE,
    note: "*Kurasi 5 gelas sake pairing pilihan Sommelier Kenjiro Sato, disajikan selaras ritme 18 tahapan hidangan omakase.",
  },
  {
    id: "tea",
    label: "Seasonal Tea Journey (Non-Alkohol)",
    kanji: "茶",
    watermark: "茶道妙味",
    priceLabel: "Paket Tea Pairing Non-Alkohol",
    price: TEA_PAIRING_PRICE,
    note: "*Seasonal tea pairing (4 sajian) disajikan dalam cangkir keramik Bizen & Arita buatan tangan perajin Okayama.",
  },
] as const;

export type MenuTabId = (typeof menuTabs)[number]["id"];

export const courses = [
  {
    number: "01",
    title: "Sakizuke",
    kanji: "先付",
    description: "Kerang kampachi asap dengan ponzu dashi",
  },
  {
    number: "02",
    title: "Otsukuri",
    kanji: "お造り",
    description: "Sashimi pilihan: irisan tipis madai & shima aji",
  },
  {
    number: "03",
    title: "Yakimono",
    kanji: "焼物",
    description: "Ikan panggang arang: gindara bakar garam kasar Binchotan",
  },
  {
    number: "04",
    title: "Nigiri Shari Merah",
    kanji: "握り",
    description: "8 ragam nigiri harian: Kinmedai, Akami zuke, Chu-toro, Kohada, Uni Hokkaido",
    highlighted: true,
  },
  {
    number: "05",
    title: "Shirumono & Tamago",
    kanji: "汁物",
    description: "Sup miso dashi & telur manis tradisional castella",
  },
  {
    number: "06",
    title: "Mizumono",
    kanji: "水物",
    description: "Penutup segar: sorbet yuzu & seduhan teh hijau panggang hojicha",
  },
];

export const sakes = [
  {
    name: "Junmai Daiginjo",
    brand: "Dassai 23 · Yamaguchi",
    kanji: "純米大吟醸",
    temperature: "10°C (Dingin Menyegarkan)",
    aroma: "Bunga pir putih, melon manis & sentuhan beras Yamada Nishiki",
    pairing: "Harmonisasi pendamping untuk hidangan Sakizuke & Otsukuri sashimi pembuka.",
  },
  {
    name: "Tokubetsu Junmai",
    brand: "Kokuryu Kuzuryu · Fukui",
    kanji: "特別純米",
    temperature: "40°C (Nurukan - Hangat Lembut)",
    aroma: "Karakter umami bersih, aroma jerami gandum & sentuhan cedar",
    pairing: "Selaras dengan aroma asap arang Binchotan pada hidangan Yakimono Gindara.",
  },
  {
    name: "Kimoto Junmai",
    brand: "Daishichi Minowamon · Fukushima",
    kanji: "生酛純米",
    temperature: "15°C (Suhu Ruang Sejuk)",
    aroma: "Asam laktat kaya, nuansa krim lembut & kedalaman fermentasi tong kayu",
    pairing: "Penyeimbang sempurna untuk lemak tuna Chu-toro dan gurihnya Akami Zuke shari cuka merah.",
  },
  {
    name: "Junmai Ginjo Genshu",
    brand: "Isojiman · Shizuoka",
    kanji: "純米吟醸",
    temperature: "8°C (Dingin Presisi)",
    aroma: "Melon musk segar, mineralitas salju Alpen Selatan & alkohol utuh genshu",
    pairing: "Kompleksitas tinggi yang mengangkat kelezatan Uni Hokkaido dan tekstur renyah Kohada.",
    badge: { label: "Alokasi Terbatas / 6 Botol Tersisa", tone: "primary" },
  },
  {
    name: "Kijoshu Aged Sake",
    brand: "Hanahato 8-Year · Hiroshima",
    kanji: "貴醸酒",
    temperature: "18°C (Sejuk Terkendali)",
    aroma: "Amber keemasan, kismis matang, karamel kayu manis, kemewahan sirup malt alami",
    pairing: "Penutup megah yang mengikat kelembutan Tamago Castella dan kesegaran sorbet yuzu Mizumono.",
    badge: { label: "Alokasi Langka Toyosu", tone: "secondary" },
  },
] as const;

export const teas = [
  {
    name: "Gyokuro Mizudashi Shizuoka",
    brew: "Seduh Dingin 8 Jam",
    kanji: "水出し玉露",
    description:
      "Umami alami pekat dengan manis klorofil segar, pembersih langit-langit untuk hidangan pembuka Sakizuke.",
  },
  {
    name: "Hojicha Kayu Bakar Uji Kyoto",
    brew: "Seduh Panas 85°C",
    kanji: "焙じ茶",
    description:
      "Aroma berasap lembut dan daun teh panggang arang, menemani hidangan ikan bakar Yakimono Gindara.",
  },
  {
    name: "Sencha Yabukita Kagoshima",
    brew: "Seduh Presisi 70°C",
    kanji: "煎茶",
    description:
      "Astringency elegan yang menyegarkan kembali lidah di antara suapan nigiri shari merah pilihan Toyosu.",
    highlighted: true,
  },
  {
    name: "Genmaicha Beras Hitam & Hojicha Latte",
    brew: "Organik & Dingin",
    kanji: "玄米茶",
    description:
      "Catatan kacang panggang yang menghangatkan sebagai penutup dessert Mizumono & Tamago Castella.",
  },
];