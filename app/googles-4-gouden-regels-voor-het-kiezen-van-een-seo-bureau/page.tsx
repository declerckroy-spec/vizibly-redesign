import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
  description: 'Google\'s John Mueller geeft 4 concrete tips voor het kiezen van een SEO bureau. Ontdek welke rode vlaggen je moet vermijden.',
  openGraph: {
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    description: 'Google\'s John Mueller geeft 4 concrete tips voor het kiezen van een SEO bureau. Ontdek welke rode vlaggen je moet vermijden.',
    url: 'https://vizibly.nl/googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/seo-bureau-kiezen.png' }],
  },
};

const relatedArticles = [
  {
    slug: 'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
    title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
    image: '/blog/seo-uitbesteden.jpg',
    excerpt: 'Zelf doen of uitbesteden? Maak de juiste keuze voor jouw situatie.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings',
    title: 'SEO mythe ontkracht: meer links leiden automatisch tot hogere rankings',
    image: '/blog/backlinks.jpg',
    excerpt: 'Waarom 10 sterke links meer waard zijn dan 1000 spammy links.'
  }
];

export default function GoogleSEOBureauRegelsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau/#article",
        "headline": "Google's 4 gouden regels voor het kiezen van een SEO bureau",
        "description": "Google's John Mueller geeft 4 concrete tips voor het kiezen van een SEO bureau.",
        "image": "https://vizibly.nl/blog/seo-bureau-kiezen.png",
        "datePublished": "2025-07-15",
        "dateModified": "2025-07-15",
        "author": {
          "@type": "Person",
          "name": "Roy de Clerck"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Vizibly",
          "@id": "https://vizibly.nl/#organization"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://vizibly.nl/googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau/"
        }
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
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-20 lg:pt-48 lg:pb-24">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          {/* Back link */}
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                SEO TIPS
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Google's 4 gouden regels voor het kiezen van een SEO bureau
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  3 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/seo-bureau-kiezen.png"
                alt="Tips voor het inhuren van een SEO bureau"
                fill
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative border-b-4 border-black bg-[#fafaf8] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Google's John Mueller en Martin Splitt gaven recent duidelijk advies over wanneer je een SEO bureau moet inhuren en waar je op moet letten. Hun inzichten zijn goud waard voor elke ondernemer die overweegt om professionele SEO hulp in te schakelen, en bevestigen wat wij in de praktijk al jaren meemaken.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            1. Huur een SEO bureau in voor specialistische expertise
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Mueller erkent dat ondernemers al <a href="https://www.youtube.com/watch?v=BKDymFYpvL8&list=PLKoqnv2vTMUMxMs2PdBlDULqybdlPZxrk&index=1&ab_channel=GoogleSearchCentral" target="_blank" rel="noopener noreferrer" className="font-bold">"500 hats to wear" hebben</a> en benadrukt het belang van ervaring: "Someone else, ideally, would be someone who has more experience doing SEO."
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO lijkt soms simpel, maar de spelregels veranderen voortdurend. Google rolt regelmatig updates uit die je strategie kunnen beinvloeden. Daarom is ervaring zo waardevol.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Onze <Link href="/full-service-seo" className="font-bold">360-graden SEO aanpak</Link> combineert jaren ervaring met de nieuwste inzichten voor maximaal resultaat.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            2. Focus op omzet, niet alleen op rankings
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het belangrijkste advies van Google? Meet succes aan de hand van concrete bedrijfsresultaten, niet alleen keyword posities of traffic.
          </p>

          <div className="mb-6 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-bold text-black lg:text-lg italic">
              "When I started doing SEO for my website, I made so much more money... if you can measure in one way or another the effects of the SEO work, then it's easier to say, 'Well, I will invest this much into having someone else do that for me.'"
            </p>
            <p className="mt-4 text-base font-black text-black">- John Mueller, Google</p>
          </div>

          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Onze <Link href="/seo-copy" className="font-bold">SEO copywriting</Link> is daarom specifiek gericht op conversie, niet alleen vindbaarheid. Dat is iets wat we merken dat veel bureaus over het hoofd zien.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            3. Kies voor bewezen ervaring
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google adviseert om te kiezen voor "someone who has more experience doing SEO" omdat ondernemers al "500 hats to wear" hebben. Zoek naar:
          </p>
          <ul className="mb-12 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              <Link href="/cases" className="font-bold">Aantoonbare ervaring</Link>
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Technische kennis
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Concrete resultaten van eerdere klanten
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            4. Rode vlag: beloftes over specifieke rankings
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Dit is de grootste waarschuwing van Google en een van de redenen waarom wij altijd eerlijk zijn over wat mogelijk is. Mueller stelt glashelder:
          </p>

          <div className="mb-6 border-4 border-black bg-black p-6 lg:p-8 text-white" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
            <p className="text-base font-bold text-white lg:text-lg italic">
              "If an SEO makes any promises with regards to ranking or traffic from Search, that's usually a red flag."
            </p>
            <p className="mt-4 text-base font-bold text-white/80">
              Waarom? "They can't manually go into Google's systems and tweak the dials and change the rankings."
            </p>
          </div>

          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Bij Vizibly maken we geen loze beloftes. We garanderen wel onze volledige inzet en transparantie in onze werkwijze.
          </p>

          {/* Conclusion */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Een mooi advies
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Google's advies bevestigt wat wij als ervaren SEO bureau al jaren in de praktijk zien: focus op langetermijn resultaten, meetbare bedrijfsimpact en eerlijke communicatie. Precies de principes waar Vizibly op is gebouwd.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Op zoek naar een betrouwbaar SEO bureau?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Bij Vizibly werken we volgens de principes die Google adviseert: eerlijke communicatie, focus op resultaat en aantoonbare ervaring.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. Of plan een gesprek.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <RelatedArticles articles={relatedArticles} />

      <FinalCTA
        heading="Klaar om te groeien?"
        description="Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden."
      />

      <Footer />
    </>
  );
}
