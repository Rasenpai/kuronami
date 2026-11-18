"use client";

import { useState } from "react";
import Button from "../Button";
import { ChevronIcon } from "../icons";
import { useReservation } from "../ReservationProvider";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/format";
import { SAKE_PAIRING_PRICE, sakes } from "@/lib/menu";

const badgeStyles = {
  primary: "border-primary/30 bg-primary/10 text-primary",
  secondary:
    "border-secondary/40 bg-secondary-container text-on-secondary-fixed-variant",
};

export default function SakePane() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { setPairing } = useReservation();

  return (
    <ul className="relative flex flex-col gap-2">
      {sakes.map((sake, index) => {
        const isOpen = openIndex === index;
        const badge = "badge" in sake ? sake.badge : null;

        return (
          <li
            key={sake.brand}
            className="border border-outline-variant/50 bg-surface"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full flex-col justify-between gap-2 p-2 text-left transition-colors duration-150 hover:bg-surface-container-low sm:flex-row sm:items-center sm:p-4"
            >
              <span className="flex flex-wrap items-baseline gap-2">
                <span className="text-label-md font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <span className="font-serif text-headline-sm text-on-surface">
                  {sake.name}
                </span>
                <span className="text-label-sm uppercase text-secondary">
                  {sake.brand}
                </span>
                {badge && (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 border px-2 py-0.5 text-label-sm uppercase",
                      badgeStyles[badge.tone],
                    )}
                  >
                    {badge.label}
                  </span>
                )}
              </span>
              <span className="flex items-center gap-3">
                <span className="text-label-md text-outline">
                  ({sake.kanji})
                </span>
                <ChevronIcon
                  className={cn(
                    "h-5 w-5 text-primary transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </span>
            </button>

            {isOpen && (
              <div className="flex flex-col gap-2 border-t border-outline-variant/30 bg-surface-container-low/40 p-2 text-body-sm text-secondary sm:p-4">
                <div className="grid gap-2 sm:grid-cols-2">
                  <div>
                    <span className="block text-label-sm uppercase text-outline">
                      Suhu Saji Presisi:
                    </span>
                    <span className="font-medium text-on-surface">
                      {sake.temperature}
                    </span>
                  </div>
                  <div>
                    <span className="block text-label-sm uppercase text-outline">
                      Profil Aroma Mikro:
                    </span>
                    <span className="font-medium text-on-surface">
                      {sake.aroma}
                    </span>
                  </div>
                </div>
                <p>{sake.pairing}</p>
                <div>
                  <Button
                    href="#reservasi"
                    size="sm"
                    onClick={() => setPairing("sake")}
                    className="w-full text-center sm:w-auto"
                  >
                    Tautkan Pairing Ini ke Reservasi (+
                    {formatIDR(SAKE_PAIRING_PRICE)}/tamu)
                  </Button>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
