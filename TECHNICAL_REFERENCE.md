# Vizibly Technical Reference

> Technische documentatie voor ontwikkelaars
> **Versie:** 1.0 | **Datum:** 17 december 2024

---

## 📁 Project Structuur

```
vizibly-redesign/
├── app/
│   ├── globals.css          # Global styles, animaties, scrollbar
│   ├── layout.tsx            # Root layout met fonts
│   ├── page.tsx              # Homepage
│   └── [other-pages]/        # Andere pagina's
├── components/
│   ├── navigation.tsx        # Header navigatie
│   ├── stats-counter.tsx     # Stats animatie component
│   └── ui/                   # shadcn/ui components
├── public/
│   ├── logo.svg              # Vizibly logo
│   └── logo.png              # Vizibly logo PNG
└── DESIGN_GUIDE.md          # Design system documentatie
```

---

## 🎨 globals.css - Complete Reference

### CSS Variabelen

```css
:root {
  /* Backgrounds */
  --background: #ffffff;
  --foreground: #000000;

  /* Cards */
  --card: #ffffff;
  --card-foreground: #000000;

  /* Primary */
  --primary: #000000;
  --primary-foreground: #ffffff;

  /* Secondary */
  --secondary: #1a1a1a;
  --secondary-foreground: #ffffff;

  /* Muted */
  --muted: #f5f5f5;
  --muted-foreground: #2d2d2d;

  /* Accent - Lime Green */
  --accent: #ccff00;
  --accent-foreground: #000000;

  /* Borders */
  --border: #000000;
  --input: #000000;
  --ring: #ccff00;

  /* No roundings */
  --radius: 0px;
}
```

### Brutalist Typography Classes

```css
/* Hero (Homepage main heading) */
.text-brutalist-hero {
  font-size: clamp(2.5rem, 8vw, 9rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.05em;
}

@media (min-width: 1024px) {
  .text-brutalist-hero {
    font-size: clamp(3.5rem, 10vw, 9rem);
  }
}

@media (min-width: 1536px) {
  .text-brutalist-hero {
    font-size: clamp(4rem, 12vw, 9rem);
  }
}

/* H1 */
.text-brutalist-h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
}

/* H2 */
.text-brutalist-h2 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
}

/* H3 */
.text-brutalist-h3 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.03em;
}
```

### Animaties

#### 1. Glitch Effect

```css
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

@keyframes glitch-skew {
  0%, 100% { transform: skew(0deg); }
  20% { transform: skew(-2deg); }
  40% { transform: skew(2deg); }
  60% { transform: skew(-1deg); }
  80% { transform: skew(1deg); }
}

.animate-glitch {
  animation: glitch 3s infinite;
}

.animate-glitch-skew {
  animation: glitch-skew 3s infinite;
}
```

**Gebruik:**
```jsx
<span className="relative inline-block animate-glitch">
  <span className="absolute -inset-2 bg-accent skew-y-1 animate-glitch-skew"></span>
  <span className="relative">je concurrent</span>
</span>
```

#### 2. Float Animation

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
    opacity: 0.2;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.3;
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}
```

**Gebruik:**
```jsx
<div className="animate-float">
  ████████████████████████████████████████████████████████
</div>
```

### Hover Effects

#### Link/Button Glow

```css
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

button > *, a > * {
  position: relative;
  z-index: 1;
}
```

**Features:**
- Automatisch toegepast op alle links en buttons
- Lime groene radial gradient
- 200px diameter bij hover
- Smooth transitions
- Text blijft bovenop

### Custom Scrollbar

```css
/* Webkit browsers (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  background: #000000;
  border-left: 4px solid #ffffff;
}

::-webkit-scrollbar-thumb {
  background: #ccff00;
  border: 3px solid #000000;
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

::-webkit-scrollbar-thumb:active {
  background: #ccff00;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #ccff00 #000000;
}
```

**Features:**
- 16px breed
- Lime groene thumb
- Zwarte track met witte border
- Hover state: wit
- Active state: lime

### Container Max-Width Scaling

```css
@media (min-width: 1920px) {
  .mx-auto.max-w-7xl { max-width: 1600px; }
  .mx-auto.max-w-5xl { max-width: 1200px; }
  .mx-auto.max-w-4xl { max-width: 1000px; }
}

@media (min-width: 2560px) {
  .mx-auto.max-w-7xl { max-width: 1800px; }
  .mx-auto.max-w-5xl { max-width: 1400px; }
  .mx-auto.max-w-4xl { max-width: 1200px; }
}
```

**Waarom:**
- Voorkomt dat content te klein wordt op grote schermen
- Behoud leesbaarheid
- Schaalbaar voor 4K displays

---

## 🧩 Component Architecture

### Pattern Background Component

```jsx
// Gebruik dit pattern voor consistente achtergronden

// Grid Pattern (Hero, Process sectie)
<div className="absolute inset-0 opacity-[0.03]" style={{
  backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)'
}}></div>

// Diagonal Pattern (Footer, Blog, Intro)
<div className="absolute inset-0 opacity-[0.03]" style={{
  backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
}}></div>

// Hero Grid (sterker)
<div className="absolute inset-0 opacity-5" style={{
  backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
}}></div>
```

### Section Wrapper Template

```jsx
<section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
  {/* Pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: 'repeating-linear-gradient(...)'
  }}></div>

  {/* Content */}
  <div className="relative mx-auto max-w-7xl px-6">
    {/* Your content here */}
  </div>
</section>
```

**Belangrijke classes:**
- `relative` op section voor pattern positioning
- `border-b-4 border-black` voor sectie scheiding
- `py-24 lg:py-32` voor responsive padding
- `relative` op content wrapper om boven pattern te zitten

---

## 🎯 Tailwind Utility Patterns

### Responsive Font Sizes

```jsx
// Heading/belangrijke tekst
className="text-xl xl:text-2xl 2xl:text-3xl"

// Normale body tekst
className="text-lg xl:text-xl 2xl:text-2xl"

// Section labels
className="text-base lg:text-lg xl:text-xl"

// Kleine tekst
className="text-sm lg:text-base"
```

### Card Hover States

```jsx
className="transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent"
```

### Box Shadows

```jsx
// Service cards
style={{ boxShadow: '8px 8px 0 0 #000000' }}

// Case cards (groter)
style={{ boxShadow: '12px 12px 0 0 #000000' }}

// Blog cards (lime)
style={{ boxShadow: '8px 8px 0 0 #ccff00' }}

// Navigation (glow)
className="shadow-[0_4px_20px_rgba(204,255,0,0.15)]"
```

### Grid Layouts

```jsx
// 3 kolommen op desktop
className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"

// 2 kolommen gelijkmatig
className="grid gap-16 lg:grid-cols-2 lg:gap-24"

// 4 kolommen (footer)
className="grid gap-12 md:grid-cols-2 lg:grid-cols-4"
```

---

## 📊 Performance Optimizations

### Image Optimization

```jsx
import Image from 'next/image';

// Gebruik altijd Next.js Image component
<Image
  src="/logo.svg"
  alt="Vizibly Logo"
  width={180}
  height={60}
  priority  // Voor above-the-fold images
  className="h-auto w-48"
/>

// Voor externe images
<Image
  src="https://vizibly.nl/..."
  alt="..."
  fill
  className="object-cover"
/>
```

### CSS Animations vs JavaScript

**Gebruik CSS animaties waar mogelijk:**
- ✅ GPU accelerated
- ✅ Betere performance
- ✅ Geen JavaScript overhead
- ✅ Werkt tijdens JavaScript loading

**Voorbeelden:**
- Glitch effect: CSS keyframes
- Float animation: CSS keyframes
- Hover glow: CSS transitions
- Card hover: CSS transform

### Lazy Loading

```jsx
// Images buiten viewport
<Image loading="lazy" ... />

// Components (indien nodig)
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
});
```

---

## 🔧 Development Workflow

### Running the Project

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### File Structure Best Practices

1. **Keep components modular**
   - Elk component in eigen file
   - Herbruikbare components in `/components`
   - Page-specific components in page folder

2. **CSS Organization**
   - Global styles in `globals.css`
   - Component-specific styles via Tailwind classes
   - Custom utilities in globals.css `@layer components`

3. **Type Safety**
   - Use TypeScript voor alle components
   - Type props interfaces
   - Use strict mode

---

## 🐛 Common Issues & Solutions

### Issue: Animaties werken niet

**Solution:**
- Check of animatie classes in globals.css staan
- Verify dat globals.css geïmporteerd is in layout.tsx
- Clear `.next` folder: `rm -rf .next`

### Issue: Patterns niet zichtbaar

**Solution:**
- Check opacity waarde (0.03 is erg subtiel)
- Verify `absolute inset-0` op pattern div
- Check `relative` op parent sectie

### Issue: Hover glow werkt niet op buttons

**Solution:**
- Check of button children wrapped zijn
- Verify `position: relative` en `overflow: visible` in CSS
- Check z-index van button children

### Issue: Responsive sizes werken niet

**Solution:**
- Verify Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Check dat responsive classes later in className komen
- Clear browser cache

---

## 📝 Code Quality Checklist

### Before Committing

- [ ] All TypeScript errors resolved
- [ ] No console.logs in production code
- [ ] Responsive tested on multiple screen sizes
- [ ] Images have proper alt text
- [ ] Links have proper href (geen #)
- [ ] Accessibility: proper heading hierarchy
- [ ] Performance: images optimized
- [ ] CSS: no !important unless necessary
- [ ] Animations: smooth and performant

### Testing Checklist

- [ ] Desktop (1920x1080)
- [ ] Laptop (1440x900)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] 4K display (2560x1440)
- [ ] Safari (webkit)
- [ ] Chrome/Edge (chromium)
- [ ] Firefox

---

## 🚀 Deployment

### Build Process

```bash
# Production build
npm run build

# Output in .next folder
# Static files in .next/static
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://vizibly.nl
```

### Performance Metrics Target

- **First Contentful Paint:** < 1.8s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.8s
- **Cumulative Layout Shift:** < 0.1

---

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Design System
- Zie `DESIGN_GUIDE.md` voor volledige design system
- Kleurenpalet en typography in globals.css
- Component patterns in deze file

---

## 🔄 Version Control

### Commit Message Convention

```
feat: Add new feature
fix: Fix bug
style: Update styling
refactor: Refactor code
docs: Update documentation
perf: Performance improvement
```

### Branch Strategy

```
main        - Production ready code
develop     - Development branch
feature/*   - New features
fix/*       - Bug fixes
```

---

## ⚙️ Configuration Files

### tailwind.config.ts

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom configuration
    },
  },
  plugins: [],
};
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vizibly.nl'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
```

---

_Dit document bevat alle technische details voor het ontwikkelen en onderhouden van de Vizibly website._

**Laatst bijgewerkt:** 17 december 2024
