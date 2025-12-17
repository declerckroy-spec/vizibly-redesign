'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface StatProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function Stat({ end, suffix = '', prefix = '', label, duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-3 border-4 border-accent bg-black p-8 text-center">
      <div className="text-5xl font-bold tracking-tight text-accent lg:text-6xl">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
        {label}
      </div>
    </div>
  );
}

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

export function StatsClientsCombined() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="border-y-4 border-black bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-screen-2xl px-6">
        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            <Stat end={7} suffix="+" label="JAAR ERVARING" />
            <Stat end={25} suffix="+" label="KLANTEN LATEN GROEIEN" />
            <Stat end={120} suffix="%" prefix="+" label="GEMIDDELDE TRAFFIC GROEI" />
            <Stat end={10} suffix="M+" prefix="€" label="OMZET VAN KLANTEN" />
          </div>
        </div>

        {/* Clients Heading */}
        <div className="text-center mb-12">
          <p className="mb-4 text-base font-bold uppercase tracking-wider text-black lg:text-lg xl:text-xl">
            ZIJ GINGEN JE AL VOOR
          </p>
          <h2 className="text-brutalist-h2 text-black">
            Ondernemers die nu<br />wél gevonden worden
          </h2>
        </div>
      </div>

      {/* Clients Carousel */}
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
