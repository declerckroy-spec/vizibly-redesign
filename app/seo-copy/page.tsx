import { Navigation } from '@/components/navigation';
import { StatsCounter } from '@/components/stats-counter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SeoCopyPage() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl">
            SEO teksten laten schrijven
          </h1>
          <p className="mb-10 text-xl text-muted-foreground lg:text-2xl">
            Teksten die gevonden worden én converteren
          </p>
          <p className="mx-auto mb-10 max-w-3xl text-lg text-muted-foreground">
            Wil je met je bedrijf hoger in Google met teksten die niet alleen scoren, maar ook
            daadwerkelijk klanten binnenbrengen? Bij Vizibly schrijven we SEO teksten die niet
            alleen perfect scoren in zoekmachines, maar ook je bezoekers overtuigen om actie te ondernemen.
          </p>
          <Button size="lg" asChild className="text-base">
            <Link href="/contact">
              NEEM CONTACT OP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats Counter */}
      <StatsCounter />

      {/* What is SEO Copywriting */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://vizibly.nl/wp-content/uploads/2024/02/a-person-browsing-google-on-imac.jpeg.webp"
                alt="Person browsing Google"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Wat is SEO copywriting?
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                SEO copywriting is de kunst van het schrijven van teksten die zowel zoekmachines als
                mensen aanspreken. Het gaat om veel meer dan alleen het plaatsen van zoekwoorden in
                een tekst.
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Goede SEO teksten zijn strategisch geoptimaliseerd voor specifieke zoektermen,
                beantwoorden de zoekintentie van je doelgroep en overtuigen bezoekers om te converteren.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-2xl font-bold">Waarom zijn SEO teksten zo belangrijk?</h3>
                  <p className="mb-6 text-muted-foreground">
                    Content vormt de basis van je online zichtbaarheid. Google kan je website alleen goed
                    beoordelen als er kwalitatieve, relevante teksten op staan.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-border/50 bg-card p-4">
                    <h4 className="mb-2 font-semibold">Voor zoekmachines</h4>
                    <p className="text-sm text-muted-foreground">
                      SEO teksten zijn essentieel om te begrijpen waar je pagina over gaat. Door strategisch
                      gebruik van hoofdzoekwoorden, LSI keywords en semantisch verwante woorden.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-card p-4">
                    <h4 className="mb-2 font-semibold">Voor bezoekers</h4>
                    <p className="text-sm text-muted-foreground">
                      Teksten moeten waarde bieden. Goede SEO copywriting houdt bezoekers vast,
                      beantwoordt hun vragen en leidt ze naar de gewenste actie.
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/50 bg-card p-4">
                    <h4 className="mb-2 font-semibold">Voor conversie</h4>
                    <p className="text-sm text-muted-foreground">
                      De juiste tone of voice is cruciaal. We schrijven altijd met het eindresultaat voor
                      ogen: meer aanvragen, meer verkopen, meer leads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Het verschil */}
          <div className="mt-24">
            <h3 className="mb-6 text-3xl font-bold">Het verschil tussen gewone teksten en SEO teksten</h3>
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <p className="mb-4 text-muted-foreground">
                  Normale webteksten zijn vaak geschreven vanuit het bedrijf: "Wij zijn gespecialiseerd in…"
                  of "Ons bedrijf biedt…". Ze missen strategische optimalisatie en sluiten niet aan bij
                  wat mensen zoeken.
                </p>
                <p className="text-muted-foreground">
                  Met de opkomst van AI wordt het internet overspoeld met generieke content. Maar teksten
                  die alleen door AI gegenereerd zijn, missen diepgang en échte expertise.
                </p>
              </div>
              <div className="rounded-lg border border-border/50 bg-card p-6">
                <h4 className="mb-4 font-bold">SEO teksten van specialisten:</h4>
                <ul className="space-y-2">
                  {[
                    'Zijn gebaseerd op uitgebreid zoekwoordenonderzoek',
                    'Beantwoorden specifieke zoekintenties',
                    'Gebruiken semantisch gerelateerde termen',
                    'Hebben geoptimaliseerde headers (H1, H2, H3)',
                    'Bevatten strategisch geplaatste call-to-actions',
                    'Combineren data-inzichten met menselijke expertise'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vizibly */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Data-gedreven copywriting die resultaat oplevert
            </p>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Waarom SEO teksten laten schrijven door Vizibly?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              'Hogere posities door strategische optimalisatie voor je focus zoekwoorden',
              'Meer organisch verkeer van bezoekers die actief zoeken naar jouw diensten',
              'Betere conversie met overtuigende teksten die leiden tot actie',
              'Consistente tone of voice die aansluit bij jouw merk',
              'Tijdwinst terwijl specialisten het schrijfwerk doen',
              'Expertise van schrijvers die begrijpen hoe Google werkt'
            ].map((benefit, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="flex items-start gap-4 pt-6">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                  <p className="pt-1 text-muted-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-muted lg:aspect-[21/9]">
              <Image
                src="https://vizibly.nl/wp-content/uploads/2024/02/three-white-and-black-scrabble-tiles-on-brown-wooden-surface-270637-1024x680.jpg.webp"
                alt="Scrabble tiles"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Strategisch en overtuigend
            </p>
            <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
              Zo schrijven we SEO teksten die converteren
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Voordat we een woord op papier zetten, duiken we diep in de data. We analyseren niet
              alleen welke zoekwoorden relevant zijn, maar ook wat de zoekintentie erachter is.
            </p>
          </div>

          <div className="space-y-12">
            <h3 className="text-2xl font-bold">Onze aanpak in 5 stappen:</h3>
            {[
              {
                number: '1',
                title: 'Uitgebreid zoekwoordenonderzoek',
                description: 'We identificeren niet alleen het hoofdzoekwoord, maar ook alle gerelateerde termen, synoniemen en long-tail variaties. Met tools als Semrush en Ahrefs analyseren we zoekvolumes, moeilijkheidsgraad en zoekintentie. We kijken wat er al rankt voor deze termen en wat we beter kunnen doen.'
              },
              {
                number: '2',
                title: 'SERP-analyse en concurrentieonderzoek',
                description: 'We bestuderen de top 10 resultaten in Google voor jouw doelzoekwoord. Wat voor content staat er? Hoe lang zijn de teksten? Welke onderwerpen worden behandeld? Dit geeft ons inzicht in wat Google verwacht en wat we moeten overtreffen. We kijken niet alleen naar de lengte, maar vooral naar de diepgang en toegevoegde waarde.'
              },
              {
                number: '3',
                title: 'Content briefing en structuur',
                description: 'Op basis van het onderzoek maken we een gedetailleerde briefing. Welke headers gebruiken we? Welke semantisch gerelateerde woorden moet de tekst bevatten? Waar plaatsen we call-to-actions? Deze structuur zorgt ervoor dat de tekst alle SEO-criteria dekt.'
              },
              {
                number: '4',
                title: 'Schrijven met SEO én conversie in gedachten',
                description: 'Nu begint het echte werk. We schrijven teksten die niet alleen alle zoekwoorden natuurlijk verwerken, maar ook lekker lezen. We gebruiken storytelling, concrete voorbeelden en een tone of voice die aansluit bij jouw doelgroep. Headers, bulletpoints en korte alinea\'s zorgen voor scanbaarheid.'
              },
              {
                number: '5',
                title: 'Optimalisatie en kwaliteitscontrole',
                description: 'Voor we de tekst opleveren, checken we alles nog een keer. Zijn alle LSI keywords verwerkt? Klopt de keyword density? Is de meta description overtuigend? Hebben we interne linkmogelijkheden? Dit is waar details het verschil maken.'
              }
            ].map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                  {step.number}
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verschillende soorten SEO teksten */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Verschillende soorten SEO teksten
            </h2>
            <p className="text-xl text-muted-foreground">
              Voor elke pagina de juiste aanpak
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Landingspagina's en service pagina's</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Dit zijn je belangrijkste pagina's: hier wil je gevonden worden op je kernzoekwoorden.
                </p>
                <ul className="space-y-2">
                  {[
                    'Duidelijke waardepropositie die direct aansluit bij de zoekintentie',
                    'Strategische keyword plaatsing in H1, H2 en door de tekst heen',
                    'Social proof en vertrouwenselementen',
                    'Heldere call-to-actions op de juiste momenten',
                    'Voldoende tekstlengte (meestal 800-1500 woorden) voor autoriteit'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Blogartikel en SEO content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Informationele content is perfect om te ranken op long-tail zoekwoorden.
                </p>
                <ul className="space-y-2">
                  {[
                    'Beantwoorden specifieke vragen die je doelgroep heeft',
                    'Bieden echte waarde met diepgaande informatie',
                    'Linken strategisch naar je diensten',
                    'Bouwen aan autoriteit door expertise te tonen',
                    'Genereren organisch verkeer voor termen waar commerciële pagina\'s niet op ranken'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Productpagina's en categorieteksten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Voor webshops zijn geoptimaliseerde productomschrijvingen cruciaal.
                </p>
                <ul className="space-y-2">
                  {[
                    'Uniek zijn (geen fabrikant teksten kopiëren!)',
                    'Zoekwoorden natuurlijk verwerken zonder geforceerd over te komen',
                    'Koopbeslissingen faciliteren met USP\'s en specificaties',
                    'Schema markup ondersteunen voor rich snippets',
                    'Balans vinden tussen SEO en verkoopgerichtheid'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">FAQ pagina's en vraag-antwoord content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  FAQ's zijn SEO goud. Ze targeten vaak vraagzoekwoorden en kunnen featured snippets veroveren.
                </p>
                <ul className="space-y-2">
                  {[
                    'Beantwoorden echte vragen van je doelgroep',
                    'Zijn kort en scanbaar voor gebruikerservaring',
                    'Bevatten strategische keywords in vraag én antwoord',
                    'Linken door naar uitgebreidere content waar relevant'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technische SEO */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Technische SEO in copywriting
            </h2>
            <p className="text-xl text-muted-foreground">
              Optimalisatie die Google beloont
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Zoekintentie matchen</h3>
                <p className="mb-6 text-muted-foreground">
                  Dit is de basis. Google wil gebruikers de best mogelijke antwoorden geven op hun zoekopdracht.
                </p>
                <div className="space-y-3">
                  {[
                    { type: 'Informationeel', desc: 'gebruiker zoekt kennis: "wat is seo copywriting"' },
                    { type: 'Navigationeel', desc: 'gebruiker zoekt specifieke website: "vizibly seo"' },
                    { type: 'Commercieel', desc: 'gebruiker vergelijkt opties: "beste seo tekstschrijver"' },
                    { type: 'Transactioneel', desc: 'gebruiker wil actie ondernemen: "seo teksten laten schrijven"' }
                  ].map((intent, i) => (
                    <div key={i} className="rounded-lg border border-border/50 bg-card p-4">
                      <div className="font-semibold">{intent.type}</div>
                      <div className="text-sm text-muted-foreground">{intent.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">LSI keywords en semantische relevantie</h3>
                <p className="mb-4 text-muted-foreground">
                  Google is allang niet meer bezig met simpel tellen van zoekwoorden. Het algoritme
                  begrijpt context en verwante begrippen.
                </p>
                <div className="rounded-lg border border-border/50 bg-muted/50 p-6">
                  <p className="mb-3 font-semibold">Bij "SEO teksten" verwacht Google ook:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Zoekwoordenonderzoek', 'Content optimalisatie', 'Zoekmachine rankings', 'Organisch verkeer', 'Meta descriptions', 'Header tags', 'Conversie'].map((term, i) => (
                      <Badge key={i} variant="secondary">{term}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Perfecte tekstlengte en leesbaarheid</h3>
                <p className="mb-6 text-muted-foreground">
                  De ideale tekstlengte verschilt per zoekwoord en intentie. Een producttekst kan 300
                  woorden zijn, een uitgebreide gids 2500+.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Tegenwoordig gaat het niet meer om woorden tellen, maar om de waarde die je biedt.
                  We schrijven zo lang als nodig, zo kort als mogelijk.
                </p>
                <div className="space-y-2">
                  {[
                    'Subheaders voor structuur',
                    'Bulletpoints voor scanbaarheid',
                    'Korte alinea\'s (3-4 zinnen max)',
                    'Vetgedrukte kernpunten voor scanners',
                    'Visuele ademruimte tussen paragrafen'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-bold">Meta titles en descriptions die klikken genereren</h3>
                <p className="mb-4 text-muted-foreground">
                  Een goede ranking is waardeloos als niemand klikt. We schrijven meta descriptions die:
                </p>
                <div className="space-y-2">
                  {[
                    'De zoekintentie benadrukken',
                    'Voordelen communiceren',
                    'Call-to-action bevatten',
                    'Binnen 155 karakters blijven om afkapping te voorkomen'
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Van losse teksten tot complete campagnes
            </h2>
            <p className="text-lg text-muted-foreground">
              Pakketten op maat van jouw ambitie: alle pakketten zijn flexibel en aan te passen aan jouw situatie
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Losse SEO teksten',
                price: '70',
                description: 'vanaf EUR 70 per tekst',
                features: [
                  'Basis zoekwoordenonderzoek',
                  'Geoptimaliseerde webtekst',
                  'Meta title en description',
                  'Strategische keyword plaatsing',
                  'LSI keywords verwerkt',
                  'Direct inzetbaar'
                ]
              },
              {
                name: 'Content pakket klein',
                price: '600',
                description: '5-10 teksten, EUR 600',
                features: [
                  'Contentplan opstellen',
                  'Zoekwoordenonderzoek per tekst',
                  '5-10 SEO teksten',
                  'Blogs of landingspagina\'s',
                  'Eenmalig of maandelijks',
                  'Performance tracking'
                ],
                popular: true
              },
              {
                name: 'Content pakket groot',
                price: '1.250',
                description: '15-25 teksten, EUR 1.250',
                features: [
                  'Uitgebreide contentstrategie',
                  'Diepgaand zoekwoordenonderzoek',
                  '15-25 SEO teksten',
                  'Mix van tekstsoorten',
                  'Perfect voor snelle groei',
                  'Eenmalig of maandelijks'
                ]
              }
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`relative border-border/50 ${
                  pkg.popular ? 'border-accent shadow-lg scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Populair
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <CardDescription className="text-base">{pkg.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">€{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full" variant={pkg.popular ? 'default' : 'outline'}>
                    <Link href="/contact">NEEM CONTACT OP</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tone of Voice */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Tone of voice die bij jouw merk past
              </h2>
              <p className="mb-8 text-xl text-muted-foreground">
                Authentiek en consistent communiceren
              </p>
              <p className="mb-6 text-lg text-muted-foreground">
                De beste SEO tekst is waardeloos als die niet klinkt als jouw merk. Bij Vizibly beginnen
                we elk traject met het vaststellen van je tone of voice.
              </p>
              <p className="text-lg text-muted-foreground">
                Wil je professioneel en autoritair overkomen? Of juist toegankelijk en informeel?
                Humoristisch of serieus?
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Wat we vastleggen:</h3>
              {[
                { title: 'Persoonlijkheidskenmerken', desc: 'van je merk (betrouwbaar, innovatief, gedurfd, etc.)' },
                { title: 'Aanspreekvormen', desc: '(je/jij of u/uw)' },
                { title: 'Taalniveau', desc: '(vakjargon of toegankelijk)' },
                { title: 'Schrijfstijl', desc: '(kort en krachtig of uitgebreid en beschrijvend)' },
                { title: 'Do\'s en dont\'s', desc: '(woorden die je wél en niet wilt gebruiken)' }
              ].map((item, i) => (
                <Card key={i} className="border-border/50">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <p className="pt-4 text-muted-foreground">
                Deze richtlijnen zorgen dat elke tekst die we schrijven aanvoelt als jouw merk.
                Consistent, herkenbaar en authentiek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              SEO copywriting voor verschillende branches
            </h2>
            <p className="text-xl text-muted-foreground">
              Gespecialiseerde kennis voor jouw sector
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">E-commerce en webshops</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Online verkopen vereist unieke productomschrijvingen en SEO-proof content die
                  koopbeslissingen faciliteert.
                </p>
                <ul className="space-y-2">
                  {[
                    'Inspelen op verschillende fases van de customer journey',
                    'USP\'s helder communiceren',
                    'Vertrouwen wekken met de juiste tone',
                    'Technische specs combineren met emotionele triggers'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Bouw en techniek</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Technische sectoren vragen om copywriters die complexe zaken simpel kunnen uitleggen.
                </p>
                <ul className="space-y-2">
                  {[
                    'Vakkennis toont zonder te vervallen in jargon',
                    'Processen helder uitlegt',
                    'Vertrouwen wekt bij particulieren én bedrijven',
                    'Rankt op lokale én landelijke zoektermen'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Duurzaamheid en groene energie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Een sector die groeit en waarin online zichtbaarheid cruciaal is.
                </p>
                <ul className="space-y-2">
                  {[
                    'Inspelen op subsidies en actuele ontwikkelingen',
                    'Terugverdientijd en voordelen helder maken',
                    'Technische informatie toegankelijk presenteren',
                    'Conversie stimuleren met de juiste argumenten'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Dienstverlening en consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Dienstverleners verkopen expertise en vertrouwen. Onze teksten positioneren jou als expert.
                </p>
                <ul className="space-y-2">
                  {[
                    'Cases en resultaten te tonen (waar mogelijk)',
                    'Complexe diensten helder uit te leggen',
                    'Thought leadership te vestigen via blogs',
                    'Bezoekers te overtuigen contact op te nemen'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Resultaten uit de praktijk
            </h2>
            <Link href="/cases" className="inline-flex items-center text-accent hover:text-accent/80">
              Bekijk hier alle SEO-cases
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: 'https://vizibly.nl/wp-content/uploads/2025/10/Online-bloemenwinkel.jpg.webp',
                title: 'Online bloemist groeit van 1.700 naar 10.000 bezoekers p/m: +1500% omzet',
                href: '/online-bloemist-groeit-van-1-700-naar-10-000-bezoekers-p-m-1500-omzet'
              },
              {
                image: 'https://vizibly.nl/wp-content/uploads/2025/10/Webshop-in-ventilatie-en-elektra.jpg.webp',
                title: '+145% omzet uit organisch verkeer voor technische webshop',
                href: '/145-omzet-uit-organisch-verkeer-voor-technische-webshop'
              },
              {
                image: 'https://vizibly.nl/wp-content/uploads/2025/06/Portretten-Kleur-Tak-oktober-2024-Ekkow-Photography-22.jpg.webp',
                title: 'SEO voor een makelaarskantoor: steady op #1 voor de belangrijkste zoektermen',
                href: '/klantinterview-seo-voor-een-makelaarskantoor'
              }
            ].map((caseStudy, index) => (
              <Link key={index} href={caseStudy.href} className="group">
                <Card className="overflow-hidden border-border/50 transition-all hover:shadow-lg hover:border-accent/50">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-accent transition-colors">
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <span className="inline-flex items-center text-sm font-medium text-accent">
                      Lees het verhaal
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversie-optimalisatie */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Conversie-optimalisatie in SEO teksten
            </h2>
            <p className="text-xl text-muted-foreground">
              Van bezoeker naar klant
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Strategische call-to-actions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  We plaatsen CTA's niet lukraak, maar op momenten dat de bezoeker overtuigd is:
                </p>
                <ul className="space-y-2">
                  {[
                    'Vroeg in de tekst voor bezoekers die al besloten hebben',
                    'Halverwege na het presenteren van belangrijke voordelen',
                    'Aan het einde als slotakkoord',
                    'In zijbalken of sticky bars voor extra zichtbaarheid'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Social proof en vertrouwenselementen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Mensen geloven andere mensen meer dan bedrijven. Daarom verwerken we:
                </p>
                <ul className="space-y-2">
                  {[
                    'Klantrecensies en testimonials',
                    'Certificeringen en keurmerken',
                    'Concrete cijfers en resultaten',
                    'Cases en voorbeelden'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Storytelling en emotionele triggers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  Droge opsommingen overtuigen niet. Verhalen wel. We gebruiken:
                </p>
                <ul className="space-y-2">
                  {[
                    'Customer journey verhalen die resoneren',
                    'Probleemherkenning zodat bezoekers zich gezien voelen',
                    'Concrete voorbeelden in plaats van abstracte claims',
                    'Visuele taal die plaatjes in hoofden creëert'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technische implementatie */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Technische implementatie en WordPress
            </h2>
            <p className="text-xl text-muted-foreground">
              SEO teksten die direct ranking impact hebben
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Headers de juiste hiërarchie</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Eén H1 met het hoofdzoekwoord',
                    'H2\'s voor hoofdsecties met gerelateerde zoekwoorden',
                    'H3\'s voor subsecties met long-tail variaties'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Internal linking geoptimaliseerd</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Strategische links naar gerelateerde content',
                    'Ankerteksten met relevante zoekwoorden',
                    'Logische link flow voor gebruikerservaring'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Content gestructureerd met schema markup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'FAQ schema voor vraag-antwoord secties',
                    'Article schema voor blogposts',
                    'Service schema voor dienstpagina\'s',
                    'Product schema voor e-commerce'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Media toegevoegd</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {[
                    'Alt-teksten met relevante zoekwoorden',
                    'Gecomprimeerde afbeeldingen voor snelheid',
                    'Visuele ondersteuning van de tekst'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content die backlinks verdient */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Content die backlinks verdient
            </h2>
            <p className="text-xl text-muted-foreground">
              Van passieve tekst naar link magneet
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Origineel onderzoek en data',
                desc: 'Verzamel unieke data binnen jouw sector. Dit trekt journalisten, bloggers en concurrenten die je onderzoek citeren.'
              },
              {
                title: 'Ultimate guides en pillar content',
                desc: 'Uitgebreide gidsen van 3000+ woorden over kerntopics. Deze "definitive guides" worden vaak gebookmarkt en gedeeld.'
              },
              {
                title: 'Infographics en visuele content',
                desc: 'Complexe informatie visueel maken zorgt voor shares én backlinks. We werken samen met designers voor visuele impact.'
              },
              {
                title: 'Tools en calculators',
                desc: 'Een gratis ROI-calculator genereert maandenlang backlinks. We schrijven de supporting copy die de tool contextualiseert.'
              }
            ].map((item, i) => (
              <Card key={i} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Continue optimalisatie */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Continue optimalisatie en rapportage
            </h2>
            <p className="text-xl text-muted-foreground">
              Meten, leren en verbeteren
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-2xl font-bold">Wat we meten:</h3>
              <div className="space-y-4">
                {[
                  { title: 'Rankings', desc: 'voor focus zoekwoorden en long-tail variaties' },
                  { title: 'Organisch verkeer', desc: 'per pagina en per zoekwoord' },
                  { title: 'Conversies', desc: 'vanuit specifieke content' },
                  { title: 'Bounce rate en time-on-page', desc: 'voor gebruikerservaring' },
                  { title: 'Featured snippet verovering', desc: 'voor extra zichtbaarheid' }
                ].map((metric, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{metric.title}</div>
                      <div className="text-sm text-muted-foreground">{metric.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold">Op basis van data optimaliseren we:</h3>
              <div className="space-y-3">
                {[
                  'Teksten die net niet in de top 3 staan',
                  'Content die veel verkeer krijgt maar niet converteert',
                  'Pagina\'s die ranking verliezen aan concurrenten',
                  'Kansen voor featured snippets'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-muted-foreground">
                Je ontvangt maandelijks een helder rapport met alle relevante metrics en onze
                aanbevelingen voor verdere groei.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teksten die je investering terugverdienen */}
      <section className="bg-muted/30 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image
                src="https://vizibly.nl/wp-content/uploads/2024/02/person-using-macbook-pro-with-google-website.jpeg.webp"
                alt="Person using MacBook Pro with Google website"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                Transparant, effectief en waardevol
              </p>
              <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Teksten die je investering terugverdienen
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Of je nu een lokale dienstverlener bent die regionale zichtbaarheid wil, een webshop
                die landelijk wil scoren, of een B2B-bedrijf dat autoriteit wil vestigen: we schrijven
                content die werkt.
              </p>
              <div className="mb-8 space-y-3">
                {[
                  'Maandelijkse rapportage met inzicht in rankings en verkeer per tekst',
                  'Volledige transparantie over onze aanpak en strategie',
                  'White-hat SEO zonder risico\'s of shortcuts',
                  'Proactieve communicatie over kansen en optimalisaties',
                  'Integratie met je SEO-strategie voor maximaal effect'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mb-8 text-lg text-muted-foreground">
                SEO copywriting is een investering die zichzelf terugverdient in hogere posities,
                meer bezoekers en uiteindelijk meer omzet. Bij Vizibly zorgen we dat die investering rendeert.
              </p>
              <Button asChild size="lg" className="w-fit">
                <Link href="/contact">NEEM CONTACT OP</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Wat je misschien nog wil weten
            </p>
            <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Veelgestelde vragen
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Waarom SEO copywriting van Vizibly?',
                answer: 'Bij Vizibly schrijven we al ruim 7 jaar SEO teksten voor diverse branches. We combineren technische SEO-kennis met overtuigend schrijfwerk. Door voortdurend op de hoogte te blijven van algoritme-updates en best practices, weten we precies wat werkt en wat niet. Onze teksten ranken niet alleen goed, ze converteren ook. Dat onderscheidt ons van copywriters zonder SEO-expertise of SEO-specialisten zonder schrijftalent.'
              },
              {
                question: 'Wat kost het laten schrijven van SEO teksten?',
                answer: 'Losse SEO teksten starten vanaf EUR 70 per tekst. Voor structurele content bieden we pakketten aan: het Content pakket klein (5-10 teksten per maand) kost EUR 600, het Content pakket groot (15-25 teksten per maand) kost EUR 1.250. Het exacte aantal teksten hangt af van de lengte, complexiteit en het niveau van onderzoek. We maken graag een voorstel op maat dat past bij jouw situatie.'
              },
              {
                question: 'Hoe lang duurt het voordat ik resultaat zie van SEO teksten?',
                answer: 'Google heeft tijd nodig om nieuwe of geoptimaliseerde content te indexeren en te beoordelen. Meestal zie je de eerste positieve effecten al direct, maar soms duurt het 2 tot 4 maanden. Voor concurrerende zoekwoorden kan dit langer duren. De snelheid waarmee je resultaat ziet hangt ook af van je domeinautoriteit, technische SEO en concurrentie. We monitoren continu de voortgang en optimaliseren proactief waar kansen liggen.'
              },
              {
                question: 'Kunnen jullie over ieder onderwerp schrijven?',
                answer: 'In principe wel. We zijn thuis in e-commerce, bouw, duurzaamheid en commerciële dienstverlening. Voor andere sectoren werken we graag met jouw input als vakexpert. Door grondige research en jouw kennis te combineren, kunnen we over vrijwel elk onderwerp autoritative content creëren. Het belangrijkste is dat we de zoekintentie en doelgroep begrijpen - de rest kunnen we ons eigen maken.'
              },
              {
                question: 'Kan ik ook losse teksten afnemen zonder maandelijks abonnement?',
                answer: 'Ja, dat kan. Werk je al met een marketingbureau of SEO-specialist die zelf geen copywriting verzorgt? Dan kun je bij Vizibly losse teksten afnemen. We schrijven op projectbasis voor eenmalige optimalisaties, nieuwe pagina\'s of specifieke content needs. Ook kun je ons inhuren voor een eenmalige contentkalender zonder doorlopende samenwerking.'
              },
              {
                question: 'Werken jullie teksten ook voor lokale SEO?',
                answer: 'Ja. Voor lokale bedrijven schrijven we teksten die regionale zichtbaarheid versterken. We verwerken lokale zoekwoorden (stad, regio, provincie), schrijven locatie-specifieke landingspagina\'s en optimaliseren voor "bij mij in de buurt" zoekopdrachten. Dit combineren we vaak met Google Business Profile optimalisatie voor maximaal lokaal effect.'
              },
              {
                question: 'Zijn SEO teksten altijd onderdeel van een full service traject?',
                answer: 'Nee, dit hoeft niet. Wanneer je full service SEO bij ons afneemt, zijn teksten vrijwel altijd onderdeel van je maatwerk pakket. Maar SEO copywriting kan ook standalone. Heb je al een goede SEO-specialist maar geen sterke copywriter? Dan werken we graag samen en leveren wij de teksten die jouw specialist nodig heeft voor optimale resultaten.'
              },
              {
                question: 'Wat is het verschil tussen SEO teksten en normale webteksten?',
                answer: 'Normale webteksten zijn vaak geschreven vanuit het bedrijf zonder rekening te houden met hoe mensen zoeken. SEO teksten zijn strategisch geoptimaliseerd: ze zijn gebaseerd op zoekwoordenonderzoek, beantwoorden specifieke zoekintenties, gebruiken semantisch gerelateerde termen en hebben een structuur die zowel Google als bezoekers aanspreekt. Het verschil zit in strategie, optimalisatie en meetbare resultaten.'
              },
              {
                question: 'Hoe zorgen jullie dat teksten niet robotisch klinken?',
                answer: 'Dit horen we vaker. Veel "SEO teksten" klinken geforceerd omdat keywords er mechanisch in gepropt worden. Wij schrijven andersom: eerst schrijven we een goede, lekker leesbare tekst die waarde biedt. Daarna optimaliseren we door strategisch gerelateerde termen te verwerken waar het natuurlijk past. We gebruiken synoniemen, long-tail variaties en semantisch verwante woorden in plaats van één zoekwoord te herhalen. Zo leest de tekst natuurlijk, maar scoort deze wel als SEO content.'
              },
              {
                question: 'Hoeveel teksten heb ik nodig voor goede resultaten?',
                answer: 'Dat hangt af van je situatie. Een nieuwe website heeft basisverkeer nodig: servicepagina\'s, over ons, contact. Voor organische groei adviseren we minimaal 4-8 nieuwe teksten per maand. Dit kunnen blogartikelen zijn, nieuwe landingspagina\'s of geoptimaliseerde productomschrijvingen. Consistentie is belangrijker dan volume: beter structureel 4 kwalitatieve teksten per maand dan één keer 20 gemiddelde teksten en daarna niets meer.'
              },
              {
                question: 'Kunnen jullie ook bestaande teksten herschrijven?',
                answer: 'Ja. We voeren vaak een content audit uit waarbij we analyseren welke bestaande pagina\'s geoptimaliseerd kunnen worden. Pagina\'s die al verkeer krijgen maar niet converteren, of pagina\'s die voor waardevolle zoekwoorden net niet in de top 5 staan: die herschrijven we strategisch. Soms is het een kleine tweak, soms een complete herschrijving. We adviseren altijd wat de beste aanpak is.'
              },
              {
                question: 'Wat gebeurt er als een tekst niet goed presteert?',
                answer: 'SEO is geen exacte wetenschap. Soms presteert een tekst niet zoals verwacht. In dat geval analyseren we waarom: ligt het aan de zoekintentie match, concurrentie, technische factoren of de tekst zelf? Op basis daarvan optimaliseren we de content zonder extra kosten. We blijven doorwerken tot de tekst de gewenste resultaten oplevert. Dat is ons commitment.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 bg-card px-6 rounded-lg">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-background to-muted/20 py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Klaar voor SEO teksten die converteren?
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
            Laat jouw content schrijven door Vizibly
          </h2>
          <p className="mb-10 text-xl text-muted-foreground">
            Wil je meer organisch verkeer, hogere posities en teksten die daadwerkelijk klanten
            binnenbrengen? Neem contact op voor een vrijblijvende kennismaking. We analyseren je
            huidige situatie, laten zien welke zoekwoorden kansen bieden en presenteren een strategie
            die past bij jouw doelen en budget.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link href="/contact">
              LET'S GO!!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">Vizibly</h3>
              <p className="text-sm text-muted-foreground">
                SEO specialist die zorgt dat je gevonden wordt.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Diensten</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/seo-strategie" className="text-muted-foreground hover:text-foreground">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-muted-foreground hover:text-foreground">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-muted-foreground hover:text-foreground">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-muted-foreground hover:text-foreground">Local SEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Bedrijf</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/over-ons" className="text-muted-foreground hover:text-foreground">Over Ons</Link></li>
                <li><Link href="/cases" className="text-muted-foreground hover:text-foreground">Cases</Link></li>
                <li><Link href="/vizie" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Zeeland, Nederland</li>
                <li>info@vizibly.nl</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vizibly. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
