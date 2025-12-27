import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, MapPin, Clock, Check, User } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { FinalCTA } from "@/components/final-cta";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "12 bewezen manieren om als fysio zichtbaar te worden in Google",
  description:
    "Ontdek hoe je als fysiotherapeut meer patienten trekt via Google. 12 praktische SEO tips: van GBP tot lokale zichtbaarheid.",
  openGraph: {
    title: "12 bewezen manieren om als fysio zichtbaar te worden in Google",
    description:
      "Ontdek hoe je als fysiotherapeut meer patienten trekt via Google. 12 praktische SEO tips: van GBP tot lokale zichtbaarheid.",
    url: "https://vizibly.nl/12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google/",
    siteName: "Vizibly",
    locale: "nl_NL",
    type: "article",
  },
};


const relatedArticles = [
  {
    slug: 'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
    title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
    image: '/blog/seo-dakdekkers.jpg',
    excerpt: 'Lokale klanten vinden je niet? Deze SEO-strategieën werken voor dakdekkers.'
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

export default function FysiotherapeutSeoPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google",
    description:
      "Ontdek hoe je als fysiotherapeut meer patienten trekt via Google. 12 praktische SEO tips: van GBP tot lokale zichtbaarheid.",
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
      "@id": "https://vizibly.nl/12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google/",
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
                SEO VOOR FYSIOTHERAPEUTEN
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                12 bewezen manieren om als fysio{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative text-black">zichtbaar</span>
                </span>{" "}
                te worden in Google
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                80% van potentiele patienten zoekt online voordat ze een fysiotherapeut kiezen.
                Ontdek hoe je jouw praktijk laat groeien met deze praktische SEO-tips.
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
                  src="/blog/fysiotherapeut-seo.jpg"
                  alt="SEO voor fysiotherapeuten - hoger in Google"
                  width={800}
                  height={533}
                  className="h-auto w-full"
                  priority
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
                Als fysiotherapeut heb je waarschijnlijk al gemerkt dat potentiele patienten steeds
                vaker online zoeken naar hulp bij hun klachten. <strong>80% van potentiele patienten
                zoekt online voordat ze een fysiotherapeut kiezen</strong>, en <strong>75% van alle
                gebruikers scrolt nooit verder dan de eerste pagina van Google</strong>. Dat betekent
                dat je online zichtbaarheid letterlijk kan bepalen of je praktijk groeit of stilstaat.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                De goede vraag is: hoe zorg je ervoor dat jouw praktijk bovenaan staat wanneer iemand
                zoekt naar &quot;fysiotherapeut&quot; of &quot;rugklachten&quot; in jouw buurt? In dit artikel delen
                we 12 concrete strategieen die bewezen effectief zijn voor fysiotherapeuten in 2025.
              </p>
            </div>

            {/* CTA Box */}
            <div className="mb-12 border-4 border-black bg-accent/10 p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
              <p className="text-base font-bold italic text-black lg:text-lg">
                Geen tijd om alles zelf uit te zoeken? Bij{" "}
                <Link
                  href="/"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent"
                >
                  Vizibly
                </Link>{" "}
                zijn we gespecialiseerd in SEO voor de zorg. We begrijpen de unieke uitdagingen van
                zorgverleners en helpen je praktijk structureel meer patienten te bereiken.
              </p>
            </div>

            {/* Tip 1 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                1. Optimaliseer je Google Business Profile
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Je Google Business Profile is vaak het eerste wat potentiele patienten van je praktijk
                zien. <strong>70% van de bedrijven met een volledig ingevuld profiel trekt meer lokale
                bezoekers aan</strong>.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Wat je moet doen:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vul alle secties volledig in: adres, telefoonnummer, openingstijden, services
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Kies de juiste categorieen: &quot;Fysiotherapeut&quot;, &quot;Manuele therapie&quot;, &quot;Sportfysiotherapie&quot;
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Voeg wekelijks nieuwe foto&apos;s toe van je praktijk, team en behandelruimtes
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Gebruik geen stockfoto&apos;s - patienten willen je echte praktijk zien
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Post regelmatig updates over je diensten en expertise
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-4 border-black bg-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="text-base font-bold text-white lg:text-lg">
                  <strong className="text-accent">Pro tip:</strong> Gebruik lokale zoekwoorden in je
                  bedrijfsbeschrijving zoals &quot;fysiotherapie [plaatsnaam]&quot; of &quot;rugklachten specialist [stad]&quot;.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                2. Verzamel actief Google Reviews
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Reviews zijn cruciaal voor je lokale zichtbaarheid en vertrouwen.{" "}
                <strong>62% van de mensen schrijft een review als je er om vraagt</strong>.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Zo doe je het:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vraag tevreden patienten persoonlijk om een review
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Stuur een vriendelijke reminder via WhatsApp of e-mail na een succesvolle behandeling
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Maak een directe link naar je Google review-pagina voor gemak
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Reageer professioneel op alle reviews, zowel positief als negatief
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Leg uit dat reviews anderen helpen met vergelijkbare klachten
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                <strong>Let op:</strong> Koop nooit fake reviews. Google detecteert dit en je praktijk
                wordt bestraft.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                3. Maak specifieke landingspagina&apos;s voor klachten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Patienten zoeken niet alleen op &quot;fysiotherapeut&quot;, maar veel vaker op hun specifieke
                klacht. Maak daarom aparte pagina&apos;s voor:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Rugklachten behandeling [jouw stad]
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Nekklachten fysiotherapie [jouw stad]
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Sportblessures revalidatie [jouw stad]
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Dry needling [jouw stad]
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Bekkenfysiotherapie [jouw stad]
                </li>
              </ul>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Elke pagina moet bevatten:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Duidelijke uitleg van de klacht
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Jouw behandelaanpak
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Wat patienten kunnen verwachten
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Contactgegevens en afspraak maken-knop
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Lokale zoekwoorden natuurlijk verwerkt
                  </li>
                </ul>
              </div>
            </div>

            {/* Tip 4 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                4. Zorg voor een snelle, mobiele website
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                <strong>97% van alle internetgebruikers gebruikt zoekmachines</strong>, en steeds meer
                mensen zoeken op hun telefoon naar een fysiotherapeut.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Essentiele technische vereisten:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Laadtijd onder de 3 seconden
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Mobielvriendelijk ontwerp
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    HTTPS-verbinding (beveiligde website)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Duidelijke navigatie
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Goed werkende contactformulieren
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Klik-naar-bel functionaliteit voor telefoonnummers
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Als je website langzaam is of niet goed werkt op mobiel, springt Google je over voor
                concurrenten.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                5. Schrijf nuttige content voor patienten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Content marketing is een krachtige manier om te laten zien dat je expert bent en om
                hoger te scoren in Google. <strong>72% van marketeers zegt dat content creatie de
                meest effectieve SEO-tactiek is</strong>.
              </p>
              <div className="mt-6 border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Effectieve content-ideeen:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li>&quot;5 oefeningen tegen lage rugpijn die je thuis kunt doen&quot;</li>
                  <li>&quot;Wanneer moet je naar de fysiotherapeut bij nekklachten?&quot;</li>
                  <li>&quot;Wat je kunt verwachten tijdens je eerste afspraak&quot;</li>
                  <li>&quot;Preventietips voor veelvoorkomende sportblessures&quot;</li>
                  <li>&quot;Hoe lang duurt herstel van een frozen shoulder?&quot;</li>
                </ul>
              </div>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Schrijftips:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Gebruik een persoonlijke, begrijpelijke taal
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Beantwoord vragen die patienten echt hebben
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Verwerk lokale zoekwoorden natuurlijk in je teksten
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Voeg relevante afbeeldingen toe
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Eindig met een oproep tot actie (afspraak maken)
                  </li>
                </ul>
              </div>
            </div>

            {/* Tip 6 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                6. Optimaliseer voor lokale zoekopdrachten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Als fysiotherapeut ben je lokaal actief, dus{" "}
                <Link
                  href="/local-seo"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  lokale SEO
                </Link>{" "}
                is essentieel voor je succes.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Lokale SEO-strategie:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Gebruik stad- en wijknamen in je website content
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vermeld herkenbare lokale landmarks in je routebeschrijving
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Zorg voor consistente NAP-gegevens (Naam, Adres, Telefoonnummer) op alle platforms
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Meld je aan bij lokale zorgdirectories
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Werk samen met andere lokale bedrijven en zorgverleners
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-4 border-black bg-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="mb-2 text-base font-bold text-accent lg:text-lg">
                  Zoekwoorden waar je op moet focussen:
                </p>
                <p className="text-base font-bold text-white/80 lg:text-lg">
                  &quot;Fysiotherapeut [stad]&quot; - &quot;Fysiotherapie [wijk]&quot; - &quot;Rugklachten behandeling [regio]&quot;
                  - &quot;Fysiotherapeut dichtbij&quot; - &quot;Beste fysiotherapeut [stad]&quot;
                </p>
              </div>
            </div>

            {/* Tip 7 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                7. Bouw autoriteit op met linkbuilding
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Andere websites die naar jou linken, vertellen Google dat je betrouwbaar en relevant
                bent. Voor fysiotherapeuten zijn er specifieke linkbuilding-mogelijkheden:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Waardevolle links krijgen:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Gastbloggen voor gezondheidssites en lokale websites
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Samenwerking met huisartsen, specialisten en andere zorgverleners
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Deelname aan lokale gezondheidsevents
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Interviews voor lokale media over fysiotherapie
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Partnerships met sportclubs en fitness centra
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vermeldingen in zorgverzekeringsdirectories
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Wil je hier professionele hulp bij? Onze{" "}
                <Link
                  href="/linkbuilding"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  linkbuilding specialisten
                </Link>{" "}
                weten precies welke strategieen werken voor zorgverleners.
              </p>
            </div>

            {/* Tip 8 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                8. Gebruik schema markup voor zorgverleners
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Schema markup helpt Google je website beter te begrijpen. Voor fysiotherapeuten zijn
                er specifieke schema-types:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <strong>MedicalOrganization schema:</strong> Voor je praktijkgegevens
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <strong>MedicalTherapy schema:</strong> Voor je behandelingen
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <strong>Person schema:</strong> Voor jezelf als zorgverlener
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <strong>LocalBusiness schema:</strong> Voor lokale informatie
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Dit zorgt ervoor dat je beter scoort voor relevante zoekopdrachten en dat Google meer
                informatie kan tonen in de zoekresultaten.
              </p>
            </div>

            {/* Tip 9 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                9. Investeer in Google Ads voor directe resultaten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Terwijl SEO tijd nodig heeft om resultaat te boeken, kunnen{" "}
                <Link
                  href="/google-ads-sea"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  Google Ads
                </Link>{" "}
                direct zichtbaarheid geven.
              </p>
              <div className="mt-6 border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Effectieve advertentiewoorden:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li>&quot;Fysiotherapeut [stad]&quot;</li>
                  <li>&quot;Rugklachten behandeling&quot;</li>
                  <li>&quot;Sportfysiotherapie&quot;</li>
                  <li>&quot;Dry needling&quot;</li>
                  <li>&quot;Manuele therapie&quot;</li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                <strong>Vermijd deze woorden:</strong> Algemene pijnklachten en aandoeningen. Mensen
                die hierop zoeken willen vaak eerst informatie, geen directe behandeling.
              </p>
            </div>

            {/* Tip 10 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                10. Maak gebruik van sociale bewijskracht
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Vertrouwen is cruciaal in de zorg. Laat zien dat je betrouwbaar bent:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Sociale bewijskracht opbouwen:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Toon patiententestimonials op je website (met toestemming)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Deel success stories (geanonimiseerd)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vermeld je kwalificaties en certificeringen prominent
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Laat foto&apos;s zien van je team en praktijk
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Deel je ervaring en specialisaties
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                <strong>Voor- en na-foto&apos;s:</strong> Let op AVG-regelgeving. Vraag altijd schriftelijke
                toestemming van patienten.
              </p>
            </div>

            {/* Tip 11 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                11. Zorg voor een sterke interne linkstructuur
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Help Google (en patienten) om je website beter te navigeren door slimme interne links:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Link van algemene behandelingspagina&apos;s naar specifieke klachtenpagina&apos;s
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Verbind gerelateerde blog posts met elkaar
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Link van blog posts naar relevante servicepagina&apos;s
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Maak een duidelijke &quot;Over ons&quot; pagina die linkt naar teamleden
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Gebruik breadcrumbs voor duidelijke navigatie
                  </li>
                </ul>
              </div>
            </div>

            {/* Tip 12 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                12. Monitor en meet je resultaten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Wat je niet meet, kun je niet verbeteren. Houd deze metrics bij:
              </p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>Belangrijke KPI&apos;s:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black/80 lg:text-base">
                    <li>Organisch verkeer via Google Analytics</li>
                    <li>Telefoontjes en afspraken via website</li>
                    <li>Positie voor belangrijke zoekwoorden</li>
                    <li>Google My Business views en acties</li>
                    <li>Conversieratio van website naar afspraak</li>
                  </ul>
                </div>
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>Tools die helpen:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black/80 lg:text-base">
                    <li>Google Analytics voor websiteverkeer</li>
                    <li>Google Search Console voor zoekwoord posities</li>
                    <li>Google My Business insights</li>
                    <li>Telefoonnummer tracking voor conversies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Veelgemaakte fouten */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Veelgemaakte fouten die je moet vermijden
              </h2>
              <ul className="space-y-4 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-black text-sm font-bold text-white">1</span>
                  <span><strong>Keyword stuffing:</strong> Stop niet onnodig veel zoekwoorden in je teksten. Schrijf natuurlijk en begrijpelijk.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-black text-sm font-bold text-white">2</span>
                  <span><strong>Vergeten van lokale optimalisatie:</strong> Als fysiotherapeut ben je lokaal actief. Vergeet lokale SEO niet.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-black text-sm font-bold text-white">3</span>
                  <span><strong>Verwaarlozen van Google My Business:</strong> Je profiel moet actueel en compleet zijn.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-black text-sm font-bold text-white">4</span>
                  <span><strong>Geen call-to-actions:</strong> Maak het patienten makkelijk om contact op te nemen.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-black text-sm font-bold text-white">5</span>
                  <span><strong>Technische problemen negeren:</strong> Een trage of kapotte website kost je patienten.</span>
                </li>
              </ul>
            </div>

            {/* De realiteit */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De realiteit: SEO is een marathon, geen sprint
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Laten we eerlijk zijn: SEO voor fysiotherapeuten kost tijd. <strong>De eerste resultaten
                zie je meestal na 3-6 maanden, echte groei na 6-12 maanden</strong>. Maar het is de
                investering waard.
              </p>
              <div className="mt-6 border-4 border-black bg-accent p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  Een fysiotherapeut uit Middelburg die onze adviezen opvolgde, zag binnen 8 maanden:
                </p>
                <ul className="space-y-2 text-base font-bold text-black lg:text-lg">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    300% meer organisch verkeer
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    150% meer telefoontjes via website
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                    Een vol geboekte agenda zonder advertentiekosten
                  </li>
                </ul>
              </div>
            </div>

            {/* Conclusie */}
            <div className="mb-12 border-4 border-black bg-black p-8" style={{ boxShadow: "8px 8px 0 0 #CCFF00" }}>
              <h2 className="text-brutalist-h3 mb-4 text-white">
                Conclusie: Begin vandaag met deze 3 acties
              </h2>
              <p className="mb-6 text-base font-bold leading-relaxed text-white/80 lg:text-lg">
                SEO voor fysiotherapeuten hoeft niet ingewikkeld te zijn als je stap voor stap te
                werk gaat. Begin vandaag met deze drie acties:
              </p>
              <ol className="space-y-3 text-base font-bold text-white lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">1</span>
                  <span><strong>Optimaliseer je Google My Business profiel</strong> - vul alles in en voeg foto&apos;s toe</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">2</span>
                  <span><strong>Vraag je laatste 5 tevreden patienten om een Google review</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">3</span>
                  <span><strong>Maak een nieuwe pagina over een specifieke klacht</strong> die je behandelt</span>
                </li>
              </ol>
            </div>

            {/* CTA */}
            <div className="border-4 border-black bg-accent p-8">
              <p className="text-base font-bold leading-relaxed text-black lg:text-lg">
                <strong>Klaar om je online zichtbaarheid naar het volgende niveau te tillen?</strong>{" "}
                <Link
                  href="/contact"
                  className="underline decoration-black decoration-2 underline-offset-4 hover:bg-black hover:text-accent"
                >
                  Neem contact met ons op
                </Link>{" "}
                voor een vrijblijvende analyse van je huidige online positie. We laten je precies
                zien waar kansen liggen voor meer patienten via Google.
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
        description="Van onzichtbaar naar de go-to fysiotherapeut in jouw regio. Wij helpen je praktijk groeien met bewezen SEO-strategieen."
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
