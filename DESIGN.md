---
name: atoomic.org — Nicolas R. portfolio
description: The High-Voltage Stage — a color-drenched personal portfolio for a systems-engineer-turned-AI-orchestrator.
colors:
  reactor-orange: "#ff6b35"
  reactor-orange-deep: "#e85a28"
  reactor-orange-glow: "#ff8559"
  reactor-orange-wash: "#fff0eb"
  ember: "#1f1714"
  graphite: "#1a1a1a"
  graphite-soft: "#4a4a4a"
  graphite-faint: "#6a6a6a"
  paper: "#ffffff"
  paper-mist: "#f8f9fa"
  paper-line: "#e9ecef"
  gold: "#d4a017"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
  headline:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    fontSize: "clamp(2rem, 4vw, 2.5rem)"
    fontWeight: 700
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    fontSize: "24px"
    fontWeight: 700
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "20px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.reactor-orange}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.reactor-orange-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.reactor-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  skill-tag:
    backgroundColor: "{colors.reactor-orange-wash}"
    textColor: "{colors.reactor-orange}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "28px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.sm}"
    padding: "12px 16px"
---

# Design System: atoomic.org — Nicolas R. portfolio

## 1. Overview

**Creative North Star: "The High-Voltage Stage"**

This portfolio is a lit stage where a career runs as current. **Reactor Orange** (`#ff6b35`) is the live wire — not an accent sprinkled on white, but the charge that powers the page. The identity is color-drenched in intent: where the orange earns surface, it takes it. Neutrals stay out of its way; they are the stage, not the act.

Density is comfortable, not crowded. Light surfaces alternate **Paper** and **Paper Mist** until the **AI Capabilities** section drops to **Ember** (`#1f1714`), a warm near-black — the stage going dark for the headline act. That single tonal contrast is the whole elevation story on the macro scale. Type is one confident system-sans family worked across a wide weight range (400 → 800) and a fluid `clamp()` scale; restraint comes from craft, not timidity. Every surface is tactile and confident: buttons press, cards lift on a colored glow, the hero types itself in.

The system explicitly rejects the **Generic SaaS / AI template** (indigo-violet gradient heroes, glassy feature-card grids, "trusted by" logo strips, hero-metric stat blocks), the **Stock "developer portfolio"** (green-on-black terminals, matrix rain, decorative code), **Corporate beige/gray** neutrals, and **Overly minimal / empty** layouts (per PRODUCT.md anti-references).

**Key Characteristics:**
- One live-wire accent — Reactor Orange — carries CTAs, links, headings, focus rings, and the hero role.
- Single-family system-sans typography, hierarchy via weight and fluid `clamp()` scale.
- Hybrid elevation: soft floating shadows on light surfaces; one dark tonal contrast (Ember) for the AI section.
- Tactile, confident motion — hover lifts, colored orange glows, a self-typing hero.
- Color-drenched permission: the orange may own 30–60% of hero/feature surfaces; never a 1px stripe.

## 2. Colors

A single saturated hue against a quiet neutral stage, with one warm-dark tonal break and a gold spark reserved for the ☢ mark.

### Primary
- **Reactor Orange** (`#ff6b35`, `--orange-primary`): the brand. Hero role, section titles, CTAs, links, focus rings, timeline rail, skill-tag text. The only saturated color on the page.
- **Reactor Orange Deep** (`#e85a28`, `--orange-dark`): hover/active state for primary buttons and links.
- **Reactor Orange Glow** (`#ff8559`, `--orange-light`): focus outlines and the dark-section accent stroke.
- **Reactor Orange Wash** (`#fff0eb` ≈ `rgba(255,107,53,0.1)` on white): the tint behind skill tags and icon chips.

### Secondary
- **Gold** (`#d4a017`): reserved exclusively for the ☢ nav-logo symbol. Do not propagate it elsewhere.

### Neutral
- **Ember** (`#1f1714`): the warm near-black backdrop of the AI Capabilities section (gradient `#1f1714 → #2a1e16 → #1a1310`). The stage going dark.
- **Graphite** (`#1a1a1a`, `--text-dark`): primary ink and the footer background.
- **Graphite Soft** (`#4a4a4a`, `--text-medium`): body copy and bullets. ≥ 4.5:1 on Paper.
- **Graphite Faint** (`#6a6a6a`, `--text-light`): non-essential metadata only (dates, placeholders). Use sparingly — never for body.
- **Paper** (`#ffffff`, `--bg-white`): the default canvas.
- **Paper Mist** (`#f8f9fa`, `--bg-light`): alternating section background (About, Skills, Writing).
- **Paper Line** (`#e9ecef`, `--bg-grey`): input borders and dividers.

### Named Rules
**The Live-Wire Rule.** Reactor Orange is the only saturated hue on the page. It carries every CTA, link, heading accent, focus ring, and the timeline rail. Neutrals never compete with it; when the orange appears, it is the signal.
**The Drench Permission.** On hero and feature surfaces the orange may own 30–60% of the visible area (Committed strategy). It is never reduced to a 1px stripe or a faint tint where a real surface is warranted.

## 3. Typography

**Display / Body / Label Font:** the native system-sans stack — `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif`.

**Character:** A single family worked hard. Hierarchy comes entirely from weight (400 → 800) and a fluid `clamp()` scale, not from a second typeface. It reads as honest and engineered — the system-font restraint of a deep systems engineer. (A distinctive display face is the open lever for the *"how was this made?"* reaction; see Do's and Don'ts.)

### Hierarchy
- **Display** (700, `clamp(2.5rem, 5vw, 4rem)`): the hero title — "Nicolas R."
- **Headline** (700, `clamp(2rem, 4vw, 2.5rem)`): section titles, rendered orange with a leading SVG icon.
- **Title** (700, 24px): timeline roles, open-source card headings.
- **Body** (400, 18px, line-height 1.8): about prose, writing, contact copy. Cap line length 65–75ch (`.writing-content` is 700px). Base body is 16px / 1.7.
- **Label** (600, 14px): skill tags and nav links; 13px on the smallest breakpoints.

### Named Rules
**The Single-Family Rule.** One system-sans family across every role. Hierarchy is weight + scale, never a second typeface.
**The Fluid-Scale Rule.** Every heading uses `clamp()` so type breathes across viewports without breakpoint jumps. Display ceiling ≤ 6rem; letter-spacing floor ≥ −0.04em (the ghost step-numbers sit at exactly −0.04em).

## 4. Elevation

Hybrid. On light surfaces, depth is carried by soft floating shadows that respond to interaction; on the macro scale, the single **Ember** tonal section provides the only large contrast break. Nothing is flat-by-default, but shadows are a response to state, not ambient decoration — the AI cards are the exception, carrying a heavier resting shadow because they are the featured act.

### Shadow Vocabulary
- **Shadow SM** (`0 2px 8px rgba(0,0,0,0.08)`, `--shadow-sm`): resting state of the sticky header and secondary buttons.
- **Shadow MD** (`0 4px 16px rgba(0,0,0,0.12)`, `--shadow-md`): resting state of cards and the primary button.
- **Shadow LG** (`0 8px 24px rgba(0,0,0,0.15)`, `--shadow-lg`): hover lift on cards and buttons.
- **Orange Glow** (`0 4px 20px rgba(255,107,53,0.25), 0 0 0 8px rgba(255,107,53,0.1)`): the profile photo's signature halo; reused as colored hover glow on interactive elements (`rgba(255,107,53,0.25–0.35)`).
- **Stage Shadow** (`0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)`): resting depth of AI cards against the Ember backdrop.

### Named Rules
**The Responsive-Shadow Rule.** Light-surface cards sit on Shadow SM/MD at rest and lift to Shadow LG with a colored orange glow on hover. Shadows are a response to interaction, not ambient decoration — except the AI cards, whose heavier resting shadow marks them as the headline act.

## 5. Components

### Buttons
- **Shape:** gently curved (`--border-radius` 8px).
- **Primary:** Reactor Orange fill, Paper text, 14px 28px padding, weight 600, leading SVG icon. Shadow MD at rest.
- **Hover / Focus / Active:** background deepens to Reactor Orange Deep, lifts `translateY(-2px) scale(1.02)`, Shadow LG. Focus shows a 3px Reactor Orange outline. Active returns to neutral scale.
- **Secondary:** Paper fill, 2px Reactor Orange border, orange text; on hover it inverts to an orange fill with white text.

### Chips — Skill Tags
- **Style:** Reactor Orange Wash fill, Reactor Orange text, pill radius (20px), 8px 16px padding, weight 600.
- **State:** hover inverts to a solid Reactor Orange fill with Paper text and lifts with an orange glow. AI-section variants run dimmer (6% wash, 1px orange border).

### Cards / Containers
- **Corner Style:** 12px (timeline, skill, open-source) or 16px (AI cards).
- **Background:** Paper, except AI cards at `rgba(255,255,255,0.95)` over Ember.
- **Shadow Strategy:** see Elevation — SM/MD rest, LG + glow on hover; AI cards carry the Stage Shadow.
- **Border:** hairline `rgba(255,107,53,0.1)` on company logos; AI cards use a **top shimmer bar** (gradient `reactor-orange → glow → reactor-orange`) plus a ghost step-number (01/02/03) — not a side stripe.
- **Internal Padding:** 28px (timeline), 32px (open-source), 36px 32px (AI).

### Inputs / Fields
- **Style:** 2px Paper Line border, Paper fill, 8px radius, 12px 16px padding, 16px type.
- **Focus:** border shifts to Reactor Orange with a `0 0 0 4px rgba(255,107,53,0.12)` ring and a 1px lift.
- **Placeholder:** Graphite Faint at 0.6 opacity.

### Navigation
- Sticky, glassy Paper at 98% opacity with `backdrop-filter: blur(12px)`; Shadow SM, intensifying on scroll. Logo = gold ☢ + orange "atoomic" wordmark (weight 800, −0.03em). Links are Graphite Soft, underlined-on-hover with a 2px orange bar that grows from left. Collapses to a wrapped row under 480px.

### Signature Component — The Self-Typing Hero
The hero role ("Agentic Orchestration & AI-Driven Engineering") types in character-by-character at 60ms with a blinking Reactor Orange cursor that fades after a 2s hold. It is the brand's first impression and its most distinctive motion. Disabled entirely under `prefers-reduced-motion` (text renders instantly).

## 6. Do's and Don'ts

### Do:
- **Do** let Reactor Orange own real surface area on hero and feature moments (Committed/Drenched strategy) — it is voice, not decoration.
- **Do** keep body text at Graphite Soft (`#4a4a4a`, ≥ 4.5:1); reserve Graphite Faint for non-essential metadata only.
- **Do** honor `prefers-reduced-motion` with instant/crossfade fallbacks — the typing hero, scroll reveals, and shimmer all already do.
- **Do** use fluid `clamp()` scales for every heading; lift cards on hover with a colored orange glow.
- **Do** mark focus with a 2–3px Reactor Orange outline at 3–4px offset.
- **Do** consider a distinctive display typeface as the next craft lever — the single-family stack is honest but undersells the *"how was this made?"* goal.

### Don't:
- **Don't** use `border-left`/`border-right` greater than 1px as a colored stripe. (The current AI card `border-left: 4px solid --orange-primary` violates this — rewrite it as the full top shimmer bar, a tinted background, or a leading number/icon.)
- **Don't** reach for the Generic SaaS / AI template: indigo-to-violet gradient heroes, glassy feature-card grids, "trusted by" logo strips, or the big-number hero-metric template.
- **Don't** dress the site as a terminal — green-on-black, matrix rain, or code snippets used as decoration (Stock "developer portfolio").
- **Don't** default to beige/gray muted neutrals; they read as forgettable and fight the orange (Corporate beige/gray).
- **Don't** ship empty minimalism — no imagery, no texture, acres of whitespace that read as unfinished (Overly minimal / empty).
- **Don't** introduce a second saturated hue; Reactor Orange is the only one. Gold stays on the ☢ mark alone.
- **Don't** animate layout properties (width/height/top); use transform, opacity, blur, clip-path, and shadow/glow instead.
- **Don't** gate content visibility on a class-triggered transition with no visible default — reveals must enhance an already-visible state.
