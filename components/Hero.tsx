import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center overflow-hidden bg-surface pb-16 pt-20 sm:pb-20"
    >
      <div className="mx-auto max-w-300 w-full px-6 lg:px-8">
        <div className="flex flex-col items-center gap-9 lg:flex-row lg:gap-16">
          <div className="shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-3 rounded-4xl bg-accent/10 blur-2xl" />
              <div className="relative h-40 w-40 overflow-hidden rounded-3xl shadow-xl ring-1 ring-border sm:h-52 sm:w-52 lg:h-72 lg:w-72">
                <Image
                  src="/maruf-hasan-full-stack-web-developer.png"
                  alt="Maruf Hasan — Full-Stack Web Developer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 208px, 288px"
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 flex-1 text-center lg:text-left">
            <p className="mb-2 text-sm font-semibold tracking-wide text-primary animate-fade-in">
              Maruf Hasan
            </p>
            <p className="mb-4 text-[0.68rem] font-semibold uppercase leading-relaxed tracking-[0.14em] text-secondary sm:text-xs sm:tracking-[0.18em] md:text-sm">
              Full-Stack Developer · Next.js · TypeScript · Node.js
            </p>
            <h1 className="mx-auto mb-5 max-w-4xl text-[2.55rem] font-semibold leading-[1.06] tracking-[-0.045em] text-primary animate-fade-in-up sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
              I build full-stack products that are secure, fast, and live in
              production.
            </h1>

            <div className="mb-5 flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3.5 py-2 text-xs font-medium text-primary sm:text-sm">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden="true"
                />
                Open to full-time &amp; remote roles
              </span>
            </div>

            <p className="mx-auto mb-7 max-w-2xl text-base leading-7 text-secondary animate-fade-in-up-delay sm:text-lg sm:leading-8 lg:mx-0">
              Full-stack developer in Dhaka working with Next.js, TypeScript,
              and Node.js. I&apos;ve launched a paid API on RapidAPI, built a
              real-estate marketplace with video pipelines and messaging, and
              shipped merged PRs to an open-source AI workspace.
            </p>

            <div className="flex flex-col items-stretch justify-center gap-3 animate-fade-in-up-delay-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Button as="a" href="#projects" size="lg">
                View projects
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                Download resume
              </Button>
              <Button
                as="a"
                href="mailto:marufdev.contact@gmail.com"
                variant="ghost"
                size="lg"
              >
                Email me
              </Button>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-6 text-secondary sm:mt-12 sm:text-sm lg:text-left">
          Paid API live on RapidAPI <span aria-hidden="true">·</span> 63
          automated tests <span aria-hidden="true">·</span> 100/100/100
          Lighthouse <span aria-hidden="true">·</span> 5 merged open-source PRs
        </p>

        <div className="mt-8 text-center animate-bounce-slow">
          <a
            href="#about"
            className="inline-flex rounded-full p-2 text-secondary transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
