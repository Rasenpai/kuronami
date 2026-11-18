type SectionLabelProps = {
  index: string;
  title: string;
  kanji: string;
};

export default function SectionLabel({
  index,
  title,
  kanji,
}: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-px w-2 bg-primary lg:hidden" />
      <span className="text-label-sm uppercase tracking-[0.2em] text-secondary lg:font-semibold lg:text-primary">
        <span className="hidden lg:inline">{index} / </span>
        {title} · {kanji}
      </span>
      <span className="hidden h-px w-12 bg-outline-variant/60 lg:block" />
    </div>
  );
}
