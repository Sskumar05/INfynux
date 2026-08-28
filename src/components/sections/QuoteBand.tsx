export function QuoteBand() {
  return (
    <section className="w-full bg-[var(--color-gold)] py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
        
        {/* Quote mark (decorative) */}
        <div className="text-[120px] leading-[0.5] font-accent italic text-[var(--color-ink)]/10 mb-8 select-none">
          "
        </div>

        {/* The Quote */}
        <blockquote className="font-accent italic font-medium text-[28px] sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-12">
          Software is only as good as the operational friction it eliminates. We don't build features; we engineer leverage.
        </blockquote>

        {/* Attribution */}
        <div className="flex items-center justify-center gap-4">
          <span className="w-8 h-[1px] bg-[var(--color-ink)]/20" />
          <span className="font-mono text-sm tracking-widest uppercase font-bold text-[var(--color-ink)]">
            Infynux Engineering Ethos
          </span>
          <span className="w-8 h-[1px] bg-[var(--color-ink)]/20" />
        </div>

      </div>
    </section>
  );
}
