export type Seat = {
  id: number;
  zone: string;
  kanji: string;
  description: string;
  pov: string;
  distance: string;
  sessions: [string, string];
  position: { left: string; top: string; transform: string };
};

const west = { zone: "Sayap Barat (West Wing)", kanji: "西翼 · West Wing" };
const center = { zone: "Posisi Utama (Center Stage)", kanji: "正面 · Center Stage" };
const north = { zone: "Sayap Utara (North Wing)", kanji: "北翼 · North Wing" };

const alongCounter = (left: string) => ({ left, top: "65%", transform: "translateX(-50%)" });
const alongWing = (top: string) => ({ left: "79%", top, transform: "translateY(-50%)" });

export const seats: Seat[] = [
  {
    id: 1,
    ...west,
    description: "Dekat Display Bahan (Neta-Bako) & Persiapan Sakizuke",
    pov: "Menyaksikan seleksi potongan ikan musiman di dalam kotak kayu cemara dan persiapan pembuka laut dingin.",
    distance: "Jarak 1.6m dari Itamae · Suhu pencahayaan 2700K lembut dengan aroma shari yang hangat.",
    sessions: ["Tersedia 1 Kursi", "Tersedia"],
    position: alongCounter("9.5%"),
  },
  {
    id: 2,
    ...west,
    description: "Dekat Display Bahan (Neta-Bako) & Persiapan Sakizuke",
    pov: "Sudut pandang leluasa ke display neta segar dan kecekatan asisten chef menakar suhu cuka akazu.",
    distance: "Jarak 1.5m dari Itamae · Alur udara sejuk, ideal bagi penikmat detail bahan mentah.",
    sessions: ["Tersedia 2 Kursi", "Tersedia"],
    position: alongCounter("16.5%"),
  },
  {
    id: 3,
    ...west,
    description: "Dekat Display Bahan & Transisi ke Posisi Utama",
    pov: "Titik transisi elegan; pandangan terbuka ke kotak ikan segar sekaligus sudut potong pisau Kenjiro.",
    distance: "Jarak 1.4m dari Itamae · Pencahayaan fokus ke papan kayu saji.",
    sessions: ["Tersedia", "Tersedia 1 Kursi"],
    position: alongCounter("23.5%"),
  },
  {
    id: 4,
    ...west,
    description: "Berdampingan Langsung dengan Area Tengah",
    pov: "Dekat dengan wadah shari cuka merah (Hangiri), menangkap kehangatan butiran beras saat diracik.",
    distance: "Jarak 1.3m dari Itamae · Suasana hening dan khidmat.",
    sessions: ["Tersedia", "Tersedia"],
    position: alongCounter("30.5%"),
  },
  {
    id: 5,
    ...center,
    description: "Tepat Berhadapan dengan Master Kenjiro & Papan Yanagiba",
    pov: "Menatap ketepatan jemari chef saat membentuk nigiri berkecepatan 3 detik dan polesan nikiri shoyu.",
    distance: "Jarak 1.2m dari Itamae · Sudut pandang fotogenik utama tepat di hadapan pisau Yanagiba.",
    sessions: ["Tersedia 1 Kursi", "Tersedia"],
    position: alongCounter("38%"),
  },
  {
    id: 6,
    ...center,
    description: "Tepat Berhadapan dengan Master Kenjiro & Papan Yanagiba",
    pov: "Menghadap langsung ke gerakan tangan chef saat memotong sashimi dan menekan shari hangat.",
    distance: "Jarak 1.2m dari Itamae · Suhu pencahayaan 2700K temaram fokus ke piring saji.",
    sessions: ["Tersedia 2 Kursi", "Tersedia"],
    position: alongCounter("45%"),
  },
  {
    id: 7,
    ...center,
    description: "Tepat Berhadapan dengan Master Kenjiro & Papan Yanagiba",
    pov: "Titik simetris terbaik untuk menikmati dialog langsung dengan Chef Kenjiro mengenai asal-usul tangkapan laut.",
    distance: "Jarak 1.2m dari Itamae · Piring saji keramik Bizen berada tepat di garis pandang sentral.",
    sessions: ["Tersedia", "Tersedia 1 Kursi"],
    position: alongCounter("52%"),
  },
  {
    id: 8,
    ...center,
    description: "Tepat Berhadapan dengan Master Kenjiro & Papan Yanagiba",
    pov: "Menyaksikan tahap akhir nigiri: pemberian wasabi segar Shizuoka parut dan sentuhan garam laut NTT.",
    distance: "Jarak 1.3m dari Itamae · Sangat intim untuk pasangan tamu.",
    sessions: ["Tersedia 2 Kursi", "Tersedia"],
    position: alongCounter("59%"),
  },
  {
    id: 9,
    ...north,
    description: "Sudut Tenang Dekat Koleksi Sake & Keramik Bizen",
    pov: "Sudut kurva meja Hinoki yang menghadap ke sudut bar sake dingin dan display cangkir Arita antik.",
    distance: "Jarak 1.4m dari Itamae · Suasana lebih privat dengan pandangan melintang ke seluruh counter.",
    sessions: ["Tersedia", "Tersedia"],
    position: alongWing("54%"),
  },
  {
    id: 10,
    ...north,
    description: "Sudut Tenang Dekat Koleksi Sake & Keramik Bizen",
    pov: "Menyaksikan proses penuangan sake pairing pada suhu presisi serta penyajian sup dashi hangat.",
    distance: "Jarak 1.5m dari Itamae · Sudut kontemplatif yang sangat tenang.",
    sessions: ["Tersedia 1 Kursi", "Tersedia 2 Kursi"],
    position: alongWing("65%"),
  },
  {
    id: 11,
    ...north,
    description: "Sudut Tenang Dekat Koleksi Sake & Keramik Bizen",
    pov: "Pandangan diagonal ke formasi counter lengkap, menikmati ketenangan suara gemericik air dan hembusan uap.",
    distance: "Jarak 1.6m dari Itamae · Jarak antar kursi ekstra longgar untuk privasi percakapan.",
    sessions: ["Tersedia 2 Kursi", "Tersedia"],
    position: alongWing("76%"),
  },
  {
    id: 12,
    ...north,
    description: "Sudut Tenang Dekat Koleksi Sake & Keramik Bizen",
    pov: "Kursi ujung kurva yang paling teduh, dekat dengan etalase sake langka Junmai Daiginjo dan guci tembikar.",
    distance: "Jarak 1.7m dari Itamae · Favorit tamu solo atau penikmat ketenangan mutlak tanpa distraksi.",
    sessions: ["Tersedia", "Tersedia 1 Kursi"],
    position: alongWing("87%"),
  },
];

export const formatSeatNumber = (id: number) => String(id).padStart(2, "0");