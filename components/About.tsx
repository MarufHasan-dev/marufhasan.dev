import Link from "next/link";

const skills = [
  {
    category: "Strong",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js (App Router)",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "REST API design",
    ],
  },
  {
    category: "Working knowledge",
    items: [
      "Docker",
      "Nginx",
      "Google Cloud Platform",
      "Vercel",
      "Cloudflare (Images, Stream, Turnstile)",
      "Redis (Upstash)",
      "Neon",
      "Contentful",
      "Git",
    ],
  },
  {
    category: "Familiar",
    items: ["Google Maps API", "Figma"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-section bg-muted">
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        <div className="max-w-4xl">
          <h2 className="mb-6 text-3xl font-semibold tracking-tight text-primary sm:text-4xl md:text-5xl">
            About Me
          </h2>
          <p className="mb-5 text-lg leading-relaxed text-secondary md:text-xl">
            I&apos;m Maruf, a full-stack web developer from Dhaka, building for
            the web since 2021. Over the past year I&apos;ve shipped a paid API,
            a real-estate marketplace, and a studio platform on my own.
          </p>
          <p className="text-lg leading-relaxed text-secondary md:text-xl">
            I care about the unglamorous parts of production software: caching
            strategy, abuse protection, tests, and documentation that can&apos;t
            drift out of date. I&apos;m looking for a full-time or remote role
            where I can own features end to end on a TypeScript/Node team.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-[#0066cc] transition-colors hover:text-[#0055b3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            More about me <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.65fr] lg:gap-10">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                {skillGroup.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="max-w-full rounded-full border border-border bg-surface px-3 py-2 text-sm leading-5 text-primary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-10 sm:mt-16 sm:pt-12">
          <dl className="grid grid-cols-2 gap-x-5 gap-y-8 text-center md:grid-cols-4 md:gap-8">
            <div>
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                5+
              </dt>
              <dd className="mx-auto mt-2 max-w-40 text-xs leading-5 text-secondary sm:text-sm">
                Years building for the web (since 2021)
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                4
              </dt>
              <dd className="mx-auto mt-2 max-w-40 text-xs leading-5 text-secondary sm:text-sm">
                Production projects shipped
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                63
              </dt>
              <dd className="mx-auto mt-2 max-w-40 text-xs leading-5 text-secondary sm:text-sm">
                Automated tests (Orbitally.tech)
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
                5
              </dt>
              <dd className="mx-auto mt-2 max-w-40 text-xs leading-5 text-secondary sm:text-sm">
                Merged open-source PRs
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
