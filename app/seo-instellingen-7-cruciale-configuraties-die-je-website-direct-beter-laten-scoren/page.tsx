import { Navigation } from '@/components/navigation';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO instellingen | 7 cruciale configuraties voor betere rankings',
  description: 'Ontdek de 7 belangrijkste technische SEO instellingen die je vandaag nog kunt implementeren voor betere zoekresultaten in Google.',
  openGraph: {
    title: 'SEO instellingen | 7 cruciale configuraties voor betere rankings',
    description: 'Ontdek de 7 belangrijkste technische SEO instellingen die je vandaag nog kunt implementeren voor betere zoekresultaten in Google.',
    url: 'https://vizibly.nl/seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/seo-instellingen.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  },
  {
    slug: 'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
    title: 'Canonical tags voor productvarianten: zo voorkom je duplicate content',
    image: '/blog/canonical-tags.jpg',
    excerpt: 'Voorkom duplicate content in je webshop en verbeter je rankings met de juiste canonical tags.'
  },
  {
    slug: 'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
    title: 'SEO voor WordPress: meer dan wat groene Yoast vinkjes',
    image: '/blog/wordpress-seo.jpg',
    excerpt: 'WordPress SEO gaat verder dan alleen plugins. Ontdek wat echt werkt.'
  }
];

export default function SEOInstellingenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren/#article",
    "headline": "SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren",
    "description": "Ontdek de 7 belangrijkste technische SEO instellingen die je vandaag nog kunt implementeren voor betere zoekresultaten.",
    "image": "/blog/seo-instellingen.jpg",
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
      "@id": "https://vizibly.nl/seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren/"
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
      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                TECHNISCHE SEO
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  8 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/seo-instellingen.jpg"
                alt="SEO instellingen - 7 cruciale configuraties"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Ben je gefrustreerd omdat je website niet goed scoort in Google? Of heb je het gevoel dat je technische SEO-kennis tekortschiet? Je bent niet alleen. Veel ondernemers worstelen met de juiste SEO instellingen voor hun website. In dit artikel ontdek je de 7 belangrijkste technische configuraties die je vandaag nog kunt implementeren voor betere zoekresultaten.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom de juiste SEO instellingen cruciaal zijn
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voordat we dieper ingaan op specifieke instellingen, is het belangrijk om te begrijpen waarom <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">technische SEO</Link> zo belangrijk is. Google gebruikt meer dan 200 factoren om websites te rangschikken, en veel daarvan zijn technisch van aard. Zonder de juiste configuratie kunnen zelfs de beste <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">content</Link> en <Link href="/linkbuilding" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">backlinks</Link> niet tot hun recht komen.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De 7 cruciale SEO instellingen voor betere rankings
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            1. XML-sitemap configuratie: Je roadmap voor Google
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een XML-sitemap is als een plattegrond van je website voor zoekmachines. Het helpt Google om alle belangrijke pagina&apos;s te vinden en te indexeren. Zonder een goed geconfigureerde sitemap kunnen bepaalde pagina&apos;s onopgemerkt blijven.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Zo stel je het perfect in:</strong>
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Zorg dat je sitemap automatisch wordt bijgewerkt wanneer je nieuwe content publiceert</li>
            <li>Voeg alleen kwalitatieve, indexeerbare pagina&apos;s toe (geen duplicates of pagina&apos;s met noindex)</li>
            <li>Dien je sitemap in via Google Search Console</li>
            <li>Controleer regelmatig op fouten in je sitemap</li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Tip voor WordPress-gebruikers:</strong> Plugins zoals Yoast SEO of Rank Math genereren automatisch XML-sitemaps, maar controleer of ze correct zijn ingesteld.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            2. Robots.txt optimalisatie: Stuur zoekmachines de juiste kant op
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Je robots.txt bestand vertelt zoekmachines welke delen van je website ze mogen verkennen en welke niet. Een verkeerd ingesteld robots.txt bestand kan ervoor zorgen dat belangrijke pagina&apos;s niet worden geïndexeerd of dat Google tijd verspilt aan het crawlen van onbelangrijke pagina&apos;s.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Veelgemaakte fouten:</strong>
          </p>
          <ul className="mb-10 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Per ongeluk je hele site blokkeren met Disallow: /</li>
            <li>Belangrijke pagina&apos;s blokkeren die wel geïndexeerd moeten worden</li>
            <li>Vergeten een verwijzing naar je sitemap op te nemen</li>
          </ul>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            3. Canonical URL implementatie: Voorkom duplicate content
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Duplicate content is een veelvoorkomend probleem dat je rankings kan schaden. Met canonical tags geef je aan Google door welke versie van een pagina de originele is die getoond moet worden in zoekresultaten.
          </p>
          <ul className="mb-10 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Voeg op elke pagina een canonical tag toe in de head-sectie van je website</li>
            <li>Zorg dat deze tag naar de definitieve URL van de huidige pagina verwijst</li>
            <li>Zorg dat URL&apos;s met parameters (zoals ?utm_source=) naar de hoofdversie verwijzen</li>
            <li>Controleer of http:// en https:// versies correct doorverwijzen</li>
            <li>Voorkom conflicterende canonicals (wanneer pagina A naar B verwijst en B naar A)</li>
          </ul>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            4. Structured data markering: Help Google je content te begrijpen
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Structured data (ook bekend als schema markup) helpt zoekmachines om je content beter te begrijpen en kan leiden tot rijke resultaten in de zoekresultaten, zoals sterrenbeoordelingen, FAQ&apos;s en receptkaarten.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Gebruik schema.org markup voor je bedrijfsgegevens (LocalBusiness schema)</li>
            <li>Implementeer specifieke schema&apos;s voor je content (artikel, product, FAQ, etc.)</li>
            <li>Test je structured data met Google&apos;s Rich Results Test tool</li>
            <li>Implementeer het bij voorkeur via JSON-LD (in plaats van microdata)</li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Wat je moet opnemen in je bedrijfsgegevens:</strong> Je bedrijfsnaam, logo en afbeeldingen, adresgegevens (straat, plaats, postcode), telefoonnummer, openingstijden en website URL.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            5. Laadsnelheid optimalisatie: Google beloont snelle websites
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Paginasnelheid is een officiële rankingfactor. Trage websites zorgen voor een slechte gebruikerservaring en worden door Google lager gerangschikt.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Optimaliseer afbeeldingen (comprimeer en gebruik moderne formaten zoals WebP)</li>
            <li>Implementeer browser caching via .htaccess of in je hosting-instellingen</li>
            <li>Minimaliseer CSS en JavaScript bestanden</li>
            <li>Gebruik een Content Delivery Network (CDN)</li>
            <li>Implementeer lazy loading voor afbeeldingen en video&apos;s</li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Richtlijnen voor browser caching:</strong> Afbeeldingen kunnen lang gecached worden (tot 1 jaar). CSS en JavaScript bestanden meestal 1 maand. Dit zorgt ervoor dat terugkerende bezoekers je website veel sneller zien laden.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            6. HTTPS en beveiligingsinstellingen: Vertrouwen wint rankings
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            HTTPS is een must voor elke website. Google geeft een lichte rankingboost aan beveiligde websites en markeert onbeveiligde sites als &quot;niet veilig&quot;, wat het vertrouwen van bezoekers schaadt.
          </p>
          <ul className="mb-10 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Installeer een SSL-certificaat (vaak gratis via je hosting)</li>
            <li>Configureer permanente 301-redirects van HTTP naar HTTPS</li>
            <li>Update interne links naar HTTPS</li>
            <li>Implementeer HTTP Strict Transport Security (HSTS)</li>
            <li>Controleer op mixed content waarschuwingen</li>
          </ul>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            7. Mobiele optimalisatie en Core Web Vitals
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Met mobile-first indexering kijkt Google eerst naar de mobiele versie van je website. Core Web Vitals zijn technische meetwaarden die de gebruikerservaring kwantificeren en direct invloed hebben op je rankings.
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Gebruik een responsive design dat zich aanpast aan alle schermformaten</li>
            <li>Optimaliseer voor Largest Contentful Paint (LCP): pagina&apos;s moeten binnen 2,5 seconden laden</li>
            <li>Verbeter First Input Delay (FID): interactiviteit moet binnen 100 ms mogelijk zijn</li>
            <li>Minimaliseer Cumulative Layout Shift (CLS): elementen mogen niet verschuiven tijdens het laden</li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>Tools voor Core Web Vitals optimalisatie:</strong> <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">PageSpeed Insights</a>, Google Search Console (Core Web Vitals rapport), en Lighthouse audits in Chrome DevTools.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelgemaakte fouten bij SEO instellingen
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            De &apos;set and forget&apos; mentaliteit
          </h3>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            SEO instellingen zijn niet iets wat je eenmalig instelt en dan vergeet. Zoekmachines veranderen voortdurend en je website evolueert. Regelmatige technische audits zijn essentieel om op koers te blijven.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Te veel vertrouwen op plugins zonder verificatie
          </h3>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            WordPress plugins zoals Yoast SEO zijn geweldig, maar ze zijn niet feilloos. Controleer altijd of de gegenereerde instellingen correct zijn en pas ze indien nodig handmatig aan.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Negeren van Search Console waarschuwingen
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Google Search Console is je directe lijn met Google. Negeer waarschuwingen over indexeringsproblemen, mobiele bruikbaarheid of beveiligingskwesties niet.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Aan de slag met betere SEO instellingen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Nu je weet welke technische SEO instellingen cruciaal zijn, is het tijd om actie te ondernemen. Begin met een grondige technische audit om te zien waar je staat. Prioriteer vervolgens de instellingen die de grootste impact zullen hebben op jouw specifieke situatie.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Onthoud dat technische SEO slechts één aspect is van een succesvolle strategie. Combineer deze instellingen met hoogwaardige content, een sterke linkbuilding strategie en een goede gebruikerservaring voor de beste resultaten.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Heb je hulp nodig bij het implementeren van deze technische SEO instellingen? Bij Vizibly hebben we ruime ervaring met het optimaliseren van websites voor betere zoekresultaten. <Link href="/contact" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Neem contact met ons op</Link> voor een gratis kennismakingsgesprek.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Een grondige technische audit laat zien waar je kansen liggen. Bel of mail voor een gratis kennismakingsgesprek."
      />

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black py-16 text-white lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/logo-brutalist-white.svg"
                  alt="Vizibly"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-base font-bold text-white/70">
                SEO bureau voor bedrijven die willen groeien via Google.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Diensten</h4>
              <ul className="space-y-3">
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/70 hover:text-accent">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/70 hover:text-accent">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/70 hover:text-accent">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/70 hover:text-accent">Local SEO</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Vizibly</h4>
              <ul className="space-y-3">
                <li><Link href="/over-ons" className="text-base font-bold text-white/70 hover:text-accent">Over ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/70 hover:text-accent">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/70 hover:text-accent">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/70 hover:text-accent">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Contact</h4>
              <ul className="space-y-3">
                <li className="text-base font-bold text-white/70">Roy de Clerck</li>
                <li><a href="tel:+31628206410" className="text-base font-bold text-white/70 hover:text-accent">06 282 064 10</a></li>
                <li><a href="mailto:roy@vizibly.nl" className="text-base font-bold text-white/70 hover:text-accent">roy@vizibly.nl</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t-4 border-white/20 pt-8 lg:flex-row">
            <p className="text-base font-bold text-white/50">
              © {new Date().getFullYear()} Vizibly. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-base font-bold text-white/50 hover:text-accent">Privacy</Link>
              <Link href="/voorwaarden" className="text-base font-bold text-white/50 hover:text-accent">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
