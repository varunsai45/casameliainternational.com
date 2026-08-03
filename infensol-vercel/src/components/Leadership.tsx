import { Reveal } from "./Reveal";
import { Linkedin } from "lucide-react";

const profiles = [
  {
    name: "Santhosh M S",
    eyebrow: "Founder · Managing Director",
    designation: ["Managing Director", "Casamelia International LLC"],
    img: "/images/team/santhosh-ms.jpg",
    alt: "Santhosh M S — Managing Director, Casamelia International",
    linkedin: "https://www.linkedin.com/in/santhosh-m-s-a4880637",
    chips: [
      "International Business",
      "Luxury Interiors",
      "German Manufacturing",
      "Product Design",
      "Business Strategy",
    ],
    bio: [
      "Experienced Business Head with a demonstrated history of working in the construction industry across multiple verticals including German window manufacturing, architectural acoustics, and luxury interior design. He has collaborated with leading partners from Germany, Denmark, Spain, and Italy, delivering world-class craftsmanship and innovative interior solutions.",
      "With expertise in ANSYS, Simulink, Computer-Aided Engineering (CAE), Automotive Engineering, and Product Management, he combines technical excellence with strategic business leadership.",
      "He holds a Master of Technology (M.Tech.) in Product Design and Manufacturing from The National Institute of Engineering, Mysore, Karnataka.",
    ],
  },
  {
    name: "Nitu Maheshwari",
    eyebrow: "Executive Leadership",
    designation: ["General Manager", "Sales & Operations"],
    img: "/images/team/nitu-maheshwari.jpg",
    alt: "Nitu Maheshwari — General Manager, Sales & Operations, Casamelia International",
    linkedin: "https://www.linkedin.com/in/nitu-maheshwari-b47098188",
    chips: [
      "Sales Leadership",
      "Operations Management",
      "Client Relations",
      "Project Coordination",
      "Luxury Interior Projects",
    ],
    bio: [
      "Leads Sales and Operations at Casamelia International, ensuring seamless coordination between clients, designers, manufacturing, and project execution. She focuses on delivering exceptional customer experiences while maintaining operational excellence and timely project delivery.",
      "Her expertise spans sales strategy, client relationship management, and operations management, with a proven record of steering luxury interior projects from first conversation to flawless completion.",
    ],
  },
];

export function Leadership() {
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
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                Our Leadership
              </span>
              <span className="h-px w-12 bg-bronze" />
            </div>
            <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
              Meet the <span className="italic">Visionaries</span> Behind{" "}
              <span className="text-gradient-gold">Casamelia International</span>
            </h2>
            <p className="mt-8 text-foreground/60 font-light text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              The leadership team shaping exceptional luxury interiors through
              innovation, craftsmanship, and customer excellence.
            </p>
          </div>
        </Reveal>

        {/* Profiles */}
        <div className="space-y-24 lg:space-y-36">
          {profiles.map((p, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={p.name} delay={i * 80}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                  {/* Portrait */}
                  <div className={`relative lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
                    <div
                      className={`absolute -top-4 w-full h-full border border-champagne/15 hidden lg:block ${
                        flip ? "-right-4" : "-left-4"
                      }`}
                      aria-hidden
                    />
                    <figure className="group relative aspect-[4/5] overflow-hidden border-gradient shadow-luxe">
                      <img
                        src={p.img}
                        alt={p.alt}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-onyx/20 transition-opacity duration-700" />
                      <div
                        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                        style={{
                          background:
                            "linear-gradient(120deg, transparent 30%, oklch(0.82 0.07 80 / 0.12) 50%, transparent 70%)",
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />
                    </figure>
                  </div>

                  {/* Copy */}
                  <div className={`lg:col-span-7 group ${flip ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="h-px w-10 bg-bronze" />
                      <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">
                        {p.eyebrow}
                      </span>
                    </div>
                    <h3 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.05]">
                      {p.name}
                    </h3>
                    <div className="mt-4 text-[11px] tracking-luxury uppercase text-champagne leading-loose">
                      {p.designation.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 h-px w-14 bg-gradient-to-r from-champagne to-transparent transition-all duration-700 group-hover:w-24" />
                    <div className="mt-8 space-y-4 text-foreground/60 font-light leading-relaxed">
                      {p.bio.map((para) => (
                        <p key={para.slice(0, 24)}>{para}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      {p.chips.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center border border-champagne/25 bg-onyx/60 px-5 py-2 text-[10px] tracking-luxury uppercase text-champagne/85 transition-colors duration-300 hover:border-champagne hover:text-champagne"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on LinkedIn`}
                      className="mt-9 inline-flex items-center gap-3 border border-champagne/40 text-champagne px-6 py-3 text-[10px] tracking-luxury uppercase hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Linkedin size={16} strokeWidth={1.5} />
                      LinkedIn
                    </a>
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
