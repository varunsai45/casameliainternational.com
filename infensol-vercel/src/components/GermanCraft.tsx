import { Reveal } from "./Reveal";

export function GermanCraft() {
  return (
    <section id="manufacturing" className="relative py-24 lg:py-36 overflow-hidden bg-onyx bg-grain">
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{ background: "radial-gradient(ellipse at 50% 20%, oklch(0.62 0.09 55 / 0.22), transparent 60%)" }}
      />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-16 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Made in our Atelier · Imported from Germany</span>
            <span className="h-px w-12 bg-bronze" />
          </div>

          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08] max-w-4xl mx-auto">
            We <span className="italic">manufacture</span> our own.
            <br />
            Sourced from <span className="text-gradient-gold">Germany</span>.
          </h2>

          <p className="mt-10 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Our 40,000 sq. ft. facility in Bidadi produces every cabinet,
            wardrobe and modular system in-house, engineered with hardware,
            veneers and finishes flown in directly from German suppliers.
          </p>
        </Reveal>

        {/* Spec row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {[
            { v: "100%", l: "Manufactured in-house" },
            { v: "21 Days", l: "Average Delivery" },
            { v: "40K", l: "sq. ft. facility" },
            { v: "0.1mm", l: "Joinery tolerance" },
          ].map((s) => (
            <div key={s.l} className="bg-background p-8 lg:p-10">
              <div className="font-display text-4xl lg:text-5xl text-gradient-gold">{s.v}</div>
              <div className="text-[10px] tracking-luxury uppercase text-foreground/45 mt-3">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
