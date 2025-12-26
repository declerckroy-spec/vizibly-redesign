import { Navigation } from '@/components/navigation';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, FileText, Link2, Code, TrendingUp, BarChart3, ShoppingCart, Check, Package, Zap, Crown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO voor webshops | Meer omzet via organisch verkeer',
  description: 'Wil je meer omzet uit je webshop halen via Google? Vizibly helpt e-commerce bedrijven met SEO die daadwerkelijk converteert. Ontdek onze aanpak.',
  openGraph: {
    title: 'SEO voor webshops | Meer omzet via organisch verkeer',
    description: 'Wil je meer omzet uit je webshop halen via Google? Vizibly helpt e-commerce bedrijven met SEO die daadwerkelijk converteert. Ontdek onze aanpak.',
    url: 'https://vizibly.nl/seo-voor-webshop/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoVoorWebshopPage() {
  const faqData = [
    {
      question: 'Hoe lang duurt het voordat SEO resultaten oplevert voor mijn webshop?',
      answer: 'SEO is een langetermijnstrategie. Meestal zie je de eerste verbeteringen na 3-6 maanden, afhankelijk van de huidige staat van je webshop, de concurrentie in jouw niche en de gekozen zoekwoorden. Het mooie is dat zodra je goed rankt, dit een duurzame bron van verkeer wordt. Onze strategie richt zich altijd op snelle wins gecombineerd met langetermijngroei.'
    },
    {
      question: 'Wat is het verschil tussen SEO en SEA voor webshops?',
      answer: 'SEO (Search Engine Optimization) richt zich op organische, onbetaalde vindbaarheid in zoekmachines. SEA (Search Engine Advertising) betreft betaalde advertenties zoals Google Shopping. Voor webshops is een combinatie vaak ideaal: SEA voor directe resultaten en het testen van keywords, SEO voor duurzame groei en hogere marges. Bij ons kun je beide afnemen.'
    },
    {
      question: 'Kunnen jullie helpen met internationale SEO voor mijn webshop?',
      answer: 'Ja, we hebben ruime ervaring met internationale e-commerce SEO. We helpen bij het opzetten van de juiste sitestructuur (subdirectories of ccTLDs), hreflang-implementatie, gelokaliseerde contentstrategieën en linkbuilding in specifieke markten. Of je nu naar België, Duitsland of verder wilt uitbreiden, wij ondersteunen je daarbij.'
    },
    {
      question: 'Hoe meten jullie het succes van SEO voor mijn webshop?',
      answer: 'We meten op basis van concrete KPIs: organisch verkeer, rankings voor doelzoekwoorden, conversies uit organisch verkeer en uiteindelijk omzet. Maandelijks ontvang je een uitgebreide rapportage met inzichten en aanbevelingen. Bovendien heb je toegang tot een realtime dashboard voor dagelijks inzicht.'
    },
    {
      question: 'Werken jullie met alle e-commerce platforms?',
      answer: 'Ja, we hebben ervaring met alle gangbare platforms: WooCommerce, Shopify, Magento, Lightspeed, CCV Shop, Shopware en meer. Elk platform heeft zijn eigen SEO-uitdagingen en mogelijkheden, en we kennen ze allemaal. We adviseren je ook over platformkeuze als je nog twijfelt.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-voor-webshop/#service",
        "name": "SEO voor Webshops",
        "description": "Professionele zoekmachine optimalisatie specifiek voor e-commerce en webshops",
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
        "@id": "https://vizibly.nl/seo-voor-webshop/#faq",
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
      description: 'We starten met een uitgebreide analyse van je webshop, concurrenten en zoekwoordenlandschap. Welke producten en categorieën bieden de meeste kansen? Waar laat je nu omzet liggen? Op basis hiervan ontwikkelen we een concrete SEO-roadmap die aansluit bij jouw commerciële doelen.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Van categorieteksten tot productbeschrijvingen en blogartikelen. Teksten die niet alleen goed ranken, maar ook converteren. We schrijven content die jouw doelgroep overtuigt, met de juiste zoekwoorden op de juiste plekken. Dit is de basis voor organische groei.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copy'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'Autoriteit opbouwen via kwalitatieve backlinks van relevante websites in jouw branche. We focussen op links die daadwerkelijk bijdragen aan je rankings en merkbekendheid, niet op kwantiteit. Een sterk linkprofiel is essentieel voor hogere posities in competitieve markten.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Technische SEO is de fundering van je online succes. We optimaliseren laadtijd, mobiele ervaring, indexeerbaarheid en crawlbudget. Van schema markup tot JavaScript rendering, we zorgen dat Google je webshop perfect kan lezen en indexeren.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: Package,
      title: 'Productoptimalisatie',
      description: 'Elke productpagina is een potentiële landingspagina. We optimaliseren titels, meta descriptions, afbeeldingen met alt-teksten, en interne linkstructuur. Ook duplicate content door productvarianten pakken we aan. Zo haal je het maximale uit elk product.',
      link: null,
      linkText: null
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'Data-gedreven optimalisatie met focus op wat telt: omzet. We monitoren rankings, verkeer en conversies continu en sturen bij waar nodig. Je ontvangt maandelijkse rapportages met heldere inzichten in je ROI en concrete aanbevelingen voor verdere groei.',
      link: null,
      linkText: null
    }
  ];

  const pricingPackages = [
    {
      icon: Zap,
      name: 'Basis',
      price: '€500',
      period: '/maand',
      description: 'Perfect voor startende webshops die de basis op orde willen',
      features: [
        'Technische SEO audit',
        'Keyword research (focus-categorieën)',
        'On-page optimalisatie homepage + 5 categorieën',
        'Maandelijkse rapportage',
        'Google Search Console monitoring'
      ],
      cta: 'Start met Basis',
      popular: false
    },
    {
      icon: TrendingUp,
      name: 'Standaard',
      price: '€1000',
      period: '/maand',
      description: 'Voor groeiende webshops die serieus willen investeren in SEO',
      features: [
        'Alles uit Basis +',
        'Uitgebreide keyword strategie',
        'Content optimalisatie (10 pagina\'s/maand)',
        'Linkbuilding (5 links/maand)',
        'Concurrentieanalyse',
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
      description: 'Voor gevestigde webshops die willen domineren in hun markt',
      features: [
        'Alles uit Standaard +',
        'Volledige contentproductie',
        'Intensieve linkbuilding (10+ links/maand)',
        'Conversie-optimalisatie advies',
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
  ];

  const blogArticles = [
    {
      image: '/blog/webshop-seo.jpg',
      title: 'SEO-optimalisatie voor webshops: alles wat je moet weten',
      excerpt: 'Van productpagina\'s tot categoriestructuur. Alles wat je moet weten over webshop SEO in één complete gids.',
      href: '/seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten'
    },
    {
      image: '/blog/canonical-tags.jpg',
      title: 'Canonical tags voor productvarianten: zo voorkom je duplicate content',
      excerpt: 'Productvarianten kunnen duplicate content veroorzaken. Leer hoe je dit oplost met de juiste canonical strategie.',
      href: '/canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop'
    },
    {
      image: '/images/seo-strategie-thumb.webp',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.',
      href: '/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
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
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 border-4 border-black bg-accent px-4 py-2">
                <ShoppingCart className="h-5 w-5" />
                <span className="text-base font-bold uppercase">E-commerce SEO</span>
              </div>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO voor{' '}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">webshops</span>
                </span>
                : meer omzet via Google
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Een goed presterende webshop draait om meer dan alleen mooie productfoto's. Je producten moeten gevonden worden door mensen die actief op zoek zijn naar wat jij verkoopt. Door je webshop te optimaliseren voor zoekmachines als Google en AI-tools als ChatGPT en Gemini, trek je gericht verkeer aan dat converteert. Vizibly is gespecialiseerd in SEO voor e-commerce en helpt webshops structureel meer omzet te genereren uit organisch zoekverkeer.
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
              <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #000000' }}>
                <Image
                  src="/images/webshop-seo.webp"
                  alt="SEO voor webshops"
                  width={640}
                  height={427}
                  className="w-full border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative border-y-4 border-black bg-black py-16 text-white lg:py-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: '7+', label: 'Jaar ervaring' },
              { value: '25+', label: 'Webshops geholpen' },
              { value: '+120%', label: 'Gemiddelde groei' },
              { value: '€10M+', label: 'Extra omzet klanten' }
            ].map((stat, index) => (
              <div
                key={index}
                className="border-4 border-accent bg-black p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
              >
                <p className="mb-2 text-4xl font-black text-accent lg:text-5xl">{stat.value}</p>
                <p className="text-base font-bold uppercase text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                WAAROM SEO ESSENTIEEL IS VOOR WEBSHOPS
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Organisch verkeer dat converteert
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij e-commerce SEO gaat het om meer dan alleen hoog ranken. Het gaat om de juiste bezoekers aantrekken: mensen die actief op zoek zijn naar jouw producten en klaar zijn om te kopen. Dit is fundamenteel anders dan social media verkeer of betaalde advertenties.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Organisch zoekverkeer heeft gemiddeld de hoogste conversieratio van alle verkeersbronnen. Waarom? Omdat mensen die zoeken op productgerichte zoektermen koopintentie hebben. Ze vergelijken, ze onderzoeken, en ze zijn klaar om te beslissen.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bovendien is SEO een duurzame investering. Terwijl je bij advertenties elke klik betaalt, bouwt SEO aan een blijvende stroom van verkeer. Eenmaal goed gepositioneerd, blijf je profiteren - zonder dat je kosten per bezoeker omhoog gaan als je groeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              ONZE E-COMMERCE SEO DIENSTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Complete SEO voor jouw webshop
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Van technische basis tot content en linkbuilding. We pakken elk aspect van e-commerce SEO aan met een strategie die specifiek is afgestemd op jouw webshop, producten en doelgroep.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000' }}
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
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              TRANSPARANTE PRIJZEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Pakketten voor elke webshop
            </h2>
            <p className="mx-auto max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Kies het pakket dat past bij jouw ambities en budget. Alle pakketten zijn flexibel en maandelijks opzegbaar. Grotere webshops met specifieke wensen? We maken graag een voorstel op maat.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1 ${pkg.popular ? 'ring-4 ring-accent ring-offset-4' : ''}`}
                style={{ boxShadow: pkg.popular ? '12px 12px 0 0 #CCFF00' : '8px 8px 0 0 #000000' }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 border-4 border-black bg-accent px-4 py-1">
                    <span className="text-sm font-black uppercase">Populair</span>
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
                <Button size="lg" asChild className={`w-full text-base ${pkg.popular ? 'bg-accent text-black border-accent hover:bg-black hover:text-white' : ''}`}>
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
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                E-COMMERCE SUCCESVERHALEN
              </p>
              <h2 className="mb-4 text-brutalist-h1 text-white">
                Resultaten die tellen
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
                <Card className="overflow-hidden border-4 border-white/30 bg-white/5 transition-all hover:translate-x-1 hover:translate-y-1 hover:bg-white/10" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-white/30 bg-black">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
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
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                WAAROM VIZIBLY VOOR JOUW WEBSHOP?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                E-commerce is onze specialiteit
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                We werken al jaren uitsluitend met online ondernemers die serieus zijn over groei. Of je nu een gevestigde webshop hebt of net begint, we begrijpen de specifieke uitdagingen van e-commerce: seizoensgebondenheid, voorraadissues, productvarianten, en de constante strijd om conversie.
              </p>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                We denken in omzet, niet in rankings. Want wat heb je aan positie 1 als niemand koopt? Daarom combineren we SEO met conversie-inzichten en focussen we op zoekwoorden met commerciële waarde.
              </p>
              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  START EEN GESPREK
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                <Image
                  src="/team/roy.webp"
                  alt="Roy van Vizibly"
                  width={640}
                  height={427}
                  className="w-full border-4 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Section */}
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
              E-COMMERCE SEO KENNIS
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              Artikelen over webshop SEO
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogArticles.map((article, index) => (
              <Link key={index} href={article.href} className="group block">
                <Card className="h-full overflow-hidden border-4 border-accent bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #ccff00' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-accent">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
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
            <Button asChild size="lg" className="bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base">
              <Link href="/vizie">BEKIJK ALLE ARTIKELEN</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                VEELGESTELDE VRAGEN
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Vragen over webshop SEO?
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

      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              KLAAR VOOR MEER OMZET UIT GOOGLE?
            </p>

            <h2 className="mb-12 text-brutalist-h1 text-black">
              Laat je webshop groeien met SEO
            </h2>

            <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
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
