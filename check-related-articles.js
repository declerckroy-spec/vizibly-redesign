const fs = require('fs');
const path = require('path');

// Blog directories to check
const blogDirs = [
  '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
  'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
  'content-clusters-topic-authority-opbouwen',
  'de-verborgen-kracht-in-seo-gebruikersgedrag',
  'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
  'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
  'google-june-2025-core-update-wat-betekent-dit-voor-je-website',
  'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data',
  'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
  'hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak',
  'in-gesprek-met-martijn-over-het-belang-van-website-onderhoud',
  'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
  'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
  'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings',
  'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten',
  'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
  'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
  'seo-voor-beginners-de-belangrijkste-termen-uitgelegd',
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
  'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
  'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo'
];

const appDir = path.join(__dirname, 'app');
const results = [];

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    results.push({
      dir,
      status: 'MISSING FILE',
      relatedArticles: null
    });
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check if relatedArticles exists
  const relatedMatch = content.match(/const relatedArticles = \[([\s\S]*?)\];/);

  if (!relatedMatch) {
    results.push({
      dir,
      status: 'NO RELATED ARTICLES',
      relatedArticles: null
    });
    return;
  }

  // Extract slugs and images
  const slugMatches = [...relatedMatch[1].matchAll(/slug: '([^']+)'/g)];
  const imageMatches = [...relatedMatch[1].matchAll(/image: '([^']+)'/g)];

  results.push({
    dir,
    status: 'HAS RELATED ARTICLES',
    count: slugMatches.length,
    articles: slugMatches.map((match, i) => ({
      slug: match[1],
      image: imageMatches[i] ? imageMatches[i][1] : 'NO IMAGE'
    }))
  });
});

console.log('\n=== RELATED ARTICLES OVERVIEW ===\n');

// Show articles WITH related content
console.log('ARTICLES WITH RELATED SECTION:');
results.filter(r => r.status === 'HAS RELATED ARTICLES').forEach(r => {
  console.log(`\n${r.dir}`);
  console.log(`  Count: ${r.count}`);
  r.articles.forEach((a, i) => {
    console.log(`  ${i+1}. ${a.slug}`);
    console.log(`     Image: ${a.image}`);
  });
});

// Show articles WITHOUT related content
console.log('\n\nARTICLES WITHOUT RELATED SECTION:');
results.filter(r => r.status === 'NO RELATED ARTICLES').forEach(r => {
  console.log(`- ${r.dir}`);
});

// Show missing files
if (results.some(r => r.status === 'MISSING FILE')) {
  console.log('\n\nMISSING FILES:');
  results.filter(r => r.status === 'MISSING FILE').forEach(r => {
    console.log(`- ${r.dir}`);
  });
}

// Summary
console.log('\n\n=== SUMMARY ===');
console.log(`Total articles: ${results.length}`);
console.log(`With related section: ${results.filter(r => r.status === 'HAS RELATED ARTICLES').length}`);
console.log(`Without related section: ${results.filter(r => r.status === 'NO RELATED ARTICLES').length}`);
console.log(`Missing files: ${results.filter(r => r.status === 'MISSING FILE').length}`);
