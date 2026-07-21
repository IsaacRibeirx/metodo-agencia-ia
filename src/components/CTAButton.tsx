"use client";

import { ArrowRight } from "lucide-react";
import { buildCheckoutUrl } from "@/lib/checkout";
import { trackEvent } from "@/lib/analytics";

type CTAButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "compact";
  className?: string;
  ariaLabel?: string;
};

export function CTAButton({
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: CTAButtonProps) {
  const classes = {
    primary:
      "bg-[linear-gradient(135deg,#2478F2_0%,#743EB3_100%)] text-white shadow-[0_18px_50px_rgba(36,120,242,.28)] hover:translate-y-[-2px] hover:shadow-[0_22px_70px_rgba(116,62,179,.34)]",
    secondary:
      "border border-white/18 bg-white/7 text-white hover:bg-white/12 hover:border-cyan-400/50",
    compact:
      "bg-white text-navy-950 hover:bg-cyan-100 shadow-[0_14px_35px_rgba(83,184,240,.22)]",
  }[variant];

  function handleClick() {
    trackEvent("click_cta", { label: String(children) });
    trackEvent("begin_checkout", { label: String(children) });
    window.location.href = buildCheckoutUrl(new URLSearchParams(window.location.search));
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? String(children)}
      onClick={handleClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-base ${classes} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}
