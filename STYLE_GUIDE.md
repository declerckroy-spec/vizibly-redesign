# Vizibly Design System - Style Guide V2.3

Deze style guide documenteert het complete design systeem voor de Vizibly website. Volg deze regels strikt bij het bouwen van nieuwe pagina's en componenten.

---

## Inhoudsopgave

1. [Design Filosofie](#design-filosofie)
2. [Kleuren](#kleuren)
3. [Typografie](#typografie)
4. [Spacing & Layout](#spacing--layout)
5. [Borders & Shadows](#borders--shadows)
6. [Componenten](#componenten)
7. [Secties & Patronen](#secties--patronen)
8. [Navigatie](#navigatie)
9. [Footer](#footer)
10. [Animaties & Effecten](#animaties--effecten)
11. [Responsiviteit](#responsiviteit)
12. [Do's en Don'ts](#dos-en-donts)
13. [Blog Artikel Pagina's](#blog-artikel-paginas)
14. [Case Study Pagina's](#case-study-paginas)

---

## Design Filosofie

Vizibly gebruikt een **brutalist design aesthetic** - een strakke, ongepolijste stijl met scherpe hoeken, dikke borders en hoog contrast. De site voelt krachtig, direct en no-nonsense aan.

### Kernprincipes

- **Geen afgeronde hoeken** - Alles heeft scherpe 90-graden hoeken
- **Dikke borders** - Standaard 4px borders overal
- **Hoog contrast** - Zwart, wit en lime (#CCFF00) domineren
- **Bold typography** - Alle tekst is vetgedrukt
- **Brutalist shadows** - Offset shadows voor diepte effect

---

## Kleuren

### Primaire Kleuren

| Naam | Hex | CSS Variable | Gebruik |
|------|-----|--------------|---------|
| Zwart | `#000000` | `--primary`, `--foreground` | Tekst, borders, achtergrond |
| Wit | `#ffffff` | `--background`, `--card` | Achtergrond, cards |
| Lime/Accent | `#CCFF00` | `--accent` | Highlights, CTA's, shadows |

### Kleurgebruik per Context

```
Zwarte secties:    bg-black text-white
Witte secties:     bg-white text-black
Accent secties:    bg-accent text-black
```

### Tekst Opacity (op zwart)

| Class | Gebruik |
|-------|---------|
| `text-white` | Hoofdtekst, koppen |
| `text-white/90` | Belangrijke body tekst |
| `text-white/80` | Secundaire body tekst |
| `text-white/60` | Labels, subtiele tekst |

### Tekst Opacity (op wit)

| Class | Gebruik |
|-------|---------|
| `text-black` | Hoofdtekst, koppen |
| `text-black/80` | Belangrijke body tekst |
| `text-black/70` | Secundaire body tekst |
| `text-black/60` | Labels, subtiele tekst |

---

## Typografie

### Base Font Size

De basis font-size is **14px** (ingesteld in `globals.css`):

```css
html {
  font-size: 14px;
}
```

### Font Families

- **Headings:** `var(--font-heading)` - Satoshi of Inter Black
- **Body:** `var(--font-body)` - Satoshi of Inter

### Heading Classes (Responsive)

| Class | Mobile | Desktop (lg:) | Gebruik |
|-------|--------|---------------|---------|
| `.text-brutalist-hero` | 36px | 72px | Hero titels |
| `.text-brutalist-h1` | 28px | 54px | Sectie koppen |
| `.text-brutalist-h2` | 24px | 42px | Subkoppen |
| `.text-brutalist-h3` | 20px | 32px | Kleine koppen |

### Heading Styling

```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  letter-spacing: -0.05em;
  line-height: 1.1;
}
```

### Body Text Patronen

**KRITISCH: Alle body tekst moet `font-bold` hebben!**

```jsx
// Standaard body tekst
<p className="text-base font-bold lg:text-lg xl:text-xl">

// Belangrijke body tekst (groter)
<p className="text-xl font-bold lg:text-2xl">

// Labels en subtitels
<p className="text-base font-bold uppercase tracking-wider lg:text-lg">

// Kleine labels
<p className="text-sm font-bold uppercase tracking-wider">
// of
<p className="text-xs font-bold uppercase tracking-wider lg:text-sm">
```

### Text Styling Regels

| Element | Styling |
|---------|---------|
| Labels boven koppen | `text-base font-bold uppercase tracking-wider text-accent lg:text-lg` |
| Hero subtitel | `text-xl font-bold uppercase tracking-tight lg:text-2xl` |
| Card titel | `text-xl font-black uppercase` of `text-2xl font-black uppercase` |
| Card beschrijving | `text-base font-bold lg:text-lg` |
| Footer kopjes | `text-lg font-black uppercase` |
| Footer links | `text-base font-bold` |

---

## Spacing & Layout

### Container

Alle secties gebruiken dezelfde container:

```jsx
<div className="mx-auto max-w-screen-2xl px-6">
```

- `max-w-screen-2xl` = 1536px maximum breedte
- `px-6` = 24px padding links/rechts

### Sectie Padding

| Type | Mobile | Desktop |
|------|--------|---------|
| Standaard | `py-24` | `lg:py-32` |
| Compact | `py-16` | `lg:py-20` |
| Groot | `py-28` | `lg:py-40` |
| Extra groot | `py-32` | `lg:py-48` |

### Grid Gaps

| Context | Gap |
|---------|-----|
| Sectie kolommen | `gap-16 lg:gap-24` |
| Cards grid | `gap-6` of `gap-8` |
| Stats grid | `gap-6 lg:gap-8` |
| Footer kolommen | `gap-12` |
| List items | `gap-4` of `gap-6` |

### Margin Patronen

```jsx
// Accent lijn onder kop
<div className="h-1 w-32 bg-accent mb-8"></div>
// of met zwart
<div className="h-1 w-32 bg-black mb-8"></div>

// Spacing na kop
<h2 className="mb-8">...</h2>

// Spacing na paragraaf
<p className="mb-6">...</p>
// of groter
<p className="mb-8">...</p>
```

---

## Borders & Shadows

### Border Dikte

**Alle borders zijn 4px dik** - geen uitzonderingen.

```jsx
className="border-4 border-black"
// of voor accent border
className="border-4 border-accent"
```

### Sectie Borders

```jsx
// Sectie met border boven en onder
className="border-y-4 border-black"

// Sectie met alleen border onder
className="border-b-4 border-black"
```

### Brutalist Shadows

Shadows worden inline toegepast met `style`:

```jsx
// Lime shadow - voor featured content, stats, logo's
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}

// Zwarte shadow - voor service cards, standaard cards
style={{ boxShadow: '8px 8px 0 0 #000000' }}

// Grote zwarte shadow - voor featured images, case cards
style={{ boxShadow: '12px 12px 0 0 #000000' }}

// Grote lime shadow - voor hero images
style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}

// Kleinere shadow - voor werkwijze items
style={{ boxShadow: '6px 6px 0 0 #CCFF00' }}
```

### Wanneer welke shadow?

| Element | Shadow |
|---------|--------|
| Stats cards | `8px 8px 0 0 #CCFF00` |
| Client/logo cards | `8px 8px 0 0 #CCFF00` |
| Blog cards | `8px 8px 0 0 #CCFF00` |
| Service cards | `8px 8px 0 0 #000000` |
| Case cards | `12px 12px 0 0 #000000` |
| Hero/featured images | `12px 12px 0 0 #CCFF00` of `#000000` |
| Contact cards | `8px 8px 0 0 #CCFF00` |
| Info boxes | `8px 8px 0 0 #000000` |
| Werkwijze items | `6px 6px 0 0 #CCFF00` |
| Testimonial cards | `8px 8px 0 0 #000000` |

---

## Componenten

### Buttons

#### Default Button (Primary)

```jsx
<Button size="lg" asChild className="text-base px-8 py-5">
  <Link href="/contact">
    NEEM CONTACT OP
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
```

#### Accent Button (op zwarte achtergrond)

```jsx
<Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base">
  <Link href="/contact">
    NEEM CONTACT OP
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
```

#### Final CTA Button (op lime achtergrond)

```jsx
<Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
  <Link href="/contact">
    LET'S GO!!
    <ArrowRight className="ml-2 h-5 w-5" />
  </Link>
</Button>
```

#### Outline Button

```jsx
<Button size="lg" variant="outline" asChild className="text-base px-8 py-5">
  <Link href="/over-ons">OVER VIZIBLY</Link>
</Button>
```

### Button Sizing

| Prop | Hoogte | Padding |
|------|--------|---------|
| `size="sm"` | h-9 | px-4 |
| `size="default"` | h-11 | px-6 |
| `size="lg"` | h-14 | px-8 |

Bij size="lg" voeg toe: `px-8 py-5 text-base`

### Cards

#### Service Card

```jsx
<Link href={service.href} className="block">
  <Card
    className="group h-full border-4 border-black bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer"
    style={{ boxShadow: '8px 8px 0 0 #000000' }}
  >
    <CardHeader>
      <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
        <service.icon className="h-7 w-7" />
      </div>
      <CardTitle className="text-xl font-black uppercase">{service.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-base text-black lg:text-lg">
        {service.description}
      </CardDescription>
    </CardContent>
  </Card>
</Link>
```

#### Stats Card

```jsx
<div
  className="relative flex flex-col items-center gap-3 border-4 border-accent bg-black p-8 text-center transition-all duration-300 hover:-translate-y-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
>
  <div className="text-5xl font-bold tracking-tight text-accent lg:text-6xl">
    {prefix}{count}{suffix}
  </div>
  <div className="text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
    {label}
  </div>
</div>
```

#### Testimonial Card

```jsx
<div
  className="group border-4 border-black bg-white p-8 transition-all duration-300 hover:-translate-y-1"
  style={{ boxShadow: '8px 8px 0 0 #000000' }}
>
  {highlight && (
    <span className="mb-4 inline-block border-4 border-black bg-black px-3 py-1 text-sm font-black uppercase text-accent">
      {highlight}
    </span>
  )}
  <p className="mb-6 text-base font-bold text-black lg:text-lg">
    "{text}"
  </p>
  <div className="flex items-center justify-between">
    <p className="text-sm font-black uppercase tracking-wider text-black/60">
      - {name}
    </p>
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-black text-black" />
      ))}
    </div>
  </div>
</div>
```

#### Client/Logo Card

```jsx
<div
  className="group flex-shrink-0 flex items-center justify-center h-24 px-8
             border-4 border-black bg-white
             transition-all duration-300
             hover:border-accent hover:-translate-y-2 hover:rotate-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00', minWidth: '200px' }}
>
  <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300">
    <Image src={logo} alt={name} width={250} height={80}
           className="object-contain max-h-16 w-auto" />
  </div>
  {/* Subtle glow on hover */}
  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
</div>
```

#### Contact Card

```jsx
<a
  href="tel:0628206410"
  className="group flex items-center gap-6 border-4 border-black p-6 transition-all hover:border-accent hover:-translate-y-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
>
  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
    <Phone className="h-7 w-7" />
  </div>
  <div>
    <p className="text-sm font-bold uppercase tracking-wider text-black/60">Bel direct</p>
    <p className="text-2xl font-black text-black">06 282 064 10</p>
  </div>
</a>
```

### Badge

```jsx
<Badge variant="secondary" className="mb-12 border-4 border-black px-4 py-2 text-sm font-bold sm:px-8 sm:py-3 sm:text-lg lg:text-xl">
  STOP MET VERSTOPPERTJE SPELEN VOOR JE KLANTEN
</Badge>
```

### Inline Highlight Badge

```jsx
<div className="inline-block border-4 border-black bg-accent px-6 py-2 mb-4">
  <p className="text-lg font-black uppercase text-black lg:text-xl">
    GRATIS WEBSITE-ANALYSE
  </p>
</div>
```

### Accordion (FAQ)

```jsx
<Accordion type="single" collapsible className="space-y-4">
  {faqData.map((faq, index) => (
    <AccordionItem
      key={index}
      value={`item-${index}`}
      className="border-4 border-black bg-white px-8 py-2 hover:border-accent transition-colors last:border-b-4"
    >
      <AccordionTrigger className="text-left text-base font-bold uppercase hover:no-underline transition-colors lg:text-lg">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-base text-black/80 border-t-2 border-black/10 pt-4 mt-4 lg:text-lg">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>
```

### Form Inputs

```jsx
<input
  type="text"
  className="w-full border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
  placeholder="Je naam"
/>

<textarea
  rows={5}
  className="w-full resize-none border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
  placeholder="Vertel me over je project..."
/>
```

### Form Labels

```jsx
<label className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
  Naam *
</label>
```

---

## Secties & Patronen

### Hero Sectie (Wit)

```jsx
<section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
  {/* Background Grid Pattern */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    {/* Content */}
  </div>
</section>
```

### Zwarte Sectie (met diagonaal patroon)

```jsx
<section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
  {/* Subtle diagonal pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    {/* Content */}
  </div>
</section>
```

### Witte Sectie (zonder patroon)

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
      <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
        MAAK KENNIS MET HET #1 SEO BUREAU
      </p>
      <h2 className="mb-12 text-brutalist-h1 text-black">
        Nog maar een stap verwijderd van succes!
      </h2>
      <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
        <Link href="/contact">
          LET'S GO!!
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
</section>
```

### Testimonials Sectie

```jsx
<section className="relative border-y-4 border-black bg-accent py-24 lg:py-32">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mb-16 text-center">
      <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
        5/5 STERREN OP GOOGLE
      </p>
      <h2 className="mb-6 text-brutalist-h2 text-black">
        Fans van Vizibly aan het woord
      </h2>
      <div className="flex justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-8 w-8 fill-black text-black" />
        ))}
      </div>
    </div>
    {/* Grid met testimonial cards */}
  </div>
</section>
```

### Sectie Kop Structuur

```jsx
// Standaard kop met label
<p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
  LABEL TEKST
</p>
<h2 className="mb-8 text-brutalist-h1 text-white">
  Sectie Titel
</h2>
<div className="h-1 w-32 bg-accent mb-8"></div>

// Gecentreerde kop
<div className="text-center">
  <p className="mb-6 text-base font-bold uppercase tracking-wider text-black lg:text-lg xl:text-xl">
    LABEL TEKST
  </p>
  <h2 className="text-brutalist-h1 text-black">
    Sectie Titel
  </h2>
</div>
```

### Accent Highlight in Tekst

```jsx
<h1 className="text-brutalist-hero">
  Dit is{' '}
  <span className="relative inline-block">
    <span className="absolute -inset-1 bg-accent"></span>
    <span className="relative">gehighlight</span>
  </span>
</h1>
```

**Let op:** Gebruik `-inset-1` (niet `-inset-2`) om overlap met andere tekst te voorkomen.

### Bullet Lists met Border

```jsx
<div className="grid gap-4">
  {items.map((item, index) => (
    <div key={index} className="flex items-center gap-4 border-l-4 border-accent pl-4">
      <span className="text-base font-bold text-white lg:text-lg">{item}</span>
    </div>
  ))}
</div>
```

### Bullet List met Icons

```jsx
<div className="grid gap-4">
  {items.map((item, index) => (
    <div key={index} className="flex items-start gap-4 border-l-4 border-accent pl-4">
      <div className="flex-shrink-0 mt-1">
        <div className="flex h-8 w-8 items-center justify-center border-4 border-black bg-accent">
          <Check className="h-5 w-5 text-black font-bold" strokeWidth={4} />
        </div>
      </div>
      <span className="text-lg font-bold text-black xl:text-xl">{item}</span>
    </div>
  ))}
</div>
```

### Genummerde Stappen

```jsx
<div className="grid gap-8">
  {steps.map((step) => (
    <div key={step.number} className="border-l-4 border-accent pl-6">
      <div className="mb-2 text-6xl font-bold text-accent/30">
        {step.number}
      </div>
      <p className="text-base font-bold text-white lg:text-lg xl:text-xl">{step.text}</p>
    </div>
  ))}
</div>
```

### Quote/Callout Box

```jsx
// Op witte achtergrond
<div className="border-4 border-black p-6 bg-accent/10" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
  <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
    Quote of belangrijke tekst hier.
  </p>
</div>

// Op zwarte achtergrond
<div className="border-l-4 border-accent pl-6 py-4 bg-white/5">
  <p className="text-base font-bold text-accent lg:text-lg xl:text-xl">
    Belangrijke quote hier.
  </p>
</div>
```

---

## Navigatie

### Desktop Navigatie

```jsx
<nav className="sticky top-0 z-50 border-b-4 border-black bg-black text-white shadow-[0_4px_20px_rgba(204,255,0,0.15)]">
  {/* Subtle diagonal stripes background */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6 py-4">
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
        <Image src="/logo-brutalist-white.svg" alt="Vizibly Logo" width={180} height={45} priority className="h-12 w-auto" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex md:items-center md:gap-6 lg:gap-10">
        <Link href="/seo-strategie" className="text-base font-bold uppercase hover:text-accent transition-colors">
          SEO Strategie
        </Link>
        {/* Meer links... */}
        <Button asChild size="lg" className="ml-4 bg-accent text-black border-accent hover:bg-white text-base px-6 py-4">
          <Link href="/contact">CONTACT</Link>
        </Button>
      </div>
    </div>
  </div>
</nav>
```

### Navigatie Links

```jsx
<Link href="/page" className="text-base font-bold uppercase hover:text-accent transition-colors">
  Link Tekst
</Link>
```

### Mobile Menu

```jsx
{mobileMenuOpen && (
  <div className="mt-6 flex flex-col gap-4 border-t-2 border-accent pt-6 md:hidden">
    <Link href="/seo-strategie" className="text-base font-bold uppercase hover:text-accent transition-colors">
      SEO Strategie
    </Link>
    {/* Meer links... */}
    <Button asChild size="lg" className="w-full bg-accent text-black border-accent text-base">
      <Link href="/contact">CONTACT</Link>
    </Button>
  </div>
)}
```

---

## Footer

```jsx
<footer className="relative bg-black py-16 text-white">
  {/* Subtle diagonal pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
      {/* Logo kolom */}
      <div>
        <Link href="/" className="mb-6 block">
          <Image src="/logo-brutalist-white.svg" alt="Vizibly Logo" width={200} height={50} className="h-auto w-48" />
        </Link>
        <p className="text-base font-bold text-white/80 lg:text-lg">
          SEO specialist die zorgt dat je gevonden wordt.
        </p>
      </div>

      {/* Link kolommen */}
      <div>
        <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Diensten</h4>
        <ul className="space-y-4">
          <li>
            <Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">
              SEO Strategie
            </Link>
          </li>
          {/* Meer links... */}
        </ul>
      </div>
      {/* Meer kolommen... */}
    </div>

    {/* Copyright */}
    <div className="border-t-4 border-white/20 pt-8 text-center">
      <p className="text-base font-bold uppercase text-white/60">
        &copy; {new Date().getFullYear()} VIZIBLY. ALLE RECHTEN VOORBEHOUDEN.
      </p>
    </div>
  </div>
</footer>
```

### Footer Link Styling

```jsx
// Standaard link
className="text-base font-bold text-white/80 hover:text-accent transition-colors"

// Actieve pagina link
className="text-base font-bold text-accent hover:text-white transition-colors"
```

---

## Animaties & Effecten

### Hover Effecten

```jsx
// Lift effect (stats, testimonials)
className="transition-all duration-300 hover:-translate-y-1"

// Lift + rotate (logo's, clients)
className="transition-all duration-300 hover:border-accent hover:-translate-y-2 hover:rotate-1"

// Shadow shift (service cards)
className="transition-all hover:translate-x-1 hover:translate-y-1"

// Border kleur change
className="transition-colors hover:border-accent"
```

### Icon Hover in Cards

```jsx
<div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
  <Icon className="h-7 w-7" />
</div>
```

### Grayscale naar Kleur

```jsx
<div className="grayscale group-hover:grayscale-0 transition-all duration-300">
  <Image ... />
</div>
```

### Glow Overlay

```jsx
<div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
```

### CSS Animaties (globals.css)

```css
/* Glitch effect */
.animate-glitch {
  animation: glitch 3s infinite;
}

/* Float effect (ASCII decoratie) */
.animate-float {
  animation: float 4s ease-in-out infinite;
}

/* Scroll left (carousel) */
.animate-scroll-left {
  animation: scroll-left 12s linear infinite;
}
@media (min-width: 1024px) {
  .animate-scroll-left {
    animation: scroll-left 25s linear infinite;
  }
}
```

### Scrollbar

```css
::-webkit-scrollbar {
  width: 16px;
}
::-webkit-scrollbar-track {
  background: #000000;
}
::-webkit-scrollbar-thumb {
  background: #ccff00;
  border: 2px solid #000000;
}
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}
```

---

## Responsiviteit

### Breakpoints

| Breakpoint | Pixels | Gebruik |
|------------|--------|---------|
| `base` | < 640px | Mobile |
| `sm:` | 640px+ | Small tablets |
| `md:` | 768px+ | Tablets |
| `lg:` | 1024px+ | Desktop |
| `xl:` | 1280px+ | Large desktop |
| `2xl:` | 1536px+ | Extra large |

### Responsive Grid Patronen

```jsx
// 2 kolommen mobile, 4 desktop
className="grid grid-cols-2 gap-6 lg:grid-cols-4"

// 1 kolom mobile, 2 tablet, 3 desktop
className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"

// 1 kolom mobile, 2 desktop
className="grid gap-16 lg:grid-cols-2 lg:gap-24"
```

### Responsive Text

```jsx
// Body text
className="text-base lg:text-lg xl:text-xl"

// Labels
className="text-base lg:text-lg"

// Stats numbers
className="text-5xl lg:text-6xl"

// Small labels
className="text-xs lg:text-sm"
```

### Responsive Padding/Margin

```jsx
// Sectie padding
className="py-24 lg:py-32"

// Gap
className="gap-6 lg:gap-8"

// Element padding
className="p-6 lg:p-8"
```

---

## Do's en Don'ts

### DO's

- Gebruik altijd `font-bold` op body tekst
- Gebruik `border-4` voor alle borders
- Gebruik brutalist shadows op alle cards
- Voeg hover effecten toe aan interactieve elementen
- Gebruik `max-w-screen-2xl` voor containers
- Voeg subtle patronen toe aan zwarte secties
- Gebruik responsive text classes (`lg:`, `xl:`)
- Gebruik Lucide icons, geen emoji's
- Maak hele cards klikbaar met `<Link>` wrapper
- Test op mobile (375px) en desktop (1440px+)

### DON'TS

- Geen rounded corners (`border-radius`)
- Geen kleuren buiten zwart/wit/lime
- Geen patronen op witte secties
- Geen shadows kleiner dan 6px offset
- Geen `overflow-x: hidden` (breekt sticky nav)
- Geen em-dash of en-dash (gebruik hyphen)
- Geen emoticons
- Geen tekst zonder `font-bold`
- Geen "MEER INFO" links in cards
- Geen inline text links in plaats van card click

### Icon Gebruik

Gebruik altijd Lucide icons:

```jsx
import {
  Search,      // Analyse
  FileText,    // Content
  Link2,       // Linkbuilding
  Code,        // Techniek
  MapPin,      // Local SEO
  Megaphone,   // Google Ads
  ArrowRight,  // CTAs
  BarChart,    // Analytics
  TrendingUp,  // Groei
  Target,      // Strategie
  Phone,       // Contact
  Mail,        // Email
  Clock,       // Tijd
  Check,       // Checkmarks
  Star,        // Reviews
} from 'lucide-react';
```

Icon sizes:
- `h-4 w-4` - kleine accenten
- `h-5 w-5` - buttons
- `h-6 w-6` - navigatie, lijsten
- `h-7 w-7` - cards
- `h-8 w-8` - grote cards, stats
- `h-10 w-10` - hero sections

---

## Blog Artikel Pagina's

Blog artikelen volgen een specifiek design patroon. Gebruik `app/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt/page.tsx` als referentie.

### Benodigde Imports

```tsx
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { User, Clock, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/navigation';
```

### Hero Sectie (Blog)

```tsx
<section className="relative overflow-hidden bg-white pt-32 pb-16 lg:pt-40 lg:pb-20">
  {/* Grid pattern achtergrond */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl">
      {/* Categorie label */}
      <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
        CATEGORIE
      </p>

      {/* Titel */}
      <h1 className="mb-8 text-brutalist-h1 text-black">
        Blog Artikel Titel
      </h1>

      {/* Accent lijn */}
      <div className="mb-8 h-1 w-32 bg-accent"></div>

      {/* Author info - BELANGRIJK: User icon + Clock icon formaat */}
      <div className="flex flex-wrap items-center gap-6 text-base font-bold text-black/70">
        <div className="flex items-center gap-2">
          <User className="h-5 w-5" />
          <span>Roy de Clerck</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span>5 min leestijd</span>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Featured Image

```tsx
<section className="relative border-y-4 border-black bg-black py-12">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl">
      <div className="relative aspect-video overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
        <Image
          src="/blog/afbeelding.jpg"
          alt="Beschrijving"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
</section>
```

### Article Content Sectie

```tsx
<article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-3xl">
      {/* Intro paragraaf */}
      <p className="mb-8 text-lg font-bold text-black/80 lg:text-xl">
        Lead paragraaf tekst hier.
      </p>

      {/* H2 met border styling - KRITISCH */}
      <h2 className="mb-6 mt-12 border-l-4 border-accent pl-6 text-brutalist-h2 text-black">
        Sectie Kop
      </h2>

      {/* Body tekst */}
      <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
        Paragraaf tekst hier.
      </p>

      {/* Bullet list */}
      <ul className="mb-8 space-y-3 pl-6">
        <li className="text-base font-bold text-black/80 lg:text-lg">
          <span className="mr-2 text-accent">•</span>
          List item tekst
        </li>
      </ul>

      {/* Inline afbeelding */}
      <div className="my-8 overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
        <Image
          src="/blog/inline-afbeelding.jpg"
          alt="Beschrijving"
          width={800}
          height={450}
          className="w-full"
        />
      </div>

      {/* Inline links */}
      <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
        Tekst met een{' '}
        <Link href="/pagina" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">
          inline link
        </Link>{' '}
        naar andere pagina.
      </p>
    </div>
  </div>
</article>
```

### Related Articles Sectie (Lees Meer) - KRITISCH

**Dit is de exacte structuur voor "Lees meer" secties:**

```tsx
<section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
  {/* Diagonaal patroon */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    <h2 className="mb-12 text-brutalist-h2 text-white">
      Lees meer
    </h2>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Related Article Card */}
      <Link href="/artikel-slug" className="group block">
        <Card className="overflow-hidden border-4 border-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
          <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
            <Image
              src="/blog/artikel-afbeelding.jpg"
              alt="Artikel titel"
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="bg-white">
            <CardTitle className="line-clamp-2 text-lg font-black uppercase leading-tight lg:text-xl">
              Artikel Titel Hier
            </CardTitle>
          </CardHeader>
          <CardContent className="bg-white">
            <p className="mb-4 text-sm font-bold text-black/70 line-clamp-2">
              Korte beschrijving van het artikel.
            </p>
            <span className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white px-2 py-1">
              LEES ARTIKEL
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </CardContent>
        </Card>
      </Link>
    </div>
  </div>
</section>
```

### Related Articles - Belangrijke Details

| Element | Waarde |
|---------|--------|
| Sectie padding | `py-24 lg:py-32` |
| Shadow | `12px 12px 0 0 #CCFF00` (NIET 8px!) |
| Aspect ratio | `aspect-video` |
| Card hover | `hover:translate-x-1 hover:translate-y-1 hover:border-accent` |
| Title styling | `font-black uppercase` (NIET text-brutalist-h3) |
| Button tekst | `LEES ARTIKEL` met ArrowRight icon |
| Image hover | `group-hover:scale-105` |

### Afbeeldingen voor Related Articles

**KRITISCH:** Gebruik de afbeelding van het gelinkte artikel!

1. Zoek het gelinkte blog artikel op
2. Pak de featured image van dat artikel
3. Gebruik hetzelfde pad: `/blog/[naam].jpg` of externe URL

Voorbeeld:
```tsx
// Als je linkt naar /seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google
// Gebruik de lokale afbeelding:
src="/images/seo-strategie.webp"
// of voor blog thumbnails:
src="/blog/seo-strategie.jpg"
```

### ⚠️ KRITISCH: Sectie Volgorde Blog Artikelen

**De volgorde van secties op blog artikelen is ALTIJD:**

1. Hero sectie (wit met grid patroon)
2. Featured image (zwart met lime shadow)
3. Article content (wit)
4. **Related Articles / "Lees meer" (zwart met diagonaal patroon)**
5. **Final CTA (geel/accent)**
6. Footer (zwart)

**BELANGRIJK:** De "Lees meer" sectie komt ALTIJD VOOR de gele CTA sectie!

```tsx
// ✅ CORRECT - Lees meer eerst, dan CTA
</article>

{/* Related Articles Section */}
<section className="...bg-black...">
  <h2>Lees meer</h2>
  {/* artikel cards */}
</section>

{/* Final CTA Section */}
<section className="...bg-accent...">
  {/* CTA content */}
</section>

<footer>...</footer>
```

```tsx
// ❌ FOUT - CTA voor Lees meer
</article>

{/* Final CTA Section */}
<section className="...bg-accent...">
  {/* CTA content */}
</section>

{/* Related Articles Section */}
<section className="...bg-black...">
  <h2>Lees meer</h2>
</section>
```

### Final CTA Sectie (Blog)

```tsx
<section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mb-6 text-brutalist-h1 text-black">
        Klaar om te groeien?
      </h2>
      <p className="mb-10 text-lg font-bold text-black/80 lg:text-xl">
        Call-to-action tekst hier.
      </p>
      <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
        <Link href="/contact">
          NEEM CONTACT OP
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
</section>
```

### Blog Artikel Checklist

Bij het maken van een nieuw blog artikel:

- [ ] Artikel map op ROOT niveau (`/app/[slug]/page.tsx`)
- [ ] Hero met User + Clock icons (NIET "R" box)
- [ ] Featured image met 12px lime shadow
- [ ] H2 koppen met `border-l-4 border-accent pl-6`
- [ ] Body text met `text-base font-bold text-black/80 lg:text-lg`
- [ ] Related Articles met correcte shadow (12px), hover effects, en "LEES ARTIKEL" button
- [ ] Afbeeldingen van gelinkte artikelen gebruiken
- [ ] **CORRECTE VOLGORDE: Eerst "Lees meer" (zwart), dan CTA (geel)**
- [ ] Final CTA sectie
- [ ] Footer

---

## Case Study Pagina's

Case study pagina's volgen een vergelijkbaar patroon als blog artikelen, maar met subtiele verschillen. Gebruik een van de 4 bestaande case pagina's als referentie.

### Benodigde Imports

```tsx
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';
```

### Breadcrumb Sectie (Case Study)

Elke case study pagina heeft een breadcrumb navigatie direct onder de header:

```tsx
<Navigation />

{/* Breadcrumb */}
<section className="border-b-4 border-black bg-white py-4">
  <div className="mx-auto max-w-screen-2xl px-6">
    <Link
      href="/cases"
      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/60 transition-colors hover:text-black"
    >
      <ArrowLeft className="h-4 w-4" />
      Alle cases
    </Link>
  </div>
</section>
```

**Kenmerken:**
- Eigen sectie tussen Navigation en Hero
- Witte achtergrond met 4px border onderaan
- Compacte padding (py-4)
- Links uitgelijnd (volgt standard container)
- ArrowLeft icon voor duidelijke "terug" actie
- Hover effect: text-black/60 → text-black

### Hero Sectie (Case Study)

```tsx
<section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
  {/* Grid pattern */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl">
      <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
        CASE STUDY  {/* of KLANTINTERVIEW */}
      </p>
      <h1 className="mb-8 text-brutalist-hero text-black">
        Case Study Titel
      </h1>
      <div className="h-1 w-32 bg-accent mb-8"></div>
      <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
        Korte introductie met de belangrijkste resultaten.
      </p>
    </div>
  </div>
</section>
```

### Featured Image (Case Study)

```tsx
<section className="relative border-b-4 border-black bg-black py-16 lg:py-20">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="relative mx-auto max-w-5xl">
      <div className="relative border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
        <Image
          src="/cases/afbeelding.jpg"
          alt="Beschrijving"
          width={1200}
          height={675}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  </div>
</section>
```

### Article Content (Case Study)

```tsx
<article className="relative bg-white">
  {/* Sectie 1 */}
  <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
    <div className="mx-auto max-w-screen-2xl px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-brutalist-h2 text-black">
          Sectie Titel
        </h2>

        <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
          <p>
            Paragraaf tekst hier.
          </p>

          {/* Inline afbeelding */}
          <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
            <Image
              src="/cases/inline-afbeelding.jpg"
              alt="Beschrijving"
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Herhaal structuur voor volgende secties */}
</article>
```

### Case Study Specifieke Elementen

**Quote blocks (voor klantinterviews):**
```tsx
<div className="border-l-4 border-accent pl-6 my-8">
  <p className="text-base font-bold text-black lg:text-lg xl:text-xl italic">
    "Quote tekst hier van de klant"
  </p>
</div>
```

**Resultaten lijst:**
```tsx
<ul className="space-y-4 list-none">
  <li className="flex items-start">
    <span className="mr-3 text-accent">▸</span>
    <span><strong>Metric:</strong> Resultaat</span>
  </li>
</ul>
```

**Subheadings (H3):**
```tsx
<h3 className="text-brutalist-h3 text-black mt-12 mb-6">
  Subheading Tekst
</h3>
```

### Final CTA Sectie (Case Study)

```tsx
<section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="mb-8 text-brutalist-h1 text-black">
        Ook goed vindbaar worden?
      </h2>
      <p className="mb-12 text-base font-bold text-black lg:text-lg xl:text-xl">
        Ontdek alles over mijn full service aanpak
      </p>
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
          <Link href="/full-service-seo">
            FULL SERVICE SEO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button size="lg" asChild className="bg-white text-black border-black hover:bg-black hover:text-white px-8 py-5 text-base">
          <Link href="/contact">
            <Phone className="mr-2 h-5 w-5" />
            NEEM CONTACT OP
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
```

### Case Study vs Blog Artikel - Verschillen

| Element | Case Study | Blog Artikel |
|---------|-----------|--------------|
| Breadcrumb | JA - "← Alle cases" boven hero | GEEN |
| Label | "CASE STUDY" of "KLANTINTERVIEW" (text-black/60) | Categorie naam (text-black/60) |
| Author info | GEEN (geen User/Clock icons) | JA (User + Clock icons) |
| Featured image | 12px lime shadow | 12px lime shadow |
| Content secties | Meerdere secties met `border-b-4` | Eén lange article tag |
| Quote styling | Border-left + italic | Niet standaard |
| Resultaten lijst | Met `▸` bullets en bold metrics | Standaard bullets |
| CTA buttons | Twee buttons (Full Service + Contact) | Eén button |

### Case Study Afbeeldingen

**Afbeeldingen locatie:** `/public/cases/`

**Naming convention:**
- Hero: `[case-naam]-hero.jpg` of `.png`
- Inline: `[case-naam]-[beschrijving].jpg` of `.png`

Voorbeeld:
```
/public/cases/
  bloemist-hero.jpg
  bloemist-groei-bezoekers-1.jpg
  bloemist-omzet.jpg
  webshop-hero.jpg
  webshop-verkeer.jpg
  makelaar-hero.jpg
  dakdekker-hero.png
  dakdekker-clicks.png
```

### Case Study Checklist

Bij het maken van een nieuwe case study:

- [ ] Case map op ROOT niveau (`/app/[exact-url-van-live-site]/page.tsx`)
- [ ] Navigation component importeren
- [ ] Breadcrumb sectie met "← Alle cases" link naar `/cases`
- [ ] Hero met "CASE STUDY" of "KLANTINTERVIEW" label (text-black/60)
- [ ] GEEN User/Clock icons (dit is geen blog)
- [ ] Featured image met 12px lime shadow
- [ ] Content opgedeeld in meerdere sections (elk met `border-b-4`)
- [ ] H2 koppen zonder border styling (simpel `text-brutalist-h2`)
- [ ] H3 subheadings waar nodig (`text-brutalist-h3`)
- [ ] Quote blocks met border-left voor klant quotes
- [ ] Resultaten met `▸` bullets
- [ ] Inline afbeeldingen met 8px zwarte shadow
- [ ] Final CTA met TWEE buttons (Full Service + Contact)
- [ ] Footer (standaard)
- [ ] Afbeeldingen in `/public/cases/` map

### Bestaande Case Studies

| Case | URL |
|------|-----|
| Bloemist | `/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet` |
| Technische Webshop | `/145-omzet-uit-organisch-verkeer-voor-technische-webshop` |
| Makelaar | `/klantinterview-seo-voor-een-makelaarskantoor` |
| Dakdekker | `/seo-succesverhaal-dakdekker-in-haarlem` |

---

## Quick Reference Cheat Sheet

### Meest Gebruikte Classes

```jsx
// Container
"mx-auto max-w-screen-2xl px-6"

// Sectie wit
"relative border-b-4 border-black bg-white py-24 lg:py-32"

// Sectie zwart
"relative border-y-4 border-black bg-black py-24 text-white lg:py-32"

// Sectie accent
"relative border-b-4 border-black bg-accent py-24 lg:py-32"

// Card basis
"border-4 border-black bg-white transition-all"

// Lime shadow
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}

// Zwarte shadow
style={{ boxShadow: '8px 8px 0 0 #000000' }}

// Body text
"text-base font-bold lg:text-lg xl:text-xl"

// Label
"text-base font-bold uppercase tracking-wider"

// Accent lijn
"h-1 w-32 bg-accent"
```

### CTA Button Templates

```jsx
// Primary (default)
<Button size="lg" asChild className="text-base px-8 py-5">

// Op zwart
<Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base">

// Final CTA (op lime)
<Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
```

---

*Laatst bijgewerkt: December 2025*
*Versie: 2.2 - Blog artikel patronen toegevoegd*
