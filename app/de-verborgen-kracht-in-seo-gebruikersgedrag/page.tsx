import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gebruikersgedrag als SEO factor | Verbeter je rankings',
  description: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt. Ontdek 5 bewezen methoden om de ervaring van je bezoekers te verbeteren.',
  openGraph: {
    title: 'Gebruikersgedrag als SEO factor | Verbeter je rankings',
    description: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt. Ontdek 5 bewezen methoden om de ervaring van je bezoekers te verbeteren.',
    url: 'https://vizibly.nl/de-verborgen-kracht-in-seo-gebruikersgedrag/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/gebruikersgedrag-seo.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  },
  {
    slug: 'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    title: 'Een perfecte Google PageSpeed score: zin en onzin van 100/100',
    image: '/blog/pagespeed-score.png',
    excerpt: 'Waarom een perfecte score niet alles is en hoe snelheid wel je omzet beïnvloedt.'
  },
  {
    slug: 'content-clusters-topic-authority-opbouwen',
    title: 'Content clusters: Topic authority opbouwen',
    image: '/blog/content-clusters.jpg',
    excerpt: 'Google wil zien dat je echt verstand hebt van je onderwerp. Dat je de autoriteit bent.'
  }
];

export default function GebruikersgedragSEOPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/de-verborgen-kracht-in-seo-gebruikersgedrag/#article",
    "headline": "De verborgen kracht in SEO: zo beïnvloedt gebruikersgedrag jouw Google positie",
    "description": "Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt. Ontdek 5 bewezen methoden om de ervaring van je bezoekers te verbeteren.",
    "image": "/blog/gebruikersgedrag-seo.jpg",
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
      "@id": "https://vizibly.nl/de-verborgen-kracht-in-seo-gebruikersgedrag/"
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
                GEBRUIKERSGEDRAG
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                De verborgen kracht in SEO: gebruikersgedrag
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

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
              <Image
                src="/blog/gebruikersgedrag-seo.jpg"
                alt="Gebruikersgedrag als SEO factor"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Je kent het wel: je investeert in SEO, volgt alle best practices op, maar toch stijgt je website niet zoals verwacht in Google. Wat veel ondernemers over het hoofd zien? De manier waarop bezoekers met je website omgaan heeft een grote invloed op je ranking.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De puzzel van dalende rankings
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Laura&apos;s webshop voor duurzame babyspullen stond maandenlang hoog in Google. Ze had alles goed gedaan: technische SEO, content, backlinks. Toch daalden haar posities geleidelijk, zonder duidelijke oorzaak.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Wat Laura niet direct zag: bezoekers vonden blijkbaar niet wat ze zochten. Ze klikten wel, maar keerden snel terug naar de zoekresultaten.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom gebruikersgedrag belangrijk is
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google wil de beste zoekresultaten tonen. Al deelt Google niet precies hoe ze dit meten, vele SEO-experts geloven dat signalen van gebruikersgedrag een rol spelen in het algoritme.
          </p>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            Denk aan:
          </p>
          <ul className="mb-6 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Klikken bezoekers op je resultaat?</li>
            <li>Blijven ze op je site of gaan ze direct terug naar Google?</li>
            <li>Bezoeken ze meerdere pagina&apos;s?</li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Deze signalen helpen Google begrijpen of jouw pagina werkelijk waardevol is voor bezoekers.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            5 Simpele manieren om de gebruikerservaring te verbeteren
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            1. Haak direct in op de zoekvraag
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Begin artikelen met de kern: wat wil de bezoeker weten? Een tuinbedrijf dat direct tuinproblemen aanpakte in plaats van bedrijfsgeschiedenis te delen, zag bezoekers langer blijven. Dit is ook waarom we bij het schrijven van <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-teksten</Link> altijd beginnen met het identificeren van de zoekintentie.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            2. Maak je site prettig leesbaar
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Zorg voor goed contrast, leesbare lettergrootte en korte alinea&apos;s. Een simpele aanpassing van tekstkleur kan al een groot verschil maken in hoe lang mensen blijven. Bij de <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">design en technische optimalisatie</Link> letten we hier scherp op.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            3. Voeg waardevolle interne links toe
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Help bezoekers verder met relevante interne links. Een webshop die gerelateerde producten slim koppelde aan informatieve content zag het aantal bekeken pagina&apos;s flink stijgen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            4. Optimaliseer je laadsnelheid
          </h3>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Een trage website is een garantie voor afhakers. Een lokale slager versnelde zijn website van 5 naar 2 seconden laadtijd en zag het bouncepercentage met 30% dalen. Bezoekers bleven langer en bekeken meer pagina&apos;s.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            5. Maak mobiel gebruik moeiteloos
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Meer dan de helft van alle websitebezoeken gebeurt op mobiel. Een reisbureau maakte hun formulieren beter bruikbaar op mobiel en zag direct een verdubbeling in het aantal ingevulde contactaanvragen vanaf smartphones.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Inzicht in gebruikerservaring
          </h2>
          <p className="mb-4 text-base font-bold text-black/80 lg:text-lg">
            Om de ervaring van je bezoekers te begrijpen, kun je verschillende signalen in de gaten houden:
          </p>
          <ul className="mb-12 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li>Feedback van klanten over hun ervaring op je site</li>
            <li>Patronen in zoektermen die tot langere bezoeken leiden</li>
            <li>Eigen tests om te zien hoe intuïtief je site werkt</li>
          </ul>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Conclusie: Focus op de bezoeker, niet op het algoritme
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Laura paste uiteindelijk haar productpagina&apos;s aan, zodat bezoekers sneller vonden wat ze zochten. Haar rankings verbeterden, niet omdat ze het algoritme begreep, maar omdat ze haar bezoekers beter begreep.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Door te zorgen dat bezoekers een goede ervaring hebben, verbeter je niet alleen je conversies maar waarschijnlijk ook je rankings. Uiteindelijk wil Google hetzelfde als jij: tevreden gebruikers.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Lees meer over onze aanpak</Link> en ontdek hoe gebruikerservaring wordt geïntegreerd in de SEO-strategie.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-12 text-brutalist-h2 text-white">Lees meer</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((related, index) => (
              <Link key={index} href={`/${related.slug}`} className="group block">
                <Card className="overflow-hidden border-4 border-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                  <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="bg-white">
                    <CardTitle className="line-clamp-2 text-lg font-black uppercase leading-tight lg:text-xl">
                      {related.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="bg-white">
                    <p className="mb-4 text-sm font-bold text-black/70 line-clamp-2">{related.excerpt}</p>
                    <span className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white px-2 py-1">
                      LEES ARTIKEL
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-brutalist-h1 text-black">
              Klaar om te groeien?
            </h2>
            <p className="mb-12 text-lg font-bold text-black/80 lg:text-xl">
              Focus op de ervaring van je bezoekers en zie je rankings verbeteren. Wil je weten waar de kansen liggen?
            </p>
            <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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
