import { useState } from "react";
import { Reveal } from "./Reveal";
import { Facebook, Instagram } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const PHONE = "+91 99007 16198";
const PHONE_RAW = "+919900716198";
const EMAIL = "santhosh@casameliainternational.com";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => (fd.get(k)?.toString() || "-").trim();
    const fields = {
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      city: get("city"),
      propertyType: get("propertyType"),
      budget: get("budget"),
      details: get("details"),
    };

    const waMessage =
      `*New Consultation Request*\n\n` +
      `*Name:* ${fields.name}\n` +
      `*Phone:* ${fields.phone}\n` +
      `*Email:* ${fields.email}\n` +
      `*City:* ${fields.city}\n` +
      `*Project Type:* ${fields.propertyType}\n` +
      `*Budget:* ${fields.budget}\n` +
      `*Message:* ${fields.details}`;
    const encoded = encodeURIComponent(waMessage);

    // 1. WhatsApp to +91 9900716198
    window.open(`https://wa.me/919900716198?text=${encoded}`, "_blank", "noopener");

    // 2. Email to the founder
    const subject = encodeURIComponent("New Website Enquiry, CASAMELIA INTERNATIONAL");
    const body = encodeURIComponent(
      `New Website Enquiry\n\n` +
      `Name: ${fields.name}\n` +
      `Phone: ${fields.phone}\n` +
      `Email: ${fields.email}\n` +
      `City: ${fields.city}\n` +
      `Project Type: ${fields.propertyType}\n` +
      `Budget: ${fields.budget}\n\n` +
      `Message:\n${fields.details}\n`
    );
    setTimeout(() => {
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, "_blank", "noopener");
    }, 500);

    setSubmitted(true);
    trackEvent("contact_form_submission", {
      project_type: fields.propertyType,
      city: fields.city,
    });
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 px-6 lg:px-16">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, oklch(0.62 0.09 55 / 0.12), transparent 60%)" }} />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-[10px] tracking-wider-luxury text-bronze uppercase">Begin Your Project</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl leading-[1.08]">
            A private <span className="italic">luxury</span> consultation.
          </h2>
          <p className="mt-8 text-foreground/60 font-light max-w-md">
            Share your vision. Santhosh MS and our senior design team will
            personally curate your concept and arrange a private showroom and
            factory visit.
          </p>

          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">Founder</div>
              <div className="text-foreground/85 font-display text-xl">Santhosh MS</div>
              <div className="text-foreground/55 text-xs mt-1">Casamelia International</div>
              <div className="flex items-center gap-3 mt-5">
                <a
                  href="https://www.facebook.com/share/1W3ivHVuoi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-champagne/40 text-champagne hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/casamelia_official?igsh=MWpudTNwY21weWZnbg=="
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-full border border-champagne/40 text-champagne hover:bg-champagne hover:text-primary-foreground hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">Direct</div>
              <a href={`tel:${PHONE_RAW}`} className="text-foreground/85 hover:text-champagne transition-colors">{PHONE}</a>
            </div>
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">WhatsApp</div>
              <a href={`https://wa.me/${PHONE_RAW.replace("+", "")}`} target="_blank" rel="noreferrer" className="text-champagne hover:underline">{PHONE} →</a>
            </div>
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">Email</div>
              <a href={`mailto:${EMAIL}`} className="text-foreground/85 hover:text-champagne transition-colors break-all">{EMAIL}</a>
            </div>
            <div className="pt-4 border-t border-border/40">
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">Office · Bangalore</div>
              <div className="text-foreground/80 leading-relaxed">
                No. 19, Workspring, Primrose Road,<br />
                Ashok Nagar, Off MG Road,<br />
                Bangalore 560025
              </div>
            </div>
            <div>
              <div className="text-[10px] tracking-luxury uppercase text-bronze mb-1">Factory</div>
              <div className="text-foreground/80 leading-relaxed">
                10A, Sector 2, Phase 1,<br />
                Bidadi Industrial Area,<br />
                Bangalore 562109
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <form onSubmit={onSubmit} className="glass p-8 lg:p-12 relative">
            {submitted ? (
              <div className="py-20 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-champagne flex items-center justify-center text-champagne">✓</div>
                <h3 className="font-display text-3xl mb-3">Thank you.</h3>
                <p className="text-foreground/60 font-light max-w-md mx-auto">Thank you for contacting CASAMELIA INTERNATIONAL. Our team will contact you shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <LuxField name="name" label="Full Name" required />
                  <LuxField name="phone" label="Phone Number" type="tel" required />
                  <LuxField name="email" label="Email" type="email" required />
                  <LuxField name="city" label="City" required />
                  <LuxSelect name="propertyType" label="Property Type" options={["Villa", "Apartment", "Independent House", "Commercial", "Hotel / Restaurant", "Office"]} />
                  <LuxSelect name="budget" label="Budget Range" options={["₹10L to ₹50L", "₹50L to ₹1Cr", "₹1Cr to ₹3Cr", "₹3Cr to ₹10Cr", "₹10Cr +"]} />
                </div>

                <div className="mt-5">
                  <label className="block">
                    <span className="text-[10px] tracking-luxury uppercase text-bronze">Upload Floor Plan</span>
                    <input type="file" accept="image/*,.pdf" className="block w-full mt-3 text-sm text-foreground/70 file:mr-4 file:py-3 file:px-5 file:border-0 file:bg-bronze/15 file:text-champagne file:text-[10px] file:tracking-luxury file:uppercase file:cursor-pointer hover:file:bg-bronze/25 cursor-pointer" />
                  </label>
                </div>

                <div className="mt-5">
                  <label className="block">
                    <span className="text-[10px] tracking-luxury uppercase text-bronze">Project Details</span>
                    <textarea
                      name="details"
                      rows={4}
                      className="mt-3 w-full bg-transparent border-b border-border focus:border-champagne outline-none text-foreground placeholder:text-foreground/30 py-3 transition-colors resize-none font-light"
                      placeholder="Tell us about your dream space…"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full sm:w-auto bg-gradient-gold text-primary-foreground px-10 py-4 text-[11px] tracking-luxury uppercase hover:shadow-glow transition-all duration-500"
                >
                  Request Private Consultation
                </button>
                <p className="mt-4 text-[10px] tracking-luxury uppercase text-foreground/40">
                  We respond within 24 hours · Strictly confidential
                </p>
              </>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function LuxField({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-luxury uppercase text-bronze">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-border focus:border-champagne outline-none text-foreground placeholder:text-foreground/30 py-3 transition-colors font-light"
      />
    </label>
  );
}

function LuxSelect({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-luxury uppercase text-bronze">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="mt-3 w-full bg-transparent border-b border-border focus:border-champagne outline-none text-foreground py-3 transition-colors font-light appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-background">Select…</option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-background">{o}</option>
        ))}
      </select>
    </label>
  );
}
