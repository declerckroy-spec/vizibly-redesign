import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, User } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { FinalCTA } from "@/components/final-cta";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "SEO mythe ontkracht: meer links = hogere rankings?",
  description:
    "Ontdek waarom 'meer links = hogere rankings' een gevaarlijke SEO mythe is. Leer waarom kwaliteit belangrijker is dan kwantiteit in 2025.",
  openGraph: {
    title: "SEO mythe ontkracht: meer links = hogere rankings?",
    description:
      "Ontdek waarom 'meer links = hogere rankings' een gevaarlijke SEO mythe is. Leer waarom kwaliteit belangrijker is dan kwantiteit in 2025.",
    url: "https://vizibly.nl/seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings/",
    siteName: "Vizibly",
    locale: "nl_NL",
    type: "article",
  },
};


const relatedArticles = [
  {
    slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    image: '/blog/seo-bureau-kiezen.png',
    excerpt: 'Google waarschuwt expliciet voor bepaalde SEO-bureaus. Kies slim met deze 4 regels.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
    title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
    image: '/blog/seo-uitbesteden.jpg',
    excerpt: 'Zelf doen of uitbesteden? Maak de juiste keuze voor jouw situatie.'
  }
];

export default function SeoMytheLinkbuildingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO mythe ontkracht: meer links = hogere rankings?",
    description:
      "Ontdek waarom 'meer links = hogere rankings' een gevaarlijke SEO mythe is. Leer waarom kwaliteit belangrijker is dan kwantiteit in 2025.",
    author: {
      "@type": "Person",
      name: "Roy de Clerck",
    },
    publisher: {
      "@type": "Organization",
      name: "Vizibly",
      logo: {
        "@type": "ImageObject",
        url: "https://vizibly.nl/logo-brutalist-white.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vizibly.nl/seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-black pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)",
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          {/* Back link */}
          <Link
            href="/vizie"
            className="group mb-8 inline-flex items-center text-base font-bold text-white/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Terug naar Vizie
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                SEO MYTHE ONTKRACHT
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                Meer links leiden{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative text-black">automatisch</span>
                </span>{" "}
                tot hogere rankings?
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                Een van de meest hardnekkige SEO-mythen: meer backlinks = betere rankings.
                De realiteit is complexer. Ontdek waarom kwaliteit boven kwantiteit gaat.
              </p>

              {/* Author info */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-white/70">
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

            {/* Featured image */}
            <div className="relative">
              <div
                className="relative border-4 border-white"
                style={{ boxShadow: "12px 12px 0 0 #CCFF00" }}
              >
                <Image
                src="/blog/backlinks.jpg"
                  alt="Backlinks en SEO - kwaliteit boven kwantiteit"
                  width={800}
                  height={533}
                  className="h-auto w-full"
                  priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg font-bold leading-relaxed text-black lg:text-xl">
                Als SEO-professional hoor je het nog steeds regelmatig: &quot;We hebben gewoon meer
                links nodig om hoger te ranken in Google.&quot; Deze uitspraak, hoewel begrijpelijk,
                is een van de meest hardnekkige en gevaarlijke SEO-mythen van 2025.
              </p>
              <p className="mt-6 text-lg font-bold leading-relaxed text-black lg:text-xl">
                <a
                  href="https://www.onthemap.com/blog/7-seo-myths-to-forget-about-2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  Taylor Murchison, Director of SEO bij On The Map Marketing
                </a>, noemt dit zelfs een van de grootste SEO mythen die hij in zijn decennialange
                carrière heeft gehoord. En hij heeft gelijk: het is tijd om deze mythe definitief
                te ontkrachten.
              </p>
            </div>

            {/* Section: Waarom deze mythe zo hardnekkig is */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Waarom deze mythe zo hardnekkig is
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                De mythe &quot;meer links = hogere rankings&quot; komt voort uit een fundamenteel misverstand
                van hoe Google&apos;s PageRank algoritme werkt. Ja, Google gebruikt nog steeds PageRank
                als ranking factor - dat bevestigden ze zelfs in 2024 in hun SEO Starter Guide. Maar
                de manier waarop dit algoritme werkt, is veel complexer dan simpelweg links tellen.
              </p>
            </div>

            {/* Section: De historische context */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                De historische context
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                In de vroege dagen van Google was het inderdaad zo dat meer links vaak tot betere
                rankings leidden. Maar dat was toen het web nog relatief klein was en spammers nog
                niet massaal het systeem hadden ontdekt. Inmiddels heeft Google hun algoritme dermate
                verfijnd dat <strong>kwaliteit ver boven kwantiteit staat</strong>.
              </p>
            </div>

            {/* Section: De realiteit */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De realiteit: waarom meer links niet automatisch betekent betere rankings
              </h2>
            </div>

            {/* Subsection: PageRank kijkt naar kwaliteit */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                1. PageRank kijkt naar kwaliteit, niet kwantiteit
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Het oorspronkelijke PageRank algoritme van Larry Page en Sergey Brin was gebaseerd
                op de kwaliteit en kwantiteit van inkomende links. Maar de nadruk ligt op <strong>kwaliteit</strong>.
                Een link van de BBC is meer waard dan 100 links van spammy directories.
              </p>
              <div className="mt-6 border-4 border-black bg-accent/10 p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                <p className="text-base font-bold text-black lg:text-lg">
                  <strong>Feitelijk bewijs:</strong> Een case study van On The Map Marketing toont aan
                  dat hun artikel over &quot;local SEO for law firms&quot; op de 7e positie rankt, ondanks dat
                  het het zwakste linkprofiel heeft van alle top 10 resultaten in Ahrefs.
                </p>
              </div>
            </div>

            {/* Subsection: Google's anti-spam maatregelen */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                2. Google&apos;s anti-spam maatregelen
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Sinds de Penguin update in 2012 (die in 2016 deel werd van het core algoritme) straft
                Google actief websites af die proberen rankings te manipuleren met slechte links. De
                2025 Spam Update heeft dit nog verder aangescherpt.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Wat dit betekent:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Spammy links worden genegeerd of kunnen je zelfs schaden
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Google kan automatisch slechte links herkennen en negeren
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Focus op relevantie en autoriteit is crucialer dan ooit
                  </li>
                </ul>
              </div>
            </div>

            {/* Subsection: Context en relevantie */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                3. Context en relevantie zijn koning
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Een link van een autoriteitswebsite in jouw niche is exponentieel meer waard dan
                tientallen irrelevante links. Google&apos;s algoritme kijkt naar:
              </p>
              <ul className="mt-6 space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <strong>Topical relevantie</strong> - past de linking site bij jouw onderwerp?
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <strong>Domain autoriteit</strong> - hoe betrouwbaar is de linking site?
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <strong>Context</strong> - staat de link in relevante content?
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <strong>Gebruikerservaring</strong> - helpt de link de gebruiker echt?
                </li>
              </ul>
            </div>

            {/* Section: De wetenschappelijke feiten */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De wetenschappelijke feiten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Recent onderzoek toont aan waarom kwaliteit over kwantiteit gaat:
              </p>

              <div className="mt-6 border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Backlinko studie resultaten:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Het #1 resultaat in Google heeft gemiddeld 3.8x meer backlinks dan posities 2-10
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    <strong>Maar:</strong> dit zijn meestal hoogwaardige, relevante links
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Slechts 2.2% van alle online content krijgt uberhaupt links van andere sites
                  </li>
                </ul>
              </div>

              <div className="mt-8 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>PageRank werkt logaritmisch</strong>, wat betekent:
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Een PR4 pagina kan 25x belangrijker zijn dan een PR2 pagina
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Links van hoogwaardige pagina&apos;s geven exponentieel meer &quot;link juice&quot;
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Footer links zijn minder waardevol dan header links
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Nofollow links geven minder PageRank door
                  </li>
                </ul>
              </div>
            </div>

            {/* Section: Waarom de "meer links" strategie kan backfiren */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Waarom de &quot;meer links&quot; strategie kan backfiren
              </h2>
            </div>

            {/* Subsection: Penguin penalties */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                1. Penguin penalties
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Websites die zich richten op kwantiteit in plaats van kwaliteit lopen het risico op:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Algoritmische penalties
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Manual actions van Google
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Complete deindexering
                </li>
              </ul>
            </div>

            {/* Subsection: Reputatie schade */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                2. Reputatie schade
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Slechte links kunnen je website associeren met:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Spamnetwerken
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Lage kwaliteitscontent
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Manipulatieve SEO-praktijken
                </li>
              </ul>
            </div>

            {/* Subsection: Tijdverspilling */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                3. Tijdverspilling
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Focus op kwantiteit betekent:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Minder tijd voor kwaliteitscontent
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Minder aandacht voor gebruikerservaring
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Suboptimale ROI van je SEO-inspanningen
                </li>
              </ul>
            </div>

            {/* Section: De juiste benadering */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De juiste benadering: quality-first linkbuilding in 2025
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                <Link
                  href="/linkbuilding"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  Linkbuilding
                </Link> draait in 2025 niet meer om het verzamelen van zoveel mogelijk links, maar om
                kwaliteit en relevantie. Een link van een nichewebsite met lage domeinautoriteit kan
                meer waarde hebben dan een link van een grote, irrelevante site.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Wat telt is de context: een link moet logisch passen in de content en echte waarde
                bieden voor de lezer. Ook de plaatsing telt mee - links in de hoofdtekst, hoger op
                de pagina, doen het beter dan in de footer of comments.
              </p>
            </div>

            {/* Section: Effectieve strategieen */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Effectieve strategieen
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Sterke links komen voort uit goede content. Denk aan gidsen, onderzoek of artikelen
                die echte problemen oplossen. Daarnaast loont het om relaties op te bouwen met
                relevante bloggers, journalisten en websites. Gastblogs, interviews of gezamenlijke
                projecten zorgen voor natuurlijke links.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Met digital PR kun je jouw verhaal of onderzoek onder de aandacht brengen bij media
                en zo autoriteit opbouwen.
              </p>
            </div>

            {/* Section: Wat werkt (en wat niet) */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Wat werkt (en wat niet)
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Kijk naar wat je concurrenten doen, blijf je linkprofiel monitoren en zorg voor een
                natuurlijke variatie in je anchor-tekst. Investeer in lange-termijnrelaties met
                andere sites in jouw vakgebied.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Vermijd goedkope bulklinks, over-geoptimaliseerde anchors en strategieen die puur
                op domeinautoriteit focussen. Resultaten zie je vaak pas na enkele maanden, dus
                geduld is essentieel.
              </p>
            </div>

            {/* Section: AI en de toekomst van linkbuilding */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                AI en de toekomst van linkbuilding
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                AI helpt zoekmachines steeds beter om kwaliteit te herkennen en manipulatieve
                technieken te doorzien. Tools op basis van AI maken ook jouw linkbuilding slimmer
                en efficienter. Bedrijven die inzetten op kwaliteit, profiteren het meest van
                deze ontwikkelingen.
              </p>
            </div>

            {/* Conclusie */}
            <div className="mb-12 border-4 border-black bg-black p-8" style={{ boxShadow: "8px 8px 0 0 #CCFF00" }}>
              <h2 className="text-brutalist-h3 mb-4 text-white">
                Kortom
              </h2>
              <p className="text-lg font-bold leading-relaxed text-white lg:text-xl">
                Een sterke, relevante link is meer waard dan honderd nutteloze. In 2025 draait het
                om waarde, context en relaties. Stop met het najagen van aantallen - verdien links
                die er echt toe doen.
              </p>
            </div>

            {/* CTA */}
            <div className="border-4 border-black bg-accent p-8">
              <p className="text-base font-bold leading-relaxed text-black lg:text-lg">
                Wil je weten hoe jouw huidige linkprofiel scoort?{" "}
                <Link
                  href="/contact"
                  className="underline decoration-black decoration-2 underline-offset-4 hover:bg-black hover:text-accent"
                >
                  Neem contact op
                </Link>{" "}
                voor een gratis SEO analyse en ontdek waar jouw grootste kansen liggen voor
                hoogwaardige linkbuilding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA Section */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Geen spam, geen bulklinks. Alleen kwalitatieve backlinks die echt bijdragen aan je rankings en autoriteit."
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
