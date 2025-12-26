import { Navigation } from '@/components/navigation';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, FileText, Link2, Code, BarChart3, HardHat, Check, MapPin, Zap, TrendingUp, Crown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO voor bouwbedrijven | Meer opdrachten via Google',
  description: 'Wil je als bouwbedrijf of aannemer meer gevonden worden door opdrachtgevers? Vizibly helpt met SEO die leidt tot concrete offerteaanvragen.',
  openGraph: {
    title: 'SEO voor bouwbedrijven | Meer opdrachten via Google',
    description: 'Wil je als bouwbedrijf of aannemer meer gevonden worden door opdrachtgevers? Vizibly helpt met SEO die leidt tot concrete offerteaanvragen.',
    url: 'https://vizibly.nl/seo-voor-bouwbedrijven/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoVoorBouwbedrijvenPage() {
  const faqData = [
    {
      question: 'Hoe lang duurt het voordat SEO resultaten oplevert voor mijn bouwbedrijf?',
      answer: 'SEO is een langetermijnstrategie. Meestal zie je de eerste verbeteringen na 3-6 maanden, afhankelijk van de concurrentie in jouw regio en specialisatie. Het voordeel voor bouwbedrijven is dat de lokale concurrentie online vaak beperkt is, waardoor snellere resultaten mogelijk zijn. Eenmaal goed gepositioneerd, blijf je duurzaam profiteren.'
    },
    {
      question: 'Wat kost SEO voor een bouwbedrijf?',
      answer: 'Onze pakketten starten vanaf €500 per maand voor basis SEO, €1000 voor het standaard pakket met linkbuilding, en €2000 voor premium met intensieve begeleiding. De exacte investering hangt af van jouw ambities, werkgebied en concurrentie. We maken altijd eerst een analyse om een passend voorstel te doen.'
    },
    {
      question: 'Waarom is lokale SEO belangrijk voor bouwbedrijven?',
      answer: 'De meeste opdrachtgevers zoeken naar aannemers en bouwbedrijven in hun eigen regio. Zoektermen als "aannemer [plaatsnaam]" of "verbouwing [regio]" hebben hoge commerciële waarde. Door te focussen op lokale SEO, inclusief Google Mijn Bedrijf optimalisatie, verschijn je precies waar potentiële klanten zoeken.'
    },
    {
      question: 'Kunnen jullie ook helpen met de website zelf?',
      answer: 'Ja, we bieden ook webdesign en technische optimalisatie aan. Veel bouwbedrijven hebben een verouderde website die niet mobiel-vriendelijk is of traag laadt. Dit is niet alleen slecht voor SEO, maar ook voor conversie. We kunnen je website moderniseren of een geheel nieuwe bouwen die perfect is geoptimaliseerd.'
    },
    {
      question: 'Werkt SEO ook voor gespecialiseerde bouwbedrijven?',
      answer: 'Absoluut, vaak zelfs beter. Gespecialiseerde bouwbedrijven zoals dakdekkers, betonboorers, of installatietechniekers profiteren van minder concurrentie op specifieke zoektermen. We hebben ervaring met diverse specialisaties en weten welke strategie werkt voor jouw niche.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-voor-bouwbedrijven/#service",
        "name": "SEO voor Bouwbedrijven",
        "description": "Professionele zoekmachine optimalisatie specifiek voor bouwbedrijven en aannemers",
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
        "@id": "https://vizibly.nl/seo-voor-bouwbedrijven/#faq",
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
      description: 'We starten met een grondige analyse van je huidige online zichtbaarheid, je concurrenten in de bouwsector en de zoektermen die jouw ideale opdrachtgevers gebruiken. Op basis hiervan ontwikkelen we een concrete SEO-strategie die aansluit bij jouw specialisaties en werkgebied.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Teksten die scoren én overtuigen. Van dienstpagina\'s voor nieuwbouw en verbouw tot projectbeschrijvingen en blogartikelen over bouwtrends. Content die jouw expertise toont en potentiële opdrachtgevers aanzet tot contact opnemen.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copy'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'Autoriteit opbouwen via relevante backlinks van bouwgerelateerde websites, brancheverenigingen en lokale bedrijvengidsen. We focussen op kwaliteit boven kwantiteit, met links die daadwerkelijk bijdragen aan je rankings en geloofwaardigheid.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Een snelle, mobiel-vriendelijke website is essentieel. Veel potentiële klanten zoeken vanaf hun telefoon naar aannemers. We zorgen voor optimale laadtijd, correcte indexering en een gebruiksvriendelijke ervaring die bezoekers omzet in aanvragen.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: MapPin,
      title: 'Lokale SEO',
      description: 'Voor bouwbedrijven is lokale vindbaarheid cruciaal. We optimaliseren je Google Mijn Bedrijf profiel, zorgen voor consistente NAW-gegevens en bouwen aan je lokale autoriteit. Zo verschijn je in de kaartresultaten wanneer mensen zoeken naar aannemers in jouw werkgebied.',
      link: '/local-seo',
      linkText: 'Meer over local SEO'
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'We monitoren continu je rankings, verkeer en conversies. Maandelijks ontvang je een heldere rapportage met concrete resultaten: hoeveel bezoekers, hoeveel aanvragen, welke zoektermen presteren. Op basis hiervan sturen we de strategie bij.',
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
      description: 'Voor bouwbedrijven die starten met online zichtbaarheid',
      features: [
        'Technische SEO audit & fixes',
        'Google Mijn Bedrijf optimalisatie',
        'Keyword research voor jouw specialisatie',
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
      description: 'Voor groeiende bouwbedrijven met serieuze ambities',
      features: [
        'Alles uit Basis +',
        'Uitgebreide contentstrategie',
        'Maandelijks nieuwe content',
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
      description: 'Voor bouwbedrijven die willen domineren in hun regio',
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
      image: '/cases/dakdekker-hero.png',
      title: 'SEO succesverhaal: dakdekker in Haarlem naar #1 in Google',
      href: '/seo-succesverhaal-dakdekker-in-haarlem'
    },
    {
      image: '/cases/online-bloemenwinkel.webp',
      title: 'Online bloemist groeit van 1.700 naar 10.000 bezoekers p/m: +1500% omzet',
      href: '/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet'
    },
    {
      image: '/cases/portretten-kleur-tak.webp',
      title: 'SEO voor een makelaarskantoor: steady op #1 voor de belangrijkste zoektermen',
      href: '/klantinterview-seo-voor-een-makelaarskantoor'
    }
  ];

  const blogArticles = [
    {
      image: '/blog/seo-dakdekkers.jpg',
      title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
      excerpt: 'Ontdek hoe dakdekkers en aannemers meer opdrachten binnenhalen via effectieve SEO.',
      href: '/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google'
    },
    {
      image: '/images/seo-strategie-thumb.webp',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.',
      href: '/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
    },
    {
      image: '/blog/seo-uitbesteden.jpg',
      title: 'SEO uitbesteden of zelf doen? Alles wat je in 2025 moet weten',
      excerpt: 'Wanneer loont het om SEO uit te besteden en wanneer kun je het beter zelf doen? We leggen het uit.',
      href: '/seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten'
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
                <HardHat className="h-5 w-5" />
                <span className="text-base font-bold uppercase">Bouw & Aannemers</span>
              </div>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO voor{' '}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">bouwbedrijven</span>
                </span>
                : meer opdrachten
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Als bouwbedrijf of aannemer wil je gevonden worden door mensen die actief op zoek zijn naar jouw diensten. Of het nu gaat om nieuwbouw, verbouwingen of specifieke specialisaties: de meeste opdrachtgevers beginnen hun zoektocht online. Vizibly helpt bouwbedrijven om beter zichtbaar te worden in Google en om te zetten in concrete offerteaanvragen.
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
                  src="/images/bouwbedrijf-seo.webp"
                  alt="SEO voor bouwbedrijven"
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
              { value: '25+', label: 'Bouwbedrijven geholpen' },
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
                WAAROM SEO VOOR BOUWBEDRIJVEN?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Van online zoeker naar opdrachtgever
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                De bouwsector is traditioneel sterk afhankelijk van mond-tot-mondreclame en bestaande netwerken. Maar ook particulieren en bedrijven die zoeken naar een aannemer beginnen steeds vaker online. "Aannemer Amsterdam", "verbouwing offerte" of "nieuwbouw woning laten bouwen" zijn zoektermen met hoge commerciële waarde.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Het mooie van SEO voor bouwbedrijven is dat je bereikt wordt door mensen met actieve vraag. Ze hebben een project in gedachten en zoeken een betrouwbare partij. Dit is fundamenteel anders dan adverteren: je target mensen die al in de markt zijn.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bovendien is de online concurrentie in de bouw vaak beperkt. Veel aannemers hebben een verouderde website of doen nauwelijks aan SEO. Dit biedt kansen voor voorlopers die wel investeren in online zichtbaarheid.
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
              ONZE SEO DIENSTEN VOOR DE BOUW
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Complete SEO voor bouwbedrijven
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Van technische optimalisatie tot contentcreatie en lokale SEO. We pakken elk aspect aan dat nodig is om jouw bouwbedrijf beter vindbaar te maken.
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
              Pakketten voor bouwbedrijven
            </h2>
            <p className="mx-auto max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Kies het pakket dat past bij de omvang van je bouwbedrijf en je ambities. Alle pakketten zijn flexibel en maandelijks opzegbaar.
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
                BOUW SUCCESVERHALEN
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
                WAAROM VIZIBLY?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                We begrijpen de bouwsector
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly werken we al jaren met aannemers, dakdekkers, installatietechnici en andere bouwprofessionals. We begrijpen dat jouw business draait om vakmanschap en vertrouwen, en dat vertalen we naar je online aanwezigheid.
              </p>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                We focussen op wat telt: concrete offerteaanvragen van serieuze opdrachtgevers. Geen vanity metrics, maar meetbare resultaten die leiden tot groei van je bedrijf.
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
              BOUW SEO KENNIS
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              Artikelen voor bouwprofessionals
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
                Vragen over SEO voor de bouw?
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
              KLAAR VOOR MEER OPDRACHTEN?
            </p>

            <h2 className="mb-12 text-brutalist-h1 text-black">
              Laat je bouwbedrijf groeien met SEO
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
