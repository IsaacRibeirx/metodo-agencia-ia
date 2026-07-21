"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function AnalyticsEvents() {
  const sentScroll = useRef(false);

  useEffect(() => {
    trackEvent("view_content", { page: "home" });

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (!sentScroll.current && height > 0 && window.scrollY / height >= 0.5) {
        sentScroll.current = true;
        trackEvent("scroll_50", { page: "home" });
      }
    };

    const offer = document.getElementById("oferta");
    const faq = document.getElementById("perguntas");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.id === "oferta") trackEvent("view_offer");
          if (entry.target.id === "perguntas") trackEvent("view_faq");
        });
      },
      { threshold: 0.35 }
    );

    if (offer) observer.observe(offer);
    if (faq) observer.observe(faq);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
