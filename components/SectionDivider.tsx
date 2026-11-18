import Container from "./Container";

type SectionDividerProps = {
  label?: string;
};

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <Container className="py-2">
      <div className="relative flex h-px items-center justify-center bg-outline-variant/50">
        {label && (
          <span className="hidden bg-surface px-4 text-label-sm text-outline lg:block">
            {label}
          </span>
        )}
      </div>
    </Container>
  );
}
