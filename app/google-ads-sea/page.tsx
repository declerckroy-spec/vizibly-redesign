import { Navigation } from '@/components/navigation';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, Target, TrendingUp, DollarSign, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google Ads specialist | Direct meer leads',
  description: 'Effectieve Google Ads campagnes die direct resultaat opleveren. Van zoekadvertenties tot Shopping - wij zorgen voor maximale ROI.',
  openGraph: {
    title: 'Google Ads specialist | Direct meer leads',
    description: 'Effectieve Google Ads campagnes die direct resultaat opleveren. Van zoekadvertenties tot Shopping - wij zorgen voor maximale ROI.',
    url: 'https://vizibly.nl/google-ads-sea/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function GoogleAdsPage() {
  const faqData = [
    {
      question: 'Waarom Google Ads naast SEO?',
      answer: 'SEO is een langetermijnstrategie. Google Ads levert direct verkeer. De combinatie is krachtig: terwijl je SEO groeit, genereer je met Ads al leads.'
    },
    {
      question: 'Hoeveel budget heb ik nodig voor Google Ads?',
      answer: 'Dat hangt af van je branche en concurrentie. We adviseren een minimum van EUR 500-1000 per maand aan advertentiebudget om significante resultaten te behalen.'
    },
    {
      question: 'Hoe snel zie ik resultaat met Google Ads?',
      answer: 'Direct. Zodra je campagne live staat, kun je verkeer en leads genereren. De eerste weken zijn voor optimalisatie - daarna stabiliseren de resultaten.'
    },
    {
      question: 'Wat is het verschil tussen SEO en SEA?',
      answer: 'SEO draait om organische resultaten - je betaalt niet per klik. SEA is betaalde advertentieruimte - je betaalt per klik. Beide hebben voor- en nadelen en vullen elkaar aan.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/google-ads-sea/#service",
        "name": "Google Ads Management",
        "description": "Professioneel Google Ads beheer voor maximale ROI",
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
        "@id": "https://vizibly.nl/google-ads-sea/#faq",
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
                DIRECT RESULTAAT
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">Google Ads</span>
                </span>
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Terwijl SEO tijd nodig heeft om te groeien, levert Google Ads direct verkeer. De perfecte aanvulling op je organische strategie.
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
                  src="/Bestaande afbeeldingen/macbook-air-on-grey-wooden-table.jpeg"
                  alt="Google Ads specialist aan het werk"
                  width={600}
                  height={600}
                  className="w-full border-4 border-black grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Google Ads Section */}
      <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                WAAROM GOOGLE ADS
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Direct zichtbaar, direct resultaat
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                Google Ads plaatst je direct bovenaan de zoekresultaten. Je betaalt alleen wanneer iemand klikt. Met de juiste strategie is elke klik een potentiële klant.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                Het verschil tussen geldverspilling en een geldmachine zit in de details: zoekwoorden, biedstrategieën, advertentieteksten en landingspagina's.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              VOORDELEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Wat Google Ads je brengt
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Precisie targeting',
                description: 'Bereik exact de mensen die zoeken naar jouw producten of diensten. Geen waste, alleen relevante kliks.'
              },
              {
                icon: TrendingUp,
                title: 'Schaalbaar',
                description: 'Begin klein en schaal op wat werkt. Met data-driven optimalisatie groei je gecontroleerd.'
              },
              {
                icon: DollarSign,
                title: 'Meetbare ROI',
                description: 'Elke euro is traceerbaar. Je weet exact wat je advertenties opleveren aan leads en omzet.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group border-4 border-black bg-white p-8 transition-all hover:translate-x-1 hover:translate-y-1"
                style={{ boxShadow: '8px 8px 0 0 #000000' }}
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

      {/* Simple CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="mb-8 text-brutalist-h1 text-black">
                We helpen je graag
              </h2>
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl mb-6">
                Google Ads is niet onze core business, maar we kunnen je zeker helpen. We zetten effectieve campagnes op en optimaliseren ze voor maximaal rendement.
              </p>
              <ul className="space-y-4">
                {[
                  'Search campagnes opzetten',
                  'Shopping campagnes voor webshops',
                  'Remarketing om bezoekers terug te halen',
                  'Conversie tracking inrichten'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-black mt-0.5" />
                    <span className="text-base font-bold text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-4 border-black bg-white p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
              <h3 className="mb-6 text-xl font-black uppercase text-black">Combineer SEO en SEA</h3>
              <p className="text-base font-bold text-black/70 mb-8">
                De krachtigste strategie combineert organisch en betaald verkeer. Terwijl je SEO groeit, genereer je met Ads al direct leads en inzichten.
              </p>
              <Button size="lg" asChild className="w-full text-base">
                <Link href="/contact">
                  BESPREEK DE MOGELIJKHEDEN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
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
                Vragen over Google Ads?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
              <p className="text-base font-bold text-black/70 lg:text-lg">
                Heb je een vraag die hier niet bij staat? Neem gerust contact met ons op.
              </p>
            </div>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-4 border-black bg-white px-6"
                    style={{ boxShadow: '4px 4px 0 0 #000000' }}
                  >
                    <AccordionTrigger className="text-left text-base font-black uppercase hover:no-underline py-6">
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

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section - Black background after lime testimonials */}
      <section className="relative border-b-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
              KLAAR OM TE BEGINNEN?
            </p>

            <h2 className="mb-8 text-brutalist-h1 text-white">
              Start met Google Ads
            </h2>

            <p className="mb-12 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              Klaar om direct zichtbaar te zijn in Google? Neem contact op voor een vrijblijvend gesprek.
            </p>

            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                LET'S GO!!
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
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Diensten</h4>
              <ul className="space-y-4">
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Local SEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Contact</h4>
              <ul className="space-y-4 text-base font-bold text-white/80 lg:text-lg">
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
