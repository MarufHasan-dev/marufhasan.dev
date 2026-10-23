import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import OpenSource from "@/components/OpenSource";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const homepageDescription =
  "Full-stack developer in Dhaka building secure, production-ready web products with Next.js, TypeScript, and Node.js. Open to full-time and remote roles.";

export const metadata: Metadata = {
  title: {
    absolute: "Maruf Hasan – Full-Stack Developer (Next.js, TypeScript, Node.js)",
  },
  description: homepageDescription,
  openGraph: {
    title: "Maruf Hasan – Full-Stack Developer (Next.js, TypeScript, Node.js)",
    description: homepageDescription,
    url: "https://marufhasan.dev",
    siteName: "Maruf Hasan",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://marufhasan.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Maruf Hasan – Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maruf Hasan – Full-Stack Developer (Next.js, TypeScript, Node.js)",
    description: homepageDescription,
    creator: "@marufhasan_dev",
    images: ["https://marufhasan.dev/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Open-Source Contributions */}
        <OpenSource />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
