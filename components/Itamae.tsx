import Image from "next/image";
import Container from "./Container";
import SectionLabel from "./SectionLabel";

export default function Itamae() {
  return (
    <section id="itamae" className="py-12">
      <Container className="flex flex-col gap-4">
        <div className="lg:hidden">
          <SectionLabel index="03" title="Sang Pengrajin" kanji="板前" />
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-5">
            <div className="border-outline-variant/60 bg-surface-container lg:border lg:p-2">
              <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-high lg:aspect-[3/4]">
                <Image
                  src="/images/itamae-kenjiro.png"
                  alt="Itamae Kenjiro Sato dengan keikogi linen di balik meja sushi"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-top transition duration-500 lg:grayscale-[15%] lg:hover:grayscale-0"
                />
              </div>
            </div>
            <span className="absolute -bottom-4 right-4 hidden border border-outline-variant/50 bg-surface-container-lowest px-4 py-2 text-label-sm uppercase text-primary lg:block">
              板前 · ITAMAE
            </span>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7 lg:pl-6">
            <div className="hidden lg:block">
              <SectionLabel index="03" title="Sang Itamae" kanji="職人" />
            </div>

            <div className="flex flex-col">
              <span className="mb-1 hidden text-label-md uppercase text-secondary lg:block">
                Pendiri &amp; Master Chef
              </span>
              <h2 className="font-serif text-headline-md text-on-surface lg:text-display">
                Kenjiro Sato
              </h2>
              <span className="text-label-sm uppercase tracking-[0.2em] text-secondary lg:hidden">
                Itamae &amp; Pendiri
              </span>
            </div>

            <p className="text-body-md text-on-surface-variant lg:hidden">
              Menghabiskan enam tahun menempa disiplin di counter sushi
              tradisional kawasan Kita, Osaka, sebelum membawa dedikasinya ke
              Jakarta. Bagi Kenjiro, omakase adalah dialog hening antara koki,
              pisau, dan tamu.
            </p>

            <div className="hidden flex-col gap-2 text-body-md text-secondary lg:flex">
              <p>
                Menghabiskan enam tahun menempa disiplin di counter sushi
                tradisional kawasan Kita, Osaka, sebelum membawa dedikasinya ke
                Jakarta. Belajar langsung dari generasi sushi artisan yang
                memegang teguh prinsip <em>shun</em>—menghidangkan bahan tepat
                pada puncak musiman terbaiknya.
              </p>
              <p>
                Bagi Kenjiro, omakase adalah dialog hening antara koki, pisau,
                dan tamu. Setiap potongan ikan diukur berdasarkan tekstur hari
                itu, suhu ruangan, dan ritme napas di meja counter. Tidak ada
                hiasan berlebih; hanya ketajaman pisau Yanagiba dan sentuhan
                rasa hormat pada laut.
              </p>
            </div>

            <div className="hidden items-center justify-between border-t border-outline-variant/40 pt-4 lg:flex">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 border border-primary/30 bg-primary/10 p-1">
                  <Image
                    src="/images/hanko.png"
                    alt="Stempel hanko Kenjiro Sato"
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <span className="block text-label-md font-semibold uppercase text-on-surface">
                    Sertifikasi Tokyo Sushi Guild
                  </span>
                  <span className="text-body-sm text-outline">
                    Keahlian Edomae Tradisional
                  </span>
                </div>
              </div>
              <span className="select-none font-serif text-headline-sm italic text-outline">
                “佐藤”
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
