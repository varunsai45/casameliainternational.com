import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions: CASAMELIA International" },
      { name: "description", content: "Terms and conditions governing the use of CASAMELIA International's website and services." },
    ],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl lg:text-3xl mb-4 text-champagne">{title}</h2>
      <div className="text-foreground/70 font-light leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-bronze" />
          <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Legal</span>
        </div>
        <h1 className="font-display text-4xl lg:text-6xl leading-[1] mb-12">Terms & Conditions</h1>
        <p className="text-foreground/60 font-light mb-12">
          Last updated: {new Date().getFullYear()}. By accessing or using this
          website and the services of Casamelia International, you agree to the
          following terms.
        </p>

        <Section title="1. Website Usage">
          <p>This website is operated by Casamelia International, Bangalore. By using this site you confirm you are at least 18 years of age and that all information provided by you is accurate. You agree not to misuse, scrape, copy or interfere with the operation of the site.</p>
        </Section>
        <Section title="2. Service Disclaimer">
          <p>All interiors, architecture, modular and turnkey services are delivered under separate written agreements. Renderings, mockups and visuals shown on this website are illustrative and may differ from the final executed product based on material availability and site conditions.</p>
        </Section>
        <Section title="3. Consultation Disclaimer">
          <p>Consultation requests submitted via this website do not constitute a contract. A binding engagement begins only upon execution of a formal quotation and design agreement signed by both parties.</p>
        </Section>
        <Section title="4. Intellectual Property">
          <p>All content, including the Casamelia name, logo, photography, drawings, designs and written material, is the exclusive property of Casamelia International and is protected under applicable copyright and trademark laws. No content may be reproduced without prior written consent.</p>
        </Section>
        <Section title="5. Limitation of Liability">
          <p>Casamelia International shall not be liable for any indirect, incidental or consequential damages arising from the use of this website or reliance on its content. Material and price information is subject to change without notice.</p>
        </Section>
        <Section title="6. Customer Responsibilities">
          <p>Clients are responsible for providing accurate site information, timely approvals, statutory clearances and payments as per the agreed schedule. Delays caused by the client may impact the project timeline and cost.</p>
        </Section>
        <Section title="7. Governing Law">
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka.</p>
        </Section>
        <Section title="8. Contact">
          <p>For any questions related to these terms, write to <a href="mailto:santhosh@casameliainternational.com" className="text-champagne hover:underline">santhosh@casameliainternational.com</a>.</p>
        </Section>
      </article>
      <Footer />
      <FloatingCall />
    </main>
  );
}
