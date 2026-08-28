import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div className="w-full max-w-6xl relative">
      <div
        className={`w-full transition-all duration-500 rounded-full border ${
          scrolled
            ? "bg-white/90 dark:bg-card/90 backdrop-blur-xl border-gray-200/80 dark:border-border/80 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] py-3 px-6"
            : "bg-white dark:bg-card border-gray-200 dark:border-border shadow-sm py-4 px-8"
        }`}
      >
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <img
              src="/INfynux-Logo.png"
              alt="Infynux Solutions"
              className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-lg md:text-xl font-bold tracking-[0.05em] uppercase text-gray-900 dark:text-white">
              INFYNUX
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link 
                key={l.to} 
                to={l.to} 
                className="text-[15px] font-medium text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105 shadow-[0_4px_14px_0_rgba(91,108,249,0.39)]"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              className="lg:hidden rounded-full p-2 text-gray-700 dark:text-muted-foreground hover:bg-gray-100 dark:hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 px-4 bg-white dark:bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-border p-5 flex flex-col gap-2">
          {links.map((l) => (
            <Link 
              key={l.to} 
              to={l.to} 
              onClick={() => setMenuOpen(false)} 
              className="px-5 py-3.5 rounded-xl text-gray-700 dark:text-foreground font-medium hover:bg-gray-50 dark:hover:bg-secondary hover:text-primary transition-colors text-lg"
              activeProps={{ className: "text-primary bg-primary/5 font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setMenuOpen(false)} 
            className="mt-4 rounded-full bg-gradient-brand px-6 py-4 text-base font-semibold text-white text-center shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      )}
      </div>
    </header>
  );
}
