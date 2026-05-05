## DO THIS FIRST

**Invoke 'frontend-design' skill before generating any code.**
Do it every time you want to code front-end. In every session.
Never skip this step.

**Invoke the copywriting skill when writing or refining any
copy on the page.**

**Read @design_system/DESIGN.md before writing any visual code.**
DESIGN.md is the single source of truth for colors, typography,
spacing, motion, icons, illustrations, and component states.
Never improvise visual decisions — consult DESIGN.md first.

---

## Project Overview

Institutional website for Momment, a 350m² premium coworking
in Arapongas/PR currently in pre-launch phase.
Founded by Rosa Maria and Julio Cesar, it positions itself as
the largest and best coworking in town.
Target audience: liberal professionals, small businesses, and
startups in Arapongas and the surrounding region — people
tired of working from home or coffee shops who don't want
the cost of a fixed commercial office.
Primary goal: capture WhatsApp contacts and email leads,
showcase plans (with strong emphasis on the annual plan), and
build community around the brand.
Key differentiator: real comfort — quality furniture and
ergonomic chairs — narratively anchored to the fact that
Arapongas is one of Brazil's largest furniture manufacturing
hubs.

---

## Tech Stack

- HTML5 semantic markup
- Tailwind CSS
- JavaScript vanilla
- Google Fonts

Do not introduce frameworks, CSS-in-JS, jQuery, or Bootstrap
unless explicitly requested.

---

## Architecture

```
project-root/
├── CLAUDE.md
├── index.html
├── sobre.html
├── espacos-e-planos.html
├── contato.html
├── css/
│   └── custom.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
├── my_brand_assets/
├── design_system/
│   └── DESIGN.md
├── web_design_references/
└── screenshots/
```

Rules:
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- Mobile-first responsive approach
- JavaScript in `js/main.js`
- Custom CSS in `css/custom.css` only beyond Tailwind
- One H1 per page

---

## Visual References

- The folder @web_design_references contains visual inspiration
- Match the FEELING of references — layout rhythm, spacing,
  typography confidence, color usage. Do NOT copy layouts
  literally
- References are inspiration, not blueprints

---

## Brand Assets

- Brand guide: @my_brand_assets/guia-marca-momment.pdf
- Logo, colors, typography, and identity details inside
- Use these as foundation for all visual decisions

---

## Design System

- Primary source of truth: @design_system/DESIGN.md
- Covers colors, typography, spacing, components, icons,
  graphic elements, AI image prompts, motion, accessibility,
  responsiveness, microcopy, states, performance, and SEO
- Read this BEFORE every visual coding session
- Never improvise visual decisions outside what DESIGN.md
  defines

---

## Anti-Generic Design Guardrails

- **Colors:** never default Tailwind palette as primary. Use
  custom tokens from DESIGN.md
- **Typography:** never single font everywhere. Pair display
  + body. Tight tracking on headings, generous line-height
  on body. Never default to Inter or Arial without checking
  DESIGN.md
- **Shadows:** never raw `shadow-md` or `shadow-lg`. Use
  layered, color-tinted shadows from DESIGN.md
- **Backgrounds:** alternate sections with rhythm. Avoid flat
  white walls. Subtle textures or tonal shifts where
  DESIGN.md indicates
- **Motion:** never `transition-all`. Only transform and
  opacity. Respect prefers-reduced-motion
- **Interactive states:** every clickable element must have
  hover, focus-visible, and active states. No exceptions
- **Anti-patterns to avoid:**
  - bg-white + shadow-md + rounded-lg card grids everywhere
  - All content centered with no layout variation
  - Purple-on-dark gradients (the AI look)
  - Uniform section heights with no visual rhythm
  - Icon grids with identical cards
  - Animating text outside the hero H1
  - WebGL outside hero (if used at all)

---

## Screenshot Loop

When you finish coding a page or major section:
1. Capture a full-page screenshot
2. Compare against @web_design_references and DESIGN.md
3. List issues: spacing, typography, color, motion, layout
   balance, responsiveness, interactive states, accessibility
4. Fix all issues
5. Capture again, compare, fix
6. Minimum 2 rounds. Save all screenshots in @screenshots/
   as screenshot_round1.png, screenshot_round2.png

---

## UX Principles

### Two-Step Conversion
- **Hero (Step 1):** problem + solution clear in 4 seconds.
  WHAT we solve, for WHOM, HOW
- **Rest of page (Step 2):** clear doubts. Each section
  removes a specific "what if" from the visitor's mind

### UX Laws (non-negotiable)
- One primary CTA per section (Hick's Law)
- Lists max 5-7 items (Miller's Law)
- Primary CTA visually distinct from everything else
  (Von Restorff)
- Hero + final CTA = peak moments (Peak-End Rule)
- Cut anything that doesn't serve conversion (Prägnanz)
- Group related elements visually (Proximity)
- Consistent patterns across sections (Similarity)

### Functional
- WhatsApp floating button always visible
- Mobile-first (375px base)
- Accessibility: WCAG AA contrast, alt texts, keyboard
  navigation, focus rings
- Lazy-load images below fold
- Smooth scroll on anchor navigation
- Form fields: name + email + WhatsApp + space type
- Discreet "Entrar" link in nav for future client area
  (toast or "in development" placeholder until ready)

---

## Coding Conventions

- Semantic HTML5 elements
- Tailwind utilities first; custom CSS only when necessary
- Design tokens as `:root` CSS custom properties from
  DESIGN.md
- Minimal vanilla JavaScript
- Descriptive names, no abbreviations
- Comments only when intent is non-obvious
- No dead code or commented-out blocks
- `loading="lazy"` on below-fold images
- `rel="noopener noreferrer"` on external links
- WhatsApp links: `https://wa.me/55[NUMBER]?text=[encoded
  message]`
