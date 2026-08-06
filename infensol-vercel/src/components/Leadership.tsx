import { useCallback, useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const members = [
  {
    name: "Santhosh M S",
    role: ["CEO · Managing Director"],
    img: "/images/team/santhosh-ms.png",
    alt: "Santhosh M S — CEO and Managing Director, Casamelia International",
    linkedin: "https://www.linkedin.com/in/santhosh-m-s-a4880637",
    description:
      "Leading Casamelia International with a vision for world-class luxury interiors, innovation, and premium craftsmanship.",
  },
  {
    name: "Nitu Maheshwari",
    role: ["General Manager", "Sales & Operations"],
    img: "/images/team/nitu-maheshwari.png",
    alt: "Nitu Maheshwari — General Manager, Sales and Operations, Casamelia International",
    linkedin: "https://www.linkedin.com/in/nitu-maheshwari-b47098188",
    description:
      "Driving seamless sales operations, customer experience, and project execution across every luxury interior project.",
  },
];

export function Leadership() {
  const [api, setApi] = useState<CarouselApi>();
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((a: CarouselApi) => {
    if (!a) return;
    setCanPrev(a.canScrollPrev());
    setCanNext(a.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section id="leadership" className="relative py-24 lg:py-36 overflow-hidden bg-onyx bg-grain">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.09 55 / 0.14), transparent 55%), radial-gradient(ellipse at 90% 90%, oklch(0.82 0.07 80 / 0.08), transparent 50%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Section header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                Our Leadership
              </span>
              <span className="h-px w-12 bg-bronze" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
              Meet the <span className="italic">Leadership</span> Behind{" "}
              <span className="text-gradient-gold">Casamelia</span>
            </h2>
            <p className="mt-8 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              The experienced professionals driving innovation, craftsmanship, and customer
              excellence across every Casamelia project.
            </p>
          </div>
        </Reveal>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          opts={{ align: "start", slidesToScroll: 1, containScroll: "trimSnaps" }}
        >
          <CarouselContent className="-ml-6">
            {members.map((m) => (
              <CarouselItem key={m.name} className="basis-full md:basis-1/2 lg:basis-1/3 pl-6">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-champagne/20 bg-onyx shadow-luxe transition-all duration-500 hover:border-champagne/50 hover:shadow-glow">
                  {/* Portrait */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[3/4]">
                      <img
                        src={m.img}
                        alt={m.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.06]"
                      />
                    </div>
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/25 to-transparent"
                      aria-hidden
                    />

                    {/* Frosted info panel */}
                    <div className="absolute inset-x-0 bottom-0 border-t border-champagne/15 bg-onyx/55 px-6 py-5 backdrop-blur-md">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h3 className="font-display text-2xl text-white leading-tight">
                            {m.name}
                          </h3>
                          <div className="mt-1.5 text-[10px] tracking-luxury uppercase text-champagne leading-relaxed">
                            {m.role.map((line) => (
                              <span key={line} className="block">
                                {line}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${m.name} on LinkedIn`}
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-champagne/40 text-champagne transition-all duration-300 hover:bg-champagne hover:text-primary-foreground"
                        >
                          <Linkedin size={15} strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="flex flex-1 flex-col p-6 lg:p-7">
                    <div className="h-px w-14 bg-gradient-to-r from-champagne to-transparent" />
                    <p className="mt-4 flex-1 text-sm lg:text-[15px] leading-relaxed text-foreground/65 font-light">
                      {m.description}
                    </p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous leaders"
            className="grid h-11 w-11 place-items-center rounded-full border border-champagne/40 text-champagne transition-all duration-300 hover:bg-champagne hover:text-primary-foreground hover:shadow-glow disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!canNext}
            aria-label="Next leaders"
            className="grid h-11 w-11 place-items-center rounded-full border border-champagne/40 text-champagne transition-all duration-300 hover:bg-champagne hover:text-primary-foreground hover:shadow-glow disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* View more */}
        <Reveal>
          <div className="mt-12 text-center">
            <Link
              to="/team"
              className="group inline-flex items-center gap-3 border-2 border-champagne text-champagne px-9 py-4 text-[11px] tracking-luxury uppercase hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-500"
            >
              View More
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
