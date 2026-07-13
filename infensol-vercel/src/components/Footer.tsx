import { Link } from "@tanstack/react-router";
import logo from "@/assets/casamelia-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border/40 py-16 px-6 lg:px-16 bg-onyx">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <img src={logo} alt="Casamelia International" className="h-20 w-auto mb-4 object-contain" />
          <p className="mt-6 text-xs text-foreground/50 font-light leading-relaxed max-w-xs">
            German-inspired luxury interiors, architecture, smart living and
            in-house modular manufacturing.
          </p>
          <div className="mt-6 text-[10px] tracking-luxury uppercase text-bronze">Founder</div>
          <div className="text-sm text-foreground/80 mt-1">Santhosh MS</div>
        </div>

        <FooterCol
          title="Services"
          items={[
            { label: "Villa Interiors", slug: "villa-interiors" },
            { label: "Modular Kitchens", slug: "modular-kitchens" },
            { label: "Architecture", slug: "architecture" },
            { label: "Hotels & Restaurants", slug: "hotels-restaurants" },
            { label: "Turnkey Projects", slug: "turnkey-projects" },
          ]}
        />

        <div>
          <div className="text-[10px] tracking-luxury uppercase text-bronze mb-5">Contact</div>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <a href="tel:+919900716198" className="text-foreground/70 hover:text-champagne transition-colors">+91 99007 16198</a>
            </li>
            <li>
              <a href="tel:+919606448804" className="text-foreground/70 hover:text-champagne transition-colors">+91 96064 48804</a>
            </li>
            <li>
              <a href="https://wa.me/919900716198" target="_blank" rel="noreferrer" className="text-foreground/70 hover:text-champagne transition-colors">WhatsApp</a>
            </li>
            <li>
              <a href="mailto:santhosh@casameliainternational.com" className="text-foreground/70 hover:text-champagne transition-colors break-all">santhosh@casameliainternational.com</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] tracking-luxury uppercase text-bronze mb-5">Locations</div>
          <div className="text-xs text-foreground/70 font-light leading-relaxed mb-5">
            <div className="text-[10px] tracking-luxury uppercase text-foreground/40 mb-1">Office</div>
            No. 19, Workspring, Primrose Road, Ashok Nagar, Off MG Road, Bangalore 560025
          </div>
          <div className="text-xs text-foreground/70 font-light leading-relaxed">
            <div className="text-[10px] tracking-luxury uppercase text-foreground/40 mb-1">Factory</div>
            10A, Sector 2, Phase 1, Bidadi Industrial Area, Bangalore 562109
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto pt-12 mt-12 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-[10px] tracking-luxury uppercase text-foreground/40">
        <div>© {new Date().getFullYear()} Casamelia International · Bangalore</div>
        <div className="flex flex-wrap gap-6">
          <Link to="/factory-machinery" className="hover:text-champagne transition-colors">Factory & Machinery</Link>
          <Link to="/faq" className="hover:text-champagne transition-colors">FAQ</Link>
          <Link to="/blogs" className="hover:text-champagne transition-colors">Blogs</Link>
          <Link to="/terms" className="hover:text-champagne transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-champagne transition-colors">Privacy Policy</Link>
        </div>
        <div>Manufactured In-House · German Materials</div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; slug: string }[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-luxury uppercase text-bronze mb-5">{title}</div>
      <ul className="space-y-3">
        {items.map((i) => (
          <li key={i.slug}>
            <Link
              to="/services/$slug"
              params={{ slug: i.slug }}
              className="text-sm text-foreground/70 hover:text-champagne transition-colors font-light"
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
