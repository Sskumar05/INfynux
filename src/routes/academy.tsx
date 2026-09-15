import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import {
  GraduationCap, ArrowRight, ArrowUpRight, BrainCircuit,
  Target, Zap, Compass, CheckCircle, MessagesSquare,
  BookOpen, Terminal, Wrench, TrendingUp, Layout, Briefcase, Map, Users,
  ChevronLeft, ChevronRight
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

// IMPORTANT: Do NOT change this placeholder. It will be manually replaced before deployment.
const ACADEMY_WEBSITE_URL = "https://www.infynuxacademy.in/";
const WHATSAPP_URL = "https://whatsapp.com/channel/0029VbCVGAtBVJkxGWCc4002";

export const Route = createFileRoute("/academy")({
  component: AcademyPage,
  head: () => ({
    meta: [
      { title: "INFYNUX Academy | Learn. Build. Grow." },
      { name: "description", content: "Build practical skills, work on real-world projects, and grow with industry-focused learning at INFYNUX Academy." },
    ],
  }),
});

function AcademyPage() {
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
      
      <main className="relative overflow-hidden" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <WhyLearnWithUs />
        <WhatYouWillGain />
        <FromLearningToBuilding />
        <AcademyExperience />
        <FinalCTASection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative pb-12 lg:pb-16 pt-28 lg:pt-36 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-primary/20 absolute -top-40 left-1/2 size-[min(900px,120vw)] -translate-x-1/2 rounded-full blur-[140px] md:-top-48 md:blur-[160px]" />
      </div>

      <div className="site-container">
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* <div data-aos="fade-up" className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-[0_0_20px_rgba(var(--primary),0.1)]">
            <GraduationCap className="h-4 w-4" />
            <span>INFYNUX Academy</span>
          </div> */}

          <h1 data-aos="fade-up" data-aos-delay="100" className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-bold tracking-tight mb-6">
            <span className="block">Learn. Create. Innovate.</span>
            <span className="text-gradient block"> Grow. Succeed.</span>
          </h1>
          
          <p data-aos="fade-up" data-aos-delay="200" className="max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground mb-10 mx-auto">
            Build practical skills, work on real-world projects, and grow with industry-focused learning.
          </p>
          
          <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-4 flex-wrap justify-center">
            <a href={ACADEMY_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gradient-brand px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 hover:scale-[1.03] transition-transform">
              Explore Academy <ArrowRight className="h-4 w-4" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl glass px-7 py-3 text-sm font-semibold text-foreground border border-border/50 hover:bg-muted/40 transition-colors">
              Join WhatsApp Community <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ACADEMY ---------- */
function AboutSection() {
  return (
    <section className="py-12 lg:py-16 relative">
      <div className="site-container">
        <div data-aos="fade-up" className="glass rounded-[2rem] p-8 md:p-12 border border-border/50 relative overflow-hidden bg-muted/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Where Skills Meet Real-World Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              INFYNUX Academy is built to help learners develop practical, industry-relevant skills through hands-on learning, guided practice, and real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY LEARN WITH US ---------- */
function WhyLearnWithUs() {
  const points = [
    {
      title: "Industry-Focused Learning",
      description: "Learn skills aligned with real-world industry requirements.",
      icon: Target
    },
    {
      title: "Hands-On Experience",
      description: "Practice concepts through projects and practical activities.",
      icon: Zap
    },
    {
      title: "Expert Guidance",
      description: "Learn with structured guidance and practical insights.",
      icon: BrainCircuit
    },
    {
      title: "Career-Oriented Growth",
      description: "Build confidence, skills, and experience for future opportunities.",
      icon: Compass
    }
  ];

  return (
    <section className="py-12 lg:py-16">
      <div className="site-container">
        <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Why Learn With Us</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {points.map((point, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="glass group rounded-2xl p-6 md:p-8 border border-border/50 hover:bg-muted/30 transition-all hover:-translate-y-1">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT YOU'LL GAIN ---------- */
function WhatYouWillGain() {
  const gains = [
    "Practical Knowledge",
    "Real-World Project Experience",
    "Technical Skill Development",
    "Problem-Solving Confidence",
    "Industry Exposure",
    "Continuous Learning"
  ];

  return (
    <section className="py-12 lg:py-16 relative bg-muted/10 border-y border-border/50">
      <div className="site-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">What You’ll Gain</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md leading-relaxed">
              A comprehensive learning experience designed to give you the tools and confidence to succeed in the digital world.
            </p>
          </div>
          
          <div data-aos="fade-left" className="grid sm:grid-cols-2 gap-4">
            {gains.map((gain, i) => (
              <div key={i} className="flex items-start gap-3 glass p-4 rounded-xl border border-border/50 hover:bg-muted/30 transition-colors">
                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="font-medium text-[15px]">{gain}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FROM LEARNING TO BUILDING ---------- */
function FromLearningToBuilding() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Learn",
      desc: "Build a strong understanding of the fundamentals.",
      icon: BookOpen
    },
    {
      title: "Practice",
      desc: "Apply what you learn through practical exercises.",
      icon: Terminal
    },
    {
      title: "Build",
      desc: "Turn your knowledge into real-world projects.",
      icon: Wrench
    },
    {
      title: "Improve",
      desc: "Refine your skills through continuous learning and feedback.",
      icon: TrendingUp
    }
  ];

  const handlePrev = () => {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  };

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep(activeStep + 1);
  };

  const ActiveIcon = steps[activeStep].icon;

  return (
    <section className="py-12 lg:py-16">
      <div className="site-container">
        <div className="text-center mb-6 lg:mb-12" data-aos="fade-up">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">From Learning to Building</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Connecting line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          {/* Mobile Layout (Carousel) */}
          <div className="md:hidden flex items-center justify-between w-full max-w-sm mx-auto relative z-10 pt-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              disabled={activeStep === 0}
              className="size-10 rounded-full border border-border/50 flex items-center justify-center text-primary bg-background hover:bg-primary/5 disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0 shadow-sm"
              aria-label="Previous step"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Active Step Content */}
            <div className="flex-1 flex flex-col items-center text-center px-4 animate-in fade-in slide-in-from-bottom-2 duration-500" key={activeStep}>
              <div className="size-20 rounded-2xl glass border border-border/50 flex items-center justify-center mb-6 text-primary shadow-xl shadow-black/5 bg-background">
                <ActiveIcon className="h-8 w-8 opacity-90" />
              </div>
              <h3 className="text-xl font-bold mb-2">{steps[activeStep].title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">
                {steps[activeStep].desc}
              </p>
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
              className="size-10 rounded-full border border-border/50 flex items-center justify-center text-primary bg-background hover:bg-primary/5 disabled:opacity-30 disabled:pointer-events-none transition-colors shrink-0 shadow-sm"
              aria-label="Next step"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Layout (Grid) */}
          <div className="hidden md:grid md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100} className="flex flex-col items-center text-center group">
                <div className="size-24 rounded-2xl glass border border-border/50 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300 shadow-xl shadow-black/5 bg-background">
                  <step.icon className="h-10 w-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ACADEMY EXPERIENCE ---------- */
function AcademyExperience() {
  const experiences = [
    {
      title: "Practical Learning",
      desc: "Focus on understanding concepts through practical application.",
      icon: Layout
    },
    {
      title: "Real-World Projects",
      desc: "Build projects that help turn knowledge into experience.",
      icon: Briefcase
    },
    {
      title: "Guided Learning",
      desc: "Learn with structured guidance and useful feedback.",
      icon: Map
    },
    {
      title: "Community & Growth",
      desc: "Stay connected, share knowledge, and continue improving.",
      icon: Users
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-muted/5 border-t border-border/50">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="lg:w-1/3" data-aos="fade-right">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Learn Through Experience</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our approach ensures that every concept you learn is backed by real-world application, structured guidance, and a supportive environment.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 w-full" data-aos="fade-left">
            {experiences.map((exp, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors">
                <div className="shrink-0 mt-1">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <exp.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{exp.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTASection() {
  return (
    <section className="pt-12 lg:pt-16 pb-2 lg:pb-4 border-t border-border/50 relative overflow-hidden">
      <div className="h-[180%] absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none " />
      <div className="site-container text-center relative z-10">
        <div data-aos="fade-up" className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Explore our dedicated Academy platform and discover practical opportunities to build your skills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ACADEMY_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-brand px-8 py-3 text-base font-bold text-white shadow-lg shadow-primary/25 hover:scale-[1.03] transition-transform">
              Explore Academy <ArrowRight className="h-5 w-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] w-full sm:w-auto items-center justify-center gap-2 rounded-xl glass px-8 py-3 text-sm font-semibold text-foreground border border-border/50 hover:bg-muted/40 transition-colors">
              Join WhatsApp Community <MessagesSquare className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
