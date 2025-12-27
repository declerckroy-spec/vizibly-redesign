'use client';

import Image from 'next/image';

interface Client {
  name: string;
  logo: string;
  width: number;
  height: number;
}

// Volgorde: 1. Takeoff, 2. Bill Incasso, 3. Empact, 4. Duinroos, rest maakt niet uit
const defaultClients: Client[] = [
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

interface ClientsSectionProps {
  /** Custom clients data */
  clients?: Client[];
  /** Background variant */
  variant?: 'white' | 'black';
  /** Custom heading */
  heading?: string;
  /** Custom label */
  label?: string;
  /** Custom bottom text */
  bottomText?: string;
  /** Number of additional clients to mention */
  additionalCount?: number;
}

export function ClientsSection({
  clients = defaultClients,
  variant = 'black',
  label = 'ZIJ GINGEN JE AL VOOR',
  heading = 'Ondernemers die nu\nwél gevonden worden',
  bottomText = 'andere ondernemers die vandaag hun concurrenten voorbij schieten',
  additionalCount = 25,
}: ClientsSectionProps) {
  const duplicatedClients = [...clients, ...clients];

  const styles = {
    white: {
      sectionClass: 'relative border-y-4 border-black bg-white py-16 lg:py-20 overflow-hidden',
      pattern: null,
      labelClass: 'text-black',
      headingClass: 'text-black',
      gradientFrom: 'from-white',
      cardClass: 'border-4 border-black bg-white hover:border-accent hover:-translate-y-1 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      cardShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)',
      bottomTextClass: 'text-black',
      badgeClass: 'border-4 border-black bg-accent text-black',
    },
    black: {
      sectionClass: 'relative border-y-4 border-black bg-black py-16 lg:py-24 overflow-hidden',
      pattern: (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
      ),
      labelClass: 'text-accent',
      headingClass: 'text-white',
      gradientFrom: 'from-black',
      cardClass: 'group border-4 border-black bg-white hover:border-accent hover:-translate-y-2 hover:rotate-1 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      cardShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)',
      bottomTextClass: 'text-white',
      badgeClass: 'border-4 border-black bg-accent text-black',
    },
  }[variant];

  // Convert newlines in heading to <br />
  const headingParts = heading.split('\n');

  return (
    <section className={styles.sectionClass}>
      {styles.pattern}

      <div className="relative mx-auto max-w-screen-2xl px-6 mb-12">
        <div className="text-center">
          <p className={`mb-4 text-base font-bold uppercase tracking-wider lg:text-lg xl:text-xl ${styles.labelClass}`}>
            {label}
          </p>
          <h2 className={`text-brutalist-h2 ${styles.headingClass}`}>
            {headingParts.map((part, i) => (
              <span key={i}>
                {part}
                {i < headingParts.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r ${styles.gradientFrom} to-transparent z-10`}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l ${styles.gradientFrom} to-transparent z-10`}></div>

        {/* Scrolling track */}
        <div className="flex gap-16 animate-scroll-left">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className={`flex-shrink-0 flex items-center justify-center h-24 px-8 transition-all duration-300 ${styles.cardClass}`}
              style={{
                boxShadow: styles.cardShadow,
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
              </div>
              {/* Subtle glow effect on hover (black variant only) */}
              {variant === 'black' && (
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative mx-auto max-w-screen-2xl px-6 mt-12 text-center">
        <p className={`text-base font-bold lg:text-lg ${styles.bottomTextClass}`}>
          En nog <span className={`inline-block px-3 py-1 font-black ${styles.badgeClass}`}>{additionalCount}+</span> {bottomText}
        </p>
      </div>
    </section>
  );
}

// Export convenience component for backward compatibility
export function ClientsCarouselStandalone() {
  return <ClientsSection variant="black" />;
}
