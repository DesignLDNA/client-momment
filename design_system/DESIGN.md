# Momment Coworking — DESIGN.md
**Versão:** 1.0 · **Atualizado em:** 2026-04-28 · **Owner:** Design

> Fonte de verdade visual de TODO o site da Momment. Toda decisão aqui é
> opinativa — copie tokens, não invente novos. Se faltar token, abra issue
> antes de improvisar.

---

## 0. Princípios

1. **Conforto material, não plástico digital.** A Momment vende móvel bom em cidade de móvel. Layout precisa respirar como uma sala bem mobiliada — não como um SaaS.
2. **Coral é gesto, não fundo.** O `#FF7262` é o ponto do "i" do logo. Trate como acento pontual (CTA, badge, ponto vivo). Nunca como background de seção inteira.
3. **Cream é o palco.** Bege-creme + off-white são os fundos principais. Branco puro só em superfícies internas (card, input).
4. **Tipografia tem dois pesos: presença e leitura.** Serif quente para títulos, sans rounded para tudo o resto.

---

## 1. Cores

Tokens vêm direto do Guia de Marca Momment. **Não adicione cores fora desta lista** sem revisão de marca.

```css
:root {
  /* Brand */
  --coral-600:   #E85A4A;   /* hover/pressed do coral */
  --coral-500:   #FF7262;   /* PRIMÁRIA — acento, CTA, ponto do "i" */
  --coral-100:   #FFD9D2;   /* tint p/ chip, fundo de toast sucesso quente */

  --lavender-500:#D7BAFD;   /* SECUNDÁRIA — usar com extrema parcimônia */
  --lavender-100:#EFE3FF;

  /* Neutros quentes (palco) */
  --ink:         #101010;   /* texto principal, headings */
  --ink-soft:    #2A2522;   /* texto secundário em fundo claro */
  --stone-500:   #BFB4AE;   /* texto terciário, ícones desativados */
  --stone-300:   #D9D0CA;   /* border default */
  --stone-200:   #E8DFD9;   /* border subtle */
  --cream-200:   #F5E7DF;   /* surface elevada (card destacado) */
  --cream-100:   #FFF6F2;   /* BG padrão da página */
  --white:       #FFFFFF;   /* surface interna (input, card default) */

  /* Semânticos (derivados, harmonizados ao palette quente) */
  --success-500: #2F8F6B;   /* dessaturado p/ não brigar com coral */
  --success-100: #DDEEE5;
  --warning-500: #C9892B;
  --warning-100: #F8ECD3;
  --error-500:   #C0392B;   /* mais terroso que vermelho puro */
  --error-100:   #F6DAD4;
  --info-500:    #6B5BB3;   /* primo escuro do lavender */
  --info-100:    var(--lavender-100);

  /* Foco (acessibilidade) */
  --focus-ring:  #FF7262;
}
```

### Heurísticas (cor)
- **Coral** → 1 CTA primário visível por vez no viewport. Badge "Melhor valor". Underline de link em texto corrido. Ponto vivo em status.
- **Lavender** → microacento decorativo (chip "Pré-inauguração", ilustração de fundo, tag de categoria de sala). **Nunca** como CTA.
- **Cream-100** = body bg. **Cream-200** = card destacado (Plano Anual). **White** = card default e input.
- **Ink (#101010)** sobre **cream-100** = combo padrão para texto longo. Não use ink sobre coral (contraste ruim) — use white sobre coral.

---

## 2. Tipografia

Marca oficial: **All Round Gothic** (display sans, geométrica arredondada) + **The Seasons** (serif quente, 4 pesos: Book/Medium/Demi/Bold).

Ambas são licenciadas. Para fallback em ferramentas sem as fontes embarcadas, use **Fraunces** (serif) e **Nunito** (sans) do Google Fonts — métricas próximas o bastante para layout não quebrar.

```css
:root {
  --font-display: "The Seasons", "Fraunces", Georgia, serif;
  --font-sans:    "All Round Gothic", "Nunito", system-ui, sans-serif;

  /* Escala (1.250 — major third). Usar clamp p/ fluidez. */
  --fs-display:  clamp(56px, 7vw, 88px);  /* hero */
  --fs-h1:       clamp(40px, 5vw, 60px);
  --fs-h2:       clamp(32px, 4vw, 44px);
  --fs-h3:       28px;
  --fs-h4:       22px;
  --fs-h5:       18px;
  --fs-body-lg:  18px;
  --fs-body:     16px;
  --fs-caption:  14px;
  --fs-label:    13px;

  --lh-tight:   1.05;   /* display, h1 */
  --lh-snug:    1.2;    /* h2-h4 */
  --lh-body:    1.7;    /* corpo longo — generoso, ar de revista */
  --lh-ui:      1.4;    /* labels, botões */

  --tracking-display: -0.02em;  /* títulos grandes apertados */
  --tracking-tight:   -0.01em;
  --tracking-normal:  0;
  --tracking-wide:     0.06em;  /* eyebrow, label uppercase */
}

h1, h2, h3 { font-family: var(--font-display); font-weight: 500; /* Medium */
             letter-spacing: var(--tracking-display); line-height: var(--lh-tight); }
h4, h5, h6 { font-family: var(--font-display); font-weight: 600; /* Demi */ }
body       { font-family: var(--font-sans); font-size: var(--fs-body);
             line-height: var(--lh-body); color: var(--ink); }
.eyebrow   { font: 500 var(--fs-label)/1 var(--font-sans);
             text-transform: uppercase; letter-spacing: var(--tracking-wide);
             color: var(--coral-500); }
```

**Regras de ouro**
- Hero: `Display Medium`, peso 500, tracking apertado. Nunca Bold no display — fica grosso.
- Corpo a 16px / line-height 1.7. Em colunas largas (>720px) suba p/ 18px.
- **Nunca** mais de 3 pesos por página.

---

## 3. Espaçamento e Grid

Base **4px**. Múltiplos puros. Spacing tokens são números, não t-shirt sizes.

```css
:root {
  --s-1: 4px;   --s-2: 8px;   --s-3: 12px;  --s-4: 16px;
  --s-5: 20px;  --s-6: 24px;  --s-8: 32px;  --s-10: 40px;
  --s-12: 48px; --s-16: 64px; --s-20: 80px; --s-24: 96px; --s-32: 128px;

  --container: 1200px;     /* max-width padrão */
  --container-narrow: 720px; /* texto longo */
  --gutter: var(--s-6);    /* 24px entre colunas */

  --section-y-mobile:  56px;
  --section-y-desktop: 96px;
}

.container { width: 100%; max-width: var(--container);
             margin-inline: auto; padding-inline: var(--s-6); }
.section   { padding-block: var(--section-y-mobile); }
@media (min-width: 768px) {
  .section { padding-block: var(--section-y-desktop); }
}
```

**Grid**: 12 colunas, gutter 24px. Em mobile colapsa para 4 colunas com gutter 16px. Não invente layouts de 5 ou 7 colunas — use 12 / 6 / 4 / 3 / 2.

---

## 4. Border Radius

```css
:root {
  --r-sm:  4px;    /* badges, tags */
  --r-md:  8px;    /* botões, inputs */
  --r-lg:  12px;   /* cards default */
  --r-xl:  16px;   /* cards destacados, modais */
  --r-2xl: 24px;   /* hero card, ilustrações grandes */
  --r-full: 9999px;
}
```

Raio segue a **massa** do elemento: peça pequena = raio pequeno. Botão (8) e input (8) sempre iguais — eles convivem em formulários.

---

## 5. Sombras (elevação)

**Nunca** sombra preta pura. Sempre tinta de coral diluído (5–8% opacidade) — dá a sensação de "luz quente caindo em madeira".

```css
:root {
  --shadow-sm: 0 1px 2px rgba(255, 114, 98, 0.06),
               0 1px 1px rgba(16, 16, 16, 0.04);
  --shadow-md: 0 4px 12px rgba(255, 114, 98, 0.08),
               0 2px 4px rgba(16, 16, 16, 0.04);
  --shadow-lg: 0 12px 28px rgba(255, 114, 98, 0.10),
               0 4px 10px rgba(16, 16, 16, 0.05);
  --shadow-xl: 0 24px 56px rgba(255, 114, 98, 0.12),
               0 8px 18px rgba(16, 16, 16, 0.06);

  /* Borda 1px sutil — alternativa preferida em superfícies pequenas */
  --hairline: inset 0 0 0 1px var(--stone-200);
}
```

Hierarquia: card default = `hairline`. Card hover = `shadow-md`. Card destacado (Plano Anual) = `shadow-lg`. Modal = `shadow-xl`. **Botão não tem sombra** — sombra em botão é AI-slop.

---

## 6. Componentes base

### 6.1 Botões

3 variantes × 3 tamanhos. Sempre com `:focus-visible` ring de 2px coral + offset 2px.

```css
.btn { font: 500 16px/1 var(--font-sans); border-radius: var(--r-md);
       padding: 14px 22px; display: inline-flex; align-items: center;
       gap: var(--s-2); transition: transform 200ms ease-out,
       background-color 200ms ease-out, color 200ms ease-out; }
.btn:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }
.btn:active        { transform: translateY(1px); }
.btn[disabled]     { opacity: 0.5; pointer-events: none; }

.btn--primary   { background: var(--coral-500); color: var(--white); }
.btn--primary:hover { background: var(--coral-600); }
.btn--secondary { background: transparent; color: var(--ink);
                  box-shadow: inset 0 0 0 1.5px var(--ink); }
.btn--secondary:hover { background: var(--ink); color: var(--white); }
.btn--ghost     { background: transparent; color: var(--ink); padding-inline: var(--s-3); }
.btn--ghost:hover { background: var(--stone-200); }

.btn--sm { font-size: 14px; padding: 10px 16px; }
.btn--lg { font-size: 18px; padding: 18px 28px; }
```

### 6.2 Cards

```
default      → bg white,      hairline,           radius lg
highlighted  → bg cream-200,  shadow-lg,          radius xl   (PLANO ANUAL apenas)
subtle/info  → bg cream-100,  hairline cream-200, radius lg   (callouts, FAQ)
```

### 6.3 Inputs

```css
.input { background: var(--white); border: 1px solid var(--stone-300);
         border-radius: var(--r-md); padding: 12px 14px;
         font: 400 16px/1.4 var(--font-sans); color: var(--ink);
         transition: border-color 200ms ease-out, box-shadow 200ms ease-out; }
.input:hover    { border-color: var(--stone-500); }
.input:focus    { border-color: var(--coral-500); outline: none;
                  box-shadow: 0 0 0 3px var(--coral-100); }
.input--error   { border-color: var(--error-500);
                  box-shadow: 0 0 0 3px var(--error-100); }
.input[disabled]{ background: var(--stone-200); color: var(--stone-500); }
```

Label sempre acima, 13px uppercase tracking-wide. Helper text em 13px stone-500 abaixo. Erro em 13px error-500 com micro-ícone à esquerda.

### 6.4 Badges

```
.badge--meters    → metragem ("16m²"), bg cream-200, ink, radius sm, 11px tracking-wide
.badge--best      → "Melhor valor",   bg coral-500,  white, radius full, 12px medium
.badge--soft      → categorias,       bg lavender-100, info-500, radius full
```

---

## 7. Motion

```css
:root {
  --dur-fast:   150ms;
  --dur-base:   220ms;
  --dur-slow:   320ms;
  --ease-out:   cubic-bezier(0.22, 1, 0.36, 1);   /* entrada */
  --ease-in:    cubic-bezier(0.55, 0, 0.6, 1);    /* saída */
  --ease-inout: cubic-bezier(0.65, 0, 0.35, 1);   /* drag, scrub */
}
```

**Regras**
- Anime apenas `transform` e `opacity`. Layout animado = jank.
- Hover de card: `translateY(-2px)` + sombra md → lg. Nada além.
- Page enter: stagger de 60ms entre filhos, cada um `opacity 0→1` + `translateY(8px→0)`.
- Respeite `prefers-reduced-motion: reduce` — corte para 0ms.

---

## 8. Anti-padrões (NÃO FAÇA)

1. **Não use `bg-white` + `shadow-md` em todo card.** Default é hairline em white. Sombra é exceção.
2. **Não invente gradiente coral→lavender.** A marca tem duas cores; deixe-as em paz. Gradiente roxo-rosa de IA é proibido.
3. **Não centralize tudo.** Hero alinhado à esquerda, com imagem à direita. Texto longo alinhado à esquerda. Centralizar é default de quem não decidiu.
4. **Nada de glass/blur de fundo** (`backdrop-filter: blur`). Não combina com a materialidade de móvel.
5. **Não use ícones lineares thin (1px).** Use ícones de 1.75–2px (Lucide weight default ou Phosphor regular). Thin some no cream.
6. **Não use emojis como ícones.** Iconografia ou nada.
7. **Não preencha a página com "stats" inventados** ("+200 networking", "98% satisfação"). Se não temos número real, não inventamos.
8. **Não use sombra preta pura.** Sempre coral-tinted (ver §5).
9. **Não use coral como bg de seção full-width.** Coral é gesto pontual, não palco.

---

## 9. Narrativa "Terra do Móvel"

Arapongas é polo moveleiro. O design tem que **parecer feito**, não montado.

- **Texturas**: SVG noise sutil (4–6% opacidade) sobre cream-100 nas seções principais. Imperceptível, mas tira o "plástico" do flat.
- **Hierarquia que respira**: padding generoso (`--s-16` a `--s-24` entre seções). Densidade vem do conteúdo, não do empilhamento.
- **Fotografia**: priorizar **closes** de detalhes — nó de madeira, junção de cadeira, tecido, luz na mesa. Hero pode ter foto ampla, mas seções internas favorecem macro.
- **Linhas**: divisores `1px stone-200`, nunca `1px stone-500`. A divisão é uma sugestão, não um corte.
- **Imagens com radius `--r-xl`** sempre. Imagem em retângulo reto é frio.
- **Aspect ratios**: 4:5 (retrato móvel), 3:2 (paisagem espaço), 1:1 (detalhe). Evite 16:9 — é cinema, não móvel.

---

## 10. Heurísticas de uso

### Quando coral, quando lavender
- **Coral** sempre que houver **ação ou ênfase de marca**: CTA primário, link em texto, badge "Melhor valor", ponto vivo de status, eyebrow de seção.
- **Lavender** quando precisar **decorar sem competir**: ilustração de fundo, tag de categoria de sala, callout informativo. **Máximo 1 uso de lavender por viewport.**

### Card destacado: regra única
Card `highlighted` (cream-200 + shadow-lg + radius xl) é reservado a:
1. Plano Anual na seção de preços.
2. CTA final ("Reserve seu lugar antes da inauguração").
Mais que isso e o destaque vira ruído.

### Hierarquia WhatsApp vs formulário
- **WhatsApp** é o CTA primário em **todo o site** (botão coral preenchido com ícone WA). Aparece no header sticky, no hero, no fim de cada plano, no rodapé.
- **Formulário** é CTA **secundário** (botão outline ink). Só na página de contato e como segunda opção em fundo de página.
- Em mobile, botão WhatsApp flutuante fixo bottom-right (56px circle, coral, shadow-md). Sumir só na seção de formulário.

### Tom de copy
- Direto, segunda pessoa ("Você", não "Os profissionais"). 
- Sem "soluções", "ecossistema", "transformação". 
- Frases curtas. Verbos no presente.
- Quando citar Arapongas, citar com orgulho local — não como "interior".

---

## 11. Icon library

**Padrão único: [Phosphor Icons](https://phosphoricons.com/)**, peso `regular` (stroke 1.5px). Uma biblioteca, em todo o site. Sem exceção.

### Por que Phosphor (e não Lucide / Heroicons / Solar)
- **Geometria arredondada bate com All Round Gothic.** Lucide é mais técnico (Feather descendant), Heroicons é mais Apple-genérico, Solar é bonito mas duotone marca demais e fica AI-flat.
- **6 pesos disponíveis** (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`). Usamos só **regular** como padrão e **fill** para estados ativos. Os outros existem como escape, não como recurso.
- **Cobertura grande** (1.500+) — não precisa cair em emoji ou ícone genérico do Material por falta de glyph.
- **Premium-mas-humano**: cantos suaves (não bolhudos), terminações cortadas em ângulo. Mesmo DNA do logotipo Momment.

### Tamanhos

```css
:root {
  --icon-sm: 16px;   /* inline em corpo, label, chip */
  --icon-md: 20px;   /* default — botão, lista, input */
  --icon-lg: 24px;   /* card header, nav item, feature row */
  --icon-xl: 32px;   /* hero, stat, ícone-âncora de seção */
}
.icon { stroke-width: 1.5; flex-shrink: 0; }
.icon--coral { color: var(--coral-500); }
.icon--ink   { color: var(--ink); }
.icon--soft  { color: var(--stone-500); }
```

**Stroke 1.5** em todos os tamanhos — não engrosse em sm nem afine em xl. O ícone tem que parecer da mesma família em qualquer escala.

### Mapa de ícones canônicos

Use **exatamente** estes nomes — copiar/colar do Phosphor. Não "interprete".

| Uso | Phosphor (regular) | Phosphor (fill, p/ ativo) |
|---|---|---|
| WhatsApp (CTA primário) | `whatsapp-logo` | `whatsapp-logo-fill` |
| E-mail | `envelope-simple` | `envelope-simple-fill` |
| Telefone | `phone` | `phone-fill` |
| Endereço / mapa | `map-pin` | `map-pin-fill` |
| Café (copa) | `coffee` | `coffee-fill` |
| Cadeira / móvel | `armchair` | `armchair-fill` |
| Mesa de trabalho | `desk` | `desk-fill` |
| Comunidade / pessoas | `users-three` | `users-three-fill` |
| Calendário (visita, agenda) | `calendar-blank` | `calendar-blank-fill` |
| Confirmação (feature list) | `check` | `check-circle-fill` |
| Sala / porta privativa | `door` | `door-fill` |
| Internet / wifi | `wifi-high` | `wifi-high-fill` |
| Estacionamento | `car` | `car-fill` |
| Acesso 24/7 | `clock-clockwise` | `clock-clockwise-fill` |
| Acústica / silêncio | `speaker-slash` | `speaker-slash-fill` |
| Reserva / agendamento | `calendar-check` | `calendar-check-fill` |
| Ar-condicionado / clima | `wind` | `wind-fill` |
| Impressora / utilitário | `printer` | `printer-fill` |
| Seta CTA (link) | `arrow-right` | — |
| Seta voltar | `arrow-left` | — |
| Próximo passo (carrossel) | `caret-right` | — |
| Fechar (modal, drawer) | `x` | — |

### Regras de uso
- **Nunca misturar bibliotecas.** Importar Lucide num componente já vai travar code review.
- **Nunca emoji** como substituto. Se faltar glyph na lista acima, abra issue antes de inventar.
- **Cor: por padrão herda `currentColor`** — defina cor no contêiner, não no SVG. Coral só em ícones de **ação** (WhatsApp CTA, check de feature em card destacado). Em listas longas, ícone fica em `--ink` ou `--stone-500`, não coral.
- **Alinhamento óptico**: ícone em linha de texto recebe `vertical-align: -0.125em` ou (preferido) `display: inline-flex; align-items: center` no pai.
- **Versão fill = estado ativo** (item de menu selecionado, toggle ligado). Não para decoração.

---

## 12. Elementos gráficos

A Momment tem 3 camadas visuais além de cor e tipografia: pattern, ilustração e fotografia. Cada uma com função clara — não são intercambiáveis.

### 12.1 Patterns / texturas

Dois patterns. **Apenas dois.** Mais que isso vira tecido de sofá ruim.

#### A. `noise-warm` — ruído sutil sobre cream

Aplicado em `body` e em seções `--cream-100` ou `--cream-200` para tirar o achatamento de flat color. **Imperceptível conscientemente, presente subliminarmente** — esse é o objetivo.

```css
body {
  background-color: var(--cream-100);
  background-image: url("data:image/svg+xml;utf8,\
    <svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'>\
      <filter id='n'>\
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>\
        <feColorMatrix values='0 0 0 0 0.063  0 0 0 0 0.063  0 0 0 0 0.063  0 0 0 0.05 0'/>\
      </filter>\
      <rect width='100%' height='100%' filter='url(%23n)'/>\
    </svg>");
  background-size: 240px 240px;
  background-attachment: fixed;
}
```

Especificação:
- **Opacidade do ruído: 5%** (`0.05` no alpha do colorMatrix). 4% se a foto da seção for muito limpa, 6% se for muito chapada.
- **Tile 240×240** com `stitchTiles="stitch"` — sem costura visível.
- **`background-attachment: fixed`** no body para que o pattern não "role" junto com o conteúdo (parece mais um material físico).
- **NÃO** aplicar em cima de fotografia. **NÃO** aplicar em cima do `--ink` (some). **NÃO** aplicar em modais/cards.

#### B. `grid-tecnico` — grid 24px sutil

Para seções que querem ar de "blueprint de marcenaria" — tipicamente "Como funciona em 3 passos", "Planta do espaço". **No máximo uma seção por página.**

```css
.bg-blueprint {
  background-color: var(--cream-100);
  background-image:
    linear-gradient(to right,  rgba(16,16,16,0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(16,16,16,0.04) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

Especificação:
- **Linhas a 4% de preto.** Mais que isso compete com texto.
- Múltiplo de **24px** (`--s-6`) — alinha com gutter do grid de layout.
- **NÃO** combinar com `noise-warm` na mesma seção. Escolha um.
- **NÃO** usar em mobile (poluição visual em tela pequena) — abaixo de 768px, fallback para `cream-100` puro.

### 12.2 Ilustrações

**Estilo único: linha 1.5px monocromática `--ink` sobre cream, com 1 detalhe coral pontual** (a "vírgula" da marca: o ponto do "i").

- **Não duotone**, não isométrico, não flat-cartoon, não 3D render.
- Linha **mesma espessura do ícone Phosphor regular** — pra ilustração e iconografia parecerem da mesma mão.
- Uso típico: 3 cenários da seção de problema (home office caótico, café barulhento, sala comercial cara), 3 passos do "Como funciona", spot art em FAQ.
- **Razão 4:3 ou 1:1** (não panorâmica).
- **Implementação**: SVG customizado **desenhado por humano ou ilustrador contratado**, não geração por IA. Ilustração de IA tem rasgos de coerência (mãos, perspectiva) que destroem o sinal de "feito com cuidado".
- Se não tiver ilustração pronta: **placeholder** SVG com retângulo cream-200 + label monospace "ilustração: cenário X". Melhor placeholder honesto que ilustração ruim.

### 12.3 Fotografia

A camada de maior peso narrativo. Tudo passa por aqui.

#### Mood
- **Luz natural lateral** (janela à esquerda ou direita, nunca de frente). Sombras visíveis = volume = mobiliário real.
- **Tons quentes** — manhã (8–10h) ou tarde dourada (16–18h). Branco frio fluorescente é proibido.
- **Pessoas: sim, mas trabalhando de verdade.** Plano médio mostrando mãos no teclado, não rosto sorrindo pra câmera. **Foto-stock de "equipe de pé apontando pra notebook" é proibida**.
- **Densidade de objetos**: caderno aberto, xícara meio cheia, óculos sobre a mesa. Vida real, não photoshoot estéril.

#### Tratamento
- Saturação **−5 a −10** do raw (não dessaturado, mas sem pop artificial).
- Contraste **+5 a +10** nas sombras pra ressaltar grão de madeira.
- **Grão sutil**: opcional, 1–2% em sombras (filme 400 ISO simulado). Não aplicar em todas — só quando a foto pedir mais "calor".
- **Sem virado azul/teal**. Branco da parede vira creme, sombra vira marrom-quente.
- **Sem HDR**. Sem clarity slider no máximo. Foto de coworking de SaaS é proibida.

#### Tipos necessários (e proporção sugerida no site)

| Tipo | Aspect | Onde |
|---|---|---|
| Hero (panorâmica do salão) | 3:2 | Topo da home |
| Detalhe de cadeira | 4:5 | Seção "premium real" |
| Detalhe de mesa (madeira + caderno) | 1:1 | Card de plano anual |
| Sala privativa (plano médio) | 3:2 | Seção de salas |
| Café / copa | 4:5 | Seção de comodidades |
| Fundadores / equipe (plano médio, casual) | 4:5 | Seção "quem somos" |
| Fachada / placa Momment | 3:2 | Rodapé / contato |
| Detalhe de marcenaria (junção, parafuso, encaixe) | 1:1 | Seção "Terra do Móvel" |

---

## 13. Prompts para AI image generator

Use **somente para placeholders e moodboard interno** enquanto a sessão de fotografia real não acontece. **Nunca publique imagem gerada por IA no site final** — fere a tese "feito com cuidado material".

Convenção dos prompts: descrição → estilo → paleta → luz → câmera → mood. Linguagem natural, sem flags. Cole na ferramenta como está.

### 13.1 Hero — salão amplo

> **Wide interior shot of a premium coworking space in Brazil**, polished concrete floor, large solid-wood desks with leather armchairs, warm pendant lighting overhead, floor-to-ceiling window on the left filling the room with soft morning side-light. **Editorial interior photography**, shallow depth of field, slight film grain. **Palette**: cream walls (#FFF6F2), warm beige textiles (#F5E7DF), oak wood, ink-black metal frames, single coral accent (#FF7262) on a cushion or vase. **Lighting**: 9am natural light, lateral, soft shadows. **Camera**: 35mm, f/4, eye-level, slight 3/4 angle. **Mood**: calm, professional, lived-in, not staged. No people in foreground. Magazine-quality, Kinfolk-meets-Dwell aesthetic. **Aspect ratio 3:2**, photorealistic, no AI gloss.

### 13.2 Problema 1 — home office caótico

> **Cluttered home office at midday**, kitchen table covered with papers, an open laptop next to a cereal bowl, a child's toy on a chair, harsh overhead fluorescent light, dishes piled in the background sink. **Documentary photography style**, slightly desaturated, true-to-life imperfection. **Palette**: cool whites, gray, olive, no coral. **Lighting**: flat overhead, slightly cold (5500K), creating fatigue. **Camera**: 28mm, f/5.6, eye-level. **Mood**: tired, distracting, unprofessional. Person off-frame. **Aspect ratio 4:5**.

### 13.3 Problema 2 — reunião em cafeteria

> **Two professionals in business-casual attire trying to have a meeting at a crowded café**, latte cups on small marble table, laptop balanced precariously, blurred customers behind them, ambient noise implied through motion blur of a passing waiter. **Candid documentary photography**, handheld feel. **Palette**: warm but chaotic — too many colors, branded coffee cups breaking neutrality. **Lighting**: mixed (window + tungsten), uneven. **Camera**: 50mm, f/2.8, slight tilt. **Mood**: distracted, unfocused, not premium. **Aspect ratio 4:5**.

### 13.4 Problema 3 — sala comercial vazia

> **Empty traditional commercial office for rent in a small Brazilian city**, scuffed white walls, fluorescent ceiling tiles, dated linoleum floor, a single dusty desk in the corner, "ALUGA-SE" sign taped to the window. **Real estate listing photography style**, wide angle, no flattering retouch. **Palette**: cold whites, gray, beige. **Lighting**: harsh fluorescent overhead, cold (4500K). **Camera**: 24mm, f/8, frontal. **Mood**: lonely, expensive, empty. **Aspect ratio 4:5**.

### 13.5 Close — cadeira premium

> **Macro detail of a high-end ergonomic office chair in oak and saddle-tan leather**, focus on the joinery between leather seat and wooden armrest, hand-stitched leather visible. **Product photography, but editorial** (not catalog). **Palette**: oak wood, cognac leather, ink-black metal hardware, on cream background (#F5E7DF). **Lighting**: soft north-window light from upper-left, shadow pooling under armrest. **Camera**: 90mm macro, f/2.8, 1/3 frame on detail. **Mood**: crafted, considered, expensive without flashy. Hint of grain. **Aspect ratio 4:5**.

### 13.6 Close — mesa de trabalho

> **Top-down 3/4 view of a solid wood desk surface**, open Moleskine notebook with handwritten notes, a fountain pen, a half-full ceramic mug of coffee, a folded pair of tortoiseshell glasses, MacBook edge in lower-right frame. Visible wood grain across the surface. **Editorial flat lay**, but slightly angled (not 90°). **Palette**: warm oak wood, cream paper, ink-black, single coral pen cap (#FF7262) as the only saturated accent. **Lighting**: warm afternoon light from upper-right, long soft shadow from mug. **Camera**: 50mm, f/4, 30° angle. **Mood**: inhabited, working, real. **Aspect ratio 1:1**.

### 13.7 Café / copa

> **Coworking pantry corner**, brass espresso machine on a marble counter, a row of ceramic mugs hanging on hooks, glass jar of coffee beans, small wooden shelf with single succulent plant. Brazilian specialty coffee bag visible. **Editorial interior photography**. **Palette**: cream walls, warm wood shelf, brass accents, deep green leaf as natural punctuation. **Lighting**: side-window soft light, late morning. **Camera**: 35mm, f/4, eye-level slightly low. **Mood**: ritual, warm, social. No people. **Aspect ratio 4:5**.

### 13.8 Planta do coworking

> **Architectural floor plan illustration of a 350m² coworking space**, top-down orthographic view, clean line-drawing on cream paper background. Show: open coworking area with 16 desks, 3 private rooms of varying sizes, 1 meeting room for 8, café/pantry corner, reception, restroom block. **Style**: technical architectural drawing, 1.5px ink-black lines on cream (#FFF6F2), no shadows, no perspective. **Accents**: chairs and desks indicated with simple geometric shapes, no fill. Single coral dot (#FF7262) marking the reception/entrance. Labels in lowercase sans-serif. **Mood**: blueprint-meets-editorial, like an architect's portfolio plate. **Aspect ratio 3:2**. Best generated as SVG by hand.

### Notas de uso (todos os prompts)
- Adicione sempre na descrição: sem pessoas sorrindo, sem rosto AI, sem brilho plástico, sem HDR, sem saturação exagerada, sem logo, sem texto sobreposto.
- Sempre rode 4 variações e escolha a que tem **mais defeito real** (luz não perfeita, objeto deslocado) — esse defeito é a marca de "real".
- Antes de aprovar, compare lado a lado com referências de **Kinfolk**, **Cereal**, **Dwell** ou interiores no portfólio do **Studio MK27**. Se a sua imagem parecer mais lisa que essas, troque o prompt.

---

## 14. Sistema de anima\u00e7\u00e3o e motion

> **Princ\u00edpio guia:** anima\u00e7\u00e3o serve \u00e0 hierarquia visual e ao sentimento de "feito com cuidado material" \u2014 nunca \u00e0 decora\u00e7\u00e3o. Se um efeito n\u00e3o ajuda o usu\u00e1rio a entender ou priorizar algo, ele n\u00e3o entra.

A se\u00e7\u00e3o \u00a77 (Motion) define os tokens base (`--dur-*`, `--ease-*`). Esta se\u00e7\u00e3o define **como us\u00e1-los**.

### 14.1 Micro-intera\u00e7\u00f5es

Resposta imediata ao input. Servem pra confirmar "voc\u00ea apertou a coisa certa".

```css
/* Bot\u00e3o: lift + sombra. NUNCA scale. */
.btn { transition: transform var(--dur-base) var(--ease-out),
                   background-color var(--dur-base) var(--ease-out),
                   box-shadow var(--dur-base) var(--ease-out); }
.btn--primary:hover   { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn--secondary:hover { transform: translateY(-1px); }
.btn:active           { transform: translateY(1px); transition-duration: var(--dur-fast); }

/* Input focus: anel coral suave */
.input:focus { border-color: var(--coral-500); outline: none;
               box-shadow: 0 0 0 3px var(--coral-100);
               transition: border-color var(--dur-base) var(--ease-out),
                           box-shadow var(--dur-base) var(--ease-out); }

/* Card hover: eleva\u00e7\u00e3o sutil. SEM scale. SEM rota\u00e7\u00e3o. */
.card-default { transition: transform var(--dur-base) var(--ease-out),
                            box-shadow var(--dur-base) var(--ease-out); }
.card-default:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }

/* Highlight em item clic\u00e1vel de lista (FAQ, nav) */
.list-item { transition: background-color var(--dur-fast) var(--ease-out); }
.list-item:hover { background: var(--cream-200); }
```

**N\u00c3O usar em**: divs decorativos, \u00edcones soltos, t\u00edtulos, par\u00e1grafos. Se o cursor n\u00e3o muda pra `pointer`, n\u00e3o anima.

### 14.2 Scroll reveal / fade-ins

Um padr\u00e3o \u00fanico em todo o site. Mais que um padr\u00e3o = ru\u00eddo.

```css
.reveal { opacity: 0; transform: translateY(16px);
          transition: opacity 500ms var(--ease-out),
                      transform 500ms var(--ease-out); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }

/* Stagger via custom property no inline style */
.reveal { transition-delay: var(--reveal-delay, 0ms); }
```

```html
<div class="reveal" style="--reveal-delay: 0ms">...</div>
<div class="reveal" style="--reveal-delay: 100ms">...</div>
<div class="reveal" style="--reveal-delay: 200ms">...</div>
```

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);  // anima 1x s\u00f3
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

Especifica\u00e7\u00e3o:
- **Dura\u00e7\u00e3o** 400\u2013600 ms (use 500 como padr\u00e3o).
- **Stagger** 80\u2013120 ms entre filhos do mesmo grupo (use 100).
- **Threshold** 0.15. **`rootMargin: -40px`** no bottom pra disparar um pouco antes do elemento entrar.
- **Anima 1 vez** \u2014 `unobserve` no primeiro trigger. Sem yo-yo de scroll.

**Onde usar**: grids de cards (planos, salas, comodidades), blocos de conte\u00fado, imagens de se\u00e7\u00e3o.
**Onde N\u00c3O usar**: hero (j\u00e1 vis\u00edvel no load), navega\u00e7\u00e3o, CTA flutuante, footer (usu\u00e1rio j\u00e1 entendeu o ritmo). Fade-in em tudo cansa o olho e atrasa percep\u00e7\u00e3o de conte\u00fado.

### 14.3 Text animations

**UM uso em todo o site: o H1 do hero. Mais nada.**

Sugest\u00e3o: [Splitting.js](https://splitting.js.org/) (~3kb) ou GSAP SplitText. Splitting basta.

```html
<h1 class="hero-title" data-splitting="words">
  O maior coworking de Arapongas.
</h1>
```

```css
.hero-title .word {
  display: inline-block;
  opacity: 0;
  transform: translateY(0.4em);
  animation: word-up 600ms var(--ease-out) forwards;
  animation-delay: calc(60ms * var(--word-index, 0));
}
@keyframes word-up { to { opacity: 1; transform: translateY(0); } }
```

Especifica\u00e7\u00e3o:
- **Word-by-word fade up** (n\u00e3o letter-by-letter \u2014 caro e ileg\u00edvel).
- **Stagger 60 ms** entre palavras.
- **Cada palavra anima por 600 ms**, dura\u00e7\u00e3o total m\u00e1xima da frase \u2264 800 ms (limita o tamanho do H1 a ~10 palavras).
- **`forwards`** pra ficar no estado final.

**Estritamente proibido em**: H2, H3, qualquer outro t\u00edtulo, par\u00e1grafos, listas, eyebrows, badges, labels, items de menu, prices.

**Por que a regra \u00e9 dura**: animar texto em todo lugar empobrece o efeito (vira default, n\u00e3o assinatura) e cansa o leitor profissional que veio ler conte\u00fado, n\u00e3o assistir abertura. O hero recebe o tratamento porque \u00e9 a primeira impress\u00e3o e o resto da p\u00e1gina precisa estar pronto pra leitura imediata.

### 14.4 WebGL (decis\u00e3o estrat\u00e9gica)

**Recomenda\u00e7\u00e3o: N\u00c3O usar WebGL neste projeto.**

A Momment vende mat\u00e9ria \u2014 madeira, couro, luz natural. Shader animado, mesmo sutil, sinaliza "tech startup", n\u00e3o "coworking premium em cidade do m\u00f3vel". O custo (bundle, GPU em mobile, reduced-motion fallback, manuten\u00e7\u00e3o) n\u00e3o se paga.

**Alternativa recomendada**: gradiente CSS animado lento no fundo do hero, ou nada.

```css
.hero-bg {
  background: radial-gradient(120% 80% at 30% 20%,
              #FFE7DC 0%, var(--cream-100) 60%, var(--cream-100) 100%);
  background-size: 200% 200%;
  animation: hero-drift 24s ease-in-out infinite alternate;
}
@keyframes hero-drift {
  to { background-position: 60% 40%; }
}
@media (prefers-reduced-motion: reduce) {
  .hero-bg { animation: none; }
}
```

**Se mesmo assim WebGL entrar (escopo futuro)**:
- Usar **OGL** (~12kb) e n\u00e3o Three.js (130kb+).
- **Apenas** no fundo do hero. Nunca em meia p\u00e1gina, nunca decorativo.
- **Reduced-motion**: detectar e renderizar 1 frame est\u00e1tico (n\u00e3o desligar tela em branco).
- **Mobile/low-end** (`navigator.hardwareConcurrency <= 4` ou `matchMedia('(max-width: 768px)')`): fallback CSS gradient. N\u00e3o tentar rodar shader.
- **Pausar** quando fora do viewport (`IntersectionObserver` no canvas).
- **Or\u00e7amento de bundle**: 50kb gzip m\u00e1ximo somado (lib + shader + l\u00f3gica). Acima disso, abortar.

### 14.5 Motion anti-patterns

1. **Nunca `transition: all`.** Lista as propriedades exatas. `all` anima coisas que voc\u00ea n\u00e3o sabe que existem (ex: `border-color` num hover de fundo) e custa frame.
2. **Nunca animar `width`, `height`, `top`, `left`.** Use `transform: scale()` / `translate()`. Anima\u00e7\u00e3o de layout for\u00e7a reflow e gera jank.
3. **Nunca `transform: scale(1.05)` em hover de card.** Distor\u00e7a foto, brigam com sombra, vira AI-slop. Use `translateY(-2px)`.
4. **Nunca parallax de fundo pesado.** Quebra em mobile, ferra reduced-motion, n\u00e3o agrega leitura. M\u00e1ximo: `background-attachment: fixed` no pattern de ru\u00eddo (\u00a712.1).
5. **Nunca anima\u00e7\u00e3o cont\u00ednua sem pausa.** Spinner, gradiente animado, shader \u2014 todos t\u00eam que pausar fora do viewport ou em `prefers-reduced-motion`. Anima\u00e7\u00e3o que roda eternamente queima bateria e fica AI-vibe.
6. **Nunca `cubic-bezier` exagerado** (overshoot tipo `back.out`, bounce, elastic). N\u00e3o combina com a marca. Use s\u00f3 os tokens da \u00a77.
7. **Nunca animar mais de 3 elementos por vez no viewport.** Stagger \u00e9 ritmo, n\u00e3o festival. Acima de 3, divida em grupos sequenciais.
8. **Nunca esquecer `prefers-reduced-motion`**. Toda anima\u00e7\u00e3o > 200ms tem que ter fallback. Regra \u00fanica no CSS:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

---

## 15. Acessibilidade

> N\u00e3o \u00e9 caridade nem checklist de compliance. Coworking premium recebe profissional com m\u00e3o cansada de mouse, m\u00e3e voltando ao trabalho com beb\u00ea no colo, fundador de 60 anos com leitor de tela. Site inacess\u00edvel \u00e9 site que falha o cliente que paga mais.

### 15.1 Contraste

- **Texto corpo (\u2264 18px regular, \u2264 14px bold)**: m\u00ednimo **4.5:1** (WCAG AA). `--ink` (#101010) em `--cream-100` d\u00e1 ~17:1. `--ink-soft` (#3D3D3D) em cream d\u00e1 ~10:1. Confort\u00e1vel.
- **Texto grande (\u2265 18px regular ou \u2265 14px bold)**: m\u00ednimo **3:1**. Coral em cream d\u00e1 ~3.4:1 \u2014 passa, mas s\u00f3 use coral em CTA, n\u00e3o em par\u00e1grafo.
- **UI n\u00e3o-textual** (border de input, \u00edcone): m\u00ednimo **3:1** contra fundo. Hairline `rgba(16,16,16,0.08)` falha \u2014 por isso card hover sobe a sombra (n\u00e3o conta com border).
- **Coral em coral-100** (badge de \u00edcone): falha contraste de texto. **Nunca colocar texto coral em fundo coral-100.** S\u00f3 \u00edcone, e \u00edcone tamb\u00e9m em ink.

### 15.2 Focus visible

Todo elemento interativo (`button, a, input, select, [tabindex]`) tem **anel coral de 2 px com 2 px de offset**:

```css
:where(a, button, input, select, textarea, [tabindex]):focus-visible {
  outline: 2px solid var(--coral-500);
  outline-offset: 2px;
  border-radius: 4px;
}
```

- **`focus-visible`**, n\u00e3o `focus` \u2014 ningu\u00e9m quer ver anel ao clicar com mouse.
- **`outline`, n\u00e3o `box-shadow`** \u2014 outline n\u00e3o quebra com `overflow: hidden` em parents.
- **N\u00e3o** matar focus com `outline: none` global. Se foi feito em algum reset, restaurar.

### 15.3 Touch target

**M\u00ednimo 44\u00d744 px** em qualquer alvo clic\u00e1vel em mobile (WCAG 2.5.5). Bot\u00e3o secundary tem padding pequeno \u2014 em mobile, aumentar:

```css
@media (max-width: 768px) {
  .btn { min-height: 44px; padding-inline: var(--s-5); }
  .icon-btn { width: 44px; height: 44px; }
  .nav-link { padding: var(--s-3) var(--s-4); }
}
```

Itens de FAQ, links em footer, \u00edcones de share \u2014 todos. M\u00e3e com beb\u00ea no colo n\u00e3o acerta alvo de 32 px.

### 15.4 Heading semantics

- **Um \u00fanico `<h1>` por p\u00e1gina** \u2014 o t\u00edtulo principal do hero. Mais que isso confunde leitor de tela.
- **N\u00e3o pular n\u00edveis**. H1 \u2192 H2 \u2192 H3. Se voc\u00ea precisa de "tipograficamente menor mas mesma hierarquia", use `class` no H2, n\u00e3o vire H4.
- **N\u00e3o usar heading pra estilo**. "Texto grande de destaque" no meio de par\u00e1grafo \u00e9 `<strong>` + classe, n\u00e3o `<h3>`.

### 15.5 Alt text

- **Toda imagem informativa** (foto do espa\u00e7o, retrato de fundador) tem `alt` descritivo: `alt="Sala privativa para 4 pessoas com mesa de carvalho macio e janela ampla"`. N\u00e3o "imagem da sala 3".
- **Imagem decorativa** (pattern de ru\u00eddo de fundo, \u00edcone redundante ao lado de texto): `alt=""` expl\u00edcito. **N\u00e3o omitir o atributo** \u2014 leitor de tela l\u00ea o filename.
- **\u00cdcone Phosphor** com texto ao lado: `aria-hidden="true"` no `<i>`. Leitor j\u00e1 leu o texto.

### 15.6 Navega\u00e7\u00e3o por teclado

- **Menu mobile (hamb\u00farguer)**: abre com Enter/Space, fecha com Esc, foco vai pro primeiro link ao abrir, retorna ao bot\u00e3o ao fechar.
- **Modal de reserva** (se houver): foco preso dentro (focus trap), Esc fecha, foco volta ao gatilho.
- **Accordion FAQ**: cabe\u00e7alho \u00e9 `<button>` (n\u00e3o `<div>`). Espa\u00e7o e Enter expandem. Setas \u2191\u2193 movem entre perguntas.
- **Skip link**: primeiro elemento focal\u00e1vel \u00e9 \u201cPular para conte\u00fado\u201d, escondido visualmente at\u00e9 receber foco. Profissional com leitor de tela ganha 30 segundos.

### 15.7 Reduced motion

J\u00e1 coberto na \u00a714.5. Reiterando porque \u00e9 a viola\u00e7\u00e3o mais comum: **toda anima\u00e7\u00e3o > 200 ms** tem fallback `@media (prefers-reduced-motion: reduce)`. Reveal vira "j\u00e1 vis\u00edvel". Word-by-word vira "tudo aparece junto". Gradiente animado vira est\u00e1tico. Ningu\u00e9m perde conte\u00fado.

---

## 16. Responsividade e breakpoints

> Mobile-first n\u00e3o \u00e9 ideologia, \u00e9 que **70% dos cliques no WhatsApp v\u00eam de celular** \u2014 e Arapongas tem WhatsApp como primeiro canal de contato comercial.

### 16.1 Breakpoints

```css
/* Mobile-first. Min-width queries adicionam complexidade conforme ganha tela. */
:root {
  --bp-sm: 640px;   /* phone landscape, phablet */
  --bp-md: 768px;   /* tablet portrait, "n\u00e3o-mobile" */
  --bp-lg: 1024px;  /* tablet landscape, laptop pequeno */
  --bp-xl: 1280px;  /* desktop padr\u00e3o */
}
```

- **640 / 768 / 1024 / 1280** \u2014 mesmos do Tailwind. Seu time pode contratar dev fora e ele entende sem manual.
- **N\u00e3o use 1440 / 1920**. Acima de 1280 o layout p\u00e1ra de crescer; o que cresce \u00e9 a margem lateral.
- **`max-width` do container**: 1200 px com padding lateral de `--s-6` (24 px). Ar suficiente em 1280, sem ficar an\u00f4nimo.

### 16.2 Tipografia

- **Display (h1, h2)**: escala fluida com `clamp()` \u2014 cresce continuamente entre breakpoints. `clamp(36px, 4vw + 16px, 64px)` pra h1.
- **Corpo, UI, microcopy**: escala **discreta** (16 px em mobile, 17 px em \u2265 lg). Fluido em corpo cansa.
- **Eyebrow / labels**: 11\u201312 px sempre. N\u00e3o escalar.

### 16.3 Layout

| Componente | < 640 | 640\u2013768 | 768\u20131024 | \u2265 1024 |
|---|---|---|---|---|
| Cards de plano | 1 col | 1 col | 2 cols | 3 cols (anual destacado) |
| Grid de salas / comodidades | 1 col | 2 cols | 2 cols | 3 cols |
| Hero (texto + foto) | stack (texto > foto) | stack | side-by-side 60/40 | side-by-side 55/45 |
| FAQ | 1 col | 1 col | 2 cols | 2 cols |
| Footer | stack | stack | 2 cols | 4 cols |

**Regra de stack \u2192 side-by-side**: a transi\u00e7\u00e3o ocorre quando a coluna menor passa a caber **\u2265 280 px** sem espremer copy. N\u00e3o por gosto est\u00e9tico.

### 16.4 Menu mobile

- **Hamb\u00farguer aparece abaixo de 768 px**. Acima disso, nav horizontal completa.
- **Bot\u00e3o WhatsApp flutuante**: aparece em **mobile e tablet (< 1024 px)**, ocultado em desktop (l\u00e1 ele vive no header).
- Hamb\u00farguer abre **drawer da direita** ocupando 80% da viewport, n\u00e3o full-screen \u2014 d\u00e1 hint de "tem p\u00e1gina por baixo".

### 16.5 Imagens

- **`<picture>` + `srcset`** com 3 tamanhos por foto: 480 / 960 / 1440 (1x) e 2x retina.
- **AVIF \u2192 WebP \u2192 JPG fallback**, nessa ordem.
- **`width` e `height`** sempre declarados (HTML attrs) pra evitar CLS.
- **Hero**: `loading="eager"` + `fetchpriority="high"`. Tudo abaixo: `loading="lazy"`.

---

## 17. Tone of voice e microcopy

> A Momment \u00e9 fundada por gente da regi\u00e3o, n\u00e3o por consultor de SP. Site precisa **soar como o fundador conversando no caf\u00e9**, n\u00e3o como prospecto de SaaS internacional traduzido com Google.

### 17.1 Princ\u00edpios

1. **Direto**. Frase curta. Verbo no in\u00edcio. Se cabe em 8 palavras, n\u00e3o use 16.
2. **Conversacional**. \u201cA gente\u201d em vez de \u201cn\u00f3s\u201d quando soar formal demais. Contra\u00e7\u00f5es naturais (\u201cpra\u201d, \u201ct\u00e1\u201d) em microcopy de bot\u00e3o e mensagem.
3. **Sem jargão**. Empres\u00e1rio de 50 anos em Arapongas n\u00e3o quer \u201csolu\u00e7\u00e3o de produtividade\u201d \u2014 quer \u201csala que cabe a equipe\u201d.
4. **Respeitoso, n\u00e3o fofo**. Sem emoji em UI. Sem "vamos l\u00e1 \u00e7\u00e3o!". A marca \u00e9 calma, n\u00e3o brincalhona.
5. **Local, mas n\u00e3o caricato**. \"Aqui em Arapongas\" \u00e9 ok. \u201cQu\u00e9 dizer, paran\u00e1\u201d n\u00e3o.

### 17.2 Bot\u00f5es (CTA)

| \u2705 Sim | \u274c N\u00e3o |
|---|---|
| Quero esse plano | Saiba mais |
| Reservar visita | Solicitar atendimento |
| Falar no WhatsApp | Entre em contato |
| Ver as salas | Conhecer espa\u00e7os |
| Comece pelo mensal | Inicie sua jornada |

Verbo no in\u00edcio, na primeira pessoa do desejo (\u201cquero\u201d) ou imperativo direto (\u201creservar\u201d). Nunca \"clique aqui\".

### 17.3 Placeholders

| \u2705 | \u274c |
|---|---|
| Conta pra gente o que voc\u00ea precisa | Insira sua mensagem |
| Seu melhor email | Endere\u00e7o de email |
| WhatsApp com DDD | N\u00famero de telefone |
| Seu nome (como prefere ser chamado) | Nome completo |

Placeholder n\u00e3o substitui label \u2014 ele soma personalidade. Label sempre vis\u00edvel.

### 17.4 Mensagens de erro

| \u2705 | \u274c |
|---|---|
| Esse email t\u00e1 no formato errado. Confere? | Erro de valida\u00e7\u00e3o |
| Faltou preencher seu WhatsApp. | Campo obrigat\u00f3rio |
| Algo deu errado do nosso lado. Tenta de novo em 1 minuto? | Internal Server Error |

Erro **explica o que aconteceu**, **culpa o sistema antes do usu\u00e1rio**, e **oferece sa\u00edda**. Nunca em vermelho s\u00f3zinho \u2014 \u00edcone + cor + texto.

### 17.5 Sucesso

| \u2705 | \u274c |
|---|---|
| Recado recebido. A gente responde no WhatsApp em at\u00e9 1 hora \u00fatil. | Formul\u00e1rio enviado com sucesso |
| Visita agendada. Caf\u00e9 no fog\u00e3o quando voc\u00ea chegar. | Agendamento conclu\u00eddo |

Sucesso **confirma o pedido**, **diz o pr\u00f3ximo passo concreto** (n\u00e3o gen\u00e9rico) e tem **sabor da marca**. \u201cCaf\u00e9 no fog\u00e3o\u201d \u00e9 mat\u00e9ria, n\u00e3o copy de SaaS.

### 17.6 Estados vazios

| \u2705 | \u274c |
|---|---|
| Ainda n\u00e3o tem reserva por aqui. Que tal come\u00e7ar pelo plano mensal? | Nenhum item encontrado |
| Vazio por enquanto. Volte depois ou nos chama no zap. | Sem resultados |

Vazio nunca \u00e9 punitivo \u2014 \u00e9 convite. Sempre tem CTA.

### 17.7 Palavras proibidas no projeto

**Nunca, em nenhuma copy do site, app, e-mail, WhatsApp ou rede social:**

- inovador / inova\u00e7\u00e3o
- disruptivo
- empoderador / empoderar
- solu\u00e7\u00e3o (\u201csolu\u00e7\u00f5es de coworking\u201d \u2014 chame de **espa\u00e7o** ou **sala**)
- plataforma (\u00e9 um **pr\u00e9dio** com **salas**, n\u00e3o uma plataforma)
- ecossistema
- jornada (do cliente, do empreendedor)
- experi\u00eancia premium (mostre, n\u00e3o diga)
- alavancar
- sinergia

Se voc\u00ea precisar de uma dessas pra explicar o que a Momment faz, **a explica\u00e7\u00e3o est\u00e1 ruim** \u2014 reescreva concretamente. Em vez de \"plataforma de produtividade\", diga \"sala com cadeira boa, internet r\u00e1pida e silêncio\".

---

## 18. Estados de componentes

Cada componente tem 5 estados can\u00f4nicos: **default \u2192 hover \u2192 loading \u2192 empty/error \u2192 success/disabled**. Faltou um? O componente n\u00e3o est\u00e1 pronto.

### 18.1 Loading \u2014 skeleton, n\u00e3o spinner

Spinner \u00e9 \"o sistema travou\". Skeleton \u00e9 \"o conte\u00fado est\u00e1 vindo\". Diferen\u00e7a perceptiva enorme.

```css
.skeleton {
  background: linear-gradient(90deg,
    var(--cream-200) 0%,
    rgba(245,231,223,0.6) 50%,
    var(--cream-200) 100%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.4s ease-in-out infinite;
  border-radius: var(--r-md);
  color: transparent;
}
@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
@media (prefers-reduced-motion: reduce) {
  .skeleton { animation: none; background: var(--cream-200); }
}
```

Skeleton tem o **mesmo shape** do conte\u00fado final (mesma altura, mesmo border-radius). Sem isso, CLS dispara quando o conte\u00fado real entra.

### 18.2 Empty \u2014 ilustra\u00e7\u00e3o + microcopy + CTA

Tr\u00eas elementos, sempre:

1. **Ilustra\u00e7\u00e3o sutil** (ou \u00edcone Phosphor 48 px, regular). N\u00e3o foto.
2. **Frase curta** explicando o vazio (\u00a717.6).
3. **CTA prim\u00e1rio** com o pr\u00f3ximo passo \u00f3bvio.

```html
<div class="empty">
  <i class="ph ph-armchair" aria-hidden="true"></i>
  <p>Ainda n\u00e3o tem reserva por aqui.</p>
  <button class="btn btn-primary">Ver os planos</button>
</div>
```

### 18.3 Error \u2014 \u00edcone discreto + mensagem + recovery

Nunca tela inteira vermelha. Erro \u00e9 informa\u00e7\u00e3o, n\u00e3o pun\u00ed\u00e7\u00e3o.

- \u00cdcone `ph-warning-circle` em **cor `--error-500`** (n\u00e3o coral, n\u00e3o ink).
- Mensagem em ink (n\u00e3o vermelho \u2014 sen\u00e3o vira piscante).
- **Bot\u00e3o de a\u00e7\u00e3o de recovery**: "Tentar de novo", "Voltar pra home", "Avisar suporte". Nunca beco sem sa\u00edda.
- Erro inline em formul\u00e1rio: borda `--error-500` no input + texto abaixo.

### 18.4 Success \u2014 toast + pr\u00f3ximo passo

- **Toast** (canto inferior direito em desktop, full-width topo em mobile), 4 segundos, dismiss\u00edvel.
- \u00cdcone `ph-check-circle` em `--success-500`.
- Microcopy da \u00a717.5: confirma + pr\u00f3ximo passo concreto.
- **N\u00e3o redirecionar imediato**. Deixe a pessoa ler. Redirect ap\u00f3s 2 segundos no m\u00ednimo, ou s\u00f3 ap\u00f3s a\u00e7\u00e3o expl\u00edcita.

### 18.5 Disabled

```css
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

- **Sempre dizer por qu\u00ea**. Tooltip ou helper text abaixo: "Preencha email e WhatsApp pra liberar". Bot\u00e3o cinza sem explica\u00e7\u00e3o \u00e9 a falha de UX mais barata de resolver e a mais ignorada.
- **`aria-disabled="true"`** \u00e9 prefer\u00edvel a `disabled` HTML quando voc\u00ea quer que o leitor de tela ainda alcance o bot\u00e3o (e leia o motivo).

---

## 19. Performance budget

> Site lento queima confian\u00e7a. Cliente prospect que abre no 4G de Arapongas e espera 6 s pro hero carregar j\u00e1 saiu pra um concorrente.

### 19.1 Or\u00e7amento por p\u00e1gina

| M\u00e9trica | Or\u00e7amento | Motivo |
|---|---|---|
| Peso total (home, primeira visita) | \u2264 1.5 MB | Mobile 4G m\u00e9dio do interior do PR |
| Hero image | \u2264 200 KB (AVIF) ou \u2264 280 KB (WebP) | LCP em < 2.5s |
| JS total (parsed + executed) | \u2264 100 KB gzip | Site est\u00e1tico n\u00e3o precisa de framework |
| CSS total | \u2264 60 KB gzip | Um arquivo, escopado |
| Fonts | \u2264 120 KB | Display + Sans, 2 pesos cada, WOFF2, subset latin |

### 19.2 Imagens

- **AVIF first, WebP fallback, JPG \u00faltimo recurso.** Nada de PNG pra foto.
- **Lazy loading obrigat\u00f3rio** abaixo da dobra: `loading="lazy"` em toda `<img>` que n\u00e3o seja hero.
- **`width` + `height`** sempre. CLS = 0 \u00e9 inegoci\u00e1vel.
- Foto de cadeira em close: 4:5 a 480 px serve mobile, 960 px serve desktop. N\u00e3o sirva 2400 px pra ningu\u00e9m \u2014 mate isso na pipeline.

### 19.3 Core Web Vitals (targets reais, n\u00e3o ideais)

- **LCP** (Largest Contentful Paint): **< 2.5 s** em 4G. Hero image otimizada + `fetchpriority="high"` + preload.
- **CLS** (Cumulative Layout Shift): **< 0.1**. Toda `<img>` com dimens\u00e3o, fonts com `font-display: swap` + `size-adjust` se necess\u00e1rio.
- **INP** (Interaction to Next Paint): **< 200 ms**. Sem JS pesado em handler de scroll. Sem libra\u00e7\u00e3o s\u00edncrona.

### 19.4 Bibliotecas proibidas

- **jQuery**. \u00c9 2026. Vanilla JS faz tudo que voc\u00ea precisa.
- **Bootstrap, Tailwind UI, Material**. Voc\u00ea **j\u00e1 tem** um design system \u2014 \u00e9 esse documento. UI kit gen\u00e9rico anula a tese.
- **Lottie**. Pesado e dispens\u00e1vel \u2014 prefira SVG animado com SMIL ou CSS.
- **Three.js sem fallback**. Coberto na \u00a714.4. Recomenda\u00e7\u00e3o: nem com fallback; gradiente CSS basta.
- **AOS (Animate On Scroll)**. Use IntersectionObserver direto (\u00a714.2) \u2014 menos peso, mais controle.
- **GSAP** (s\u00f3 entra se text animation precisar de SplitText \u2014 e nesse caso, considere Splitting.js (~3 KB) primeiro).

---

## 20. SEO t\u00e9cnico

> Coworking em cidade m\u00e9dia vence em busca **local**, n\u00e3o em palavra-chave gen\u00e9rica. Quem digita \u201ccoworking SP\u201d nunca vai ver a Momment. Quem digita \u201ccoworking arapongas\u201d ou \u201csala de reuni\u00e3o arapongas\u201d \u00e9 o cliente.

### 20.1 Meta tags por p\u00e1gina

**Title pattern**: `{P\u00e1gina} | Momment Coworking Arapongas`

| P\u00e1gina | Title |
|---|---|
| Home | `Momment Coworking Arapongas \u2014 sala, m\u00f3vel, sil\u00eancio` |
| Espa\u00e7os e planos | `Espa\u00e7os e planos | Momment Coworking Arapongas` |
| Sobre | `Quem somos | Momment Coworking Arapongas` |
| Contato | `Contato e visita | Momment Coworking Arapongas` |

\u201cArapongas\u201d em todo title. **Sempre.** \u00c9 o ranking factor que ningu\u00e9m da regi\u00e3o ataca direito.

**Description**: 150\u2013160 caracteres, palavra-chave local na primeira metade, CTA implícito.

> "Coworking em Arapongas com salas privativas, mesas em open space e mobili\u00e1rio premium feito na cidade do m\u00f3vel. Visite, conhe\u00e7a, decida."

### 20.2 Open Graph / share

- `og:title`, `og:description`, `og:url`, `og:type=website`.
- **`og:image`**: 1200\u00d7630, hero do sal\u00e3o (\u00a713.1) com **logo Momment + nome da cidade** sobrepostos. Sem stock photo.
- `og:locale=pt_BR`.
- Twitter card: `summary_large_image` apontando pra mesma imagem.

### 20.3 Schema.org \u2014 LocalBusiness obrigat\u00f3rio

JSON-LD no `<head>` da home. **N\u00e3o opcional.** \u00c9 o que ativa o card do Google Maps na busca.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "additionalType": "https://schema.org/CoworkingSpace",
  "name": "Momment Coworking",
  "image": "https://momment.com.br/og-cover.jpg",
  "@id": "https://momment.com.br",
  "url": "https://momment.com.br",
  "telephone": "+55-43-XXXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua XYZ, 000",
    "addressLocality": "Arapongas",
    "addressRegion": "PR",
    "postalCode": "86700-000",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.4192,
    "longitude": -51.4250
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "07:00",
    "closes": "22:00"
  }],
  "priceRange": "R$\u2013R$$"
}
</script>
```

Conferir os campos com **dados reais antes de publicar**. Schema com dado falso \u00e9 pior que nenhum schema (Google penaliza).

### 20.4 URLs

- **Sem querystring** salvo em filtros leg\u00edtimos.
- **Sem `id` num\u00e9rico**: `/sala/privativa-4-pessoas`, n\u00e3o `/sala?id=12`.
- **Hifenizado, lowercase, sem acento**: `/espacos-e-planos`, n\u00e3o `/Espa%C3%A7os-e-Planos`.
- **N\u00e3o trocar URL depois de publicar**. Se trocar, redirect 301 obrigat\u00f3rio.

Map propost\u00e3o:
```
/                           home
/espacos-e-planos           planos + tipos de sala
/sobre                      tese da marca + fundadores
/contato                    formulário + WhatsApp + mapa
/visita                     reserva de visita guiada
```

### 20.5 Sitemap & robots

- `sitemap.xml` na raiz, listando as 5 URLs acima. Atualizar quando p\u00e1gina nova entrar.
- `robots.txt`: liberar tudo, apontar `Sitemap: https://momment.com.br/sitemap.xml`. **N\u00e3o** copiar robots gen\u00e9rico do WordPress que bloqueia `/wp-admin` \u2014 n\u00e3o se aplica e parece amador no audit.

---

## 21. Checklist antes de fechar uma tela

- [ ] Texto longo em `--lh-body` (1.7) e ≤72ch de largura?
- [ ] Apenas 1 CTA coral primário no viewport?
- [ ] Card destacado é Plano Anual ou CTA final? Se não, downgrade para default.
- [ ] Sombras com tinta coral (não preto puro)?
- [ ] Foto tem `border-radius: var(--r-xl)`?
- [ ] Nada centralizado por preguiça?
- [ ] Botão WhatsApp visível ou flutuante em mobile?
- [ ] Prefers-reduced-motion respeitado?

---

*Fim. Se algo aqui atrapalha mais que ajuda, abra issue. Caso contrário: siga.*
