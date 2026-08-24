import { ArrowUpRight, ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export function Hero() {
  return (
    <section className="w-full max-w-none px-6 lg:px-12 border-b border-[#222224] bg-[#0B0B0C] relative overflow-hidden h-screen min-h-[600px] flex flex-col items-center pt-24 pb-12">
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top scale-[1.35] origin-top pointer-events-none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
        <source src="/hero-bg-fallback.mp4" type="video/mp4" />
      </video>

      {/* Text Contrast Scrim */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none z-0"></div>

      {/* Background vector background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#E0B840" strokeWidth="1" />
        </svg>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[800px] mx-auto relative z-10 flex flex-col justify-center items-center text-center my-auto">
        
        {/* Radial Text Scrim for Contrast */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] pointer-events-none -z-10"
          style={{ background: 'radial-gradient(ellipse 700px 500px at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 50%, transparent 80%)' }}
        ></div>
        
        {/* EYEBROW */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
          <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
            Product & Software Engineering · UK / India
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight mx-auto px-4 sm:px-0"
        >
          We solve business problems with <span className="text-[var(--color-gold)] block">engineered software.</span>
        </motion.h1>

        {/* LEAD PARAGRAPH & CTAS */}
        <div className="flex flex-col items-center w-full px-4 sm:px-0">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[rgba(250,247,240,0.72)] text-lg md:text-xl font-body font-light leading-relaxed max-w-[600px] mx-auto text-center mt-8"
          >
            Infynux is a software studio building two proprietary products for the <span className="text-[var(--color-gold)]">UK</span> market while delivering websites, mobile apps and management systems for businesses across <span className="text-[var(--color-gold)]">India</span>. Strategy, design and engineering under one roof.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto justify-center mt-10"
          >
            <MagneticButton href="#contact" className="bg-[var(--color-gold)] text-[var(--color-ink)] px-8 py-4 text-xs font-bold font-mono tracking-widest hover:bg-[var(--color-gold-bright)] transition-colors flex items-center justify-center gap-2 group rounded-full shadow-none border-none w-full sm:w-auto min-h-[56px]">
              START A PROJECT <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
            <a href="/portfolio" className="border border-[var(--color-hairline)] text-[var(--color-paper)] px-8 py-4 text-xs font-bold font-mono tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center rounded-full w-full sm:w-auto min-h-[56px]">
              VIEW PORTFOLIO
            </a>
          </motion.div>
        </div>

      </div>

      {/* Tracker Base Action Anchor Ticker */}
      <div className="mt-20 pt-6 border-t border-[#222224]/40 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#88888C] relative z-10">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full"></span>
          SYSTEMS ARCHITECTURE MATRIX ACTIVE
        </div>
        <a href="#services" className="flex items-center gap-2 hover:text-white transition-colors group">
          Scroll to know more <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E0B840]" />
        </a>
      </div>

      <style>{`
        @keyframes premiumFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
}
