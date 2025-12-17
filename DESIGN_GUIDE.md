# Vizibly Design System & Implementation Guide

> **Versie:** 2.1
> **Laatst bijgewerkt:** 17 december 2024
> **Status:** Homepage, SEO Strategie, Over Ons, Contact LIVE - HIGH-END standaard vastgesteld

---

## 🎨 Design Filosofie

### Brutalist Design Principes
- **Geen afgeronde hoeken** - Alles is vierkant met scherpe 90° hoeken
- **Dikke borders** - Standaard 4px borders overal
- **Hoog contrast** - Zwart, wit, en lime groen (#ccff00)
- **Raw & Direct** - Geen franje, directe communicatie
- **Edgy & Modern** - Subtiele animaties en glitch effecten
- **Lime schaduwen** - Brutalist box shadows met lime accent voor tegel effect ⭐ NIEUW

---

## 🌟 HIGH-END DESIGN ELEMENTEN (STANDAARD V2.0)

### Brutalist Shadows - Het Tegel Effect

**KRITISCHE REGEL:** Alle cards en interactieve elementen krijgen lime of zwarte brutalist schaduwen voor dat "tegel" effect.

#### Stats Cards & Important Elements
```jsx
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
```
- **Gebruik voor:** Stats cards, belangrijke metrics, featured content
- **Lime accent shadow** voor extra aandacht
- **8px offset** rechts en onder

#### Service Cards & Standard Cards
```jsx
style={{ boxShadow: '8px 8px 0 0 #000000' }}
```
- **Gebruik voor:** Service tiles, standard cards
- **Zwarte shadow** voor clean look
- **8px offset** rechts en onder

#### Case Studies & Large Cards
```jsx
style={{ boxShadow: '12px 12px 0 0 #000000' }}
```
- **Gebruik voor:** Case studies, portfolio items, grote featured cards
- **Grotere shadow** (12px) voor meer impact
- **Zwart** voor clean professional look

#### Blog/Knowledge Cards
```jsx
style={{ boxShadow: '8px 8px 0 0 #ccff00' }}
```
- **Gebruik voor:** Blog cards, knowledge base items
- **Lime accent** om ze te onderscheiden
- **8px offset**

### Hover Effecten - Layered Depth

#### Stats Cards (Lift + Shadow)
```jsx
className="transition-all duration-300 hover:-translate-y-1"
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
```
- Lift omhoog (-translate-y-1)
- Shadow blijft zitten = meer diepte effect
- 300ms smooth transition

#### Logo/Client Cards (Lift + Rotate + Glow)
```jsx
className="group transition-all duration-300 hover:-translate-y-2 hover:rotate-1"
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
```
- Grotere lift (-translate-y-2)
- Subtle rotate (1deg) voor speelsheid
- Grayscale → Color transition
- Glow overlay (opacity-10 accent)

#### Service/Standard Cards (Shadow Shift)
```jsx
className="transition-all hover:translate-x-1 hover:translate-y-1"
style={{ boxShadow: '8px 8px 0 0 #000000' }}
```
- Card verschuift 1px rechts en onder
- Shadow lijkt te verschuiven
- Border → accent bij hover

### Overlapping Sections - Seamless Flow

#### Stats over Hero (Signature Move)
```jsx
// Hero section
<section className="relative overflow-hidden bg-white pt-32 pb-56 lg:pt-40 lg:pb-64">
  {/* Extra padding bottom voor stats ruimte */}
</section>

// Stats section
<section className="relative border-b-4 border-black bg-white py-16 lg:py-24 -mt-32 lg:-mt-40">
  {/* Negative margin trekt stats omhoog over hero */}
  <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
    {/* Content */}
  </div>
</section>
```

**Kenmerken:**
- Hero krijgt **extra padding-bottom** (pb-56/pb-64)
- Stats krijgt **negative margin-top** (-mt-32/-mt-40)
- Stats content heeft **z-10** om boven hero te zweven
- **Geen border tussen hero en stats** = 1 vloeiend geheel
- Zelfde **grid pattern doorgetrokken** over beide secties

**Waarom dit werkt:**
- Creëert visuele hiërarchie en flow
- Stats "zweven" uit de hero
- Geen harde scheiding tussen secties
- Modern en dynamisch

### Seamless Background Patterns

#### Grid Pattern Doortrekken
```jsx
// Hero section (geen border-bottom!)
<section className="relative overflow-hidden bg-white pt-32 pb-56">
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>
</section>

// Stats section (zelfde pattern!)
<section className="relative border-b-4 border-black bg-white -mt-32">
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>
</section>
```

**Regels:**
- **GEEN border tussen secties met zelfde achtergrondkleur** en pattern
- Pattern **exact hetzelfde** in beide secties
- Border alleen aan **onderkant laatste sectie** van groep

---

## 📐 Typography

### Font Sizes - Responsive Scaling

**Belangrijk:** Gebruik altijd responsive font sizes met breakpoints voor optimale leesbaarheid op alle schermformaten.

#### Hero Tekst
```css
.text-brutalist-hero {
  font-size: clamp(2.5rem, 8vw, 9rem);      /* Base/Mobile */

  @media (min-width: 1024px) {
    font-size: clamp(3.5rem, 10vw, 9rem);   /* Desktop */
  }

  @media (min-width: 1536px) {
    font-size: clamp(4rem, 12vw, 9rem);     /* Large screens */
  }
}
```

#### H1 Headings
```css
.text-brutalist-h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}
```

#### H2 Headings
```css
.text-brutalist-h2 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
}
```

#### Section Labels (UPPERCASE tekst boven headings)
```html
<p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg xl:text-xl">
  KENNIS & INZICHTEN
</p>
```

#### Body Tekst - KRITISCHE REGEL: ALTIJD font-bold

**BELANGRIJK:** Alle body tekst MOET `font-bold` hebben. Dit is essentieel voor de brutalist stijl.

**Standaard paragrafen (de meeste tekst):**
```html
<p className="text-xl font-bold text-black/80 xl:text-2xl">
  Als ondernemer wil je resultaat...
</p>
```

**Hero/intro paragrafen (grotere tekst):**
```html
<p className="text-xl font-bold text-white/80 xl:text-2xl 2xl:text-3xl">
  Vizibly zorgt dat potentiële klanten jóu vinden...
</p>
```

**Card beschrijvingen:**
```html
<CardDescription className="text-xl font-bold text-black">
  Met een 360-graden analyse brengen we...
</CardDescription>
```

**Bullet points:**
```html
<span className="text-lg font-bold text-black xl:text-xl">
  Bullet point tekst...
</span>
```

### Typography Regels

1. **ALLE tekst moet `font-bold` hebben**
   - Geen uitzondering - dit is het brutalist kenmerk
   - Zonder font-bold ziet tekst er "dun" en "zwak" uit

2. **Standaard body text size: `text-xl xl:text-2xl`**
   - Dit is groter dan default maar past bij brutalist esthetiek
   - Gebruik `text-lg xl:text-xl` alleen voor secundaire/kleinere tekst

3. **Gebruik NOOIT em dashes (—) of en dashes (–)**
   - Alleen gewone hyphens (-) voor woordkoppelingen
   - Hyphen alleen voor: '360-graden', 'data-driven', 'on-page' etc.

4. **Behoud originele teksten**
   - Gebruik altijd exacte Vizibly bewoordingen

5. **Responsive sizing**
   - Altijd `xl:` en `2xl:` breakpoints gebruiken

---

## 🎨 Kleurenpalet

### Primaire Kleuren
```css
--background: #ffffff;        /* Pure white */
--foreground: #000000;        /* Pure black */
--accent: #ccff00;            /* Lime green - CTAs en shadows! */
--primary: #000000;           /* Black */
```

### Border & Shadow
```css
border-black         /* 4px solid black */
border-accent        /* 4px solid lime - hover */
boxShadow: '8px 8px 0 0 #CCFF00'   /* Lime brutalist shadow */
boxShadow: '8px 8px 0 0 #000000'   /* Black brutalist shadow */
boxShadow: '12px 12px 0 0 #000000' /* Large black shadow */
```

---

## 🎯 Iconen & Visual Elements

### KRITISCHE REGEL: Geen Emoticons

**NOOIT emoticons gebruiken** (zoals 📆 🏢 📈 💶 etc.)
**ALTIJD Lucide Icons gebruiken**

### Icon Imports
```tsx
import {
  Search, FileText, Link2, Code, MapPin, Megaphone,
  ArrowRight, BarChart, TrendingUp, Target, Zap, Eye
} from 'lucide-react';
```

### Icon Sizes
```tsx
h-4 w-4    /* 16px - kleine accenten */
h-6 w-6    /* 24px - buttons, navigatie */
h-10 w-10  /* 40px - service cards (standaard) */
h-12 w-12  /* 48px - hero sections */
```

---

## 🎭 Achtergrond Patronen

### Pattern Types & Gebruik

#### Grid Pattern (Hero, Stats)
```jsx
<div className="absolute inset-0 opacity-5" style={{
  backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
}}></div>
```
- **Opacity:** 0.05 (5%) - sterker dan andere patterns
- **Use case:** Hero section, Stats section
- **Kleur:** Zwart op wit

#### Diagonal Pattern (Zwarte Secties)
```jsx
<div className="absolute inset-0 opacity-[0.03]" style={{
  backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
}}></div>
```
- **Opacity:** 0.03 (3%) - subtiel
- **Use case:** Intro, Process, Blog, Footer, Klanten
- **Kleur:** Wit op zwart

### Pattern Regels

1. **Witte secties ZONDER pattern:** Services, Cases, FAQ, CTA
2. **Zwarte secties MET diagonal pattern:** Alle zwarte content secties
3. **Hero + Stats MET grid pattern:** Voor visuele continuïteit
4. **Sectie altijd `relative`**, pattern div `absolute inset-0`, content wrapper `relative`

---

## 🎬 Animaties & Beweging

### Glitch Effect (Hero)
```jsx
<span className="relative inline-block animate-glitch">
  <span className="absolute -inset-2 bg-accent skew-y-1 animate-glitch-skew"></span>
  <span className="relative">je concurrent</span>
</span>
```

### Float Animation (ASCII)
```jsx
<div className="mb-8 font-mono text-xs text-black/20 hidden lg:block animate-float">
  ████████████████████████████████████████████████████████
</div>
```

### Card Hover States

#### Service Cards
```jsx
hover:translate-x-1 hover:translate-y-1 hover:border-accent
```

#### Stats Cards
```jsx
hover:-translate-y-1
```

#### Logo/Client Cards
```jsx
hover:-translate-y-2 hover:rotate-1
```

---

## 📦 Component Patterns V2.0

### Stats Cards (HIGH-END)
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

**Kenmerken:**
- **Lime border** (border-accent)
- **Lime shadow** (8px 8px #CCFF00)
- **Black background** voor contrast
- **Hover lift** (-translate-y-1)
- **Large accent numbers** (text-5xl lg:text-6xl)

### Client/Logo Cards (HIGH-END)
```jsx
<div
  className="group flex-shrink-0 flex items-center justify-center h-24 px-8
             border-4 border-black bg-white
             transition-all duration-300
             hover:border-accent hover:-translate-y-2 hover:rotate-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00', minWidth: '200px' }}
>
  <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300">
    <Image src={logo} alt={name} width={250} height={80} />
  </div>
  {/* Glow effect */}
  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
</div>
```

**Kenmerken:**
- **Lime shadow** voor tegel effect
- **Hover:** lift (-translate-y-2), rotate (1deg), border → accent
- **Grayscale → color** transition
- **Subtle glow** (opacity-10 accent overlay)

### Service Cards (STANDARD)
```jsx
<Link href={href} className="block">
  <Card
    className="group relative h-full overflow-hidden border-4 border-black bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent cursor-pointer"
    style={{ boxShadow: '8px 8px 0 0 #000000' }}
  >
    <CardHeader>
      <div className="mb-4 flex h-20 w-20 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
        <Icon className="h-10 w-10" />
      </div>
      <CardTitle className="text-2xl font-black uppercase">
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-xl text-black">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
</Link>
```

**Kenmerken:**
- **Black shadow** (8px 8px)
- **Hele card klikbaar**
- **Icon rotation** bij hover
- **Border → accent** bij hover

### Case Cards
```jsx
<Card
  className="overflow-hidden border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent"
  style={{ boxShadow: '12px 12px 0 0 #000000' }}
>
  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover transition-all duration-500 group-hover:scale-105"
    />
  </div>
  <CardHeader className="bg-white">
    <CardTitle className="text-2xl font-black uppercase">
      {title}
    </CardTitle>
  </CardHeader>
</Card>
```

**Kenmerken:**
- **Larger shadow** (12px 12px) voor impact
- **Image scale** bij hover
- **Border → accent** bij hover

### Blog Cards
```jsx
<Card
  className="h-full overflow-hidden border-4 border-accent bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1"
  style={{ boxShadow: '8px 8px 0 0 #ccff00' }}
>
  <div className="relative aspect-video overflow-hidden border-b-4 border-accent">
    <Image
      src={image}
      alt={title}
      fill
      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
    />
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent"></div>
  </div>
  <CardHeader>
    <CardTitle className="text-2xl font-black uppercase">
      {title}
    </CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription className="text-xl font-bold text-black/70">
      {excerpt}
    </CardDescription>
  </CardContent>
</Card>
```

**Kenmerken:**
- **Lime border EN shadow**
- **Grayscale → color** image
- **Accent strip** onderaan image

---

## 📱 Responsive Breakpoints

```css
base:     < 640px      /* Mobile */
sm:       640px+       /* Large mobile */
md:       768px+       /* Tablet */
lg:       1024px+      /* Desktop */
xl:       1280px+      /* Large desktop */
2xl:      1536px+      /* Extra large */
```

### Container Max-Width
```css
max-w-screen-2xl     /* 1536px - STANDAARD CONTAINER */
```

---

## 🎯 Buttons & CTAs

### KRITISCHE REGEL: Consistente Button Teksten

**Standaard CTA teksten (ALTIJD gebruiken):**
- **Primary CTA:** `NEEM CONTACT OP` - Voor alle contact/conversie buttons
- **Final CTA (lime sectie):** `LET'S GO!!` - Alleen voor de laatste CTA sectie van een pagina
- **Secundaire:** `BEKIJK CASES`, `OVER VIZIBLY`, etc.

**NOOIT gebruiken:**
- ~~PLAN JE GROEIGESPREK~~
- ~~PLAN JE 15-MINUTEN ANALYSE~~
- ~~VRAAG GRATIS KENNISMAKING AAN~~
- ~~MAAK DIRECT KENNIS~~

### Primary CTA (Lime op wit/zwart)
```jsx
<Button asChild size="lg" className="bg-accent text-black border-accent hover:bg-white px-12 py-8 text-lg">
  <Link href="/contact">
    NEEM CONTACT OP
    <ArrowRight className="ml-3 h-6 w-6" />
  </Link>
</Button>
```

### Final CTA (Zwart op lime sectie)
```jsx
<Button asChild size="lg" className="bg-black text-white border-black hover:bg-white hover:text-black px-12 py-8 text-lg">
  <Link href="/contact">
    LET'S GO!!
    <ArrowRight className="ml-3 h-6 w-6" />
  </Link>
</Button>
```

### Secondary CTA (Outline)
```jsx
<Button size="lg" variant="outline" asChild className="text-lg px-12 py-8">
  <Link href="/over-ons">OVER VIZIBLY</Link>
</Button>
```

---

## 📊 Navigatie

### Header Styling (V2.1)

**De header is aanweziger maar niet overweldigend:**

```jsx
<nav className="sticky top-0 z-50 border-b-4 border-black bg-black text-white shadow-[0_4px_20px_rgba(204,255,0,0.15)]">
  {/* Diagonal stripes pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-screen-2xl px-6 py-4">
    <div className="hidden md:flex md:items-center md:gap-6 lg:gap-10">
      {/* 5-sterren review */}
      <a className="text-base font-black uppercase border-r-2 border-accent pr-6 lg:pr-10 text-accent">
        ★★★★★ 5/5
      </a>

      {/* Nav links */}
      <Link className="text-lg font-bold uppercase hover:text-accent transition-colors">
        Home
      </Link>

      {/* Contact button */}
      <Button asChild size="lg" className="ml-4 bg-accent text-black border-accent hover:bg-white text-lg px-8 py-6">
        <Link href="/contact">CONTACT</Link>
      </Button>
    </div>
  </div>
</nav>
```

**Header elementen:**
- **Nav links:** `text-lg font-bold uppercase` (was text-base)
- **5-sterren review:** `text-base font-black` (was text-sm font-bold)
- **CONTACT button:** `size="lg"` met `px-8 py-6 text-lg` (groter dan voorheen)
- **Gap tussen items:** `gap-10` (was gap-8)
- **Diagonal stripes:** `opacity-[0.03]` met 2px/30px spacing

**BELANGRIJK:** `sticky` (niet `relative sticky`) - werkt alleen met `overflow-x: clip`

---

## 🦶 Footer Styling (V2.1)

### Footer Template
```jsx
<footer className="relative bg-black py-16 text-white">
  {/* Diagonal pattern */}
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
        <p className="text-xl font-bold text-white/80">
          SEO specialist die zorgt dat je gevonden wordt.
        </p>
      </div>

      {/* Diensten kolom */}
      <div>
        <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Diensten</h4>
        <ul className="space-y-4">
          <li><Link href="/seo-strategie" className="text-lg font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
          {/* Actieve pagina krijgt text-accent i.p.v. text-white/80 */}
        </ul>
      </div>

      {/* Contact kolom */}
      <div>
        <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Contact</h4>
        <ul className="space-y-4 text-lg font-bold text-white/80">
          <li>Vizibly</li>
          <li>'t Zanddorp 55</li>
          <li>4335 AE Middelburg</li>
          <li><a href="tel:0628206410" className="hover:text-accent transition-colors">0628206410</a></li>
          <li><a href="mailto:info@vizibly.nl" className="hover:text-accent transition-colors">info@vizibly.nl</a></li>
          <li>KvK: 68478143</li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t-4 border-white/20 pt-8 text-center">
      <p className="text-base font-bold uppercase text-white/60">
        © {new Date().getFullYear()} VIZIBLY. ALLE RECHTEN VOORBEHOUDEN.
      </p>
    </div>
  </div>
</footer>
```

**Footer elementen:**
- **Headers:** `text-xl font-black uppercase` (was text-lg font-bold)
- **Links:** `text-lg font-bold` (was geen size = te klein)
- **Contact info:** `text-lg font-bold`
- **Spacing:** `space-y-4` (was space-y-3)
- **Copyright:** `text-base font-bold` (expliciet)
- **Actieve pagina:** Link krijgt `text-accent` i.p.v. `text-white/80`

---

## 🖱️ Custom Scrollbar (UPDATED)

### Brutalist Scrollbar V2.0
```css
::-webkit-scrollbar {
  width: 24px;  /* Breder! Was 16px */
}

::-webkit-scrollbar-track {
  background: #000000;
  border-left: 4px solid #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #ccff00;
  border: 4px solid #000000;  /* 4px! Was 3px */
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

/* Firefox */
* {
  scrollbar-width: auto;  /* Was thin */
  scrollbar-color: #ccff00 #000000;
}
```

**Updates:**
- **24px breed** (van 16px) - past beter bij 4px borders
- **4px thumb border** (van 3px) - consistent met brutalist theme
- **scrollbar-width: auto** (van thin) voor bredere weergave in Firefox

---

## 🔧 Technical Implementation

### Overflow Fix voor Sticky Header
```css
/* globals.css */
html {
  overflow-x: clip;  /* NIET hidden! */
}
body {
  overflow-x: clip;
  max-width: 100vw;
}
```

**Waarom `clip` i.p.v. `hidden`:**
- `overflow-x: hidden` breekt sticky positioning
- `overflow-x: clip` voorkomt horizontaal scrollen én behoudt sticky
- Modern CSS property, werkt in alle moderne browsers

### Automatische Cursor Glow Effect
```css
/* globals.css - automatisch op alle links en buttons */
a, button {
  cursor: pointer;
  position: relative;
  overflow: visible;
}

a::before, button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(204, 255, 0, 0.4) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
  pointer-events: none;
  z-index: 0;
  border-radius: 50%;
}

a:hover::before, button:hover::before {
  width: 200px;
  height: 200px;
  opacity: 1;
}

/* Ensure content stays on top */
button > *, a > * {
  position: relative;
  z-index: 1;
}
```

**Wat doet dit:**
- **Automatische lime glow** op hover van alle links en buttons
- **200px radiale gradient** met lime green (40% opacity)
- **Smooth fade in/out** (0.3s transition)
- **Geen JavaScript nodig** - pure CSS ::before pseudo-element
- **Content blijft boven** dankzij z-index op child elements

**Voordelen:**
- Visuele feedback op alle interactieve elementen
- Consistent gedrag door hele site
- Lightweight (geen performance impact)
- Automatisch op alle nieuwe buttons/links

### Global Utility Classes

**Brutalist Base Overrides:**
```css
/* Alle borders worden automatisch 4px */
.border {
  border-width: 4px;
}

/* Alle corners zijn scherp (geen afrondingen) */
* {
  border-radius: 0 !important;
}

/* Button styling automatisch */
button, .btn {
  font-weight: 600;
  border: 4px solid #000000;
  transition: all 0.15s ease;
}

button:hover, .btn:hover {
  background-color: #ccff00;
  color: #000000;
  border-color: #000000;
}

/* Card base styling */
.card {
  border: 4px solid #000000;
  background: #ffffff;
}

/* Section borders altijd zwart */
section {
  border-color: #000000;
}
```

**Color Utility Classes:**
```css
/* Lime accent tekst met zwarte text-shadow */
.text-lime-accent {
  color: #ccff00;
  text-shadow: 2px 2px 0 #000000;
}

/* Zwarte sectie achtergrond */
.bg-brutalist-dark {
  background-color: #000000;
  color: #ffffff;
}

/* Lime CTA achtergrond */
.bg-brutalist-lime {
  background-color: #ccff00;
  color: #000000;
}
```

**Wanneer gebruiken:**
- `.text-lime-accent` - Voor hero tekst accenten, belangrijke callouts
- `.bg-brutalist-dark` - Zwarte secties (automatisch white text)
- `.bg-brutalist-lime` - CTA sections, accenten (automatisch black text)
- `.border` - Automatisch 4px (niet handmatig toevoegen, gebeurt globaal)

---

## ✅ Implementatie Checklist V2.1

### TYPOGRAPHY (KRITISCH!)
- [ ] **ALLE body tekst heeft `font-bold`** - geen uitzonderingen!
- [ ] Standaard paragraphs: `text-xl font-bold xl:text-2xl`
- [ ] Bullet points: `text-lg font-bold xl:text-xl`
- [ ] Responsive breakpoints (xl: en 2xl:)
- [ ] Geen em/en dashes

### CTA BUTTONS (KRITISCH!)
- [ ] Primary CTAs: **"NEEM CONTACT OP"** (niet "Plan je groeigesprek" etc.)
- [ ] Final CTA (lime sectie): **"LET'S GO!!"**
- [ ] Alle buttons consistent door hele site

### HEADER (V2.1)
- [ ] Nav links: `text-lg font-bold uppercase`
- [ ] 5-sterren: `text-base font-black`
- [ ] CONTACT button: `size="lg"` met `px-8 py-6 text-lg`
- [ ] Gap: `gap-10`
- [ ] Diagonal stripes: `opacity-[0.03]` met 2px/30px

### FOOTER (V2.1)
- [ ] Headers: `text-xl font-black uppercase`
- [ ] Links: `text-lg font-bold`
- [ ] Contact info: `text-lg font-bold`
- [ ] Spacing: `space-y-4`
- [ ] Copyright: `text-base font-bold`
- [ ] Actieve pagina link: `text-accent`

### HIGH-END ELEMENTEN
- [ ] Stats cards hebben **lime shadows** (8px 8px #CCFF00)
- [ ] Stats cards hebben **hover lift** (-translate-y-1)
- [ ] Logo/client cards hebben **lime shadows**
- [ ] Logo cards hebben **lift + rotate + glow** hover
- [ ] Service cards hebben **zwarte shadows** (8px 8px #000000)
- [ ] Case cards hebben **grotere shadows** (12px 12px)
- [ ] Blog cards hebben **lime borders EN shadows**
- [ ] Overlapping sections correct geïmplementeerd met negative margins
- [ ] Grid pattern doorgetrokken zonder borders tussen hero en stats

### STICKY HEADER
- [ ] Navigation heeft `sticky` class (niet `relative sticky`)
- [ ] `overflow-x: clip` in globals.css (niet `hidden`)
- [ ] Navigation heeft `z-50`

### SCROLLBAR
- [ ] Scrollbar is **24px breed**
- [ ] Thumb border is **4px** (consistent)
- [ ] Firefox `scrollbar-width: auto`

### PATTERNS
- [ ] Hero + Stats hebben zelfde grid pattern
- [ ] GEEN border tussen hero en stats
- [ ] Zwarte secties hebben diagonal pattern (0.03 opacity)
- [ ] Witte secties GEEN pattern

### SHADOWS & HOVER
- [ ] Alle cards hebben brutalist shadows
- [ ] Juiste shadow kleur per card type (lime/zwart)
- [ ] Hover effects consistent per card type
- [ ] Transitions zijn 300ms

### LAYOUT
- [ ] Container is `max-w-screen-2xl` (1536px)
- [ ] Padding is `px-6`
- [ ] Sections hebben `py-16 lg:py-24`

---

## 🚀 Quick Start Nieuwe Pagina

### 1. Stats Section Template (HIGH-END)
```jsx
<section className="relative border-b-4 border-black bg-white py-16 lg:py-24 -mt-32 lg:-mt-40">
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>

  <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
      {/* Stats cards met lime shadows */}
    </div>
  </div>
</section>
```

### 2. Logo/Client Carousel Template
```jsx
<section className="relative border-y-4 border-black bg-black py-16 lg:py-24">
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative">
    <div className="flex gap-16 animate-scroll-left">
      {/* Logo cards met lime shadows en hover effects */}
    </div>
  </div>
</section>
```

### 3. Service Cards Grid Template
```jsx
<section className="relative border-b-4 border-black bg-white py-32 lg:py-40">
  <div className="mx-auto max-w-screen-2xl px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Service cards met zwarte shadows */}
    </div>
  </div>
</section>
```

---

## 🎯 Do's & Don'ts V2.1

### ✅ TYPOGRAPHY DO's (KRITISCH!)
- **ALTIJD font-bold op alle body tekst** - zonder uitzondering
- **text-xl xl:text-2xl** voor standaard paragraphs
- **text-lg xl:text-xl** voor bullet points en secundaire tekst
- **Responsive breakpoints** altijd gebruiken

### ✅ CTA DO's
- **"NEEM CONTACT OP"** voor primary CTAs
- **"LET'S GO!!"** voor final CTA (lime sectie)
- **Consistent door hele site**

### ✅ HIGH-END DO's
- **Gebruik altijd brutalist shadows** op alle cards
- **Lime shadows** voor featured/important content (stats, clients, blog)
- **Zwarte shadows** voor standard content (services, cases)
- **Grotere shadows** (12px) voor hero/featured cards
- **Hover lifts** voor depth effect
- **Overlapping sections** voor seamless flow
- **Grid patterns doortrekken** zonder borders tussen gelijke secties
- **24px scrollbar** voor consistent brutalist feel

### ❌ TYPOGRAPHY DON'Ts
- **GEEN tekst zonder font-bold** - ziet er "dun" en "zwak" uit
- **GEEN text-base/text-sm** voor body tekst - te klein
- **GEEN inconsistente button teksten** (geen "Plan je groeigesprek" variaties)

### ❌ HIGH-END DON'Ts
- **GEEN cards zonder shadows** - looks flat and cheap
- **GEEN borders tussen hero en stats** - breekt de flow
- **GEEN overflow-x: hidden** - breekt sticky header
- **GEEN 16px scrollbar** - te dun voor brutalist theme
- **GEEN grayscale images** zonder hover color effect
- **GEEN small shadows** - minimaal 8px offset

---

## 📝 Code Snippets Library

### Complete Stats Card with Lime Shadow
```jsx
<div
  ref={ref}
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

### Complete Logo Card with Effects
```jsx
<div
  className="group flex-shrink-0 flex items-center justify-center h-24 px-8
             border-4 border-black bg-white
             transition-all duration-300
             hover:border-accent hover:-translate-y-2 hover:rotate-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00', minWidth: '200px' }}
>
  <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300">
    <Image src={logo} alt={name} width={250} height={80} className="object-contain max-h-16 w-auto" />
  </div>
  <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
</div>
```

### Overlapping Sections Pattern
```jsx
{/* Hero with extra padding */}
<section className="relative overflow-hidden bg-white pt-32 pb-56 lg:pt-40 lg:pb-64">
  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: '...' }}></div>
  {/* Content */}
</section>

{/* Stats overlapping hero */}
<section className="relative border-b-4 border-black bg-white py-16 lg:py-24 -mt-32 lg:-mt-40">
  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: '...' }}></div>
  <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
    {/* Stats cards */}
  </div>
</section>
```

---

## 📞 Samenvatting

**Versie 2.1 bevat:**
- ✅ Lime en zwarte brutalist shadows op alle cards
- ✅ Advanced hover effects (lift, rotate, glow)
- ✅ Overlapping sections met negative margins
- ✅ Seamless patterns zonder borders
- ✅ 24px scrollbar met 4px borders
- ✅ overflow-x: clip voor sticky header
- ✅ High-end client carousel met effects

**V2.1 Updates:**
- ✅ **ALLE body tekst heeft font-bold** - kritische regel
- ✅ **Standaard body text: text-xl xl:text-2xl** - grotere leesbaarheid
- ✅ **Consistente CTA teksten:** "NEEM CONTACT OP" en "LET'S GO!!"
- ✅ **Header verbeterd:** Grotere nav links (text-lg), grotere button, meer spacing
- ✅ **Footer verbeterd:** Grotere tekst (text-lg/text-xl), meer spacing (space-y-4)
- ✅ **Diagonal stripes in header** voor consistente brutalist feel

**Voltooide pagina's:**
- ✅ Homepage
- ✅ SEO Strategie
- ✅ Over Ons
- ✅ Contact

**Nog te bouwen:**
- [ ] SEO Copy
- [ ] Linkbuilding
- [ ] Local SEO
- [ ] Cases
- [ ] Blog (Vizie)

**Dit is nu de STANDAARD voor de hele site!**

**Laatste update:** 17 december 2024
**Status:** V2.1 - Typography, Header & Footer geoptimaliseerd

---

_Deze guide definieert het PREMIUM niveau voor de hele Vizibly website._
