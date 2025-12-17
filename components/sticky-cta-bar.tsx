'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { X, ArrowRight } from 'lucide-react';

export function StickyCTABar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t-4 border-black bg-black text-white shadow-[0_-4px_20px_rgba(204,255,0,0.15)]">
      <div className="relative mx-auto max-w-screen-2xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Text - Hidden on small mobile, shown on larger screens */}
          <div className="hidden sm:block">
            <p className="text-base font-bold lg:text-lg">
              Gratis adviesgesprek aanvragen?{' '}
              <span className="text-accent">Kennismaken?</span>
            </p>
          </div>

          {/* Mobile: Only button */}
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto">
            <p className="text-sm font-bold sm:hidden">
              <span className="text-accent">Gratis kennismaken?</span>
            </p>

            <Button
              asChild
              size="default"
              className="bg-accent text-black border-accent hover:bg-white text-sm font-bold uppercase sm:text-base"
            >
              <Link href="/contact">
                Maak nu kennis
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>

          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/60 hover:text-accent transition-colors"
            aria-label="Sluit CTA bar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
