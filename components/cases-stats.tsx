'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Target, BarChart3, LucideIcon } from 'lucide-react';

interface StatProps {
  icon: LucideIcon;
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

function Stat({ icon: Icon, end, suffix = '', prefix = '', label, duration = 2000 }: StatProps) {
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
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-6 border-4 border-white/20"
      style={{ boxShadow: '6px 6px 0 0 #CCFF00' }}
    >
      <Icon className="h-8 w-8 text-accent mb-4" />
      <p className="text-4xl font-black text-accent mb-2">
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm font-bold uppercase text-white/60">{label}</p>
    </div>
  );
}

export function CasesStats() {
  return (
    <section className="relative border-y-4 border-black bg-black py-16 lg:py-20">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
      }}></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <Stat icon={TrendingUp} end={7} suffix="+" label="Jaar ervaring" />
          <Stat icon={Users} end={25} suffix="+" label="Klanten laten groeien" />
          <Stat icon={Target} end={120} suffix="%" prefix="+" label="Gemiddelde traffic groei" />
          <Stat icon={BarChart3} end={10} suffix="M+" prefix="€" label="Omzet van klanten" />
        </div>
      </div>
    </section>
  );
}
