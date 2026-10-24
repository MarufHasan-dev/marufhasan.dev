import Image from "next/image";
import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import type { Project } from "@/lib/data";

const cardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.3, ease: "easeOut" } },
};

const imageVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.025, transition: { duration: 0.7, ease: "easeOut" } },
};

const featuredCardVariants: Variants = {
  rest: { y: 0 },
  hover: { y: 0 },
};

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  index,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      id={`project-${project.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")}`}
      className={
        featured
          ? "group grid overflow-hidden rounded-[2rem] bg-[#111318] text-white shadow-sm lg:grid-cols-[0.82fr_1.18fr]"
          : "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_40px_rgba(29,29,31,0.1)]"
      }
      variants={featured ? featuredCardVariants : cardVariants}
      initial="rest"
      whileHover="hover"
    >
      {project.image && (
        <div
          className={`relative overflow-hidden ${
            featured
              ? "aspect-[1.5/1] bg-[#171a23] lg:aspect-auto lg:min-h-full"
              : "aspect-[1.7/1] bg-[#f0f0f2]"
          }`}
        >
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            initial="rest"
          >
            <Image
              src={project.image}
              alt={`${project.title} website preview`}
              fill
              className={`object-cover object-top ${featured ? "lg:object-contain" : ""}`}
              sizes={
                featured
                  ? "(max-width: 1024px) 100vw, 40vw"
                  : "(max-width: 768px) 100vw, 50vw"
              }
            />
          </motion.div>
        </div>
      )}

      <div
        className={`flex flex-1 flex-col ${
          featured
            ? "p-6 sm:p-8 lg:p-9 xl:p-11"
            : "p-6 sm:p-7"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p
            className={`min-w-0 text-xs font-semibold uppercase tracking-[0.14em] ${
              featured ? "text-white/55" : "text-secondary"
            }`}
          >
            <span className={featured ? "text-[#82b6ff]" : "text-[#0066cc]"}>
              {String(index).padStart(2, "0")}
            </span>
            <span aria-hidden="true"> / </span>
            <span>{project.category}</span>
          </p>
          <span
            className={`max-w-full rounded-full border px-3 py-1.5 text-[0.68rem] font-medium leading-4 ${
              featured
                ? "border-white/15 bg-white/[0.05] text-white/75"
                : "border-border bg-muted text-secondary"
            }`}
          >
            {project.role}
          </span>
        </div>

        <h3
          className={`font-semibold tracking-tight ${
            featured
              ? "mb-4 text-3xl text-white sm:text-4xl"
              : "mb-4 text-2xl text-primary"
          }`}
        >
          {project.title}
        </h3>

        <div
          className={`mb-5 border-l-2 pl-4 ${
            featured ? "border-[#82b6ff]/60" : "border-accent/50"
          }`}
        >
          <p
            className={`mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] ${
              featured ? "text-white/45" : "text-secondary"
            }`}
          >
            Problem
          </p>
          <p
            className={`text-sm leading-6 ${
              featured ? "text-white/75" : "text-secondary"
            }`}
          >
            {project.problem}
          </p>
        </div>

        <ul
          className={`mb-6 list-disc space-y-2.5 pl-4 text-sm leading-[1.6] marker:text-[#0066cc] ${
            featured ? "text-white/75 marker:text-[#82b6ff]" : "text-secondary"
          }`}
        >
          {project.highlights.map((highlight) => (
            <li key={highlight} className="pl-1">
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                featured
                  ? "border-white/15 bg-white/[0.04] text-white/75"
                  : "border-border bg-muted text-secondary"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links && project.links.length > 0 && (
          <div
            className={`mt-auto flex flex-wrap gap-3 ${
              featured ? "border-t border-white/10 pt-6" : "border-t border-black/[0.06] pt-5"
            }`}
          >
            {project.links.map((link, linkIndex) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-offset-4 ${
                  featured && linkIndex === 0
                    ? "bg-white text-primary hover:bg-white/85"
                    : featured
                      ? "border border-white/20 text-white hover:bg-white/10"
                      : "text-[#0066cc] hover:bg-accent/5"
                }`}
              >
                {link.label}
                <span aria-hidden="true">↗</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
}
