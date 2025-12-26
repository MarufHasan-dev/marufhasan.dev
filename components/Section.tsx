import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: "primary" | "secondary";
}

export default function Section({
  id,
  children,
  className = "",
  background = "primary",
}: SectionProps) {
  const bgClass =
    background === "secondary"
      ? "bg-[var(--color-bg-secondary)]"
      : "bg-[var(--color-bg-primary)]";

  return (
    <section
      id={id}
      className={`py-[var(--section-padding)] ${bgClass} ${className}`}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">{children}</div>
    </section>
  );
}
