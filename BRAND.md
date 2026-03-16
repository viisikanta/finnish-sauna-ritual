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

## Photography

### Direction

The visual language is **grounded, atmospheric, and Nordic**. Every image should feel like a quiet moment — not a stock photo, not a lifestyle ad. Think: the light that comes through a sauna window at dusk, not a model smiling at the camera.

**Categories we use:**
- **Interiors** — Real saunas (smoke saunas, modern dark wood, light wood, barrel saunas)
- **Ritual moments** — Löyly steam, water on stones, vihta in use, cooling off
- **Textures** — Birch bark, linen fabric, sauna stones, wood grain
- **Nature** — Finnish lakescapes, birch forests, winter scenes, misty mornings
- **Objects** — Sauna hats, buckets, ladles, vihta on a dock
- **People** — Contemplative, not performative. Wrapped in linen, sitting quietly, looking at the lake

**Never:**
- Stock photo poses (people smiling at camera, thumbs up)
- Overly saturated or neon-lit spa photos
- Infrared sauna imagery (this is a Finnish sauna site)
- Gym/fitness aesthetic
- Before/after health imagery

**Technical rules:**
- Always use Next.js `<Image>` component (automatic WebP/AVIF, lazy loading, srcset)
- Hero images: `fill`, `priority`, `sizes="100vw"`, `object-cover rounded-sm`
- Full-width heroes: `h-[50vh] min-h-[400px]` (homepage: `h-[70vh] min-h-[500px]`)
- Descriptive, SEO-friendly filenames (e.g., `wool-felt-sauna-hats.jpg`)
- Descriptive `alt` text — keyword-rich but natural

### Photo Library

All images are in `/public/images/`. Here is the complete inventory and where each is used:

#### Hero Images (assigned to pages)

| Filename | Subject | Used On |
|----------|---------|---------|
| `modern-finnish-sauna-lake-view.jpg` | Dark modern sauna interior, panoramic winter lake through window | **Homepage** (hero) |
| `vihta-birch-whisk-lake-dock.jpg` | Two fresh vihta on weathered lake dock, Finnish forest backdrop | **Homepage** (mid-page break) |
| `finnish-sauna-loyly-steam.jpg` | Two people in steamy sauna, löyly moment | **Sauna Etiquette** hub |
| `man-relaxing-finnish-sauna.jpg` | Man sitting peacefully in warm sauna, golden light | **First Time Guide** |
| `barrel-sauna-winter-snow.jpg` | Barrel sauna outdoors in heavy snow | **German Sauna Culture** + **Best Saunas Germany** |
| `sauna-interior-vihta-bucket.jpg` | Clean sauna through window, vihta and bucket visible | **Accessories** hub |
| `wool-felt-sauna-hats.jpg` | Row of wool felt sauna hats hanging on wooden hooks | **Sauna Hats** |
| `wooden-ladle-loyly-steam.png` | Hand pouring water with wooden ladle, steam rising from stones | **Bucket & Ladle** |
| `luxury-sauna-spa-stones.png` | Minimalist spa sauna with stacked stones, birch branch, towels | **Gift Guide** |
| `lakeside-sauna-window-view.jpg` | Sauna with large window overlooking lake and forest | **Best Saunas** hub |
| `traditional-smoke-sauna-interior.png` | Smoke sauna interior, light beams through window, stone walls | **Best Saunas Finland** |
| `frost-birch-trees-winter.jpg` | Frost-covered birch trees against blue winter sky | **Best Saunas Iceland** |
| `steam-rising-sauna-stones.jpg` | Steam rising from hot sauna stones, atmospheric close-up | **FAQ** |
| `finnish-birch-forest.jpg` | Sunlight filtering through tall Finnish birch forest | **Glossary** |
| `person-lakeside-sauna-morning.png` | Person in linen wrap sitting by lake at sunrise, contemplative | **About** |

#### Unused / Available for Future Pages

| Filename | Subject | Good For |
|----------|---------|----------|
| `minimalist-sauna-cabin-lakeside.png` | Dark wood cabin on rock by misty lake, dusk | Article hero, social media, homepage alternate |
| `luxury-sauna-spa-towels.png` | Spa sauna with birch tree, stacked stones, bamboo heater | Gift guide, spa content |
| `person-misty-lake-sauna.png` | Person wrapped in blanket at doorway looking at misty lake | About alternate, winter swimming article |
| `pouring-water-sauna-stones.jpg` | Close-up of ladle pouring water on stones, person blurred | Löyly article, how-to content |
| `woman-sauna-hat-vihta.jpg` | Woman wearing sauna hat, holding vihta in sauna | Sauna hats alternate, women's guide |
| `sauna-stones-heater-interior.jpg` | HUUM heater with bucket and ladle, dark sauna interior | Product review, heater guide |
| `sauna-stones-closeup-moody.jpg` | Dramatic close-up of sauna stones, dark and moody | Blog post hero, texture element |
| `modern-wood-burning-sauna.jpg` | Light wood modern sauna with wood-burning stove, big window | Home sauna guide, modern sauna article |
| `modern-light-wood-sauna.jpg` | Clean, bright light wood sauna interior with LED lighting | Modern sauna review, installation guide |
| `stacked-birch-firewood.jpg` | Neatly stacked birch firewood, texture shot | Wood-burning sauna article, texture element |
| `white-birch-trunks.jpg` | White birch tree trunks, forest texture, high contrast | Background/divider, nature content |
| `birch-trunks-autumn.jpg` | Birch trunks with autumn yellow leaves | Seasonal content, autumn sauna article |
| `birch-leaves-branch.jpg` | Close-up birch leaf branch, fresh green | Vihta making guide, nature content |
| `fresh-vihta-birch-whisk.png` | Fresh green vihta in wooden bucket, close-up | Vihta guide, accessories content |
| `finnish-linen-texture.png` | Close-up natural linen fabric texture | Background texture, product photography |

### Sources

- **Unsplash** — huum, al-butler, joakim-finell, julia-elliot, santtu-perkio, glib-albovsky, juliana-marx, josephali-music, clay-banks, patrick-hendry, peng-chen, sofia-holmberg, irina-sergeeva (free commercial licence)
- **AI-generated** — editorial-style images for specific compositions not available in stock (cabin, spa interiors, person portraits, texture close-ups)

### Delicate Line Art Icons

Where photography is too heavy, use simple line art icons:
- Hourglass (time/patience)
- Water droplet (löyly)
- Birch branch (vihta)
- Thermometer (temperature)
- Snowflake (avanto/cold plunge)

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
/
  BRAND.md                   ← This file — visual identity & photography
  COPYWRITING.md             ← Voice, tone rules, scoring, content patterns
  SEO-AUDIT.md               ← Methodology, checklist, keyword targets
  public/
    images/                  ← 30 photos (see Photography section above)
  src/
    app/
      globals.css            ← Design system (all CSS variables)
      layout.tsx             ← Root layout (fonts, GA4, Header/Footer)
      page.tsx               ← Homepage
      about/page.tsx
      faq/page.tsx           ← FAQ (FAQPage schema)
      glossary/page.tsx      ← Glossary (DefinedTermSet schema)
      sauna-etiquette/
        page.tsx             ← Hub
        first-time/page.tsx
        germany/page.tsx
      sauna-accessories/
        page.tsx             ← Hub
        sauna-hats/page.tsx
        bucket-and-ladle/page.tsx
      sauna-gift-guide/page.tsx
      best-saunas/
        page.tsx             ← Hub
        finland/page.tsx
        germany/page.tsx
        iceland/page.tsx
      sitemap.ts
      robots.ts
      api/subscribe/route.ts ← Resend email
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
