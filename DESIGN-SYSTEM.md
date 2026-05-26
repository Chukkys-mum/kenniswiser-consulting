# Design System Notes — Kennis Wiser Consulting

Canonical brand-asset rules for this site. Mirrored from / kept in sync with the master design system in `kennis-web/packages/ui` (the monorepo migration target).

## Logos

### Site brand mark (navbar)

- **File:** `/public/logos/kwc-logo-white.png`
- **Source:** `Marketing/Logo/KENNIS WISER CONSULTING/Png/KENNIS WISER CONSULTING LOGO-04.png` (the WHITE variant — for the dark navbar)
- **Other variants** in `/public/logos/`:
  - `kwc-logo-full.png` — gradient K + "KENNIS WISER CONSULTING" wordmark, white bg
  - `kwc-logo-mark.png` — gradient K only, white bg
  - `kwc-logo-black.png` — black K + wordmark, white bg
  - `kwc-logo-white.png` — white K + wordmark, transparent (used on dark UI)

### Favicon

- **K mark on dark navy frame** — `Marketing/Logo/K icon/KENNIS WISER LOGO-02.png`
- Generated at 16/32/64/128 px + 180 px apple-touch-icon at build time.
- Why this variant: the K mark is framed in dark navy, which gives a recognisable silhouette in browser tabs even when rendered at 16 px, and reads as on-brand against both light and dark browser chromes.

## KORA chat widget

Two surfaces inside `components/KoraWidget.tsx`:

### KORA-LOGO-CHAT-BUTTON (floating action button, bottom-right)

- **Use:** `/public/logos/kora-logo.svg` (the **gradient** variant — purple → cyan brand gradient as the K mark)
- **Source:** `Marketing/Logos/KORA/SVG/KORA Logo_Gradient.svg`
- **Sizing rule:** the logo SHOULD fill ~75 % of the button — earlier versions used a 32 px logo inside a 56 px button which looked diminutive. Current spec: 56 px logo inside a 64 px (`h-16 w-16`) white-background button.
- The button background is white (not the brand purple) so the gradient logo reads correctly against it. The button gets a soft purple drop-shadow (`rgba(97, 69, 237, 0.35)`) to tie it back to the brand palette.

### KORA-LOGO-CHAT-HEADER (avatar circle in the open chat panel header)

- **Use:** `/public/logos/kora-logo.svg` (the **gradient** variant — same file as the button)
- **Sizing rule:** 36 × 36 px inside a rounded square with a faint white tint (`bg-white/10`) so the gradient reads against the panel's dark purple header tile.

### What NOT to use

- Do NOT use the old 8-point sparkle/star icon (path starting with `M12 2L13.09 8.26L18 6L14.74…`). It was a placeholder.
- Do NOT use the white KORA wordmark for the button — the gradient is the canonical brand mark for the chat surface.
- Do NOT use the KORA brand colour `#2ad0ff` as the button background — the logo's own gradient already carries the brand colours; the button should be neutral white so the gradient pops.

## Colour tokens (Tailwind)

| Token | Hex | Use |
|---|---|---|
| `primary-900` | `#1a1a3e` | Page bg, navbar |
| `primary-700` | `#4338ca` | Headings, hover states |
| `primary-600` | `#5558e3` | CTA bg |
| `accent` | `#7c3aed` | Accents, highlight text, KORA brand purple |
| `dark` | `#0f0f1e` | Deep panels |

## Cross-site contract

When this site migrates into the `kennis-web` monorepo (see the spawned
"Migrate KWC into kennis-web monorepo" task), the design-system rules
above MUST be ported to the shared `packages/ui` registry and removed
from this site-local doc. Until then this file is the source of truth
for KWC-specific brand rules.
