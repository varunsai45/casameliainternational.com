import { useEffect, useRef } from "react";
import heroVilla from "@/assets/hero-villa.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="top" className="relative h-screen min-h-[760px] w-full overflow-hidden bg-onyx">
      {/* Parallax background */}
      <div
        ref={ref}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${heroVilla})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-onyx/50 via-onyx/20 to-background" />
      <div className="absolute inset-0 bg-grain" aria-hidden />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, oklch(0.62 0.09 55 / 0.12), transparent 60%)" }}
      />

      {/* Side meta */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[10px] tracking-wider-luxury text-foreground/40">
        EST. BANGALORE · INDIA
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[10px] tracking-wider-luxury text-foreground/40">
        GERMAN PRECISION · LUXURY CRAFT
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="mb-8 animate-float">
          <span className="block text-[11px] tracking-wider-luxury text-bronze uppercase">
            Luxury × Architecture × Craft
          </span>
        </div>

        <h1 className="font-display text-[44px] sm:text-[56px] lg:text-[72px] xl:text-[78px] leading-[1.08] max-w-5xl">
          Luxury Living
          <br />
          <span className="italic font-light">Reimagined</span> through
          <br />
          <span className="text-gradient-gold">Design & Craft.</span>
        </h1>

        <p className="mt-10 max-w-xl text-base lg:text-lg text-foreground/60 font-light leading-relaxed">
          German-inspired interiors, architecture and intelligent living
          experiences, crafted for villas, hotels and the modern visionary.
        </p>

        <div className="mt-12 flex flex-wrap gap-5">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-9 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500"
          >
            Explore Projects
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-3 border-2 border-champagne text-champagne px-9 py-4 text-[11px] tracking-luxury uppercase bg-onyx/30 backdrop-blur-md hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-champagne group-hover:bg-primary-foreground transition-colors" />
            Book Consultation
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[10px] tracking-luxury text-foreground/40">
        SCROLL
        <span className="block w-px h-12 bg-gradient-to-b from-bronze to-transparent" />
      </div>
    </section>
  );
}
