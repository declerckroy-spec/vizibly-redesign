import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function CTAWithImage() {
  return (
    <section className="relative border-b-4 border-black bg-white py-28 lg:py-40">
      <div className="mx-auto max-w-screen-2xl px-6">
        {/* Zigzag layout: tekst links, foto rechts */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Tekst Sectie */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-block border-4 border-black bg-accent px-6 py-2 mb-4">
                <p className="text-lg font-black uppercase text-black lg:text-xl">
                  GRATIS WEBSITE-ANALYSE
                </p>
              </div>
              <p className="text-xl font-bold text-black lg:text-2xl">
                Voor ondernemers die niet langer willen gissen waar hun klanten blijven
              </p>
            </div>

            <h2 className="mb-8 text-brutalist-h1 text-black">
              Ontdek in 15 minuten waar je klanten kwijtraakt
            </h2>

            <div className="mb-10">
              <p className="mb-6 text-xl font-bold text-black xl:text-2xl">
                Je website kost je elke dag onzichtbare omzet. In een kort gesprek maken we zichtbaar:
              </p>

              <div className="grid gap-4">
                {[
                  'Welke zoekwoorden je mist waar je concurrent wel op scoort',
                  'Waar je website nu echt staat in Google',
                  'Hoe we samen een plan maken voor jouw online groei'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 border-l-4 border-accent pl-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="flex h-8 w-8 items-center justify-center border-4 border-black bg-accent">
                        <Check className="h-5 w-5 text-black font-bold" strokeWidth={4} />
                      </div>
                    </div>
                    <span className="text-lg font-bold text-black xl:text-xl">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild size="lg" className="w-fit bg-accent text-black border-accent hover:bg-black hover:text-accent px-12 py-8 text-lg">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>

          {/* Foto Sectie */}
          <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #000000' }}>
            <Image
              src="/Bestaande afbeeldingen/seo-audit-white-blocks-on-brown-wooden.jpeg"
              alt="SEO Analyse - Ontdek waar je klanten kwijtraakt"
              fill
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
