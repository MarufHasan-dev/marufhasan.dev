import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  href = "#",
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl bg-[var(--color-bg-secondary)] overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-border)]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-primary)] rounded-full border border-[var(--color-border)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
