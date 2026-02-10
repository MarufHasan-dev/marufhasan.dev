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
  // Initialize as true to prevent flash of transparent navbar on page load/refresh
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Check scroll position immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

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
            ? "bg-surface/95 backdrop-blur-xl border-b border-[#e5e5ea]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto max-w-300 px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="#home"
              className="relative z-50 text-xl font-semibold text-primary hover:opacity-70 transition-opacity"
              onClick={handleLinkClick}
            >
              Maruf Hasan
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative z-50 md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-primary rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative w-5 h-5">
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
        <div
          className={`absolute inset-0 bg-surface transition-opacity duration-500 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleLinkClick}
        />

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
                    className="block py-3 text-4xl sm:text-5xl font-semibold text-primary hover:text-accent transition-colors"
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
                  className="block py-3 text-4xl sm:text-5xl font-semibold text-primary hover:text-accent transition-colors"
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

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
            <p className="text-sm text-secondary mb-2">Get in touch</p>
            <a
              href="mailto:marufdev.contact@gmail.com"
              className="text-lg text-primary hover:text-accent transition-colors"
            >
              marufdev.contact@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
