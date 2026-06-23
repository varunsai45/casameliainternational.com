import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/casamelia-logo.png";

const links = [
  { hash: "projects", label: "Projects" },
];

const secondaryLinks = [
  { hash: "services", label: "Services" },
  { hash: "process", label: "Process" },
  { hash: "contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [manufacturingOpen, setManufacturingOpen] = useState(false);
  const manufacturingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!manufacturingRef.current?.contains(event.target as Node)) setManufacturingOpen(false);
    };
    document.addEventListener("mousedown", closeMenu);
    return () => document.removeEventListener("mousedown", closeMenu);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Casamelia International" className="h-16 lg:h-[68px] w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              className="text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-champagne transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          <div ref={manufacturingRef} className="relative">
            <button type="button" onClick={() => setManufacturingOpen((value) => !value)} className="inline-flex items-center gap-1.5 text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-champagne transition-colors duration-300" aria-expanded={manufacturingOpen}>
              Manufacturing <ChevronDown size={12} strokeWidth={1.5} className={`transition-transform duration-300 ${manufacturingOpen ? "rotate-180" : ""}`} />
            </button>
            {manufacturingOpen && (
              <div className="absolute left-1/2 top-full mt-5 w-64 -translate-x-1/2 glass p-2 shadow-luxe">
                <Link to="/" hash="manufacturing" onClick={() => setManufacturingOpen(false)} className="block px-4 py-3 text-[10px] tracking-luxury uppercase text-foreground/70 hover:text-champagne hover:bg-secondary/60 transition-colors">Manufacturing Overview</Link>
                <Link to="/factory-machinery" onClick={() => setManufacturingOpen(false)} className="block px-4 py-3 text-[10px] tracking-luxury uppercase text-foreground/70 hover:text-champagne hover:bg-secondary/60 transition-colors">Factory & Machinery</Link>
              </div>
            )}
          </div>
          {secondaryLinks.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} className="text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-champagne transition-colors duration-300">
              {l.label}
            </Link>
          ))}
          <Link to="/faq" className="text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-champagne transition-colors duration-300">FAQ</Link>
          <Link to="/blogs" className="text-[11px] tracking-luxury uppercase text-foreground/70 hover:text-champagne transition-colors duration-300">Blogs</Link>
        </nav>

        <Link
          to="/"
          hash="contact"
          className="group relative hidden lg:inline-flex items-center gap-3 border-2 border-champagne text-champagne px-9 py-4 text-[11px] tracking-luxury uppercase bg-onyx/30 backdrop-blur-md hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-champagne group-hover:bg-primary-foreground transition-colors" />
          Book Consultation
          <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-6 h-px bg-current mb-1.5" />
          <div className="w-4 h-px bg-current ml-auto" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-3 mx-6 p-6 flex flex-col gap-5">
          {links.map((l) => (
            <Link
              key={l.hash}
              to="/"
              hash={l.hash}
              onClick={() => setOpen(false)}
              className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne transition-colors duration-300"
            >
              {l.label}
            </Link>
          ))}
          {secondaryLinks.map((l) => (
            <Link key={l.hash} to="/" hash={l.hash} onClick={() => setOpen(false)} className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne transition-colors duration-300">
              {l.label}
            </Link>
          ))}
          <div className="border-y border-border/50 py-4">
            <div className="text-[10px] tracking-luxury uppercase text-bronze mb-4">Manufacturing</div>
            <div className="flex flex-col gap-4 pl-3">
              <Link to="/" hash="manufacturing" onClick={() => setOpen(false)} className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne">Manufacturing Overview</Link>
              <Link to="/factory-machinery" onClick={() => setOpen(false)} className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne">Factory & Machinery</Link>
            </div>
          </div>
          <Link to="/faq" onClick={() => setOpen(false)} className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne">FAQ</Link>
          <Link to="/blogs" onClick={() => setOpen(false)} className="text-xs tracking-luxury uppercase text-foreground/80 hover:text-champagne">Blogs</Link>
          <Link
            to="/"
            hash="contact"
            onClick={() => setOpen(false)}
            className="text-xs tracking-luxury uppercase text-champagne border border-bronze/40 px-5 py-3 text-center"
          >
            Book Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
