import { cn } from "@/lib/cn";
import { formatSeatNumber, seats, type Seat } from "@/lib/seats";

type SeatGridProps = {
  selected: Seat;
  onSelect: (id: number) => void;
};

export default function SeatGrid({ selected, onSelect }: SeatGridProps) {
  const selectedNumber = formatSeatNumber(selected.id);

  return (
    <div className="flex flex-col gap-4 border border-secondary/25 bg-surface-container-low p-4 lg:hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col">
          <span className="text-label-sm font-semibold uppercase text-primary">
            Denah Counter Meja Hinoki
          </span>
          <span className="text-xs text-secondary">
            Sentuh kursi untuk memilih preferensi posisi duduk
          </span>
        </div>
        <span className="shrink-0 border border-secondary/30 bg-surface px-2 py-0.5 text-xs text-secondary">
          Kursi {selectedNumber} Dipilih
        </span>
      </div>

      <div className="flex flex-col items-center border border-secondary/20 bg-surface p-3">
        <div className="mb-3 w-full border-b border-dashed border-secondary/40 bg-secondary-container/30 py-1 text-center text-label-sm uppercase text-secondary">
          エリア・Meja Potong Itamae Kenjiro
        </div>
        <div className="relative mb-3 flex h-3 w-full items-center justify-center bg-secondary/70">
          <span className="text-[9px] font-medium uppercase tracking-widest text-surface">
            Kayu Hinoki Utuh
          </span>
        </div>
        <div className="grid w-full max-w-xs grid-cols-6 gap-2">
          {seats.map((seat) => {
            const isSelected = seat.id === selected.id;

            return (
              <button
                key={seat.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelect(seat.id)}
                className={cn(
                  "border py-2 text-center font-mono text-xs transition-colors",
                  isSelected
                    ? "border-primary bg-primary font-semibold text-on-primary"
                    : "border-secondary/30 bg-surface-container text-on-surface hover:border-primary",
                )}
              >
                K-{formatSeatNumber(seat.id)}
              </button>
            );
          })}
        </div>
      </div>

      <p className="text-xs italic text-secondary">
        POV Kursi K-{selectedNumber}: {selected.pov}
      </p>
    </div>
  );
}
