import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function CTAWithImage() {
  return (
    <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-44">
      <div className="mx-auto max-w-screen-2xl px-6">
        {/* Zigzag layout: tekst links, foto rechts */}
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Tekst Sectie */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <div className="inline-block border-4 border-black bg-accent px-6 py-2 mb-4">
                <p className="text-lg font-black uppercase text-black lg:text-xl">
                  GRATIS ADVIESGESPREK
                </p>
              </div>
              <p className="text-xl font-bold text-black lg:text-2xl">
                Voor ondernemers die online willen groeien
              </p>
            </div>

            <h2 className="mb-8 text-brutalist-h1 text-black">
              Benieuwd wat er mogelijk is?
            </h2>

            <div className="mb-10">
              <p className="mb-6 text-xl font-bold text-black xl:text-2xl">
                In een kort gesprek van 15 minuten kijk ik samen met je naar je huidige situatie. Geen verkooppraatje, gewoon een eerlijk gesprek. Daarna weet je:
              </p>

              <div className="grid gap-4">
                {[
                  'Of je huidige site bezoekers binnenhaalt of juist wegjaagt',
                  'Hoe zichtbaar je bent voor mensen die zoeken naar wat jij aanbiedt',
                  'Welke stap het meeste oplevert voor jouw specifieke situatie'
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

            <Button asChild size="lg" className="px-10 py-7 text-base">
              <Link href="/contact">
                PLAN EEN GESPREK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Foto Sectie */}
          <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
            <Image
              src="/Bestaande afbeeldingen/seo-audit-white-blocks-on-brown-wooden.jpeg"
              alt="SEO Analyse - Ontdek waar je klanten kwijtraakt"
              fill
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              className="object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
