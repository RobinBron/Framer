# Frontend Design Skill

## Typography Scale
Use a consistent type scale — never arbitrary font sizes.

```
xs:   12px / 0.75rem
sm:   14px / 0.875rem
base: 16px / 1rem
lg:   18px / 1.125rem
xl:   20px / 1.25rem
2xl:  24px / 1.5rem
3xl:  30px / 1.875rem
4xl:  36px / 2.25rem
5xl:  48px / 3rem
```

- Body text: `base` (16px), line-height 1.5–1.6
- Headings: `3xl`–`5xl`, line-height 1.1–1.2, font-weight 600–700
- Labels/captions: `xs`–`sm`, letter-spacing 0.01–0.05em
- Never mix more than 2 font weights in a single component

## Spacing System
Base grid: **8px**. All spacing values must be multiples of 8 (or 4 for fine adjustments).

```
4px   — tight internal padding (icon gaps, badge padding)
8px   — xs
12px  — sm (inner padding for compact components)
16px  — md (standard padding)
24px  — lg
32px  — xl
48px  — 2xl
64px  — 3xl
96px  — 4xl
```

Never use arbitrary values like `13px`, `22px`, or `37px`.

## Color Tokens
Use semantic color names — never raw hex codes in components.

```
--color-bg:          #ffffff
--color-bg-subtle:   #f8f8f7
--color-border:      #e5e5e4
--color-border-strong: #c9c9c7

--color-text:        #1a1a1a
--color-text-subtle: #6b6b6b
--color-text-muted:  #a3a3a3

--color-primary:     #1a1a1a
--color-primary-fg:  #ffffff

--color-accent:      #6366f1
--color-accent-fg:   #ffffff

--color-success:     #16a34a
--color-warning:     #d97706
--color-error:       #dc2626
```

Dark mode: invert bg/text, keep accent, soften borders.

## Component Patterns

### Buttons
- Primary: filled bg-primary, fg-primary, rounded-md, px-16 py-8
- Secondary: border border-strong, bg-transparent, same sizing
- Ghost: no border, subtle hover bg
- Danger: bg-error, fg-white
- All buttons: transition 150ms ease, focus-visible ring, disabled:opacity-50
- Never use box-shadow on buttons — use border instead

### Cards
- bg-bg, border border-border, rounded-lg (8–12px)
- padding: 24px standard, 16px compact
- No drop shadows on flat/neutral cards — use border only
- Elevation (modals, dropdowns): single subtle shadow `0 4px 16px rgba(0,0,0,0.08)`

### Forms
- Label above input, never placeholder-only
- Input: border border-border, rounded-md, px-12 py-8, focus:border-accent
- Error state: border-error + error message below in color-error text-sm
- Helper text: color-text-muted text-sm, below the input

### Layout
- Max content width: 1200px (wide), 800px (prose/centered), 640px (form/narrow)
- Horizontal padding on mobile: 16px minimum
- Section vertical rhythm: 64px–96px between major sections
- Never center-align body text blocks over 3 lines

## Motion (framer-motion)
- Entrances: `opacity` 0→1, `y` 8→0, duration 0.2s, ease `easeOut`
- Exit: `opacity` 1→0, duration 0.15s
- Staggered lists: `staggerChildren: 0.05`
- Never animate layout-affecting properties (width, height) — use `scale` or `opacity`
- Respect `prefers-reduced-motion`: wrap motion components conditionally

## Principles

- **No generic AI aesthetic**: avoid gradients on everything, avoid glassmorphism, avoid neon accents
- **Whitespace is not empty space** — use it intentionally to create hierarchy
- **One visual accent per screen** — don't compete with multiple bold colors
- **Consistency over creativity** — reuse patterns rather than inventing new ones per component
- **Typography carries hierarchy** — rely on size + weight before reaching for color
- **Every interactive element needs a focus state** — keyboard navigation is non-negotiable
