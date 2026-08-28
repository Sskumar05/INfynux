import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/work")({
  component: WorkPage,
  head: () => ({
    meta: [
      { title: "Projects | INFYNUX" },
      { name: "description", content: "Discover the signature projects and digital archive of advanced applications built with passion and precision by INFYNUX." },
    ],
  }),
});

interface Project {
  id: string;
  name: string;
  description: string;
  type: string;
  secondaryBadge: string;
  domain: string;
  live: string;
  year: string;
  image: string;
  url: string;
}

const PROJECTS: Project[] = [
  {
    id: "korrakar-siddhar",
    name: "Korrakar Siddhar",
    description: "A devotional web experience built with reverence and precision. Clean architecture, rich content, and a seamless spiritual journey for devotees worldwide.",
    type: "Web App",
    secondaryBadge: "Spiritual / Culture",
    domain: "India",
    live: "korakkarsiddhar.in",
    year: "2023",
    image: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510603/image4_psfgyx.png",
    url: "https://korakkarsiddhar.in/",
  },
  {
    id: "live-wire",
    name: "Live Wire",
    description: "A high-performance CAD and design technology website built for modern engineering professionals with fast load times and conversion-optimized pages.",
    type: "Website",
    secondaryBadge: "Engineering / Tech",
    domain: "India",
    live: "caddxpertai.in",
    year: "2023",
    image: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510586/image3_cniteu.png",
    url: "https://caddxpertai.in/",
  },
  {
    id: "emirates-hotel",
    name: "Emirates Hotel",
    description: "A premium hospitality web experience for Emirates Inns — crafted to reflect elegance and luxury with seamless booking flows.",
    type: "Web App",
    secondaryBadge: "Hospitality",
    domain: "UAE",
    live: "emiratesinns.com",
    year: "2024",
    image: "https://res.cloudinary.com/dhjupdyus/image/upload/v1785233905/emirates_r7dw8j.png",
    url: "https://emiratesinns.com/",
  },
];

interface GalleryItem {
  id: string;
  cat: string;
  title: string;
  img: string;
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  { id: "gal-1", cat: "Web App", title: "", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510576/image1_y0f50m.png" },
  { id: "gal-2", cat: "Mobile App", title: "", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510580/image2_i5rssc.png" },
  { id: "gal-3", cat: "Web App", title: "", img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510586/image3_cniteu.png" },
];

function WorkPage() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 50 });
    window.scrollTo(0, 0);
  }, []);

  const ALL_TYPES = ["All Projects", ...Array.from(new Set(PROJECTS.map((p) => p.type)))];
  const [activeType, setActiveType] = useState("All Projects");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryCategories = ["All", ...Array.from(new Set(DEFAULT_GALLERY_ITEMS.map((i) => i.cat)))];
  const [activeGalCat, setActiveGalCat] = useState("All");

  const filteredProjects =
    activeType === "All Projects" ? PROJECTS : PROJECTS.filter((p) => p.type === activeType);

  const filteredGallery =
    activeGalCat === "All"
      ? DEFAULT_GALLERY_ITEMS
      : DEFAULT_GALLERY_ITEMS.filter((i) => i.cat === activeGalCat);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="overflow-x-clip relative" tabIndex={-1}>

        {/* ── SECTION 1: HERO ── */}
        <section className="relative pt-28 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--color-primary) 10%, transparent), transparent 70%)" }}
          />
          <div className="site-container flex flex-col items-center text-center">

            {/* Top badge */}
            <span
              data-aos="fade-up"
              className="glass inline-flex items-center rounded-full border border-border/60 px-5 py-1.5 text-sm font-medium text-foreground mb-8"
            >
              Selected Works &amp; Case Studies
            </span>

            {/* Main heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="60"
              className="font-display mx-auto max-w-3xl font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)" }}
            >
              <span className="block text-foreground">Projects Built,</span>
              <span className="block">
                <span style={{ background: "linear-gradient(90deg, #4B5CF6 0%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Shipped &amp; Scaling.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="text-muted-foreground mx-auto max-w-2lg text-base leading-relaxed md:text-lg mb-8"
            >
              A curated collection of projects we’ve thoughtfully designed, developed, and successfully
              <br className="hidden sm:block" />
               delivered for startups and growing businesses.
            </p>

            {/* Chips row */}
            <div
              data-aos="fade-up"
              data-aos-delay="180"
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground">
                NDA from Day One
              </span>
              <span className="inline-flex items-center rounded-full border border-border/70 bg-background/60 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-foreground">
                Visual Flow First
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)" }}
              >
                {/* Globe icon inline */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Global Delivery
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="240"
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366F1 0%, #818CF8 100%)" }}
              >
                Start Your Project <span aria-hidden="true">→</span>
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-border hover:bg-muted/40 hover:-translate-y-0.5"
              >
                View Case Studies <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </div>

          </div>
        </section>

        {/* ── MARQUEE STRIP ── */}
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee-scroll 28s linear infinite;
          }
          .marquee-track:hover { animation-play-state: paused; }
        `}</style>
        <div
          aria-hidden="true"
          className="bg-card dark:bg-[#0f1117] border-y border-border dark:border-white/10 overflow-hidden whitespace-nowrap flex items-center h-[44px]"
        >
          <div className="marquee-track">
            {[
              "Web App", "Mobile App", "Website", "Hospitality",
              "Engineering / Tech", "Spiritual / Culture", "SaaS",
              "Healthcare", "Enterprise", "Cybersecurity", "Media",
              "EdTech", "FinTech", "AI", "Operations", "Compliance",
              "Global Delivery", "UI/UX Design", "E-Commerce",
              // duplicate set for seamless loop
              "Web App", "Mobile App", "Website", "Hospitality",
              "Engineering / Tech", "Spiritual / Culture", "SaaS",
              "Healthcare", "Enterprise", "Cybersecurity", "Media",
              "EdTech", "FinTech", "AI", "Operations", "Compliance",
              "Global Delivery", "UI/UX Design", "E-Commerce",
            ].map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-7 text-[11px] font-semibold tracking-widest uppercase text-muted-foreground dark:text-white/65 shrink-0"
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#6366f1",
                    flexShrink: 0,
                    boxShadow: "0 0 6px #6366f1aa",
                  }}
                />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── SECTION 2: FILTER + PROJECTS ── */}
        <section className="pb-24 pt-15">
          <div className="site-container">
             {/* Main heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="60"
              className="font-display mx-auto font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 3vw, 4rem)" }}
            >
              <span className="block text-center">
                <span className="text-foreground">Showcasing Our </span>
                <span style={{ background: "linear-gradient(90deg, #4B5CF6 0%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Excellence
                </span>
              </span>
            </h1>
        
 {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="text-muted-foreground mx-auto max-w-2xl text-base text-center leading-relaxed md:text-lg mb-8"
            >
Explore our curated collection of innovative digital solutions, thoughtfully crafted where creative strategy meets advanced engineering.            </p>

            {/* Centered filter bar — glass pill container */}
            <div
              data-aos="fade-up"
              className="mb-12 flex justify-center"
            >
              <div className="glass inline-flex items-center rounded-full border border-border/60 p-1 gap-1">
                {ALL_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      activeType === t
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Two-column project card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group relative overflow-hidden rounded-2xl border border-border/50 aspect-[4/3] cursor-pointer bg-muted/20 transition-all duration-300 hover:border-border hover:shadow-xl"
                >
                  {/* Full-card background image */}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient overlay — strong at bottom, fades at top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  {/* Subtle top vignette for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
                    {/* Category badge — top-left */}
                    <span className="inline-flex items-center rounded-full bg-primary/80 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white border border-white/10">
                      {project.type}
                    </span>
                    {/* Secondary badge — top-right */}
                    <span className="inline-flex items-center rounded-full bg-black/50 backdrop-blur-sm px-3 py-1 text-[11px] font-medium text-white/80 border border-white/10">
                      {project.secondaryBadge}
                    </span>
                  </div>

                  {/* Bottom content: title + visit site button + meta */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                    {/* Title row + Visit Site button */}
                    <div className="flex items-center justify-between gap-3 mb-2.5">
                      <h2 className="font-display text-lg sm:text-xl font-bold text-white leading-tight tracking-tight truncate">
                        {project.name}
                      </h2>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all duration-200"
                      >
                        Visit Site <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    {/* Supporting info: domain + year */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] text-white/60 font-medium">
                        {project.domain}
                      </span>
                      <span className="text-white/30 text-[9px]">•</span>
                      <span className="text-[11px] text-white/60 font-medium">
                        {project.year}
                      </span>
                      <span className="text-white/30 text-[9px]">•</span>
                      <span className="text-[11px] text-white/50 font-mono truncate max-w-[120px]">
                        {project.live}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="text-center py-20 glass rounded-2xl border border-border/40 mt-4">
                <p className="text-muted-foreground">No projects found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── SECTION 3: GALLERY ── */}
        <section id="gallery" className="py-20 border-t border-border/40">
          <div className="site-container">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span data-aos="fade-up" className="glass inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium text-foreground mb-5">
                Digital Showcase
              </span>
              <h2 data-aos="fade-up" data-aos-delay="60" className="font-display text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Explore the <span className="text-gradient">Gallery</span>
              </h2>
              <p data-aos="fade-up" data-aos-delay="120" className="text-muted-foreground leading-relaxed md:mx-auto md:max-w-2xl">
              Explore a curated showcase of our latest digital experiences, innovative solutions, and creative projects crafted with purpose and precision.</p>
            </div>

            {/* Gallery filter */}
            <div data-aos="fade-up" className="flex justify-center mb-8">
              <div className="glass inline-flex items-center rounded-full border border-border/60 p-1 gap-1">
                {galleryCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveGalCat(c)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      activeGalCat === c
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery grid */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredGallery.map((item) => {
                const origIdx = DEFAULT_GALLERY_ITEMS.findIndex((g) => g.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(origIdx)}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 aspect-[4/3] cursor-pointer hover:border-primary/40 transition-all duration-500 bg-muted/20"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                      <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-primary w-fit">
                        {item.cat}
                      </span>
                      <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        View Image <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-16 glass rounded-2xl border border-border/40">
                <ImageIcon className="h-10 w-10 text-muted-foreground mx-auto mb-3 opacity-40" />
                <p className="text-sm text-muted-foreground">No items for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* ── LIGHTBOX ── */}
        {lightboxIndex !== null &&
          (() => {
            const item = DEFAULT_GALLERY_ITEMS[lightboxIndex];
            if (!item) return null;
            return (
              <div
                className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8"
                onClick={() => setLightboxIndex(null)}
              >
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-5 right-5 h-11 w-11 rounded-full glass border border-border/50 hover:border-foreground/30 text-foreground flex items-center justify-center hover:scale-105 hover:rotate-90 transition-all cursor-pointer z-50"
                >
                  <X className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + DEFAULT_GALLERY_ITEMS.length) % DEFAULT_GALLERY_ITEMS.length); }}
                  className="absolute left-5 h-11 w-11 rounded-full glass border border-border/50 text-foreground flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-50 hidden sm:flex"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % DEFAULT_GALLERY_ITEMS.length); }}
                  className="absolute right-5 h-11 w-11 rounded-full glass border border-border/50 text-foreground flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-50 hidden sm:flex"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
                <div
                  className="relative max-w-5xl w-full flex flex-col items-center h-full justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-[78vh] max-w-full rounded-2xl shadow-2xl object-contain border border-border/40"
                  />
                  <div className="w-full max-w-3xl mt-4 flex justify-between items-center glass rounded-2xl border border-border/40 p-4 px-5">
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-primary mb-1.5">
                        {item.cat}
                      </span>
                      <p className="text-sm font-semibold text-foreground">{item.title || "Project Visual"}</p>
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{lightboxIndex + 1} / {DEFAULT_GALLERY_ITEMS.length}</span>
                  </div>
                </div>
              </div>
            );
          })()}

      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
