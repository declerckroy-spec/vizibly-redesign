# Deployment & Onderhoud Guide

> **Voor:** GitHub + Vercel deployment
> **Stack:** Next.js 16, React 19, TypeScript
> **Laatst bijgewerkt:** 17 december 2024

---

## 🚀 Eerste Deployment (Eenmalig)

### Stap 1: GitHub Repository Setup

```bash
# Als git nog niet geïnitialiseerd is
cd vizibly-redesign
git init

# Voeg alle bestanden toe
git add .

# Eerste commit
git commit -m "feat: Initial Vizibly redesign - homepage complete"

# Maak GitHub repository (via GitHub.com of CLI)
# Dan:
git remote add origin https://github.com/jouw-username/vizibly-redesign.git
git branch -M main
git push -u origin main
```

**Check `.gitignore`:**
```
# Node
node_modules/
npm-debug.log*

# Next.js
.next/
out/
build/

# TypeScript
*.tsbuildinfo
next-env.d.ts

# Environment variables
.env*.local

# OS
.DS_Store
Thumbs.db
```

### Stap 2: Vercel Deployment

1. **Ga naar [vercel.com](https://vercel.com)** en log in met GitHub
2. **Import Project** → Selecteer je GitHub repository
3. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables:**
   - Momenteel geen nodig (alle hardcoded)
   - Als je later API keys toevoegt: voeg ze hier toe

5. **Deploy!**
   - Eerste deployment duurt ~2-3 minuten
   - Je krijgt een URL: `vizibly-redesign.vercel.app`

6. **Custom Domain (optioneel nu, later toevoegen):**
   - Vercel → Settings → Domains
   - Voeg `vizibly.nl` toe
   - Update DNS bij je provider:
     - Type: `A` → Value: `76.76.21.21`
     - Type: `CNAME` → Name: `www` → Value: `cname.vercel-dns.com`

---

## 🔄 Deployment Workflow (Dagelijks Gebruik)

### Automatische Deployments

Vercel deploy **automatisch** bij elke push naar GitHub:

```bash
# Maak wijzigingen
# Edit files...

# Commit en push
git add .
git commit -m "feat: Add SEO Strategie page"
git push origin main

# Vercel deploy automatisch in ~1-2 minuten
# Je krijgt notificatie in Vercel dashboard + optioneel email
```

**Branches:**
- `main` → Productie (vizibly.nl)
- `develop` → Preview URL (vizibly-redesign-git-develop.vercel.app)
- Feature branches → Eigen preview URLs

### Preview Deployments

```bash
# Maak feature branch
git checkout -b feature/seo-copy-page

# Maak wijzigingen
# ...

# Push naar GitHub
git push origin feature/seo-copy-page

# Vercel maakt automatisch preview URL:
# vizibly-redesign-git-feature-seo-copy.vercel.app
```

**Voordelen:**
- Test nieuwe features zonder productie te beïnvloeden
- Deel preview URL met klant/team voor feedback
- Merge naar main pas na approval

---

## 🛠️ Onderhoud Schema

### Maandelijks (15 minuten)

**1. Dependency Updates Check**

```bash
# Check voor updates
npm outdated

# Update minor/patch versions (veilig)
npm update

# Test lokaal
npm run build
npm start

# Als alles werkt:
git add package.json package-lock.json
git commit -m "chore: Update dependencies"
git push
```

**Welke updates zijn veilig:**
- ✅ Patch updates (1.2.3 → 1.2.4) - Bug fixes
- ✅ Minor updates (1.2.0 → 1.3.0) - Nieuwe features, backwards compatible
- ⚠️ Major updates (1.0.0 → 2.0.0) - Breaking changes, test grondig!

**2. Check Vercel Dashboard**

- **Analytics** - Hoeveel bezoekers?
- **Performance** - Core Web Vitals scores
- **Errors** - Zijn er runtime errors?
- **Bandwidth** - Binnen limiet? (100GB/maand free tier)

**3. Lighthouse Audit**

```bash
# Run lokaal
npm run build
npm start

# Open Chrome DevTools → Lighthouse
# Run audit voor:
# - Performance (target: 90+)
# - Accessibility (target: 95+)
# - Best Practices (target: 95+)
# - SEO (target: 100)
```

### Per Kwartaal (30-60 minuten)

**1. Major Dependency Updates**

```bash
# Check major updates
npm outdated

# Update Next.js (voorzichtig!)
npm install next@latest react@latest react-dom@latest

# Test grondig:
npm run build
# Test alle pagina's lokaal
# Check animaties, images, links

# Als alles werkt:
git commit -m "chore: Update to Next.js [version]"
git push
```

**2. Content Review**
- Check of alle links nog werken
- Update case studies met nieuwe resultaten
- Ververs testimonials/reviews
- Update "laatst bijgewerkt" datums indien van toepassing

**3. Image Optimization Review**
- Check welke images het meest geladen worden (Vercel Analytics)
- Optimaliseer grote images verder indien nodig
- Converteer oude PNGs naar WebP waar mogelijk

**4. Security Check**

```bash
# Check voor security vulnerabilities
npm audit

# Fix automatisch (als veilig)
npm audit fix

# Voor manual fixes:
npm audit fix --force
# Test daarna grondig!
```

### Per Jaar (2-3 uur)

**1. Next.js Major Version Update**
- Lees [Next.js release notes](https://nextjs.org/blog)
- Check breaking changes
- Update op develop branch eerst
- Test grondig
- Merge naar main na approval

**2. Design System Review**
- Zijn er nieuwe Tailwind utilities nuttig?
- Kunnen animaties verbeterd worden?
- Performance: kunnen dingen sneller?

**3. SEO Audit**
- Google Search Console review
- Broken links check
- Sitemap up-to-date?
- Structured data nog correct?

---

## 📊 Monitoring & Alerts

### Vercel (Gratis tier)

**Automatisch gemonitord:**
- Deployment status (success/fail)
- Build times
- Web Vitals (LCP, FID, CLS)
- Error tracking
- Bandwidth usage

**Configureer email alerts:**
- Vercel → Settings → Notifications
- Enable: Deployment failed, Build errors

### Google Search Console

**Setup (eenmalig):**
1. Ga naar [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `vizibly.nl`
3. Verify ownership (via DNS TXT record of HTML file)
4. Submit sitemap: `https://vizibly.nl/sitemap.xml`

**Maandelijks checken:**
- Indexing status (aantal geïndexeerde pagina's)
- Performance (clicks, impressions, CTR)
- Coverage issues (errors, warnings)
- Mobile usability

### Uptime Monitoring (Optioneel)

**Gratis tools:**
- [UptimeRobot](https://uptimerobot.com) - Check elke 5 min, gratis
- [Pingdom](https://www.pingdom.com) - Gratis tier beschikbaar
- [BetterUptime](https://betteruptime.com) - 10 monitors gratis

**Setup:**
- URL: `https://vizibly.nl`
- Check interval: 5 minuten
- Alert via email bij downtime

---

## 🔐 Security Best Practices

### Environment Variables

**NOOIT in Git:**
```bash
# .env.local (lokaal)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
API_SECRET_KEY=xxxxxxxxxxxxx

# Vercel → Settings → Environment Variables
# Voeg dezelfde variables toe
```

**Voor deze site (nu):**
- Geen secrets nodig
- Alle data is public/hardcoded
- Als je later API's toevoegt: gebruik environment variables

### Vercel Security Headers (Aanbevolen)

In `next.config.ts`:

```typescript
const nextConfig = {
  // Bestaande config...

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};
```

---

## 📈 Performance Optimization

### Vercel Analytics (Aanbevolen)

**Enable (eenmalig):**
```bash
npm install @vercel/analytics

# In app/layout.tsx voeg toe:
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Gratis tier geeft je:**
- Core Web Vitals
- Pageviews per route
- Bounce rate
- Top referrers

### Image Optimization Checklist

**Next.js doet automatisch:**
- WebP conversie
- Responsive images
- Lazy loading
- Caching

**Jij moet doen:**
- Use `priority` prop voor above-the-fold images
- Specificeer `width` en `height` waar mogelijk
- Gebruik `fill` alleen voor responsive containers

---

## 🚨 Incident Response

### Site is Down

**Stap 1: Check Vercel Status**
- [status.vercel.com](https://status.vercel.com)
- Is het een platform issue?

**Stap 2: Check Laatste Deployment**
- Vercel Dashboard → Deployments
- Is laatste deployment gefaald?
- Zo ja: **Rollback** naar vorige werkende versie
  - Klik op vorige deployment → "Promote to Production"

**Stap 3: Check Build Logs**
- Deployment → View Function Logs
- Zoek naar errors in build output

**Stap 4: Lokaal Reproduceren**

```bash
git pull origin main
npm install
npm run build

# Als build faalt lokaal:
# Fix de error
# Commit en push
```

### Broken Page

**Stap 1: Check Error in Vercel**
- Functions → Real-time Logs
- Zie je runtime errors?

**Stap 2: Check Browser Console**
- Open de pagina
- F12 → Console
- Zie je JavaScript errors?

**Stap 3: Quick Fix**

```bash
# Rollback indien kritiek
# Of fix en push:
git commit -m "fix: Resolve [issue]"
git push
```

---

## 💾 Backups

### Code (GitHub)

**Automatisch:**
- Alle code staat in GitHub
- Elke commit is een backup
- Branches zijn backups van features

**Geen extra actie nodig** - GitHub is je backup.

### Content

**Omdat alles hardcoded is:**
- Content = Code
- Backups = Git commits
- Restore = Git checkout oude commit

**Als je later CMS toevoegt:**
- Overweeg database backups
- Export content regelmatig

### Deployment History

Vercel bewaart **alle deployments** voor altijd (free tier):
- Elke deployment is een snapshot
- Rollback mogelijk naar elke oude versie
- Inclusief build output en function logs

---

## 📋 Maintenance Checklist

### Maandelijks ☐

- [ ] Run `npm outdated` - check updates
- [ ] Update patch/minor versions
- [ ] Run `npm audit` - check security
- [ ] Check Vercel Analytics - traffic trends
- [ ] Check Core Web Vitals - performance OK?
- [ ] Review error logs in Vercel
- [ ] Test site op mobile & desktop

### Per Kwartaal ☐

- [ ] Major dependency updates (test grondig!)
- [ ] Lighthouse audit - scores nog goed?
- [ ] Content review - links werken nog?
- [ ] Image optimization check
- [ ] Security audit (`npm audit`)
- [ ] Google Search Console review
- [ ] Backup check (GitHub commits recent?)

### Per Jaar ☐

- [ ] Next.js major version update
- [ ] Review design system - optimalisaties?
- [ ] Full SEO audit
- [ ] Accessibility audit
- [ ] Performance baseline reset
- [ ] Documentation updates
- [ ] Test op nieuwe devices/browsers

---

## 🎯 Quick Reference

### Important URLs

- **Production:** `https://vizibly.nl` (na custom domain setup)
- **Vercel Dashboard:** `https://vercel.com/dashboard`
- **GitHub Repo:** `https://github.com/[jouw-username]/vizibly-redesign`
- **Google Search Console:** `https://search.google.com/search-console`

### Important Commands

```bash
# Development
npm run dev

# Build & Test
npm run build
npm start

# Updates
npm outdated
npm update
npm audit

# Deployment
git push origin main  # Auto-deploys to production
```

### Support Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support) (chat support op free tier!)
- [Next.js Discord](https://discord.gg/nextjs)

---

## 🎓 Learning Resources

### Next.js Updates

Subscribe to:
- [Next.js Blog](https://nextjs.org/blog) - Major releases
- [@vercel Twitter](https://twitter.com/vercel) - Updates & tips

### Performance Monitoring

- [Web.dev](https://web.dev) - Best practices
- [PageSpeed Insights](https://pagespeed.web.dev) - Test je site

---

## ⚡ TL;DR - Minimum Onderhoud

**Als je echt minimaal wilt doen:**

1. **Maandelijks (5 min):**
   - Check Vercel dashboard - alles groen?
   - Run `npm audit` - security OK?

2. **Per kwartaal (15 min):**
   - `npm update` - minor updates
   - Test site grondig

3. **Per jaar (1 uur):**
   - Next.js update naar nieuwste versie
   - Full test van alle pagina's

**En dat is het!**

Next.js op Vercel is super low-maintenance. De meeste dingen gaan automatisch.

---

**Vragen?** Check Vercel Support (chat) - ze helpen gratis gebruikers ook!
