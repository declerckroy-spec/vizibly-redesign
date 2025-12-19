import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'SEO succesverhaal: dakdekker Haarlem naar #1',
  description: 'Hoe een dakdekker in 2 jaar van pagina 2 naar #1 klom voor "dakdekker Haarlem" en van €600 ads naar tientallen organische leads per maand.',
  openGraph: {
    title: 'SEO succesverhaal: dakdekker Haarlem naar #1',
    description: 'Hoe een dakdekker in 2 jaar van pagina 2 naar #1 klom voor "dakdekker Haarlem" en van €600 ads naar tientallen organische leads per maand.',
    url: 'https://vizibly.nl/seo-succesverhaal-dakdekker-in-haarlem/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function DakdekkerCase() {
  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b-4 border-black bg-white py-4">
        <div className="mx-auto max-w-screen-2xl px-6">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/60 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle cases
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              CASE STUDY
            </p>
            <h1 className="mb-8 text-brutalist-hero text-black">
              SEO succesverhaal: dakdekker in Haarlem
            </h1>
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              Hoe een dakdekker in 2 jaar van pagina 2 naar #1 klom voor "dakdekker Haarlem" en van €600 ads naar tientallen organische leads per maand.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative border-b-4 border-black bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
              <Image
                src="/cases/dakdekker-hero.png"
                alt="Tolmeijer Dakdekkers Haarlem"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative bg-white">
        {/* Het bedrijf */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Het bedrijf: vakmanschap met meer dan 20 jaar ervaring
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  <a href="https://tolmeijerdakdekkers.nl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">Tolmeijer Dakdekkers</a> uit Haarlem is gespecialiseerd in vakwerk aan daken. Met meer dan twintig jaar ervaring in de dakdekkerij bedient het bedrijf klanten in Haarlem en omgeving voor alles van dakbedekking en isolatie tot lood- en zinkwerk. Wat Tolmeijer onderscheidt is hun perfectionalistische aanpak, 10 jaar garantie op hun werk, en een 24/7 spoedservice. Ondernemer Milo Tolmeijer staat bekend om zijn vakkundig advies en het meedenken met klanten om tot de beste oplossing te komen.
                </p>

                <div className="border-l-4 border-accent pl-6 my-12">
                  <p className="text-brutalist-h3 text-black italic">
                    De case
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* De uitdaging */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De uitdaging: hoge advertentiekosten en vrijwel geen organische zichtbaarheid
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Voordat Tolmeijer Dakdekkers met Vizibly ging samenwerken, had het bedrijf een eenvoudige website die minder dan 10 organische bezoekers per maand genereerde. Voor de cruciale zoekterm "dakdekker haarlem" stond de website ergens op pagina 2, terwijl ze voor andere belangrijke lokale zoektermen zoals "dakdekker hoofddorp" of "dakdekker hillegom" niet eens in de top 100 verschenen.
                </p>

                <p>
                  Het bedrijf was volledig afhankelijk van Google Ads en gaf maandelijks ruim €600 uit om zichtbaar te zijn. Organische leads kwamen vrijwel niet binnen – alle nieuwe klanten kwamen via betaalde advertenties. Milo had iemand met echte SEO-kennis nodig om zijn website goed op te bouwen, met effectieve teksten en een doordachte strategie.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <Image
                  src="/cases/dakdekker-clicks.png"
                  alt="Bijna 4000 clicks in 16 maanden"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Onze aanpak */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Onze aanpak: onderzoek, maatwerk en kwaliteitsteksten
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  We begonnen met uitgebreid onderzoek naar wat Tolmeijer Dakdekkers uniek maakt in de markt. In gesprek met Milo brachten we zijn sterke punten in kaart: de jarenlange ervaring, perfectionalistische werkhouding, uitgebreide garanties, spoedservice, en vooral zijn vermogen om mee te denken met klanten.
                </p>

                <p>
                  Vervolgens ontwikkelden we een <Link href="/full-service-seo" className="underline hover:text-accent transition-colors">SEO-plan op maat</Link> dat bestond uit drie hoofdpijlers:
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Website-opbouw en technische optimalisatie
                </h3>

                <p>
                  We bouwden een volledig nieuwe WordPress website met een doordachte structuur en interne linkopbouw. Elke pagina werd strategisch gepositioneerd om maximale SEO-waarde te creëren. Meer over onze <Link href="/design-techniek" className="underline hover:text-accent transition-colors">webdesign en techniek aanpak</Link>.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Vlijmscherpe SEO-teksten
                </h3>

                <p>
                  We schreven <Link href="/seo-copy" className="underline hover:text-accent transition-colors">geoptimaliseerde content</Link> die niet alleen goed scoorde in Google, maar ook Milo's vakmanschap en unieke aanpak perfect weergaf. De teksten benadrukte zijn perfectionalistische instelling, ervaring en klantgerichte aanpak.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Lokale SEO-focus
                </h3>

                <p>
                  We optimaliseerden specifiek voor Haarlem en omliggende gebieden zoals Hoofddorp, Hillegom, Heemstede, Zandvoort en Nieuw-Vennep. Onze <Link href="/local-seo" className="underline hover:text-accent transition-colors">local SEO expertise</Link> was cruciaal voor dit lokale succes.
                </p>

                <p className="mt-8">
                  Wat dit project bijzonder maakte, was de uitstekende samenwerking met Milo zelf. Hij nam eigenhandig de <Link href="/linkbuilding" className="underline hover:text-accent transition-colors">linkbuilding</Link> en local SEO voor zijn rekening en wist – mede dankzij zijn perfecte vakmanschap – een indrukwekkende verzameling vijfsterren-reviews op te bouwen. Deze combinatie van technische SEO-expertise en Milo's eigen inzet zorgde voor het uiteindelijke succes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* De resultaten */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De resultaten: van onzichtbaar naar marktleider
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  De resultaten waren indrukwekkend en lieten zich al snel zien:
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Direct na oplevering
                </h3>

                <p>
                  Direct na oplevering stond Tolmeijer Dakdekkers in de top 10 voor veel relevante zoektermen. Het organische verkeer steeg van minder dan 10 bezoekers naar honderden bezoekers per maand.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Na één jaar
                </h3>

                <p>
                  Na één jaar waren de posities verder verbeterd en genereerde de website consistent organische leads. Milo kon zijn Google Ads-uitgaven drastisch verlagen.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Na twee jaar
                </h3>

                <p>
                  Na twee jaar had Tolmeijer Dakdekkers de #1 positie veroverd voor "dakdekker haarlem" en stond ook voor andere lokale zoektermen hoog in de zoekresultaten:
                </p>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Dakdekker haarlem: positie 1</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Dakdekker hoofddorp: positie 6</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Dakdekker hillegom: positie 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Dakdekker nieuw-vennep: positie 7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Dakdekker heemstede: positie 4</span>
                  </li>
                </ul>

                <p className="mt-8">
                  Het organische verkeer groeide naar meer dan 3.600 klikken en 463.000 vertoningen per jaar. Op drukke dagen – vooral als het regent – krijgt Milo soms wel 10 leads per dag binnen via de website. Van vrijwel geen organische leads naar tientallen per maand: een transformatie die direct zichtbaar is in de bedrijfsgroei.
                </p>
              </div>

              {/* Image 2 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <Image
                  src="/cases/dakdekker-posities.png"
                  alt="Posities in Google voor dakdekker Haarlem"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Waarom dit project succesvol was */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Waarom dit project succesvol was
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Dit project toont aan hoe een gerichte SEO-aanpak, gecombineerd met vakmanschap en ondernemerzin, tot uitzonderlijke resultaten kan leiden. De combinatie van technische optimalisatie, sterke content die het unieke karakter van het bedrijf weergeeft, en Milo's eigen perfectionalistische inzet bij linkbuilding en reputatiemanagement, zorgde voor een complete transformatie.
                </p>

                <p>
                  Voor lokale dienstverleners zoals dakdekkers is deze aanpak bijzonder effectief: door excellent vakwerk te combineren met sterke online zichtbaarheid, kun je uitgroeien tot dé specialist in je regio. Meer over <Link href="/seo-voor-bouwbedrijven" className="underline hover:text-accent transition-colors">SEO voor bouwbedrijven</Link> en specifiek onze <Link href="/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google" className="underline hover:text-accent transition-colors">SEO aanpak voor dakdekkers</Link>.
                </p>

                <p>
                  De strategische opbouw van <Link href="/content-clusters-topic-authority-opbouwen" className="underline hover:text-accent transition-colors">content clusters</Link> speelde ook een cruciale rol in het opbouwen van topical authority voor dakdekker-gerelateerde onderwerpen.
                </p>

                <p className="mt-8">
                  Wil je ook meer klanten via Google zonder afhankelijk te zijn van dure advertenties? Neem <Link href="/contact" className="underline hover:text-accent transition-colors">contact</Link> op voor een vrijblijvende analyse van jouw SEO-mogelijkheden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Ook goed vindbaar worden als bouwbedrijf?
            </h2>
            <p className="mb-12 text-base font-bold text-black lg:text-lg xl:text-xl">
              Ontdek alles over onze full service aanpak
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
                <Link href="/full-service-seo">
                  FULL SERVICE SEO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-black border-black hover:bg-black hover:text-white px-8 py-5 text-base">
                <Link href="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  NEEM CONTACT OP
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
        {/* Diagonal pattern */}
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
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Diensten</h4>
              <ul className="space-y-4">
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Local SEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Contact</h4>
              <ul className="space-y-4 text-base font-bold text-white/80">
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
