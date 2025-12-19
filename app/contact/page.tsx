'use client';

import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight, Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    website: '',
    bericht: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Subtle diagonal pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
              LATEN WE KENNISMAKEN
            </p>

            <h1 className="mb-8 text-brutalist-hero leading-none text-white">
              Neem{' '}
              <span className="relative inline-block">
                <span className="absolute -inset-1 bg-accent"></span>
                <span className="relative text-black">Contact</span>
              </span>
              {' '}Op
            </h1>

            <p className="text-base font-bold text-white/80 lg:text-lg xl:text-xl">
              Vraag? Bel of mail me direct. Of vul het formulier in en ik reageer binnen 24 uur.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative border-y-4 border-black bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Contact Info */}
            <div>
              <h2 className="mb-8 text-brutalist-h2 text-black">
                Direct contact
              </h2>
              <div className="h-1 w-32 bg-accent mb-12"></div>

              <p className="mb-12 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
                Liever direct schakelen? Pak de telefoon of stuur een mail. Geen wachttijden, geen doorverbinden.
              </p>

              {/* Contact Cards */}
              <div className="grid gap-6">
                <a
                  href="tel:0628206410"
                  className="group flex items-center gap-6 border-4 border-black p-6 transition-all hover:border-accent hover:-translate-y-1"
                  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
                >
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                    <Phone className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-black/60">Bel direct</p>
                    <p className="text-2xl font-black text-black">06 282 064 10</p>
                  </div>
                </a>

                <a
                  href="mailto:info@vizibly.nl"
                  className="group flex items-center gap-6 border-4 border-black p-6 transition-all hover:border-accent hover:-translate-y-1"
                  style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
                >
                  <div className="flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                    <Mail className="h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-black/60">Mail me</p>
                    <p className="text-2xl font-black text-black">info@vizibly.nl</p>
                  </div>
                </a>
              </div>

              {/* Address Card */}
              <div className="mt-12 border-4 border-black p-8" style={{ boxShadow: '8px 8px 0 0 #000000' }}>
                <div className="flex items-start gap-6">
                  <div className="flex h-12 w-12 items-center justify-center border-4 border-black bg-white text-black flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-4 text-xl font-black uppercase text-black">Vizibly</h3>
                    <p className="text-base font-bold text-black/80 lg:text-lg">
                      't Zanddorp 55<br />
                      4335 AE Middelburg
                    </p>
                    <p className="mt-4 text-base font-bold text-black/60">
                      KvK: 68478143
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 flex items-center gap-4 border-l-4 border-black pl-6 bg-accent/10 py-4">
                <Clock className="h-6 w-6 text-black" />
                <p className="text-base font-bold text-black lg:text-lg">
                  Reactie binnen 24 uur op werkdagen
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="border-4 border-black bg-white p-8 lg:p-12" style={{ boxShadow: '12px 12px 0 0 #CCFF00' }}>
                <h3 className="mb-8 text-2xl font-black uppercase text-black">
                  Stuur een bericht
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="naam" className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
                      placeholder="Je naam"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
                      placeholder="je@email.nl"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="telefoon" className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="telefoon"
                        name="telefoon"
                        value={formData.telefoon}
                        onChange={handleChange}
                        className="w-full border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
                        placeholder="06 1234 5678"
                      />
                    </div>

                    <div>
                      <label htmlFor="website" className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
                        Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
                        placeholder="www.jouwsite.nl"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="bericht" className="mb-2 block text-sm font-bold uppercase tracking-wider text-black">
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      required
                      rows={5}
                      value={formData.bericht}
                      onChange={handleChange}
                      className="w-full resize-none border-4 border-black bg-white px-4 py-3 text-lg font-bold text-black outline-none transition-colors focus:border-accent"
                      placeholder="Vertel me over je project of vraag..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-black text-white border-black hover:bg-accent hover:text-black px-8 py-5 text-base">
                    VERSTUUR BERICHT
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative border-b-4 border-black bg-accent py-20 lg:py-24">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div>
              <h2 className="text-3xl font-black uppercase text-black lg:text-4xl">
                Liever eerst meer weten?
              </h2>
              <p className="mt-2 text-base font-bold text-black/80 lg:text-lg">
                Bekijk onze aanpak en resultaten
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-6 py-4 text-base">
                <Link href="/over-ons">
                  OVER VIZIBLY
                </Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-black text-black hover:bg-black hover:text-white px-6 py-4 text-base">
                <Link href="/cases">
                  BEKIJK CASES
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-16 text-white">
        {/* Subtle diagonal pattern */}
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
                <li><Link href="/seo-strategie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Strategie</Link></li>
                <li><Link href="/seo-copy" className="text-base font-bold text-white/80 hover:text-accent transition-colors">SEO Copy</Link></li>
                <li><Link href="/linkbuilding" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Linkbuilding</Link></li>
                <li><Link href="/local-seo" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Local SEO</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 border-b-2 border-accent pb-2 text-lg font-black uppercase">Bedrijf</h4>
              <ul className="space-y-4">
                <li><Link href="/over-ons" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Over Ons</Link></li>
                <li><Link href="/cases" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/vizie" className="text-base font-bold text-white/80 hover:text-accent transition-colors">Vizie</Link></li>
                <li><Link href="/contact" className="text-base font-bold text-accent hover:text-white transition-colors">Contact</Link></li>
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
