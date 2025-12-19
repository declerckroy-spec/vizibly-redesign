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
const publicBlogDir = path.join(__dirname, 'public', 'blog');

// Get all images in public/blog
const existingImages = new Set();
if (fs.existsSync(publicBlogDir)) {
  fs.readdirSync(publicBlogDir).forEach(file => {
    existingImages.add(`/blog/${file}`);
  });
}

console.log('=== CHECKING ALL IMAGE REFERENCES ===\n');
console.log(`Found ${existingImages.size} images in /public/blog/\n`);

const missingImages = [];
const allImageRefs = new Set();

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Extract all image references from relatedArticles
  const relatedMatch = content.match(/const relatedArticles = \[([\s\S]*?)\];/);

  if (relatedMatch) {
    const imageMatches = [...relatedMatch[1].matchAll(/image: '([^']+)'/g)];

    imageMatches.forEach(match => {
      const imagePath = match[1];
      allImageRefs.add(imagePath);

      if (!existingImages.has(imagePath)) {
        missingImages.push({
          article: dir,
          imagePath: imagePath
        });
      }
    });
  }
});

// Show missing images
if (missingImages.length > 0) {
  console.log('❌ MISSING IMAGES:\n');

  const groupedByImage = {};
  missingImages.forEach(item => {
    if (!groupedByImage[item.imagePath]) {
      groupedByImage[item.imagePath] = [];
    }
    groupedByImage[item.imagePath].push(item.article);
  });

  Object.keys(groupedByImage).forEach(imagePath => {
    console.log(`\n${imagePath}`);
    console.log(`  Referenced in ${groupedByImage[imagePath].length} article(s):`);
    groupedByImage[imagePath].forEach(article => {
      console.log(`    - ${article}`);
    });
  });
} else {
  console.log('✅ All image references exist!\n');
}

console.log(`\n=== SUMMARY ===`);
console.log(`Total unique image references: ${allImageRefs.size}`);
console.log(`Existing images in /public/blog/: ${existingImages.size}`);
console.log(`Missing images: ${Object.keys(missingImages.reduce((acc, item) => {
  acc[item.imagePath] = true;
  return acc;
}, {})).length}`);

// List all available images
console.log('\n=== AVAILABLE IMAGES IN /public/blog/ ===');
Array.from(existingImages).sort().forEach(img => {
  console.log(`  ${img}`);
});
