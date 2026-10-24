"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import Script from "next/script";
import Button from "./Button";

interface TurnstileApi {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "light";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const contactRevealVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.12 },
  },
};

const contactColumnVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Contact() {
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | undefined>(undefined);
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");

  const renderTurnstile = useCallback(() => {
    if (
      !turnstileSiteKey ||
      !window.turnstile ||
      !turnstileContainerRef.current ||
      turnstileWidgetIdRef.current
    ) {
      return;
    }

    turnstileWidgetIdRef.current = window.turnstile.render(
      turnstileContainerRef.current,
      {
        sitekey: turnstileSiteKey,
        action: "contact",
        theme: "light",
        callback: (token) => {
          setTurnstileToken(token);
          setTurnstileError("");
        },
        "error-callback": () => {
          setTurnstileToken("");
          setTurnstileError(
            "Security check failed to load. Please refresh the page.",
          );
        },
        "expired-callback": () => setTurnstileToken(""),
      },
    );
  }, [turnstileSiteKey]);

  useEffect(() => {
    renderTurnstile();

    return () => {
      const widgetId = turnstileWidgetIdRef.current;
      if (widgetId) {
        window.turnstile?.remove(widgetId);
        turnstileWidgetIdRef.current = undefined;
      }
    };
  }, [renderTurnstile]);

  const resetTurnstile = () => {
    setTurnstileToken("");
    if (turnstileWidgetIdRef.current) {
      window.turnstile?.reset(turnstileWidgetIdRef.current);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      newErrors.name = "Name is required";
    } else if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (name.length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    } else if (/[\u0000-\u001f\u007f-\u009f]/.test(name)) {
      newErrors.name = "Name contains invalid characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (email.length > 254 || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (message.length > 5000) {
      newErrors.message = "Message must be less than 5000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!turnstileToken) {
      setStatus("error");
      setServerMessage(
        "Complete the security check before sending your message.",
      );
      return;
    }

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, turnstileToken }),
      });

      const data = await response.json();
      resetTurnstile();

      if (response.ok) {
        setStatus("success");
        setServerMessage(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setServerMessage(
          data.error || "Something went wrong. Please try again.",
        );
      }
    } catch {
      resetTurnstile();
      setStatus("error");
      setServerMessage(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <motion.section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-section bg-surface"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -48px 0px" }}
      variants={contactRevealVariants}
    >
      <div className="mx-auto max-w-300 px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Text */}
          <motion.div variants={contactColumnVariants}>
            <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight mb-6">
              Let&apos;s talk
            </h2>
            <p className="text-lg md:text-xl text-secondary leading-relaxed mb-8">
              I&apos;m open to full-time and remote roles. Send me a note about
              the role or the team and I&apos;ll get back to you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-secondary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-secondary">Email</p>
                  <a
                    href="mailto:marufdev.contact@gmail.com"
                    className="cursor-pointer text-primary hover:text-accent transition-colors"
                  >
                    marufdev.contact@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-secondary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-secondary">Location</p>
                  <p className="text-primary">Dhaka, Bangladesh (UTC+6)</p>
                </div>
              </div>
            </div>

            <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Direct contact links">
              <a
                href="https://www.linkedin.com/in/maruf-hasan-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-sm font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-offset-4"
              >
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="https://github.com/MarufHasan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm text-sm font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-offset-4"
              >
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                href="mailto:marufdev.contact@gmail.com"
                className="rounded-sm text-sm font-medium text-primary underline decoration-border underline-offset-4 transition-colors hover:text-accent focus-visible:outline-offset-4"
              >
                Email
              </a>
            </nav>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div variants={contactColumnVariants}>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Your name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-2 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  maxLength={254}
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder="your@email.com"
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-2 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  maxLength={5000}
                  className={`w-full px-4 py-3 rounded-xl bg-muted border text-primary placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none ${
                    errors.message ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Tell me about the role or team..."
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-2 text-sm text-red-500"
                    role="alert"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Cloudflare Turnstile */}
              {turnstileSiteKey ? (
                <>
                  <Script
                    src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
                    strategy="afterInteractive"
                    onReady={renderTurnstile}
                    onError={() =>
                      setTurnstileError(
                        "Security check failed to load. Please refresh the page.",
                      )
                    }
                  />
                  <div ref={turnstileContainerRef} />
                  {turnstileError && (
                    <p className="text-sm text-red-500" role="alert">
                      {turnstileError}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-red-500" role="alert">
                  Contact form verification is not configured. Please email me
                  directly.
                </p>
              )}

              {/* Status Message */}
              {serverMessage && (
                <div
                  className={`p-4 rounded-xl ${
                    status === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                  role={status === "success" ? "status" : "alert"}
                  aria-live={status === "success" ? "polite" : "assertive"}
                >
                  {serverMessage}
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={status === "loading" || !turnstileToken}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </motion.svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
