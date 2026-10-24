import * as motion from "motion/react-client";
import type { ReactNode } from "react";
import {
  revealItemVariants,
  revealVariants,
  staggerVariants,
} from "./revealVariants";

export { revealItemVariants, staggerVariants } from "./revealVariants";

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
      data-motion-blur=""
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
  const props = {
    className,
    "data-motion-blur": "",
    variants: revealItemVariants,
  };

  if (as === "article") {
    return <motion.article {...props}>{children}</motion.article>;
  }

  if (as === "li") {
    return <motion.li {...props}>{children}</motion.li>;
  }

  return <motion.div {...props}>{children}</motion.div>;
}
