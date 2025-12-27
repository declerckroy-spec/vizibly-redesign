import { Navigation } from '@/components/navigation';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO en Google Ads | Zo versterken ze elkaar',
  description: 'Ontdek hoe SEO en Google Ads elkaar versterken. Leer 5 praktische manieren om beide kanalen samen in te zetten voor betere resultaten.',
  openGraph: {
    title: 'SEO en Google Ads | Zo versterken ze elkaar',
    description: 'Ontdek hoe SEO en Google Ads elkaar versterken. Leer 5 praktische manieren om beide kanalen samen in te zetten voor betere resultaten.',
    url: 'https://vizibly.nl/hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/seo-google-ads.png' }],
  },
};

const relatedArticles = [
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'de-verborgen-kracht-in-seo-gebruikersgedrag',
    title: 'De verborgen kracht in SEO: zo beïnvloedt gebruikersgedrag jouw Google positie',
    image: '/blog/gebruikersgedrag-seo.jpg',
    excerpt: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt en hoe je de ervaring verbetert.'
  },
  {
    slug: '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
    title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
    image: '/blog/fysiotherapeut-seo.jpg',
    excerpt: '80% van potentiele patienten zoekt online. Ontdek hoe je jouw praktijk laat groeien met deze 12 SEO-tips.'
  }
];

export default function SEOGoogleAdsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak/#article",
    "headline": "SEO en Google Ads: Versterk je online zichtbaarheid met beide",
    "description": "Ontdek hoe SEO en Google Ads elkaar versterken. Leer 5 praktische manieren om beide kanalen samen in te zetten voor betere resultaten.",
    "image": "/blog/seo-google-ads.png",
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
      "@id": "https://vizibly.nl/hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                SEO + SEA
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Hoe SEO en Google Ads elkaar versterken
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  6 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/seo-google-ads.png"
                alt="SEO en Google Ads - de kracht van een gecombineerde aanpak"
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
      <article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Veel bedrijven zien SEO en Google Ads als concurrenten voor hun marketingbudget. Dat is jammer, want ze werken juist uitstekend samen. In dit artikel ontdek je hoe je het beste uit beide werelden kunt halen.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Een echte marketingmix: SEO + Google Ads
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Mark begon zijn online fietsenwinkel met alleen Google Ads. Zijn traffic steeg snel, maar hij betaalde flink voor elke klik. Toen hij <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO</Link> toevoegde, zag hij niet alleen zijn advertentiekosten dalen, maar ook zijn totale conversies stijgen.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            5 Manieren waarop SEO en Google Ads elkaar aanvullen
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            1. Ontdek de meest waardevolle zoekwoorden
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/google-ads-sea" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Google Ads</Link> laat direct zien welke zoekwoorden conversies opleveren. Een webshop voor duurzame kleding ontdekte via Google Ads dat &quot;biologisch katoenen t-shirts&quot; vier keer meer conversies opleverde dan &quot;eco-vriendelijke shirts&quot;. Door vervolgens hun <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-teksten</Link> op deze bewezen term te focussen, verdubbelden ze hun organische conversies.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            2. Vergroot je zichtbaarheid in de zoekresultaten
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Door zowel bovenaan te staan met een advertentie als hoog te ranken in de organische resultaten, vergroot je de kans dat iemand op jouw site terechtkomt. Een lokaal adviesbureau dat beide kanalen inzette zag hun klikpercentage met 35% stijgen ten opzichte van periodes waarin ze alleen organisch hoog stonden.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            3. Test titels en beschrijvingen voor betere CTR
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Met Google Ads kun je snel verschillende titels en beschrijvingen testen. Deze inzichten kun je toepassen op je meta-titels en meta-beschrijvingen voor SEO.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Een reisorganisatie testte verschillende advertentievarianten. De versie met &quot;Inclusief verborgen stranden&quot; had een 63% hogere CTR. Door deze formulering ook in hun SEO-metadata te verwerken, steeg hun organische CTR met 27%.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            4. Verbeter je landingspagina&apos;s met Google Ads data
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Een B2B-softwarebedrijf ontdekte via Google Ads dat landingspagina&apos;s met een video-demonstratie 40% meer leads genereerden. Door video&apos;s toe te voegen aan hun belangrijkste SEO-landingspagina&apos;s, steeg hun organische conversiepercentage met 22%.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            5. Compenseer tijdelijke SEO-dalingen
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO kan fluctueren door algoritme-updates. Met <Link href="/google-ads-sea" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Google Ads</Link> kun je snel bijsturen wanneer je organische traffic daalt.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Een webwinkel voor tuingereedschap zag hun organische traffic dalen na een Google-update. Door tijdelijk meer te investeren in Google Ads voor hun belangrijkste zoekwoorden, konden ze de omzetdaling beperken terwijl ze werkten aan het verbeteren van hun <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">technische SEO</Link>.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Een slimme verdeling van je marketingbudget
          </h2>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Focus op SEO voor:</strong>
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Opbouwen van blijvende organische zichtbaarheid</li>
            <li>Creëren van waardevolle content voor je doelgroep</li>
            <li>Het versterken van je online autoriteit en merkwaarde</li>
            <li>Langetermijn groei met steeds lagere kosten per bezoeker</li>
          </ul>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            <strong>Vul aan met Google Ads voor:</strong>
          </p>
          <ul className="mb-12 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Snelle resultaten terwijl je SEO opbouwt</li>
            <li>Extra zichtbaarheid bij competitieve zoekwoorden</li>
            <li>Specifieke campagnes en seizoensgebonden aanbiedingen</li>
            <li>Directe verkoopkansen en conversies</li>
          </ul>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Conclusie: Samen sterker
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Mark, de eigenaar van de online fietsenwinkel, gebruikt inmiddels een geïntegreerde strategie. Hij zet Google Ads in voor nieuwe producten en competitieve termen, terwijl zijn organische traffic groeit dankzij doelgerichte SEO. Het resultaat? Een 45% hogere ROI op zijn totale marketingbudget.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Door SEO en Google Ads als partners te zien, haal je het maximale uit beide kanalen: de snelheid van Google Ads, gekoppeld aan de duurzaamheid van SEO.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="SEO en Google Ads samen inzetten voor maximaal resultaat. Laten we kijken wat de beste mix is voor jouw bedrijf."
      />

      {/* Footer */}
      <footer className="border-t-4 border-black bg-black py-16 text-white lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="mb-6 inline-block">
                <Image
                src="/logo-brutalist-white.svg"
                  alt="Vizibly"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </Link>
              <p className="text-base font-bold text-white/70">
                SEO bureau voor bedrijven die willen groeien via Google.
              </p>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Diensten</h4>
              <ul className="space-y-3">
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/70 hover:text-accent">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/70 hover:text-accent">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/70 hover:text-accent">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/70 hover:text-accent">Local SEO</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Vizibly</h4>
              <ul className="space-y-3">
                <li><Link href="/over-ons" className="text-base font-bold text-white/70 hover:text-accent">Over ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/70 hover:text-accent">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/70 hover:text-accent">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/70 hover:text-accent">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-black uppercase">Contact</h4>
              <ul className="space-y-3">
                <li className="text-base font-bold text-white/70">Roy de Clerck</li>
                <li><a href="tel:+31628206410" className="text-base font-bold text-white/70 hover:text-accent">06 282 064 10</a></li>
                <li><a href="mailto:roy@vizibly.nl" className="text-base font-bold text-white/70 hover:text-accent">roy@vizibly.nl</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t-4 border-white/20 pt-8 lg:flex-row">
            <p className="text-base font-bold text-white/50">
              © {new Date().getFullYear()} Vizibly. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-base font-bold text-white/50 hover:text-accent">Privacy</Link>
              <Link href="/voorwaarden" className="text-base font-bold text-white/50 hover:text-accent">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
