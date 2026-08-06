import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Linkedin, User } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | CASAMELIA International" },
      {
        name: "description",
        content:
          "Meet the team behind CASAMELIA International — the professionals driving innovation, craftsmanship, and customer excellence.",
      },
    ],
  }),
  component: TeamPage,
});

const PLACEHOLDER_COUNT = 8;

function TeamPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* Page header */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-onyx bg-grain">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.09 55 / 0.14), transparent 55%)",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                Our Team
              </span>
              <span className="h-px w-12 bg-bronze" />
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
              Meet Our <span className="italic text-gradient-gold">Team</span>
            </h1>
            <p className="mt-8 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              A placeholder section ready for future team members.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Placeholder grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <Reveal key={i} delay={(i % 4) * 60}>
                <div className="flex h-full flex-col items-center rounded-[1.5rem] border border-champagne/15 bg-onyx p-6 text-center transition-all duration-500 hover:border-champagne/40 hover:shadow-glow">
                  {/* Image placeholder */}
                  <div className="grid aspect-[3/4] w-full place-items-center overflow-hidden rounded-2xl border border-dashed border-champagne/25 bg-background">
                    <div>
                      <User size={28} strokeWidth={1.2} className="mx-auto text-foreground/25" />
                      <span className="mt-3 block text-[10px] tracking-luxury uppercase text-foreground/35">
                        Image Coming Soon
                      </span>
                    </div>
                  </div>

                  {/* Name placeholder */}
                  <div className="mt-6 font-display text-xl text-foreground/55">Coming Soon</div>

                  {/* Role placeholder */}
                  <div className="mt-2 text-[10px] tracking-luxury uppercase text-champagne/60">
                    Team Member
                  </div>

                  {/* Thin gold divider */}
                  <div className="mt-5 h-px w-12 bg-gradient-to-r from-champagne/60 to-transparent" />

                  {/* LinkedIn placeholder */}
                  <div
                    aria-label="LinkedIn coming soon"
                    className="mt-5 grid h-9 w-9 place-items-center rounded-full border border-champagne/25 text-champagne/45"
                  >
                    <Linkedin size={15} strokeWidth={1.5} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
