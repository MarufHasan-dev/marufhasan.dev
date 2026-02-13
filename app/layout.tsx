import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://marufhasan.dev"),

  title: {
    default: "Maruf Hasan – Full-Stack Developer",
    template: "%s | Maruf Hasan",
  },

  description:
    "Maruf Hasan is a full-stack web developer specializing in React, Next.js, and TypeScript. View projects, skills, and blog posts.",

  keywords: [
    "Maruf Hasan",
    "Maruf Hasan developer",
    "Full-stack developer",
    "Web developer portfolio",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
  ],

  authors: [{ name: "Maruf Hasan" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Maruf Hasan – Full-Stack Developer",
    description:
      "Portfolio website of Maruf Hasan, a full-stack web developer building modern, high-performance web applications.",
    url: "https://marufhasan.dev",
    siteName: "Maruf Hasan",
    type: "website",
    locale: "en_US",
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
