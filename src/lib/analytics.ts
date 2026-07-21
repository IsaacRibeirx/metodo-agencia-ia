export type AnalyticsEvent =
  | "view_content"
  | "click_cta"
  | "begin_checkout"
  | "scroll_50"
  | "view_offer"
  | "view_faq";

type AnalyticsPayload = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config",
      eventName: string,
      payload?: AnalyticsPayload
    ) => void;
    fbq?: (command: "trackCustom" | "track", eventName: string, payload?: AnalyticsPayload) => void;
  }
}

const metaEventMap: Record<AnalyticsEvent, string> = {
  view_content: "ViewContent",
  click_cta: "ClickCTA",
  begin_checkout: "InitiateCheckout",
  scroll_50: "Scroll50",
  view_offer: "ViewOffer",
  view_faq: "ViewFAQ",
};

export function trackEvent(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, payload);
  window.fbq?.("trackCustom", metaEventMap[event], payload);
}
