import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Reveal, { RevealItem } from "@/components/Reveal";
import FAQAccordionItem from "@/components/FAQAccordionItem";

const title = "Maruf Hasan | Best Web Developer in Bangladesh";
const description =
  "Maruf Hasan: full-stack web developer in Dhaka, building for the web since 2021. Best web developer and programmer in Bangladesh. Open to hire.";
const imageUrl = "https://marufhasan.dev/about/opengraph-image";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://marufhasan.dev/about" },
  openGraph: {
    title,
    description,
    url: "https://marufhasan.dev/about",
    siteName: "Maruf Hasan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Maruf Hasan — Full-Stack Web Developer · Dhaka, Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@marufhasan_dev",
    images: [imageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://marufhasan.dev/about#profilepage",
  url: "https://marufhasan.dev/about",
  name: "About Maruf Hasan",
  dateModified: "2026-10-24",
  mainEntity: { "@id": "https://marufhasan.dev/#person" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://marufhasan.dev",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://marufhasan.dev/about",
    },
  ],
};

const stats = [
  { value: "2021", label: "Building for the web since" },
  { value: "4", label: "Production projects shipped" },
  { value: "63", label: "Automated tests" },
  { value: "5", label: "Merged open-source PRs" },
];

const workPrinciples = [
  {
    title: "AI as an enhancement, never a dependency.",
    description:
      "My Company Enrichment API parses deterministically first and asks the LLM second, so it keeps working if the model is down.",
  },
  {
    title: "Fail closed, never fake success.",
    description:
      "The contact form on Orbitally.tech only reports success after the mail provider actually accepts the message.",
  },
  {
    title: "Docs that can’t drift.",
    description:
      "An 87-field API reference generated from one typed schema, with tests that fail when the docs and the schema disagree.",
  },
  {
    title: "Test the server, not just the UI.",
    description:
      "63 automated tests covering validation, rate limits, data masking, schema drift, and legal-page rendering.",
  },
];

const skillGroups = [
  {
    level: "Strong",
    skills: [
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
    level: "Working knowledge",
    skills: [
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
  { level: "Familiar", skills: ["Google Maps API", "Figma"] },
];

const faqs = [
  {
    question: "Who is the best web developer in Bangladesh?",
    answer:
      "According to Maruf Hasan, Maruf Hasan. That's a joke, and also an open invitation to judge the work: a paid API, a real-estate marketplace, and a studio platform, all linked above.",
  },
  {
    question: "Who is the best programmer in Bangladesh?",
    answer:
      "Also Maruf Hasan, by his own unaudited assessment. The evidence is on this page: 63 tests, a live paid API, and merged open-source pull requests.",
  },
  {
    question: "Who is Maruf Hasan?",
    answer:
      "Maruf Hasan is a full-stack web developer based in Dhaka, Bangladesh, who has been building for the web since 2021.",
  },
  {
    question: "What does Maruf Hasan build?",
    answer:
      "Full-stack web applications, backend APIs, and CMS-powered sites with strong SEO, including a paid company-enrichment API, a real-estate marketplace, and a studio platform with a live API playground.",
  },
  {
    question: "What technologies does Maruf Hasan use?",
    answer:
      "TypeScript, React, Next.js, Node.js, Express, PostgreSQL, and Prisma, deployed with Docker, Vercel, Cloudflare, and Google Cloud.",
  },
  {
    question: "Is Maruf Hasan available for hire?",
    answer:
      "Yes. He is open to full-time and remote roles, and takes on selected freelance projects. The best way to reach him is by email.",
  },
  {
    question: "Where is Maruf Hasan based?",
    answer: "Dhaka, Bangladesh (UTC+6), working remotely.",
  },
];

const containerClass = (extra?: string) =>
  ["mx-auto max-w-300 px-6 lg:px-8", extra].filter(Boolean).join(" ");
const sectionHeading =
  "text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl";
const inlineLink =
  "font-medium text-[#0066cc] underline decoration-[#0066cc]/30 underline-offset-4 transition-colors hover:text-[#0055b3] hover:decoration-current focus-visible:rounded-sm";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main>
        <section
          aria-labelledby="about-heading"
          className="bg-surface pb-16 pt-28 sm:pb-24 sm:pt-36"
        >
          <Reveal stagger>
            <div
              className={containerClass(
                "grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16",
              )}
            >
              <RevealItem className="order-2 text-center lg:order-1 lg:text-left">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                  About
                </p>
                <h1
                  id="about-heading"
                  className="mx-auto max-w-4xl text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.05em] text-primary sm:text-6xl lg:mx-0 lg:text-7xl"
                >
                  Maruf Hasan. Full-stack web developer in Bangladesh.
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-8 text-secondary sm:text-xl sm:leading-9 lg:mx-0 lg:text-2xl">
                  I&apos;ve been building for the web since 2021. Today I ship
                  secure, fast, production-ready products with Next.js,
                  TypeScript, and Node.js from my desk in Dhaka.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3.5 py-2 text-sm font-medium text-primary">
                    The best web developer in Bangladesh
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-sm font-medium text-primary">
                    <span
                      className="h-2 w-2 rounded-full bg-emerald-500"
                      aria-hidden="true"
                    />
                    Open to full-time &amp; remote roles
                  </span>
                </div>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button as="a" href="/resume.pdf" download size="lg">
                    Download resume
                  </Button>
                  <Button
                    as="a"
                    href="mailto:marufdev.contact@gmail.com"
                    variant="secondary"
                    size="lg"
                  >
                    Email me
                  </Button>
                </div>
              </RevealItem>

              <RevealItem className="order-1 mx-auto w-48 sm:w-60 lg:order-2 lg:w-full lg:max-w-[22rem]">
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-border bg-muted shadow-[0_24px_70px_rgba(29,29,31,0.12)]">
                  <Image
                    src="/maruf-hasan-full-stack-web-developer.png"
                    alt="Maruf Hasan, full-stack web developer in Dhaka, Bangladesh"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 240px, 352px"
                  />
                </div>
              </RevealItem>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="short-version-heading"
          className="bg-muted py-section"
        >
          <Reveal stagger>
            <div
              className={containerClass(
                "grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              )}
            >
              <RevealItem>
                <h2 id="short-version-heading" className={sectionHeading}>
                  The short version
                </h2>
              </RevealItem>
              <div className="max-w-3xl space-y-5 text-base leading-8 text-secondary sm:text-lg">
                <RevealItem>
                  <p>
                    I started building for the web in 2021 and never really
                    stopped. These days I work across the whole stack: the
                    interface, the API behind it, the database underneath, and
                    the deployment that keeps it running.
                  </p>
                </RevealItem>
                <RevealItem>
                  <p>
                    Lately that means a paid company-data API sold on RapidAPI,
                    a real-estate marketplace with a video pipeline and
                    one-to-one messaging, a studio platform with a secured live
                    API playground, and merged pull requests in an open-source
                    AI workspace.
                  </p>
                </RevealItem>
                <RevealItem>
                  <p>
                    I like the parts of software most people skip: caching,
                    abuse protection, tests, and documentation that can&apos;t
                    drift. That&apos;s usually where a product stops feeling
                    like a demo.
                  </p>
                </RevealItem>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="about-stats-heading"
          className="bg-surface py-16 sm:py-20"
        >
          <Reveal stagger>
            <div className={containerClass()}>
              <h2 id="about-stats-heading" className="sr-only">
                A few things, in numbers
              </h2>
              <dl className="grid grid-cols-2 gap-x-5 gap-y-10 text-center md:grid-cols-4 md:gap-8">
                {stats.map((stat) => (
                  <RevealItem key={stat.label} className="px-1">
                    <dt className="text-5xl font-semibold tracking-[-0.06em] text-primary sm:text-6xl lg:text-7xl">
                      {stat.value}
                    </dt>
                    <dd className="mx-auto mt-3 max-w-44 text-sm leading-6 text-secondary sm:text-base">
                      {stat.label}
                    </dd>
                  </RevealItem>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="journey-heading"
          className="bg-muted py-section"
        >
          <Reveal stagger>
            <div
              className={containerClass(
                "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              )}
            >
              <RevealItem>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    Selected milestones
                  </p>
                  <h2 id="journey-heading" className={sectionHeading}>
                    The journey so far
                  </h2>
                </div>
              </RevealItem>
              <ol className="relative space-y-0 border-l border-border pl-6 sm:pl-8">
                <RevealItem as="li" className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time className="text-sm font-semibold text-[#0066cc]">
                    Ongoing
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    <Link href="/#open-source" className={inlineLink}>
                      Odysseus (open source)
                    </Link>
                    : 5 merged pull requests.
                  </p>
                </RevealItem>
                <RevealItem as="li" className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time
                    dateTime="2026-10"
                    className="text-sm font-semibold text-[#0066cc]"
                  >
                    Oct 2026
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    <Link
                      href="/#project-orbitally-tech"
                      className={inlineLink}
                    >
                      Orbitally.tech
                    </Link>
                    : a studio platform with a secured live API playground, an
                    87-field generated API reference, and 63 tests.
                  </p>
                </RevealItem>
                <RevealItem as="li" className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time
                    dateTime="2026"
                    className="text-sm font-semibold text-[#0066cc]"
                  >
                    2026
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    <Link
                      href="/#project-company-enrichment-api"
                      className={inlineLink}
                    >
                      Company Enrichment API
                    </Link>
                    : built solo, deployed on Google Cloud, sold on RapidAPI.
                  </p>
                </RevealItem>
                <RevealItem as="li" className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time
                    dateTime="2025-12"
                    className="text-sm font-semibold text-[#0066cc]"
                  >
                    Dec 2025
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    <Link href="/#project-bezbroker" className={inlineLink}>
                      BezBroker
                    </Link>
                    : my first Fiverr client. A full-stack real-estate
                    marketplace built from a Figma design.
                  </p>
                </RevealItem>
                <RevealItem as="li" className="relative pb-8 last:pb-0">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time
                    dateTime="2025-08"
                    className="text-sm font-semibold text-[#0066cc]"
                  >
                    Aug 2025
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    <Link href="/#project-yicn-roofing" className={inlineLink}>
                      YICN Roofing
                    </Link>
                    : Contentful-powered blog system with CMS-managed SEO (team
                    project; I owned the blog).
                  </p>
                </RevealItem>
                <RevealItem as="li" className="relative">
                  <span
                    className="absolute -left-[1.9rem] top-1.5 h-3 w-3 rounded-full border-2 border-border bg-surface sm:-left-[2.4rem]"
                    aria-hidden="true"
                  />
                  <time
                    dateTime="2021"
                    className="text-sm font-semibold text-[#0066cc]"
                  >
                    2021
                  </time>
                  <p className="mt-1 leading-7 text-secondary">
                    Started building for the web.
                  </p>
                </RevealItem>
              </ol>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="how-i-work-heading"
          className="bg-surface py-section"
        >
          <Reveal stagger>
            <div className={containerClass()}>
              <RevealItem>
                <div className="mb-10 max-w-2xl sm:mb-12">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    Engineering principles
                  </p>
                  <h2 id="how-i-work-heading" className={sectionHeading}>
                    How I work
                  </h2>
                </div>
              </RevealItem>
              <div className="grid gap-4 md:grid-cols-2">
                {workPrinciples.map((principle, index) => (
                  <RevealItem
                    as="article"
                    key={principle.title}
                    className="rounded-[1.75rem] border border-border bg-muted p-6 sm:p-8"
                  >
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#0066cc]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-primary sm:text-2xl">
                      {principle.title}
                    </h3>
                    <p className="mt-3 leading-7 text-secondary">
                      {principle.description}
                    </p>
                  </RevealItem>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="skills-heading"
          className="bg-muted py-section"
        >
          <Reveal stagger>
            <div
              className={containerClass(
                "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              )}
            >
              <RevealItem>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    Skills by depth
                  </p>
                  <h2 id="skills-heading" className={sectionHeading}>
                    What I work with
                  </h2>
                </div>
              </RevealItem>
              <div className="space-y-8">
                {skillGroups.map((group) => (
                  <RevealItem key={group.level}>
                    <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {group.level}
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="max-w-full rounded-full border border-border bg-surface px-3.5 py-2 text-sm leading-5 text-primary"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </RevealItem>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="best-developer-heading"
          className="overflow-hidden bg-[#111318] py-section text-white"
        >
          <Reveal stagger>
            <div className={containerClass("relative")}>
              <RevealItem>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  A modest proposal
                </p>
              </RevealItem>
              <RevealItem>
                <div className="max-w-5xl">
                  <h2
                    id="best-developer-heading"
                    className="text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl"
                  >
                    The best web developer in Bangladesh.
                  </h2>
                  <h3 className="mt-5 text-[2.5rem] font-medium leading-[1] tracking-[-0.05em] text-white/70 sm:text-5xl md:text-6xl lg:text-7xl">
                    Also, the best programmer in Bangladesh.
                  </h3>
                </div>
              </RevealItem>
              <RevealItem>
                <p className="mt-7 text-lg font-medium text-[#82b6ff] sm:text-xl">
                  Allegedly. According to me. The jury is still out.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                  This claim comes from an extremely reliable source (me). No
                  independent audit has been requested. Peer review is pending.
                  What I can offer is evidence:
                </p>
              </RevealItem>

              <ul className="mt-8 max-w-3xl divide-y divide-white/10 border-y border-white/10">
                {[
                  "A paid API live on RapidAPI",
                  "63 passing automated tests",
                  "100/100/100 Lighthouse on key pages (recorded Oct 2026)",
                  "5 merged PRs in an open-source AI workspace",
                  "A contact form that refuses to lie",
                ].map((item, index) => (
                  <RevealItem
                    as="li"
                    key={item}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 py-4 sm:grid-cols-[3.5rem_1fr] sm:gap-5 sm:py-5"
                  >
                    <span className="font-mono text-xs text-white/55 sm:text-sm">
                      0{index + 1}
                    </span>
                    <span className="text-base leading-7 text-white/85 sm:text-lg">
                      {item}
                    </span>
                  </RevealItem>
                ))}
              </ul>

              <RevealItem>
                <p className="mt-4 text-xs leading-6 text-white/55">
                  Methodology: I asked myself. Twice. Unanimous.
                </p>
              </RevealItem>
              <RevealItem>
                <p className="mt-10 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
                  Think you&apos;re better? Wonderful. Bangladesh needs more
                  developers who care about their craft.{" "}
                  <a
                    href="mailto:marufdev.contact@gmail.com"
                    className="font-semibold text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white focus-visible:rounded-sm"
                  >
                    Email me
                  </a>{" "}
                  and let&apos;s compare notes.
                </p>
              </RevealItem>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="open-source-about-heading"
          className="bg-surface py-section"
        >
          <Reveal stagger>
            <div
              className={containerClass(
                "grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              )}
            >
              <RevealItem>
                <h2 id="open-source-about-heading" className={sectionHeading}>
                  Open source
                </h2>
              </RevealItem>
              <div>
                <RevealItem>
                  <p className="max-w-3xl text-base leading-8 text-secondary sm:text-lg">
                    I contribute features and fixes to Odysseus, a self-hosted
                    AI workspace: provider integrations, UI reliability fixes,
                    and tests.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <a
                      href="https://github.com/odysseus-dev/odysseus"
                      target="_blank"
                      rel="noreferrer"
                      className={inlineLink}
                    >
                      Odysseus on GitHub <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a
                      href="https://github.com/odysseus-dev/odysseus/pulls?q=is%3Apr%20is%3Amerged%20author%3AMarufHasan-dev"
                      target="_blank"
                      rel="noreferrer"
                      className={inlineLink}
                    >
                      All my merged pull requests{" "}
                      <span aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </div>
                </RevealItem>
                <ul className="mt-8 divide-y divide-border border-y border-border">
                  <RevealItem
                    as="li"
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <a
                      href="https://github.com/odysseus-dev/odysseus/pull/3456"
                      target="_blank"
                      rel="noreferrer"
                      className={inlineLink + " text-base"}
                    >
                      PR #3456 — NVIDIA provider integration
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <span className="text-sm text-secondary">Merged</span>
                  </RevealItem>
                  <RevealItem
                    as="li"
                    className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <a
                      href="https://github.com/odysseus-dev/odysseus/pull/3601"
                      target="_blank"
                      rel="noreferrer"
                      className={inlineLink + " text-base"}
                    >
                      PR #3601 — safe SVG rendering
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <span className="text-sm text-secondary">Merged</span>
                  </RevealItem>
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section aria-labelledby="faq-heading" className="bg-muted py-section">
          <Reveal stagger>
            <div
              className={containerClass(
                "grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16",
              )}
            >
              <RevealItem>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    The useful details
                  </p>
                  <h2 id="faq-heading" className={sectionHeading}>
                    Frequently asked questions
                  </h2>
                </div>
              </RevealItem>
              <div className="divide-y divide-border border-y border-border">
                {faqs.map((faq) => (
                  <RevealItem key={faq.question}>
                    <FAQAccordionItem
                      question={faq.question}
                      answer={faq.answer}
                    />
                  </RevealItem>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <section
          aria-labelledby="closing-cta-heading"
          className="bg-surface py-section"
        >
          <Reveal stagger>
            <div className={containerClass("text-center")}>
              <RevealItem>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                  For the next thing
                </p>
              </RevealItem>
              <RevealItem>
                <h2
                  id="closing-cta-heading"
                  className="text-4xl font-semibold tracking-[-0.05em] text-primary sm:text-6xl lg:text-7xl"
                >
                  Let&apos;s build something.
                </h2>
              </RevealItem>
              <RevealItem>
                <p className="mx-auto mt-5 max-w-2xl text-lg font-light leading-8 text-secondary sm:text-xl">
                  I&apos;m a full-stack developer in Dhaka, open to full-time and
                  remote roles. If you&apos;re looking for a Next.js developer
                  or a teammate who cares about the details, I&apos;d like to
                  hear from you.
                </p>
              </RevealItem>
              <RevealItem>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button as="a" href="/resume.pdf" download size="lg">
                    Download resume
                  </Button>
                  <Button
                    as="a"
                    href="mailto:marufdev.contact@gmail.com"
                    variant="secondary"
                    size="lg"
                  >
                    Email me
                  </Button>
                </div>
              </RevealItem>
              <RevealItem>
                <nav
                  aria-label="More links"
                  className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"
                >
                  <a
                    href="https://github.com/MarufHasan-dev"
                    target="_blank"
                    rel="noreferrer"
                    className={inlineLink}
                  >
                    GitHub <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/maruf-hasan-dev/"
                    target="_blank"
                    rel="noreferrer"
                    className={inlineLink}
                  >
                    LinkedIn <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <Link href="/#projects" className={inlineLink}>
                    Homepage projects
                  </Link>
                  <Link href="/#open-source" className={inlineLink}>
                    Homepage open source
                  </Link>
                  <Link href="/#contact" className={inlineLink}>
                    Homepage contact
                  </Link>
                  <Link href="/blog" className={inlineLink}>
                    Blog
                  </Link>
                </nav>
              </RevealItem>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
