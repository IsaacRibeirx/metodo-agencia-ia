# Método Agência IA

Página de vendas em Next.js para o produto digital **Método Agência IA**, de Isaac Ribeiro e IRSync.

## Como instalar

```bash
npm install
```

## Como rodar localmente

```bash
npm run dev
```

Acesse o endereço exibido no terminal.

## Como fazer build

```bash
npm run build
```

## Como publicar na Vercel

1. Envie este projeto para um repositório GitHub.
2. Importe o repositório na Vercel.
3. Configure as variáveis de ambiente, se necessário.
4. Rode o deploy com o comando padrão `npm run build`.
5. Após publicar, configure `NEXT_PUBLIC_SITE_URL` com a URL final do domínio.

## Onde alterar dados principais

Arquivo: `src/data/product.ts`

Neste arquivo você altera:

- Nome do produto
- Subtítulo
- Autor
- Empresa
- Preço
- Link de checkout
- Forma de acesso
- Suporte
- Garantia
- E-mail
- WhatsApp
- Instagram
- CNPJ
- Avisos legais

Dados vazios ficam ocultos no site. Não preencha CNPJ, suporte, garantia ou contatos sem confirmação.

## Onde alterar o checkout

Arquivo: `src/data/product.ts`

Constante:

```ts
export const CHECKOUT_URL = "https://pay.cakto.com.br/3dx4yu4_994040";
```

A função em `src/lib/checkout.ts` preserva automaticamente:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`

## Onde substituir imagens

Use os mesmos nomes:

- `public/assets/brand/logo-irsync-transparente.png`
- `public/assets/brand/logo-irsync-completa.png`
- `public/assets/product/capa-metodo-agencia-ia.png`
- `public/assets/author/isaac-ribeiro.jpg`

Mantenha proporção original e evite imagens com texto ilegível em mobile.

## Como configurar Google Analytics

Na Vercel, configure:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Sem essa variável, o script não é carregado.

## Como configurar Meta Pixel

Na Vercel, configure:

```bash
NEXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Sem essa variável, o script não é carregado.

## Eventos preparados

A função central está em `src/lib/analytics.ts`.

Eventos:

- `view_content`
- `click_cta`
- `begin_checkout`
- `scroll_50`
- `view_offer`
- `view_faq`

## Como editar módulos e FAQ

- Módulos, pilares, entregáveis e etapas: `src/data/curriculum.ts`
- Perguntas frequentes: `src/data/faq.ts`

## Como conectar domínio futuramente

1. Aponte o domínio para a Vercel.
2. Configure DNS na Cloudflare conforme instruções da Vercel.
3. Aguarde propagação.
4. Confirme HTTPS ativo.
5. Atualize `NEXT_PUBLIC_SITE_URL`.

## Checklist antes da publicação

- Conferir preço e checkout.
- Confirmar contatos, CNPJ, suporte e garantia antes de exibir.
- Revisar termos e política com assessoria jurídica.
- Testar CTAs com UTMs.
- Verificar mobile em 320, 375, 430 e 768 px.
- Verificar desktop em 1024, 1280, 1440 e 1920 px.
- Rodar `npm run lint`.
- Rodar `npx tsc --noEmit`.
- Rodar `npm run build`.
- Validar SEO, imagens, menu, accordions e acessibilidade.
