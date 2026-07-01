import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as: _as,
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div";
} & Omit<HTMLMotionProps<"div">, "initial" | "whileInView" | "viewport" | "transition">) {
  return (
    <motion.div
      initial={{ y, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.7, 0, 0.2, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
