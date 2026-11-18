import Image from "next/image";
import Container from "./Container";
import SectionLabel from "./SectionLabel";

const ambience = [
  { label: "Pencahayaan", value: "2700K Warm Dim" },
  { label: "Akustik", value: "Hening & Khidmat" },
];

const notes = [
  {
    label: "01 · Material",
    title: "Kayu Hinoki Asli",
    text: "Meja counter tanpa sambungan dari Prefektur Nagano, memberikan kehangatan sentuhan yang alami saat siku bersandar menanti sajian.",
  },
  {
    label: "02 · Kerajinan",
    title: "Keramik Bizen & Arita",
    text: "Piring saji dibakar secara khusus oleh perajin tembikar di Okayama, menghasilkan tekstur tanah alami yang melengkapi keanggunan ikan.",
  },
  {
    label: "03 · Kurasi Minuman",
    title: "Pairing Sake Langka",
    text: "Pilihan Junmai Daiginjo musim dingin dan seduhan teh hijau Gyokuro Shizuoka yang disajikan dalam cangkir keramik bersuhu presisi.",
  },
];

export default function Atmosphere() {
  return (
    <section id="suasana" className="py-12">
      <Container className="flex flex-col gap-6">
        <header className="flex items-baseline justify-between lg:hidden">
          <div className="flex flex-col">
            <span className="text-label-sm uppercase tracking-[0.25em] text-secondary">
              Kedamaian Ruang
            </span>
            <h2 className="font-serif text-headline-sm uppercase text-on-surface">
              Suasana • 空間
            </h2>
          </div>
          <span className="text-label-sm text-secondary">12 Kursi Hinoki</span>
        </header>

        <header className="hidden flex-row items-end justify-between gap-2 lg:flex">
          <div className="flex flex-col gap-2">
            <SectionLabel index="04" title="Kedamaian Ruang" kanji="空間" />
            <h2 className="font-serif text-headline-lg text-on-surface">
              12 Kursi di Hadapan Meja Hinoki
            </h2>
          </div>
          <p className="max-w-md text-body-sm text-secondary">
            Dirancang dengan estetika sukiya-zukuri: dinding plester tanah liat,
            pencahayaan temaram dari lampion kertas washi, dan aroma kayu cemara
            Jepang yang menenangkan.
          </p>
        </header>

        <div className="flex flex-col gap-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-container lg:aspect-[21/9] lg:min-h-[380px] lg:border lg:border-outline-variant/60">
            <Image
              src="/images/hinoki-counter.png"
              alt="Counter sushi kayu hinoki di malam hari dengan lampu temaram dan uap kukusan"
              fill
              sizes="(min-width: 1440px) 1312px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-inverse-surface/80 via-transparent to-transparent lg:block" />

            <div className="absolute inset-x-6 bottom-6 hidden items-end justify-between gap-2 text-inverse-on-surface lg:flex">
              <div>
                <span className="mb-1 block text-label-sm uppercase text-primary-fixed">
                  Hinoki Counter Bar
                </span>
                <p className="font-serif text-headline-sm">
                  Ketenangan Absolut di Tengah Hiruk Pikuk Kota
                </p>
              </div>
              <div className="flex items-center gap-4 border border-surface/20 bg-surface/10 px-4 py-2 backdrop-blur-md">
                {ambience.map((item, index) => (
                  <div key={item.label} className="flex items-center gap-4">
                    {index > 0 && <span className="h-6 w-px bg-surface/30" />}
                    <div>
                      <span className="block text-label-sm uppercase text-primary-fixed">
                        {item.label}
                      </span>
                      <span className="text-label-md text-surface-container-lowest">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-body-sm italic text-secondary lg:hidden">
            Kayu hinoki berumur, pencahayaan temaram, dan keheningan dapur
            terbuka.
          </p>
        </div>

        <div className="hidden gap-6 lg:grid lg:grid-cols-3">
          {notes.map((note) => (
            <article
              key={note.title}
              className="border border-outline-variant/40 bg-surface-container-low p-4"
            >
              <span className="mb-1 block text-label-sm uppercase text-primary">
                {note.label}
              </span>
              <h3 className="mb-2 font-serif text-headline-sm text-on-surface">
                {note.title}
              </h3>
              <p className="text-body-sm text-secondary">{note.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
