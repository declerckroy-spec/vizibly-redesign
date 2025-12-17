# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16** (App Router) website redesign for Vizibly, a Dutch SEO agency. The site uses a **brutalist design aesthetic** with strict design rules documented in accompanying files.

**Stack:** Next.js 16.0.10, React 19, TypeScript 5, Tailwind CSS 4, shadcn/ui components

**Language:** Dutch (nl-NL) - all content and UI text is in Dutch

## Development Commands

```bash
# Development server (hot reload enabled)
npm run dev

# Production build (includes TypeScript checking)
npm run build

# Start production server
npm start

# Linting
npm run lint
```

## Critical Architecture Rules

### 1. Brutalist Design System V2.0 (HIGH-END)

**MUST READ FIRST:** `DESIGN_GUIDE.md` contains the complete design system. Every new page/component MUST follow these rules:

- **NO rounded corners** - Everything is sharp 90° angles (`--radius: 0px`)
- **4px borders** everywhere - No exceptions
- **Color palette ONLY:** Black (#000000), White (#ffffff), Lime (#ccff00)
- **Brutalist shadows REQUIRED** - All cards/elements get `boxShadow: '8px 8px 0 0 #CCFF00'` (lime) or `'8px 8px 0 0 #000000'` (black)
- **Typography:** Responsive scaling with `xl:` and `2xl:` breakpoints required
- **Patterns:** Black sections get subtle diagonal patterns (opacity 0.03), white sections stay clean

#### HIGH-END Shadow Standards (V2.0)

**CRITICAL RULE:** Every card, interactive element, or featured content needs brutalist shadows for that "tegel effect" (tile effect).

```jsx
// Stats cards, featured elements, important metrics
style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}  // Lime accent shadow

// Service cards, standard cards
style={{ boxShadow: '8px 8px 0 0 #000000' }}  // Black shadow

// Case cards, large featured elements
style={{ boxShadow: '12px 12px 0 0 #000000' }}  // Larger black shadow
```

**When to use lime vs black shadows:**
- **Lime (#CCFF00):** Stats, metrics, client logos, blog cards, featured content
- **Black (#000000):** Service cards, standard cards, most interactive elements

#### HIGH-END Hover Effects (V2.0)

**Standard hover patterns:**

```jsx
// Stats cards - subtle lift
className="transition-all duration-300 hover:-translate-y-1"

// Logo/client cards - lift + rotate + glow (ADVANCED)
className="group transition-all duration-300
           hover:border-accent hover:-translate-y-2 hover:rotate-1"
// Plus glow overlay inside:
<div className="absolute inset-0 bg-accent opacity-0
                group-hover:opacity-10 transition-opacity duration-300"></div>

// Service cards - shadow shift
className="transition-all duration-300
           hover:translate-x-1 hover:translate-y-1 hover:border-accent"

// Logo grayscale to color
className="relative grayscale group-hover:grayscale-0 transition-all duration-300"
```

### 2. Typography System

Custom Tailwind classes defined in `globals.css`:

```css
.text-brutalist-hero  /* Hero headings - responsive clamp() */
.text-brutalist-h1    /* H1 headings */
.text-brutalist-h2    /* H2 headings */
.text-brutalist-h3    /* H3 headings */
```

**Body text pattern (CRITICAL - always include font-bold!):**
```jsx
<p className="text-xl font-bold xl:text-2xl 2xl:text-3xl">
```

**IMPORTANT:** ALL body text MUST have `font-bold`. Without it, text looks thin and weak.

Always use responsive sizing for readability on 1440px-4K displays.

### 3. Overlapping Sections Pattern (V2.0)

**CRITICAL HIGH-END TECHNIQUE:** Stats and hero sections overlap for seamless integration.

```jsx
// Hero section - extra padding bottom for overlap space
<section className="relative overflow-hidden bg-white
                   pt-32 pb-56 lg:pt-40 lg:pb-64">
  {/* Grid pattern */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>
  {/* Content */}
</section>

// Stats section - negative margin pulls it up over hero
<section className="relative border-b-4 border-black bg-white
                   py-16 lg:py-24 -mt-32 lg:-mt-40">
  {/* Same grid pattern extends seamlessly */}
  <div className="absolute inset-0 opacity-5" style={{
    backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
  }}></div>

  <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
    {/* Stats content floats above with z-10 */}
  </div>
</section>
```

**Rules for overlapping:**
- Hero gets `pb-56 lg:pb-64` (extra padding bottom)
- Stats gets `-mt-32 lg:-mt-40` (negative margin top)
- Stats content needs `z-10` to float above hero
- **NO border between sections** - extend pattern seamlessly
- Same pattern background on both sections for continuity

### 4. Content Rules

**Critical:** NEVER use em dashes (—) or en dashes (–). Only use hyphens (-) for compound words like:
- ✅ "360-graden", "data-driven", "on-page"
- ❌ "analysis - detailed approach" (use comma/period instead)

**Always preserve original Vizibly text** unless explicitly asked to shorten.

### 5. Component Patterns (V2.0 HIGH-END)

#### Stats Cards (HIGH-END - with lime shadows)
```jsx
<div
  className="relative flex flex-col items-center gap-3
             border-4 border-accent bg-black p-8 text-center
             transition-all duration-300 hover:-translate-y-1"
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

#### Client/Logo Cards (HIGH-END - advanced hover)
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
  <div className="absolute inset-0 bg-accent opacity-0
                  group-hover:opacity-10 transition-opacity duration-300
                  pointer-events-none"></div>
</div>
```

#### Service/Feature Cards (STANDARD - black shadows)
```jsx
<Link href="/url" className="block">
  <Card className="group h-full border-4 border-black transition-all
                   hover:translate-x-1 hover:translate-y-1 hover:border-accent"
        style={{ boxShadow: '8px 8px 0 0 #000000' }}>
    <CardHeader>
      <div className="mb-4 flex h-20 w-20 items-center justify-center
                      border-4 border-black bg-accent
                      group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
        <Icon className="h-10 w-10" />
      </div>
      <CardTitle className="text-2xl font-black uppercase">Title</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-xl text-black">
        Description text
      </CardDescription>
    </CardContent>
  </Card>
</Link>
```

**Key points:**
- **ALL cards need shadows** - lime for featured, black for standard
- Entire card is clickable (wrapped in `<Link>`)
- NO "MEER INFO" text links inside cards
- `text-xl` for descriptions (not smaller)
- Box shadow: `8px 8px 0 0 #CCFF00` (lime) or `8px 8px 0 0 #000000` (black)

### 6. Critical Technical Implementation (V2.0)

#### STICKY HEADER FIX - CRITICAL
```css
/* globals.css - NEVER use overflow-x: hidden! */
html {
  overflow-x: clip;  /* NOT hidden - breaks sticky positioning */
}
body {
  overflow-x: clip;
  max-width: 100vw;
}
```

**Why this matters:**
- `overflow-x: hidden` creates a new containing block that breaks `position: sticky`
- `overflow-x: clip` prevents horizontal scrolling without breaking sticky
- This is CRITICAL for the navigation to stay sticky on scroll

#### BRUTALIST SCROLLBAR (V2.0)
```css
/* Wider scrollbar for consistency with 4px borders */
::-webkit-scrollbar {
  width: 24px;  /* NOT 16px - wider for brutalist consistency */
}

::-webkit-scrollbar-thumb {
  background: #ccff00;
  border: 4px solid #000000;  /* 4px like everything else */
  transition: background 0.3s ease;
}

/* Firefox */
* {
  scrollbar-width: auto;  /* NOT thin */
  scrollbar-color: #ccff00 #000000;
}
```

#### CONTAINER MAX-WIDTH
All sections use `max-w-screen-2xl` (1536px) for consistency:
```jsx
<div className="mx-auto max-w-screen-2xl px-6">
```

### 7. Section Pattern Template

Every section follows this structure:

```jsx
<section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
  {/* Subtle diagonal pattern - black sections only */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
  }}></div>

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Content here */}
  </div>
</section>
```

**Pattern rules:**
- Black sections: diagonal pattern at opacity 0.03
- White sections: NO pattern (for contrast)
- Hero/CTA sections: stronger patterns at opacity 0.05
- Grid pattern for process/technical sections

## File Architecture

```
app/
├── globals.css          # All animations, custom utilities, scrollbar
├── layout.tsx           # Root layout with fonts & metadata
├── page.tsx             # Homepage (reference implementation)
└── [service-pages]/     # Service pages (to be created)

components/
├── navigation.tsx       # Sticky header with mobile menu
├── stats-counter.tsx    # Animated stats component
└── ui/                  # shadcn/ui components (Accordion, Badge, Button, Card)

lib/
└── utils.ts             # cn() utility (clsx + tailwind-merge)
```

## Using Homepage as Reference

`app/page.tsx` (29.9KB) is the **complete reference implementation**. When creating new pages:

1. Copy section structure from homepage
2. Maintain heading hierarchy: Label → H2 → Accent line
3. Use same responsive font sizes
4. Apply patterns to black sections only
5. Reuse component patterns (cards, accordions)

## Animations & Effects

**All animations are CSS-based** (no JavaScript) for performance:

- **Glitch effect:** `animate-glitch` and `animate-glitch-skew` classes
- **Float animation:** `animate-float` class (ASCII blocks)
- **Hover glow:** Automatic on all `<a>` and `<button>` elements via CSS `::before` pseudo-element

**Custom scrollbar** is defined globally in `globals.css` (lime green thumb on black track).

## Image Handling

```jsx
import Image from 'next/image';

// Local images
<Image src="/logo.svg" alt="..." width={180} height={60} priority />

// Remote images (from vizibly.nl WordPress)
<Image src="https://vizibly.nl/wp-content/..." alt="..." fill className="object-cover" />
```

Remote domain `vizibly.nl` is configured in `next.config.ts`.

## Responsive Breakpoints

```
base:    < 640px      (Mobile)
md:      768px+       (Tablet)
lg:      1024px+      (Desktop)
xl:      1280px+      (Large desktop)
2xl:     1536px+      (Extra large)

Custom scaling at 1920px+ and 2560px+ (see globals.css)
```

**Container max-width scaling** prevents content from becoming too small on large displays (4K).

## SEO & Metadata

Each page should include:
- JSON-LD structured data (Organization, Service, FAQ schemas)
- Proper meta tags (title, description, OG, Twitter)
- Dutch language metadata (`lang="nl-NL"`)

See `app/layout.tsx` and `app/page.tsx` for examples.

## Performance Requirements

- **LCP target:** < 2.5s
- Use Next.js `<Image>` component for all images
- Lazy load images outside viewport
- CSS animations (GPU accelerated)
- No heavy JavaScript libraries

## Testing Checklist (V2.0 HIGH-END)

Before considering a page complete:

### Design V2.0 Checks
- [ ] **ALL cards have brutalist shadows** - lime or black, minimum 8px offset
- [ ] **Hover effects on all interactive elements** - lift, rotate, or glow
- [ ] **Overlapping sections use negative margins** with z-10 on content
- [ ] **NO borders between same-color sections** - extend patterns seamlessly
- [ ] **Sticky header works** - verify overflow-x: clip (not hidden)

### Standard Checks
- [ ] Responsive tested: 375px, 768px, 1440px, 1920px, 2560px
- [ ] All font sizes use responsive breakpoints (xl:, 2xl:)
- [ ] Patterns applied to black sections only
- [ ] All borders are 4px thick
- [ ] No rounded corners anywhere
- [ ] Cards are fully clickable (wrapped in Link)
- [ ] Images optimized with Next.js Image
- [ ] Heading hierarchy correct (no skipped levels)
- [ ] Container uses max-w-screen-2xl
- [ ] Tested in Chrome, Safari, Firefox

## Documentation Priority

When working on this codebase, consult in this order:

1. **DESIGN_GUIDE.md** - Complete design system, typography, colors, patterns, components
2. **TECHNICAL_REFERENCE.md** - CSS architecture, animations, performance patterns
3. **PROJECT_STATUS.md** - Current progress, what's done, what's next
4. **app/page.tsx** - Reference implementation to copy patterns from

## Common Patterns

**Heading structure:**
```jsx
<p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg xl:text-xl">
  SECTION LABEL
</p>
<h2 className="text-brutalist-h1 text-black">
  Main Heading
</h2>
<div className="h-1 w-32 bg-accent"></div>
```

**Bulletpoint list:**
```jsx
<div className="grid gap-4">
  {items.map((item, index) => (
    <div key={index} className="border-l-4 border-accent pl-4">
      <span className="text-lg font-bold text-white xl:text-xl 2xl:text-2xl">
        {item}
      </span>
    </div>
  ))}
</div>
```

**CTA button (Primary):**
```jsx
<Button asChild size="lg" className="bg-accent text-black border-accent hover:bg-white px-12 py-8 text-lg">
  <Link href="/contact">
    NEEM CONTACT OP
    <ArrowRight className="ml-3 h-6 w-6" />
  </Link>
</Button>
```

**CTA button (Final - lime section):**
```jsx
<Button asChild size="lg" className="bg-black text-white border-black hover:bg-white hover:text-black px-12 py-8 text-lg">
  <Link href="/contact">
    LET'S GO!!
    <ArrowRight className="ml-3 h-6 w-6" />
  </Link>
</Button>
```

**Service/Feature cards with icons:**
```jsx
import { Search, FileText, Link2, Code, MapPin, Megaphone } from 'lucide-react';

<Link href="/url" className="block">
  <Card className="group h-full border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1">
    <CardHeader>
      <div className="mb-4 flex h-20 w-20 items-center justify-center
                      border-4 border-black bg-accent text-black
                      group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
        <Search className="h-10 w-10" />
      </div>
      <CardTitle className="text-2xl font-black uppercase">Title</CardTitle>
    </CardHeader>
  </Card>
</Link>
```

## Icons & Visual Elements

**CRITICAL:** Never use emoticons (📆 🏢 📈 💶 etc.). Always use Lucide Icons instead.

**Common icon imports:**
```tsx
import {
  Search,      // Analyse & Research
  FileText,    // Content & Copywriting
  Link2,       // Linkbuilding
  Code,        // Techniek & Development
  MapPin,      // Local SEO
  Megaphone,   // Google Ads & Marketing
  ArrowRight,  // Navigation & CTAs
  BarChart,    // Analytics & Data
  TrendingUp,  // Groei & Succes
  Target,      // Strategie & Focus
  Zap,         // Snelheid & Performance
  Eye          // Zichtbaarheid & Rankings
} from 'lucide-react';
```

**Icon sizes:**
- `h-4 w-4` - kleine accenten (16px)
- `h-6 w-6` - buttons & navigatie (24px)
- `h-10 w-10` - service cards standaard (40px)
- `h-12 w-12` - hero sections (48px)

## What NOT to Do (V2.1 HIGH-END)

### Typography Don'ts (CRITICAL!)
- ❌ **Body text without `font-bold`** - looks thin and weak
- ❌ **Using text-base/text-sm for body text** - too small for brutalist style
- ❌ **Inconsistent CTA button text** - no "Plan je groeigesprek" variations, use "NEEM CONTACT OP"
- ❌ Use em/en dashes instead of hyphens
- ❌ Skip responsive breakpoints for text sizing

### Design Don'ts
- ❌ Add rounded corners (border-radius)
- ❌ Use colors outside black/white/lime palette
- ❌ Put patterns on white sections
- ❌ Make font sizes smaller than documented minimums
- ❌ Add "MEER INFO" text on cards (whole card should be clickable)
- ❌ Use JavaScript for animations (CSS only)
- ❌ **Use emoticons (📆 🏢 📈 💶 etc.) - ALWAYS use Lucide Icons instead**

### V2.1 HIGH-END Don'ts (CRITICAL)
- ❌ **Create cards without brutalist shadows** - looks flat and cheap
- ❌ **Use shadows smaller than 8px offset** - minimum is 8px 8px
- ❌ **Add borders between hero and stats sections** - breaks seamless flow
- ❌ **Use `overflow-x: hidden`** - breaks sticky positioning (use `clip` instead)
- ❌ **Forget hover effects** - all interactive elements need lift/rotate/glow
- ❌ **Skip the z-10 on overlapping content** - won't float properly
- ❌ **Use thin scrollbar** - 24px width for brutalist consistency
- ❌ **Mix shadow colors randomly** - lime for featured, black for standard
- ❌ **Create white gaps with borders** - extend patterns seamlessly

## Project Status

**Completed:** Homepage, SEO Strategie, Over Ons, Contact, Navigation, Footer, Core Components
**In Progress:** SEO Copy, Linkbuilding, Local SEO, Cases, Blog (Vizie)

When creating new pages, follow the exact patterns from homepage to maintain consistency.

### V2.1 Key Rules Summary
- **ALL body text needs `font-bold`** - no exceptions
- **Standard body text: `text-xl font-bold xl:text-2xl`**
- **CTA buttons: "NEEM CONTACT OP"** for primary, **"LET'S GO!!"** for final
- **Header:** Nav links `text-lg`, button `size="lg"`, gap `gap-10`
- **Footer:** Headers `text-xl font-black`, links `text-lg font-bold`, spacing `space-y-4`
