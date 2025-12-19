import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Waarom SEO relevanter is dan ooit | Ondanks AI',
  description: 'Ondernemers twijfelen over SEO door AI. Maar de data vertelt een ander verhaal. Google domineert nog steeds en AI-tools zijn afhankelijk van SEO.',
  openGraph: {
    title: 'Waarom SEO relevanter is dan ooit | Ondanks AI',
    description: 'Ondernemers twijfelen over SEO door AI. Maar de data vertelt een ander verhaal. Google domineert nog steeds en AI-tools zijn afhankelijk van SEO.',
    url: 'https://vizibly.nl/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/seo-gaat-door.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'word-gevonden-door-ai-de-toekomst-van-seo-is-geo',
    title: 'Word gevonden door AI: de toekomst van SEO is GEO',
    image: '/blog/geo-seo-ai.jpg',
    excerpt: 'Generative Engine Optimization: hoe je gevonden wordt in AI-antwoorden.'
  },
  {
    slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    title: 'MUVERA: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    image: '/blog/muvera.jpg',
    excerpt: 'Google heeft MUVERA aangekondigd. Dit moet je weten over de toekomst van SEO.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  }
];

export default function SeoRelevantAIPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai/#article",
    "headline": "Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)",
    "description": "Ondernemers twijfelen over SEO door AI. Maar de data vertelt een ander verhaal. Google domineert nog steeds en AI-tools zijn afhankelijk van SEO.",
    "image": "/blog/seo-gaat-door.jpg",
    "datePublished": "2025-10-02",
    "dateModified": "2025-10-02",
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
      "@id": "https://vizibly.nl/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai/"
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
          {/* Back link */}
          <Link href="/vizie" className="mb-8 inline-flex items-center text-base font-bold uppercase text-accent hover:text-white transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                SEO & AI
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  7 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
              <Image
                src="/blog/seo-gaat-door.jpg"
                alt="SEO heeft nog zeker zin in 2025 en daarna"
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
          {/* Intro */}
          <p className="mb-6 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Ik merk het steeds vaker in gesprekken: ondernemers die twijfelen over SEO. Ze lezen artikelen over ChatGPT, zien hoe snel AI groeit, en vragen zich af: investeren in SEO, heeft dat nog wel zin?
          </p>
          <p className="mb-6 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Het korte antwoord? Jazeker. Sterker nog: SEO wordt juist belangrijker.
          </p>
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Het langere antwoord? Daar gaan we het nu over hebben. Want ja, zoeken verandert. Ja, AI speelt een grotere rol. Maar nee, dat betekent niet dat SEO minder belangrijk wordt. Het tegendeel is waar.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De vraag: wat doet AI met SEO?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het verhaal ken je wel. Een artikel op LinkedIn. Een YouTube-video van een marketeer. "SEO is dood", klinkt het soms. Iemand die je vertelt dat je nu moet investeren in "AI-optimalisatie" en dat traditionele SEO achterhaald is.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het verhaal gaat ongeveer zo: mensen gebruiken nu ChatGPT, Gemini en Claude voor hun vragen. Die AI-tools geven direct antwoorden. Waarom zou iemand dan nog op links klikken? Waarom zou je website dan nog bezoekers krijgen? SEO wordt minder relevant.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Logisch misschien. Maar de data vertelt een ander verhaal.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Feit 1: Google is nog steeds de baas (en blijft dat voorlopig)
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De cijfers liegen niet. Google heeft <a href="https://gs.statcounter.com/search-engine-market-share" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">89-90% marktaandeel</a> wereldwijd. Dat is voor het eerst sinds 2015 onder de 90% gezakt, maar dat is nog steeds enorm dominant.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google verwerkt <a href="https://www.semrush.com/blog/google-search-statistics/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">meer dan 5 biljoen</a> zoekopdrachten per jaar. Dat zijn 9,5 miljoen per minuut. Elke minuut.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            ChatGPT groeit hard, dat klopt. Het heeft inmiddels ongeveer <a href="https://firstpagesage.com/seo-blog/google-vs-chatgpt-market-share-report/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">9% digitale queries</a>. Maar begin 2025 kreeg Google nog steeds <a href="https://searchengineland.com/google-search-bigger-chatgpt-search-453142" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">373 keer zoveel</a> zoekopdrachten als ChatGPT.
          </p>

          {/* Highlight box */}
          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
            <p className="text-xl font-black text-black lg:text-2xl">
              373 keer zoveel.
            </p>
          </div>

          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Die mensen die nu ChatGPT gebruiken, zijn vaak dezelfde mensen die ook Google gebruiken. Het is niet of-of. Het is en-en. Ze gebruiken Google voor het ene, AI voor het andere.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Belangrijker: de mensen met geld, de beslissers in bedrijven, de doelgroep waar jij het op gemunt hebt? Die zijn meestal wat ouder. Ze zijn vertrouwd met Google. En ze blijven Google gebruiken, vooral voor belangrijke beslissingen. Waarom? Omdat vertrouwen niet zomaar verschuift.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Feit 2: AI liegt. En dat weten mensen
          </h2>

          {/* Inline image */}
          <div className="mb-10 relative aspect-video overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
            <Image
              src="/blog/hallucinaties-ai.jpg"
              alt="AI hallucinaties in beeld"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            AI-tools zoals ChatGPT, Gemini en Perplexity hebben een groot probleem: ze verzinnen dingen. Dat noemen we in de industrie "hallucinaties", maar noem het gewoon wat het is: het systeem geeft antwoorden die niet kloppen, met volle overtuiging.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <a href="https://www.allaboutai.com/resources/ai-statistics/ai-hallucinations/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">De beste AI-modellen</a> hallucineren nog steeds in minimaal 0,7% van de gevallen. Sommige modellen halen percentages van 25% of hoger. En dan komt het probleem: <a href="https://www.techopedia.com/ai-hallucinations-rise" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">de nieuwste reasoning models</a> hallucineren MEER dan de oudere versies. Het o3 model hallucineerde in 33% van de gevallen, het o4-mini model zelfs in 48%.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Hoe slimmer de AI wordt in complexe berekeningen, hoe vaker het dingen verzint.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Waarom gebeurt dit? <a href="https://www.computerworld.com/article/4059383/openai-admits-ai-hallucinations-are-mathematically-inevitable-not-just-engineering-flaws.html" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">OpenAI geeft het toe</a>: hallucinaties zijn mathematisch onvermijdelijk. Het is geen bug die ze kunnen fixen. Het zit ingebakken in hoe deze systemen werken. Ze voorspellen het meest waarschijnlijke volgende woord op basis van patronen, niet op basis van waarheid.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            En mensen beginnen dit te merken. Wanneer je iets belangrijks wilt weten (welk product je moet kopen, welke dienstverlener je moet inhuren, of een medische beslissing moet nemen), vertrouw je dan op een systeem dat regelmatig dingen verzint? Of zoek je betrouwbare bronnen?
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Traditionele zoekmachines laten je meerdere bronnen zien. Je kunt vergelijken, checken, je eigen oordeel vormen. AI geeft je een antwoord met overtuiging, ook als het fout is. Dat is waarom Google voor belangrijke beslissingen blijft winnen.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Feit 3: AI kan niet zonder zoekmachines (en dat is het bewijs)
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Nu komen we bij het meest onderschatte inzicht. Dit is waarom ik zo zeker weet dat SEO niet verdwijnt, maar evolueert.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            ChatGPT Search, Gemini, Claude: <a href="https://medium.com/research-highlights-by-winston-wang/how-rag-technology-powers-ai-driven-search-engines-a-deep-dive-into-tech-behind-perplexity-ai-252f8fe4f197" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">ze gebruiken allemaal RAG</a>: Retrieval-Augmented Generation. Klinkt ingewikkeld, maar het betekent gewoon dit: de AI zoekt eerst op het web voordat het een antwoord geeft.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Zonder die zoekresultaten? Geen accurate antwoorden.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            ChatGPT Search en Gemini kunnen niet functioneren zonder real-time toegang tot websites. Ze crawlen websites, indexeren content, en gebruiken die informatie om antwoorden te genereren.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het hybride model dat iedereen voorspelt? Het is al de realiteit.
          </p>

          {/* Inline image */}
          <div className="mb-10 relative aspect-video overflow-hidden border-4 border-black" style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}>
            <Image
              src="/blog/hybride-model-ai-search.jpg"
              alt="Hybride model AI + search"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            En waarom is dat zo belangrijk? Die AI-tools moeten ergens hun informatie vandaan halen. Ze citeren bronnen. Ze linken naar websites. En welke websites citeren ze? Degenen die hoog scoren op dezelfde factoren waar Google al jaren om geeft: autoriteit, expertise, betrouwbaarheid, originele content.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <a href="https://www.searchenginejournal.com/is-seo-still-relevant-in-the-ai-era-new-research-says-yes/547929/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Een recent onderzoek</a> toonde aan dat websites die #1 staan in Google in 25% van de gevallen ook verschijnen in AI-zoekresultaten. Lagere rankings? Lagere kans om geciteerd te worden door AI.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Zie je het patroon? SEO wordt niet minder belangrijk. Het wordt belangrijker, omdat het nu voor meerdere platformen werkt.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat betekent dit voor jou?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Zet de feiten op een rij:
          </p>
          <ol className="mb-6 space-y-3 pl-6 list-decimal">
            <li className="text-base font-bold text-black/80 lg:text-lg pl-2">
              Google domineert nog steeds en blijft de plek waar mensen met koopintentie beginnen
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg pl-2">
              AI-tools hallucineren te veel om volledig vertrouwd te worden voor belangrijke beslissingen
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg pl-2">
              Die AI-tools zijn afhankelijk van traditionele zoekmachines en SEO-signalen
            </li>
          </ol>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De conclusie? SEO is niet dood. SEO evolueert.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Wat vroeger "zichtbaar zijn in Google" heette, wordt nu "zichtbaar zijn overal waar mensen zoeken". Dezelfde principes, bredere toepassing.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Experts noemen dit "Search Everywhere Optimization". Je optimaliseert niet meer alleen voor Google, maar ook voor hoe AI-tools jouw content vinden en citeren. De basis blijft hetzelfde:
          </p>
          <ul className="mb-12 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Sterke, originele content die echte expertise toont
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Duidelijke structuur die zoekmachines (en AI) kunnen begrijpen
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Autoriteit opbouwen door vermeldingen, links en reviews
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Technisch alles op orde hebben (snelheid, indexeerbaarheid, schema markup)
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Maar er verandert wel iets
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Ik wil eerlijk zijn: niet alles blijft hetzelfde. Er zijn verschuivingen waar je rekening mee moet houden.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Clicks naar websites dalen. In de VS zijn <a href="https://www.salesforce.com/blog/future-of-seo/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">clickless queries gestegen</a> met 11% jaar-op-jaar, terwijl clicks naar organische resultaten met 9% daalden. AI Overviews geven antwoorden direct in Google, zonder dat mensen doorklikken.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De clicks die je nog wel krijgt, zijn waardevoller. Mensen die doorklikken na een AI-overzicht zijn verder in hun zoektocht, hebben meer context, en zijn dichter bij een beslissing.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Denk in conversies, niet in traffic.</strong>
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Daarnaast zien we een perceptieverschuiving. In onderzoek zegt <a href="https://searchengineland.com/how-ai-is-reshaping-seo-challenges-opportunities-and-brand-strategies-for-2025-456926" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">82% van de consumenten</a> dat AI-search nuttiger is dan traditionele zoekmachines. Vooral jongere gebruikers experimenteren met tools zoals ChatGPT, Gemini en Claude. Wat mensen zeggen te gaan doen en wat ze daadwerkelijk doen, zijn twee dingen. Maar de trend is duidelijk.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Dus ja, je moet je aanpassen. Nee, dat betekent niet dat je alles moet veranderen.
          </p>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De echte kans
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Waar het interessant wordt voor jou als ondernemer: terwijl sommigen twijfelen over de waarde van SEO, ontstaat er een kans.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Niet iedereen investeert even actief in SEO. Sommige bedrijven verleggen hun focus volledig naar andere kanalen. Ze gaan hun budget steken in paid ads of proberen viral te gaan op social media.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Ondertussen blijft Google 89% van alle zoekverkeer leveren. En de concurrentie wordt minder.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voor jou betekent dit: als je nu investeert in solide SEO (content die autoriteit toont, techniek die klopt, een merkpositie die AI-tools kunnen begrijpen), dan bouw je iets wat werkt op meerdere fronten. Je bent zichtbaar in Google en je wordt geciteerd door AI-tools.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <a href="https://searchengineland.com/ai-search-booming-seo-still-not-dead-458935" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">De principes die Lily Ray benadrukt</a>, een van de meest gerespecteerde SEO-experts wereldwijd, blijven overeind: focus op authenticiteit, originele content, sterke personal brands en thought leadership. Dit zijn strategieen die zoekmachines niet kunnen wegnemen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Goede SEO betekent niet langer "trucjes toepassen om Google te manipuleren". Het betekent: de beste bron zijn voor je onderwerp. Zo goed dat zowel Google als ChatGPT niet om je heen kunnen.
          </p>

          {/* Section 8 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat moet je nu doen?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO werkt. Meer dan ooit, juist omdat het speelveld breder wordt.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Focus hierop:
          </p>
          <ul className="mb-12 space-y-4 pl-6">
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Check waar je nu staat.</span> Hoe zichtbaar ben je in Google? Hoe sterk is je content? Hoe snel is je website? Dit zijn je basis.
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Bouw autoriteit op.</span> Zorg dat je niet zomaar een website bent, maar een bron. <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Schrijf content</Link> die niemand anders kan schrijven omdat jij de expertise hebt. Gebruik data, cases, concrete voorbeelden.
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Denk in antwoorden, niet in pagina's.</span> AI-tools willen specifieke antwoorden op specifieke vragen. Heb je die? In heldere, citeerbare vorm?
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Maak het <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">technisch</Link> waterdicht.</span> Snelheid, structured data, duidelijke headers: dit helpt zowel Google als AI om je content te begrijpen en te gebruiken.
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Blijf consistent.</span> Goede SEO is geen sprintje. Op de lange termijn wint autoriteit van trucs.
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De ondernemers die dit begrijpen, die nu investeren terwijl anderen twijfelen, die bouwen aan echte zichtbaarheid in plaats van te jagen op hypes? Die pakken marktaandeel. Niet over vijf jaar. Nu.
          </p>

          {/* Section 9 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Het eindoordeel
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO verandert. Van een Google-alleen strategie naar een overal-zichtbaar strategie. Van pagina's optimaliseren naar autoriteit opbouwen. Van trucjes naar basis.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Als je het goed doet, werkt het overal. In Google. In ChatGPT. In Gemini. Overal waar mensen zoeken naar wat jij aanbiedt.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De vraag is niet: heeft SEO nog zin?
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De vraag is: ga jij investeren in een <Link href="/seo-strategie" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">strategie</Link> die werkt op meerdere platformen?
          </p>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Wil je weten waar je nu staat?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Bel me: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. In 15 minuten vertel ik je precies wat er moet gebeuren om jouw zichtbaarheid te verhogen: in Google en in AI-tools.
            </p>
            <Button size="lg" asChild className="bg-accent text-black border-accent hover:bg-white hover:text-black px-8 py-5 text-base">
              <Link href="/contact">
                NEEM CONTACT OP
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-12 text-brutalist-h2 text-white">
            Lees meer
          </h2>

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
                    <p className="mb-4 text-sm font-bold text-black/70 line-clamp-2">
                      {related.excerpt}
                    </p>
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
            <p className="mb-12 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden.
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
      <footer className="relative bg-black py-16 text-white">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="mb-6 block">
                <Image
                  src="/logo-brutalist-white.svg"
                  alt="Vizibly Logo"
                  width={200}
                  height={50}
                  className="h-auto w-48"
                />
              </Link>
              <p className="text-base font-bold text-white/80 lg:text-lg">
                SEO specialist die zorgt dat je gevonden wordt.
              </p>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Diensten</h4>
              <ul className="space-y-4">
                <li><Link href="/full-service-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Full Service SEO</Link></li>
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-accent hover:text-white transition-colors">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Contact</h4>
              <ul className="space-y-4 text-base font-bold text-white/80 lg:text-lg">
                <li>Vizibly</li>
                <li>'t Zanddorp 55</li>
                <li>4335 AE Middelburg</li>
                <li>
                  <a href="tel:0628206410" className="hover:text-accent transition-colors">
                    0628206410
                  </a>
                </li>
                <li>
                  <a href="mailto:info@vizibly.nl" className="hover:text-accent transition-colors">
                    info@vizibly.nl
                  </a>
                </li>
                <li>KvK: 68478143</li>
              </ul>
            </div>
          </div>
          <div className="border-t-4 border-white/20 pt-8 text-center">
            <p className="text-base font-bold uppercase text-white/60">&copy; {new Date().getFullYear()} VIZIBLY. ALLE RECHTEN VOORBEHOUDEN.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
