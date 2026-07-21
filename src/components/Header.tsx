"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { product } from "@/data/product";
import { CTAButton } from "./CTAButton";

const links = [
  ["O método", "#metodo"],
  ["Conteúdo", "#conteudo"],
  ["Para quem é", "#para-quem"],
  ["Perguntas", "#perguntas"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-950/82 shadow-2xl shadow-black/25 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link href="#inicio" className="flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          <Image
            src={product.assets.logoTransparent}
            alt="IRSync"
            width={220}
            height={80}
            priority
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-gray-300 transition hover:text-white">
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <CTAButton variant="secondary" className="min-h-10 px-4 py-2 text-sm">
            Quero começar
          </CTAButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-white/8 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-navy-950/96 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-gray-100 hover:bg-white/8"
              >
                {label}
              </Link>
            ))}
            <CTAButton className="mt-2 w-full">Quero começar agora</CTAButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
