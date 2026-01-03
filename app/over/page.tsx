import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { FinalCTA } from '@/components/final-cta';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over mij | Roy de Clerck',
  description: 'Websites bouwen die scoren. Rankings zien stijgen. Ik ben Roy de Clerck, specialist in high-end websites en SEO. Één aanspreekpunt, geen gedoe.',
  openGraph: {
    title: 'Over mij | Roy de Clerck',
    description: 'Websites bouwen die scoren. Rankings zien stijgen. Ik ben Roy de Clerck, specialist in high-end websites en SEO. Één aanspreekpunt, geen gedoe.',
    url: 'https://vizibly.nl/over/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: 'https://vizibly.nl/team/roy.webp',
        width: 952,
        height: 1356,
      }
    ],
  },
};

export default function OverPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Roy de Clerck",
      "jobTitle": "Website & SEO Specialist",
      "worksFor": {
        "@type": "Organization",
        "name": "Vizibly",
        "@id": "https://vizibly.nl/#organization"
      },
      "description": "Specialist in high-end websites en SEO. Bouwt premium sites voor MKB prijzen."
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section - met foto */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-36 pb-24 lg:pt-44 lg:pb-36">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
                ÉÉN SPECIALIST, GEEN GEDOE
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">
                Over{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-accent"></span>
                  <span className="relative">mij</span>
                </span>
              </h1>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Websites bouwen die scoren. Rankings zien stijgen. Dat is wat ik doe. En ik word er nog steeds blij van ook.
              </p>

              <p className="mb-10 text-xl font-black text-black lg:text-2xl">
                Ik ben Roy de Clerck. Aangenaam!
              </p>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  LATEN WE KENNISMAKEN
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/team/roy.webp"
                alt="Roy de Clerck - Vizibly"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium sites. Betaalbare prijzen. */}
      <section className="relative border-y-4 border-black bg-[#0a0a0a] py-32 text-white lg:py-40">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-brutalist-h1 text-white">
              Premium kwaliteit.{' '}
              <span className="text-accent">Eerlijke prijzen.</span>
            </h2>
            <div className="h-1 w-32 bg-accent mb-10"></div>

            <p className="mb-8 text-base font-bold text-white/90 lg:text-lg xl:text-xl">
              Ik heb een proces ontwikkeld waarmee ik high-end websites maak die presteren als sites van €15.000 of meer. Qua snelheid, qua design, qua resultaat. Maar dan voor de prijs van een standaard WordPress website.
            </p>

            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              Geen generieke designs die je overal ziet. Geen sites waarvan je meteen ziet dat ze met een builder zijn gemaakt. Gewoon: premium kwaliteit die past bij jouw bedrijf.
            </p>

            <div className="border-l-4 border-accent pl-6 py-4 bg-white/5">
              <p className="text-base font-bold text-accent lg:text-lg xl:text-xl">
                Technisch perfect gebouwd. Razendsnel. En als er iets moet gebeuren: één telefoontje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Winnen en mooi maken - Full width */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="max-w-4xl">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Winnen en mooi maken
            </h2>
            <div className="h-1 w-32 bg-black mb-10"></div>

            <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Ik hou van winnen. En van mooie dingen maken waar ik én de klant trots op zijn.
            </p>

            <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Het mooiste moment? Als je samen met een klant aan tafel zit, zijn visie begrijpt, en dat vertaalt in iets dat werkt. Je ziet de site ontstaan. Rankings stijgen. Conversies groeien.
            </p>

            <div className="border-l-4 border-accent pl-6 py-4">
              <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
                Dat creatieve proces, dat leren kennen van een bedrijf en hun markt: dát is waar ik het voor doe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waar ik me aan erger - Accent strip */}
      <section className="relative border-y-4 border-black bg-accent py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 items-center">
            <div className="lg:col-span-2">
              <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl mb-4">
                Designers die SEO niet snappen. SEO'ers die design niet snappen. Jij betaalt voor die miscommunicatie. Sites die mooi zijn maar niets opleveren. Of sites die scoren maar eruitzien als een Word document uit 2005.
              </p>
            </div>
            <div className="border-4 border-black bg-black p-6" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
              <p className="text-base font-black text-accent lg:text-lg xl:text-xl">
                Daarom doe ik het zelf. Beide. Eén persoon, één visie, geen gedoe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Voor ondernemers - Full width */}
      <section className="relative bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
            <div className="lg:col-span-3">
              <h2 className="mb-8 text-brutalist-h1 text-black">
                Voor ondernemers met poten in de klei
              </h2>
              <div className="h-1 w-32 bg-black mb-10"></div>

              <p className="mb-8 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Ik werk het liefst met mensen die weten wat ze willen en snel schakelen. Ondernemers met een visie. Mensen die korte lijnen waarderen en geen zin hebben in eindeloos overleg met accountmanagers die niks te vertellen hebben.
              </p>

              <div className="border-4 border-black p-6 bg-accent/10" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <p className="text-base font-bold text-black lg:text-lg xl:text-xl">
                  Als je goed bent in wat je doet en gevonden wil worden door mensen die je zoeken: dan kunnen we samen wat moois maken.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center">
              <h3 className="mb-6 text-2xl font-black uppercase text-black lg:text-3xl">
                Eén aanspreekpunt.{' '}
                <span className="text-black/60">Groter netwerk.</span>
              </h3>

              <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
                Ik bouw je site en doe de SEO. Maar ik kan niet álles. Google Ads? Webshop marketing? Social media? Ik ken mensen die dat beter doen.
              </p>

              <div className="border-l-4 border-accent pl-6 py-4 bg-accent/20">
                <p className="text-base font-bold text-black lg:text-lg">
                  Geen verplicht pakket, gewoon de beste persoon voor wat jij nodig hebt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Team Image Section */}
      <section className="relative border-y-4 border-black">
        <div className="relative aspect-[21/9] overflow-hidden">
          <Image
            src="/team/vizibly-sports.webp"
            alt="Vizibly Sports"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-semibold uppercase tracking-widest text-white/80 lg:text-xl">
                VIZIBLY
              </p>
              <p className="text-4xl font-black uppercase text-white lg:text-6xl">
                MET PASSIE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <FinalCTA
        label="LATEN WE KENNISMAKEN"
        heading="Benieuwd wat we samen kunnen bereiken?"
        buttonText="PLAN EEN GESPREK"
      />

      <Footer />
    </>
  );
}
