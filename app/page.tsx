import Atmosphere from "@/components/Atmosphere";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Itamae from "@/components/Itamae";
import Navbar from "@/components/Navbar";
import Philosophy from "@/components/Philosophy";
import { ReservationProvider } from "@/components/ReservationProvider";
import SectionDivider from "@/components/SectionDivider";
import Menu from "@/components/menu/Menu";
import Certification from "@/components/reservation/Certification";
import Reservation from "@/components/reservation/Reservation";
import Seating from "@/components/seating/Seating";

export default function Home() {
  return (
    <ReservationProvider>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <SectionDivider label="黒波 · 哲学" />
        <Philosophy />
        <SectionDivider />
        <Menu />
        <SectionDivider />
        <Itamae />
        <SectionDivider />
        <Atmosphere />
        <SectionDivider />
        <Seating />
        <SectionDivider />
        <Reservation />
        <Certification />
      </main>
      <Footer />
    </ReservationProvider>
  );
}
