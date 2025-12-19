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
  'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
  'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
  'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
  'word-gevonden-door-ai-de-toekomst-van-seo-is-geo'
];

const appDir = path.join(__dirname, 'app');
let fixedCount = 0;

console.log('=== REMOVING OLD HARDCODED RELATED SECTIONS ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if has both old and new sections
  const hasRelatedArticlesMap = content.includes('relatedArticles.map');
  const hasServiceLinks = content.includes('href="/local-seo"') ||
                          content.includes('href="/seo-strategie"') ||
                          content.includes('href="/linkbuilding"') ||
                          content.includes('href="/seo-copy"');

  if (!hasRelatedArticlesMap || !hasServiceLinks) {
    return;
  }

  // Find the old section - it's usually before the new one
  // Pattern: starts with {/* Related Articles */} or similar, contains hardcoded Links
  // and ends with </section> before {/* Final CTA */} or similar

  // Find position of relatedArticles.map (new section)
  const newSectionPos = content.indexOf('relatedArticles.map');

  if (newSectionPos === -1) {
    return;
  }

  // Find the section tag before relatedArticles.map
  const beforeNewSection = content.substring(0, newSectionPos);
  const newSectionStart = beforeNewSection.lastIndexOf('{/* Related Articles Section */}');

  if (newSectionStart === -1) {
    return;
  }

  // Now find any old "Related Articles" section before this
  const beforeNew = content.substring(0, newSectionStart);

  // Look for old section patterns
  const oldSectionPatterns = [
    '{/* Related Articles */}',
    '{/* Lees meer',
    '{/* Related Article 1 */'
  ];

  let oldSectionStart = -1;
  for (const pattern of oldSectionPatterns) {
    const pos = beforeNew.lastIndexOf(pattern);
    if (pos !== -1 && (oldSectionStart === -1 || pos > oldSectionStart)) {
      oldSectionStart = pos;
    }
  }

  if (oldSectionStart === -1) {
    return;
  }

  // Find the section opening tag before the comment
  const beforeComment = content.substring(0, oldSectionStart);
  const sectionStart = beforeComment.lastIndexOf('<section');

  if (sectionStart === -1) {
    return;
  }

  // Find the closing </section> tag after oldSectionStart but before newSectionStart
  const betweenSections = content.substring(oldSectionStart, newSectionStart);
  const sectionEndPos = betweenSections.indexOf('</section>');

  if (sectionEndPos === -1) {
    return;
  }

  const sectionEnd = oldSectionStart + sectionEndPos + '</section>'.length;

  // Extract the old section
  const oldSection = content.substring(sectionStart, sectionEnd);

  // Verify this section contains service links
  if (!oldSection.includes('href="/local-seo"') &&
      !oldSection.includes('href="/seo-strategie"') &&
      !oldSection.includes('href="/linkbuilding"') &&
      !oldSection.includes('href="/seo-copy"')) {
    return;
  }

  // Remove the old section and any extra newlines
  const newContent = content.substring(0, sectionStart) + '\n' + content.substring(sectionEnd);

  fs.writeFileSync(filePath, newContent, 'utf8');
  fixedCount++;

  console.log(`✅ Fixed: ${dir}`);
});

console.log(`\n=== SUMMARY ===`);
console.log(`Removed old hardcoded sections from ${fixedCount} article(s)`);
console.log('All articles now only have the new related sections with blog links!');
