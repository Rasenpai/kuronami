"use client";

import { useState } from "react";
import Container from "../Container";
import MenuTabs from "./MenuTabs";
import OmakasePane from "./OmakasePane";
import SakePane from "./SakePane";
import TeaPane from "./TeaPane";
import { formatIDR } from "@/lib/format";
import { menuTabs, type MenuTabId } from "@/lib/menu";

const panes = {
  omakase: OmakasePane,
  sake: SakePane,
  tea: TeaPane,
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState<MenuTabId>("omakase");
  const tab = menuTabs.find((item) => item.id === activeTab) ?? menuTabs[0];
  const Pane = panes[tab.id];

  return (
    <section id="sajian" className="py-12">
      <Container>
        <header className="mb-6 flex items-baseline justify-between lg:hidden">
          <div className="flex flex-col">
            <span className="text-label-sm uppercase tracking-[0.25em] text-secondary">
              Menu &amp; Kurasi Minuman
            </span>
            <h2 className="font-serif text-headline-sm uppercase text-on-surface">
              Sajian &amp; Pasangan • 献立
            </h2>
          </div>
          <span className="text-label-sm uppercase text-secondary">
            Musim Dingin
          </span>
        </header>

        <header className="mx-auto mb-6 hidden max-w-4xl flex-col items-center gap-2 text-center lg:flex">
          <span className="text-label-sm font-medium uppercase text-primary">
            02 / Kurasi Sajian &amp; Rasa · おまかせ
          </span>
          <h2 className="font-serif text-headline-lg text-on-surface">
            Musim Dingin · Edisi Tokyo &amp; Nusantara
          </h2>
          <p className="max-w-lg text-body-md text-secondary">
            Disajikan berurutan mengikuti ritme rasa tradisional Omakase, dari
            harmoni hidangan laut segar hingga kurasi pendamping cairan
            artisanal.
          </p>
        </header>

        <MenuTabs activeTab={activeTab} onChange={setActiveTab} />

        <div
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          className="relative lg:mx-auto lg:max-w-4xl lg:border lg:border-outline-variant/60 lg:bg-surface-container-low lg:p-12"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute right-6 top-8 hidden select-none font-serif text-[6rem] leading-none text-outline-variant/20 [writing-mode:vertical-rl] lg:block"
          >
            {tab.watermark}
          </span>

          <Pane />

          <div className="mt-8 flex flex-col gap-2 border-t border-outline-variant/50 pt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
            <div className="flex flex-col">
              <span className="hidden text-label-sm uppercase text-outline lg:block">
                {tab.priceLabel}
              </span>
              <span className="font-serif text-headline-sm text-on-surface lg:text-headline-md lg:text-primary">
                {formatIDR(tab.price)}
                <span className="font-sans text-body-sm text-secondary lg:text-label-md">
                  ++ / tamu
                </span>
              </span>
            </div>
            <p className="text-label-sm italic text-secondary lg:max-w-sm lg:text-right lg:text-body-sm lg:not-italic lg:text-outline">
              {tab.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
