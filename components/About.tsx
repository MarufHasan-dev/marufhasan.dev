const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  {
    category: "Design",
    items: ["Figma", "UI/UX", "Responsive Design", "Accessibility"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-section bg-muted">
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
            I&apos;m a full-stack web developer passionate about creating
            beautiful, functional, and user-centered digital experiences. With a
            strong foundation in both frontend and backend technologies, I bring
            ideas to life through clean code and thoughtful design.
          </p>
          <p className="text-lg md:text-xl text-secondary leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or sharing
            knowledge through writing and mentoring. I believe in continuous
            learning and building products that make a difference.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-secondary text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats/Highlights */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-primary">
                5+
              </p>
              <p className="mt-2 text-sm text-secondary">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-primary">
                50+
              </p>
              <p className="mt-2 text-sm text-secondary">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-primary">
                30+
              </p>
              <p className="mt-2 text-sm text-secondary">Happy Clients</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-semibold text-primary">
                10+
              </p>
              <p className="mt-2 text-sm text-secondary">Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
