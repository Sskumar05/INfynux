import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ContactForm } from "../form/ContactForm";
import { MagneticButton } from "../ui/MagneticButton";

export function Cta() {
  return (
    <section id="contact" className="w-full bg-[#e9e1c2] text-[var(--color-ink)] py-24 md:py-32 border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
          <span className="w-1.5 h-1.5 bg-[var(--color-gold)]" />
          <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.2em] uppercase">
            Start a project
          </span>
        </div>

        {/* Mega Link */}
        <MagneticButton 
          href="mailto:support@infynuxsolutions.in"
          className="group block w-fit mb-24"
          data-aos="fade-up"
          data-aos-delay="100"
          strength={0.15}
        >
          <div className="flex items-center gap-4 md:gap-8">
            <span className="font-display font-bold text-[48px] sm:text-6xl md:text-8xl lg:text-[10vw] leading-none tracking-tighter text-[var(--color-ink)] group-hover:text-[var(--color-gold-bright)] transition-colors duration-500">
              Let's talk
            </span>
            <motion.div 
              className="text-[var(--color-gold)]"
              whileHover={{ x: 20 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <ArrowRight className="w-12 h-12 md:w-24 md:h-24 stroke-[3px]" />
            </motion.div>
          </div>
        </MagneticButton>

        {/* Form and Meta Row Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24" data-aos="fade-up" data-aos-delay="200">
          
          {/* Contact Form Wrapper */}
          <div className="w-full lg:w-1/2 bg-[var(--color-paper)] border border-[var(--color-paper-line)] p-8 md:p-12">
            <ContactForm />
          </div>

          {/* 3-Column Meta Row (stacked on mobile, grid on desktop) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-8 content-start pt-4 lg:border-t-0 border-t border-black/10">
            
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.15em] uppercase">Email</span>
              <a href="mailto:support@infynuxsolutions.in" className="font-body text-[14px] xl:text-base text-[var(--color-ink)] hover:text-[var(--color-gold)] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                support@infynuxsolutions.in
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.15em] uppercase">Offices</span>
              <span className="font-body text-base text-[var(--color-ink)]">
                India
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] text-[var(--color-text-muted-dark)] tracking-[0.15em] uppercase">Response time</span>
              <span className="font-body text-base text-[var(--color-ink)]">
                &lt; 24 Hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
