import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import {
  Sparkles, Users, Lightbulb, BookOpen, Target,
  Monitor, Server, Layers, PenTool, BrainCircuit,
  Megaphone, Handshake, GraduationCap, Smartphone, Video,
  ArrowRight
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers | INFYNUX Solutions" },
      { name: "description", content: "Discover the career paths, culture, values, learning opportunities, and creative environment at INFYNUX Solutions." },
    ],
  }),
});

function CareersPage() {
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
        <CareersHero />
        <CareersIntro />
        <WhyWorkWithUs />
        <CareerPaths />
        <LifeAtInfynux />
        <CultureSection />
        <GrowthSection />
        <CareersClosing />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

function CareersHero() {
  return (
    <section className="relative pb-16 lg:pb-24 pt-32 lg:pt-40 overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center items-center">
        <div className="bg-primary/10 absolute -top-40 size-[min(800px,100vw)] rounded-full blur-[120px]" />
        <div className="bg-purple-500/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px]" />
      </div>

      <div className="site-container max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          CAREERS AT INFYNUX
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="font-display text-[clamp(2.75rem,6vw,5rem)] leading-[1.1] font-bold tracking-tight mb-8 text-foreground">
          Build What’s Next <span className="text-gradient">With Us.</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          Join a team of creative minds, engineers, and problem-solvers shaping meaningful digital experiences.
        </p>

        <div data-aos="fade-up" data-aos-delay="250" className="mb-10">
          <button 
            onClick={() => {
              const element = document.getElementById("career-paths");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 group"
          >
            See Open Positions
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap justify-center gap-3 md:gap-4 mt-2">
          <div className="px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all shadow-sm">
            Creative & Collaborative Culture
          </div>
          <div className="px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all shadow-sm">
            Continuous Learning
          </div>
          <div className="px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all shadow-sm">
            Meaningful Digital Work
          </div>
        </div>
      </div>
    </section>
  );
}

function CareersIntro() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="site-container max-w-3xl mx-auto text-center">
        <h2 data-aos="fade-up" className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
          Where Ideas Become Impact.
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-base md:text-[17px] leading-[1.8] text-muted-foreground">
          At INFYNUX, we believe great digital experiences are created by people who are curious, collaborative, and passionate about what they do. We create an environment where ideas are encouraged, skills are continuously developed, and every contribution has meaning.
        </p>
      </div>
    </section>
  );
}

function WhyWorkWithUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const reasons = [
    { title: "Grow With Purpose",      desc: "Work on real-world projects and continuously develop your skills." },
    { title: "Ideas Matter",           desc: "Every perspective can bring a new idea, solution, or possibility." },
    { title: "Collaborative Culture",  desc: "Learn, create, and solve problems together as a team." },
    { title: "Keep Learning",          desc: "Explore new technologies, ideas, and modern ways of working." },
    { title: "Meaningful Work",        desc: "Build digital experiences and solutions that create real value." },
  ];

  return (
    <section className="py-28 relative bg-card/30 border-y border-border/50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40%] h-[80%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="site-container max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Why Work With INFYNUX?
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A culture built around creativity, collaboration, continuous learning, and meaningful work.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          {/* LEFT: Large typographic element */}
          <div data-aos="fade-right" className="lg:col-span-2 flex flex-col justify-start lg:sticky lg:top-32">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-4">Our Culture</p>
            <div className="relative select-none">
              <span
                className="font-display font-bold leading-none tracking-tighter block text-[clamp(4.5rem,9vw,6rem)] text-gradient opacity-90"
                aria-hidden="true"
              >
                WHY<br />INFYNUX
              </span>
              <div className="absolute -bottom-1 left-0 w-12 h-[3px] bg-primary rounded-full" />
            </div>
            <p className="mt-10 text-muted-foreground text-base leading-relaxed max-w-xs">
              We build a space where curious minds thrive, ideas are welcomed, and every contribution drives real impact.
            </p>
          </div>

          {/* RIGHT: Numbered rows */}
          <div data-aos="fade-left" data-aos-delay="100" className="lg:col-span-3 flex flex-col">
            {reasons.map((reason, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group flex items-start gap-6 py-7 border-b border-border/50 first:border-t first:border-border/50 cursor-default transition-all duration-300 ${
                    isHovered ? "px-3" : "px-0"
                  }`}
                >
                  {/* Number */}
                  <span
                    className={`font-display text-sm font-bold tracking-widest flex-shrink-0 mt-1 transition-all duration-300 ${
                      isHovered ? "text-gradient" : "text-muted-foreground/50"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-display font-bold tracking-tight transition-all duration-300 ${
                        isHovered
                          ? "text-[clamp(1.25rem,2.5vw,1.5rem)] text-foreground"
                          : "text-[clamp(1.1rem,2.2vw,1.3rem)] text-foreground/80"
                      }`}
                    >
                      {reason.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-sm leading-relaxed transition-colors duration-300 ${
                        isHovered ? "text-muted-foreground" : "text-muted-foreground/60"
                      }`}
                    >
                      {reason.desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`flex-shrink-0 mt-1 transition-all duration-300 ${
                      isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerPaths() {
  const paths = [
    { 
      title: "Full Stack Developer", 
      slug: "full-stack-developer",
      desc: "Build complete digital solutions across frontend, backend, APIs, databases, and modern web technologies.", 
      icon: Layers 
    },
    { 
      title: "App Developer", 
      slug: "app-developer",
      desc: "Create intuitive, responsive, and engaging mobile applications using modern app development technologies.", 
      icon: Smartphone 
    },
    { 
      title: "Video Editor", 
      slug: "video-editor",
      desc: "Create compelling visual content, edit engaging videos, and transform ideas into polished digital experiences.", 
      icon: Video 
    }
  ];

  return (
    <section id="career-paths" className="py-24 relative bg-background">
      <div className="site-container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            <span className="text-gradient block mt-2 md:inline md:mt-0">Explore </span>Career Paths
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the diverse roles where creative thinking, technology, and collaboration come together at INFYNUX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paths.map((path, i) => {
            const Icon = path.icon;
            return (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 50} className="rounded-2xl border border-border bg-card p-8 hover:border-primary/40 hover:-translate-y-1 transition-all group flex flex-col items-start h-full shadow-sm hover:shadow-md">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-foreground mb-6 group-hover:bg-primary group-hover:text-white transition-colors group-hover:scale-105 duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{path.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">{path.desc}</p>
                <Link 
                  to={`/careers/${path.slug}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 group/btn w-full"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LifeAtInfynux() {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30 border-y border-border/50">
      <div className="site-container max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background text-foreground text-xs font-bold tracking-widest uppercase mb-6" data-aos="fade-up">
          Life at INFYNUX
        </div>
        <h2 data-aos="fade-up" data-aos-delay="100" className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-12 text-foreground">
          More than a workplace. <span className="text-gradient">A space to create, learn and grow.</span>
        </h2>
        
        <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden aspect-square md:aspect-auto">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80" alt="Creative discussions" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-square">
            <img src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?w=500&q=80" alt="Learning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="col-span-2 rounded-2xl overflow-hidden aspect-[2/1]">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80" alt="Project collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CultureSection() {
  const values = [
    { title: "Creativity", desc: "Turn ideas into thoughtful and meaningful experiences." },
    { title: "Curiosity", desc: "Keep asking questions, exploring possibilities, and learning." },
    { title: "Collaboration", desc: "Work together, share knowledge, and solve challenges as a team." },
    { title: "Ownership", desc: "Take responsibility, make decisions, and follow ideas through." },
    { title: "Continuous Learning", desc: "Keep developing skills through projects, technology, and experience." },
    { title: "Innovation", desc: "Challenge the usual and explore smarter ways to solve problems." },
    { title: "Respect", desc: "Value people, perspectives, ideas, and different ways of thinking." }
  ];
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // return (
  //   <section className="relative bg-background overflow-hidden border-y border-border/50">
  //     {/* Subtle background glow */}
  //     <div className="pointer-events-none absolute inset-0 -z-10">
  //       <div className="absolute right-0 top-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px]" />
  //     </div>

  //     <div className="site-container max-w-7xl mx-auto">
  //       <div className="flex flex-col lg:flex-row items-start lg:gap-24 relative py-16 md:py-24">
          
  //         {/* LEFT: Sticky intro */}
  //         <div className="lg:w-5/12 lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col justify-center mb-16 lg:mb-0 z-10">
  //           <p data-aos="fade-right" className="text-xs font-bold tracking-[0.25em] uppercase text-primary mb-6">
  //             Our Culture
  //           </p>
  //           <h2 data-aos="fade-right" data-aos-delay="100" className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold tracking-tight text-foreground mb-8">
  //             Built on Curiosity.<br />Driven by Collaboration.
  //           </h2>
  //           <p data-aos="fade-right" data-aos-delay="200" className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
  //             At INFYNUX, culture is built through the way we think, work, learn, and support one another. We encourage curiosity, respect different perspectives, and create space for people to take ownership of their work.
  //           </p>
  //         </div>

  //         {/* RIGHT: Scrolling values */}
  //         <div className="lg:w-7/12 lg:pt-[30vh] lg:pb-[30vh]">
  //           <div className="flex flex-col">
  //             {values.map((v, i) => {
  //               const isActive = activeIndex === i;
  //               return (
  //                 <div 
  //                   key={i} 
  //                   ref={(el) => itemsRef.current[i] = el}
  //                   data-index={i}
  //                   className={`flex items-start gap-6 py-12 lg:py-16 border-b border-border/50 first:border-t first:border-border/50 transition-all duration-700 ease-out ${
  //                     isActive ? "opacity-100 translate-x-0 lg:scale-100" : "opacity-40 lg:opacity-30 translate-x-0 lg:scale-[0.98]"
  //                   }`}
  //                 >
  //                   <div className="flex-shrink-0 mt-1.5">
  //                     <span className={`font-display text-sm font-bold tracking-widest transition-colors duration-700 ${isActive ? "text-primary" : "text-muted-foreground"}`}>
  //                       {String(i + 1).padStart(2, '0')}
  //                     </span>
  //                   </div>
  //                   <div>
  //                     <h3 className={`text-2xl md:text-3xl font-bold tracking-tight mb-4 transition-colors duration-700 ${isActive ? "text-foreground" : "text-foreground/70"}`}>
  //                       {v.title}
  //                     </h3>
  //                     <p className={`text-lg md:text-xl leading-relaxed transition-colors duration-700 ${isActive ? "text-muted-foreground" : "text-muted-foreground/50"}`}>
  //                       {v.desc}
  //                     </p>
  //                   </div>
  //                 </div>
  //               );
  //             })}
  //           </div>
  //         </div>
          
  //       </div>
  //     </div>
  //   </section>
  // );
}

function GrowthSection() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Explore",
      desc: "Discover new technologies, ideas, tools, and possibilities."
    },
    {
      icon: BookOpen,
      title: "Learn",
      desc: "Build knowledge through practical projects, mentorship, and collaboration."
    },
    {
      icon: PenTool,
      title: "Create",
      desc: "Turn what you learn into real digital products, solutions, and experiences."
    },
    {
      icon: Target,
      title: "Grow",
      desc: "Take on new challenges, expand your skills, and become more confident in what you do."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-card/20 overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="site-container max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <h2 data-aos="fade-up" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-foreground">
            Keep Growing. <span className="text-gradient block mt-2 md:inline md:mt-0">Keep Creating.</span>
          </h2>
          <h3 data-aos="fade-up" data-aos-delay="50" className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Your growth should never stop at your current role.
          </h3>
          <p data-aos="fade-up" data-aos-delay="100" className="text-lg text-muted-foreground leading-relaxed">
            We believe growth happens when people are given opportunities to explore, experiment, learn, and take on new challenges. We encourage people to explore new technologies, take ownership of challenging projects, learn from experienced teammates, and continuously expand what they can do. Every project, discussion, experiment, and challenge becomes part of the learning journey.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative mb-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-0 right-0 h-[1px] bg-border/50 z-0">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </div>

          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="relative flex flex-col items-start lg:items-center text-left lg:text-center group">
                  {/* Vertical Line (Mobile/Tablet) */}
                  {i !== steps.length - 1 && (
                    <div className="lg:hidden absolute top-[90px] bottom-[-48px] left-[45px] w-[1px] bg-border/50" />
                  )}

                  <div className="flex lg:flex-col items-center lg:items-center gap-6 lg:gap-0 w-full lg:w-auto">
                    {/* Icon Circle */}
                    <div className="w-[90px] h-[90px] rounded-full bg-background border border-border/60 flex items-center justify-center shrink-0 shadow-sm group-hover:border-primary/40 group-hover:shadow-md transition-all duration-500 lg:mb-8 relative z-10">
                      <div className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Icon className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-500 relative z-10" />
                      
                      {/* Small accent circle on hover */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100" />
                    </div>

                    <div className="flex-1 lg:flex-none">
                      <div className="text-xs font-bold tracking-widest text-primary mb-2">
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h4 className="text-xl font-bold tracking-tight text-foreground mb-3">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed lg:px-4">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-up" className="text-center pt-8 border-t border-border/40">
          <p className="text-lg font-medium text-foreground/80 italic">
            “Every challenge is an opportunity to learn. Every project is an opportunity to grow.”
          </p>
        </div>
      </div>
    </section>
  );
}

function CareersClosing() {
  const highlights = [
    {
      title: "Learn Through Experience",
      desc: "Work on meaningful digital projects and discover new technologies through hands-on experience."
    },
    {
      title: "Grow Through Collaboration",
      desc: "Share ideas, learn from others, and grow by solving real challenges together."
    },
    {
      title: "Create With Impact",
      desc: "Turn your skills and ideas into digital experiences that create meaningful value."
    }
  ];

  return (
    <section className="py-24 md:py-24 relative bg-background overflow-hidden border-t border-border/50">
      {/* Background Glows */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-primary/10 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="site-container max-w-5xl mx-auto relative z-10">
        {/* Top Content */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <h2 data-aos="fade-up" className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-foreground">
            Create. Learn. Grow. <span className="text-gradient block mt-2 md:inline md:mt-0">Together.</span>
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              At INFYNUX, we believe the best work happens when people have the freedom to explore ideas, learn continuously, take ownership, and grow alongside a collaborative team.
            </p>
            <p data-aos="fade-up" data-aos-delay="150">
              Every project brings a new challenge, every challenge creates an opportunity to learn, and every contribution helps us build something meaningful together.
            </p>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={200 + (i * 100)} 
              className="group flex flex-col pb-8 border-b border-border/40 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-sm font-display font-bold tracking-widest text-primary/70 group-hover:text-primary transition-colors duration-500 mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-muted-foreground leading-relaxed pl-[44px] transition-colors duration-500 group-hover:text-muted-foreground/90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
