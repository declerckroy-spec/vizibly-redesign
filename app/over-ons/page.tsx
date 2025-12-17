import { Navigation } from '@/components/navigation';
import { ReviewBanner } from '@/components/review-banner';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Users, TrendingUp, Euro, Phone, Mail, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Vizibly',
  description: 'Direct contact, altijd een plan, focus op omzet. Ik help kleine en middelgrote bedrijven groeien met SEO. Zonder tussenpersonen of vage beloftes.',
  openGraph: {
    title: 'Over Vizibly',
    description: 'Direct contact, altijd een plan, focus op omzet. Ik help kleine en middelgrote bedrijven groeien met SEO. Zonder tussenpersonen of vage beloftes.',
    url: 'https://vizibly.nl/over-ons/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: 'https://vizibly.nl/wp-content/uploads/2024/02/Foto-Roy.jpg',
        width: 952,
        height: 1356,
      }
    ],
  },
};

export default function OverOnsPage() {
  const stats = [
    { icon: Clock, value: '7+', label: 'Jaar ervaring' },
    { icon: Users, value: '25+', label: 'Klanten laten groeien' },
    { icon: TrendingUp, value: '+120%', label: 'Gemiddelde traffic groei' },
    { icon: Euro, value: '€10M+', label: 'Omzet van klanten' },
  ];

  const werkwijze = [
    { title: 'Direct contact', description: 'Je werkt met mij. Geen accountmanagers of tussenpersonen.' },
    { title: 'Altijd een plan', description: 'Analyse eerst. Waar sta je? Wat doet je concurrent? Waar liggen kansen? Dan maken we een plan. Pas daarna uitvoeren.' },
    { title: 'Eerlijk advies', description: 'Als SEO 6 maanden duurt, hoor je dat vooraf. Als iets niet werkt, zeg ik het. Geen vage beloftes.' },
    { title: 'Focus op omzet', description: 'Bezoekers zijn mooi, maar ze moeten ook converteren. Daar draait het om.' },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Roy de Clerck",
      "jobTitle": "SEO Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "Vizibly",
        "@id": "https://vizibly.nl/#organization"
      },
      "description": "SEO specialist die kleine en middelgrote bedrijven helpt groeien met een data-gedreven aanpak."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <ReviewBanner />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              DIRECT CONTACT, ALTIJD EEN PLAN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none">
              Over{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-accent"></span>
                <span className="relative">Vizibly</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-black py-16 lg:py-20">
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-3 border-4 border-accent bg-black p-6 text-center transition-all duration-300 hover:-translate-y-1 lg:p-8"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
              >
                <stat.icon className="h-8 w-8 text-accent lg:h-10 lg:w-10" />
                <div className="text-4xl font-black tracking-tight text-accent lg:text-5xl xl:text-6xl">
                  {stat.value}
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Vizibly bestaat */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-[3/4] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
              <Image
                src="https://vizibly.nl/wp-content/uploads/2024/02/Foto-Roy.jpg.webp"
                alt="Roy de Clerck - Vizibly"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Waarom Vizibly bestaat
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Vizibly staat voor zichtbaarheid. Bedrijven met goede producten en diensten moeten gevonden worden door mensen die ernaar zoeken.
              </p>

              <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Dat is waar ik, Roy de Clerck, voor zorg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor wie ik werk */}
      <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Voor wie ik werk
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>

              <p className="mb-8 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                Kleine en middelgrote bedrijven met ambities. Bedrijven die echt iets goeds willen doen en willen groeien. Die zelf ook met korte lijnen werken en snel schakelen.
              </p>

              <p className="mb-8 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Ook werk ik voor marketingbureaus en marketeers die SEO uitbesteden of extra capaciteit nodig hebben.
              </p>

              <div className="border-l-4 border-accent pl-6 py-4 bg-white/5">
                <p className="text-base font-bold text-accent lg:text-lg xl:text-xl">
                  Geen grote corporates met eindeloze overleggen. Gewoon directe samenwerking met mensen die vooruit willen.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="mb-8 text-2xl font-black uppercase text-white lg:text-3xl">
                Hoe ik werk
              </h3>

              <div className="grid gap-6">
                {werkwijze.map((item, index) => (
                  <div
                    key={index}
                    className="border-4 border-white/20 bg-white/5 p-6 transition-all hover:border-accent"
                    style={{ boxShadow: '6px 6px 0 0 #CCFF00' }}
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="mb-2 text-base font-black uppercase text-white lg:text-lg">{item.title}</h4>
                        <p className="text-base font-bold text-white/80">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t-4 border-white/10">
            <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl max-w-4xl">
              SEO is een systeem. Website, content, techniek, links, gebruikerservaring: alles hangt samen. Mijn focus ligt op content en strategie. Voor Google Ads, complexe techniek en linkbuilding werk ik met specialisten. Ik stuur alles aan.
            </p>
          </div>
        </div>
      </section>

      {/* Waarom ik anders kijk naar SEO */}
      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Waarom ik anders kijk naar SEO
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Voordat ik met SEO begon, studeerde ik filosofie en werkte als copywriter (zie ook{' '}
                <a href="https://roydeclerck.nl/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent transition-colors">
                  roydeclerck.nl
                </a>
                ). Die achtergrond helpt me dagelijks.
              </p>

              <div className="mb-8 border-4 border-black p-6 bg-accent/10" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
                  Een voorbeeld: zijn en schijn. Hoe verschijnen dingen aan ons versus hoe zijn ze werkelijk?
                </p>
              </div>

              <p className="mb-6 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Je ziet bezoekersaantallen in een dashboard. Lijkt duidelijk. Maar klopt dat cijfer? Hoe is die data tot stand gekomen? Wat meet je eigenlijk? En belangrijker: wat betekent het voor je bedrijf?
              </p>

              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Veel SEO-specialisten nemen data voor waar aan. Ze zien een cijfer en trekken conclusies. Door te begrijpen hoe data tot stand komt - het verschil tussen schijn en werkelijkheid - vermijd ik valkuilen waar anderen intrappen.
              </p>
            </div>

            <div>
              <div className="mb-8 border-l-4 border-accent pl-6">
                <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
                  Daarnaast vind ik SEO gewoon interessant werk. Niemand kent het volledige algoritme van Google. Het verandert constant. Analyseren en puzzelen blijft altijd belangrijk, net zoals in de filosofie.
                </p>
              </div>

              <p className="mb-12 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                En als je het goed hebt, levert het resultaat op. Klanten worden blij. Dat vind ik mooi om te zien.
              </p>

              <div className="border-4 border-black p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
                <h3 className="mb-6 text-xl font-black uppercase text-black lg:text-2xl">
                  Wie ik ben
                </h3>
                <p className="mb-4 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                  Ik ben Roy de Clerck. Verder vrij gewoon. Ik drink koffie, speel graag voetbal, drink af en toe een biertje.
                </p>
                <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
                  En ik vind het leuk om bedrijven te helpen groeien. Vooral als ze zelf gemotiveerd zijn en er echt voor gaan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative border-y-4 border-black">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src="https://vizibly.nl/wp-content/uploads/2025/06/Vizibly-Sports.jpg.webp"
            alt="Vizibly Sports"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold uppercase tracking-wider text-white/80 lg:text-xl">
                VIZIBLY
              </p>
              <p className="text-4xl font-black uppercase text-white lg:text-6xl">
                SEO MET PASSIE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              MAAK KENNIS MET HET #1 SEO BUREAU
            </p>

            <h2 className="mb-12 text-brutalist-h1 text-black">
              Nog maar een stap verwijderd van succes!
            </h2>

            <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                LET'S GO!!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
        {/* Subtle diagonal pattern */}
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
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Local SEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-accent hover:text-white transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Blog</Link></li>
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
