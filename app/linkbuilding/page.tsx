import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link2, Search, Users, BarChart3, Check, Zap, Database, Megaphone, Mic, Globe, MapPin, ArrowRightLeft, Bot, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Linkbuilding uitbesteden | Vanaf €200/maand',
  description: 'Meer autoriteit en hogere posities in Google door strategische linkbuilding. Vizibly bouwt kwalitatieve backlinks die je rankings structureel verbeteren.',
  openGraph: {
    title: 'Linkbuilding uitbesteden | Vanaf €200/maand',
    description: 'Meer autoriteit en hogere posities in Google door strategische linkbuilding. Vizibly bouwt kwalitatieve backlinks die je rankings structureel verbeteren.',
    url: 'https://vizibly.nl/linkbuilding/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function LinkbuildingPage() {
  const faqData = [
    {
      question: 'Wat is linkbuilding precies?',
      answer: 'Linkbuilding is het proces van het verkrijgen van backlinks van andere websites naar jouw website. Google ziet deze links als "stemmen" voor je website. Hoe meer kwalitatieve links, hoe hoger je autoriteit en hoe beter je rankings.'
    },
    {
      question: 'Hoe lang duurt het voordat ik resultaat zie?',
      answer: 'Linkbuilding is een langetermijnstrategie. De eerste resultaten zie je meestal na 3-6 maanden. Het effect van linkbuilding stapelt op: hoe langer je bezig bent, hoe sterker de resultaten worden.'
    },
    {
      question: 'Bouwen jullie ook links naar mijn concurrenten?',
      answer: 'Nee. We werken met slechts één klant per branche in een regio. Zo voorkomen we belangenconflicten en kunnen we volledig voor jou gaan.'
    },
    {
      question: 'Wat is het verschil tussen goede en slechte links?',
      answer: 'Goede links komen van relevante, betrouwbare websites met eigen verkeer. Slechte links komen van spammy sites, linkfarms of irrelevante bronnen. Wij focussen uitsluitend op kwalitatieve links die waarde toevoegen.'
    },
    {
      question: 'Werkt linkbuilding nog met AI-zoekmachines?',
      answer: 'Ja, sterker nog: autoriteit wordt belangrijker. AI-systemen als ChatGPT en Perplexity citeren bronnen die ze betrouwbaar vinden. Die betrouwbaarheid wordt deels bepaald door dezelfde signalen als bij klassieke SEO: backlinks, vermeldingen en E-E-A-T.'
    },
    {
      question: 'Wat zijn NAP citations?',
      answer: 'NAP staat voor Name, Address, Phone. Citations zijn vermeldingen van je bedrijfsgegevens op andere websites, zoals branchegidsen en bedrijvenplatforms. Ze zijn belangrijk voor lokale SEO en bouwen vertrouwenssignalen op, ook als ze geen directe backlink bevatten.'
    },
    {
      question: 'Hoe meet je de ROI van linkbuilding?',
      answer: 'We monitoren rankings, organisch verkeer en conversies. Daarnaast kijken we naar de groei van je Domain Authority/Rating. Na 6 maanden maken we een uitgebreide ROI-analyse om de impact van de linkbuilding te meten.'
    },
    {
      question: 'Kan linkbuilding mijn website schaden?',
      answer: 'Slechte linkbuilding kan inderdaad schadelijk zijn. Daarom werken wij alleen met whitehat technieken en bouwen we links die Google waardeert. We monitoren je linkprofiel continu om risico\'s te voorkomen.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/linkbuilding/#service",
        "name": "Linkbuilding",
        "description": "Strategische linkbuilding voor meer autoriteit en hogere rankings in Google",
        "provider": {
          "@type": "Organization",
          "name": "Vizibly",
          "@id": "https://vizibly.nl/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nederland"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/linkbuilding/#faq",
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
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                BOUW AUTORITEIT IN GOOGLE
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">Linkbuilding</span>
                </span>
                {' '}die werkt
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Backlinks zijn nog steeds een van de belangrijkste rankingfactoren in Google. Met strategische linkbuilding bouw je autoriteit op en stijg je structureel in de zoekresultaten.
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
                  src="/Bestaande afbeeldingen/backlinks-7791415_640.png"
                  alt="Linkbuilding specialist aan het werk"
                  width={600}
                  height={600}
                  className="w-full border-4 border-black grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Linkbuilding Section */}
      <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                DE BASIS
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Wat is linkbuilding?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                Linkbuilding is het actief verkrijgen van backlinks van andere websites naar jouw website. Google ziet deze links als aanbevelingen: hoe meer kwalitatieve websites naar jou linken, hoe betrouwbaarder en relevanter je bent.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Maar niet alle links zijn gelijk. Een link van een gerespecteerde vakwebsite is veel meer waard dan tien links van obscure blogjes. Daarom focussen wij op kwaliteit boven kwantiteit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Linkbuilding Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              WAAROM HET WERKT
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Waarom zijn backlinks zo belangrijk?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Link2,
                title: 'Autoriteit',
                description: 'Backlinks zijn stemmen van vertrouwen. Google ziet websites met veel kwalitatieve backlinks als autoriteiten in hun vakgebied.'
              },
              {
                icon: BarChart3,
                title: 'Hogere rankings',
                description: 'Websites met een sterk linkprofiel ranken gemiddeld hoger. Backlinks zijn nog steeds een van de top 3 rankingfactoren.'
              },
              {
                icon: Users,
                title: 'Referral traffic',
                description: 'Goede backlinks leveren niet alleen SEO-waarde op, maar ook direct verkeer van geïnteresseerde bezoekers.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                  {item.title}
                </h3>
                <p className="text-base font-bold text-black/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              ONZE AANPAK
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Zo bouwen we links die werken
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Linkprofiel audit', description: 'We analyseren je huidige backlinks. Welke zijn waardevol? Welke zijn potentieel schadelijk? Waar liggen kansen?' },
              { step: '02', title: 'Concurrentie-analyse', description: 'We onderzoeken waar je concurrenten hun links vandaan halen. Dit onthult waardevolle linkbronnen voor jouw website.' },
              { step: '03', title: 'Gerichte outreach', description: 'We benaderen relevante websites met waardevolle content of samenwerkingsvoorstellen. Geen spam, wel resultaat.' },
              { step: '04', title: 'Monitoring', description: 'We monitoren je linkprofiel maandelijks. Nieuwe links, verloren links, en de impact op je rankings.' }
            ].map((item, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white p-6 transition-all hover:-translate-y-1"
                style={{ boxShadow: '6px 6px 0 0 #000000, 0 15px 40px rgba(0, 0, 0, 0.2)' }}
              >
                <span className="mb-4 inline-block border-4 border-black bg-black px-3 py-1 text-lg font-black text-accent">
                  {item.step}
                </span>
                <h3 className="mb-3 text-lg font-black uppercase text-black">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-black/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Strategies Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              GEAVANCEERDE METHODEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Linkbuilding strategieën die écht werken
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Database,
                title: 'Data-driven research',
                description: 'Origineel onderzoek en data trekt natuurlijk links aan. We helpen je bij het creëren van content die anderen willen delen en citeren.',
                items: ['Branche-onderzoeken', 'Statistieken en trends', 'Infographics', 'Whitepapers']
              },
              {
                icon: Zap,
                title: 'Tools en calculators',
                description: 'Handige tools worden massaal gelinkt. Van eenvoudige calculators tot interactieve tooling die waarde biedt.',
                items: ['ROI calculators', 'Kostenbesparing tools', 'Vergelijkingstools', 'Interactieve content']
              },
              {
                icon: Megaphone,
                title: 'Digital PR',
                description: 'Nieuwswaardige verhalen en expert commentary leveren links op van grote mediasites.',
                items: ['Persberichten', 'Expert quotes', 'Trend analyses', 'Thought leadership']
              },
              {
                icon: Mic,
                title: 'Podcasts en interviews',
                description: 'Als gast in podcasts of interviews krijg je waardevolle backlinks én vergroot je je bereik.',
                items: ['Podcast guesting', 'Expert interviews', 'Webinar samenwerkingen', 'Round-up artikelen']
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white p-8"
                style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                  {item.title}
                </h3>
                <p className="mb-6 text-base font-bold text-black/70">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                      <span className="text-base font-bold text-black/70">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citations Section */}
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                CITATIONS & VERMELDINGEN
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                NAP citations: de basis van lokale autoriteit
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                NAP staat voor Name, Address, Phone. Consistente vermeldingen van je bedrijfsgegevens op relevante platforms zijn cruciaal voor lokale SEO én linkbuilding.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Citations zijn niet altijd echte backlinks, maar Google herkent ze als signalen van betrouwbaarheid en relevantie.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-accent bg-accent/10 p-6">
                <MapPin className="h-8 w-8 text-accent mb-4" />
                <h3 className="mb-3 text-lg font-black uppercase text-white">Waar we citations bouwen</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">Branchegidsen en vakverenigingen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">Lokale bedrijvengidsen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">Reviewplatforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">Social media profielen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">Aggregators en dataproviders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linkbuilding Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                INTERNE LINKBUILDING
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Vergeet je interne links niet
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl mb-6">
                Externe linkbuilding krijgt alle aandacht, maar interne links zijn minstens zo belangrijk. Ze helpen Google je site te begrijpen en verdelen linkwaarde over je pagina's.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <ArrowRightLeft className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Silostructuur</h3>
                    <p className="text-sm font-bold text-black/70">Groepeer gerelateerde content en link ze aan elkaar. Dit versterkt de topical authority van je site.</p>
                  </div>
                </div>
              </div>

              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <Target className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Anchor teksten</h3>
                    <p className="text-sm font-bold text-black/70">Gebruik beschrijvende anchor teksten die duidelijk maken waar de link naartoe leidt.</p>
                  </div>
                </div>
              </div>

              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Link naar belangrijke pagina's</h3>
                    <p className="text-sm font-bold text-black/70">Zorg dat je belangrijkste pagina's de meeste interne links krijgen. Dit signaleert prioriteit aan Google.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              DE TOEKOMST
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Linkbuilding in het AI-tijdperk
            </h2>
            <p className="mx-auto max-w-3xl text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Met de opkomst van AI-zoekmachines en AI Overviews verandert SEO. Maar linkbuilding blijft relevant - het evolueert alleen.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
              <Bot className="h-12 w-12 text-black mb-6" />
              <h3 className="mb-4 text-xl font-black uppercase text-black">SEO wordt GEO</h3>
              <p className="text-base font-bold text-black/70 mb-4">
                Generative Engine Optimization (GEO) is de toekomst. AI-systemen als ChatGPT, Perplexity en Google's AI Overviews citeren bronnen. Word jij geciteerd?
              </p>
              <p className="text-base font-bold text-black/70">
                De principes blijven hetzelfde: autoriteit, relevantie en betrouwbaarheid. Linkbuilding bouwt die signalen.
              </p>
            </div>

            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
              <Globe className="h-12 w-12 text-black mb-6" />
              <h3 className="mb-4 text-xl font-black uppercase text-black">Wat blijft belangrijk</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-base font-bold text-black/70"><strong>E-E-A-T signalen</strong> - Expertise, Experience, Authority, Trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-base font-bold text-black/70"><strong>Branded mentions</strong> - AI herkent merkvermeldingen</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-base font-bold text-black/70"><strong>Citeerbare content</strong> - Feiten, data en unieke inzichten</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-base font-bold text-black/70"><strong>Diverse bronnen</strong> - Links van meerdere typen sites</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-4 border-black bg-black p-8 text-white">
            <p className="text-base font-bold text-white/90 lg:text-lg text-center">
              <strong>Onze strategie is toekomstbestendig.</strong> We bouwen niet alleen links voor Google's algoritme van vandaag, maar voor de AI-gedreven zoekomgeving van morgen.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
              PAKKETTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Kies het pakket dat bij je past
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Starter',
                price: 'EUR 250',
                description: 'per maand',
                features: ['Linkprofiel analyse', '2-4 backlinks per maand', 'Maandelijkse rapportage', 'Focus op relevante websites', 'Disavow monitoring']
              },
              {
                name: 'Groei',
                price: 'EUR 750',
                description: 'per maand',
                features: ['Uitgebreide concurrentie-analyse', '5-10 backlinks per maand', 'Wekelijkse rapportage', 'Diverse linkbuilding strategieën', 'Content voor linkbuilding', 'Dedicated accountmanager'],
                featured: true
              },
              {
                name: 'Premium',
                price: 'EUR 1.500',
                description: 'per maand',
                features: ['Volledige linkbuilding strategie', '15+ backlinks per maand', 'Digital PR campagnes', 'Data research projecten', 'Dedicated content creatie', 'Prioriteit support']
              }
            ].map((pkg, index) => (
              <div
                key={index}
                className={`border-4 border-white p-8 ${pkg.featured ? 'bg-accent text-black border-accent' : 'bg-black'}`}
                style={{ boxShadow: pkg.featured ? '8px 8px 0 0 #ffffff' : '8px 8px 0 0 #CCFF00' }}
              >
                <h3 className={`mb-2 text-xl font-black uppercase ${pkg.featured ? 'text-black' : 'text-white'}`}>
                  {pkg.name}
                </h3>
                <p className={`mb-6 text-3xl font-black ${pkg.featured ? 'text-black' : 'text-accent'}`}>
                  {pkg.price}
                </p>
                <p className={`mb-6 text-sm font-bold ${pkg.featured ? 'text-black/60' : 'text-white/60'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-0.5 ${pkg.featured ? 'text-black' : 'text-accent'}`} />
                      <span className={`text-base font-bold ${pkg.featured ? 'text-black/80' : 'text-white/80'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className={`w-full ${pkg.featured ? 'bg-black text-accent border-black hover:bg-white hover:text-black' : 'bg-accent text-black border-accent hover:bg-white'}`}
                >
                  <Link href="/contact">
                    START NU
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqData} heading="Vragen over linkbuilding?" />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTA
        variant="dark"
        label="KLAAR OM TE GROEIEN?"
        heading="Bouw autoriteit met strategische linkbuilding"
        description="Klaar om je rankings structureel te verbeteren? Neem contact op voor een vrijblijvende analyse van je linkprofiel."
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
