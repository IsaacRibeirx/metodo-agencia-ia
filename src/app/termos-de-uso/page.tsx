import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { product } from "@/data/product";

export const metadata: Metadata = {
  title: "Termos de Uso | Método Agência IA",
  description: "Termos de uso base do Método Agência IA.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Termos de Uso"
      intro="Estes termos apresentam regras gerais para acesso, compra e uso do conteúdo educacional Método Agência IA."
      sections={[
        {
          title: "1. Natureza do produto",
          body: [
            `${product.productNameDisplay} é um material educacional sobre criação, venda, publicação e entrega de serviços digitais com apoio de inteligência artificial.`,
            "O conteúdo não constitui promessa de renda, garantia de clientes, garantia de lucro ou consultoria jurídica, contábil ou financeira.",
          ],
        },
        {
          title: "2. Compra e acesso",
          body: [
            "A compra é realizada em checkout externo. O acesso será liberado conforme as condições informadas no checkout.",
            "Preço, forma de pagamento, eventuais taxas e condições comerciais devem ser conferidos antes da confirmação da compra.",
          ],
        },
        {
          title: "3. Uso permitido",
          body: [
            "O comprador pode usar o material para estudo e aplicação própria em seus processos profissionais.",
            "Não é permitido revender, redistribuir, copiar integralmente ou disponibilizar o material a terceiros sem autorização.",
          ],
        },
        {
          title: "4. Resultados e responsabilidade",
          body: [
            "Resultados dependem da aplicação individual, experiência, mercado, qualidade da execução, negociação e consistência.",
            "Faturamento bruto não é lucro e deve considerar impostos, ferramentas, custos operacionais, retrabalho e eventuais contratações.",
          ],
        },
        {
          title: "5. Garantia, suporte e dados empresariais",
          body: [
            "Garantia, suporte, CNPJ, razão social, endereço, política de reembolso e foro devem ser adicionados somente quando confirmados e revisados juridicamente.",
          ],
        },
      ]}
    />
  );
}
