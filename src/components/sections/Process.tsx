const stages = [
  {
    num: "01",
    title: "Discover",
    desc: "Deep-dive into your operational bottlenecks and business goals before any code is written."
  },
  {
    num: "02",
    title: "Design",
    desc: "System architecture and user interface design focused on reducing friction and maximizing efficiency."
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative engineering using scalable, production-ready technologies like React and Go."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Rigorous testing, SEO optimization, and zero-downtime deployment to your infrastructure."
  },
  {
    num: "05",
    title: "Support",
    desc: "Ongoing maintenance, monitoring, and feature iteration as your business scales."
  }
];

export function Process() {
  return (
    <section id="approach" className="w-full bg-[#e9e1c2] text-[var(--color-ink)] py-24 md:py-32 border-b border-black/10 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
            <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
              How we work
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-4">
            Five stages. <span className="text-[var(--color-gold)]">Total clarity.</span>
          </h2>
          <p className="text-[var(--color-text-muted-dark)] font-body text-lg max-w-xl mx-auto">
            A transparent engineering process designed to eliminate risk and deliver predictable outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-[27px] md:left-[39px] w-px bg-black/10" />

          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {stages.map((stage, i) => {
              const isEven = i % 2 === 0;
              return (
                <div 
                  key={i} 
                  className={`flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                  data-aos="fade-up"
                >
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <h3 className="font-display font-bold text-3xl mb-3 text-[var(--color-ink)]">
                      {stage.title}
                    </h3>
                    <p className={`text-[var(--color-text-muted-dark)] font-body text-base max-w-sm ml-0 ${isEven ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'}`}>
                      {stage.desc}
                    </p>
                  </div>

                  {/* Node */}
                  <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-black rounded-full flex items-center justify-center relative z-10 group-hover:border-[var(--color-gold)] transition-colors duration-500">
                    <span className="font-mono text-lg md:text-xl font-bold text-[var(--color-gold)]">{stage.num}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
