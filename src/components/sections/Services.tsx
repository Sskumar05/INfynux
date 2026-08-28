import { useRef, MouseEvent } from 'react';
import { ArrowRight, Code2, Terminal } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

const AppMotif = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
    <rect x="30" y="15" width="40" height="70" rx="8" fill="none" stroke="var(--color-gold)" strokeWidth="4" />
    <circle cx="50" cy="75" r="3" fill="var(--color-gold)" />
  </svg>
);

const MgmtMotif = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
    <circle cx="50" cy="30" r="10" fill="none" stroke="var(--color-gold)" strokeWidth="4" />
    <circle cx="25" cy="70" r="10" fill="none" stroke="var(--color-gold)" strokeWidth="4" />
    <circle cx="75" cy="70" r="10" fill="none" stroke="var(--color-gold)" strokeWidth="4" />
    <path d="M42 38 L32 62 M58 38 L68 62 M35 70 L65 70" fill="none" stroke="var(--color-gold)" strokeWidth="3" opacity="0.5" />
  </svg>
);

const DesignMotif = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
    <path d="M40 40 L60 40 L60 60 L40 60 Z" fill="none" stroke="var(--color-gold)" strokeWidth="4" />
    <circle cx="40" cy="40" r="4" fill="var(--color-gold)" />
    <circle cx="60" cy="40" r="4" fill="var(--color-gold)" />
    <circle cx="60" cy="60" r="4" fill="var(--color-gold)" />
    <circle cx="40" cy="60" r="4" fill="var(--color-gold)" />
    <path d="M50 20 L50 40 M80 50 L60 50 M50 80 L50 60 M20 50 L40 50" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

const AiMotif = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
    <circle cx="50" cy="50" r="20" fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeDasharray="8 4" className="origin-center animate-spin-slow" />
    <circle cx="50" cy="50" r="8" fill="var(--color-gold)" />
    <path d="M50 30 L50 15 M50 70 L50 85 M70 50 L85 50 M30 50 L15 50" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
    <path d="M64 36 L75 25 M36 64 L25 75 M64 64 L75 75 M36 36 L25 25" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
  </svg>
);

const CloudMotif = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
    <path d="M30 65 Q20 65 20 55 Q20 45 30 45 Q35 30 50 30 Q65 30 70 45 Q80 45 80 55 Q80 65 70 65 Z" fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeLinejoin="round" />
    <path d="M40 85 L40 65 M60 85 L60 65 M50 90 L50 65" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeDasharray="4 4" />
  </svg>
);

const services = [
  {
    tag: "02 / Mobile",
    title: "App Development",
    desc: "Native and cross-platform mobile experiences.",
    featured: false,
    tall: true,
    motif: AppMotif,
    slug: 'app-development'
  },
  {
    tag: "03 / Intelligence",
    title: "AI Integration",
    desc: "LLMs and machine learning pipelines embedded into your workflows.",
    featured: false,
    tall: false,
    motif: AiMotif,
    slug: 'ai-integrations'
  },
  {
    tag: "04 / Product",
    title: "UI/UX Design",
    desc: "Interface design systems that prioritize user friction-reduction.",
    featured: false,
    tall: false,
    motif: DesignMotif,
    slug: 'ui-ux-design'
  },
  {
    tag: "05 / Operations",
    title: "Management Systems",
    desc: "Custom ERPs and dashboards that streamline your business processes.",
    featured: true, 
    wide: true,
    motif: MgmtMotif,
    slug: 'web-development'
  },
  {
    tag: "06 / Visibility",
    title: "SEO & Cloud",
    desc: "Technical SEO and scalable cloud architectures on AWS & Cloudflare.",
    featured: false,
    tall: false,
    motif: CloudMotif,
    slug: 'cloud-solutions'
  }
];

const tagChips = [
  "Web Development", "App Development", "AI Integration", 
  "UI/UX Design", "Cloud & SEO", "Management Systems"
];

function BentoCard({ service }: { service: typeof services[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  let spanClasses = "sm:col-span-1 sm:row-span-1";
  if (service.featured && !service.wide) spanClasses = "sm:col-span-2 sm:row-span-2"; 
  else if (service.tall) spanClasses = "sm:col-span-1 sm:row-span-2"; 
  else if (service.wide) spanClasses = "sm:col-span-2 sm:row-span-1"; 

  return (
    <motion.div
      variants={itemVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        relative w-full min-h-[300px]
        flex flex-col p-8 group transition-all duration-500
        bg-[var(--color-panel)] border border-white/5
        hover:border-[var(--color-gold)] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,162,75,0.15)]
        overflow-hidden rounded-xl
        ${spanClasses}
      `}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
        style={{ 
          background: "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(201,162,75,0.08), transparent 60%)"
        }}
      />
      
      <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[60%] pointer-events-none z-0">
        <service.motif />
      </div>

      <div className="relative z-10 flex flex-col h-full w-full justify-between">
        <div className="font-mono text-[10px] text-white/50 tracking-[0.2em] uppercase mb-8">
          {service.tag}
        </div>
        
        <Link to="/services/$serviceId" params={{ serviceId: service.slug }} className="mt-auto block">
          <motion.div className="flex flex-col items-start cursor-pointer group/link">
            <h3 className={`font-display font-bold ${service.featured && !service.wide ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'} mb-4 text-[var(--color-paper)]`}>
              {service.title}
            </h3>
            <p className="text-white/60 font-body text-sm leading-relaxed mb-8 max-w-sm">
              {service.desc}
            </p>
            
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-gold)] uppercase tracking-widest group-hover/link:text-[var(--color-gold-bright)] transition-colors mt-auto">
              Explore 
              <motion.div className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

export function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="relative w-full bg-[#e9e1c2] text-[var(--color-ink)] py-24 border-b border-black/10 overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="absolute top-1/3 right-1/4 w-[800px] h-[800px] bg-[var(--color-gold)] opacity-[0.05] blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Area with Tag Chips */}
        <div className="mb-12" data-aos="fade-up">
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {tagChips.map(tag => (
              <div key={tag} className="px-4 py-1.5 rounded-full border border-[var(--color-gold-dim)] bg-[var(--color-ink)] text-xs font-mono uppercase tracking-widest text-[var(--color-paper)]">
                {tag}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
              What we do
            </span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl leading-[1.1] tracking-tight mb-6">
            Engineered <span className="text-[var(--color-gold)]">Capabilities</span>
          </h2>
          <p className="text-[var(--color-text-muted-dark)] font-body text-lg max-w-xl">
            From deep infrastructure to the user interface, we deliver end-to-end software solutions.
          </p>
        </div>

        {/* Featured Bold Single Card */}
        <div className="relative mb-16" data-aos="fade-up" data-aos-delay="100">
          <div className="relative w-full rounded-3xl bg-[var(--color-panel)] border border-white/5 overflow-hidden flex flex-col lg:flex-row group shadow-2xl">
            {/* Subtle Gold Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-gold)] opacity-[0.03] group-hover:opacity-[0.06] blur-[80px] rounded-full pointer-events-none transition-opacity duration-700" />

            {/* Left Content */}
            <div className="lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.2em] uppercase mb-4">01 / Featured Service</div>
              <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-[var(--color-paper)] mb-6 leading-[1.1]">
                Web <br className="hidden md:block" /> Development
              </h3>
              <p className="text-white/60 font-body text-lg max-w-lg mb-10 leading-relaxed">
                We engineer scalable, lightning-fast web applications designed to handle complex business logic and high traffic volumes seamlessly.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-[var(--color-gold)] text-[var(--color-ink)] rounded-full font-mono text-xs uppercase tracking-widest font-bold hover:bg-[var(--color-gold-bright)] transition-colors text-center shadow-[0_0_20px_rgba(201,162,75,0.2)]">
                  Start a Project
                </Link>
                <Link to="/portfolio" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full font-mono text-xs uppercase tracking-widest hover:bg-[var(--color-gold)] hover:text-[var(--color-ink)] transition-colors text-center">
                  View Case Study
                </Link>
              </div>
            </div>

            {/* Right Visual (Abstract Terminal/Code Graphic) */}
            <div className="lg:w-1/2 p-6 lg:p-16 flex items-center justify-center relative z-10 min-h-[300px] lg:min-h-[400px]">
               <div className="relative w-full max-w-md aspect-video bg-[#0b0b0d] rounded-xl border border-white/10 shadow-2xl overflow-hidden flex flex-col group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-700">
                 {/* Terminal Header */}
                 <div className="h-8 w-full bg-[#16151a] border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                   <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                 </div>
                 {/* Terminal Content */}
                 <div className="p-6 font-mono text-xs md:text-sm text-[var(--color-gold)] opacity-70 flex flex-col gap-3">
                   <div className="flex items-center gap-2"><Code2 className="w-4 h-4 opacity-50"/> <span>init --scalable --secure</span></div>
                   <div className="flex items-center gap-2 opacity-50 pl-6"><span>Deploying high-performance architecture...</span></div>
                   <div className="flex items-center gap-2 opacity-50 pl-6"><span>Optimizing global edge delivery...</span></div>
                   <div className="flex items-center gap-2 text-white/80"><Terminal className="w-4 h-4 opacity-50"/> <span>System ready.</span></div>
                 </div>
               </div>
            </div>
          </div>

          {/* Floating Stat Badges (Absolutely positioned ON TOP of the card wrapper) */}
          <div className="absolute -bottom-6 left-12 lg:left-24 flex flex-wrap gap-4 z-20 pointer-events-none hidden md:flex">
            <div className="px-6 py-3 bg-[#16151a] rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <span className="font-display font-black text-2xl text-[var(--color-gold)]">6+</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-paper)] opacity-80 w-20 leading-tight">Core Disciplines</span>
            </div>
            <div className="px-6 py-3 bg-[#16151a] rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <span className="font-display font-black text-2xl text-[var(--color-gold)]">50+</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-paper)] opacity-80 w-20 leading-tight">Projects Shipped</span>
            </div>
            <div className="px-6 py-3 bg-[#16151a] rounded-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex items-center gap-4 hover:-translate-y-1 transition-transform">
              <span className="font-display font-black text-2xl text-[var(--color-gold)]">24h</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--color-paper)] opacity-80 w-20 leading-tight">Typical Response</span>
            </div>
          </div>
        </div>

        {/* Maximalist Bento Grid for Remaining Services */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[300px] gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, i) => (
            <BentoCard key={i} service={service} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
