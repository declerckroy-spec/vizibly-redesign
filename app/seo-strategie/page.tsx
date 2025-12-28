import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, BarChart3, FileSearch, TrendingUp, Settings, MapPin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO strategie | Data-gedreven groeiplan',
  description: 'Krijg inzicht in jouw online prestaties met onze 360-graden SEO analyse. Data-gedreven strategie met tools als Ahrefs voor maximale groei.',
  openGraph: {
    title: 'SEO strategie | Data-gedreven groeiplan',
    description: 'Krijg inzicht in jouw online prestaties met onze 360-graden SEO analyse. Data-gedreven strategie met tools als Ahrefs voor maximale groei.',
    url: 'https://vizibly.nl/seo-strategie/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SEOStrategiePage() {
  const faqData = [
    {
      question: 'Waarom heb ik een SEO strategie nodig?',
      answer: 'Zonder strategie is SEO vaak een kwestie van losse acties zonder samenhang. Een doordachte strategie zorgt ervoor dat alle SEO-activiteiten elkaar versterken en je sneller je doelen bereikt. Het geeft je ook duidelijke handvatten voor het hele proces.'
    },
    {
      question: 'Wat kost een SEO strategie?',
      answer: 'De investering in een SEO strategie hangt af van je doelen en de competitiviteit van je markt. We maken graag een analyse van jouw situatie en komen dan met een voorstel op maat. Een volledige SEO strategie inclusief uitvoering voor 12 maanden ligt meestal tussen de EUR 12.000 en EUR 36.000.'
    },
    {
      question: 'Wat houdt de 360-graden analyse precies in?',
      answer: 'Bij onze 360-graden analyse kijken we naar alle aspecten die invloed hebben op je online vindbaarheid. We analyseren je technische setup, content kwaliteit, gebruikerservaring, backlinks en concurrentiepositie. Op basis hiervan maken we een concreet verbeterplan met duidelijke prioriteiten.'
    },
    {
      question: 'Kan ik SEO niet beter zelf doen?',
      answer: 'Hoewel je zeker zelf met SEO aan de slag kunt, bespaart uitbesteden je veel tijd en geeft het zekerheid over de kwaliteit. Wij hebben de expertise en tools om je strategie professioneel uit te voeren, zodat jij je kunt focussen op je kernactiviteiten.'
    },
    {
      question: 'Passen jullie de strategie ook aan?',
      answer: 'Absoluut. SEO is geen statisch proces - we monitoren constant de resultaten en passen de strategie aan waar nodig. Zo spelen we in op veranderingen in de markt, updates van Google en nieuwe kansen die zich voordoen.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-strategie/#service",
        "name": "SEO Strategie",
        "description": "360-graden SEO analyse en maatwerk strategie voor maximale online groei",
        "provider": {
          "@type": "Organization",
          "name": "Vizibly",
          "@id": "https://vizibly.nl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nederland"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo-strategie/#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
      <section className="relative overflow-hidden bg-[#fafaf8] pt-36 pb-24 lg:pt-44 lg:pb-36">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                DE FUNDERING VOOR ONLINE GROEI
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">
                SEO{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">Strategie</span>
                </span>
              </h1>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Wil je structureel beter scoren in Google? Een doordachte SEO strategie is de basis voor online succes. Bij Vizibly maken we een strategisch plan dat perfect aansluit bij jouw doelen en situatie.
              </p>

              <p className="mb-10 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Met onze data-gedreven aanpak weet je precies wat er nodig is om jouw online vindbaarheid te verbeteren.
              </p>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  NEEM CONTACT OP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/images/person-browsing-google-imac.webp"
                alt="Person browsing Google on iMac"
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

      {/* Wat is een SEO strategie Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                DE FUNDERING VOOR ONLINE GROEI
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-white">
                Wat is een SEO strategie?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>

              <p className="mb-8 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                Een SEO strategie is meer dan alleen wat losse optimalisaties. Het is een doordacht plan waarin we vastleggen hoe we jouw online vindbaarheid gaan verbeteren.
              </p>

              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                We kijken naar drie cruciale pijlers: content, techniek en autoriteit. Door deze elementen strategisch in te zetten, zorgen we voor maximaal resultaat uit je SEO inspanningen.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: FileSearch, label: 'Content' },
                { icon: Settings, label: 'Techniek' },
                { icon: TrendingUp, label: 'Autoriteit' }
              ].map((pillar, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 border-4 border-accent bg-black p-6 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
                  style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
                >
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-accent bg-accent text-black">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-white lg:text-base">
                    {pillar.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 360-graden analyse Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                DOELGERICHT EN MEETBAAR
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Zo bouwen we aan jouw succes
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Voordat we aan de slag gaan met de uitvoering, brengen we eerst de huidige situatie volledig in kaart met een 360-graden analyse. We onderzoeken:
              </p>

              <div className="grid gap-4 mb-10">
                {[
                  { icon: Settings, text: 'De technische staat van je website' },
                  { icon: BarChart3, text: 'Je huidige posities en verkeer' },
                  { icon: FileSearch, text: 'De content en zoekwoorden waar je op gevonden wordt' },
                  { icon: Target, text: 'Je concurrentiepositie in de zoekresultaten' },
                  { icon: TrendingUp, text: 'De kansen voor verbetering en groei' },
                  { icon: MapPin, text: 'Je local SEO prestaties en kansen' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 border-l-4 border-black pl-4 py-2 hover:border-accent transition-colors">
                    <item.icon className="h-6 w-6 text-black/60 flex-shrink-0" />
                    <span className="text-base font-bold text-black lg:text-lg xl:text-xl">{item.text}</span>
                  </div>
                ))}
              </div>

              <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Op basis van deze inzichten stellen we een strategisch plan op voor 6 tot 12 maanden, waarin we precies aangeven welke acties wanneer uitgevoerd worden. Van zoekwoordenonderzoek en <Link href="/seo-copy" className="font-bold">contentstrategie</Link> tot <Link href="/design-techniek" className="font-bold">technische optimalisatie</Link> en <Link href="/linkbuilding" className="font-bold">linkbuilding</Link> - alles krijgt zijn plek in een logische volgorde.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                src="/images/scrabble-seo.webp"
                  alt="SEO Scrabble tiles"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
                <Image
                src="/images/macbook-google.webp"
                  alt="Person using MacBook Pro with Google"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              VAN STRATEGIE NAAR MEETBAAR RESULTAAT
            </p>

            <h2 className="mb-8 text-brutalist-h1 text-white">
              Begin met een doordacht plan van Vizibly
            </h2>

            <p className="mb-10 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
              Een goede SEO strategie is cruciaal voor langdurig succes in Google. Of je nu wilt starten met SEO of je huidige aanpak wilt verbeteren, we helpen je graag met een plan op maat.
            </p>

            <p className="mb-12 text-base font-bold text-white/70 lg:text-lg xl:text-xl">
              Meestal zie je de eerste resultaten al na 3-6 maanden, met een stevige groei in verkeer en posities na 9-12 maanden.
            </p>

            <Button size="lg" asChild variant="lime" className="px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqData} />

      {/* Final CTA Section */}
      <FinalCTA
        label="MAAK KENNIS MET HET #1 SEO STRATEGIE BUREAU"
        heading="Nog maar een stap verwijderd van succes!"
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
