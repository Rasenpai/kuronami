import Image from "next/image";
import { certification } from "@/lib/reservation";

export default function Certification() {
  const { title, description, sealSrc, tags } = certification;

  return (
    <section className="hidden w-full border-y border-outline-variant/50 bg-surface-container py-4 md:block">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-16">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 shrink-0 border border-primary/40 bg-surface p-1.5">
            <Image
              src={sealSrc}
              alt="Segel Hanko Kuro Nami"
              width={56}
              height={56}
              className="h-full w-full object-contain contrast-125"
            />
          </div>
          <div>
            <span className="block text-label-md font-semibold uppercase text-on-surface">
              {title}
            </span>
            <p className="text-body-sm text-secondary">{description}</p>
          </div>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-outline">
          {tags.map((tag, index) => (
            <li
              key={tag}
              className="flex items-center gap-6 text-label-sm uppercase"
            >
              {index > 0 && (
                <span aria-hidden className="h-1 w-1 rounded-full bg-outline" />
              )}
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
