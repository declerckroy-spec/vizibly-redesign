const fs = require('fs');
const path = require('path');

// Template for the Related Articles Section (to be inserted before Final CTA)
const relatedSectionTemplate = `      {/* Related Articles Section */}
      <section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-12 text-brutalist-h2 text-white">
            Lees meer
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related, index) => (
              <Link key={index} href={\`/\${related.slug}\`} className="group block">
                <Card className="overflow-hidden border-4 border-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-2 text-lg font-black uppercase leading-tight lg:text-xl">
                      {related.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="mb-4 text-sm font-bold text-black/70 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white px-2 py-1">
                      LEES ARTIKEL
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
`;

// Mapping van artikel naar relevante related articles
const relatedArticlesConfig = {
  '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google': [
    {
      slug: 'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
      title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
      image: '/blog/dakdekker-seo.jpg',
      excerpt: 'Net als fysiotherapeuten kunnen dakdekkers hun lokale zichtbaarheid enorm verbeteren met de juiste SEO-aanpak.'
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
  ],
  'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings': [
    {
      slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
      title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
      image: '/blog/seo-bureau-kiezen.jpg',
      excerpt: 'Google waarschuwt expliciet voor SEO-bureaus die beloftes doen over linkbuilding.'
    },
    {
      slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      image: '/blog/seo-strategie.jpg',
      excerpt: 'Een complete SEO strategie gaat verder dan alleen links verzamelen.'
    },
    {
      slug: 'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
      title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
      image: '/blog/seo-uitbesteden.jpg',
      excerpt: 'Kies het juiste SEO bureau dat focust op kwaliteit, niet op kwantiteit.'
    }
  ],
  'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten': [
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
  ],
  'seo-voor-beginners-de-belangrijkste-termen-uitgelegd': [
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
  ],
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google': [
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
  ],
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo': [
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
};

console.log('=== ADDING COMPLETE RELATED ARTICLES SECTIONS ===\n');

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

  // 1. Add the relatedArticles array
  const articles = relatedArticlesConfig[articleDir];
  const relatedArticlesCode = `
const relatedArticles = [
${articles.map(article => `  {
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

  // Insert the relatedArticles array
  const insertPos = defaultExportMatch.index;
  content = content.slice(0, insertPos) + relatedArticlesCode + '\n' + content.slice(insertPos);

  // 2. Add the Related Articles Section HTML
  // Find the Final CTA section (or footer if no Final CTA)
  let insertHtmlPos;

  // Look for Final CTA section
  const finalCtaMatch = content.match(/\s+{\/\* Final CTA \*\/}\s+<section className="relative border-b-4 border-black bg-accent/);

  if (finalCtaMatch) {
    insertHtmlPos = finalCtaMatch.index;
  } else {
    // No Final CTA, look for footer
    const footerMatch = content.match(/\s+{\/\* Footer \*\/}\s+<footer/);
    if (footerMatch) {
      insertHtmlPos = footerMatch.index;
    } else {
      // Last resort: before closing of outermost fragment
      const closingFragmentMatch = content.match(/\s+<\/>\s*\);?\s*}\s*$/);
      if (closingFragmentMatch) {
        insertHtmlPos = closingFragmentMatch.index;
      } else {
        console.log(`❌ Could not find insertion point in ${articleDir}`);
        return;
      }
    }
  }

  // Insert the related section
  content = content.slice(0, insertHtmlPos) + '\n' + relatedSectionTemplate + '\n' + content.slice(insertHtmlPos);

  // Write back
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✅ Added complete related articles section to ${articleDir}`);
});

console.log('\n=== DONE ===');
