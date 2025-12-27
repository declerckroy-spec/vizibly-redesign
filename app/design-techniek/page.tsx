import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Gauge, Smartphone, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technische SEO | 100/100 PageSpeed score',
  description: 'Een snelle, technisch perfecte website is de basis voor SEO-succes. Vizibly optimaliseert je site voor maximale prestaties en conversies.',
  openGraph: {
    title: 'Technische SEO | 100/100 PageSpeed score',
    description: 'Een snelle, technisch perfecte website is de basis voor SEO-succes. Vizibly optimaliseert je site voor maximale prestaties en conversies.',
    url: 'https://vizibly.nl/design-techniek/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function DesignTechniekPage() {
  const faqData = [
    {
      question: 'Waarom is technische SEO belangrijk?',
      answer: 'Technische SEO is het fundament van je online zichtbaarheid. Zonder goede techniek kan Google je site niet goed crawlen en indexeren. Hoe goed je content ook is, zonder technisch fundament blijven resultaten uit.'
    },
    {
      question: 'Hoeveel sneller kan mijn website worden?',
      answer: 'Dat hangt af van je huidige situatie. We zien regelmatig verbeteringen van 50-80% in laadtijd. Een site die 6 seconden laadde, krijgen we vaak onder de 2 seconden.'
    },
    {
      question: 'Bouwen jullie ook nieuwe websites?',
      answer: 'Ja, we bouwen SEO-geoptimaliseerde websites vanaf de grond op. Dit is vaak effectiever dan het repareren van een slecht gebouwde bestaande site.'
    },
    {
      question: 'Met welke systemen werken jullie?',
      answer: 'We werken met alle gangbare systemen: WordPress, Shopify, WooCommerce, Webflow en custom solutions. De principes van technische SEO zijn universeel toepasbaar.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/design-techniek/#service",
        "name": "Technische SEO & Webdesign",
        "description": "Technische website optimalisatie en SEO-vriendelijk webdesign",
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
        "@id": "https://vizibly.nl/design-techniek/#faq",
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
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                HET TECHNISCHE FUNDAMENT
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                Design &{' '}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">Techniek</span>
                </span>
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Een snelle, technisch perfecte website is geen luxe maar noodzaak. Google beloont sites die snel laden en technisch in orde zijn. Wij zorgen dat jouw fundament staat.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="text-base px-8 py-5">
                  <Link href="/contact">
                    NEEM CONTACT OP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
                <Image
                  src="/Bestaande afbeeldingen/Supersnelle wordpress.jpg"
                  alt="Technische SEO en webdesign"
                  width={600}
                  height={600}
                  className="w-full border-4 border-black grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technical SEO Section */}
      <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                WAAROM TECHNIEK
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                De basis voor SEO-succes
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                Je kunt de beste content hebben en de sterkste backlinks, maar als je techniek niet op orde is, blijven resultaten uit. Google moet je site kunnen crawlen en indexeren.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Daarnaast: bezoekers haken af bij trage sites. 53% verlaat een pagina die langer dan 3 seconden laadt. Technische optimalisatie is conversie-optimalisatie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              WAT WE DOEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Technische SEO op orde
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: 'Site Speed',
                description: 'We optimaliseren laadtijden zodat je site snel is voor bezoekers én Google. Snelheid is een belangrijke rankingfactor.'
              },
              {
                icon: Code,
                title: 'Technical SEO',
                description: 'We fixen technische issues die je rankings tegenhouden: van crawlproblemen tot indexeringsissues.'
              },
              {
                icon: Smartphone,
                title: 'Mobile-First',
                description: 'Google indexeert mobile-first. We zorgen dat je mobiele ervaring perfect is.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-black/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                We helpen je graag
              </h2>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl mb-6">
                Technische SEO is niet ons stokpaardje, maar we weten er genoeg van om je site op orde te krijgen. Voor complexe technische vraagstukken werken we samen met gespecialiseerde partners.
              </p>
              <ul className="space-y-4">
                {[
                  'Technische SEO audit',
                  'Site speed optimalisatie',
                  'Mobile-first check',
                  'Basis website onderhoud'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                    <span className="text-base font-bold text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
              <h3 className="mb-6 text-xl font-black uppercase text-black">Benieuwd naar je technische score?</h3>
              <p className="text-base font-bold text-black/70 mb-8">
                We checken graag hoe je site er technisch voor staat. Neem contact op voor een vrijblijvende quickscan.
              </p>
              <Button size="lg" asChild className="w-full text-base">
                <Link href="/contact">
                  VRAAG EEN QUICKSCAN AAN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqData} heading="Vragen over technische SEO?" />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTA
        variant="dark"
        label="KLAAR OM TE BEGINNEN?"
        heading="Laat je techniek checken"
        description="Benieuwd hoe je site technisch scoort? Neem contact op voor een vrijblijvende quickscan."
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
