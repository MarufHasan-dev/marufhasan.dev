// ===== PROJECT DATA =====

export interface Project {
  title: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "Orbitally.tech",
    category: "Studio platform & API product",
    description:
      "A production-ready studio website and developer platform built from the ground up. Features a custom animated WebGL hero, responsive service pages, a live API playground, schema-generated developer documentation, pricing pages, and security-hardened server endpoints. Includes Cloudflare Turnstile verification, Redis-backed rate limiting, contact-data masking, and automated tests.",
    image: "/projects/orbitally.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Upstash Redis",
      "Cloudflare Turnstile",
      "Vercel",
    ],
    links: [
      { label: "Live Website", url: "https://orbitally.tech" },
      {
        label: "Product Page",
        url: "https://orbitally.tech/products/company-enrichment-api",
      },
    ],
  },
  {
    title: "BezBroker",
    category: "Real estate marketplace",
    description:
      "A full-stack real estate marketplace where users can list, discover, and save properties for sale or rent and connect directly with owners or brokers. Features include OTP authentication, property management, image and video uploads, interactive maps, favorites, and one-to-one messaging.",
    image: "/projects/bezbroker.webp",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Cloudflare",
    ],
  },
  {
    title: "Company Enrichment API",
    category: "Developer API",
    description:
      "A production-ready REST API that turns company website domains into structured business intelligence, including company details, contacts, social profiles, detected technologies, and AI-assisted business classification. It uses resilient web scraping, intelligent caching, batch processing, and reliable fallback strategies.",
    image: "/projects/company-enrichment-api.webp",
    tags: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Google Gemini",
      "Docker",
    ],
  },
  {
    title: "YICN Roofing",
    category: "Contentful-powered blog",
    description:
      "A dynamic blog system for an existing roofing website, powered by Contentful. Includes featured and latest articles, dynamic post pages, rich-text and media rendering, FAQ sections, author information, and CMS-managed SEO metadata so the content team can publish without code changes.",
    image: "/projects/yicn-roofing.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Contentful",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
];

// ===== OPEN-SOURCE CONTRIBUTIONS =====

export interface OpenSourceContribution {
  number: number;
  title: string;
  summary: string;
  url: string;
  focusAreas?: string[];
}

export const openSourceProject = {
  name: "Odysseus",
  description: "An open-source, self-hosted AI workspace.",
  url: "https://github.com/odysseus-dev/odysseus",
  mergedPullRequestsUrl:
    "https://github.com/odysseus-dev/odysseus/pulls?q=is%3Apr+is%3Amerged+author%3AMarufHasan-dev",
};

export const openSourceContributions: OpenSourceContribution[] = [
  {
    number: 3456,
    title: "NVIDIA AI Provider Integration",
    summary:
      "Added NVIDIA's OpenAI-compatible API to provider detection and routing, filtered non-chat models from its catalog, and validated compatibility with the existing provider tests.",
    url: "https://github.com/odysseus-dev/odysseus/pull/3456",
    focusAreas: [
      "API integration",
      "Provider routing",
      "Model discovery",
      "Automated tests",
    ],
  },
  {
    number: 3601,
    title: "Web Search Icon Rendering & Safe HTML Handling",
    summary:
      "Fixed raw SVG markup appearing in place of the web-search icon. Kept icon markup separate from visible labels, preserved HTML escaping, and added behavioral tests for rendering, fallback icons, case-insensitive lookup, and hostile tool names.",
    url: "https://github.com/odysseus-dev/odysseus/pull/3601",
    focusAreas: [
      "Frontend debugging",
      "Safe HTML rendering",
      "Behavioral tests",
    ],
  },
  {
    number: 2906,
    title: "Memory & Skills UI Reliability",
    summary:
      "Fixed empty-list selection behavior and stale UI state after skill deletion, keeping toolbar controls and item counts consistent.",
    url: "https://github.com/odysseus-dev/odysseus/pull/2906",
  },
  {
    number: 3070,
    title: "Modal Layering Fix",
    summary:
      "Adjusted the CSS stacking order so minimized modal controls no longer overlap active tool modals.",
    url: "https://github.com/odysseus-dev/odysseus/pull/3070",
  },
  {
    number: 2632,
    title: "Codebase Cleanup",
    summary:
      "Removed approximately 820 lines from an obsolete landing-page file after confirming it was no longer referenced.",
    url: "https://github.com/odysseus-dev/odysseus/pull/2632",
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
