import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { Clock, Users, TrendingUp, Euro, CheckCircle } from 'lucide-react';
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-40 pb-24 lg:pt-48 lg:pb-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              DIRECT CONTACT, ALTIJD EEN PLAN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none">
              Over{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-accent"></span>
                <span className="relative">Vizibly</span>
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-20 lg:py-24">
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center gap-3 border-4 border-accent bg-black p-6 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 lg:p-8"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
              >
                <stat.icon className="h-8 w-8 text-accent lg:h-10 lg:w-10" />
                <div className="text-4xl font-black tracking-tight text-accent lg:text-5xl xl:text-6xl">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white lg:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waarom Vizibly bestaat */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-[3/4] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/team/roy.webp"
                alt="Roy de Clerck - Vizibly"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
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
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
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
                    style={{ boxShadow: '6px 6px 0 0 #CCFF00, 0 15px 40px rgba(204, 255, 0, 0.3)' }}
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

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Waarom ik anders kijk naar SEO */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Waarom ik anders kijk naar SEO
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Voordat ik met SEO begon, studeerde ik filosofie en werkte als copywriter (zie ook{' '}
                <a href="https://roydeclerck.nl/" target="_blank" rel="noopener noreferrer" className="font-bold">
                  roydeclerck.nl
                </a>
                ). Die achtergrond helpt me dagelijks.
              </p>

              <div className="mb-8 border-4 border-black p-6 bg-accent/10" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
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

              <div className="border-4 border-black p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
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
                src="/team/vizibly-sports.webp"
            alt="Vizibly Sports"
            fill
            className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-semibold uppercase tracking-widest text-white/80 lg:text-xl">
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
      <FinalCTA
        label="MAAK KENNIS MET HET #1 SEO BUREAU"
        heading="Nog maar een stap verwijderd van succes!"
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
