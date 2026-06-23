import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { GA_MEASUREMENT_ID, trackEvent } from "@/lib/analytics";

export function GoogleAnalytics() {
  const location = useRouterState({ select: (state) => state.location });

  useEffect(() => {
    const pagePath = `${location.pathname}${location.searchStr}${location.hash}`;
    window.gtag?.("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    });

    if (location.pathname === "/blogs" || location.pathname.startsWith("/blogs/")) {
      trackEvent("blog_page_visit", { page_path: pagePath });
    }
    if (location.pathname === "/factory-machinery") {
      trackEvent("factory_machinery_page_visit", { page_path: pagePath });
    }
  }, [location.hash, location.pathname, location.searchStr]);

  useEffect(() => {
    const trackInteraction = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const control = target.closest<HTMLElement>("a, button");
      if (!control) return;

      const label = control.textContent?.trim().replace(/\s+/g, " ") || control.getAttribute("aria-label") || "";
      const href = control instanceof HTMLAnchorElement ? control.href : "";

      if (control.closest("header") && !label.toLowerCase().includes("book consultation")) {
        trackEvent("navigation_click", { link_text: label, link_url: href });
      }
      if (label.toLowerCase().includes("book consultation")) {
        trackEvent("book_consultation_click", { link_text: label, link_url: href });
      }
      if (href.startsWith("tel:")) {
        trackEvent("call_now_click", { link_text: label, link_url: href });
      }
      if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { link_text: label, link_url: href });
      }
      if (control.dataset.gaEvent === "faq_interaction") {
        trackEvent("faq_interaction", {
          faq_question: control.dataset.gaLabel || label,
          action: control.getAttribute("aria-expanded") === "true" ? "close" : "open",
        });
      }
    };

    document.addEventListener("click", trackInteraction);
    return () => document.removeEventListener("click", trackInteraction);
  }, []);

  return null;
}