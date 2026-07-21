import { product } from "./product";

export const baseFaq = [
  {
    question: "Preciso saber programar?",
    answer:
      "Não. O método começa pelos fundamentos e ensina como utilizar o Codex para auxiliar no planejamento, desenvolvimento e correção de sites. Ainda será necessário revisar, testar e validar o resultado.",
  },
  {
    question: "O material é indicado para iniciantes?",
    answer:
      "Sim. Os módulos seguem a ordem de um projeto real, desde a escolha do serviço até a entrega e manutenção.",
  },
  {
    question: "Vou aprender a encontrar clientes?",
    answer:
      "Sim. O material possui módulos sobre Google Maps, análise de empresas, abordagem, follow-up, reunião e proposta comercial.",
  },
  {
    question: "O método ensina a criar sites?",
    answer:
      "Sim. Ele aborda planejamento, landing pages, copywriting, design, Codex, GitHub, Vercel, domínio, Cloudflare e testes.",
  },
  {
    question: "O método garante renda?",
    answer:
      "Não. O conteúdo possui finalidade educacional. Resultados dependem da aplicação, mercado, experiência, negociação, qualidade e consistência.",
  },
  {
    question: "Preciso pagar várias ferramentas?",
    answer:
      "É possível começar com ferramentas gratuitas ou planos básicos. Domínio, serviços pagos, impostos e outros custos devem ser avaliados de acordo com cada projeto.",
  },
  {
    question: "O que são os 50 prompts?",
    answer:
      "São modelos organizados para pesquisa de nicho, análise de cliente, prospecção, abordagem, reunião, proposta, briefing, Codex, design, SEO, publicação, manutenção e outras tarefas.",
  },
  {
    question: "Como receberei o material?",
    answer: product.accessText,
  },
];

export const faq = [
  ...baseFaq,
  ...(product.supportText
    ? [{ question: "Existe suporte?", answer: product.supportText }]
    : []),
  ...(product.guaranteeDays
    ? [
        {
          question: "Existe garantia?",
          answer: `Sim. A garantia configurada é de ${product.guaranteeDays} dias, conforme as condições informadas no checkout.`,
        },
      ]
    : []),
];
