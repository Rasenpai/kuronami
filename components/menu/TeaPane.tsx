"use client";

import Button from "../Button";
import { useReservation } from "../ReservationProvider";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/format";
import { TEA_PAIRING_PRICE, teas } from "@/lib/menu";

export default function TeaPane() {
  const { setPairing } = useReservation();

  return (
    <div className="relative flex flex-col gap-6">
      <ul className="flex flex-col gap-6">
        {teas.map((tea, index) => (
          <li
            key={tea.name}
            className={cn(
              "flex flex-col justify-between gap-1 lg:flex-row lg:items-baseline lg:gap-4",
              tea.highlighted && "lg:-mx-2 lg:bg-surface-container/60 lg:p-2",
            )}
          >
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-label-md font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                <h3 className="font-serif text-headline-sm text-on-surface">
                  {tea.name}
                </h3>
                <span
                  className={cn(
                    "text-label-sm uppercase",
                    tea.highlighted ? "text-primary" : "text-secondary",
                  )}
                >
                  {tea.brew}
                </span>
              </div>
              <p
                className={cn(
                  "text-body-sm lg:pl-4",
                  tea.highlighted
                    ? "font-medium text-on-surface"
                    : "text-secondary",
                )}
              >
                {tea.description}
              </p>
            </div>
            <span
              className={cn(
                "text-label-md lg:shrink-0",
                tea.highlighted ? "text-primary" : "text-outline",
              )}
            >
              ({tea.kanji})
            </span>
          </li>
        ))}
      </ul>

      <Button
        href="#reservasi"
        variant="secondary"
        size="sm"
        onClick={() => setPairing("tea")}
        className="w-full text-center sm:w-auto sm:self-start"
      >
        Tautkan Paket Tea ke Reservasi (+{formatIDR(TEA_PAIRING_PRICE)}/tamu)
      </Button>
    </div>
  );
}
