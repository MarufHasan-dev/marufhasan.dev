"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const menuVariants: Variants = {
  closed: {},
  open: { transition: { delayChildren: 0.08, staggerChildren: 0.07 } },
};

const menuItemVariants: Variants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#open-source", label: "Open source" },
  { href: "/#services", label: "Freelance" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
            ? "bg-surface/80 backdrop-blur-xl border-b border-border"
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
              href="/"
              className="relative z-50 cursor-pointer text-xl font-semibold text-primary hover:opacity-70 transition-opacity"
              onClick={handleLinkClick}
            >
              Maruf Hasan
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer text-sm text-secondary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="cursor-pointer text-sm text-secondary hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="relative z-50 md:hidden flex items-center justify-center w-10 h-10 -mr-2 cursor-pointer text-primary rounded-full hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="relative h-5 w-5">
                <motion.span
                  className="absolute left-0 top-1/2 block h-0.5 w-5 bg-current"
                  style={{ marginTop: -1 }}
                  initial={false}
                  animate={{
                    y: isMobileMenuOpen ? 0 : -6,
                    rotate: isMobileMenuOpen ? 45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 block h-0.5 w-5 bg-current"
                  style={{ marginTop: -1 }}
                  initial={false}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.span
                  className="absolute left-0 top-1/2 block h-0.5 w-5 bg-current"
                  style={{ marginTop: -1 }}
                  initial={false}
                  animate={{
                    y: isMobileMenuOpen ? 0 : 6,
                    rotate: isMobileMenuOpen ? -45 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          closed: { opacity: 0, transition: { duration: 0.25 } },
          open: {
            opacity: 1,
            transition: { duration: 0.35, ease: "easeInOut" },
          },
        }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="absolute inset-0 cursor-pointer bg-surface"
          onClick={handleLinkClick}
        />

        <div className="relative flex h-full flex-col justify-center px-6">
          <nav aria-label="Mobile navigation">
            <motion.ul
              className="flex flex-col gap-2"
              variants={menuVariants}
              initial={false}
              animate={isMobileMenuOpen ? "open" : "closed"}
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={menuItemVariants}>
                  <Link
                    href={link.href}
                    className="block cursor-pointer py-3 text-4xl font-semibold text-primary transition-colors hover:text-accent sm:text-5xl"
                    onClick={handleLinkClick}
                    tabIndex={isMobileMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={menuItemVariants}>
                <Link
                  href="/blog"
                  className="block cursor-pointer py-3 text-4xl font-semibold text-primary transition-colors hover:text-accent sm:text-5xl"
                  onClick={handleLinkClick}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  Blog
                </Link>
              </motion.li>
            </motion.ul>
          </nav>

          <motion.div
            className="absolute bottom-12 left-6 right-6"
            variants={menuItemVariants}
            initial={false}
            animate={isMobileMenuOpen ? "open" : "closed"}
            transition={{
              duration: 0.35,
              delay: isMobileMenuOpen ? 0.4 : 0,
              ease: "easeOut",
            }}
          >
            <p className="mb-2 text-sm text-secondary">Get in touch</p>
            <a
              href="mailto:marufdev.contact@gmail.com"
              className="cursor-pointer text-lg text-primary transition-colors hover:text-accent"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              marufdev.contact@gmail.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
