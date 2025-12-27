'use client';

import { Star } from 'lucide-react';
import Link from 'next/link';

interface Testimonial {
  name: string;
  text?: string;
  highlight?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Tisiana Henricus',
    text: 'Roy heeft voor mij een super mooie webshop gebouwd. Met SEO en linkbuilding is mijn omzet ruim 300% gestegen!',
    highlight: '+300% omzet'
  },
  {
    name: 'Stéfanie Bril',
    text: 'Van Roy kun je ijzersterke teksten verwachten. Zijn schrijfstijl is scherp, vlot, en met de nodige dosis humor.',
    highlight: 'IJzersterke teksten'
  },
  {
    name: 'Tijmen Teunissen',
    text: 'Een echte win-win. Hun gestructureerde aanpak, persoonlijke benadering en enthousiasme maken dat we graag blijven samenwerken.',
    highlight: 'Win-win'
  },
  {
    name: 'Ron Slaats',
    text: 'Roy is betrokken en kijkt integraal naar manieren om zeer doeltreffend resultaten te bereiken. Aanrader!',
    highlight: 'Aanrader'
  },
  {
    name: 'Marriët Cruson',
    text: 'De teksten die Roy schreef zijn professioneel, persoonlijk en goed vindbaar in Google. Perfect voor onze doelgroep en een echt visitekaartje van ons bedrijf!',
    highlight: 'Scherpe pen'
  },
  {
    name: 'Ben van Dee',
    highlight: '5 sterren'
  }
];

export function TestimonialsSection() {
  return (
    <section className="relative border-y-4 border-black bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
            5/5 STERREN OP GOOGLE
          </p>
          <h2 className="mb-6 text-brutalist-h2 text-black">
            Fans van Vizibly aan het woord
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-8 w-8 fill-black text-black" />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group border-4 border-black bg-white p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
              style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
            >
              {testimonial.highlight && (
                <span className="mb-4 inline-block border-4 border-black bg-black px-3 py-1 text-sm font-black uppercase text-accent">
                  {testimonial.highlight}
                </span>
              )}
              {testimonial.text && (
                <p className="mb-6 text-base font-bold text-black lg:text-lg">
                  "{testimonial.text}"
                </p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-sm font-black uppercase tracking-wider text-black/60">
                  — {testimonial.name}
                </p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-black text-black" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Vizibly/@52.1909763,5.2795551,7z/data=!4m8!3m7!1s0x47c5ef6bd13e8765:0xc924944bbf7fa195!8m2!3d52.1909763!4d5.2795551!9m1!1b1!16s%2Fg%2F11vs4r0223"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-4 border-black bg-black px-6 py-3 text-base font-black uppercase text-white transition-all hover:bg-white hover:text-black"
          >
            Bekijk alle reviews op Google
          </a>
        </div>
      </div>
    </section>
  );
}
