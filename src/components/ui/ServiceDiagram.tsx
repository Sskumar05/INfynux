import { motion, useReducedMotion } from 'framer-motion';

export type DiagramVariant = 'web' | 'app' | 'management' | 'design' | 'ai' | 'seo';

interface ServiceDiagramProps {
  variant: DiagramVariant;
  className?: string;
}

export function ServiceDiagram({ variant, className = "" }: ServiceDiagramProps) {
  const prefersReducedMotion = useReducedMotion();

  // Helper for generating paths with stagger
  const AnimatedPath = ({ d, delay = 0, strokeWidth = "1.25", isFill = false, cx, cy, r }: any) => {
    const baseTransition = { duration: 0.9, ease: "easeInOut", delay };
    
    if (isFill) {
      return (
        <motion.circle
          cx={cx} cy={cy} r={r}
          fill="var(--color-gold)"
          initial={{ scale: prefersReducedMotion ? 1 : 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={baseTransition}
        />
      );
    }
    
    return (
      <motion.path
        d={d}
        stroke="var(--color-gold)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={baseTransition}
      />
    );
  };

  const AnimatedCircle = ({ cx, cy, r, delay = 0, strokeWidth = "1.25" }: any) => {
    return (
      <motion.circle
        cx={cx} cy={cy} r={r}
        stroke="var(--color-gold)"
        strokeWidth={strokeWidth}
        fill="none"
        initial={{ pathLength: prefersReducedMotion ? 1 : 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: "easeInOut", delay }}
      />
    );
  };

  const renderContent = () => {
    switch (variant) {
      case 'web':
        return (
          <>
            {/* Browser window */}
            <AnimatedPath d="M 10 20 C 10 15 15 10 20 10 L 100 10 C 105 10 110 15 110 20 L 110 80 C 110 85 105 90 100 90 L 20 90 C 15 90 10 85 10 80 Z" delay={0} />
            <AnimatedPath d="M 10 25 L 110 25" delay={0.1} />
            {/* Dots */}
            <AnimatedPath d="M 18 17.5 L 18.1 17.5" strokeWidth="2.5" delay={0.15} />
            <AnimatedPath d="M 24 17.5 L 24.1 17.5" strokeWidth="2.5" delay={0.2} />
            <AnimatedPath d="M 30 17.5 L 30.1 17.5" strokeWidth="2.5" delay={0.25} />
            {/* Layout grids */}
            <AnimatedPath d="M 20 35 L 50 35 L 50 50 L 20 50 Z" delay={0.3} />
            <AnimatedPath d="M 55 35 L 100 35 L 100 50 L 55 50 Z" delay={0.35} />
            <AnimatedPath d="M 20 55 L 100 55 L 100 80 L 20 80 Z" delay={0.4} />
          </>
        );
      case 'app':
        return (
          <>
            {/* Phone outline */}
            <AnimatedPath d="M 35 10 C 30 10 25 15 25 20 L 25 70 C 25 75 30 80 35 80 L 85 80 C 90 80 95 75 95 70 L 95 20 C 95 15 90 10 85 10 Z" delay={0} />
            <AnimatedPath d="M 45 15 L 75 15" delay={0.1} />
            {/* Content bars */}
            <AnimatedPath d="M 35 30 L 85 30" delay={0.15} />
            <AnimatedPath d="M 35 40 L 70 40" delay={0.2} />
            <AnimatedPath d="M 35 50 L 75 50" delay={0.25} />
            {/* Notification dot - pulses via CSS on top of framer motion */}
            <AnimatedPath isFill cx="80" cy="20" r="2.5" delay={0.3} />
          </>
        );
      case 'management':
        return (
          <>
            {/* Bars */}
            <AnimatedPath d="M 20 80 L 20 50 L 40 50 L 40 80" delay={0} />
            <AnimatedPath d="M 50 80 L 50 30 L 70 30 L 70 80" delay={0.1} />
            <AnimatedPath d="M 80 80 L 80 60 L 100 60 L 100 80" delay={0.2} />
            {/* Baseline */}
            <AnimatedPath d="M 10 80 L 110 80" delay={0.3} />
            {/* Trend line */}
            <AnimatedPath d="M 15 65 L 30 40 L 60 20 L 90 45 L 105 15" delay={0.4} />
          </>
        );
      case 'design':
        return (
          <>
            {/* Back artboard */}
            <AnimatedPath d="M 15 25 L 85 25 L 85 65 L 15 65 Z" delay={0} />
            {/* Front artboard */}
            <AnimatedPath d="M 35 35 L 105 35 L 105 75 L 35 75 Z" delay={0.1} />
            {/* Alignment ticks */}
            <AnimatedPath d="M 15 15 L 15 25" delay={0.2} />
            <AnimatedPath d="M 15 15 L 25 15" delay={0.25} />
            <AnimatedPath d="M 105 85 L 105 75" delay={0.3} />
            <AnimatedPath d="M 105 85 L 95 85" delay={0.35} />
          </>
        );
      case 'ai':
        return (
          <>
            {/* Network lines */}
            <AnimatedPath d="M 30 45 L 60 25 L 90 45 L 75 75 L 45 75 Z" strokeWidth="0.8" delay={0} />
            <AnimatedPath d="M 60 25 L 60 55 L 75 75" strokeWidth="0.8" delay={0.1} />
            <AnimatedPath d="M 30 45 L 60 55 L 90 45" strokeWidth="0.8" delay={0.2} />
            {/* Highlighted path */}
            <AnimatedPath d="M 45 75 L 60 55 L 90 45" strokeWidth="1.8" delay={0.3} />
            {/* Nodes */}
            <AnimatedCircle cx="60" cy="25" r="4" delay={0.4} />
            <AnimatedCircle cx="30" cy="45" r="4" delay={0.45} />
            <AnimatedCircle cx="90" cy="45" r="4" delay={0.5} />
            <AnimatedCircle cx="45" cy="75" r="4" delay={0.55} />
            <AnimatedCircle cx="75" cy="75" r="4" delay={0.6} />
            <AnimatedCircle cx="60" cy="55" r="4" delay={0.65} />
          </>
        );
      case 'seo':
        return (
          <>
            {/* Cloud */}
            <AnimatedPath d="M 35 60 C 20 60 15 50 15 40 C 15 25 30 20 40 25 C 45 10 70 10 75 25 C 85 20 105 25 105 40 C 105 50 95 60 85 60" delay={0} />
            {/* Magnifying Glass */}
            <AnimatedCircle cx="60" cy="65" r="15" delay={0.2} />
            <AnimatedPath d="M 70 75 L 85 90" strokeWidth="1.5" delay={0.3} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      <svg 
        viewBox="0 0 120 100" 
        className="w-full h-full opacity-40 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderContent()}
      </svg>
    </div>
  );
}
