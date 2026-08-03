import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

type Stat = {
  label: string;
  value?: number;
  suffix?: string;
  unit?: string;
  text?: string;
};

const stats: Stat[] = [
  { label: "Team Members", value: 40, suffix: "+" },
  { label: "In-House Execution", value: 100, suffix: "%" },
  { label: "Manufacturing Facility", value: 40000, unit: "Sq. Ft." },
  { label: "Customer Support", text: "Lifetime" },
];

export function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-36 overflow-hidden bg-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, oklch(0.62 0.09 55 / 0.1), transparent 60%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                Our Team
              </span>
              <span className="h-px w-12 bg-bronze" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
              40+ <span className="italic">Experts</span>. One Shared{" "}
              <span className="text-gradient-gold">Vision.</span>
            </h2>
            <p className="mt-8 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Behind every Casamelia project stands a dedicated team of over 40 skilled
              professionals committed to delivering exceptional luxury interiors with
              precision, craftsmanship, and uncompromising quality.
            </p>
          </div>
        </Reveal>

        {/* Stats */}
        <div className="mt-16 lg:mt-24 grid grid-cols-2 xl:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 60} className="bg-background p-8 lg:p-10">
              <div className="font-display text-3xl lg:text-4xl text-gradient-gold">
                {s.text ? (
                  s.text
                ) : (
                  <>
                    <Counter to={s.value!} suffix={s.suffix ?? ""} />
                    {s.unit && (
                      <span className="ml-2 text-base lg:text-lg text-foreground/50 font-light">
                        {s.unit}
                      </span>
                    )}
                  </>
                )}
              </div>
              <div className="text-[10px] tracking-luxury uppercase text-foreground/45 mt-3">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
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
