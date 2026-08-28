import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Linkedin, Instagram, MapPin, Mail, Phone } from "lucide-react";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 mt-10 relative overflow-hidden">
      <div className="site-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group inline-flex">
              <img
                src="/INfynux-Logo.png"
                alt="Infynux Solutions Web Development Company Thiruvarur & Nagapattinam"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                INFYNUX
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Infynux Solutions is a global software development company providing web development, mobile app development, UI/UX design, AI integration, and cloud solutions. We help startups, businesses, and organizations worldwide transform ideas into powerful digital products.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Youtube, href: "#" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/infynux-solutions/" },
                { Icon: Instagram, href: "https://www.instagram.com/infynuxsolutions/" },
                { Icon: WhatsAppIcon, href: "https://wa.me/917010850923" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label="social"
                  className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4 text-muted-foreground font-medium text-xs">
              <div className="flex items-center justify-center">MSME Registered</div>
              <div className="flex items-center justify-center">StartupTN</div>
            </div>
          </div>

          <FooterCol
            title="Company"
            items={[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Projects", to: "/work" },
              { label: "Contact", to: "/contact" }
            ]}
          />

          <FooterCol
            title="Services"
            items={[
              { label: "Web Development", to: "/services/web-development" },
              { label: "UI/UX Design", to: "/services/ui-ux-design" },
              { label: "App Development", to: "/services/app-development" },
              { label: "AI Integration", to: "/services/ai-integrations" },
              { label: "Cloud Solutions", to: "/services/cloud-solutions" },
              { label: "Branding", to: "/services/branding" },
              { label: "Digital Marketing", to: "/services/digital-marketing" }
            ]}
          />

          <div className="space-y-6 lg:col-span-1">
            <div className="relative inline-block">
              <h4 className="font-display text-lg font-semibold text-foreground">Connect</h4>
            </div>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">Thiruvarur, Tamil Nadu 610001, India</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground pt-2 break-all sm:break-normal">support@infynuxsolutions.in</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <WhatsAppIcon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">+91 7010850923</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground pt-2">+91 7010850923</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm font-medium text-muted-foreground mb-8">
          <p>
            Web Development • Mobile App Development • UI/UX Design • AI Integration • Cloud Solutions
          </p>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} INFYNUXSOLUTIONS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string, to: string }[] }) {
  return (
    <div className="space-y-6">
      <div className="relative inline-block">
        <h4 className="font-display text-lg font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-4 pt-2">
        {items.map((i) => (
          <li key={i.label} className="group">
            <Link to={i.to} className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all">
              <span className="text-primary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">&rarr;</span>
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
