import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";
import { Reveal } from "@/components/Reveal";
import factoryHero from "@/assets/german-factory.jpg";
import hotPress from "@/assets/machine-hot-press.jpg";
import beamSaw from "@/assets/machine-beam-saw.jpg";
import edgeBander from "@/assets/machine-edge-bander.jpg";
import cncRouter from "@/assets/machine-cnc-router.jpg";
import panelSaw from "@/assets/machine-panel-saw.jpg";
import multiBoring from "@/assets/machine-multi-boring.jpg";
import manualEdgeBander from "@/assets/machine-manual-edge-bander.jpg";
import dustCollection from "@/assets/machine-dust-collection.jpg";

const machines = [
  { origin: "Italy", brand: "Biesse Blaze 120", type: "Hot Press Machine", description: "Used for high-pressure bonding of laminates, veneers and decorative surfaces.", benefits: ["Superior bonding strength", "Premium surface finish", "Long-lasting durability"], image: hotPress },
  { origin: "Italy", brand: "Biesse Selco", type: "Beam Saw Machine", description: "Precision cutting machine used for plywood, MDF, HDF and engineered boards.", benefits: ["Accurate cutting", "Reduced wastage", "Faster production"], image: beamSaw },
  { origin: "Italy", brand: "Biesse Jade 340", type: "Edge Banding Machine", description: "Provides seamless edge finishing for furniture and cabinetry.", benefits: ["Clean edges", "Premium finish", "Enhanced durability"], image: edgeBander },
  { origin: "Italy", brand: "Biesse Rover Gold 1240", type: "CNC Router Machine", description: "Advanced CNC machining center for cutting, drilling and shaping furniture components.", benefits: ["High precision", "Complex custom designs", "Consistent quality"], image: cncRouter },
  { origin: "Germany", brand: "Felder Panel Saw", type: "Panel Cutting Machine", description: "German-engineered machine for precise panel processing.", benefits: ["Precision cutting", "Faster workflow", "Professional results"], image: panelSaw },
  { origin: "Germany", brand: "Felder Multi Boring", type: "Multi-Hole Drilling Machine", description: "Used for accurate drilling of cabinet and furniture components.", benefits: ["Perfect alignment", "Faster assembly", "Consistent quality"], image: multiBoring },
  { origin: "Germany", brand: "Felder Manual Edge Bander", type: "Manual Edge Banding Machine", description: "Provides custom edge finishing for specialty furniture applications.", benefits: ["Flexible production", "Detailed finishing", "Premium craftsmanship"], image: manualEdgeBander },
  { origin: "Italy", brand: "Coral Centralized System", type: "Industrial Dust Extraction", description: "Maintains a clean and safe production environment throughout the facility.", benefits: ["Cleaner factory", "Improved machine performance", "Better workplace safety"], image: dustCollection },
];

const highlights = ["100% Manufactured In-House", "40,000 Sq. Ft. Production Facility", "Italian & German Machinery", "Precision Engineering", "Premium Hardware Integration", "Delivery Within 21 Days"];

export const Route = createFileRoute("/factory-machinery")({
  head: () => ({
    meta: [
      { title: "Factory & Machinery | CASAMELIA Manufacturing" },
      { name: "description", content: "Explore CASAMELIA's 40,000 sq. ft. Bangalore facility with advanced Italian and German machinery for precision interiors." },
      { property: "og:title", content: "Factory & Machinery | CASAMELIA International" },
      { property: "og:description", content: "Precision manufacturing, advanced machinery and complete in-house quality control." },
      { property: "og:url", content: "https://casamelia-internationalinternational.lovable.app/factory-machinery" },
    ],
    links: [{ rel: "canonical", href: "https://casamelia-internationalinternational.lovable.app/factory-machinery" }],
  }),
  component: FactoryMachineryPage,
});

function FactoryMachineryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <section className="relative min-h-[760px] h-screen overflow-hidden bg-onyx">
        <img src={factoryHero} alt="CASAMELIA manufacturing facility" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/75 via-onyx/55 to-background" />
        <div className="absolute inset-0 bg-grain" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16 max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-wider-luxury uppercase text-bronze mb-7">40,000 Sq. Ft. Manufacturing Facility</div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[0.95] max-w-5xl">Precision Crafted.<br /><span className="italic text-gradient-gold">Delivered Within 21 Days.</span></h1>
          <p className="mt-8 max-w-3xl text-foreground/65 font-light text-base lg:text-lg leading-relaxed">CASAMELIA INTERNATIONAL operates a state-of-the-art manufacturing facility equipped with advanced Italian and German machinery, ensuring precision, consistency, quality and faster project delivery.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><div className="flex items-center gap-3 mb-7"><span className="h-px w-12 bg-bronze" /><span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Manufacturing Excellence</span></div><h2 className="font-display text-4xl lg:text-6xl max-w-4xl leading-[1.05]">Complete control, from raw panel to <span className="italic">final installation.</span></h2></Reveal>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 border border-border/50">
            {highlights.map((item, index) => <Reveal key={item} delay={(index % 3) * 70} className="bg-background p-7 lg:p-10 min-h-36 flex flex-col justify-between"><span className="text-bronze text-sm">0{index + 1}</span><span className="font-display text-xl lg:text-3xl leading-tight mt-8">{item}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-onyx bg-grain px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">The Production Floor</div><h2 className="font-display text-4xl lg:text-7xl leading-[1] mb-16">Machines engineered for <span className="italic">precision.</span></h2></Reveal>
          <div className="space-y-20 lg:space-y-28">
            {machines.map((machine, index) => (
              <Reveal key={machine.brand} className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${index % 2 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-card border-gradient group"><img src={machine.image} alt={`${machine.brand} ${machine.type}`} loading="lazy" className="h-full w-full object-contain transition-transform duration-[1400ms] group-hover:scale-105" /></div>
                </div>
                <div className={`lg:col-span-5 ${index % 2 ? "lg:order-1" : ""}`}>
                  <div className="text-[10px] tracking-wider-luxury uppercase text-bronze mb-5">{machine.origin} · 0{index + 1}</div>
                  <h3 className="font-display text-4xl lg:text-5xl leading-[1]">{machine.brand}</h3>
                  <div className="mt-4 text-[11px] tracking-luxury uppercase text-champagne">{machine.type}</div>
                  <p className="mt-7 text-foreground/60 font-light leading-relaxed">{machine.description}</p>
                  <ul className="mt-8 border-t border-border/60">{machine.benefits.map((benefit) => <li key={benefit} className="flex gap-4 py-4 border-b border-border/60 text-sm text-foreground/75"><span className="text-champagne">✓</span>{benefit}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 px-6 text-center"><Reveal><div className="text-[10px] tracking-wider-luxury text-bronze uppercase mb-6">See Precision First-Hand</div><h2 className="font-display text-4xl lg:text-6xl">Arrange a private <span className="italic">factory visit.</span></h2><Link to="/" hash="contact" className="mt-10 inline-flex bg-gradient-gold text-primary-foreground px-9 py-4 text-[11px] tracking-luxury uppercase shadow-glow hover:shadow-luxe transition-all duration-500">Book Consultation →</Link></Reveal></section>
      <Footer /><FloatingCall />
    </main>
  );
}