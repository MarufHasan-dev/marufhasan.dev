import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center pt-16"
        >
          <p className="text-[var(--color-text-secondary)] text-xl">
            Hero section coming next...
          </p>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-[50vh] flex items-center justify-center bg-[var(--color-bg-secondary)]"
        >
          <p className="text-[var(--color-text-secondary)] text-xl">
            About section
          </p>
        </section>

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
