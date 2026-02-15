import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group block rounded-2xl bg-muted overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-border">
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
        <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-secondary text-base leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium text-secondary bg-surface rounded-full border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
