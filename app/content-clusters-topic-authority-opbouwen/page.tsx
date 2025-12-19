import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Content clusters: Topic authority opbouwen | SEO gids 2025',
  description: 'Ontdek hoe content clusters je website transformeren tot dé autoriteit in jouw niche. Praktische gids voor topic authority en hogere rankings in 2025.',
  openGraph: {
    title: 'Content clusters: Topic authority opbouwen | SEO gids 2025',
    description: 'Ontdek hoe content clusters je website transformeren tot dé autoriteit in jouw niche. Praktische gids voor topic authority en hogere rankings in 2025.',
    url: 'https://vizibly.nl/content-clusters-topic-authority-opbouwen/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/groeien-topical-authority.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/content-clusters.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/seo-gaat-door.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  },
  {
    slug: 'de-verborgen-kracht-in-seo-gebruikersgedrag',
    title: 'De verborgen kracht in SEO: zo beïnvloedt gebruikersgedrag jouw Google positie',
    image: '/blog/gebruikersgedrag-seo.jpg',
    excerpt: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt en hoe je de ervaring verbetert.'
  }
];

export default function ContentClustersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/content-clusters-topic-authority-opbouwen/#article",
        "headline": "Content clusters: Topic authority opbouwen",
        "description": "Ontdek hoe content clusters je website transformeren tot dé autoriteit in jouw niche. Praktische gids voor topic authority en hogere rankings in 2025.",
        "image": "https://vizibly.nl/blog/content-clusters.jpg",
        "datePublished": "2025-08-21",
        "dateModified": "2025-08-21",
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
          "@id": "https://vizibly.nl/content-clusters-topic-authority-opbouwen/"
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
                CONTENT STRATEGIE
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Content clusters: Topic authority opbouwen
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  5 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
              <Image
                src="/blog/content-clusters.jpg"
                alt="Content clusters: Topic authority opbouwen"
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
            Google is veranderd. Vroeger kon je nog scoren met losse pagina's die elk op een zoekterm mikten. Vandaag de dag wil Google zien dat je echt verstand hebt van je onderwerp. Dat je de autoriteit bent waar mensen naartoe gaan voor antwoorden. En daar komen content clusters om de hoek kijken.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat zijn content clusters precies?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Stel je voor: je hebt een centrale pagina over financiele planning. Die pagina behandelt het onderwerp breed en linkt naar diepgaande artikelen over deelonderwerpen zoals pensioenopbouw, sparen voor je kinderen en beleggen voor beginners. Al die pagina's linken weer terug naar je hoofdpagina en naar elkaar waar relevant. Dat is een content cluster.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het model draait om drie elementen:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <span><strong className="text-black">Pillar page:</strong> Je uitgebreide hoofdpagina die het complete onderwerp behandelt</span>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <span><strong className="text-black">Cluster content:</strong> Gedetailleerde pagina's over specifieke deelonderwerpen</span>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <span><strong className="text-black">Interne links:</strong> De verbindingen die alles aan elkaar koppelen</span>
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Google snapt door deze structuur meteen: jij bent de expert op dit gebied. Je behandelt niet alleen het hoofdonderwerp, maar duikt ook de diepte in met alle relevante aspecten eromheen.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom content clusters essentieel voor je SEO-strategie in 2025 zijn
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <a href="https://developers.google.com/search/blog/2023/05/understanding-news-topic-authority" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Google introduceerde</a> het concept van "topic authority" officieel op 23 mei 2023, maar slimme SEO's werkten hier al jaren mee. Het algoritme is verschoven van individuele zoektermen naar complete onderwerpen. Je moet niet meer denken in keywords, maar in thema's.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Dit heeft alles te maken met hoe mensen tegenwoordig zoeken. Ze typen geen robotachtige zoektermen meer in, maar stellen complete vragen. Ze willen diepgaande informatie van bronnen die ze kunnen vertrouwen. En Google's AI-gedreven algoritmes begrijpen steeds beter wat gebruikers echt zoeken - niet alleen wat ze intypen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het resultaat? Websites met sterke content clusters domineren de zoekresultaten. Ze pakken niet alleen posities voor hun hoofdonderwerp, maar ranken ook voor honderden gerelateerde long-tail zoektermen. Een goed opgezet cluster kan je verkeer vertienvoudigen.
          </p>

          {/* Image */}
          <div className="mb-12 relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
            <Image
              src="/blog/topical-authority-opbouwen.jpg"
              alt="Topical authority opbouwen"
              fill
              className="object-cover"
            />
          </div>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Zo bouw je succesvolle content clusters
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Stap 1: Kies je kernonderwerpen
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Begin met 3 tot 8 hoofdthema's die perfect aansluiten bij je expertise en waar je klanten naar zoeken. Voor een SEO-bureau als Vizibly kunnen dat onderwerpen zijn als 'technische SEO', 'content marketing' of 'lokale vindbaarheid'.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Gebruik tools zoals Google Trends, Answer the Public en je eigen Google Search Console data om te ontdekken waar vraag naar is. Kijk ook goed naar je concurrenten: welke onderwerpen behandelen zij uitgebreid?
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Stap 2: Creeer je pillar page
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Je pillar page is het kloppend hart van je cluster. Deze pagina moet:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Het complete onderwerp breed behandelen
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Natuurlijke aanknopingspunten hebben voor je cluster content
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Geoptimaliseerd zijn voor je hoofdzoekterm
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Een logische structuur hebben met duidelijke koppen
            </li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Belangrijk: schrijf een uitgebreide pagina die echt waarde toevoegt. Zorg voor een inhoudsopgave en visuele elementen die het scanbaar maken.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Stap 3: Ontwikkel cluster content
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voor elk aspect dat je aansnijdt in je pillar page, maak je diepgaande content. Dit kunnen zijn:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Gedetailleerde how-to artikelen
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Case studies uit de praktijk
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Vergelijkingen en reviews
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              FAQ-pagina's
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Video's of podcasts
            </li>
          </ul>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Het geheim zit in de variatie. Mix verschillende content-types en invalshoeken. Zo spreek je verschillende zoekintentie aan - van mensen die zich orienteren tot kopers die alleen nog dat laatste zetje nodig hebben.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Stap 4: Verbind alles met slimme interne links
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Interne links zijn de lijm van je content cluster. Elke cluster-pagina linkt naar de pillar page, en de pillar page linkt naar alle cluster-pagina's. Maar ga verder dan dat:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Link cluster-pagina's onderling waar het logisch is
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Gebruik beschrijvende ankerteksten (niet "klik hier")
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Voeg contextual links toe midden in je content
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Update oude content met links naar nieuwe cluster-pagina's
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Dit helpt niet alleen Google om de samenhang te begrijpen, maar houdt ook bezoekers langer op je site.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Praktijkvoorbeelden die werken
          </h2>

          <div className="mb-6 border-4 border-black bg-white p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
            <p className="text-base font-bold text-black lg:text-lg mb-4">
              <strong>E-commerce:</strong> Een webshop voor hardloopschoenen maakt een pillar page "De complete gids voor hardloopschoenen" met cluster-content over pronatie, verschillende ondergronden, merkvergelijkingen en onderhoudstips.
            </p>
          </div>

          <div className="mb-6 border-4 border-black bg-white p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
            <p className="text-base font-bold text-black lg:text-lg mb-4">
              <strong>B2B SaaS:</strong> Een projectmanagement-tool creëert een cluster rond "Agile werken" met pagina's over Scrum, Kanban, sprint planning en team retrospectives.
            </p>
          </div>

          <div className="mb-12 border-4 border-black bg-white p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
            <p className="text-base font-bold text-black lg:text-lg mb-4">
              <strong>Lokale dienstverlening:</strong> Een accountantskantoor bouwt een cluster over "Belastingaangifte voor ZZP'ers" met content over aftrekposten, btw-aangifte, urencriterium en fiscale tips.
            </p>
          </div>

          {/* Image */}
          <div className="mb-12 relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
            <Image
              src="/blog/groeien-topical-authority.jpg"
              alt="Groeien dankzij topical authority"
              fill
              className="object-cover"
            />
          </div>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Content clusters voor specifieke branches
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Elke sector heeft zijn eigen kansen voor content clusters. Een makelaarskantoor kan clusters bouwen rond kopers- en verkoperstrajecten. Zorginstellingen kunnen zich richten op behandelmethodes of patientenzorg. En webshops profiteren van clusters rond productcategorieen of gebruikssituaties.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het belangrijkste is dat je clusters kiest die aansluiten bij wat je klanten echt bezighoudt. Niet wat jij denkt dat belangrijk is, maar waar zij wakker van liggen.
          </p>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Meet je succes
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Content clusters zijn geen set-and-forget strategie. Monitor deze metrics:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Rankings voor je pillar page en cluster-pagina's
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Organisch verkeer naar het complete cluster
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Gemiddelde sessieduur en bounce rate
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Aantal pagina's per sessie
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Conversies vanuit cluster-content
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Gebruik deze data om je clusters te verfijnen. Welke onderwerpen trekken het meeste verkeer? Waar haken bezoekers af? Welke content converteert het beste?
          </p>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De toekomst: AI en content clusters
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Met de opkomst van AI-gedreven zoekresultaten wordt topic authority alleen maar belangrijker. AI-modellen zoals ChatGPT en Google's AI Overviews halen hun informatie uit bronnen met sterke topische autoriteit. Bedrijven met robuuste content clusters krijgen vaker vermelding in AI-gegenereerde antwoorden.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Dit betekent dat je content clusters niet alleen moet optimaliseren voor traditionele SEO, maar ook voor AI-leesbaarheid. Gebruik duidelijke structuur, beantwoord vragen direct en zorg voor feitelijk correcte informatie.
          </p>

          {/* Section 8 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Aan de slag met content clusters
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Content clusters zijn geen quick fix, maar een langetermijnstrategie die je website transformeert tot de autoriteit in jouw niche. Begin klein met een cluster rond je belangrijkste onderwerp. Bouw dit uit, meet de resultaten en breid dan uit naar andere thema's.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Wil je hulp bij het opzetten van content clusters? Bij Vizibly ontwikkelen we complete <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-strategieen</Link> inclusief content clusters. We schrijven niet alleen <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">vlijmscherpe SEO-teksten</Link> die scoren, maar zorgen ook voor de technische optimalisatie en linkbuilding die je clusters naar de top stuwen.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Klaar om jouw topic authority te vestigen?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Neem contact op voor een vrijblijvende kennismaking en ontdek hoe content clusters jouw online zichtbaarheid kunnen transformeren.
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

      {/* Related Articles Section */}
      <section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-12 text-brutalist-h2 text-white">
            Lees meer
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related, index) => (
              <Link key={index} href={`/${related.slug}`} className="group block">
                <Card className="overflow-hidden border-4 border-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-2 text-lg font-black uppercase leading-tight lg:text-xl">
                      {related.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="mb-4 text-sm font-bold text-black/70 line-clamp-2">
                      {related.excerpt}
                    </p>
                    <span className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white px-2 py-1">
                      LEES ARTIKEL
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Klaar om te groeien?
            </h2>
            <p className="mb-12 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden.
            </p>
            <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="mb-6 block">
                <Image
                  src="/logo-brutalist-white.svg"
                  alt="Vizibly Logo"
                  width={200}
                  height={50}
                  className="h-auto w-48"
                />
              </Link>
              <p className="text-base font-bold text-white/80 lg:text-lg">
                SEO specialist die zorgt dat je gevonden wordt.
              </p>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Diensten</h4>
              <ul className="space-y-4">
                <li><Link href="/full-service-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Full Service SEO</Link></li>
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-accent hover:text-white transition-colors">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Contact</h4>
              <ul className="space-y-4 text-base font-bold text-white/80 lg:text-lg">
                <li>Vizibly</li>
                <li>'t Zanddorp 55</li>
                <li>4335 AE Middelburg</li>
                <li>
                  <a href="tel:0628206410" className="hover:text-accent transition-colors">
                    0628206410
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vizibly.nl" className="hover:text-accent transition-colors">
                    info@vizibly.nl
                  </a>
                </li>
                <li>KvK: 68478143</li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-white/20 pt-8 text-center">
            <p className="text-base font-bold uppercase text-white/60">&copy; {new Date().getFullYear()} VIZIBLY. ALLE RECHTEN VOORBEHOUDEN.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
