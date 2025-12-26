import { Navigation } from '@/components/navigation';
import { StatsOnly } from '@/components/stats-only';
import { ClientsCarouselStandalone } from '@/components/clients-carousel-standalone';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTAWithImage } from '@/components/cta-with-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Search, FileText, Link2, Code, MapPin, Megaphone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const faqData = [
    {
      question: 'Wat maakt Vizibly anders dan andere SEO-bureaus?',
      answer: 'Bij Vizibly werken we met een 360-graden analyse en een maatwerk strategie voor elk bedrijf. We combineren technische expertise met vlijmscherpe content en maken beslissingen op basis van gedegen data-onderzoek. Bovendien bieden we volledige transparantie over onze werkzaamheden en resultaten.'
    },
    {
      question: 'Hoelang duurt het voordat ik resultaten zie van SEO?',
      answer: 'SEO is een doorlopend proces waarbij resultaten tijd kosten. Hoewel eerste verbeteringen vaak binnen enkele weken zichtbaar zijn, duurt het meestal 3-6 maanden voordat significante resultaten merkbaar worden. We houden je gedurende het hele traject op de hoogte van de voortgang met duidelijke rapportages.'
    },
    {
      question: 'Wat kost een SEO-traject bij Vizibly?',
      answer: 'We geloven in transparante prijzen die passen bij jouw specifieke situatie. Na een grondige analyse van je website stellen we een maatwerk pakket samen dat aansluit bij jouw doelen en budget. We werken met duidelijke maandelijkse pakketten, waarbij je precies weet waar je aan toe bent.'
    },
    {
      question: 'In welke branches is Vizibly gespecialiseerd?',
      answer: 'Vizibly heeft uitgebreide ervaring in diverse branches, waaronder de zorg, e-commerce, bouwbedrijven, installatiebedrijven, makelaars, consultants en boekhoudkantoren. Door onze ervaring in deze specifieke sectoren kunnen we gerichte SEO-strategieën ontwikkelen die aansluiten bij de unieke uitdagingen en kansen van jouw branche.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://vizibly.nl/#organization",
        "name": "Vizibly",
        "url": "https://vizibly.nl",
        "logo": {
          "@type": "ImageObject",
          "url": "https://vizibly.nl/logo.png",
          "contentUrl": "/logo.png"
        },
        "description": "SEO bureau gespecialiseerd in zoekmachine optimalisatie voor meer omzet uit Google",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Zeeland",
          "addressCountry": "NL"
        },
        "email": "info@vizibly.nl",
        "founder": {
          "@type": "Person",
          "name": "Roy de Clerck"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "25",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": []
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://vizibly.nl/#service",
        "name": "Vizibly SEO Diensten",
        "provider": {
          "@id": "https://vizibly.nl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nederland"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "SEO Diensten",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Strategie",
                "description": "360-graden analyse en maatwerk SEO strategie"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO Copywriting",
                "description": "Teksten die zowel Google als bezoekers overtuigen"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Linkbuilding",
                "description": "Strategische linkbuilding van autoritaire websites"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vizibly.nl/#website",
        "url": "https://vizibly.nl",
        "name": "Vizibly - SEO Bureau",
        "publisher": {
          "@id": "https://vizibly.nl/#organization"
        },
        "inLanguage": "nl-NL"
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/#faq",
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
      <section className="relative overflow-hidden bg-white pt-24 pb-40 lg:pt-32 lg:pb-48">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-6xl">
            {/* Large ASCII-style decoration */}
            <div className="mb-8 font-mono text-xs text-black/20 hidden lg:block animate-float">
              ████████████████████████████████████████████████████████
            </div>

            <Badge variant="secondary" className="mb-12 border-4 border-black px-4 py-2 text-sm font-bold sm:px-8 sm:py-3 sm:text-lg lg:text-xl">
              STOP MET VERSTOPPERTJE SPELEN VOOR JE KLANTEN
            </Badge>

            <h1 className="mb-12 text-brutalist-hero leading-none">
              Terwijl jij deze zin leest, klikt iemand op{' '}
              <span className="relative inline-block animate-glitch">
                <span className="absolute -inset-1 bg-accent"></span>
                <span className="relative">je concurrent</span>
              </span>
            </h1>

            <div className="mb-16 border-l-8 border-black pl-8">
              <p className="text-xl font-bold uppercase tracking-tight lg:text-2xl">
                Klaar om de rollen<br />om te draaien?
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  NEEM CONTACT OP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-5">
                <Link href="/over-ons">OVER VIZIBLY</Link>
              </Button>
            </div>

            {/* Bottom decoration */}
            <div className="mt-16 font-mono text-xs text-black/20 hidden lg:block animate-float">
              ████████████████████████████████████████████████████████
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter - Direct na hero voor impact */}
      <StatsOnly />

      {/* Main Intro Section - Generous spacing voor storytelling */}
      <section className="relative border-b-4 border-black bg-black py-28 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <h2 className="mb-8 text-brutalist-h1 text-white">
              SEO die zorgt dat ze jou eindelijk goed vinden
            </h2>
            <div className="h-1 w-32 bg-accent"></div>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative aspect-square overflow-hidden border-4 border-accent">
              <Image
                src="/team/roy.webp"
                alt="Roy de Clerck"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-base font-bold lg:text-lg xl:text-xl">
                Als ondernemer wil je resultaat. Je wilt meer klanten, leads en omzet. Terwijl je
                concurrenten al op pagina 1 in Google staan, is jouw website nog onvindbaar.
              </p>
              <p className="mb-10 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Vizibly zorgt dat potentiële klanten jóu vinden, niet je concurrent.
              </p>

              <div className="mb-10 grid gap-4">
                {[
                  '360-graden analyse van waar je kansen liggen',
                  'Data-driven verbeterpunten uit je analytics',
                  'Op maat gemaakt groeiplan voor jouw situatie',
                  'Teksten die Google én bezoekers overtuigen',
                  'Technische optimalisatie voor razendsnelle laadtijd',
                  'Strategische linkbuilding in jouw branche',
                  'Google Ads voor direct verkeer en conversies'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 border-l-4 border-accent pl-4">
                    <span className="text-base font-bold text-white lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="w-fit bg-accent text-black border-accent hover:bg-white">
                <Link href="/contact">NEEM CONTACT OP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Extra padding voor emphasis */}
      <section className="relative z-10 border-b-4 border-black bg-white py-32 lg:py-40 -mb-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black lg:text-lg xl:text-xl">
              VOOR ONDERNEMERS DIE KLAAR ZIJN MET ZOEKPAGINA 2
            </p>
            <h2 className="text-brutalist-h1 text-black">
              Zo kom ook jij bovenaan in Google
            </h2>
          </div>

          {/* Asymmetrische grid layout voor dynamisch effect */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {[
              {
                icon: Search,
                title: 'Analyse & Strategie',
                description: 'Met een 360-graden analyse brengen we elke zwakke plek in je website in kaart - van trage laadtijden tot gemiste zoekwoorden.',
                href: '/seo-strategie',
                span: 'md:col-span-6' // Large
              },
              {
                icon: FileText,
                title: 'SEO teksten',
                description: 'Teksten die zowel Google als bezoekers overtuigen. We schrijven niet voor algoritmes, maar voor echte mensen die zoeken naar jouw oplossing.',
                href: '/seo-copy',
                span: 'md:col-span-4' // Normal
              },
              {
                icon: Link2,
                title: 'Linkbuilding',
                description: 'We bouwen alleen links vanaf websites met echte autoriteit in jouw branche. Geen massa-links, maar strategische verbindingen.',
                href: '/linkbuilding',
                span: 'md:col-span-4' // Normal
              },
              {
                icon: Code,
                title: 'Webdesign & Techniek',
                description: 'Een trage website kost je klanten. We maken je website niet alleen mooi, maar vooral snel en gebruiksvriendelijk.',
                href: '/design-techniek',
                span: 'md:col-span-6' // Large
              },
              {
                icon: MapPin,
                title: 'Local SEO',
                description: 'Ben je lokaal actief? Dan moet je vindbaar zijn wanneer mensen in de buurt zoeken. We zorgen dat je Google Business Profiel perfect op orde is.',
                href: '/local-seo',
                span: 'md:col-span-5' // Medium
              },
              {
                icon: Megaphone,
                title: 'Google Ads',
                description: 'Terwijl je organische resultaten groeien, genereren we direct verkeer en leads via strategische Google Ads campagnes.',
                href: '/google-ads-sea',
                span: 'md:col-span-5' // Medium
              }
            ].map((service, index) => (
              <Link key={index} href={service.href} className={`block ${service.span}`}>
                <Card className="group relative h-full overflow-hidden border-4 border-black bg-white text-black transition-all hover:translate-x-1 hover:translate-y-1 cursor-pointer" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
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

      {/* Process Section - Variërende spacing voor dynamiek */}
      <section className="relative z-0 border-b-4 border-black bg-black py-32 text-white lg:py-48 pt-44">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <h2 className="mb-6 text-brutalist-h1 text-white">
              Continu verbeteren,<br />continu resultaat
            </h2>
            <p className="text-base font-bold uppercase tracking-wider text-accent lg:text-lg xl:text-xl">
              SEO IS GEEN SPRINT MAAR EEN MARATHON DIE JE WINT
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center">
              <p className="mb-12 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                SEO is net als topsport: een cyclus van uitvoeren, meten, testen en verbeteren.
                Wat vandaag werkt, kan morgen achterhaald zijn.
              </p>

              <div className="grid gap-8">
                {[
                  { number: '01', text: 'We voeren uit op basis van bewezen strategieën' },
                  { number: '02', text: 'We meten elke verandering met nauwkeurige data' },
                  { number: '03', text: 'We testen nieuwe mogelijkheden om je positie te versterken' },
                  { number: '04', text: 'We verbeteren waar nodig om je groeilijn stijgend te houden' }
                ].map((step) => (
                  <div key={step.number} className="border-l-4 border-accent pl-6">
                    <div className="mb-2 text-6xl font-bold text-accent/30">
                      {step.number}
                    </div>
                    <p className="text-base font-bold text-white lg:text-lg xl:text-xl">{step.text}</p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-12 w-fit bg-accent text-black border-accent hover:bg-white">
                <Link href="/full-service-seo">MEER OVER ONZE AANPAK</Link>
              </Button>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-accent">
              <Image
                src="/team/vizibly-sports.webp"
                alt="Vizibly Sports"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section - Standard spacing */}
      <section className="border-b-4 border-black bg-white py-24 lg:py-36">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Resultaten uit<br />de praktijk
            </h2>
            <Link href="/cases" className="inline-flex items-center border-b-4 border-black pb-2 text-lg font-bold uppercase hover:bg-black hover:text-white transition-colors px-3 py-1">
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
                <Card className="overflow-hidden border-4 border-black transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #000000' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
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

      {/* Klanten Carousel - Social proof na cases */}
      <ClientsCarouselStandalone />

      {/* Testimonials - Reviews van klanten */}
      <TestimonialsSection />

      {/* CTA met foto - Direct na social proof voor conversie */}
      <CTAWithImage />

      {/* Blog Articles Section - Compact spacing */}
      <section className="relative border-b-4 border-black bg-black py-20 text-white lg:py-28">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg xl:text-xl">
              KENNIS & INZICHTEN
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              De vizie van Vizibly
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
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
            ].map((article, index) => (
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
                    <CardTitle className="line-clamp-2 text-2xl font-black uppercase leading-tight">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <CardDescription className="line-clamp-3 text-base font-bold text-black/70 lg:text-lg">
                      {article.excerpt}
                    </CardDescription>
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
      <section className="border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20">
            <h2 className="mb-6 text-brutalist-h2 text-black">
              Veelgestelde vragen
            </h2>
            <p className="text-base font-bold uppercase text-black lg:text-lg xl:text-xl">
              WAT JE MISSCHIEN NOG WIL WETEN
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-4 border-black bg-white px-8 py-2 hover:border-accent transition-colors last:border-b-4">
                <AccordionTrigger className="text-left text-base font-bold uppercase hover:no-underline transition-colors lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-black/80 border-t-2 border-black/10 pt-4 mt-4 lg:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
        {/* Subtle diagonal pattern */}
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
