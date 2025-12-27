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
  title: 'Google schrapt &num=100 | Impact op SEO-data',
  description: 'Google heeft de &num=100 parameter weggehaald. SEO-tools en Search Console tonen nu minder betrouwbare data. Geen paniek: je site presteert nog hetzelfde.',
  openGraph: {
    title: 'Google schrapt &num=100 | Impact op SEO-data',
    description: 'Google heeft de &num=100 parameter weggehaald. SEO-tools en Search Console tonen nu minder betrouwbare data. Geen paniek: je site presteert nog hetzelfde.',
    url: 'https://vizibly.nl/google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/google-num100-parameter.png' }],
  },
};

const relatedArticles = [
  {
    slug: 'google-june-2025-core-update-wat-betekent-dit-voor-je-website',
    title: 'Google June 2025 core update: wat betekent dit voor je website?',
    image: '/blog/google-core-update-june-2025.png',
    excerpt: 'De tweede core update van 2025 is live. Leer wat dit betekent voor je rankings.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    image: '/blog/muvera.jpg',
    excerpt: 'Google heeft MUVERA aangekondigd. Dit moet je weten over de toekomst van SEO.'
  }
];

export default function GoogleNum100Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data/#article",
    "headline": "Google schrapt &num=100 parameter: wat betekent dit voor jouw SEO-data?",
    "description": "Google heeft de &num=100 parameter weggehaald. SEO-tools en Search Console tonen nu minder betrouwbare data. Geen paniek: je site presteert nog hetzelfde.",
    "image": "/blog/google-num100-parameter.png",
    "datePublished": "2025-09-16",
    "dateModified": "2025-09-17",
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
      "@id": "https://vizibly.nl/google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data/"
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
          {/* Back link */}
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                GOOGLE UPDATE
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Google schrapt &num=100 parameter: wat betekent dit voor jouw SEO-data?
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
                src="/blog/google-num100-parameter.png"
                alt="Google schrapt num=100 parameter"
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
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Zijn jouw website-rankings plotseling verdwenen uit SEO-tools? Zie je dramatisch dalende impressies in Google Search Console? Geen paniek. Google heeft sinds 14 september 2025 een technische wijziging doorgevoerd die ervoor zorgt dat veel SEO-data niet meer zichtbaar is. Je website presteert nog steeds hetzelfde: het lijkt alleen alsof je posities bent verloren omdat tools zonder de &num=100 parameter niet meer zo goed al je top 100 posities in een keer in kunnen laden. En dat zie je ook in GSC!
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat is er precies gebeurd?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Jarenlang konden SEO-tools de parameter "&num=100" toevoegen aan een Google-zoekresultaat URL om efficient data te verzamelen voor posities 1-100. Deze functionaliteit was essentieel voor tools om complete ranking-overzichten te bieden.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Voorheen:</strong> Betrouwbare data voor posities 1-100 in een verzoek
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Nu:</strong> Veel tools beperkt tot top-10 of top-20, diepere posities vaak onbetrouwbaar
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Hoewel sommige tools nog sporadisch data tonen voor hogere posities (zoals positie 50), is de kwaliteit en consistentie van deze informatie drastisch afgenomen.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom heeft Google dit gedaan?
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Google heeft geen officiele verklaring gegeven, maar volgens <a href="https://www.seroundtable.com/google-search-console-reporting-off-40106.html" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Search Engine Roundtable</a> wijzen experts naar bescherming tegen AI-scrapers, kostenbesparing en anti-bot maatregelen. De explosieve groei van AI-tools die Google's data scrapen heeft waarschijnlijk tot deze maatregel geleid.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Impact op SEO-tools en rapportages
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Verschillende platforms reageerden al op de wijziging. Semrush bevestigde dat dit "een branche-brede kwestie is die alle ranking tools treft" en biedt nu alleen top-10 posities volledig accuraat aan. AccuRanker volgt standaard alleen nog top-20 posities, en ook SE Ranking worstelt met de beperking tot top-20 data.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een onverwacht neveneffect: veel website-eigenaren zagen hun impressies in Google Search Console dramatisch dalen vanaf 10 september. Ook wij bij Vizibly zien deze opvallende "haaienbeet-grafieken" in vrijwel alle accounts. Impressies die maandenlang stabiel waren, zakken plotseling in en de gemiddelde positie schiet omhoog.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Wat is er werkelijk gebeurd?</strong> Google Search Console toont nog steeds alle echte impressies van menselijke bezoekers. Wat is weggevallen zijn de kunstmatige impressies die SEO-tools genereerden wanneer ze met de &num=100 parameter posities 11-100 opvroegen. Deze bot-impressies werden jarenlang meegeteld, waardoor de cijfers kunstmatig hoog waren.
          </p>

          {/* Screenshots */}
          <div className="mb-12 space-y-6">
            <div className="relative aspect-[4/1] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <Image
                src="/blog/gsc-screenshot-1.png"
                alt="Google Search Console impressies daling voorbeeld 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/1] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <Image
                src="/blog/gsc-screenshot-2.png"
                alt="Google Search Console impressies daling voorbeeld 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/1] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <Image
                src="/blog/gsc-screenshot-3.png"
                alt="Google Search Console impressies daling voorbeeld 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat betekent dit voor jou als website-eigenaar?
          </h2>

          {/* Highlight box */}
          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-black text-black lg:text-lg">
              Het allerbelangrijkste om te begrijpen: je website-prestaties zijn niet verslechterd en je hebt geen rankings verloren. Google Search Console toont nu eindelijk de werkelijke impressies: zonder de vervuiling van bot-verkeer dat jarenlang de cijfers heeft opgeblazen.
            </p>
          </div>

          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Herken je dit?</strong>
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Plotseling "verdwenen" rankings in SEO-tools voor posities 20+
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Dramatisch dalende impressies in Google Search Console vanaf 10 september
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Rankings die volgens tools zijn "weggevallen" maar handmatig nog wel vindbaar zijn
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Dit zijn allemaal gevolgen van dezelfde technische wijziging. Je echte bezoekers vinden je website nog steeds net zo goed als voorheen. Sterker nog, je Search Console data is nu betrouwbaarder omdat de bot-vervuiling weg (of in ieder geval een stuk minder) is.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Uitdaging voor SEO-specialisten
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voor website-eigenaren verandert er weinig, maar <Link href="/" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-specialisten</Link> staan voor nieuwe uitdagingen. Ze hebben nu aanzienlijk minder data tot hun beschikking om <Link href="/full-service-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">strategieen</Link> mee te ontwikkelen en moeten nieuwe manieren vinden om SEO-prestaties te monitoren met beperktere data. Voor <Link href="/local-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">lokale SEO</Link> is de impact gelukkig beperkt omdat hier voornamelijk top-10 posities relevant zijn.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Deze wijziging markeert een belangrijke verschuiving in data-toegang, maar voor website-eigenaren verandert de kern van SEO niet: <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">kwalitatieve content</Link>, <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">technische optimalisatie</Link> en gebruiksvriendelijkheid blijven de pijlers van online succes. Laat je niet misleiden door schijnbare data-verliezen. Focus op wat echt telt: je bezoekers en hun ervaring.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Vragen over de impact op jouw SEO-strategie?
            </h2>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Neem contact op voor een vrijblijvend gesprek over je online zichtbaarheid.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
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
