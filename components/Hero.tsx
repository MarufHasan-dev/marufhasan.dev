import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-surface pt-20 pb-24 overflow-hidden"
    >
      <div className="mx-auto max-w-300 w-full px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image — Left */}
          <div className="shrink-0 animate-fade-in">
            <div className="relative">
              {/* Subtle glow behind image */}
              <div className="absolute -inset-4 bg-accent/10 rounded-[36px] blur-2xl" />

              {/* Image container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88 rounded-[28px] overflow-hidden shadow-xl ring-1 ring-border">
                <Image
                  src="/profile.png"
                  alt="Maruf Hasan — Full-Stack Web Developer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 352px"
                />
              </div>
            </div>
          </div>

          {/* Content — Right */}
          <div className="flex-1 text-center lg:text-left">
            {/* Eyebrow text */}
            <p className="text-secondary text-sm md:text-base font-medium tracking-wide uppercase mb-4 animate-fade-in">
              Full-Stack Web Developer
            </p>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary tracking-tight leading-[1.08] mb-6 animate-fade-in-up">
              Hi, I&apos;m Maruf Hasan
              <br />
              <span className="text-secondary">
                I build things for the web.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-secondary leading-relaxed mb-10 animate-fade-in-up-delay">
              I craft elegant, performant, and user-focused digital experiences.
              Specializing in React, Next.js, and modern full-stack web
              development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fade-in-up-delay-2">
              <Button as="a" href="#projects" size="lg">
                View My Work
              </Button>
              <Button as="a" href="#contact" variant="secondary" size="lg">
                Get In Touch
              </Button>
              <Button
                as="a"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
                className="gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
                Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 md:mt-20 text-center animate-bounce-slow">
          <a
            href="#about"
            className="inline-block text-secondary hover:text-primary transition-colors"
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
