import { useRef, MouseEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { ServiceDiagram, DiagramVariant } from '../ui/ServiceDiagram';
import { Link } from '@tanstack/react-router';

const services: Array<{
  tag: string;
  title: string;
  desc: string;
  featured: boolean;
  variant: DiagramVariant;
  slug: string;
}> = [
  {
    tag: "01 / Web",
    title: "Web Development",
    desc: "High-performance web applications engineered for scale and speed.",
    featured: true,
    variant: 'web',
    slug: 'web-development'
  },
  {
    tag: "02 / Mobile",
    title: "App Development",
    desc: "Native and cross-platform mobile experiences.",
    featured: false,
    variant: 'app',
    slug: 'app-development'
  },
  {
    tag: "03 / Operations",
    title: "Management Systems",
    desc: "Custom ERPs and dashboards that streamline your business processes.",
    featured: false,
    variant: 'management',
    slug: 'web-development'
  },
  {
    tag: "04 / Product",
    title: "UI/UX Design",
    desc: "Interface design systems that prioritize user friction-reduction.",
    featured: false,
    variant: 'design',
    slug: 'ui-ux-design'
  },
  {
    tag: "05 / Intelligence",
    title: "AI Integration",
    desc: "LLMs and machine learning pipelines embedded into your workflows.",
    featured: false,
    variant: 'ai',
    slug: 'ai-integrations'
  },
  {
    tag: "06 / Visibility",
    title: "SEO & Cloud",
    desc: "Technical SEO and scalable cloud architectures on AWS & Cloudflare.",
    featured: false,
    variant: 'seo',
    slug: 'cloud-solutions'
  }
];

function BentoCard({ service, prefersReducedMotion }: { service: typeof services[0]; prefersReducedMotion: boolean | null }) {
  const cardRef = useRef<HTMLDivElement>(null);

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

  return (
    <motion.div
      variants={itemVariants}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        relative w-full min-h-[340px]
        flex flex-col p-8 group transition-all duration-300
        bg-[var(--color-panel)] border border-white/10
        hover:bg-[var(--color-panel-2)] hover:border-[var(--color-gold)]
        ${!prefersReducedMotion ? 'hover:-translate-y-[2px]' : ''}
        ${service.featured ? "sm:col-span-2 sm:row-span-2" : "sm:col-span-1 sm:row-span-1"}
      `}
    >
      {/* Overflow wrapper for background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Radial Hover Glow */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ 
            background: "radial-gradient(260px circle at var(--x, 50%) var(--y, 50%), rgba(201,162,75,0.12), transparent 70%)"
          }}
        />

        {/* Featured Tile SVG Mesh */}
        {service.featured && (
          <div className="absolute -bottom-1/4 -right-1/4 w-[120%] h-[120%] opacity-[0.06]">
            <svg viewBox="0 0 800 800" className="w-full h-full">
              <path 
                d="M 100 100 L 400 300 L 700 100 L 800 500 L 400 700 Z M 400 300 L 800 500 M 100 100 L 400 700" 
                fill="none" 
                stroke="var(--color-gold)" 
                strokeWidth="1.5" 
              />
              <path 
                d="M 200 800 L 400 700 L 600 800" 
                fill="none" 
                stroke="var(--color-gold)" 
                strokeWidth="1.5" 
              />
            </svg>
          </div>
        )}
      </div>

      {/* Content wrapper */}
      {/* Content wrapper */}
      <div className={`relative z-10 flex ${service.featured ? 'flex-col items-center justify-center text-center' : 'flex-col justify-between'} h-full w-full`}>
        
        {service.featured ? (
          <>
            <div className="font-mono text-[10px] text-white/60 tracking-[0.15em] uppercase absolute top-0 left-0 w-full text-left">
              {service.tag}
            </div>
            
            <ServiceDiagram 
              variant={service.variant}
              className="w-[160px] h-[160px] mb-8 opacity-45 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            <Link to="/services/$serviceId" params={{ serviceId: service.slug }} className="block">
              <motion.div className="flex flex-col items-center cursor-pointer group/link" whileHover="hover">
                <h3 className="font-display font-bold text-4xl mb-4 text-[var(--color-paper)]">
                  {service.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                  {service.desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-gold)] uppercase tracking-widest group-hover/link:text-[var(--color-gold-bright)] transition-colors">
                  Explore 
                  <motion.div variants={{ hover: { x: prefersReducedMotion ? 0 : 4 } }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </>
        ) : (
          <>
            <div className="flex flex-col items-start w-full">
              <ServiceDiagram 
                variant={service.variant}
                className="mb-6 w-[72px] h-[72px] opacity-45 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="font-mono text-[10px] text-white/60 tracking-[0.15em] uppercase mb-8">
                {service.tag}
              </div>
            </div>
            
            <Link to="/services/$serviceId" params={{ serviceId: service.slug }} className="mt-auto pt-4 block">
              <motion.div className="flex flex-col items-start cursor-pointer group/link" whileHover="hover">
                <h3 className={`font-display font-bold ${service.featured ? 'text-4xl' : 'text-2xl'} mb-3 text-[var(--color-paper)]`}>
                  {service.title}
                </h3>
                <p className="text-white/60 font-body text-sm leading-relaxed mb-6 max-w-sm">
                  {service.desc}
                </p>
                
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--color-gold)] uppercase tracking-widest group-hover/link:text-[var(--color-gold-bright)] transition-colors mt-auto">
                  Explore 
                  <motion.div variants={{ hover: { x: prefersReducedMotion ? 0 : 4 } }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </>
        )}
        
      </div>
    </motion.div>
  );
}

export function Services() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <section id="services" className="w-full bg-[#e9e1c2] text-[var(--color-ink)] py-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
              What we do
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-4">
            Engineered <span className="text-[var(--color-gold)]">Capabilities</span>
          </h2>
          <p className="text-[var(--color-text-muted-dark)] font-body text-lg max-w-xl">
            From deep infrastructure to the user interface, we deliver end-to-end software solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto sm:auto-rows-[340px] gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, i) => (
            <BentoCard key={i} service={service} prefersReducedMotion={prefersReducedMotion} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
