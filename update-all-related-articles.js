const fs = require('fs');
const path = require('path');

// Complete mapping van relevante artikelen per artikel (thematisch gegroepeerd)
const relatedArticlesMapping = {
  '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google': [
    'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten'
  ],
  'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop': [
    'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten',
    'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt'
  ],
  'content-clusters-topic-authority-opbouwen': [
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    'de-verborgen-kracht-in-seo-gebruikersgedrag'
  ],
  'de-verborgen-kracht-in-seo-gebruikersgedrag': [
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    'content-clusters-topic-authority-opbouwen'
  ],
  'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100': [
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'de-verborgen-kracht-in-seo-gebruikersgedrag',
    'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren'
  ],
  'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt': [
    'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
    'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren'
  ],
  'google-june-2025-core-update-wat-betekent-dit-voor-je-website': [
    'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data',
    'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai'
  ],
  'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data': [
    'google-june-2025-core-update-wat-betekent-dit-voor-je-website',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert'
  ],
  'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau': [
    'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings'
  ],
  'hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak': [
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'de-verborgen-kracht-in-seo-gebruikersgedrag',
    '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google'
  ],
  'in-gesprek-met-martijn-over-het-belang-van-website-onderhoud': [
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes'
  ],
  'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert': [
    'word-gevonden-door-ai-de-toekomst-van-seo-is-geo',
    'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    'google-june-2025-core-update-wat-betekent-dit-voor-je-website'
  ],
  'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren': [
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
    'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes'
  ],
  'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings': [
    'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten'
  ],
  'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten': [
    'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'de-verborgen-kracht-in-seo-gebruikersgedrag'
  ],
  'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google': [
    'content-clusters-topic-authority-opbouwen',
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai'
  ],
  'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten': [
    'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'seo-voor-beginners-de-belangrijkste-termen-uitgelegd'
  ],
  'seo-voor-beginners-de-belangrijkste-termen-uitgelegd': [
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'content-clusters-topic-authority-opbouwen'
  ],
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google': [
    '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau'
  ],
  'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes': [
    'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100'
  ],
  'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai': [
    'word-gevonden-door-ai-de-toekomst-van-seo-is-geo',
    'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
  ],
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo': [
    'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
  ]
};

// Artikel titels en metadata
const articleMeta = {
  '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google': {
    title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
    image: '/blog/fysiotherapeut-seo.jpg',
    excerpt: '80% van potentiele patienten zoekt online. Ontdek hoe je jouw praktijk laat groeien met deze 12 SEO-tips.'
  },
  'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop': {
    title: 'Canonical tags voor productvarianten: zo voorkom je duplicate content',
    image: '/blog/canonical-tags.jpg',
    excerpt: 'Voorkom duplicate content in je webshop en verbeter je rankings met de juiste canonical tags.'
  },
  'content-clusters-topic-authority-opbouwen': {
    title: 'Content clusters: Topic authority opbouwen',
    image: '/blog/content-clusters.jpg',
    excerpt: 'Google wil zien dat je echt verstand hebt van je onderwerp. Dat je de autoriteit bent.'
  },
  'de-verborgen-kracht-in-seo-gebruikersgedrag': {
    title: 'De verborgen kracht in SEO: zo beïnvloedt gebruikersgedrag jouw Google positie',
    image: '/blog/gebruikersgedrag-seo.jpg',
    excerpt: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt en hoe je de ervaring verbetert.'
  },
  'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100': {
    title: 'Een perfecte Google PageSpeed score: zin en onzin van 100/100',
    image: '/blog/pagespeed-score.png',
    excerpt: 'Waarom een perfecte score niet alles is en hoe snelheid wel je omzet beïnvloedt.'
  },
  'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt': {
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  },
  'google-june-2025-core-update-wat-betekent-dit-voor-je-website': {
    title: 'Google June 2025 core update: wat betekent dit voor je website?',
    image: '/blog/google-core-update-june-2025.png',
    excerpt: 'De tweede core update van 2025 is live. Leer wat dit betekent voor je rankings.'
  },
  'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data': {
    title: 'Google schrapt num100 parameter: wat betekent dit voor jouw SEO data?',
    image: '/blog/google-num100.png',
    excerpt: 'Google verandert hoe je zoekresultaten analyseert. Dit moet je weten.'
  },
  'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau': {
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    image: '/blog/seo-bureau-kiezen.jpg',
    excerpt: 'Google waarschuwt expliciet voor bepaalde SEO-bureaus. Kies slim met deze 4 regels.'
  },
  'hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak': {
    title: 'Hoe SEO en Google Ads elkaar versterken: de kracht van een gecombineerde aanpak',
    image: '/blog/seo-google-ads.jpg',
    excerpt: 'SEO en Google Ads werken niet tegen elkaar. Ze maken elkaar juist sterker.'
  },
  'in-gesprek-met-martijn-over-het-belang-van-website-onderhoud': {
    title: 'In gesprek met Martijn over het belang van website onderhoud',
    image: '/blog/website-onderhoud.jpg',
    excerpt: 'Waarom website onderhoud cruciaal is voor je online succes.'
  },
  'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert': {
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    image: '/blog/muvera.jpg',
    excerpt: 'Google heeft MUVERA aangekondigd. Dit moet je weten over de toekomst van SEO.'
  },
  'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren': {
    title: 'SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren',
    image: '/blog/seo-configuraties.jpg',
    excerpt: '7 technische instellingen die je rankings direct verbeteren.'
  },
  'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings': {
    title: 'SEO mythe ontkracht: meer links leiden automatisch tot hogere rankings',
    image: '/blog/linkbuilding-mythe.jpg',
    excerpt: 'Waarom 10 sterke links meer waard zijn dan 1000 spammy links.'
  },
  'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten': {
    title: 'SEO optimalisatie voor webshops: alles wat je moet weten',
    image: '/blog/webshop-seo.jpg',
    excerpt: 'Van productpagina\'s tot categorieën: complete SEO gids voor webshops.'
  },
  'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google': {
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/seo-strategie.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten': {
    title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
    image: '/blog/seo-uitbesteden.jpg',
    excerpt: 'Zelf doen of uitbesteden? Maak de juiste keuze voor jouw situatie.'
  },
  'seo-voor-beginners-de-belangrijkste-termen-uitgelegd': {
    title: 'SEO voor beginners: de belangrijkste termen uitgelegd',
    image: '/blog/seo-termen.jpg',
    excerpt: 'Van backlinks tot crawling: alle belangrijke SEO termen helder uitgelegd.'
  },
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google': {
    title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
    image: '/blog/dakdekker-seo.jpg',
    excerpt: 'Lokale klanten vinden je niet? Deze SEO-strategieën werken voor dakdekkers.'
  },
  'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes': {
    title: 'SEO voor WordPress: meer dan wat groene Yoast vinkjes',
    image: '/blog/wordpress-seo.jpg',
    excerpt: 'WordPress SEO gaat verder dan alleen plugins. Ontdek wat echt werkt.'
  },
  'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai': {
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/seo-gaat-door.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  },
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo': {
    title: 'Word gevonden door AI: de toekomst van SEO is GEO',
    image: '/blog/geo-seo.jpg',
    excerpt: 'Generative Engine Optimization: hoe je gevonden wordt in AI-antwoorden.'
  }
};

const appDir = path.join(__dirname, 'app');
let updatedCount = 0;

console.log('=== UPDATING ALL RELATED ARTICLES WITH RELEVANT CONTENT ===\n');

Object.keys(relatedArticlesMapping).forEach(articleDir => {
  const filePath = path.join(appDir, articleDir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${articleDir}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Find and replace the relatedArticles array
  const relatedSlugs = relatedArticlesMapping[articleDir];
  const relatedArticles = relatedSlugs.map(slug => ({
    slug,
    ...articleMeta[slug]
  }));

  // Build the new relatedArticles array
  const newRelatedArray = `const relatedArticles = [
${relatedArticles.map(article => `  {
    slug: '${article.slug}',
    title: '${article.title.replace(/'/g, "\\'")}',
    image: '${article.image}',
    excerpt: '${article.excerpt.replace(/'/g, "\\'")}'
  }`).join(',\n')}
];`;

  // Replace the existing relatedArticles array
  const arrayPattern = /const relatedArticles = \[([\s\S]*?)\];/;

  if (content.match(arrayPattern)) {
    content = content.replace(arrayPattern, newRelatedArray);
    fs.writeFileSync(filePath, content, 'utf8');
    updatedCount++;
    console.log(`✅ Updated ${articleDir}`);
  } else {
    console.log(`⚠️  No relatedArticles found in ${articleDir}`);
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Updated ${updatedCount} articles with relevant, diverse related content`);
console.log('All articles now link to thematically relevant content');
