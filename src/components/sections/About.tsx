export function About() {
  return (
    <section id="about" className="relative w-full bg-[#e9e1c2] text-[var(--color-ink)] py-24 md:py-32 overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEFT: Giant Outlined Numeral */}
          <div 
            className="hidden lg:flex w-1/3 items-start justify-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span 
              aria-hidden="true" 
              className="text-[250px] leading-none font-display font-black text-transparent select-none"
              style={{ WebkitTextStroke: "2px var(--color-gold)" }}
            >
              01
            </span>
          </div>

          {/* RIGHT: Content */}
          <div className="lg:w-2/3 flex flex-col justify-center">
            
            <h2 
              data-aos="fade-up"
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8"
            >
              We start with the problem in your business, <span className="text-[var(--color-gold)]">not the tech.</span> Then we engineer the system that actually fixes it.
            </h2>
            
            <p 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-[var(--color-text-muted-dark)] text-lg font-body font-light leading-relaxed max-w-2xl mb-16"
            >
              Our philosophy is simple: technology should serve business strategy, not dictate it. We partner closely with our clients to dissect operational bottlenecks, user friction, and scaling limits before writing a single line of code. The result is lean, highly performant software that delivers measurable impact.
            </p>

            {/* Stat Row */}
            <div 
              data-aos="fade-up"
              data-aos-delay="200"
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-black/10"
            >
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-display font-bold text-[var(--color-gold)]">6</span>
                <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.1em] uppercase">Core disciplines</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-display font-bold text-[var(--color-gold)]">1:1</span>
                <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.1em] uppercase">Direct with your team</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-display font-bold text-[var(--color-gold)]">24h</span>
                <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.1em] uppercase">Typical response</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
