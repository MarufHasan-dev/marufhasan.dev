import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | Maruf Hasan - Full-Stack Web Developer",
  description:
    "Thoughts on web development, programming, design, and building products. Articles about React, Next.js, TypeScript, and more.",
  openGraph: {
    title: "Blog | Maruf Hasan - Full-Stack Web Developer",
    description:
      "Thoughts on web development, programming, design, and building products.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-border">
        <nav className="mx-auto max-w-300 px-6 lg:px-8">
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
          <div className="mx-auto max-w-300 px-6 lg:px-8">
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
          <div className="mx-auto max-w-300 px-6 lg:px-8">
            <div className="grid gap-12">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group pb-12 border-b border-border last:border-0 last:pb-0"
                >
                  <div>
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
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-muted border-t border-border">
        <div className="mx-auto max-w-300 px-6 lg:px-8">
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
