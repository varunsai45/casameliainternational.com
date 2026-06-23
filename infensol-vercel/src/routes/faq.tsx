import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Reveal } from "@/components/Reveal";

const faqs = [
  ["What interior design services does CASAMELIA offer?", "We provide luxury home and villa interiors, modular kitchens, wardrobes, custom furniture, architecture, commercial and office interiors, hospitality design, smart-home integration and complete turnkey delivery."],
  ["Do you handle complete turnkey projects?", "Yes. Our turnkey service covers design, technical drawings, procurement, in-house manufacturing, site execution, installation, styling and final handover through one accountable team."],
  ["Do you design luxury villas?", "Yes. We create bespoke villa interiors with detailed space planning, premium materials, custom joinery, architectural lighting and indoor-outdoor continuity."],
  ["Do you provide modular kitchens?", "Yes. Our modular kitchens are custom planned, precision manufactured in-house and fitted with premium imported hardware for lasting performance."],
  ["Do you manufacture furniture in-house?", "Yes. Cabinetry, wardrobes, kitchens and modular furniture are produced in our 40,000 sq. ft. facility using advanced Italian and German machinery."],
  ["What makes CASAMELIA different from other interior companies?", "We unite design, architecture, manufacturing and execution under one roof. This gives us greater control over customization, detailing, quality and project timelines."],
  ["Do you use imported German materials?", "We integrate selected German hardware and engineered components where they add precision, durability and a refined everyday experience."],
  ["What is the typical project timeline?", "Timelines depend on area, scope and material selection. Our in-house modular production is structured around a 21-day manufacturing cycle once drawings, finishes and site readiness are approved."],
  ["Do you offer smart home integration?", "Yes. We coordinate intelligent lighting, climate, security, audio, blinds and access control with the architecture and interiors from the planning stage."],
  ["Do you work on commercial projects?", "Yes. We design premium offices, retail environments, restaurants, hotels and other brand-led commercial spaces."],
  ["Can you design office interiors?", "Yes. Our office portfolio includes executive cabins, boardrooms, collaborative areas, receptions and complete workplace environments."],
  ["Do you provide architecture services?", "Yes. Our architecture services include site studies, planning, massing, facade design, technical coordination and landscape integration."],
  ["How does the design process work?", "We begin with a consultation and site study, then progress through concept design, 3D visualization, material selection, technical documentation, manufacturing, execution and handover."],
  ["Can I customize every aspect of my interior?", "Yes. Layouts, finishes, materials, storage, lighting and furniture can be tailored to your lifestyle, property and aesthetic preferences."],
  ["Do you provide 3D visualizations before execution?", "Yes. We present detailed 3D views so you can understand the spatial composition, key materials and overall atmosphere before execution begins."],
  ["Which cities do you serve?", "We are based in Bangalore and undertake select residential, hospitality and commercial projects across India and international locations depending on scope."],
  ["How much does a luxury interior project cost?", "Investment varies with area, scope, material palette, automation and customization. Following an initial consultation, we prepare a clear proposal aligned with your priorities."],
  ["Do you provide post-project support?", "Yes. We provide structured handover, snag resolution and ongoing support for eligible workmanship, hardware and installed systems."],
  ["Can I schedule a free consultation?", "Yes. Share your project details through our consultation form or WhatsApp, and our team will arrange an introductory discussion."],
  ["How do I start my project with CASAMELIA?", "Book a consultation with your location, property type, approximate area, timeline and budget. Our team will review the brief and guide you through the next steps."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Luxury Interior Design FAQ | CASAMELIA" },
      { name: "description", content: "Answers about CASAMELIA luxury interiors, villas, modular kitchens, turnkey projects, timelines, pricing and consultations." },
      { property: "og:title", content: "Luxury Interior Design FAQ | CASAMELIA" },
      { property: "og:description", content: "Explore answers about our luxury interior, manufacturing, architecture and turnkey services." },
      { property: "og:url", content: "https://casamelia-internationalinternational.lovable.app/faq" },
    ],
    links: [{ rel: "canonical", href: "https://casamelia-internationalinternational.lovable.app/faq" }],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative pt-44 pb-20 lg:pt-52 lg:pb-28 bg-onyx bg-grain px-6 lg:px-16">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <div className="flex items-center gap-3 mb-7"><span className="h-px w-12 bg-bronze" /><span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Questions · Answered</span></div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95]">Frequently Asked<br /><span className="italic text-gradient-gold">Questions.</span></h1>
            <p className="mt-8 max-w-2xl text-foreground/60 font-light text-base lg:text-lg leading-relaxed">Everything you need to know about our design approach, in-house manufacturing and complete project delivery.</p>
          </Reveal>
        </div>
      </section>
      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="border-t border-border/60">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={(index % 5) * 40}>
                <div className="border-b border-border/60">
                  <h2>
                    <button type="button" onClick={() => setOpenItem(openItem === index ? null : index)} aria-expanded={openItem === index} data-ga-event="faq_interaction" data-ga-label={question} className="group flex w-full items-center justify-between gap-8 py-7 lg:py-8 text-left">
                      <span className="font-display text-xl sm:text-2xl lg:text-3xl text-foreground/90 group-hover:text-champagne transition-colors">{question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 text-bronze transition-transform duration-500 ${openItem === index ? "rotate-180" : ""}`} strokeWidth={1.25} />
                    </button>
                  </h2>
                  <div className={`grid transition-all duration-500 ease-out ${openItem === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden"><p className="max-w-3xl pb-8 pr-10 text-foreground/60 font-light leading-relaxed">{answer}</p></div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-onyx bg-grain px-6 text-center">
        <Reveal>
          <div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">Your Project Starts Here</div>
          <h2 className="font-display text-4xl lg:text-6xl">Have another <span className="italic">question?</span></h2>
          <Link to="/" hash="contact" className="mt-10 inline-flex bg-gradient-gold text-primary-foreground px-9 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500">Book Consultation →</Link>
        </Reveal>
      </section>
      <Footer /><FloatingCall />
    </main>
  );
}