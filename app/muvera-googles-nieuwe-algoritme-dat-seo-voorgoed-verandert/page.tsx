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
  title: 'MUVERA: Google\'s nieuwe algoritme dat SEO verandert',
  description: 'Google heeft MUVERA aangekondigd, een technologie die SEO voorgoed verandert. Leer wat dit betekent voor jouw website en hoe je je kunt voorbereiden.',
  openGraph: {
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO verandert',
    description: 'Google heeft MUVERA aangekondigd, een technologie die SEO voorgoed verandert. Leer wat dit betekent voor jouw website en hoe je je kunt voorbereiden.',
    url: 'https://vizibly.nl/muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/muvera.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'word-gevonden-door-ai-de-toekomst-van-seo-is-geo',
    title: 'Word gevonden door AI: de toekomst van SEO is GEO',
    image: '/blog/geo-seo-ai.jpg',
    excerpt: 'Generative Engine Optimization: hoe je gevonden wordt in AI-antwoorden.'
  },
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/seo-gaat-door.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  },
  {
    slug: 'google-june-2025-core-update-wat-betekent-dit-voor-je-website',
    title: 'Google June 2025 core update: wat betekent dit voor je website?',
    image: '/blog/google-core-update-june-2025.png',
    excerpt: 'De tweede core update van 2025 is live. Leer wat dit betekent voor je rankings.'
  }
];

export default function MuveraPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert/#article",
        "headline": "MUVERA: Google's nieuwe algoritme dat SEO voorgoed verandert",
        "description": "Google heeft MUVERA aangekondigd, een technologie die SEO voorgoed verandert. Leer wat dit betekent voor jouw website.",
        "image": "https://vizibly.nl/blog/muvera.jpg",
        "datePublished": "2025-07-17",
        "dateModified": "2025-07-17",
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
          "@id": "https://vizibly.nl/muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert/"
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
                GOOGLE ALGORITME
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                MUVERA: Google's nieuwe algoritme dat SEO voorgoed verandert
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
                src="/blog/muvera.jpg"
                alt="MUVERA: Google's nieuwe algoritme"
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
      <article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Google heeft MUVERA (Multi-Vector Retrieval Algorithm) aangekondigd, een technologie die mogelijk het einde betekent van SEO zoals we het kennen. Geen paniek, je website gaat niet spontaan verdwijnen uit Google. Maar de spelregels? Die zijn wel aan het veranderen. En behoorlijk ook.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat is MUVERA?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Stel je voor dat Google tot nu toe zoekopdrachten en websites vergeleek zoals je puzzelstukjes in elkaar probeert te passen: een stukje per keer. MUVERA doet het anders: het kijkt naar het hele plaatje vanuit meerdere perspectieven tegelijk.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Technisch gezien lost MUVERA een probleem op waar Google al tien jaar mee worstelt. Multi-vector modellen (zoals ColBERT) leverden geweldige zoekresultaten, maar waren ongeveer net zo snel als een slak op een teerbaan. <a href="https://research.google/blog/muvera-making-multi-vector-retrieval-as-fast-as-single-vector-search/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">MUVERA</a> comprimeert deze complexe multi-vector representaties tot Fixed Dimensional Encodings (FDEs), waardoor Google 90% sneller kan zoeken met 10% betere resultaten. Best indrukwekkend voor een stukje wiskunde.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom dit een game-changer is voor SEO
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Remember die tijd dat je gewoon een keyword twintig keer in je tekst kon proppen en bovenaan in Google kwam? Die tijd is nu echt voorbij. MUVERA begrijpt context zoals nooit tevoren. Het snapt dat iemand die zoekt naar "apple beveiliging" waarschijnlijk niet geinteresseerd is in tips voor het bewaren van fruit.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Van keywords naar begrip
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            MUVERA is een kernonderdeel van Google's June 2025 Core Update en draait volledig om semantische relevantie in plaats van exacte keyword matches. Het algoritme evalueert niet je hele pagina als een geheel, maar kan specifieke stukken uit je content vissen die perfect aansluiten bij een zoekopdracht.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Dat betekent dat die briljante alinea die je verstopt hebt onder kopje nummer 7? Die kan zomaar ineens bovenaan Google verschijnen. Elk stukje content moet daarom op zichzelf waardevol zijn.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Praktische gevolgen voor jouw website
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            1. Topische autoriteit wint
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Losse blogjes schrijven over van alles en nog wat? Vergeet het maar. MUVERA beloont websites die zich focussen op samenhangende onderwerpen. Websites met sterke <Link href="/content-clusters-topic-authority-opbouwen" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">topische clusters</Link> presteren consistent beter.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Een praktisch voorbeeld: heb je een webshop? Creeer dan niet alleen productpagina's, maar bouw een compleet kenniscentrum rond je producten. Handleidingen, vergelijkingen, troubleshooting... het hele pakket.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            2. Techniek blijft koning
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            MUVERA mag dan slim zijn, het heeft geen geduld voor trage websites. Je Core Web Vitals moeten op orde zijn, anders kom je niet eens door de eerste selectieronde. Die groene Yoast-vinkjes alleen zijn niet meer genoeg.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            3. Schrijf voor mensen (echt dit keer)
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            "Schrijf voor mensen, niet voor zoekmachines"... we hebben het allemaal al duizend keer gehoord. Maar met MUVERA wordt dit advies eindelijk werkelijkheid. Het algoritme is zo geavanceerd dat het kunstmatige SEO-trucjes direct doorziet.
          </p>

          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-black text-black lg:text-lg mb-4">Wat werkt wel?</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Content die een probleem echt oplost (niet alleen benoemt)
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Unieke inzichten uit ervaring
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Natuurlijk gebruik van synoniemen en gerelateerde termen
              </li>
              <li className="flex items-start gap-3 text-base font-bold text-black lg:text-lg">
                <span className="mt-2 h-2 w-2 flex-shrink-0 bg-black"></span>
                Gestructureerde content met logische kopjes en paragrafen
              </li>
            </ul>
          </div>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            4. E-E-A-T wordt nog belangrijker
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Experience, Expertise, Authoritativeness, en Trustworthiness: Google's MUVERA kan nu beter dan ooit detecteren of je weet waar je het over hebt. Een bouwbedrijf dat alleen theoretische content publiceert over dakisolatie? MUVERA prikt daar dwars doorheen. Praktijkvoorbeelden en echte projecten worden cruciaal.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wanneer komt MUVERA?
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            MUVERA werd aangekondigd als onderdeel van Google's June 2025 Core Update, met volledige uitrol verwacht tegen Q2 2026. Maar laten we eerlijk zijn: elementen worden waarschijnlijk nu al getest. Websites die nu investeren in semantische diepte en topische autoriteit hebben straks een voorsprong.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De bottom line
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            MUVERA is geen reden voor paniek, maar wel voor actie. Het beloont wat eigenlijk altijd al de beste aanpak was: waardevolle content maken voor echte mensen met echte vragen. De tijd van quick wins en SEO-trucjes? Die is nu echt voorbij.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het goede nieuws: als je website al focust op kwaliteit en gebruikerservaring, ben je waarschijnlijk al op de goede weg. Zo niet? Dan is het tijd om je <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-strategie</Link> tegen het licht te houden.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Benieuwd of jouw website klaar is voor MUVERA?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Wij helpen je graag met een grondige analyse en toekomstbestendige strategie.
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
