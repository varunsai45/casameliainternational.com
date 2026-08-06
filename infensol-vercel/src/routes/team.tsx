import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/data/team";

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
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />

      {/* Page header */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-onyx bg-grain">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, oklch(0.62 0.09 55 / 0.14), transparent 55%), radial-gradient(ellipse at 90% 90%, oklch(0.82 0.07 80 / 0.08), transparent 50%)",
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
              Meet the <span className="italic">People</span> Behind{" "}
              <span className="text-gradient-gold">Casamelia</span>
            </h1>
            <p className="mt-8 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Behind every exceptional space is a passionate team of professionals committed
              to delivering luxury, innovation, and craftsmanship with uncompromising quality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
