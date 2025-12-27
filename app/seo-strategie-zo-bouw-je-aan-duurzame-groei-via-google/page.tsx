import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowRight, ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO strategie die werkt | Van analyse tot resultaten',
  description: 'Een effectieve SEO strategie begint bij je bedrijfscijfers, niet bij Google. Ontdek hoe je zoektermen vindt die omzet brengen.',
  openGraph: {
    title: 'SEO strategie die werkt | Van analyse tot resultaten',
    description: 'Een effectieve SEO strategie begint bij je bedrijfscijfers, niet bij Google. Ontdek hoe je zoektermen vindt die omzet brengen.',
    url: 'https://vizibly.nl/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/SEO-strategie.jpg' }],
  },
};

const faqData = [
  {
    question: 'Hoelang duurt het voordat je resultaat ziet?',
    answer: 'Eerste effecten na drie tot zes maanden. Duidelijke groei na zes tot twaalf maanden. Beste resultaten vaak in jaar twee of drie.'
  },
  {
    question: 'Wat kost een serieuze aanpak?',
    answer: 'Voor mkb-bedrijven: €500 tot €2.000 per maand voor een volledig traject inclusief analyse, strategie, inhoud en technische verbetering. Wil je eerst weten waar je staat? Een eenmalige SEO-doorlichting geeft inzicht in je huidige situatie en kansen.'
  },
  {
    question: 'Kun je het zelf doen?',
    answer: 'Technisch gezien wel. Maar SEO vraagt specifieke kennis, tijd en regelmaat. De meeste ondernemers besteden hun tijd beter aan hun kernactiviteiten.'
  },
  {
    question: 'Wat als anderen al bovenaan staan?',
    answer: 'Dan weet je dat het mogelijk is in jouw sector. Analyseer hun aanpak. Doe het beter. Van positie 18 naar positie 3 gaat vaak sneller dan je denkt.'
  },
  {
    question: 'Werkt SEO ook voor AI-zoekmachines?',
    answer: 'Ja. Websites die hoog scoren in Google, worden vaker genoemd door ChatGPT en vergelijkbare programmas. Goede SEO werkt op meerdere plekken.'
  },
  {
    question: 'Waarom falen de meeste strategieën?',
    answer: 'Geen duidelijk doel, focus op verkeerde zoektermen, geen structurele uitvoering, te snel opgeven. Een goede strategie begint bij je bedrijfscijfers en richt zich op zoektermen met koopintentie.'
  }
];

const relatedArticles = [
  {
    slug: 'content-clusters-topic-authority-opbouwen',
    title: 'Content clusters: Topic authority opbouwen',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Google wil zien dat je echt verstand hebt van je onderwerp. Dat je de autoriteit bent.'
  },
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    image: '/blog/wordpress-snelheid.jpg',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3.'
  },
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    image: '/blog/seo-gaat-door.jpg',
    excerpt: 'Ondernemers twijfelen over SEO. Ze zien hoe snel AI groeit. Maar SEO is relevanter dan ooit.'
  }
];

export default function SeoStrategiePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://vizibly.nl/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google/#article",
        "headline": "SEO strategie: zo bouw je aan duurzame groei via Google",
        "description": "Een effectieve SEO strategie begint bij je bedrijfscijfers, niet bij Google. Ontdek hoe je zoektermen vindt die omzet brengen.",
        "image": "/blog/groeien-topical-authority.jpg",
        "datePublished": "2025-11-19",
        "dateModified": "2025-11-19",
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
          "@id": "https://vizibly.nl/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vizibly.nl/seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google/#faq",
        "mainEntity": faqData.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
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
                SEO STRATEGIE
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                SEO strategie: zo bouw je aan duurzame groei via Google
              </h1>

              {/* Meta info */}
              <div className="flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-accent" />
                  19 november 2025
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  6 min leestijd
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border-4 border-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
              <Image
                src="/blog/groeien-topical-authority.jpg"
                alt="SEO strategie: zo bouw je aan duurzame groei via Google"
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
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand. Bedrijven die groeien bouwen systematisch aan zoekwoordposities, technische optimalisatie en domeinautoriteit. Ze weten welke zoektermen kopers gebruiken en hoe ze daar bovenaan komen in de zoekresultaten. Bedrijven die stilstaan werken zonder duidelijk doel: losse acties die elkaar niet versterken.
          </p>

          {/* Section 1 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat een SEO strategie werkelijk inhoudt
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een SEO strategie is geen takenlijst. Het is ook geen maandrapport vol cijfers zonder vervolgstappen.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Het is een concreet antwoord op één vraag: welke zoektermen brengen klanten die kopen, en hoe kom je daar bovenaan?
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Die focus op resultaat maakt het verschil tussen SEO dat geld oplevert en SEO dat tijd vreet zonder meetbaar effect.
          </p>

          {/* Section 2 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom strategieën mislukken
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Bedrijven beginnen zonder helder doel. Ze schrijven over onderwerpen die niemand zoekt. Of ze richten zich op zoekwoorden die wel verkeer brengen, maar niet de juiste bezoekers.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een webshop in sportvoeding optimaliseert voor "sportvoeding informatie". Maar hun klanten zoeken "whey proteïne bestellen" of "eiwitpoeder kopen online".
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Resultaat na drie maanden: geen omzet. Conclusie: SEO werkt niet.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Maar <Link href="/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">SEO werkt wel</Link>. Een verkeerde aanpak niet.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Volgens <a href="https://firstpagesage.com/reports/seo-roi-statistics-fc/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">First Page Sage</a> halen bedrijven gemiddeld 200% tot 700% rendement uit SEO. Sommige sectoren zelfs meer dan 500%. Voorwaarde: je strategie moet kloppen.
          </p>

          {/* Section 3 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            De bouwstenen van een werkende strategie
          </h2>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Begin bij je bedrijfscijfers
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Wat verkoop je? Wie zijn je klanten? Wat zijn je marges? Wat levert één klant gemiddeld op?
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Deze cijfers bepalen hoeveel je kunt investeren. En welke zoektermen voor jou waardevol zijn.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voorbeeld: een klant besteedt €3.000. Dan reken je anders dan bij een klant die €50 uitgeeft.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Webshop sportvoeding. Klant besteedt €180 per jaar. Winstmarge 30%. Elke nieuwe klant is €54 waard. Die informatie helpt voorrang geven aan de juiste zoektermen.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Zoek zoektermen met koopintentie
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Niet elk zoekwoord levert geld op. "Wat is creatine" trekt informatiezoekers. "Creatine monohydraat 1kg kopen" trekt kopers.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Drie vragen bepalen de waarde:
          </p>
          <ul className="mb-6 space-y-3 pl-6">
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Wat zoekt iemand die bij jou koopt?
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Hoeveel mensen zoeken daarnaar?
            </li>
            <li className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
              <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
              Kun je realistisch bovenaan komen?
            </li>
          </ul>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Analyseer je markt. Waarvoor staan anderen bovenaan? Welke termen brengen hen klanten? Programmas zoals Ahrefs of Semrush tonen zoekvolumes en hoe moeilijk het is om hoog te scoren.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Zoektermen met "kopen", "bestellen", "prijs" of "vergelijken" wijzen op koopintentie. Informatieve zoekopdrachten helpen voor gezag en <Link href="/linkbuilding" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">linkbuilding</Link>, maar leveren zelden direct omzet.
          </p>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            Bepaal je huidige positie
          </h3>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voor welke zoektermen sta je al in de resultaten? Welke paginas krijgen organisch verkeer? Waar verlies je bezoekers?
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google Search Console toont gratis waarvoor je gevonden wordt. Google Analytics laat zien waar bezoekers vandaan komen en wat ze doen. SEO-programmas geven een compleet overzicht van je posities en kansen.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Veel bedrijven staan al redelijk voor belangrijke zoektermen. Maar op pagina 2 of 3. Van positie 18 naar positie 3 klimmen vergt vaak minder werk dan van positie 100 naar positie 50.
          </p>

          {/* Highlight box - TODO: Add link to dakdekker case when available */}
          <div className="mb-10 border-4 border-black bg-accent p-6 lg:p-8" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
            <p className="text-base font-bold text-black lg:text-lg">
              <strong>Case:</strong> Een dakdekker in Haarlem stond op plek 14 voor "dakdekker Haarlem". Na drie maanden klom hij naar plek 2. Aanvragen stegen 300%. Investering terugverdiend binnen zes maanden. {/* TODO: Link naar dakdekker case toevoegen */}
            </p>
          </div>

          <h3 className="mb-4 text-brutalist-h3 text-black">
            De drie pijlers van uitvoering
          </h3>

          <p className="mb-4 text-base font-black uppercase text-black lg:text-lg">Content die helpt beslissen</p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Schrijf voor mensen die overwegen te kopen. Welke vragen hebben ze? Welke twijfels? Wat moeten ze weten?
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/seo-copy" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Goede SEO-content</Link> geeft direct antwoord, laat zien waarom jouw oplossing past, en helpt bezoekers kiezen.
          </p>

          <p className="mb-4 text-base font-black uppercase text-black lg:text-lg">Techniek die werkt</p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            De beste inhoud faalt als je website niet werkt. Trage laadtijd jaagt bezoekers weg. Een website die niet werkt op mobiel verliest meer dan de helft van het verkeer.
          </p>
          <p className="mb-10 text-base font-bold text-black/80 lg:text-lg">
            Check de basis: laadt je website binnen twee seconden? Werkt alles op mobiel? Zijn er dode koppelingen? Kan Google alle paginas vinden? Meer over <Link href="/design-techniek" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">technische verbetering</Link>.
          </p>

          <p className="mb-4 text-base font-black uppercase text-black lg:text-lg">Gezag via sterke koppelingen</p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Google vertrouwt websites die andere betrouwbare websites vermelden. Meer gezaghebbende verwijzingen naar jou betekent hogere autoriteit.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Kwaliteit weegt zwaarder dan aantal. Eén verwijzing van een vakautoriteit telt meer dan tientallen waardeloze koppelingen.
          </p>

          {/* Section 4 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Zichtbaarheid voorbij Google
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Mensen zoeken ook via ChatGPT, Claude, Perplexity en de AI-overzichten van Google. Deze programmas geven direct antwoorden, maar halen informatie van websites. Ook van jouw website, als je het goed aanpakt.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Welke websites vermelden deze AI-systemen? Volgens <a href="https://www.searchenginejournal.com/is-seo-still-relevant-in-the-ai-era-new-research-says-yes/547929/" target="_blank" rel="noopener noreferrer" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Search Engine Journal</a> verschijnen websites op positie 1 in Google in 25% van de gevallen ook in AI-zoekresultaten. Lagere posities betekenen minder kans om genoemd te worden.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Dezelfde principes die voor Google werken, werken voor AI-programmas. Duidelijke opbouw, inhoudelijke diepgang, vakkennis, specifieke antwoorden.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Geen aparte aanpak nodig. Goede SEO werkt overal. <Link href="/waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">Lees waarom SEO relevanter is dan ooit</Link>.
          </p>

          {/* Section 5 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Van papier naar praktijk
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een strategie bedenken is één. Uitvoeren bepaalt het resultaat.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Drie valkuilen: te veel tegelijk proberen, geen tijd structureel vrijmaken, te snel opgeven als resultaten even uitblijven.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Je kunt niet voor honderden zoektermen tegelijk werken. Kies de tien tot twintig termen die het meeste opleveren. Pak die systematisch aan. Bouw daarna verder.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO vraagt regelmaat. Als je het erbij doet tussen andere taken, gebeurt het niet structureel. Plan vaste momenten.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Verwacht geen wonderen in een maand. Na drie tot zes maanden zie je eerste resultaten. Echte groei komt na zes tot twaalf maanden. Beste prestaties vaak in jaar twee of drie. Bedrijven die dit begrijpen en volhouden, halen dat rendement van 200-700%.
          </p>

          {/* Section 6 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Resultaten meten
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Vier getallen vertellen je of je strategie werkt.
          </p>
          <ul className="mb-6 space-y-4 pl-6">
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Posities</span> - Voor welke zoektermen sta je hoger dan vorige maand? Waar daal je? Waar win je terrein?
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Organisch verkeer</span> - Hoeveel bezoekers komen via Google? Stijgt dat structureel of schommelt het alleen?
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Omzettingen</span> - Hoeveel bezoekers worden klant? Een stijging in verkeer zonder stijging in klanten wijst op verkeerde zoektermen.
            </li>
            <li className="text-base font-bold text-black/80 lg:text-lg">
              <span className="font-black text-black">Opbrengst</span> - Tel op wat SEO oplevert. Vergelijk dat met je investering. Dat is je rendement.
            </li>
          </ul>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Je besteedt het eerste half jaar intensief aan <Link href="/full-service-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">complete SEO</Link>. Na zes maanden levert organisch verkeer structureel €8.000 per maand. De investering verdient zich terug. En die €8.000 blijft komen, maand na maand.
          </p>

          {/* Section 7 */}
          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Verschillende sectoren vragen andere aanpak
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Wat werkt voor een webwinkel, faalt bij een plaatselijke dienstverlener. En wat werkt voor particulieren, past niet bij zakelijke klanten.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een <Link href="/local-seo" className="text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors">plaatselijke dienstverlener</Link> richt zich op geografische zoektermen en beoordelingen. Een webwinkel werkt aan productpaginas en categorieën. Een zakelijk bedrijf bouwt gezag via uitgebreide inhoud.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De basis blijft: weet wat je wilt, vind de zoektermen die dat opleveren, maak inhoud die antwoorden geeft, zorg dat de techniek klopt, bouw autoriteit, blijf meten en verbeteren. Het verschil tussen bedrijven die groeien en bedrijven die stilstaan? De eerste groep heeft een plan en voert het uit. De tweede blijft hopen dat het vanzelf komt.
          </p>

          {/* FAQ Section */}
          <h2 className="mb-8 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Veelgestelde vragen
          </h2>
          <Accordion type="single" collapsible className="mb-12 space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-4 border-black bg-white px-6 py-2 hover:border-accent transition-colors last:border-b-4">
                <AccordionTrigger className="text-left text-base font-bold uppercase hover:no-underline transition-colors lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-black/80 border-t-2 border-black/10 pt-4 mt-4 lg:text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Box */}
          <div className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white" style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}>
            <h2 className="mb-6 text-brutalist-h3 text-white">
              Wil je weten waar je nu staat?
            </h2>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Het verschil tussen €3.000 en €30.000 per maand uit Google? Een strategie die past bij je bedrijf en consequent wordt uitgevoerd.
            </p>
            <p className="mb-6 text-base font-bold text-white/80 lg:text-lg">
              Analyse van je huidige situatie laat zien waar je kansen laat liggen en wat het realistisch kan opleveren.
            </p>
            <p className="mb-8 text-base font-bold text-white/80 lg:text-lg">
              Bel: <a href="tel:0628206410" className="text-accent hover:text-white transition-colors">06 282 064 10</a>. Of plan een gesprek.
            </p>
            <p className="mb-8 text-base font-bold text-accent lg:text-lg">
              Binnen een week heb je een helder beeld. Binnen drie maanden zie je eerste resultaten.
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

      {/* Related Articles Section */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden."
      />

      <Footer />
    </>
  );
}
