# CLAUDE.md — Maren Voss Therapy Showcase Site

This is a showcase website for a fictional therapist, built by Stillpoint (stillpoint.design) as a portfolio piece and discovery call demo environment. The fictional therapist does not exist. The site should be clearly labeled as a showcase build.

---

## Project Overview

**Site:** Maren Voss Therapy (showcase.stillpoint.design)
**Purpose:** Flagship portfolio piece for Stillpoint, a web design studio for therapists. Demonstrates Full Practice tier (10-20 pages) with Sanity CMS integration.
**Framework:** Astro (static site generation)
**CMS:** Sanity (free tier, separate project — integrated later)
**Deployment:** Cloudflare Pages (showcase.stillpoint.design)
**Fonts:** Google Fonts — DM Serif Display (headings) + DM Sans (body), self-hosted for performance
**Icons:** None. No icon libraries. No decorative elements.
**Animation:** Minimal. CSS transitions only (200-300ms ease on hovers and state changes). No scroll-triggered animations, no parallax, no JS animation libraries.

---

## Design System

### Philosophy

The site should feel like a gallery. Curated, spacious, confident. Every element earns its place. Whitespace is structural, not decorative. Typography carries the design. Nothing gratuitous: no gradients, no shadows, no rounded corners, no decorative dividers, no icons, no illustrations.

Dark and light sections alternate to create rhythm. Asymmetry over symmetry in layout composition. The site should feel authored, not assembled.

**Portfolio context:** This is one of three Stillpoint portfolio sites with completely different aesthetics:
- Monique (moniquemillertherapy.com) = warm, earthy, sage
- Shannon (drshannonhourigan.com) = clean, clinical, teal
- Maren = bold, modern, charcoal + terracotta (THIS SITE)

### Color Palette

```css
:root {
  /* Backgrounds */
  --rich-black: #1a1a1a;
  --warm-charcoal: #2c2824;
  --warm-cream: #f5f0ea;
  --white: #ffffff;

  /* Text */
  --text-light: #e8e2d9;
  --text-dark: #1a1a1a;
  --text-muted: #8a8279;
  --text-muted-light: #a09a91;

  /* Accent */
  --terracotta: #c45a3c;
  --terracotta-hover-dark: #d4694d;   /* hover state on dark backgrounds */
  --terracotta-hover-light: #a84832;  /* hover state on light backgrounds */
}
```

**Usage rules:**
- Hero sections: `--rich-black` background, `--text-light` body, `--terracotta` accent
- Content sections: alternate between `--warm-cream` and `--rich-black`
- CTAs everywhere: `--terracotta` fill, white text. Hover varies by background.
- Text links on dark: `--terracotta` with underline. Hover: `--terracotta-hover-dark`
- Text links on light: `--terracotta` with underline. Hover: `--terracotta-hover-light`
- No section dividers. Color alternation and spacing handle transitions.
- Borders only where functionally necessary (form inputs). 1px, `--text-muted` color.

**Accessibility note:** Terracotta on cream is tight for WCAG AA at small text sizes. Use `--terracotta-hover-light` (#a84832) for any text smaller than 18px on light backgrounds. Terracotta is fine for large headings and buttons on both backgrounds.

### Typography

```css
/* Fonts: DM Serif Display (headings), DM Sans (body) */
/* Self-host from Google Fonts for performance */

/* Scale */
--hero-headline: clamp(3rem, 5vw, 5rem);       /* DM Serif Display */
--page-title: clamp(2.5rem, 4vw, 3.5rem);       /* DM Serif Display */
--section-heading: clamp(2rem, 3vw, 2.5rem);     /* DM Serif Display */
--subsection-heading: clamp(1.25rem, 2vw, 1.75rem); /* DM Sans, 500 weight */
--body: 1.125rem;                                 /* DM Sans, 400, line-height 1.7 */
--body-small: 1rem;                               /* DM Sans, 400 */
--caption: 0.875rem;                              /* DM Sans, 400, letter-spacing 0.02em */
--nav: 0.9375rem;                                 /* DM Sans, 500, letter-spacing 0.03em */
--button: 0.9375rem;                              /* DM Sans, 500, letter-spacing 0.04em, uppercase */
```

**Type treatment:**
- Hero headlines: DM Serif Display, mixed case, tight letter-spacing (-0.02em)
- Section headings: DM Serif Display, mixed case
- Navigation and buttons: DM Sans, uppercase, tracked out
- Body paragraphs: max-width 680px for comfortable reading measure
- Pull quotes / testimonials: DM Serif Display, 28-32px

### Layout

**Grid:** 12-column, max-width 1280px, 32px gutters
**Content width:** Most content occupies 8 of 12 columns. Whitespace is deliberate composition.
**Section padding:** 120px minimum vertical padding on desktop. Hero: 160-200px. Tablet: 80px. Mobile: 60px.
**Alternating rhythm:** Dark section → light section → dark section. Color change signals "new idea."
**Asymmetric by default.** Not everything centered. Headlines can be left-aligned while body occupies offset columns. Images can break grid edges.

### Components

**Hero (Homepage):** Dark bg. Large DM Serif Display headline (2-3 lines). One line body text. Single CTA button. Generous vertical padding.

**Hero (Interior pages):** Dark bg. Narrower height. Page title in serif. One-sentence tagline in sans.

**Content Block (Text + Image):** Asymmetric 2-column. Text ~55%, image ~40%, gap between. Alternate image side. Images: no border-radius, no shadow, clean rectangle.

**Specialty Card (Homepage):** On dark bg. Title in serif, 2 lines description in sans, text link with arrow. No box, no border. Just text with generous spacing between cards.

**Testimonial:** DM Serif Display, ~28px. Large terracotta open-quote mark as decorative element. Attribution in DM Sans, small, muted. Centered on its own section.

**FAQ Accordion:** Question in DM Sans 500. Answer revealed on click. Plus/minus or chevron in terracotta. Clean, no decorative toggles.

**Blog Post Card:** Title in DM Serif Display. Date in muted text. 2-line excerpt in sans. No thumbnail. Type-first.

**CTA Section:** Dark bg. Serif headline ("Ready to begin?"). One sentence. Button. Appears at bottom of every page.

**Footer:** Three columns. Left: name + location. Center: phone + email. Right: social links. Bottom row: copyright + privacy.

### Navigation

**Desktop:** Fixed top nav, slim height. Left: "Maren Voss" wordmark (DM Serif Display) + "LMFT" (DM Sans, small, muted). Right: page links + CTA button. Background transitions from transparent to `--warm-charcoal` on scroll.

**Links:** About · Services (dropdown: Trauma & PTSD, Anxiety, Burnout, Relationship Patterns, Life Transitions) · How I Work · Fees & FAQ · Blog · Contact

**CTA in nav:** "Schedule a Consultation" — terracotta button, always visible.

**Mobile:** Hamburger menu. Full-screen overlay on `--rich-black`. Links stacked, large, DM Serif Display. 768px breakpoint.

### Motion

```css
/* ONLY allowed motion */
a, button { transition: color 200ms ease, background-color 200ms ease; }
/* Nav bg on scroll: 300ms ease (JS-triggered class toggle) */
/* FAQ accordion: 300ms ease (max-height transition) */
/* Mobile menu: 250ms ease */

/* NOT allowed: scroll-triggered fade-ins, parallax, loading animations,
   text animations, image zoom on hover, any JS animation library */
```

### Responsive Breakpoints

```css
/* Desktop: 1024px+ */
/* Tablet: 768px - 1023px */
/* Mobile: below 768px */
```

- Hero headline scales via clamp()
- 2-column layouts stack to single column on mobile
- Section padding reduces (120px → 80px → 60px)
- Nav collapses to hamburger at 768px
- Specialty cards: 3-col grid → single column stack

### Photography Direction

**For the build, use placeholder images with these specifications:**

- **Headshot placeholder:** aspect ratio 3:4, will be a natural-light portrait. For now, use a solid `--warm-charcoal` block with "HEADSHOT" text or a quality placeholder service.
- **Office placeholder:** aspect ratio 16:9, will be a minimal therapy office. Same placeholder treatment.
- **Texture/environment images:** Used sparingly as section backgrounds at very low opacity. Redwood bark, eucalyptus, fog, concrete with moss. Source from Unsplash with Oakland/East Bay nature searches. Desaturate to match palette.

**No stock photography that reads as stock.** No group photos, no hands-on-coffee, no sunsets, no stacked rocks, no leaf close-ups with dewdrops.

---

## Sitemap

```
/                           Homepage
/about                      About Maren
/trauma-ptsd                Specialty: Trauma & PTSD
/anxiety                    Specialty: Anxiety
/burnout                    Specialty: Burnout & High-Achiever Stress
/relationship-patterns      Specialty: Relationship Patterns
/life-transitions           Specialty: Life Transitions
/how-i-work                 Approach: EMDR, IFS, Somatic
/fees                       Fees & FAQ
/contact                    Contact & Schedule Consultation
/blog                       Blog Index
/blog/what-emdr-actually-looks-like     Blog Post 1
/blog/when-therapy-stops-working        Blog Post 2
/blog/burnout-is-not-depression         Blog Post 3
/berkeley                   Geo: Therapist in Berkeley, CA
/san-francisco              Geo: Online Therapist in San Francisco
/walnut-creek               Geo: Therapist near Walnut Creek, CA
/alameda                    Geo: Therapist near Alameda, CA
```

**Total: 18 pages** (10 core + 3 blog posts + 4 geo pages + blog index)

---

## Build Order

1. **Scaffold:** Astro project, install dependencies, configure
2. **Global styles:** CSS custom properties (colors, typography, spacing), font loading
3. **Base layout:** BaseLayout.astro with SEO meta tags, Open Graph, JSON-LD
4. **Navigation:** Header component with scroll behavior, mobile menu, Services dropdown
5. **Footer:** Footer component
6. **Homepage:** All sections, top to bottom
7. **About page**
8. **Specialty pages** (build one, then template the rest): /trauma-ptsd first, then /anxiety, /burnout, /relationship-patterns, /life-transitions
9. **How I Work page**
10. **Fees & FAQ page** (with accordion component)
11. **Contact page** (with SimplePractice embed placeholder)
12. **Blog index + 3 blog posts** (create a blog post layout, then populate)
13. **Geo pages** (build one, template the rest): /berkeley first, then /san-francisco, /walnut-creek, /alameda
14. **SEO:** XML sitemap, robots.txt, canonical URLs, structured data
15. **Responsive pass:** Test every page at 375px, 768px, 1024px, 1440px
16. **Lighthouse audit:** Target 95+ across all categories
17. **Showcase badge:** Subtle "Showcase build by Stillpoint" badge in footer linking to stillpoint.design

---

## SEO Configuration

### Structured Data (JSON-LD)

Include on every page in BaseLayout:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Maren Voss Therapy",
  "description": "EMDR, trauma, and anxiety therapy in Oakland, CA",
  "url": "https://showcase.stillpoint.design",
  "telephone": "(510) 555-0173",
  "email": "maren@marenvosstherapy.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5432 College Ave, Suite 204",
    "addressLocality": "Oakland",
    "addressRegion": "CA",
    "postalCode": "94618"
  },
  "priceRange": "$$",
  "openingHours": "Mo-Th 09:00-18:00"
}
```

Also include Person schema:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Maren Voss",
  "jobTitle": "Licensed Marriage and Family Therapist",
  "credential": "LMFT",
  "url": "https://showcase.stillpoint.design",
  "worksFor": {
    "@type": "LocalBusiness",
    "name": "Maren Voss Therapy"
  }
}
```

### Meta Tags Per Page

(See the complete copy document for all title tags and meta descriptions.)

**Open Graph defaults:**
- og:type = website
- og:site_name = Maren Voss Therapy
- og:image = (create a default OG image: dark bg, "Maren Voss, LMFT" in DM Serif Display, "EMDR & Trauma Therapist · Oakland, CA" beneath)

### Technical SEO
- XML sitemap at /sitemap.xml (Astro handles this with @astrojs/sitemap)
- robots.txt allowing all crawlers
- Canonical URLs on every page
- Semantic HTML throughout (proper heading hierarchy, nav, main, article, section, footer)

---

## Copy Reference

All page copy is in the companion document: **Maren_Voss_Complete_Site_Copy.md**

That document contains every headline, every paragraph, every meta tag, organized by page and section. Copy it exactly. Do not paraphrase, shorten, or "improve" the copy. It was written in a specific voice and tone.

---

## Important Notes

- **This is a fictional showcase site.** Include a subtle but clear "Showcase build by Stillpoint" indicator in the footer. Link it to stillpoint.design.
- **No real booking system.** The "Schedule a Free Consultation" CTA buttons should link to the /contact page. The SimplePractice widget on /contact is a placeholder (use a styled placeholder div noting where the widget embed would go).
- **No real contact form submission.** The contact page exists for layout demonstration. Forms don't need to actually submit.
- **All phone numbers and emails are fictional.** (510) 555-0173 and maren@marenvosstherapy.com.
- **The office address is fictional.** 5432 College Ave, Suite 204, Oakland, CA 94618. (College Ave in Rockridge is a real street, but this specific address is made up.)
- **Photography:** Use placeholder blocks or high-quality Unsplash images that match the photography direction. When sourcing Unsplash images, search for: Oakland redwoods, eucalyptus bark texture, East Bay hills fog, concrete texture natural, minimal therapy office, professional woman natural light portrait.
- **Sanity CMS integration happens after the static build is complete.** Build the site with hardcoded content first. CMS integration is a separate phase.
- **Domain:** This will be deployed to showcase.stillpoint.design. Configure base URL accordingly.
