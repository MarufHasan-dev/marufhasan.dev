import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-section bg-surface">
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            A selection of projects I&apos;ve worked on. Each one presented
            unique challenges and opportunities to create something meaningful.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
