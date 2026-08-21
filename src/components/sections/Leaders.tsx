import { useState } from "react";
import { motion } from "framer-motion";

const leaders = [
  { name: "Yogeshwaran", role: "CEO", img: "/Yogesh.png", linkedin: "https://www.linkedin.com/in/yogeshwaran-d/", note: "Visionary leader driving innovation & business growth." },
  { name: "Govindarajan", role: "CBO", img: "/Govind.png", linkedin: "https://www.linkedin.com/in/govindarajan13/", note: "Crafting impactful brand identities & strategic campaigns." },
  { name: "Harish Vendhan", role: "COO", img: "/Harish.png", linkedin: "https://www.linkedin.com/in/harish104/", note: "Overseeing operations & executing business strategies." },
  { name: "Rajesh", role: "CMO", img: "/Rajesh.png", linkedin: "https://www.linkedin.com/in/rajeshv2004/", note: "Designing intuitive & visually stunning user experiences." },
  { name: "Shathis Kumar", role: "CTO", img: "/shathis.png", linkedin: "https://www.linkedin.com/in/shathis-kumar-s-6b9137314/", note: "Building scalable & secure high-performance systems." },
  { name: "Naveen", role: "Tech & Training Manager", img: "/naveen.png", linkedin: "https://www.linkedin.com/in/naveend2005/", note: "Leading technical training & team development." },
];

export function Leaders() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section 
      id="leaders" 
      className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] py-24 md:py-32 border-b border-white/10 overflow-hidden"
      onClick={() => setActiveCard(null)}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-white/60 tracking-[0.2em] uppercase">
              Major Leaders
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
            The minds behind <span className="text-[var(--color-gold)]">Infynux.</span>
          </h2>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {leaders.map((leader, i) => (
            <TeamCard 
              key={leader.name} 
              member={leader} 
              index={i} 
              isActive={activeCard === i}
              onActivate={(e) => {
                e.stopPropagation();
                setActiveCard(activeCard === i ? null : i);
              }}
              onHoverStart={() => setActiveCard(i)}
              onHoverEnd={() => setActiveCard(null)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ 
  member, 
  index, 
  isActive, 
  onActivate,
  onHoverStart,
  onHoverEnd
}: { 
  member: typeof leaders[0]; 
  index: number; 
  isActive: boolean;
  onActivate: (e: React.MouseEvent) => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`relative w-full max-w-[320px] mx-auto aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-500 cursor-pointer ${
        isActive 
          ? "border-[var(--color-gold)] -translate-y-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.5)]" 
          : "border-white/10"
      }`}
      tabIndex={0}
      onClick={onActivate}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Background Image / Fallback */}
      <div className="absolute inset-0 bg-[#16151a]">
        {!imgError ? (
          <img 
            src={member.img} 
            alt={member.name} 
            className={`w-full h-full object-cover object-top transition-transform duration-700 ${isActive ? "scale-105" : "scale-100"}`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#16151a] to-[#0b0b0d]">
            <span className="font-display font-black text-6xl text-[var(--color-gold)] opacity-30">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Default State Scrim & Name */}
      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 flex items-end p-6 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
        <h3 className="font-display font-bold text-2xl text-white drop-shadow-md">
          {member.name}
        </h3>
      </div>

      {/* Hover Reveal Overlay */}
      <div className={`absolute inset-0 bg-[rgba(10,10,12,0.85)] transition-opacity duration-400 flex flex-col p-8 justify-center text-center ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <h3 className={`font-display font-bold text-3xl text-white mb-2 transition-transform duration-500 ${isActive ? "translate-y-0" : "translate-y-4"}`}>
          {member.name}
        </h3>
        <p className={`font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-gold)] mb-6 transition-transform duration-500 delay-75 ${isActive ? "translate-y-0" : "translate-y-4"}`}>
          {member.role}
        </p>
        <p className={`font-body text-sm text-white/70 leading-relaxed transition-transform duration-500 delay-100 ${isActive ? "translate-y-0" : "translate-y-4"}`}>
          {member.note}
        </p>
        
        {/* LinkedIn Icon */}
        {member.linkedin && (
          <div className={`absolute bottom-8 left-0 right-0 flex justify-center transition-transform duration-500 delay-150 ${isActive ? "translate-y-0" : "translate-y-4"}`}>
            <a 
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] hover:text-black transition-colors text-white" 
              aria-label={`LinkedIn profile of ${member.name}`}
              onClick={(e) => e.stopPropagation()} // prevent card toggle when clicking link
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        )}
      </div>
      
      {/* Mobile Hint (visible on touch devices) */}
      <div className={`absolute top-4 right-4 md:hidden w-8 h-8 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center transition-opacity ${isActive ? "opacity-0" : "opacity-70"}`}>
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </div>
    </motion.div>
  );
}
