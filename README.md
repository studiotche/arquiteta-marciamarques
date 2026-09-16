# Template Astro — Nutricionista local

Modelo estático, responsivo e reutilizável para sites de nutricionistas, com SEO local, dados estruturados e foco em conversão pelo WhatsApp.

## Personalização rápida

1. Edite `src/data/site.ts` com nome, cidades, telefone, textos, especialidades, depoimentos e URL final.
2. Substitua os arquivos `logo-gladisfeldmann.svg`, `hero-gladis.webp` e `sobre-gladis.webp` em `public/images`.
3. Substitua `public/favicon-gladis.png` e atualize o monograma `GF` em `src/pages/index.astro`.
4. Ajuste a URL do sitemap em `public/robots.txt`.
5. Confirme dados profissionais, endereço, telefone e especialidades diretamente com a nutricionista.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build e Cloudflare Pages

```bash
npm run build
```

- Comando de build: `npm run build`
- Diretório de saída: `dist`
- Para um link temporário, defina `PUBLIC_SITE_PREVIEW=true` para gerar `noindex,nofollow`.

O conteúdo evita promessas clínicas e especialidades não confirmadas. Antes da publicação definitiva, valide o JSON-LD e envie o sitemap no Google Search Console.
