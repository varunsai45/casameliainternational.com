import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

const PHONE_RAW = "+919900716198";
const CHAT_SRC = "https://casamelia-lead-platform.vercel.app/api/widget";

const CHAT_PANEL_ID = "casamelia-chat-panel";

export function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
    trackEvent("chat_closed");
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      setIsOpen(true);
      trackEvent("chat_opened");
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    } else if (rootRef.current?.contains(document.activeElement)) {
      toggleRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div ref={rootRef} className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Chat popup */}
      <div
        id={CHAT_PANEL_ID}
        role="dialog"
        aria-label="Casamelia live chat"
        inert={!isOpen}
        className={cn(
          "absolute bottom-[calc(env(safe-area-inset-bottom)+8.5rem)] right-4 sm:right-6 flex h-[min(600px,calc(100dvh-9.5rem))] w-[min(380px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-[20px] border border-champagne/25 bg-background shadow-luxe transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
      >
        <iframe src={CHAT_SRC} title="Casamelia live chat" className="h-full w-full border-0" />
        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label="Close chat"
          tabIndex={isOpen ? 0 : -1}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-onyx/20 text-white/95 backdrop-blur-sm transition-all duration-200 hover:bg-onyx/55 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <X size={18} strokeWidth={2.25} />
        </button>
      </div>

      {/* Floating contact pill */}
      <div className="pointer-events-auto absolute bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-4 sm:right-6 flex items-center overflow-hidden rounded-full border border-champagne/25 bg-onyx/80 p-1.5 shadow-luxe backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:shadow-glow">
        <a
          href={`tel:${PHONE_RAW}`}
          aria-label="Call Casamelia"
          onClick={() => trackEvent("call_clicked")}
          className="group flex items-center gap-2.5 rounded-full px-3 py-1.5 transition-colors duration-300 hover:bg-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Phone size={18} strokeWidth={2} />
          </span>
          <span className="hidden pr-1 text-[10px] uppercase tracking-luxury text-champagne sm:block">
            Call
          </span>
        </a>

        <span aria-hidden="true" className="mx-1 h-8 w-px bg-champagne/20" />

        <button
          ref={toggleRef}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls={CHAT_PANEL_ID}
          className={cn(
            "group flex items-center gap-2.5 rounded-full px-3 py-1.5 transition-colors duration-300 hover:bg-champagne/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            isOpen && "bg-champagne/10",
          )}
        >
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-glow transition-transform duration-300 group-hover:scale-105",
              isOpen && "shadow-glow",
            )}
          >
            <MessageCircle size={18} strokeWidth={2} />
          </span>
          <span className="hidden pr-1 text-[10px] uppercase tracking-luxury text-champagne sm:block">
            Live Chat
          </span>
        </button>
      </div>
    </div>
  );
}
