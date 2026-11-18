import Image from "next/image";
import Button from "../Button";
import { formatSeatNumber, type Seat } from "@/lib/seats";

const sessionLabels = ["Sesi Senja (18:00)", "Sesi Malam (20:30)"];
const sessionDots = ["bg-primary", "bg-secondary"];

export default function SeatDetail({ seat }: { seat: Seat }) {
  const seatNumber = formatSeatNumber(seat.id);

  return (
    <aside className="hidden flex-col gap-4 border border-outline-variant/60 bg-surface-container-low p-6 lg:col-span-5 lg:flex">
      <div className="flex items-center justify-between border-b border-outline-variant/40 pb-1">
        <div>
          <span className="block text-label-sm uppercase text-primary">
            Detail Perspektif Kursi
          </span>
          <span className="font-serif text-headline-sm text-on-surface">
            {seat.kanji}
          </span>
        </div>
        <div className="h-10 w-10 border border-primary/30 bg-primary/10 p-0.5">
          <Image
            src="/images/hanko.png"
            alt=""
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-4">
          <h3 className="font-serif text-headline-lg leading-tight text-primary">
            Kursi {seatNumber}
          </h3>
          <span className="text-label-md uppercase text-secondary">
            {seat.zone}
          </span>
        </div>
        <p className="mt-1 text-body-sm text-secondary">{seat.description}</p>
      </div>

      <div className="flex flex-col gap-2 border border-outline-variant/40 bg-surface p-4">
        <div>
          <span className="block text-label-sm font-semibold uppercase text-on-surface">
            Sudut Pandang (POV)
          </span>
          <p className="text-body-sm leading-snug text-secondary">{seat.pov}</p>
        </div>
        <div className="border-t border-outline-variant/30 pt-2">
          <span className="block text-label-sm font-semibold uppercase text-on-surface">
            Jarak Pandang &amp; Atmosfer
          </span>
          <p className="text-body-sm leading-snug text-secondary">
            {seat.distance}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border border-outline-variant/40 bg-surface-container p-4">
        <span className="block text-label-sm uppercase text-outline">
          Status Ketersediaan Malam Ini
        </span>
        <div className="grid grid-cols-2 gap-2">
          {seat.sessions.map((status, index) => (
            <div
              key={sessionLabels[index]}
              className="border border-outline-variant/30 bg-surface p-2"
            >
              <span className="block text-label-sm text-secondary">
                {sessionLabels[index]}
              </span>
              <span className="flex items-center gap-1 text-label-md font-semibold text-on-surface">
                <span
                  className={`inline-block h-2 w-2 rounded-full ${sessionDots[index]}`}
                />
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-1">
        <Button href="#reservasi" className="w-full gap-2">
          Pilih Kursi {seatNumber} untuk Reservasi
          <span aria-hidden>→</span>
        </Button>
        <span className="mt-2 block text-center text-label-sm text-outline">
          *Pilihan kursi akan dicantumkan secara prioritas pada formulir
          reservasi Anda.
        </span>
      </div>
    </aside>
  );
}
