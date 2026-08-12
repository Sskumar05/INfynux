import { ArrowUpRight, ArrowDown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProjectSlider } from './ProjectSlider';
import { MagneticButton } from '../ui/MagneticButton';

export function Hero() {
  return (
    <section className="w-full max-w-none px-6 lg:px-12 pt-32 pb-16 border-b border-[#222224] bg-[#0B0B0C] relative overflow-hidden min-h-[95vh] flex flex-col justify-center">
      
      {/* Background vector background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="#E0B840" strokeWidth="1" />
        </svg>
      </div>

      {/* Primary 65 / 35 Structural Column Split Grid */}
      <div className="w-full max-w-none grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* LEFT COLUMN: Clean Responsive Typography Content Area (65% Width) */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          
          {/* EYEBROW */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
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
            className="font-display font-bold text-[40px] sm:text-6xl md:text-7xl lg:text-[7vw] leading-[1.05] sm:leading-[0.95] tracking-tight max-w-[15ch] break-words"
          >
            We solve business problems with <span className="text-[var(--color-gold)] block">engineered software.</span>
          </motion.h1>

          {/* LEAD PARAGRAPH & CTAS */}
          <div className="flex flex-col lg:flex-row gap-10 mt-16 md:mt-20 lg:justify-between lg:items-center w-full">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-[rgba(250,247,240,0.72)] text-lg md:text-xl font-body font-light leading-relaxed max-w-[520px]"
            >
              Infynux is a software studio building two proprietary products for the <span className="text-[var(--color-gold)]">UK</span> market while delivering websites, mobile apps and management systems for businesses across <span className="text-[var(--color-gold)]">India</span>. Strategy, design and engineering under one roof.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0 lg:ml-auto w-full lg:w-auto justify-start sm:justify-end"
            >
              <MagneticButton href="#contact" className="bg-[var(--color-gold)] text-[var(--color-ink)] px-8 py-4 text-xs font-bold font-mono tracking-widest hover:bg-[var(--color-gold-bright)] transition-colors flex items-center justify-center gap-2 group">
                START A PROJECT <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
              <a href="/portfolio" className="border border-[var(--color-hairline)] text-[var(--color-paper)] px-8 py-4 text-xs font-bold font-mono tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center">
                VIEW PORTFOLIO
              </a>
            </motion.div>
          </div>

        </div>

        {/* RIGHT COLUMN: Stacked Slider Area (35% Width) */}
        <div className="lg:col-span-4 w-full flex flex-col items-center lg:items-end space-y-12 pt-6 relative">
          
          {/* Item 1: Auto-sliding project card engine viewport */}
          <div className="w-full flex justify-center lg:justify-end">
            <ProjectSlider />
          </div>

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
