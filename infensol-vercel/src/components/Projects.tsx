import { Reveal } from "./Reveal";
import villa from "@/assets/project-villa.jpg";
import kitchen from "@/assets/project-kitchen.jpg";
import hotel from "@/assets/project-hotel.jpg";
import exterior from "@/assets/project-exterior.jpg";

const projects = [
  { img: villa, title: "Whitefield Sky Villa", cat: "Residential · 12,400 sqft", loc: "Bangalore" },
  { img: kitchen, title: "Obsidian Culinary Suite", cat: "Modular Kitchen · German", loc: "Koramangala" },
  { img: hotel, title: "Aurum Hospitality Lobby", cat: "Hotel · Hospitality", loc: "Dubai Marina" },
  { img: exterior, title: "Lakeside Architectural Estate", cat: "Architecture · Exterior", loc: "Devanahalli" },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-28 bg-onyx bg-grain">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-bronze" />
                <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Selected Work</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl max-w-3xl leading-[1.08]">
                Projects that <span className="italic">define</span> a standard.
              </h2>
            </div>
            <p className="max-w-sm text-foreground/55 text-sm font-light leading-relaxed">
              From private villas to international hospitality, every project
              is a statement in restraint, material and light.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {projects.map((p, i) => {
            const span =
              i === 0 ? "lg:col-span-7 lg:row-span-2 aspect-[4/5] lg:aspect-auto lg:h-[860px]" :
              i === 1 ? "lg:col-span-5 aspect-[4/5] lg:h-[420px]" :
              i === 2 ? "lg:col-span-5 aspect-[4/5] lg:h-[420px]" :
              "lg:col-span-12 aspect-[16/9]";
            return (
              <Reveal key={p.title} delay={i * 120} className={span}>
                <div className="group relative block w-full h-full overflow-hidden bg-card luxe-hover border-gradient">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10 flex items-end gap-6">
                    <div>
                      <div className="text-[10px] tracking-luxury text-bronze uppercase mb-3">{p.cat}</div>
                      <h3 className="font-display text-2xl lg:text-4xl text-foreground">{p.title}</h3>
                      <div className="text-[11px] tracking-luxury text-foreground/50 uppercase mt-2">{p.loc}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
