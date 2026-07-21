import { CHECKOUT_URL } from "@/data/product";

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function buildCheckoutUrl(searchParams?: URLSearchParams | null) {
  const checkout = new URL(CHECKOUT_URL);

  if (searchParams) {
    UTM_KEYS.forEach((key) => {
      const value = searchParams.get(key);
      if (value) checkout.searchParams.set(key, value);
    });
  }

  return checkout.toString();
}
