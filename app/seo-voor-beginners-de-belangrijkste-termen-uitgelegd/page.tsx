import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, User, Clock, Phone, Mail, MapPin } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';

export const metadata: Metadata = {
  title: 'SEO voor beginners: De belangrijkste termen uitgelegd | Vizibly',
  description: 'Wat betekenen al die SEO-termen eigenlijk? Ontdek de betekenis van keywords, backlinks, on-page SEO en meer in onze uitleg voor beginners.',
  openGraph: {
    title: 'SEO voor beginners: De belangrijkste termen uitgelegd | Vizibly',
    description: 'Wat betekenen al die SEO-termen eigenlijk? Ontdek de betekenis van keywords, backlinks, on-page SEO en meer in onze uitleg voor beginners.',
    url: 'https://vizibly.nl/seo-voor-beginners-de-belangrijkste-termen-uitgelegd/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};


const relatedArticles = [
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  },
  {
    slug: 'content-clusters-topic-authority-opbouwen',
    title: 'Content clusters: Topic authority opbouwen',
    image: '/blog/content-clusters.jpg',
    excerpt: 'Google wil zien dat je echt verstand hebt van je onderwerp. Dat je de autoriteit bent.'
  }
];

export default function SEOVoorBeginnersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SEO voor beginners: De belangrijkste termen uitgelegd",
    "description": "Wat betekenen al die SEO-termen eigenlijk? Ontdek de betekenis van keywords, backlinks, on-page SEO en meer in onze uitleg voor beginners.",
    "author": {
      "@type": "Person",
      "name": "Roy de Clerck"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vizibly",
      "url": "https://vizibly.nl"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vizibly.nl/seo-voor-beginners-de-belangrijkste-termen-uitgelegd/"
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
      <section className="relative overflow-hidden border-b-4 border-black bg-black pt-32 pb-16 lg:pt-40 lg:pb-20">
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
                SEO BASICS
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                SEO voor beginners: De belangrijkste termen uitgelegd
              </h1>

              <p className="text-lg font-bold text-white/80 lg:text-xl mb-8">
                Wat betekenen al die SEO-termen eigenlijk? In dit artikel leggen we de belangrijkste begrippen uit in heldere taal.
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  10 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/seo-beginners.jpg"
                alt="SEO voor beginners - belangrijkste termen uitgelegd"
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
            Als ondernemer wil je dat je website goed vindbaar is in Google, en daarbij kom je onvermijdelijk de term SEO tegen. Maar wat betekenen al die specifieke SEO-termen eigenlijk? In dit artikel leggen we de belangrijkste begrippen uit in heldere taal, zodat je beter begrijpt wat SEO inhoudt en je gerichter kunt werken aan je online vindbaarheid.
          </p>

          {/* Wat is SEO */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat is SEO?
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>SEO (Search Engine Optimization)</strong> is het optimaliseren van je website zodat deze beter vindbaar wordt in zoekmachines als Google. Het doel is om hoger te verschijnen in de zoekresultaten wanneer mensen zoeken naar termen die relevant zijn voor jouw bedrijf. Hogere posities leiden doorgaans tot meer bezoekers en uiteindelijk meer klanten.
          </p>

          {/* De belangrijkste SEO-termen */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De belangrijkste SEO-termen op een rij
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Zoekwoorden (Keywords)
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Zoekwoorden</strong> zijn de termen waar mensen op zoeken in Google. Dit kunnen enkele woorden zijn (&apos;schoenen&apos;) of langere zinnen (&apos;waar koop ik de beste hardloopschoenen&apos;). Bij SEO probeer je je website te optimaliseren voor de zoekwoorden die relevant zijn voor jouw bedrijf.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Longtail keywords</strong> zijn specifiekere, meestal langere zoekzinnen met minder zoekvolume maar vaak hogere conversiekans. Bijvoorbeeld: &apos;SEO specialist in Eindhoven&apos; in plaats van alleen &apos;SEO&apos;.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            On-page SEO
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>On-page SEO</strong> omvat alle optimalisaties die je direct op je eigen website uitvoert. Hieronder vallen:
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Title tag</strong> - De titel van je webpagina die in de zoekresultaten wordt getoond. Deze verschijnt ook bovenaan in je browsertabblad. Een goede title tag bevat je belangrijkste zoekwoord en nodigt uit om te klikken.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Meta description</strong> - Een korte beschrijving van je webpagina die in de zoekresultaten onder de title tag kan verschijnen. Hoewel deze niet direct invloed heeft op je ranking, kan een goed geschreven meta description wel je klikratio verhogen.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Headings (H1, H2, H3, etc.)</strong> - Koppen in je tekst, waarvan de H1 de belangrijkste is. Elke pagina moet precies een H1 hebben die het onderwerp van de pagina duidelijk aangeeft en bij voorkeur je belangrijkste zoekwoord bevat.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Alt-tekst</strong> - Beschrijvende tekst bij afbeeldingen. Zoekmachines kunnen afbeeldingen niet &apos;zien&apos;, maar wel de alt-tekst lezen. Dit helpt niet alleen bij de ranking, maar maakt je site ook toegankelijker voor mensen met een visuele beperking.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Interne links</strong> - Links van de ene pagina naar de andere binnen je eigen website. Deze helpen zoekmachines om je site te begrijpen en te indexeren, en verdelen de &apos;link juice&apos; (autoriteit) over je website.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Off-page SEO
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Off-page SEO</strong> verwijst naar alle activiteiten buiten je eigen website die je positie in de zoekresultaten beinvloeden, zoals:
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Backlinks</strong> - Links van andere websites naar jouw website. Ze werken als een soort stemmen van vertrouwen in de ogen van Google. Hoe meer kwalitatieve backlinks je hebt, hoe meer autoriteit je website krijgt.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Linkbuilding</strong> - Het actief verwerven van backlinks van andere websites. Dit kan via gastblogs, vermeldingen in branchegidsen, samenwerkingen met partners of door gewoon zeer waardevolle content te maken die mensen graag willen delen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Technische SEO
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Technische SEO</strong> gaat over de technische aspecten van je website die invloed hebben op je zichtbaarheid in zoekmachines:
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Crawlen</strong> - Het proces waarbij zoekmachines het internet afstruinen en webpagina&apos;s bezoeken om nieuwe of bijgewerkte content te vinden.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Indexeren</strong> - Nadat een pagina is gecrawld, wordt deze toegevoegd aan de index van de zoekmachine, waardoor deze kan verschijnen in de zoekresultaten.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Sitemap</strong> - Een XML-bestand dat zoekmachines helpt bij het vinden en indexeren van alle pagina&apos;s op je website.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Robots.txt</strong> - Een tekstbestand dat zoekmachinecrawlers vertelt welke delen van je website ze wel of niet mogen bezoeken en indexeren.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Laadtijd (Page Speed)</strong> - Hoe snel je website laadt. Dit is belangrijk voor de gebruikerservaring en is ook een rankingfactor voor Google.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Mobiele optimalisatie</strong> - Zorgen dat je website goed werkt en er goed uitziet op mobiele apparaten. Google gebruikt een mobile-first index, wat betekent dat de mobiele versie van je site de belangrijkste is voor je ranking.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Schema markup</strong> - Code die je aan je website toevoegt om zoekmachines te helpen de inhoud beter te begrijpen, wat kan leiden tot rijke zoekresultaten (bijvoorbeeld met sterren, prijzen of beschikbaarheid).
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Lokale SEO
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Lokale SEO</strong> richt zich op het optimaliseren van je online aanwezigheid om meer zichtbaarheid te krijgen in lokale zoekresultaten:
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Google Business Profile</strong> - Voorheen bekend als Google Mijn Bedrijf, dit is een gratis bedrijfsvermelding waarbij je informatie zoals openingstijden, locatie, recensies en foto&apos;s kunt beheren.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>NAP-gegevens</strong> - Staat voor Naam, Adres en Plaatsnaam. Consistente NAP-gegevens op al je online vermeldingen zijn cruciaal voor lokale SEO.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <strong>Local citations</strong> - Vermeldingen van je bedrijf op andere websites, vooral in online bedrijvengidsen en branchespecifieke platforms.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Analyse en metingen
          </h3>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Google Analytics</strong> - Een gratis tool van Google om websiteverkeer te analyseren, inclusief waar bezoekers vandaan komen, hoe ze je site gebruiken en of ze converteren.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Google Search Console</strong> - Een gratis tool van Google die inzicht geeft in hoe je website presteert in de zoekresultaten, welke zoektermen leiden tot weergaven en clicks, en of er technische problemen zijn die je aandacht nodig hebben.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Conversie</strong> - Het moment waarop een bezoeker de gewenste actie uitvoert, zoals het invullen van een contactformulier, het aanvragen van een offerte of het plaatsen van een bestelling.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Conversieratio (CR)</strong> - Het percentage bezoekers dat een gewenste actie uitvoert. Bijvoorbeeld: als 100 mensen je site bezoeken en 5 vullen het contactformulier in, dan is je conversieratio 5%.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Bounce rate (Bouncepercentage)</strong> - Het percentage bezoekers dat je website verlaat zonder interactie, zoals het klikken op een link of het bekijken van een tweede pagina.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>SERP (Search Engine Results Page)</strong> - De pagina met resultaten die je te zien krijgt nadat je een zoekopdracht hebt ingevoerd in een zoekmachine.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>CTR (Click-Through Rate)</strong> - Het percentage mensen dat op je vermelding in de zoekresultaten klikt na het zien ervan. Een hoge CTR kan een signaal zijn voor Google dat je content relevant is.
          </p>

          {/* Hoe nu verder */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Hoe nu verder?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Nu je de basis van SEO-terminologie kent, ben je beter voorbereid om gesprekken te voeren over het verbeteren van je online zichtbaarheid. Met deze kennis kun je direct beginnen met het optimaliseren van je website en het plannen van je SEO-strategie voor blijvend succes.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Succesvolle SEO combineert altijd deze elementen:
          </p>
          <ul className="mb-8 space-y-3 text-base font-bold text-black/80 lg:text-lg">
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Technisch perfecte website
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Hoogwaardige, relevante content die je doelgroep aanspreekt
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Autoriteit opbouwen door kwaliteitslinks van andere websites
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Gebruikerservaring die bezoekers omzet in klanten
            </li>
          </ul>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Wil je meer weten over hoe je SEO kunt inzetten voor jouw bedrijf? Lees hier over onze{' '}
            <Link href="/full-service-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">
              full service aanpak
            </Link>{' '}
            en neem gerust{' '}
            <Link href="/contact" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">
              contact
            </Link>{' '}
            met ons op voor een vrijblijvend gesprek!
          </p>
        </div>
      </article>

      {/* Related Articles Section */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Nu je de basis kent, is het tijd om actie te ondernemen. Wij helpen je graag met een SEO-strategie die echt werkt."
      />

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Column 1: Logo & Info */}
            <div>
              <Link href="/" className="mb-6 inline-block">
                <Image
                src="/logo-brutalist-white.svg"
                  alt="Vizibly"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </Link>
              <p className="mb-6 text-base font-bold text-white/70">
                SEO bureau met een missie: jouw bedrijf zichtbaar maken in Google.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-white/70">
                  5/5 Google Reviews
                </span>
              </div>
            </div>

            {/* Column 2: Diensten */}
            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">
                Diensten
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "SEO Strategie", href: "/seo-strategie" },
                  { name: "SEO Copy", href: "/seo-copy" },
                  { name: "Linkbuilding", href: "/linkbuilding" },
                  { name: "Local SEO", href: "/local-seo" },
                  { name: "Design & Techniek", href: "/design-techniek" },
                  { name: "Google Ads", href: "/google-ads-sea" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base font-bold text-white/70 transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Bedrijf */}
            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">
                Bedrijf
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Over ons", href: "/over-ons" },
                  { name: "Cases", href: "/cases" },
                  { name: "Vizie", href: "/vizie" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base font-bold text-white/70 transition-colors hover:text-accent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">
                Contact
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a
                    href="tel:+31642853802"
                    className="text-base font-bold text-white/70 transition-colors hover:text-accent"
                  >
                    06 42 85 38 02
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a
                    href="mailto:roy@vizibly.nl"
                    className="text-base font-bold text-white/70 transition-colors hover:text-accent"
                  >
                    roy@vizibly.nl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base font-bold text-white/70">
                    Eindhoven, Nederland
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base font-bold text-white/70">
                    Ma-Vr: 9:00 - 17:00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t-4 border-white/10 pt-8 md:flex-row">
            <p className="text-sm font-bold text-white/50">
              &copy; {new Date().getFullYear()} Vizibly. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm font-bold text-white/50 transition-colors hover:text-accent"
              >
                Privacy
              </Link>
              <Link
                href="/voorwaarden"
                className="text-sm font-bold text-white/50 transition-colors hover:text-accent"
              >
                Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
