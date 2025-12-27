import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '+145% omzet uit organisch verkeer | Technische webshop',
  description: 'Een perfect voorbeeld van hoe je met ouderwetse SEO ouderwets goede resultaten kan halen.',
  openGraph: {
    title: '+145% omzet uit organisch verkeer | Technische webshop',
    description: 'Een perfect voorbeeld van hoe je met ouderwetse SEO ouderwets goede resultaten kan halen.',
    url: 'https://vizibly.nl/145-omzet-uit-organisch-verkeer-voor-technische-webshop/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function TechnischeWebshopCase() {
  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b-4 border-black bg-white py-4">
        <div className="mx-auto max-w-screen-2xl px-6">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/60 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle cases
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              CASE STUDY
            </p>
            <h1 className="mb-8 text-brutalist-hero text-black">
              +145% omzet uit organisch verkeer voor technische webshop
            </h1>
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              Een webshop in ventilatieproducten en elektra groeide in één jaar van informatief verkeer naar commerciële conversies. Omzet uit organisch verkeer steeg met 145%.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative border-b-4 border-black bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/cases/webshop-hero.jpg"
                alt="Technische webshop in ventilatie en elektra"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative bg-white">
        {/* De klant */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De klant
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Een webshop in technische ventilatieproducten en elektra. Van buisventilatoren tot WTW-units en hoofdschakelaars. Zowel voor installateurs (B2B) als particulieren die zelf klussen (B2C). Klein bedrijf, goede service, grote ambities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Het probleem */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Het probleem
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Ze waren vindbaar in Google. Informatieve content deed het goed. Productpagina's en categorieën scoorden ook, maar onvoldoende.
                </p>

                <p>
                  Het probleem: bezoekers kwamen vooral binnen via content, niet via de pagina's waar verkocht wordt. En de producten met hoge marges, zoals ventilatieboxen en WTW-units, bleven achter. Daar zat de groei.
                </p>

                <p>
                  Concurrentie van grote spelers zoals Elektramat en Ventilatieland maakte het niet makkelijker.
                </p>

                <p>
                  Dit was hun eerste <Link href="/full-service-seo" className="underline hover:text-accent transition-colors">serieuze SEO-traject</Link>. Ze hadden al basis op orde, maar wilden doorgroeien.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                src="/cases/webshop-verkeer.jpg"
                  alt="Stijging verkeer technische webshop"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </section>

        {/* Wat we gedaan hebben */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Wat we gedaan hebben
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Focus verlegd naar waar het geld zit: productpagina's met hoge marges. Ventilatieboxen, WTW-units, mechanische ventilatiesystemen.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Concrete aanpak:
                </h3>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span><Link href="/seo-copy" className="underline hover:text-accent transition-colors">Contentplan gemaakt</Link> op basis van winstgevendheid. Niet op basis van zoekvolume. Waar verdient deze webshop het meeste aan? Daar schrijven we voor.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Teksten geoptimaliseerd voor conversie én vindbaarheid. Geschreven voor mensen die willen kopen. Niet voor Google's algoritme.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Topical relevantie opgebouwd rond high-margin producten. Google moet snappen: dit is een autoriteit op het gebied van professionele ventilatieproducten.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Maandelijks <Link href="/linkbuilding" className="underline hover:text-accent transition-colors">sterke backlinks</Link> verzameld. Geen spam. Alleen links van websites die écht relevant zijn voor de branche.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resultaten */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Resultaten na één jaar
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <h3 className="text-brutalist-h3 text-black mb-6">
                  Verkeer en omzet:
                </h3>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Organisch verkeer: Bijna de helft meer (+46%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Omzet uit organisch verkeer: +145%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Aantal kopers: +126%</span>
                  </li>
                </ul>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Ranking voorbeelden:
                </h3>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>"beste mechanische ventilatie": positie 34 → 5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>"badkamerventilator 100mm 150m3": positie 20 → 3</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>"buisventilator": positie 12 → 7 (clicks verdubbeld!)</span>
                  </li>
                </ul>

                <p className="mt-8">
                  De shift van informatieve naar commerciële vindbaarheid werkt. Bezoekers komen nu binnen op pagina's waar ze kunnen kopen. En ze kopen ook.
                </p>
              </div>

              {/* Image 2 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                src="/cases/webshop-omzet.jpg"
                  alt="Groei in omzet technische webshop"
                  width={800}
                  height={150}
                  className="w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </section>

        {/* SEO is meer dan bezoekers alleen */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                SEO is meer dan bezoekers alleen
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  SEO gaat niet over verkeer. SEO gaat over het juiste verkeer.
                </p>

                <p>
                  Deze <Link href="/seo-voor-webshop" className="underline hover:text-accent transition-colors">webshop</Link> had al bezoekers. Maar die bezoekers kostten meer dan ze opbrachten. Door focus te leggen op producten met hoge marges en die pagina's vindbaar te maken, verandert de hele business case.
                </p>

                <p>
                  Meer verkeer is leuk. Meer omzet uit hetzelfde verkeer is beter. Maar meer omzet uit méér verkeer op de juiste pagina's? Dat is groei.
                </p>

                <p className="mt-8">
                  Wil je ook meer omzet uit Google? Bel me: <a href="tel:0628206410" className="underline hover:text-accent transition-colors">06 282 064 10</a>. In 15 minuten weet je waar jouw kansen liggen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Final CTA Section */}
      <FinalCTA
        heading="Ook meer omzet uit je webshop?"
        description="Ontdek alles over mijn full service aanpak"
        showSecondaryButton={true}
        secondaryButtonText="FULL SERVICE SEO"
        secondaryButtonHref="/full-service-seo"
      />

<Footer />
    </>
  );
}
