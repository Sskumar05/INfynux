import { motion } from "framer-motion";
import { Activity } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0A0A0A] border border-[#222222] overflow-hidden flex items-center justify-center group">
      
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Extremely subtle slow moving background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        style={{
          background: "radial-gradient(circle at center, rgba(212,175,55,0.08) 0%, transparent 60%)",
          backgroundSize: "200% 200%"
        }}
      />

      {/* Technical Data lines (subtle motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Horizontal line */}
        <motion.div 
          className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent top-1/3"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Vertical line */}
        <motion.div 
          className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent left-2/3"
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>

      {/* Central Engineering Module */}
      <div className="relative z-10 w-[60%] h-[60%] border border-[#333333] bg-[#111111]/80 backdrop-blur-sm p-6 flex flex-col justify-between">
        {/* Top bar */}
        <div className="flex justify-between items-center border-b border-[#333333] pb-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-[#888888] tracking-widest uppercase">System Core</span>
          </div>
          <Activity className="w-3.5 h-3.5 text-[#555555]" />
        </div>
        
        {/* Abstract data representation */}
        <div className="flex-1 flex flex-col justify-center gap-3 py-6">
          {[40, 75, 55, 90].map((width, i) => (
            <div key={i} className="w-full h-[2px] bg-[#222222] rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#555555]"
                initial={{ width: '0%' }}
                animate={{ width: `${width}%` }}
                transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeOut" }}
              />
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center pt-4 border-t border-[#333333]">
          <span className="font-mono text-[9px] text-[#666666] tracking-[0.2em]">ENG_V2.0</span>
          <span className="font-mono text-[9px] text-[#D4AF37] tracking-[0.2em]">STABLE</span>
        </div>
      </div>

      {/* Outer corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#555555]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#555555]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#555555]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#555555]" />

    </div>
  );
}
