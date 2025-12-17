'use client';

import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const clients: Client[] = [
  {
    name: 'Bill Incasso',
    logo: '/clients/Logo-Bill-Incasso-FC-WEB.svg',
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
    name: 'Empact',
    logo: '/clients/Logo-Empact-512px (2).png',
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
    name: 'Client 1',
    logo: '/clients/Schermafbeelding-2025-06-05-155610 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Client 2',
    logo: '/clients/Schermafbeelding-2025-06-05-175129 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Client 3',
    logo: '/clients/Schermafbeelding-2025-06-05-175911 (1).png',
    width: 250,
    height: 80
  },
  {
    name: 'Client 4',
    logo: '/clients/Schermafbeelding-2025-06-05-175924 (1).png',
    width: 250,
    height: 80
  }
];

export function ClientsCarousel() {
  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="relative border-y-4 border-black bg-white py-16 lg:py-20 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6 mb-12">
        <div className="text-center">
          <p className="mb-4 text-base font-bold uppercase tracking-wider text-black lg:text-lg xl:text-xl">
            ZIJ GINGEN JE AL VOOR
          </p>
          <h2 className="text-brutalist-h2 text-black">
            Ondernemers die nu<br />wél gevonden worden
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling track */}
        <div className="flex gap-16 animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center h-24 px-8
                         border-4 border-black bg-white
                         transition-all duration-300
                         hover:border-accent hover:-translate-y-1"
              style={{
                boxShadow: '4px 4px 0 0 #000000',
                minWidth: '200px'
              }}
            >
              <div className="relative grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className="object-contain max-h-16 w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="mx-auto max-w-screen-2xl px-6 mt-12 text-center">
        <p className="text-lg font-bold text-black xl:text-xl">
          En nog <span className="inline-block border-4 border-black bg-accent px-3 py-1 font-black">25+</span> andere ondernemers die vandaag hun concurrenten voorbij schieten
        </p>
      </div>
    </section>
  );
}
