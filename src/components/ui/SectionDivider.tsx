import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion is preferred, immediately show the final state
  const isVisible = isInView || shouldReduceMotion;

  return (
    <div ref={ref} className="relative h-16 bg-[var(--color-ink)] overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 h-px bg-[var(--color-gold-dim)] -translate-x-1/2 -translate-y-1/2"
        initial={{ width: shouldReduceMotion ? "40%" : 0 }}
        animate={isVisible ? { width: "40%" } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.span
        className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-gold)]"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
    </div>
  );
}
