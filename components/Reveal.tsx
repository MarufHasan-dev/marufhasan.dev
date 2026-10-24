import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import type { ReactNode } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
      delayChildren: 0.06,
      staggerChildren: 0.085,
    },
  },
};

export const revealItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export default function Reveal({
  children,
  className,
  stagger = false,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -48px 0px" }}
      variants={stagger ? staggerVariants : revealVariants}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  as?: "article" | "div" | "li";
  children: ReactNode;
  className?: string;
}

export function RevealItem({
  as = "div",
  children,
  className,
}: RevealItemProps) {
  const props = { className, variants: revealItemVariants };

  if (as === "article") {
    return <motion.article {...props}>{children}</motion.article>;
  }

  if (as === "li") {
    return <motion.li {...props}>{children}</motion.li>;
  }

  return <motion.div {...props}>{children}</motion.div>;
}
