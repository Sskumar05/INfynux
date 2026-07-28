import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { 
  ArrowUpRight, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Image as ImageIcon 
} from "lucide-react";
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

interface GalleryItem {
  id: string;
  cat: string;
  title: string;
  img: string;
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    cat: "Web App",
    title: "",
    img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510576/image1_y0f50m.png"
  },
  {
    id: "gal-2",
    cat: "Mobile App",
    title: "",
    img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510580/image2_i5rssc.png"
  },
  {
    id: "gal-3",
    cat: "Web App",
    title: "",
    img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510586/image3_cniteu.png"
  }
//  {
//     id: "gal-4",
//     cat: "Mobile App",
//     title: "App name",
//     img: "/public/image3.png"
//   }
  // {
  //   id: "gal-5",
  //   cat: "Mobile App",
  //   title: "Pulse Preventative Biometrics",
  //   img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
  // }
];


function WorkPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const projects: Array<{ cat: string; title: string; img: string; desc?: string; url?: string }> = [

    {
      cat: "Web App",
      title: "Korrakar Siddhar",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510603/image4_psfgyx.png",
      url: "https://korakkarsiddhar.in/"
    },
    {
      cat: "WebSite",
      title: "Live Wire",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1781510586/image3_cniteu.png",
      url: "https://caddxpertai.in/"
    },
    {
      cat: "Web App",
      title: "Emirates Hotel",
      img: "https://res.cloudinary.com/dhjupdyus/image/upload/v1785233905/emirates_r7dw8j.png",
      url: "https://emiratesinns.com/"
    },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Categories extraction
  const categories = ["All", ...Array.from(new Set(DEFAULT_GALLERY_ITEMS.map((item) => item.cat)))];

  // Filter items
  const filteredItems =
    activeCategory === "All"
      ? DEFAULT_GALLERY_ITEMS
      : DEFAULT_GALLERY_ITEMS.filter((item) => item.cat === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        {/* Signature Projects */}
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h1 data-aos="fade-up" className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  Successful <span className="text-gradient-cosmic">Projects</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-xl max-w-xl">
                  Showcasing our finest work built with passion and precision.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <div
                  key={p.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="group relative overflow-hidden rounded-3xl hover-lift aspect-[4/5] w-full cursor-pointer"
                >
                  {/* Background Image Container */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Deep gradient overlay for premium readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                    <div>
                      {/* <span className="inline-block rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-3.5 py-1 text-[10px] uppercase tracking-widest text-[#00E5FF] font-display mb-4">
                        {p.cat}
                      </span> */}
                      
                      {/* <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-[var(--cyan)] transition-colors duration-300">
                        {p.title}
                      </h3> */}
                      
                      {p.desc && (
                        <p className="text-sm text-slate-300/90 leading-relaxed mb-6 line-clamp-3">
                          {p.desc}
                        </p>
                      )}
                      
                      <div className="mt-2">
                        <a 
                          href={p.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:border-[#00E5FF]/30 hover:bg-[#00E5FF]/10 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-[#00E5FF] hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[#00E5FF]/15"
                        >
                          Explore Project <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- COSMIC GALLERY SECTION ---------- */}
        <section className="py-28 border-t border-white/5 relative bg-black/10">
          {/* background decorative orbs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-[var(--cyan)]/5 blur-3xl animate-float" />
            <div className="absolute bottom-1/4 left-0 h-96 w-96 rounded-full bg-[var(--purple-glow)]/5 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-4 py-1.5 text-xs uppercase tracking-widest text-[#00E5FF] mb-6 animate-pulse">
                <img src="/INfynux-Logo.png" alt="INFYNUX" className="h-4 w-auto object-contain drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />Telemetry Archive
              </div>
              
              <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl sm:text-5xl font-bold mb-6">
                Digital <span className="text-gradient-cyan">Showcase</span>
              </h2>
              
              <p data-aos="fade-up" data-aos-delay="200" className="text-muted-foreground text-lg leading-relaxed">
                A curated collection of our latest digital experiences, creative innovations, and premium project visuals.
              </p>
            </div>

            {/* Gallery spacer to maintain premium design layout */}
            <div className="h-4" />

            {/* Category Filter Tabs */}
            <div data-aos="fade-up" className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`rounded-full px-5 py-2 text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                    activeCategory === c
                      ? "bg-gradient-cyan text-[#0A0A0F] shadow-lg shadow-[#00E5FF]/20"
                      : "glass border border-white/10 text-muted-foreground hover:text-white hover:border-white/20"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => {
                const origIndex = DEFAULT_GALLERY_ITEMS.findIndex(g => g.id === item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => setLightboxIndex(origIndex)}
                    className="group relative overflow-hidden rounded-2xl bg-[#07070F] aspect-square cursor-pointer hover:shadow-2xl hover:shadow-[var(--cyan)]/10 transition-all duration-500"
                  >
                    {/* Image */}
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-5">
                      <div className="flex justify-between items-start">
                        <span className="inline-block rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-2.5 py-0.5 text-[8px] uppercase tracking-widest text-[#00E5FF] font-display">
                          {item.cat}
                        </span>
                      </div>
                      
                      {/* <div className="flex justify-between items-end">
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">
                            {item.title}
                          </h4>
                          <span className="text-[10px] text-slate-500 font-display">
                            Expand Telemetry
                          </span>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
                          <Maximize2 className="h-3.5 w-3.5" />
                        </div>
                      </div> */}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {filteredItems.length === 0 && (
              <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/5">
                <ImageIcon className="h-12 w-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-400 mb-1">No items found</h3>
                <p className="text-sm text-slate-500">No telemetry assets available.</p>
              </div>
            )}
          </div>
        </section>

        {/* ---------- STUNNING GLASS LIGHTBOX MODAL ---------- */}
        {lightboxIndex !== null && (() => {
          const item = DEFAULT_GALLERY_ITEMS[lightboxIndex];
          if (!item) return null;
          return (
            <div 
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-fade-in"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:scale-105 hover:rotate-90 transition-all cursor-pointer z-50"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIdx = (lightboxIndex - 1 + DEFAULT_GALLERY_ITEMS.length) % DEFAULT_GALLERY_ITEMS.length;
                  setLightboxIndex(prevIdx);
                }}
                className="absolute left-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-50"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIdx = (lightboxIndex + 1) % DEFAULT_GALLERY_ITEMS.length;
                  setLightboxIndex(nextIdx);
                }}
                className="absolute right-6 h-12 w-12 rounded-full bg-white/5 border border-white/10 hover:border-white/20 text-white flex items-center justify-center hover:scale-105 transition-all cursor-pointer z-50"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Main Image Container */}
              <div 
                className="relative max-w-5xl w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="max-h-[75vh] max-w-full rounded-2xl shadow-2xl object-contain"
                />
                
                {/* Image details footer */}
                <div className="w-full max-w-3xl mt-6 flex justify-between items-center text-left bg-black/60 rounded-2xl p-5 backdrop-blur-md">
                  <div>
                    <span className="inline-block rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-3 py-0.5 text-[9px] uppercase tracking-widest text-[#00E5FF] font-display mb-2">
                      {item.cat}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                  
                  <div className="text-right text-xs uppercase tracking-widest text-slate-500 font-display">
                    Record {lightboxIndex + 1} of {DEFAULT_GALLERY_ITEMS.length}
                  </div>
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
