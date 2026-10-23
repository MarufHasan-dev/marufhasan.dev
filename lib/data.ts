// ===== PROJECT DATA =====

export interface Project {
  title: string;
  category: string;
  role: string;
  problem: string;
  highlights: string[];
  image?: string;
  tags: string[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: "Orbitally.tech",
    category: "Studio platform & API product",
    role: "Solo · 2026",
    problem:
      "A studio site has to prove real engineering ability, and a product page has to let visitors try a paid API without exposing it.",
    highlights: [
      "Secured live API playground: server-side proxy, same-origin checks, action-bound Cloudflare Turnstile, four Redis sliding-window rate limits with an in-memory fallback, secret redaction, and masked contact data.",
      "87-field API reference generated from one typed schema, with tests that fail when the docs drift.",
      "Legal pages rendered from typed content with billing-provider variants; a contact form that fails closed instead of faking success.",
      "63 automated tests; 100/100/100 Lighthouse on the homepage and product page.",
    ],
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
    role: "Freelance client project · Dec 2025",
    problem:
      "Property owners and brokers needed a marketplace to list homes for sale or rent, and buyers needed a way to contact them after signing in.",
    highlights: [
      "Async video pipeline: TUS resumable upload, Cloudflare Stream transcoding, HMAC-SHA256-verified webhook, adaptive HLS/DASH playback.",
      "Email and SMS OTP login (Brevo, Twilio) with database-backed sessions and HTTP-only cookies.",
      "10-model PostgreSQL schema (Prisma) with composite constraints and ~40 indexes; search API with cursor and offset pagination.",
      "One-to-one messaging with read receipts, online presence, and per-user mute and soft delete.",
    ],
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
    role: "Solo · 2026",
    problem:
      "Sales and CRM tools need reliable company facts from just a domain, but scrapers are fragile and data vendors are expensive.",
    highlights: [
      "Domain in, structured profile out: company details, public contacts, 11 social platforms, 60+ tech-detection rules, and a transparent 0-100 confidence score.",
      "Deterministic parsing first, Gemini structured output second, so the API still works if the LLM is down.",
      "Resilience layer: in-flight request coalescing, two-tier caching with per-error negative TTLs, multi-URL fetching with a Firecrawl fallback, async writes with a dead-letter table.",
      "Deployed with Docker and Nginx on GCP, backed by Neon Postgres tuned to scale to zero, and sold on RapidAPI.",
    ],
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
    category: "CMS-driven roofing blog",
    role: "Team project · Aug 2025 · I owned the blog system",
    problem:
      "The owner wanted to publish posts and control SEO without a developer.",
    highlights: [
      "Contentful integration with ISR listing page, featured article, and statically generated post pages.",
      "Custom rich-text renderer: tables, embedded video and audio, auto-embedded YouTube links.",
      "CMS-driven SEO: title, description, keywords, and OG image editable per post and wired into generateMetadata.",
      "FAQ accordion, author block, and optional embedded map.",
    ],
    image: "/projects/yicn-roofing.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "React",
      "Contentful",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    links: [{ label: "Live site", url: "https://yicnroofing.com" }],
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
