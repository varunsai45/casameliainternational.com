import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { getService, services, type Service } from "@/lib/services-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} : CASAMELIA International` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} : CASAMELIA International` },
          { property: "og:description", content: loaderData.service.description },
          { property: "og:image", content: loaderData.service.hero },
        ]
      : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <Link to="/" className="text-champagne">← Back to Casamelia</Link>
    </div>
  ),
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden bg-onyx">
        <div
          ref={heroRef}
          className="absolute inset-0 will-change-transform"
          style={{ backgroundImage: `url(${service.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/40 to-background" />
        <div className="absolute inset-0 bg-grain" />

        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <Link
            to="/"
            hash="services"
            className="text-[10px] tracking-luxury uppercase text-foreground/60 hover:text-champagne transition-colors mb-8"
          >
            ← All Services
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Service · {service.n}</span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-5xl">
            {service.title}
          </h1>
          <p className="mt-6 font-display italic text-2xl lg:text-3xl text-champagne/90 max-w-3xl">
            {service.tagline}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-7">
            <p className="font-display text-3xl lg:text-5xl leading-[1.15] text-foreground/90">
              {service.description}
            </p>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-4">
            <div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">Signature Features</div>
            <ul className="space-y-4">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-4 border-b border-border/40 pb-4">
                  <span className="text-champagne mt-1">◆</span>
                  <span className="text-foreground/80 font-light">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Gallery with 3D tilt */}
      <section className="py-16 lg:py-24 bg-onyx bg-grain px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Visual Story</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl max-w-3xl leading-[1] mb-16">
              Step inside the <span className="italic">atmosphere</span>.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {service.gallery.map((g, i) => {
              const span =
                i === 0 ? "lg:col-span-8 lg:row-span-2 aspect-[4/3] lg:aspect-auto lg:h-[720px]" :
                i === 1 ? "lg:col-span-4 aspect-[4/5] lg:h-[346px]" :
                i === 2 ? "lg:col-span-4 aspect-[4/5] lg:h-[346px]" :
                "lg:col-span-12 aspect-[16/9]";
              return (
                <Reveal key={i} delay={i * 100} className={span}>
                  <TiltCard className="w-full h-full">
                    <div className="group relative w-full h-full overflow-hidden bg-card border-gradient">
                      <img
                        src={g.src}
                        alt={g.caption}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-110"
                        style={{ transform: "translateZ(0)" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent opacity-90" />
                      <div className="absolute inset-x-0 bottom-0 p-8 lg:p-10">
                        <div className="text-[10px] tracking-luxury text-bronze uppercase mb-2">Detail</div>
                        <div className="font-display text-xl lg:text-2xl text-foreground">{g.caption}</div>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-[1400px] mx-auto text-center">
        <Reveal>
          <div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">Begin a Project</div>
          <h2 className="font-display text-4xl lg:text-6xl leading-[1] max-w-4xl mx-auto">
            Let's design your <span className="italic">{service.title.toLowerCase()}</span>.
          </h2>
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500"
            >
              Book Consultation →
            </Link>
            <Link
              to="/"
              hash="projects"
              className="inline-flex items-center gap-3 border border-champagne/40 text-champagne px-8 py-4 text-[11px] tracking-luxury uppercase hover:bg-champagne/10 transition-all duration-500"
            >
              View Projects
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Other services */}
      <section className="py-16 lg:py-24 bg-onyx bg-grain px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
              <h3 className="font-display text-3xl lg:text-5xl">Other Capabilities</h3>
              <Link to="/" hash="services" className="text-[11px] tracking-luxury uppercase text-champagne">
                View All →
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 80}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group block relative aspect-[4/5] overflow-hidden bg-card border-gradient"
                >
                  <img
                    src={o.hero}
                    alt={o.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[10px] tracking-luxury text-bronze uppercase mb-2">{o.n}</div>
                    <div className="font-display text-xl text-foreground">{o.title}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCall />
    </main>
  );
}
