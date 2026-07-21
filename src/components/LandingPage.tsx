import Image from "next/image";
import {
  BadgeCheck,
  BookOpen,
  Bot,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  Cloud,
  Code2,
  FileText,
  Globe2,
  Handshake,
  Layers3,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { Header } from "./Header";
import { ProductMockup } from "./ProductMockup";
import { CTAButton } from "./CTAButton";
import { CountUpCard } from "./CountUpCard";
import { Accordion } from "./Accordion";
import { MotionBlock } from "./Motion";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { AnalyticsEvents } from "./AnalyticsEvents";
import { curriculumGroups, deliverables, methodSteps, pillars } from "@/data/curriculum";
import { faq } from "@/data/faq";
import { product, stats } from "@/data/product";

const IconSet = [
  BookOpen,
  FileText,
  Layers3,
  Bot,
  MessageCircle,
  ClipboardCheck,
  Search,
  Handshake,
  Code2,
  Cloud,
  Globe2,
  ShieldCheck,
  MonitorSmartphone,
  WalletCards,
  Timer,
  Wrench,
  CircleDollarSign,
  Target,
  Sparkles,
  BadgeCheck,
];

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section-wrap ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionBlock className="mx-auto mb-10 max-w-3xl text-center">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-lg leading-8 text-gray-300">{intro}</p> : null}
        </MotionBlock>
        {children}
      </div>
    </section>
  );
}

export function LandingPage() {
  return (
    <>
      <AnalyticsEvents />
      <Header />
      <main id="inicio" className="overflow-hidden bg-navy-950 text-white">
        <Hero />
        <CredibilityNumbers />
        <PainSection />
        <OpportunitySection />
        <MethodSteps />
        <BenefitsSection />
        <CurriculumSection />
        <DeliverablesSection />
        <FinancialScenario />
        <ForWhomSection />
        <ThirtyDayPath />
        <AuthorSection />
        <OfferSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

function Hero() {
  const benefits = [
    ["Prospecção pelo Google Maps", MapPin],
    ["Criação de sites com Codex", Bot],
    ["Landing pages profissionais", MonitorSmartphone],
    ["Propostas, briefings e mensagens prontas", FileText],
    ["Publicação com Vercel e Cloudflare", Cloud],
    ["Plano prático de execução", ClipboardCheck],
  ];

  return (
    <section className="hero-bg relative min-h-screen pt-28 sm:pt-32">
      <div className="circuit-grid" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24">
        <MotionBlock>
          <p className="eyebrow inline-flex">Método prático para transformar IA em serviços digitais</p>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Transforme <span className="text-gradient">inteligência artificial</span> em{" "}
            <span className="text-gradient">serviços</span> que{" "}
            <span className="text-gradient">empresas realmente compram</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 sm:text-xl">
            Aprenda, do zero, a encontrar clientes, criar ofertas, desenvolver sites e landing pages com Codex, publicar projetos na Vercel e configurar domínio com Cloudflare.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
            Um processo completo para quem quer sair da teoria, construir um portfólio e começar a prestar serviços digitais sem precisar sair de casa.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[.055] px-3 py-3 text-sm text-gray-100">
                <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-cyan-300" />
                <span>{label as string}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton>Quero acessar o Método Agência IA</CTAButton>
            <a href="#conteudo" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/16 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-base">
              Conhecer o conteúdo
            </a>
          </div>
          <p className="mt-3 text-sm text-gray-400">Você será direcionado para o ambiente de pagamento.</p>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-gray-500">{product.legalNotice}</p>
        </MotionBlock>

        <MotionBlock delay={0.1} className="relative lg:-translate-y-10">
          <ProductMockup />
          {[
            ["120 páginas", "top-7 left-0"],
            ["36 módulos", "top-28 right-0"],
            ["50 prompts", "bottom-28 left-2"],
            ["Plano de 30 dias", "bottom-10 right-4"],
          ].map(([text, pos]) => (
            <div key={text} className={`floating-card absolute hidden rounded-lg border border-white/15 bg-navy-900/82 px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-black/30 backdrop-blur-md sm:block ${pos}`}>
              {text}
            </div>
          ))}
        </MotionBlock>
      </div>
    </section>
  );
}

function CredibilityNumbers() {
  return (
    <section className="border-y border-white/10 bg-navy-900/70 py-12">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <CountUpCard key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
    </section>
  );
}

function PainSection() {
  const problems = [
    "Não sabe qual serviço oferecer",
    "Não possui portfólio",
    "Tem medo de programação",
    "Não sabe onde encontrar clientes",
    "Não sabe abordar empresas",
    "Não sabe montar uma proposta",
    "Não sabe publicar um site",
    "Começa projetos e não termina",
    "Utiliza várias ferramentas sem um processo",
    "Acredita que precisa dominar programação avançada",
  ];

  return (
    <Section
      title="Você já tem acesso à inteligência artificial. O que falta é um método para transformar isso em serviço."
      intro="Muitas pessoas conhecem ChatGPT e outras ferramentas, mas continuam sem saber o que vender, para quem vender, quanto cobrar, como encontrar clientes e como entregar um projeto profissional."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {problems.map((problem, index) => (
          <MotionBlock key={problem} delay={index * 0.02} className="rounded-lg border border-white/10 bg-white/[.055] p-4">
            <X aria-hidden="true" className="mb-4 h-5 w-5 text-purple-300" />
            <p className="text-sm leading-6 text-gray-200">{problem}</p>
          </MotionBlock>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-4xl rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-5 text-center text-lg leading-8 text-cyan-50">
        O Método Agência IA organiza todas essas etapas em uma sequência clara: escolha, prospecção, venda, produção, publicação, entrega e recorrência.
      </p>
    </Section>
  );
}

function OpportunitySection() {
  const without = [
    "Ferramentas desconectadas",
    "Abordagens genéricas",
    "Preço baseado em improviso",
    "Projeto sem escopo",
    "Retrabalho",
    "Dificuldade para publicar",
    "Falta de acompanhamento",
  ];
  const withMethod = [
    "Nicho definido",
    "Oferta clara",
    "Prospecção organizada",
    "Diagnóstico personalizado",
    "Proposta profissional",
    "Produção assistida por IA",
    "Publicação e entrega padronizadas",
    "Possibilidade de manutenção recorrente",
  ];

  return (
    <Section
      title="Empresas não compram código. Elas compram presença, confiança e facilidade para receber novos contatos."
      intro="Negócios locais, profissionais liberais e prestadores de serviços precisam apresentar suas soluções, explicar seus diferenciais e facilitar o contato pelo WhatsApp. Um site profissional pode organizar essa comunicação."
      className="bg-navy-900/45"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <CompareCard title="Sem método" items={without} tone="muted" />
        <CompareCard title="Com o método" items={withMethod} tone="accent" />
      </div>
      <div className="mt-9 text-center">
        <CTAButton>Quero aprender esse método</CTAButton>
      </div>
    </Section>
  );
}

function CompareCard({ title, items, tone }: { title: string; items: string[]; tone: "muted" | "accent" }) {
  return (
    <MotionBlock className={`rounded-lg border p-6 ${tone === "accent" ? "border-cyan-300/25 bg-cyan-300/8" : "border-white/10 bg-white/[.045]"}`}>
      <h3 className="text-xl font-black uppercase text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-gray-200">
            {tone === "accent" ? <Check className="mt-1 h-4 w-4 shrink-0 text-cyan-300" /> : <X className="mt-1 h-4 w-4 shrink-0 text-gray-500" />}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </MotionBlock>
  );
}

function MethodSteps() {
  return (
    <Section
      id="metodo"
      eyebrow="Método em 7 etapas"
      title="Um processo completo: da oportunidade à receita recorrente."
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 md:block" />
        <div className="space-y-4">
          {methodSteps.map(([title, text], index) => (
            <MotionBlock key={title} delay={index * 0.03} className="relative grid gap-4 rounded-lg border border-white/10 bg-white/[.055] p-5 md:grid-cols-[90px_1fr]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#53B8F0,#8B43D4)] text-lg font-black text-white md:mx-auto">
                {index + 1}
              </div>
              <div>
                <h3 className="text-xl font-black text-white">{title}</h3>
                <p className="mt-2 leading-7 text-gray-300">{text}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </Section>
  );
}

function BenefitsSection() {
  return (
    <Section
      title="Tudo o que você precisa para construir uma operação de serviços digitais."
      id="aprendizado"
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map((pillar, index) => (
          <MotionBlock key={pillar.title} delay={index * 0.03} className="rounded-lg border border-white/10 bg-white/[.055] p-6">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-300/10 text-cyan-200">
              <Layers3 aria-hidden="true" className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-black text-white">{pillar.title}</h3>
            <ul className="mt-5 grid gap-2">
              {pillar.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-gray-300">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionBlock>
        ))}
      </div>
    </Section>
  );
}

function CurriculumSection() {
  const items = curriculumGroups.map((group, groupIndex) => ({
    title: group.title,
    body: (
      <ol className="grid gap-2 sm:grid-cols-2">
        {group.modules.map((module, index) => (
          <li key={module} className="flex gap-3">
            <span className="font-bold text-cyan-300">{String(groupIndex * 6 + index + 1).padStart(2, "0")}.</span>
            <span>{module}</span>
          </li>
        ))}
      </ol>
    ),
  }));

  return (
    <Section
      id="conteudo"
      eyebrow="Conteúdo completo"
      title="36 módulos organizados na ordem de um projeto real."
      intro="Os blocos seguem a jornada natural: entender o mercado, escolher uma oferta, prospectar, vender, produzir, publicar, entregar e evoluir a operação."
      className="bg-navy-900/45"
    >
      <div className="mx-auto max-w-4xl">
        <Accordion items={items} numbered />
        <div className="mt-8 text-center">
          <CTAButton>Quero ter acesso aos 36 módulos</CTAButton>
        </div>
      </div>
    </Section>
  );
}

function DeliverablesSection() {
  return (
    <Section
      title="Não é apenas um PDF. É um manual de execução."
      intro="O comprador recebe estrutura, exemplos e materiais de apoio para agir com mais clareza em cada fase da prestação de serviço."
    >
      <div className="mb-12">
        <ProductMockup compact />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {deliverables.map(([title, description], index) => {
          const Icon = IconSet[index % IconSet.length];
          return (
            <MotionBlock key={title} delay={index * 0.015} className="rounded-lg border border-white/10 bg-white/[.055] p-5">
              <Icon aria-hidden="true" className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 font-black text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{description}</p>
            </MotionBlock>
          );
        })}
      </div>
      <div className="mt-9 text-center">
        <CTAButton>Ir para o checkout</CTAButton>
      </div>
    </Section>
  );
}

function FinancialScenario() {
  const scenarios = [
    ["Cenário inicial", "1 projeto de R$ 2.500", "Faturamento bruto ilustrativo: R$ 2.500"],
    ["Cenário de meta", "2 projetos de R$ 2.500", "Faturamento bruto ilustrativo: R$ 5.000"],
    ["Cenário de volume", "5 projetos de R$ 2.500", "Faturamento bruto ilustrativo: R$ 12.500"],
  ];

  return (
    <Section
      title="Quanto pode representar um projeto bem estruturado?"
      intro="O material utiliza faixas de referência para ajudar o aluno a entender posicionamento e precificação. Os valores variam conforme escopo, experiência, mercado, negociação e qualidade."
      className="bg-navy-900/45"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {scenarios.map(([title, line, result]) => (
          <MotionBlock key={title} className="rounded-lg border border-white/10 bg-white/[.055] p-6">
            <h3 className="text-sm font-black uppercase text-cyan-300">{title}</h3>
            <p className="mt-5 text-2xl font-black text-white">{line}</p>
            <p className="mt-3 text-gray-300">{result}</p>
          </MotionBlock>
        ))}
      </div>
      <p className="mt-6 rounded-lg border border-purple-300/25 bg-purple-300/9 p-5 text-sm leading-7 text-gray-100">
        Os números acima são simulações educacionais, não promessas de resultado. Faturamento não é lucro. Devem ser considerados impostos, ferramentas, retrabalho, taxas, terceirização e demais custos.
      </p>
    </Section>
  );
}

function ForWhomSection() {
  const yes = [
    "Iniciantes em serviços digitais",
    "Pessoas que desejam trabalhar de casa",
    "Freelancers",
    "Designers",
    "Social medias",
    "Profissionais de marketing",
    "Pessoas buscando uma nova fonte de renda",
    "Quem já usa IA, mas não sabe monetizar",
    "Quem quer aprender a criar sites sem começar por programação avançada",
    "Quem deseja prestar serviços para empresas locais",
  ];
  const no = [
    "Procura dinheiro fácil",
    "Não quer prospectar",
    "Não aceita revisar o trabalho da IA",
    "Espera resultados garantidos",
    "Quer copiar sites ou utilizar depoimentos falsos",
    "Não pretende cumprir prazos",
    "Não deseja aprender processos profissionais",
  ];

  return (
    <Section id="para-quem" title="Este método foi criado para quem quer construir, não apenas assistir.">
      <div className="grid gap-5 lg:grid-cols-2">
        <CompareCard title="Para quem é" items={yes} tone="accent" />
        <CompareCard title="Não é para quem" items={no} tone="muted" />
      </div>
    </Section>
  );
}

function ThirtyDayPath() {
  const phases = [
    ["Dias 1 a 10 — Fundação", ["Escolher nicho", "Criar oferta", "Planejar projeto conceitual", "Criar mapa do site", "Produzir primeira versão com Codex"]],
    ["Dias 11 a 20 — Portfólio e prospecção", ["Revisar design", "Publicar preview na Vercel", "Criar CRM", "Pesquisar empresas", "Enviar abordagens responsáveis", "Simular reunião"]],
    ["Dias 21 a 30 — Venda e operação", ["Criar propostas", "Organizar contrato", "Avaliar métricas", "Melhorar oferta", "Criar checklist de produção", "Planejar os próximos 60 dias"]],
  ];

  return (
    <Section title="Saia da ideia e comece a construir em 30 dias." className="bg-navy-900/45">
      <div className="grid gap-5 lg:grid-cols-3">
        {phases.map(([title, items], index) => (
          <MotionBlock key={title as string} delay={index * 0.04} className="rounded-lg border border-white/10 bg-white/[.055] p-6">
            <Timer aria-hidden="true" className="h-6 w-6 text-cyan-300" />
            <h3 className="mt-4 text-xl font-black text-white">{title as string}</h3>
            <ul className="mt-5 space-y-2">
              {(items as string[]).map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-gray-300">
                  <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                  {item}
                </li>
              ))}
            </ul>
          </MotionBlock>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-gray-400">O desafio mede execução e evolução. Não garante fechamento de clientes.</p>
      <div className="mt-8 text-center">
        <CTAButton>Começar minha jornada</CTAButton>
      </div>
    </Section>
  );
}

function AuthorSection() {
  return (
    <Section
      title="Quem está por trás do Método Agência IA"
      intro="O Método Agência IA foi desenvolvido para organizar, em um único material, o processo de criação e venda de serviços digitais com auxílio da inteligência artificial."
    >
      <div className="grid items-center gap-8 rounded-lg border border-white/10 bg-white/[.055] p-5 md:grid-cols-[280px_1fr] md:p-8">
        <div className="relative mx-auto w-full max-w-[240px] overflow-hidden rounded-lg border border-cyan-300/20 bg-black">
          <Image
            src={product.assets.author}
            alt="Identidade visual de Isaac Ribeiro e IRSync"
            width={958}
            height={939}
            className="aspect-square h-auto w-full object-cover"
          />
        </div>
        <div>
          <Image
            src={product.assets.logoTransparent}
            alt="Logomarca IRSync"
            width={360}
            height={120}
            className="mb-6 h-16 w-auto object-contain"
          />
          <h3 className="text-3xl font-black text-white">{product.authorName}</h3>
          <p className="mt-2 text-lg font-semibold text-cyan-200">IRSync — Dados, Soluções e Inovação</p>
          <p className="mt-5 max-w-3xl leading-8 text-gray-300">
            O objetivo é ajudar o aluno a sair da teoria, desenvolver habilidades práticas e estruturar uma operação profissional para serviços digitais.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Tecnologia", "Dados", "Soluções digitais", "Criação de sites", "Inteligência artificial", "Organização de processos"].map((item) => (
              <span key={item} className="rounded-md border border-white/12 bg-white/[.06] px-3 py-2 text-sm text-gray-200">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function OfferSection() {
  return (
    <Section id="oferta" eyebrow="Oferta" title="Tenha o Método Agência IA como seu manual de execução." className="bg-navy-900/45">
      <div className="mx-auto grid max-w-5xl items-center gap-8 rounded-lg border border-cyan-300/25 bg-[linear-gradient(135deg,rgba(36,120,242,.14),rgba(116,62,179,.17))] p-5 shadow-[0_30px_100px_rgba(0,0,0,.32)] md:grid-cols-[.8fr_1.2fr] md:p-8">
        <ProductMockup compact />
        <div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {["Método completo em PDF", "120 páginas", "36 módulos", "50 prompts", "Modelos prontos", "Checklists", "Desafio de 30 dias", "Plano de ação de 90 dias"].map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-gray-100">
                <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm font-semibold uppercase text-cyan-200">Investimento</p>
          <p className="mt-2 text-5xl font-black text-white">{product.priceDisplay}</p>
          <div className="mt-6">
            <CTAButton className="w-full sm:w-auto">Adquirir o Método Agência IA</CTAButton>
          </div>
          <p className="mt-3 text-sm text-gray-400">Clique para continuar no checkout.</p>
          <div className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-3">
            {[
              ["Compra online", MousePointerClick],
              ["Acesso digital", BookOpen],
              ["Ambiente externo", ShieldCheck],
            ].map(([label, Icon]) => (
              <span key={label as string} className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[.05] px-3 py-2">
                <Icon aria-hidden="true" className="h-4 w-4 text-cyan-300" />
                {label as string}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function FAQSection() {
  return (
    <Section
      id="perguntas"
      eyebrow="Perguntas frequentes"
      title="Respostas diretas para decidir com clareza."
    >
      <div className="mx-auto max-w-4xl">
        <Accordion
          items={faq.map((item) => ({
            title: item.question,
            body: <p>{item.answer}</p>,
          }))}
        />
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="section-wrap bg-[linear-gradient(135deg,#2478F2_0%,#743EB3_100%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_240px] lg:px-8">
        <MotionBlock>
          <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-5xl">
            Você pode continuar apenas consumindo conteúdo sobre IA ou começar a transformar conhecimento em serviço.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-50">
            O Método Agência IA mostra o caminho completo: encontrar empresas, apresentar uma solução, criar o projeto, publicar e entregar.
          </p>
          <div className="mt-7">
            <CTAButton variant="compact">Quero começar agora</CTAButton>
          </div>
          <div className="mt-3">
            <CTAButton variant="secondary">Garantir meu acesso</CTAButton>
          </div>
          <p className="mt-4 text-sm text-blue-50">Material educacional desenvolvido por Isaac Ribeiro e IRSync.</p>
        </MotionBlock>
        <ProductMockup compact />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-4 py-12 pb-28 text-gray-300 sm:px-6 lg:px-8 lg:pb-12">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Image
            src={product.assets.logoTransparent}
            alt="IRSync — Dados, Soluções e Inovação"
            width={320}
            height={120}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 max-w-xl text-sm leading-7">
            {product.productNameDisplay} por {product.authorName}. {product.companyName} — {product.companyTagline}.
          </p>
          <p className="mt-4 max-w-xl text-xs leading-6 text-gray-500">
            Este material não constitui promessa de renda. Os resultados dependem da execução individual, mercado, experiência, negociação e qualidade do serviço.
          </p>
        </div>
        <div>
          <h2 className="font-black text-white">Legal</h2>
          <div className="mt-4 grid gap-3 text-sm">
            <a href="/termos-de-uso" className="hover:text-white">Termos de uso</a>
            <a href="/politica-de-privacidade" className="hover:text-white">Política de privacidade</a>
            <span>Aviso de responsabilidade</span>
          </div>
        </div>
        <div>
          <h2 className="font-black text-white">Contato</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {product.email ? <a href={`mailto:${product.email}`}>{product.email}</a> : null}
            {product.instagram ? <a href={product.instagram}>Instagram</a> : null}
            {product.whatsapp ? <a href={product.whatsapp}>WhatsApp</a> : null}
            {product.cnpj ? <span>CNPJ: {product.cnpj}</span> : <span>Contatos comerciais serão exibidos quando configurados.</span>}
          </div>
        </div>
      </div>
    </footer>
  );
}

export function JsonLd() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const productJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.productNameDisplay,
    description: product.subtitle,
    brand: { "@type": "Brand", name: product.companyName },
    image: product.assets.cover,
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      price: "147.00",
      availability: "https://schema.org/InStock",
      url: product.checkoutUrl,
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJson) }} />
    </>
  );
}
