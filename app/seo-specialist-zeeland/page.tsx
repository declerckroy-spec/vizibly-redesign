import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Search, FileText, Link2, Code, TrendingUp, BarChart3, ShoppingCart, Users, Building2, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO specialist Zeeland | #1 in lokale vindbaarheid',
  description: 'Bedrijf in Zeeland en bovenaan in Google en LLM\'s komen? Da sa weh! Plan gratis je 15 gesprek met de #1 SEO specialist in Zeeland.',
  openGraph: {
    title: 'SEO specialist Zeeland | #1 in lokale vindbaarheid',
    description: 'Bedrijf in Zeeland en bovenaan in Google en LLM\'s komen? Da sa weh! Plan gratis je 15 gesprek met de #1 SEO specialist in Zeeland.',
    url: 'https://vizibly.nl/seo-specialist-zeeland/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoSpecialistZeelandPage() {
  const faqData = [
    {
      question: 'Waarom is lokale SEO voor Zeeland belangrijk?',
      answer: 'Regionale SEO zorgt ervoor dat je gevonden wordt door potentiële klanten in jouw provincie. Met bijna 400.000 inwoners in Zeeland en jaarlijks miljoenen toeristen is er een grote regionale markt te bereiken. Uit onderzoek blijkt dat 46% van alle Google-zoekopdrachten lokaal of regionaal gericht is, en bij mobiele zoekopdrachten is dit percentage nog hoger.'
    },
    {
      question: 'Wat is het verschil tussen SEO en SEA voor mijn bedrijf in Zeeland?',
      answer: 'SEO (Search Engine Optimization) is gericht op het organisch verbeteren van je vindbaarheid in zoekmachines zonder direct te betalen per klik. SEA (Search Engine Advertising) betreft betaalde advertenties in Google. Voor Zeeuwse bedrijven is een combinatie vaak optimaal: SEO voor langetermijnresultaten en duurzame groei, en SEA voor directe zichtbaarheid en snelle resultaten, bijvoorbeeld tijdens het hoogseizoen of bij regionale evenementen.'
    },
    {
      question: 'Hoe belangrijk is mobiele optimalisatie voor mijn website in Zeeland?',
      answer: 'Extreem belangrijk. Google gebruikt mobile-first indexering, wat betekent dat ze primair de mobiele versie van je site gebruiken voor rankings. In Zeeland, waar veel mensen op hun smartphone zoeken tijdens het reizen tussen eilanden of bij het bezoeken van verschillende locaties, kan een niet-geoptimaliseerde mobiele ervaring direct leiden tot lagere rankings en gemiste kansen. We zorgen dat je site perfect werkt op alle apparaten.'
    },
    {
      question: 'Wat onderscheidt jullie van andere SEO specialisten in Zeeland?',
      answer: 'Bij Vizibly werken we volledig transparant, zonder langdurige contracten en met een persoonlijke aanpak die specifiek is afgestemd op de Zeeuwse markt. We combineren technische expertise met strategisch inzicht en creëren content die niet alleen goed scoort in Google, maar ook daadwerkelijk aanspreekt bij jouw lokale doelgroep. Onze kennis van de hele provincie, van Middelburg, Vlissingen, Goes, Terneuzen, Zierikzee, Sluis tot Tholen, geeft ons een uniek voordeel.'
    },
    {
      question: 'Hoe lang duurt het voordat ik resultaat zie met SEO in Zeeland?',
      answer: 'SEO is een proces dat tijd nodig heeft. Gewoonlijk zie je de eerste verbeteringen na ongeveer 2-3 maanden, maar significante resultaten worden vaak na 4-6 maanden zichtbaar. Dit hangt af van factoren zoals de concurrentie in jouw branche in Zeeland en de huidige staat van je website. Hoe sterker de concurrentie, hoe minder snel het zal gaan.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://vizibly.nl/#organization",
        "name": "Vizibly - SEO Specialist Zeeland",
        "description": "SEO specialist gevestigd in Zeeland, gespecialiseerd in lokale zoekmachine optimalisatie",
        "url": "https://vizibly.nl",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "'t Zanddorp 55",
          "addressLocality": "Middelburg",
          "postalCode": "4335 AE",
          "addressRegion": "Zeeland",
          "addressCountry": "NL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "51.4988",
          "longitude": "3.6136"
        },
        "areaServed": {
          "@type": "State",
          "name": "Zeeland"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo-specialist-zeeland/#faq",
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
      description: 'We beginnen met een uitgebreide analyse van je website en de provinciale markt in Zeeland. We onderzoeken welke zoektermen potentiële klanten gebruiken en hoe we je website hierop kunnen optimaliseren. Hieruit ontwikkelen we een strategisch plan dat perfect past bij jouw doelen.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie ontwikkelen'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Met SEO copywriting zorgen we voor content met relevantie voor Zeeland die daadwerkelijk tot conversies leidt. We verwerken regionale kenmerken, evenementen (zoals de Deltawerken of Festival de Vrijheid) en andere herkenbare elementen in je teksten.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copywriting'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'We bouwen aan een krachtig en organisch linkprofiel dat jouw autoriteit in Zeeland versterkt. Door strategische regionale linkbuilding vanaf relevante Zeeuwse websites, lokale nieuwsmedia en organisaties stijg je duurzaam in de zoekresultaten en versterk je je marktpositie.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Een technisch sterke website vormt de basis voor succes. Onze web development in Zeeland zorgt dat je site niet alleen visueel aantrekkelijk is, maar ook technisch optimaal presteert en voldoet aan de verwachtingen van Google. Ook voor mobiele gebruikers, aangezien steeds meer zoekopdrachten via smartphone worden uitgevoerd.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: (
        <>
          Als ondernemer in Zeeland is lokale vindbaarheid essentieel. We optimaliseren je Google Business Profiel, zorgen voor nauwkeurige vermeldingen op Google Maps en maximaliseren je zichtbaarheid in de lokale zoekresultaten. Zo vinden potentiële klanten je gemakkelijk, of ze nu op zoek zijn in <Link href="/seo-specialist-middelburg" className="font-bold">Middelburg</Link>, Vlissingen, Goes, Terneuzen of Zierikzee.
        </>
      ),
      link: '/local-seo',
      linkText: 'Meer over local SEO'
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'Met geavanceerde tools monitoren we continu hoe je presteert in de zoekresultaten en sturen we bij waar nodig. We volgen je positie voor belangrijke zoektermen en houden ontwikkelingen bij concurrenten in de gaten. Zo blijf je de concurrentie in Zeeland voor.',
      link: null,
      linkText: null
    }
  ];

  const businessTypes = [
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      subtitle: 'Voor webshops',
      features: [
        'Productoptimalisatie',
        'Categorie-strategieën',
        'Conversie-verbetering',
        'Review-optimalisatie',
        'Technische e-commerce SEO',
        'Concurrentieanalyse van lokale en nationale webshops'
      ],
      link: '/seo-voor-webshop'
    },
    {
      icon: Users,
      title: 'B2C diensten',
      subtitle: 'Bouw, makelaars, medisch en meer',
      features: [
        'Google Business optimalisatie',
        'Lokale zoekwoordstrategie',
        'Geo-targeting voor Zeeland',
        'Recensie-management',
        'Lokale vermeldingen in Zeeland',
        'Meer klanten aantrekken'
      ],
      link: '/seo-voor-b2c-dienstverlening'
    },
    {
      icon: Building2,
      title: 'B2B diensten',
      subtitle: 'Consultants, groothandel, fabrikant',
      features: [
        'Thought leadership content',
        'Zakelijke zoekwoordstrategie',
        'Technische SEO',
        'B2B autoriteitsopbouw in Zeeland',
        'Specialistische content voor bedrijven',
        'Conversie naar leads voor Zeeuwse ondernemers'
      ],
      link: '/seo-voor-b2b-dienstverlening'
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
      image: '/images/seo-strategie-thumb.webp',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.',
      href: '/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
    },
    {
      image: '/blog/wordpress-snelheid.jpg',
      title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
      excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3. Waarom?',
      href: '/een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt'
    },
    {
      image: '/blog/seo-gaat-door.jpg',
      title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
      excerpt: 'Ik merk het steeds vaker in gesprekken: ondernemers die twijfelen over SEO. Ze lezen artikelen over ChatGPT...',
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
                <MapPin className="h-5 w-5" />
                <span className="text-base font-bold uppercase">Gevestigd in Middelburg</span>
              </div>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO specialist in{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">Zeeland</span>
                </span>
                : jouw bedrijf optimaal zichtbaar
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Ben je een bedrijf in Zeeland en wil je ook werk maken van je zichtbaarheid in zoekmachines als Google en Bing, en AI-tools als ChatGPT, Claude en Gemini? Da sa weh! Vizibly helpt vanuit Middelburg Zeeuwse bedrijven met alles wat bij SEO in Zeeland komt kijken: content, UX, webdesign, backlinks en nog veel meer. Alles op basis van data en grondige analyses, want wij zijn dé SEO specialist in Zeeland.
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
                src="/images/zeehonden-zeeland.webp"
                  alt="Zeehonden in Zeeland"
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
              { value: '25+', label: 'Klanten laten groeien' },
              { value: '+120%', label: 'Gemiddelde traffic groei' },
              { value: '€10M+', label: 'Omzet van klanten' }
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

      {/* Allround SEO Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                COMPLETE BEGELEIDING VOOR DUURZAME GROEI
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Allround SEO in Zeeland: da gae noga!
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Als Zeeuwse ondernemer heb je unieke uitdagingen en kansen. Je werkt in een markt waar persoonlijke verbinding en regionale bekendheid samengaan met de behoefte om te innoveren en te groeien. Jouw ambitie verdient een online aanwezigheid die daar perfect bij aansluit.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                De Zeeuwse mentaliteit, nuchter maar vastberaden, zien we terug in jouw bedrijf. Met die eigenheid kun je uitblinken in de digitale wereld, waar authenticiteit steeds belangrijker wordt. Door jouw expertise en lokale kennis te combineren met strategische online vindbaarheid, bereik je precies die klanten die op zoek zijn naar wat jij te bieden hebt.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Wij ondersteunen je hierbij door onze jarenlange ervaring met het Google algoritme te verbinden met onze kennis van de Zeeuwse markt. Zo zorgen we samen dat jouw bedrijf precies daar verschijnt waar het hoort: bovenaan in de zoekresultaten, bij de mensen die jouw diensten of producten zoeken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative border-b-4 border-black bg-accent py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              ALLES WAT JE NODIG HEBT OM OPTIMAAL ZICHTBAAR TE WORDEN IN ZEELAND
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Zoekmachine optimalisatie in Zeeland op maat
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              We starten altijd met een diepgaande analyse van je huidige online vindbaarheid. Daarbij onderzoeken we je concurrenten, van grote landelijke spelers tot kleinere lokale bedrijven in Zeeuwse steden en dorpen. Op basis daarvan creëren we een strategie op maat die naadloos aansluit bij jouw doelstellingen. Onze aanpak bestaat uit deze essentiële componenten:
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

      {/* Business Types Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Onze SEO services voor Zeeuwse ondernemers
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Of je nu een <Link href="/seo-voor-webshop" className="font-bold">webshop</Link> runt, een lokale dienstverlener bent of in de B2B-sector opereert: als SEO specialist in Zeeland hebben wij de expertise om jouw online zichtbaarheid te verbeteren. We bieden gespecialiseerde SEO-strategieën voor verschillende bedrijfstypen:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                  <type.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-xl font-black uppercase text-black lg:text-2xl">
                  {type.title}
                </h3>
                <p className="mb-6 text-base font-bold text-black/60">
                  {type.subtitle}
                </p>
                <div className="mb-6 h-1 w-full bg-black"></div>
                <ul className="mb-8 space-y-3">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                      <span className="text-base font-bold text-black/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={type.link}
                  className="inline-flex items-center border-4 border-black bg-accent px-6 py-3 text-base font-bold uppercase transition-all hover:bg-black hover:text-white"
                >
                  Ontdek meer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
              <h2 className="mb-4 text-brutalist-h1 text-white">
                Resultaten uit de praktijk
              </h2>
            </div>
            <Link
              href="/cases"
              className="inline-flex items-center border-b-2 border-accent pb-1 text-base font-bold uppercase text-accent transition-colors hover:text-white"
            >
              Bekijk hier alle SEO-cases
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

      {/* About Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative border-4 border-black bg-accent p-2" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
                <Image
                src="/images/kanaal-middelburg.webp"
                  alt="Kanaal Middelburg"
                  width={640}
                  height={427}
                  className="w-full border-4 border-black"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>

            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                MOK OK EH!
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Maak kennis met ons SEO bureau in Zeeland
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly geloven we dat elk bedrijf in Zeeland uniek is. Daarom gaan we verder dan standaardoplossingen. Als lokaal SEO bureau in Zeeland kennen we de provincie, van de kuststreken en het platteland tot de steden en bedrijventerreinen. We werken nauw samen met je team, denken strategisch mee over je positie in de regionale markt en gaan altijd een stap verder. Want wij zijn pas tevreden als jij je concurrentie voorbij streeft.
              </p>
              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  VRAAG GRATIS KENNISMAKING AAN!
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
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
              KENNIS & INZICHTEN
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              De vizie van Vizibly
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
              <Link href="/vizie">BEKIJK ALLES</Link>
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
                WAT JE MISSCHIEN NOG WIL WETEN
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Veelgestelde vragen
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
        label="MAAK KENNIS MET HET #1 SEO BUREAU IN ZEELAND"
        heading="Nog maar een stap verwijderd van succes!"
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
