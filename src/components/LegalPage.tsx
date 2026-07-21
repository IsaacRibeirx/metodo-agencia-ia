import Image from "next/image";
import Link from "next/link";
import { editablePlaceholders, product } from "@/data/product";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { title: string; body: string[] }[];
}) {
  // Textos legais são placeholders editoriais e precisam de revisão jurídica antes da publicação.
  return (
    <main className="min-h-screen bg-navy-950 px-4 py-10 text-white sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          <Image
            src={product.assets.logoTransparent}
            alt="Voltar para IRSync"
            width={260}
            height={92}
            className="h-14 w-auto object-contain"
          />
        </Link>
        <div className="mt-10 rounded-lg border border-white/10 bg-white/[.055] p-5 sm:p-8">
          <p className="eyebrow">Documento legal</p>
          <h1 className="text-3xl font-black leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 leading-8 text-gray-300">{intro}</p>
          <p className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-4 text-sm leading-7 text-cyan-50">
            {editablePlaceholders.legalReviewNotice}
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Última atualização: {editablePlaceholders.privacyLastUpdate}
          </p>
        </div>

        <div className="mt-8 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="rounded-lg border border-white/10 bg-white/[.045] p-5 sm:p-7">
              <h2 className="text-2xl font-black">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-gray-300">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
