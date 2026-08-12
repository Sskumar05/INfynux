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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b overflow-hidden ${
        scrolled 
          ? "bg-[#0B0B0C]/95 backdrop-blur-md border-[#222224] h-16" 
          : "bg-[#0B0B0C] border-[#222224] h-24"
      }`}
    >
      {/* Background vector accent lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#E0B840" strokeWidth="1" />
          <line x1="25%" y1="0" x2="15%" y2="100%" stroke="#E0B840" strokeWidth="1" />
        </svg>
      </div>

      <div className="w-full max-w-none px-6 md:px-8 h-full flex items-center justify-between relative z-10">
        
        {/* Brand Identity with Animated Logo and Name */}
        <motion.a 
          href="/#home" 
          className="flex items-center space-x-4 cursor-pointer group w-auto lg:w-[200px]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover="hover"
        >
          <motion.img 
            src="/INfynux-Logo.png" 
            alt="INFYNUX" 
            className="h-10 w-auto object-contain"
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
            className="text-2xl font-black uppercase tracking-tight text-white font-sans origin-left"
            variants={{
              hover: { 
                color: "#E0B840", 
                letterSpacing: "0.08em" 
              }
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            INFYNUX
          </motion.span>
        </motion.a>

        {/* HIGH-VISIBILITY PROFESSIONAL NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center justify-center flex-1 space-x-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-xs font-bold uppercase tracking-widest text-[#A4A4A8] hover:text-white transition-colors duration-150 font-sans flex items-center">
              {link.label}
            </a>
          ))}
        </nav>

        {/* HIGH-CONTRAST GOLD CALL TO ACTION BUTTON */}
        <div className="hidden lg:flex items-center justify-end w-[200px]">
          <MagneticButton href="/#contact" className="bg-[#E0B840] text-black hover:bg-[#C9A334] transition-all px-7 py-3 text-xs font-black uppercase tracking-widest rounded-none shadow-none flex items-center gap-2 font-sans">
            LET'S TALK <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
          </MagneticButton>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* MOBILE MENU PANEL */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 md:top-24 bg-[#0B0B0C] border-t border-[#222224] lg:hidden flex flex-col p-6 animate-fade-in z-40 overflow-y-auto">
          <nav className="flex flex-col space-y-6 text-sm font-sans font-bold uppercase tracking-widest text-[#A4A4A8]">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="hover:text-white transition-colors flex items-center gap-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/#contact" 
              className="mt-4 bg-[#E0B840] text-black px-6 py-4 text-center font-black hover:bg-[#C9A334] transition-colors rounded-none flex items-center justify-center gap-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              LET'S TALK <ArrowRight className="w-4 h-4 stroke-[3]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
