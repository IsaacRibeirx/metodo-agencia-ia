import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://metodo-agencia-ia.vercel.app"),
  title: "Método Agência IA | Crie Sites e Venda Serviços com Inteligência Artificial",
  description:
    "Aprenda a prospectar clientes, criar sites e landing pages com Codex, publicar na Vercel e configurar domínio com Cloudflare. Método completo com 120 páginas, 36 módulos e 50 prompts.",
  keywords: [
    "Método Agência IA",
    "ganhar dinheiro com inteligência artificial",
    "criar sites com IA",
    "criar sites com Codex",
    "vender sites",
    "prospecção Google Maps",
    "landing pages",
    "serviços digitais",
    "Vercel",
    "Cloudflare",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Método Agência IA",
    description:
      "Crie sites, conquiste clientes e organize uma operação de serviços digitais com inteligência artificial.",
    url: "/",
    siteName: "IRSync",
    images: [
      {
        url: "/assets/product/capa-metodo-agencia-ia.png",
        width: 1055,
        height: 1491,
        alt: "Capa do Método Agência IA",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Agência IA",
    description:
      "Método completo com 120 páginas, 36 módulos e 50 prompts para serviços digitais com IA.",
    images: ["/assets/product/capa-metodo-agencia-ia.png"],
  },
  icons: {
    icon: "/icon.jpg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <AnalyticsScripts />
      </body>
    </html>
  );
}
