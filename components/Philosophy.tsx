import Container from "./Container";
import SectionLabel from "./SectionLabel";
import { siteConfig } from "@/lib/site";

const quote =
  "“Ikan yang baik tidak meminta banyak bumbu, hanya ketepatan suhu tangan dan rasa hormat.”";

const author = { name: "Kenjiro Sato", title: "Master Itamae" };

const specs = [
  { label: "Shari", value: "Akazu 3-Year" },
  { label: "Pasokan", value: "Toyosu & NTT" },
  { label: "Kapasitas", value: "12 Kursi Saja" },
];

export default function Philosophy() {
  return (
    <section id="filosofi" className="py-12">
      <Container className="flex flex-col gap-4">
        <SectionLabel index="01" title="Filosofi Rasa" kanji="哲学" />

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6 lg:pr-6">
            <blockquote className="font-serif text-headline-md italic leading-snug text-on-surface lg:border-l-2 lg:border-primary lg:pl-4 lg:text-[3.25rem] lg:leading-[1.15]">
              {quote}
            </blockquote>
            <p className="hidden items-center gap-2 pl-4 pt-4 text-label-sm uppercase text-secondary lg:flex">
              <span className="font-medium">{author.name}</span>
              <span className="text-outline">/</span>
              <span className="normal-case text-outline">{author.title}</span>
            </p>
          </div>

          <div className="flex flex-col gap-2 text-body-md text-on-surface-variant lg:col-span-6 lg:gap-4 lg:border lg:border-outline-variant/40 lg:bg-surface-container-low lg:p-6">
            <div className="hidden items-center justify-between border-b border-outline-variant/30 pb-1 lg:flex">
              <span className="text-label-md uppercase text-secondary">
                Dialog Hening
              </span>
              <span className="font-serif text-headline-sm text-primary">
                一期一会
              </span>
            </div>

            <p className="lg:hidden">
              Di {siteConfig.name}, kami tidak mengejar sensasi rasa yang riuh.
              Kami mengolah hasil tangkapan nelayan lokal kepulauan dan pasar
              Toyosu dengan shari cuka merah berumur.
            </p>
            <p className="lg:hidden">
              Hanya dua belas tamu setiap sesi, agar setiap suapan tiba di
              hadapan Anda tepat beberapa detik setelah dibentuk.
            </p>

            <p className="hidden text-on-surface lg:block">
              Di{" "}
              <span className="font-medium text-primary">
                {siteConfig.name}
              </span>
              , kami tidak mengejar sensasi rasa yang riuh. Kami mengolah hasil
              tangkapan nelayan lokal kepulauan dan pasar Toyosu dengan shari
              cuka merah berumur. Proses fermentasi shari disesuaikan secara
              teliti dengan kelembapan udara kota Jakarta setiap petang.
            </p>
            <p className="hidden text-secondary lg:block">
              Hanya dua belas tamu setiap sesi, agar setiap suapan tiba di
              hadapan Anda tepat beberapa detik setelah dibentuk. Kehangatan
              butiran beras dan kesejukan irisan ikan berpadu seketika di
              lidah—momen singkat yang menuntut kehadiran penuh dari koki dan
              penikmatnya.
            </p>

            <dl className="hidden grid-cols-3 gap-1 border-t border-outline-variant/30 pt-1 text-center lg:grid">
              {specs.map((spec) => (
                <div key={spec.label} className="bg-surface p-1">
                  <dt className="text-label-sm uppercase text-outline">
                    {spec.label}
                  </dt>
                  <dd className="text-label-md font-semibold text-on-surface">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
