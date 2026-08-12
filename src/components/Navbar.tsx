import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/work" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? "bg-[#FBF9F4]/95 backdrop-blur-sm border-b border-[#E4E0D5] py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/INfynux-Logo.png"
            alt="Infynux Solutions"
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-sans text-xl font-extrabold uppercase tracking-tighter text-[#191919]">
            INFYNUX
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-[#191919] group py-2"
              activeProps={{ className: "text-[#191919]" }}
            >
              <span className="relative z-10 group-hover:text-[#5A5A5A] transition-colors duration-300">
                {link.label}
              </span>
              {/* Subtle gold indicator on hover */}
              <motion.span 
                className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] group-hover:w-full transition-all duration-300 ease-out"
              />
            </Link>
          ))}
        </nav>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <Link
            to="/"
            hash="contact"
            className="group flex items-center gap-2 bg-[#111111] px-6 py-3 font-sans text-[11px] font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#111111]"
          >
            Let's Talk
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-[#191919]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#FBF9F4] border-b border-[#E4E0D5]"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="font-sans text-sm font-bold uppercase tracking-[0.1em] text-[#191919]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex w-fit items-center gap-2 bg-[#111111] px-6 py-3 font-sans text-xs font-bold uppercase tracking-[0.1em] text-white"
              >
                Let's Talk <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
