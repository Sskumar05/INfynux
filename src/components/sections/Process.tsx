import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stages = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-dive into your operational bottlenecks and business goals before any code is written."
  },
  {
    num: "02",
    title: "Design",
    desc: "System architecture and user interface design focused on reducing friction and maximizing efficiency."
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative engineering using scalable, production-ready technologies like React and Go."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Rigorous testing, SEO optimization, and zero-downtime deployment to your infrastructure."
  },
  {
    num: "05",
    title: "Support",
    desc: "Ongoing maintenance, monitoring, and feature iteration as your business scales."
  }
];

const HeaderContent = () => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="flex items-center justify-center gap-3 mb-6">
      <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-gold)] font-bold">
        How we work
      </span>
    </div>
    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
      Five stages. <span className="text-[var(--color-gold)]">Total clarity.</span>
    </h2>
    <p className="font-body text-lg max-w-xl mx-auto opacity-80">
      A transparent engineering process designed to eliminate risk and deliver predictable outcomes.
    </p>
  </div>
);

// Shared SVG Definitions (Gradient, Leaf Shape)
const TreeDefs = () => (
  <svg width="0" height="0" className="absolute w-0 h-0 opacity-0 pointer-events-none" style={{ position: 'absolute' }}>
    <defs>
      <linearGradient id="trunk-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#5c4516" />
        <stop offset="25%" stopColor="#8a7019" />
        <stop offset="75%" stopColor="#8a7019" />
        <stop offset="100%" stopColor="#3d2d0c" />
      </linearGradient>
      <path id="leaf" d="M 0,0 C -6,-12 0,-24 0,-24 C 6,-12 0,0 0,0" fill="#8f9779" opacity="0.8" />
    </defs>
  </svg>
);

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState<Array<{ id: number, left: number, delay: number, durationFall: number, durationSway: number, scale: number, color: string }>>([]);
  
  useEffect(() => {
    // Generate static random values once on mount to avoid hydration mismatches
    setLeaves(Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: 45 + Math.random() * 10, // 45% to 55% across the center
      delay: Math.random() * 10, // 0 to 10s delay
      durationFall: 10 + Math.random() * 5, // 10s to 15s fall duration
      durationSway: 3 + Math.random() * 2, // 3s to 5s sway cycle
      scale: 0.6 + Math.random() * 0.4, // size variation
      color: Math.random() > 0.5 ? '#8a7019' : '#d4af37' // Amber vs Gold
    })));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ willChange: 'transform' }}>
      <style>{`
        @keyframes leafFall {
          0% { top: -5%; opacity: 0; transform: translateY(0); }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { top: 105%; opacity: 0; transform: translateY(0); }
        }
        @keyframes leafSway {
          0% { transform: translateX(-40px) rotate(-25deg); }
          100% { transform: translateX(40px) rotate(25deg); }
        }
        .will-change-transform {
          will-change: transform, top, opacity;
        }
      `}</style>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute opacity-0 will-change-transform"
          style={{
            left: `${leaf.left}%`,
            animation: `leafFall ${leaf.durationFall}s linear infinite`,
            animationDelay: `${leaf.delay}s`
          }}
        >
          <div 
            className="will-change-transform"
            style={{
              animation: `leafSway ${leaf.durationSway}s ease-in-out infinite alternate`,
              animationDelay: `${leaf.delay}s`
            }}
          >
            <svg width="24" height="24" viewBox="-12 -24 24 24" style={{ transform: `scale(${leaf.scale})` }}>
              <path d="M 0,0 C -6,-12 0,-24 0,-24 C 6,-12 0,0 0,0" fill={leaf.color} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

const StageRow = ({ stage, i, isTreeVisible }: { stage: typeof stages[0], i: number, isTreeVisible: boolean }) => {
  const isLeft = i % 2 === 0;

  const w_top = 4 + i * 1.5;
  const w_bot = 4 + (i + 1) * 1.5;
  const wave = i % 2 === 0 ? -4 : 4; 
  const trunkPath = `M ${20 - w_top/2},0 C ${20 - w_top/2 + wave},33 ${20 - w_bot/2 + wave},66 ${20 - w_bot/2},100 L ${20 + w_bot/2},100 C ${20 + w_bot/2 + wave},66 ${20 + w_top/2 + wave},33 ${20 + w_top/2},0 Z`;

  const easeOut = "cubic-bezier(0.25, 0.1, 0.25, 1)";

  // Trunk: Staggered down the 5 rows over 1.5s total (each takes 0.5s with a 0.25s stagger)
  const trunkDelay = i * 0.25;
  const trunkStyle = {
    transition: `clip-path 0.5s ${easeOut} ${trunkDelay}s, -webkit-clip-path 0.5s ${easeOut} ${trunkDelay}s`,
    clipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
    WebkitClipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)'
  };

  // Branches: Start after trunk completes (1.5s base delay), 0.2s stagger per branch, 0.9s duration
  const branchDelay = 1.5 + (i * 0.2);
  const branchStyleLeft = {
    transition: `clip-path 0.9s ${easeOut} ${branchDelay}s, -webkit-clip-path 0.9s ${easeOut} ${branchDelay}s`,
    clipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)',
    WebkitClipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 0% 100%)'
  };
  const branchStyleRight = {
    transition: `clip-path 0.9s ${easeOut} ${branchDelay}s, -webkit-clip-path 0.9s ${easeOut} ${branchDelay}s`,
    clipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)',
    WebkitClipPath: isTreeVisible ? 'inset(0% 0% 0% 0%)' : 'inset(0% 100% 0% 0%)'
  };
  const branchStyle = isLeft ? branchStyleLeft : branchStyleRight;

  // Content (Apples and Text): Fade in shortly after the branch finishes drawing (0.7s after branch starts)
  const contentDelay = branchDelay + 0.7;
  const appleStyle = {
    transition: `all 0.6s ${easeOut} ${contentDelay}s`,
    opacity: isTreeVisible ? 1 : 0,
    transform: isTreeVisible ? 'scale(1)' : 'scale(0.85)'
  };

  const textStyle = {
    transition: `opacity 0.6s ${easeOut} ${contentDelay}s`,
    opacity: isTreeVisible ? 1 : 0
  };

  return (
    <div className="relative w-full py-10 md:py-16 flex group">
      {/* Mobile background alternating */}
      <div className={`absolute inset-0 z-[-2] md:hidden ${isLeft ? 'bg-[var(--color-ink)]' : 'bg-[#e9e1c2]'}`} />
      
      {/* Trunk Segment - Left on mobile, Center on desktop */}
      <svg 
        className="absolute top-0 bottom-0 left-8 md:left-1/2 w-10 h-full -translate-x-1/2 z-0"
        preserveAspectRatio="none"
        viewBox="0 0 40 100"
        style={trunkStyle}
      >
        <path d={trunkPath} fill="url(#trunk-grad)" />
      </svg>

      {/* MOBILE LAYOUT (Full width, unified left-trunk style) */}
      <div className="flex md:hidden flex-col w-full px-6 relative z-10 pl-24">
        <div className="relative w-12 h-12 mb-4 shrink-0" style={appleStyle}>
          {/* Branch connecting Trunk (left-8/32px) to Apple (pl-24/96px). Width = 64px (w-16) */}
          <svg 
            className="absolute right-full bottom-0 w-16 h-12 z-[-1] overflow-visible" 
            preserveAspectRatio="none" 
            viewBox="0 0 100 100"
            style={branchStyleRight}
          >
            <g transform="scale(-1, 1) translate(-100, 0)">
              <path d="M 100,10 C 60,10 30,95 0,95 L 0,100 C 30,100 60,25 100,25 Z" fill="url(#trunk-grad)" />
              <path d="M 60,40 Q 50,20 40,10 Q 55,25 65,45 Z" fill="url(#trunk-grad)" />
              <path d="M 30,80 Q 20,60 10,50 Q 25,65 35,85 Z" fill="url(#trunk-grad)" />
              <use href="#leaf" x="40" y="10" transform="rotate(-30 40 10) scale(0.6)" />
              <use href="#leaf" x="10" y="50" transform="rotate(-60 10 50) scale(0.5)" />
              <use href="#leaf" x="70" y="30" transform="rotate(-15 70 30) scale(0.7)" />
            </g>
          </svg>
          <div 
            className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-shadow duration-500 bg-[#3d2d0c]" 
            style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, var(--color-gold) 0%, #8a7019 60%, #4a3610 100%)' }}
          />
          <div className={`absolute inset-0 rounded-full border-2 pointer-events-none ${isLeft ? 'border-white/30' : 'border-black/30'}`} />
          <span className="absolute inset-0 flex items-center justify-center font-mono text-base font-bold text-white pointer-events-none">
            {stage.num}
          </span>
        </div>

        <div className="flex flex-col text-left" style={textStyle}>
          <span className="font-mono text-[11px] text-[var(--color-gold)] tracking-[0.25em] uppercase font-bold mb-2">
            STAGE {stage.num}
          </span>
          <h3 className={`font-display font-bold text-3xl mb-3 tracking-tight ${isLeft ? 'text-white' : 'text-[var(--color-ink)]'}`}>
            {stage.title}
          </h3>
          <p className={`font-body text-sm leading-relaxed ${isLeft ? 'text-white/70' : 'text-[var(--color-text-muted-dark)]'}`}>
            {stage.desc}
          </p>
        </div>
      </div>

      {/* DESKTOP LAYOUT - Left Branch (Dark Side) */}
      <div className={`hidden md:flex w-1/2 pr-16 lg:pr-24 justify-end relative ${!isLeft ? 'md:hidden' : ''}`}>
        <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8 w-full justify-end relative z-10 pl-2 md:pl-0">
          <div className="order-2 md:order-1 flex flex-col items-end text-right w-full" style={textStyle}>
            <span className="font-mono text-[11px] md:text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase font-bold mb-1 md:mb-3">
              STAGE {stage.num}
            </span>
            <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 text-white tracking-tight">
              {stage.title}
            </h3>
            <p className="font-body text-sm md:text-lg text-white/70 leading-relaxed max-w-sm">
              {stage.desc}
            </p>
          </div>
          <div className="order-1 md:order-2 shrink-0 relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-3 md:mb-0" style={appleStyle}>
            
            {/* Angled Branch SVG - Anchored to Apple */}
            <svg 
              className="absolute right-[-16px] md:right-[-64px] lg:right-[-96px] bottom-0 w-8 md:w-16 lg:w-24 h-12 md:h-16 lg:h-20 z-[-1] overflow-visible" 
              preserveAspectRatio="none" 
              viewBox="0 0 100 100"
              style={branchStyleLeft}
            >
              <path d="M 100,10 C 60,10 30,95 0,95 L 0,100 C 30,100 60,25 100,25 Z" fill="url(#trunk-grad)" />
              <path d="M 60,40 Q 50,20 40,10 Q 55,25 65,45 Z" fill="url(#trunk-grad)" />
              <path d="M 30,80 Q 20,60 10,50 Q 25,65 35,85 Z" fill="url(#trunk-grad)" />
              <use href="#leaf" x="40" y="10" transform="rotate(-30 40 10) scale(0.6)" />
              <use href="#leaf" x="10" y="50" transform="rotate(-60 10 50) scale(0.5)" />
              <use href="#leaf" x="70" y="30" transform="rotate(-15 70 30) scale(0.7)" />
            </svg>

            <div 
              className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-shadow duration-500 bg-[#3d2d0c]" 
              style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, var(--color-gold) 0%, #8a7019 60%, #4a3610 100%)', willChange: 'box-shadow' }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none" />
            <span className="relative z-10 font-mono text-base md:text-lg lg:text-xl font-bold text-white pointer-events-none">
              {stage.num}
            </span>
          </div>
        </div>
      </div>

      {/* DESKTOP LAYOUT - Right Branch (Cream Side) */}
      <div className={`hidden md:flex w-1/2 pl-16 lg:pl-24 justify-start relative ${isLeft ? 'md:hidden' : ''}`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-8 w-full justify-start relative z-10 pr-2 md:pr-0">
          <div className="order-1 shrink-0 relative w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-3 md:mb-0" style={appleStyle}>
            
            {/* Angled Branch SVG - Anchored to Apple */}
            <svg 
              className="absolute left-[-16px] md:left-[-64px] lg:left-[-96px] bottom-0 w-8 md:w-16 lg:w-24 h-12 md:h-16 lg:h-20 z-[-1] overflow-visible" 
              preserveAspectRatio="none" 
              viewBox="0 0 100 100"
              style={branchStyleRight}
            >
              <g transform="scale(-1, 1) translate(-100, 0)">
                <path d="M 100,10 C 60,10 30,95 0,95 L 0,100 C 30,100 60,25 100,25 Z" fill="url(#trunk-grad)" />
                <path d="M 60,40 Q 50,20 40,10 Q 55,25 65,45 Z" fill="url(#trunk-grad)" />
                <path d="M 30,80 Q 20,60 10,50 Q 25,65 35,85 Z" fill="url(#trunk-grad)" />
                <use href="#leaf" x="40" y="10" transform="rotate(-30 40 10) scale(0.6)" />
                <use href="#leaf" x="10" y="50" transform="rotate(-60 10 50) scale(0.5)" />
                <use href="#leaf" x="70" y="30" transform="rotate(-15 70 30) scale(0.7)" />
              </g>
            </svg>

            <div 
              className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.7)] transition-shadow duration-500 bg-[#3d2d0c]" 
              style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, var(--color-gold) 0%, #8a7019 60%, #4a3610 100%)', willChange: 'box-shadow' }}
            />
            <div className="absolute inset-0 rounded-full border-2 border-black/30 pointer-events-none" />
            <span className="relative z-10 font-mono text-base md:text-lg lg:text-xl font-bold text-white pointer-events-none">
              {stage.num}
            </span>
          </div>
          <div className="order-2 flex flex-col items-start text-left w-full" style={textStyle}>
            <span className="font-mono text-[11px] md:text-xs text-[var(--color-gold)] tracking-[0.25em] uppercase font-bold mb-1 md:mb-3">
              STAGE {stage.num}
            </span>
            <h3 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 text-[var(--color-ink)] tracking-tight">
              {stage.title}
            </h3>
            <p className="font-body text-sm md:text-lg text-[var(--color-text-muted-dark)] leading-relaxed max-w-sm">
              {stage.desc}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(containerRef, { once: true, amount: 0.1, margin: "0px 0px -100px 0px" });

  const easeOut = "cubic-bezier(0.25, 0.1, 0.25, 1)";
  
  const canopyStyle = {
    transition: `all 1s ${easeOut} 0s`,
    opacity: isSectionInView ? 1 : 0,
    transform: isSectionInView ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)'
  };
  const rootsStyle = {
    transition: `all 1s ${easeOut} 1.5s`, // 1.5s aligns with trunk completion
    opacity: isSectionInView ? 1 : 0,
    transform: isSectionInView ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(-20px)'
  };

  return (
    <section id="approach" className="relative w-full bg-[#e9e1c2] overflow-hidden" ref={containerRef}>
      <TreeDefs />
      
      {/* Split Background (Left: Dark, Right: Cream) - Desktop Only */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:flex">
        <div className="w-1/2 h-full bg-[var(--color-ink)]" />
        <div className="w-1/2 h-full bg-[#e9e1c2]" />
      </div>

      <FallingLeaves />

      {/* Header with Perfect Clipping for High Contrast on both sides */}
      <div className="relative z-10 pt-24 md:pt-32 pb-16 max-w-5xl mx-auto">
        <div className="relative px-6">
          {/* Mobile visible header (Cream background defaults to dark text) */}
          <div className="md:hidden text-[var(--color-ink)]">
            <HeaderContent />
          </div>
          {/* Desktop split headers */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-full text-white px-6" style={{ clipPath: 'inset(0 50% 0 0)' }}>
            <HeaderContent />
          </div>
          <div className="hidden md:block absolute top-0 left-0 w-full h-full text-[var(--color-ink)] px-6" style={{ clipPath: 'inset(0 0 0 50%)' }}>
            <HeaderContent />
          </div>
          {/* Hidden layout element for sizing */}
          <div className="opacity-0 pointer-events-none hidden md:block">
            <HeaderContent />
          </div>
        </div>
      </div>

      {/* Tree Timeline Container */}
      <div className="relative max-w-5xl mx-auto px-0 md:px-6 pb-24 md:pb-32 z-10 flex flex-col md:items-center">
        
        {/* Canopy Silhouette */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-32 h-32 md:w-48 md:h-48 absolute top-0 mt-32 md:mt-48 z-0 overflow-visible left-8 md:left-1/2 -translate-x-1/2"
          style={canopyStyle}
        >
          {/* Base trunk coming up to support the crown */}
          <path d="M 46,100 C 46,70 40,50 30,30 C 45,40 50,60 54,100 Z" fill="url(#trunk-grad)" />
          <path d="M 54,100 C 54,70 60,50 70,30 C 55,40 50,60 46,100 Z" fill="url(#trunk-grad)" />
          {/* Canopy Leaves */}
          <circle cx="50" cy="40" r="30" fill="#8f9779" opacity="0.8" />
          <circle cx="30" cy="50" r="20" fill="#8f9779" opacity="0.6" />
          <circle cx="70" cy="50" r="20" fill="#8f9779" opacity="0.6" />
          <circle cx="50" cy="20" r="20" fill="#8f9779" opacity="0.9" />
          {/* Detailed outer leaves */}
          <use href="#leaf" x="20" y="40" transform="rotate(-45 20 40) scale(1.2)" />
          <use href="#leaf" x="80" y="45" transform="rotate(45 80 45) scale(1.1)" />
          <use href="#leaf" x="50" y="0" transform="rotate(0 50 0) scale(1.5)" />
        </svg>

        <div className="flex flex-col w-full relative z-10 pt-48 md:pt-32">
          {stages.map((stage, i) => (
            <StageRow key={i} stage={stage} i={i} isTreeVisible={isSectionInView} />
          ))}
        </div>

        {/* Base Roots */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-24 h-24 md:w-32 md:h-32 absolute bottom-0 mb-8 md:mb-16 z-0 overflow-visible left-8 md:left-1/2 -translate-x-1/2"
          style={rootsStyle}
        >
          <path d="M 40,0 C 40,30 20,70 0,90 C 10,95 30,70 50,20 Z" fill="url(#trunk-grad)" />
          <path d="M 60,0 C 60,30 80,70 100,90 C 90,95 70,70 50,20 Z" fill="url(#trunk-grad)" />
          <path d="M 45,0 C 45,40 40,80 30,100 C 40,100 55,80 55,0 Z" fill="url(#trunk-grad)" />
        </svg>

      </div>
    </section>
  );
}
