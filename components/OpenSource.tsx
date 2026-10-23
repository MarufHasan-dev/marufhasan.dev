import {
  openSourceContributions,
  openSourceProject,
} from "@/lib/data";

const featuredContributions = openSourceContributions.slice(0, 2);
const additionalContributions = openSourceContributions.slice(2);

export default function OpenSource() {
  return (
    <section
      id="open-source"
      aria-labelledby="open-source-heading"
      className="scroll-mt-20 bg-surface py-section"
    >
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:mb-14 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Open-source work
            </p>
            <h2
              id="open-source-heading"
              className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Open-source contributions
              <span className="text-accent">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-secondary md:text-lg">
              I contribute features and fixes to {openSourceProject.name},
              helping make a self-hosted AI workspace more capable, reliable,
              and maintainable.
            </p>
          </div>

          <a
            href={openSourceProject.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-5 rounded-[1.75rem] border border-border bg-muted p-6 transition-colors hover:border-accent/30 hover:bg-[#f1f1f4] sm:p-7"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface text-primary">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                  Contributing to
                </span>
                <span className="mt-1 block text-xl font-semibold tracking-tight text-primary">
                  {openSourceProject.name}
                </span>
                <span className="mt-1 block text-sm text-secondary">
                  {openSourceProject.description}
                </span>
              </span>
            </span>
            <span
              className="shrink-0 text-xl text-secondary transition-transform group-hover:translate-x-1 group-hover:text-accent"
              aria-hidden="true"
            >
              ↗
            </span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>

        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight text-primary">
            Selected contributions
          </h3>
          <p className="text-sm text-secondary">
            {openSourceContributions.length} merged pull requests
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {featuredContributions.map((contribution, index) => (
            <article
              key={contribution.number}
              className="flex h-full flex-col rounded-[1.75rem] border border-border bg-muted p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,29,31,0.08)] sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                  Featured · {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-secondary">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  Merged
                </span>
              </div>

              <h4 className="mb-3 mt-7 text-2xl font-semibold tracking-tight text-primary sm:text-[1.7rem]">
                {contribution.title}
              </h4>
              <p className="mb-6 leading-7 text-secondary">
                {contribution.summary}
              </p>

              {contribution.focusAreas && (
                <ul className="mb-7 flex flex-wrap gap-2">
                  {contribution.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-black/[0.07] bg-surface px-3 py-1.5 text-xs font-medium text-secondary"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={contribution.url}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary/85"
              >
                View PR #{contribution.number}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-border bg-surface">
          <div className="border-b border-border px-6 py-5 sm:px-8">
            <h3 className="text-base font-semibold text-primary">
              More fixes and maintenance
            </h3>
          </div>
          <div className="divide-y divide-border">
            {additionalContributions.map((contribution) => (
              <article
                key={contribution.number}
                className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div className="min-w-0">
                  <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h4 className="font-semibold text-primary">
                      {contribution.title}
                    </h4>
                    <span className="text-xs font-medium text-secondary">
                      PR #{contribution.number}
                    </span>
                  </div>
                  <p className="max-w-3xl text-sm leading-6 text-secondary">
                    {contribution.summary}
                  </p>
                </div>
                <a
                  href={contribution.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit shrink-0 items-center gap-2 text-sm font-medium text-[#0066cc] hover:underline focus-visible:underline"
                >
                  View PR
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-secondary">
            These changes have all been merged into Odysseus.
          </p>
          <a
            href={openSourceProject.mergedPullRequestsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0066cc] hover:underline focus-visible:underline"
          >
            View all my merged pull requests
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
