import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import {
  Rocket, Code2, Palette, Brain, Cloud, Sparkles, Megaphone,
  ArrowRight, ArrowUpRight, Star, Send, Check, Smartphone,
  MonitorPlay, ChevronLeft, ChevronRight, Zap, Layers, Tag, Headphones, User, Clock
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Infynux Solutions | Best Web Development & Software Company in Thiruvarur, Nagapattinam" },
      { name: "description", content: "Infynux Solutions is a leading web development company in Thiruvarur and Nagapattinam offering website development, app development, UI/UX design, AI integration and cloud solutions." },
      { name: "keywords", content: "web development company thiruvarur, software company nagapattinam, website design thiruvarur, app development company tamil nadu, ui ux design company, ai integration services, cloud solutions." },
      { property: "og:title", content: "Infynux Solutions | Web Development Company in Thiruvarur & Nagapattinam" },
      { property: "og:description", content: "Infynux Solutions is a leading web development company in Thiruvarur and Nagapattinam offering website development, app development, UI/UX design, AI integration and cloud solutions." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out-cubic", once: true, offset: 50 });
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Loader */}
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-1000 ${loaded ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`}
      >
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <img
            src="https://res.cloudinary.com/dhjupdyus/image/upload/v1781511082/INfynux-Logo-Splash_Screen_v0bmjl.png"
            alt="INFYNUX"
            className="h-28 w-auto relative z-10 object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="overflow-hidden">
          <Hero />
          <TrustedBy />
          <Testimonials />
          <ServicesSummary />
          <PortfolioSummary />
          <ProcessSection />
          <WhyChooseUs />
          <CTA />
          <ContactSummary />
          <FAQSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const stats = [
    { v: 3, suf: "+", label: "Successful Projects" },
    { v: 95, suf: "%", label: "Rating" },
    { v: 100, suf: "%", label: "Satisfactions" },
    { v: 24, suf: "/7", label: "Client Support" },
  ];

  return (
    <section id="home" className="relative lg:min-h-screen flex items-center justify-center pt-28 lg:pt-32 pb-16 lg:pb-24">
      {/* Refined Ambient Background similar to Infynno */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[10%] left-[20%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
         <div className="absolute bottom-[10%] right-[10%] h-[800px] w-[800px] rounded-full bg-accent/10 blur-[150px]" />
      </div>

      <div className="relative z-10 text-center site-container flex flex-col items-center">
        <h1 data-aos="fade-up" className="font-display mx-auto mt-8 max-w-5xl text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-[5rem]">
          Software Solutions <br className="hidden sm:block" /> <span className="text-gradient">for Modern Businesses.</span>
        </h1>
        
        <p data-aos="fade-up" data-aos-delay="100" className="mx-auto mt-6 max-w-3xl text-base font-normal leading-relaxed md:max-w-4xl md:text-2xl md:leading-relaxed text-foreground/70">
          Infynux Solutions is a leading software company providing web development, mobile app development, UI/UX design, AI integration, SEO and cloud solutions for startups, businesses and enterprises.
        </p>

        <div data-aos="fade-up" data-aos-delay="200" className="mt-6 flex flex-wrap items-center justify-center gap-2 max-sm:gap-y-3.5">
          <span className="from-primary to-primary/80 text-primary-foreground shadow-primary/40 inline-flex items-center gap-1 rounded-full bg-gradient-to-r px-3.5 py-1.5 text-xs font-medium shadow-[0_4px_20px_-6px]">
            <Sparkles className="h-3.5 w-3.5" />
            Modern Technology
          </span>
          <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-xs font-medium">Fast Delivery</span>
          <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-xs font-medium">Scalable Solutions</span>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 lg:gap-3">
          {stats.map((s, i) => (
            <div key={s.label} className="glass rounded-2xl px-5 py-4 text-center hover-lift">
              <div className="font-display tabular-nums text-3xl font-semibold tracking-tight text-foreground">
                <Counter end={s.v} suffix={s.suf} />
              </div>
              <div className="text-muted-foreground mt-1 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-12 flex flex-col items-center justify-center gap-6 lg:flex-row lg:gap-10 w-full max-w-3xl mx-auto">
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a href="#work" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium transition-transform hover:scale-[1.03] from-primary to-primary/80 text-primary-foreground shadow-primary/60 bg-gradient-to-b shadow-[0_8px_30px_-8px] h-12 w-full px-5 py-3 text-sm sm:h-auto sm:w-auto sm:min-h-[44px]">
              Launch Project <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#services" className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium transition-transform hover:scale-[1.03] glass text-foreground hover:bg-muted/60 h-12 w-full px-5 py-3 text-sm sm:h-auto sm:w-auto sm:min-h-[44px]">
              Explore Universe <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          
          <div className="bg-border/60 hidden h-11 w-px shrink-0 lg:block" aria-hidden="true"></div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5">
             <a
              href="https://wa.me/919944911273"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 sm:px-4 sm:py-3 glass hover:bg-secondary/50 transition-colors"
             >
               <span className="grid size-7 shrink-0 place-items-center rounded-md bg-[#25D366]/10 px-1 sm:size-8">
                 <svg viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
               </span>
               <span className="text-left">
                 <span className="text-foreground block text-sm font-semibold leading-none">WhatsApp</span>
                 <span className="mt-1 block text-xs font-medium leading-none text-foreground/70">Chat with us</span>
               </span>
             </a>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom separator fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

/* ---------- TRUSTED BY ---------- */
function TrustedBy() {
  const clients = [
    {
      name: "Korrakar Siddhar",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781077474/siddhar_image_ymczdf.jpg",
      country: "India",
      flag: "🇮🇳",
      url: "https://korakkarsiddhar.in/",
    },
    {
      name: "Live Wire",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787932639/logo-removebg-preview_kuwrnk.png",
      country: "India",
      flag: "🇮🇳",
      url: "https://caddxpertai.in/",
    },
    {
      name: "Emirates Inns",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1785752258/Emirates_logopng_qpavp4.png",
      country: "UAE",
      flag: "🇦🇪",
      url: "https://emiratesinns.com/",
    },
    {
      name: "Korrakar Siddhar",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781077474/siddhar_image_ymczdf.jpg",
      country: "India",
      flag: "🇮🇳",
      url: "https://korakkarsiddhar.in/",
    },
    {
      name: "Live Wire",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787932639/logo-removebg-preview_kuwrnk.png",
      country: "India",
      flag: "🇮🇳",
      url: "https://caddxpertai.in/",
    },
    {
      name: "Emirates Inns",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1785752258/Emirates_logopng_qpavp4.png",
      country: "UAE",
      flag: "🇦🇪",
      url: "https://emiratesinns.com/",
    },
  ];

  // Duplicate to create seamless infinite loop
  const scrollItems = [...clients, ...clients];

  return (
    <section
      id="trusted-by"
      className="trusted-by-section"
      style={{
        background: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "72px 0 64px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(91,108,249,0.06), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "48px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p
          className="trusted-heading-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(10px, 1.1vw, 12px)",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.38)",
            margin: 0,
          }}
        >
          TRUSTED BY TEAMS &amp; FOUNDERS ACROSS 15+ COUNTRIES
        </p>
      </div>

      {/* Scroll track — fade edges */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Left fade */}
        <div
          aria-hidden="true"
          className="trusted-fade-left"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "140px",
            height: "100%",
            background: "linear-gradient(to right, #000000 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          aria-hidden="true"
          className="trusted-fade-right"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "140px",
            height: "100%",
            background: "linear-gradient(to left, #000000 0%, transparent 100%)",
            zIndex: 10,
            pointerEvents: "none",
          }}
        />

        {/* Scrolling row */}
        <div className="trusted-scroll-track">
          {scrollItems.map((c, i) => (
            <a
              key={i}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="trusted-logo-item"
              aria-label={`${c.name} — ${c.country}`}
            >
              {/* Logo card */}
              <div className="trusted-logo-card">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="trusted-logo-img"
                />
              </div>
              {/* Name */}
              <div className="trusted-logo-name">{c.name}</div>
              {/* Country row */}
              <div className="trusted-logo-country">
                <span className="trusted-logo-flag" aria-hidden="true">{c.flag}</span>
                <span className="trusted-logo-country-name">{c.country}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Inline CSS for the scroll animation */}
      <style>{`
        @keyframes trustedScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .trusted-scroll-track {
          display: flex;
          align-items: flex-start;
          gap: 0;
          width: max-content;
          animation: trustedScroll 28s linear infinite;
          will-change: transform;
        }

        .trusted-scroll-track:hover {
          animation-play-state: paused;
        }

        .trusted-logo-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          padding: 0 40px;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }

        .trusted-logo-item:hover {
          opacity: 0.75;
        }

        .trusted-logo-card {
          width: 160px;
          height: 96px;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .trusted-logo-item:hover .trusted-logo-card {
          border-color: rgba(91,108,249,0.35);
          background: rgba(91,108,249,0.05);
        }

        .trusted-logo-img {
          width: 80%;
          height: 80%;
          object-fit: contain;
          display: block;
          filter: none;
          transition: filter 0.25s ease, opacity 0.25s ease;
        }

        .trusted-logo-item:hover .trusted-logo-img {
          filter: none;
          opacity: 0.85;
        }

        .trusted-logo-name {
          margin-top: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.65);
          text-align: center;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }

        .trusted-logo-country {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 5px;
        }

        .trusted-logo-flag {
          font-size: 13px;
          line-height: 1;
        }

        .trusted-logo-country-name {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 500;
          color: rgba(255,255,255,0.32);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          .trusted-logo-item {
            padding: 0 24px;
          }
          .trusted-logo-card {
            width: 120px;
            height: 72px;
            border-radius: 9px;
          }
          .trusted-logo-name {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .trusted-logo-item {
            padding: 0 16px;
          }
          .trusted-logo-card {
            width: 100px;
            height: 60px;
          }
        }
      `}</style>
    </section>
  );
}

/* ---------- SERVICES SUMMARY ---------- */
function ServicesSummary() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="site-container relative z-10">

        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            One Engineering Partner.{" "}
            <span className="text-gradient">Multiple Ways to Build.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-normal text-muted-foreground leading-relaxed">
            Whether you're launching a new product, modernizing existing software, adopting AI, or strengthening your engineering team, we provide the expertise to help you build, scale, and continuously improve your technology.
          </p>
        </div>

        {/* ROW 1 — TWO LARGE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">

          {/* LARGE CARD 1 — AI Product Engineering */}
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            className="glass rounded-[2rem] p-8 lg:p-10 flex flex-col hover-lift group border border-border/50 hover:border-purple-500/40 transition-all duration-300 bg-card/40 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-purple-500/15 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-400" strokeWidth={1.75} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-400">
                  AI Product Engineering
                </span>
              </div>
              <span className="text-[11px] font-bold text-white bg-indigo-600 rounded-full px-3 py-1 leading-none">
                #1 in demand
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Add Intelligence to Everything{" "}
              <span style={{ background: "linear-gradient(90deg,#6366f1,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                You Build.
              </span>
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
              Design and build AI-native products that solve real business problems — not just AI demos.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["AI Product Development", "AI Feature Integration", "AI Agents & Assistants", "Generative AI Applications", "AI Consulting", "AI workflows automation"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-background/60 border border-border/60 text-xs font-medium text-foreground/80 transition-colors group-hover:border-purple-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-5 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                GPT · Claude · OpenAI · LangChain · MCP
              </span>
              <Link to="/services" className="text-xs font-bold text-purple-400 group-hover:text-purple-300 transition-colors flex items-center gap-1.5 uppercase tracking-wide">
                Explore <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* LARGE CARD 2 — Custom Software Development */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="glass rounded-[2rem] p-8 lg:p-10 flex flex-col hover-lift group border border-border/50 hover:border-blue-500/40 transition-all duration-300 bg-card/40 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-blue-500/15 flex items-center justify-center">
                <MonitorPlay className="w-5 h-5 text-blue-400" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Custom Software Development
              </span>
            </div>
            <h3 className="font-display text-3xl lg:text-4xl font-bold tracking-tight mb-4 leading-tight">
              Build the Product.
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-1">
              Build scalable web, mobile, SaaS, and enterprise applications engineered for long-term growth.
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {["Web Development", "Mobile App Development", "Custom Software Development", "SaaS Development"].map(t => (
                <span key={t} className="px-3 py-1.5 rounded-full bg-background/60 border border-border/60 text-xs font-medium text-foreground/80 transition-colors group-hover:border-blue-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-5 border-t border-border/40 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground tracking-wide">
                Outcome based development
              </span>
              <Link to="/services" className="text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors flex items-center gap-1.5 uppercase tracking-wide">
                Start building <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* ROW 2 — THREE SMALL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">

          {/* SMALL CARD 1 — Product Engineering */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="glass rounded-[2rem] p-7 flex flex-col hover-lift group border border-border/50 hover:border-green-500/40 transition-all duration-300 bg-card/20 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-full bg-green-500/15 flex items-center justify-center">
                <Rocket className="w-[18px] h-[18px] text-green-400" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-green-400">Product Engineering</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight mb-3 leading-tight">
              Engineer it Right.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7 flex-1">
              From product discovery to continuous delivery, we help transform ideas into scalable digital products.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {["Product Discovery", "Product Development", "App Modernization", "Cloud & DevOps"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-background/60 border border-border/60 text-[11px] font-medium text-foreground/80 transition-colors group-hover:border-green-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">170+ Projects delivered</span>
              <Link to="/services" className="text-[11px] font-bold text-green-400 group-hover:text-green-300 transition-colors flex items-center gap-1 uppercase tracking-wide">
                Our process <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SMALL CARD 2 — Digital Marketing & SEO */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="glass rounded-[2rem] p-7 flex flex-col hover-lift group border border-border/50 hover:border-pink-500/40 transition-all duration-300 bg-card/20 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-full bg-pink-500/15 flex items-center justify-center">
                <Megaphone className="w-[18px] h-[18px] text-pink-400" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-pink-400">Digital Marketing & SEO</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight mb-3 leading-tight">
              Grow Your Visibility.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7 flex-1">
              SEO, paid ads, content, and social — data-driven growth that turns traffic into revenue.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {["SEO Services", "Social Media And Branding", "Google meta ads campaign", "AI Search visibility (AEO + SEO)"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-background/60 border border-border/60 text-[11px] font-medium text-foreground/80 transition-colors group-hover:border-pink-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">Data-driven. ROI focused.</span>
              <Link to="/services" className="text-[11px] font-bold text-pink-400 group-hover:text-pink-300 transition-colors flex items-center gap-1 uppercase tracking-wide">
                Explore marketing <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* SMALL CARD 3 — Engineering Team Extension */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="glass rounded-[2rem] p-7 flex flex-col hover-lift group border border-border/50 hover:border-orange-500/40 transition-all duration-300 bg-card/20 relative overflow-hidden"
          >
            <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex items-center gap-3 mb-6">
              <div className="h-9 w-9 rounded-full bg-orange-500/15 flex items-center justify-center">
                <Code2 className="w-[18px] h-[18px] text-orange-400" strokeWidth={1.75} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">Engineering Team Extension</span>
            </div>
            <h3 className="font-display text-2xl font-bold tracking-tight mb-3 leading-tight">
              Modernize & Maintain.
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-7 flex-1">
              Add experienced engineers to your team without the overhead of hiring full time.
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {["Tech Consulting", "Legacy Modernization", "Testing & QA", "Support & Maintenance"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-background/60 border border-border/60 text-[11px] font-medium text-foreground/80 transition-colors group-hover:border-orange-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-border/40 flex items-center justify-between">
              <span className="text-[11px] font-medium text-muted-foreground">NDA day 1 · Honest advice</span>
              <Link to="/services" className="text-[11px] font-bold text-orange-400 group-hover:text-orange-300 transition-colors flex items-center gap-1 uppercase tracking-wide">
                Get a consultation <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

        {/* ALSO BAR */}
        <div data-aos="fade-up" className="glass rounded-2xl md:rounded-full p-4 md:px-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 lg:mb-8 border border-border/60 w-full hover:border-primary/30 transition-colors">
          <div className="font-bold text-sm text-foreground md:border-r border-border/60 md:pr-6 shrink-0 uppercase tracking-widest">
            Also
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 flex-1">
            {[
              { label: "UI/UX Design", icon: Palette },
              { label: "Custom Software Dev", icon: MonitorPlay },
              { label: "AI Engineering", icon: Brain },
              { label: "SEO & Digital Marketing", icon: Megaphone },
            ].map(({ label, icon: Icon }) => (
              <Link key={label} to="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                <Icon className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                {label}
              </Link>
            ))}
          </div>
          <div className="shrink-0 hidden md:flex items-center">
            <Link to="/services" className="text-sm font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MODERN TECH STACK BAR */}
        <div data-aos="fade-up" className="glass rounded-[2rem] p-6 lg:p-8 border border-border/50 flex flex-col md:flex-row items-start md:items-center gap-6 bg-card/20">
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/10 text-primary">
              <Sparkles className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <div>
              <p className="font-bold text-sm text-foreground leading-snug">Modern Tech Stack We Use to Deliver Your Project</p>
              <p className="text-xs text-muted-foreground mt-0.5">Every tool earns its place by solving your problem, not padding a resume.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:ml-auto">
            {[
              { label: "React", dot: "#38bdf8" },
              { label: "Next.js", dot: "#94a3b8" },
              { label: "React Native", dot: "#38bdf8" },
              { label: "Laravel", dot: "#ef4444" },
              { label: "Node.js", dot: "#22c55e" },
              { label: "Python", dot: "#3b82f6" },
            ].map(({ label, dot }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/60 border border-border/60 text-xs font-medium text-foreground/80">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: dot, flexShrink: 0, display: "inline-block" }} />
                {label}
              </span>
            ))}
            <Link to="/services" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1 ml-1">
              +more <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- PORTFOLIO SUMMARY ---------- */
function PortfolioSummary() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects: Array<{ cat: string; title: string; img: string; desc?: string; url?: string }> = [
    {
      cat: "Web App",
      title: "Korrakar Siddhar",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935227/423797b0-b1c8-4355-a59c-a97abfb00f62_euwqwo.png",
      url: "https://korakkarsiddhar.in/"
    },
    {
      cat: "WebSite",
      title: "Live Wire",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935116/7c9ef178-0525-4db0-b2b8-c5923155a532_uivoc3.png",
      url: "https://caddxpertai.in/"
    },
    {
      cat: "Web App",
      title: "Emirates Hotel",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935399/e24297b3-46dd-47b0-9e8b-c3d01dd2b8c6_zzhfn2.png",
      url: "https://emiratesinns.com/"
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, projects.length]);

  const activeProject = projects[activeIndex];

  return (
    <section id="work" className="py-24 lg:py-20">
      <div 
        className="site-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* TOP: Centered Heading & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-16">
          <div data-aos="fade-up" className="inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Real Projects. Real Impact.
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Successful <span className="text-gradient">Projects</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Showcasing our finest work built with passion and precision.
          </p>
        </div>
        
        {/* BELOW: Split Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-12">
          
          {/* LEFT SIDE: Project List */}
          <div className="lg:w-[35%] flex flex-col justify-center">
            <div className="flex flex-col border-t border-border/50">
              {projects.map((p, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={p.title}
                    onClick={() => setActiveIndex(i)}
                    className="relative text-left flex items-center justify-between py-6 lg:py-8 border-b border-border/50 group transition-all"
                  >
                    {/* Active highlight indicator (left edge) */}
                    <div className={`absolute left-[-1.5rem] lg:left-[-2rem] top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full transition-all duration-300 ${isActive ? "h-1/2" : "h-0"}`} />

                    <div className="flex gap-6 lg:gap-8 items-start w-full pr-4">
                      <span className={`font-display text-xl lg:text-2xl font-bold transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground/60"}`}>
                        0{i + 1}
                      </span>
                      <div className="flex flex-col">
                        <h3 className={`font-display text-2xl lg:text-3xl font-semibold tracking-tight mb-2 transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                          {p.title}
                        </h3>
                        <span className={`text-sm tracking-wide uppercase transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground/70"}`}>
                          {p.cat}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className={`shrink-0 rounded-full p-3 transition-all duration-300 ${isActive ? "bg-primary text-white scale-100" : "bg-transparent text-muted-foreground scale-90 opacity-0 group-hover:opacity-50"}`}>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Featured Image & Content */}
          <div className="flex-1 flex flex-col">
            <div className="relative aspect-[4/3] lg:aspect-video overflow-hidden rounded-[2rem] bg-muted/50 w-full mb-8 shadow-2xl shadow-black/5 ring-1 ring-border/50">
              <img
                key={activeProject.img}
                src={activeProject.img}
                alt={activeProject.title}
                loading="lazy"
                className="h-full w-full object-cover object-top animate-fade-in transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
              />
            </div>

            <div className="flex flex-col items-center justify-center text-center mt-2">
              <h3 className="font-display text-3xl font-bold tracking-tight text-foreground mb-2">
                {activeProject.title}
              </h3>
              {activeProject.desc && (
                <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
                  {activeProject.desc}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* BOTTOM CENTERED CTAs */}
        <div className="mt-16 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Button 1: Secondary / Outlined */}
          <a
            href="/work"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.03] bg-card/50 backdrop-blur-sm border border-border/60 text-foreground hover:border-primary/50 hover:bg-card hover:text-primary h-[3.5rem] px-8 py-3 text-[15px] w-full sm:w-auto shadow-sm"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </a>
          
          {/* Button 2: Primary Blue Gradient */}
          <a
            href={activeProject.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.05] from-primary to-primary/80 text-primary-foreground bg-gradient-to-r shadow-[0_8px_20px_-8px_rgba(91,108,249,0.5)] h-[3.5rem] px-8 py-3 text-[15px] w-full sm:w-auto"
          >
            Explore Project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        
      </div>
    </section>
  );
}

/* ---------- PROCESS SECTION ---------- */
function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Understand Your Requirements",
      desc: "Understand the client's goals, business needs, users, and project requirements before development begins."
    },
    {
      num: "02",
      title: "Plan & Strategize",
      desc: "Define the project scope, technology approach, user flow, timeline, and development strategy."
    },
    {
      num: "03",
      title: "UI/UX Design",
      desc: "Create clean, intuitive, and user-friendly interfaces before moving into development."
    },
    {
      num: "04",
      title: "Development",
      desc: "Build the product using scalable, reliable, and modern development practices."
    },
    {
      num: "05",
      title: "Testing & Quality Assurance",
      desc: "Test the product carefully for usability, responsiveness, performance, and reliability."
    },
    {
      num: "06",
      title: "Launch & Support",
      desc: "Launch the completed product and continue with improvements, maintenance, and support."
    }
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>
      
      <div className="site-container relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <div data-aos="fade-up" className="inline-block rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-6">
            Our Approach
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            The Process Behind Every Product <span className="text-gradient">We’ve Shipped.</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            We follow a structured, transparent process from initial discovery through launch and ongoing support to ensure your digital product is built for success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="glass group relative flex flex-col p-8 lg:p-10 rounded-[2rem] border border-primary/20 hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden bg-card/40"
            >
              {/* Subtle top hover line */}
              <div className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="flex items-center gap-4 mb-4 lg:mb-5">
                <span className="font-display text-2xl lg:text-3xl font-bold text-primary opacity-90 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                  {step.num}
                </span>
                {/* Horizontal line divider resembling the reference */}
                <div className="w-4 h-px bg-primary/40 shrink-0" />
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed flex-1">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const dur = 2000;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(end * (1 - Math.pow(1 - p, 4))));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
}



/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const leftFeatures = [
    { icon: Clock, title: "Fast Delivery", desc: "We prioritize meeting deadlines and ensuring your project is delivered on time, every time." },
    { icon: Tag, title: "Affordable Pricing", desc: "We offer premium IT services at competitive rates, ensuring maximum value for your investment." },
    { icon: MonitorPlay, title: "Modern Technology", desc: "We utilize the latest stacks to ensure your products are future-proof and performant." },
  ];

  const rightFeatures = [
    { icon: Layers, title: "Scalable Solutions", desc: "Our architectures are built to grow with your business, handling increasing loads seamlessly." },
    { icon: Headphones, title: "24/7 Support", desc: "Our dedicated support team is always available to assist you with any technical needs." },
    { icon: User, title: "Client Satisfaction", desc: "Our client-centric approach ensures that your vision is realized exactly as you imagined." },
  ];

  return (
    <section className="py-24 md:py-32 overflow-hidden bg-background relative">
      <div className="site-container max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(91,108,249,0.15)]">
            Why Choose Us
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground">
            Our Strategy for <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Your Success</span> with Infynux
          </h2>
          <p className="text-lg md:text-xl font-normal text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We combine technical expertise with a client-centric approach to deliver high-performance websites and digital products that make a real impact.
          </p>
        </div>

        {/* Desktop Connected Strategy Visual */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 xl:gap-16 items-center relative min-h-[500px]">
          
          {/* Left Features */}
          <div className="flex flex-col justify-between h-full py-6 space-y-16 text-right items-end relative z-10">
            {leftFeatures.map((f, i) => (
              <div key={i} data-aos="fade-right" data-aos-delay={i * 100} className="max-w-[340px] xl:max-w-[380px] group relative">
                <div className="flex items-start justify-end gap-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                  <div className="h-14 w-14 shrink-0 rounded-full bg-primary/5 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all shadow-[0_0_20px_rgba(91,108,249,0.1)] group-hover:shadow-[0_0_30px_rgba(91,108,249,0.2)]">
                    <f.icon className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Hub */}
          <div data-aos="zoom-in" className="relative w-[280px] h-[280px] shrink-0 flex items-center justify-center z-10 mx-auto">
            {/* Concentric glowing rings */}
            <div className="absolute inset-[-60px] rounded-full border border-primary/20 border-dashed animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-[-30px] rounded-full border border-primary/10" />
            
            {/* Main Hub Container */}
            <div className="relative w-full h-full rounded-full border border-primary/30 bg-card flex flex-col items-center justify-center shadow-[0_0_60px_rgba(91,108,249,0.15)] overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 via-transparent to-violet-500/10" />
              
              <div className="relative z-10 flex flex-col items-center">
                <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1787933035/INfynux-Logo_f2bote.png" alt="Infynux" className="w-14 h-14 object-contain mb-3 opacity-90" />
                <div className="font-display text-xl font-bold text-foreground tracking-wide">Your Success</div>
                <div className="text-[11px] text-muted-foreground uppercase tracking-[0.2em] mt-1.5 font-semibold">Our Mission</div>
              </div>
            </div>

            {/* Connecting Lines (Desktop Only) */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Nodes on outer ring (inset-[-40px] approximately aligns with top 20% left -25px) */}
              <div className="absolute top-[20%] left-[-26px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9]" />
              <div className="absolute top-[50%] left-[-42px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9] -translate-y-1/2" />
              <div className="absolute bottom-[20%] left-[-26px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9]" />

              <div className="absolute top-[20%] right-[-26px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9]" />
              <div className="absolute top-[50%] right-[-42px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9] -translate-y-1/2" />
              <div className="absolute bottom-[20%] right-[-26px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_#5b6cf9]" />

              {/* Lines extending outwards */}
              {/* Top Left */}
              <div className="absolute top-[20%] left-[-160px] xl:left-[-200px] w-[135px] xl:w-[175px] h-px bg-gradient-to-r from-transparent to-primary/60 rotate-[-20deg] origin-right" />
              {/* Middle Left */}
              <div className="absolute top-[50%] left-[-160px] xl:left-[-200px] w-[120px] xl:w-[160px] h-px bg-gradient-to-r from-transparent to-primary/60 -translate-y-1/2" />
              {/* Bottom Left */}
              <div className="absolute bottom-[20%] left-[-160px] xl:left-[-200px] w-[135px] xl:w-[175px] h-px bg-gradient-to-r from-transparent to-primary/60 rotate-[20deg] origin-right" />

              {/* Top Right */}
              <div className="absolute top-[20%] right-[-160px] xl:right-[-200px] w-[135px] xl:w-[175px] h-px bg-gradient-to-l from-transparent to-primary/60 rotate-[20deg] origin-left" />
              {/* Middle Right */}
              <div className="absolute top-[50%] right-[-160px] xl:right-[-200px] w-[120px] xl:w-[160px] h-px bg-gradient-to-l from-transparent to-primary/60 -translate-y-1/2" />
              {/* Bottom Right */}
              <div className="absolute bottom-[20%] right-[-160px] xl:right-[-200px] w-[135px] xl:w-[175px] h-px bg-gradient-to-l from-transparent to-primary/60 rotate-[-20deg] origin-left" />
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col justify-between h-full py-6 space-y-16 text-left items-start relative z-10">
            {rightFeatures.map((f, i) => (
              <div key={i} data-aos="fade-left" data-aos-delay={i * 100} className="max-w-[340px] xl:max-w-[380px] group relative">
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 shrink-0 rounded-full bg-primary/5 border border-primary/20 text-primary flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all shadow-[0_0_20px_rgba(91,108,249,0.1)] group-hover:shadow-[0_0_30px_rgba(91,108,249,0.2)]">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Stacked Layout */}
        <div className="lg:hidden flex flex-col items-center gap-16 mt-8">
          {/* Central Hub Mobile */}
          <div data-aos="zoom-in" className="relative w-56 h-56 shrink-0 flex items-center justify-center">
            <div className="absolute inset-[-20px] rounded-full border border-primary/10 border-dashed animate-[spin_30s_linear_infinite_reverse]" />
            <div className="relative w-full h-full rounded-full border border-primary/30 bg-card flex flex-col items-center justify-center shadow-[0_0_40px_rgba(91,108,249,0.15)]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-violet-500/10" />
              <div className="relative z-10 flex flex-col items-center">
                <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1787933035/INfynux-Logo_f2bote.png" alt="Infynux" className="w-12 h-12 object-contain mb-2 opacity-90" />
                <div className="font-display text-lg font-bold text-foreground tracking-wide">Your Success</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1 font-semibold">Our Mission</div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 w-full max-w-2xl">
            {[...leftFeatures, ...rightFeatures].map((f, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 50} className="group relative glass p-6 rounded-[1.5rem] border border-primary/10 hover:border-primary/30 transition-colors">
                <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-all">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div data-aos="fade-up" className="mt-20 lg:mt-28 text-center relative z-10">
          <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-10 py-4 text-sm md:text-base font-semibold text-white hover:scale-[1.03] transition-transform duration-300 shadow-soft">
            Start a Conversation <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const items = [
    {
      name: "Emirates Inn",
      role: "Innovation · Expert · Design",
      avatar: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935673/92685f20-811f-495b-a83e-92fb393af707.png",
      photo: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935673/92685f20-811f-495b-a83e-92fb393af707.png",
      text: "Creative and modern digital ideas tailored for business growth.",
    },
    {
      name: "Korakkar Siddhar",
      role: "Innovation · Expert · Design",
      avatar: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935699/68dbaa33-cd65-4622-b616-feb06e4df46d.png",
      photo: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935699/68dbaa33-cd65-4622-b616-feb06e4df46d.png",
      text: "Reliable communication and continuous support throughout the project.",
    },
    {
      name: "Caddxpert",
      role: "Innovation · Expert · Design",
      avatar: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935793/cbdbaf71-6b3e-4ace-961f-41f779c055fe.png",
      photo: "https://res.cloudinary.com/dhjupdyus/image/upload/v1787935793/cbdbaf71-6b3e-4ace-961f-41f779c055fe.png",
      text: "High-quality development with clean design and smooth performance.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="testimonials-section"
      style={{
        background: "#000000",
        padding: "88px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(91,108,249,0.09), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>

        {/* ── HEADING ── */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            data-aos="fade-up"
            className="testimonial-heading-primary"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.9rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              margin: "0 0 16px",
              letterSpacing: "-0.02em",
            }}
          >
            What Founders Say About Working With Infynux
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="80"
            className="testimonial-heading-muted"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.48)",
              maxWidth: "550px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Video testimonials from founders, product leaders, and business owners
            who partnered with us to build and scale software products.
          </p>
        </div>

        {/* ── THREE CARDS ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="120"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "48px",
          }}
          className="testimonial-grid"
        >
          {items.map((t, i) => (
            <div key={t.name} className="testimonial-card-outer">
              {/* Gradient border wrapper */}
              <div className="testimonial-card-border">
                <div className="testimonial-card-inner">

                  {/* ── CLIENT TESTIMONIAL header ── */}
                  <div className="testimonial-card-header">
                    <span className="testimonial-italic">Client</span>
                    <span className="testimonial-bold">TESTIMONIAL</span>
                  </div>

                  {/* ── Photo / video area ── */}
                  <div
                    className="testimonial-photo-wrap"
                    onClick={() =>
                      setPlayingIndex(playingIndex === i ? null : i)
                    }
                  >
                    <img
                      src={t.photo}
                      alt={t.name}
                      loading="lazy"
                      className="testimonial-photo-img"
                    />
                    {/* quote overlay */}
                    <div className="testimonial-quote-overlay">
                      &ldquo;{t.text}&rdquo;
                    </div>
                    {/* Play button */}
                    {/* <button
                      className="testimonial-play-btn"
                      aria-label={`Play ${t.name} testimonial`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ width: 18, height: 18 }}
                      >
                        <path
                          d="M8 5.14v13.72a1 1 0 001.515.857l11-6.86a1 1 0 000-1.714l-11-6.86A1 1 0 008 5.14z"
                          fill="#7C3AED"
                        />
                      </svg>
                    </button> */}
                  </div>

                  {/* ── Person info ── */}
                  <div className="testimonial-person">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      loading="lazy"
                      className="testimonial-avatar"
                    />
                    <div className="testimonial-person-text">
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a
            href="/work"
            className="testimonials-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "13px 28px",
              borderRadius: "9999px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "transparent",
              color: "rgba(255,255,255,0.85)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(124,58,237,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(124,58,237,0.08)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            View All Testimonials
            <svg viewBox="0 0 24 24" fill="none" style={{ width: 14, height: 14 }}>
              <path
                d="M7 17L17 7M17 7H7M17 7v10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

      </div>

      {/* ── Scoped CSS ── */}
      <style>{`
        /* Grid → 1 col on mobile */
        @media (max-width: 767px) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .testimonial-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .testimonial-card-outer:last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 10px);
            margin: 0 auto;
          }
        }

        /* Card outer — no visual, just sizing */
        .testimonial-card-outer {
          display: flex;
          flex-direction: column;
        }

        /* Gradient border */
        .testimonial-card-border {
          background: linear-gradient(160deg, #3B82F6 0%, #7C3AED 55%, #1E1B4B 100%);
          border-radius: 18px;
          padding: 2px;
          flex: 1;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 32px rgba(91,108,249,0.18);
          transition: box-shadow 0.3s ease;
        }
        .testimonial-card-outer:hover .testimonial-card-border {
          box-shadow: 0 0 48px rgba(124,58,237,0.35);
        }

        /* Inner card */
        .testimonial-card-inner {
          background: #0a0a14;
          border-radius: 16px;
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 20px 20px 18px;
          gap: 0;
        }

        /* "Client TESTIMONIAL" header */
        .testimonial-card-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 14px;
          line-height: 1;
          user-select: none;
        }
        .testimonial-italic {
          font-family: Georgia, 'Times New Roman', serif;
          font-style: italic;
          font-size: 18px;
          font-weight: 400;
          color: rgba(255,255,255,0.82);
          letter-spacing: 0.01em;
          line-height: 1.2;
        }
        .testimonial-bold {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.02em;
          line-height: 1.1;
          text-transform: uppercase;
        }

        /* Photo area */
        .testimonial-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3/4;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          cursor: pointer;
          flex-shrink: 0;
        }
        .testimonial-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          display: block;
          transition: transform 0.4s ease;
        }
        .testimonial-card-outer:hover .testimonial-photo-img {
          transform: scale(1.03);
        }

        /* Quote overlay */
        .testimonial-quote-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 55%, transparent 100%);
          display: flex;
          align-items: flex-end;
          padding: 16px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: rgba(255,255,255,0.72);
          line-height: 1.5;
          pointer-events: none;
        }

        /* Play button */
        .testimonial-play-btn {
          position: absolute;
          bottom: 14px;
          right: 14px;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffffff;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          z-index: 5;
        }
        .testimonial-play-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(124,58,237,0.5);
        }

        /* Person info */
        .testimonial-person {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          padding-top: 0;
        }
        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          object-position: top;
          border: 2px solid rgba(91,108,249,0.5);
          flex-shrink: 0;
        }
        .testimonial-person-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .testimonial-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.01em;
        }
        .testimonial-role {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: rgba(255,255,255,0.42);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: 0.01em;
        }
      `}</style>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return null;
}

/* ---------- FAQ SECTION ---------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Which is the best web development company in Thiruvarur?",
      a: "Infynux Solutions provides professional website development, software development and mobile app development services for businesses and startups in Thiruvarur, Nagapattinam and across Tamil Nadu.",
    },
    {
      q: "Do you provide mobile app development services?",
      a: "Yes. We build Android, iOS and cross-platform mobile applications tailored to your business needs using React Native and modern mobile frameworks.",
    },
    {
      q: "Do you offer UI/UX design services?",
      a: "Yes. We create modern, user-friendly and conversion-focused UI/UX designs for websites and applications that delight users and drive results.",
    },
    {
      q: "Do you serve clients in Nagapattinam?",
      a: "Yes. We provide web development, app development and digital solutions across Thiruvarur, Nagapattinam and Tamil Nadu — and remotely to clients worldwide.",
    },
  ];

  return (
    <section
      className="faq-section bg-background dark:bg-[#000000]"
      style={{
        padding: "96px 0 96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(91,108,249,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="site-container"
        style={{ position: "relative", zIndex: 2, maxWidth: "860px", margin: "0 auto" }}
      >
        {/* ── HEADING ── */}
        <div style={{ marginBottom: "56px" }}>
          <h2
            data-aos="fade-up"
            className="faq-heading-primary text-foreground dark:text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 0 20px",
              letterSpacing: "-0.025em",
            }}
          >
            Questions We Hear Every Day.{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818CF8 0%, #A78BFA 50%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Answered Honestly.
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="60"
            className="faq-heading-muted text-muted-foreground dark:text-white/40"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1.6vw, 17px)",
              fontWeight: 400,
              maxWidth: "560px",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Find answers to common questions about web development, mobile apps,
            UI/UX design, AI integration, project timelines, and long-term partnerships.
          </p>
        </div>

        {/* ── ACCORDION ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ display: "flex", flexDirection: "column", gap: "12px" }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className={`faq-item border ${
                  isOpen
                    ? "border-indigo-400/45 bg-indigo-500/5 dark:bg-indigo-500/10"
                    : "border-border bg-card dark:border-white/10 dark:bg-white/5"
                }`}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, background 0.25s ease",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                {/* Question row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "20px 24px",
                  }}
                >
                  {/* Number circle */}
                  <div
                    className={`${
                      isOpen
                        ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white border-none"
                        : "bg-background border border-border text-muted-foreground dark:bg-white/5 dark:border-white/10 dark:text-white/45"
                    }`}
                    style={{
                      flexShrink: 0,
                      width: "34px",
                      height: "34px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      transition: "background 0.25s ease, color 0.25s ease",
                    }}
                  >
                    {num}
                  </div>

                  {/* Question text */}
                  <span
                    className={isOpen ? "text-primary dark:text-white" : "text-foreground dark:text-white/80"}
                    style={{
                      flex: 1,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(14px, 1.5vw, 16px)",
                      fontWeight: 600,
                      lineHeight: 1.45,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* +/× icon */}
                  <div
                    className={isOpen ? "text-indigo-500 dark:text-indigo-400" : "text-muted-foreground dark:text-white/40"}
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 300,
                      lineHeight: 1,
                      transition: "color 0.2s ease, transform 0.25s ease",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Answer (animated expand) */}
                <div
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    className="text-muted-foreground dark:text-white/50"
                    style={{
                      margin: 0,
                      padding: "0 24px 22px 74px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(13px, 1.3vw, 15px)",
                      fontWeight: 400,
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SEO text block (preserved) */}
        <div
          data-aos="fade-up"
          className="faq-divider border-t border-border dark:border-white/10"
          style={{
            marginTop: "72px",
            paddingTop: "56px",
            textAlign: "center",
          }}
        >
          <h2
            className="faq-seo-heading text-foreground dark:text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            Software Company in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #4F30B9 0%, #1E7ADF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Thiruvarur &amp; Nagapattinam
            </span>
          </h2>
          <p
            className="faq-seo-text text-muted-foreground dark:text-white/40"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(13px, 1.4vw, 16px)",
              fontWeight: 400,
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            Infynux Solutions provides website development, mobile app development,
            UI/UX design, cloud solutions, AI integration and digital transformation
            services across Thiruvarur, Nagapattinam and Tamil Nadu.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------- CONTACT SUMMARY ---------- */
function ContactSummary() {
  // return (
  //   <section id="contact" className="py-32 bg-primary/5">
  //     <div className="site-container text-center max-w-4xl mx-auto">
  //       <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
  //         Contact <span className="text-gradient">Infynux Solutions</span>.
  //       </h2>
  //       <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl font-normal text-muted-foreground mb-12 leading-relaxed">
  //         Looking for a web development company in Thiruvarur or Nagapattinam? Contact Infynux Solutions today for website development, mobile apps and digital solutions.
  //       </p>
  //       <div data-aos="fade-up" data-aos-delay="200">
  //         <a href="/contact" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-10 py-5 text-sm md:text-base font-semibold text-white hover:scale-[1.03] transition-transform duration-300 shadow-soft">
  //           Send a Message <Send className="h-4 w-4 md:h-5 md:w-5" />
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
}
