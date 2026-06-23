import { Reveal } from "./Reveal";

const pillars = [
  { n: "I", t: "German Precision", d: "Engineering tolerances and joinery standards adopted from European modular benchmarks." },
  { n: "II", t: "Design-Led Atelier", d: "Senior architects and designers craft every concept, plan and material palette in-house." },
  { n: "III", t: "Luxury Craftsmanship", d: "Master artisans, premium veneers, natural stone and bespoke metalwork." },
  { n: "IV", t: "Turnkey Execution", d: "Single accountable studio, from first sketch to keys in hand." },
];

const stats = [
  { v: "₹10L+", l: "Project floor" },
  { v: "150+", l: "Luxury homes" },
  { v: "12", l: "Disciplines" },
  { v: "100%", l: "Turnkey" },
];

export function WhyCasamelia() {
  return (
    <section className="relative py-20 lg:py-28 px-6 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Why Casamelia</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
              An atelier built on <span className="italic">four</span> uncompromising pillars.
            </h2>
            <p className="mt-8 text-foreground/60 font-light max-w-md">
              We exist for clients who treat their home as architecture, not
              decoration. Every project is a long-term commitment to material,
              detail and atmosphere.
            </p>

            <div className="mt-14 grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl lg:text-5xl text-gradient-gold">{s.v}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-foreground/45 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 space-y-px bg-border/40">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="bg-background p-8 lg:p-10 flex gap-8 lg:gap-12 items-start group">
                <div className="font-display text-3xl text-champagne/70 group-hover:text-champagne transition-colors min-w-[2rem]">
                  {p.n}
                </div>
                <div>
                  <h3 className="font-display text-2xl lg:text-3xl mb-3 group-hover:text-champagne transition-colors duration-500">
                    {p.t}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed font-light max-w-md">{p.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
