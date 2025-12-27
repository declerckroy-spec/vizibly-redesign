import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Search, FileText, Link2, Code, BarChart3, ShoppingCart, Users, Building2, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO specialist Middelburg | #1 lokaal SEO bureau',
  description: 'Bedrijf in Middelburg en op zoek naar de beste SEO specialist van de stad? Plan dan nu jouw gratis 15 minuten gesprek.',
  openGraph: {
    title: 'SEO specialist Middelburg | #1 lokaal SEO bureau',
    description: 'Bedrijf in Middelburg en op zoek naar de beste SEO specialist van de stad? Plan dan nu jouw gratis 15 minuten gesprek.',
    url: 'https://vizibly.nl/seo-specialist-middelburg/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoSpecialistMiddelburgPage() {
  const faqData = [
    {
      question: 'Waarom is lokale SEO voor Middelburg belangrijk?',
      answer: (
        <>
          Lokale SEO zorgt ervoor dat je gevonden wordt door potentiële klanten in jouw directe omgeving. Met ruim 50.000 inwoners in Middelburg en nog veel meer in omliggende plaatsen, is er een grote lokale markt te bereiken. Uit onderzoek blijkt dat 46% van alle Google-zoekopdrachten lokaal gericht is.
        </>
      )
    },
    {
      question: 'Werken jullie samen met bedrijven in heel Zeeland of alleen in Middelburg?',
      answer: (
        <>
          Als <Link href="/seo-specialist-zeeland" className="underline hover:text-accent transition-colors">SEO bureau in Zeeland</Link> werken we met bedrijven uit heel Zeeland, van Vlissingen tot Schouwen-Duiveland en van Goes tot Terneuzen. Door onze lokale kennis kunnen we zoekmachine optimalisatie bieden die perfect aansluit bij de specifieke kenmerken van elke Zeeuwse gemeente.
        </>
      )
    },
    {
      question: 'Hoe lang duurt het voordat ik resultaat zie met SEO in Middelburg?',
      answer: 'SEO is een proces dat tijd nodig heeft. Meestal zie je de eerste verbeteringen na ongeveer 2-3 maanden, maar significante resultaten worden vaak na 4-6 maanden zichtbaar. Dit hangt af van factoren zoals de concurrentie in jouw branche in Middelburg en de huidige staat van je website.'
    },
    {
      question: 'Wat onderscheidt jullie van andere SEO specialisten in Middelburg?',
      answer: 'Bij Vizibly werken we volledig transparant, zonder langdurige contracten en met een persoonlijke aanpak die specifiek is afgestemd op de lokale markt van Middelburg. We combineren technische expertise met strategisch inzicht en creëren content die niet alleen goed scoort in Google, maar ook echt aanspreekt bij jouw lokale doelgroep.'
    },
    {
      question: 'Kan ik de samenwerking makkelijk opzeggen als ik niet tevreden ben?',
      answer: 'Absoluut. We geloven in de kwaliteit van ons werk en binden je daarom niet aan langlopende contracten. Je kunt de samenwerking maandelijks opzeggen. In de praktijk merken we echter dat klanten graag bij ons blijven vanwege de goede resultaten en prettige samenwerking.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://vizibly.nl/#organization",
        "name": "Vizibly - SEO Specialist Middelburg",
        "description": "SEO specialist gevestigd in Middelburg, gespecialiseerd in lokale zoekmachine optimalisatie",
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
          "@type": "City",
          "name": "Middelburg"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo-specialist-middelburg/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Waarom is lokale SEO voor Middelburg belangrijk?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lokale SEO zorgt ervoor dat je gevonden wordt door potentiële klanten in jouw directe omgeving. Met ruim 50.000 inwoners in Middelburg en nog veel meer in omliggende plaatsen, is er een grote lokale markt te bereiken. Uit onderzoek blijkt dat 46% van alle Google-zoekopdrachten lokaal gericht is."
            }
          },
          {
            "@type": "Question",
            "name": "Werken jullie samen met bedrijven in heel Zeeland of alleen in Middelburg?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Als SEO bureau in Zeeland werken we met bedrijven uit heel Zeeland, van Vlissingen tot Schouwen-Duiveland en van Goes tot Terneuzen. Door onze lokale kennis kunnen we zoekmachine optimalisatie bieden die perfect aansluit bij de specifieke kenmerken van elke Zeeuwse gemeente."
            }
          },
          {
            "@type": "Question",
            "name": "Hoe lang duurt het voordat ik resultaat zie met SEO in Middelburg?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is een proces dat tijd nodig heeft. Meestal zie je de eerste verbeteringen na ongeveer 2-3 maanden, maar significante resultaten worden vaak na 4-6 maanden zichtbaar. Dit hangt af van factoren zoals de concurrentie in jouw branche in Middelburg en de huidige staat van je website."
            }
          },
          {
            "@type": "Question",
            "name": "Wat onderscheidt jullie van andere SEO specialisten in Middelburg?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bij Vizibly werken we volledig transparant, zonder langdurige contracten en met een persoonlijke aanpak die specifiek is afgestemd op de lokale markt van Middelburg. We combineren technische expertise met strategisch inzicht en creëren content die niet alleen goed scoort in Google, maar ook echt aanspreekt bij jouw lokale doelgroep."
            }
          },
          {
            "@type": "Question",
            "name": "Kan ik de samenwerking makkelijk opzeggen als ik niet tevreden ben?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absoluut. We geloven in de kwaliteit van ons werk en binden je daarom niet aan langlopende contracten. Je kunt de samenwerking maandelijks opzeggen. In de praktijk merken we echter dat klanten graag bij ons blijven vanwege de goede resultaten en prettige samenwerking."
            }
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: Search,
      title: 'Analyse & Strategie',
      description: 'We starten met een grondige analyse van je website en de lokale markt in Middelburg. We onderzoeken welke zoektermen potentiële klanten gebruiken en hoe we je website daarop kunnen optimaliseren. Op basis hiervan maken we een strategisch plan dat perfect aansluit bij jouw doelen.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie ontwikkelen'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Met SEO copywriting zorgen we voor content die lokale relevantie heeft voor Middelburg en ook echt converteert. We verwerken lokale landmarks, evenementen (zoals Middelburg Volkoren) en andere herkenbare elementen in je teksten, zodat ze goed scoren in Google.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copywriting'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'We bouwen aan een sterk en natuurlijk linkprofiel dat jouw lokale autoriteit in Middelburg (of landelijk) verhoogt. Door strategische lokale linkbuilding vanaf relevante Zeeuwse websites en organisaties stijg je duurzaam in de zoekresultaten en versterk je je positie.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Een technisch sterke website is de basis voor succes. Onze web development in Middelburg zorgt dat je site niet alleen mooi is, maar ook technisch perfect presteert en aansluit bij de verwachtingen van Google. Ook voor mobiele gebruikers, want steeds meer lokale zoekopdrachten worden via smartphone gedaan.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Als ondernemer in Middelburg is lokale vindbaarheid cruciaal. We optimaliseren je Google Business Profiel, zorgen voor correcte vermeldingen op Google Maps Middelburg en maximaliseren je zichtbaarheid in de lokale zoekresultaten. Zo vinden potentiële klanten je gemakkelijk.',
      link: '/local-seo',
      linkText: 'Meer over local SEO'
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'Met geavanceerde tools meten we continu hoe je presteert in de lokale zoekresultaten en sturen we bij waar nodig. We monitoren je positie voor belangrijke zoektermen en houden ontwikkelingen bij lokale concurrenten in de gaten. Zo blijf je de concurrentie in Middelburg voor.',
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
        'Geo-targeting voor Middelburg en omstreken',
        'Recensie-management',
        'Lokale vermeldingen in Zeeland',
        'Meer klanten krijgen in Middelburg'
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
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
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
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">Middelburg</span>
                </span>
                : word ook optimaal zichtbaar
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Ben je een bedrijf in Middelburg en wil je structureel beter scoren in Google, Bing en AI-tools als ChatGPT en Claude? Hosternokke, dan zit je hier goed! Vizibly is het enige echte SEO bureau in Middelburg. Wij helpen je van A tot Z met beter zichtbaar worden in zoekmachines en LLM's: content, backlinks, structured data, het local pack en nog veel meer. Altijd op basis van een goed doordachte strategie op maat van jouw bedrijf.
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
                src="/images/middelburg-stadhuis.webp"
                  alt="Middelburg stadhuis"
                  width={640}
                  height={494}
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
      <section className="relative border-y-4 border-black bg-black py-16 text-white lg:py-20">
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

      {/* #1 SEO Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                COMPLETE ONDERSTEUNING VOOR MAXIMALE GROEI
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                #1 SEO voor Middelburg: hosternokke!
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Als SEO specialist in Middelburg weten we precies wat werkt voor lokale ondernemers. Met meer dan 7 jaar ervaring in zoekmachineoptimalisatie hebben we tientallen bedrijven naar de top van Google geholpen.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Onze unieke aanpak combineert diepgaande technische kennis met creatieve content-strategieën en gerichte linkbuilding. Wij kennen niet alleen alle ins en outs van het Google algoritme, maar begrijpen ook de lokale markt als geen ander.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Daardoor kunnen we jouw bedrijf precies positioneren waar het thuishoort: bovenaan in de zoekresultaten, precies waar jouw klanten zoeken.
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
              ALLES WAT JE NODIG HEBT OM OPTIMAAL ZICHTBAAR TE WORDEN IN MIDDELBURG
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Zoekmachine optimalisatie in Middelburg op maat
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              We beginnen altijd met een grondige analyse van je huidige online zichtbaarheid. Hierbij kijken we naar concurrenten, van grote landelijke spelers tot kleinere lokale bedrijven in de bekende winkelstraten zoals de Lange Delft. Op basis daarvan stellen we een strategie op maat samen die perfect aansluit bij jouw doelen. Onze aanpak bestaat uit verschillende kernonderdelen:
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
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Onze SEO specialisaties voor Middelburg
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Of je nu een webshop runt, een lokale dienstverlener bent of in de B2B-sector opereert - als SEO specialist in Middelburg hebben wij de expertise om jouw online zichtbaarheid te verbeteren. We bieden gespecialiseerde SEO-strategieën voor verschillende bedrijfstypen:
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
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
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
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
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
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                LAAT JE CONCURRENTIE IN MIDDELBURG ACHTER JE
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Maak kennis met ons SEO bureau in Middelburg
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly geloven we dat elk bedrijf in Middelburg uniek is. Daarom kijken we verder dan standaardoplossingen. Als lokaal geworteld SEO bureau in Middelburg kennen we de stad, van de monumentale binnenstad tot de nieuwere wijken en bedrijventerreinen. We werken samen met je team, denken strategisch mee over je positie in de lokale markt en gaan net dat stapje verder. Want wij zijn pas tevreden als jij je concurrentie voorbij streeft.
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
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
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
            <Button asChild size="lg" className="bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base">
              <Link href="/vizie">BEKIJK ALLES</Link>
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
        label="MAAK KENNIS MET HET #1 SEO BUREAU IN MIDDELBURG"
        heading="Nog maar een stap verwijderd van succes!"
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
