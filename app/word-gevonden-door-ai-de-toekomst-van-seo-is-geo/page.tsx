import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Check, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { FinalCTA } from "@/components/final-cta";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "Word gevonden door AI: De toekomst van SEO is GEO",
  description:
    "Ontdek GEO: de kunst om gevonden te worden door AI-tools zoals ChatGPT. Zo blijf je relevant in het tijdperk van AI-zoeken.",
  openGraph: {
    title: "Word gevonden door AI: De toekomst van SEO is GEO",
    description:
      "Ontdek GEO: de kunst om gevonden te worden door AI-tools zoals ChatGPT. Zo blijf je relevant in het tijdperk van AI-zoeken.",
    url: "https://vizibly.nl/word-gevonden-door-ai-de-toekomst-van-seo-is-geo/",
    siteName: "Vizibly",
    locale: "nl_NL",
    type: "article",
  },
};


const relatedArticles = [
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/hybride-model-ai-search.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  },
  {
    slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    image: '/blog/muvera.jpg',
    excerpt: 'Google heeft MUVERA aangekondigd. Dit moet je weten over de toekomst van SEO.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  }
];

export default function GeoSeoAiPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Word gevonden door AI: De toekomst van SEO is GEO",
    description:
      "Ontdek GEO: de kunst om gevonden te worden door AI-tools zoals ChatGPT. Zo blijf je relevant in het tijdperk van AI-zoeken.",
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
      "@id": "https://vizibly.nl/word-gevonden-door-ai-de-toekomst-van-seo-is-geo/",
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
      <section className="relative border-b-4 border-black bg-[#0a0a0a] pt-40 pb-24 text-white lg:pt-48 lg:pb-32">
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
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                GEO: GENERATIVE ENGINE OPTIMIZATION
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                Word gevonden door{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative text-black">AI</span>
                </span>
                : De toekomst van SEO is GEO
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                Naast Google stellen miljoenen mensen hun vragen nu ook aan ChatGPT, Claude
                en Perplexity. Ontdek hoe je op beide kanalen zichtbaar blijft.
              </p>

              {/* Author info */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  12 min leestijd
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
                src="/blog/geo-seo-ai.jpg"
                  alt="GEO - Generative Engine Optimization voor AI"
                  width={800}
                  height={1200}
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
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg font-bold leading-relaxed text-black lg:text-xl">
                Google blijft vooralsnog de belangrijkste zoekmachine, maar daarnaast stellen
                miljoenen mensen hun vragen nu ook aan AI-tools zoals ChatGPT, Claude, Deepseek,
                Gemini en Perplexity. De grote vraag: hoe zorg je dat je bedrijf op beide kanalen
                goed zichtbaar blijft?
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Welkom bij de opkomst van GEO: Generative Engine Optimization. Of simpel gezegd:
                naast je bestaande SEO-strategie ook gevonden worden door AI. Wij krijgen tegenwoordig
                steeds meer vragen over GEO, dus we dachten: laten we de belangrijkste feiten eens
                op een rijtje zetten.
              </p>
            </div>

            {/* Section: Wat is GEO */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Wat is GEO?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                GEO is niet de vervanging maar de evolutie van{" "}
                <Link
                  href="/full-service-seo"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  SEO
                </Link>. Waar traditionele zoekmachines lijsten tonen met links (waar jouw website
                hopelijk bovenaan staat), geven generatieve AI&apos;s een direct antwoord. Zonder scrollen,
                zonder advertenties, zonder jouw mooie meta-description.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Die AI haalt zijn kennis uit content die ergens online staat. En daar zit de kans:
                als jouw content daartussen zit en als waardevol wordt beschouwd, krijg je er een
                extra kanaal bij om gevonden te worden.
              </p>
            </div>

            {/* Cijfers box */}
            <div className="mb-12 border-4 border-black bg-black p-6" style={{ boxShadow: "8px 8px 0 0 #CCFF00" }}>
              <h3 className="text-brutalist-h3 mb-4 text-accent">
                De keiharde cijfers
              </h3>
              <p className="mb-4 text-base font-bold text-white/80 lg:text-lg">
                De verschuiving is al gaande. Recente studies tonen aan dat:
              </p>
              <ul className="space-y-3 text-base font-bold text-white lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <strong>30% van Gen Z</strong> gaat nu eerst naar AI voor antwoorden in plaats van Google
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  ChatGPT bereikte in 2023 al meer dan <strong>100 miljoen gebruikers</strong>, sneller dan welk platform ooit
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  De tijd tussen vraag en antwoord daalt van gemiddeld <strong>76 seconden</strong> (traditioneel zoeken) naar <strong>15 seconden</strong> (AI)
                </li>
              </ul>
            </div>

            {/* Section: Hoe denkt een AI */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Hoe denkt een AI?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Een AI zoals ChatGPT of Claude werkt anders dan Google. Hij zoekt geen &quot;beste
                geoptimaliseerde website&quot;, maar het best onderbouwde antwoord. Dat betekent:
              </p>
              <ul className="mt-6 space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <span><strong>Context telt:</strong> Wie ben jij? Wat is je expertise? Waar bewijs je dat?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <span><strong>Structuur is key:</strong> Duidelijke opbouw, goede koppen, heldere uitleg.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <span><strong>Bronvermelding helpt:</strong> Als anderen naar jou linken of je noemen, stijgt je kans.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <span><strong>Feitelijke juistheid:</strong> AI&apos;s willen betrouwbare informatie doorgeven - ze checken jouw content tegen andere bronnen.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  <span><strong>Actualiteit:</strong> Verse, up-to-date informatie krijgt voorrang boven verouderde content.</span>
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Het is dus niet langer een kwestie van keywords erin duwen. Je moet je verhaal zo
                vertellen dat een AI het begrijpt, vertrouwt en doorvertelt.
              </p>
            </div>

            {/* Section: Wat betekent dat voor jouw bedrijf */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Wat betekent dat voor jouw bedrijf?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Als jij online zichtbaar wilt blijven, moet je zorgen dat AI&apos;s jouw content snappen
                en durven te gebruiken. De strategische verschuiving vraagt om:
              </p>
            </div>

            {/* 1. Autoriteit opbouwen */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                1. Autoriteit opbouwen
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Het opbouwen van echte expertise in je vakgebied is niet langer optioneel.
                AI&apos;s herkennen patronen van autoriteit:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Diepgaande content die antwoord geeft op complexe vragen
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Consistent publiceren binnen je niche
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Vermeldingen bij andere autoriteiten in jouw sector
                </li>
              </ul>
            </div>

            {/* 2. Structuur veranderen */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                2. Structuur veranderen
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Je content moet machine-begrijpelijk en citeerbaar zijn:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Duidelijke koppen en subkoppen met relevante informatie
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Directe antwoorden op concrete vragen
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Formateringen die feitelijke informatie markeren (tabellen, bulletpoints)
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Een logische opbouw die een AI kan volgen en navertellen
                </li>
              </ul>
            </div>

            {/* 3. Unieke kennis delen */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                3. Unieke kennis delen
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                De echte winnaars in het GEO-tijdperk worden kennisdelers:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Onderzoeken en data die nergens anders te vinden zijn
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Case studies met meetbare resultaten
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Praktijkvoorbeelden die jouw methode valideren
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Inzichten die alleen jij kunt bieden
                </li>
              </ul>
            </div>

            {/* 4. Dialoog stimuleren */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                4. Dialoog stimuleren
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                AI-tools werken steeds meer conversationeel. Maak jouw content geschikt voor gesprekken:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Anticipeer op vervolgvragen en beantwoord deze
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Gebruik een natuurlijke, menselijke toon
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Bied handelingsperspectieven die logisch volgen uit jouw antwoorden
                </li>
              </ul>
            </div>

            {/* 5. Technische implementatie */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                5. Technische implementatie aanpassen
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Zelfs de techniek achter je website verandert:
              </p>
              <ul className="mt-4 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Implementeer JSON-LD voor gestructureerde data
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Zorg voor snelle laadtijden (AI&apos;s crawlen minder geduldig)
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Maak gebruik van de nieuwste semantische markup standaarden
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  Optimaliseer voor voice-first indexering
                </li>
              </ul>
            </div>

            {/* Praktijkvoorbeeld */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Praktijkvoorbeeld: Van SEO naar GEO
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-sm font-bold uppercase tracking-wider text-black/50">
                    TRADITIONELE SEO-AANPAK
                  </p>
                  <p className="text-sm font-bold text-black/80 lg:text-base">
                    &quot;Ons CRM-systeem is het beste voor MKB-bedrijven. We bieden talloze features,
                    uitstekende support en scherpe prijzen. Neem contact op voor een demo.&quot;
                  </p>
                </div>
                <div className="border-4 border-black bg-accent p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-sm font-bold uppercase tracking-wider text-black/70">
                    GEO-GEOPTIMALISEERDE VERSIE
                  </p>
                  <p className="text-sm font-bold text-black lg:text-base">
                    &quot;Uit ons onderzoek onder 500 MKB-bedrijven blijkt dat gebruikers van ons CRM
                    gemiddeld 27% minder administratietijd besteden. De top-3 redenen: automatische
                    klantsegmentatie, geintegreerde facturering, en een intuitieve interface (94%
                    gebruikerstevredenheid).&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Vijf stappen */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Vijf stappen om nu te zetten
              </h2>
              <p className="mb-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Om direct aan de slag te gaan met GEO:
              </p>
              <ol className="space-y-4 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">1</span>
                  <span><strong>Audit je bestaande content:</strong> Welke vragen beantwoord je echt? Is je expertise duidelijk?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">2</span>
                  <span><strong>Identificeer kennishiaten:</strong> Op welke vragen binnen jouw expertise heb je nog geen antwoord?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">3</span>
                  <span><strong>Herstructureer sleutelcontent:</strong> Begin met je best presterende pagina&apos;s en maak ze AI-vriendelijk.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">4</span>
                  <span><strong>Meet anders:</strong> Niet alleen klikken en rankings tellen, maar ook citaties in AI-antwoorden.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">5</span>
                  <span><strong>Experimenteer met AI-tools:</strong> Test zelf hoe jouw content scoort als je vragen stelt aan verschillende AI&apos;s.</span>
                </li>
              </ol>
            </div>

            {/* Toekomst */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De toekomst van zoeken en gevonden worden
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                We staan aan het begin van een interessante evolutie in zoekgedrag. De komende
                jaren zullen we zien:
              </p>
              <ul className="mt-6 space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  AI&apos;s die hun bronnen steeds transparanter maken
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Complementaire zoekervaringen waarbij Google en AI-tools naast elkaar worden gebruikt
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Nieuwe meetmethoden om zichtbaarheid over meerdere platforms te kwantificeren
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Een herwaardering van originaliteit en expertise in alle zoekkanalen
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                De winnaars worden bedrijven die beide werelden begrijpen en hun content strategisch
                inzetten voor zowel traditionele SEO als deze nieuwe AI-kanalen.
              </p>
            </div>

            {/* Conclusie */}
            <div className="mb-12 border-4 border-black bg-black p-8" style={{ boxShadow: "8px 8px 0 0 #CCFF00" }}>
              <h2 className="text-brutalist-h3 mb-4 text-white">
                Conclusie
              </h2>
              <p className="text-base font-bold leading-relaxed text-white/80 lg:text-lg">
                SEO evolueert. En het mooie is: veel van de investeringen die je al doet in goede,{" "}
                <Link
                  href="/seo-copy"
                  className="text-accent underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  waardevolle content voor Google
                </Link>, leggen een stevige basis voor zichtbaarheid bij AI-platforms.
              </p>
              <p className="mt-4 text-base font-bold leading-relaxed text-white/80 lg:text-lg">
                Met enkele gerichte aanpassingen ben je straks niet alleen zichtbaar in Google,
                maar ook in het antwoord van ChatGPT, Claude, Gemini en andere AI-assistenten.
              </p>
              <p className="mt-4 text-lg font-bold text-accent lg:text-xl">
                En laten we eerlijk zijn: beide kanalen bedienen is beter dan maar een. Met een
                gecombineerde strategie vang je zowel de traditionele zoeker als de nieuwe generatie
                AI-gebruikers.
              </p>
            </div>

            {/* CTA */}
            <div className="border-4 border-black bg-accent p-8">
              <p className="text-base font-bold leading-relaxed text-black lg:text-lg">
                <strong>Benieuwd hoe jouw website ervoor staat in dit nieuwe landschap?</strong>{" "}
                <Link
                  href="/contact"
                  className="underline decoration-black decoration-2 underline-offset-4 hover:bg-black hover:text-accent"
                >
                  Neem contact met ons op
                </Link>{" "}
                - we kijken graag met je mee naar de volgende stap in jouw digitale zichtbaarheid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA Section */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Van SEO naar GEO. Van Google naar AI. Wij helpen je zichtbaar blijven op alle kanalen die ertoe doen."
      />

      {/* Footer */}
      <footer className="border-t-4 border-black bg-[#0a0a0a] py-24 text-white">
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
              <h4 className="mb-6 text-lg font-semibold uppercase tracking-widest text-accent">
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
              <h4 className="mb-6 text-lg font-semibold uppercase tracking-widest text-accent">
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
              <h4 className="mb-6 text-lg font-semibold uppercase tracking-widest text-accent">
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
