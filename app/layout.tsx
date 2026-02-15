import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://marufhasan.dev"),

  title: {
    default: "Maruf Hasan – Full-Stack Web Developer",
    template: "%s | Maruf Hasan",
  },

  description:
    "Maruf Hasan is a full-stack web developer specializing in React, Next.js, and TypeScript. View projects, skills, and blog posts.",

  keywords: [
    "Maruf Hasan",
    "Maruf Hasan developer",
    "Full-stack web developer",
    "Web developer portfolio",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Frontend developer",
    "Backend developer",
    "JavaScript developer",
  ],

  authors: [{ name: "Maruf Hasan" }],
  creator: "Maruf Hasan",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Maruf Hasan – Full-Stack Web Developer",
    description:
      "Portfolio website of Maruf Hasan, a full-stack web developer building modern, high-performance web applications.",
    url: "https://marufhasan.dev",
    siteName: "Maruf Hasan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://marufhasan.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Maruf Hasan – Full-Stack Web Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Maruf Hasan – Full-Stack Web Developer",
    description:
      "Portfolio website of Maruf Hasan, a full-stack web developer building modern, high-performance web applications",
    creator: "@marufhasan_dev",
    images: ["https://marufhasan.dev/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://marufhasan.dev/#person",
              name: "Maruf Hasan",
              url: "https://marufhasan.dev",
              jobTitle: "Full-Stack Web Developer",
              knowsAbout: [
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
              ],
              sameAs: [
                "https://github.com/MarufHasan-dev",
                "https://www.linkedin.com/in/maruf-hasan-dev/",
                "https://x.com/marufhasan_dev",
              ],
              image: "https://marufhasan.dev/og.png",
            }),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
