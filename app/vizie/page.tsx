import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowLeft, BookOpen, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vizie | SEO tips en inzichten',
  description: 'De nieuwste SEO inzichten, strategieën en tips. Leer hoe je jouw website hoger in Google krijgt met praktische adviezen van Vizibly.',
  openGraph: {
    title: 'Vizie | SEO tips en inzichten',
    description: 'De nieuwste SEO inzichten, strategieën en tips. Leer hoe je jouw website hoger in Google krijgt met praktische adviezen van Vizibly.',
    url: 'https://vizibly.nl/vizie/',
    siteName: 'Vizibly',
    locale: 'nl_NL',
    type: 'website',
  },
};

const allBlogArticles = [
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand. Bedrijven die groeien bouwen systematisch aan zoekwoordposities, technische optimalisatie en domeinautoriteit.',
    image: '/blog/groeien-topical-authority.jpg',
    category: 'SEO Strategie',
  },
  {
    slug: 'een-snelle-wordpress-website-technische-optimalisatie-die-echt-werkt',
    title: 'Een snelle WordPress website: technische optimalisatie die echt werkt',
    excerpt: 'Je site laadt in 6 seconden. Je concurrent in 2. Hij staat op plek 2, jij op pagina 3. Waarom? Niet omdat zijn Yoast overal groene bolletjes voor geeft. Maar omdat hij begon met de juiste technische basis.',
    image: '/blog/wordpress-snelheid.jpg',
    category: 'WordPress',
  },
  {
    slug: 'waarom-seo-relevanter-is-dan-ooit-ondanks-wat-je-hoort-over-ai',
    title: 'Waarom SEO relevanter is dan ooit (ondanks wat je hoort over AI)',
    excerpt: 'Ik merk het steeds vaker in gesprekken: ondernemers die twijfelen over SEO. Ze lezen artikelen over ChatGPT, zien hoe snel AI groeit, en vragen zich af: investeren in SEO, heeft dat nog wel zin?',
    image: '/blog/seo-gaat-door.jpg',
    category: 'SEO & AI',
  },
  {
    slug: 'google-schrapt-num100-parameter-wat-betekent-dit-voor-jouw-seo-data',
    title: 'Google schrapt &num=100 parameter: wat betekent dit voor jouw SEO-data?',
    excerpt: 'Zijn jouw website-rankings plotseling verdwenen uit SEO-tools? Zie je dramatisch dalende impressies in Google Search Console? Geen paniek. Google heeft een technische wijziging doorgevoerd.',
    image: '/blog/google-num100-parameter.png',
    category: 'Google Updates',
  },
  {
    slug: 'content-clusters-topic-authority-opbouwen',
    title: 'Content clusters: Topic authority opbouwen',
    excerpt: 'Google is veranderd. Vroeger kon je nog scoren met losse pagina\'s die elk op één zoekterm mikten. Vandaag de dag wil Google zien dat je echt verstand hebt van je onderwerp.',
    image: '/blog/content-clusters.jpg',
    category: 'Content Strategie',
  },
  {
    slug: 'canonical-tags-voor-productvarianten-zo-voorkom-je-duplicate-content-in-je-webshop',
    title: 'Canonical tags voor productvarianten: zo voorkom je duplicate content',
    excerpt: 'Als webshop eigenaar ken je het probleem waarschijnlijk wel: je verkoopt een product in verschillende kleuren, maten of uitvoeringen. Elke variant krijgt een eigen pagina, maar de content is vrijwel identiek.',
    image: '/blog/canonical-tags.jpg',
    category: 'Technische SEO',
  },
  {
    slug: 'word-gevonden-door-ai-de-toekomst-van-seo-is-geo',
    title: 'Word gevonden door AI: de toekomst van SEO is GEO',
    excerpt: 'Generative Engine Optimization (GEO) is het optimaliseren van je content zodat AI-systemen jouw informatie gebruiken en citeren. Dit is de toekomst van zichtbaarheid.',
    image: '/blog/geo-seo-ai.jpg',
    category: 'SEO & AI',
  },
  {
    slug: 'muvera-googles-nieuwe-algoritme-dat-seo-voorgoed-verandert',
    title: 'MuVera: Google\'s nieuwe algoritme dat SEO voorgoed verandert',
    excerpt: 'Google heeft MuVera geïntroduceerd - een multimodale verificatie-ranking die tekst, beeld en video analyseert. Dit verandert hoe we content moeten optimaliseren.',
    image: '/blog/muvera.jpg',
    category: 'Google Updates',
  },
  {
    slug: 'google-june-2025-core-update-wat-betekent-dit-voor-je-website',
    title: 'Google June 2025 Core Update: wat betekent dit voor je website?',
    excerpt: 'Google heeft de June 2025 Core Update uitgerold. Wat betekent deze update voor jouw rankings en wat kun je doen om je posities te behouden of verbeteren?',
    image: '/blog/google-core-update-june-2025.png',
    category: 'Google Updates',
  },
  {
    slug: 'een-perfecte-google-pagespeed-score-zin-en-onzin-van-100-100',
    title: 'Een perfecte Google PageSpeed score: zin en onzin van 100/100',
    excerpt: 'Iedereen wil die perfecte 100/100 PageSpeed score. Maar is dat altijd nodig? En wat levert het daadwerkelijk op voor je rankings en conversies?',
    image: '/blog/pagespeed-score.png',
    category: 'Technische SEO',
  },
  {
    slug: 'seo-mythe-ontkracht-meer-links-leiden-automatisch-tot-hogere-rankings',
    title: 'SEO mythe ontkracht: meer links leiden automatisch tot hogere rankings',
    excerpt: 'De meest hardnekkige SEO-mythe: hoe meer backlinks, hoe hoger je rankt. De realiteit is genuanceerder. Kwaliteit wint het van kwantiteit.',
    image: '/blog/backlinks.jpg',
    category: 'Linkbuilding',
  },
  {
    slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    excerpt: 'Google zelf geeft tips voor het kiezen van een SEO bureau. We bespreken deze regels en voegen onze eigen praktijkervaring toe.',
    image: '/blog/seo-bureau-kiezen.png',
    category: 'SEO Tips',
  },
  {
    slug: 'seo-uitbesteden-of-zelf-doen-alles-wat-je-in-2025-moet-weten',
    title: 'SEO uitbesteden of zelf doen: alles wat je in 2025 moet weten',
    excerpt: 'De eeuwige vraag: doe je SEO zelf of besteed je het uit? We bespreken de voor- en nadelen, kosten en wat je zelf kunt doen.',
    image: '/blog/seo-uitbesteden.jpg',
    category: 'SEO Tips',
  },
  {
    slug: '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
    title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
    excerpt: 'Specifieke SEO-strategieën voor fysiotherapeuten. Van Google Business Profile optimalisatie tot lokale zoekwoorden en content die patiënten aanspreekt.',
    image: '/blog/fysiotherapeut-seo.jpg',
    category: 'Local SEO',
  },
  {
    slug: 'seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google',
    title: 'SEO voor dakdekkers: zo kom je als dakdekkersbedrijf bovenaan in Google',
    excerpt: 'Concrete SEO-tips voor dakdekkers. Leer hoe je lokaal gevonden wordt, welke zoekwoorden je moet targeten en hoe je meer offerteaanvragen genereert.',
    image: '/blog/seo-dakdekkers.jpg',
    category: 'Local SEO',
  },
  {
    slug: 'seo-voor-wordpress-meer-dan-wat-groene-yoast-vinkjes',
    title: 'SEO voor WordPress: meer dan wat groene Yoast vinkjes',
    excerpt: 'Yoast SEO is populair, maar groene vinkjes betekenen niet automatisch goede SEO. We bespreken wat écht belangrijk is voor WordPress SEO.',
    image: '/blog/wordpress-seo.jpg',
    category: 'WordPress',
  },
  {
    slug: 'seo-instellingen-7-cruciale-configuraties-die-je-website-direct-beter-laten-scoren',
    title: 'SEO instellingen: 7 cruciale configuraties voor betere rankings',
    excerpt: 'De 7 belangrijkste technische SEO instellingen die je direct kunt aanpassen: sitemap, robots.txt, canonical tags, schema markup en meer.',
    image: '/blog/seo-instellingen.jpg',
    category: 'Technische SEO',
  },
  {
    slug: 'seo-optimalisatie-voor-webshops-alles-wat-je-moet-weten',
    title: 'SEO optimalisatie voor webshops: alles wat je moet weten',
    excerpt: 'Complete gids voor webshop SEO. Van keyword research voor producten tot technische optimalisatie en het opbouwen van autoriteit.',
    image: '/blog/seo-webshops.jpg',
    category: 'E-commerce SEO',
  },
  {
    slug: 'in-gesprek-met-martijn-over-het-belang-van-website-onderhoud',
    title: 'In gesprek met Martijn over het belang van website onderhoud',
    excerpt: 'Interview met Martijn van 072Design over waarom website onderhoud cruciaal is voor SEO, veiligheid en prestaties. Praktische tips voor ondernemers.',
    image: '/blog/website-onderhoud.jpg',
    category: 'Interview',
  },
  {
    slug: 'hoe-seo-en-google-ads-elkaar-versterken-de-kracht-van-een-gecombineerde-aanpak',
    title: 'Hoe SEO en Google Ads elkaar versterken',
    excerpt: 'SEO en Google Ads zijn geen concurrenten maar partners. Ontdek 5 manieren waarop een gecombineerde aanpak je online zichtbaarheid vergroot.',
    image: '/blog/seo-google-ads.png',
    category: 'Google Ads',
  },
  {
    slug: 'de-verborgen-kracht-in-seo-gebruikersgedrag',
    title: 'De verborgen kracht in SEO: gebruikersgedrag',
    excerpt: 'Google kijkt steeds meer naar gebruikersgedrag. Bouncepercentage, time on page, CTR - leer hoe je deze signalen verbetert voor hogere rankings.',
    image: '/blog/gebruikersgedrag-seo.jpg',
    category: 'SEO Strategie',
  },
  {
    slug: 'seo-voor-beginners-de-belangrijkste-termen-uitgelegd',
    title: 'SEO voor beginners: de belangrijkste termen uitgelegd',
    excerpt: 'Wat betekenen al die SEO-termen eigenlijk? Keywords, backlinks, on-page SEO, technische SEO - alles uitgelegd in begrijpelijke taal.',
    image: '/blog/seo-beginners.jpg',
    category: 'SEO Basics',
  },
];

const ITEMS_PER_PAGE = 6;

export default async function ViziePage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const totalPages = Math.ceil(allBlogArticles.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const blogArticles = allBlogArticles.slice(startIndex, endIndex);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://vizibly.nl/vizie/#blog",
    "name": "Vizie - SEO Blog",
    "description": "De nieuwste SEO inzichten, strategieën en tips van Vizibly",
    "url": "https://vizibly.nl/vizie/",
    "publisher": {
      "@type": "Organization",
      "name": "Vizibly",
      "@id": "https://vizibly.nl/#organization"
    },
    "blogPost": allBlogArticles.map((article) => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "url": `https://vizibly.nl/${article.slug}/`,
      "image": `https://vizibly.nl${article.image}`,
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
      <section className="relative overflow-hidden bg-[#0a0a0a] pt-40 pb-24 lg:pt-48 lg:pb-32">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-accent lg:text-lg">
              SEO KENNIS & INZICHTEN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none text-white">
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-accent"></span>
                <span className="relative text-black">Vizie</span>
              </span>
            </h1>

            <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              De nieuwste SEO strategieën, praktische tips en diepgaande analyses.
              Alles wat je nodig hebt om hoger in Google te komen.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content - Blog Articles */}
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                {blogArticles.map((article, index) => (
                  <Link key={index} href={`/${article.slug}`} className="group block">
                    <Card
                      className="overflow-hidden border-4 border-black bg-white transition-all hover:translate-x-1 hover:translate-y-1 hover:border-accent"
                      style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
                    >
                      <div className="grid md:grid-cols-5 gap-0">
                        {/* Image */}
                        <div className="relative aspect-video md:aspect-square md:col-span-2 overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-black">
                          <Image
                src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                        </div>

                        {/* Content */}
                        <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                          <div className="mb-2">
                            <span className="inline-block bg-accent text-black text-xs font-bold uppercase px-2 py-1 border-2 border-black">
                              {article.category}
                            </span>
                          </div>
                          <CardHeader className="p-0 mb-4">
                            <CardTitle className="text-xl font-black uppercase leading-tight lg:text-2xl transition-colors">
                              {article.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p className="mb-6 text-base font-bold text-black/70 line-clamp-3">
                              {article.excerpt}
                            </p>
                            <span className="inline-flex items-center border-b-4 border-black pb-1 text-sm font-black uppercase transition-all group-hover:border-accent group-hover:bg-accent group-hover:px-2">
                              LEES ARTIKEL
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center justify-center gap-2">
                {currentPage > 1 && (
                  <Link
                    href={`/vizie?page=${currentPage - 1}`}
                    className="flex h-12 items-center justify-center border-4 border-black bg-white px-4 text-sm font-black uppercase text-black transition-all hover:bg-accent"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    VORIGE
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/vizie?page=${page}`}
                    className={`flex h-12 w-12 items-center justify-center border-4 border-black text-lg font-black transition-all ${
                      page === currentPage
                        ? 'bg-black text-accent'
                        : 'bg-white text-black hover:bg-accent'
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link
                    href={`/vizie?page=${currentPage + 1}`}
                    className="flex h-12 items-center justify-center border-4 border-black bg-white px-4 text-sm font-black uppercase text-black transition-all hover:bg-accent"
                  >
                    VOLGENDE
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Featured Articles */}
              <div className="mb-8 border-4 border-black bg-black p-6" style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border-4 border-accent bg-accent text-black">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black uppercase text-white">Populair</h3>
                </div>
                <ul className="space-y-4">
                  {allBlogArticles.slice(0, 5).map((article, index) => (
                    <li key={index}>
                      <Link
                        href={`/${article.slug}`}
                        className="block border-l-4 border-accent pl-4 text-base font-bold text-white/80 transition-colors hover:text-accent"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Box */}
              <div className="border-4 border-black bg-accent p-6" style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center border-4 border-black bg-black text-accent">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-black uppercase text-black">
                  Gratis SEO Check
                </h3>
                <p className="mb-6 text-base font-bold text-black/80">
                  Benieuwd hoe jouw website scoort? Vraag een gratis analyse aan.
                </p>
                <Button asChild size="lg" className="w-full bg-black text-accent border-black hover:bg-white hover:text-black">
                  <Link href="/contact">
                    AANVRAGEN
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              KLAAR OM TE GROEIEN?
            </p>

            <h2 className="mb-8 text-brutalist-h1 text-black">
              Van lezen naar doen
            </h2>

            <p className="mb-12 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              Genoeg gelezen? Laten we samen kijken hoe we jouw website hoger in Google krijgen.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild className="bg-black text-white border-black hover:bg-accent hover:text-black px-8 py-5 text-base">
                <Link href="/contact">
                  NEEM CONTACT OP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-black text-black hover:bg-black hover:text-white px-8 py-5 text-base">
                <Link href="/cases">
                  BEKIJK CASES
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

<Footer />
    </>
  );
}
