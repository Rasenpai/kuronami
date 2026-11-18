import Image from "next/image";
import Button from "./Button";
import Container from "./Container";
import { VerifiedIcon } from "./icons";
import { reservationHref, schedule, siteConfig } from "@/lib/site";

function InfoBar() {
  return (
    <div className="hidden border-b border-outline-variant/30 bg-surface-container py-1.5 text-outline lg:block">
      <Container className="flex items-center justify-between text-label-sm uppercase">
        <span>Edomae Omakase · {siteConfig.location}</span>
        <span>伝統・旬・静寂 — Musim Dingin (冬)</span>
        <span>Maksimal 12 Tamu</span>
      </Container>
    </div>
  );
}

function MobileMeta() {
  return (
    <div className="mb-6 flex items-start justify-between lg:hidden">
      <div className="flex flex-col gap-1 text-label-sm text-secondary">
        <span className="uppercase tracking-[0.25em]">
          Omakase Edisi Jakarta
        </span>
        <span>
          {schedule.days}, {schedule.sessions[0].time.replace(" WIB", "")} &amp;{" "}
          {schedule.sessions[1].time}
        </span>
      </div>
      <span className="font-serif text-headline-sm tracking-widest text-secondary [writing-mode:vertical-rl]">
        黒波 おまかせ
      </span>
    </div>
  );
}

function Headline() {
  return (
    <h1 className="font-serif text-headline-lg-mobile text-on-surface md:text-display-mobile lg:text-display">
      Dua belas kursi.
      <br />
      <span className="lg:italic">Satu koki.</span>
      <br />
      <span className="italic lg:not-italic">Setiap malam berbeda.</span>
    </h1>
  );
}

function HeroImage() {
  return (
    <div className="relative lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1">
      <div className="border-outline-variant/60 bg-surface-container-low lg:border lg:p-2">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
          <Image
            src="/images/hero-nigiri.png"
            alt="Tangan itamae membentuk nigiri dengan shari cuka merah"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-inverse-surface/60 via-transparent to-transparent lg:block" />

          <span className="absolute bottom-2 right-2 bg-surface/90 px-1 py-0.5 text-label-sm uppercase text-secondary lg:hidden">
            Nigiri • 赤酢シャリ
          </span>

          <span className="absolute right-4 top-4 hidden border border-outline-variant/40 bg-surface/85 px-2 py-3 font-serif text-body-sm tracking-widest text-on-surface backdrop-blur-sm [writing-mode:vertical-rl] lg:block">
            赤酢握り
          </span>

          <div className="absolute inset-x-4 bottom-4 hidden text-inverse-on-surface lg:block">
            <span className="mb-1 block text-label-sm uppercase text-primary-fixed">
              Keahlian Edomae
            </span>
            <p className="text-body-sm">
              NIGIRI · 赤酢シャリ — Shari cuka merah berumur dengan kinmedai
              pilihan Toyosu.
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/images/hanko.png"
        alt={`Stempel ${siteConfig.name}`}
        width={80}
        height={80}
        className="absolute -bottom-6 -left-6 hidden h-20 w-20 border border-outline-variant/50 bg-surface-container-lowest p-2 lg:block"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <InfoBar />
      <section className="pb-12 pt-6 lg:pt-12">
        <Container>
          <MobileMeta />

          <div className="grid gap-x-6 gap-y-6 lg:grid-cols-12">
            <div className="relative flex flex-col gap-4 lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:self-end lg:pr-6">
              <div className="hidden items-center gap-2 lg:flex">
                <span className="h-px w-8 bg-primary" />
                <span className="text-label-sm uppercase text-secondary">
                  Pengalaman Omakase Murni
                </span>
                <span className="text-label-sm text-outline">·</span>
                <span className="text-label-sm text-primary">
                  {siteConfig.kanji}
                </span>
              </div>

              <Headline />

              <p className="hidden max-w-xl pt-1 text-body-lg text-secondary lg:block">
                {schedule.days} · Dua sesi malam (18:00 &amp; 20:30 WIB) ·
                Eksklusif 12 tamu per sesi di meja kayu Hinoki utuh.
              </p>

              <span className="absolute -left-12 top-10 hidden select-none font-serif text-body-sm tracking-widest text-secondary opacity-40 [writing-mode:vertical-rl] xl:block">
                静寂と職人技 — KURO NAMI
              </span>
            </div>

            <HeroImage />

            <div className="flex flex-col gap-3 lg:col-span-7 lg:col-start-1 lg:row-start-2 lg:self-start">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  href={reservationHref}
                  className="w-full sm:w-auto sm:px-12"
                >
                  Pesan Kursi
                </Button>
                <div className="hidden sm:block">
                  <Button href="#sajian" variant="secondary">
                    Lihat Menu Musim Ini
                  </Button>
                </div>
              </div>

              <p className="text-center text-label-sm text-secondary lg:hidden">
                Kapasitas amat terbatas • Eksklusif 12 tamu per sesi
              </p>
              <p className="hidden items-center gap-2 text-label-sm text-outline lg:flex">
                <VerifiedIcon className="h-4 w-4" />
                Pemesanan dibuka 14 hari ke depan · Deposit diperlukan untuk
                konfirmasi kursi
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
