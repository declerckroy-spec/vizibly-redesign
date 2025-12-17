'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b-4 border-black bg-black text-white shadow-[0_4px_20px_rgba(204,255,0,0.15)]">
      {/* Subtle diagonal stripes background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 2px, transparent 2px, transparent 30px)'
      }}></div>

      <div className="relative mx-auto max-w-screen-2xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo-brutalist-white.svg"
              alt="Vizibly Logo"
              width={180}
              height={45}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6 lg:gap-10">
            <Link href="/seo-strategie" className="text-base font-bold uppercase hover:text-accent transition-colors">
              SEO Strategie
            </Link>
            <Link href="/seo-copy" className="text-base font-bold uppercase hover:text-accent transition-colors">
              SEO Copy
            </Link>
            <Link href="/linkbuilding" className="text-base font-bold uppercase hover:text-accent transition-colors">
              Linkbuilding
            </Link>
            <Link href="/cases" className="text-base font-bold uppercase hover:text-accent transition-colors">
              Cases
            </Link>
            <Link href="/over-ons" className="text-base font-bold uppercase hover:text-accent transition-colors">
              Over Ons
            </Link>
            <Button asChild size="lg" className="ml-4 bg-accent text-black border-accent hover:bg-white text-base px-6 py-4">
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-8 w-8" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-6 flex flex-col gap-4 border-t-2 border-accent pt-6 md:hidden">
            <Link href="/seo-strategie" className="text-base font-bold uppercase hover:text-accent transition-colors">SEO Strategie</Link>
            <Link href="/seo-copy" className="text-base font-bold uppercase hover:text-accent transition-colors">SEO Copy</Link>
            <Link href="/linkbuilding" className="text-base font-bold uppercase hover:text-accent transition-colors">Linkbuilding</Link>
            <Link href="/cases" className="text-base font-bold uppercase hover:text-accent transition-colors">Cases</Link>
            <Link href="/over-ons" className="text-base font-bold uppercase hover:text-accent transition-colors">Over Ons</Link>
            <Button asChild size="lg" className="w-full bg-accent text-black border-accent text-base">
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
