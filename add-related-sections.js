const fs = require('fs');
const path = require('path');

// Mapping van artikel naar relevante related articles
const relatedArticlesConfig = {
  '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google': {
    articles: [
      {
        slug: 'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
        title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
        image: '/blog/dakdekker-seo.jpg',
        excerpt: 'Net als fysiotherapeuten, kunnen dakdekkers hun lokale zichtbaarheid enorm verbeteren met de juiste SEO-aanpak.'
      },
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
      },
      {
        slug: 'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
        title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
        image: '/blog/seo-uitbesteden.jpg',
        excerpt: 'Als zorgverlener heb je al genoeg aan je hoofd. Lees wanneer uitbesteden de slimme keuze is.'
      }
    ]
  },
  'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings': {
    articles: [
      {
        slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
        title: 'Google\'s 4 gouden regels voor het kiezen van een seo bureau',
        image: '/blog/seo-bureau-kiezen.jpg',
        excerpt: 'Google waarschuwt expliciet voor SEO-bureaus die beloftes doen over linkbuilding.'
      },
      {
        slug: 'linkbuilding',
        title: 'Linkbuilding: kwaliteit boven kwantiteit',
        image: '/blog/linkbuilding.jpg',
        excerpt: 'Ontdek waarom 10 sterke links meer waard zijn dan 1000 spammy links.'
      },
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Een complete SEO strategie gaat verder dan alleen links verzamelen.'
      }
    ]
  },
  'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten': {
    articles: [
      {
        slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
        title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
        image: '/blog/seo-bureau-kiezen.jpg',
        excerpt: 'Als je besluit uit te besteden, kies dan een bureau dat voldoet aan Google\'s criteria.'
      },
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Begrijp eerst wat een goede SEO strategie inhoudt voordat je beslist of je uitbesteedt.'
      },
      {
        slug: 'seo-voor-beginners-de-belangrijkste-termen-uitgelegd',
        title: 'SEO voor beginners: de belangrijkste termen uitgelegd',
        image: '/blog/seo-termen.jpg',
        excerpt: 'Leer de basisconcepten begrijpen, zodat je beter kunt inschatten wat nodig is.'
      }
    ]
  },
  'seo-voor-beginners-de-belangrijkste-termen-uitgelegd': {
    articles: [
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Nu je de termen kent, ontdek hoe je een complete SEO strategie opbouwt.'
      },
      {
        slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
        title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
        image: '/blog/wordpress-snelheid.jpg',
        excerpt: 'Technische SEO in de praktijk: maak je WordPress site razendsnel.'
      },
      {
        slug: 'content-clusters-topic-authority-opbouwen',
        title: 'Content clusters: Topic authority opbouwen',
        image: '/blog/content-clusters.jpg',
        excerpt: 'Leer hoe content clusters je helpen om autoriteit op te bouwen in Google.'
      }
    ]
  },
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google': {
    articles: [
      {
        slug: '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
        title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
        image: '/blog/fysiotherapeut-seo.jpg',
        excerpt: 'Dezelfde lokale SEO principes werken ook voor fysiotherapeuten en andere dienstverleners.'
      },
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Een complete SEO strategie voor lokale dienstverleners zoals dakdekkers.'
      },
      {
        slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
        title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
        image: '/blog/seo-bureau-kiezen.jpg',
        excerpt: 'Besloten om SEO uit te besteden? Kies het juiste bureau met deze gouden regels.'
      }
    ]
  },
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo': {
    articles: [
      {
        slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
        title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
        image: '/blog/seo-gaat-door.jpg',
        excerpt: 'SEO evolueert, maar verdwijnt niet. Ontdek waarom het nu belangrijker is dan ooit.'
      },
      {
        slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
        title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
        image: '/blog/muvera.jpg',
        excerpt: 'Google\'s nieuwste algoritme en wat dit betekent voor de toekomst van SEO.'
      },
      {
        slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
        title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
        image: '/blog/seo-strategie.jpg',
        excerpt: 'Bouw een toekomstbestendige SEO strategie die werkt in het AI-tijdperk.'
      }
    ]
  }
};

console.log('=== ADDING RELATED ARTICLES SECTIONS ===\n');

// Process each article
Object.keys(relatedArticlesConfig).forEach(articleDir => {
  const filePath = path.join(__dirname, 'app', articleDir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${articleDir}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if it already has relatedArticles
  if (content.includes('const relatedArticles = [')) {
    console.log(`⚠️  Skipping ${articleDir} - already has related articles`);
    return;
  }

  // Create the relatedArticles array
  const config = relatedArticlesConfig[articleDir];
  const relatedArticlesCode = `
const relatedArticles = [
${config.articles.map(article => `  {
    slug: '${article.slug}',
    title: '${article.title.replace(/'/g, "\\'")}',
    image: '${article.image}',
    excerpt: '${article.excerpt.replace(/'/g, "\\'")}'
  }`).join(',\n')}
];
`;

  // Find where to insert - after metadata export, before the default export
  const defaultExportMatch = content.match(/export default function \w+\(\)/);

  if (!defaultExportMatch) {
    console.log(`❌ Could not find default export in ${articleDir}`);
    return;
  }

  const insertPos = defaultExportMatch.index;

  // Insert the relatedArticles array
  content = content.slice(0, insertPos) + relatedArticlesCode + '\n' + content.slice(insertPos);

  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added related articles section to ${articleDir}`);
});

console.log('\n=== DONE ===');
