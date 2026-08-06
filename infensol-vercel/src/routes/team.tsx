import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { featuredMembers, remainingMembers } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet Our Team | CASAMELIA International" },
      {
        name: "description",
        content:
          "Meet the people behind CASAMELIA International — the professionals driving luxury, innovation, and craftsmanship with uncompromising quality.",
      },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />

      {/* Page header */}
      <section className="relative overflow-hidden bg-onyx bg-grain py-24 lg:py-36">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 0%, oklch(0.62 0.09 55 / 0.16), transparent 60%), radial-gradient(ellipse 40% 45% at 90% 100%, oklch(0.82 0.07 80 / 0.07), transparent 55%)",
          }}
        />
        <div className="mx-auto max-w-[1400px] px-6 text-center lg:px-16">
          <Reveal>
            <p className="mb-6 inline-flex items-center gap-3">
              <span aria-hidden className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury uppercase text-bronze">
                Our Team
              </span>
              <span aria-hidden className="h-px w-12 bg-bronze" />
            </p>
            <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl">
              Meet the <span className="italic">People</span> Behind{" "}
              <span className="text-gradient-gold">Casamelia</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-foreground/60 lg:text-lg">
              Behind every exceptional space is a passionate team of professionals committed to
              delivering luxury, innovation, and craftsmanship with uncompromising quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Team */}
      <section className="px-6 pt-20 lg:px-16 lg:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team divider */}
      <Reveal>
        <div className="px-6 pt-20 lg:px-16 lg:pt-24">
          <div className="mx-auto flex max-w-[1400px] items-center gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-champagne/40" />
            <span className="text-[10px] tracking-wider-luxury uppercase text-bronze">
              Our Team
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-champagne/40" />
          </div>
        </div>
      </Reveal>

      {/* Remaining Team */}
      <section className="px-6 py-20 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {remainingMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
