const ink = "#58413D";
const muted = "#8C716C";
const wood = "#6B5844";
const accent = "#B8402A";

export default function SeatMapSvg() {
  return (
    <svg
      className="h-full w-full"
      fill="none"
      viewBox="0 0 760 520"
      aria-hidden
    >
      <rect
        x="20"
        y="20"
        width="720"
        height="480"
        stroke="#E0BFB9"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        opacity="0.6"
      />

      <line x1="20" y1="460" x2="20" y2="400" stroke={accent} strokeWidth="3" />
      <text
        x="32"
        y="435"
        className="font-sans"
        fill={muted}
        fontSize="10"
        fontWeight="500"
        letterSpacing="0.12em"
      >
        PINTU MASUK NOREN (暖簾)
      </text>

      <rect
        x="70"
        y="60"
        width="480"
        height="90"
        fill="#F4ECE7"
        stroke={wood}
        strokeOpacity="0.35"
        strokeWidth="1.2"
      />
      <text
        x="310"
        y="95"
        textAnchor="middle"
        className="font-sans"
        fill={ink}
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.15em"
      >
        DAPUR TERBUKA &amp; RAK SAKE (板場)
      </text>
      <text
        x="310"
        y="115"
        textAnchor="middle"
        className="font-serif"
        fill={muted}
        fontSize="12"
        fontStyle="italic"
      >
        Koleksi Keramik Bizen &amp; Kukusan Nasi Shari Hangat
      </text>

      <rect
        x="250"
        y="175"
        width="130"
        height="50"
        fill="#FFF8F4"
        stroke={wood}
        strokeWidth="1.5"
      />
      <text
        x="315"
        y="198"
        textAnchor="middle"
        className="font-sans"
        fill={accent}
        fontSize="10"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        PAPAN YANAGIBA
      </text>
      <text
        x="315"
        y="214"
        textAnchor="middle"
        className="font-serif"
        fill="#6E5B47"
        fontSize="11"
      >
        Kenjiro Sato · 板前
      </text>

      <rect
        x="90"
        y="180"
        width="110"
        height="42"
        fill="#EFE7E1"
        stroke={wood}
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <text
        x="145"
        y="202"
        textAnchor="middle"
        className="font-sans"
        fill="#6E5B47"
        fontSize="9"
        letterSpacing="0.08em"
      >
        NETA-BAKO
      </text>
      <text
        x="145"
        y="214"
        textAnchor="middle"
        className="font-sans"
        fill={muted}
        fontSize="8"
      >
        Display Ikan Musiman
      </text>

      <rect
        x="420"
        y="180"
        width="100"
        height="42"
        fill="#EFE7E1"
        stroke={wood}
        strokeWidth="1"
        strokeDasharray="2 2"
      />
      <text
        x="470"
        y="202"
        textAnchor="middle"
        className="font-sans"
        fill="#6E5B47"
        fontSize="9"
        letterSpacing="0.08em"
      >
        SAKIZUKE &amp; SAKE
      </text>
      <text
        x="470"
        y="214"
        textAnchor="middle"
        className="font-sans"
        fill={muted}
        fontSize="8"
      >
        Persiapan Pembuka
      </text>

      <path
        d="M 60 250 L 560 250 A 20 20 0 0 1 580 270 L 580 470 L 510 470 L 510 320 L 60 320 Z"
        fill="#F4ECE7"
        stroke={wood}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M 64 256 L 556 256 A 14 14 0 0 1 574 270 L 574 466 L 516 466 L 516 314 L 64 314 Z"
        stroke="#E0BFB9"
        strokeWidth="1"
      />
      <text
        x="290"
        y="288"
        textAnchor="middle"
        className="font-serif"
        fill={ink}
        fontSize="16"
        fontWeight="500"
        letterSpacing="0.2em"
      >
        MEJA KAYU HINOKI UTUH (檜一枚板)
      </text>

      <line
        x1="210"
        y1="242"
        x2="210"
        y2="385"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />
      <line
        x1="395"
        y1="242"
        x2="395"
        y2="385"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />
      <line
        x1="500"
        y1="242"
        x2="660"
        y2="242"
        stroke={accent}
        strokeWidth="1"
        strokeDasharray="3 3"
        opacity="0.4"
      />

      <text
        x="135"
        y="405"
        textAnchor="middle"
        className="font-sans"
        fill={muted}
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        SAYAP BARAT · 01-04
      </text>
      <text
        x="302"
        y="405"
        textAnchor="middle"
        className="font-sans"
        fill={accent}
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        POSISI UTAMA (CENTER) · 05-08
      </text>
      <text
        x="645"
        y="325"
        textAnchor="middle"
        transform="rotate(90 645 325)"
        className="font-sans"
        fill={muted}
        fontSize="9"
        fontWeight="600"
        letterSpacing="0.1em"
      >
        SAYAP UTARA · 09-12
      </text>
    </svg>
  );
}
