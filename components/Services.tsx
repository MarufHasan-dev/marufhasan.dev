import Reveal, { RevealItem } from "./Reveal";

const freelanceWork = [
  "Full-stack web applications",
  "Backend and API development",
  "CMS-powered sites with SEO",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 bg-muted py-12 sm:py-14"
    >
      <Reveal stagger>
        <div className="mx-auto max-w-300 px-6 lg:px-8">
          <RevealItem>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  Selected engagements
                </p>
                <h2
                  id="services-heading"
                  className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl"
                >
                  Freelance work
                </h2>
              </div>
            </div>
          </RevealItem>

          <ul className="grid gap-3 sm:grid-cols-3">
            {freelanceWork.map((item, index) => (
              <RevealItem as="li" key={item} className="flex min-h-20 items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4">
                <span className="text-xs font-semibold tracking-[0.12em] text-[#0066cc]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium leading-6 text-primary sm:text-base">
                  {item}
                </span>
              </RevealItem>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
