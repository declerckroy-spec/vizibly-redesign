import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Bloemist: van 1.700 naar 10.000 bezoekers | +1500% omzet',
  description: 'In twee jaar tijd groeide een online bloemist van 1.700 naar 10.000 organische bezoekers per maand. Omzet steeg met 1.500%.',
  openGraph: {
    title: 'Bloemist: van 1.700 naar 10.000 bezoekers | +1500% omzet',
    description: 'In twee jaar tijd groeide een online bloemist van 1.700 naar 10.000 organische bezoekers per maand. Omzet steeg met 1.500%.',
    url: 'https://vizibly.nl/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function BloemistCase() {
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
              Online bloemist groeit van 1.700 naar 10.000 bezoekers per maand
            </h1>
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              In twee jaar tijd groeide een online bloemist van 1.700 naar 10.000 organische bezoekers per maand. Omzet steeg met 1.500%. Dit is het verhaal van systematische SEO die echt werkt.
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
                src="/cases/bloemist-hero.jpg"
                alt="Online bloemist webshop"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative bg-white">
        {/* De uitdaging */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De uitdaging
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Een online bloemist met potentie. Mooie webshop, goede producten, sterke basis. Intern hadden ze hun marketingzaken goed op orde: CRO, UX, mailmarketing. Hun eigen marketeer wist wat werkte.
                </p>

                <p>
                  Maar wie zocht naar "bloemen bezorgen" vond ze niet. De website trok vooral branded verkeer. Mensen die al wisten dat ze bestaan. Nieuwe klanten? Die gingen naar de concurrent.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Wat ontbrak:
                </h3>

                <p>
                  Een concrete <Link href="/seo-strategie" className="underline hover:text-accent transition-colors">SEO-strategie</Link>. Geen plan voor welke pagina's nodig waren. Teksten die er wel stonden maar niet geoptimaliseerd waren. Geo-pagina's zonder focus. En een linkprofiel dat te zwak was om op te vallen tussen grote spelers als Fleurop en Topbloemen.
                </p>

                <p>
                  Ze hadden alles in huis om te groeien. Ze misten alleen de SEO-expertise om dat ook online te laten zien.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                  src="/cases/bloemist-groei-bezoekers-1.jpg"
                  alt="Groei in bezoekers online bloemist"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* De aanpak */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De aanpak
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Geen quick fixes. Een systeem dat elke maand beter wordt. Hun eigen marketeer bleef focussen op conversie, UX en mailmarketing. Ik pakte de SEO aan.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  100 geo-pagina's geschreven en geoptimaliseerd
                </h3>

                <p>
                  Voor elke plaats in Nederland een pagina. Met teksten die werken voor mensen én voor Google. Niet gekopieerd en aangepast. Echt geschreven. Focus op plaatsen waar lokale bloemisten zwak scoren. Kleine dorpen, buitenwijken, plekken waar grote partijen niet de moeite nemen om goed te zijn.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Maandelijks sterke backlinks
                </h3>

                <p>
                  Geen spam. Geen linkfarms. Alleen verwijzingen van relevante, sterke websites. Maand na maand. Gericht op de homepage, blogs, categorieën en de belangrijkste geo-pagina's.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Informatieve content die helpt
                </h3>

                <p>
                  Artikelen over de taal van bloemen. Uitleg over achteraf betalen. Tips voor mensen met hooikoorts. Content die bezoekers helpt én autoriteit opbouwt.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Alle denkbare categorieën toegevoegd
                </h3>

                <p>
                  Rozen, lelies, tulpen, rouwboeketten. Elke bloem, elke gelegenheid, elke vraag kreeg een eigen pagina met goede teksten.
                </p>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Interne linkstructuur opgebouwd
                </h3>

                <p>
                  Provincieoverzichten, kruimelpaden, logische verbindingen tussen pagina's. Zodat Google én bezoekers hun weg vinden. Het belangrijkste? Dit werkt alleen als systeem. Eén ding doen geeft geen doorslag. Alles samen wel.
                </p>
              </div>

              {/* Image 2 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                  src="/cases/bloemist-omzet.jpg"
                  alt="Stijging kopers en omzet online bloemist"
                  width={800}
                  height={150}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* De resultaten */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De resultaten
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span><strong>Organisch verkeer:</strong> van 1.700 naar 10.000 bezoekers per maand (455% groei)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span><strong>Omzet uit organisch verkeer:</strong> +1.500%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span><strong>Aantal kopers:</strong> +862%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span><strong>Nieuwe klanten:</strong> +892%</span>
                  </li>
                </ul>

                <h3 className="text-brutalist-h3 text-black mt-12 mb-6">
                  Rankings die ertoe doen:
                </h3>

                <ul className="space-y-4 list-none">
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Positie 5 voor "bloemen bezorgen"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Tientallen #1 posities voor lokale zoektermen (bloemist + plaatsnaam, bloemenwinkel + plaatsnaam)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-accent">▸</span>
                    <span>Groot aantal top 3 posities voor productspecifieke termen ("lelie boeket", "bloemen met vaas bezorgen")</span>
                  </li>
                </ul>

                <p className="mt-8">
                  De grootste winst zit in lokale termen. Waar grote partijen generiek blijven, scoort deze bloemist specifiek. Positie 1 in dorpen en wijken waar concurrenten niet de moeite nemen.
                </p>
              </div>

              {/* Image 3 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                  src="/cases/bloemist-groei-bezoekers-2.jpg"
                  alt="Groei in bezoekers online bloemist - grafiek"
                  width={800}
                  height={450}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Wat dit laat zien */}
        <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Wat dit laat zien
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  SEO is geen trucje. Het is een systeem dat maand na maand beter wordt. Vooral als je intern al je zaken op orde hebt.
                </p>

                <p>
                  Deze online bloemist had een goed product en sterke marketing. CRO, UX, mailmarketing: dat stond. Ze misten alleen de <Link href="/seo-voor-webshop" className="underline hover:text-accent transition-colors">webshop SEO-expertise</Link> om nieuwe klanten binnen te halen. Met die aanvulling groei je van "onvindbaar" naar "eerste keuze" in twee jaar.
                </p>

                <p>
                  Wil je ook meer klanten via Google? Bel me: <a href="tel:0628206410" className="underline hover:text-accent transition-colors">06 282 064 10.</a> In 15 minuten vertel ik je wat er moet gebeuren.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Final CTA Section */}
      <FinalCTA
        heading="Ook goed vindbaar worden als webshop?"
        description="Ontdek alles over mijn full service aanpak"
        showSecondaryButton={true}
        secondaryButtonText="FULL SERVICE SEO"
        secondaryButtonHref="/full-service-seo"
      />

<Footer />
    </>
  );
}
