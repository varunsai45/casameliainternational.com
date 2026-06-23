import { Reveal } from "./Reveal";

const quotes = [
  { q: "Casamelia turned our villa into a piece of architecture. The detail, materials and finish are international standard.", a: "Rohan & Aanya M.", r: "Whitefield Villa Owner" },
  { q: "Their atelier compressed weeks of decisions into one afternoon, without losing the luxury feel.", a: "Vikram S.", r: "Hotelier, Dubai" },
  { q: "German precision in Bangalore. The modular kitchen is flawless.", a: "Meera K.", r: "NRI, Koramangala" },
];

export function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 bg-onyx bg-grain">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Clientele</span>
              <span className="h-px w-12 bg-bronze" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
              Trusted by India's most <span className="italic">discerning</span> homeowners.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.a} delay={i * 120}>
              <figure className="glass p-10 h-full flex flex-col luxe-hover">
                <div className="text-champagne font-display text-5xl leading-none mb-6">"</div>
                <blockquote className="font-display text-xl lg:text-2xl leading-snug text-foreground/85 flex-1">
                  {q.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border/40">
                  <div className="text-sm text-foreground">{q.a}</div>
                  <div className="text-[10px] tracking-luxury uppercase text-bronze mt-1">{q.r}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
