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
const articlesWithIssues = [];

console.log('=== CHECKING FOR SERVICE LINKS IN RELATED SECTIONS ===\n');

blogDirs.forEach(dir => {
  const filePath = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Find all "Related Articles" sections (both old and new style)
  // Pattern: {/* ... Related ... */} followed by <section> containing cards/links

  const relatedSectionRegex = /\{\/\*[^*]*Related[^*]*\*\/\}[\s\S]*?<section[\s\S]*?<\/section>/gi;
  const matches = content.match(relatedSectionRegex);

  if (!matches) {
    return;
  }

  let hasServiceLinksInRelatedSection = false;
  const serviceLinks = [];

  matches.forEach(section => {
    if (section.includes('href="/local-seo"')) {
      serviceLinks.push('/local-seo');
      hasServiceLinksInRelatedSection = true;
    }
    if (section.includes('href="/seo-strategie"')) {
      serviceLinks.push('/seo-strategie');
      hasServiceLinksInRelatedSection = true;
    }
    if (section.includes('href="/linkbuilding"')) {
      serviceLinks.push('/linkbuilding');
      hasServiceLinksInRelatedSection = true;
    }
    if (section.includes('href="/seo-copy"')) {
      serviceLinks.push('/seo-copy');
      hasServiceLinksInRelatedSection = true;
    }
  });

  if (hasServiceLinksInRelatedSection) {
    articlesWithIssues.push({
      article: dir,
      serviceLinks: [...new Set(serviceLinks)]
    });

    console.log(`❌ ${dir}:`);
    serviceLinks.forEach(link => {
      console.log(`   - ${link}`);
    });
  }
});

if (articlesWithIssues.length === 0) {
  console.log('✅ No service links in related sections found!\n');
} else {
  console.log(`\n=== SUMMARY ===`);
  console.log(`${articlesWithIssues.length} article(s) with service links in related sections`);
}
