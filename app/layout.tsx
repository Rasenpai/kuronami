import type { Metadata } from "next";
import { EB_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kuro Nami 黒波 — Omakase Jakarta Selatan",
  description:
    "Dua belas kursi, satu koki, setiap malam berbeda. Pengalaman omakase edomae intim di Jakarta Selatan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${garamond.variable} ${workSans.variable}`}>
      <body className="bg-surface font-sans text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
