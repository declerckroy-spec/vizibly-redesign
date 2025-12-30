import { Navigation } from '@/components/navigation';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles } from '@/components/related-articles';
import { Footer } from '@/components/footer';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO voor webshops | Complete gids voor 2025',
  description: 'Complete gids voor webshop SEO: van zoekwoordenonderzoek tot technische optimalisatie. Leer hoe je meer organisch verkeer en conversies genereert.',
  openGraph: {
    title: 'SEO voor webshops | Complete gids voor 2025',
    description: 'Complete gids voor webshop SEO: van zoekwoordenonderzoek tot technische optimalisatie. Leer hoe je meer organisch verkeer en conversies genereert.',
    url: 'https://vizibly.nl/seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'article',
    images: [{ url: '/blog/seo-webshops.jpg' }],
  },
};

const relatedArticles = [
  {
    slug: 'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
    title: 'Canonical tags voor productvarianten: zo voorkom je duplicate content',
    image: '/blog/canonical-tags.jpg',
    excerpt: 'Voorkom duplicate content in je webshop en verbeter je rankings met de juiste canonical tags.'
  },
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
  }
];

export default function SEOWebshopsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://vizibly.nl/seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten/#article",
    "headline": "SEO optimalisatie voor webshops: alles wat je in 2025 moet weten",
    "description": "Complete gids voor webshop SEO: van zoekwoordenonderzoek tot technische optimalisatie.",
    "image": "/blog/seo-webshops.jpg",
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
      "@id": "https://vizibly.nl/seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten/"
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
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-20 lg:pt-48 lg:pb-28">
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
              <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
                E-COMMERCE SEO
              </p>

              <h1 className="mb-8 text-brutalist-h1 leading-tight text-white">
                SEO optimalisatie voor webshops: alles wat je moet weten
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
                src="/blog/seo-webshops.jpg"
                alt="SEO voor webshops - complete gids"
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
      <article className="relative border-b-4 border-black bg-[#fafaf8] py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
            Als eigenaar van een webshop wil je maar één ding: meer bezoekers die omgezet worden naar betalende klanten. In een online wereld waar jaarlijks miljarden euro&apos;s worden uitgegeven, is het essentieel om je webshop optimaal vindbaar te maken in Google en andere zoekmachines.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wat is e-commerce SEO?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/seo-voor-webshop" className="font-bold">E-commerce SEO</Link> omvat alle optimalisaties die je doorvoert op je webshop om beter te ranken in zoekmachines als Google. Het draait niet alleen om zichtbaarheid verbeteren, maar vooral om het juiste verkeer aantrekken dat daadwerkelijk tot aankopen leidt.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Anders dan betaalde advertenties, die stoppen zodra je niet meer betaalt, bouwt SEO een duurzame bron van organisch verkeer op. Dit blijft doorstromen, ook lang nadat je initiële optimalisaties zijn afgerond.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Waarom is SEO cruciaal voor webshops?
          </h2>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De online retail groeit jaarlijks gestaag, met een toenemende concurrentie als gevolg. Een sterke <Link href="/seo-strategie" className="font-bold">SEO-strategie</Link> is essentieel voor elke webshop die wil opvallen in dit drukke digitale landschap. SEO zorgt voor duurzame zichtbaarheid zonder doorlopende advertentiekosten. Daarnaast vertrouwen consumenten organische zoekresultaten meer dan advertenties, wat leidt tot hogere conversiepercentages.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Zoekwoordenonderzoek voor webshops
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Voordat je begint met optimaliseren, moet je weten welke zoektermen je potentiële klanten gebruiken. Grondig zoekwoordenonderzoek vormt het fundament van elke succesvolle SEO-strategie.
          </p>
          <ul className="mb-12 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li><strong>Gebruik professionele SEO-tools</strong> zoals SEMrush, Ahrefs of Ubersuggest om zoekvolumes en concurrentieniveaus te analyseren</li>
            <li><strong>Raadpleeg Google Search Console</strong> om te zien op welke zoektermen je webshop al rankt en waar kansen liggen</li>
            <li><strong>Verken Google&apos;s automatische suggesties</strong> wanneer je zoektermen intypt, evenals de &quot;People Also Ask&quot; en &quot;Related Searches&quot; secties</li>
          </ul>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Optimalisatie van categoriepagina&apos;s
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Categoriepagina&apos;s zijn de ruggengraat van je e-commerce SEO-strategie. Ze verzamelen gerelateerde producten, richten zich op zoektermen met hoger zoekvolume en helpen bezoekers door je assortiment te navigeren.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            De belangrijkste on-page elementen voor categoriepagina&apos;s zijn title tags, meta beschrijvingen en H1-tags. Je title tag moet kernachtig zijn (maximaal 60 tekens), je belangrijkste zoekwoord bevatten en bij voorkeur een call-to-action.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Optimalisatie van productpagina&apos;s
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Productpagina&apos;s zijn het hart van je webshop en vormen je belangrijkste conversiepunten. Het schrijven van unieke productbeschrijvingen is essentieel.
          </p>
          <ul className="mb-12 list-disc space-y-2 pl-6 text-base font-bold text-black/80 lg:text-lg">
            <li><strong>Focussen op voordelen in plaats van kenmerken:</strong> vertel hoe het product het leven van de klant verbetert</li>
            <li><strong>Natuurlijke zoekwoorden bevatten</strong> zonder geforceerd te klinken</li>
            <li><strong>Een unieke toon en stijl hebben</strong> die past bij je merk</li>
          </ul>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Technische SEO voor webshops
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <Link href="/design-techniek" className="font-bold">Technische SEO</Link> vormt het fundament waarop je webshop staat. Zonder solide technische basis zal zelfs de beste content moeite hebben om hoog te ranken.
          </p>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            <strong>Websitesnelheid</strong> is een cruciale ranking factor. Bezoekers haken massaal af bij trage laadtijden, vooral op mobiel. <strong>Een mobiel-vriendelijke webshop</strong> is geen luxe maar noodzaak. Met meer dan 60% van alle online aankopen via smartphones, moet je site perfect functioneren op kleine schermen.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            <strong>Je URL-structuur</strong> moet logisch en leesbaar zijn voor zowel bezoekers als zoekmachines (bijvoorbeeld: webshop.nl/categorie/subcategorie/product).
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Interne linking strategie
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een doordachte interne linking strategie is cruciaal voor e-commerce SEO. Interne links verbinden je pagina&apos;s met elkaar, helpen zoekmachines je sitestructuur te begrijpen en verspreiden link equity door je website.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Implementeer breadcrumbs die het pad tonen dat bezoekers hebben afgelegd. Vergeet niet gerelateerde producten te tonen op je productpagina&apos;s, zoals &quot;Anderen kochten ook&quot; of &quot;Aanvullende producten&quot;.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Faceted navigation: de balans vinden
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Faceted navigation (productfiltering) is essentieel voor gebruikers om snel het juiste product te vinden, maar kan SEO-uitdagingen creëren. Elke filtercombinatie kan een unieke URL genereren, wat kan leiden tot duizenden pagina&apos;s met grotendeels identieke content.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Voor filters zonder SEO-waarde: gebruik <Link href="/canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop" className="font-bold">canonical tags</Link> om naar de hoofdcategoriepagina te verwijzen, implementeer noindex tags, of overweeg een AJAX-implementatie waarbij filtering geen nieuwe URLs genereert.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Linkbuilding voor webshops
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            Een <Link href="/linkbuilding" className="font-bold">sterke backlink-strategie</Link> blijft cruciaal voor het verbeteren van je organische rankings. Creëer waardevolle content die natuurlijk links aantrekt, zoals uitgebreide koopgidsen, diepgaande productanalyses of origineel onderzoek.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Vermijd risicovolle tactieken zoals het kopen van links of massale linkuitwisseling. Focus op kwaliteit boven kwantiteit: één link van een gezaghebbende website in je branche is waardevoller dan tientallen links van irrelevante of laagwaardige sites.
          </p>

          <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
            Wanneer kun je resultaten verwachten?
          </h2>
          <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
            SEO is een marathon, geen sprint. Voor een gemiddelde webshop die een solide SEO-strategie implementeert, zijn de eerste positieve signalen vaak na 3-6 maanden zichtbaar. Grotere, meer substantiële resultaten worden typisch pas na 6-12 maanden duidelijk.
          </p>
          <p className="mb-12 text-base font-bold text-black/80 lg:text-lg">
            Liever niet zelf aan de slag met de SEO van je webshop? Als gespecialiseerd <Link href="/seo-voor-webshop" className="font-bold">SEO-bureau voor webshops</Link> helpen we je graag om structureel beter te scoren in Google.
          </p>
        </div>
      </article>

      {/* Related Articles */}
      <RelatedArticles articles={relatedArticles} />

      {/* Final CTA */}
      <FinalCTA
        heading="Klaar om te groeien?"
        description="Van productpagina's tot technische optimalisatie. We helpen je met alle aspecten van webshop SEO."
      />

      <Footer />
    </>
  )
}
