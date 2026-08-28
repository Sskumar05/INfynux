import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import AOS from "aos";
import { ArrowRight } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { servicesData } from "../data/servicesData";

export const Route = createFileRoute("/services/")({
  component: ServicesHubPage,
  head: () => ({
    meta: [
      { title: "Services Hub | INFYNUX" },
      { name: "description", content: "Explore the comprehensive ecosystem of digital services from INFYNUX." },
    ],
  }),
});

function ServicesHubPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="relative pb-24" tabIndex={-1}>
        <section className="relative pt-28 lg:pt-32 pb-16 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, var(--color-primary) 10%, transparent), transparent 70%)" }}
          />
          <div className="site-container flex flex-col items-center text-center">

            {/* Top badge */}
            {/* <span
              data-aos="fade-up"
              className="glass inline-flex items-center rounded-full border border-border/60 px-5 py-1.5 text-sm font-medium text-foreground mb-8"
            >
              Selected Works &amp; Case Studies
            </span> */}

            {/* Main heading */}
            <h1
              data-aos="fade-up"
              data-aos-delay="60"
              className="font-display mx-auto max-w-3xl font-bold leading-[1.08] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)" }}
            >
              <span className="block text-foreground">Transforming Ideas Into</span>
              <span className="block">
                <span style={{ background: "linear-gradient(90deg, #4B5CF6 0%, #38BDF8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Digital Solutions
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="120"
              className="text-muted-foreground mx-auto max-w-3xl text-base leading-relaxed md:text-lg mb-8"
            >
              We deliver innovative websites, intelligent applications, and scalable technology solutions tailored for modern businesses. Explore our core engineering services below.
              <br className="hidden sm:block" />
               delivered for startups and growing businesses.
            </p>

            

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
                href="/work"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-border hover:bg-muted/40 hover:-translate-y-0.5"
              >
                View Showcase <span aria-hidden="true" className="text-xs">↗</span>
              </a>
            </div>

          </div>
        </section>


        <div className="site-container max-w-6xl mx-auto flex flex-col gap-24">
          {servicesData.map((category, catIdx) => (
            <div key={category.id} data-aos="fade-up" className="relative pt-12 border-t border-border/40">
              <div className="mb-10 max-w-3xl">
                <div className="text-sm font-bold text-primary mb-3 uppercase tracking-widest">{category.eyebrow.split("·")[0]}</div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">{category.name}</h2>
                <p className="text-muted-foreground text-lg">{category.eyebrow.split("·")[1]?.replace(/"/g, "").trim()}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {category.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 bg-border/20 rounded-full text-foreground/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.services.map((service, sIdx) => (
                  <Link
                    key={service.id}
                    to="/services/$serviceId"
                    params={{ serviceId: service.id }}
                    className="glass p-8 rounded-[1.5rem] border border-border/40 hover:border-primary/40 transition-colors group flex flex-col h-full cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground pr-4">{service.name}</h3>
                      <div className="w-10 h-10 rounded-full bg-border/30 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>
                    <ul className="flex flex-col gap-3">
                      {service.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-3 text-sm text-foreground/80 font-medium">
                          <span className="text-primary mt-0.5">•</span>
                          {hl}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

