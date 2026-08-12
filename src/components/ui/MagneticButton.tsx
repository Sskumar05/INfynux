import { useRef, MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  strength?: number;
  children: React.ReactNode;
}

export function MagneticButton({ children, strength = 0.3, className, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (prefersReducedMotion || (typeof window !== 'undefined' && 'ontouchstart' in window)) return;
    
    const rect = ref.current!.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * strength);
    y.set(relY * strength);
  };
  
  const handleMouseLeave = () => { 
    x.set(0); 
    y.set(0); 
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: prefersReducedMotion ? 0 : springX, y: prefersReducedMotion ? 0 : springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
