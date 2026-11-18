import type { FormEvent } from "react";
import { formatIDR } from "@/lib/format";
import { OMAKASE_PRICE, SAKE_PAIRING_PRICE, TEA_PAIRING_PRICE } from "./menu";
import type { Seat } from "./seats";
import { schedule } from "./site";

export const MAX_GUESTS = 4;
export const TAX_RATE = 0.21;
export const DEPOSIT_RATE = 0.5; 
export const DEPOSIT_PER_GUEST = 500_000; 

export type PairingId = "none" | "sake" | "tea";

export type PairingOption = {
  id: PairingId;
  name: string;
  title: string;
  optionLabel: string;
  hint?: string;
  description: string;
  badge?: string;
  pricePerGuest: number;
};

export const pairingOptions: readonly PairingOption[] = [
  {
    id: "none",
    name: "Tanpa Tambahan Pairing",
    title: "Tanpa Tambahan Minuman",
    optionLabel: "Tanpa Tambahan Pairing (Teh Ocha Reguler)",
    hint: "Teh Ocha Hangat Standar",
    description: "Sudah termasuk seduhan teh ocha hangat sepanjang sesi.",
    pricePerGuest: 0,
  },
  {
    id: "sake",
    name: "Sake Pairing Kurasi",
    title: "Sake Pairing Kurasi 5 Label",
    optionLabel: "Sake Pairing Kurasi (5 Label)",
    description: "5 kurasi artisanal (Dassai 23, Kokuryu, Isojiman, Aramasa, Hanahato Kijoshu).",
    badge: "Alokasi Langka",
    pricePerGuest: SAKE_PAIRING_PRICE,
  },
  {
    id: "tea",
    name: "Seasonal Tea Journey",
    title: "Seasonal Tea Journey Non-Alkohol",
    optionLabel: "Seasonal Tea Journey Non-Alkohol (4 Sajian)",
    description: "Cold Brew Gyokuro 8 jam, Asatsuyu Sencha 70°C, Sand-Roasted Hojicha.",
    pricePerGuest: TEA_PAIRING_PRICE,
  },
];

export const getPairing = (id: PairingId): PairingOption =>
  pairingOptions.find((option) => option.id === id) ?? pairingOptions[0];

const perGuestPrice = (option: PairingOption) => `+${formatIDR(option.pricePerGuest)}`;

export const pairingOptionText = (option: PairingOption) =>
  option.pricePerGuest > 0
    ? `${option.optionLabel} — ${perGuestPrice(option)} / tamu`
    : option.optionLabel;

export const pairingOptionTextMobile = (option: PairingOption) =>
  option.pricePerGuest > 0
    ? `${option.title} (${perGuestPrice(option)}/tamu)`
    : `${option.title} (${option.hint})`;

export const guestOptions = [
  { value: 1, label: "1 Tamu (Solo Counter)", mobileLabel: "1 Orang (Solo Dining)" },
  { value: 2, label: "2 Tamu (Sepasang)", mobileLabel: "2 Orang (Berpasangan)" },
  { value: 3, label: "3 Tamu", mobileLabel: "3 Orang" },
  { value: 4, label: "4 Tamu (Maksimal per grup)", mobileLabel: "4 Orang (Grup Kecil)" },
] as const;

const sessionMoods = ["Sore Menuju Malam", "Malam Intim"];
const romanNumerals = ["I", "II"];

export const sessionOptions = schedule.sessions.map(({ label, time }, index) => ({
  value: time,
  label: `${label} — ${time}`,
  mobileLabel: `Sesi ${romanNumerals[index]} — ${time} (${sessionMoods[index]})`,
}));

export function calculateEstimate(guests: number, pairing: PairingOption) {
  const omakase = OMAKASE_PRICE * guests;
  const beverage = pairing.pricePerGuest * guests;
  const subtotal = omakase + beverage;
  const tax = Math.round(subtotal * TAX_RATE);
  const total = subtotal + tax;

  return {
    omakase,
    beverage,
    subtotal,
    tax,
    total,
    deposit: Math.round(total * DEPOSIT_RATE),
    flatDeposit: DEPOSIT_PER_GUEST * guests,
  };
}

export type ReservationViewProps = {
  guests: number;
  onGuestsChange: (guests: number) => void;
  pairing: PairingId;
  onPairingChange: (pairing: PairingId) => void;
  seat?: Seat;
  submitted: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const venue = {
  area: "Kebayoran Baru, Jakarta Selatan",
  address: "Jl. Senopati No. 42, Kebayoran Baru, DKI Jakarta 12190",
  shortAddress: "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
  mapsHref: "https://maps.google.com/?q=Jl.+Senopati+No.+42+Kebayoran+Baru",
};

export const policy = {
  freeCancellationHours: 48,
  lateToleranceMinutes: 15,
  notes: ["Dress Code: Smart Casual", "Tanpa Parfum Menyengat"],
};

export const certification = {
  title: "Sertifikasi & Standar Rasa Kuro Nami",
  description: "Setiap potongan sushi dihidangkan di bawah pengawasan langsung Master Itamae Kenjiro Sato.",
  sealSrc: "/images/hanko.png",
  tags: ["職人技・伝統", "Edomae Asli", "Jakarta Selatan"],
};