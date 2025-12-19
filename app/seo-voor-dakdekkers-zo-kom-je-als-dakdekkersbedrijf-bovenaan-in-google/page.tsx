import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Phone, Mail, MapPin, Clock, Check, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
  description:
    "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
  openGraph: {
    title: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
    description:
      "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
    url: "https://vizibly.nl/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google/",
    siteName: "Vizibly",
    locale: "nl_NL",
    type: "article",
  },
};


const relatedArticles = [
  {
    slug: '12-bewezen-manieren-om-als-fysiotherapeut-zichtbaar-te-worden-in-google',
    title: '12 bewezen manieren om als fysiotherapeut zichtbaar te worden in Google',
    image: '/blog/fysiotherapeut-seo.jpg',
    excerpt: '80% van potentiele patienten zoekt online. Ontdek hoe je jouw praktijk laat groeien met deze 12 SEO-tips.'
  },
  {
    slug: 'seo-strategie-zo-bouw-je-aan-duurzame-groei-via-google',
    title: 'SEO strategie: zo bouw je aan duurzame groei via Google',
    image: '/blog/groeien-topical-authority.jpg',
    excerpt: 'Een goede SEO strategie bepaalt het verschil tussen €3.000 en €30.000 organisch verkeer per maand.'
  },
  {
    slug: 'googles-4-gouden-regels-voor-het-kiezen-van-een-seo-bureau',
    title: 'Google\'s 4 gouden regels voor het kiezen van een SEO bureau',
    image: '/blog/seo-bureau-kiezen.png',
    excerpt: 'Google waarschuwt expliciet voor bepaalde SEO-bureaus. Kies slim met deze 4 regels.'
  }
];

export default function SeoDakdekkersPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "SEO voor dakdekkers: 10 tips om ook bovenaan te komen",
    description:
      "Dagelijks zoeken klanten naar dakdekkers in jouw regio. Met de juiste SEO-strategie zorg je dat jouw bedrijf bovenaan in Google komt.",
    author: {
      "@type": "Person",
      name: "Roy de Clerck",
    },
    publisher: {
      "@type": "Organization",
      name: "Vizibly",
      logo: {
        "@type": "ImageObject",
        url: "https://vizibly.nl/logo-brutalist-white.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://vizibly.nl/seo-voor-dakdekkers-zo-kom-je-als-dakdekkersbedrijf-bovenaan-in-google/",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-black pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)",
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <Link
            href="/vizie"
            className="group mb-8 inline-flex items-center text-base font-bold text-white/70 transition-colors hover:text-accent"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Terug naar Vizie
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                SEO VOOR DAKDEKKERS
              </p>
              <h1 className="text-brutalist-h1 mb-6">
                10 tips om als dakdekker{" "}
                <span className="relative inline-block">
                  <span className="absolute -inset-1 bg-accent"></span>
                  <span className="relative text-black">bovenaan</span>
                </span>{" "}
                in Google te komen
              </h1>
              <p className="text-lg font-bold text-white/80 lg:text-xl">
                Dagelijks zoeken potentiele klanten naar dakdekkersdiensten in jouw regio.
                Met de juiste SEO-strategie zorg je dat jouw bedrijf gevonden wordt.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 text-sm font-bold text-white/70">
                <span className="flex items-center gap-2">
                  <User className="h-4 w-4 text-accent" />
                  Roy de Clerck
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-accent" />
                  10 min leestijd
                </span>
              </div>
            </div>

            <div className="relative">
              <div
                className="relative border-4 border-white"
                style={{ boxShadow: "12px 12px 0 0 #CCFF00" }}
              >
                <Image
                  src="/blog/seo-dakdekkers.jpg"
                  alt="SEO voor dakdekkers - hoger in Google"
                  width={800}
                  height={647}
                  className="h-auto w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      


      {/* Final CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-brutalist-h1 mb-6 text-black">
              Klaar om je{" "}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-black"></span>
                <span className="relative text-accent">dakdekkersbedrijf</span>
              </span>{" "}
              te laten groeien?
            </h2>
            <p className="mb-10 text-lg font-bold text-black/80 lg:text-xl">
              Van onzichtbaar naar de #1 dakdekker in jouw regio.
              Wij helpen je groeien met bewezen SEO-strategieen.
            </p>
            <Button
              size="lg"
              asChild
              className="border-black bg-black px-8 py-5 text-base text-white hover:bg-white hover:text-black"
            >
              <Link href="/contact">
                VRAAG EEN GRATIS ANALYSE AAN
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
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



      {/* Footer */}
      <footer className="border-t-4 border-black bg-black py-16 text-white">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Link href="/" className="mb-6 inline-block">
                <Image
                  src="/logo-brutalist-white.svg"
                  alt="Vizibly"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mb-6 text-base font-bold text-white/70">
                SEO bureau met een missie: jouw bedrijf zichtbaar maken in Google.
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-accent"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-bold text-white/70">5/5 Google Reviews</span>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">Diensten</h4>
              <ul className="space-y-3">
                {[
                  { name: "SEO Strategie", href: "/seo-strategie" },
                  { name: "SEO Copy", href: "/seo-copy" },
                  { name: "Linkbuilding", href: "/linkbuilding" },
                  { name: "Local SEO", href: "/local-seo" },
                  { name: "Design & Techniek", href: "/design-techniek" },
                  { name: "Google Ads", href: "/google-ads-sea" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base font-bold text-white/70 transition-colors hover:text-accent">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">Bedrijf</h4>
              <ul className="space-y-3">
                {[
                  { name: "Over ons", href: "/over-ons" },
                  { name: "Cases", href: "/cases" },
                  { name: "Vizie", href: "/vizie" },
                  { name: "Contact", href: "/contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-base font-bold text-white/70 transition-colors hover:text-accent">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-lg font-bold uppercase tracking-wider text-accent">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a href="tel:+31642853802" className="text-base font-bold text-white/70 transition-colors hover:text-accent">
                    06 42 85 38 02
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <a href="mailto:roy@vizibly.nl" className="text-base font-bold text-white/70 transition-colors hover:text-accent">
                    roy@vizibly.nl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base font-bold text-white/70">Eindhoven, Nederland</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-base font-bold text-white/70">Ma-Vr: 9:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t-4 border-white/10 pt-8 md:flex-row">
            <p className="text-sm font-bold text-white/50">
              &copy; {new Date().getFullYear()} Vizibly. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm font-bold text-white/50 transition-colors hover:text-accent">Privacy</Link>
              <Link href="/voorwaarden" className="text-sm font-bold text-white/50 transition-colors hover:text-accent">Voorwaarden</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
