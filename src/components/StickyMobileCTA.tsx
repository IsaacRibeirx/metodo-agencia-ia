"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "./CTAButton";

export function StickyMobileCTA() {
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setNearFooter(entry.isIntersecting),
      { rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-950/92 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] shadow-2xl shadow-black/50 backdrop-blur-xl transition lg:hidden ${
        nearFooter ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <CTAButton ariaLabel="Quero acessar o Método Agência IA" className="w-full">
        Quero acessar o método
      </CTAButton>
    </div>
  );
}
