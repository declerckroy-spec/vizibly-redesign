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
  title: 'Google PageSpeed score 100/100 | Zin en onzin',
  description: 'Google PageSpeed Insights impact op conversies en SEO. Lees waarom een perfecte score niet alles is en hoe snelheid wel je omzet beinvloedt.',
  openGraph: {
    title: 'Google PageSpeed score 100/100 | Zin en onzin',
    description: 'Google PageSpeed Insights impact op conversies en SEO. Lees waarom een perfecte score niet alles is en hoe snelheid wel je omzet beinvloedt.',
    url: 'https://vizibly.nl/een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: 'https://vizibly.nl/blog/pagespeed-score.png' }],
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
    slug: 'de-verborgen-kracht-in-seo-gebruikersgedrag',
    title: 'De verborgen kracht in SEO: zo beïnvloedt gebruikersgedrag jouw Google positie',
    image: '/blog/gebruikersgedrag-seo.jpg',
    excerpt: 'Ontdek hoe gebruikersgedrag je posities in Google beïnvloedt en hoe je de ervaring verbetert.'
  },
  {
    slug: 'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    title: 'SEO instellingen: 7 cruciale configuraties die je website direct beter laten scoren',
    image: '/blog/seo-instellingen.jpg',
    excerpt: '7 technische instellingen die je rankings direct verbeteren.'
  }
];

export default function PageSpeedScorePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100/#article",
        "headline": "Een perfecte Google PageSpeed score: zin en onzin van 100/100",
        "description": "Google PageSpeed Insights impact op conversies en SEO. Lees waarom een perfecte score niet alles is en hoe snelheid wel je omzet beinvloedt.",
        "image": "https://vizibly.nl/blog/pagespeed-score.png",
        "datePublished": "2025-06-04",
        "dateModified": "2025-06-04",
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
          "@id": "https://vizibly.nl/een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100/"
        }
      }
    ]
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
          {/* Back link */}
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                TECHNISCHE SEO
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Een perfecte Google PageSpeed score: zin en onzin van 100/100
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  5 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/pagespeed-score.png"
                alt="Perfecte Google PageSpeed score"
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
          {/* Intro */}
          <p className="mb-12 text-lg font-bold text-black/80 lg:text-xl xl:text-2xl leading-relaxed italic">
            Is een perfecte score van 100 op Google PageSpeed Insights echt zo belangrijk? We duiken in de mythe van perfectie en waarom snelheid wel impact heeft op je bedrijf. (En ja, wij scoren toevallig wel 100/100 op mobiel & desktop, maar daar komen we nog op terug.)
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            100: het getal dat iedereen wil maar weinigen begrijpen
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Website eigenaren en ontwikkelaars raken geobsedeerd door dat ene getal: 100. Een perfecte score op Google PageSpeed Insights lijkt het ultieme bewijs dat je website technisch perfect is. Maar klopt dat wel?
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De waarheid is genuanceerder. Google PageSpeed Insights is bedoeld als gids, niet als ultiem doel. Een website kan een perfecte score hebben en toch geen geweldige gebruikerservaring bieden. Omgekeerd zijn er websites die geen 100/100 scoren maar razendsnel laden in de praktijk.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het echte verhaal zit in wat er achter die score schuilgaat. Want hoewel perfectie niet per se het doel moet zijn, heeft website snelheid wel een meetbare impact op je bedrijfsresultaten.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom snelheid wel uitmaakt voor je bedrijf
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Laten we eerlijk zijn: je bezoekers geven niets om je PageSpeed score. Maar ze geven wel om hoe snel jouw website laadt. En dat verschil is merkbaar in je omzetcijfers.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een B2B-website die in 1 seconde laadt heeft een <a href="https://blog.hubspot.com/marketing/page-load-time-conversion-rates" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">conversieratio die 3x hoger is</a> dan een website die 5 seconden nodig heeft. Voor e-commerce is dit verschil nog dramatischer. <a href="https://www.bidnamic.com/resources/how-website-speed-affects-your-conversion-rates" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Onderzoek van Bidnamic</a> toont aan dat voor elke seconde dat een site sneller laadt, de conversieratio verbetert met 17%.
          </p>

          <div className="mb-12 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-bold text-black lg:text-lg">
              De psychologie erachter is simpel: <a href="https://wp-rocket.me/blog/website-load-time-speed-statistics/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-black decoration-2 hover:bg-black hover:text-accent transition-colors">47% van consumenten verwacht</a> dat een website in 2 seconden of minder laadt, en 40% verlaat een website die langer dan 3 seconden nodig heeft. In een tijd waarin aandacht schaars is, bepalen die eerste seconden of je een klant wint of verliest.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De keerzijde van een extreem snelle website
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Hier wordt het interessant. <a href="https://www.webfx.com/blog/seo/site-speed-statistics/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Slechts 34% van de top 100 websites</a> slaagt voor Core Web Vitals, maar dat betekent niet dat 66% van de grootste websites slecht presteert. Veel van deze sites kiezen bewust voor functionaliteit over perfecte scores.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een perfecte PageSpeed score kan namelijk betekenen dat je essentiele functionaliteiten hebt weggelaten. Tracking voor marketing, chatbots voor klantenservice, of uitgebreide productafbeeldingen - allemaal kunnen ze je score drukken terwijl ze wel waarde toevoegen voor bezoekers.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het belangrijkste is niet het getal zelf, maar het implementeren van de aanbevelingen die PageSpeed Insights geeft. Een website die 85/100 scoort maar alle belangrijke optimalisaties heeft doorgevoerd, kan beter presteren dan een kale website met 100/100.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Hoe wij wel een perfecte pagespeed score op mobiel behaalden
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Bij Vizibly hebben we bewezen dat je het beste van beide werelden kunt hebben. Onze website scoort een perfecte 100/100 op Google PageSpeed Insights, met Core Web Vitals die allemaal in het groene gebied vallen. Zo hebben we dit gedaan:
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Technische optimalisatie
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            We kozen voor een schone codebase zonder onnodige bloatware. Elke regel code heeft een doel, elk script wordt asynchroon geladen waar mogelijk. Onze afbeeldingen zijn gecomprimeerd naar moderne formaten zoals WebP, en we gebruiken een krachtige caching strategie. Meer over onze technische aanpak lees je op onze <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">design & techniek pagina</Link>.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Strategische keuzes
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            In plaats van alle mogelijke functies toe te voegen, hebben we bewust gekozen voor snelheid. Onze website doet precies wat hij moet doen - potentiele klanten informeren en converteren - zonder poespas die de prestaties zou schaden.
          </p>

          <div className="mb-12 border-4 border-black bg-black p-6 lg:p-8 text-white" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
            <p className="text-base font-bold text-white lg:text-lg">
              Het resultaat spreekt voor zich: First Contentful Paint van 0,9 seconden, geen layout shifts, en een Total Blocking Time van slechts 10 milliseconden. Maar belangrijker nog: een website die daadwerkelijk converteert.
            </p>
          </div>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            SEO impact: waarom Google ook om snelheid geeft
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google heeft bevestigd dat Core Web Vitals een rankingfactor zijn, hoewel ze benadrukken dat content relevantie nog altijd belangrijker is. Maar in competitieve markten, waar meerdere websites vergelijkbare content hebben, kan snelheid het verschil maken.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Core Web Vitals zijn de meest transparante rankingfactor die Google heeft. Je hebt directe toegang tot dezelfde data die Google gebruikt om je website te beoordelen. Dit maakt optimalisatie minder giswerk en meer strategisch werk.
          </p>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De realiteit voor jouw bedrijf
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De vraag is niet of je een perfecte PageSpeed score moet nastreven, maar of je website snel genoeg is voor je bezoekers en doelen. <a href="https://seomator.com/blog/website-load-time-statistics" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Studies tonen aan</a> dat langzaam ladende websites leiden tot een jaarlijks verlies van $2,6 miljard aan verkopen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voor een gemiddelde webshop kan het verschil tussen een snelle en langzame website duizenden euro's per maand schelen in gemiste omzet. Niet vanwege de score zelf, maar vanwege bezoekers die afhaken voordat ze je aanbod kunnen bekijken.
          </p>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Onze aanpak: balans tussen perfectie en praktijk
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Bij Vizibly geloven we in resultaatgerichte optimalisatie. Onze perfecte score is niet het doel - het is bewijs dat we weten hoe we websites kunnen bouwen die zowel snel als effectief zijn.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voor onze klanten betekent dit dat we altijd kijken naar de balans tussen technische perfectie en bedrijfsdoelstellingen. Soms betekent dat een score van 95 accepteren om cruciale functionaliteit te behouden. Andere keren kunnen we die perfecte 100 behalen zonder compromissen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Het belangrijkste is dat je website doet wat hij moet doen: bezoekers omzetten in klanten, snel en zonder frustratie. Dat is de kern van onze <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO-strategie</Link>: technische perfectie in dienst van bedrijfsresultaten.
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Wil je weten hoe snel jouw website echt is?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Neem contact op voor een gratis snelheidsanalyse. We laten je zien waar de grootste kansen liggen, zonder obsessie over perfecte scores.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. Of plan een gesprek.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                GRATIS SNELHEIDSANALYSE
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
