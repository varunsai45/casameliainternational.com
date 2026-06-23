import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import consultation from "@/assets/process-consultation.jpg";
import concept from "@/assets/process-concept.jpg";
import development from "@/assets/process-development.jpg";
import handover from "@/assets/process-handover.jpg";

const steps = [
  {
    n: "01",
    t: "Consultation",
    tag: "Discovery",
    d: "A private session covering vision, lifestyle and brief.",
    img: consultation,
  },
  {
    n: "02",
    t: "Concept & Moodboard",
    tag: "Direction",
    d: "Materials, palettes and 3D concepts crafted by senior designers.",
    img: concept,
  },
  {
    n: "03",
    t: "Design Development",
    tag: "Engineering",
    d: "Architectural drawings, renderings and technical detailing.",
    img: development,
  },
  {
    n: "04",
    t: "Execution & Handover",
    tag: "Delivery",
    d: "Turnkey build, install, styling, keys delivered.",
    img: handover,
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = r.height - vh;
      const p = Math.min(1, Math.max(0, (vh * 0.6 - r.top) / total));
      setProgress(p);

      // Determine active step by which card is closest to viewport center
      const center = vh / 2;
      let nearest = 0;
      let nearestDist = Infinity;
      stepRefs.current.forEach((node, i) => {
        if (!node) return;
        const rr = node.getBoundingClientRect();
        const d = Math.abs(rr.top + rr.height / 2 - center);
        if (d < nearestDist) {
          nearestDist = d;
          nearest = i;
        }
      });
      setActive(nearest);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 lg:py-36 overflow-hidden bg-onyx bg-grain"
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, oklch(0.82 0.07 80 / 0.18), transparent 55%), radial-gradient(ellipse at 10% 90%, oklch(0.62 0.09 55 / 0.18), transparent 55%)",
        }}
      />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-24 lg:mb-36">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-bronze" />
                <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                  The Process
                </span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
                Four phases.
                <br />
                One <span className="italic text-gradient-gold">seamless</span> journey.
              </h2>
            </div>
            <p className="lg:col-span-4 text-foreground/55 font-light text-base lg:text-lg leading-relaxed">
              From the first conversation to the final key, every phase is
              choreographed with cinematic precision.
            </p>
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative grid grid-cols-12 gap-6 lg:gap-12">
          {/* Vertical progress rail (desktop) */}
          <div className="hidden lg:flex col-span-1 justify-center relative">
            <div className="sticky top-0 h-screen flex items-center">
              <div className="relative h-[70vh] w-px bg-border/40 overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-champagne via-bronze to-champagne transition-[height] duration-300 ease-out"
                  style={{ height: `${progress * 100}%` }}
                />
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-champagne shadow-[0_0_24px_oklch(0.82_0.07_80/0.8)] transition-all duration-300"
                  style={{ top: `calc(${progress * 100}% - 6px)` }}
                />
              </div>
            </div>
          </div>

          {/* Steps stack */}
          <div className="col-span-12 lg:col-span-11 space-y-32 lg:space-y-56">
            {steps.map((s, i) => {
              const isActive = active === i;
              const flip = i % 2 === 1;
              return (
                <div
                  key={s.n}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="relative"
                >
                  <Reveal>
                    <div
                      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                        flip ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Image */}
                      <div className="lg:col-span-8">
                        <figure
                          className={`group relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden border-gradient transition-all duration-1000 ${
                            isActive
                              ? "shadow-luxe scale-100"
                              : "opacity-70 scale-[0.98]"
                          }`}
                        >
                          <img
                            src={s.img}
                            alt={s.t}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-onyx/70 via-onyx/10 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
                          {/* Floating phase number */}
                          <div className="absolute top-6 left-6 lg:top-10 lg:left-10">
                            <div className="font-display text-6xl lg:text-9xl leading-none text-foreground/15 group-hover:text-gradient-gold transition-all duration-700">
                              {s.n}
                            </div>
                          </div>
                          {/* Bottom tag */}
                          <figcaption className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 flex items-end justify-between gap-6">
                            <div className="text-[10px] tracking-luxury text-champagne/80 uppercase">
                              Phase {s.n} · {s.tag}
                            </div>
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-champagne/40 to-transparent" />
                          </figcaption>
                          {/* Hover shimmer */}
                          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                            style={{
                              background:
                                "linear-gradient(120deg, transparent 30%, oklch(0.82 0.07 80 / 0.12) 50%, transparent 70%)",
                            }}
                          />
                        </figure>
                      </div>

                      {/* Text */}
                      <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                          <span
                            className={`h-px transition-all duration-700 ${
                              isActive ? "w-16 bg-champagne" : "w-8 bg-bronze/60"
                            }`}
                          />
                          <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                            {s.tag}
                          </span>
                        </div>
                        <h3 className="font-display text-3xl lg:text-5xl xl:text-6xl leading-[1] mb-6">
                          {s.t}
                        </h3>
                        <p className="text-sm lg:text-base text-foreground/55 leading-relaxed font-light max-w-sm">
                          {s.d}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
