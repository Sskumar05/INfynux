import { useState } from "react";
import { motion } from "framer-motion";

const leaders = [
  { name: "Yogeshwaran", role: "CEO", img: "/Yogesh.png", note: "Visionary leader driving innovation & business growth." },
  { name: "Govindarajan", role: "CBO", img: "/Govind.png", note: "Crafting impactful brand identities & strategic campaigns." },
  { name: "Harish Vendhan", role: "COO", img: "/Harish.png", note: "Overseeing operations & executing business strategies." },
  { name: "Rajesh", role: "CMO", img: "/Rajesh.png", note: "Designing intuitive & visually stunning user experiences." },
  { name: "Shathis Kumar", role: "CTO", img: "/shathis.png", note: "Building scalable & secure high-performance systems." },
  { name: "Naveen", role: "Tech & Training Manager", img: "/naveen.png", note: "Leading technical training & team development." },
];

export function Leaders() {
  return (
    <section id="leaders" className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] py-24 md:py-32 border-b border-white/10 overflow-hidden">
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
            <TeamCard key={leader.name} member={leader} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: typeof leaders[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group [perspective:1000px] aspect-[3/4] w-full"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)} 
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`${member.name}, ${member.role} — press to reveal details`}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setFlipped(f => !f); }}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d]"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] bg-[var(--color-panel)] border border-white/10 overflow-hidden flex flex-col cursor-pointer">
          {/* Index removed */}
          
          <div className="absolute inset-0 flex justify-center items-end">
            <img 
              src={member.img} 
              alt="" 
              className="w-full h-full opacity-90"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>

          <div className="mt-auto relative z-10 text-center pb-8 bg-gradient-to-t from-[var(--color-panel)] via-[var(--color-panel)]/90 to-transparent pt-12">
            <h3 className="font-display font-semibold text-2xl text-[var(--color-paper)] tracking-tight">
              {member.name}
            </h3>
            <span className="sr-only">{member.role}</span>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[var(--color-panel)] border border-[var(--color-gold)]/30 overflow-hidden flex flex-col items-center justify-center p-8 text-center cursor-pointer">
          <h3 className="font-display font-semibold text-3xl text-[var(--color-paper)] mb-3">
            {member.name}
          </h3>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-gold)] mb-6">
            {member.role}
          </p>
          <p className="font-body text-base md:text-lg text-white/70 max-w-[260px] mx-auto leading-relaxed">
            {member.note}
          </p>
        </div>

      </motion.div>
    </motion.div>
  );
}
