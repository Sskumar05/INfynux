import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", label: "HOME", href: "/#home" },
    { num: "02", label: "SERVICES", href: "/#services" },
    { num: "03", label: "PORTFOLIO", href: "/portfolio" },
    { num: "04", label: "APPROACH", href: "/#approach" },
    { num: "05", label: "LEADERS", href: "/#leaders" },
    { num: "06", label: "CONTACT", href: "/#contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-[rgba(255,255,255,0.08)] ${
        scrolled ? "h-14" : "h-16"
      }`}
    >
      {/* Header Background layer (clipped) */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          background: 'rgba(10, 10, 12, 0.35)',
          backdropFilter: 'blur(16px) saturate(150%)',
          WebkitBackdropFilter: 'blur(16px) saturate(150%)'
        }}
      >
        {/* Background vector accent lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="#E0B840" strokeWidth="1" />
            <line x1="25%" y1="0" x2="15%" y2="100%" stroke="#E0B840" strokeWidth="1" />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between relative z-10">
        
        {/* Brand Identity with Animated Logo and Name */}
        <div className="flex-1 flex justify-start z-10">
          <motion.a 
            href="/#home" 
            className="flex items-center space-x-3 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover="hover"
          >
            <motion.img 
              src="/INfynux-Logo.png" 
              alt="INFYNUX" 
              className="h-5 w-auto object-contain"
              variants={{
                hover: { 
                  scale: 1.15, 
                  rotate: 5, 
                  filter: "drop-shadow(0 0 10px rgba(224,184,64,0.4))" 
                }
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <motion.span 
              className="text-lg font-black uppercase tracking-tight text-white font-sans origin-left"
              variants={{
                hover: { 
                  color: "#E0B840", 
                  letterSpacing: "0.05em" 
                }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              INFYNUX
            </motion.span>
          </motion.a>
        </div>

        {/* HIGH-VISIBILITY PROFESSIONAL NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center space-x-7 absolute left-1/2 -translate-x-1/2 z-20">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/90 hover:text-[#E0B840] transition-colors duration-300 font-sans flex items-center py-2 relative group">
              <span className="relative z-10">{link.label}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E0B840] group-hover:w-full transition-all duration-300 ease-out"
              />
            </a>
          ))}
        </nav>

        {/* HIGH-CONTRAST GOLD CALL TO ACTION BUTTON */}
        <div className="hidden lg:flex flex-1 justify-end items-center z-10">
          <MagneticButton href="/#contact" className="bg-[#E0B840] text-black hover:bg-white transition-all px-5 py-2 text-[11px] font-medium uppercase tracking-[0.08em] rounded-full shadow-none flex items-center gap-2 font-sans border-none group">
            LET'S TALK <ArrowRight className="w-3.5 h-3.5 stroke-[2] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </MagneticButton>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="flex-1 flex justify-end lg:hidden z-20">
          <button 
            className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* FULL-SCREEN MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[5] bg-[rgba(8,8,10,0.97)] backdrop-blur-[20px] lg:hidden flex flex-col items-center justify-center p-6 animate-fade-in touch-none pt-20">
          <nav className="flex flex-col items-center space-y-8 w-full max-w-sm">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-xl font-display font-bold uppercase tracking-widest text-white/80 hover:text-[var(--color-gold)] transition-colors w-full text-center py-3 min-h-[44px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="w-full h-px bg-white/10 my-4"></div>

            <a 
              href="/#contact" 
              className="w-full bg-[var(--color-gold)] text-black px-6 py-4 text-center font-black uppercase tracking-widest hover:bg-[var(--color-gold-bright)] transition-colors rounded-full flex items-center justify-center gap-2 min-h-[56px] shadow-[0_0_20px_rgba(201,162,75,0.3)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              LET'S TALK <ArrowRight className="w-5 h-5 stroke-[2]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
