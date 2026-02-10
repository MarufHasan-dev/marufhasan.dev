import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Maruf Hasan - Full-Stack Developer",
  description:
    "Thoughts on web development, programming, design, and building products. Articles about React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Blog | Maruf Hasan - Full-Stack Developer",
    description:
      "Thoughts on web development, programming, design, and building products.",
    type: "website",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "building-modern-web-apps-with-nextjs",
    title: "Building Modern Web Apps with Next.js 15",
    excerpt:
      "Exploring the latest features in Next.js 15 and how they can improve your development workflow. From Server Components to the new App Router.",
    date: "January 5, 2026",
    readTime: "8 min read",
    category: "Next.js",
  },
  {
    slug: "typescript-best-practices-2026",
    title: "TypeScript Best Practices for 2026",
    excerpt:
      "A comprehensive guide to writing clean, maintainable TypeScript code. Learn about strict mode, utility types, and common pitfalls to avoid.",
    date: "December 28, 2025",
    readTime: "12 min read",
    category: "TypeScript",
  },
  {
    slug: "designing-accessible-interfaces",
    title: "Designing Accessible User Interfaces",
    excerpt:
      "Why accessibility matters and how to build inclusive web experiences. Practical tips for ARIA labels, keyboard navigation, and screen readers.",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "Accessibility",
  },
  {
    slug: "react-server-components-deep-dive",
    title: "A Deep Dive into React Server Components",
    excerpt:
      "Understanding the paradigm shift in React development. How Server Components work, when to use them, and common patterns.",
    date: "December 1, 2025",
    readTime: "15 min read",
    category: "React",
  },
  {
    slug: "api-design-principles",
    title: "REST API Design Principles That Scale",
    excerpt:
      "Building APIs that are intuitive, consistent, and maintainable. Learn about versioning, error handling, and documentation.",
    date: "November 20, 2025",
    readTime: "11 min read",
    category: "Backend",
  },
  {
    slug: "performance-optimization-strategies",
    title: "Web Performance Optimization Strategies",
    excerpt:
      "From Core Web Vitals to bundle optimization. Practical techniques to make your web applications faster and more responsive.",
    date: "November 8, 2025",
    readTime: "9 min read",
    category: "Performance",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
        <nav className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="text-xl font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              Maruf Hasan
            </Link>
            <Link
              href="/"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-section bg-muted">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-primary tracking-tight mb-6">
              Blog
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-secondary leading-relaxed">
              Thoughts on web development, design, and building products that
              make a difference. I write about things I&apos;ve learned and
              challenges I&apos;ve solved.
            </p>
          </div>
        </section>

        {/* Blog Posts List */}
        <section className="py-section bg-surface">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="grid gap-12">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group pb-12 border-b border-border last:border-0 last:pb-0"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    {/* Category & Meta */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-accent">
                        {post.category}
                      </span>
                      <span className="text-sm text-secondary">
                        {post.date}
                      </span>
                      <span className="text-sm text-secondary">•</span>
                      <span className="text-sm text-secondary">
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-lg text-secondary leading-relaxed mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                      Read article
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted border-t border-border">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-sm text-secondary">
              © {new Date().getFullYear()} Maruf Hasan. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
