export function CapabilityBar() {
  const capabilities = [
    "Web Development",
    "App Development",
    "Management Systems",
    "UI/UX Design",
    "AI Integration",
    "SEO & Cloud"
  ];

  // Duplicate for seamless infinite loop
  const loopItems = [...capabilities, ...capabilities];

  return (
    <div className="w-full bg-[var(--color-paper-dim)] py-4 border-y border-[var(--color-paper-line)] overflow-hidden">
      <div 
        className="max-w-7xl mx-auto px-6" 
        style={{ WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}
      >
        <div className="cap-track">
          {loopItems.map((cap, i) => (
            <div key={i} className="flex items-center gap-8 pr-8">
              <span className="font-mono text-[10px] text-[var(--color-text-ink)] uppercase tracking-[0.15em] font-bold whitespace-nowrap">
                {cap}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
