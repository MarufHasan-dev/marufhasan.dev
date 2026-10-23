import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const [featuredProject, ...moreProjects] = projects;

  if (!featuredProject) return null;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-muted py-section"
    >
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl"
            >
              Featured projects<span className="text-accent">.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-secondary md:text-lg">
            End-to-end web products, from the first interface to the systems
            that make them work.
          </p>
        </div>

        <div className="space-y-5">
          <ProjectCard
            project={featuredProject}
            index={1}
            featured
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
