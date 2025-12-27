// Site configuratie - centrale plek voor alle bedrijfsinfo
// Wijzig hier en het wordt overal automatisch bijgewerkt

export const siteConfig = {
  name: 'Vizibly',
  tagline: 'SEO specialist die zorgt dat je gevonden wordt.',
  url: 'https://vizibly.nl',

  address: {
    street: "'t Zanddorp 55",
    postal: '4335 AE',
    city: 'Middelburg',
    full: "'t Zanddorp 55, 4335 AE Middelburg",
  },

  phone: {
    raw: '0628206410',
    display: '06 282 064 10',
    href: 'tel:0628206410',
  },

  email: {
    address: 'info@vizibly.nl',
    href: 'mailto:info@vizibly.nl',
  },

  kvk: '68478143',
} as const;

// Navigatie links - gebruikt in header en footer
export const navLinks = {
  diensten: [
    { href: '/seo-strategie', label: 'SEO Strategie' },
    { href: '/seo-copy', label: 'SEO Copy' },
    { href: '/linkbuilding', label: 'Linkbuilding' },
    { href: '/local-seo', label: 'Local SEO' },
    { href: '/design-techniek', label: 'Design & Techniek' },
    { href: '/google-ads-sea', label: 'Google Ads' },
  ],
  bedrijf: [
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/cases', label: 'Cases' },
    { href: '/vizie', label: 'Vizie' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

// Type exports voor TypeScript
export type SiteConfig = typeof siteConfig;
export type NavLinks = typeof navLinks;
