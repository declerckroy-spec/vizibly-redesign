import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Search, Target, PenTool, BarChart3, Check, Sparkles, Code, MessageSquare, ShoppingBag, Building2, Leaf, Briefcase, Link2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO teksten laten schrijven | Vanaf €70',
  description: 'Wil je hoger in Google met teksten die niet alleen scoren, maar ook klanten binnenbrengen? Bij Vizibly schrijven we SEO teksten die gevonden worden én converteren.',
  openGraph: {
    title: 'SEO teksten laten schrijven | Vanaf €70',
    description: 'Wil je hoger in Google met teksten die niet alleen scoren, maar ook klanten binnenbrengen? Bij Vizibly schrijven we SEO teksten die gevonden worden én converteren.',
    url: 'https://vizibly.nl/seo-copy/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function SeoCopyPage() {
  const faqData = [
    {
      question: 'Waarom SEO copywriting van Vizibly?',
      answer: 'Bij Vizibly schrijven we al ruim 7 jaar SEO teksten voor diverse branches. We combineren technische SEO-kennis met overtuigend schrijfwerk. Onze teksten ranken niet alleen goed, ze converteren ook. Dat onderscheidt ons van copywriters zonder SEO-expertise of SEO-specialisten zonder schrijftalent.'
    },
    {
      question: 'Wat kost het laten schrijven van SEO teksten?',
      answer: 'Losse SEO teksten starten vanaf EUR 70 per tekst. Voor structurele content bieden we pakketten aan: het Content pakket klein (5-10 teksten) voor EUR 600 en het Content pakket groot (15-25 teksten) voor EUR 1.250. De exacte kosten zijn afhankelijk van de complexiteit en het type content.'
    },
    {
      question: 'Hoe lang duurt het schrijven van SEO teksten?',
      answer: 'De doorlooptijd hangt af van het aantal teksten en de complexiteit. Een losse landingspagina is meestal binnen een week klaar. Voor grotere pakketten maken we een planning op maat, waarbij je elke week nieuwe content ontvangt.'
    },
    {
      question: 'Schrijven jullie ook voor mijn branche?',
      answer: 'We schrijven voor diverse branches: e-commerce, bouw en techniek, duurzaamheid, dienstverlening en meer. Door grondig vooronderzoek en nauwe samenwerking zorgen we dat de content perfect aansluit bij jouw vakgebied en doelgroep.'
    },
    {
      question: 'Hoe werken jullie met tone of voice?',
      answer: 'Voordat we beginnen met schrijven, bespreken we jouw merkidentiteit en tone of voice. Formeel of informeel? Zakelijk of speels? We analyseren bestaande content en stemmen onze schrijfstijl af op jouw merk. Consistentie in toon is essentieel voor merkherkenning.'
    },
    {
      question: 'Gebruiken jullie AI bij het schrijven?',
      answer: 'We gebruiken AI-tools als hulpmiddel voor research en eerste concepten, maar elke tekst wordt geschreven en geredigeerd door ervaren copywriters. Google waardeert E-E-A-T (Experience, Expertise, Authoritativeness, Trust) en pure AI-content mist de authenticiteit en branche-kennis die nodig is om echt te ranken.'
    },
    {
      question: 'Hoe meten jullie het succes van SEO teksten?',
      answer: 'We monitoren rankings in Google Search Console en Semrush, analyseren organisch verkeer in Google Analytics, en meten conversies. Na 3-6 maanden evalueren we de resultaten en optimaliseren waar nodig. Je ontvangt periodieke rapportages over de prestaties.'
    },
    {
      question: 'Wat als de tekst niet bevalt?',
      answer: 'We werken met een feedbackronde waarin je aanpassingen kunt doorgeven. Mocht de tekst na revisie nog niet naar wens zijn, zoeken we samen naar een oplossing. Klanttevredenheid staat bij ons voorop.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/seo-copy/#service",
        "name": "SEO Copywriting",
        "description": "Professionele SEO teksten die gevonden worden én converteren",
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
        "@id": "https://vizibly.nl/seo-copy/#faq",
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
                CONTENT DIE SCOORT EN CONVERTEERT
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                SEO teksten{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">laten schrijven</span>
                </span>
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Wil je hoger in Google met teksten die niet alleen scoren, maar ook daadwerkelijk klanten binnenbrengen? Bij Vizibly schrijven we SEO teksten die gevonden worden én converteren.
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
                src="/Bestaande afbeeldingen/three-white-and-black-scrabble-tiles-on-brown-wooden.jpeg"
                  alt="SEO teksten laten schrijven"
                  width={600}
                  height={600}
                  className="w-full border-4 border-black grayscale"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is SEO Copywriting Section */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                DE BASIS
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Wat is SEO copywriting?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                SEO copywriting is de kunst van het schrijven van teksten die zowel zoekmachines als mensen aanspreken. Het gaat om veel meer dan alleen het plaatsen van zoekwoorden in een tekst.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Goede SEO teksten zijn strategisch geoptimaliseerd voor specifieke zoektermen, beantwoorden de zoekintentie van je doelgroep en overtuigen bezoekers om te converteren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why SEO Texts Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              WAAROM INVESTEREN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Waarom zijn SEO teksten zo belangrijk?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Search,
                title: 'Voor zoekmachines',
                description: 'SEO teksten helpen Google begrijpen waar je pagina over gaat. Door strategisch gebruik van zoekwoorden en semantisch verwante termen, match je met relevante zoekopdrachten.'
              },
              {
                icon: Target,
                title: 'Voor bezoekers',
                description: 'Teksten moeten waarde bieden. Bezoekers zoeken antwoorden en oplossingen. Goede SEO copywriting houdt ze vast, beantwoordt hun vragen en leidt ze naar actie.'
              },
              {
                icon: BarChart3,
                title: 'Voor conversie',
                description: 'SEO teksten die wel gevonden worden maar niet converteren, zijn waardeloos. We schrijven altijd met het eindresultaat voor ogen: meer aanvragen, meer verkopen.'
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
      <section className="relative border-b-4 border-black bg-accent py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              ONZE AANPAK
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Zo schrijven we SEO teksten die converteren
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-5">
            {[
              { step: '01', title: 'Zoekwoorden-onderzoek', description: 'We identificeren het hoofdzoekwoord en alle gerelateerde termen met tools als Semrush en Ahrefs.' },
              { step: '02', title: 'SERP-analyse', description: 'We bestuderen de top 10 in Google. Wat voor content staat er? Wat moeten we overtreffen?' },
              { step: '03', title: 'Content briefing', description: 'Op basis van onderzoek maken we een gedetailleerde briefing met structuur en focus.' },
              { step: '04', title: 'Schrijven', description: 'We schrijven teksten die zoekwoorden natuurlijk verwerken én lekker lezen.' },
              { step: '05', title: 'Optimalisatie', description: 'We checken alles: LSI keywords, meta description, interne links. Details maken het verschil.' }
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

      {/* Types of Content Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              SOORTEN CONTENT
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Voor elke pagina de juiste aanpak
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: FileText,
                title: 'Landingspagina\'s en service pagina\'s',
                items: ['Duidelijke waardepropositie', 'Strategische keyword plaatsing', 'Social proof en vertrouwenselementen', 'Heldere call-to-actions', 'Voldoende tekstlengte (800-1500 woorden)']
              },
              {
                icon: PenTool,
                title: 'Blogartikelen en SEO content',
                items: ['Beantwoorden specifieke vragen', 'Bieden echte waarde met diepgaande info', 'Linken strategisch naar diensten', 'Bouwen aan autoriteit', 'Genereren organisch verkeer']
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
                <h3 className="mb-6 text-xl font-black uppercase text-black lg:text-2xl">
                  {item.title}
                </h3>
                <ul className="space-y-3">
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

      {/* SEO vs Regular Text Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                HET VERSCHIL
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Gewone teksten vs. SEO teksten
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                Gewone teksten zijn vaak geschreven vanuit het perspectief van de schrijver. SEO teksten daarentegen zijn geschreven vanuit de zoekintentie van de lezer: wat zoekt iemand en waarom?
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Bij SEO copywriting onderzoeken we eerst welke vragen je doelgroep heeft, analyseren we de concurrentie, en schrijven we content die beter is dan wat er nu rankt.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border-4 border-white/20 bg-white/5 p-6">
                <h3 className="mb-4 text-lg font-black uppercase text-accent">En AI-gegenereerde content dan?</h3>
                <p className="text-base font-bold text-white/80">
                  AI-tools kunnen helpen bij het schrijven, maar menselijke expertise blijft cruciaal. Google waardeert E-E-A-T: Experience, Expertise, Authoritativeness en Trust. Pure AI-content mist de nuance, branche-kennis en authenticiteit die Google zoekt.
                </p>
              </div>
              <div className="border-4 border-accent bg-accent/10 p-6">
                <h3 className="mb-4 text-lg font-black uppercase text-white">Onze aanpak</h3>
                <p className="text-base font-bold text-white/80">
                  We gebruiken AI als hulpmiddel, maar elke tekst wordt geschreven en geredigeerd door ervaren copywriters. Zo combineren we efficiëntie met kwaliteit en authenticiteit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical SEO in Copywriting Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              TECHNISCHE ASPECTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Technische SEO in copywriting
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase text-black">Zoekintentie</h3>
              <p className="text-base font-bold text-black/70 mb-4">
                Elke zoekopdracht heeft een intentie. We onderscheiden:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Informationeel:</strong> kennis zoeken</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Navigational:</strong> specifieke site zoeken</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Transactioneel:</strong> kopen of actie</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Commercial:</strong> vergelijken voor aankoop</span>
                </li>
              </ul>
            </div>

            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black">
                <Link2 className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase text-black">LSI Keywords</h3>
              <p className="text-base font-bold text-black/70 mb-4">
                Latent Semantic Indexing keywords zijn semantisch gerelateerde termen die context geven aan je hoofdzoekwoord.
              </p>
              <p className="text-sm font-bold text-black/70">
                Bij "SEO teksten laten schrijven" zijn LSI keywords bijvoorbeeld: copywriting, content, zoekwoorden, Google ranking, organisch verkeer. Dit helpt Google de context te begrijpen.
              </p>
            </div>

            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase text-black">Tekstlengte</h3>
              <p className="text-base font-bold text-black/70 mb-4">
                De ideale lengte hangt af van de zoekintentie en wat er rankt:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Productpagina's</strong>: 300-800 woorden</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Servicepagina's</strong>: 800-1500 woorden</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                  <span className="text-sm font-bold text-black/70"><strong>Blogs</strong>: 1500-3000+ woorden</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative border-b-4 border-black bg-accent py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              BRANCHES
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              SEO copywriting voor verschillende branches
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShoppingBag,
                title: 'E-commerce',
                description: 'Productbeschrijvingen, categoriepagina\'s en blogs die verkopen. Focus op transactionele zoekwoorden en conversie.'
              },
              {
                icon: Building2,
                title: 'Bouw & Techniek',
                description: 'Technische content die complexe producten toegankelijk maakt. Van installatiebedrijven tot bouwbedrijven.'
              },
              {
                icon: Leaf,
                title: 'Duurzaamheid',
                description: 'Content voor groene bedrijven die hun verhaal willen vertellen. Authenticiteit en expertise staan centraal.'
              },
              {
                icon: Briefcase,
                title: 'Dienstverlening',
                description: 'Van accountants tot advocaten. Professionele content die vertrouwen wekt en leads genereert.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white p-6 transition-all hover:-translate-y-1"
                style={{ boxShadow: '6px 6px 0 0 #000000, 0 15px 40px rgba(0, 0, 0, 0.2)' }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-black uppercase text-black">
                  {item.title}
                </h3>
                <p className="text-sm font-bold text-black/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-bold text-black/80 lg:text-lg">
              <strong>Door grondig vooronderzoek</strong> en nauwe samenwerking zorgen we dat de content perfect aansluit bij jouw vakgebied. We duiken in je branche, leren de terminologie en schrijven alsof we er zelf werken.
            </p>
          </div>
        </div>
      </section>

      {/* Conversion Optimization Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                CONVERSIE
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                SEO teksten die ook converteren
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl mb-6">
                Hoog ranken is mooi, maar zonder conversies zinloos. Daarom schrijven we altijd met het eindresultaat voor ogen: meer aanvragen, meer verkopen, meer groei.
              </p>
            </div>

            <div className="space-y-6">
              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Call-to-Actions</h3>
                    <p className="text-sm font-bold text-black/70">Strategisch geplaatste CTA's die aanzetten tot actie zonder pushy te zijn.</p>
                  </div>
                </div>
              </div>

              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Social Proof</h3>
                    <p className="text-sm font-bold text-black/70">Integratie van reviews, testimonials en resultaten die vertrouwen wekken.</p>
                  </div>
                </div>
              </div>

              <div className="group border-4 border-black bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-accent text-black flex-shrink-0">
                    <PenTool className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-black uppercase text-black">Storytelling</h3>
                    <p className="text-sm font-bold text-black/70">Verhalen die resoneren met je doelgroep en emotioneel verbinden.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content That Earns Backlinks Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                LINKWAARDIGE CONTENT
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Content die backlinks verdient
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                De beste content wordt vanzelf gedeeld en gelinkt. We schrijven artikelen die zo waardevol zijn dat andere websites ernaar willen verwijzen.
              </p>
              <ul className="space-y-4">
                {[
                  'Diepgaande guides en how-to artikelen',
                  'Origineel onderzoek en statistieken',
                  'Expert interviews en thought leadership',
                  'Tools, calculators en interactieve content'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent mt-0.5" />
                    <span className="text-base font-bold text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-accent bg-accent/10 p-8">
              <Code className="h-12 w-12 text-accent mb-6" />
              <h3 className="mb-4 text-xl font-black uppercase text-white">Technische implementatie</h3>
              <p className="text-base font-bold text-white/80 mb-4">
                We leveren teksten die direct geïmplementeerd kunnen worden. Inclusief:
              </p>
              <ul className="space-y-2">
                <li className="text-base font-bold text-white/70">• Meta titles en descriptions</li>
                <li className="text-base font-bold text-white/70">• Header structuur (H1, H2, H3)</li>
                <li className="text-base font-bold text-white/70">• Interne link suggesties</li>
                <li className="text-base font-bold text-white/70">• Alt-teksten voor afbeeldingen</li>
                <li className="text-base font-bold text-white/70">• WordPress-ready formatting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              PAKKETTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Van losse teksten tot complete campagnes
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Losse SEO teksten',
                price: 'vanaf EUR 70',
                description: 'per tekst',
                features: ['Basis zoekwoordenonderzoek', 'Geoptimaliseerde webtekst', 'Meta title en description', 'Strategische keyword plaatsing', 'Direct inzetbaar']
              },
              {
                name: 'Content pakket klein',
                price: 'EUR 600',
                description: '5-10 teksten',
                features: ['Contentplan opstellen', 'Zoekwoordenonderzoek per tekst', '5-10 SEO teksten', 'Blogs of landingspagina\'s', 'Performance tracking'],
                featured: true
              },
              {
                name: 'Content pakket groot',
                price: 'EUR 1.250',
                description: '15-25 teksten',
                features: ['Uitgebreide contentstrategie', 'Diepgaand zoekwoordenonderzoek', '15-25 SEO teksten', 'Mix van tekstsoorten', 'Perfect voor snelle groei']
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
                  variant={pkg.featured ? undefined : "lime"}
                  className={`w-full ${pkg.featured ? 'bg-black text-accent border-black hover:bg-white hover:text-black' : ''}`}
                >
                  <Link href="/contact">
                    OFFERTE AANVRAGEN
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection items={faqData} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTA
        variant="dark"
        label="KLAAR OM TE BEGINNEN?"
        heading="Laat teksten schrijven die scoren"
        description="Klaar om te investeren in content die daadwerkelijk resultaat oplevert? Neem contact op voor een vrijblijvende kennismaking."
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
