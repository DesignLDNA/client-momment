# Momment Coworking — Site

Site institucional da Momment, coworking premium em Arapongas/PR.

Vanilla HTML + CSS + JavaScript. Sem build step.

## Estrutura

```
.
├── index.html               Home
├── sobre.html               Sobre nós
├── espacos-e-planos.html    Espaços e Planos
├── contato.html             Contato
├── css/momment.css          Design system + componentes (single source)
├── js/momment.js            Motion, count-up, tabs, FAQ, count-down
├── assets/                  Imagens, SVGs, vídeo, logos
├── design_system/DESIGN.md  Fonte de verdade visual (tokens, regras)
├── CLAUDE.md                Briefing técnico e regras do projeto
├── robots.txt               Bloqueando indexação enquanto está em preview
└── .gitignore
```

Cada página HTML usa `css/momment.css` e `js/momment.js` — editar em um lugar afeta o site inteiro.

## Rodar local

Qualquer servidor estático na raiz do projeto. Exemplos:

```bash
# Python 3
python -m http.server 8000

# Node (com npx)
npx serve . -l 3000
```

Abra `http://localhost:8000` (ou 3000).

## Deploy

Configurado pra **Vercel** com auto-deploy via GitHub.

1. Push pra `main` no GitHub
2. Vercel detecta e publica automaticamente
3. URL de preview: `momment-*.vercel.app`
4. Quando a Momment fechar o domínio, apontar `momment.com.br` pro projeto Vercel

**Antes de ir pra produção:**

- Substituir `robots.txt` (atualmente bloqueando indexação) por um permissivo
- Adicionar `sitemap.xml` com as 4 URLs reais
- Conferir endereço, telefone e CNPJ no rodapé e schema.org
- Revisar números/preços nos planos com o cliente

## Design System

Toda decisão visual passa por **`design_system/DESIGN.md`**. Não improvisar fora disso.

- Cores: coral-600/500/100, lavender, ink, cream-100/200, stone
- Tipografia: Fraunces (display) + Nunito (sans)
- Spacing: múltiplos de 4px (`--s-1` a `--s-32`)
- Motion: 220ms base, transform/opacity only, prefers-reduced-motion respeitado
- Ícones: Phosphor regular (1.5px stroke), fill apenas em estado ativo

## Observações

- O FAQ na home usa `<details>` nativo (sem JS pra abrir/fechar)
- Hero da home tem fundo de vídeo MP4 (`assets/video-hero-momment.mp4`)
- Padrão CTA primário do site inteiro: WhatsApp (coral filled)
- Padrão CTA secundário: outline ink ou cream
