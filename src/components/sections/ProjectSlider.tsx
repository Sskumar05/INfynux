import { useState, useEffect, useRef } from "react";

const SLIDE_DATA = [
  {
    id: 1,
    tag: "SERVICE // WEB",
    title: "Web Development",
    desc: "High-performance web applications engineered for scale and speed.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    tag: "SERVICE // MOBILE",
    title: "App Development",
    desc: "Native and cross-platform mobile experiences built for modern users.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    tag: "SERVICE // OPERATIONS",
    title: "Management Systems",
    desc: "Custom ERPs and dashboards that streamline your business processes.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    tag: "SERVICE // PRODUCT",
    title: "UI/UX Design",
    desc: "Interface design systems that prioritize user friction-reduction.",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    tag: "SERVICE // INTELLIGENCE",
    title: "AI Integration",
    desc: "LLMs and machine learning pipelines embedded into your workflows.",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    tag: "SERVICE // VISIBILITY",
    title: "SEO & Cloud",
    desc: "Technical SEO and scalable cloud architectures on AWS & Cloudflare.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop"
  }
];

export function ProjectSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Triple the data to ensure smooth infinite scrolling by resetting the scroll position
  const extendedData = [...SLIDE_DATA, ...SLIDE_DATA, ...SLIDE_DATA];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.05; // Pixels per ms for auto-scroll

    const scrollLoop = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isHovered && !isInteracting) {
        el.scrollLeft += speed * delta;

        // The exact width of one original set of cards
        const setWidth = el.scrollWidth / 3;
        
        // Loop back seamlessly when scrolling past the first copied set
        if (el.scrollLeft >= setWidth * 1.5) {
          el.scrollLeft -= setWidth;
        }
      }
      animationFrameId = requestAnimationFrame(scrollLoop);
    };

    animationFrameId = requestAnimationFrame(scrollLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isInteracting]);

  const handleInteraction = () => {
    setIsInteracting(true);
    if (interactTimeoutRef.current) {
      clearTimeout(interactTimeoutRef.current);
    }
    interactTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 2500); // Resume auto-scroll after a few seconds of no interaction
  };

  return (
    <section className="w-full bg-[#0B0B0C] py-24 border-b border-[#222224] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-white tracking-tight">
          Our Services
        </h2>
        <div className="w-12 h-1 bg-[var(--color-gold)] mt-6"></div>
      </div>

      <div 
        className="relative w-full h-[450px] flex items-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      {/* Edge Gradients for Smooth Fade-in/out */}
      <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        onScroll={handleInteraction}
        onTouchStart={handleInteraction}
        onWheel={handleInteraction}
        className="flex flex-row gap-6 overflow-x-auto hide-scrollbar py-4 px-4 w-full h-full"
        style={{
          scrollSnapType: (isInteracting || isHovered) ? 'x mandatory' : 'none',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {extendedData.map((slide, idx) => (
          <div
            key={`${slide.id}-${idx}`}
            className="flex-shrink-0 w-[300px] h-[420px] bg-[#0B0B0C] border border-[#222224] cursor-pointer group flex flex-col justify-between p-4 shadow-2xl transition-transform duration-300"
            style={{ scrollSnapAlign: 'start' }}
          >
            {/* Top Barcode / Metadata Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="text-[8px] font-mono text-[#88888C] uppercase tracking-[0.2em] leading-relaxed">
                ID // 0{slide.id} <br/>
                {slide.tag}
              </div>
              <div className="w-16 h-5 bg-[repeating-linear-gradient(90deg,#E0B840_0px,#E0B840_1.5px,transparent_1.5px,transparent_3px,rgba(224,184,64,0.5)_3px,rgba(224,184,64,0.5)_6px)] opacity-50"></div>
            </div>

            {/* Image Frame - Full Color */}
            <div className="relative w-full flex-1 overflow-hidden border border-[#222224] bg-black">
              <img 
                src={slide.img} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
              />
            </div>

            {/* Bottom Text Block */}
            <div className="pt-4 mt-auto">
              <h4 className="text-xl font-black text-white tracking-tight uppercase mb-2 font-sans leading-none group-hover:text-[#E0B840] transition-colors">
                {slide.title}
              </h4>
              <p className="font-sans text-[11px] text-[#A4A4A8] leading-relaxed line-clamp-2">
                {slide.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      </div>
    </section>
  );
}
