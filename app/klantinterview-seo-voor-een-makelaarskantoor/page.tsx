import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Klantinterview: SEO voor een makelaarskantoor',
  description: '"Ons doel was natuurlijk ook om op één te komen. Dat lukte niet meteen, maar binnen een paar maanden stonden we wel in de top drie."',
  openGraph: {
    title: 'Klantinterview: SEO voor een makelaarskantoor',
    description: '"Ons doel was natuurlijk ook om op één te komen. Dat lukte niet meteen, maar binnen een paar maanden stonden we wel in de top drie."',
    url: 'https://vizibly.nl/klantinterview-seo-voor-een-makelaarskantoor/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
  },
};

export default function MakelaarCase() {
  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <section className="border-b-4 border-black bg-[#fafaf8] py-4">
        <div className="mx-auto max-w-screen-2xl px-6">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-black/60 transition-colors hover:text-black"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle cases
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              KLANTINTERVIEW
            </p>
            <h1 className="mb-8 text-brutalist-hero text-black">
              SEO voor een makelaarskantoor
            </h1>
            <div className="h-1 w-32 bg-accent mb-8"></div>
            <p className="text-base font-bold text-black/70 lg:text-lg xl:text-xl">
              "Ons doel was natuurlijk ook om op één te komen. Dat lukte niet meteen, maar binnen een paar maanden stonden we wel in de top drie."
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative border-b-4 border-black bg-[#0a0a0a] py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative border-4 border-black" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/cases/makelaar-hero.jpg"
                alt="Tak Makelaardij - makelaar Cadzand"
                width={1200}
                height={800}
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
      <article className="relative bg-[#fafaf8]">
        {/* Over de klant */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Over de klant
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  <a href="https://www.takmakelaardij.nl/" target="_blank" rel="noopener noreferrer" className="font-bold">Tak Makelaardij</a> was een van mijn eerste klanten toen ik begon met SEO-dienstverlening. Het is een bijzonder makelaarskantoor in Cadzand, gespecialiseerd in zowel reguliere als recreatieve woningen. Als verkoopmakelaar én NWWI-gevalideerd taxateur bedienen zij West-Zeeuws-Vlaanderen, met veel internationale klanten uit België en Duitsland.
                </p>

                <p>
                  Inmiddels zijn ze uitgegroeid tot dé makelaar van Cadzand en omstreken: ze verkopen de meeste huizen in de regio. Het is dan ook een van mijn favoriete samenwerkingen, omdat we dezelfde spirit delen: hard werken, eerlijk zijn, werken met vertrouwen, doen wat je zegt en zeggen wat je doet. En bovenal: kennis en kundigheid als basis voor alles wat je doet.
                </p>

                <div className="border-l-4 border-accent pl-6 my-12">
                  <p className="text-brutalist-h3 text-black italic">
                    Het begin van het succes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* De start */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De start: een website zonder zichtbaarheid
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  In 2019 startte Tak Makelaardij met een simpele WordPress-website, gemaakt door een vriend. "We werkten met een WordPress-website. Gemaakt door een vriend van Peter. En ja, ik denk met enkel het nodige erop," vertelt Marriët van Tak Makelaardij. "Daar waren we toen totaal niet meer bezig. Dus we kwamen ook niet in de top drie naar boven."
                </p>

                <p>
                  Als makelaar gespecialiseerd in recreatiewoningen aan de Nederlandse kust, met veel Duitse en Belgische klanten, was online zichtbaarheid cruciaal. Maar net als veel kleine ondernemers hadden ze geen idee hoe ze dat moesten aanpakken.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-12 relative border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <Image
                src="/cases/makelaar-seo-dominantie.png"
                  alt="SEO dominantie makelaar Cadzand"
                  width={800}
                  height={400}
                  className="w-full h-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
            </div>
          </div>
        </section>

        {/* De eerste doorbraak */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De eerste doorbraak: van onzichtbaar naar vindbaar
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Toen ik als tekstschrijver de SEO-teksten voor hen ging schrijven, veranderde de situatie snel. Als tekstschrijver had ik al wat verstand van SEO, maar dit was nog voordat ik me volledig specialiseerde in zoekmachineoptimalisatie voor de vastgoedbranche.
                </p>

                <div className="border-l-4 border-accent pl-6 my-8">
                  <p className="text-base font-bold text-black lg:text-lg xl:text-xl italic">
                    "Dat we op Google beter gevonden werden. En ons doel was natuurlijk ook om op één te komen. Dat lukte niet meteen, maar binnen een paar maanden stonden we wel in de top drie."
                  </p>
                </div>

                <p>
                  De persoonlijke aanpak maakte het verschil. "Persoonlijk contact. Laagdrempelig," legt Marriet uit over wat ze het meest waardeerde in onze samenwerking. "Je gaf er je eigen draai aan. Je zette ons qua copywriting neer als de 'new kid on the block'." Dit was belangrijk omdat er in de regionale markt een aantal gevestigde namen zijn waar ze tegenop moesten.
                </p>

                <p>
                  Naast het schrijven van de teksten hielp ik ook met <Link href="/linkbuilding" className="font-bold">linkbuilding</Link>: het verkrijgen van kwalitatieve backlinks van andere websites. Toen deze links eenmaal actief werden, zagen we de posities snel omhoog gaan. De combinatie van goede, geoptimaliseerde teksten én relevante backlinks zorgde ervoor dat Tak Makelaardij steeds hoger kwam te staan in Google.
                </p>

                <div className="border-l-4 border-accent pl-6 my-8">
                  <p className="text-base font-bold text-black lg:text-lg xl:text-xl italic">
                    "De woning moet gevonden worden, de verkoper moet weten dat we online goed zichtbaar zijn. Daar kun je niet meer omheen."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Een omweg */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Een omweg: experimenteren met extra ondersteuning
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Zoals veel groeiende ondernemers besloot Tak Makelaardij op een gegeven moment om te experimenteren met aanvullende marketingondersteuning van een ander bureau, terwijl ik betrokken bleef. Het idee was om te kijken of deze extra inzet nog meer resultaat zou opleveren.
                </p>

                <p>
                  Het tegenovergestelde gebeurde: ze merkten dat hun posities begonnen te dalen. Het verschil zat vooral in de persoonlijke betrokkenheid: "Het contact was heel anders. Ze waren totaal niet zo betrokken als jij bent. En weten hoe ons bedrijf in elkaar zit. En wat wij nodig hebben."
                </p>

                <p>
                  Voor een specialistische makelaar zoals Tak Makelaardij is maatwerk essentieel: "We zijn een makelaarskantoor. Maar we hebben vooral recreatiewoningen. We hebben vooral Belgen. We hebben vooral Duitsers. Dus dat kun je niet vergelijken met een ander makelaarskantoor."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terug naar wat werkt */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Terug naar wat werkt: focus op resultaat
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Toen Tak Makelaardij stopte met het andere bureau en weer volledig inzette op onze samenwerking, bleken de resultaten nog beter te worden dan voorheen. "Gelukkig hadden we dat natuurlijk wel heel snel door. Dus daar zijn we gewoon heel snel mee gestopt. En het bevestigde toch maar weer hoe blij we zijn met de samenwerking met jou."
                </p>

                <p>
                  Nu staat Tak Makelaardij goed zichtbaar voor "makelaar Cadzand", en scoort ook uitstekend op commerciële termen zoals "huis te koop Cadzand" en geospecifieke termen voor omliggende plaatsen. De impact op hun business is merkbaar: "Heel veel. Dat zijn natuurlijk de woorden waarop gezocht wordt."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* De waarde */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                De waarde van online zichtbaarheid voor makelaars
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Voor Marriët is het belang van online marketing glashelder: "Goed, tegenwoordig speelt het grootste deel zich online af. Dus ook een potentieel verkoper die zal kijken wat onze positie online is. Omdat dat ook weer ten goede komt aan zijn woning die dan eventueel bij ons in de verkoop komt."
                </p>

                <p>
                  Ze benadrukt dat het van twee kanten werkt: "De woning moet gevonden worden, de verkoper moet weten dat we online goed zichtbaar zijn. Daar kun je niet meer omheen."
                </p>

                <p>
                  Dit sluit perfect aan bij wat ik steeds vaker zie in de vastgoedbranche. Nederland telt meer dan 15.000 makelaars, en die concurrentie neemt alleen maar toe. In deze markt is online zichtbaarheid cruciaal: niet alleen voor woningzoekenden, maar ook voor verkopers die jouw expertise nodig hebben.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blijven groeien */}
        <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Blijven groeien: een duurzame aanpak
              </h2>

              <div className="space-y-6 text-base font-bold text-black lg:text-lg xl:text-xl">
                <p>
                  Vandaag de dag werkt Tak Makelaardij in 'onderhoudsmodus' met mij. Ik houd alles in de gaten en om de twee maanden verschijnt er een nieuwe relevante blog, waarmee ze hun goede positie behouden en uitbouwen. "Ik denk dat online marketing rol zal blijven spelen. En dat het alleen maar meer belangrijk wordt," voorspelt Marriët over de toekomst van online marketing in de makelaardij.
                </p>

                <p>
                  Het verhaal van Tak Makelaardij laat zien dat SEO vooral draait om de juiste strategie, goede teksten en een persoonlijke aanpak. Van een onzichtbare website naar een goed vindbare makelaar. Dat is de kracht van slimme copywriting en SEO.
                </p>

                <p className="mt-8">
                  Ook beter vindbaar worden als makelaar? Ontdek hoe mijn <Link href="/seo-voor-makelaars-en-vastgoedbedrijven" className="font-bold">speciale SEO voor makelaars</Link> jouw vastgoedbedrijf kan helpen groeien.
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>

      {/* Final CTA Section */}
      <FinalCTA
        heading="Ook goed vindbaar worden als makelaar?"
        description="Ontdek alles over onze full service aanpak"
        showSecondaryButton={true}
        secondaryButtonText="FULL SERVICE SEO"
        secondaryButtonHref="/full-service-seo"
      />

<Footer />
    </>
  );
}
