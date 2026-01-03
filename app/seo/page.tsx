import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, FileText, Link2, MapPin, Check, TrendingUp, Clock, Users, Euro, Monitor } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SEOAuditIllustration } from '@/components/icons/device-showcase';

export const metadata: Metadata = {
  title: 'SEO | Gevonden worden in Google | Vanaf €350/maand',
  description: 'Vizibly zorgt dat je gevonden wordt in Google. Van strategie tot uitvoering: content, techniek en linkbuilding. Transparante prijzen, meetbare resultaten.',
  openGraph: {
    title: 'SEO | Gevonden worden in Google | Vanaf €350/maand',
    description: 'Vizibly zorgt dat je gevonden wordt in Google. Van strategie tot uitvoering: content, techniek en linkbuilding. Transparante prijzen, meetbare resultaten.',
    url: 'https://vizibly.nl/seo/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoPage() {
  const packages = [
    {
      name: 'Basis',
      subtitle: 'Voor lokale groei',
      price: '€350',
      period: 'p/m',
      features: [
        'Zoekwoordonderzoek',
        'On-page optimalisatie',
        'Local SEO setup',
        'Basis linkbuilding',
        'Maandelijkse rapportage'
      ],
      highlight: false
    },
    {
      name: 'Standaard',
      subtitle: 'Voor serieuze groei',
      price: '€750',
      period: 'p/m',
      features: [
        'Uitgebreide analyse',
        'Content strategie',
        'Technische optimalisatie',
        'Actieve linkbuilding',
        'Contentcreatie',
        'Maandelijkse call'
      ],
      highlight: true
    },
    {
      name: 'Premium',
      subtitle: 'Maximale groei',
      price: 'Vanaf €1.500',
      period: 'p/m',
      features: [
        '360° website analyse',
        'Uitgebreide content creatie',
        'Intensieve linkbuilding',
        'Technische optimalisatie',
        'Wekelijkse updates',
        'Strategisch sparringpartner'
      ],
      highlight: false
    }
  ];

  const faqData = [
    {
      question: 'Hoelang duurt het voordat SEO resultaat oplevert?',
      answer: 'Eerlijk antwoord: 3-6 maanden voor significante resultaten. Eerste verbeteringen zie je vaak eerder, maar SEO is geen sprint. Wie iets anders belooft, liegt of weet niet waar hij het over heeft.'
    },
    {
      question: 'Kan ik SEO niet gewoon zelf doen?',
      answer: 'Basis SEO kun je zelf doen. Maar serieuze resultaten vereisen ervaring, tools en tijd. De vraag is: is jouw tijd niet beter besteed aan je core business? De meeste ondernemers ontdekken dat uitbesteden uiteindelijk goedkoper is.'
    },
    {
      question: 'Wat als ik al een website heb die niet zo snel is?',
      answer: 'Dan wordt er geoptimaliseerd wat mogelijk is. Maar eerlijk: een trage WordPress-site kun je eindeloos optimaliseren, het blijft beperkt. Daarom biedt Vizibly ook razendsnelle websites. De combinatie van een snelle site én SEO levert de beste resultaten.'
    },
    {
      question: 'Werken jullie met contracten?',
      answer: 'Maandelijks opzegbaar. SEO heeft tijd nodig, maar je zit nergens aan vast. Als het niet werkt, stopt het traject. Zo simpel is het.'
    },
    {
      question: 'Wat is het verschil tussen de pakketten?',
      answer: 'Basis is voor lokale bedrijven die gevonden willen worden in hun regio. Standaard voor bedrijven die landelijk willen groeien. Premium voor wie all-in wil gaan. Na een gesprek volgt een advies wat bij jouw situatie past.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo/#service",
        "name": "SEO",
        "description": "Zoekmachine optimalisatie voor meer bezoekers en omzet uit Google",
        "provider": {
          "@type": "Organization",
          "name": "Vizibly",
          "@id": "https://vizibly.nl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nederland"
        },
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "500",
          "highPrice": "2000",
          "priceCurrency": "EUR",
          "offerCount": "3"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo/#faq",
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
                GEVONDEN WORDEN DOOR JE IDEALE KLANT
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">
                SEO die{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">werkt</span>
                </span>
              </h1>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Elke dag zoeken potentiële klanten naar wat jij aanbiedt. De vraag is: vinden ze jou of je concurrent?
              </p>

              <p className="mb-10 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Ik zorg dat potentiële klanten jou vinden. In Google én in AI-tools zoals ChatGPT, Claude en Gemini. Met een aanpak die past bij jouw markt, budget en doelen.
              </p>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  LATEN WE KENNISMAKEN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-center border-4 border-black bg-[#fafaf8] p-4 lg:p-6" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <SEOAuditIllustration className="w-full h-auto max-w-lg text-black" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-3 gap-8 lg:gap-12">
            {[
              { value: '7+', label: 'Jaar ervaring', icon: Clock },
              { value: '25+', label: 'Klanten laten groeien', icon: Users },
              { value: '+120%', label: 'Gemiddelde traffic groei', icon: TrendingUp },
            ].map((stat, index) => (
              <div
                key={index}
                className="group flex flex-col items-center border-4 border-white bg-black p-6 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-accent"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
              >
                <stat.icon className="mb-4 h-8 w-8 text-accent" />
                <span className="mb-2 text-3xl font-black text-white lg:text-4xl">{stat.value}</span>
                <span className="text-sm font-bold uppercase tracking-wider text-white/80">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat krijg je Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                GEEN VAGE BELOFTES
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Wat je krijgt
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Geen losse acties, maar een complete aanpak. Van zoekwoordonderzoek tot de content die ervoor zorgt dat je gevonden wordt.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: Target, text: 'Strategie op maat voor jouw markt', href: '/seo-strategie' },
                  { icon: FileText, text: 'Content die scoort én converteert', href: '/seo-copy' },
                  { icon: Link2, text: 'Linkbuilding van relevante sites', href: '/linkbuilding' },
                  { icon: MapPin, text: 'Local SEO voor regionale vindbaarheid', href: '/local-seo' },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 border-l-4 border-accent bg-white p-4 transition-all hover:border-black hover:bg-accent"
                  >
                    <item.icon className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-base font-bold text-black lg:text-lg">{item.text}</span>
                    <ArrowRight className="h-5 w-5 text-black ml-auto" />
                  </Link>
                ))}

                {/* Optioneel: Website */}
                <Link
                  href="/websites"
                  className="flex items-center gap-4 border-l-4 border-black/30 bg-white/50 p-4 transition-all hover:border-accent hover:bg-accent"
                >
                  <Monitor className="h-6 w-6 text-black/60 flex-shrink-0" />
                  <span className="text-base font-bold text-black/60 lg:text-lg">Optioneel: een high-end website</span>
                  <ArrowRight className="h-5 w-5 text-black/60 ml-auto" />
                </Link>
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
              <Image
                src="/images/unsplash-selection/analytics-dashboard-speedcurve.jpg"
                alt="SEO analytics dashboard met resultaten"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              TRANSPARANTE PRIJZEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Pakketten
            </h2>
            <div className="mx-auto h-1 w-32 bg-accent mb-8"></div>
            <p className="mx-auto max-w-2xl text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              Geen verborgen kosten. Geen verrassingen. Na een gesprek weet je precies waar je aan toe bent.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative border-4 border-white p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 ${
                  pkg.highlight ? 'bg-accent border-accent' : 'bg-white'
                }`}
                style={{ boxShadow: pkg.highlight ? '12px 12px 0 0 #FFFFFF' : '8px 8px 0 0 #CCFF00' }}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-black bg-black px-4 py-1">
                    <span className="text-xs font-bold uppercase text-accent">Populair</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase text-black lg:text-3xl">{pkg.name}</h3>
                  <p className="text-base font-bold text-black/70">{pkg.subtitle}</p>
                </div>
                <div className="mb-8 border-t-4 border-black pt-6">
                  <span className="text-4xl font-black text-black lg:text-5xl">{pkg.price}</span>
                  <span className="text-base font-bold text-black/70"> {pkg.period}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                      <span className="text-base font-bold text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  asChild
                  className="w-full text-base bg-black text-white border-black hover:bg-white hover:text-black"
                >
                  <Link href="/contact">
                    NEEM CONTACT OP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="border-b-4 border-black bg-[#fafaf8] py-32 lg:py-44">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Resultaten uit<br />de praktijk
            </h2>
            <Link href="/cases" className="inline-flex items-center border-b-4 border-black pb-2 text-lg font-bold uppercase hover:bg-black hover:text-white transition-colors px-3 py-1">
              BEKIJK ALLE CASES
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: '/cases/online-bloemenwinkel.webp',
                title: 'Online bloemist groeit van 1.700 naar 10.000 bezoekers p/m: +1500% omzet',
                href: '/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet'
              },
              {
                image: '/cases/webshop-ventilatie.webp',
                title: '+145% omzet uit organisch verkeer voor technische webshop',
                href: '/145-omzet-uit-organisch-verkeer-voor-technische-webshop'
              },
              {
                image: '/cases/portretten-kleur-tak.webp',
                title: 'SEO voor een makelaarskantoor: steady op #1 voor de belangrijkste zoektermen',
                href: '/klantinterview-seo-voor-een-makelaarskantoor'
              }
            ].map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group block">
                <Card className="overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-20"></div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-3 text-2xl font-black uppercase leading-tight">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white px-2 py-1">
                      LEES HET VERHAAL
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Website + SEO Synergie */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-24 lg:py-32">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                ALLES IN ÉÉN HAND
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Heb je ook een nieuwe website nodig?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                Een trage site ondermijnt je SEO-resultaten. Vizibly bouwt ook razendsnelle premium websites. De combinatie levert de beste resultaten.
              </p>
              <Button size="lg" asChild variant="lime" className="text-base px-8 py-5">
                <Link href="/websites">
                  BEKIJK WEBSITES
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video overflow-hidden border-4 border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/images/imac-workspace.jpg"
                alt="Premium website development workspace"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection items={faqData} />

      {/* Final CTA Section */}
      <FinalCTA
        variant="dark"
        label="KLAAR OM GEVONDEN TE WORDEN?"
        heading="Laten we kennismaken"
        buttonText="PLAN EEN GESPREK"
      />

      <Footer />
    </>
  );
}
