import { motion } from "framer-motion";

export function HeroStackGraphic({ className, prefersReducedMotion }: { className?: string; prefersReducedMotion: boolean | null }) {
  // Top plate corners for pulsing nodes
  const nodes = [
    { x: 150, y: 30, delay: 0.1 },
    { x: 230, y: 55, delay: 0.9 },
    { x: 150, y: 80, delay: 0.5 },
    { x: 70, y: 55, delay: 1.3 },
  ];

  return (
    <svg viewBox="0 0 300 260" className={className} aria-hidden="true" style={{ overflow: "visible" }}>
      <path d="M150 30 L230 55 L150 80 L70 55 Z" fill="none" stroke="var(--color-gold-bright)" strokeWidth="1.1" opacity="0.9" />
      <path d="M150 100 L230 125 L150 150 L70 125 Z" fill="none" stroke="var(--color-gold)" strokeWidth="1.1" opacity="0.6" />
      <path d="M150 170 L230 195 L150 220 L70 195 Z" fill="none" stroke="var(--color-gold)" strokeWidth="1.1" opacity="0.35" />
      
      <line x1="70" y1="55" x2="70" y2="125" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
      <line x1="70" y1="125" x2="70" y2="195" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.25" />
      <line x1="230" y1="55" x2="230" y2="125" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.4" />
      <line x1="230" y1="125" x2="230" y2="195" stroke="var(--color-gold)" strokeWidth="0.8" opacity="0.25" />
      
      {!prefersReducedMotion && nodes.map((node, i) => (
        <motion.circle
          key={`stack-node-${i}`}
          cx={node.x} cy={node.y} r="2.5"
          fill="var(--color-gold-bright)"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}
