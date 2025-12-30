import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, User, Check } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
  description:
    "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
  openGraph: {
    title: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
    description:
      "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
    url: "https://vizibly.nl/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google/",
    siteName: "Vizibly",
    locale: "nl_NL",
    type: "article",
  },
};


const relatedArticles = [
  {
    slug: '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
    title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
    image: '/blog/fysiotherapeut-seo.jpg',
    excerpt: '80% van potentiele patienten zoekt online. Ontdek hoe je jouw praktijk laat groeien met deze 12 SEO-tips.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    image: '/blog/seo-bureau-kiezen.png',
    excerpt: 'Google waarschuwt expliciet voor bepaalde SEO-bureaus. Kies slim met deze 4 regels.'
  }
];

export default function SeoDakdekkersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
    description:
      "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
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
      "@id": "https://vizibly.nl/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google/",
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
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)",
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <Link
            href="/vizie"
            className="group mb-8 inline-flex items-center text-base font-bold text-white/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Terug naar Vizie
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                SEO VOOR DAKDEKKERS
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                10 tips om als dakdekker{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative text-black">bovenaan</span>
                </span>{" "}
                in Google te komen
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                Dagelijks zoeken potentiele klanten naar dakdekkersdiensten in jouw regio.
                Met de juiste SEO-strategie zorg je dat jouw bedrijf gevonden wordt.
              </p>

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

            <div className="relative">
              <div
                className="relative border-4 border-white"
                style={{ boxShadow: "12px 12px 0 0 #CCFF00" }}
              >
                <Image
                src="/blog/seo-dakdekkers.jpg"
                  alt="SEO voor dakdekkers - hoger in Google"
                  width={800}
                  height={647}
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
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg font-bold leading-relaxed text-black lg:text-xl">
                Als ambitieuze dakdekker wil je groeien: meer klanten, meer opdrachten en meer omzet.
                Online zichtbaarheid is daarvoor essentieel, want dagelijks zoeken potentiele klanten
                naar dakdekkersdiensten in jouw regio. Met de juiste SEO-strategie kun je ervoor zorgen
                dat jouw bedrijf bovenaan in de zoekresultaten verschijnt.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                In de afgelopen 7 jaar hebben we veel bouwbedrijven naar de top van Google geholpen,
                waaronder een aantal dakdekbedrijven. In dit artikel delen we 10 effectieve SEO-tips
                speciaal voor dakdekkers.
              </p>
            </div>

            {/* CTA Box */}
            <div className="mb-12 border-4 border-black bg-accent/10 p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
              <p className="text-base font-bold italic text-black lg:text-lg">
                Geen tijd om alles zelf uit te zoeken? Bij{" "}
                <Link
                  href="/seo-voor-bouwbedrijven"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent"
                >
                  Vizibly
                </Link>{" "}
                zijn we gespecialiseerd in SEO voor de bouwsector. We begrijpen de unieke uitdagingen
                van dakdekkers en helpen je bedrijf structureel meer klanten te bereiken.
              </p>
            </div>

            {/* Tip 1 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                1. Optimaliseer je Google Bedrijfsprofiel
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Je Google Bedrijfsprofiel (voorheen Google Mijn Bedrijf) is cruciaal voor lokale
                vindbaarheid in Google. Zorg dat je profiel volledig is ingevuld.
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <p className="mb-4 text-base font-bold text-black lg:text-lg">
                  <strong>Wat je moet doen:</strong>
                </p>
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Correcte NAW-gegevens
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Openingstijden
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Duidelijke bedrijfscategorie (dakdekkersbedrijf)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Hoogwaardige foto&apos;s van jouw werk
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Een uitgebreide bedrijfsomschrijving met relevante zoekwoorden
                  </li>
                </ul>
              </div>
              <div className="mt-6 border-4 border-black bg-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="text-base font-bold text-white lg:text-lg">
                  <strong className="text-accent">Belangrijk:</strong> Vraag tevreden klanten om een
                  recensie te plaatsen. Goede Google-recensies vergroten je zichtbaarheid en geloofwaardigheid.
                </p>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                2. Focus op lokale zoekwoorden
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Voor dakdekkers is{" "}
                <Link href="/local-seo" className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent">
                  lokale SEO
                </Link>{" "}
                essentieel. Richt je op zoekwoorden die mensen in jouw werkgebied daadwerkelijk gebruiken:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Dakdekker [plaatsnaam]&quot;
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Dakbedekking specialist [regio]&quot;
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Dakreparatie [plaats]&quot;
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Lekkage dak [woonplaats]&quot;
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Verwerk deze zoektermen strategisch in je website: in paginatitels, koppen,
                metabeschrijvingen en natuurlijk in de tekst zelf.
              </p>
            </div>

            {/* Tip 3 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                3. Maak landingspagina&apos;s voor elke plaats
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Ben je actief in meerdere plaatsen? Creeer dan voor elke plaats een specifieke
                landingspagina. Bijvoorbeeld:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  dakdekker-denhaag.nl/dakdekker-delft
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  dakdekker-denhaag.nl/dakdekker-zoetermeer
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Op deze pagina&apos;s beschrijf je specifiek welke diensten je in die plaats aanbiedt,
                met voorbeelden van eerdere projecten in die plaats en lokale referenties.
              </p>
            </div>

            {/* Tip 4 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                4. Zorg voor een technisch sterke website
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Een{" "}
                <Link href="/seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren" className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent">
                  technisch sterke website
                </Link>{" "}
                is cruciaal voor goede rankings. Let op:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Laadsnelheid (gebruik tools als Google PageSpeed Insights)
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Mobielvriendelijkheid (meer dan 60% zoekt op mobiel)
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    HTTPS-beveiliging
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Duidelijke URL-structuur
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Correcte interne linking
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    Sitemap voor Google
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Google beloont websites die snel, veilig en gebruiksvriendelijk zijn met hogere
                posities in de zoekresultaten.
              </p>
            </div>

            {/* Tip 5 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                5. Creeer waardevolle content
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Deel je expertise door nuttige{" "}
                <Link href="/seo-copy" className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent">
                  content
                </Link>{" "}
                te maken die antwoord geeft op vragen van potentiele klanten:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Blogartikelen over dakonderhoud
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Tips voor het herkennen van dakproblemen
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Uitleg over verschillende dakbedekkingsmaterialen
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Veelgestelde vragen over dakrenovatie
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Door regelmatig relevante content te publiceren, vergroot je je zichtbaarheid in
                Google en positioneer je jezelf als expert.
              </p>
            </div>

            {/* Tip 6 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                6. Optimaliseer voor &quot;Near me&quot; zoekopdrachten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Steeds meer mensen zoeken naar &quot;dakdekker bij mij in de buurt&quot; of &quot;dakdekker near me&quot;.
                Optimaliseer hiervoor door:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Je adres duidelijk te vermelden op elke pagina
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Structured data (schema.org) te gebruiken voor local business
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Consistent je NAW-gegevens te vermelden op je website en externe platforms
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Te zorgen dat je Google Bedrijfsprofiel up-to-date is
                  </li>
                </ul>
              </div>
            </div>

            {/* Tip 7 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                7. Bouw relevante backlinks op
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Backlinks (links van andere websites naar jouw site) versterken je autoriteit.
                Focus op:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Lokale bedrijvengidsen
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Brancheorganisaties
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Samenwerkingspartners (leveranciers, aannemers)
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Lokale nieuwssites
                </li>
              </ul>
              <div className="mt-6 border-4 border-black bg-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="text-base font-bold text-white lg:text-lg">
                  <strong className="text-accent">Kwaliteit boven kwantiteit:</strong> Een link van
                  een gerenommeerde bouwwebsite is waardevoller dan tien links van irrelevante sites.
                </p>
              </div>
            </div>

            {/* Tip 8 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                8. Verzamel en toon klantervaringen
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Klantervaringen zijn niet alleen belangrijk voor je Google Bedrijfsprofiel, maar
                ook voor je website:
              </p>
              <div className="mt-6 border-l-4 border-accent pl-6">
                <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Vraag tevreden klanten om een getuigenis
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Toon deze testimonials prominent op je website
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Voeg foto&apos;s toe van afgeronde projecten
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                    Maak eventueel korte video&apos;s van klanten die hun ervaring delen
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Dit vergroot niet alleen het vertrouwen van potentiele klanten, maar helpt ook
                je SEO-ranking.
              </p>
            </div>

            {/* Tip 9 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                9. Optimaliseer voor voice search
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Voice search wordt steeds populairder. Mensen stellen dan vragen als:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Wat kost een nieuw dak?&quot;
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Waar vind ik een goede dakdekker in de buurt?&quot;
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  &quot;Hoe herken je een lekkage?&quot;
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Optimaliseer je content door veelgestelde vragen direct te beantwoorden en
                natuurlijke, conversationele taal te gebruiken.
              </p>
            </div>

            {/* Tip 10 */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                10. Monitor en analyseer je resultaten
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                SEO is een continu proces. Houd je voortgang bij met tools als:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Google Analytics
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  Google Search Console
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  SEO-tools zoals Semrush of Ahrefs
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Analyseer welke pagina&apos;s goed presteren, welke zoektermen verkeer genereren en
                waar verbeterpunten liggen. Pas op basis hiervan je strategie aan voor nog
                betere resultaten.
              </p>
            </div>

            {/* Final CTA Box */}
            <div className="mb-12 border-4 border-black bg-black p-8" style={{ boxShadow: "12px 12px 0 0 #CCFF00" }}>
              <h2 className="mb-6 text-brutalist-h3 text-white">
                Als dakdekker je SEO uitbesteden?
              </h2>
              <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
                SEO voor dakdekkers is een doorlopend proces. Niet alleen omdat door alle Google
                updates de spelregels van SEO steeds veranderen, maar ook omdat er altijd kansen
                liggen voor verbetering.
              </p>
              <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
                Wil je als dakdekker optimaal zichtbaar worden en meer kwalitatieve leads genereren?
                Bij Vizibly begrijpen we de uitdagingen van lokale dienstverleners in de bouwsector.
                We maken een plan op maat dat perfect aansluit bij jouw dakdekkersbedrijf, jouw
                doelgroep en jouw werkgebied.
              </p>
              <p className="text-base font-bold text-accent lg:text-lg">
                <Link href="/seo-voor-bouwbedrijven" className="underline hover:text-white transition-colors">
                  Bekijk onze speciale SEO-diensten voor bouwbedrijven
                </Link>{" "}
                en neem vandaag nog contact op voor een vrijblijvende kennismaking. Samen zorgen
                we ervoor dat jouw dakdekkersbedrijf bovenaan in Google komt te staan.
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
        description="Van onzichtbaar naar de #1 dakdekker in jouw regio. Wij helpen je groeien met bewezen SEO-strategieen."
      />

      <Footer />
    </>
  );
}
