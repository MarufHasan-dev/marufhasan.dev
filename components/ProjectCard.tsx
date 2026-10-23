import Image from "next/image";
import type { Project } from "@/lib/data";

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
  const visibleTags = project.tags.slice(0, featured ? 4 : 3);
  const extraTagCount = project.tags.length - visibleTags.length;

  return (
    <article
      className={
        featured
          ? "group grid overflow-hidden rounded-[2rem] bg-[#111318] text-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]"
          : "group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/[0.06] bg-white shadow-[0_2px_12px_rgba(29,29,31,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(29,29,31,0.1)]"
      }
    >
      {project.image && (
        <div
          className={`relative overflow-hidden ${
            featured
              ? "aspect-[8/5] bg-[#171a23] lg:order-2 lg:aspect-auto lg:min-h-[32rem]"
              : "aspect-[1.55/1] bg-[#f0f0f2]"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} website preview`}
            fill
            className={`object-cover object-top transition-transform duration-700 group-hover:scale-[1.025] ${
              featured ? "lg:object-contain" : ""
            }`}
            sizes={
              featured
                ? "(max-width: 1024px) 100vw, 55vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
          />
        </div>
      )}

      <div
        className={`flex flex-1 flex-col ${
          featured
            ? "p-6 sm:p-8 lg:order-1 lg:justify-center lg:p-10 xl:p-14"
            : "p-6 sm:p-7"
        }`}
      >
        <p
          className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] ${
            featured ? "text-white/55" : "text-secondary"
          }`}
        >
          <span className={featured ? "text-[#82b6ff]" : "text-accent"}>
            {String(index).padStart(2, "0")}
          </span>
          <span aria-hidden="true">/</span>
          {project.category}
        </p>

        <h3
          className={`font-semibold tracking-tight ${
            featured
              ? "mb-4 text-3xl text-white sm:text-4xl xl:text-[2.75rem]"
              : "mb-3 text-2xl text-primary"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`leading-relaxed ${
            featured
              ? "mb-7 max-w-xl text-base text-white/65 sm:text-lg sm:leading-8"
              : "mb-6 line-clamp-3 text-[0.95rem] text-secondary"
          }`}
        >
          {project.description}
        </p>

        <div className="mb-7 flex flex-wrap gap-2">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                featured
                  ? "border-white/15 bg-white/[0.04] text-white/75"
                  : "border-black/[0.07] bg-[#f8f8fa] text-secondary"
              }`}
            >
              {tag}
            </span>
          ))}
          {extraTagCount > 0 && (
            <span
              className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                featured
                  ? "border-white/15 text-white/55"
                  : "border-black/[0.07] text-secondary"
              }`}
            >
              +{extraTagCount}
            </span>
          )}
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
                      : "text-accent hover:bg-accent/5"
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
    </article>
  );
}
