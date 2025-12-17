'use client';

import { useEffect, useRef, useState } from 'react';

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
    <div
      ref={ref}
      className="relative flex flex-col items-center gap-3 border-4 border-accent bg-black p-8 text-center transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: '8px 8px 0 0 #CCFF00' }}
    >
      <div className="text-5xl font-bold tracking-tight text-accent lg:text-6xl">
        {prefix}{count}{suffix}
      </div>
      <div className="text-xs font-bold uppercase tracking-wider text-white lg:text-sm">
        {label}
      </div>
    </div>
  );
}

export function StatsOnly() {
  return (
    <section className="relative border-b-4 border-black bg-white py-16 lg:py-24 -mt-32 lg:-mt-40">
      {/* Background Grid Pattern - same as hero */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)'
      }}></div>

      <div className="relative z-10 mx-auto max-w-screen-2xl px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          <Stat end={7} suffix="+" label="JAAR ERVARING" />
          <Stat end={25} suffix="+" label="KLANTEN LATEN GROEIEN" />
          <Stat end={120} suffix="%" prefix="+" label="GEMIDDELDE TRAFFIC GROEI" />
          <Stat end={10} suffix="M+" prefix="€" label="OMZET VAN KLANTEN" />
        </div>
      </div>
    </section>
  );
}
