import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { servicesData } from "../data/servicesData";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(servicesData[0]?.id);
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
        className={`w-full transition-all duration-500 rounded-full border backdrop-blur-[20px] ${
          scrolled
            ? "bg-white/70 dark:bg-[rgba(15,23,42,0.65)] border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)] py-3 px-6"
            : "bg-white/40 dark:bg-[rgba(15,23,42,0.55)] border-white/30 dark:border-white/5 shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] py-4 px-8"
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
            {links.map((l) => 
              l.label === "Services" ? (
                <div key={l.to} className="relative group">
                  <Link 
                    to={l.to} 
                    className="text-[15px] font-medium text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors py-6 flex items-center gap-1"
                    activeProps={{ className: "text-primary font-semibold" }}
                  >
                    {l.label} <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 w-[700px] z-50 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white/95 dark:bg-card/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)] border border-gray-100 dark:border-border flex relative overflow-hidden min-h-[300px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent dark:from-white/[0.02] dark:to-transparent pointer-events-none" />
                      
                      {/* Left Panel - Categories */}
                      <div className="w-[300px] border-r border-gray-100 dark:border-border p-4 bg-gray-50/50 dark:bg-secondary/20 relative z-10 flex flex-col gap-1">
                        {servicesData.map((category) => (
                          <button
                            key={category.id}
                            onMouseEnter={() => setActiveCategoryId(category.id)}
                            onClick={() => setActiveCategoryId(category.id)}
                            className={`text-left text-[13px] font-semibold px-3 py-2.5 rounded-lg transition-colors ${
                              activeCategoryId === category.id
                                ? "bg-white dark:bg-card text-primary dark:text-white shadow-sm border border-gray-200/50 dark:border-border/50"
                                : "text-gray-600 dark:text-muted-foreground hover:bg-white/60 dark:hover:bg-white/[0.02] hover:text-gray-900 dark:hover:text-gray-200"
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>

                      {/* Right Panel - Services */}
                      <div className="flex-1 p-6 relative z-10 bg-white dark:bg-card/50">
                        {servicesData.map((category) => (
                          <div 
                            key={category.id} 
                            className={`transition-opacity duration-200 ${category.id === activeCategoryId ? 'block opacity-100' : 'hidden opacity-0'}`}
                          >
                            <h4 className="text-[11px] font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3 opacity-80">
                              {category.name}
                            </h4>
                            <ul className="flex flex-col gap-0.5">
                              {category.services.map(service => (
                                <li key={service.id}>
                                  <Link 
                                    to={`/services/${service.id}`} 
                                    className="text-[13.5px] leading-snug text-gray-600 dark:text-muted-foreground hover:text-primary dark:hover:text-primary transition-colors block py-2 px-2 -mx-2 rounded-md hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                                  >
                                    {service.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link 
                  key={l.to} 
                  to={l.to} 
                  className="text-[15px] font-medium text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {l.label}
                </Link>
              )
            )}
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
        <div className="lg:hidden absolute top-20 left-0 right-0 px-4 bg-white dark:bg-card rounded-3xl shadow-xl border border-gray-100 dark:border-border p-5 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {links.map((l) => 
            l.label === "Services" ? (
              <div key={l.to} className="flex flex-col">
                <button 
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="px-5 py-3.5 rounded-xl text-gray-700 dark:text-foreground font-medium hover:bg-gray-50 dark:hover:bg-secondary hover:text-primary transition-colors text-lg flex items-center justify-between w-full text-left"
                >
                  {l.label}
                  <ChevronDown className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-6 pr-2 py-2 flex flex-col gap-4 border-l-2 border-gray-100 dark:border-border ml-5 mt-1 mb-2">
                    {servicesData.map((category) => (
                      <div key={category.id} className="space-y-2">
                        <h4 className="text-[15px] font-semibold text-gray-900 dark:text-white">{category.name}</h4>
                        <div className="flex flex-col gap-2 pl-2">
                          {category.services.map(service => (
                            <Link 
                              key={service.id}
                              to={`/services/${service.id}`} 
                              onClick={() => setMenuOpen(false)} 
                              className="text-[14.5px] text-gray-600 dark:text-muted-foreground hover:text-primary transition-colors py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link 
                key={l.to} 
                to={l.to} 
                onClick={() => setMenuOpen(false)} 
                className="px-5 py-3.5 rounded-xl text-gray-700 dark:text-foreground font-medium hover:bg-gray-50 dark:hover:bg-secondary hover:text-primary transition-colors text-lg"
                activeProps={{ className: "text-primary bg-primary/5 font-semibold" }}
              >
                {l.label}
              </Link>
            )
          )}
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
