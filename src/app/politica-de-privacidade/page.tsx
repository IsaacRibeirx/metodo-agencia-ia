import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { product } from "@/data/product";

export const metadata: Metadata = {
  title: "Política de Privacidade | Método Agência IA",
  description: "Política de privacidade base do Método Agência IA.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política descreve, em linguagem simples, como dados pessoais podem ser tratados no contexto da página do Método Agência IA."
      sections={[
        {
          title: "1. Controlador e escopo",
          body: [
            `${product.companyName} é a marca responsável pela comunicação desta página. Dados societários, endereço e encarregado de dados devem ser adicionados apenas quando confirmados.`,
            "Esta política se aplica à navegação nesta página e à comunicação relacionada ao produto digital.",
          ],
        },
        {
          title: "2. Dados que podem ser tratados",
          body: [
            "Podem ser tratados dados fornecidos voluntariamente pelo visitante, como nome, e-mail, telefone ou mensagens enviadas em canais configurados.",
            "Também podem ser coletados dados técnicos de navegação, como dispositivo, navegador, páginas acessadas, origem de tráfego e parâmetros UTM.",
          ],
        },
        {
          title: "3. Finalidades",
          body: [
            "Os dados podem ser usados para responder contatos, direcionar ao checkout, medir desempenho da página, melhorar a comunicação e cumprir obrigações legais.",
            "IDs de Google Analytics e Meta Pixel só serão utilizados se forem configurados por variáveis de ambiente.",
          ],
        },
        {
          title: "4. Checkout externo",
          body: [
            "A compra é concluída em ambiente externo de pagamento. As condições de pagamento, acesso e eventual suporte devem ser verificadas diretamente no checkout.",
          ],
        },
        {
          title: "5. Direitos do titular",
          body: [
            "O titular pode solicitar acesso, correção, eliminação ou informações sobre o tratamento de seus dados, conforme legislação aplicável.",
            "Os canais de contato devem ser exibidos nesta política quando estiverem configurados nos dados do produto.",
          ],
        },
      ]}
    />
  );
}
