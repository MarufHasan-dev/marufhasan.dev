import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maruf Hasan | Full-Stack Developer Portfolio",
  description:
    "Full-stack developer specializing in modern web technologies. Building elegant, performant, and user-focused digital experiences.",
  keywords: [
    "full-stack developer",
    "web developer",
    "portfolio",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Maruf Hasan" }],
  openGraph: {
    title: "Maruf Hasan | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in modern web technologies.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
