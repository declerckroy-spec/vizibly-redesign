const fs = require('fs');
const path = require('path');

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
const articlesWithDuplicates = [];

console.log('=== CHECKING FOR DUPLICATE RELATED SECTIONS ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Count occurrences of "Related Articles Section" comment
  const matches = content.match(/\{\/\* Related Articles Section \*\/\}/g);

  if (matches && matches.length > 1) {
    articlesWithDuplicates.push({
      article: dir,
      count: matches.length
    });
    console.log(`❌ ${dir}: ${matches.length} sections found`);
  }
});

if (articlesWithDuplicates.length === 0) {
  console.log('✅ No duplicate related sections found!\n');
} else {
  console.log(`\n=== SUMMARY ===`);
  console.log(`${articlesWithDuplicates.length} article(s) with duplicate sections`);
}
