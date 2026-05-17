import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

function WorkPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    { cat: "AI Platform", title: "Nebula OS", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80" },
    { cat: "Brand Identity", title: "Helix Labs", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=900&q=80" },
    { cat: "Web App", title: "Orbit Finance", img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80" },
    { cat: "Metaverse", title: "Nova City", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=900&q=80" },
    { cat: "Mobile App", title: "Pulse Health", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80" },
    { cat: "Dashboard", title: "Flux Analytics", img: "https://images.unsplash.com/photo-1551288049-bbbda5366392?w=900&q=80" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h1 data-aos="fade-up" className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
                  Signature <span className="text-gradient-cosmic">Projects</span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-xl max-w-xl">
                  Showcasing our finest work built with passion and precision.
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <a
                  href="#"
                  key={p.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="group relative overflow-hidden rounded-2xl gradient-border hover-lift"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-[var(--cyan)] mb-3">
                      {p.cat}
                    </span>
                    <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                    <div className="inline-flex items-center gap-2 text-sm text-muted-foreground group-hover:text-[var(--cyan)] transition-colors">
                      View Case Study <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
