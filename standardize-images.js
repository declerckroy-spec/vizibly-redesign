const fs = require('fs');
const path = require('path');

// All blog directories
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
let changesCount = 0;

console.log('=== STANDARDIZING IMAGE PATHS ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${dir}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace full vizibly.nl URLs with /blog/ paths
  const urlPattern = /https:\/\/vizibly\.nl\/wp-content\/uploads\/\d{4}\/\d{2}\/([\w-]+)(?:-\d+x\d+)?\.(\w+)(?:\.webp)?/g;

  const newContent = content.replace(urlPattern, (match, filename, ext) => {
    changed = true;
    changesCount++;
    console.log(`  ${dir}:`);
    console.log(`    FROM: ${match}`);
    console.log(`    TO:   /blog/${filename}.${ext === 'jpg' ? 'jpg' : 'png'}`);
    return `/blog/${filename}.${ext === 'jpg' ? 'jpg' : 'png'}`;
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`  ✅ Updated ${dir}\n`);
  }
});

console.log(`\n=== SUMMARY ===`);
console.log(`Total changes: ${changesCount}`);
console.log('All image paths standardized to /blog/ format');
