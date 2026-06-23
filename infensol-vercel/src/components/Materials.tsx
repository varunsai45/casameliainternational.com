import { Reveal } from "./Reveal";
import materials from "@/assets/materials.jpg";

const items = [
  { n: "01", t: "Calacatta Marble" },
  { n: "02", t: "Brushed Bronze" },
  { n: "03", t: "Smoked Walnut" },
  { n: "04", t: "Champagne Brass" },
  { n: "05", t: "Italian Leather" },
  { n: "06", t: "Onyx Stone" },
];

export function Materials() {
  return (
    <section className="relative py-20 lg:py-28 bg-onyx bg-grain overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative aspect-[5/6] overflow-hidden border-gradient">
            <img src={materials} alt="Premium materials" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-onyx/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Material Library</span>
          </div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1]">
            Sourced from <span className="italic">Europe</span>.
            <br /> Composed in Bangalore.
          </h2>
          <p className="mt-8 text-foreground/60 font-light max-w-md">
            Our material library is curated from Italian quarries, German
            joineries and bespoke metal workshops, selected for permanence as
            much as presence.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-6">
            {items.map((m) => (
              <div key={m.n} className="flex items-baseline gap-4 border-b border-border/40 pb-4">
                <span className="text-[10px] tracking-luxury text-bronze">{m.n}</span>
                <span className="font-display text-xl text-foreground">{m.t}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
