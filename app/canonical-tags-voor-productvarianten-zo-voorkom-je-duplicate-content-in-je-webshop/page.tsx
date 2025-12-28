import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Canonical tags webshop | Duplicate content voorkomen',
  description: 'Leer hoe je canonical tags gebruikt voor productvarianten in je webshop. Voorkom duplicate content en verbeter de vindbaarheid van je site.',
  openGraph: {
    title: 'Canonical tags webshop | Duplicate content voorkomen',
    description: 'Leer hoe je canonical tags gebruikt voor productvarianten in je webshop. Voorkom duplicate content en verbeter de vindbaarheid van je site.',
    url: 'https://vizibly.nl/canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/canonical-tags.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten',
    title: 'SEO optimalisatie voor webshops: alles wat je moet weten',
    image: '/blog/seo-webshops.jpg',
    excerpt: 'Van productpagina\'s tot categorieën: complete SEO gids voor webshops.'
  },
  {
    slug: 'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    title: 'SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren',
    image: '/blog/seo-instellingen.jpg',
    excerpt: '7 technische instellingen die je rankings direct verbeteren.'
  },
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  }
];

export default function CanonicalTagsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop/#article",
        "headline": "Canonical tags voor productvarianten: zo voorkom je duplicate content in je webshop",
        "description": "Leer hoe je canonical tags gebruikt voor productvarianten in je webshop. Voorkom duplicate content en verbeter de vindbaarheid van je site.",
        "image": "https://vizibly.nl/blog/canonical-tags.jpg",
        "datePublished": "2025-08-15",
        "dateModified": "2025-08-15",
        "author": {
          "@type": "Person",
          "name": "Roy de Clerck"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vizibly",
          "@id": "https://vizibly.nl/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://vizibly.nl/canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop/"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          {/* Back link */}
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                TECHNISCHE SEO
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Canonical tags voor productvarianten: zo voorkom je duplicate content in je webshop
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  4 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/canonical-tags.jpg"
                alt="Canonical tags voor productvarianten in webshops"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative border-b-4 border-black bg-[#fafaf8] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Als webshop eigenaar ken je het probleem waarschijnlijk wel: je verkoopt een product in verschillende kleuren, maten of uitvoeringen. Elke variant krijgt een eigen pagina, maar de content is vrijwel identiek. Het gevolg? Google ziet dit als duplicate content, wat je SEO prestaties kan schaden. Gelukkig is er een elegante oplossing: canonical tags.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat zijn canonical tags?
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Een canonical tag is een stukje HTML-code dat aan zoekmachines vertelt welke versie van een pagina de "officiele" versie is. Het voorkomt dat Google verschillende pagina's met vergelijkbare content als duplicaten ziet.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Het probleem met productvarianten
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Stel je verkoopt een basic t-shirt in drie kleuren. Vaak resulteert dit in drie aparte URL's:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <code className="bg-black/10 px-2 py-1">/t-shirt-basic-rood</code>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <code className="bg-black/10 px-2 py-1">/t-shirt-basic-blauw</code>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <code className="bg-black/10 px-2 py-1">/t-shirt-basic-groen</code>
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voor Google zijn dit drie verschillende pagina's met bijna identieke content. Alleen de kleurvermelding verschilt, de rest van de productbeschrijving, specificaties en prijs blijft hetzelfde. Dit wordt gezien als duplicate content en kan je rankings negatief beinvloeden.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De canonical tag oplossing
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Met canonical tags los je dit probleem elegant op. Je wijst alle varianten naar een hoofdproductpagina:
          </p>

          <div className="mb-6 border-4 border-black bg-black/5 p-6 lg:p-8">
            <p className="mb-4 text-base font-black text-black lg:text-lg">Hoofdproductpagina (/t-shirt-basic):</p>
            <code className="block text-sm font-bold text-black/80 lg:text-base overflow-x-auto">
              &lt;link rel="canonical" href="https://jouwshop.nl/t-shirt-basic"&gt;
            </code>
          </div>

          <div className="mb-12 border-4 border-black bg-black/5 p-6 lg:p-8">
            <p className="mb-4 text-base font-black text-black lg:text-lg">Alle varianten verwijzen naar de hoofdpagina:</p>
            <code className="block text-sm font-bold text-black/80 lg:text-base overflow-x-auto">
              &lt;link rel="canonical" href="https://jouwshop.nl/t-shirt-basic"&gt;
            </code>
          </div>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Drie effectieve strategieen
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            1. Hoofdpagina strategie (aanbevolen)
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Creeer een hoofdproductpagina zonder specifieke variant. Bezoekers selecteren kleur of maat via dropdowns of knoppen. Alle variant-URL's canonicaliseren naar deze hoofdpagina.
          </p>
          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-black text-black lg:text-lg mb-2">Voordelen:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Eenvoudig te implementeren
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Bundelt alle SEO-kracht op een pagina
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Gebruiksvriendelijke ervaring
              </li>
            </ul>
          </div>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            2. Parameter-based filtering
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Gebruik URL-parameters in plaats van aparte pagina's:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <span>Hoofdpagina: <code className="bg-black/10 px-2 py-1">/t-shirt-basic</code></span>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <span>Varianten: <code className="bg-black/10 px-2 py-1">/t-shirt-basic?kleur=rood</code></span>
            </li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            De canonical verwijst altijd naar de hoofdpagina zonder parameters.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            3. Zelf-refererende canonicals
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Alleen gebruiken wanneer varianten echt unieke, waardevolle content hebben. Elke variant krijgt een canonical die naar zichzelf verwijst.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Praktische implementatie
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De meeste webshop-platforms (Shopify, WooCommerce, Magento) bieden ingebouwde ondersteuning voor canonical tags. Configureer deze in je productinstellingen. Voor complexere implementaties kan <Link href="/full-service-seo" className="font-bold">professionele SEO ondersteuning</Link> helpen.
          </p>

          <div className="mb-12 border-4 border-black bg-black/5 p-6 lg:p-8">
            <p className="mb-4 text-base font-black text-black lg:text-lg">Handmatige implementatie (PHP voorbeeld):</p>
            <pre className="text-sm font-bold text-black/80 lg:text-base overflow-x-auto whitespace-pre-wrap">
{`if ($is_product_variant) {
    $canonical_url = get_main_product_url($product_id);
} else {
    $canonical_url = get_current_page_url();
}
echo '<link rel="canonical" href="' . $canonical_url . '">';`}
            </pre>
          </div>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De voordelen op een rij
          </h2>
          <ul className="mb-12 space-y-4 pl-6">
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">1. Voorkomt SEO-penalties</span> door duplicate content
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">2. Concentreert rankings</span> op een sterke pagina
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">3. Verbetert crawl-efficiency</span> van Google
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">4. Verhoogt je SEO-autoriteit</span> door geconsolideerde linkjuice
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelgemaakte fouten
          </h2>
          <ul className="mb-12 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <strong className="text-black">Vergeten canonical tags</strong> op variantpagina's
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <strong className="text-black">Verkeerde canonical URL</strong> die niet bestaat
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <strong className="text-black">Canonical chains</strong> (A verwijst naar B, B naar C)
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <strong className="text-black">Canonical naar 404-pagina's</strong>
            </li>
          </ul>

          {/* Section 8 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Controleer je implementatie
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Test je canonical tags met verschillende tools:
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Browser Developer Tools
          </h3>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Ga naar je productpagina en druk F12 (werkt in Chrome, Firefox, Safari, Edge)
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Ga naar de "Elements" of "Inspector" tab
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Druk Ctrl+F (of Cmd+F op Mac) en zoek naar "canonical"
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Check of de URL correct verwijst naar je hoofdpagina
            </li>
          </ul>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Google Search Console (Essentieel)
          </h3>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Ga naar search.google.com/search-console
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Gebruik "URL Inspection" voor specifieke pagina's
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Check "User-declared canonical" vs "Google-selected canonical"
            </li>
          </ul>

          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-bold text-black lg:text-lg">
              <strong>Belangrijk:</strong> Als "User-declared canonical" en "Google-selected canonical" verschillen, negeert Google jouw canonical! Ga naar "Coverage" rapport in GSC en kijk bij "Excluded" naar "Duplicate without user-selected canonical". Veel URL's hier? Dan heb je canonical problemen.
            </p>
          </div>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Aanvullende tools
          </h3>
          <ul className="mb-12 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Screaming Frog SEO Spider (gratis tot 500 URL's)
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Browser extensies zoals "SEO Meta in 1 Click"
            </li>
          </ul>

          {/* Conclusion */}
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Een goede canonical-strategie is essentieel voor elke webshop die productvarianten aanbiedt. Het zorgt ervoor dat je SEO-kracht gebundeld blijft en Google jouw site goed kan begrijpen en indexeren. Implementeer canonical tags vandaag nog en zie je rankings verbeteren.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Hulp nodig met je webshop SEO?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Bij Vizibly helpen we webshops met technische SEO, inclusief canonical tag implementatie. We zorgen dat je shop goed geindexeerd wordt en je rankings verbeteren.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. Of plan een gesprek.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                PLAN EEN GESPREK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <RelatedArticles articles={relatedArticles} />

      <FinalCTA
        heading="Klaar om te groeien?"
        description="Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden."
      />

      <Footer />
    </>
  );
}
