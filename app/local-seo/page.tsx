import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection } from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Star, Building2, Search, Check, Map, Users, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Local SEO | Word #1 in jouw regio',
  description: 'Domineer de lokale zoekresultaten met Local SEO. Van Google Business Profile tot lokale citations - wij zorgen dat je gevonden wordt in jouw regio.',
  openGraph: {
    title: 'Local SEO | Word #1 in jouw regio',
    description: 'Domineer de lokale zoekresultaten met Local SEO. Van Google Business Profile tot lokale citations - wij zorgen dat je gevonden wordt in jouw regio.',
    url: 'https://vizibly.nl/local-seo/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function LocalSeoPage() {
  const faqData = [
    {
      question: 'Wat is Local SEO precies?',
      answer: 'Local SEO is het optimaliseren van je online aanwezigheid voor lokale zoekopdrachten. Denk aan "loodgieter Amsterdam" of "restaurant in de buurt". Het doel is om in de lokale zoekresultaten en Google Maps hoog te scoren.'
    },
    {
      question: 'Hoe belangrijk is Google Business Profile?',
      answer: 'Essentieel. Je Google Business Profile bepaalt grotendeels of je in de Map Pack verschijnt - de top 3 lokale resultaten met kaart die Google toont. Een geoptimaliseerd profiel kan je zichtbaarheid verdubbelen.'
    },
    {
      question: 'Hoe lang duurt het voordat Local SEO resultaat oplevert?',
      answer: 'Local SEO werkt vaak sneller dan reguliere SEO. De eerste verbeteringen zie je binnen 1-3 maanden. Volledige resultaten zijn doorgaans zichtbaar na 4-6 maanden consistent werk.'
    },
    {
      question: 'Werkt Local SEO ook voor bedrijven zonder fysiek adres?',
      answer: 'Ja, met een Service Area Business profiel kun je ook zonder fysieke locatie lokaal gevonden worden. We optimaliseren dan voor de regio\'s waar je actief bent.'
    },
    {
      question: 'Hoe belangrijk zijn reviews voor Local SEO?',
      answer: 'Reviews zijn een van de belangrijkste lokale rankingfactoren. Ze beïnvloeden niet alleen je positie in Google Maps, maar ook het vertrouwen van potentiële klanten. Wij helpen je een review-strategie op te zetten.'
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://vizibly.nl/local-seo/#service",
        "name": "Local SEO",
        "description": "Lokale zoekmachine optimalisatie voor meer zichtbaarheid in jouw regio",
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
        "@id": "https://vizibly.nl/local-seo/#faq",
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
                DOMINEER JOUW REGIO
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none text-black">
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative">Local SEO</span>
                </span>
                {' '}specialist
              </h1>

              <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Wanneer iemand zoekt naar jouw dienst in jouw regio, moet jij bovenaan staan. Met Local SEO zorg ik ervoor dat je gevonden wordt door klanten in de buurt.
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
                  src="/Bestaande afbeeldingen/middelburg-1141985_640.jpg"
                  alt="Local SEO specialist"
                  width={600}
                  height={600}
                  className="w-full border-4 border-black grayscale"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Local SEO Section */}
      <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                LOKAAL GEVONDEN WORDEN
              </p>
              <h2 className="mb-8 text-brutalist-h1 text-white">
                Wat is Local SEO?
              </h2>
              <div className="h-1 w-32 bg-accent mb-8"></div>
            </div>
            <div>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl mb-6">
                Local SEO draait om gevonden worden door mensen in jouw regio. Wanneer iemand zoekt naar "kapper Middelburg" of "beste pizzeria bij mij in de buurt", wil je bovenaan staan.
              </p>
              <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
                46% van alle Google-zoekopdrachten heeft een lokale intentie. Deze zoekers zijn vaak koopklaar - ze willen nu actie ondernemen. Mis je dit verkeer, dan mis je omzet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local SEO Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              WAAROM LOCAL SEO
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              De kracht van lokale vindbaarheid
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: 'Map Pack dominantie',
                description: 'De top 3 in Google Maps krijgt 44% van alle klikken. Sta jij erin? Dan stromen de telefoontjes en route-aanvragen binnen.'
              },
              {
                icon: Users,
                title: 'Koopklare klanten',
                description: '88% van de lokale zoekers neemt binnen 24 uur actie. Ze zoeken niet alleen - ze willen kopen, bellen of langskomen.'
              },
              {
                icon: Building2,
                title: 'Minder concurrentie',
                description: 'Lokale SEO is vaak makkelijker dan nationale SEO. Je concurreert alleen met bedrijven in jouw regio, niet het hele land.'
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

      {/* Services Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              ONZE DIENSTEN
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Complete Local SEO aanpak
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Map,
                title: 'Google Business Profile',
                description: 'Je Google Business Profile is je digitale etalage. We optimaliseren elk detail voor maximale zichtbaarheid.',
                items: ['Profieloptimalisatie', 'Categorie strategie', 'Posts en updates', 'Q&A management', 'Foto optimalisatie']
              },
              {
                icon: Search,
                title: 'Lokale SEO website',
                description: 'Je website moet lokale relevantie uitstralen. Van lokale keywords tot geo-targeting.',
                items: ['Lokale keyword research', 'Locatiepagina\'s', 'Schema markup', 'NAP consistentie', 'Lokale content']
              },
              {
                icon: Star,
                title: 'Reviews management',
                description: 'Reviews zijn cruciaal voor Local SEO én conversie. We helpen je meer en betere reviews te krijgen.',
                items: ['Review strategie', 'Response templates', 'Negatieve review handling', 'Review monitoring', 'Review widgets']
              },
              {
                icon: MessageSquare,
                title: 'Lokale citations',
                description: 'Consistente bedrijfsvermeldingen op relevante platforms versterken je lokale autoriteit.',
                items: ['Citation audit', 'NAP consistentie', 'Branchegidsen', 'Lokale directories', 'Citation cleanup']
              }
            ].map((item, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white p-8"
                style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
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

      {/* Process Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              ONZE AANPAK
            </p>
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Zo verbeteren we je lokale vindbaarheid
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Audit', description: 'We analyseren je huidige lokale positie: Google Business, website, citations en concurrentie.' },
              { step: '02', title: 'Strategie', description: 'Op basis van de audit maken we een plan met prioriteiten en quick wins.' },
              { step: '03', title: 'Optimalisatie', description: 'We optimaliseren je Google Business Profile, website en lokale aanwezigheid.' },
              { step: '04', title: 'Groei', description: 'Continue verbetering: nieuwe reviews, fresh content en monitoring van resultaten.' }
            ].map((item, index) => (
              <div
                key={index}
                className="border-4 border-black bg-white p-6 transition-all hover:-translate-y-1"
                style={{ boxShadow: '6px 6px 0 0 #CCFF00, 0 15px 40px rgba(204, 255, 0, 0.3)' }}
              >
                <span className="mb-4 inline-block border-4 border-black bg-accent px-3 py-1 text-lg font-black text-black">
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

      {/* FAQ Section */}
      <FAQSection items={faqData} heading="Vragen over Local SEO?" />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <FinalCTA
        variant="dark"
        label="KLAAR OM LOKAAL TE DOMINEREN?"
        heading="Word de nummer 1 in jouw regio"
        description="Klaar om meer lokale klanten aan te trekken? Neem contact op voor een gratis analyse van je lokale vindbaarheid."
        buttonText="LET'S GO!!"
      />

<Footer />
    </>
  );
}
