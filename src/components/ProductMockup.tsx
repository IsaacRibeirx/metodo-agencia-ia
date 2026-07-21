import Image from "next/image";
import { product } from "@/data/product";

export function ProductMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`ebook-mockup group relative mx-auto ${compact ? "max-w-[210px]" : "max-w-[360px]"}`}>
      <div className="absolute -inset-5 rounded-[32px] bg-[linear-gradient(135deg,rgba(83,184,240,.22),rgba(139,67,212,.2))] blur-2xl" />
      <div className="ebook-cover relative overflow-hidden rounded-lg border border-cyan-200/20 bg-navy-900 shadow-[0_40px_95px_rgba(0,0,0,.5)] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[1.5deg] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 motion-reduce:group-hover:rotate-0">
        <Image
          src={product.assets.cover}
          alt="Capa do Método Agência IA"
          width={1055}
          height={1491}
          priority={!compact}
          sizes={compact ? "210px" : "(max-width: 768px) 78vw, 360px"}
          className="h-auto w-full object-contain"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/10 to-transparent opacity-40" />
      </div>
      <div className="mx-auto mt-3 h-7 w-[78%] rounded-[50%] bg-cyan-300/14 blur-lg" />
    </div>
  );
}
