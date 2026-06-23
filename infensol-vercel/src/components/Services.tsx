import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { services } from "@/lib/services-data";

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-28 px-6 lg:px-16 max-w-[1400px] mx-auto">
      <Reveal>
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-bronze" />
          <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Capabilities</span>
        </div>
        <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl max-w-3xl leading-[1.08]">
          A complete <span className="italic">luxury</span> design house.
        </h2>
        <p className="mt-6 max-w-xl text-foreground/60 font-light">
          Twelve disciplines under one atelier, orchestrated by senior
          architects and Lufthansa-class project management. Tap any service to step inside.
        </p>
      </Reveal>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/40">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 40}>
            <Link
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group relative block p-8 lg:p-10 bg-background h-full overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bronze/0 to-bronze/0 group-hover:from-bronze/[0.08] group-hover:to-transparent transition-all duration-700" />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-cover bg-center"
                style={{ backgroundImage: `url(${s.hero})` }}
              />
              <div className="absolute inset-0 bg-onyx/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="text-[10px] tracking-luxury text-bronze mb-6">{s.n}</div>
                  <h3 className="font-display text-2xl lg:text-3xl mb-3 group-hover:text-champagne transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-sm text-foreground/55 leading-relaxed max-w-xs font-light">{s.tagline}</p>
                  <div className="mt-6 text-[10px] tracking-luxury uppercase text-champagne opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    Explore →
                  </div>
                </div>
                <span className="text-champagne/60 group-hover:text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">↗</span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
