export function Footer() {
  return (
    <footer className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] pt-16 md:pt-24 pb-8 overflow-hidden relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          
          {/* Left: Logo & Description */}
          <div className="w-full lg:w-1/3">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/INfynux-Logo.png" 
                alt="INFYNUX" 
                className="h-5 w-auto object-contain"
              />
              <span className="text-xl font-bold uppercase tracking-tighter text-white font-display">
                INFYNUX
              </span>
            </div>
            <p className="text-white/60 font-body text-sm leading-relaxed">
              A software and product engineering studio building scalable digital systems for businesses across India.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-12 sm:gap-16 md:gap-32">
            
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.2em] uppercase font-bold">
                Studio
              </span>
              <nav className="flex flex-col gap-4 font-body text-sm text-white/60">
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
                <a href="#approach" className="hover:text-white transition-colors">Approach</a>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <span className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.2em] uppercase font-bold">
                Connect
              </span>
              <nav className="flex flex-col gap-4 font-body text-sm text-white/60">
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                <a href="https://www.linkedin.com/company/infynux-solutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/infynuxsolutions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@Infynuxsolutions" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
              </nav>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 font-mono text-[10px] text-white/40 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Infynux Solutions.</p>
          <p>Engineered in India.</p>
        </div>

      </div>
    </footer>
  );
}
