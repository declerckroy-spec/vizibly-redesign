import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, FileText, Link2, Code, BarChart3, Home, Check, MapPin, Zap, TrendingUp, Crown, Building, Key } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO voor makelaars | Meer woningverkopen via Google',
  description: 'Als makelaar wil je gevonden worden door verkopers én kopers. Vizibly helpt makelaars en vastgoedbedrijven met SEO die leidt tot meer opdrachten.',
  openGraph: {
    title: 'SEO voor makelaars | Meer woningverkopen via Google',
    description: 'Als makelaar wil je gevonden worden door verkopers én kopers. Vizibly helpt makelaars en vastgoedbedrijven met SEO die leidt tot meer opdrachten.',
    url: 'https://vizibly.nl/seo-voor-makelaars-en-vastgoedbedrijven/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoVoorMakelaarsPage() {
  const faqData = [
    {
      question: 'Hoe belangrijk is SEO voor makelaars naast Funda?',
      answer: 'Zeer belangrijk. Funda is essentieel voor woningaanbod, maar verkopers zoeken makelaars vaak eerst via Google. Zoektermen als "makelaar [plaatsnaam]" of "huis verkopen [regio]" hebben hoge commerciële waarde. Door goed te ranken op deze termen, bereik je potentiële verkopers die een makelaar zoeken. Je belangrijkste bron van nieuwe opdrachten.'
    },
    {
      question: 'Hoe lang duurt het voordat SEO resultaten oplevert?',
      answer: 'Voor makelaars zien we vaak relatief snelle resultaten omdat de lokale online concurrentie beperkt is. Eerste verbeteringen zijn meestal na 2-4 maanden zichtbaar, met significante groei na 4-6 maanden. Het voordeel: eenmaal goed gepositioneerd, profiteer je duurzaam zonder doorlopende advertentiekosten.'
    },
    {
      question: 'Wat onderscheidt SEO voor makelaars van andere branches?',
      answer: 'Makelaardij draait om lokale bekendheid en vertrouwen. SEO voor makelaars focust sterk op lokale vindbaarheid, reputatiemanagement via reviews, en content die expertise toont. Denk aan wijkpagina\'s, marktanalyses en verkoopcijfers. Dit versterkt je positie als lokale expert.'
    },
    {
      question: 'Kunnen jullie ook helpen met de website zelf?',
      answer: 'Ja, we bieden ook webdesign en technische optimalisatie. Veel makelaarssites zijn verouderd of niet mobiel-vriendelijk. We kunnen je site moderniseren of volledig nieuw bouwen, geoptimaliseerd voor zowel SEO als conversie. Een professionele site versterkt je merkimago.'
    },
    {
      question: 'Hoe meet je succes bij SEO voor makelaars?',
      answer: 'We focussen op metrics die ertoe doen: rankings voor belangrijke zoektermen, organisch websiteverkeer, en uiteindelijk leads en taxatieverzoeken. Maandelijks ontvang je een rapportage met heldere inzichten in je ROI. We kijken naar de hele funnel, van zichtbaarheid tot conversie.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-voor-makelaars-en-vastgoedbedrijven/#service",
        "name": "SEO voor Makelaars en Vastgoedbedrijven",
        "description": "Professionele zoekmachine optimalisatie voor makelaars, vastgoedkantoren en woningbemiddelaars",
        "provider": {
          "@type": "Organization",
          "@id": "https://vizibly.nl/#organization",
          "name": "Vizibly"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Netherlands"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo-voor-makelaars-en-vastgoedbedrijven/#faq",
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

  const services = [
    {
      icon: Search,
      title: 'Analyse & Strategie',
      description: 'We analyseren je werkgebied, identificeren kansrijke zoektermen en onderzoeken wat je concurrenten doen. Van "makelaar Rotterdam" tot "huis verkopen zonder makelaar": we bepalen waar de kansen liggen en ontwikkelen een concrete SEO-roadmap.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Content die jouw lokale expertise toont. Wijkpagina\'s, marktanalyses, tips voor verkopers en kopers. Teksten die niet alleen ranken, maar ook potentiële klanten overtuigen om jou te kiezen als hun makelaar.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copy'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'Autoriteit opbouwen via backlinks van lokale bronnen, vastgoedmedia en regionale samenwerkingspartners. Kwalitatieve links die je rankings en geloofwaardigheid versterken in jouw werkgebied.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Een professionele, snelle website is je digitale visitekaartje. We zorgen voor optimale prestaties, mobiele ervaring en een design dat past bij de uitstraling die je wilt als makelaar. Technisch perfect geoptimaliseerd.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: MapPin,
      title: 'Lokale SEO',
      description: 'Verschijn in Google Maps en lokale zoekresultaten. We optimaliseren je Google Mijn Bedrijf profiel, bouwen aan je lokale autoriteit en zorgen dat je zichtbaar bent wanneer iemand zoekt naar een makelaar in jouw regio.',
      link: '/local-seo',
      linkText: 'Meer over local SEO'
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'We monitoren continu je rankings, verkeer en leads. Maandelijks ontvang je een heldere rapportage met concrete resultaten. Op basis van data optimaliseren we je strategie voor maximaal rendement.',
      link: null,
      linkText: null
    }
  ];

  const specialisaties = [
    { icon: Home, title: 'Woningmakelaars', description: 'Verkoop en aankoop woningen' },
    { icon: Building, title: 'Bedrijfsmakelaars', description: 'Commercieel vastgoed' },
    { icon: Key, title: 'Verhuurmakelaars', description: 'Verhuur en beheer' },
    { icon: TrendingUp, title: 'Taxateurs', description: 'Taxaties en waardebepalingen' }
  ];

  const pricingPackages = [
    {
      icon: Zap,
      name: 'Basis',
      price: '€500',
      period: '/maand',
      description: 'Voor makelaars die starten met online zichtbaarheid',
      features: [
        'Technische SEO audit & fixes',
        'Google Mijn Bedrijf optimalisatie',
        'Keyword research voor jouw werkgebied',
        'On-page optimalisatie (5 pagina\'s)',
        'Maandelijkse rapportage'
      ],
      cta: 'Start met Basis',
      popular: false
    },
    {
      icon: TrendingUp,
      name: 'Standaard',
      price: '€1000',
      period: '/maand',
      description: 'Voor makelaars met serieuze groeiambities',
      features: [
        'Alles uit Basis +',
        'Wijkpagina\'s en marktcontent',
        'Maandelijks nieuwe content',
        'Linkbuilding (5 links/maand)',
        'Review-strategie ondersteuning',
        'Realtime ranking dashboard'
      ],
      cta: 'Kies Standaard',
      popular: true
    },
    {
      icon: Crown,
      name: 'Premium',
      price: '€2000',
      period: '/maand',
      description: 'Voor makelaarskantoren die willen domineren',
      features: [
        'Alles uit Standaard +',
        'Intensieve contentproductie',
        'Linkbuilding (10+ links/maand)',
        'Meerdere werkgebieden',
        'Technische implementatie support',
        'Strategisch kwartaaloverleg',
        'Prioriteit support'
      ],
      cta: 'Ga voor Premium',
      popular: false
    }
  ];

  const caseStudies = [
    {
      image: '/cases/portretten-kleur-tak.webp',
      title: 'SEO voor een makelaarskantoor: steady op #1 voor de belangrijkste zoektermen',
      href: '/klantinterview-seo-voor-een-makelaarskantoor'
    },
    {
      image: '/cases/online-bloemenwinkel.webp',
      title: 'Online bloemist groeit van 1.700 naar 10.000 bezoekers p/m: +1500% omzet',
      href: '/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet'
    },
    {
      image: '/cases/dakdekker-hero.png',
      title: 'SEO succesverhaal: dakdekker in Haarlem naar #1 in Google',
      href: '/seo-succesverhaal-dakdekker-in-haarlem'
    }
  ];

  const blogArticles = [
    {
      image: '/images/seo-strategie-thumb.webp',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.',
      href: '/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
    },
    {
      image: '/blog/seo-uitbesteden.jpg',
      title: 'SEO uitbesteden of zelf doen? Alles wat je in 2025 moet weten',
      excerpt: 'Wanneer loont het om SEO uit te besteden en wanneer kun je het beter zelf doen?',
      href: '/seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten'
    },
    {
      image: '/blog/seo-gaat-door.jpg',
      title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
      excerpt: 'Ondernemers twijfelen over SEO door AI. Maar de data vertelt een ander verhaal.',
      href: '/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai'
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-36 pb-24 lg:pt-44 lg:pb-36">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 border-4 border-black bg-accent px-4 py-2">
                <Home className="h-5 w-5" />
                <span className="text-base font-bold uppercase">Makelaars & Vastgoed</span>
              </div>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO voor{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">makelaars</span>
                </span>
                : meer opdrachten
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Als makelaar wil je gevonden worden door mensen die hun huis willen verkopen of juist op zoek zijn naar een woning. De zoektocht begint vaak bij Google. "Makelaar Amsterdam", "huis verkopen tips" of "beste makelaar [plaats]": op deze momenten wil je zichtbaar zijn. Vizibly helpt makelaars en vastgoedbedrijven om online beter vindbaar te worden en meer verkoopopdrachten binnen te halen.
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
                src="/images/makelaar-seo.webp"
                  alt="SEO voor makelaars en vastgoedbedrijven"
                  width={640}
                  height={427}
                  className="w-full border-4 border-black"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-16 text-white lg:py-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: '7+', label: 'Jaar ervaring' },
              { value: '25+', label: 'Makelaars geholpen' },
              { value: '+120%', label: 'Gemiddelde groei' },
              { value: '€10M+', label: 'Extra omzet klanten' }
            ].map((stat, index) => (
              <div
                key={index}
                className="border-4 border-accent bg-black p-6 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
              >
                <p className="mb-2 text-4xl font-black text-accent lg:text-5xl">{stat.value}</p>
                <p className="text-base font-bold uppercase text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisaties Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              VOOR ALLE VASTGOED SPECIALISATIES
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              SEO die past bij jouw focus
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {specialisaties.map((spec, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                  <spec.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-black uppercase text-black">
                  {spec.title}
                </h3>
                <p className="text-base font-bold text-black/70">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                WAAROM SEO VOOR MAKELAARS?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Bereik verkopers voordat ze bij Funda zijn
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Funda is onmisbaar voor je woningaanbod, maar de meeste verkopers vinden hun makelaar niet via Funda. Ze zoeken eerst op Google naar "makelaar in [hun woonplaats]" of "huis verkopen tips". Op dat moment moet je zichtbaar zijn.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                SEO voor makelaars draait om het bereiken van potentiële verkopers in de oriëntatiefase. Voordat ze bij drie makelaars een vrijblijvende waardebepaling aanvragen, hebben ze vaak al onderzoek gedaan. De makelaars die zij in dat onderzoek tegenkomen, hebben een voorsprong.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Daarnaast helpt sterke online zichtbaarheid bij je merkbekendheid. Wanneer iemand overweegt te verkopen en jouw naam steeds tegenkomt bij relevante zoekopdrachten, bouw je vertrouwen op nog voordat er contact is.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              ONZE SEO DIENSTEN VOOR MAKELAARS
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Complete SEO voor vastgoedprofessionals
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Van lokale vindbaarheid tot wijkpagina's en linkbuilding. We pakken alles aan wat nodig is om jouw makelaarskantoor beter vindbaar te maken.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                  {service.title}
                </h3>
                <p className="mb-6 text-base font-bold text-black/70">
                  {service.description}
                </p>
                {service.link && (
                  <Link
                    href={service.link}
                    className="inline-flex items-center border-b-2 border-black pb-1 text-base font-bold uppercase transition-colors hover:border-accent"
                  >
                    {service.linkText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              TRANSPARANTE PRIJZEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Pakketten voor makelaars
            </h2>
            <p className="mx-auto max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Kies het pakket dat past bij de omvang van je kantoor en je ambities. Alle pakketten zijn flexibel en maandelijks opzegbaar.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1 ${pkg.popular ? 'ring-4 ring-black ring-offset-4 ring-offset-accent' : ''}`}
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-black bg-black px-4 py-1">
                    <span className="text-sm font-black uppercase text-accent">Populair</span>
                  </div>
                )}
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black">
                  <pkg.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-2xl font-black uppercase text-black lg:text-3xl">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-black text-black lg:text-5xl">{pkg.price}</span>
                  <span className="text-base font-bold text-black/60">{pkg.period}</span>
                </div>
                <p className="mb-6 text-base font-bold text-black/70">
                  {pkg.description}
                </p>
                <div className="mb-8 h-1 w-full bg-black"></div>
                <ul className="mb-8 space-y-3">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                      <span className="text-base font-bold text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild className="w-full text-base">
                  <Link href="/contact">
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                SUCCESVERHALEN
              </p>
              <h2 className="mb-4 text-brutalist-h1 text-white">
                Resultaten uit de praktijk
              </h2>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center border-b-2 border-accent pb-1 text-base font-bold uppercase text-accent transition-colors hover:text-white"
            >
              Bekijk alle cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group block">
                <Card className="overflow-hidden border-4 border-white/30 bg-white/5 transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white/10" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-white/30 bg-black">
                    <Image
                src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                  </div>
                  <CardHeader className="bg-transparent">
                    <CardTitle className="line-clamp-3 text-xl font-black uppercase leading-tight text-white lg:text-2xl">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center border-b-2 border-accent pb-1 text-sm font-bold uppercase text-accent transition-colors group-hover:text-white">
                      LEES DE CASE
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About CTA Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                WAAROM VIZIBLY?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                We begrijpen de vastgoedmarkt
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly werken we al jaren met makelaars en vastgoedprofessionals. We begrijpen dat jouw business draait om lokale expertise, persoonlijke service en het opbouwen van vertrouwen.
              </p>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                We focussen op wat telt: meer taxatieaanvragen en verkoopopdrachten van serieuze verkopers in jouw werkgebied. Geen vanity metrics, maar meetbare resultaten.
              </p>
              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  START EEN GESPREK
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
                <Image
                src="/team/roy.webp"
                  alt="Roy van Vizibly"
                  width={640}
                  height={427}
                  className="w-full border-4 border-black"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              KENNIS VOOR MAKELAARS
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              Artikelen over SEO
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <Link key={index} href={article.href} className="group block">
                <Card className="h-full overflow-hidden border-4 border-accent bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-accent">
                    <Image
                src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-accent"></div>
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-2 text-xl font-black uppercase leading-tight lg:text-2xl">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="line-clamp-3 text-base font-bold text-black/70">
                      {article.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" variant="lime" className="px-8 py-5 text-base">
              <Link href="/vizie">BEKIJK ALLE ARTIKELEN</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                VEELGESTELDE VRAGEN
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Vragen over SEO voor makelaars?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-4 border-black bg-white px-6 hover:border-accent transition-colors"
                  >
                    <AccordionTrigger className="text-left text-base font-black uppercase hover:no-underline py-6 text-black">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base font-bold text-black/70 pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA
        label="KLAAR VOOR MEER OPDRACHTEN?"
        heading="Laat je makelaarskantoor groeien"
      />

<Footer />
    </>
  );
}
