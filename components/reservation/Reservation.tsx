"use client";

import { useState, type FormEvent } from "react";
import { useReservation } from "@/components/ReservationProvider";
import { seats } from "@/lib/seats";
import type { ReservationViewProps } from "@/lib/reservation";
import ReservationDesktop from "./ReservationDesktop";
import ReservationMobile from "./ReservationMobile";

export default function Reservation() {
  const { seat: seatId, pairing, setPairing } = useReservation();
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Payload siap dikirim ke API / WhatsApp: Object.fromEntries(new FormData(event.currentTarget))
    setSubmitted(true);
  };

  const view: ReservationViewProps = {
    guests,
    onGuestsChange: setGuests,
    pairing,
    onPairingChange: setPairing,
    seat: seats.find(({ id }) => id === seatId),
    submitted,
    onSubmit: handleSubmit,
  };

  return (
    <section id="reservasi">
      <div className="hidden lg:block">
        <ReservationDesktop {...view} />
      </div>
      <div className="lg:hidden">
        <ReservationMobile {...view} />
      </div>
    </section>
  );
}
