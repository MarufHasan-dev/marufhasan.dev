// ===== PROJECT DATA =====

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/projects/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management tool with real-time updates, drag-and-drop interface, and team workspaces.",
    image: "/projects/taskapp.svg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard featuring interactive charts, custom reports, and real-time metrics tracking.",
    image: "/projects/analytics.svg",
    tags: ["Next.js", "D3.js", "Python", "AWS"],
  },
  {
    title: "Social Media App",
    description:
      "Feature-rich social platform with stories, messaging, and AI-powered content recommendations.",
    image: "/projects/social.svg",
    tags: ["React Native", "GraphQL", "Redis", "TensorFlow"],
  },
  {
    title: "AI Writing Assistant",
    description:
      "AI-powered writing tool that helps users create, edit, and improve their content with smart suggestions.",
    image: "/projects/ai-writer.svg",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Prisma"],
  },
  {
    title: "Fitness Tracker",
    description:
      "Comprehensive fitness app with workout tracking, nutrition logging, and personalized training plans.",
    image: "/projects/fitness.svg",
    tags: ["React Native", "Node.js", "PostgreSQL", "Charts"],
  },
];

// ===== BLOG POST DATA =====

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
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
