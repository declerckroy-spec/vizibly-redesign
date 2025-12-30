import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Target, FileText, Link2, Code, MapPin, BarChart3, Check, TrendingUp, Clock, Users, Euro } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Full service SEO | Vanaf €500/maand',
  description: 'Vergroot je online zichtbaarheid met full service SEO. Van techniek tot content: wij verzorgen alles voor een toppositie in Google.',
  openGraph: {
    title: 'Full service SEO | Vanaf €500/maand',
    description: 'Vergroot je online zichtbaarheid met full service SEO. Van techniek tot content: wij verzorgen alles voor een toppositie in Google.',
    url: 'https://vizibly.nl/full-service-seo/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function FullServiceSeoPage() {
  const packages = [
    {
      name: 'Basis',
      subtitle: 'Voor lokale groei',
      price: '€500',
      period: 'p/m',
      features: [
        'Zoekwoordonderzoek',
        'On-page optimalisatie',
        'Local SEO setup',
        'Beperkte linkbuilding',
        'Beperkte contentcreatie',
        'Maandelijkse rapportage'
      ],
      highlight: false
    },
    {
      name: 'Standaard',
      subtitle: 'Voor e-commerce en kleine mkb\'ers',
      price: '€1000',
      period: 'p/m',
      features: [
        'Uitgebreide website analyse',
        'Content strategie',
        'Technische optimalisatie',
        'Basis linkbuilding',
        'Contentcreatie',
        'Maandelijkse rapportage'
      ],
      highlight: true
    },
    {
      name: 'Premium',
      subtitle: 'Ga voor maximale groei',
      price: '>€2000',
      period: 'p/m',
      features: [
        '360° website analyse',
        'Expert zoekwoordstrategie',
        'Uitgebreide content creatie',
        'Uitgebreide linkbuilding',
        'Technische optimalisatie',
        'Maandelijkse call'
      ],
      highlight: false
    }
  ];

  const faqData = [
    {
      question: 'Wat maakt Full Service SEO anders dan losse diensten?',
      answer: 'Bij Full Service SEO zorgen we dat alle SEO-aspecten optimaal op elkaar aansluiten. In plaats van losse optimalisaties werk je met een complete strategie waarbij alle onderdelen elkaar versterken. Dit levert betere en snellere resultaten op.'
    },
    {
      question: 'Voor wie is Full Service SEO geschikt?',
      answer: 'Full Service SEO is ideaal voor bedrijven die serieus willen investeren in hun online groei. Of je nu lokaal, regionaal of landelijk actief bent: Vizibly stemt de aanpak af op jouw situatie en budget.'
    },
    {
      question: 'Hoe bepalen jullie welk pakket het beste past?',
      answer: 'We kijken naar verschillende factoren: je doelstellingen, de concurrentie in je markt, je huidige online prestaties en natuurlijk je budget. Op basis daarvan adviseren we het meest geschikte pakket.'
    },
    {
      question: 'Kunnen we later op- of afschalen?',
      answer: 'Absoluut. We monitoren continu de resultaten en kunnen op basis daarvan het pakket aanpassen. Groei je harder dan verwacht? Dan schalen we op. Wil je juist even gas terugnemen? Ook dat is mogelijk.'
    },
    {
      question: 'Werken jullie met contracten?',
      answer: 'We geloven in langdurige samenwerking omdat SEO tijd nodig heeft én in goede afspraken, maar we willen je niet vastzetten. Daarom kan je het contract met Vizibly maandelijks opzeggen.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/full-service-seo/#service",
        "name": "Full Service SEO",
        "description": "Complete SEO aanpak met strategie, content, linkbuilding en technische optimalisatie",
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
        "@id": "https://vizibly.nl/full-service-seo/#faq",
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
                COMPLETE SEO VOOR MAXIMALE GROEI
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">
                Full Service{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">SEO</span>
                </span>
              </h1>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Wil je structureel beter scoren in Google? Met onze Full Service SEO aanpak nemen we je alle zorg uit handen. Van strategie en techniek tot content en linkbuilding.
              </p>

              <p className="mb-10 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Wij zorgen dat alle puzzelstukjes perfect in elkaar vallen voor maximaal resultaat.
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
                src="/Bestaande afbeeldingen/Full Service SEO.jpg"
                alt="Full Service SEO specialist"
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

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-16 lg:py-20">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
            {[
              { value: '7+', label: 'Jaar ervaring', icon: Clock },
              { value: '25+', label: 'Klanten laten groeien', icon: Users },
              { value: '+120%', label: 'Gemiddelde traffic groei', icon: TrendingUp },
              { value: '€10M+', label: 'Omzet van klanten', icon: Euro }
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

      {/* Wat is Full Service SEO Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                COMPLETE ONDERSTEUNING
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Wat is Full Service SEO?
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Full Service SEO is onze meest complete aanpak voor online succes. In plaats van losse optimalisaties combineren we alle belangrijke aspecten van SEO in een krachtige strategie.
              </p>

              <p className="mb-8 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                We kijken naar het complete plaatje: van technische basis en content tot autoriteitsopbouw en lokale vindbaarheid. Zo zorgen we dat alle onderdelen elkaar versterken en je het maximale uit je online aanwezigheid haalt.
              </p>

              <div className="flex flex-wrap gap-4">
                {['Strategie', 'Content', 'Techniek', 'Links', 'Local'].map((item, index) => (
                  <span
                    key={index}
                    className="border-4 border-black bg-accent px-4 py-2 text-sm font-bold uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
              <Image
                src="/Bestaande afbeeldingen/SEO strategie.jpg"
                alt="SEO strategie en planning"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section - Black with stripes */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg xl:text-xl">
              ALLES WAT JE NODIG HEBT
            </p>
            <h2 className="text-brutalist-h1 text-white">
              Full service SEO op maat
            </h2>
          </div>

          {/* Asymmetrische grid layout zoals homepage */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {[
              {
                icon: Target,
                title: 'Analyse & Strategie',
                description: 'We starten met een grondige analyse van je website en markt. Op basis hiervan maken we een strategisch plan dat perfect aansluit bij jouw doelen.',
                href: '/seo-strategie',
                span: 'md:col-span-6'
              },
              {
                icon: FileText,
                title: 'SEO teksten',
                description: 'Met onze SEO copywriting zorgen we voor content die niet alleen wordt gevonden, maar ook converteert. Van productpagina\'s tot blogs.',
                href: '/seo-copy',
                span: 'md:col-span-4'
              },
              {
                icon: Link2,
                title: 'Linkbuilding',
                description: 'We bouwen aan een sterk en natuurlijk linkprofiel dat jouw autoriteit verhoogt. Door strategische linkbuilding stijg je duurzaam.',
                href: '/linkbuilding',
                span: 'md:col-span-4'
              },
              {
                icon: Code,
                title: 'Webdesign & Techniek',
                description: 'Een technisch sterke website is de basis voor succes. We zorgen dat je site niet alleen mooi is, maar ook technisch perfect presteert.',
                href: '/design-techniek',
                span: 'md:col-span-6'
              },
              {
                icon: MapPin,
                title: 'Local SEO',
                description: 'Lokaal actief? We zorgen dat je gevonden wordt door klanten in jouw regio met een gerichte local SEO strategie.',
                href: '/local-seo',
                span: 'md:col-span-5'
              },
              {
                icon: BarChart3,
                title: 'Meten & bijsturen',
                description: 'Met tools als Google Search Console en Ahrefs meten we de prestaties en sturen we bij waar nodig. Zo blijf je verbeteren.',
                href: '/contact',
                span: 'md:col-span-5'
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className={`block ${service.span}`}>
                <Card className="group relative h-full overflow-hidden border-4 border-white bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent cursor-pointer" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl font-black uppercase">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-black lg:text-lg">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              EEN SEO PLAN DAT BIJ JE PAST
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Onze pakketten
            </h2>
            <div className="mx-auto h-1 w-32 bg-black mb-8"></div>
            <p className="mx-auto max-w-2xl text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              Of je nu een lokaal bedrijf hebt of een grote webshop die landelijk wil groeien, Vizibly heeft een pakket dat bij je past.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative border-4 border-black p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 ${
                  pkg.highlight ? 'bg-accent' : 'bg-white'
                }`}
                style={{ boxShadow: pkg.highlight ? '12px 12px 0 0 #000000' : '8px 8px 0 0 #CCFF00' }}
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
                      <Check className="h-5 w-5 flex-shrink-0 text-black" />
                      <span className="text-base font-bold text-black">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  asChild
                  className={`w-full text-base ${
                    pkg.highlight
                      ? 'bg-black text-white border-black hover:bg-white hover:text-black'
                      : 'bg-black text-white border-black hover:bg-accent hover:text-black'
                  }`}
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

      {/* Cases Section - Black with stripes */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Resultaten uit<br />de praktijk
            </h2>
            <Link href="/cases" className="inline-flex items-center border-b-4 border-accent pb-2 text-lg font-bold uppercase text-white hover:bg-accent hover:text-black transition-colors px-3 py-1">
              BEKIJK ALLE SEO-CASES
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
                <Card className="overflow-hidden border-4 border-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                    <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-20"></div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-3 text-2xl font-black uppercase leading-tight">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
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

      {/* CTA with Image Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/Bestaande afbeeldingen/macbook-air-on-grey-wooden-table.jpeg"
                alt="Samen bouwen aan jouw online succes"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>

            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                LAAT JE CONCURRENTIE ACHTER JE
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Samen bouwen aan jouw online succes
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly geloven we dat elk bedrijf uniek is. Daarom kijken we verder dan standaard pakketten. We werken samen met je team, denken strategisch mee en gaan net dat stapje verder.
              </p>

              <p className="mb-10 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Want wij zijn pas tevreden als jij je concurrentie voorbij streeft.
              </p>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  GRATIS KENNISMAKING
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
        label="MAAK KENNIS MET HET #1 SEO BUREAU"
        heading="Nog maar een stap verwijderd van succes!"
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
