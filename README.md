# Vizibly Website Redesign

**Brutalist design website voor Vizibly - Nederlands SEO bureau**

Next.js 16 (App Router) • React 19 • TypeScript 5 • Tailwind CSS 4 • shadcn/ui

---

## 🎨 Design System V2.0 (HIGH-END)

Dit project gebruikt een **brutalist design aesthetic** met strikte design regels:

### Kernprincipes
- **Geen afgeronde hoeken** - Alles scherp 90° (--radius: 0px)
- **4px borders overal** - Consistent en bold
- **3 kleuren ONLY:** Zwart (#000000), Wit (#ffffff), Lime (#CCFF00)
- **Brutalist shadows** - Lime (8px 8px) voor featured, zwart voor standard
- **Advanced hover effects** - Lift, rotate, glow voor premium feel
- **Overlapping sections** - Seamless flow tussen hero en stats
- **24px scrollbar** - Consistent met 4px borders

### V2.0 HIGH-END Features
✨ **Lime & zwarte brutalist shadows** op alle cards (tegel effect)
✨ **Triple hover effects** - lift + rotate + glow op client logos
✨ **Overlapping sections** - stats floaten over hero met negative margins
✨ **Seamless patterns** - grid doorgetrokken zonder borders
✨ **Auto cursor glow** - radiale lime glow op alle links/buttons
✨ **Sticky header** - met overflow-x: clip fix

---

## 📚 Documentatie

### Voor Development (LEES DIT EERST!)
👉 **[CLAUDE.md](./CLAUDE.md)** - Complete development guide voor AI & developers
- V2.0 brutalist shadow standards
- Component patterns met code
- Technical implementation (overflow fix, scrollbar)
- High-end hover effects
- Testing checklist V2.0

### Voor Design & Content
👉 **[DESIGN_GUIDE.md](./DESIGN_GUIDE.md)** - Complete design system V2.0
- High-end design elementen (shadows, hovers, overlapping)
- Typography system
- Color utilities
- Component templates met volledige code
- Implementation checklist
- Do's & Don'ts V2.0

### Overige Documentatie
- **[PROJECT_STATUS.md](./PROJECT_STATUS.md)** - Voortgang en roadmap
- **[TECHNICAL_REFERENCE.md](./TECHNICAL_REFERENCE.md)** - CSS architectuur en animaties
- **[DEPLOYMENT_ONDERHOUD.md](./DEPLOYMENT_ONDERHOUD.md)** - Deploy en onderhoud
- **[BRANDING-OPTIONS.md](./BRANDING-OPTIONS.md)** - Branding varianten

---

## 🚀 Quick Start

### Development Server
```bash
# Install dependencies (382 packages, 0 vulnerabilities)
npm install

# Start dev server (hot reload enabled)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Build & Production
```bash
# Production build (includes TypeScript checking)
npm run build

# Start production server
npm start

# Linting
npm run lint
```

---

## 📁 Project Structuur

```
vizibly-redesign/
├── app/
│   ├── globals.css          # V2.0 brutalist styles, scrollbar, animations
│   ├── layout.tsx           # Root layout, fonts, metadata
│   ├── page.tsx             # Homepage (REFERENCE IMPLEMENTATION V2.0)
│   ├── robots.ts            # SEO robots.txt
│   ├── sitemap.ts           # SEO sitemap
│   └── [service-pages]/     # Service pages (te bouwen)
│
├── components/
│   ├── navigation.tsx           # Sticky header (overflow-x: clip fix)
│   ├── stats-only.tsx           # Stats met lime shadows + overlap
│   ├── clients-carousel-standalone.tsx  # High-end carousel
│   └── ui/                      # shadcn/ui components
│
├── public/
│   ├── logo.svg                 # Brutalist logo (zwart)
│   ├── logo-brutalist-white.svg # Witte variant
│   ├── favicon.svg              # SEO-optimized favicon
│   └── clients/                 # Client logo's
│
├── CLAUDE.md                    # Development guide V2.0 ⭐
├── DESIGN_GUIDE.md              # Design system V2.0 ⭐
└── PROJECT_STATUS.md            # Project status
```

---

## 🎯 Homepage als Standaard

**app/page.tsx is DE REFERENCE IMPLEMENTATION** voor de hele site.

### Wat maakt het V2.0 HIGH-END:
1. **Brutalist Shadows**
   - Stats cards: lime shadows (8px 8px #CCFF00)
   - Service cards: zwarte shadows (8px 8px #000000)
   - Client logos: lime shadows + hover effects

2. **Advanced Hover Effects**
   - Stats: subtle lift (-translate-y-1)
   - Logos: lift + rotate + glow (-translate-y-2, rotate-1, opacity-10)
   - Services: shadow shift (translate-x-1, translate-y-1)

3. **Overlapping Sections**
   - Hero: extra pb-56 lg:pb-64
   - Stats: negative margin -mt-32 lg:-mt-40
   - Seamless grid pattern over beide secties
   - Geen border ertussen

4. **Technical Excellence**
   - overflow-x: clip (niet hidden) voor sticky header
   - 24px scrollbar met 4px borders
   - Automatic cursor glow op alle links/buttons
   - max-w-screen-2xl containers (1536px)

### Nieuwe Pages Bouwen
Volg deze stappen:
1. Lees **DESIGN_GUIDE.md** V2.0 section
2. Kopieer section structuur van homepage
3. Gebruik component patterns uit guide
4. Test met V2.0 checklist

---

## 🔧 Tech Stack Details

- **Next.js 16.0.10** - App Router, Server Components, React 19
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS 4** - Custom brutalist utilities
- **shadcn/ui** - Accordion, Badge, Button, Card components
- **Lucide Icons** - GEEN emoticons, altijd icons gebruiken
- **Next.js Image** - Optimized images, remote domain vizibly.nl

### Custom Tailwind Classes
```css
.text-brutalist-hero    /* Hero headings - responsive clamp() */
.text-brutalist-h1      /* H1 headings */
.text-brutalist-h2      /* H2 headings */
.text-brutalist-h3      /* H3 headings */
.text-lime-accent       /* Lime text met zwarte shadow */
.bg-brutalist-dark      /* Zwarte sectie (auto white text) */
.bg-brutalist-lime      /* Lime sectie (auto black text) */
.animate-glitch         /* Glitch effect voor hero */
.animate-scroll-left    /* Infinite scroll voor carousel */
```

---

## ✅ V2.0 Quality Standards

Elke nieuwe page/component moet:
- [ ] **Brutalist shadows** op alle cards (lime of zwart)
- [ ] **Hover effects** op alle interactieve elementen
- [ ] **Responsive** getest: 375px, 768px, 1440px, 1920px, 2560px
- [ ] **max-w-screen-2xl** containers gebruiken
- [ ] **Patterns** alleen op zwarte secties (opacity 0.03)
- [ ] **4px borders** overal
- [ ] **Geen rounded corners** (border-radius: 0)
- [ ] **Next.js Image** voor alle afbeeldingen
- [ ] **Lucide Icons** (geen emoticons!)

---

## 🎨 Component Patterns V2.0

### Stats Card (HIGH-END - lime shadow)
```jsx
<div
  className="border-4 border-accent bg-black p-8
             transition-all duration-300 hover:-translate-y-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
>
  <div className="text-5xl font-bold text-accent lg:text-6xl">
    {value}
  </div>
</div>
```

### Service Card (STANDARD - black shadow)
```jsx
<Link href="/service" className="block">
  <Card
    className="group border-4 border-black
               transition-all hover:translate-x-1 hover:translate-y-1"
    style={{ boxShadow: '8px 8px 0 0 #000000' }}
  >
    {/* Content */}
  </Card>
</Link>
```

### Client Logo Card (HIGH-END - advanced hover)
```jsx
<div
  className="group border-4 border-black bg-white
             transition-all duration-300
             hover:border-accent hover:-translate-y-2 hover:rotate-1"
  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
>
  <Image src={logo} alt={name} className="grayscale group-hover:grayscale-0" />
  <div className="absolute inset-0 bg-accent opacity-0
                  group-hover:opacity-10 transition-opacity"></div>
</div>
```

---

## 🚫 Wat NIET te Doen (V2.0)

### Design Don'ts
- ❌ Rounded corners toevoegen
- ❌ Kleuren buiten zwart/wit/lime gebruiken
- ❌ Patterns op witte secties
- ❌ Em/en dashes gebruiken (alleen hyphens)
- ❌ Emoticons gebruiken (altijd Lucide Icons)

### V2.0 HIGH-END Don'ts (KRITISCH)
- ❌ **Cards zonder brutalist shadows** - looks flat and cheap
- ❌ **Shadows kleiner dan 8px** - minimum is 8px 8px
- ❌ **Borders tussen hero en stats** - breekt seamless flow
- ❌ **overflow-x: hidden gebruiken** - breekt sticky (use clip!)
- ❌ **Hover effects vergeten** - alle interactive elements need it
- ❌ **z-10 skippen bij overlap** - content won't float
- ❌ **16px scrollbar** - must be 24px for consistency
- ❌ **Shadow kleuren random mixen** - lime = featured, black = standard

---

## 📊 Project Status

### ✅ Voltooid
- Homepage V2.0 (high-end standaard)
- Navigation met sticky header
- Footer
- Stats component met lime shadows
- Client carousel met advanced hover
- Core components
- V2.0 documentation (DESIGN_GUIDE.md, CLAUDE.md)

### 🔄 Te Doen
- SEO Strategie pagina
- SEO Copy pagina
- Linkbuilding pagina
- Local SEO pagina
- Google Ads pagina
- Design & Techniek pagina
- Over Ons pagina
- Contact pagina

---

## 🔗 Nuttige Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)

---

## 💡 Development Tips

1. **Lees altijd CLAUDE.md eerst** bij nieuwe features
2. **Homepage (app/page.tsx) is de reference** - copy patterns from here
3. **Test responsive** op alle breakpoints
4. **Check V2.0 checklist** voordat je klaar bent
5. **Gebruik DESIGN_GUIDE.md** voor alle component templates

---

## 📝 Language & Content

- **Website taal:** Nederlands (nl-NL)
- **Alle UI tekst:** Nederlands
- **Geen em/en dashes** - alleen hyphens voor compound words
- **Originele Vizibly teksten** behouden waar mogelijk

---

**Dit is een V2.0 HIGH-END brutalist website. Elke nieuwe pagina moet dit niveau evenaren.** 🚀

Voor vragen, check CLAUDE.md of DESIGN_GUIDE.md.
