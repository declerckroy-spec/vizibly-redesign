import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Check, X, User } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { RelatedArticles } from "@/components/related-articles";

export const metadata: Metadata = {
  title: "SEO uitbesteden of zelf doen? Complete kostenvergelijking 2025",
  description:
    "SEO uitbesteden of intern team? Ontdek de voor- en nadelen, kosten (€500-€75.000) en welke keuze past bij jouw bedrijf.",
  openGraph: {
    title: "SEO uitbesteden of zelf doen? Complete kostenvergelijking 2025",
    description:
      "SEO uitbesteden of intern team? Ontdek de voor- en nadelen, kosten (€500-€75.000) en welke keuze past bij jouw bedrijf.",
    url: "https://vizibly.nl/seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten/",
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
    slug: 'seo-voor-beginners-de-belangrijkste-termen-uitgelegd',
    title: 'SEO voor beginners: de belangrijkste termen uitgelegd',
    image: '/blog/seo-beginners.jpg',
    excerpt: 'Van backlinks tot crawling: alle belangrijke SEO termen helder uitgelegd.'
  }
];

export default function SeoUitbestedenPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO uitbesteden of zelf doen? Complete kostenvergelijking 2025",
    description:
      "SEO uitbesteden of intern team? Ontdek de voor- en nadelen, kosten (€500-€75.000) en welke keuze past bij jouw bedrijf.",
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
      "@id": "https://vizibly.nl/seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten/",
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
                SEO UITBESTEDEN
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                SEO uitbesteden of{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative text-black">zelf doen</span>
                </span>
                ? Complete kostenvergelijking 2025
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                Intern team of uitbesteden? Ontdek de kosten, voor- en nadelen,
                en welke aanpak het beste bij jouw bedrijf past.
              </p>

              {/* Author info */}
              <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  15 min leestijd
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
                src="/blog/seo-uitbesteden.jpg"
                  alt="SEO uitbesteden of zelf doen - kostenvergelijking"
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
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-3xl">
            {/* Intro */}
            <div className="mb-12">
              <p className="text-lg font-bold leading-relaxed text-black lg:text-xl">
                Als ondernemer wil je dat je bedrijf goed vindbaar is in Google. De vraag is alleen:
                ga je SEO zelf oppakken of besteed je het uit aan specialisten? Het is een van de meest
                gestelde vragen die we bij Vizibly krijgen, en terecht. De keuze die je maakt heeft
                namelijk directe impact op je resultaten, je budget en je tijd.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                In dit artikel zetten we beide opties objectief naast elkaar. Geen verkooppraatje,
                maar pure feiten gebaseerd op de nieuwste marktonderzoeken en praktijkervaringen
                uit 2025. Want of je nu kiest voor een intern team of een externe partner: de juiste
                keuze verschilt per bedrijf en situatie.
              </p>
            </div>

            {/* Section: Waarom SEO belangrijker dan ooit is */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Waarom SEO belangrijker dan ooit is in 2025
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Voordat we ingaan op de keuze tussen intern en extern, is het goed om te beseffen
                waarom SEO zo cruciaal is geworden. <strong>75% van alle gebruikers scrolt nooit
                verder dan de eerste pagina van Google</strong>, en <strong>92% van alle zoekopdrachten
                gebeurt via Google</strong>. Dat betekent dat een goede positie in de zoekresultaten
                letterlijk kan bepalen of potentiele klanten je vinden of niet.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Tegelijkertijd wordt SEO steeds complexer. Google voert gemiddeld <strong>een keer per
                kwartaal een grote update</strong> door, en met de opkomst van AI-zoekresultaten
                verandert het speelveld constant. 91% van bedrijven rapporteert dat SEO een positieve
                impact heeft gehad op hun website prestaties en marketingdoelen in 2024, maar dat
                vereist wel de juiste expertise en aanpak.
              </p>
            </div>

            {/* Section: Kostenvergelijking */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De complete kostenvergelijking: wat betaal je echt?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Een van de belangrijkste factoren in je beslissing zijn natuurlijk de kosten. Laten
                we eerlijk zijn: beide opties kosten geld, maar op een heel andere manier.
              </p>
            </div>

            {/* Subsection: Kosten intern team */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Kosten van een intern SEO-team in Nederland
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Het aannemen van SEO-specialisten in Nederland is een flinke investering. Een
                SEO-specialist verdient gemiddeld €3.218 bruto per maand (€38.600 per jaar),
                varierend van €2.424 tot €4.304 per maand. Maar dat is nog maar het begin:
              </p>
              <ul className="mt-6 space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <span><strong>Salaris en secundaire arbeidsvoorwaarden:</strong> Een ervaren SEO-specialist kost €36.000-€60.000 per jaar, plus circa 35% aan werkgeverslasten</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <span><strong>Recruitment en training:</strong> De kosten voor het aannemen en trainen van een nieuwe medewerker bedragen gemiddeld zes tot negen maanden salaris</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <span><strong>SEO-tools en software:</strong> Professionele tools zoals Ahrefs, SEMrush en Screaming Frog kosten samen al snel €500-€1.500 per maand</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-black"></span>
                  <span><strong>Doorlopende training:</strong> SEO verandert zo snel dat je team constant bijgeschoold moet worden</span>
                </li>
              </ul>
              <div className="mt-6 border-4 border-black bg-black p-6" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                <p className="text-base font-bold text-white lg:text-lg">
                  De totale kosten voor een intern SEO-teamlid in het eerste jaar in Nederland lopen
                  op tot <span className="text-accent">€65.000-€95.000</span>, inclusief werkgeverslasten, recruitment en tools.
                </p>
              </div>
            </div>

            {/* Subsection: Kosten uitbesteden */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Kosten van SEO uitbesteden in Nederland
              </h3>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Uitbesteden werkt met een heel ander kostenmodel. Bedrijven die SEO uitbesteden
                besparen gemiddeld <strong>30-70%</strong> ten opzichte van het onderhouden van een intern team.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #CCFF00" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>Freelancers:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black/80 lg:text-base">
                    <li>Beginnend: €30-€60 per uur</li>
                    <li>Ervaren: €60-€120 per uur</li>
                    <li>Top-experts: €120-€200+ per uur</li>
                  </ul>
                </div>
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>SEO-bureaus:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black/80 lg:text-base">
                    <li>Klein: €500-€1.500/maand</li>
                    <li>Gemiddeld: €1.500-€4.500/maand</li>
                    <li>Groot: €2.500-€7.500+/maand</li>
                  </ul>
                </div>
              </div>

              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Bij{" "}
                <Link
                  href="/"
                  className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                >
                  Vizibly
                </Link>{" "}
                werken we met transparante maandelijkse pakketten: €500 voor starters, €1.000 voor
                groeiende bedrijven en €2.000+ voor bedrijven die regionaal en landelijk willen scoren.
                Je hebt direct toegang tot een heel team van specialisten zonder de overhead van eigen personeel.
              </p>
            </div>

            {/* Section: Expertise */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Expertise: breedte vs. diepte
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                De keuze tussen intern en extern draait ook om de expertise die je nodig hebt.
              </p>
            </div>

            {/* Voordelen intern */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Voordelen van interne expertise
              </h3>
              <ul className="space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Diepgaande merkkennis:</strong> Ze kennen je bedrijf, producten en doelgroep van binnenuit</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Directe communicatie:</strong> Geen lange overlegstructuren, gewoon even overleggen</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Volledige focus:</strong> Ze werken alleen aan jouw SEO, niet aan die van concurrenten</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Integratie:</strong> Makkelijke samenwerking met andere afdelingen zoals IT en marketing</span>
                </li>
              </ul>
            </div>

            {/* Voordelen extern */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Voordelen van externe expertise
              </h3>
              <ul className="space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Gevarieerde ervaring:</strong> Freelancers en bureaus hebben vaak veel ervaring in verschillende sectoren en bedrijven</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Specialistische kennis:</strong> Toegang tot experts in technische SEO, contentmarketing, linkbuilding en analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Up-to-date expertise:</strong> Agencies investeren continu in training en blijven op de hoogte van alle ontwikkelingen</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <span><strong>Bewezen tools en processen:</strong> Geoptimaliseerde werkwijzen die al bij tientallen klanten zijn getest</span>
                </li>
              </ul>
            </div>

            {/* Section: Risico's */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De keerzijde: wat kan er misgaan?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Eerlijkheid gebiedt ons te vermelden dat beide opties risico&apos;s kennen.
              </p>
            </div>

            {/* Risico's intern */}
            <div className="mb-8">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Risico&apos;s van een intern team
              </h3>
              <ul className="space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Beperkte expertise:</strong> Je bent beperkt tot de expertise die je interne medewerker op dat moment heeft</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Kennisverval:</strong> Door te lang in dezelfde omgeving te werken kunnen medewerkers achter raken bij ontwikkelingen</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Afhankelijkheid:</strong> Als je SEO-specialist vertrekt, sta je met lege handen</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Hoge initiele kosten:</strong> Het bouwen van een klein SEO-team (4 personen) kost $200.000-$360.000+ per jaar</span>
                </li>
              </ul>
            </div>

            {/* Risico's extern */}
            <div className="mb-12">
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Risico&apos;s van uitbesteden
              </h3>
              <ul className="space-y-3 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Minder controle:</strong> Je bent afhankelijk van de planning en prioriteiten van je bureau</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Communicatie-uitdagingen:</strong> Tijdzones, bedrijfsculturen of talen kunnen leiden tot misverstanden</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Vertrouwen:</strong> Je moet erop vertrouwen dat ze de juiste technieken gebruiken</span>
                </li>
                <li className="flex items-start">
                  <X className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  <span><strong>Contractuele bindingen:</strong> Sommige bureaus vereisen langdurige verbintenissen</span>
                </li>
              </ul>
            </div>

            {/* Section: Wanneer kiezen */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Wanneer kies je voor welke optie?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Na jarenlange ervaring in de SEO-wereld zien we duidelijke patronen in welke bedrijven
                baat hebben bij welke aanpak.
              </p>
            </div>

            {/* Intern team */}
            <div className="mb-8 border-4 border-black p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Intern team is de juiste keuze als:
              </h3>
              <ul className="space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je een grote onderneming bent met budget voor een volledig team
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  SEO core business is en je constant content produceert
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je in een zeer gespecialiseerde niche zit waar diepgaande productkennis cruciaal is
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je de tijd en middelen hebt om een team op te bouwen en te trainen
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je al ervaring hebt met SEO-management
                </li>
              </ul>
            </div>

            {/* Uitbesteden */}
            <div className="mb-12 border-4 border-black bg-accent p-6" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
              <h3 className="text-brutalist-h3 mb-4 text-black">
                Uitbesteden is de slimme keuze als:
              </h3>
              <ul className="space-y-2 text-base font-bold text-black lg:text-lg">
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je een kleine tot middelgrote onderneming bent
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je snel resultaten wilt zien zonder maanden te investeren in teamopbouw
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je toegang wilt tot diverse expertise zonder alle specialisten in dienst te nemen
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je flexibiliteit wilt om op en af te schalen
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-black" />
                  Je je wilt focussen op je kernactiviteiten
                </li>
              </ul>
            </div>

            {/* Section: Hybride aanpak */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De hybride aanpak: het beste van beide werelden
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Steeds meer bedrijven kiezen voor een tussenvorm. Met een interne SEO-agent kun je
                andere experts en contractanten inschakelen voor delen van je SEO-strategie. Bijvoorbeeld:
              </p>
              <ul className="mt-6 space-y-2 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Een interne SEO-coordinator die de strategie bewaakt
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Een extern bureau voor technische optimalisatie
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Freelance contentschrijvers voor{" "}
                  <Link
                    href="/seo-copy"
                    className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                  >
                    SEO copywriting
                  </Link>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 mt-1.5 h-2 w-2 flex-shrink-0 bg-accent"></span>
                  Gespecialiseerde partijen voor{" "}
                  <Link
                    href="/linkbuilding"
                    className="text-black underline decoration-accent decoration-2 underline-offset-4 hover:bg-accent hover:text-black"
                  >
                    linkbuilding
                  </Link>
                </li>
              </ul>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Deze aanpak geeft je meer controle dan volledig uitbesteden, maar is kosteneffectiever
                dan een volledig intern team.
              </p>
            </div>

            {/* Section: Resultaten en ROI */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Resultaten en ROI: wat levert het op?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Uiteindelijk gaat het om een ding: resultaten. Onderzoek toont aan dat beide aanpakken
                succesvol kunnen zijn, maar met verschillende voordelen:
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="border-4 border-black p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>Interne teams leveren:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black/80 lg:text-base">
                    <li>Betere merkintegratie</li>
                    <li>Consistentere messaging</li>
                    <li>Snellere implementatie van wijzigingen</li>
                  </ul>
                </div>
                <div className="border-4 border-black bg-accent p-4" style={{ boxShadow: "6px 6px 0 0 #000000" }}>
                  <p className="mb-3 text-base font-bold text-black lg:text-lg">
                    <strong>Externe specialisten zorgen voor:</strong>
                  </p>
                  <ul className="space-y-1 text-sm font-bold text-black lg:text-base">
                    <li>Hogere zoekrankings door specialistische expertise</li>
                    <li>Snellere tijd tot resultaat</li>
                    <li>Toegang tot geavanceerde tools en technieken</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section: Praktische tips */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                Praktische tips voor je beslissing
              </h2>
              <ol className="space-y-4 text-base font-bold text-black/80 lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">1</span>
                  <span><strong>Start met een eerlijke analyse</strong> van je huidige situatie, budget en doelen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">2</span>
                  <span><strong>Bereken de totale kosten</strong> over een periode van drie jaar, niet alleen de maandelijkse uitgaven</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">3</span>
                  <span><strong>Definieer je verwachtingen</strong> helder: wat wil je bereiken en wanneer?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">4</span>
                  <span><strong>Test de samenwerking</strong> met een bureau via een kortlopend project voordat je een langdurig contract aangaat</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">5</span>
                  <span><strong>Zorg voor transparantie</strong> over werkwijzen, rapportages en resultaten</span>
                </li>
              </ol>
            </div>

            {/* Section: Toekomst */}
            <div className="mb-12">
              <h2 className="text-brutalist-h2 mb-6 text-black border-l-4 border-accent pl-6">
                De SEO-wereld in 2025: waar gaat het naartoe?
              </h2>
              <p className="text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                In 2025 verwachten we een toename van AI-gestuurde optimalisatietools die processen
                stroomlijnen en nauwkeurigere inzichten leveren. Voice search-optimalisatie wordt
                belangrijker en de focus op gebruikerservaring intensiveert.
              </p>
              <p className="mt-6 text-base font-bold leading-relaxed text-black/80 lg:text-lg">
                Voor bedrijven betekent dit dat SEO-expertise nog specialistischer wordt. Bepaalde
                posities waarvan de dagelijkse verantwoordelijkheden nu kunnen worden afgehandeld door
                een chatbot, zullen minder gebruikelijk worden, terwijl andere, die afhankelijk zijn
                van ideevorming, creativiteit en uitvoerende functies, aan belang zullen winnen.
              </p>
            </div>

            {/* Conclusie */}
            <div className="mb-12 border-4 border-black bg-black p-8" style={{ boxShadow: "8px 8px 0 0 #CCFF00" }}>
              <h2 className="text-brutalist-h3 mb-4 text-white">
                Conclusie: jouw unieke situatie bepaalt de keuze
              </h2>
              <p className="mb-6 text-base font-bold leading-relaxed text-white/80 lg:text-lg">
                Er is geen universeel juist antwoord op de vraag of je SEO moet uitbesteden of intern
                moet doen. Het hangt af van je budget, doelen, expertise en tijdshorizon.
              </p>
              <ul className="space-y-3 text-base font-bold text-white lg:text-lg">
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">1</span>
                  <span><strong>Kies voor intern</strong> als je een grote organisatie bent met de middelen om een volledig team op te bouwen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">2</span>
                  <span><strong>Kies voor uitbesteden</strong> als je snel en kosteneffectief toegang wilt tot specialistische expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center bg-accent text-sm font-bold text-black">3</span>
                  <span><strong>Overweeg een hybride model</strong> als je controle wilt behouden maar toch gebruik wilt maken van externe expertise</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="border-4 border-black bg-accent p-8">
              <p className="text-base font-bold leading-relaxed text-black lg:text-lg">
                <strong>Wil je weten welke aanpak het beste bij jouw bedrijf past?</strong>{" "}
                <Link
                  href="/contact"
                  className="underline decoration-black decoration-2 underline-offset-4 hover:bg-black hover:text-accent"
                >
                  Neem contact met ons op
                </Link>{" "}
                voor een vrijblijvende analyse. We kijken samen naar jouw situatie en geven je eerlijk
                advies over de beste route naar groei, of dat nu intern, extern of een combinatie is.
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
        description="Geen verkooppraatje, maar eerlijk advies. We kijken samen naar wat het beste werkt voor jouw specifieke situatie."
      />


      <Footer />
    </>
  );
}
