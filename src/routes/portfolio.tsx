import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ArrowUpRight, Lock } from "lucide-react";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";


export const Route = createFileRoute("/portfolio")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Portfolio | Infynux Solutions" },
      { name: "description", content: "Explore our completed software projects and proprietary products." },
    ],
  }),
});

const COMPLETED_PROJECTS = [
  {
    tag: "CLIENT // SPIRITUAL",
    title: "Korrakar Siddhar",
    desc: "A dedicated platform for the sacred Jeevasamadhi temple of Korrakar Siddhar.",
    img: "/image4.png",
    link: "https://korakkarsiddhar.in/"
  },
  {
    tag: "CLIENT // EDUCATION",
    title: "Live Wire (CADD Xpert AI)",
    desc: "Build your career with industry-oriented CAD & IT training and placement.",
    img: "/image3.png",
    link: "https://caddxpertai.in/"
  },
  {
    tag: "CLIENT // HOSPITALITY",
    title: "Emirates Hotel",
    desc: "A curated collection of luxury stays where every visit becomes a memory.",
    img: "/emirates_cover.png",
    link: "https://emiratesinns.com/"
  }
];

const PROPRIETARY_PRODUCTS = [
  {
    tag: "PRODUCT // POS",
    title: "InfePOS Platform",
    desc: "Next-generation point-of-sale software engineered with ultra-low latency transaction syncing.",
    status: "COMING SOON"
  },
  {
    tag: "PRODUCT // MARKETPLACE",
    title: "Infybuys Engine",
    desc: "A secure digital business listing marketplace built with transparent buyer matching.",
    status: "COMING SOON"
  }
];

function Portfolio() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
    setLoaded(true);
  }, []);

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)] selection:bg-[var(--color-gold)] selection:text-[var(--color-ink)]">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="mb-20" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
              <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
                Our Work
              </span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-3xl">
              Completed Projects & <span className="text-[var(--color-gold)] block">Proprietary Products.</span>
            </h1>
            <p className="text-[var(--color-text-muted-dark)] font-body text-lg max-w-xl mt-6">
              A showcase of the systems we've engineered, from robust internal tools to market-ready consumer applications.
            </p>
          </div>

          {/* Section: Completed Projects */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-display font-bold text-white mb-8 border-b border-[#222224] pb-4">
              Client Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-32">
            {COMPLETED_PROJECTS.map((item, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col bg-[#0B0B0C] border border-[#222224] rounded-2xl transition-all duration-500 hover:border-[#E0B840]/40 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image Frame - Auto height to fit image perfectly */}
                <div className="relative w-full overflow-hidden rounded-t-2xl bg-black">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
                  
                  {/* Link Button overlay */}
                  <div className="absolute top-4 right-4">
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:bg-[#E0B840] group-hover:border-[#E0B840] group-hover:text-black transition-all duration-300 shadow-lg"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1 h-1 rounded-full bg-[#E0B840]" />
                    <span className="font-mono text-[9px] text-[#88888C] tracking-widest uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-[#E0B840] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#A4A4A8] font-body text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Proprietary Products (Coming Soon) */}
          <div className="mb-12" data-aos="fade-up">
            <h2 className="text-2xl font-display font-bold text-white mb-8 border-b border-[#222224] pb-4">
              Proprietary Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {PROPRIETARY_PRODUCTS.map((product, i) => (
              <div
                key={i}
                className="group relative flex flex-col bg-[#0a0a0a] border border-[#222224] p-6 sm:p-10 hover:border-[var(--color-gold-dim)] transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="font-mono text-[10px] text-[#E0B840] tracking-widest uppercase border border-[#E0B840]/30 px-3 py-1 rounded-full">
                    {product.tag}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#88888C] tracking-widest uppercase">
                    <Lock className="w-3 h-3" />
                    {product.status}
                  </div>
                </div>

                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {product.title}
                </h3>

                <p className="text-[#A4A4A8] font-body text-base leading-relaxed max-w-md">
                  {product.desc}
                </p>

                {/* Visual placeholder for tech design without images */}
                <div className="mt-8 pt-8 border-t border-[#222224] flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="w-2 h-2 bg-[#222224] rounded-full" />
                    <span className="w-2 h-2 bg-[#222224] rounded-full" />
                    <span className="w-2 h-2 bg-[#222224] rounded-full" />
                  </div>
                  <span className="font-mono text-[10px] text-[#444448] tracking-widest uppercase">
                    IN DEVELOPMENT
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />

    </div>
  );
}

