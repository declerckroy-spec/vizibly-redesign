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
const articlesWithOldSections = [];

console.log('=== CHECKING FOR OLD HARDCODED RELATED SECTIONS ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check for old hardcoded links to service pages
  const hasLocalSeoLink = content.includes('href="/local-seo"');
  const hasSeoStrategyLink = content.includes('href="/seo-strategie"');
  const hasLinkbuildingLink = content.includes('href="/linkbuilding"');
  const hasSeoCopyLink = content.includes('href="/seo-copy"');

  // Check if has both old and new sections
  const hasRelatedArticlesArray = content.includes('relatedArticles.map');
  const hasHardcodedSection = content.match(/\{\/\* Related Article \d+ \*\/\}/);

  if ((hasLocalSeoLink || hasSeoStrategyLink || hasLinkbuildingLink || hasSeoCopyLink) && hasRelatedArticlesArray) {
    articlesWithOldSections.push({
      article: dir,
      hasLocalSeo: hasLocalSeoLink,
      hasSeoStrategy: hasSeoStrategyLink,
      hasLinkbuilding: hasLinkbuildingLink,
      hasSeoCopy: hasSeoCopyLink
    });

    console.log(`❌ ${dir}:`);
    if (hasLocalSeoLink) console.log('   - Links to /local-seo (dienst)');
    if (hasSeoStrategyLink) console.log('   - Links to /seo-strategie (dienst)');
    if (hasLinkbuildingLink) console.log('   - Links to /linkbuilding (dienst)');
    if (hasSeoCopyLink) console.log('   - Links to /seo-copy (dienst)');
  }
});

if (articlesWithOldSections.length === 0) {
  console.log('✅ No old hardcoded sections with dienst links found!\n');
} else {
  console.log(`\n=== SUMMARY ===`);
  console.log(`${articlesWithOldSections.length} article(s) with old hardcoded sections`);
}
