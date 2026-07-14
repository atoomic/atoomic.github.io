---
name: atoomic.org — Nicolas R. portfolio
description: The High-Voltage Stage in dark mode — gold-accented, Manrope + DM Sans, gradient display text, large blurred-blob cards.
colors:
  accent: "#f5c518"
  accent-strong: "#ffd83d"
  accent-soft: "rgba(245,197,24,0.12)"
  accent-glow: "rgba(245,197,24,0.28)"
  ink-on-accent: "#111318"
  bg: "#090b10"
  bg-elevated: "#10141c"
  bg-soft: "#151a24"
  surface: "rgba(18,23,33,0.8)"
  surface-solid: "#121721"
  surface-hover: "#191f2b"
  text: "#f6f7f9"
  text-soft: "#a9b0bc"
  text-muted: "#767f8e"
  blue: "#74a7ff"
  green: "#70e0a0"
  violet: "#ad91ff"
  border: "rgba(255,255,255,0.09)"
  border-strong: "rgba(255,255,255,0.16)"
  shadow-ambient: "rgba(0,0,0,0.18)"
  shadow-deep: "rgba(0,0,0,0.36)"
  # Light theme
  bg-light: "#f4f4ef"
  bg-elevated-light: "#ffffff"
  accent-light: "#c99900"
  accent-strong-light: "#ae8200"
  text-light: "#111318"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 8.6vw, 8.4rem)"
    fontWeight: 800
    letterSpacing: "-0.075em"
    lineHeight: 0.87
  headline:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4.7rem)"
    fontWeight: 800
    letterSpacing: "-0.055em"
    lineHeight: 0.98
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)"
    fontWeight: 800
    letterSpacing: "-0.04em"
    lineHeight: 1.2
  body:
    fontFamily: "DM Sans, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 700
    letterSpacing: "0.06em"
rounded:
  xs: "10px"
  sm: "12px"
  md: "20px"
  icon: "16px"
  lg: "30px"
  pill: "999px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.ink-on-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
  tag:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.pill}"
    padding: "7px 10px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "30px"
  capability-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "30px"
  input:
    backgroundColor: "{colors.bg-elevated}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
---

# Design System: atoomic.org — Nicolas R. portfolio

## 1. Overview

**Creative North Star: "The High-Voltage Stage"**

The portfolio is a dark stage where a career runs as current. **Gold (`#f5c518`)** is the live wire — the ☢ mark, CTAs, links, focus rings, timeline rail, and the gradient that lights up display headings. The canvas is a warm near-black (`#090b10`) washed with two soft radial glows (gold top-left, blue top-right); surfaces are translucent panels over that atmosphere. A remembered **light theme** (`#f4f4ef`, deeper gold `#c99900`) ships alongside dark as the default's mirror.

Typography pairs **Manrope** (display, weight 800, tight tracking) with **DM Sans** (body) — both via Google Fonts. Hierarchy is driven by a wide weight range and a fluid `clamp()` scale; the largest hero title reaches `clamp(3.6rem, 8.6vw, 8.4rem)` at `-0.075em` tracking. Density is comfortable, not crowded. Every surface is tactile and confident: cards lift on hover, the hero portrait floats with glass info-cards and concentric orbit rings, the status dot pulses, and sections reveal on scroll.

The system explicitly rejects the **Generic SaaS / AI template** (indigo-violet gradient heroes, glassy feature-card grids, "trusted by" logo strips, hero-metric stat blocks), the **Stock "developer portfolio"** (green-on-black terminals, matrix rain, decorative code), **Corporate beige/gray** neutrals, and **Overly minimal / empty** layouts (per PRODUCT.md anti-references).

**Key Characteristics:**
- One live-wire accent — Gold — carries CTAs, links, headings, focus rings, the ☢ mark, and the gradient display text.
- Dark-first with a light mirror; both driven by `[data-theme]` token overrides.
- Manrope display + DM Sans body, hierarchy via weight + fluid `clamp()` scale.
- Hybrid elevation: translucent floating surfaces with soft shadows; large blurred color blobs accent the capability cards.
- Tactile motion — hover lifts, colored gold glows, a pulsing status dot, floating hero cards, scroll-reveal.

## 2. Colors

A single saturated gold against a dark, atmospherically-lit canvas, with blue/green/violet reserved as secondary card accents. Translucent surfaces (`rgba`) layer over the dual-radial body background.

### Primary
- **Gold** (`#f5c518`, `--accent`): the brand. ☰ logo disc, primary buttons, links, eyebrows, timeline rail + dots, focus rings, `::selection`, the gradient-text end stop.
- **Gold Bright** (`#ffd83d`, `--accent-strong`): gradient-text mid stop and primary-button hover.
- **Gold Soft** (`rgba(245,197,24,0.12)`, `--accent-soft`): translucent wash behind tags, filter pills, nav hover, focus rings, featured card radial.
- **Gold Glow** (`rgba(245,197,24,0.28)`, `--accent-glow`): the colored box-shadow on the logo disc and primary button.
- **Ink on Gold** (`#111318`): the near-black glyph/text used on every gold fill (logo ☢, primary button text, selection).

### Secondary (card accents only)
- **Blue** (`#74a7ff`), **Green** (`#70e0a0`), **Violet** (`#ad91ff`): the second/third capability-card blob accents, the status dot (green), and the secondary body-radial glow (blue). Never primary CTAs.

### Neutral (dark default)
- **Stage Black** (`#090b10`, `--bg`): the canvas.
- **Elevated** (`#10141c`, `--bg-elevated`): form inputs.
- **Soft** (`#151a24`, `--bg-soft`): portrait shell and skill-tag fill.
- **Surface** (`rgba(18,23,33,0.8)`, `--surface`): cards, header, panels (translucent over the atmosphere).
- **Surface Solid** (`#121721`): capability-card gradient base and floating-card glass.
- **Text** (`#f6f7f9`), **Text Soft** (`#a9b0bc`), **Text Muted** (`#767f8e`): the ink ramp.
- **Border** (`rgba(255,255,255,0.09)`), **Border Strong** (`rgba(255,255,255,0.16)`): hairlines on cards/inputs.
- **Shadow Ambient** (`rgba(0,0,0,0.18)`) and **Shadow Deep** (`rgba(0,0,0,0.36)`): the two shadow tokens.

### Light theme (`[data-theme="light"]`)
Canvas `#f4f4ef`, elevated `#ffffff`, accent `#c99900`, accent-strong `#ae8200`, text `#111318`. Mirrors the dark roles; the gold deepens to keep ≥4.5:1 contrast on light.

### Named Rules
**The Live-Wire Rule.** Gold is the only saturated primary. It carries every CTA, link, heading accent, focus ring, timeline rail, and the ☢ mark. Neutrals never compete; when gold appears, it is the signal.
**The Ink-on-Gold Rule.** Any text or glyph sitting on a gold fill is `#111318` near-black — never white. The logo ☢, primary button label, and `::selection` all obey this.
**The Drench Permission.** On hero and feature surfaces gold may own real area (the logo glow, the featured-card radial, the contact-panel radial). It is never reduced to a 1px stripe.

## 3. Typography

**Display Font:** Manrope (with `system-ui` fallback) — loaded via Google Fonts.
**Body Font:** DM Sans (with `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI"` fallback) — loaded via Google Fonts.

**Character:** Manrope at weight 800 and tight tracking carries every heading with a confident, geometric voice; DM Sans handles body and labels at a humanist, highly-legible 1.65 line-height. Hierarchy is weight + a fluid `clamp()` scale, not a third family.

### Hierarchy
- **Display** (Manrope 800, `clamp(3.6rem, 8.6vw, 8.4rem)`, −0.075em / 0.87): the hero title.
- **Headline** (Manrope 800, `clamp(2.25rem, 5vw, 4.7rem)`, −0.055em / 0.98): section titles; the about title reaches `clamp(2.5rem, 5vw, 5rem)`.
- **Title** (Manrope 800, `clamp(1.3rem, 2.4vw, 1.8rem)`, −0.04em / 1.2): role titles; capability titles run larger (`clamp(1.65rem, 2.6vw, 2.2rem)`).
- **Body** (DM Sans 400, 16px, line-height 1.65): base copy; lead/about-copy steps up to `1.04–1.28rem`. Cap prose ~65–75ch.
- **Label** (DM Sans 700, ~0.8rem, tracked 0.06–0.16em): eyebrows (0.76rem, 0.16em, uppercase), nav links (0.9rem), tags/skill-tags (0.72–0.8rem), kickers, fact labels. The micro-scale (0.68–0.91rem) lives here.

### Named Rules
**The Gradient-Signature Rule.** Display headings may carry the `.text-gradient` fill (`linear-gradient(110deg, text 8%, accent-strong 65%, accent 100%)`, `background-clip: text`). It is a committed brand signature applied to display headings **only** — never body copy. Under `prefers-reduced-motion` it falls back to a solid `accent-strong` so legibility never depends on the clip.
**The Fluid-Scale Rule.** Every heading uses `clamp()`; tracking tightens as size grows (hero −0.075em → title −0.04em). Display ceiling ≤ 8.4rem.

## 4. Elevation

Hybrid. Depth comes from three layers: translucent surfaces over the atmospheric background, soft drop-shadows that respond to interaction, and large blurred color blobs that accent feature cards. Nothing is flat-by-default, but shadows are a response to state, not ambient noise — the capability cards and contact panel carry heavier resting shadows because they are the featured surfaces.

### Shadow Vocabulary
- **Shadow SM** (`0 12px 32px rgba(0,0,0,0.18)`, `--shadow-sm`): resting depth for cards, status pill, writing card, floating cards.
- **Shadow LG** (`0 30px 90px rgba(0,0,0,0.36)`, `--shadow-lg`): hover depth and the contact-panel / portrait resting shadow.
- **Gold Glow** (`0 0 30px var(--accent-glow)`): the logo disc halo; `0 14px 35px / 0 18px 42px` on the primary button at rest/hover.
- **Color Blob** (`width:270px; filter:blur(90px); opacity:0.11`): the `::before` accent on capability cards (gold/blue/violet by `:nth-child`).

### Named Rules
**The Responsive-Shadow Rule.** Cards sit on Shadow SM at rest and lift (translateY −4 to −8px) to Shadow LG on hover. Shadows respond to interaction; the only heavier resting shadows are the featured capability cards, the contact panel, and the portrait.
**The Glass-Is-Purposeful Rule.** `backdrop-filter: blur()` appears only on the scrolled header, the mobile menu, the status pill, and the hero floating cards — functional layering over the atmosphere, never decorative glass-card grids.

## 5. Components

### Buttons
- **Shape:** full pill (`--radius-pill`), min-height 50px, 0 20px padding, weight 800.
- **Primary:** Gold fill, `#111318` text, `0 14px 35px` gold glow, leading SVG icon.
- **Hover/Active:** brightens to Gold Bright, glow deepens to `0 18px 42px`, lifts `translateY(-3px)`.
- **Secondary (default `.button`):** translucent Surface fill with a hairline border; hover lifts and shifts to Surface-Hover.

### Chips — Tags
- **Style:** Gold Soft wash, Text Soft, full pill, 7px 10px padding, weight 700, 0.72rem. Skill-tags use a `--bg-soft` fill with 10px radius instead.

### Cards / Containers
- **Corner Style:** `--radius-lg` (30px) for capability/project/writing/contact; `--radius-md` (20px) for timeline content, facts, skill groups, floating cards.
- **Background:** translucent `--surface`; capability cards add a 145deg gradient over `--surface-solid`; the featured project card and contact panel add a Gold Soft radial.
- **Shadow Strategy:** see Elevation — SM rest, LG + lift on hover; the color blob accents capability cards.
- **Internal Padding:** 30px (capability, project), 26–28px (timeline), clamp(28–54px) (writing), clamp(34–80px) (contact).

### Inputs / Fields
- **Style:** 1px Border, `--bg-elevated` fill, `--radius-sm` (12px), 52px height (input) / 154px min (textarea).
- **Focus:** border shifts to Gold with a `0 0 0 4px var(--accent-soft)` ring.

### Navigation
- Fixed, transparent until `.scrolled` (scrollY > 16) → `--bg` at 84% + `blur(22px) saturate(150%)`. Brand = gold ☢ disc (38px, gold glow, `#111318` glyph) + `atoomic.` wordmark (Manrope 800, trailing dot gold). Links are Text Soft pills, Gold Soft wash on hover/active. Desktop nav collapses to a hamburger drawer under 1040px.

### Signature Components
- **The Self-Typing Stage Hero:** split layout — left holds the status pill, gradient-capable hero title, copy, CTAs, socials; right holds the organic blob portrait (`images/author.jpg`) with two floating glass info-cards and three concentric orbit rings (the innermost gold). The portrait tilts ±2.5°; the cards float on a 6s loop.
- **Filterable Timeline:** vertical rail with gold dot nodes; filter pills (All / Leadership / AI & architecture / Engineering) toggle `data-categories`.
- **Skills Accordion:** `grid-template-rows: 0fr → 1fr` height animation; the "+" icon rotates 45° to "×" on open.

## 6. Do's and Don'ts

### Do:
- **Do** let Gold own real surface area on hero/feature moments (logo glow, featured-card radial, contact radial) — it is voice, not decoration.
- **Do** put `#111318` text on every gold fill (logo glyph, primary button, selection).
- **Do** apply `.text-gradient` to display headings only; let it fall back to solid Gold under reduced motion.
- **Do** keep body text on the Text/Soft ramp (≥ 4.5:1 on dark; the light theme deepens gold to `#c99900` to hold contrast).
- **Do** honor `prefers-reduced-motion`: kill float/pulse/reveal, force `.reveal` visible, flatten the gradient text.
- **Do** mark focus with the 3px Gold `:focus-visible` outline at 4px offset.
- **Do** use fluid `clamp()` for every heading; lift cards on hover with a gold-tinted shadow.

### Don't:
- **Don't** introduce a second saturated primary. Blue/green/violet are capability-card accents only — never buttons or links.
- **Don't** put white text on a gold fill; use `#111318`.
- **Don't** apply `.text-gradient` to body copy, labels, or long prose — display headings only.
- **Don't** reach for the Generic SaaS / AI template: indigo-violet gradient heroes, glassy feature-card grids, "trusted by" logo strips, or the big-number hero-metric template.
- **Don't** dress the site as a terminal — green-on-black, matrix rain, or code snippets as decoration (Stock "developer portfolio").
- **Don't** default to beige/gray muted neutrals (Corporate beige/gray), and don't ship empty minimalism — no imagery, no texture (Overly minimal/empty).
- **Don't** use decorative glassmorphism; reserve `backdrop-filter` for the header, mobile menu, status pill, and hero floating cards.
- **Don't** animate layout properties; use transform, opacity, blur, and `grid-template-rows` for the accordion.
