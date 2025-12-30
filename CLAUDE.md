# CLAUDE.md - Vizibly Redesign Project

Dit bestand geeft Claude Code richtlijnen voor het werken aan deze codebase.

---

## KRITISCH: Tekst Regels (ALTIJD VOLGEN!)

**NOOIT em-dashes (—) of en-dashes (–) gebruiken!**

| Verboden | Gebruik in plaats daarvan |
|----------|---------------------------|
| `—` (em-dash) | `.` (punt) of `,` (komma) of herformuleren |
| `–` (en-dash) | `-` (hyphen) voor samengestelde woorden |

**Voorbeelden:**

```
❌ FOUT: "Vizibly zorgt dat je gevonden wordt — in Google én AI"
✅ GOED: "Vizibly zorgt dat je gevonden wordt. In Google én AI."

❌ FOUT: "Een 360–graden aanpak"
✅ GOED: "Een 360-graden aanpak"
```

**Bij ELKE nieuwe tekst:** Controleer of er geen em-dash of en-dash in zit!

---

## Project Overview

**Project:** Website redesign voor Vizibly, een Nederlands SEO bureau
**Design:** Brutalist design aesthetic met strikte regels
**Taal:** Nederlands (nl-NL) - alle content en UI tekst is in het Nederlands

### Tech Stack

| Technologie | Versie |
|-------------|--------|
| Next.js | 16.0.10 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| UI Components | shadcn/ui |

### Development Commands

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Linting
```

---

## Layout Templates (KRITISCH - Altijd Gebruiken!)

Bij het maken van nieuwe pagina's **MOET** je de juiste layout template gebruiken. Dit zorgt voor consistentie en bespaart veel code.

### Welk Template Wanneer?

| Pagina Type | Template | Wanneer Gebruiken |
|-------------|----------|-------------------|
| Blog artikel | `BlogArticleLayout` | Nieuwe artikelen in `/vizie`, SEO tips, how-to's |
| Case study | `CaseStudyLayout` | Klant succesverhalen, resultaten, interviews |
| Dienst pagina | `ServicePageLayout` | Nieuwe diensten zoals SEO, Linkbuilding, etc. |

### Quick Reference

```tsx
// Blog artikel
import { BlogArticleLayout, ArticleH2, ArticleParagraph } from '@/components/layouts';

// Case study
import { CaseStudyLayout, CaseSection, CaseStatsList } from '@/components/layouts';

// Dienst pagina
import { ServicePageLayout, ServiceWhatIsSection, ServiceWhySection } from '@/components/layouts';
```

### Volledige Documentatie

Zie `TEMPLATES.md` voor uitgebreide voorbeelden en alle beschikbare props/helpers.

### Voorbeeld: Nieuw Blog Artikel

```tsx
// app/nieuw-artikel/page.tsx
import type { Metadata } from 'next';
import { BlogArticleLayout, ArticleIntro, ArticleH2, ArticleParagraph } from '@/components/layouts';

export const metadata: Metadata = {
  title: 'Artikel Titel | Vizibly',
  description: 'Beschrijving...',
};

export default function NieuwArtikel() {
  return (
    <BlogArticleLayout
      title="De Volledige Titel"
      category="SEO BASICS"
      readingTime="5 min leestijd"
      featuredImage="/blog/image.jpg"
      featuredImageAlt="Alt tekst"
    >
      <ArticleIntro>Intro tekst...</ArticleIntro>
      <ArticleH2>Eerste Sectie</ArticleH2>
      <ArticleParagraph>Content...</ArticleParagraph>
    </BlogArticleLayout>
  );
}
```

---

## Afbeeldingen (KRITISCH)

**NOOIT externe URLs gebruiken voor afbeeldingen!** Alle afbeeldingen moeten lokaal in de codebase staan.

### Regels

1. **Geen externe URLs** - Gebruik NOOIT `https://vizibly.nl/wp-content/...` of andere externe URLs
2. **Altijd lokaal** - Download afbeeldingen en plaats ze in `/public/`
3. **Georganiseerde structuur** - Gebruik de juiste subfolders
4. **Altijd blur placeholder** - Voorkomt layout shift en zichtbare image pop-in
5. **Priority voor above-the-fold** - Eerste/featured afbeeldingen krijgen `priority`

### Folder Structuur

| Folder | Inhoud |
|--------|--------|
| `/public/team/` | Teamfoto's (roy.webp, vizibly-sports.webp) |
| `/public/images/` | Algemene afbeeldingen voor pagina's |
| `/public/blog/` | Blog artikel afbeeldingen |
| `/public/cases/` | Case study afbeeldingen |
| `/public/clients/` | Klant logo's |

### Voorbeeld

```tsx
// ❌ FOUT - externe URL
src="https://vizibly.nl/wp-content/uploads/2024/02/Foto-Roy.jpg.webp"

// ✅ GOED - lokaal pad
src="/team/roy.webp"
```

### Image Component Gebruik (VERPLICHT)

**Elke Image component MOET placeholder en blurDataURL hebben!**

```tsx
// Standaard blur data URL - kopieer deze voor alle afbeeldingen:
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q==";
```

**Above-the-fold (hero/featured image):**

```tsx
<Image
  src="/blog/seo-strategie.jpg"
  alt="SEO Strategie"
  fill
  priority                           // VERPLICHT voor above-the-fold
  placeholder="blur"                 // VERPLICHT
  blurDataURL={BLUR_DATA_URL}        // VERPLICHT
  className="object-cover"
/>
```

**Below-the-fold (overige afbeeldingen):**

```tsx
<Image
  src="/blog/linkbuilding.jpg"
  alt="Linkbuilding"
  fill
  placeholder="blur"                 // VERPLICHT
  blurDataURL={BLUR_DATA_URL}        // VERPLICHT
  className="object-cover"
/>
```

### Wanneer priority gebruiken?

| Situatie | priority? |
|----------|-----------|
| Hero/featured image bovenaan pagina | Ja |
| Eerste afbeelding in blog artikel | Ja |
| Afbeeldingen in cards/grids lager op pagina | Nee |
| Afbeeldingen in footer/CTA sectie | Nee |

### Uitzondering: OpenGraph & Structured Data

OpenGraph images en Schema.org structured data MOETEN absolute URLs gebruiken voor SEO:

```tsx
// Dit is OK voor openGraph/structured data:
images: [{ url: 'https://vizibly.nl/blog/seo-strategie.jpg' }]
```

---

## Documentation Hierarchy

Raadpleeg documentatie in deze volgorde:

| Prioriteit | Bestand | Inhoud |
|------------|---------|--------|
| 1 | `STYLE_GUIDE.md` | Complete design system V2.3 - kleuren, typografie, componenten, blog artikelen |
| 2 | `CLAUDE.md` | Project overview, architectuur, technische implementatie |
| 3 | `app/page.tsx` | Reference implementation - kopieer patronen hieruit |
| 4 | `globals.css` | CSS variabelen, animaties, custom classes |

---

## Project Status

### Completed Pages

| Pagina | Route | Status |
|--------|-------|--------|
| Homepage | `/` | Done |
| SEO Strategie | `/seo-strategie` | Done |
| Over Ons | `/over-ons` | Done |
| Contact | `/contact` | Done |
| Blog/Vizie | `/vizie` | Done |
| SEO Copy | `/seo-copy` | Done |
| Linkbuilding | `/linkbuilding` | Done |
| Local SEO | `/local-seo` | Done |
| Design & Techniek | `/design-techniek` | Done |
| Google Ads | `/google-ads-sea` | Done |
| Cases | `/cases` | Done |
| Full Service SEO | `/full-service-seo` | Done |

### Completed Components

| Component | Bestand | Beschrijving |
|-----------|---------|--------------|
| Navigation | `navigation.tsx` | Sticky header met mobile menu |
| Stats | `stats-only.tsx` | Animated stats counter (homepage) |
| Cases Stats | `cases-stats.tsx` | Animated stats counter (cases pagina) |
| Clients Carousel | `clients-carousel-standalone.tsx` | Infinite scroll logo's |
| Testimonials | `testimonials-section.tsx` | Google reviews (6 reviews, 3-kolom grid) |
| CTA with Image | `cta-with-image.tsx` | CTA sectie met foto |
| Footer | (inline in pages) | 4-kolom footer |

### To Build

- Geen - alle pagina's zijn af!

### Blog Artikelen (Gemigreerd van WordPress)

| Artikel | Route | Status |
|---------|-------|--------|
| SEO strategie: zo bouw je aan duurzame groei via Google | `/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google` | Done |
| Een snelle WordPress website: technische optimalisatie | `/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt` | Done |
| Waarom SEO relevanter is dan ooit ondanks AI | `/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai` | Done |
| 12 bewezen manieren voor fysiotherapeuten in Google | `/12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google` | Done |
| SEO voor dakdekkers: bovenaan in Google | `/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google` | Done |
| SEO uitbesteden of zelf doen (2025) | `/seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten` | Done |
| SEO mythe ontkracht: meer links = hogere rankings | `/seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings` | Done |
| Word gevonden door AI: de toekomst van SEO is GEO | `/word-gevonden-door-ai-de-toekomst-van-seo-is-geo` | Done |
| SEO voor beginners: belangrijkste termen uitgelegd | `/seo-voor-beginners-de-belangrijkste-termen-uitgelegd` | Done |

**Referentie artikel:** `app/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt/page.tsx`

### Case Study Pagina's

| Case | Route | Status |
|------|-------|--------|
| Online Bloemist | `/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet` | Done |
| Technische Webshop | `/145-omzet-uit-organisch-verkeer-voor-technische-webshop` | Done |
| Tak Makelaardij | `/klantinterview-seo-voor-een-makelaarskantoor` | Done |
| Dakdekker Haarlem | `/seo-succesverhaal-dakdekker-in-haarlem` | Done |

**Referentie case:** `app/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet/page.tsx`

**Key Features:**
- Breadcrumb navigatie direct onder header
- Hero met "CASE STUDY" of "KLANTINTERVIEW" label (text-black/60)
- Featured image met 12px lime shadow
- Meerdere content secties (elk met border-b-4)
- Quote blocks met border-left voor klantinterviews
- Resultaten lijsten met ▸ bullets
- Final CTA met 2 buttons (Full Service SEO + Contact)

---

## Blog URL Structuur (KRITISCH)

**Blog artikelen staan op ROOT niveau, NIET onder /vizie/!**

Dit is essentieel voor SEO omdat:
1. De originele URLs op vizibly.nl zijn al geïndexeerd door Google
2. URL wijzigingen verliezen bestaande SEO waarde
3. Backlinks naar originele URLs zouden 404 geven

**Correcte structuur:**
```
/vizie                    -> Blog listing pagina
/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google  -> Artikel (ROOT niveau!)
/een-snelle-wordpress-website-technische-optimalisatie   -> Artikel (ROOT niveau!)
```

**FOUT:**
```
/vizie/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google  -> VERKEERD!
```

Bij het maken van nieuwe blog artikelen:
1. Maak een map aan op ROOT niveau: `/app/[artikel-slug]/page.tsx`
2. Gebruik de exacte slug van de originele URL
3. Link vanuit `/vizie` naar `/${slug}` (niet `/vizie/${slug}`)

## Case Study URL Structuur (KRITISCH)

**Case study pagina's staan op ROOT niveau, NIET onder /cases/!**

Dit is essentieel voor SEO omdat:
1. De originele URLs op vizibly.nl zijn al geïndexeerd door Google
2. URL wijzigingen verliezen bestaande SEO waarde
3. Backlinks naar originele URLs zouden 404 geven

**Correcte structuur:**
```
/cases                   -> Cases overzichtspagina
/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet  -> Case (ROOT niveau!)
/klantinterview-seo-voor-een-makelaarskantoor  -> Case (ROOT niveau!)
```

**FOUT:**
```
/cases/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet  -> VERKEERD!
```

Bij het maken van nieuwe case studies:
1. Maak een map aan op ROOT niveau: `/app/[case-slug]/page.tsx`
2. Gebruik de exacte slug van de originele URL
3. Link vanuit `/cases` naar `/${slug}` (niet `/cases/${slug}`)
4. Voeg breadcrumb toe: `← Alle cases` die linkt naar `/cases`

---

## File Architecture

```
vizibly-redesign/
├── app/
│   ├── globals.css              # CSS variabelen, animaties, typography classes
│   ├── layout.tsx               # Root layout met fonts & metadata
│   ├── page.tsx                 # Homepage (reference implementation)
│   ├── contact/page.tsx         # Contact pagina
│   ├── over-ons/page.tsx        # Over Ons pagina
│   ├── seo-strategie/page.tsx   # SEO Strategie pagina
│   ├── vizie/page.tsx           # Blog listing pagina
│   ├── seo-copy/page.tsx        # SEO Copy dienst pagina
│   ├── linkbuilding/page.tsx    # Linkbuilding dienst pagina
│   ├── local-seo/page.tsx       # Local SEO dienst pagina
│   ├── design-techniek/page.tsx # Design & Techniek pagina
│   ├── google-ads-sea/page.tsx  # Google Ads dienst pagina
│   ├── cases/page.tsx           # Cases overzichtspagina
│   ├── online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet/page.tsx  # Case study
│   ├── 145-omzet-uit-organisch-verkeer-voor-technische-webshop/page.tsx  # Case study
│   ├── klantinterview-seo-voor-een-makelaarskantoor/page.tsx  # Case study
│   └── seo-succesverhaal-dakdekker-in-haarlem/page.tsx  # Case study
│
├── components/
│   ├── navigation.tsx           # Sticky header + mobile menu
│   ├── stats-only.tsx           # Animated stats counter (homepage)
│   ├── cases-stats.tsx          # Animated stats counter (cases pagina)
│   ├── clients-carousel-standalone.tsx  # Infinite scroll client logos
│   ├── testimonials-section.tsx # Google reviews sectie (6 reviews)
│   ├── cta-with-image.tsx       # CTA met foto
│   └── ui/                      # shadcn/ui components
│       ├── accordion.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       └── card.tsx
│
├── lib/
│   └── utils.ts                 # cn() utility (clsx + tailwind-merge)
│
├── public/
│   ├── clients/                 # Client logo's
│   ├── cases/                   # Case study afbeeldingen
│   ├── logo-brutalist-white.svg # Wit logo
│   └── Bestaande afbeeldingen/  # Lokale afbeeldingen
│
├── STYLE_GUIDE.md               # Complete design system V2.3
└── CLAUDE.md                    # Dit bestand
```

---

## Design System V2.3 - Quick Reference

**Volledige documentatie: zie `STYLE_GUIDE.md`**

### Kleuren

| Kleur | Hex | Gebruik |
|-------|-----|---------|
| Zwart | `#000000` | Tekst, borders, achtergrond |
| Wit | `#ffffff` | Achtergrond, cards |
| Lime/Accent | `#CCFF00` | Highlights, CTA's, shadows |

### Kleur Contrast Regels (KRITISCH)

**NOOIT lime tekst op witte achtergrond!** Lime (#CCFF00) heeft te weinig contrast met wit.

| Achtergrond | Toegestane tekstkleuren | Verboden |
|-------------|------------------------|----------|
| Wit | Zwart, zwart/70 | ❌ Lime tekst |
| Zwart | Wit, lime | ✓ Alles OK |
| Lime | Zwart | ❌ Witte tekst |

**Hover states op witte achtergrond:**
```jsx
// ❌ FOUT - onleesbaar
className="text-black group-hover:text-accent"

// ✓ GOED - behoud zwarte tekst, gebruik andere hover indicator
className="text-black group-hover:underline"
className="text-black"  // card zelf heeft al hover effect
```

### Typografie

**Base font-size:** 14px (ingesteld in globals.css)

| Class | Mobile | Desktop (lg:) |
|-------|--------|---------------|
| `.text-brutalist-hero` | 36px | 72px |
| `.text-brutalist-h1` | 28px | 54px |
| `.text-brutalist-h2` | 24px | 42px |
| `.text-brutalist-h3` | 20px | 32px |

**Body text:** `text-base font-bold lg:text-lg xl:text-xl`

**KRITISCH:** Alle body tekst MOET `font-bold` hebben!

### Borders & Shadows

**Alle borders:** 4px dik, geen uitzonderingen

```jsx
// Lime shadow - stats, logo's, featured
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}

// Zwarte shadow - service cards, standaard
style={{ boxShadow: '8px 8px 0 0 #000000' }}

// Grote shadow - case cards, featured images
style={{ boxShadow: '12px 12px 0 0 #000000' }}
```

### Container

```jsx
<div className="mx-auto max-w-screen-2xl px-6">
```

### Sectie Padding

```jsx
// Standaard
className="py-24 lg:py-32"

// Compact
className="py-16 lg:py-20"

// Groot
className="py-28 lg:py-40"
```

---

## Critical Implementation Rules

### 1. NO Rounded Corners

```css
--radius: 0px;
* { border-radius: 0 !important; }
```

### 2. Sticky Header Fix

```css
/* globals.css - GEBRUIK overflow-x: clip, NIET hidden! */
html {
  overflow-x: clip;  /* hidden breekt sticky positioning */
}
```

### 3. Accent Highlight

```jsx
<span className="relative inline-block">
  <span className="absolute -inset-1 bg-accent"></span>  {/* -inset-1, niet -inset-2! */}
  <span className="relative">gehighlight</span>
</span>
```

### 4. Background Patterns

```jsx
// Zwarte secties - diagonaal patroon
<div className="absolute inset-0 opacity-[0.03]" style={{
  backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
}}></div>

// Witte hero secties - grid patroon
<div className="absolute inset-0 opacity-5" style={{
  backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
}}></div>

// Witte content secties - GEEN patroon
```

---

## Section Templates

### Zwarte Sectie

```jsx
<section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
  {/* Diagonal pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    {/* Content */}
  </div>
</section>
```

### Witte Sectie

```jsx
<section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
  <div className="mx-auto max-w-screen-2xl px-6">
    {/* Content */}
  </div>
</section>
```

### Accent/Lime Sectie (Final CTA)

```jsx
<section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl text-center">
      {/* Content */}
    </div>
  </div>
</section>
```

---

## Button Patterns

```jsx
// Primary (default achtergrond)
<Button size="lg" asChild className="text-base px-8 py-5">
  <Link href="/contact">
    NEEM CONTACT OP
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>

// Op zwarte achtergrond
<Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base">
  <Link href="/contact">NEEM CONTACT OP</Link>
</Button>

// Final CTA (op lime achtergrond)
<Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
  <Link href="/contact">
    LET'S GO!!
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
```

---

## Heading Structure

```jsx
// Label boven kop
<p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
  SECTION LABEL
</p>

// Hoofdkop
<h2 className="mb-8 text-brutalist-h1 text-black">
  Sectie Titel
</h2>

// Accent lijn
<div className="h-1 w-32 bg-accent mb-8"></div>
```

---

## Hover Effects

```jsx
// Lift effect (stats, testimonials)
className="transition-all duration-300 hover:-translate-y-1"

// Lift + rotate (logo's, clients)
className="transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:rotate-1"

// Shadow shift (service cards)
className="transition-all hover:translate-x-1 hover:translate-y-1"

// Icon rotate in cards
className="group-hover:bg-black group-hover:text-accent group-hover:rotate-3"

// Grayscale naar kleur
className="grayscale group-hover:grayscale-0 transition-all duration-300"
```

---

## Content Rules

### Tekst

- **Geen em-dash (—) of en-dash (–)** - gebruik hyphen (-) voor samengestelde woorden
- ✅ "360-graden", "data-driven", "on-page"
- ❌ "analysis — detailed approach"

### Icons

**Gebruik ALTIJD Lucide Icons, NOOIT emoticons!**

```tsx
import {
  Search,      // Analyse
  FileText,    // Content
  Link2,       // Linkbuilding
  Code,        // Techniek
  MapPin,      // Local SEO
  Megaphone,   // Google Ads
  ArrowRight,  // CTAs
  Phone,       // Contact
  Mail,        // Email
  Star,        // Reviews
  Check,       // Checkmarks
} from 'lucide-react';
```

**Icon sizes:**
- `h-4 w-4` - kleine accenten
- `h-5 w-5` - buttons
- `h-6 w-6` - navigatie, lijsten
- `h-7 w-7` - cards
- `h-8 w-8` - grote cards

---

## SEO & Metadata

### Page Title Regels (KRITISCH)

**Format:** `Dienst/onderwerp | USP of prijs`

| Regel | Voorbeeld |
|-------|-----------|
| Format | "Dienst \| USP/prijs" met pipe als scheidingsteken |
| Max 50 tekens | "SEO teksten laten schrijven \| Vanaf €70" |
| Concrete USP | Prijs, score, belofte - iets meetbaars/aantrekkelijks |
| Nederlandse schrijfwijze | Alleen eerste woord hoofdletter, geen title case |
| "Vizibly" alleen op | Homepage, Over Ons, Contact |

**Huidige Page Titles (referentie):**

| Pagina | Title |
|--------|-------|
| Homepage | Vizibly: jouw SEO specialist |
| SEO Strategie | SEO strategie \| Data-gedreven groeiplan |
| SEO Copy | SEO teksten laten schrijven \| Vanaf €70 |
| Linkbuilding | Linkbuilding uitbesteden \| Vanaf €200/maand |
| Local SEO | Local SEO \| Word #1 in jouw regio |
| Design & Techniek | Technische SEO \| 100/100 PageSpeed score |
| Google Ads | Google Ads specialist \| Direct meer leads |
| Full Service SEO | Full service SEO \| Vanaf €500/maand |
| Cases | SEO cases \| Bewezen resultaten |
| Vizie | Vizie \| SEO tips en inzichten |
| Over Ons | Over Vizibly |
| Contact | Contact - Vizibly |

**Voorbeelden:**

```
✅ GOED:
- "SEO teksten laten schrijven | Vanaf €70" (wervend met prijs)
- "Linkbuilding uitbesteden | Vanaf €200/maand" (wervend met prijs)
- "Technische SEO | 100/100 PageSpeed score" (wervend met score)
- "Local SEO | Word #1 in jouw regio" (wervend met belofte)

❌ FOUT:
- "SEO Strategie - Vizibly" (geen Vizibly op dienstpagina's, niet wervend)
- "Linkbuilding diensten" (niet wervend, geen USP)
- "SEO Teksten Laten Schrijven" (title case)
```

### Metadata Template

Elke pagina moet bevatten:

```tsx
// Next.js Metadata export
export const metadata: Metadata = {
  title: 'Zoekterm vooraan, max 50 tekens',  // Geen Vizibly behalve homepage/over-ons/contact
  description: 'Beschrijving...',
  openGraph: {
    title: 'Zoekterm vooraan, max 50 tekens',
    description: 'Beschrijving...',
    url: 'https://vizibly.nl/pagina/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

// JSON-LD structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service", // of Organization, FAQPage, etc.
  // ...
};

// In return:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

---

## Testing Checklist

Voordat een pagina klaar is:

### Design
- [ ] Alle cards hebben brutalist shadows (8px+ offset)
- [ ] Hover effects op alle interactieve elementen
- [ ] Geen afgeronde hoeken
- [ ] Alle borders 4px dik
- [ ] Alleen zwart/wit/lime kleuren

### Responsiviteit
- [ ] Getest op 375px (mobile)
- [ ] Getest op 768px (tablet)
- [ ] Getest op 1440px (desktop)
- [ ] Getest op 1920px+ (large desktop)

### Technisch
- [ ] Sticky header werkt (overflow-x: clip)
- [ ] Images gebruiken Next.js Image component
- [ ] Heading hierarchy correct (geen skipped levels)
- [ ] Container is max-w-screen-2xl

### Content
- [ ] Alle tekst heeft font-bold
- [ ] Responsive text classes (lg:, xl:)
- [ ] Geen emoticons (alleen Lucide icons)
- [ ] Geen em/en dashes

---

## Quick Reference

### Meest Gebruikte Classes

```jsx
// Container
"mx-auto max-w-screen-2xl px-6"

// Sectie zwart
"relative border-y-4 border-black bg-black py-24 text-white lg:py-32"

// Sectie wit
"relative border-b-4 border-black bg-white py-24 lg:py-32"

// Body text
"text-base font-bold lg:text-lg xl:text-xl"

// Label
"text-base font-bold uppercase tracking-wider"

// Lime shadow
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}

// Zwarte shadow
style={{ boxShadow: '8px 8px 0 0 #000000' }}
```

### Belangrijke Regels

| Regel | Waarde |
|-------|--------|
| Border dikte | 4px |
| Shadow offset | 8px minimum |
| Base font-size | 14px |
| Container max-width | 1536px (screen-2xl) |
| Accent kleur | #CCFF00 |
| Radius | 0px (geen rounded corners) |

---

*Laatst bijgewerkt: December 2025*
*Design System Versie: 2.3*
