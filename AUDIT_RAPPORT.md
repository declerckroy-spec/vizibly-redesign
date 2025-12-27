# Vizibly Codebase Audit Rapport

**Datum:** December 2025
**Project:** vizibly-redesign
**Doel:** Inconsistenties identificeren en codebase voorbereiden voor toekomstige wijzigingen
**Status:** 🔄 In uitvoering

---

## 0. Voortgang Tracking

### ✅ Voltooid
| Item | Datum | Impact |
|------|-------|--------|
| `lib/config.ts` - Site configuratie | 26-12-2025 | Centrale plek voor bedrijfsinfo |
| `components/footer.tsx` - Footer component | 26-12-2025 | 49 pagina's gemigreerd |
| Footer migratie alle pagina's | 26-12-2025 | ~3000 regels code bespaard |

### ✅ Voltooid - Fase 1B: Reusable Components
| Item | Status | Pagina's |
|------|--------|----------|
| `components/final-cta.tsx` | ✅ Voltooid | 20+ |
| `components/faq-section.tsx` | ✅ Voltooid | 5+ |
| `components/related-articles.tsx` | ✅ Voltooid | 22 |
| `components/benefit-cards.tsx` | ✅ Voltooid | 8+ |

### ✅ Voltooid - Migratie naar nieuwe componenten
| Categorie | Aantal | Components |
|-----------|--------|------------|
| Service pagina's | 6 | FinalCTA, FAQSection |
| Branche pagina's | 10 | FinalCTA |
| Blog artikelen | 21 | FinalCTA, RelatedArticles |
| Case studies | 4 | FinalCTA (dual buttons) |
| Overige pagina's | 2 | FinalCTA |
| **Totaal** | **43** | |

### ⏳ Gepland - Fase 2: Consolidatie
| Item | Status |
|------|--------|
| Stats componenten consolideren | Gepland |
| Clients carousel consolideren | Gepland |
| Shadow tokens | Gepland |

### 📋 Toekomst - Fase 3: Layout Templates
| Item | Status |
|------|--------|
| BlogArticleLayout.tsx | Toekomst |
| CaseStudyLayout.tsx | Toekomst |
| ServicePageLayout.tsx | Toekomst |

---

## 1. Executive Summary

### Algemene Gezondheid: 7/10 (was 6/10)

De codebase is functioneel en het design is visueel sterk, maar er zijn significante structurele problemen die onderhoud moeilijk maken. De grootste uitdagingen zitten in duplicatie en hardcoded values.

### Top 3 Grootste Problemen

| # | Probleem | Impact | Status |
|---|----------|--------|--------|
| 1 | ~~490+ hardcoded contactinfo/bedrijfsnaam~~ | ~~KRITIEK~~ | ✅ OPGELOST - lib/config.ts |
| 2 | ~~Footer niet gecomponentiseerd~~ | ~~KRITIEK~~ | ✅ OPGELOST - components/footer.tsx |
| 3 | **4 verschillende stats componenten** met afwijkende styling | Hoog | ⏳ Gepland (Fase 2) |

### Quick Wins Status
1. ✅ Footer component maken - VOLTOOID
2. ✅ Contactinfo centraliseren in config - VOLTOOID
3. ⏳ Stats componenten consolideren - GEPLAND

---

## 2. Stack & Configuratie Overzicht

### Tech Stack

| Component | Versie | Status |
|-----------|--------|--------|
| Next.js | 16.0.10 | App Router |
| React | 19.2.1 | Actueel |
| TypeScript | 5 | Goed |
| Tailwind CSS | 4.1.18 | CSS-first config |
| shadcn/ui | - | 4 componenten |
| Framer Motion | 12.23.26 | Animaties |

### Styling Configuratie

**globals.css bevat:**
- CSS variabelen voor kleuren (--accent: #ccff00, --primary: #000000, etc.)
- Custom typography classes (.text-brutalist-hero, h1, h2, h3)
- Basis brutalist styling (borders, scrollbar, animaties)
- Base font-size: 14px

**Geen tailwind.config.ts** - Tailwind 4 gebruikt CSS-first configuratie

### Structuur Overzicht

```
vizibly-redesign/
├── app/                    # 55 pagina's/routes
│   ├── page.tsx           # Homepage (reference implementation)
│   ├── [dienst]/          # 8 dienstpagina's
│   ├── [blog-artikel]/    # 22 blog artikelen
│   ├── [case-study]/      # 4 case studies
│   └── [branche]/         # 12 branche pagina's
│
├── components/            # 11 componenten
│   ├── navigation.tsx     # Gedeeld component
│   ├── stats-*.tsx        # 4 DUPLICATES!
│   ├── clients-*.tsx      # 2 DUPLICATES!
│   ├── testimonials-section.tsx
│   ├── cta-with-image.tsx
│   └── ui/               # 4 shadcn componenten
│
├── lib/utils.ts          # cn() utility
├── public/               # Afbeeldingen
├── STYLE_GUIDE.md        # Design documentatie
└── CLAUDE.md             # Project documentatie
```

---

## 3. Kritieke Issues (MOET gefixed)

### Issue #1: Hardcoded Contactinformatie (KRITIEK)

**Probleem:** Bedrijfsnaam, email, telefoon, adres staan hardcoded in 50+ bestanden.

**Locaties (voorbeelden):**
- `app/page.tsx:602-616` - Footer contact info
- `app/contact/page.tsx:85-112` - Contact cards
- Elke pagina met footer

**Voorbeelden hardcoded waarden:**
```tsx
// In 50+ bestanden:
<li>Vizibly</li>
<li>'t Zanddorp 55</li>
<li>4335 AE Middelburg</li>
<li>0628206410</li>
<li>info@vizibly.nl</li>
<li>KvK: 68478143</li>
```

**Impact:** Bij wijziging van contactinfo moeten 50+ bestanden handmatig worden aangepast.

**Oplossing:**
```tsx
// lib/config.ts
export const siteConfig = {
  name: 'Vizibly',
  address: {
    street: "'t Zanddorp 55",
    postal: '4335 AE',
    city: 'Middelburg',
  },
  phone: '0628206410',
  phoneDisplay: '06 282 064 10',
  email: 'info@vizibly.nl',
  kvk: '68478143',
  url: 'https://vizibly.nl',
};
```

---

### Issue #2: Footer Niet Gecomponentiseerd (KRITIEK)

**Probleem:** De footer is inline gedefinieerd in elke pagina (waarschijnlijk copy-pasted).

**Bewijs:** `grep "<footer"` geeft 0 resultaten in components/, terwijl elke pagina een footer heeft.

**Locatie:** Inline in elke page.tsx (bijv. `app/page.tsx:559-621`)

**Impact:**
- Wijzigingen aan footer vereisen updates in 55 bestanden
- Risico op inconsistenties tussen pagina's
- Moeilijk te onderhouden

**Oplossing:** Maak `components/footer.tsx`

---

### Issue #3: Gedupliceerde Stats Componenten (HOOG)

**Probleem:** 4 verschillende versies van stats/counter componenten met afwijkende styling.

| Component | Container | Shadow | Hover | Status |
|-----------|-----------|--------|-------|--------|
| `stats-only.tsx` | max-w-screen-2xl | 8px lime | -translate-y-1 | Correct |
| `stats-counter.tsx` | **max-w-7xl** | **Geen** | **Geen** | AFWIJKEND |
| `stats-clients-combined.tsx` | max-w-screen-2xl | **4px zwart** | -translate-y-1 | AFWIJKEND |
| `cases-stats.tsx` | max-w-screen-2xl | **6px lime** | -translate-y-1 | AFWIJKEND |

**Locaties:**
- `components/stats-only.tsx` - Gebruikt op homepage
- `components/stats-counter.tsx:76` - Gebruikt max-w-7xl in plaats van screen-2xl
- `components/stats-clients-combined.tsx` - Combineert stats + carousel
- `components/cases-stats.tsx:67` - Gebruikt 6px shadow

**Oplossing:** Consolideer naar 1 component met props voor variaties.

---

### Issue #4: Gedupliceerde Clients Carousel (HOOG)

**Probleem:** 2 versies met verschillende styling.

| Component | Achtergrond | Shadow | Hover |
|-----------|-------------|--------|-------|
| `clients-carousel.tsx` | Wit | 4px zwart | -translate-y-1 |
| `clients-carousel-standalone.tsx` | Zwart | 8px lime | -translate-y-2 rotate-1 |

**Locaties:**
- `components/clients-carousel.tsx:102` - 4px zwart shadow
- `components/clients-carousel-standalone.tsx:107` - 8px lime shadow

**Impact:** Verschillende visuele weergave van dezelfde content.

**Oplossing:** Consolideer naar 1 component met `variant` prop.

---

### Issue #5: Hardcoded Box-Shadows (HOOG)

**Probleem:** 400+ inline style attributen met hardcoded hex kleuren voor shadows.

**Variaties gevonden:**
```tsx
style={{ boxShadow: '4px 4px 0 0 #000000' }}   // Te klein
style={{ boxShadow: '6px 6px 0 0 #CCFF00' }}   // Inconsistent
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}   // Standaard lime
style={{ boxShadow: '8px 8px 0 0 #000000' }}   // Standaard zwart
style={{ boxShadow: '12px 12px 0 0 #CCFF00' }} // Groot lime
style={{ boxShadow: '12px 12px 0 0 #000000' }} // Groot zwart
```

**Voorbeelden locaties:**
- `app/design-techniek/page.tsx:280` - 4px shadow (te klein per STYLE_GUIDE)
- `components/clients-carousel.tsx:102` - 4px shadow
- `app/local-seo/page.tsx:307` - 6px shadow

**Per STYLE_GUIDE.md:** Minimum shadow moet 6px zijn, maar 4px wordt nog gebruikt.

**Oplossing:** Definieer shadow tokens in CSS/Tailwind.

---

## 4. Container & Spacing Inconsistenties

### Container Inconsistenties

**Standaard per STYLE_GUIDE:** `max-w-screen-2xl` (1536px)

**Afwijkingen gevonden:**

| Container | Gebruik | Correct? |
|-----------|---------|----------|
| `max-w-screen-2xl` | Meeste secties | Ja |
| `max-w-7xl` | stats-counter.tsx | NEE |
| `max-w-6xl` | Homepage hero | Intentioneel |
| `max-w-5xl` | FAQ sectie, full-service-seo | Intentioneel |
| `max-w-4xl` | CTA secties, blog content | Intentioneel |
| `max-w-3xl` | Article content | Intentioneel |

**Kritieke fix:** `components/stats-counter.tsx:76` gebruikt max-w-7xl

### Sectie Padding Variaties

Gevonden padding combinaties:
- `py-16 lg:py-20` - Compact
- `py-16 lg:py-24` - Blog articles
- `py-20 lg:py-24` - Contact CTA
- `py-20 lg:py-28` - Sommige secties
- `py-24 lg:py-32` - Standaard
- `py-24 lg:py-36` - Cases
- `py-28 lg:py-40` - Intro section
- `py-32 lg:py-40` - Process sections
- `py-32 lg:py-48` - Extra groot

**Per STYLE_GUIDE:** 3 padding levels: compact (py-16/lg:py-20), standaard (py-24/lg:py-32), groot (py-28/lg:py-40)

---

## 5. Aanbevelingen

### A. Nieuwe Bestanden Aanmaken

#### 1. `lib/config.ts` - Site configuratie
```tsx
export const siteConfig = {
  name: 'Vizibly',
  tagline: 'SEO specialist die zorgt dat je gevonden wordt.',
  address: {
    street: "'t Zanddorp 55",
    postal: '4335 AE',
    city: 'Middelburg',
  },
  phone: {
    raw: '0628206410',
    display: '06 282 064 10',
  },
  email: 'info@vizibly.nl',
  kvk: '68478143',
  url: 'https://vizibly.nl',
  social: {},
};

export const navLinks = [
  { href: '/seo-strategie', label: 'SEO Strategie' },
  { href: '/seo-copy', label: 'SEO Copy' },
  { href: '/linkbuilding', label: 'Linkbuilding' },
  { href: '/local-seo', label: 'Local SEO' },
  { href: '/design-techniek', label: 'Design & Techniek' },
  { href: '/google-ads-sea', label: 'Google Ads' },
];
```

#### 2. `components/footer.tsx`
Extraheer footer uit page.tsx naar herbruikbaar component.

#### 3. CSS Tokens toevoegen aan globals.css
```css
:root {
  /* Shadows */
  --shadow-sm: 6px 6px 0 0;
  --shadow-md: 8px 8px 0 0;
  --shadow-lg: 12px 12px 0 0;

  /* Shadow colors */
  --shadow-lime: var(--shadow-md) var(--accent);
  --shadow-black: var(--shadow-md) var(--primary);
  --shadow-lime-lg: var(--shadow-lg) var(--accent);
  --shadow-black-lg: var(--shadow-lg) var(--primary);
}
```

### B. Componenten Consolideren

| Huidige Componenten | Consolideren naar |
|---------------------|-------------------|
| stats-only.tsx, stats-counter.tsx, cases-stats.tsx | `<Stats variant="default|compact" />` |
| clients-carousel.tsx, clients-carousel-standalone.tsx | `<ClientsCarousel variant="light|dark" />` |
| stats-clients-combined.tsx | Verwijderen, gebruik compositie |

### C. Componenten die Ontbreken

| Component | Beschrijving |
|-----------|--------------|
| `<Footer />` | Gedeelde footer |
| `<Section />` | Wrapper met correcte padding/borders |
| `<Container />` | Wrapper met max-w-screen-2xl |
| `<RelatedArticles />` | Herbruikbaar "Lees meer" component |
| `<FinalCTA />` | Gedeelde CTA sectie |

---

## 6. Concrete Actie Lijst

### Prioriteit 1: Kritieke Fixes (Direct uitvoeren)

| # | Actie | Bestand | Waarom |
|---|-------|---------|--------|
| 1 | Maak `lib/config.ts` met site configuratie | Nieuw bestand | Centrale plek voor alle bedrijfsinfo |
| 2 | Maak `components/footer.tsx` | Nieuw bestand | Stop duplicatie in 55 pagina's |
| 3 | Update `app/page.tsx` om Footer component te gebruiken | `app/page.tsx:559-621` | Reference implementation |
| 4 | Consolideer stats componenten | `components/stats-only.tsx` | Verwijder duplicatie |
| 5 | Verwijder `stats-counter.tsx` en `stats-clients-combined.tsx` | Delete files | Niet meer nodig |
| 6 | Consolideer clients carousel | `components/clients-carousel.tsx` | Verwijder duplicatie |

### Prioriteit 2: Shadow Tokens (Middenterm)

| # | Actie | Bestand | Waarom |
|---|-------|---------|--------|
| 7 | Voeg shadow tokens toe aan globals.css | `app/globals.css` | CSS variabelen voor shadows |
| 8 | Fix 4px shadows naar minimum 6px | Meerdere bestanden | Per STYLE_GUIDE minimum |
| 9 | Vervang hardcoded shadows door CSS variabelen | Alle pagina's | Onderhoud verbeteren |

### Prioriteit 3: Structuur Verbetering (Lange termijn)

| # | Actie | Bestand | Waarom |
|---|-------|---------|--------|
| 10 | Maak `<Section />` wrapper component | Nieuw bestand | Consistente sectie styling |
| 11 | Maak `<RelatedArticles />` component | Nieuw bestand | "Lees meer" sectie hergebruiken |
| 12 | Maak `<FinalCTA />` component | Nieuw bestand | CTA sectie hergebruiken |
| 13 | Update alle pagina's om Footer te gebruiken | 55 pagina's | Volledige migratie |

---

## 7. Voorgestelde globals.css Uitbreiding

```css
/* Toe te voegen aan :root in globals.css */
:root {
  /* Bestaande variabelen behouden... */

  /* Shadow tokens - NIEUW */
  --shadow-offset-sm: 6px 6px 0 0;
  --shadow-offset-md: 8px 8px 0 0;
  --shadow-offset-lg: 12px 12px 0 0;

  /* Spacing tokens - NIEUW */
  --section-py-compact: theme(spacing.16);
  --section-py-compact-lg: theme(spacing.20);
  --section-py-default: theme(spacing.24);
  --section-py-default-lg: theme(spacing.32);
  --section-py-large: theme(spacing.28);
  --section-py-large-lg: theme(spacing.40);
}

/* Shadow utility classes - NIEUW */
.shadow-brutalist-lime {
  box-shadow: var(--shadow-offset-md) var(--accent);
}

.shadow-brutalist-black {
  box-shadow: var(--shadow-offset-md) var(--primary);
}

.shadow-brutalist-lime-lg {
  box-shadow: var(--shadow-offset-lg) var(--accent);
}

.shadow-brutalist-black-lg {
  box-shadow: var(--shadow-offset-lg) var(--primary);
}
```

---

## 8. Component Checklist

### Bestaande Componenten Status

| Component | Design Tokens | Herbruikbaar | Consistent Spacing | Naming |
|-----------|---------------|--------------|-------------------|--------|
| `navigation.tsx` | Ja | Ja | Ja | OK |
| `stats-only.tsx` | Deels (hardcoded shadow) | Ja | Ja | OK |
| `stats-counter.tsx` | Nee (geen shadow, verkeerde container) | Nee | Nee | DELETE |
| `stats-clients-combined.tsx` | Deels | Nee (duplicatie) | Ja | DELETE |
| `cases-stats.tsx` | Deels (afwijkende shadow) | Ja | Ja | MERGE |
| `clients-carousel.tsx` | Deels | Nee (duplicatie) | Ja | MERGE |
| `clients-carousel-standalone.tsx` | Deels | Ja | Ja | KEEP |
| `testimonials-section.tsx` | Deels | Ja | Ja | OK |
| `cta-with-image.tsx` | Deels | Ja | Ja | OK |
| `ui/button.tsx` | Ja | Ja | Ja | OK |
| `ui/card.tsx` | Ja | Ja | Ja | OK |
| `ui/accordion.tsx` | Ja | Ja | Ja | OK |
| `ui/badge.tsx` | Ja | Ja | Ja | OK |

### Te Maken Componenten

| Component | Prioriteit | Complexiteit |
|-----------|------------|--------------|
| `footer.tsx` | KRITIEK | Klein |
| `section.tsx` | Hoog | Klein |
| `related-articles.tsx` | Middel | Middel |
| `final-cta.tsx` | Middel | Klein |

---

## 9. Nice-to-haves (Kan Later)

1. **Blog artikel data naar JSON/MDX migreren** - Content uit JSX halen
2. **Case studies als data** - Vergelijkbare content naar centrale locatie
3. **Sitemap automatisering** - Routes automatisch ophalen
4. **Performance audit** - Images optimaliseren met blur placeholders
5. **TypeScript strict mode** - Strictere type checking
6. **Component testing** - Basis tests voor herbruikbare componenten

---

## 10. Samenvatting

### Direct te doen (deze week)
1. Maak `lib/config.ts`
2. Maak `components/footer.tsx`
3. Consolideer stats componenten
4. Consolideer carousel componenten

### Korte termijn (komende 2 weken)
5. Voeg shadow tokens toe
6. Fix alle 4px shadows naar 6px+
7. Update homepage als reference

### Lange termijn (doorlopend)
8. Migreer alle pagina's naar nieuwe componenten
9. Vervang hardcoded shadows door CSS classes
10. Overweeg content naar losse bestanden te verplaatsen

---

*Rapport gegenereerd: December 2025*
*Geanalyseerde bestanden: 55 pagina's, 11 componenten*
*Gevonden issues: 5 kritiek, 2 hoog, diverse verbeterpunten*
