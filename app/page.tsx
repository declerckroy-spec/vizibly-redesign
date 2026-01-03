import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { StatsOnly } from '@/components/stats-section';
import { ClientsCarouselStandalone } from '@/components/clients-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTAWithImage } from '@/components/cta-with-image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Search, Zap, Check } from 'lucide-react';
import { NoHassleResultsIllustration } from '@/components/icons/device-showcase';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const faqData = [
    {
      question: 'Wat maakt jou anders?',
      answer: 'Ik ben geen bureau met accountmanagers en afdelingen. Ik bouw zelf de websites én doe de SEO. Dat betekent: geen miscommunicatie tussen developer en marketeer, snellere doorlooptijd, en een site die technisch perfect scoort. Je hebt één aanspreekpunt en weet altijd waar je aan toe bent.'
    },
    {
      question: 'Hoelang duurt het voordat ik resultaten zie?',
      answer: 'Een website kan binnen 2-3 weken live staan. Voor SEO geldt: de eerste verbeteringen zijn vaak al binnen enkele weken zichtbaar, maar voor serieuze resultaten moet je rekenen op 3-6 maanden. Dat is eerlijk. Wie iets anders belooft, vertelt niet het hele verhaal.'
    },
    {
      question: 'Waarom geen WordPress of websitebouwer?',
      answer: 'Templates en websitebouwers zijn prima voor een hobbysite, maar voor een bedrijf dat serieus wil groeien schieten ze tekort. Trage laadtijden, beperkte aanpasbaarheid, dertien-in-een-dozijn designs, en afhankelijk van plugins die morgen kunnen verdwijnen. Ik bouw met Next.js: razendsnel, volledig op maat, en toekomstbestendig.'
    },
    {
      question: 'Kan ik alleen een website of alleen SEO afnemen?',
      answer: 'Ja, beide diensten zijn los af te nemen. Maar de combinatie werkt vaak het beste: een standaard template-site remt je SEO-resultaten, en goede SEO op een matige site is zonde van je investering. Ik adviseer je graag over wat in jouw situatie het slimste is.'
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
        "description": "Razendsnelle websites en SEO die werkt. Vizibly bouwt Next.js sites en zorgt dat je gevonden wordt in Google.",
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
        "name": "Vizibly",
        "provider": {
          "@id": "https://vizibly.nl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nederland"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Diensten",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Websites",
                "description": "Razendsnelle Next.js websites met 90+ pagespeed score"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "SEO",
                "description": "Zoekmachine optimalisatie voor meer bezoekers en omzet"
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://vizibly.nl/#website",
        "url": "https://vizibly.nl",
        "name": "Vizibly",
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
      <section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-5xl">
            {/* Animated decoration */}
            <div className="mb-8 font-mono text-xs text-black/20 hidden lg:block animate-float">
              ████████████████████████████████████████████████████████
            </div>

            <h1 className="mb-10 text-brutalist-hero leading-none">
              High-end websites{' '}
              <span className="whitespace-nowrap">
                die{' '}
                <span className="relative inline">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">leveren</span>
                </span>
              </span>
            </h1>

            <div className="mb-12 max-w-3xl border-l-8 border-black pl-8">
              <p className="text-lg font-bold text-black/80 lg:text-xl xl:text-2xl">
                Strakke, razendsnelle websites die scoren in Google. SEO die echt werkt. Alles uit één hand, zonder de overhead van een bureau.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row">
              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  LATEN WE KENNISMAKEN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 py-5">
                <Link href="/cases">BEKIJK RESULTATEN</Link>
              </Button>
            </div>

            {/* Bottom decoration */}
            <div className="mt-12 font-mono text-xs text-black/20 hidden lg:block animate-float">
              ████████████████████████████████████████████████████████
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsOnly />

      {/* Intro Section met Roy */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-28 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative aspect-square overflow-hidden border-4 border-accent">
              <Image
                src="/team/roy.webp"
                alt="Roy de Clerck"
                fill
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-1 w-32 bg-accent mb-6"></div>
              <h2 className="mb-6 text-brutalist-h2 text-white">
                Eén specialist.<br />Website én SEO.
              </h2>

              <p className="mb-6 text-base font-bold lg:text-lg xl:text-xl">
                Wat een bureau met 5 man doet, doe ik alleen. Beter en sneller.
              </p>

              <p className="mb-6 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                De meeste ondernemers betalen te veel voor een site die te weinig oplevert. Een developer die niet snapt wat SEO is. Een SEO bureau dat niet snapt wat techniek is. En jij zit ertussenin.
              </p>

              <p className="mb-10 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Ik doe beide. Eén persoon, geen overleg tussen partijen, geen vingerwijzen. Gewoon: een site die er strak uitziet, razendsnel laadt en gevonden wordt.
              </p>

              <div className="mb-10 grid gap-3">
                {[
                  'Eén telefoontje in plaats van drie meetings',
                  'Geen vingerwijzen tussen developer en bureau',
                  'Live binnen weken, niet maanden'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 border-l-4 border-accent pl-4">
                    <span className="text-base font-bold text-white lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" variant="lime" className="w-fit">
                <Link href="/over-ons">MEER OVER MIJ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Diensten - Compact */}
      <section className="relative z-10 border-b-4 border-black bg-[#fafaf8] py-24 lg:py-32 -mb-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          {/* Compacte diensten grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {/* Websites - Compact */}
            <Link href="/websites" className="group block">
              <div className="flex h-full items-start gap-6 border-4 border-black bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent lg:p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:rotate-3 lg:h-16 lg:w-16">
                  <Globe className="h-7 w-7 lg:h-8 lg:w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-black uppercase text-black lg:text-3xl">Websites</h3>
                  <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
                    Strak design, razendsnel, en gebouwd om te groeien. Geen templates, maar een site die past bij jouw bedrijf.
                  </p>
                  <span className="inline-flex items-center text-sm font-black uppercase text-black transition-all group-hover:bg-black group-hover:text-white px-3 py-1 -mx-3">
                    BEKIJK VOORBEELDEN
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* SEO - Compact */}
            <Link href="/seo" className="group block">
              <div className="flex h-full items-start gap-6 border-4 border-black bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center border-4 border-black bg-black text-accent transition-all group-hover:rotate-3 lg:h-16 lg:w-16">
                  <Search className="h-7 w-7 lg:h-8 lg:w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-3 text-2xl font-black uppercase text-black lg:text-3xl">SEO</h3>
                  <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
                    Gevonden worden in Google én AI-tools zoals ChatGPT en Claude. Strategie, content en linkbuilding.
                  </p>
                  <span className="inline-flex items-center text-sm font-black uppercase text-black transition-all group-hover:bg-black group-hover:text-white px-3 py-1 -mx-3">
                    LEES MEER
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-0 border-b-4 border-black bg-[#0a0a0a] py-36 text-white lg:py-56 pt-48">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <h2 className="mb-6 text-brutalist-h1 text-white">
              Geen gedoe,<br />gewoon resultaat
            </h2>
            <p className="text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              ZO WERKT HET
            </p>
          </div>

          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col justify-center">
              <p className="mb-12 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                Je weet precies waar je aan toe bent. Geen eindeloze vergaderingen, geen vage beloftes. Gewoon doen.
              </p>

              <div className="grid gap-8">
                {[
                  { number: '01', title: 'Gesprek', text: 'Jij vertelt, ik luister.' },
                  { number: '02', title: 'Voorstel', text: 'Helder, compleet, geen kleine lettertjes.' },
                  { number: '03', title: 'Aan de slag', text: 'Ik bouw, jij krijgt updates. Geen radiostilte.' },
                  { number: '04', title: 'Live', text: 'En daarna? Ondersteuning zolang je wilt.' }
                ].map((step) => (
                  <div key={step.number} className="border-l-4 border-accent pl-6">
                    <div className="mb-2 text-6xl font-bold text-accent/30">
                      {step.number}
                    </div>
                    <p className="text-base font-bold text-white lg:text-lg xl:text-xl">
                      <span className="text-accent">{step.title}:</span> {step.text}
                    </p>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" variant="lime" className="mt-12 w-fit">
                <Link href="/contact">PLAN EEN GESPREK</Link>
              </Button>
            </div>

            <div className="flex items-center justify-center border-4 border-accent bg-[#fafaf8] p-4 lg:p-6" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
              <NoHassleResultsIllustration className="w-full h-auto max-w-lg text-black" />
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="border-b-4 border-black bg-[#fafaf8] py-32 lg:py-44">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Bewezen resultaten
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

      {/* Klanten Carousel */}
      <ClientsCarouselStandalone />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA met foto */}
      <CTAWithImage />

      {/* Blog Articles Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-20">
            <p className="mb-8 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              GEEN GEHEIMEN
            </p>
            <h2 className="mb-4 text-brutalist-h1 text-white">
              Alles wat ik weet,<br />deel ik hier
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
                <Card className="h-full overflow-hidden border-4 border-accent bg-white text-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-accent">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
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
            <Button asChild size="lg" variant="lime" className="px-8 py-5 text-base">
              <Link href="/vizie">BEKIJK ALLES</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-20">
            <h2 className="mb-6 text-brutalist-h2 text-black">
              Nog vragen?
            </h2>
            <p className="text-base font-bold uppercase text-black lg:text-lg xl:text-xl">
              DE KORTE ANTWOORDEN
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

      <Footer />
    </>
  );
}
