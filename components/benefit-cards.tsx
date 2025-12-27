'use client';

import { LucideIcon } from 'lucide-react';

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitCardsProps {
  /** Array of benefit items */
  items: BenefitItem[];
  /** Optional label above heading */
  label?: string;
  /** Section heading */
  heading?: string;
  /** Background color variant */
  variant?: 'white' | 'black' | 'accent';
  /** Center the header text */
  centerHeader?: boolean;
  /** Number of columns on desktop */
  columns?: 2 | 3 | 4;
}

export function BenefitCards({
  items,
  label,
  heading,
  variant = 'white',
  centerHeader = true,
  columns = 3,
}: BenefitCardsProps) {
  const bgClass = {
    white: 'bg-white',
    black: 'bg-black text-white',
    accent: 'bg-accent',
  }[variant];

  const labelClass = {
    white: 'text-black/60',
    black: 'text-accent',
    accent: 'text-black/60',
  }[variant];

  const headingClass = {
    white: 'text-black',
    black: 'text-white',
    accent: 'text-black',
  }[variant];

  const cardBorderClass = {
    white: 'border-black',
    black: 'border-white',
    accent: 'border-black',
  }[variant];

  const cardBgClass = {
    white: 'bg-white',
    black: 'bg-black',
    accent: 'bg-white',
  }[variant];

  const shadowStyle = {
    white: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)',
    black: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)',
    accent: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)',
  }[variant];

  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  return (
    <section className={`relative border-b-4 border-black py-24 lg:py-32 ${bgClass}`}>
      {/* Background pattern for dark variant */}
      {variant === 'black' && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
          }}
        ></div>
      )}

      <div className="relative mx-auto max-w-screen-2xl px-6">
        {/* Header */}
        {(label || heading) && (
          <div className={`mb-16 ${centerHeader ? 'text-center' : ''}`}>
            {label && (
              <p className={`mb-6 text-base font-bold uppercase tracking-wider lg:text-lg ${labelClass}`}>
                {label}
              </p>
            )}
            {heading && (
              <h2 className={`mb-8 text-brutalist-h1 ${headingClass}`}>{heading}</h2>
            )}
          </div>
        )}

        {/* Cards Grid */}
        <div className={`grid gap-8 ${gridCols}`}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`group border-4 ${cardBorderClass} ${cardBgClass} p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-1 hover:translate-y-1`}
              style={{ boxShadow: shadowStyle }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:rotate-3 group-hover:bg-black group-hover:text-accent">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-base font-bold text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
