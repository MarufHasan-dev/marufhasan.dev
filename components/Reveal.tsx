"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({ children }: { children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("animate-fade-in-up");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={elementRef}>{children}</div>;
}
