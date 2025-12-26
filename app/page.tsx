import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

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
        <section
          id="projects"
          className="min-h-[50vh] flex items-center justify-center"
        >
          <p className="text-[var(--color-text-secondary)] text-xl">
            Projects section
          </p>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="min-h-[50vh] flex items-center justify-center bg-[var(--color-bg-secondary)]"
        >
          <p className="text-[var(--color-text-secondary)] text-xl">
            Services section
          </p>
        </section>

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
