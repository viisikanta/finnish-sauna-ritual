# Finnish Sauna Guide — Brand Reference

Quick-reference for anyone working on this project. Every page, component, and piece of copy should follow these rules.

---

## Identity

| | |
|---|---|
| **Name** | Finnish Sauna Guide |
| **URL** | finnishsaunaguide.com |
| **Email** | hello@finnishsaunaguide.com |
| **Amazon Tag** | `viisikanta-20` |
| **GA4** | `G-D5LKH6B1TE` |
| **One Word** | Löyly (pronounced: Low-lu) — the steam that rises from the stones |

**Archetype:** The Sage with an Explorer wing.
We are the cultural source of truth — Finnish, not guessing. The Explorer wing keeps it alive, not academic.

**Brand promise:** The definitive roadmap for mastering the Finnish sauna ritual — transforming a simple heat session into a premium wellness practice for the body and soul.

---

## Voice

**In one line:** Quiet confidence. Short, impactful sentences. Tactile and grounded.

**Personality traits:** Grounded, Honest, Refined, Ancestral, Serene.

**Emotional sequence:** Intrigue ("This feels authentic") → Trust ("They know what they're talking about") → Quietude ("I feel calmer just reading this").

### Do

- Speak directly, no hedging ("Here is how" not "You might want to consider")
- Be tactile: describe steam, birch scent, cold air, smooth wood
- Use em dashes, not exclamation marks
- Give practical wisdom — clear, actionable steps
- Write like a calm Finn who has done this thousands of times

### Never

- Hype language: AMAZING, INSANE, REVOLUTIONARY, GAME-CHANGER
- Emojis anywhere in the UI or content
- Countdown timers, urgency tactics, "limited time" language
- Clinical/academic tone: "Studies show a 0.5% increase in..."
- Stock-photo language: "Unlock your potential", "Transform your life"

### Example

**Yes:**
> The steam should not bite. It should embrace. In Finland, the sauna is a place of silence and sweat. Here is how to master your first ritual.

**No:**
> CHECK OUT THESE 5 CRAZY SAUNA HACKS! DOWNLOAD NOW!!!

---

## Colors

### Primary Palette

| Name | Variable | Hex | Use |
|------|----------|-----|-----|
| **Birch Bark** | `--color-birch` | `#C19A6B` | Primary accent, CTAs, highlights |
| **Deep Lake** | `--color-lake` | `#2F4F4F` | Links, secondary accent |
| **Charcoal** | `--color-foreground` | `#212121` | Primary text, headings |
| **Linen** | `--color-linen` | `#FAF9F6` | Page background |

### Supporting Neutrals

| Name | Variable | Hex | Use |
|------|----------|-----|-----|
| Stone | `--color-stone` | `#5A5A5A` | Body text |
| Stone Light | `--color-stone-light` | `#8A8A8A` | Muted text, captions |
| Steam | `--color-steam` | `#E5E1D8` | Borders, dividers |
| Linen Dark | `--color-linen-dark` | `#F0EDE6` | Subtle section backgrounds |

### Extended

| Variable | Hex | Use |
|----------|-----|-----|
| `--color-birch-light` | `#D4B48E` | Birch hover states |
| `--color-birch-dark` | `#A07D4F` | Birch active/dark states |
| `--color-lake-light` | `#3D6666` | Lake hover states |
| `--color-warm-50` | `#F8F3EC` | Card hover bg |
| `--color-warm-100` | `#F0E6D4` | Text selection bg |

---

## Typography

| Element | Font | Weight | Size Pattern |
|---------|------|--------|--------------|
| **H1** | Noto Serif Display | 500 (Medium) | `text-4xl md:text-[3.5rem]` |
| **H2** | Noto Serif Display | 500 | `text-2xl md:text-3xl` |
| **Card titles** | Noto Serif Display | 500 | `text-lg` |
| **Body** | Inter | 400 | Default |
| **Labels/Tags** | Inter | 500 | `text-[10px]` or `text-[11px]`, uppercase, `tracking-[0.08em]`–`tracking-[0.2em]` |
| **Nav links** | Inter | 500 | `text-[13px]`, uppercase, `tracking-[0.08em]` |

### How to apply serif headings

Always use inline style — the CSS variable is the source of truth:

```tsx
<h2
  className="text-2xl md:text-3xl text-[var(--color-foreground)]"
  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
>
```

### Label pattern (tags, section headers, nav)

```tsx
<span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-birch)]">
  Section Label
</span>
```

---

## Design Rules

| Rule | Detail |
|------|--------|
| **Whitespace** | Generous. Pages breathe. `py-20` between sections, `py-12` for smaller breaks. |
| **Corners** | Sharp. `rounded-sm` maximum (2px). Never `rounded-lg` or `rounded-full`. |
| **Borders** | Thin. `border-[var(--color-steam)]` (1px). Never thick. |
| **Card accent** | 2px top-border in birch: `border-t-2 border-t-[var(--color-birch)]` |
| **Dropdown accent** | Same 2px birch top-border on dropdowns |
| **Emojis** | Never. Use typography and whitespace instead. |
| **Dividers** | `<div className="max-w-16 mx-auto border-t border-[var(--color-steam)]" />` |
| **Max widths** | Content: `max-w-2xl` or `max-w-3xl`. Grid sections: `max-w-5xl`. Full layout: `max-w-6xl`. |
| **Links** | Lake color, underline with steam-colored decoration, offset 3px |

---

## Component Patterns

### CTA Button (primary)

```tsx
<button className="px-5 py-2.5 bg-[var(--color-birch)] text-white text-[11px] font-medium uppercase tracking-[0.08em] hover:opacity-90 transition-opacity">
  Button Text
</button>
```

### CTA Button (secondary/outline)

```tsx
<Link className="px-7 py-3 border border-[var(--color-steam)] text-[var(--color-foreground)] text-sm font-medium tracking-wide hover:border-[var(--color-birch)] hover:text-[var(--color-birch)] transition-colors">
  Button Text
</Link>
```

### Text Link

```tsx
<Link className="text-sm text-[var(--color-lake)] font-medium underline underline-offset-4 decoration-[var(--color-steam)] hover:decoration-[var(--color-lake)] transition-colors">
  Link Text
</Link>
```

### Badge (affiliate cards)

```tsx
<span className="border border-[var(--color-birch)] text-[var(--color-birch)] text-[10px] font-medium uppercase tracking-[0.08em] px-3 py-0.5 bg-white">
  Our Pick
</span>
```

### Feature list items (affiliate cards)

Use em dashes, not checkmarks or bullets:

```tsx
<li className="flex items-start gap-2 text-[var(--color-stone)]">
  <span className="text-[var(--color-stone-light)]">&mdash;</span>
  <span>Feature text here</span>
</li>
```

### Section layout

```tsx
{/* Label */}
<p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-birch)] text-center mb-3 font-medium">
  Section Label
</p>
{/* Heading */}
<h2
  className="text-2xl md:text-3xl text-[var(--color-foreground)] text-center mb-12"
  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
>
  Section Heading
</h2>
```

---

## Affiliate Links

All Amazon links must include the tag parameter:

```
https://www.amazon.com/dp/ASIN?tag=viisikanta-20
```

Affiliate link attributes:

```tsx
<a
  href={affiliateUrl}
  target="_blank"
  rel="noopener noreferrer nofollow sponsored"
>
```

CTA text: "Check Price" — not "Buy Now" or "Shop Now". Keep it low-pressure.

---

## Imagery Guidelines

- Minimalist modern architecture: cabins, saunas, lake houses
- Raw textures: wood grain, stone, linen fabric
- Atmospheric: steam, soft light, lake reflections
- Color-graded warm and muted (match the palette)
- Never stock-photo-sterile. Always grounded and real.
- Delicate line art icons where needed (hourglass, water droplet, birch branch)

---

## Conversion Philosophy

1. Give generous free content first
2. Present conversion points contextually ("Deepen your practice")
3. Showcase beautiful product previews (PDF pages, not mockups)
4. No countdown timers. No urgency tactics. No "limited time" language.
5. Premium and subtle, always.

**Competitive edge:** We are the Cultural Gatekeeper. Manufacturers sell the hardware ($10K wooden boxes). Biohackers treat it like lab equipment. We provide the software — rituals, etiquette, culture. We turn a product into a lifestyle.

---

## Digital Product Aesthetic

PDF guides and digital products must match the website:

- Same typography: Noto Serif Display + Inter
- Same color palette: Linen background, Birch Bark accents
- Generous whitespace — feel like minimalist art books, not instruction manuals
- Delicate line art icons
- Professional photography of ritual elements

---

## Page Structure Checklist

Every content page should include:

- [ ] `<Breadcrumbs>` component at the top
- [ ] Page-level `metadata` export with title, description, keywords
- [ ] JSON-LD schema markup (`Article`, `BreadcrumbList`, or relevant type)
- [ ] `<EmailCapture>` component near the bottom
- [ ] Internal links to related pages
- [ ] `.prose` wrapper for article content
- [ ] Affiliate cards where relevant (with real Amazon URLs)

---

## File Structure

```
src/
  app/
    globals.css              ← Design system (all CSS variables)
    layout.tsx               ← Root layout (fonts, GA4, Header/Footer)
    page.tsx                 ← Homepage
    about/page.tsx
    sauna-etiquette/
      page.tsx               ← Hub
      first-time/page.tsx
      germany/page.tsx
    sauna-accessories/
      page.tsx               ← Hub
      sauna-hats/page.tsx
      bucket-and-ladle/page.tsx
    sauna-gift-guide/page.tsx
    best-saunas/
      page.tsx               ← Hub
      finland/page.tsx
      germany/page.tsx
      iceland/page.tsx
    sitemap.ts
    robots.ts
    api/subscribe/route.ts   ← Resend email
  components/
    Header.tsx
    Footer.tsx
    Breadcrumbs.tsx
    ContentCard.tsx
    AffiliateCard.tsx
    EmailCapture.tsx
```

---

## CSS Variables (full reference)

```css
/* In globals.css via @theme inline */

/* Brand Colors */
--color-birch: #C19A6B;
--color-birch-light: #d4b48e;
--color-birch-dark: #a07d4f;
--color-lake: #2F4F4F;
--color-lake-light: #3d6666;
--color-foreground: #212121;
--color-stone: #5a5a5a;
--color-stone-light: #8a8a8a;
--color-steam: #e5e1d8;
--color-linen: #FAF9F6;
--color-linen-dark: #f0ede6;
--color-warm-50: #f8f3ec;
--color-warm-100: #f0e6d4;

/* Typography */
--font-serif: "Noto Serif Display", Georgia, serif;
--font-sans: "Inter", system-ui, sans-serif;
```

---

## Legacy Notes

Some sub-pages still reference `--color-cedar` (aliased to `#212121` in globals.css). This works but should be migrated to `--color-foreground` when those pages are updated.
