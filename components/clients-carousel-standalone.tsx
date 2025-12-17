'use client';

import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  width: number;
  height: number;
}

// Volgorde: 1. Takeoff, 2. Bill Incasso, 3. Empact, 4. Duinroos, rest maakt niet uit
const clients: Client[] = [
  {
    name: 'Takeoff',
    logo: '/clients/Schermafbeelding-2025-06-05-155610 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Bill Incasso',
    logo: '/clients/Bill incasso logo.png',
    width: 250,
    height: 80
  },
  {
    name: 'Empact',
    logo: '/clients/Logo-Empact-512px (2).png',
    width: 250,
    height: 80
  },
  {
    name: 'Duinroos',
    logo: '/clients/Schermafbeelding-2025-06-05-175129 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Rijschool Goedhart',
    logo: '/clients/cropped-logorijschoolgoedhart (2).png',
    width: 250,
    height: 80
  },
  {
    name: 'SRT',
    logo: '/clients/SRT-logo-zwart-300x50-1 (1).png',
    width: 250,
    height: 42
  },
  {
    name: 'Weltechniek',
    logo: '/clients/Weltechniek-logo (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Client 7',
    logo: '/clients/Schermafbeelding-2025-06-05-175911 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Client 8',
    logo: '/clients/Schermafbeelding-2025-06-05-175924 (1).png',
    width: 250,
    height: 80
  }
];

export function ClientsCarouselStandalone() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative border-y-4 border-black bg-black py-16 lg:py-24 overflow-hidden">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
      }}></div>

      <div className="relative mx-auto max-w-screen-2xl px-6 mb-12">
        <div className="text-center">
          <p className="mb-4 text-base font-bold uppercase tracking-wider text-accent lg:text-lg xl:text-xl">
            ZIJ GINGEN JE AL VOOR
          </p>
          <h2 className="text-brutalist-h2 text-white">
            Ondernemers die nu<br />wél gevonden worden
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex gap-16 animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex-shrink-0 flex items-center justify-center h-24 px-8
                         border-4 border-black bg-white
                         transition-all duration-300
                         hover:border-accent hover:-translate-y-2 hover:rotate-1"
              style={{
                boxShadow: '8px 8px 0 0 #CCFF00',
                minWidth: '200px'
              }}
            >
              <div className="relative grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-16 w-auto"
                />
              </div>
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative mx-auto max-w-screen-2xl px-6 mt-12 text-center">
        <p className="text-base font-bold text-white lg:text-lg">
          En nog <span className="inline-block border-4 border-black bg-accent px-3 py-1 font-black text-black">25+</span> andere ondernemers die vandaag hun concurrenten voorbij schieten
        </p>
      </div>
    </section>
  );
}
