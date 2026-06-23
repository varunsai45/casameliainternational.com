export function FloatingCall() {
  return (
    <a
      href="tel:+919900716198"
      aria-label="Call Casamelia"
      className="fixed bottom-6 right-6 z-[60] group inline-flex items-center gap-3 bg-gradient-gold text-primary-foreground pl-4 pr-5 py-3 rounded-full shadow-glow hover:shadow-luxe transition-all duration-500 hover:-translate-y-0.5"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-onyx/30">
        <span className="absolute inset-0 rounded-full bg-champagne/40 animate-ping" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 relative">
          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372a1.5 1.5 0 0 0-1.06-1.435l-3.75-1.07a1.5 1.5 0 0 0-1.532.448l-.943 1.05a11.5 11.5 0 0 1-5.516-5.516l1.05-.943a1.5 1.5 0 0 0 .448-1.532l-1.07-3.75A1.5 1.5 0 0 0 7.622 4.5H6.25A2.25 2.25 0 0 0 4 6.75z" />
        </svg>
      </span>
      <span className="hidden sm:inline text-[10px] tracking-luxury uppercase">Call Now</span>
    </a>
  );
}
