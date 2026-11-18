import { useId, type ReactNode } from "react";
import {
  ArrowRightIcon,
  CalculatorIcon,
  DirectionsIcon,
  InfoIcon,
} from "@/components/icons";
import {
  DEPOSIT_RATE,
  TAX_RATE,
  calculateEstimate,
  getPairing,
  guestOptions,
  pairingOptions,
  pairingOptionText,
  policy,
  sessionOptions,
  venue,
  type PairingId,
  type ReservationViewProps,
} from "@/lib/reservation";
import { formatSeatNumber } from "@/lib/seats";
import { cn } from "@/lib/cn";
import { formatIDR } from "@/lib/format";

const fieldClass =
  "w-full cursor-pointer rounded-none border-b border-secondary/60 bg-transparent px-0 py-2 text-body-md text-on-surface outline-none transition-colors duration-150 placeholder:text-outline/60 focus:border-primary";

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
    <div className="flex flex-col gap-1">
      <label
        htmlFor={htmlFor}
        className="text-label-sm font-medium uppercase text-secondary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function EstimateRow({
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
        "flex items-baseline justify-between",
        muted && "text-xs text-outline",
      )}
    >
      <span className={cn(!muted && "text-secondary")}>{label}</span>
      <span className={cn(!muted && "font-medium text-on-surface")}>
        {value}
      </span>
    </div>
  );
}

function EstimatePanel({
  guests,
  pairingId,
}: {
  guests: number;
  pairingId: PairingId;
}) {
  const pairing = getPairing(pairingId);
  const estimate = calculateEstimate(guests, pairing);
  const depositPercent = DEPOSIT_RATE * 100;

  return (
    <div className="border-2 border-primary/40 bg-surface-container-low p-4 shadow-sm">
      <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
        <div className="flex items-center gap-2">
          <CalculatorIcon className="h-5 w-5 text-primary" />
          <span className="text-label-md font-semibold uppercase text-on-surface">
            Rincian Estimasi Investasi
          </span>
        </div>
        <span className="text-label-sm uppercase text-primary">Real-Time</span>
      </div>

      <div className="space-y-2 py-3 text-body-sm">
        <EstimateRow
          label={`Omakase Musim Dingin (${guests} Tamu)`}
          value={formatIDR(estimate.omakase)}
        />
        <EstimateRow
          label={`${pairing.name} (${guests} Tamu)`}
          value={formatIDR(estimate.beverage)}
        />
        <div className="border-t border-outline-variant/30 pt-1">
          <EstimateRow
            muted
            label="Subtotal Hidangan & Minuman"
            value={formatIDR(estimate.subtotal)}
          />
        </div>
        <EstimateRow
          muted
          label={`Pajak Restoran & Layanan (${TAX_RATE * 100}%)`}
          value={formatIDR(estimate.tax)}
        />
      </div>

      <div className="-mx-1 flex items-baseline justify-between border-t border-primary/40 bg-surface-container/60 p-2">
        <div>
          <span className="block text-label-sm uppercase text-outline">
            Total Estimasi
          </span>
          <span className="font-serif text-headline-md text-primary">
            {formatIDR(estimate.total)}
          </span>
        </div>
        <div className="text-right">
          <span className="block text-label-sm font-semibold uppercase text-primary">
            Deposit Komitmen ({depositPercent}%)
          </span>
          <span className="font-serif text-headline-sm font-semibold text-on-surface">
            {formatIDR(estimate.deposit)}
          </span>
        </div>
      </div>

      <p className="mt-2 text-[0.6875rem] leading-tight text-outline">
        *Deposit komitmen {depositPercent}% akan dipotong dari total tagihan
        akhir saat sesi selesai di counter.
      </p>
    </div>
  );
}

function VenueInfo() {
  return (
    <div className="border-b border-outline-variant/40 pb-3">
      <span className="mb-1 block text-label-sm font-semibold uppercase text-primary">
        Lokasi Counter
      </span>
      <h3 className="mb-1 font-serif text-headline-sm text-on-surface">
        {venue.area}
      </h3>
      <address className="text-body-sm not-italic leading-relaxed text-secondary">
        {venue.address}
      </address>
      <a
        href={venue.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-label-md text-primary underline transition-colors hover:text-on-surface"
      >
        <DirectionsIcon className="h-4 w-4" />
        Petunjuk Arah Google Maps
      </a>
    </div>
  );
}

function PolicyNotice() {
  return (
    <div className="border border-outline-variant/50 bg-surface-container p-4">
      <div className="mb-2 flex items-center gap-2 text-primary">
        <InfoIcon className="h-5 w-5" />
        <span className="text-label-md font-semibold uppercase">
          Etiket & Kebijakan Pembatalan
        </span>
      </div>
      <p className="text-body-sm leading-relaxed text-secondary">
        Pembatalan tanpa biaya dapat dilakukan hingga{" "}
        <strong className="font-semibold text-on-surface">
          {policy.freeCancellationHours} jam
        </strong>{" "}
        sebelum sesi. Keterlambatan lebih dari {policy.lateToleranceMinutes}{" "}
        menit akan disesuaikan dengan alur sajian yang sedang berjalan.
      </p>
      <div className="mt-3 flex items-center justify-between gap-2 border-t border-outline-variant/30 pt-2 text-label-sm uppercase text-outline">
        {policy.notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </div>
  );
}

export default function ReservationDesktop({
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
    ? `Kursi ${formatSeatNumber(seat.id)} · ${seat.zone}`
    : "";

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-12 items-start gap-6 px-16 py-12">
      <div className="col-span-7 border border-outline-variant/60 bg-surface-container-low p-12 shadow-sm">
        <div className="mb-4 flex items-center justify-between border-b border-outline-variant/40 pb-1">
          <div>
            <span className="block text-label-sm uppercase text-primary">
              06 / Reservasi Kursi
            </span>
            <h2 className="font-serif text-headline-md text-on-surface">
              Formulir Ketersediaan & Pairing
            </h2>
          </div>
          <span className="font-serif text-headline-md text-outline">席</span>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <Field label="Nama Lengkap Pemesan *" htmlFor={id("name")}>
            <input
              id={id("name")}
              name="name"
              type="text"
              required
              placeholder="Contoh: Budi Hartono"
              className={fieldClass}
            />
          </Field>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <Field label="Tanggal Sesi *" htmlFor={id("date")}>
              <input
                id={id("date")}
                name="date"
                type="date"
                required
                className={fieldClass}
              />
            </Field>
            <Field label="Pilihan Sesi Jam *" htmlFor={id("session")}>
              <select
                id={id("session")}
                name="session"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Pilih Jam Duduk
                </option>
                {sessionOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <Field label="Jumlah Tamu (Maks. 4 kursi) *" htmlFor={id("guests")}>
              <select
                id={id("guests")}
                name="guests"
                required
                value={guests}
                onChange={(event) => onGuestsChange(Number(event.target.value))}
                className={fieldClass}
              >
                {guestOptions.map(({ value, label }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Nomor WhatsApp Aktif *" htmlFor={id("phone")}>
              <input
                id={id("phone")}
                name="phone"
                type="tel"
                required
                placeholder="+62 812 xxxx xxxx"
                className={fieldClass}
              />
            </Field>
          </div>

          <div className="border border-outline-variant/50 bg-surface p-2 pt-1">
            <label
              htmlFor={id("pairing")}
              className="mb-2 block text-label-sm font-semibold uppercase text-primary"
            >
              Modul Seleksi Pairing Minuman Kurasi
            </label>
            <select
              id={id("pairing")}
              name="pairing"
              value={pairing}
              onChange={(event) =>
                onPairingChange(event.target.value as PairingId)
              }
              className={fieldClass}
            >
              {pairingOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {pairingOptionText(option)}
                </option>
              ))}
            </select>
            <span className="mt-1.5 block text-[0.7rem] text-outline">
              *Pairing disajikan seirama 18 tahapan omakase per tamu.
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-1">
            <Field label="Catatan Alergi / Pantangan" htmlFor={id("notes")}>
              <input
                id={id("notes")}
                name="notes"
                type="text"
                placeholder="Contoh: Alergi udang / Tanpa kerang"
                className={fieldClass}
              />
            </Field>
            <Field label="Preferensi Kursi Counter" htmlFor={id("seat")}>
              <input
                id={id("seat")}
                name="seat"
                type="text"
                readOnly
                value={seatLabel}
                placeholder="Pilih kursi pada denah di atas"
                className={cn(fieldClass, "cursor-default")}
              />
            </Field>
          </div>

          <div className="flex items-start gap-3 pt-1">
            <input
              id={id("agree")}
              type="checkbox"
              required
              className="mt-1 h-4 w-4 cursor-pointer rounded-none accent-primary"
            />
            <label
              htmlFor={id("agree")}
              className="cursor-pointer text-body-sm leading-tight text-secondary"
            >
              Saya memahami kebijakan pembatalan {policy.freeCancellationHours}{" "}
              jam dan pentingnya hadir tepat waktu demi menjaga temperatur
              hidangan shari.
            </label>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-none bg-primary-container py-2 text-label-md uppercase text-on-primary transition-colors duration-150 hover:bg-primary"
            >
              <span>Konfirmasi Ketersediaan</span>
              <ArrowRightIcon className="h-[1.125rem] w-[1.125rem]" />
            </button>
            {submitted && (
              <p role="status" className="mt-3 text-body-sm text-primary">
                Terima kasih. Permintaan reservasi Anda telah kami terima. Tim
                Kuro Nami akan menghubungi WhatsApp Anda.
              </p>
            )}
          </div>
        </form>
      </div>

      <aside className="col-span-5 flex flex-col gap-4 pl-4">
        <EstimatePanel guests={guests} pairingId={pairing} />
        <VenueInfo />
        <PolicyNotice />
      </aside>
    </div>
  );
}
