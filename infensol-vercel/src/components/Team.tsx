import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const TEAM_HERO = "/images/team/team-hero.jpg";

type Stat =
  | { value: number; suffix: string; label: string }
  | { text: string; sub: string };

const stats: Stat[] = [
  { value: 40, suffix: "+", label: "Team Members" },
  { value: 40000, suffix: "", label: "Sq. Ft. Manufacturing Facility" },
  { value: 100, suffix: "%", label: "In-House Production" },
  { text: "Luxury Interior Specialists", sub: "Design · Craft · Detail" },
  { text: "End-to-End Project Execution", sub: "Concept to Completion" },
] as const;

export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-36 overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, oklch(0.62 0.09 55 / 0.1), transparent 60%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Hero image with overlay */}
        <Reveal>
          <div className="group relative overflow-hidden border-gradient">
            <img
              src={TEAM_HERO}
              alt="The Casamelia International manufacturing and design team at work in the Bidadi facility"
              loading="lazy"
              className="h-[520px] lg:h-[620px] w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/55 to-onyx/15" />
            <div className="absolute inset-0 bg-grain" aria-hidden />

            <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-14 lg:pb-20">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-bronze" />
                <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                  Our Team
                </span>
                <span className="h-px w-12 bg-bronze" />
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08] max-w-3xl">
                40+ <span className="italic">Experts</span>. One Shared{" "}
                <span className="text-gradient-gold">Vision.</span>
              </h2>
              <p className="mt-8 text-foreground/70 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Behind every Casamelia project is a dedicated team of over 40 skilled
                professionals — designers, architects, project managers, engineers,
                craftsmen, manufacturing specialists, installation experts, and customer
                support professionals. Together, they transform ideas into exceptional
                luxury living spaces with precision, innovation, and uncompromising quality.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-px bg-border/40 border border-border/40">
          {stats.map((s) => (
            <Reveal
              key={"value" in s ? s.label : s.sub}
              className="bg-background p-8 lg:p-10"
            >
              {"value" in s ? (
                <div className="font-display text-3xl lg:text-4xl text-gradient-gold">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
              ) : (
                <div className="font-display text-lg lg:text-xl leading-snug text-gradient-gold">
                  {s.text}
                </div>
              )}
              <div className="text-[10px] tracking-luxury uppercase text-foreground/45 mt-3">
                {"label" in s ? s.label : s.sub}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-16 lg:mt-20 text-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-2 border-champagne text-champagne px-9 py-4 text-[11px] tracking-luxury uppercase bg-onyx/30 backdrop-blur-md hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500"
            >
              Meet Our Team
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
