import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Clock, User, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website onderhoud | Interview met Martijn van 072Design',
  description: 'Martijn legt uit waarom regelmatig website onderhoud essentieel is voor de veiligheid, gebruikerservaring en SEO van je website.',
  openGraph: {
    title: 'Website onderhoud | Interview met Martijn van 072Design',
    description: 'Martijn legt uit waarom regelmatig website onderhoud essentieel is voor de veiligheid, gebruikerservaring en SEO van je website.',
    url: 'https://vizibly.nl/in-gesprek-met-martijn-over-het-belang-van-website-onderhoud/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/website-onderhoud.jpg' }],
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
    slug: 'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
    title: 'SEO voor WordPress: meer dan wat groene Yoast vinkjes',
    image: '/blog/wordpress-seo.jpg',
    excerpt: 'WordPress SEO gaat verder dan alleen plugins. Ontdek wat echt werkt.'
  }
];

export default function WebsiteOnderhoudPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/in-gesprek-met-martijn-over-het-belang-van-website-onderhoud/#article",
    "headline": "Website onderhoud: in gesprek met Martijn van 072Design",
    "description": "Martijn legt uit waarom regelmatig website onderhoud essentieel is voor de veiligheid, gebruikerservaring en SEO van je website.",
    "image": "/blog/website-onderhoud.jpg",
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
      "@id": "https://vizibly.nl/in-gesprek-met-martijn-over-het-belang-van-website-onderhoud/"
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
                INTERVIEW
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                In gesprek met Martijn over het belang van website onderhoud
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
                src="/blog/website-onderhoud.jpg"
                alt="In gesprek met Martijn over website onderhoud"
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
            Bij Vizibly werken we regelmatig samen met Martijn van 072DESIGN als het gaat om webdesign en onderhoud. Terwijl wij ons focussen op online vindbaarheid, blinkt <a href="https://072design.nl/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">072DESIGN</a> uit in het technische aspect van websites. We spraken met Martijn over het belang van regelmatig website onderhoud.
          </p>

          <div className="my-12 border-l-4 border-accent bg-black/5 p-8">
            <Quote className="mb-4 h-8 w-8 text-accent" />
            <p className="text-lg font-bold italic leading-relaxed lg:text-xl">
              &quot;Op het gebied van performance maakt onderhoud een duidelijk verschil. Bij websites die traag laden of foutmeldingen geven, haken bezoekers sneller af en dat is niet goed voor je posities in de zoekresultaten.&quot;
            </p>
          </div>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Een website is een levend systeem
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Veel ondernemers denken dat het werk klaar is zodra een nieuwe website live staat. &quot;Die gedachte is begrijpelijk, maar in de praktijk onjuist,&quot; legt Martijn uit. &quot;Een website is een levend digitaal systeem dat continu onderhoud vraagt.&quot;
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Hij vergelijkt het met het onderhoud van een auto. &quot;Zonder regelmatig beheer is de kans groot dat er op den duur problemen ontstaan - vaak op het moment dat je het niet kunt gebruiken. Denk aan een contactformulier dat geen berichten meer doorstuurt, trage laadtijden die bezoekers afschrikken, of - erger nog - een beveiligingslek waardoor je website gehackt wordt.&quot;
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Meer dan updates alleen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Website onderhoud wordt vaak onderschat en gereduceerd tot &apos;een paar updates klikken&apos;, maar het omvat veel meer dan dat. &quot;Deze platforms zijn modulair opgebouwd, met thema&apos;s, plug-ins en extensies die voortdurend worden geüpdatet door ontwikkelaars,&quot; vertelt Martijn.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Goed onderhoud betekent het regelmatig updaten van het CMS, controleren van plug-ins op compatibiliteit en beveiliging, installeren van beveiligingspatches, en optimaliseren van laadtijden. &quot;Daarnaast verandert het internet continu. Nieuwe browsers, strengere regelgeving en updates in zoekalgoritmes hebben allemaal invloed op de werking van je website.&quot;
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Beveiliging als prioriteit
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een technisch verouderde website vormt een veiligheidsrisico. &quot;Veel websites zijn gebouwd op populaire platforms met een open broncode. Dat maakt ze flexibel, maar ook kwetsbaar: zodra er ergens een beveiligingslek wordt ontdekt, kunnen kwaadwillenden dit op grote schaal misbruiken,&quot; waarschuwt Martijn.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Zonder actief onderhoud vergroot je het risico op hacks, spam, malware en datalekken aanzienlijk. Dit is extra belangrijk voor websites die werken met persoonsgegevens, zoals via contactformulieren of webshops.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Onderhoud als SEO-factor
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een goed onderhouden website presteert ook beter in Google. &quot;Op het gebied van performance maakt onderhoud een duidelijk verschil,&quot; legt Martijn uit. &quot;Bij websites die traag laden of foutmeldingen geven, haken bezoekers sneller af. Google houdt bovendien rekening met technische prestaties bij het bepalen van je positie in de zoekresultaten.&quot;
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Door je website snel, mobielvriendelijk en goed gestructureerd te houden, werk je dus ook direct <Link href="/full-service-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">aan je SEO</Link>.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Zelf doen of uitbesteden?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Hoewel website onderhoud in theorie zelf kan worden gedaan, blijkt dit in de praktijk vaak lastig. &quot;Niet omdat het technisch ondoenlijk is - er zijn genoeg handleidingen te vinden - maar omdat het kennis, structuur én tijd vereist,&quot; aldus Martijn. &quot;En in een drukke werkweek raakt het onderhoud vaak onderaan de prioriteitenlijst. Tot het misgaat.&quot;
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            &quot;Het frustrerende is dat veel problemen voorkomen hadden kunnen worden met regelmatig onderhoud,&quot; merkt hij op. &quot;En de kosten van herstel na bijvoorbeeld een hack zijn vaak veel hoger dan preventief onderhoud zou zijn geweest.&quot;
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Een investering die loont
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een goed onderhouden <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">website</Link> blijft snel, veilig en stabiel functioneren. &quot;Daarnaast is een goed onderhouden website <a href="https://072design.nl/website-onderhoud/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">klaar voor de toekomst</a>,&quot; benadrukt Martijn. &quot;Nieuwe functionaliteiten kunnen makkelijker worden toegevoegd, zonder dat de technische basis wankelt.&quot;
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Martijn sluit af met een belangrijke boodschap: &quot;Een website is geen eenmalig product, maar een doorlopend proces. Regelmatig onderhoud is geen luxe, maar een noodzaak. Met goed onderhoud bescherm je je investering en zorg je dat je digitale visitekaartje altijd op zijn best presteert.&quot;
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
              Een goed onderhouden website is de basis voor betere SEO-resultaten. Laten we kijken wat er mogelijk is.
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
