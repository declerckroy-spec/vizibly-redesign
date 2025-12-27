import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WordPress SEO optimalisatie | Wat Yoast je niet vertelt',
  description: 'Waarom echte WordPress SEO verder gaat dan Yoast of Rank Math. Leer wat écht werkt voor betere rankings: technische optimalisatie, content strategie en meer.',
  openGraph: {
    title: 'WordPress SEO optimalisatie | Wat Yoast je niet vertelt',
    description: 'Waarom echte WordPress SEO verder gaat dan Yoast of Rank Math. Leer wat écht werkt voor betere rankings: technische optimalisatie, content strategie en meer.',
    url: 'https://vizibly.nl/seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/wordpress-seo.jpg' }],
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
    slug: 'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    title: 'SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren',
    image: '/blog/seo-instellingen.jpg',
    excerpt: '7 technische instellingen die je rankings direct verbeteren.'
  },
  {
    slug: 'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    title: 'Een perfecte Google PageSpeed score: zin en onzin van 100/100',
    image: '/blog/pagespeed-score.png',
    excerpt: 'Waarom een perfecte score niet alles is en hoe snelheid wel je omzet beïnvloedt.'
  }
];

export default function WordPressSEOPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes/#article",
    "headline": "WordPress SEO: meer dan wat groene Yoast-vinkjes",
    "description": "Waarom echte WordPress SEO verder gaat dan Yoast of Rank Math. Leer wat écht werkt voor betere rankings.",
    "image": "/blog/wordpress-seo.jpg",
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
      "@id": "https://vizibly.nl/seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes/"
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
                WORDPRESS SEO
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                WordPress SEO: meer dan wat groene Yoast-vinkjes
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  12 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/wordpress-seo.jpg"
                alt="WordPress SEO - meer dan groene Yoast vinkjes"
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
            Je hebt alle Yoast-vinkjes op groen. Je concurrent ook. Hij staat op plek 3. Jij op pagina 2. Waarom? Omdat echte WordPress SEO niks te maken heeft met een plugin die tevreden is. Het gaat om wat Google ziet, wat bezoekers doen, en hoe jouw site zich verhoudt tot de concurrentie.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De plugin-obsessie: waarom groene vinkjes je niet redden
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Iemand zoekt &quot;WordPress traag na update&quot;. Yoast zegt: gebruik je zoekwoord 5 keer. Rank Math geeft je een score van 87/100. En dan?
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Dan schrijf je een artikel dat voldoet aan de plugin, maar niet aan de zoeker. Want die wil geen artikel over zoekwoorden - die wil weten hoe hij zijn site snel krijgt. Dat is het verschil tussen plugin-SEO en echte SEO.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO-plugins zoals Yoast SEO, Rank Math of All in One SEO zijn handige tools voor on-page basics. Ze helpen met title tags, meta descriptions en XML sitemaps. Prima. Maar ze zien niet hoe sterk je concurrenten zijn. Ze zien niet of je content de zoekintentie matcht. Ze zien niet de volledige technische staat van je site. En ze zien niet wat bezoekers doen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Plugins geven je een checklist. Maar <Link href="/de-verborgen-kracht-in-seo-gebruikersgedrag" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">gebruikersgedrag beïnvloedt je Google-positie</Link> net zo hard als je title tag.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelvoorkomende WordPress SEO-problemen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Op Reddit en forums kom je steeds dezelfde frustraties tegen. Iemand installeert 15 plugins &quot;voor SEO&quot;. Site wordt traag. Rankings dalen. Of: iemand kiest een mooi thema met veel animaties. Pagina laadt in 8 seconden. Google straft af.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het probleem? WordPress maakt SEO makkelijk toegankelijk, maar juist daardoor denken mensen dat het simpel is. Je installeert Yoast, klikt wat knoppen, en klaar. Maar WordPress is als een auto: je kunt ermee rijden zonder de motor te begrijpen, maar als je wil racen moet je weten wat er onder de motorkap zit.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De meest voorkomende WordPress SEO-fout: te veel vertrouwen op één tool. Een plugin kan niet alles oplossen. Het kan je helpen met de basis, maar het kent je doelgroep niet, het ziet je concurrenten niet, en het begrijpt niet wat bezoekers écht zoeken.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            WordPress SEO-instellingen configureren
          </h2>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Voor je aan content begint, moet je WordPress-installatie technisch op orde zijn. Anders ben je aan het optimaliseren op een wankele basis.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Permalink-structuur instellen
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WordPress biedt meerdere permalink-structuren. De standaard (?p=123) is waardeloos voor SEO. De beste optie voor de meeste sites is /%postname%/. Dit geeft je schone, leesbare URLs zoals jouwsite.nl/wordpress-seo-tips in plaats van jouwsite.nl/?p=456.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Voor webshops kan /%category%/%postname%/ werken als je productcategorieën logisch zijn. Maar pas dit alleen aan bij een nieuwe site. Wijzigen na lancering vereist redirects voor elke bestaande URL.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Categorie en tag-architectuur
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WordPress maakt automatisch archiefpagina&apos;s voor elke categorie en tag. Klinkt handig, maar op Reddit lees je regelmatig over sites met 50+ categorieën voor 30 posts. Het resultaat? Te veel categorieën betekent verwaterde link juice. Tags zonder strategie betekent duplicate content.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Beter: 3-7 hoofdcategorieën, niet 47. Tags alleen als ze meerdere posts verbinden. Subcategorieën alleen als je 10+ posts per categorie hebt.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Content optimaliseren voor zoekmachines
          </h2>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Hier is waar de meeste WordPress-sites falen. Ze schrijven content die de plugin tevreden stelt, niet de zoeker.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Zoekintentie begrijpen en matchen
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google&apos;s algoritme is goed in begrijpen wat iemand wil. Jouw content moet dat ook zijn. Voorbeeld: &quot;WordPress installeren&quot; heeft een andere intentie dan &quot;beste WordPress hosting&quot;. Het eerste vraagt om een handleiding. Het tweede vraagt om een vergelijking.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Check voor elk artikel: wat wil de zoeker precies? <Link href="/content-clusters-topic-authority-opbouwen" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Content clusters</Link> helpen je hier systematisch mee. In plaats van losse artikelen schrijf je clusters rond hoofdonderwerpen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Content kwaliteit boven kwantiteit
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            &quot;2000 woorden is beter voor SEO&quot; is onzin. Wat werkt: grondigere informatie, niet meer woorden maar meer waarde. Duidelijkere structuur, want scannability wint het van tekstmuren. Eigen expertise, want inzichten die anderen missen ranken beter.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Concurrent heeft 1500 woorden over WordPress snelheid? Schrijf 1200 met een unieke case, meetbare resultaten en drie oplossingen die hij niet noemt. Dat rankt beter.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Technische WordPress SEO-optimalisatie
          </h2>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            Dit is waar plugins je niet redden. Technische SEO voor WordPress vereist meer dan groene vinkjes.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Hosting en server-configuratie
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Je kunt je WordPress-site perfect optimaliseren, maar als je hosting waardeloos is, verlies je alsnog. Server response time onder 200ms is wat je wil. PHP 8.1 of hoger. SSD-opslag. Voor sites met 10.000+ bezoekers per maand loont een VPS.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Goedkope shared hosting voor €3/maand werkt prima voor een blog. Voor een webshop die €10k/maand draait? Investeer €25/maand in betere hosting.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Core Web Vitals specifiek voor WordPress
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Een perfecte PageSpeed score is geen doel op zich</Link>, maar Core Web Vitals zijn wél een ranking factor.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>LCP (Largest Contentful Paint) - onder 2,5 seconden:</strong> Optimaliseer featured images met WebP-formaat en lazy loading. Preload kritieke fonts.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>FID/INP (Interactivity) - onder 200ms:</strong> Beperk JavaScript, vooral third-party scripts. Check je thema - veel page builders zijn JS-zwaar.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>CLS (Cumulative Layout Shift) - onder 0,1:</strong> Reserveer ruimte voor advertenties en embeds. Gebruik vaste dimensies voor afbeeldingen.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Interne linkstructuur voor WordPress SEO
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Backlinks zijn lastig te krijgen. Interne links zijn volledig binnen jouw controle. En ze zijn cruciaal voor WordPress SEO.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Waarom interne links werken: ze verdelen link juice van sterke naar zwakkere pagina&apos;s, ze helpen Google bepalen welke pagina&apos;s belangrijker zijn, en ze houden bezoekers langer op je site.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De strategie: link vanaf je best presterende content naar pagina&apos;s die je wilt boosten. Gebruik beschrijvende ankerteksten, niet &quot;klik hier&quot;.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            WordPress SEO-plugins vergelijken
          </h2>
          <p className="mb-8 text-base font-bold text-black/80 lg:text-lg">
            In 2025 doen alle grote plugins hetzelfde: title tags, meta descriptions, XML sitemaps, schema markup. Het verschil zit in de interface en extra features.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Yoast SEO: de klassieker
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voordelen: herkenbare interface, uitgebreide documentatie, readability-analyse. Nadelen: opdringerige notificaties, feature-bloat. Voor wie: beginners die begeleiding willen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Rank Math: de uitdager
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voordelen: meer gratis features (redirects, schema, 404-monitoring), schonere interface. Nadelen: kleinere support community. Voor wie: gevorderden die meer controle willen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            The SEO Framework: minimalisme
          </h3>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voordelen: geen ads, ultralight, focus op techniek. Nadelen: geen readability-analyse, minder hand-holding. Voor wie: experts die geen afleiding willen.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelgemaakte WordPress SEO-fouten
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Te veel plugins:</strong> Elke plugin is extra code. 50 plugins betekent trage site betekent slechte rankings. Kies er één per functie.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Permalink-structuur achteraf wijzigen:</strong> Alle oude URLs zijn dan dood. Gebruik 301-redirects als je dit doet.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Dubbele content door tags:</strong> 50 tags met elk 1-2 posts is 50 dunne pagina&apos;s. Noindex tag-pagina&apos;s in je SEO-plugin.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>Afbeeldingen niet geoptimaliseerd:</strong> Een 5MB foto als 400px thumb laadt traag. Comprimeer voor upload, gebruik WebP.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            WordPress en SEO in 2025
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            WordPress is niet automatisch goed of slecht voor SEO. Het is een gereedschap. Een timmerman met een goede hamer maakt een huis. Een beginner met dezelfde hamer maakt een wrak.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het verschil tussen een WordPress-site die rankt en één die dat niet doet, zit niet in de CMS. Het zit in begrip. Begrip van techniek, content en strategie.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Die groene Yoast-vinkjes zijn het startpunt, niet de finish. Het verschil maak je met wat de plugin niet ziet: betere hosting, slimmere interne links, content die dieper gaat.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Hulp nodig met WordPress SEO?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Je WordPress-site staat er. De plugin is geïnstalleerd. Maar je staat nog steeds niet waar je wilt staan.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Check waar je nu lekt. Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. In 15 minuten weet je wat er moet gebeuren.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                PLAN EEN GESPREK
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      <RelatedArticles articles={relatedArticles} />

      <FinalCTA
        heading="Klaar om te groeien?"
        description="Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden."
      />

      <Footer />
    </>
  );
}
