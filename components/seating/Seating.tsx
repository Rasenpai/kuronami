"use client";

import Container from "../Container";
import { useReservation } from "../ReservationProvider";
import SectionLabel from "../SectionLabel";
import SeatDetail from "./SeatDetail";
import SeatGrid from "./SeatGrid";
import SeatMap from "./SeatMap";
import { seats } from "@/lib/seats";

export default function Seating() {
  const { seat: selectedId, setSeat } = useReservation();
  const selectedSeat = seats.find((seat) => seat.id === selectedId) ?? seats[0];

  return (
    <section id="denah" className="py-12">
      <Container className="flex flex-col gap-6">
        <header className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-2">
            <SectionLabel index="05" title="Tata Ruang & Meja" kanji="席次" />
            <h2 className="font-serif text-headline-lg-mobile text-on-surface lg:text-headline-lg">
              Denah 12 Kursi di Meja Hinoki
            </h2>
          </div>
          <p className="max-w-md text-body-sm text-secondary">
            Counter kayu Hinoki berusia seabad dalam formasi kurva L. Setiap
            kursi dirancang dengan jarak hening untuk apresiasi hidangan yang
            intim di hadapan Master Kenjiro Sato.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SeatMap selectedId={selectedId} onSelect={setSeat} />
            <SeatGrid selected={selectedSeat} onSelect={setSeat} />
          </div>
          <SeatDetail seat={selectedSeat} />
        </div>
      </Container>
    </section>
  );
}
