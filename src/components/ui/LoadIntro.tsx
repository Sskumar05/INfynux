import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export function LoadIntro() {
  const prefersReducedMotion = useReducedMotion();
  const [show, setShow] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem("infynux-intro-seen");
    }
    return false;
  });

  useEffect(() => {
    if (!show || prefersReducedMotion) {
      if (prefersReducedMotion && typeof window !== 'undefined') {
        sessionStorage.setItem("infynux-intro-seen", "1");
      }
      return;
    }
    
    sessionStorage.setItem("infynux-intro-seen", "1");
    const t = setTimeout(() => setShow(false), 1300);
    return () => clearTimeout(t);
  }, [show, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--color-ink)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          style={{ pointerEvents: 'none' }} // Since it fades out and exits, this ensures no click blocking. But we should block clicks while active? Actually we want it non-blocking when fading. Let's rely on React unmount.
        >
          <div className="flex items-center gap-4">
            {/* Diamond Mark */}
            <motion.div
              initial={{ scale: 0.6, rotate: 60, opacity: 0 }}
              animate={{ scale: 1, rotate: 45, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-8 h-8 border-[3px] border-[var(--color-gold)]"
            />
            
            {/* Wordmark */}
            <motion.span
              initial={{ opacity: 0, x: -10, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, x: 0, letterSpacing: "0.15em" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="font-display font-bold text-3xl text-white uppercase tracking-tighter"
            >
              INFYNUX
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
