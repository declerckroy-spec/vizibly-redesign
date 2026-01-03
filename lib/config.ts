// Site configuratie - centrale plek voor alle bedrijfsinfo
// Wijzig hier en het wordt overal automatisch bijgewerkt

export const siteConfig = {
  name: 'Vizibly',
  tagline: 'Premium websites én SEO. Één specialist, geen gedoe.',
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

  googleReviews: {
    url: 'https://www.google.com/maps/place/Vizibly/@52.1909763,5.2795551,7z/data=!4m8!3m7!1s0x47c5ef6bd13e8765:0xc924944bbf7fa195!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11vs4r0223',
    rating: 5,
    count: 6,
  },
} as const;

// Navigatie links - gebruikt in header en footer
export const navLinks = {
  // Hoofddiensten - in menu
  hoofdDiensten: [
    { href: '/websites', label: 'Websites' },
    { href: '/seo', label: 'SEO' },
  ],
  // SEO sub-diensten - niet in menu, wel in footer
  seoDiensten: [
    { href: '/seo-strategie', label: 'SEO Strategie' },
    { href: '/seo-copy', label: 'SEO Copy' },
    { href: '/linkbuilding', label: 'Linkbuilding' },
    { href: '/local-seo', label: 'Local SEO' },
    { href: '/technische-seo', label: 'Technische SEO' },
  ],
  // Lokale pagina's
  lokaal: [
    { href: '/seo-specialist-middelburg', label: 'SEO Middelburg' },
    { href: '/seo-specialist-zeeland', label: 'SEO Zeeland' },
  ],
  // Niche pagina's
  niches: [
    { href: '/seo-voor-webshop', label: 'SEO voor webshops' },
    { href: '/seo-voor-bouwbedrijven', label: 'SEO voor bouwbedrijven' },
    { href: '/seo-voor-makelaars-en-vastgoedbedrijven', label: 'SEO voor makelaars' },
    { href: '/seo-voor-de-zorg', label: 'SEO voor de zorg' },
  ],
  // Bedrijf links
  bedrijf: [
    { href: '/over', label: 'Over' },
    { href: '/cases', label: 'Cases' },
    { href: '/vizie', label: 'Vizie' },
    { href: '/contact', label: 'Contact' },
  ],
} as const;

// Type exports voor TypeScript
export type SiteConfig = typeof siteConfig;
export type NavLinks = typeof navLinks;
