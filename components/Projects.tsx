import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
    image: "/projects/taskapp.svg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    href: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard featuring interactive charts, custom reports, and real-time metrics tracking.",
    image: "/projects/analytics.svg",
    tags: ["Next.js", "D3.js", "Python", "AWS"],
    href: "#",
  },
  {
    title: "Social Media App",
    description:
      "Feature-rich social platform with stories, messaging, and AI-powered content recommendations.",
    image: "/projects/social.svg",
    tags: ["React Native", "GraphQL", "Redis", "TensorFlow"],
    href: "#",
  },
  {
    title: "AI Writing Assistant",
    description:
      "AI-powered writing tool that helps users create, edit, and improve their content with smart suggestions.",
    image: "/projects/ai-writer.svg",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Prisma"],
    href: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness app with workout tracking, nutrition logging, and personalized training plans.",
    image: "/projects/fitness.svg",
    tags: ["React Native", "Node.js", "PostgreSQL", "Charts"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-section bg-surface">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
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
              href={project.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
