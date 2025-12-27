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
  title: 'Google June 2025 core update | Wat betekent dit?',
  description: 'Op 30 juni kondigde Google de tweede core update van 2025 aan. Leer wat dit betekent voor je website en hoe je moet reageren.',
  openGraph: {
    title: 'Google June 2025 core update | Wat betekent dit?',
    description: 'Op 30 juni kondigde Google de tweede core update van 2025 aan. Leer wat dit betekent voor je website en hoe je moet reageren.',
    url: 'https://vizibly.nl/google-june-2025-core-update-wat-betekent-dit-voor-je-website/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/google-core-update-june-2025.png' }],
  },
};

const relatedArticles = [
  {
    slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    image: '/blog/muvera.jpg',
    excerpt: 'Google heeft MUVERA aangekondigd. Dit moet je weten over de toekomst van SEO.'
  },
  {
    slug: 'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data',
    title: 'Google schrapt num100 parameter: wat betekent dit voor jouw SEO data?',
    image: '/blog/google-num100-parameter.png',
    excerpt: 'Google verandert hoe je zoekresultaten analyseert. Dit moet je weten.'
  },
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/seo-gaat-door.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  }
];

export default function GoogleCoreUpdatePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/google-june-2025-core-update-wat-betekent-dit-voor-je-website/#article",
        "headline": "Google June 2025 core update: wat betekent dit voor je website?",
        "description": "Op 30 juni kondigde Google de tweede core update van 2025 aan. Leer wat dit betekent voor je website.",
        "image": "https://vizibly.nl/blog/google-core-update-june-2025.png",
        "datePublished": "2025-07-17",
        "dateModified": "2025-07-18",
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
          "@id": "https://vizibly.nl/google-june-2025-core-update-wat-betekent-dit-voor-je-website/"
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
                Google June 2025 core update: wat betekent dit voor je website?
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  3 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/google-core-update-june-2025.png"
                alt="Google June 2025 core update"
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
            Op 30 juni kondigde Google de tweede core update van 2025 aan. Na weken van speculatie over ranking fluctuaties is nu officieel bevestigd wat veel SEO professionals al vermoedden: er gebeurde inderdaad iets groots.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat is er gebeurd?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De June 2025 core update begon op 30 juni en was volledig uitgerold op 17 juli. Bijna 3 weken dus en dat is langer dan gebruikelijk. Google omschrijft het als een reguliere update om relevante content beter naar voren te brengen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <a href="https://www.seroundtable.com/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Search Engine Roundtable</a> rapporteerde al ranking volatiliteit op 28 juni, en experts merkten bewegingen op sinds begin juni.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De impact
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De eerste effecten van de update zijn zichtbaar geworden. Sommige websites ervaren traffic dalingen tot 20%, terwijl andere juist verbeteringen zien. Een opvallend patroon is dat rankings vaak stabiel blijven, maar conversies kunnen sterk dalen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            SEO professionals observeren dat de impact varieert per sector en website type. Vooral sites met dunne of over-geoptimaliseerde content lijken <a href="https://www.webmasterworld.com/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">sterker getroffen</a> te worden.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat betekent dit voor jouw website?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Deze update lijkt vooral gericht op het belonen van authentieke, waardevolle content. Sites met "thin content" of over-geoptimaliseerde pagina's rapporteren de grootste dalingen. Google benadrukt opnieuw "people-first content" - content die echt nuttig is voor gebruikers.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Wat wij en andere experts merken
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een belangrijke observatie die wij en anderen in de SEO community maken, is dat er een plotselinge verandering plaatsvindt in het type zoekopdrachten waarvoor pagina's worden getoond. Pagina's verliezen rankings voor minder relevante zoektermen, maar presteren juist beter voor zoekopdrachten die perfect aansluiten bij de inhoud.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Dit duidt op een verfijnde interpretatie van content door Google's nieuwe technologie, mogelijk <Link href="/muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">MUVERA</Link> (Multi-Vector Retrieval Algorithm). MUVERA gebruikt geavanceerde AI om niet alleen naar keywords te kijken, maar om de echte betekenis en context van content te begrijpen. In plaats van losse woorden te matchen, analyseert het algoritme complete concepten en gebruikersintentie.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voor onze klanten betekent dit dat onze focus op <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">kwalitatieve SEO teksten</Link> belangrijker is dan ooit.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat moet je doen?
          </h2>

          <div className="mb-6 border-4 border-black bg-white p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-black text-black lg:text-lg mb-4">Niet doen:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Overhaaste veranderingen tijdens de uitrol
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Paniek bij tijdelijke schommelingen
              </li>
            </ul>
          </div>

          <div className="mb-12 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-black text-black lg:text-lg mb-4">Wel doen:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Rankings en traffic monitoren
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Bestaande content kwaliteit verbeteren
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                E-E-A-T signalen versterken
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Onze aanpak
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Bij Vizibly volgen we deze ontwikkelingen nauwlettend. Onze <Link href="/full-service-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">volledige SEO aanpak</Link> richt zich op duurzame, waardevolle content. De eerste signalen suggereren dat Google opnieuw inzet op sites die echte waarde toevoegen.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Vragen over de impact op jouw website?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Neem contact op voor een vrijblijvende analyse. We kijken graag samen naar de effecten van de update op jouw rankings.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. Of plan een gesprek.
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
