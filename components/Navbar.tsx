"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key and handle body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-[1200px] px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="relative z-50 text-xl font-semibold text-[var(--color-text-primary)] hover:opacity-70 transition-opacity"
              onClick={handleLinkClick}
            >
              Maruf.
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative z-50 md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-[var(--color-text-primary)] rounded-full hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
                {/* Hamburger lines that animate to X */}
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 rotate-45"
                      : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 block w-5 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-0 scale-0"
                      : "opacity-100 scale-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block w-5 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "top-1/2 -translate-y-1/2 -rotate-45"
                      : "bottom-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Background overlay */}
        <div
          className={`absolute inset-0 bg-white transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleLinkClick}
        />

        {/* Menu content */}
        <div className="relative h-full flex flex-col justify-center px-6">
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-500 ease-out ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 75}ms`
                      : "0ms",
                  }}
                >
                  <a
                    href={link.href}
                    className="block py-3 text-4xl sm:text-5xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li
                className={`transform transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${navLinks.length * 75}ms`
                    : "0ms",
                }}
              >
                <Link
                  href="/blog"
                  className="block py-3 text-4xl sm:text-5xl font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact info at bottom */}
          <div
            className={`absolute bottom-12 left-6 right-6 transform transition-all duration-500 ease-out ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? "400ms" : "0ms",
            }}
          >
            <p className="text-sm text-[var(--color-text-secondary)] mb-2">
              Get in touch
            </p>
            <a
              href="mailto:hello@maruf.dev"
              className="text-lg text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              hello@maruf.dev
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
