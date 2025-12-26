import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 pb-24 bg-[var(--color-bg-primary)]"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8 text-center">
        {/* Eyebrow text */}
        <p className="text-[var(--color-text-secondary)] text-sm md:text-base font-medium tracking-wide uppercase mb-4 animate-fade-in">
          Full-Stack Developer
        </p>

        {/* Main heading - Single H1 for SEO */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[var(--color-text-primary)] tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
          Hi, I&apos;m Maruf.
          <br />
          <span className="text-[var(--color-text-secondary)]">
            I build things for the web.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-10 animate-fade-in-up-delay">
          I craft elegant, performant, and user-focused digital experiences.
          Specializing in React, Next.js, and modern full-stack development.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up-delay-2">
          <Button as="a" href="#projects" size="lg">
            View My Work
          </Button>
          <Button as="a" href="#contact" variant="secondary" size="lg">
            Get In Touch
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-24 animate-bounce-slow">
          <a
            href="#about"
            className="inline-block text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
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
