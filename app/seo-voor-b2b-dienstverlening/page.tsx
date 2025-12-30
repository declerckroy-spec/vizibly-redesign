import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, Search, FileText, Link2, Code, BarChart3, Building2, Check, Zap, TrendingUp, Crown, Briefcase, Globe, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO voor B2B | Meer zakelijke leads via Google',
  description: 'Als B2B dienstverlener wil je gevonden worden door zakelijke beslissers. Vizibly helpt met SEO die kwalitatieve leads genereert.',
  openGraph: {
    title: 'SEO voor B2B | Meer zakelijke leads via Google',
    description: 'Als B2B dienstverlener wil je gevonden worden door zakelijke beslissers. Vizibly helpt met SEO die kwalitatieve leads genereert.',
    url: 'https://vizibly.nl/seo-voor-b2b-dienstverlening/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoVoorB2BPage() {
  const faqData = [
    {
      question: 'Waarom is SEO belangrijk voor B2B bedrijven?',
      answer: 'B2B beslissers doen uitgebreid online onderzoek voordat ze contact opnemen met potentiele leveranciers. Door goed vindbaar te zijn op relevante zoektermen, bereik je deze beslissers in hun orientatiefase. Bovendien bouwt thought leadership content via SEO autoriteit op in je vakgebied.'
    },
    {
      question: 'Hoe verschilt B2B SEO van B2C SEO?',
      answer: 'B2B SEO focust op langere, complexere zoektermen die aansluiten bij de zakelijke zoekintentie. De content is vaak diepgaander en meer gericht op educatie en thought leadership. Daarnaast is de conversiecyclus langer, wat vraagt om content voor verschillende fases van de customer journey.'
    },
    {
      question: 'Hoe lang duurt het voordat SEO resultaten oplevert?',
      answer: 'Voor B2B bedrijven zien we meestal de eerste resultaten na 3-6 maanden, met significante groei na 6-12 maanden. B2B zoektermen hebben vaak minder volume maar hogere waarde per lead. Het voordeel: eenmaal goed gepositioneerd, blijf je duurzaam zichtbaar voor je doelgroep.'
    },
    {
      question: 'Kunnen jullie ook helpen met internationale B2B SEO?',
      answer: 'Ja, we hebben ervaring met internationale B2B SEO. We helpen bij meertalige content, hreflang-implementatie en het opbouwen van autoriteit in verschillende markten. Of je nu naar Belgie, Duitsland of verder wilt uitbreiden, wij ondersteunen je daarbij.'
    },
    {
      question: 'Hoe meten jullie succes bij B2B SEO?',
      answer: 'We focussen op metrics die ertoe doen: rankings voor zakelijke zoektermen, organisch verkeer van je doelgroep, en vooral het aantal gekwalificeerde leads. We kijken verder dan rankings naar daadwerkelijke business impact.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-voor-b2b-dienstverlening/#service",
        "name": "SEO voor B2B Dienstverlening",
        "description": "Professionele zoekmachine optimalisatie voor B2B bedrijven en zakelijke dienstverleners",
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
        "@id": "https://vizibly.nl/seo-voor-b2b-dienstverlening/#faq",
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
      description: 'We analyseren je markt, identificeren zoektermen die zakelijke beslissers gebruiken en onderzoeken de concurrentie. Van "ERP implementatie" tot "logistiek uitbesteden". We bepalen waar de kansen liggen voor jouw B2B business.',
      link: '/seo-strategie',
      linkText: 'Meer over strategie'
    },
    {
      icon: FileText,
      title: 'SEO teksten',
      description: 'Thought leadership content die je expertise toont. Van diepgaande whitepapers tot praktische how-to artikelen. Content die niet alleen rankt, maar ook zakelijke lezers overtuigt van je autoriteit in je vakgebied.',
      link: '/seo-copy',
      linkText: 'Meer over SEO copy'
    },
    {
      icon: Link2,
      title: 'Linkbuilding',
      description: 'Autoriteit opbouwen via backlinks van vakpublicaties, brancheverenigingen en gerenommeerde B2B websites. Kwalitatieve links die je geloofwaardigheid en rankings versterken in je sector.',
      link: '/linkbuilding',
      linkText: 'Meer over linkbuilding'
    },
    {
      icon: Code,
      title: 'Webdesign & Techniek',
      description: 'Een professionele, snelle website die vertrouwen wekt bij zakelijke bezoekers. We zorgen voor optimale technische prestaties, security en een gebruikerservaring die past bij je B2B merkimago.',
      link: '/design-techniek',
      linkText: 'Meer over technische SEO'
    },
    {
      icon: Target,
      title: 'Content Hubs',
      description: 'Thematische contentstructuren die je autoriteit op specifieke onderwerpen opbouwen. Door gerelateerde content te clusteren, versterk je je topical authority en rank je beter op competitieve B2B zoektermen.',
      link: null,
      linkText: null
    },
    {
      icon: BarChart3,
      title: 'Meten & bijsturen',
      description: 'We monitoren rankings, verkeer en leadgeneratie. Maandelijks ontvang je een rapportage met concrete resultaten en inzichten in de business impact van je SEO-investering.',
      link: null,
      linkText: null
    }
  ];

  const specialisaties = [
    { icon: Briefcase, title: 'Consultants', description: 'Adviesbureaus en consultancy' },
    { icon: Building2, title: 'IT & Software', description: 'Tech bedrijven en SaaS' },
    { icon: Globe, title: 'Groothandel', description: 'B2B handel en distributie' },
    { icon: Target, title: 'Industrie', description: 'Productie en manufacturing' }
  ];

  const pricingPackages = [
    {
      icon: Zap,
      name: 'Basis',
      price: '€500',
      period: '/maand',
      description: 'Voor B2B bedrijven die starten met SEO',
      features: [
        'Technische SEO audit & fixes',
        'Keyword research voor jouw sector',
        'On-page optimalisatie (5 paginas)',
        'Concurrentieanalyse',
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
      description: 'Voor B2B bedrijven met serieuze groeiambities',
      features: [
        'Alles uit Basis +',
        'Thought leadership content',
        'Maandelijks nieuwe content',
        'Linkbuilding (5 links/maand)',
        'Content hub strategie',
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
      description: 'Voor B2B marktleiders die willen domineren',
      features: [
        'Alles uit Standaard +',
        'Intensieve contentproductie',
        'Linkbuilding (10+ links/maand)',
        'Internationale SEO support',
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
      image: '/cases/webshop-ventilatie.webp',
      title: '+145% omzet uit organisch verkeer voor technische webshop',
      href: '/145-omzet-uit-organisch-verkeer-voor-technische-webshop'
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
      image: '/images/seo-strategie-thumb.webp',
      title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
      excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.',
      href: '/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google'
    },
    {
      image: '/blog/content-clusters.jpg',
      title: 'Content clusters: topic authority opbouwen',
      excerpt: 'Hoe je met thematische contentstructuren beter rankt op competitieve zoektermen.',
      href: '/content-clusters-topic-authority-opbouwen'
    },
    {
      image: '/blog/seo-uitbesteden.jpg',
      title: 'SEO uitbesteden of zelf doen? Alles wat je in 2025 moet weten',
      excerpt: 'Wanneer loont het om SEO uit te besteden en wanneer kun je het beter zelf doen?',
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
      <section className="relative overflow-hidden bg-[#fafaf8] pt-36 pb-24 lg:pt-44 lg:pb-36">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 border-4 border-black bg-accent px-4 py-2">
                <Building2 className="h-5 w-5" />
                <span className="text-base font-bold uppercase">B2B SEO</span>
              </div>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO voor{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">B2B</span>
                </span>
                : bereik zakelijke beslissers
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                B2B beslissers doen grondig online onderzoek voordat ze leveranciers benaderen. Ze zoeken naar oplossingen, vergelijken aanbieders en oriënteren zich op mogelijkheden. Vizibly helpt B2B dienstverleners om gevonden te worden tijdens dit oriëntatieproces, en om met thought leadership content te overtuigen.
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
                src="/images/b2b-seo.webp"
                  alt="SEO voor B2B dienstverlening"
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
              { value: '25+', label: 'B2B klanten geholpen' },
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
              VOOR ALLE B2B SECTOREN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              SEO die past bij jouw business
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
      <section className="relative border-b-4 border-black bg-accent py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                WAAROM SEO VOOR B2B?
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Bereik beslissers in hun onderzoeksfase
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>
            </div>
            <div className="space-y-6">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Het B2B koopproces is fundamenteel anders dan B2C. Beslissers nemen de tijd, doen uitgebreid onderzoek en betrekken vaak meerdere stakeholders. Gemiddeld 70% van dit onderzoek gebeurt online, voordat er contact is met een leverancier.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Door goed vindbaar te zijn op relevante zoektermen, bereik je potentiele klanten in deze cruciale orientatiefase. Je bouwt al vertrouwen op voordat het eerste gesprek plaatsvindt. En met thought leadership content positioneer je jezelf als expert in je vakgebied.
              </p>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                B2B leads via SEO zijn vaak van hogere kwaliteit dan leads via advertenties. Mensen die actief zoeken naar oplossingen hebben een concrete behoefte. Dat maakt ze waardevoller in de salesfunnel.
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
              ONZE B2B SEO DIENSTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Complete SEO voor B2B bedrijven
            </h2>
            <p className="max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Van thought leadership content tot technische optimalisatie en linkbuilding. We pakken alles aan wat nodig is om jouw B2B bedrijf online zichtbaar te maken.
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
      <section className="relative border-b-4 border-black bg-accent py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              TRANSPARANTE PRIJZEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Pakketten voor B2B bedrijven
            </h2>
            <p className="mx-auto max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Kies het pakket dat past bij jouw ambities. Alle pakketten zijn flexibel en maandelijks opzegbaar.
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
                We begrijpen B2B marketing
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Bij Vizibly werken we met B2B bedrijven die serieus zijn over het genereren van kwalitatieve leads. We begrijpen de langere verkoopcyclus, de complexere besluitvorming en de behoefte aan thought leadership.
              </p>
              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                We focussen op wat telt: meer gekwalificeerde leads van beslissers die actief op zoek zijn naar jouw diensten. Geen vanity metrics, maar business impact.
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
              B2B SEO KENNIS
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              Artikelen voor B2B marketeers
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
                Vragen over B2B SEO?
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
        label="KLAAR VOOR MEER B2B LEADS?"
        heading="Laat je B2B business groeien met SEO"
      />

<Footer />
    </>
  );
}
