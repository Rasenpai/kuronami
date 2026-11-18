import SeatMapSvg from "./SeatMapSvg";
import { cn } from "@/lib/cn";
import { formatSeatNumber, seats } from "@/lib/seats";

type SeatMapProps = {
  selectedId: number;
  onSelect: (id: number) => void;
};

const gridTexture = {
  backgroundImage:
    "linear-gradient(#6B5844 1px, transparent 1px), linear-gradient(90deg, #6B5844 1px, transparent 1px)",
  backgroundSize: "24px 24px",
};

export default function SeatMap({ selectedId, onSelect }: SeatMapProps) {
  return (
    <div className="hidden border border-outline-variant bg-surface-container-low p-6 lg:block">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-outline-variant/60 pb-2">
        <span className="text-label-md uppercase text-on-surface-variant">
          Denah Presisi Meja L-Counter (1:20)
        </span>
        <div className="flex items-center gap-4 text-label-sm uppercase text-secondary">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 border border-primary bg-primary" />
            Dipilih
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 border border-secondary/50 bg-surface" />
            Kursi Tersedia
          </span>
        </div>
      </div>

      <div className="relative mt-4 aspect-[16/11] select-none overflow-hidden border border-outline-variant/40 bg-surface-container-low p-4">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={gridTexture}
        />
        <SeatMapSvg />

        {seats.map((seat) => {
          const isSelected = seat.id === selectedId;

          return (
            <button
              key={seat.id}
              type="button"
              aria-pressed={isSelected}
              title={`Kursi ${formatSeatNumber(seat.id)} - ${seat.zone}`}
              onClick={() => onSelect(seat.id)}
              style={seat.position}
              className={cn(
                "absolute flex h-10 w-10 items-center justify-center text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                isSelected
                  ? "border-2 border-primary bg-primary font-bold text-on-primary ring-2 ring-primary/20"
                  : "border border-secondary bg-surface font-semibold text-on-surface hover:border-primary",
              )}
            >
              {formatSeatNumber(seat.id)}
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-outline-variant/60 pt-1 text-xs text-outline">
        <span>
          Klik nomor kursi pada diagram untuk melihat sudut pandang &amp;
          ketersediaan.
        </span>
        <span className="font-serif italic">無垢檜カウンター十二席</span>
      </div>
    </div>
  );
}
