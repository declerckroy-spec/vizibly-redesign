'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Target, BarChart3, LucideIcon } from 'lucide-react';

export interface StatItem {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
}

interface StatProps extends StatItem {
  duration?: number;
  variant: 'white' | 'black';
  showIcon?: boolean;
}

function Stat({ icon: Icon, end, suffix = '', prefix = '', label, duration = 2000, variant, showIcon }: StatProps) {
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

  // Variant-specific styling
  const cardStyles = {
    white: {
      className: 'border-4 border-accent bg-black p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1',
      shadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)',
      numberClass: 'text-5xl font-bold tracking-tight text-accent lg:text-6xl',
      labelClass: 'text-xs font-bold uppercase tracking-wider text-white lg:text-sm',
    },
    black: {
      className: 'border-4 border-white/20 p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      shadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)',
      numberClass: 'text-4xl font-black text-accent mb-2',
      labelClass: 'text-sm font-bold uppercase text-white/60',
    },
  }[variant];

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center ${cardStyles.className}`}
      style={{ boxShadow: cardStyles.shadow }}
    >
      {showIcon && Icon && (
        <Icon className="h-8 w-8 text-accent mb-4" />
      )}
      <div className={cardStyles.numberClass}>
        {prefix}{count}{suffix}
      </div>
      <div className={cardStyles.labelClass}>
        {label}
      </div>
    </div>
  );
}

// Default stats data
const defaultStats: StatItem[] = [
  { end: 7, suffix: '+', label: 'JAAR ERVARING', icon: TrendingUp },
  { end: 25, suffix: '+', label: 'KLANTEN LATEN GROEIEN', icon: Users },
  { end: 120, suffix: '%', prefix: '+', label: 'GEMIDDELDE TRAFFIC GROEI', icon: Target },
];

interface StatsSectionProps {
  /** Custom stats data (defaults to company stats) */
  stats?: StatItem[];
  /** Background variant */
  variant?: 'white' | 'black';
  /** Show icons (only for black variant) */
  showIcons?: boolean;
  /** Negative margin to overlap with previous section */
  overlapHero?: boolean;
}

export function StatsSection({
  stats = defaultStats,
  variant = 'white',
  showIcons = false,
  overlapHero = false,
}: StatsSectionProps) {
  const sectionStyles = {
    white: {
      className: 'relative border-b-4 border-black bg-[#fafaf8] py-20 lg:py-28',
      pattern: (
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
        }}></div>
      ),
    },
    black: {
      className: 'relative border-y-4 border-black bg-[#0a0a0a] py-20 lg:py-28',
      pattern: (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
        }}></div>
      ),
    },
  }[variant];

  return (
    <section className={`${sectionStyles.className}${overlapHero ? ' -mt-32 lg:-mt-40' : ''}`}>
      {sectionStyles.pattern}

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {stats.map((stat, index) => (
            <Stat
              key={index}
              {...stat}
              variant={variant}
              showIcon={showIcons}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Export convenience components for backward compatibility
export function StatsOnly() {
  return <StatsSection variant="white" overlapHero />;
}

export function CasesStats() {
  return <StatsSection variant="black" showIcons />;
}
