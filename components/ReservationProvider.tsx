"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Pairing = "none" | "sake" | "tea";

type ReservationState = {
  seat: number;
  pairing: Pairing;
  setSeat: (seat: number) => void;
  setPairing: (pairing: Pairing) => void;
};

const ReservationContext = createContext<ReservationState | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [seat, setSeat] = useState(6);
  const [pairing, setPairing] = useState<Pairing>("none");

  const value = useMemo(
    () => ({ seat, pairing, setSeat, setPairing }),
    [seat, pairing],
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within ReservationProvider");
  }
  return context;
}
