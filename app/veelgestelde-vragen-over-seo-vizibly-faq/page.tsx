import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veelgestelde vragen over SEO | Vizibly FAQ',
  description: 'Wat kost SEO? Hoe lang duurt het? Wat is GEO? Alle antwoorden op je vragen over SEO, linkbuilding en vindbaar worden in zoekmachines en AI.',
  openGraph: {
    title: 'Veelgestelde vragen over SEO | Vizibly FAQ',
    description: 'Wat kost SEO? Hoe lang duurt het? Wat is GEO? Alle antwoorden op je vragen over SEO, linkbuilding en vindbaar worden in zoekmachines en AI.',
    url: 'https://vizibly.nl/veelgestelde-vragen-over-seo-vizibly-faq/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: 'Algemeen over SEO',
      questions: [
        {
          question: 'Wat is SEO?',
          answer: (
            <>
              SEO staat voor Search Engine Optimization (zoekmachineoptimalisatie). Het is het proces van het optimaliseren van je website zodat deze hoger scoort in de organische zoekresultaten van Google en andere zoekmachines. Dit zorgt ervoor dat meer potentiële klanten je website vinden wanneer ze zoeken naar producten of diensten die jij aanbiedt. Meer weten? Lees onze <Link href="/seo-voor-beginners-de-belangrijkste-termen-uitgelegd" className="font-bold">SEO voor beginners gids</Link>.
            </>
          )
        },
        {
          question: 'Hoe lang duurt het voordat ik resultaten zie van SEO?',
          answer: 'SEO is een langetermijnstrategie. De eerste resultaten zijn meestal zichtbaar na 3-6 maanden, maar significante verbetering kan 6-12 maanden duren. Dit hangt af van factoren zoals de huidige staat van je website, de concurrentie in jouw sector, en de hoeveelheid werk die wordt uitgevoerd.'
        },
        {
          question: 'Waarom is SEO belangrijk voor mijn bedrijf?',
          answer: 'SEO zorgt ervoor dat je bedrijf vindbaar is op het moment dat potentiële klanten actief zoeken naar jouw producten of diensten. Dit levert hoogwaardige, koopgerichte bezoekers op. Bovendien bouwt SEO langdurige waarde op - eenmaal behaalde rankings blijven vaak stabiel met minimaal onderhoud.'
        },
        {
          question: 'Wat is het verschil tussen SEO en Google Ads?',
          answer: (
            <>
              SEO richt zich op organische (onbetaalde) zoekresultaten en bouwt langdurige waarde op. <Link href="/google-ads-sea" className="font-bold">Google Ads</Link> levert directe, betaalde resultaten maar stopt zodra je stopt met betalen. SEO kost meer tijd maar heeft vaak een betere ROI op lange termijn. De beste aanpak is vaak een combinatie van beide - lees meer over <Link href="/hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak" className="font-bold">hoe SEO en Google Ads elkaar versterken</Link>.
            </>
          )
        },
        {
          question: 'Kan ik SEO zelf doen?',
          answer: 'Absoluut! Je kunt veel SEO-basisprincipes zelf toepassen en er zijn uitstekende bronnen beschikbaar om te leren. Voor wie de tijd en interesse heeft, is DIY SEO zeker mogelijk. Professionele SEO biedt wel voordelen zoals diepgaande expertise in technische optimalisatie, geavanceerde keyword research, concurrentieanalyse en strategische linkbuilding. Een SEO-specialist kan je tijd besparen en helpen sneller resultaten te behalen, maar de keuze hangt af van je beschikbare tijd, budget en doelstellingen.'
        }
      ]
    },
    {
      title: "Over Vizibly's SEO diensten",
      questions: [
        {
          question: 'Wat maakt Vizibly anders dan andere SEO bureaus?',
          answer: (
            <>
              Vizibly hanteert een data-gedreven, maatwerk aanpak. We beginnen altijd met een grondige 360-graden analyse van je huidige situatie en ontwikkelen een plan specifiek voor jouw bedrijf, sector en doelen. We werken transparant en houden je altijd op de hoogte van wat we doen en welke resultaten we behalen. Lees meer <Link href="/over-ons" className="font-bold">over ons</Link> en onze werkwijze.
            </>
          )
        },
        {
          question: 'Welke SEO diensten biedt Vizibly?',
          answer: (
            <>
              We bieden een volledig pakket aan SEO diensten:
              <ul className="mt-4 space-y-2">
                <li><strong>360-graden analyse & strategie</strong>: uitgebreide analyse van je huidige prestaties</li>
                <li><strong><Link href="/seo-copy" className="font-bold">SEO copywriting</Link></strong>: geoptimaliseerde teksten die ook converteren</li>
                <li><strong><Link href="/design-techniek" className="font-bold">Technische optimalisatie</Link></strong>: snelheid, mobiele weergave, site-structuur</li>
                <li><strong><Link href="/linkbuilding" className="font-bold">Linkbuilding</Link></strong>: het opbouwen van autoriteit met relevante backlinks</li>
                <li><strong><Link href="/local-seo" className="font-bold">Local SEO</Link></strong>: optimalisatie voor lokaal vindbaar zijn</li>
                <li><strong><Link href="/google-ads-sea" className="font-bold">Google Ads</Link></strong>: betaalde advertenties voor direct resultaat</li>
                <li><strong>Continue rapportage</strong>: transparante voortgangsrapportage</li>
              </ul>
            </>
          )
        },
        {
          question: 'Wat kost SEO bij Vizibly?',
          answer: 'Onze SEO trajecten zijn maatwerk, dus de kosten variëren per situatie en doelstellingen. We hanteren een uurtarief van €70 en stellen altijd een duidelijke maandelijkse investering vast. Voor SEO copywriting beginnen losse teksten al vanaf €70 per tekst. We maken altijd eerst een analyse om je exact te kunnen vertellen wat de investering wordt.'
        },
        {
          question: 'Garanderen jullie specifieke resultaten?',
          answer: 'Door constante veranderingen in Google-algoritmes en concurrentie kunnen we geen garanties geven voor specifieke posities of verkeer. Wat we wél garanderen is onze 100% inzet: we houden ons altijd aan gemaakte afspraken, werken transparant en zetten ons volledig in voor jouw succes.'
        },
        {
          question: 'Voor welke bedrijven werkt Vizibly?',
          answer: (
            <>
              We werken voornamelijk voor het MKB en hebben veel ervaring met <Link href="/seo-voor-webshop" className="font-bold">e-commerce</Link>, <Link href="/seo-voor-bouwbedrijven" className="font-bold">bouw</Link>, duurzaamheid en commerciële dienstverlening. We geloven dat elke sector baat heeft bij goede SEO, dus neem gerust <Link href="/contact" className="font-bold">contact</Link> op om te bespreken hoe we jouw bedrijf kunnen helpen groeien.
            </>
          )
        }
      ]
    },
    {
      title: 'SEO strategie en aanpak',
      questions: [
        {
          question: 'Hoe bepalen jullie op welke zoektermen ik moet focussen?',
          answer: 'We beginnen met uitgebreid zoekwoordenonderzoek waarbij we kijken naar zoekvolume, concurrentie en relevantie voor jouw bedrijf. We analyseren ook waar je concurrenten op scoren en identificeren kansen met relatief lage concurrentie maar goed zoekvolume. Het eindresultaat is een lijst met zoektermen die het meeste potentieel hebben voor jouw specifieke situatie.'
        },
        {
          question: 'Wat is linkbuilding en waarom is het belangrijk?',
          answer: "Linkbuilding is het verkrijgen van links van andere websites naar jouw website. Google beschouwt deze links als 'stemmen van vertrouwen' - hoe meer relevante, kwaliteitsvolle websites naar je linken, hoe hoger je autoriteit en rankings. Linkbuilding moet echter professioneel gebeuren, want verkeerde technieken kunnen tot Google-penalties leiden."
        },
        {
          question: 'Schrijven jullie content voor elke sector?',
          answer: 'We zijn gespecialiseerd in e-commerce, bouw, duurzaamheid en commerciële dienstverlening, maar schrijven in principe over elk onderwerp. Door gedegen research en jouw expertise als ondernemer kunnen we effectieve SEO-teksten maken voor vrijwel elke branche.'
        },
        {
          question: 'Wat is Local SEO en heb ik dat nodig?',
          answer: (
            <>
              <Link href="/local-seo" className="font-bold">Local SEO</Link> richt zich op vindbaar zijn voor lokale zoekopdrachten, zoals "tandarts Amsterdam" of "loodgieter Den Haag". Als je een fysieke locatie hebt of diensten in specifieke gebieden aanbiedt, is Local SEO essentieel. Dit omvat het optimaliseren van je Google Business Profiel, lokale zoektermen en het verkrijgen van lokale recensies.
            </>
          )
        }
      ]
    },
    {
      title: 'Technische aspecten',
      questions: [
        {
          question: 'Wat is technische SEO?',
          answer: 'Technische SEO omvat alle technische aspecten die invloed hebben op je rankings: laadsnelheid van je website, mobiele vriendelijkheid, site-structuur, URL-opbouw, en indexeerbaarheid door Google. Een technisch sterke website is de basis voor alle andere SEO-inspanningen.'
        },
        {
          question: 'Hoe belangrijk is de snelheid van mijn website?',
          answer: 'Laadsnelheid is een directe rankingfactor voor Google en cruciaal voor gebruikerservaring. Langzame websites hebben hogere bounce rates en lagere conversies. We optimaliseren technische aspecten zoals afbeeldingen, code en hosting om je website zo snel mogelijk te maken.'
        },
        {
          question: 'Moet mijn website mobile-first zijn?',
          answer: 'Absoluut. Google gebruikt sinds 2019 mobile-first indexing, wat betekent dat ze primair naar de mobiele versie van je website kijken voor rankings. Een website die niet goed werkt op mobiel zal slecht presteren in alle zoekresultaten.'
        }
      ]
    },
    {
      title: 'Samenwerking en proces',
      questions: [
        {
          question: 'Hoe verloopt de samenwerking met Vizibly?',
          answer: (
            <>
              We starten altijd met een vrijblijvende kennismaking om je situatie en doelen te bespreken. Vervolgens voeren we een grondige analyse uit en presenteren een maatwerk plan. Na akkoord starten we met de uitvoering volgens de afgesproken planning. Je krijgt regelmatig updates en rapportages over de voortgang. Wil je kennismaken? <Link href="/contact" className="font-bold">Neem contact op</Link> voor een vrijblijvende afspraak.
            </>
          )
        },
        {
          question: 'Wat hebben jullie van mij nodig?',
          answer: 'Voor een succesvol SEO-traject hebben we je medewerking nodig bij het aanleveren van informatie, toegang tot je website en analytics, feedback op content, en het implementeren van onze aanbevelingen. Hoe beter de samenwerking, hoe beter de resultaten.'
        },
        {
          question: 'Kan ik tussentijds stoppen met het SEO-traject?',
          answer: 'Ja, onze contracten hebben een opzegtermijn van één kalendermaand. Er is één uitzondering: na ontvangst van ons initiële plan heb je de mogelijkheid om direct te stoppen als het plan niet aan je verwachtingen voldoet.'
        },
        {
          question: 'Hoe word ik op de hoogte gehouden van resultaten?',
          answer: 'Je kunt kiezen uit twee opties: directe toegang tot de meetgegevens met uitleg zodat je zelf altijd inzicht hebt, of maandelijkse uitgebreide rapporten van ons. In beide gevallen bespreken we de resultaten ook persoonlijk met je.'
        }
      ]
    },
    {
      title: 'Specifieke situaties',
      questions: [
        {
          question: 'Ik heb al een SEO bureau, kunnen jullie alleen copywriting doen?',
          answer: 'Ja, we bieden ook losse SEO-teksten aan. Als je al samenwerkt met een marketingbureau dat zelf geen teksten verzorgt, kunnen wij deze specifieke dienst leveren zonder dat je je volledige SEO-traject hoeft over te zetten.'
        },
        {
          question: 'Mijn website is nieuw, kan ik al met SEO beginnen?',
          answer: 'Ja, het is zelfs het beste moment! Bij een nieuwe website kunnen we vanaf het begin alles goed opzetten: technische basis, content strategie, en URL-structuur. Dit voorkomt problemen later en zorgt voor snellere resultaten.'
        },
        {
          question: 'Ik doe al Google Ads, heb ik dan nog SEO nodig?',
          answer: 'SEO en Google Ads vullen elkaar perfect aan. Ads leveren directe resultaten maar stoppen zodra je budget op is. SEO bouwt langdurige waarde op en heeft vaak lagere kosten per klik op lange termijn. De combinatie geeft je maximale zichtbaarheid en de beste ROI.'
        },
        {
          question: 'Kan SEO mijn bestaande rankings beschadigen?',
          answer: 'Professionele SEO verbetert rankings en beschadigt ze nooit. Wel waarschuwen we voor DIY SEO-experimenten en vooral zelfstandige linkbuilding, wat bij verkeerde uitvoering tot Google-penalties kan leiden. Daarom raden we aan SEO over te laten aan professionals.'
        }
      ]
    },
    {
      title: 'Content en copywriting',
      questions: [
        {
          question: 'Wat is het verschil tussen gewone content en SEO content?',
          answer: (
            <>
              SEO content is strategisch geschreven met specifieke zoektermen in gedachten, maar blijft natuurlijk leesbaar en waardevol voor bezoekers. We doen eerst zoekwoordenonderzoek om te bepalen welke termen Google verwacht bij een bepaald onderwerp, en weven deze organisch door de tekst. Het belangrijkste verschil: SEO content is geoptimaliseerd om gevonden te worden én om te converteren. Meer weten over onze <Link href="/seo-copy" className="font-bold">SEO copywriting</Link> aanpak?
            </>
          )
        },
        {
          question: 'Kunnen jullie mijn bestaande content optimaliseren?',
          answer: 'Ja, we kunnen je bestaande content analyseren en optimaliseren voor betere SEO-prestaties. Dit is vaak kosteneffectiever dan volledig nieuwe content schrijven. We kijken naar zoekwoorden, structuur, interne links en call-to-actions om je huidige content beter te laten presteren.'
        },
        {
          question: 'Hoe vaak moet ik nieuwe content publiceren?',
          answer: 'Dit hangt af van je sector, concurrentie en doelen. Voor de meeste bedrijven raden we 1-4 nieuwe artikelen per maand aan. Consistentie is belangrijker dan frequentie - beter één kwaliteitsartikel per maand dan vier slechte artikelen. We maken altijd een contentkalender die past bij jouw situatie en budget.'
        },
        {
          question: 'Schrijven jullie ook voor social media?',
          answer: 'Onze focus ligt op SEO-geoptimaliseerde website content. Voor social media content verwijzen we je graag door naar gespecialiseerde partners. Wel kunnen we content creëren die goed werkt voor zowel je website als social media kanalen.'
        }
      ]
    },
    {
      title: 'Resultaten en verwachtingen',
      questions: [
        {
          question: 'Mijn concurrent staat hoger dan ik, kunnen jullie dat veranderen?',
          answer: 'We analyseren altijd wat concurrenten goed doen en ontwikkelen strategieën om ze voorbij te streven. Dit kan tijd kosten, vooral als zij al jaren investeren in SEO. We zijn eerlijk over wat realistisch is en hoeveel tijd en budget nodig is om concurrenten in te halen.'
        },
        {
          question: 'Wat gebeurt er als ik stop met SEO?',
          answer: 'SEO-resultaten blijven niet eeuwig bestaan zonder onderhoud. Je rankings zullen geleidelijk dalen als concurrenten wel blijven investeren in SEO. De opgebouwde autoriteit en content blijven wel waarde hebben, dus je valt niet direct terug naar nul. Meestal zie je een geleidelijke daling over 6-18 maanden.'
        },
        {
          question: 'Kan SEO helpen bij seizoensgebonden bedrijven?',
          answer: 'Absoluut! Voor seizoensgebonden bedrijven is SEO juist extra waardevol. We kunnen je website optimaliseren voor piekseizoenen en zorgen dat je maximaal profiteert van drukke periodes. Ook kunnen we content strategieën ontwikkelen om ook buiten het seizoen relevant te blijven.'
        },
        {
          question: 'Werkt SEO ook voor B2B bedrijven?',
          answer: 'SEO werkt uitstekend voor B2B! Zakelijke klanten zoeken ook online naar oplossingen. Het verschil zit vaak in langere zoektermen, focus op expertise en autoriteit, en content die dieper ingaat op vakkennis. We passen onze strategie aan voor B2B doelgroepen en besluitvormingsprocessen.'
        }
      ]
    },
    {
      title: 'Technische vragen',
      questions: [
        {
          question: 'Wat als mijn website op een oud systeem draait?',
          answer: 'Oudere websites kunnen SEO-uitdagingen hebben, maar zijn meestal wel te optimaliseren. We kijken eerst wat mogelijk is binnen de huidige techniek. Soms adviseren we een website vernieuwing, maar vaak kunnen we al veel verbeteren binnen de bestaande opzet.'
        },
        {
          question: 'Helpen jullie ook met websitemigraties?',
          answer: 'Ja, een websitemigratie vereist speciale SEO-aandacht om rankings te behouden. We begeleiden het proces met redirect-strategieën, URL-mapping en monitoring om ervoor te zorgen dat je SEO-waarde behouden blijft tijdens de overgang.'
        },
        {
          question: 'Is HTTPS nodig voor SEO?',
          answer: "Ja, HTTPS (het slotje in je browser) is een officiële Google ranking factor. Websites zonder SSL-certificaat krijgen een waarschuwing in browsers en presteren slechter. We zorgen er altijd voor dat je website een geldig SSL-certificaat heeft."
        },
        {
          question: 'Wat doet Vizibly met AI en SEO?',
          answer: 'We gebruiken AI-tools waar ze toegevoegde waarde bieden, maar combineren dit altijd met menselijke expertise en strategie. AI kan helpen bij research en ideegeneratie, maar de strategie, kwaliteitscontrole en klantgerichte aanpak blijven menselijk werk.'
        }
      ]
    },
    {
      title: 'Branche-specifieke vragen',
      questions: [
        {
          question: 'Werkt SEO ook voor webshops?',
          answer: (
            <>
              SEO is cruciaal voor webshops! E-commerce SEO heeft eigen uitdagingen zoals productpagina's, categoriestructuur, reviews en technische aspecten zoals laadsnelheid. We hebben veel ervaring met <Link href="/seo-voor-webshop" className="font-bold">webshop-optimalisatie</Link> en weten hoe we producten beter vindbaar maken. Lees ook ons uitgebreide artikel over <Link href="/seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten" className="font-bold">SEO optimalisatie voor webshops</Link>.
            </>
          )
        },
        {
          question: 'Ik ben lokale dienstverlener, is SEO dan relevant?',
          answer: (
            <>
              Local SEO is juist heel belangrijk voor lokale dienstverleners! Mensen zoeken steeds vaker online naar lokale services. We optimaliseren je Google Business Profiel, zorgen voor goede lokale rankings en helpen je meer lokale klanten te bereiken. We hebben ook specifieke ervaring met <Link href="/seo-voor-loodgieters-en-installatiebedrijven" className="font-bold">loodgieters en installatiebedrijven</Link> en <Link href="/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google" className="font-bold">dakdekkers</Link>.
            </>
          )
        },
        {
          question: 'Hoe zit het met SEO voor restaurants en horeca?',
          answer: 'Horeca heeft unieke SEO-kansen: lokale zoekopdrachten, menu-optimalisatie, recensies en evenementen. We kunnen helpen met Local SEO, reserveringssystemen en content rond je menukaart en specialiteiten.'
        }
      ]
    },
    {
      title: 'Rapportage en communicatie',
      questions: [
        {
          question: 'In welke vorm krijg ik rapportages?',
          answer: 'Je kunt kiezen uit directe toegang tot een dashboard waar je altijd de actuele cijfers kunt zien, of maandelijkse PDF-rapporten met uitgebreide analyse. We bespreken de resultaten ook altijd persoonlijk en leggen uit wat de cijfers betekenen voor jouw bedrijf.'
        },
        {
          question: 'Hoe vaak hebben we contact tijdens het traject?',
          answer: 'Na de opstartfase hebben we meestal maandelijks contact voor rapportage en planning. Daarnaast kun je altijd contact opnemen voor vragen of acute zaken. We zijn flexibel in communicatie en passen ons aan jouw voorkeuren aan.'
        },
        {
          question: 'Wat als ik ontevreden ben over de resultaten?',
          answer: 'We bespreken altijd realistische verwachtingen vooraf en monitoren voortgang continu. Als resultaten tegenvallen, analyseren we samen wat er speelt en passen de strategie aan. Door onze transparante werkwijze weet je altijd waar je aan toe bent.'
        },
        {
          question: 'Kan ik tussentijds aanpassingen vragen in de strategie?',
          answer: 'Natuurlijk! SEO is een dynamisch proces en we passen onze aanpak aan op basis van resultaten, marktveranderingen of wijzigingen in jouw bedrijf. Grote strategiewijzigingen bespreken we altijd vooraf inclusief eventuele kostengevolgen.'
        }
      ]
    },
    {
      title: 'GEO en vindbaar worden in AI tools',
      questions: [
        {
          question: 'Wat is GEO (Generative Engine Optimization)?',
          answer: 'GEO staat voor "generative engine optimization" wat betekent het proces van het optimaliseren van je website\'s content om de zichtbaarheid te verhogen in AI-gedreven zoekmachines zoals ChatGPT, Perplexity, Gemini, Copilot en Google AI Overviews. Het is de volgende evolutie van SEO, waarbij je content optimaliseert om opgenomen te worden in AI-gegenereerde antwoorden wanneer gebruikers vragen stellen gerelateerd aan jouw expertise.'
        },
        {
          question: 'Hoe verschilt GEO van traditionele SEO?',
          answer: (
            <>
              SEO richt zich op het ranken van individuele pagina's in traditionele zoekresultaten, terwijl GEO focust op hoe AI meerdere bronnen integreert en synthetiseert om uitgebreide antwoorden te geven. Traditionele zoekmachines werken als mappen die gebruikers naar bestemmingen leiden, maar AI-zoekmachines functioneren als interpreters die informatie consumeren en antwoorden genereren. Ons artikel over <Link href="/word-gevonden-door-ai-de-toekomst-van-seo-is-geo" className="font-bold">vindbaar worden door AI</Link> gaat hier dieper op in.
            </>
          )
        },
        {
          question: 'Welke AI-platforms zijn belangrijk voor GEO?',
          answer: (
            <>
              De belangrijkste AI-platforms waar je zichtbaar wilt zijn zijn:
              <ul className="mt-4 space-y-2">
                <li><strong>ChatGPT</strong> (inclusief SearchGPT): voor conversationele zoekopdrachten</li>
                <li><strong>Google AI Overviews</strong>: verschijnt in reguliere Google zoekresultaten</li>
                <li><strong>Perplexity</strong>: gespecialiseerd in onderzoek met real-time citaten</li>
                <li><strong>Claude</strong>: focus op veilige en diepgaande analyse</li>
                <li><strong>Gemini</strong>: Google's AI met integratie in hun ecosysteem</li>
              </ul>
              <p className="mt-4">Elk platform heeft eigen sterke punten: ChatGPT voor conversationele taken, Perplexity voor betrouwbaar onderzoek, Claude voor diepgaande analyse en Gemini voor multimodale projecten.</p>
            </>
          )
        },
        {
          question: 'Hoe optimaliseert Vizibly content voor AI-zoekmachines?',
          answer: (
            <>
              Voor effectieve GEO passen we verschillende strategieën toe:
              <ul className="mt-4 space-y-2">
                <li><strong>Citaten en bronnen toevoegen</strong>: onderzoek toont aan dat het toevoegen van citaten, quotes en statistieken de zichtbaarheid met meer dan 40% kan verhogen</li>
                <li><strong>Structured data implementeren</strong>: helpt AI om content beter te begrijpen</li>
                <li><strong>Conversationele content</strong>: content die natuurlijk aansluit bij hoe mensen vragen stellen</li>
                <li><strong>Autoritaire taal</strong>: gebruik van vakjargon en expertisebewijzen</li>
                <li><strong>Directe antwoorden</strong>: content die specifieke vragen helder beantwoordt</li>
              </ul>
            </>
          )
        },
        {
          question: 'Kan GEO mijn traditionele SEO rankings beïnvloeden?',
          answer: 'GEO en SEO vullen elkaar aan - beide strategieën kunnen samen gebruikt worden voor maximale zichtbaarheid. Veel GEO-technieken zoals het verbeteren van contentstructuur en het toevoegen van authoriteit versterken ook je traditionele SEO. We adviseren altijd een gecombineerde aanpak waarbij we content optimaliseren voor zowel traditionele zoekmachines als AI-platforms.'
        },
        {
          question: 'Hoe meet je het succes van GEO?',
          answer: (
            <>
              Traditionele SEO-metrics zoals click-through rate zijn mogelijk niet voldoende voor AI-platforms. GEO gebruikt nieuwe impression metrics die de zichtbaarheid van citaties en relevantie meten. We monitoren:
              <ul className="mt-4 space-y-2">
                <li><strong>Mentions in AI-antwoorden</strong>: hoe vaak jouw merk wordt genoemd</li>
                <li><strong>Direct traffic van AI-platforms</strong>: bezoekers van chatgpt.com, perplexity.ai etc.</li>
                <li><strong>Brand authority scores</strong>: hoe AI je expertise inschat</li>
                <li><strong>Source attribution</strong>: hoe vaak je als bron wordt geciteerd</li>
              </ul>
            </>
          )
        },
        {
          question: 'Is GEO de toekomst van online marketing?',
          answer: 'AI-gedreven zoeken wordt de standaard. Zoekmachines gebruiken nu generatieve AI en large language models om informatie van verschillende bronnen te combineren tot conversationele antwoorden. Het aantal consumenten dat AI gebruikt in plaats van Google groeit snel. Voor bedrijven die vooroplopen betekent dit nieuwe kansen om zichtbaar te blijven in een veranderende digitale wereld.'
        },
        {
          question: 'Welke content werkt het beste voor GEO?',
          answer: (
            <>
              Uit onderzoek blijkt dat bepaalde content types beter presteren in AI-antwoorden:
              <ul className="mt-4 space-y-2">
                <li><strong>FAQ-formaten</strong>: directe vraag-antwoord structuren</li>
                <li><strong>Lijsten met statistieken</strong>: concrete data en cijfers</li>
                <li><strong>Expert quotes</strong>: uitspraken van autoriteiten in je vakgebied</li>
                <li><strong>Case studies</strong>: praktijkvoorbeelden met resultaten</li>
                <li><strong>How-to content</strong>: stap-voor-stap instructies</li>
                <li><strong>Definitie content</strong>: heldere uitleg van concepten</li>
              </ul>
            </>
          )
        },
        {
          question: 'Begint Vizibly al met GEO voor klanten?',
          answer: (
            <>
              Ja, we integreren GEO-principes in onze SEO-strategieën. Dit betekent dat we content structureren op manieren die zowel Google als AI-platforms begrijpen, authoriteit opbouwen met betrouwbare bronnen, en zorgen dat je expertise helder naar voren komt in alle vormen van zoeken. <Link href="/contact" className="font-bold">Neem contact op</Link> om te bespreken hoe we jouw content kunnen voorbereiden op de toekomst van zoeken.
            </>
          )
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(cat =>
    cat.questions.map(q => ({
      question: q.question,
      answer: typeof q.answer === 'string' ? q.answer : 'Zie de volledige pagina voor het antwoord met links.'
    }))
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allQuestions.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#fafaf8] pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              ALLES WAT JE WIL WETEN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none text-black">
              Veelgestelde{' '}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-accent"></span>
                <span className="relative">vragen</span>
              </span>
            </h1>

            <p className="mb-10 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Wat kost SEO? Hoe lang duurt het? Wat is GEO? Vind hier alle antwoorden op je vragen over SEO, linkbuilding en vindbaar worden in zoekmachines en AI.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`relative py-28 lg:py-36 border-b-4 border-black ${
            categoryIndex % 2 === 0 ? 'bg-[#fafaf8]' : 'bg-accent'
          }`}
        >
          <div className="mx-auto max-w-screen-2xl px-6">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <h2 className="text-brutalist-h2 text-black">
                  {category.title}
                </h2>
                <div className="mt-4 h-1 w-32 bg-black"></div>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${categoryIndex}-${index}`}
                    className="border-4 border-black bg-white px-6 py-2 transition-colors last:border-b-4 hover:border-accent"
                  >
                    <AccordionTrigger className="text-left text-base font-bold hover:no-underline transition-colors lg:text-lg text-black">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base border-t-2 pt-4 mt-4 lg:text-lg text-black/80 border-black/10">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <FinalCTA
        heading="Heb je een vraag die hier niet staat?"
        description="Neem contact op voor een vrijblijvende kennismaking. We beantwoorden graag al je vragen over SEO en hoe we jouw bedrijf kunnen helpen groeien."
      />

<Footer />
    </>
  );
}
