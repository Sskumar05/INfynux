import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Product = {
  index: string;
  name: string;
  tag: string;
  status?: string;
  description: string;
  href?: string;
};

const initialProducts: Product[] = [
  {
    index: "01",
    name: "InfyPOS",
    tag: "UK Market",
    status: "Launching soon",
    description: "An EPOS (electronic point of sale) system built for UK retail shops.",
    href: undefined,
  },
  {
    index: "02",
    name: "InfyBuys",
    tag: "UK Market",
    status: "Launching soon",
    description: "A marketplace platform where UK businesses buy and sell from each other.",
    href: undefined,
  },
];

export function Products({ products = initialProducts }: { products?: Product[] }) {
  return (
    <section id="products" className="relative w-full bg-[var(--color-ink)] text-[var(--color-paper)] py-16 md:py-24 border-b border-white/5 overflow-hidden">
      
      {/* Cream to Dark Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#e9e1c2] to-transparent pointer-events-none z-0"></div>

      {/* Dark Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-white/60 tracking-[0.2em] uppercase">
              Proprietary products
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-2xl text-[var(--color-paper)]">
              Products we build, <span className="text-[var(--color-gold)] block">own and run.</span>
            </h2>
            <p className="text-white/60 font-body text-lg max-w-md">
              Engineered in-house for the UK market — the same standard of craft we bring to every client engagement.
            </p>
          </div>
        </div>

        {/* Product Rows */}
        <div className="flex flex-col border-t border-white/10">
          {products.map((product, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 px-4 md:px-8 -mx-4 md:-mx-8 border-b border-white/10 gap-8 relative hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-300 rounded-xl md:rounded-3xl"
            >
              
              {/* Outlined Numeral */}
              <div className="mb-2 md:mb-0 w-32 shrink-0">
                <span 
                  aria-hidden="true" 
                  className="text-5xl md:text-6xl font-display font-black text-transparent select-none transition-all duration-500 group-hover:text-[rgba(201,162,75,0.1)]"
                  style={{ WebkitTextStroke: "1px var(--color-gold)" }}
                >
                  {product.index}
                </span>
              </div>

              {/* Tag & Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6 text-left">
                
                <div className="w-full md:w-56 shrink-0 flex flex-row md:flex-col items-center md:items-start flex-wrap gap-3">
                  {/* Subtle Filled Tag */}
                  <span className="inline-block bg-white/10 px-4 py-1.5 rounded-full font-mono text-[10px] text-white/80 uppercase tracking-widest transition-colors">
                    {product.tag}
                  </span>
                  
                  {/* Bold Gold Status Pill */}
                  {product.status && (
                    <span className="inline-block bg-[var(--color-gold)] px-4 py-1.5 rounded-full font-mono text-[10px] font-bold text-[var(--color-ink)] uppercase tracking-widest shadow-[0_0_15px_rgba(201,162,75,0.2)]">
                      {product.status}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 text-[var(--color-paper)] group-hover:text-[var(--color-gold)] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-white/60 font-body text-base max-w-xl">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Circular Arrow Button (Conditional) */}
              {product.href ? (
                <motion.a 
                  href={product.href}
                  className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-transparent shrink-0 mt-6 md:mt-0"
                  whileHover={{ 
                    rotate: 45, 
                    backgroundColor: "var(--color-gold)",
                    borderColor: "var(--color-gold)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-[var(--color-paper)] group-hover:text-[var(--color-ink)] transition-colors" />
                </motion.a>
              ) : (
                <div className="w-16 h-16 shrink-0 mt-6 md:mt-0" aria-hidden="true" /> // Placeholder to maintain spacing parity
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
