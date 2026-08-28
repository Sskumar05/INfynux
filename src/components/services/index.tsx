import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Terminal,
  Activity,
  Code2,
  Calendar,
  Lock,
  Lightbulb,
  Globe,
  Star,
  Plus,
  Minus,
  Layers
} from "lucide-react";
import type { ServiceDetails } from "../../data/servicesData";

// --- Hero Section ---
export function ServiceHero({ service }: { service: ServiceDetails }) {
  return (
    <section className="pt-28 lg:pt-32 pb-16 relative overflow-hidden bg-background">
      <div className="site-container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold mb-6">
              <SparklesIcon className="w-4 h-4 text-primary" /> {service.name} Solutions
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              <span className="text-foreground block">{service.name.split(" ")[0]} Platforms</span>
              <span className="bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">Built to Scale.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="relative inline-flex min-h-[44px] items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold will-change-transform bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/50 hover:scale-[1.02] transition-transform">
                Start Your Project
              </Link>
              <Link to="/contact" className="relative inline-flex min-h-[44px] items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-3.5 text-sm font-semibold will-change-transform glass text-foreground border border-border/70 bg-background/50 shadow-sm hover:border-primary/40 hover:bg-background/70 hover:shadow-[0_0_28px_color-mix(in_oklch,var(--primary)_20%,transparent)] transition-all">
                Book Discovery Call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-muted-foreground"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500"/> Prototype First</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-muted-foreground"><Lock className="w-3.5 h-3.5 text-blue-400"/> NDA on Day 1</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/50 text-xs font-medium text-muted-foreground"><Lightbulb className="w-3.5 h-3.5 text-amber-400"/> Full IP Ownership</span>
            </div>
          </div>

          {/* Right Content - Service Visual */}
          <div className="relative w-full rounded-2xl border border-border/70 bg-card overflow-hidden shadow-2xl shadow-primary/10 hidden lg:block">
            {service.heroVisual.image ? (
              /* Real service-specific image */
              <img
                src={service.heroVisual.image}
                alt={service.heroVisual.alt || `${service.name} interface`}
                className="w-full h-[430px] object-cover object-top"
                loading="eager"
              />
            ) : (
              /* Fallback animated mock dashboard */
              <>
                {/* Chrome Bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/30 border-b border-border/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto bg-background/50 border border-border/40 rounded-md px-3 py-1 text-xs text-muted-foreground flex items-center gap-2">
                    <Lock className="w-3 h-3" /> {service.heroVisual.urlLabel}
                  </div>
                </div>
                {/* Mock Layout */}
                <div className="grid grid-cols-[200px_1fr] h-[400px]">
                  {/* Sidebar */}
                  <div className="border-r border-border/50 bg-background/30 p-4 flex flex-col gap-3">
                    <div className="h-2 w-16 bg-muted rounded-full mb-4"></div>
                    <div className="h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center px-3 gap-2">
                      <Activity className="w-4 h-4 text-primary" /> <span className="text-xs font-medium text-primary">{service.heroVisual.sidebarActive}</span>
                    </div>
                    <div className="h-8 rounded-md hover:bg-muted/30 transition-colors flex items-center px-3 gap-2">
                      <Code2 className="w-4 h-4 text-muted-foreground" /> <span className="text-xs font-medium text-muted-foreground">{service.heroVisual.sidebarInactive}</span>
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="p-6 bg-card dark:bg-[#09090b] relative rounded-br-2xl">
                    <div className="absolute top-6 right-6 flex flex-col items-end gap-2">
                      {service.heroVisual.metrics.map((metric, i) => (
                        <div key={i} className="px-2 py-1 rounded border border-border/40 bg-background/50 text-[10px] text-muted-foreground flex items-center gap-1">
                          {i === 0 ? <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> : <Terminal className="w-3 h-3" />} {metric}
                        </div>
                      ))}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2"><Activity className="w-5 h-5 text-primary"/> {service.heroVisual.mainHeading}</h4>
                    <div className="flex items-end gap-3 h-40 mb-6 border-b border-border/50 pb-2">
                      {service.heroVisual.chartData.map((h, i) => (
                        <div key={i} className="w-8 bg-gradient-to-t from-primary/20 to-primary/80 rounded-t-sm" style={{ height: `${h}px` }}></div>
                      ))}
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      <div className="text-emerald-500 dark:text-emerald-400">{service.heroVisual.terminal.user} <span className="text-foreground">{service.heroVisual.terminal.command}</span></div>
                      <div className="mt-1">{service.heroVisual.terminal.output1}</div>
                      <div className="mt-1">{service.heroVisual.terminal.output2} <span className="text-emerald-500 dark:text-emerald-400">{service.heroVisual.terminal.status}</span></div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// Helper icon for Sparkle
function SparklesIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  );
}

// --- Features Grid (Accordion Style) ---
export function ServiceFeaturesGrid({ features }: { features: ServiceDetails['features'] }) {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="py-24 bg-background relative border-t border-border/40">
      <div className="site-container max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Capabilities & Core Features</h2>
          <p className="text-muted-foreground text-lg">Detailed specifications of our delivery model.</p>
        </div>
        
        <div className="flex flex-col gap-3">
          {features.map((feature, idx) => {
            const isActive = activeIdx === idx;
            const num = (idx + 1).toString().padStart(2, '0');
            
            return (
              <div key={idx} className="flex flex-col border border-border/40 rounded-2xl overflow-hidden bg-card/20 transition-all duration-300">
                <button 
                  onClick={() => setActiveIdx(isActive ? -1 : idx)}
                  className={`group flex w-full min-h-[64px] cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 ${isActive ? 'bg-primary/10 border-b border-border/40' : 'hover:bg-muted/30'}`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-primary font-bold font-mono text-lg">{num}</span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{feature.title}</h3>
                      {!isActive && <p className="text-muted-foreground text-sm line-clamp-1">{feature.desc}</p>}
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center bg-background/50 shrink-0">
                    {isActive ? <ChevronUp className="w-4 h-4 text-primary" /> : <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />}
                  </div>
                </button>
                
                {/* Expanded State */}
                <div className={`grid md:grid-cols-2 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-[800px] opacity-100 border-t border-border/40' : 'max-h-0 opacity-0'}`}>
                  
                  {/* Left: Mock Image / Highlight Block */}
                  <div className="bg-muted/20 relative p-8 flex flex-col justify-between border-r border-border/40 min-h-[300px] overflow-hidden">
                    <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-foreground/[0.02] leading-none select-none pointer-events-none">
                      {num}
                    </div>
                    <div className="relative z-10 flex flex-col gap-3">
                       {feature.tags?.map((tag, tagIdx) => (
                         <span key={tagIdx} className="inline-block px-3 py-1 bg-background/80 border border-border/50 rounded-full text-xs font-semibold backdrop-blur-sm w-max">
                           {tag}
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  {/* Right: Detailed Content */}
                  <div className="p-8 bg-card/40 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h4>
                    <p className="text-muted-foreground leading-relaxed mb-8">{feature.desc}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                       {feature.details?.map((detail, detIdx) => (
                         <div key={detIdx} className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-primary"/></div>
                           <span className="text-sm font-medium text-foreground/90">{detail}</span>
                         </div>
                       ))}
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

// --- Tech Stack Section ---
export function TechStackSection({ techStack }: { techStack?: { categories: { name: string; description: string; technologies: string[] }[] } }) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);

  if (!techStack || !techStack.categories || techStack.categories.length === 0) return null;

  const activeCategory = techStack.categories[activeTabIdx];

  return (
    <section className="py-24 bg-background relative border-t border-border/40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="site-container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Tools we trust to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">ship in production</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We don't chase hype. We use battle-tested technologies that guarantee security, scalability, and developer velocity.
          </p>
        </div>

        {/* Dynamic Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {techStack.categories.map((category, idx) => {
            const isActive = idx === activeTabIdx;
            return (
              <button 
                key={idx}
                onClick={() => setActiveTabIdx(idx)}
                className={`group relative inline-flex shrink-0 cursor-pointer items-center gap-2.5 rounded-full px-5 py-2.5 text-sm transition-colors duration-300 ${
                  isActive 
                    ? "font-semibold text-foreground bg-primary/10 border border-primary/30" 
                    : "font-medium text-foreground/75 hover:text-foreground border border-transparent"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div className="relative">
          <div className="bg-card dark:bg-[#09090b] rounded-[2rem] border border-border/50 p-8 md:p-12 shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
              
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <Layers className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{activeCategory.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {activeCategory.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {activeCategory.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="px-5 py-2.5 bg-card/40 border border-border/40 rounded-full text-sm font-medium text-foreground/90 hover:bg-card/80 hover:border-primary/30 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// --- Process Stepper ---
export function ProcessStepper({ steps }: { steps: { name: string; heading?: string; desc: string }[] }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
  const handlePrev = () => setActiveStep(prev => Math.max(prev - 1, 0));

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-border/40">
      <div className="site-container max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">How We Build</h2>
          <p className="text-muted-foreground text-lg">A proven {steps.length}-step process that guarantees delivery.</p>
        </div>
        
        {/* Horizontal Timeline Graph */}
        <div className="relative mb-16 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border/50 -translate-y-1/2 z-0"></div>
          <div className="flex justify-between relative z-10">
            {steps.map((_, idx) => {
              const isActive = idx === activeStep;
              const isPast = idx < activeStep;
              return (
                <button 
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all duration-300 outline-none
                    ${isActive ? 'border-primary bg-primary text-white scale-110 shadow-[0_0_20px_rgba(var(--primary),0.4)]' : 
                      isPast ? 'border-primary bg-background text-primary' : 'border-border bg-background text-muted-foreground hover:border-primary/50'}`}
                >
                  {isPast ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Block */}
        <div className="bg-card/40 border border-border/50 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[300px] flex flex-col justify-between">
          <div className="mb-8">
            <div className="text-primary font-bold font-mono tracking-wider mb-4 uppercase text-sm">
              Step {(activeStep + 1).toString().padStart(2, '0')} • {steps[activeStep].name}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {steps[activeStep].heading || steps[activeStep].desc}
            </h3>
            {steps[activeStep].heading && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {steps[activeStep].desc}
              </p>
            )}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-border/40">
            <div className="flex gap-2">
              <button 
                onClick={handlePrev} 
                disabled={activeStep === 0}
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors bg-muted/30 text-foreground hover:bg-muted/50 disabled:opacity-30 disabled:pointer-events-none"
              >
                Prev
              </button>
              <button 
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
                className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition-colors bg-primary text-white hover:bg-primary/90 disabled:opacity-30 disabled:pointer-events-none shadow-md"
              >
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="text-muted-foreground font-mono text-sm font-medium">
              {activeStep + 1} / {steps.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- FAQ ---
export function ServiceFAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-background border-t border-border/40">
      <div className="site-container max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center">Frequently Asked Questions</h2>
        </div>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const num = (idx + 1).toString().padStart(2, '0');
            
            return (
              <div key={idx} className="border border-border/40 rounded-2xl overflow-hidden bg-card/20">
                <button 
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-muted/30 transition-colors text-left"
                >
                  <div className="flex items-center gap-6 pr-4">
                    <span className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-sm font-bold text-muted-foreground shrink-0">{num}</span>
                    <span className="text-lg font-bold text-foreground">{faq.q}</span>
                  </div>
                  <div className="shrink-0 text-muted-foreground">
                    {isOpen ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <div 
                  className={`px-6 md:pl-[5.5rem] overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 pb-0'}`}
                >
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- Benefits ---
export function BenefitsList({ benefits }: { benefits: { title: string; desc: string }[] }) {
  return (
    <section className="py-24 bg-background relative border-t border-border/40">
      <div className="site-container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Hiring Benefit</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
              Every decision we make is designed to remove friction, accelerate delivery, and ensure you get enterprise-grade engineering without the enterprise overhead.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="glass p-8 rounded-2xl border border-border/40 flex flex-col gap-4 relative overflow-hidden group hover:border-primary/40 transition-colors">
                <div className="absolute -bottom-4 -right-4 text-8xl font-black text-foreground/[0.03] group-hover:text-primary/[0.05] transition-colors pointer-events-none">
                  0{i+1}
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center relative z-10">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-bold text-xl text-foreground mb-2">{b.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA ---
export function ServiceCTA({ serviceName }: { serviceName?: string }) {
  const displayTitle = serviceName ? `Ready to start your ${serviceName} project?` : "Ready to Build Your Platform?";
  
  return (
    <section className="py-24 bg-background relative border-t border-border/40">
      <div className="site-container max-w-6xl mx-auto">
        <div className="bg-card dark:bg-[#09090b] rounded-[2.5rem] p-8 md:p-16 border border-border/50 relative overflow-hidden shadow-2xl">
          
          <div className="grid lg:grid-cols-[60%_40%] gap-16 relative z-10">
            {/* Left Col */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold mb-8">
                <Calendar className="w-4 h-4" /> FREE DISCOVERY CALL
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{displayTitle}</h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Tell us about your requirements. We'll scope the technical architecture and prepare a rigorous execution plan tailored to your business goals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="relative inline-flex min-h-[48px] items-center justify-center gap-2 overflow-hidden rounded-xl px-8 py-3.5 text-sm font-bold will-change-transform bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0_8px_30px_-8px] shadow-primary/50 hover:scale-[1.02] transition-transform">
                  <Calendar className="w-4 h-4" /> Call to connect <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            
            {/* Right Col Timeline */}
            <div className="lg:border-l border-border/40 lg:pl-16 flex flex-col justify-center">
              <div className="text-sm font-bold text-primary tracking-wider uppercase mb-8">START BUILDING</div>
              
              <div className="flex flex-col gap-6 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-px bg-border/50"></div>
                
                <div className="flex gap-6 items-center relative z-10">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(var(--primary),0.5)]">1</div>
                  <div className="text-foreground font-bold text-lg">Call </div>
                </div>
                <div className="flex gap-6 items-center relative z-10">
                  <div className="w-6 h-6 rounded-full bg-background border-2 border-border/70 flex items-center justify-center text-xs font-bold text-muted-foreground">2</div>
                  <div className="text-muted-foreground font-medium text-lg">Share your idea</div>
                </div>
                <div className="flex gap-6 items-center relative z-10">
                  <div className="w-6 h-6 rounded-full bg-background border-2 border-border/70 flex items-center justify-center text-xs font-bold text-muted-foreground">3</div>
                  <div className="text-muted-foreground font-medium text-lg">Get a prototype</div>
                </div>
                <div className="flex gap-6 items-center relative z-10">
                  <div className="w-6 h-6 rounded-full bg-background border-2 border-border/70 flex items-center justify-center text-xs font-bold text-muted-foreground">4</div>
                  <div className="text-muted-foreground font-medium text-lg">Start building</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Badges */}
          <div className="mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-between gap-4">
             <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fast Execution</div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"><Lock className="w-4 h-4 text-blue-400" /> NDA on Day 1</div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"><Lightbulb className="w-4 h-4 text-amber-400" /> Full IP Ownership</div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"><Globe className="w-4 h-4 text-blue-500" /> Global Standards</div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium"><Star className="w-4 h-4 text-yellow-500" /> Premium Quality</div>
          </div>

        </div>
      </div>
    </section>
  );
}
