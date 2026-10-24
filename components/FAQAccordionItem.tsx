"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function FAQAccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="group py-5"
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm text-base font-semibold leading-7 text-primary marker:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-lg [&::-webkit-details-marker]:hidden">
        {question}
        <motion.span
          className="shrink-0 text-2xl font-normal text-secondary"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </summary>
      <p className="max-w-3xl pt-4 pr-8 leading-7 text-secondary">{answer}</p>
    </details>
  );
}
