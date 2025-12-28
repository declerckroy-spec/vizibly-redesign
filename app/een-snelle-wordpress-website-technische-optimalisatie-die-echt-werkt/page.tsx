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
  title: 'WordPress snelheid optimaliseren | Technische SEO die werkt',
  description: 'WordPress site traag? Leer hoe je snelheid optimaliseert met het juiste thema, hosting en plugins. Van basis tot Core Web Vitals.',
  openGraph: {
    title: 'WordPress snelheid optimaliseren | Technische SEO die werkt',
    description: 'WordPress site traag? Leer hoe je snelheid optimaliseert met het juiste thema, hosting en plugins. Van basis tot Core Web Vitals.',
    url: 'https://vizibly.nl/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/wordpress-snelheid.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
    title: 'SEO voor WordPress: meer dan wat groene Yoast vinkjes',
    image: '/blog/wordpress-seo.jpg',
    excerpt: 'WordPress SEO gaat verder dan alleen plugins. Ontdek wat echt werkt.'
  },
  {
    slug: 'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    title: 'Een perfecte Google PageSpeed score: zin en onzin van 100/100',
    image: '/blog/pagespeed-score.png',
    excerpt: 'Waarom een perfecte score niet alles is en hoe snelheid wel je omzet beïnvloedt.'
  },
  {
    slug: 'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    title: 'SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren',
    image: '/blog/seo-instellingen.jpg',
    excerpt: '7 technische instellingen die je rankings direct verbeteren.'
  }
];

export default function WordPressSnelheidPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt/#article",
    "headline": "Een snelle WordPress website: technische optimalisatie die echt werkt",
    "description": "WordPress site traag? Leer hoe je snelheid optimaliseert met het juiste thema, hosting en plugins. Van basis tot Core Web Vitals.",
    "image": "/blog/wordpress-snelheid.jpg",
    "datePublished": "2025-10-23",
    "dateModified": "2025-10-23",
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
      "@id": "https://vizibly.nl/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-20 lg:pt-48 lg:pb-28">
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
                Een snelle WordPress website: technische optimalisatie die echt werkt
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  7 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/wordpress-snelheid.jpg"
                alt="WordPress snelheid optimaliseren"
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
      <article className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-4xl px-6">
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3. Waarom? Niet omdat <Link href="/seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes" className="font-bold">zijn Yoast overal groene bolletjes voor geeft</Link>. Maar omdat hij begon met de juiste basis: een snel thema, goede hosting, en selectieve plugins. Pas daarna ging hij optimaliseren. In 2025 is snelheid geen extra: het is een rankingfactor die direct je omzet beinvloedt.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom snelheid bij WordPress rankings en conversies bepaalt
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De impact is meetbaar. <a href="https://blog.hubspot.com/marketing/page-load-time-conversion-rates" target="_blank" rel="noopener noreferrer" className="font-bold">Elke seconde vertraging kost je 7% conversie</a>. Voor webshops kan elke seconde sneller 17% meer conversie betekenen. Bijna de helft van je bezoekers verwacht dat je site in 2 seconden laadt, 40% verlaat een site die langer dan 3 seconden nodig heeft.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            WordPress draait 43,6% van alle websites wereldwijd. Maar WordPress zelf is niet traag. WordPress met een zwaar thema, 30 plugins en ongeoptimaliseerde afbeeldingen is traag. Het verschil tussen 2 en 6 seconden laadtijd zit in technische keuzes. En die begin je bij de basis.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De basis: begin met een snel WordPress thema
          </h2>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Voordat je aan caching of CDN denkt, begin je met de fundamenten. Een zwaar thema optimaliseren is als een Hummer proberen zuinig te krijgen. Het werkt niet. Begin met de juiste auto.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Snelle WP-thema's: de top 3
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>GeneratePress</strong> is extreem licht: 34KB en laadt in 0,4 seconden. Geen jQuery, geen bloat. Werkt perfect met Gutenberg. Score: consistent 90+ in PageSpeed Insights.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Astra</strong> is de populairste snelle optie: 48KB en laadt in 0,4 seconden. Werkt met alle page builders (Gutenberg, Elementor, Beaver Builder). Meer dan 1 miljoen actieve installaties. Score: 93/100 mobiel met 2,1s laadtijd.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Kadence</strong> combineert snelheid met features: drag-and-drop header builder, template library, maar blijft licht. Score: vergelijkbaar met Astra.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Thema's die het moeilijk maken
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Page builders met eigen thema's voegen duizenden regels CSS en JavaScript toe. Elementor voegt extra CSS/JS toe per element, maar kan snel zijn als je het slim gebruikt. Minimale widgets, performance settings aan, lokale fonts. <a href="https://elementor.com/blog/slow-wordpress-website/" target="_blank" rel="noopener noreferrer" className="font-bold">Met optimalisatie kan het</a>, maar het vraagt meer werk.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Avada, Divi en vergelijkbare all-in-one thema's: design-rijk maar zwaar. Zonder optimalisatie laadt een lege pagina al traag. Met builder: 2,8+ seconden laadtijd versus 1,3 seconde voor GeneratePress.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Test de snelheid van je thema voordat je kiest
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Installeer het thema op een staging-omgeving, voeg een pagina toe, test in <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="font-bold">PageSpeed Insights</a>. Score onder 70 op mobiel? Dan wordt het optimaliseren met de handrem aan. Check hoeveel HTTP-requests een lege pagina doet. Meer dan 25? Te veel.
          </p>

          {/* Inline image */}
          <div className="mb-12 relative aspect-video overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
            <Image
                src="/blog/supersnelle-wordpress.jpg"
              alt="Ultrasnelle WordPress site"
              fill
              className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
          </div>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            WordPress hosting: kun je niet omzeilen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een server response time onder 200ms is wat je nodig hebt. Goedkope shared hosting voor 3 euro per maand werkt voor een blog met 100 bezoekers per dag. Voor een webshop met 5.000 bezoekers en 15.000 euro omzet per maand? Investeer 25-40 euro in betere hosting.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Wat je nodig hebt: PHP 8.1 of hoger (7.4 is verouderd en trager), SSD-opslag, LiteSpeed server support als het kan. Voor sites met 10.000+ bezoekers per maand: VPS in plaats van gedeelde hosting.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Check je huidige hosting: meet TTFB (Time To First Byte) in PageSpeed Insights. Boven 600ms betekent dat je server het probleem is. Shared hosting betekent dat je resources deelt met tientallen andere sites. Als hun site zwaar belast wordt, voel jij dat ook.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            WP-Plugins: minder is sneller
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Niet het aantal plugins is het probleem, maar welke je gebruikt. Query Monitor toont welke plugins traag zijn: database queries, execution time, HTTP-requests. Een slecht gecodeerde plugin kan meer schade doen dan 20 goede.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Check welke je echt nodig hebt. Social sharing buttons op elke pagina terwijl niemand ze gebruikt? Weg ermee. Contact form scripts op de homepage zonder formulier? Weg ermee. Asset CleanUp schakelt scripts per pagina uit. Dit elimineert 30-40% van scripts zonder functionaliteit te verliezen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Deactiveer en verwijder ongebruikte plugins volledig. Sommige laten data achter in de database. WP-Optimize ruimt orphaned data op.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Dan pas WordPress optimaliseren: afbeeldingen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Nu de basis staat, ga je optimaliseren. Afbeeldingen zijn 50-70% van je paginagewicht. Een foto van 5MB als 400px thumbnail? Direct probleem.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Comprimeer voor upload via <a href="https://tinypng.com/" target="_blank" rel="noopener noreferrer" className="font-bold">TinyPNG</a> of <a href="https://squoosh.app/" target="_blank" rel="noopener noreferrer" className="font-bold">Squoosh</a>. WebP-formaat is 30% kleiner dan JPEG zonder kwaliteitsverlies. ShortPixel of Smush automatiseren dit. De gratis versie van ShortPixel converteert naar WebP, Smush niet.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Lazy loading laadt afbeeldingen pas als ze in beeld komen. Goed voor lange pagina's, maar niet voor je hero image. Anders zie je eerst niks. Alt-teksten beschrijvend maar geen keyword stuffing.
          </p>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Caching: statische versies serveren
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Zonder caching bouwt WordPress elke pagina opnieuw bij elk bezoek. Met caching: opgeslagen HTML wordt direct getoond.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>LiteSpeed Cache:</strong> gratis en extreem snel, maar alleen op LiteSpeed hosting. Hostinger en veel andere hosts gebruiken LiteSpeed. Server-level caching, geen PHP-execution nodig.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>WP Rocket:</strong> 59 euro per jaar, werkt out-of-the-box op elke hosting. Automatiseert alles: page caching, minification, lazy loading. Gebruiksvriendelijk maar niet altijd de snelste.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>WP Fastest Cache:</strong> gratis, simpel, werkt goed. Minder features maar minder kans om iets te breken.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Fout die beginners maken: 3 caching plugins tegelijk installeren. Kies er een, configureer deze, test of het werkt.
          </p>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Database: opschonen wat zich ophoopt
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WordPress slaat alles op in een database. Na jaren: duizenden post revisions, spam comments, transients van verwijderde plugins. Trage queries, langzamere pagina's.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WP-Optimize verwijdert post revisions, spam comments, expired transients, orphaned metadata. Automatische wekelijkse cleanup. Check autoloaded data: onder 800KB is goed, boven 2MB is een probleem.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Beperk post revisions in wp-config.php: define('WP_POST_REVISIONS', 3); Dit bewaart de laatste 3 versies.
          </p>

          {/* Section 8 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Google PageSpeed en Core Web Vitals voor WordPress
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            PageSpeed Insights meet je site op mobiel en desktop. De score (0-100) is gebaseerd op zes metrics, waarvan drie Core Web Vitals zijn. Deze tellen mee voor je ranking.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>LCP (Largest Contentful Paint), onder 2,5 seconden:</strong> Meet hoe lang het duurt voordat het grootste element zichtbaar is. Meestal je hero image. Grote ongeoptimaliseerde afbeeldingen, trage server en render-blocking CSS/JavaScript vertragen dit.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>INP (Interaction to Next Paint), onder 200ms:</strong> Meet de tijd tussen klikken en reageren. Vervangt sinds 2024 de oude FID-metric. WordPress-sites scoren hier vaak zwak door JavaScript van plugins.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>CLS (Cumulative Layout Shift), onder 0,1:</strong> Meet of elementen verschuiven tijdens het laden. Afbeeldingen zonder width/height-attributen, advertenties die plotseling verschijnen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            De 100/100-score: nuttig maar niet heilig
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100" className="font-bold">Een perfecte PageSpeed score</Link> lijkt het ultieme doel, maar is dat niet. Bij Vizibly scoren we 100/100 op mobiel en desktop, maar belangrijker is dat onze site converteert. Een site met 85/100 die alle belangrijke optimalisaties heeft doorgevoerd, presteert vaak beter dan een kale site met 100/100.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Focus op de aanbevelingen die PageSpeed Insights geeft, niet op het getal. Fix render-blocking resources, optimaliseer LCP, reduceer JavaScript. Die verbeteringen maken het verschil, niet het cijfer zelf.
          </p>

          {/* Section 9 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            CDN en minification: de laatste 10%
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            CDN (Content Delivery Network) slaat kopieen van static files wereldwijd op. Voor Nederlandse sites met vooral Nederlandse bezoekers is dit minder cruciaal. Voor internationaal publiek scheelt het 1-2 seconden. Cloudflare is gratis.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Minification verwijdert whitespace uit code. Autoptimize doet dit automatisch. Test na het inschakelen, sommige scripts breken. GZIP-compressie comprimeert files (100KB wordt 25KB). Hostingproviders regelen dit vaak.
          </p>

          {/* Section 10 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Monitoring: weet waar je staat
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            PageSpeed Insights voor one-time checks. GTmetrix voor gedetailleerde analyses. Search Console Core Web Vitals-report voor real user data. Monitor maandelijks, snelheid verslechtert over tijd zonder onderhoud.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Test op een echt mobiel device, niet alleen Chrome DevTools. De gemiddelde gebruiker heeft geen flagship phone. Test mobiel eerst. Google indexeert mobile-first sinds 2019.
          </p>

          {/* Section 11 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelgemaakte fouten bij WordPress speed optimalisatie
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Permalink-structuur achteraf wijzigen zonder 301-redirects. Alle oude URLs zijn dood. Afbeeldingen uploaden zonder compressie. Database nooit opschonen. Search Console-errors negeren. Goedkope hosting vasthouden "omdat het werkt". 4 euro per maand werkt voor een blog, niet voor een webshop met 15.000 euro omzet.
          </p>

          {/* CTA Section */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Check waar je WordPress site sneller kan
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Je site is traag. De server reageert langzaam, afbeeldingen zijn te groot, je thema is zwaar, plugins stapelen scripts. Elke dag verliezen bezoekers hun geduld.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WordPress draait 43,6% van het web, maar dat maakt het niet automatisch snel. Het verschil tussen een site die rankt en een die dat niet doet, zit in begrip. Begrip van techniek, <Link href="/de-verborgen-kracht-in-seo-zo-beinvloedt-gebruikersgedrag-jouw-google-positie" className="font-bold">gebruikersgedrag</Link>, en strategie via <Link href="/content-clusters-topic-authority-opbouwen" className="font-bold">content clusters</Link>.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes" className="font-bold">WordPress SEO</Link> is meer dan groene Yoast-vinkjes. Begin met een snel thema, goede hosting, selectieve plugins. Dan pas optimaliseren met caching, afbeeldingen, database.
          </p>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Check waar je nu staat. Thema, hosting, plugins? Wat zijn je quick wins? Bel me: 06 282 064 10. In 15 minuten weet je precies wat je site vertraagt.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Of bekijk wat <Link href="/full-service-seo" className="font-bold">full-service SEO</Link> voor jouw WordPress-site betekent.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Wil je weten waar je site vertraagt?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Het verschil tussen 2 en 6 seconden laadtijd zit in technische keuzes. Een analyse laat zien waar je kansen laat liggen.
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
