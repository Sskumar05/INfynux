import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";

import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import { Hero } from "../components/sections/Hero";
import { CapabilityBar } from "../components/sections/CapabilityBar";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Products } from "../components/sections/Products";
import { Process } from "../components/sections/Process";
import { QuoteBand } from "../components/sections/QuoteBand";
import { Cta } from "../components/sections/Cta";
import { Leaders } from "../components/sections/Leaders";
import { LoadIntro } from "../components/ui/LoadIntro";

import { SectionDivider } from "../components/ui/SectionDivider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Infynux Solutions | Engineered Software" },
      { name: "description", content: "We solve business problems with engineered software." },
    ],
  }),
});

function Index() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  if (!loaded) return null;

  return (
    <div className="min-h-screen bg-[var(--color-ink)] text-[var(--color-paper)] selection:bg-[var(--color-gold)] selection:text-[var(--color-ink)]">
      <LoadIntro />
      <Header />
      <main>
        <Hero />
        <CapabilityBar />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Products />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <QuoteBand />
        <SectionDivider />
        <Leaders />
        <SectionDivider />
        <Cta />
      </main>
      <Footer />

    </div>
  );
}
