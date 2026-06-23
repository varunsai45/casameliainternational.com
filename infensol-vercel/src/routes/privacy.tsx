import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingCall } from "@/components/FloatingCall";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy: CASAMELIA International" },
      { name: "description", content: "How CASAMELIA International collects, uses and protects your personal information." },
    ],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-2xl lg:text-3xl mb-4 text-champagne">{title}</h2>
      <div className="text-foreground/70 font-light leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-36 pb-24">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-bronze" />
          <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Legal</span>
        </div>
        <h1 className="font-display text-4xl lg:text-6xl leading-[1] mb-12">Privacy Policy</h1>
        <p className="text-foreground/60 font-light mb-12">
          Casamelia International respects your privacy. This policy explains
          what information we collect and how it is handled.
        </p>

        <Section title="1. Data We Collect">
          <p>We collect information you voluntarily submit via consultation forms, email, phone or WhatsApp, including your name, phone number, email, city, property type, budget range and project details. Floor plans uploaded by you are stored solely for the purpose of preparing your design proposal.</p>
        </Section>
        <Section title="2. Form Submissions">
          <p>Consultation form submissions are routed directly to our internal team via WhatsApp and email. We do not sell or share this data with third parties for marketing purposes.</p>
        </Section>
        <Section title="3. Cookies">
          <p>This website may use minimal cookies and similar technologies to remember preferences and measure performance. You can control cookies through your browser settings.</p>
        </Section>
        <Section title="4. Use of Contact Information">
          <p>Your contact details are used to respond to your enquiry, schedule consultations, share quotations, and communicate project updates. They are retained only as long as necessary for these purposes.</p>
        </Section>
        <Section title="5. Marketing Communication">
          <p>By submitting a consultation request you consent to occasional updates from Casamelia about our projects, showroom and services. You may opt out at any time by emailing us.</p>
        </Section>
        <Section title="6. Your Rights">
          <p>You have the right to request access to, correction of, or deletion of your personal data held by us. To exercise any of these rights, write to <a href="mailto:santhosh@casameliainternational.com" className="text-champagne hover:underline">santhosh@casameliainternational.com</a>.</p>
        </Section>
        <Section title="7. Data Protection">
          <p>We take reasonable technical and organisational measures to safeguard your information against unauthorised access, alteration or disclosure. However, no internet transmission is fully secure and we cannot guarantee absolute security.</p>
        </Section>
        <Section title="8. Updates">
          <p>This policy may be updated periodically. Continued use of the website after changes constitutes acceptance of the revised policy.</p>
        </Section>
      </article>
      <Footer />
      <FloatingCall />
    </main>
  );
}
