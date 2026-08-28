import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import {
  Clock, ShieldCheck, Globe, Star,
  Send, Loader2, CheckCircle2,
  Mail, Phone, MapPin,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";
import { supabase } from "../lib/supabase";
import { contactSchema, type ContactInput } from "../lib/contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | INFYNUX" },
      { name: "description", content: "Have a product idea, a technical challenge, or a question? Drop us a message and hear back within 24 hours on business days." },
    ],
  }),
});

/* ── Types for ReferenceContactSection ── */
interface ReferenceContactSectionProps {
  onSubmit: (data: ContactInput) => Promise<void>;
  register: ReturnType<typeof import("react-hook-form").useForm<ContactInput>>["register"];
  handleSubmit: ReturnType<typeof import("react-hook-form").useForm<ContactInput>>["handleSubmit"];
  errors: ReturnType<typeof import("react-hook-form").useForm<ContactInput>>["formState"]["errors"];
  isSubmitting: boolean;
  submitted: boolean;
}

/* ── Reference-style Contact Section ── */
function ReferenceContactSection({
  onSubmit,
  register,
  handleSubmit,
  errors,
  isSubmitting,
  submitted,
}: ReferenceContactSectionProps) {
  const [activeTab, setActiveTab] = useState<"quote" | "call">("quote");
  const [projectType, setProjectType] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [activeReview, setActiveReview] = useState(0);

  const projectTypes = ["Mobile App", "Custom Software", "Web Platform", "AI / ML Product", "eCommerce", "App Modernization", "Not Sure Yet"];
  const budgetOptions = ["Below $5k", "$5k – $15k", "$15k – $50k", "$50k – $150k", "Above $150k", "Not Sure"];

  const reviews = [
    {
      name: "Rajan",
      role: "Founder, Learning Knights",
      initial: "R",
      country: "India",
      flag: "🇮🇳",
      text: "Creative and modern digital ideas tailored for business growth. Delivered on time with excellent communication."
    },
    {
      name: "Rajesh",
      role: "Owner, Virtual Study",
      initial: "R",
      country: "India",
      flag: "🇮🇳",
      text: "Reliable communication and continuous support throughout the project. Delivered beyond our expectations."
    },
    {
      name: "Yogesh",
      role: "Founder, Orbit Finance",
      initial: "Y",
      country: "India",
      flag: "🇮🇳",
      text: "High-quality development with clean design and smooth performance. Highly recommended team."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const toggleProjectType = (t: string) =>
    setProjectType((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);

  return (
    <section
      className="bg-background dark:bg-[#000]"
      style={{
        padding: "80px 0 88px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 55% at 50% 0%, rgba(91,108,249,0.07), transparent 65%)", pointerEvents: "none" }} />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>

        {/* ── Heading ── */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <h2 className="text-foreground dark:text-white" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(1.8rem,4vw,2.9rem)", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.025em" }}>
            Start the Conversation
          </h2>
          <p className="text-muted-foreground dark:text-white/40" style={{ fontFamily: "'Inter',sans-serif", fontSize: "clamp(14px,1.4vw,16px)", margin: 0, lineHeight: 1.6 }}>
            Fill in the form and our team will reach out within 2 hours.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="ref-contact-grid">

          {/* ═══ LEFT COLUMN ═══ */}
          <div className="ref-left-col">

            {/* Card 1 — Project Inquiry */}
            <a
              href="mailto:support@infynuxsolutions.in"
              className="ref-info-card"
              style={{ textDecoration: "none" }}
            >
              <div className="ref-info-icon" style={{ background: "rgba(20,184,166,0.15)" }}>
                <Mail style={{ width: 18, height: 18, color: "#14b8a6" }} strokeWidth={2} />
              </div>
              <div className="ref-info-text">
                <div className="ref-info-label">PROJECT INQUIRY</div>
                <div className="ref-info-value">support@infynuxsolutions.in</div>
              </div>
              <div className="ref-info-arrow">→</div>
            </a>

            {/* Card 2 — Call / WhatsApp */}
            <a
              href="https://wa.me/919944911273"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-info-card"
              style={{ textDecoration: "none" }}
            >
              <div className="ref-info-icon" style={{ background: "rgba(34,197,94,0.15)" }}>
                <Phone style={{ width: 18, height: 18, color: "#22c55e" }} strokeWidth={2} />
              </div>
              <div className="ref-info-text">
                <div className="ref-info-label">CALL / WHATSAPP</div>
                <div className="ref-info-value">+91 99449 11273</div>
              </div>
              <div className="ref-info-arrow">→</div>
            </a>

            {/* Card 3 — Our Office */}
            <a
              href="https://maps.google.com/?q=Thiruvarur,Tamil+Nadu"
              target="_blank"
              rel="noopener noreferrer"
              className="ref-info-card"
              style={{ textDecoration: "none" }}
            >
              <div className="ref-info-icon" style={{ background: "rgba(139,92,246,0.15)" }}>
                <MapPin style={{ width: 18, height: 18, color: "#8b5cf6" }} strokeWidth={2} />
              </div>
              <div className="ref-info-text">
                <div className="ref-info-label">OUR OFFICE</div>
                <div className="ref-info-value">Thiruvarur, Tamil Nadu, India</div>
              </div>
              <div className="ref-info-arrow">→</div>
            </a>

            {/* Card 4 — Office Address */}
            <div
              className="bg-card/40 dark:bg-white/5 border border-border/40 dark:border-white/10"
              style={{
                borderRadius: "14px",
                padding: "20px 22px",
              }}
            >
              <div className="text-muted-foreground dark:text-white/40" style={{ fontFamily: "'Inter',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "10px" }}>
                OFFICE ADDRESS
              </div>
              <div className="text-foreground/80 dark:text-white/80" style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", lineHeight: 1.75 }}>
                Infynux Solutions,<br />
                Thiruvarur – 610 001,<br />
                Tamil Nadu, India
              </div>
              <div className="text-muted-foreground dark:text-white/30" style={{ marginTop: "10px", fontFamily: "'Inter',sans-serif", fontSize: "11px" }}>
                IST · UTC+5:30
              </div>
            </div>

            {/* Card 5 — Testimonial */}
            <div
              className="bg-card/40 dark:bg-white/5 border border-border/40 dark:border-white/10"
              style={{
                borderRadius: "14px",
                padding: "20px 22px",
                position: "relative",
              }}
            >
              <style>{`
                @keyframes reviewFade {
                  0% { opacity: 0; transform: translateY(4px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
              `}</style>
              <div key={activeReview} style={{ animation: "reviewFade 0.4s ease-out forwards" }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "12px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{ width: 14, height: 14, fill: "#eab308", color: "#eab308" }} />
                  ))}
                </div>
                <p className="text-muted-foreground dark:text-white/70" style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", lineHeight: 1.65, margin: "0 0 16px", fontStyle: "italic", minHeight: "64px" }}>
                  "{reviews[activeReview].text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#6366f1,#38bdf8)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff", flexShrink: 0 }}>
                      {reviews[activeReview].initial}
                    </div>
                    <div>
                      <div className="text-foreground dark:text-white" style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "13px", fontWeight: 700 }}>
                        {reviews[activeReview].name}
                      </div>
                      <div className="text-muted-foreground dark:text-white/40" style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px" }}>
                        {reviews[activeReview].role}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span style={{ fontSize: "16px" }}>{reviews[activeReview].flag}</span>
                    <span className="text-muted-foreground dark:text-white/40" style={{ fontFamily: "'Inter',sans-serif", fontSize: "11px", fontWeight: 600 }}>
                      {reviews[activeReview].country}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination dots */}
            <div style={{ display: "flex", gap: "6px", paddingLeft: "2px" }}>
              {reviews.map((_, i) => (
                <div key={i} className={i === activeReview ? "bg-indigo-500" : "bg-border dark:bg-white/15"} style={{ width: i === activeReview ? 20 : 7, height: 7, borderRadius: 4, transition: "all 0.3s ease" }} />
              ))}
            </div>

          </div>

          {/* ═══ RIGHT COLUMN — Form ═══ */}
          <div
            className="bg-card dark:bg-white/5 border border-border/40 dark:border-white/10"
            style={{
              borderRadius: "18px",
              overflow: "hidden",
            }}
          >
            {/* Tab bar */}
            <div className="flex border-b border-border/40 dark:border-white/10">
              {(["quote"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 font-inter text-sm font-semibold transition-colors duration-200 border-b-2 tracking-[0.01em] ${activeTab === tab ? 'text-foreground dark:text-white border-indigo-500' : 'text-muted-foreground dark:text-white/40 border-transparent hover:text-foreground dark:hover:text-white'}`}
                >
                  {tab === "quote" ? "Get A Quote" : "Book A Call"}
                </button>
              ))}
            </div>

            {/* Form body */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              style={{ padding: "28px 28px 24px" }}
            >

              {/* Name + Email row */}
              <div className="ref-form-row">
                <div className="ref-form-field">
                  <label className="ref-form-label">Full Name *</label>
                  <input
                    id="ref-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    {...register("name")}
                    className={`ref-form-input ${errors.name ? "ref-form-input--error" : ""}`}
                  />
                  {errors.name && <p className="ref-form-error">{errors.name.message}</p>}
                </div>
                <div className="ref-form-field">
                  <label className="ref-form-label">Work Email *</label>
                  <input
                    id="ref-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    disabled={isSubmitting}
                    {...register("email")}
                    className={`ref-form-input ${errors.email ? "ref-form-input--error" : ""}`}
                  />
                  {errors.email && <p className="ref-form-error">{errors.email.message}</p>}
                </div>
              </div>

              {/* Project Type */}
              <div style={{ marginBottom: "20px" }}>
                <div className="ref-form-label" style={{ marginBottom: "10px" }}>Project Type</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {projectTypes.map((t) => {
                    const isSelected = projectType.includes(t);
                    return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => toggleProjectType(t)}
                      className={`px-3.5 py-1.5 rounded-full font-inter text-xs font-medium whitespace-nowrap transition-all duration-200 ${isSelected ? 'border border-indigo-500/70 bg-indigo-500/15 text-indigo-700 dark:text-indigo-300' : 'border border-border/80 dark:border-white/15 bg-transparent dark:bg-white/5 text-foreground/70 dark:text-white/60 hover:border-indigo-500/30'}`}
                    >
                      {t}
                    </button>
                    )
                  })}
                </div>
              </div>

              {/* Rough Budget */}
              {/* <div style={{ marginBottom: "20px" }}>
                <div className="ref-form-label" style={{ marginBottom: "10px" }}>Rough budget</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {budgetOptions.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(budget === b ? "" : b)}
                      style={{
                        padding: "7px 14px",
                        borderRadius: "9999px",
                        border: budget === b ? "1px solid rgba(99,102,241,0.7)" : "1px solid rgba(255,255,255,0.12)",
                        background: budget === b ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
                        color: budget === b ? "#a5b4fc" : "rgba(255,255,255,0.6)",
                        fontFamily: "'Inter',sans-serif",
                        fontSize: "12px",
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.18s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div> */}

              {/* Textarea */}
              <div style={{ marginBottom: "20px" }}>
                <label className="ref-form-label">Tell Us About Your Project *</label>
                <textarea
                  id="ref-message"
                  rows={5}
                  placeholder="Describe your idea, the problem you're solving, or any questions you have..."
                  disabled={isSubmitting}
                  {...register("message")}
                  className={`ref-form-input ref-form-textarea ${errors.message ? "ref-form-input--error" : ""}`}
                />
                {errors.message && <p className="ref-form-error">{errors.message.message}</p>}
              </div>

              {/* Trust pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                {[
                  { emoji: "🔑", label: "Full IP Ownership" },
                  { emoji: "📋", label: "NDA from Day 1" },
                  { emoji: "🎁", label: "1 Week Free Trial" },
                  { emoji: "🤖", label: "Senior Team, AI-Powered" },
                  { emoji: "🔒", label: "Secure & Confidential" },
                ].map(({ emoji, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-border/80 dark:border-white/10 bg-card/50 dark:bg-white/5 font-inter text-[11px] text-muted-foreground dark:text-white/60"
                  >
                    <span>{emoji}</span>
                    {label}
                  </span>
                ))}
              </div>

              {/* Success / verification area */}
              {/* {submitted && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "14px 16px",
                    borderRadius: "10px",
                    border: "1px solid rgba(34,197,94,0.3)",
                    background: "rgba(34,197,94,0.08)",
                    marginBottom: "16px",
                  }}
                >
                  <CheckCircle2 style={{ width: 20, height: 20, color: "#22c55e", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: 600, color: "#22c55e" }}>
                    Message sent successfully!
                  </span>
                </div>
              )} */}

              {/* Send button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 rounded-xl font-inter text-[15px] font-semibold text-white tracking-[0.01em] flex items-center justify-center gap-2 mb-3 transition-opacity duration-200"
                style={{
                  background: isSubmitting ? "rgba(99,102,241,0.5)" : "linear-gradient(90deg,#4f46e5,#6366f1)",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => { if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>

              {/* Security note */}
              <p className="text-center font-inter text-[11px] text-muted-foreground dark:text-white/30 m-0 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3 h-3" />
                Your information is secure and never shared with third parties.
              </p>

            </form>
          </div>

        </div>
      </div>

      {/* Scoped CSS */}
      <style>{`
        .ref-contact-grid {
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 1023px) {
          .ref-contact-grid {
            grid-template-columns: 1fr;
          }
        }
        .ref-left-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ref-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          background: hsl(var(--card) / 0.4);
          border: 1px solid hsl(var(--border) / 0.4);
          border-radius: 14px;
          transition: border-color 0.2s ease, background 0.2s ease;
          cursor: pointer;
        }
        .dark .ref-info-card {
          background: rgba(255,255,255,0.035);
          border-color: rgba(255,255,255,0.08);
        }
        .ref-info-card:hover {
          border-color: rgba(99,102,241,0.35);
          background: rgba(99,102,241,0.05);
        }
        .ref-info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ref-info-text {
          flex: 1;
          min-width: 0;
        }
        .ref-info-label {
          font-family: 'Inter', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: hsl(var(--muted-foreground));
          margin-bottom: 3px;
        }
        .dark .ref-info-label {
          color: rgba(255,255,255,0.32);
        }
        .ref-info-value {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: hsl(var(--foreground) / 0.8);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dark .ref-info-value {
          color: rgba(255,255,255,0.82);
        }
        .ref-info-arrow {
          font-size: 16px;
          color: hsl(var(--muted-foreground) / 0.5);
          flex-shrink: 0;
          transition: color 0.2s, transform 0.2s;
        }
        .dark .ref-info-arrow {
          color: rgba(255,255,255,0.25);
        }
        .ref-info-card:hover .ref-info-arrow {
          color: rgba(99,102,241,0.8);
          transform: translateX(2px);
        }
        .ref-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .ref-form-row {
            grid-template-columns: 1fr;
          }
        }
        .ref-form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ref-form-label {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: hsl(var(--muted-foreground));
          letter-spacing: 0.01em;
        }
        .dark .ref-form-label {
          color: rgba(255,255,255,0.55);
        }
        .ref-form-input {
          width: 100%;
          padding: 11px 14px;
          background: transparent;
          border: 1px solid hsl(var(--border));
          border-radius: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: hsl(var(--foreground));
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .dark .ref-form-input {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.1);
          color: #fff;
        }
        .ref-form-input::placeholder {
          color: hsl(var(--muted-foreground) / 0.5);
        }
        .dark .ref-form-input::placeholder {
          color: rgba(255,255,255,0.25);
        }
        .ref-form-input:focus {
          border-color: rgba(99,102,241,0.6);
        }
        .ref-form-input--error {
          border-color: rgba(239,68,68,0.6) !important;
        }
        .ref-form-textarea {
          resize: vertical;
          min-height: 110px;
        }
        .ref-form-error {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          color: #f87171;
          margin: 2px 0 0;
        }
      `}</style>
    </section>
  );
}

/* ── After Send + Quick Answers ── */
function AfterSendSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      num: "01",
      icon: "⚡",
      title: "We respond within 24 hours",
      desc: "Our team reviews every inquiry personally. You'll get a thoughtful reply — not an auto-responder — within one business day.",
    },
    {
      num: "02",
      icon: "📞",
      title: "Discovery call scheduled",
      desc: "We hop on a 30-minute call to understand your product, goals, and timeline. No commitment required — just an honest conversation.",
    },
    {
      num: "03",
      icon: "📄",
      title: "Free project scope shared",
      desc: "Within 48 hours of our call, you receive a clear project scope, timeline estimate, and transparent pricing — completely free.",
    },
  ];

  const faqs = [
    {
      q: "How fast do you respond?",
      a: "We respond to every inquiry within 24 hours on business days. For urgent requests, reach us directly via WhatsApp at +91 99449 11273 for a faster reply.",
    },
    {
      q: "Do you work with startups?",
      a: "Absolutely. We love working with early-stage startups and founders. We offer flexible engagement models — from MVP builds to full product development — tailored to startup budgets and timelines.",
    },
    {
      q: "Fixed-price or time & material?",
      a: "Both. For well-defined projects, we offer fixed-price contracts with no hidden costs. For evolving products, we use a transparent time & material model so you stay in control.",
    },
    {
      q: "Can I hire a dedicated developer?",
      a: "Yes. You can hire one or more dedicated developers from our team. They work exclusively on your product, follow your timezone, and integrate seamlessly with your existing team.",
    },
  ];

  return (
    <section
      className="bg-background dark:bg-[#000]"
      style={{
        padding: "80px 0 88px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(91,108,249,0.07), transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="site-container" style={{ position: "relative", zIndex: 2 }}>

        {/* ══ PART 1: What Happens After You Hit Send ══ */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2
            data-aos="fade-up"
            className="text-foreground dark:text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              margin: "0 0 14px",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            What Happens After You{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818CF8 0%, #A78BFA 50%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Hit Send
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-muted-foreground dark:text-white/40"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1.5vw, 16px)",
              margin: 0,
              lineHeight: 1.7,
              maxWidth: "480px",
              marginInline: "auto",
            }}
          >
            Here's exactly what to expect after you submit your message.
          </p>
        </div>

        {/* 3-card row */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="after-send-grid"
          style={{ marginBottom: "80px" }}
        >
          {steps.map((step) => (
            <div key={step.num} className="after-send-card">
              {/* Number + icon row */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #6366F1, #7C3AED)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#fff",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  {step.num}
                </div>
                <span style={{ fontSize: "22px", lineHeight: 1 }}>{step.icon}</span>
              </div>

              {/* Title */}
              <h3
                className="text-foreground dark:text-white"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  fontWeight: 700,
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.35,
                }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p
                className="text-muted-foreground dark:text-white/45"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.75,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ══ PART 2: Quick Answers ══ */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            data-aos="fade-up"
            className="text-foreground dark:text-white"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              margin: "0 0 12px",
              letterSpacing: "-0.025em",
            }}
          >
            Quick{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #818CF8 0%, #A78BFA 50%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Answers
            </span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="60"
            className="text-muted-foreground dark:text-white/40"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            Common questions before you reach out.
          </p>
        </div>

        {/* FAQ accordion */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            maxWidth: "760px",
            margin: "0 auto",
          }}
        >
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className={isOpen ? "border-indigo-400/60 dark:border-indigo-400/45 bg-indigo-50/50 dark:bg-indigo-500/10" : "border-border/60 dark:border-white/10 bg-card/50 dark:bg-white/5"}
                style={{
                  borderRadius: "14px",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, background 0.25s ease",
                  cursor: "pointer",
                }}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                {/* Question row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 22px",
                  }}
                >
                  {/* Number circle */}
                  <div
                    className={isOpen ? "text-white" : "border border-border/80 dark:border-white/10 bg-background/50 dark:bg-white/5 text-muted-foreground dark:text-white/40"}
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      background: isOpen
                        ? "linear-gradient(135deg, #6366F1, #7C3AED)"
                        : undefined,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      transition: "background 0.25s, color 0.25s",
                    }}
                  >
                    {num}
                  </div>

                  {/* Question */}
                  <span
                    className={isOpen ? "text-foreground dark:text-white" : "text-foreground/80 dark:text-white/80"}
                    style={{
                      flex: 1,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "clamp(14px, 1.4vw, 15px)",
                      fontWeight: 600,
                      lineHeight: 1.45,
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* +/× icon */}
                  <div
                    className={isOpen ? "text-indigo-500 dark:text-indigo-400" : "text-muted-foreground dark:text-white/35"}
                    style={{
                      flexShrink: 0,
                      width: "26px",
                      height: "26px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 300,
                      lineHeight: 1,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "color 0.2s, transform 0.25s",
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    +
                  </div>
                </div>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "250px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    className="text-muted-foreground dark:text-white/50"
                    style={{
                      margin: 0,
                      padding: "0 22px 20px 70px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "clamp(13px, 1.3vw, 14px)",
                      fontWeight: 400,
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Scoped styles */}
      <style>{`
        .after-send-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 767px) {
          .after-send-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .after-send-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        .after-send-card {
          background: hsl(var(--card) / 0.4);
          border: 1px solid hsl(var(--border) / 0.4);
          border-radius: 16px;
          padding: 24px 22px;
          transition: border-color 0.25s ease, background 0.25s ease;
        }
        .dark .after-send-card {
          background: rgba(255,255,255,0.03);
          border-color: rgba(255,255,255,0.09);
        }
        .after-send-card:hover {
          background: hsl(var(--card) / 0.8);
          border-color: hsl(var(--border));
        }
        .dark .after-send-card:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.15);
        }
      `}</style>
    </section>
  );
}

/* ── Animated chat preview panel ────────────────────────────── */
function ChatPanel() {
  const [showReply, setShowReply] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowReply(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0 rounded-[1.75rem] overflow-hidden border border-border/50 dark:border-white/10 lg:ml-auto bg-card dark:bg-gradient-to-br dark:from-[#13151f] dark:to-[#0d0f18] shadow-2xl dark:shadow-[0_0_0_1px_rgba(99,102,241,0.15),0_32px_64px_-12px_rgba(0,0,0,0.55)]"
    >
      {/* Top gradient shimmer */}
      <div
        className="absolute inset-x-0  top-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(99,102,241,0.6),rgba(56,189,248,0.5),transparent)" }}
      />

      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-3 ">
          <div
            className="h-9 w-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg,#6366f1,#38bdf8)" }}
          >
            <Send className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-foreground dark:text-white leading-tight">New project inquiry</p>
            <p className="text-[11px] text-muted-foreground dark:text-white/35 leading-tight">via infynuxsolutions.in</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/15 border border-green-500/25 text-[11px] font-semibold text-green-600 dark:text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse flex-shrink-0" />
          Online
        </span>
      </div>

      {/* Messages */}
      <div className="px-5 py-6 space-y-4 min-h-[200px]">
        {/* User bubble — right */}
        <div className="flex justify-end">
          <div
            className="max-w-[82%] rounded-2xl rounded-tr-sm px-4 py-3 text-[13px] text-white leading-relaxed"
            style={{ background: "linear-gradient(135deg,#6366f1,#4f46e5)" }}
          >
            We need a custom SaaS platform with AI features. Can you help?
          </div>
        </div>

        {/* Typing dots (while reply is loading) */}
        {!showReply && (
          <div className="flex items-end gap-2.5">
            <div
              className="h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#6366f1,#38bdf8)" }}
            >
              IX
            </div>
            <div
              className="px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1 items-center bg-background/50 border border-border/50 dark:bg-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.07)]"
            >
              {[0, 150, 300].map((d) => (
                <span
                  key={d}
                  className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 dark:bg-white/35 animate-bounce"
                  style={{ animationDelay: `${d}ms` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Agent reply bubble — left */}
        <div
          className={`flex items-end gap-2.5 transition-all duration-500 ${showReply ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          <div
            className="h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
            style={{ background: "linear-gradient(135deg,#6366f1,#38bdf8)" }}
          >
            IX
          </div>
          <div
            className="max-w-[78%] rounded-2xl rounded-tl-sm px-4 py-3 text-[13px] text-foreground/90 dark:text-white/90 leading-relaxed bg-background/50 border border-border/50 dark:bg-[rgba(255,255,255,0.06)] dark:border-[rgba(255,255,255,0.07)]"
          >
            Absolutely. Let's schedule a discovery call — no commitment needed. 🚀
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5 flex items-center gap-2 text-[11px] text-muted-foreground dark:text-white/30">
        <Clock className="w-3.5 h-3.5 text-green-600 dark:text-green-400 flex-shrink-0" />
        Typically replies in under 2 hours on business days
      </div>
    </div>
  );
}

/* ── Main contact page ───────────────────────────────────────── */
function ContactPage() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  const [submitted1, setSubmitted1] = useState(false);
  const [submitted2, setSubmitted2] = useState(false);

  const form1 = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });
  const form2 = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const createSubmitHandler = (setSub: (val: boolean) => void, resetFn: () => void) => async (data: ContactInput) => {
    try {
      const { error } = await supabase
        .from("contact_inquiries")
        .insert([{ name: data.name, email: data.email, message: data.message }]);

      if (error) throw new Error(error.message);

      try {
        if (
          typeof window !== "undefined" &&
          typeof (window as Window & { fbq?: (...args: unknown[]) => void }).fbq === "function"
        ) {
          (window as Window & { fbq: (...args: unknown[]) => void }).fbq("track", "Lead", {
            content_name: "Contact Form",
            content_category: "Inquiry",
          });
        }
      } catch { /* non-critical */ }

      setSub(true);
      toast.success("Message sent!", { description: "We'll respond within 24 hours on business days.", duration: 6000 });
      resetFn();
      setTimeout(() => setSub(false), 4000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error("Failed to send", { description: message, duration: 6000 });
    }
  };

  const onSubmit1 = createSubmitHandler(setSubmitted1, form1.reset);
  const onSubmit2 = createSubmitHandler(setSubmitted2, form2.reset);

  const chips = [
    { icon: Clock,        label: "< 24 hr response" },
    { icon: ShieldCheck,  label: "NDA on request"    },
    { icon: Star,         label: "AI-Powered" },
  ];

  const stats = [
    { value: "< 24h", label: "Response time"  },
    { value: "24/7",    label: "Client support" },
    { value: "3+",  label: "Projects shipped" },
    { value: "98%",   label: "Rating" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground ">
      <Navbar />
      <main className="relative" tabIndex={-1}>
        <section className="pt-28 lg:pt-32 pb-20 lg:pb-28 relative overflow-hidden">
          {/* Ambient glow blobs */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />
            <div className="absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-sky-500/8 blur-[100px]" />
          </div>

          <div className="site-container">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* ── LEFT COLUMN ── */}
              <div data-aos="fade-up" className="flex flex-col items-center text-center lg:items-start lg:text-left px-4 sm:px-6 lg:px-0">

                {/* Heading */}
                <h1
                  className="font-display font-bold tracking-tight leading-[1.06] mb-6 w-full max-w-full break-words mx-auto lg:mx-0"
                  style={{ fontSize: "clamp(2.2rem, 8vw, 4rem)" }}
                >
                  <span className="block text-foreground">Let's Build Something</span>
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(90deg,#6366f1 0%,#38bdf8 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Great Together
                  </span>
                </h1>

                {/* Supporting paragraph */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 w-full max-w-md break-words mx-auto lg:mx-0">
                  Have a product idea, a technical challenge, or a question? Drop us a message and hear back within 24 hours on business days.
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 w-full">
                  {chips.map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm text-sm font-medium text-foreground/80 hover:border-indigo-500/40 hover:text-foreground transition-colors duration-200 cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" strokeWidth={2} />
                      {label}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 mb-10 w-full" />

                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 w-full">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center lg:items-start">
                      <span
                        className="font-display font-bold text-2xl sm:text-3xl leading-none mb-1"
                        style={{
                          background: "linear-gradient(135deg,#6366f1,#38bdf8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {value}
                      </span>
                      <span className="text-[11px] font-medium text-muted-foreground leading-snug">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RIGHT COLUMN ── */}
              <div data-aos="fade-up" data-aos-delay="120" className="flex flex-col gap-5 px-2 sm:px-6 lg:px-0">

                {/* Animated chat panel */}
                <ChatPanel />
              </div>

            </div>
          </div>
        </section>

        {/* ── REFERENCE CONTACT SECTION ── */}
        <ReferenceContactSection
          onSubmit={onSubmit1}
          register={form1.register}
          handleSubmit={form1.handleSubmit}
          errors={form1.formState.errors}
          isSubmitting={form1.formState.isSubmitting}
          submitted={submitted1}
        />

        {/* ── AFTER SEND + QUICK ANSWERS ── */}
        <AfterSendSection />

        {/* ── ORIGINAL CONTACT SECTION ── */}
        {/* <section className="py-20 border-t border-border/30 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              ── Left column — contact info ──
              <div data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Let's <span className="text-gradient">connect</span>.
                </h2>
                <p className="text-muted-foreground text-lg mb-10">
                  Tell us about your mission. We respond within one earth-day to help you defy digital gravity.
                </p>
                <ul className="space-y-6 text-base">
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Us</div>
                      <a href="mailto:support@infynuxsolutions.in" className="font-medium hover:text-primary transition-colors">
                        support@infynuxsolutions.in
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                      <a href="tel:+917010850923" className="font-medium hover:text-primary transition-colors">
                        +91 7010850923
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Visit Us</div>
                      <div className="font-medium">Thiruvarur, Tamil Nadu 610001, India</div>
                    </div>
                  </li>
                </ul>
              </div>

              ── Right column — contact form ──
              <form 
                data-aos="fade-up" 
                data-aos-delay="120"
                onSubmit={form2.handleSubmit(onSubmit2)}
                noValidate
                className="gradient-border rounded-2xl p-8 sm:p-12 space-y-6"
              >
                Name
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    disabled={form2.formState.isSubmitting}
                    {...form2.register("name")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors disabled:opacity-50 ${
                      form2.formState.errors.name
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-primary"
                    }`}
                  />
                  {form2.formState.errors.name && <p className="mt-1.5 text-xs text-red-400">{form2.formState.errors.name.message}</p>}
                </div>

                Email
                <div>
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@galaxy.com"
                    disabled={form2.formState.isSubmitting}
                    {...form2.register("email")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors disabled:opacity-50 ${
                      form2.formState.errors.email
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-primary"
                    }`}
                  />
                  {form2.formState.errors.email && <p className="mt-1.5 text-xs text-red-400">{form2.formState.errors.email.message}</p>}
                </div>

                Message
                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about the mission..."
                    disabled={form2.formState.isSubmitting}
                    {...form2.register("message")}
                    className={`mt-2 w-full rounded-lg bg-white/5 border px-4 py-3 outline-none transition-colors resize-none disabled:opacity-50 ${
                      form2.formState.errors.message
                        ? "border-red-500/70 focus:border-red-400"
                        : "border-white/10 focus:border-primary"
                    }`}
                  />
                  {form2.formState.errors.message && <p className="mt-1.5 text-xs text-red-400">{form2.formState.errors.message.message}</p>}
                </div>

                Submit
                <button
                  type="submit"
                  disabled={form2.formState.isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground hover:opacity-90 hover:scale-[1.02] transition-all shadow-xl disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {form2.formState.isSubmitting ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Transmitting...</>
                  ) : submitted2 ? (
                    <><CheckCircle2 className="h-4 w-4" /> Transmitted ✓</>
                  ) : (
                    <>Send Message <Send className="h-4 w-4" /></>
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground/50 leading-relaxed">
                  Your data is stored securely and never shared. We respond within one earth-day.
                </p>
              </form>

            </div>
          </div>
        </section> */}

      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}



