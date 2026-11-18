import Image from "next/image";
import type { ReactNode } from "react";
import Container from "./Container";
import { contact, policyLinks, schedule, siteConfig } from "@/lib/site";

type FooterColumnProps = {
  title: string;
  className: string;
  children: ReactNode;
};

function FooterColumn({ title, className, children }: FooterColumnProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="text-label-sm uppercase text-outline">{title}</span>
      <div className="text-body-sm text-on-surface">{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="kontak"
      className="mt-12 border-t border-outline-variant/60 bg-surface-container-low"
    >
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-2 md:col-span-4">
            <div className="flex items-center gap-3">
              <Image src="/images/hanko.png" alt="" width={40} height={40} />
              <span className="font-serif text-headline-md tracking-wide">
                {siteConfig.name}
              </span>
              <span className="font-serif text-headline-sm text-primary">
                {siteConfig.kanji}
              </span>
            </div>
            <p className="max-w-sm text-body-sm text-on-surface-variant">
              Pengalaman gastronomi omakase intim berbasis musim, memadukan
              teknik edomae klasik dengan kemurnian bahan laut nusantara dan
              Toyosu.
            </p>
          </div>

          <FooterColumn title="Lokasi" className="md:col-span-3">
            <address className="not-italic">
              {contact.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </FooterColumn>

          <FooterColumn title="Sesi Duduk (Seating)" className="md:col-span-3">
            <span className="block">{schedule.days}</span>
            {schedule.sessions.map((session) => (
              <span key={session.label} className="block">
                {session.label}: {session.time}
              </span>
            ))}
            <span className="block text-outline">({schedule.closedNote})</span>
          </FooterColumn>

          <FooterColumn title="Korespondensi" className="md:col-span-2">
            <a
              href={contact.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-primary"
            >
              {contact.instagram.label}
            </a>
            <a
              href={contact.phone.href}
              className="block transition-colors hover:text-primary"
            >
              {contact.phone.label}
            </a>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-outline-variant/40 pt-6 sm:flex-row">
          <span className="text-label-sm uppercase text-outline">
            © {siteConfig.copyrightYear} {siteConfig.name} Omakase. Hak Cipta
            Dilindungi.
          </span>
          <ul className="flex items-center gap-4">
            {policyLinks.map((link, index) => (
              <li key={link.label} className="flex items-center gap-4">
                {index > 0 && <span className="text-outline">/</span>}
                <a
                  href={link.href}
                  className="text-label-sm uppercase text-outline transition-colors hover:text-on-surface"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
