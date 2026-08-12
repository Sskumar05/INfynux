import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const total = SLIDE_DATA.length;
    const diff = (index - currentIndex + total) % total;
    const half = Math.floor(total / 2);

    let offset = diff;
    if (offset > half) offset -= total;

    const isCenter = offset === 0;

    // Spread them out horizontally, scale them down, and stack them behind
    const x = offset * 110;
    const scale = isCenter ? 1 : 1 - Math.abs(offset) * 0.15;
    const zIndex = 20 - Math.abs(offset);
    const opacity = Math.abs(offset) > 2 ? 0 : 1;
    const brightness = isCenter ? 1 : 0.4;

    return { x, scale, zIndex, opacity, filter: `brightness(${brightness})` };
  };

  return (
    <div className="relative w-full max-w-[600px] h-[450px] flex items-center justify-center perspective-[1000px] lg:-ml-12 mt-8 lg:mt-0">
      {SLIDE_DATA.map((slide, i) => {
        const { x, scale, zIndex, opacity, filter } = getCardStyle(i);
        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{
              x,
              scale,
              zIndex,
              opacity,
              filter,
            }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className="absolute w-[300px] h-[440px] bg-[#0B0B0C] border border-[#222224] cursor-pointer group flex flex-col justify-between p-4 shadow-2xl"
            onClick={() => setCurrentIndex(i)}
            style={{ originY: 0.5 }}
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
          </motion.div>
        );
      })}
    </div>
  );
}
