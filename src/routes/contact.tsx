import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BackToTop } from "../components/BackToTop";

import { TeamSection } from "../components/TeamSection";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 60 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32">
        <section className="py-28 relative">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div data-aos="fade-up">
                <h1 className="text-4xl sm:text-6xl font-bold mb-6">
                  Let's <span className="text-gradient-cyan">connect</span>.
                </h1>
                <p className="text-muted-foreground text-xl mb-12">
                  Tell us about your mission. We respond within one earth-day to help you defy digital gravity.
                </p>
                <ul className="space-y-6 text-base">
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email Us</div>
                      <div className="font-medium">sshathiskumar54@gmail.com</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Call Us</div>
                      <div className="font-medium">+91 9944911273</div>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-[var(--cyan)]">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Visit Us</div>
                      <div className="font-medium">Nagapattinam, Tamil Nadu, India</div>
                    </div>
                  </li>
                </ul>
              </div>
              <form
                data-aos="fade-up"
                data-aos-delay="120"
                onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 3000); }}
                className="gradient-border rounded-2xl p-8 sm:p-12 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                  <input id="name" required type="text" className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[var(--cyan)] transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                  <input id="email" required type="email" className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[var(--cyan)] transition-colors" placeholder="you@galaxy.com" />
                </div>
                <div>
                  <label htmlFor="msg" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                  <textarea id="msg" required rows={5} className="mt-2 w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[var(--cyan)] transition-colors resize-none" placeholder="Tell us about the mission…" />
                </div>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cyan px-6 py-4 font-semibold text-[#001018] hover:scale-[1.02] transition-transform shadow-xl shadow-[var(--cyan)]/20">
                  {sent ? "Transmitted ✓" : <>Send Message <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </div>
          </div>
        </section>

        <TeamSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
