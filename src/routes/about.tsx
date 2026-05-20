import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import AOS from "aos";
import {
  Rocket, Code2, Palette, Brain, Sparkles,
  ArrowRight, ArrowUpRight, Star, Globe, Heart,
  Lightbulb, Trophy, Linkedin, Twitter, Github,
  Mail, MapPin, Phone, Send, Eye, Check,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

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
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      easing: "ease-out-cubic", 
      once: true, 
      offset: 60 
    });
    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white selection:bg-[#00E5FF]/30 selection:text-[#00E5FF]">


      {/* Cursor glow */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-0 h-[400px] w-[400px] rounded-full opacity-40 blur-3xl transition-transform duration-300 ease-out hidden md:block"
        style={{ background: "radial-gradient(circle, rgba(0,229,255,0.2), rgba(168,85,247,0.1) 50%, transparent 70%)" }}
      />

      {/* Grid Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: "linear-gradient(rgba(0,229,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24">
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* SECTION: Top Cards (Vision, Mission, Values) */}
              <div className="grid md:grid-cols-3 gap-8 mb-32">
                {[
                  { title: "Our Vision", desc: "To be the global leader in digital transformation, empowering businesses through cutting-edge technology and innovative solutions.", icon: Eye, color: "bg-blue-500" },
                  { title: "Our Mission", desc: "We deliver exceptional software products and strategic digital services that drive growth, efficiency, and scalability for our clients.", icon: Lightbulb, color: "bg-purple-500" },
                  { title: "Our Values", desc: "Integrity, Innovation, and client success are at the core of everything we do. We build lasting partnerships based on trust and excellence.", icon: Heart, color: "bg-pink-500" },
                ].map((item, i) => (
                  <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="glass rounded-3xl p-8 hover:border-[#00E5FF]/30 transition-all group">
                    <div className={`h-12 w-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-lg shadow-${item.color.split('-')[1]}-500/20`}>
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-display mb-4">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* SECTION: Welcome Section */}
              <div className="max-w-4xl mx-auto mb-32">
                <div data-aos="fade-up" className="text-center">
                  <div className="inline-flex items-center gap-2.5 rounded-full bg-[#00E5FF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00E5FF] mb-6">
                    <img src="/INfynux-Logo.png" alt="INFYNUX" className="h-4 w-auto object-contain drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]" />
                    About Company
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-bold font-display leading-tight mb-8">
                    Welcome to <span className="text-gradient-cosmic">INFYNUX</span>
                  </h1>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
                    About INFYNUX: We are a software company in Nagapattinam and a dynamic Startup founded by young, ambitious minds and college students driven by innovation. We are proud to be an MSME and StartupTN registered enterprise, dedicated to delivering modern IT solutions that drive growth.
                  </p>
                  <div className="flex flex-col items-center mb-10">
                    <ul className="space-y-4 text-left inline-block">
                      {[
                        "INFYNUX is a software company in Nagapattinam",
                        "About INFYNUX company leadership",
                        "MSME & StartupTN Registered Enterprise",
                        "Web Development & ERP/CRM Solutions",
                        "Digital Marketing & SEO Optimization",
                        "IT Consulting & Social Media Management",
                        "Creative Graphics Design & Branding"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="h-5 w-5 rounded-full bg-[#00E5FF] flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-[#0A0A0F]" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-slate-400 text-sm italic mb-10 max-w-2xl mx-auto">
                    Founded in <span className="text-[#00E5FF] font-bold">2025</span>, INFYNUX stands at the forefront of digital transformation â€” bringing the fresh perspective and high-energy of student innovation to businesses worldwide with professional IT services.
                  </p>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-cyan px-8 py-4 text-sm font-bold text-[#0A0A0F] hover:scale-105 transition-all shadow-xl shadow-[#00E5FF]/20">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* SECTION: The Story */}
              <div className="max-w-4xl mx-auto py-20">
                <div className="text-center mb-16">
                  <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold font-display leading-tight">
                    The Story of <span className="text-[#00E5FF]">INFYNUX</span>: From Student Dreams to Global Digital Agency
                  </h2>
                </div>
                
                <div className="space-y-16">
                  <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-6 text-[#00E5FF]">Who We Are: A Legacy of Innovation in Nagapattinam</h3>
                    <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                      <p>
                        INFYNUX is not just another software company; we are a testament to the power of youth, ambition, and technical excellence. Founded in 2025 in the vibrant coastal town of Nagapattinam, Tamil Nadu, our journey began in the classrooms of local colleges. A group of passionate students, driven by a shared vision of bringing high-end digital solutions to local and global businesses, decided to challenge the status quo. What started as a collective of freelance developers has quickly evolved into an MSME and StartupTN registered enterprise known for its reliability and creative flair.
                      </p>
                      <p>
                        Our identity is deeply rooted in Nagapattinam. We believe that talent knows no geographical boundaries, and our mission is to put Nagapattinam on the global technology map. At INFYNUX, we combine the raw energy of student innovation with the disciplined execution of seasoned professionals. This unique blend allows us to approach problems from fresh angles while ensuring our solutions are robust, scalable, and secure.
                      </p>
                    </div>
                  </div>

                  <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-6 text-[#A855F7]">Our Mission: Empowering Growth Through Technology</h3>
                    <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                      <p>
                        At INFYNUX in Nagapattinam, our mission is simple yet profound: to empower businesses of all sizes to thrive in the digital age. We understand that for many business owners in Tamil Nadu, the digital world can seem overwhelming. We are here to bridge that gap. We don't just provide services; we build strategic partnerships. Whether it's a small local shop in Nagapattinam looking to establish its first website or a large enterprise needing a complex ERP system, we provide the same level of dedication and technical precision.
                      </p>
                      <p>
                        We are committed to transparency, excellence, and social responsibility. As a student-led organization, we also aim to create a fertile ground for tech talent in Nagapattinam, providing opportunities for students to work on real-world projects and gain industry-standard experience right here in their hometown.
                      </p>
                    </div>
                  </div>

                  {/* <div data-aos="fade-up">
                    <h3 className="text-2xl font-bold mb-6 text-[#FF007F]">Technologies That Drive Us</h3>
                    <div className="text-slate-400 text-sm leading-relaxed mb-8">
                      To deliver on our promise of high-end software, we master the world's most versatile and powerful technology stacks. Our Nagapattinam-based development studio is proficient in:
                    </div>
                    <ul className="space-y-6">
                      {[
                        { title: "Full-Stack Excellence (MERN & PERN)", desc: "We specialize in the MERN (MongoDB, Express, React, Node.js) and PERN (PostgreSQL, Express, React, Node.js) stacks. These frameworks allow us to build dynamic, single-page applications that are fast, secure, and incredibly scalable." },
                        { title: "Enterprise PHP & Laravel", desc: "For businesses requiring robust backend logic and complex database management, our Laravel experts build structured, maintainable, and highly functional systems." },
                        { title: "Mobile Mastery (React Native)", desc: "We use React Native to develop high-performance mobile applications that run smoothly on both iOS and Android from a single codebase, drastically reducing time-to-market for our clients." },
                        { title: "Advanced Search Engine Optimization", desc: "Our SEO strategies are built on a deep understanding of core web vitals and semantic search entity recognition, ensuring your brand stands out in a crowded digital landscape." }
                      ].map((tech, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="h-2 w-2 rounded-full bg-[#00E5FF] mt-2 shrink-0" />
                          <div>
                            <span className="font-bold text-white block mb-1">{tech.title}:</span>
                            <span className="text-sm">{tech.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

/* ---------- HERO ---------- */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[10%] h-96 w-96 rounded-full bg-[#007BFF]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 left-[5%] h-[500px] w-[500px] rounded-full bg-[#A855F7]/10 blur-[150px] animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/30 bg-[#00E5FF]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00E5FF] mb-8">
          <Sparkles className="h-3 w-3 animate-pulse" />
          Our Story
        </div>
        <h1 data-aos="fade-up" data-aos-delay="100" className="text-5xl sm:text-7xl lg:text-8xl font-bold font-display leading-tight mb-8">
          We're on a Mission to<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#A855F7] to-[#FF007F]">Defy Digital Gravity</span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
          INFYNUX is a global collective of designers, engineers, and strategists building the future of digital experiences that orbit beyond expectation.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            { v: "5+", l: "Years in Orbit" },
            { v: "150+", l: "Projects Launched" },
            { v: "30+", l: "Countries Reached" },
            { v: "98%", l: "Client Retention" },
          ].map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white mb-2 group-hover:text-[#00E5FF] transition-colors">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- JOURNEY / TIMELINE ---------- */
function JourneySection() {
  const milestones = [
    { year: "2020", title: "The Ignition", desc: "Started as a small lab in NYC with a vision to revolutionize UI/UX through cognitive design.", icon: Rocket },
    { year: "2021", title: "Orbital Shift", desc: "Expanded to London and Tokyo, launching our first AI-driven branding platform.", icon: Globe },
    { year: "2022", title: "Hyper-Growth", desc: "Reached 50 visionaries and delivered 100+ projects for Fortune 500 innovators.", icon: Sparkles },
    { year: "2024", title: "The Antigravity Era", desc: "Setting new standards for immersive web experiences and autonomous digital agents.", icon: Brain },
  ];

  return (
    <section className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold font-display mb-6">The Antigravity Journey</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-lg uppercase tracking-widest">From startup to global force</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E5FF]/20 to-transparent -translate-y-1/2 z-0" />
          
          {milestones.map((m, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="relative z-10 group">
              <div className="bg-[#0D0D15]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-[#00E5FF]/30 transition-all hover:-translate-y-2">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#007BFF]/20 flex items-center justify-center mb-6">
                  <m.icon className="h-7 w-7 text-[#00E5FF]" />
                </div>
                <div className="text-2xl font-bold font-display text-[#00E5FF] mb-2">{m.year}</div>
                <h3 className="text-lg font-bold mb-3">{m.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
              {/* Dot on line */}
              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.8)] opacity-0 group-hover:opacity-100 transition-opacity" style={{ top: "calc(100% + 1rem)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function ValuesSection() {
  const values = [
    { icon: Lightbulb, title: "Innovation First", desc: "We don't follow trends; we create the blueprints for what comes next in digital interaction." },
    { icon: Trophy, title: "Excellence Always", desc: "Precision is our baseline. We obsess over the details that others might never even notice." },
    { icon: Globe, title: "Global Mindset", desc: "Our diversity is our strength, bringing perspectives from across the galaxy to every problem." },
    { icon: Heart, title: "Client Success", desc: "We win when you win. Your mission becomes our obsession from the first meeting to launch." },
  ];

  return (
    <section className="py-28 bg-[#0D0D15]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold font-display mb-6">Our Core Values</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-lg">The principles that guide our antigravity approach</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100} className="group relative overflow-hidden rounded-2xl p-[1px]">
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/20 via-transparent to-[#A855F7]/20 group-hover:from-[#00E5FF] group-hover:to-[#A855F7] transition-all duration-500" />
              
              <div className="relative bg-[#0A0A0F] rounded-[inherit] p-8 h-full flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-slate-900/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <v.icon className="h-8 w-8 text-[#00E5FF]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MISSION & VISION ---------- */
function MissionVisionSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right" className="bg-[#0D0D15]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-12">
            <div className="h-14 w-14 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center mb-8">
              <Rocket className="h-7 w-7 text-[#00E5FF]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To empower organizations with digital tools that defy traditional constraints. We bridge the gap between imagination and execution, delivering software that doesn't just workâ€”it propels our clients toward their ultimate potential.
            </p>
          </div>
          <div data-aos="fade-left" className="bg-[#0D0D15]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-12 lg:mt-12">
            <div className="h-14 w-14 rounded-xl bg-[#A855F7]/10 flex items-center justify-center mb-8">
              <Brain className="h-7 w-7 text-[#A855F7]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A future where digital experiences are invisible, intuitive, and infinitely powerful. We envision a world where technology removes barriers rather than creating them, enabling a seamless flow of creativity and commerce across the global network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- IMPACT COUNTERS ---------- */
function ImpactSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 border-y border-white/5 bg-[#0D0D15]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold font-display text-center mb-20">Our Impact by the Numbers</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { v: 500, s: "+", l: "Projects Delivered" },
            { v: 98, s: "%", l: "Client Satisfaction" },
            { v: 24, s: "/7", l: "Support Available" },
            { v: 15, s: "+", l: "Industry Awards" },
          ].map((s, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i * 100} className="text-center">
              <div className="text-5xl sm:text-7xl font-display font-bold text-[#00E5FF] mb-4">
                {inView ? <Counter end={s.v} suffix={s.s} /> : "0"}
              </div>
              <div className="text-sm uppercase tracking-[0.3em] text-slate-500 font-medium">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count}{suffix}</span>;
}

/* ---------- TEAM ---------- */
function TeamSection() {
  const team = [
    { name: "Nova Prime", role: "Founder & Creative Director", icon: Sparkles, bio: "Pioneer in cosmic design systems and cognitive user interfaces." },
    { name: "Alex Quantum", role: "Head of Engineering", icon: Code2, bio: "Building high-velocity platforms that scale beyond traditional limits." },
    { name: "Sarah Nebula", role: "Chief Strategist", icon: Rocket, bio: "Expert in orbital market positioning and exponential growth scaling." },
    { name: "Leo Pulsar", role: "AI Research Lead", icon: Brain, bio: "Architect of autonomous agents and neural experience layers." },
  ];

  return (
    <section className="py-28 bg-[#0D0D15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold font-display mb-6">Meet the Crew</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-lg uppercase tracking-widest">The brilliant minds behind INFYNUX</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((t, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 120} className="bg-[#0D0D15]/80 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-[#00E5FF]/20 transition-all hover-lift">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-[#00E5FF] to-[#A855F7] p-[2px] mb-6 mx-auto">
                <div className="h-full w-full rounded-full bg-[#0A0A0F] flex items-center justify-center">
                  <t.icon className="h-8 w-8 text-[#00E5FF]" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-1">{t.name}</h3>
              <div className="text-xs uppercase tracking-widest text-[#00E5FF] text-center mb-4">{t.role}</div>
              <p className="text-sm text-slate-400 text-center leading-relaxed mb-6 italic">"{t.bio}"</p>
              <div className="flex justify-center gap-4">
                {[Linkedin, Twitter, Github].map((Icon, j) => (
                  <a key={j} href="#" className="h-8 w-8 rounded-lg glass flex items-center justify-center text-slate-500 hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-all">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- LOCATIONS ---------- */
function LocationsSection() {
  const locations = [
    { city: "San Francisco", addr: "101 Galaxy Way, CA 94103", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80" },
    { city: "London", addr: "Orbit Square, E1 6PX", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80" },
    { city: "Singapore", addr: "24 Marina Nebula, 018981", img: "https://images.unsplash.com/photo-1525625232717-1210134440ad?w=800&q=80" },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 data-aos="fade-up" className="text-4xl sm:text-6xl font-bold font-display mb-6">Global Presence</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-slate-400 text-lg">Where you can find us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((l, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 150} className="group relative overflow-hidden rounded-2xl bg-[#0D0D15] border border-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={l.img} alt={l.city} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-5 w-5 text-[#00E5FF]" />
                  <h3 className="text-2xl font-bold font-display">{l.city}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{l.addr}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-[#00E5FF] hover:gap-3 transition-all font-bold uppercase tracking-widest">
                  View Mission Control <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTASection() {
  return (
    <section className="py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="zoom-in" className="relative overflow-hidden rounded-[40px] p-12 sm:p-24 text-center">
          {/* Animated Background Gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF] via-[#007BFF] to-[#A855F7] opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold font-display text-white mb-8 leading-tight">
              Join Our Antigravity Journey
            </h2>
            <p className="text-white/90 text-lg sm:text-xl mb-12 leading-relaxed">
              Let's create something extraordinary together. Build the future of your brand beyond the atmosphere.
            </p>
            <a href="/contact" className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-bold text-[#0A0A0F] hover:scale-110 transition-transform shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
              Work With Us <Rocket className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
