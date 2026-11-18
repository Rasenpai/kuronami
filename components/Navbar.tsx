"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import { CloseIcon, MenuIcon } from "./icons";
import { navLinks, reservationHref, siteConfig } from "@/lib/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-outline-variant/60 bg-surface/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" onClick={closeMenu} className="flex items-center gap-3">
          <Image
            src="/images/hanko.png"
            alt=""
            width={40}
            height={40}
            className="xl:hidden"
          />
          <span className="flex flex-col">
            <span className="flex items-baseline gap-2 whitespace-nowrap">
              <span className="font-serif text-headline-sm text-on-surface xl:text-label-sm xl:text-outline xl:order-last">
                {siteConfig.kanji}
              </span>
              <span className="font-serif text-headline-sm xl:uppercase xl:tracking-wider">
                {siteConfig.name}
              </span>
            </span>
            <span className="text-label-sm uppercase text-secondary xl:hidden">
              Omakase Landing
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 xl:flex"
          aria-label="Navigasi utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-label-md uppercase text-on-surface-variant transition-colors duration-150 hover:text-on-surface"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#kontak"
            className="text-label-md uppercase text-on-surface-variant xl:hidden"
          >
            Kontak
          </a>
          <div className="hidden xl:block">
            <Button href={reservationHref} size="sm">
              Pesan Kursi
            </Button>
          </div>
          <Image
            src="/images/hanko.png"
            alt={`Stempel ${siteConfig.name}`}
            width={40}
            height={40}
            className="hidden xl:block"
          />
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-on-primary xl:hidden"
          >
            {isOpen ? (
              <CloseIcon className="h-4 w-4" />
            ) : (
              <MenuIcon className="h-4 w-4" />
            )}
          </button>
        </div>
      </Container>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navigasi seluler"
          className="border-t border-outline-variant/60 bg-surface xl:hidden"
        >
          <Container className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-outline-variant/40 py-4 text-label-md uppercase text-on-surface-variant"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={reservationHref}
              onClick={closeMenu}
              className="mt-6 w-full"
            >
              Pesan Kursi
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
