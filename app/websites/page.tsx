import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Clock, Globe, Mail, FileCode, Check, Gauge, Palette, Search } from 'lucide-react';
import { PremiumHeroIllustration, PremiumGrowthIllustration } from '@/components/icons/device-showcase';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-end website laten maken | Al vanaf €2.500',
  description: 'Premium websites die klanten binnenhalen. 90+ pagespeed score, modern design, live binnen 2-3 weken. Inclusief hosting, domein en SSL.',
  openGraph: {
    title: 'High-end website laten maken | Al vanaf €2.500',
    description: 'Premium websites die klanten binnenhalen. 90+ pagespeed score, modern design, live binnen 2-3 weken. Inclusief hosting, domein en SSL.',
    url: 'https://vizibly.nl/websites/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function WebsitesPage() {
  const packages = [
    {
      name: 'Simpel',
      subtitle: 'Alles om te starten',
      price: '€2.500',
      period: 'eenmalig',
      features: [
        'Tot 5 pagina\'s',
        'Design dat past bij jouw merk',
        'Contactformulier met spambeveiliging',
        'Direct vindbaar in Google',
        '90+ pagespeed score gegarandeerd',
        'Eerste maand onderhoud gratis',
      ],
      highlight: false
    },
    {
      name: 'Standaard',
      subtitle: 'Klaar om te groeien',
      price: '€3.500',
      period: 'eenmalig',
      features: [
        'Tot 10 pagina\'s',
        'Volledig custom design',
        'Blog om autoriteit op te bouwen',
        'Uitgebreide SEO-setup',
        'Inzicht in je bezoekers',
        'Eerste maand onderhoud gratis',
      ],
      highlight: true
    },
    {
      name: 'Premium',
      subtitle: 'Maximale flexibiliteit',
      price: 'Vanaf €5.000',
      period: 'eenmalig',
      features: [
        'Onbeperkt pagina\'s',
        'High-end custom design',
        'Koppelingen met je systemen',
        'Zelf content beheren via CMS',
        'Complete SEO-strategie',
        'Eerste maand onderhoud gratis',
      ],
      highlight: false
    }
  ];

  const proces = [
    {
      step: '01',
      title: 'Gesprek',
      description: 'Jij vertelt, ik luister. 30 minuten over je bedrijf, doelen en wensen. Hieruit volgt een heldere offerte.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Je ziet het ontwerp voordat er code komt. Modern, passend bij je merk, gebouwd om te converteren.'
    },
    {
      step: '03',
      title: 'Bouwen',
      description: 'Meekijken via een testlink. Geen radiostilte. Vragen? Direct antwoord.'
    },
    {
      step: '04',
      title: 'Live',
      description: 'Domein, hosting, SSL: alles geregeld. Jij focust op je bedrijf, de techniek is mijn zorg.'
    }
  ];

  const faqData = [
    {
      question: 'Waarom zijn jullie sites zo snel?',
      answer: 'Ik bouw met dezelfde technologie als Nike, Netflix en Twitch. Geen plugins die updates nodig hebben, geen beveiligingslekken, geen trage database. Puur snelheid en stabiliteit. Het resultaat: sites die laden voordat je met je ogen knippert.'
    },
    {
      question: 'Kan ik zelf content aanpassen?',
      answer: 'Ja, afhankelijk van het pakket. Bij het Standaard en Premium pakket kan een CMS worden toegevoegd waarmee je zelf teksten en afbeeldingen kunt wijzigen. Voor grotere aanpassingen kun je altijd terecht.'
    },
    {
      question: 'Wat als ik al een logo en huisstijl heb?',
      answer: 'Prima, dan wordt daarop voortgebouwd. Heb je nog geen huisstijl? Dan kan het ontwerp daarop worden afgestemd. De prijs is afhankelijk van wat er nodig is, vandaar "richtprijzen".'
    },
    {
      question: 'Hoe zit het met SEO?',
      answer: 'Elke site wordt technisch SEO-proof opgeleverd: snelle laadtijd, correcte structuur, meta-tags, sitemap. Voor doorlopende SEO (content, linkbuilding, strategie) kun je kiezen voor een aanvullend SEO-traject.'
    },
    {
      question: 'Hoe zit het met hosting en onderhoud?',
      answer: 'Je site draait op enterprise-grade servers met 99.9% uptime. Na oplevering kun je kiezen voor een onderhoudspakket: hosting, monitoring, updates en kleine aanpassingen. Alles geregeld, zodat jij je kunt focussen op je bedrijf. Eerste maand gratis.'
    },
    {
      question: 'Hoe snel kan mijn site live staan?',
      answer: 'Gemiddeld 2-3 weken na de intake, afhankelijk van de complexiteit en hoe snel feedback komt. Een compacte site kan sneller, een complexe maatwerk site duurt langer.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/websites/#service",
        "name": "Website Development",
        "description": "Razendsnelle Next.js websites met 90+ pagespeed score",
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
          "lowPrice": "2500",
          "highPrice": "5000",
          "priceCurrency": "EUR",
          "offerCount": "3"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/websites/#faq",
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
                GEEN TEMPLATES. GEEN GEDOE.
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">
                Websites die{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">scoren</span>
                </span>
              </h1>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Laat een high end website bouwen waar je trots op bent. Razendsnelle laadtijden, strak design, en gebouwd om te groeien. Geen templates waar je bedrijf in gepropt wordt.
              </p>

              <p className="mb-10 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Je krijgt een ultiem visitekaartje voor je bedrijf. Volledig op maat, supersnel, en klaar voor Google én AI-zoekmachines.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" asChild className="text-base px-8 py-5">
                  <Link href="/contact">
                    VRAAG EEN OFFERTE AAN
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 py-5">
                  <Link href="#pakketten">BEKIJK PAKKETTEN</Link>
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center border-4 border-black bg-white p-4 lg:p-6" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <PremiumHeroIllustration className="w-full h-auto max-w-lg text-black" />
            </div>
          </div>
        </div>
      </section>

      {/* USP's Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-20 lg:py-24">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
            {[
              { icon: Gauge, value: '90+', label: 'Pagespeed score', description: 'Gegarandeerd. Geen loze beloftes.' },
              { icon: Palette, value: 'Op maat', label: 'Modern design', description: 'Passend bij jouw merk en doelgroep.' },
              { icon: Clock, value: '2-3', label: 'Weken doorlooptijd', description: 'Van intake tot live. Geen eindeloos wachten.' }
            ].map((stat, index) => (
              <div
                key={index}
                className="group flex flex-col items-center border-4 border-white bg-black p-8 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-accent"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
              >
                <stat.icon className="mb-4 h-10 w-10 text-accent" />
                <span className="mb-2 text-4xl font-black text-white lg:text-5xl">{stat.value}</span>
                <span className="mb-2 text-base font-bold uppercase tracking-wider text-white">{stat.label}</span>
                <span className="text-sm font-bold text-white/70">{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat je krijgt Section */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                GEEN VERRASSINGEN
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Wat je krijgt
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Een website is meer dan een mooi plaatje. Je krijgt een complete oplossing die werkt. Geen gedoe met hosting, geen stress over beveiliging, geen technische hoofdpijn.
              </p>

              <div className="grid gap-4">
                {[
                  { icon: Globe, text: 'Domein geregeld en gekoppeld' },
                  { icon: Shield, text: 'Enterprise-grade hosting (99.9% uptime)' },
                  { icon: Zap, text: 'SSL-certificaat (het groene slotje)' },
                  { icon: Mail, text: 'Contactformulier zonder vervelende captchas' },
                  { icon: FileCode, text: 'Professionele e-mail setup (optioneel)' },
                  { icon: Search, text: 'Vindbaar in Google vanaf dag één' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 border-l-4 border-accent bg-white p-4"
                  >
                    <item.icon className="h-6 w-6 text-black flex-shrink-0" />
                    <span className="text-base font-bold text-black lg:text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center border-4 border-black bg-white p-4 lg:p-6" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
              <PremiumGrowthIllustration className="w-full h-auto max-w-md text-black" />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Next.js Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        {/* Diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                TECHNIEK DIE WERKT
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-white">
                Waarom premium?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>

              <p className="mb-8 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
                Een website is het gezicht van je bedrijf. Dan wil je niet dat bezoekers moeten wachten of een dertien-in-een-dozijn template zien.
              </p>

              <p className="mb-8 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Ik bouw met dezelfde technologie als Nike, Netflix en Twitch. High-end kwaliteit, nu ook bereikbaar voor MKB.
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <div className="grid gap-6">
                {[
                  { title: 'Razendsnelle laadtijd', description: 'Bezoekers wachten niet. Jouw site laadt in een oogwenk.' },
                  { title: 'Geen onderhoudsstress', description: 'Geen wekelijkse updates. Geen beveiligingslekken. Het werkt gewoon.' },
                  { title: 'Hogere rankings', description: 'Google beloont snelle sites. Sneller = hoger in de zoekresultaten.' },
                  { title: 'Klaar voor groei', description: 'Of je nu 100 of 100.000 bezoekers krijgt, de site blijft snel.' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border-4 border-white/20 bg-white/5 p-6 transition-all hover:border-accent"
                    style={{ boxShadow: '6px 6px 0 0 #CCFF00, 0 15px 40px rgba(204, 255, 0, 0.3)' }}
                  >
                    <h3 className="mb-2 text-base font-black uppercase text-white lg:text-lg">{item.title}</h3>
                    <p className="text-base font-bold text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pakketten" className="relative bg-[#fafaf8] py-32 lg:py-40 scroll-mt-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              TRANSPARANTE RICHTPRIJZEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Pakketten
            </h2>
            <div className="mx-auto h-1 w-32 bg-black mb-8"></div>
            <p className="mx-auto max-w-2xl text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              Prijzen zijn richtprijzen en afhankelijk van wat je nodig hebt. Heb je al teksten en een logo? Dan is het goedkoper. Moet alles nog gemaakt worden? Dan wordt het meer.
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
                    <span className="text-xs font-bold uppercase text-accent">Meest gekozen</span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase text-black lg:text-3xl">{pkg.name}</h3>
                  <p className="text-base font-bold text-black/70">{pkg.subtitle}</p>
                </div>
                <div className="mb-8 border-t-4 border-black pt-6">
                  <span className="text-3xl font-black text-black lg:text-4xl">{pkg.price}</span>
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
                  className={`w-full text-base ${
                    pkg.highlight
                      ? 'bg-black text-white border-black hover:bg-white hover:text-black'
                      : 'bg-black text-white border-black hover:bg-accent hover:text-black'
                  }`}
                >
                  <Link href="/contact">
                    VRAAG OFFERTE AAN
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 mx-auto max-w-3xl border-4 border-black bg-white p-8 text-center" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
            <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">Nergens omkijken naar?</h3>
            <p className="text-base font-bold text-black/80 lg:text-lg">
              Na oplevering kun je kiezen voor een onderhoudspakket. Hosting, updates, kleine wijzigingen, monitoring: alles geregeld zodat jij je kunt focussen op je bedrijf. Eerste maand gratis.
            </p>
          </div>
        </div>
      </section>

      {/* Proces Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 lg:py-40">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)'
        }}></div>
        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              VAN IDEE NAAR LIVE
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Het proces
            </h2>
            <div className="h-1 w-32 bg-accent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {proces.map((item, index) => (
              <div
                key={index}
                className="border-4 border-white/20 bg-white/5 p-8 transition-all hover:border-accent"
                style={{ boxShadow: '6px 6px 0 0 #CCFF00' }}
              >
                <div className="mb-4 text-5xl font-black text-accent/40">
                  {item.step}
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-white lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website + SEO Synergie Section */}
      <section className="relative bg-white py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/images/person-browsing-google-imac.webp"
                alt="Website en SEO synergie - iMac met Google zoekresultaten"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>

            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                DE KRACHT VAN COMBINEREN
              </p>

              <h2 className="mb-8 text-brutalist-h1 text-black">
                Website + SEO
              </h2>
              <div className="h-1 w-32 bg-black mb-8"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Een snelle website is de basis. Maar zonder bezoekers heb je er weinig aan. Daarom bied ik ook SEO, zodat je niet alleen een mooie site hebt, maar ook gevonden wordt.
              </p>

              <p className="mb-8 text-base font-bold text-black/70 lg:text-lg xl:text-xl">
                Het voordeel van alles bij één partij: geen miscommunicatie tussen developer en SEO-bureau. Wijzigingen gaan direct live. Geen wachten op tickets of externe partijen.
              </p>

              <div className="mb-10 border-4 border-black bg-accent/20 p-6">
                <p className="text-base font-bold text-black lg:text-lg">
                  Eén aanspreekpunt voor techniek én marketing. Snellere doorlooptijd, perfecte afstemming, en een site die technisch scoort.
                </p>
              </div>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/seo">
                  BEKIJK SEO-DIENSTEN
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
        label="KLAAR VOOR EEN SITE DIE SCOORT?"
        heading="Laten we kennismaken"
        buttonText="PLAN EEN GESPREK"
      />

      <Footer />
    </>
  );
}
