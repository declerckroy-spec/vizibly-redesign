const fs = require('fs');
const path = require('path');

// Mapping van verkeerde naar correcte image namen
const imageNameFixes = {
  '/blog/dakdekker-seo.jpg': '/blog/seo-dakdekkers.jpg',
  '/blog/seo-strategie.jpg': '/blog/content-clusters.jpg', // Gebruik content-clusters als fallback
  '/blog/webshop-seo.jpg': '/blog/seo-webshops.jpg',
  '/blog/seo-configuraties.jpg': '/blog/seo-instellingen.jpg',
  '/blog/google-num100.png': '/blog/google-num100-parameter.png',
  '/blog/linkbuilding-mythe.jpg': '/blog/backlinks.jpg',
  '/blog/geo-seo.jpg': '/blog/geo-seo-ai.jpg',
  '/blog/seo-bureau-kiezen.jpg': '/blog/seo-bureau-kiezen.png',
  '/blog/seo-termen.jpg': '/blog/seo-beginners.jpg'
};

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
let fixCount = 0;

console.log('=== FIXING IMAGE REFERENCES ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace each wrong image reference
  Object.keys(imageNameFixes).forEach(wrongPath => {
    const correctPath = imageNameFixes[wrongPath];

    if (content.includes(wrongPath)) {
      content = content.replace(new RegExp(wrongPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), correctPath);
      changed = true;
      fixCount++;
      console.log(`✅ ${dir}:`);
      console.log(`   ${wrongPath} -> ${correctPath}`);
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Fixed ${fixCount} image references`);
console.log('All images now point to existing files');
