import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import {
  Rocket, Eye, ArrowRight, ArrowUpRight, MapPin, Compass, Target, Sparkles, Check, ChevronLeft, ChevronRight, Server, Layout, Database, Cloud, Plug, Flame, Plus, X, Calendar, Mail, Lightbulb, Shield
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { TeamSection } from "../components/TeamSection";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | INFYNUX" },
      { name: "description", content: "Learn about the mission, values, and team behind INFYNUX, a global collective building futuristic digital experiences." },
    ],
  }),
});

function AboutPage() {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      easing: "ease-out-cubic", 
      once: true, 
      offset: 60 
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      <Navbar />
      
      <main className="relative pb-20 overflow-hidden" tabIndex={-1}>
        <HeroSection />
        <StatsBar />
        <StoryTimeline />
        <InfynnoJourneySection />
        <MissionVisionSection />
        <WorkingProcessSection />
        <TechStackSection />
        <ValuesSection />
        <LocationsSection />
        <CTASection />
      </main>

      <TeamSection />
      <FAQSection />
      <LetsTalkSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative pb-16 lg:pb-20 pt-28 lg:pt-32 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-primary/20 absolute -top-40 left-1/2 size-[min(900px,120vw)] -translate-x-1/2 rounded-full blur-[140px] md:-top-48 md:blur-[160px]" />
        <div className="absolute top-[22%] -right-40 size-[min(560px,80vw)] rounded-full blur-[140px] md:top-[26%] bg-purple-500/15" />
      </div>

      <div className="site-container">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] xl:gap-12">
          
          {/* Left Content */}
          <div className="relative z-10 flex flex-col py-6">
            <h1 data-aos="fade-up" className="font-display text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] font-bold tracking-tight mb-6">
              <span className="block">We’re on a Mission to Redefine </span>
              <span className="text-gradient block">Digital Possibilities.</span>
            </h1>
            
            <p data-aos="fade-up" data-aos-delay="100" className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              INFYNUX is a global collective of designers, engineers, and strategists shaping the future of digital experiences beyond expectations. We help ambitious businesses embrace digital transformation and turn bold ideas into meaningful digital solutions.            </p>
            
            <div data-aos="fade-up" data-aos-delay="200" className="flex items-center gap-4 flex-wrap mb-10">
              <Link to="/contact" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:scale-[1.03] transition-transform">
                Join Our Journey <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl glass px-7 py-3 text-sm font-semibold text-foreground border border-border/50 hover:bg-muted/40 transition-colors">
                View Our Work
              </Link>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap gap-2.5">
              <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium">✨ Founded 2025</span>
              <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium">🚀 MSME Registered</span>
              <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium">💡 StartupTN</span>
              <span className="glass text-muted-foreground inline-flex rounded-full px-3.5 py-1.5 text-sm font-medium">🌍 Nagapattinam</span>
            </div>
          </div>

          {/* Right Orbit Graphic (Hidden on mobile) */}
          <div data-aos="zoom-in" data-aos-delay="200" className="relative hidden min-h-[500px] w-full lg:flex items-center justify-center">
             <div className="relative size-[440px] flex items-center justify-center">
                {/* Orbit Rings */}
                <div className="absolute size-full rounded-full border border-dashed border-primary/20 animate-[spin_40s_linear_infinite]" />
                <div className="absolute size-[60%] rounded-full border border-dashed border-purple-500/20 animate-[spin_30s_linear_infinite_reverse]" />
                
                {/* Center Badge */}
                <div className="absolute size-35 flex items-center">
                   <img src="https://res.cloudinary.com/dhjupdyus/image/upload/v1787983031/INfynux-Logo_djufod.png"/>
                </div>

                {/* Floating Stat Nodes */}
                <div className="absolute top-0 left-1/2 -mt-10 -ml-12 animate-float">
                   <div className="flex size-24 flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-md text-primary shadow-lg shadow-primary/10">
                     <span className="text-2xl font-black">3+</span>
                     <span className="text-[10px] uppercase tracking-widest font-bold mt-1 text-primary/80">Projects</span>
                   </div>
                </div>
                <div className="absolute bottom-6 left-0 -ml-6 animate-float" style={{ animationDelay: '1s' }}>
                   <div className="flex size-24 flex-col items-center justify-center rounded-2xl border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-purple-400 shadow-lg shadow-purple-500/10">
                     <span className="text-2xl font-black">100%</span>
                     <span className="text-[10px] uppercase tracking-widest font-bold mt-1 text-purple-400/80">Satisfaction</span>
                   </div>
                </div>
                <div className="absolute bottom-6 right-0 -mr-6 animate-float" style={{ animationDelay: '2s' }}>
                   <div className="flex size-24 flex-col items-center justify-center rounded-2xl border border-sky-500/30 bg-sky-500/10 backdrop-blur-md text-sky-400 shadow-lg shadow-sky-500/10">
                     <span className="text-2xl font-black">24/7</span>
                     <span className="text-[10px] uppercase tracking-widest font-bold mt-1 text-sky-400/80">Support</span>
                   </div>
                </div>
                <div className="absolute top-[20%] right-[-12%] animate-float" style={{ animationDelay: '1.5s' }}>
                   <div className="flex size-24 flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md text-emerald-400 shadow-lg shadow-emerald-500/10">
                     <span className="text-2xl font-black">98%</span>
                     <span className="text-[10px] uppercase tracking-widest font-bold mt-1 text-emerald-400/80">Rating</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- STATS BAR ---------- */
function StatsBar() {
  const stats = [
    { v: "3+", l: "Projects Delivered", d: "Worldwide" },
    { v: "98%", l: "Client Satisfaction", d: "Consistent excellence" },
    { v: "24/7", l: "Support Available", d: "Always online" },
    { v: "100%", l: "Client Focused", d: "Quality-driven solutions" }
  ];

  return (
    <div data-aos="fade-up" className="border-y border-border/40 bg-background/30 backdrop-blur-md mt-4 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border/40 max-w-7xl mx-auto">
         {stats.map((s, i) => (
           <div key={i} className="flex flex-col items-center justify-center p-8 text-center bg-transparent hover:bg-card/20 transition-colors">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{s.v}</div>
              <div className="text-sm font-bold text-foreground/80 mb-0.5">{s.l}</div>
              <div className="text-xs text-muted-foreground">{s.d}</div>
           </div>
         ))}
      </div>
    </div>
  );
}

/* ---------- JOURNEY / TIMELINE ---------- */
function StoryTimeline() {
  const steps = [
    {
      num: "01",
      label: "DISCOVERY",
      title: "Understand First",
      desc: "Understanding businesses, users, challenges, and opportunities to define the right digital direction.",
      color: "from-violet-500 to-purple-600",
      glow: "shadow-violet-500/30",
      border: "border-violet-500/30",
      bg: "bg-violet-500/10",
      text: "text-violet-400",
    },
    {
      num: "02",
      label: "STRATEGY",
      title: "Plan to Win",
      desc: "Turning insights into a clear product, technology, and execution roadmap built around measurable goals.",
      color: "from-blue-500 to-cyan-500",
      glow: "shadow-blue-500/30",
      border: "border-blue-500/30",
      bg: "bg-blue-500/10",
      text: "text-blue-400",
    },
    {
      num: "03",
      label: "DESIGN",
      title: "Make it Real",
      desc: "Creating intuitive user experiences, visual systems, and prototypes that make ideas easier to validate.",
      color: "from-pink-500 to-rose-500",
      glow: "shadow-pink-500/30",
      border: "border-pink-500/30",
      bg: "bg-pink-500/10",
      text: "text-pink-400",
    },
    {
      num: "04",
      label: "ENGINEERING",
      title: "Build to Scale",
      desc: "Building scalable, secure, and high-performance digital products with modern technologies.",
      color: "from-emerald-500 to-teal-500",
      glow: "shadow-emerald-500/30",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
    },
    {
      num: "05",
      label: "GROWTH",
      title: "Evolve Always",
      desc: "Launching, measuring, optimizing, and continuously improving digital products as businesses evolve.",
      color: "from-amber-500 to-orange-500",
      glow: "shadow-amber-500/30",
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
      text: "text-amber-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Ambient BG */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/8 rounded-full blur-[120px]" />
      </div>

      <div className="site-container max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-5">
            Our Process
          </div>
          <h2 data-aos="fade-up" data-aos-delay="80" className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            How We <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Deliver Excellence</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="160" className="text-muted-foreground text-lg leading-relaxed">
            A proven capability journey from first conversation to continuous growth — every engagement follows this five-stage discipline.
          </p>
        </div>

        {/* ── DESKTOP: Horizontal Timeline ── */}
        <div data-aos="fade-up" data-aos-delay="200" className="hidden lg:block relative">
          {/* Connector line */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-px bg-gradient-to-r from-violet-500/20 via-primary/40 to-amber-500/20" />

          <div className="flex justify-between items-start gap-4 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center flex-1 cursor-default"
              >
                {/* Node */}
                <div
                  className={`relative w-[80px] h-[80px] rounded-2xl border ${step.border} ${step.bg} flex flex-col items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${step.glow} group-hover:border-opacity-60`}
                >
                  <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${step.text} mb-0.5`}>{step.num}</span>
                  <span className={`text-[9px] font-bold tracking-[0.15em] uppercase ${step.text} opacity-70`}>{step.label}</span>
                  {/* Glow dot at bottom center (connects to line) */}
                  <div className={`absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br ${step.color} shadow-md group-hover:scale-125 transition-transform`} />
                </div>

                {/* Content */}
                <h3 className="text-foreground font-bold text-[15px] mb-2 group-hover:text-primary transition-colors leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-[13px] leading-relaxed max-w-[160px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MOBILE / TABLET: Vertical Timeline ── */}
        <div className="lg:hidden flex flex-col gap-0 relative pl-8">
          {/* Vertical connector */}
          <div className="absolute top-5 bottom-5 left-[19px] w-px bg-gradient-to-b from-violet-500/30 via-primary/30 to-amber-500/30" />

          {steps.map((step, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="group relative flex gap-6 pb-10 last:pb-0"
            >
              {/* Node dot */}
              <div className={`absolute -left-8 top-0 w-[38px] h-[38px] rounded-xl border ${step.border} ${step.bg} flex flex-col items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${step.glow}`}>
                <span className={`text-[8px] font-black tracking-widest uppercase ${step.text}`}>{step.num}</span>
              </div>

              {/* Content */}
              <div className="pt-1">
                <div className={`text-[10px] font-bold tracking-[0.2em] uppercase ${step.text} mb-1`}>{step.label}</div>
                <h3 className="text-foreground font-bold text-base mb-1.5 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




/* ---------- INFYNNO JOURNEY ---------- */
function InfynnoJourneySection() {
  const timeline = [
    // { year: "2018", title: "Founded", desc: "Started in Ahmedabad with one conviction - business deserves a real technology partner", color: "text-purple-400", bg: "bg-purple-900/20", border: "border-purple-500/30" },
    // { year: "2019", title: "Introduced MERN Stack", desc: "Expanded our stack to MERN - enabling faster, scalable full-stack product delivery", color: "text-blue-400", bg: "bg-blue-900/20", border: "border-blue-500/30" },
    // { year: "2021", title: "Expansion", desc: "Team and client base grew significantly - entering new markets and industries", color: "text-emerald-400", bg: "bg-emerald-900/20", border: "border-emerald-500/30" },
    // { year: "2022", title: "50+ Projects Delivered", desc: "Crossed 50 products shipped across 5 countries - Top Rated Plus on Upwork, 5★ Clutch", color: "text-amber-400", bg: "bg-amber-900/20", border: "border-amber-500/30" },
    // { year: "2023", title: "Edtech Expertise", desc: "Became a go-to EdTech partner - LMS, exam platforms, tutor management at scale", color: "text-pink-400", bg: "bg-pink-900/20", border: "border-pink-500/30" },
    // { year: "2024", title: "120+ Global Projects", desc: "Served clients across 7 countries with 120+ products delivered worldwide", color: "text-indigo-400", bg: "bg-indigo-900/20", border: "border-indigo-500/30" },
    // { year: "2025", title: "15+ Edtech + AI Adoption", desc: "15+ EdTech solutions live, AI-augmented workflows across every engagement", color: "text-teal-400", bg: "bg-teal-900/20", border: "border-teal-500/30" }
  ];

  return (
    <section className="py-24 relative bg-background dark:bg-[#09090b]">
      <div className="site-container max-w-[1250px] mx-auto">
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="font-display text-4xl md:text-[44px] font-bold tracking-tight text-foreground mb-6">
            How Infynux Began - <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">And Why It Still Matters</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-[17px] text-gray-400 max-w-2xl mx-auto leading-relaxed">
            What began as a vision in 2026 has grown into a journey of innovation, growth, and impact. Here’s our story.          </p>
        </div>

        {/* Timeline */}
        {/* <div data-aos="fade-up" data-aos-delay="200" className="relative mb-24 hidden lg:block">
          <div className="absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-white/10" />
          
          <div className="flex justify-between relative z-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col items-center w-[150px] text-center">
                <div className={`w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center font-bold text-[14px] mb-5 border ${item.bg} ${item.border} ${item.color} shadow-sm bg-[#0e0e10]`}>
                  {item.year}
                </div>
                <h4 className="text-white text-[14px] font-bold mb-2.5 px-1 leading-snug">{item.title}</h4>
                <p className="text-gray-400 text-[12px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Cards */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-6 max-w-[1100px] mx-auto">
          
          {/* PROBLEM FIRST Card */}
          <div className="rounded-[1.5rem] border border-border/50 bg-card dark:bg-[#121214] p-8 md:p-10 relative overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-12 items-center relative z-10">
              <div>
                <div className="w-12 h-12 rounded-[1rem] bg-[#2a1758]/50 border border-purple-500/20 flex items-center justify-center mb-6">
                  <Lightbulb className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-[11px] font-bold tracking-[0.2em] text-purple-400 uppercase mb-3">PROBLEM FIRST</div>
                <h3 className="text-3xl md:text-[34px] font-bold text-foreground tracking-tight leading-tight">Understand before<br />you build</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Free discovery call - no pitch, no package",
                  "Real workflows and real bottlenecks mapped",
                  "Tech recommendation only after business clarity",
                  "Solution shaped by the problem you actually have"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3.5 bg-background dark:bg-[#0a0a0c] border border-border/50 rounded-xl p-5 shadow-sm">
                    <div className="w-5 h-5 rounded-full bg-[#2a1758] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-purple-400 stroke-[3]" />
                    </div>
                    <span className="text-[13px] text-gray-300 font-medium leading-[1.4]">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Trusted from day 1 */}
            <div className="rounded-[1.5rem] border border-border/50 bg-card dark:bg-[#121214] p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start flex-col gap-4 mb-6">
                <div className="w-12 h-12 rounded-[1rem] bg-cyan-900/20 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-2">TRUSTED FROM DAY 1</div>
                  <h3 className="text-xl md:text-[24px] font-bold text-foreground tracking-tight">Confidential before conversation</h3>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                {[
                  "NDA signed before your idea is discussed",
                  "Visual prototype approved before code is written",
                  "What you approve is exactly what gets built",
                  "Full IP transferred - no lock-in, no exceptions"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-cyan-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-cyan-400 stroke-[3]" />
                    </div>
                    <span className="text-[14px] text-gray-400 leading-relaxed font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Build for outcomes */}
            <div className="rounded-[1.5rem] border border-border/50 bg-card dark:bg-[#121214] p-8 md:p-10 relative overflow-hidden">
              <div className="flex items-start flex-col gap-4 mb-6">
                <div className="w-12 h-12 rounded-[1rem] bg-emerald-900/20 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-400 uppercase mb-2">BUILD FOR OUTCOMES</div>
                  <h3 className="text-xl md:text-[24px] font-bold text-foreground tracking-tight">Success = your business works better</h3>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 mt-6">
                {[
                  "Two-week sprints, working software each time",
                  "We push back on scope that won’t serve users",
                  "Post-launch support built into every engagement",
                  "Long-term partnership - not a one-time transaction"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                    </div>
                    <span className="text-[14px] text-gray-400 leading-relaxed font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

/* ---------- MISSION & VISION ---------- */
function MissionVisionSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="site-container">
        
        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
           <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
             What We’re <span className="text-gradient">Building Toward</span>
           </h2>
        </div>

        {/* Top Row (2 Cards) */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
           {/* Card 1: Our Vision */}
           <div data-aos="fade-up" className="glass rounded-[2rem] p-10 lg:p-12 border-border/40 hover:border-primary/30 transition-all text-left">
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400">
                    <Eye className="w-5 h-5" />
                 </div>
                 <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <div className="space-y-6 text-[15px] text-muted-foreground leading-[1.8] border-l-2 border-white/10 pl-5">
                 <p>To empower businesses and people through digital solutions - creating more opportunities, simplifying lives, and building digital solutions that genuinely matters.</p>
                 <p>Solutions are at their most powerful when they're invisible - quietly removing friction, automating the dreaded task, opening doors that were previously closed.</p>
              </div>
           </div>

           {/* Card 2: Our Mission */}
           <div data-aos="fade-up" data-aos-delay="100" className="glass rounded-[2rem] p-10 lg:p-12 border-border/40 hover:border-cyan-500/30 transition-all text-left">
              <div className="flex items-center gap-4 mb-8">
                 <div className="flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                    <Compass className="w-5 h-5" />
                 </div>
                 <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <div className="text-[15px] text-muted-foreground leading-[1.8]">
                 <p>To deliver high-quality, innovative, and AI-powered digital solutions that keep our clients' businesses growing - while building a team and culture that people are proud to be part of.</p>
              </div>
           </div>
        </div>

        {/* Bottom Row (3 Cards) */}
        <div className="grid md:grid-cols-3 gap-6">
           {/* Card 3: Client-Centricity First */}
           <div data-aos="fade-up" data-aos-delay="150" className="glass rounded-[2rem] p-8 lg:p-10 border-border/40 hover:border-blue-500/30 transition-all text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-6">
                 <Target className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Client-Centricity First</h4>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">We start every engagement by understanding your business - your workflows, your constraints, your growth ambitions - before making a single technical recommendation.</p>
           </div>

           {/* Card 4: Innovation with Purpose */}
           <div data-aos="fade-up" data-aos-delay="200" className="glass rounded-[2rem] p-8 lg:p-10 border-border/40 hover:border-blue-500/30 transition-all text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-6">
                 <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Innovation with Purpose</h4>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">We adopt new tools - including AI-powered development workflows - when they make us genuinely better at solving client problems. Speed without compromise.</p>
           </div>

           {/* Card 5: Sustainable Growth */}
           <div data-aos="fade-up" data-aos-delay="250" className="glass rounded-[2rem] p-8 lg:p-10 border-border/40 hover:border-blue-500/30 transition-all text-left">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 mb-6">
                 <Rocket className="w-4 h-4" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">Sustainable Growth</h4>
              <p className="text-[14px] text-muted-foreground leading-[1.7]">We build long-term partnerships. When clients grow, we grow. This alignment of interests is why so many client relationships span years, not months.</p>
           </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function WorkingProcessSection() {
  const [activeStep, setActiveStep] = useState(4);

  const steps = [
    { 
      title: "Free Discovery Call", 
      desc: "We start by understanding your vision, workflows, and growth ambitions. A no-pressure conversation to explore if we're the right technical partner for your goals.",
      tags: ["Project Scope", "Technical Feasibility", "Timeline Estimation", "Goal Alignment"]
    },
    { 
      title: "NDA Before Discussion", 
      desc: "Your intellectual property is protected from day one. We sign a mutual Non-Disclosure Agreement before diving into any proprietary workflows or technical secrets.",
      tags: ["Confidentiality", "Mutual Protection", "Secure Communication", "IP Rights"]
    },
    { 
      title: "Visual Prototype First", 
      desc: "We build high-fidelity interactive prototypes before writing a single line of backend code, ensuring perfect alignment on the user experience and interface.",
      tags: ["Figma Design", "UX Architecture", "Interactive Mockups", "User Flow"]
    },
    { 
      title: "Transparent Sprints", 
      desc: "Weekly deployments, daily updates, and complete visibility into our progress. We operate with radical transparency so you never have to guess what's being built.",
      tags: ["Agile Methodology", "Weekly Demos", "Real-time Tracking", "Continuous Delivery"]
    },
    { 
      title: "AI-Augmented Engineering", 
      desc: "Cursor, Claude, Codex, Lovable - core tools, not novelties. Senior engineers own every decision.",
      tags: ["Cursor", "Claude", "Unit tests", "Edge-case review"]
    },
    { 
      title: "Post-Launch Partnership", 
      desc: "Support, v2 development, AI feature integration - we're built for long-term relationships.",
      tags: ["SLA Support", "Feature Expansion", "Performance Monitoring", "Scalability"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="site-container max-w-[1100px] max-h-[800px] mx-auto">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Working With Infynno Actually Looks Like
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[16px] md:text-[17px] text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We've built our entire process around making the common bad outcomes impossible.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="glass rounded-[2rem] p-8 md:p-14 border-border/40 relative bg-card/90 dark:bg-[#09090b]/80">
          
          {/* Progress Timeline */}
          <div className="relative flex justify-between items-start mb-16 hidden md:flex">
            {/* Connecting Line Container */}
            <div className="absolute top-[22px] left-[8.33%] right-[8.33%] h-[2px] bg-white/10 -z-10" />
            <div className="absolute top-[22px] left-[8.33%] right-[8.33%] h-[2px] -z-10">
              <div 
                className="h-full bg-[#1d4ed8] transition-all duration-500 ease-in-out" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }} 
              />
            </div>

            {steps.map((step, i) => {
              const isChecked = i <= activeStep;
              const isActive = i === activeStep;

              return (
                <div key={i} className="flex flex-col items-center flex-1 cursor-pointer group" onClick={() => setActiveStep(i)}>
                  <div className={`w-15 h-15 rounded-full flex items-center justify-center font-bold text-[13px] transition-all duration-300 mb-5 z-10
                    ${isChecked ? 'bg-[#1d4ed8] text-white shadow-[0_0_15px_rgba(29,78,216,0.3)]' : 'bg-card text-muted-foreground border border-border group-hover:border-foreground/30 dark:bg-[#18181b] dark:text-gray-300 dark:border-white/10 dark:group-hover:border-white/30'}`}>
                    {isChecked ? <Check className="w-5 h-5" /> : `0${i + 1}`}
                  </div>
                  <div className={`text-[11px] text-center font-medium max-w-[130px] transition-colors duration-300 ${isActive ? 'text-[#3b82f6]' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:hidden flex items-center gap-4 mb-8">
            <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm bg-[#1d4ed8] text-white">
              0{activeStep + 1}
            </div>
            <div className="flex-1 h-[2px] bg-white/10 relative">
              <div 
                className="absolute left-0 top-0 bottom-0 bg-[#1d4ed8] transition-all duration-500" 
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }} 
              />
            </div>
          </div>

          {/* <hr className="border-t border-white/10 mb-10 mx-auto max-w-[95%]" /> */}

          {/* Active Step Content */}
          <div className="min-h-[140px] transition-all duration-500 flex flex-col justify-center text-left pl-[2.5%] pr-[2.5%]">
            <h3 className="text-xl md:text-[24px] font-bold text-foreground mb-6 flex items-center gap-3">
              <span className="text-[#3b82f6] text-[13px] tracking-widest font-bold uppercase">STEP 0{activeStep + 1}</span>
              <span className="text-gray-500 font-normal text-lg">•</span>
              <span>{steps[activeStep].title}</span>
              {activeStep === 4 && (
                <span className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1e3a8a]/40 border border-[#1d4ed8]/30 text-[#60a5fa] text-[11px] font-semibold tracking-wide uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> AI
                </span>
              )}
            </h3>
            {steps[activeStep].desc && (
              <div className="text-gray-300 text-base md:text-[16px] leading-relaxed max-w-[700px] mb-8 font-normal">
                {steps[activeStep].desc}
              </div>
            )}
            
            {steps[activeStep].tags && steps[activeStep].tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-4">
                {steps[activeStep].tags.map((tag, idx) => (
                  <span key={idx} className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-[#60a5fa] text-[12px] font-medium tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-12 flex items-center justify-between pl-[2.5%] pr-[2.5%]">
            <div className="flex gap-4">
              <button 
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="px-5 py-2.5 rounded-full bg-transparent hover:bg-foreground/5 border border-border text-foreground dark:hover:bg-white/5 dark:border-white/10 dark:text-white text-[13px] font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center min-w-[95px] gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              
              <button 
                onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                disabled={activeStep === steps.length - 1}
                className="px-5 py-2.5 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-[13px] font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center min-w-[125px] gap-2"
              >
                {activeStep === steps.length - 2 ? 'Final step' : 'Next'} <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-gray-500 font-medium text-[13px]">
              {activeStep + 1} / {steps.length}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- TECH STACK ---------- */
function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("AI Ecosystem");

  const categories = [
    { 
      name: "AI Ecosystem", 
      icon: Sparkles,
      subtitle: "Intelligence layer for modern software delivery",
      desc: "Our engineers use AI tooling daily - OpenAI, Claude, Cursor, LangChain, and vector databases - as genuine force-multipliers for faster prototyping and smarter product features.",
      bestFor: "AI-powered product features, intelligent automation, chatbots, RAG pipelines, and teams that want to ship faster without cutting corners.",
      tech: ["OpenAI", "LangChain", "Claude", "RAG", "Hugging Face", "Pinecone", "LlamaIndex", "GenAI", "n8n", "Cursor", "Lovable", "UX Pilot"]
    },
    { 
      name: "Backend Dev", 
      icon: Server,
      subtitle: "Robust, scalable, and secure server-side architecture",
      desc: "We build high-performance backend systems using modern frameworks, ensuring your application can handle immense scale while maintaining sub-second response times.",
      bestFor: "Complex business logic, microservices, secure data processing, real-time communication, and scalable API development.",
      tech: ["Node.js", "Python", "Go", "Django", "NestJS", "GraphQL", "REST APIs", "Redis", "Kafka", "Docker", "Kubernetes"]
    },
    { 
      name: "Frontend & Mobile", 
      icon: Layout,
      subtitle: "Pixel-perfect, ultra-responsive user interfaces",
      desc: "We craft seamless digital experiences that look beautiful and perform flawlessly across all devices, combining modern web frameworks with native-like mobile development.",
      bestFor: "Interactive web applications, cross-platform mobile apps, dashboard interfaces, and high-conversion e-commerce platforms.",
      tech: ["React", "Next.js", "Vue.js", "React Native", "Flutter", "Tailwind CSS", "TypeScript", "Framer Motion", "Redux", "Zustand"]
    },
    { 
      name: "Data & Database", 
      icon: Database,
      subtitle: "Secure, reliable, and optimized data architecture",
      desc: "We design intelligent database structures that prioritize data integrity, quick retrieval, and seamless scaling as your user base grows.",
      bestFor: "High-volume data storage, complex querying, user management systems, analytics dashboards, and compliance-heavy applications.",
      tech: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase", "Prisma", "Elasticsearch", "Snowflake", "DynamoDB", "BigQuery"]
    },
    { 
      name: "Cloud & Infra", 
      icon: Cloud,
      subtitle: "Resilient global infrastructure and deployment",
      desc: "We deploy applications on world-class cloud providers with automated CI/CD pipelines, ensuring maximum uptime and effortless global scaling.",
      bestFor: "High-availability services, automated deployments, secure cloud hosting, scalable infrastructure, and disaster recovery.",
      tech: ["AWS", "Google Cloud", "Vercel", "Cloudflare", "Terraform", "GitHub Actions", "GitLab CI", "Nginx", "Linux", "Datadog"]
    },
    { 
      name: "Integrations", 
      icon: Plug,
      subtitle: "Connecting your business systems seamlessly",
      desc: "We integrate powerful third-party services and APIs to extend your application's capabilities, from payment processing to enterprise CRM syncing.",
      bestFor: "Payment gateways, CRM synchronization, third-party authentication, automated email systems, and enterprise software bridging.",
      tech: ["Stripe", "Twilio", "SendGrid", "Auth0", "Salesforce API", "HubSpot", "Zapier", "Plaid", "Slack API", "Shopify API"]
    }
  ];

  const activeData = categories.find(c => c.name === activeCategory) || categories[0];
  const ActiveIcon = activeData.icon;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="site-container max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-5">
            Built With Tools That <span className="text-gradient">Scale Businesses</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-[17px] text-gray-400 max-w-xl mx-auto leading-relaxed">
            We pick the right tool for every layer of the stack - not the trendiest one.
          </p>
        </div>

        {/* Categories Navigation */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat, i) => {
            const isActive = activeCategory === cat.name;
            const Icon = cat.icon;
            return (
              <button
                key={i}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300
                  ${isActive 
                    ? 'bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-foreground dark:text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                    : 'bg-transparent border border-border text-muted-foreground hover:text-foreground hover:bg-foreground/5 dark:border-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/5'
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#06b6d4]' : 'text-gray-500'}`} />
                {cat.name}
                {isActive && <Flame className="w-3.5 h-3.5 text-[#3b82f6] ml-1 opacity-80" />}
              </button>
            );
          })}
        </div>

        {/* Content Card */}
        <div data-aos="fade-up" data-aos-delay="200" className="glass rounded-[1.5rem] p-10 md:p-14 border-border/40 bg-card/90 dark:bg-[#09090b]/90 shadow-2xl relative overflow-hidden">
          {/* Subtle gradient glow in background */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#06b6d4]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 relative z-10">
            {/* Left Content */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-[#06b6d4]">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-[#06b6d4] tracking-tight">{activeData.name}</h3>
              </div>
              
              <h4 className="text-[16px] font-medium text-gray-300 mb-6">
                {activeData.subtitle}
              </h4>
              
              <p className="text-[15px] leading-[1.8] text-gray-400 mb-10">
                {activeData.desc}
              </p>
              
              <div className="bg-card dark:bg-[#121214] border border-border dark:border-white/5 rounded-[1rem] p-6 mt-auto">
                <p className="text-[14px] leading-relaxed text-gray-400">
                  <span className="font-bold text-foreground">Best for:</span> {activeData.bestFor}
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col pt-2 lg:pt-4">
              <h5 className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase mb-8">
                Technologies
              </h5>
              
              <div className="flex flex-wrap gap-3">
                {activeData.tech.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1e3a8a]/20 border border-[#1d4ed8]/30 transition-all hover:bg-[#1e3a8a]/30">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_5px_#3b82f6]" />
                    <span className="text-[13px] font-medium text-foreground dark:text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function ValuesSection() {
  const values = [
    { title: "Innovation First", desc: "We don't follow trends; we create the blueprints for what comes next in digital interaction." },
    { title: "Excellence Always", desc: "Precision is our baseline. We obsess over the details that others might never even notice." },
    { title: "Global Mindset", desc: "Our diversity is our strength, bringing perspectives from across the galaxy to every problem." },
    { title: "Client Success", desc: "We win when you win. Your mission becomes our obsession from the first meeting to launch." },
  ];

  // return (
  //   <section className="py-24 relative">
  //     <div className="absolute inset-0 pointer-events-none">
  //       <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
  //     </div>

  //     <div className="site-container relative z-10">
  //       <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
  //         <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
  //           Our Core <span className="text-gradient">Values</span>
  //         </h2>
  //         <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl text-muted-foreground">
  //           The principles that guide our antigravity approach.
  //         </p>
  //       </div>

  //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
  //         {values.map((v, i) => (
  //           <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass rounded-[2rem] p-8 lg:p-10 border-border/40 hover:border-primary/40 transition-colors group relative overflow-hidden flex flex-col h-full">
  //             <div className="absolute -right-4 -bottom-4 text-[120px] font-black font-display text-primary/5 group-hover:text-primary/10 transition-colors leading-none select-none">
  //               {i + 1}
  //             </div>
  //             <div className="relative z-10 flex flex-col flex-1">
  //               <div className="text-lg font-black font-display text-primary mb-4 tracking-widest uppercase">0{i + 1}</div>
  //               <h3 className="text-xl font-bold text-foreground mb-4">{v.title}</h3>
  //               <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

/* ---------- LOCATIONS ---------- */
function LocationsSection() {
  const locations = [
    { city: "San Francisco", addr: "101 Galaxy Way, CA 94103", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80" },
    { city: "London", addr: "Orbit Square, E1 6PX", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
    { city: "Singapore", addr: "24 Marina Nebula, 018981", img: "https://images.unsplash.com/photo-1525625232717-1210134440ad?w=800&q=80" },
  ];

  // return (
  //   <section className="py-24 relative">
  //     <div className="site-container">
  //       <div className="text-center mb-16 lg:mb-20 max-w-3xl mx-auto">
  //         <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Global Presence</h2>
  //         <p data-aos="fade-up" data-aos-delay="100" className="text-lg md:text-xl text-muted-foreground">Where you can find us across the globe.</p>
  //       </div>

  //       <div className="grid md:grid-cols-3 gap-8">
  //         {locations.map((l, i) => (
  //           <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="group relative overflow-hidden rounded-[2rem] glass border border-border/40 hover:border-primary/30 transition-all hover-lift">
  //             <div className="aspect-[4/3] overflow-hidden">
  //               <img src={l.img} alt={l.city} className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[800ms] opacity-70 group-hover:opacity-100" />
  //             </div>
  //             <div className="p-8 relative">
  //               <div className="absolute top-0 right-8 -translate-y-1/2 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:-translate-y-1/2 transition-all duration-500">
  //                 <ArrowUpRight className="h-5 w-5" />
  //               </div>
  //               <div className="flex items-center gap-3 mb-3">
  //                 <MapPin className="h-5 w-5 text-primary" />
  //                 <h3 className="text-2xl font-bold font-display">{l.city}</h3>
  //               </div>
  //               <p className="text-muted-foreground text-sm leading-relaxed pl-8">{l.addr}</p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}

/* ---------- CTA ---------- */
function CTASection() {
  // return (
  //   <section className="py-24 relative overflow-hidden">
  //     <div className="site-container max-w-5xl">
  //       <div data-aos="zoom-in" className="relative overflow-hidden rounded-[3rem] p-12 md:p-20 text-center glass border border-primary/20 bg-primary/5">
  //         <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent" />
  //         <div className="relative z-10">
  //           <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">Join Our Antigravity Journey</h2>
  //           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
  //             Let's create something extraordinary together. Build the future of your brand beyond the atmosphere.
  //           </p>
  //           <Link to="/contact" className="inline-flex min-h-[56px] items-center justify-center gap-2 rounded-full bg-gradient-brand px-10 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
  //             Work With Us <Rocket className="h-5 w-5" />
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}

/* ---------- FAQ ---------- */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    { 
      question: "What is Infynux Solutions?", 
      answer: "Infynux Solutions LLP is a custom software development company founded in 2018 in Ahmedabad, India. We build web applications, mobile apps, SaaS platforms, MVPs, and AI-powered digital products for startups, SMBs, and enterprises across Australia, USA, UK, Canada, Norway, Netherlands, and Singapore." 
    },
    { 
      question: "What kind of team will work on my project?", 
      answer: "You will have a dedicated team of senior engineers, product designers, and project managers tailored to your specific technical requirements and project scope." 
    },
    { 
      question: "How many projects has Infynux delivered?", 
      answer: "We have successfully delivered over 150 digital products across various industries globally, maintaining a strong track record of success." 
    },
    { 
      question: "What industries does Infynux work with?", 
      answer: "We have deep expertise in FinTech, Healthcare, E-commerce, Logistics, EdTech, and AI-driven platforms, though our technical capabilities are industry-agnostic." 
    },
    { 
      question: "Is Infynux rated on Upwork and Clutch?", 
      answer: "Yes, we are highly rated on both platforms, maintaining a Top Rated Plus status on Upwork and consistent 5-star reviews from our clients on Clutch." 
    },
    { 
      question: "What is Infynux approach to client confidentiality?", 
      answer: "We sign strict NDAs before any discussion and follow enterprise-grade security protocols to protect your intellectual property and sensitive data." 
    },
    { 
      question: "How does Infynux use AI in software development?", 
      answer: "We leverage AI for both our internal development velocity and by integrating advanced AI capabilities like LLMs and RAG pipelines directly into client products." 
    }
  ];

  return (
    <section className="py-24 relative bg-background dark:bg-[#0a0a0a]">
      <div className="site-container max-w-[850px] mx-auto">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="font-display text-4xl md:text-[44px] font-bold tracking-tight text-foreground mb-5">
            Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-400">Questions</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-[17px] text-[#94a3b8]">
            Common questions about Infynno Solutions.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className={`cursor-pointer overflow-hidden transition-all duration-300 border rounded-2xl ${
                  isOpen 
                    ? 'bg-muted dark:bg-[#100d1e] border-indigo-500/20' 
                    : 'bg-card dark:bg-[#121214] border-border dark:border-white/5 hover:border-foreground/20 dark:hover:border-white/10'
                }`}
              >
                <div className="p-6 md:p-8 flex gap-5">
                  <div className={`shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-bold transition-colors ${
                    isOpen ? 'bg-primary text-primary-foreground' : 'bg-card border border-border text-muted-foreground dark:bg-white/5 dark:border-transparent dark:text-gray-400'
                  }`}>
                    0{i + 1}
                  </div>
                  
                  <div className="flex-1 pt-2.5">
                    <div className="flex justify-between items-center leading-none">
                      <h3 className="text-[17px] md:text-[18px] font-bold text-foreground">
                        {faq.question}
                      </h3>
                      <div className="shrink-0 ml-4 transition-transform duration-300 flex items-center">
                        {isOpen ? <X className="w-5 h-5 text-indigo-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
                      </div>
                    </div>
                    
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="text-[15px] leading-relaxed text-gray-400 pr-4 md:pr-12 pb-1">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- LETS TALK ---------- */
function LetsTalkSection() {
  return (
    <section className="py-24 relative bg-background dark:bg-[#0a0a0a]">
      <div className="site-container max-w-[1100px] mx-auto">
        <div data-aos="fade-up" className="rounded-[2rem] border border-border dark:border-white/5 bg-card dark:bg-[#0e0e10] p-8 md:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 mb-12">
            {/* Left Content */}
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border dark:border-white/10 w-fit mb-8 bg-card dark:bg-white/5">
                <Calendar className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-muted-foreground dark:text-gray-400 uppercase">LET'S TALK</span>
              </div>
              
              <h2 className="font-display text-4xl md:text-[44px] font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                Let’s Build Something That<br />Matters
              </h2>
              
              <p className="text-[15px] md:text-[17px] text-gray-400 leading-[1.7] mb-10 max-w-xl">
                Whether you’re a founder with an idea, an SMB ready to replace manual operations with smart software, or an enterprise evaluating a long-term technology partner - we’d like to start with a conversation.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <a href="/contact" className="inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 rounded-full text-[14px] font-medium transition-colors shadow-[0_0_20px_rgba(29,78,216,0.3)]">
                  <Calendar className="w-4 h-4" />
                  Connect to call
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
                
                <a href="mailto:sales@infynux.com" className="inline-flex items-center gap-2.5 bg-card dark:bg-[#131313] border border-border dark:border-white/10 hover:bg-muted dark:hover:bg-white/10 text-foreground dark:text-white px-7 py-3.5 rounded-full text-[14px] font-medium transition-colors">
                  <Mail className="w-4 h-4" />
                  Email support@infynuxsolutions.in
                </a>
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-card dark:bg-[#121214] border border-border dark:border-white/5 rounded-[1.5rem] p-8 relative self-start">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#3b82f6] uppercase mb-8">START BUILDING</h3>
              
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-[13.5px] top-[14px] bottom-[14px] w-[2px] bg-[#1e3a8a]/50" />
                
                <div className="flex flex-col gap-7">
                  {["1. Book a discovery call", "2. Share your goals", "3. Get a clear plan", "4. Start building"].map((step, i) => (
                    <div key={i} className="flex items-center gap-5 relative z-10">
                      <div className="w-7 h-7 rounded-full bg-[#0a0a0c] border border-[#1d4ed8]/50 flex items-center justify-center text-[12px] font-medium text-[#60a5fa] shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-[14px] font-medium text-gray-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-t border-white/10 mb-8" />
          
          {/* Bottom Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/5 text-[12px] text-muted-foreground dark:text-gray-400 font-medium">
              <span>⭐</span> Top Rated Plus - Upwork
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/5 text-[12px] text-muted-foreground dark:text-gray-400 font-medium">
              <span className="text-gray-500">★</span> 5-Star - Clutch
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/5 text-[12px] text-muted-foreground dark:text-gray-400 font-medium">
              <span>✅</span> 100% Job Success
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border dark:border-white/10 bg-card dark:bg-white/5 text-[12px] text-muted-foreground dark:text-gray-400 font-medium">
              <span>🚀</span> 150+ Products Delivered
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
