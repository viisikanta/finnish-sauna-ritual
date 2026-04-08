# Finnish Sauna Guide

## Overview

- **URL:** https://www.finnishsaunaguide.com
- **Repo:** https://github.com/viisikanta/finnish-sauna-ritual
- **Stack:** Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript
- **Hosting:** Vercel (auto-deploys from GitHub)
- **Email:** Resend (newsletter subscribe)
- **Analytics:** Google Analytics (G-D5LKH6B1TE)
- **Domain:** www.finnishsaunaguide.com (primary), finnishsaunaguide.com redirects to www

## Pages (16)

| Path | Type | Description |
|------|------|-------------|
| `/` | Homepage | Hero, content hubs, stats, email capture |
| `/sauna-etiquette` | Hub | Universal rules + country links |
| `/sauna-etiquette/first-time` | Guide | Beginner's complete guide |
| `/sauna-etiquette/germany` | Guide | German Aufguss/Therme culture |
| `/sauna-accessories` | Hub | All accessory categories |
| `/sauna-accessories/sauna-hats` | Product | Sauna hat reviews (affiliate) |
| `/sauna-accessories/bucket-and-ladle` | Product | Bucket & ladle reviews (affiliate) |
| `/sauna-gift-guide` | Product | Gift guide by price tier (affiliate) |
| `/best-saunas` | Hub | World sauna overview |
| `/best-saunas/finland` | Guide | Helsinki, Tampere, Lakeland saunas |
| `/best-saunas/germany` | Guide | German thermal spas |
| `/best-saunas/iceland` | Guide | Icelandic hot springs & lagoons |
| `/faq` | FAQ | 14 Q&As with FAQPage schema |
| `/glossary` | Reference | 15 Finnish sauna terms with DefinedTermSet schema |
| `/about` | About | Mission, approach, contact |

## How to Deploy

### Automatic (recommended)
Push to `main` branch on GitHub. Vercel auto-builds and deploys.

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will:
1. Detect the push
2. Run `next build`
3. Deploy to production (usually takes 1-2 minutes)
4. Show status at https://vercel.com/dashboard

### Manual / Preview
- Push to any non-main branch to get a preview deployment URL
- Check Vercel dashboard for build logs if something fails

### After Deploy
- Check Google Search Console for any new crawl errors
- If you changed page URLs, update sitemap.ts lastmod dates
- Request re-indexing in Search Console for changed pages

## Key Files

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Global metadata (title, description, og:image, canonical base) |
| `src/app/sitemap.ts` | XML sitemap generation (update lastmod when editing pages) |
| `src/app/robots.ts` | Robots.txt (allows all crawlers including AI bots) |
| `next.config.ts` | Next.js config, security headers |
| `src/components/Breadcrumbs.tsx` | Breadcrumb nav + BreadcrumbList schema |
| `src/components/AffiliateCard.tsx` | Product cards with affiliate links |
| `src/app/api/subscribe/route.ts` | Email subscribe endpoint (Resend) |

## Environment Variables (Vercel)

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend email API key |
| `RESEND_AUDIENCE_ID` | Resend audience for newsletter contacts |

## SEO Notes

- **Canonical domain:** `https://www.finnishsaunaguide.com` (all canonicals, sitemap, schema use www)
- **Affiliate links:** Use `rel="noopener noreferrer nofollow sponsored"`
- **Schema markup:** WebSite (homepage), Article (guides), FAQPage (faq), DefinedTermSet (glossary), Organization (about), BreadcrumbList (all inner pages)
- **Sitemap lastmod:** Update in `sitemap.ts` when editing a page's content
- **Google Search Console:** Site is registered, sitemap submitted

## Affiliate

- Amazon affiliate tag: `viisikanta-20`
- Disclosure in footer on all pages

---

## Changelog

### 2026-04-08 — SEO Audit Fixes
- **Fixed canonical/redirect mismatch:** Changed all URLs from `https://finnishsaunaguide.com` to `https://www.finnishsaunaguide.com` across all files (layout, sitemap, robots, schemas, breadcrumbs, email templates). This was causing "Page with redirect" errors in Search Console because sitemap/canonicals pointed to non-www but Vercel redirects non-www to www.
- **Added og:image and twitter:image:** Global social sharing images added to layout.tsx metadata. All pages now have image thumbnails for social shares and AI previews.
- **Fixed homepage H1:** Changed from poetic "The steam should not bite. It should embrace." to keyword-optimized "The Complete Guide to Finnish Sauna Culture". Poetic line kept as subtitle.
- **Added security headers:** X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy added via next.config.ts.
- **Fixed sitemap lastmod dates:** Changed from `new Date()` (always build time) to actual per-page modification dates.

### 2026-03-22 — Previous updates
- Added canonical URLs to all pages
- Added custom 404 page
- Set trailingSlash: false for Search Console compatibility
- Fixed hero image overlay and font loading
