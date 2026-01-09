import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

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

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-[50vh] flex items-center justify-center"
        >
          <p className="text-[var(--color-text-secondary)] text-xl">
            Contact section
          </p>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-[var(--color-border)]">
          <p className="text-center text-[var(--color-text-secondary)] text-sm">
            Footer coming soon...
          </p>
        </footer>
      </main>
    </>
  );
}
