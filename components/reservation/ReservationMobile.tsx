import { useId, type ReactNode } from "react";
import { ReceiptIcon, WineIcon } from "@/components/icons";
import { OMAKASE_PRICE } from "@/lib/menu";
import {
  DEPOSIT_PER_GUEST,
  MAX_GUESTS,
  TAX_RATE,
  calculateEstimate,
  getPairing,
  guestOptions,
  pairingOptions,
  pairingOptionTextMobile,
  policy,
  sessionOptions,
  venue,
  type PairingId,
  type PairingOption,
  type ReservationViewProps,
} from "@/lib/reservation";
import { formatSeatNumber, seats } from "@/lib/seats";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/format";

const fieldClass =
  "w-full rounded-none border-b border-secondary/40 bg-surface-container px-2 py-2.5 text-body-md text-on-surface outline-none transition-colors placeholder:text-secondary/50 focus:border-primary";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={htmlFor}
        className="mb-1 text-label-sm uppercase text-secondary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function PairingCard({
  option,
  checked,
  onSelect,
}: {
  option: PairingOption;
  checked: boolean;
  onSelect: (id: PairingId) => void;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-2.5 border p-2.5 transition-all",
        checked
          ? "border-primary bg-surface"
          : "border-secondary/30 bg-surface-container-lowest",
      )}
    >
      <input
        type="radio"
        name="pairing"
        value={option.id}
        checked={checked}
        onChange={() => onSelect(option.id)}
        className="mt-1 h-4 w-4 accent-primary"
      />
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-sm font-medium text-on-surface">
            {option.title}
          </span>
          {option.pricePerGuest > 0 && (
            <span className="text-xs font-semibold text-primary">
              (+{formatIDR(option.pricePerGuest)}/tamu)
            </span>
          )}
          {option.badge && (
            <span className="rounded-[2px] border border-primary/30 bg-primary/10 px-1.5 text-[9px] font-semibold uppercase tracking-wider text-primary">
              {option.badge}
            </span>
          )}
        </div>
        <span className="mt-0.5 text-xs text-secondary">
          {option.description}
        </span>
      </div>
    </label>
  );
}

function SummaryRow({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-3",
        muted ? "text-secondary" : "text-on-surface",
      )}
    >
      <span>{label}</span>
      <span className="shrink-0 text-right font-mono font-medium">{value}</span>
    </div>
  );
}

function SummaryPanel({
  guests,
  pairingId,
}: {
  guests: number;
  pairingId: PairingId;
}) {
  const pairing = getPairing(pairingId);
  const estimate = calculateEstimate(guests, pairing);

  return (
    <div className="flex flex-col gap-2.5 rounded-[2px] border border-secondary/30 bg-surface-container-low p-3.5">
      <div className="flex items-center justify-between border-b border-secondary/20 pb-2">
        <div className="flex items-center gap-1.5">
          <ReceiptIcon className="h-4 w-4 text-primary" />
          <span className="text-label-sm font-semibold uppercase text-on-surface">
            Rincian Kalkulasi Total Estimasi
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
          {guests} Tamu
        </span>
      </div>

      <div className="flex flex-col gap-1.5 text-xs">
        <SummaryRow
          label={`Sajian Omakase (${guests} tamu x ${formatIDR(OMAKASE_PRICE)})`}
          value={formatIDR(estimate.omakase)}
        />
        <SummaryRow
          label={`Minuman Pendamping (${pairing.title})`}
          value={formatIDR(estimate.beverage)}
        />
        <div className="border-t border-dashed border-secondary/20 pt-1">
          <SummaryRow
            muted
            label="Subtotal Hidangan & Minuman"
            value={formatIDR(estimate.subtotal)}
          />
        </div>
        <SummaryRow
          muted
          label={`Layanan & Pajak Pemerintah (${TAX_RATE * 100}%)`}
          value={formatIDR(estimate.tax)}
        />
      </div>

      <div className="-mx-3.5 -mb-3.5 flex items-baseline justify-between gap-3 border-t border-secondary/30 bg-surface-container/60 p-3.5 pt-2">
        <div className="flex flex-col">
          <span className="text-[11px] uppercase tracking-wider text-secondary">
            Total Estimasi Keseluruhan
          </span>
          <span className="text-[10px] font-medium italic text-primary">
            Deposit komitmen: {formatIDR(estimate.flatDeposit)} (
            {formatIDR(DEPOSIT_PER_GUEST)}/tamu)
          </span>
        </div>
        <span className="font-mono text-xl font-semibold text-primary">
          {formatIDR(estimate.total)}
        </span>
      </div>
    </div>
  );
}

export default function ReservationMobile({
  guests,
  onGuestsChange,
  pairing,
  onPairingChange,
  seat,
  submitted,
  onSubmit,
}: ReservationViewProps) {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const seatLabel = seat
    ? `Kursi K-${formatSeatNumber(seat.id)} · ${seat.zone}`
    : "";

  return (
    <div className="flex flex-col px-4 py-12">
      <div className="mb-1 flex items-center gap-1">
        <span className="h-px w-2 bg-primary" />
        <span className="text-label-sm uppercase text-secondary">
          Pemesanan • 予約
        </span>
      </div>
      <h2 className="mb-4 font-serif text-headline-md tracking-tight text-on-surface">
        Reservasi Kursi
      </h2>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <Field label="Nama Lengkap" htmlFor={id("name")}>
          <input
            id={id("name")}
            name="name"
            type="text"
            required
            placeholder="cth. Raden Mas Arya"
            className={fieldClass}
          />
        </Field>

        <Field label="Tanggal Sesi" htmlFor={id("date")}>
          <input
            id={id("date")}
            name="date"
            type="date"
            required
            className={fieldClass}
          />
        </Field>

        <Field label="Pilihan Sesi & Waktu" htmlFor={id("session")}>
          <select
            id={id("session")}
            name="session"
            required
            defaultValue={sessionOptions[0].value}
            className={fieldClass}
          >
            {sessionOptions.map(({ value, mobileLabel }) => (
              <option key={value} value={value}>
                {mobileLabel}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label={`Jumlah Tamu (Maksimal ${MAX_GUESTS} Kursi per Reservasi)`}
          htmlFor={id("guests")}
        >
          <select
            id={id("guests")}
            name="guests"
            required
            value={guests}
            onChange={(event) => onGuestsChange(Number(event.target.value))}
            className={fieldClass}
          >
            {guestOptions.map(({ value, mobileLabel }) => (
              <option key={value} value={value}>
                {mobileLabel}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferensi Kursi Terpilih" htmlFor={id("seat")}>
          <input
            id={id("seat")}
            name="seat"
            type="text"
            readOnly
            value={seatLabel}
            placeholder="Pilih kursi pada denah"
            className={cn(fieldClass, "bg-surface-container-high")}
          />
        </Field>

        <div className="flex flex-col border border-secondary/30 bg-surface-container-low p-3">
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor={id("pairing")}
              className="flex items-center gap-1.5 text-label-sm font-semibold uppercase text-on-surface"
            >
              <WineIcon className="h-4 w-4 text-primary" />
              Paket Kurasi Minuman Pendamping
            </label>
            <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
              Opsional
            </span>
          </div>
          <select
            id={id("pairing")}
            value={pairing}
            onChange={(event) =>
              onPairingChange(event.target.value as PairingId)
            }
            className="mb-3 w-full rounded-none border border-secondary/30 bg-surface px-2 py-2.5 text-body-md text-on-surface outline-none transition-colors focus:border-primary"
          >
            {pairingOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {pairingOptionTextMobile(option)}
              </option>
            ))}
          </select>
          <div className="flex flex-col gap-2">
            {pairingOptions.map((option) => (
              <PairingCard
                key={option.id}
                option={option}
                checked={option.id === pairing}
                onSelect={onPairingChange}
              />
            ))}
          </div>
        </div>

        <SummaryPanel guests={guests} pairingId={pairing} />

        <Field label="Nomor WhatsApp" htmlFor={id("phone")}>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            required
            placeholder="+62 812-XXXX-XXXX"
            className={fieldClass}
          />
        </Field>

        <div>
          <button
            type="submit"
            className="mt-2 h-12 w-full rounded-none bg-primary-container text-label-md uppercase tracking-[0.2em] text-on-primary transition-opacity hover:opacity-95 active:opacity-90"
          >
            Konfirmasi Ketersediaan
          </button>
          {submitted && (
            <p role="status" className="mt-3 text-body-sm text-primary">
              Terima kasih. Permintaan reservasi Anda telah kami terima. Tim
              Kuro Nami akan menghubungi WhatsApp Anda.
            </p>
          )}
        </div>
      </form>

      <div className="mt-6 flex flex-col gap-3 border-t border-secondary/20 pt-4 text-body-sm text-on-surface-variant">
        <div>
          <span className="mb-0.5 block text-label-sm uppercase text-secondary">
            Lokasi Counter
          </span>
          {venue.shortAddress}
        </div>
        <div>
          <span className="mb-0.5 block text-label-sm uppercase text-secondary">
            Kebijakan Pembatalan & Deposit
          </span>
          <p className="leading-relaxed text-secondary">
            Deposit komitmen {formatIDR(DEPOSIT_PER_GUEST)} per tamu untuk
            memastikan reservasi kursi counter {seats.length} tempat duduk.
            Pembatalan tanpa biaya dapat dilakukan hingga{" "}
            {policy.freeCancellationHours} jam sebelum sesi. Keterlambatan lebih
            dari {policy.lateToleranceMinutes} menit akan disesuaikan dengan
            alur sajian yang sedang berjalan demi menjaga kualitas shari.
          </p>
        </div>
      </div>
    </div>
  );
}
