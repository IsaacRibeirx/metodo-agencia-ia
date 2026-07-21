import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://metodo-agencia-ia.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/politica-de-privacidade`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/termos-de-uso`,
      lastModified: new Date("2026-07-21"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
