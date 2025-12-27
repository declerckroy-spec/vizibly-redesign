# Layout Templates Documentatie

Dit document beschrijft de drie layout templates die beschikbaar zijn voor het maken van nieuwe pagina's.

---

## Overzicht

| Template | Gebruik | Consistentie |
|----------|---------|--------------|
| `BlogArticleLayout` | Blog artikelen | 92% |
| `CaseStudyLayout` | Case studies & klantinterviews | 85% |
| `ServicePageLayout` | Diensten pagina's | 70% |

---

## 1. BlogArticleLayout

### Import

```tsx
import {
  BlogArticleLayout,
  ArticleIntro,
  ArticleH2,
  ArticleH3,
  ArticleParagraph,
  ArticleList,
  ArticleImage,
  ArticleCTABox,
  ArticleHighlightBox,
  ArticleLink,
} from '@/components/layouts';
```

### Basis Voorbeeld

```tsx
import type { Metadata } from 'next';
import {
  BlogArticleLayout,
  ArticleIntro,
  ArticleH2,
  ArticleParagraph,
  ArticleList,
} from '@/components/layouts';

export const metadata: Metadata = {
  title: 'Artikel Titel | Vizibly',
  description: 'Korte beschrijving van het artikel',
  openGraph: {
    title: 'Artikel Titel | Vizibly',
    description: 'Korte beschrijving van het artikel',
    url: 'https://vizibly.nl/artikel-slug/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};

const relatedArticles = [
  {
    slug: 'andere-artikel-slug',
    title: 'Ander Artikel',
    image: '/blog/other-image.jpg',
    excerpt: 'Korte beschrijving van het gerelateerde artikel.',
  },
  // ... meer artikelen
];

export default function ArtikelPagina() {
  return (
    <BlogArticleLayout
      title="De Volledige Artikel Titel"
      category="SEO BASICS"
      author="Roy de Clerck"
      readingTime="5 min leestijd"
      featuredImage="/blog/featured-image.jpg"
      featuredImageAlt="Beschrijving van de afbeelding"
      relatedArticles={relatedArticles}
    >
      <ArticleIntro>
        Dit is de introductie van het artikel. Deze tekst is groter en
        trekt de aandacht van de lezer.
      </ArticleIntro>

      <ArticleH2>Eerste Sectie</ArticleH2>
      <ArticleParagraph>
        Normale paragraaf tekst. Alle body tekst is automatisch bold
        volgens het design system.
      </ArticleParagraph>

      <ArticleList
        items={[
          'Eerste punt in de lijst',
          'Tweede punt met meer uitleg',
          'Derde punt',
        ]}
      />

      <ArticleH2>Tweede Sectie</ArticleH2>
      <ArticleParagraph>
        Meer content hier...
      </ArticleParagraph>
    </BlogArticleLayout>
  );
}
```

### Props

| Prop | Type | Required | Default | Beschrijving |
|------|------|----------|---------|--------------|
| `title` | string | ✅ | - | Artikel titel (h1) |
| `category` | string | ✅ | - | Categorie label boven titel |
| `author` | string | ❌ | "Roy de Clerck" | Auteursnaam |
| `readingTime` | string | ❌ | - | Leestijd (bijv. "5 min leestijd") |
| `featuredImage` | string | ✅ | - | Pad naar featured image |
| `featuredImageAlt` | string | ✅ | - | Alt tekst voor featured image |
| `children` | ReactNode | ✅ | - | Artikel content |
| `relatedArticles` | RelatedArticle[] | ❌ | - | Gerelateerde artikelen |
| `ctaHeading` | string | ❌ | "Klaar om te groeien?" | CTA heading |
| `ctaDescription` | string | ❌ | - | CTA beschrijving |

### Helper Components

| Component | Gebruik |
|-----------|---------|
| `ArticleIntro` | Grote intro paragraaf |
| `ArticleH2` | Sectie heading met accent border |
| `ArticleH3` | Sub-heading |
| `ArticleParagraph` | Standaard paragraaf |
| `ArticleList` | Lijst met accent bullets |
| `ArticleImage` | Afbeelding met shadow |
| `ArticleCTABox` | Zwarte CTA box met lime shadow |
| `ArticleHighlightBox` | Highlight box (lime of zwart) |
| `ArticleLink` | Gestylde link (intern of extern) |

---

## 2. CaseStudyLayout

### Import

```tsx
import {
  CaseStudyLayout,
  CaseSection,
  CaseParagraph,
  CaseStatsList,
  CaseQuote,
  CaseImage,
  CaseLink,
} from '@/components/layouts';
```

### Basis Voorbeeld

```tsx
import type { Metadata } from 'next';
import {
  CaseStudyLayout,
  CaseSection,
  CaseParagraph,
  CaseStatsList,
  CaseQuote,
} from '@/components/layouts';

export const metadata: Metadata = {
  title: '+150% organisch verkeer voor webshop | Vizibly Case',
  description: 'Ontdek hoe we deze webshop hielpen groeien met SEO.',
};

export default function CaseStudyPagina() {
  return (
    <CaseStudyLayout
      title="Van 1.700 naar 10.000 bezoekers per maand"
      label="CASE STUDY"
      subtitle="Hoe we een online bloemist hielpen doorbreken met gerichte SEO."
      featuredImage="/cases/bloemist-dashboard.jpg"
      featuredImageAlt="Analytics dashboard met groei"
    >
      <CaseSection title="De uitdaging">
        <CaseParagraph>
          De klant had een mooie webshop maar werd niet gevonden in Google.
          Na maanden zonder resultaat zochten ze naar een andere aanpak.
        </CaseParagraph>
      </CaseSection>

      <CaseSection title="De resultaten">
        <CaseStatsList
          items={[
            <><strong>+488%</strong> organisch verkeer</>,
            <><strong>Top 3</strong> voor 15 zoekwoorden</>,
            <><strong>+150%</strong> conversies uit SEO</>,
          ]}
        />
      </CaseSection>

      {/* Voor interviews: */}
      <CaseSection title="Wat de klant zegt">
        <CaseQuote>
          "Vizibly heeft ons echt geholpen om online zichtbaar te worden.
          De resultaten spreken voor zich."
        </CaseQuote>
      </CaseSection>
    </CaseStudyLayout>
  );
}
```

### Props

| Prop | Type | Required | Default | Beschrijving |
|------|------|----------|---------|--------------|
| `title` | string | ✅ | - | Case study titel |
| `label` | 'CASE STUDY' \| 'KLANTINTERVIEW' | ❌ | "CASE STUDY" | Type label |
| `subtitle` | string | ✅ | - | Intro tekst |
| `featuredImage` | string | ✅ | - | Pad naar featured image |
| `featuredImageAlt` | string | ✅ | - | Alt tekst |
| `children` | ReactNode | ✅ | - | Secties content |
| `ctaHeading` | string | ❌ | - | CTA heading |
| `secondaryButtonText` | string | ❌ | "BEKIJK FULL SERVICE SEO" | Secundaire button tekst |
| `secondaryButtonHref` | string | ❌ | "/full-service-seo" | Secundaire button link |

### Helper Components

| Component | Gebruik |
|-----------|---------|
| `CaseSection` | Content sectie met titel |
| `CaseParagraph` | Standaard paragraaf |
| `CaseStatsList` | Resultaten lijst met ▸ bullets |
| `CaseQuote` | Quote blok met accent border |
| `CaseImage` | Inline afbeelding met shadow |
| `CaseLink` | Gestylde link |

---

## 3. ServicePageLayout

### Import

```tsx
import {
  ServicePageLayout,
  ServiceWhatIsSection,
  ServiceWhySection,
  ServiceProcessSection,
  ServiceContentSection,
  ServiceBlackSection,
  ServiceAccentSection,
  ServiceParagraph,
  ServiceLink,
  ServicePillarCards,
  ServiceCTAButton,
} from '@/components/layouts';
```

### Basis Voorbeeld

```tsx
import type { Metadata } from 'next';
import {
  ServicePageLayout,
  ServiceWhatIsSection,
  ServiceWhySection,
  ServiceProcessSection,
  ServiceParagraph,
} from '@/components/layouts';
import { FileText, Target, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO Copy | Vanaf €70',
  description: 'Professionele SEO teksten die scoren in Google.',
};

const faqData = [
  {
    question: 'Hoeveel kost een SEO tekst?',
    answer: 'Onze SEO teksten beginnen vanaf €70 per stuk.',
  },
  // ... meer FAQ items
];

export default function SEOCopyPagina() {
  return (
    <ServicePageLayout
      heroLabel="CONTENT DIE CONVERTEERT"
      heroTitle={
        <>
          SEO{' '}
          <span className="relative inline-block">
            <span className="absolute -inset-1 bg-accent"></span>
            <span className="relative">Copy</span>
          </span>
        </>
      }
      heroDescription={
        <ServiceParagraph>
          Teksten die niet alleen ranken, maar ook converteren.
          Wij schrijven content die Google én je bezoekers overtuigt.
        </ServiceParagraph>
      }
      heroImage={{
        src: '/images/copywriting.jpg',
        alt: 'SEO copywriting',
      }}
      faqItems={faqData}
      finalCTA={{
        label: 'MAAK KENNIS MET HET #1 SEO COPY BUREAU',
        heading: 'Klaar voor teksten die scoren?',
      }}
    >
      {/* "Wat is SEO Copy?" sectie */}
      <ServiceWhatIsSection
        label="WAT IS HET?"
        title="Wat is SEO copywriting?"
      >
        <ServiceParagraph variant="white">
          SEO copywriting combineert zoekmachine optimalisatie met
          overtuigende teksten. Het resultaat: content die gevonden
          wordt én converteert.
        </ServiceParagraph>
      </ServiceWhatIsSection>

      {/* "Waarom?" sectie met cards */}
      <ServiceWhySection
        label="WAAROM SEO COPY?"
        title="De voordelen van professionele SEO teksten"
        cards={[
          {
            icon: FileText,
            title: 'Hogere rankings',
            description: 'Teksten geoptimaliseerd voor je zoekwoorden.',
          },
          {
            icon: Target,
            title: 'Meer conversies',
            description: 'Overtuigende copy die bezoekers omzet in klanten.',
          },
          {
            icon: TrendingUp,
            title: 'Duurzaam verkeer',
            description: 'Organisch verkeer dat blijft groeien.',
          },
        ]}
      />

      {/* Proces sectie */}
      <ServiceProcessSection
        label="ONS PROCES"
        title="Hoe we te werk gaan"
        variant="accent"
        steps={[
          { step: '01', title: 'Briefing', description: 'We bespreken je doelen en doelgroep.' },
          { step: '02', title: 'Research', description: 'Zoekwoordenonderzoek en concurrentie analyse.' },
          { step: '03', title: 'Schrijven', description: 'Professionele SEO tekst op maat.' },
          { step: '04', title: 'Optimalisatie', description: 'Finetuning voor maximaal resultaat.' },
        ]}
      />
    </ServicePageLayout>
  );
}
```

### Props

| Prop | Type | Required | Default | Beschrijving |
|------|------|----------|---------|--------------|
| `heroLabel` | string | ✅ | - | Label boven hero titel |
| `heroTitle` | ReactNode | ✅ | - | Hero titel (kan JSX bevatten) |
| `heroDescription` | ReactNode | ✅ | - | Hero beschrijving |
| `heroImage` | { src, alt } | ✅ | - | Hero afbeelding |
| `heroImage2` | { src, alt } | ❌ | - | Optionele tweede afbeelding |
| `faqItems` | FAQItem[] | ✅ | - | FAQ vragen en antwoorden |
| `finalCTA` | object | ✅ | - | CTA configuratie |
| `children` | ReactNode | ✅ | - | Main content secties |
| `showTestimonials` | boolean | ❌ | true | Toon testimonials sectie |

### Section Components

| Component | Achtergrond | Gebruik |
|-----------|-------------|---------|
| `ServiceWhatIsSection` | Zwart | "Wat is X?" uitleg sectie |
| `ServiceWhySection` | Wit | Benefit cards grid |
| `ServiceProcessSection` | Configureerbaar | Stappen/proces weergave |
| `ServiceContentSection` | Wit | Algemene content sectie |
| `ServiceBlackSection` | Zwart | Donkere content sectie |
| `ServiceAccentSection` | Lime | Accent content sectie |

### ProcessSection Variants

```tsx
// Witte achtergrond met lime shadows
<ServiceProcessSection variant="white" ... />

// Lime achtergrond met zwarte shadows
<ServiceProcessSection variant="accent" ... />

// Zwarte achtergrond met lime shadows
<ServiceProcessSection variant="black" ... />
```

---

## Best Practices

### 1. Metadata altijd apart exporteren

```tsx
// ✅ Goed - metadata als named export
export const metadata: Metadata = { ... };

// ❌ Fout - metadata in component
```

### 2. Accent highlighting in titels

```tsx
// Standaard accent pattern
<span className="relative inline-block">
  <span className="absolute -inset-1 bg-accent"></span>
  <span className="relative">woord</span>
</span>
```

### 3. Structured Data toevoegen

Voor SEO is het aan te raden om JSON-LD structured data toe te voegen:

```tsx
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Artikel Titel",
  // ...
};

// In de component:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
/>
```

---

## Bestandslocaties

```
components/layouts/
├── index.ts                    # Barrel exports
├── blog-article-layout.tsx     # Blog template + helpers
├── case-study-layout.tsx       # Case study template + helpers
└── service-page-layout.tsx     # Service template + helpers
```

---

*Laatst bijgewerkt: 26 december 2025*
