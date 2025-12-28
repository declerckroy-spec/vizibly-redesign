import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CasesStats } from '@/components/stats-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO cases | Bewezen resultaten',
  description: 'Bekijk onze SEO cases en ontdek hoe we bedrijven helpen groeien met meer organisch verkeer, hogere rankings en betere conversies.',
  openGraph: {
    title: 'SEO cases | Bewezen resultaten',
    description: 'Bekijk onze SEO cases en ontdek hoe we bedrijven helpen groeien met meer organisch verkeer, hogere rankings en betere conversies.',
    url: 'https://vizibly.nl/cases/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function CasesPage() {
  const cases = [
    {
      client: 'Online Bloemist',
      industry: 'E-commerce',
      image: '/cases/bloemist-hero.jpg',
      results: [
        { metric: '+1500%', label: 'Omzet' },
        { metric: '10.000', label: 'Bezoekers p/m' },
        { metric: '2 jaar', label: 'Groei periode' }
      ],
      description: 'In twee jaar tijd groeide een online bloemist van 1.700 naar 10.000 organische bezoekers per maand. Omzet steeg met 1.500%. Systematische SEO die echt werkt.',
      services: ['SEO Strategie', 'SEO Copy', 'Linkbuilding'],
      slug: 'online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet'
    },
    {
      client: 'Technische Webshop',
      industry: 'B2B/B2C',
      image: '/cases/webshop-hero.jpg',
      results: [
        { metric: '+145%', label: 'Omzet' },
        { metric: '1 jaar', label: 'Groei periode' },
        { metric: 'B2B+B2C', label: 'Doelgroepen' }
      ],
      description: 'Een webshop in ventilatieproducten en elektra groeide in één jaar van informatief verkeer naar commerciële conversies. Omzet uit organisch verkeer steeg met 145%.',
      services: ['SEO Strategie', 'Technical SEO', 'Content'],
      slug: '145-omzet-uit-organisch-verkeer-voor-technische-webshop'
    },
    {
      client: 'Tak Makelaardij',
      industry: 'Vastgoed',
      image: '/cases/makelaar-hero.jpg',
      results: [
        { metric: 'Top 3', label: 'Rankings' },
        { metric: 'Cadzand', label: 'Marktleider' },
        { metric: '5/5', label: 'Review' }
      ],
      description: 'Van onzichtbaar naar dé makelaar van Cadzand. Door gerichte Local SEO en content kwam dit makelaarskantoor in de top 3 voor alle belangrijke zoektermen.',
      services: ['Local SEO', 'SEO Copy', 'SEO Strategie'],
      slug: 'klantinterview-seo-voor-een-makelaarskantoor'
    },
    {
      client: 'Dakdekker Haarlem',
      industry: 'Bouw',
      image: '/cases/dakdekker-hero.png',
      results: [
        { metric: '#1', label: 'Voor hoofdterm' },
        { metric: '€600→€0', label: 'Ads budget' },
        { metric: '2 jaar', label: 'Naar top positie' }
      ],
      description: 'In 2 jaar van pagina 2 naar #1 voor "dakdekker Haarlem". Van €600 per maand aan ads naar tientallen organische leads zonder advertentiekosten.',
      services: ['Local SEO', 'Linkbuilding', 'SEO Strategie'],
      slug: 'seo-succesverhaal-dakdekker-in-haarlem'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://vizibly.nl/cases/#webpage",
    "name": "SEO Cases - Vizibly",
    "description": "Bekijk onze SEO cases en ontdek hoe we bedrijven helpen groeien",
    "publisher": {
      "@type": "Organization",
      "name": "Vizibly",
      "@id": "https://vizibly.nl/#organization"
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
      <section className="relative overflow-hidden bg-[#fafaf8] pt-40 pb-24 lg:pt-48 lg:pb-40">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              BEWEZEN RESULTATEN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none text-black">
              Onze{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-accent"></span>
                <span className="relative">Cases</span>
              </span>
            </h1>

            <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Resultaten zeggen meer dan woorden. Bekijk hoe we bedrijven hebben geholpen groeien met SEO. Van lokale ondernemers tot nationale spelers: de aanpak verschilt, het resultaat spreekt.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <CasesStats />

      {/* Cases Grid Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              UITGELICHTE CASES
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Resultaten die spreken
            </h2>
            <div className="h-1 w-32 bg-accent"></div>
          </div>

          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <div
                key={index}
                className={`grid gap-8 lg:grid-cols-2 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
                    <Image
                src={caseItem.image}
                      alt={`${caseItem.client} case study`}
                      width={600}
                      height={400}
                      className="w-full border-4 border-black"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-black/60">
                    {caseItem.industry}
                  </p>
                  <h3 className="mb-6 text-brutalist-h2 text-black">
                    {caseItem.client}
                  </h3>

                  <p className="mb-8 text-base font-bold text-black/70 lg:text-lg">
                    {caseItem.description}
                  </p>

                  {/* Results */}
                  <div className="mb-8 grid grid-cols-3 gap-4">
                    {caseItem.results.map((result, i) => (
                      <div
                        key={i}
                        className="border-4 border-black bg-accent p-4 text-center"
                      >
                        <p className="text-2xl font-black text-black lg:text-3xl">{result.metric}</p>
                        <p className="text-xs font-bold uppercase text-black/60">{result.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {caseItem.services.map((service, i) => (
                      <span
                        key={i}
                        className="border-4 border-black bg-white px-3 py-1 text-sm font-bold uppercase text-black"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <Button size="lg" asChild className="text-base px-6 py-4">
                    <Link href={`/${caseItem.slug}`}>
                      BEKIJK CASE
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              WORD JIJ DE VOLGENDE CASE?
            </p>

            <h2 className="mb-8 text-brutalist-h1 text-white">
              Jouw succesverhaal begint hier
            </h2>

            <p className="mb-12 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              Klaar om te groeien zoals deze bedrijven? Neem contact op voor een vrijblijvend gesprek over jouw mogelijkheden.
            </p>

            <Button size="lg" asChild variant="lime" className="px-8 py-5 text-base">
              <Link href="/contact">
                LET'S GO!!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

<Footer />
    </>
  );
}
