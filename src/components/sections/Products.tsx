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
    <section id="products" className="w-full bg-[#e9e1c2] text-[var(--color-ink)] py-16 md:py-24 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
              Proprietary products
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight max-w-2xl">
              Products we build, <span className="text-[var(--color-gold)] block">own and run.</span>
            </h2>
            <p className="text-[var(--color-text-muted-dark)] font-body text-lg max-w-md">
              Engineered in-house for the UK market — the same standard of craft we bring to every client engagement.
            </p>
          </div>
        </div>

        {/* Product Rows */}
        <div className="flex flex-col border-t border-black/10">
          {products.map((product, i) => (
            <div 
              key={i} 
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="group flex flex-col md:flex-row md:items-center py-10 md:py-16 border-b border-black/10 gap-8 relative"
            >
              
              {/* Outlined Numeral */}
              <div className="hidden md:block w-32 shrink-0">
                <span 
                  aria-hidden="true" 
                  className="text-6xl font-display font-black text-transparent select-none transition-colors duration-500 group-hover:text-[var(--color-panel-2)]"
                  style={{ WebkitTextStroke: "1px var(--color-gold)" }}
                >
                  {product.index}
                </span>
              </div>

              {/* Tag & Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-6">
                
                <div className="w-full md:w-48 shrink-0 flex flex-row md:flex-col items-center md:items-start flex-wrap gap-3">
                  <span className="inline-block border border-black/10 px-4 py-1.5 rounded-full font-mono text-[10px] text-[var(--color-text-muted-dark)] uppercase tracking-widest group-hover:border-[var(--color-gold)] transition-colors">
                    {product.tag}
                  </span>
                  {product.status && (
                    <span className="inline-block border border-[var(--color-gold)] px-4 py-1.5 rounded-full font-mono text-[10px] text-[var(--color-gold)] uppercase tracking-widest">
                      {product.status}
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[var(--color-text-muted-dark)] font-body text-base max-w-xl">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Circular Arrow Button (Conditional) */}
              {product.href ? (
                <motion.a 
                  href={product.href}
                  className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center bg-transparent shrink-0 mt-6 md:mt-0"
                  whileHover={{ 
                    rotate: 45, 
                    backgroundColor: "var(--color-ink)",
                    borderColor: "var(--color-ink)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight className="w-6 h-6 text-[var(--color-ink)] group-hover:text-[var(--color-paper)] transition-colors" />
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
