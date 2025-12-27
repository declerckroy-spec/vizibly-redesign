'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface CaseStudyLayoutProps {
  /** Case study title (h1) */
  title: string;
  /** Label above title: 'CASE STUDY' or 'KLANTINTERVIEW' */
  label?: 'CASE STUDY' | 'KLANTINTERVIEW';
  /** Subtitle/intro text */
  subtitle: string;
  /** Featured image path */
  featuredImage: string;
  /** Featured image alt text */
  featuredImageAlt: string;
  /** Main content sections */
  children: React.ReactNode;
  /** CTA heading */
  ctaHeading?: string;
  /** CTA description */
  ctaDescription?: string;
  /** Secondary CTA button text */
  secondaryButtonText?: string;
  /** Secondary CTA button href */
  secondaryButtonHref?: string;
}

export function CaseStudyLayout({
  title,
  label = 'CASE STUDY',
  subtitle,
  featuredImage,
  featuredImageAlt,
  children,
  ctaHeading = 'Klaar voor jouw succesverhaal?',
  ctaDescription = 'Ontdek hoe we jouw online groei kunnen versnellen met bewezen SEO strategieën.',
  secondaryButtonText = 'BEKIJK FULL SERVICE SEO',
  secondaryButtonHref = '/full-service-seo',
}: CaseStudyLayoutProps) {
  return (
    <>
      <Navigation />

      {/* Breadcrumb */}
      <div className="border-b-4 border-black bg-white py-4">
        <div className="mx-auto max-w-screen-2xl px-6">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-black/60 transition-colors hover:text-accent lg:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            Alle cases
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)',
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Label */}
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
              {label}
            </p>

            {/* Title */}
            <h1 className="mb-8 text-brutalist-h1 text-black">{title}</h1>

            {/* Accent line */}
            <div className="mx-auto h-1 w-32 bg-accent mb-8"></div>

            {/* Subtitle */}
            <p className="text-base font-bold text-black/80 lg:text-lg xl:text-xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="border-b-4 border-black bg-black py-16 lg:py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mx-auto max-w-4xl">
            <div
              className="relative aspect-video overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}
            >
              <Image
                src={featuredImage}
                alt={featuredImageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article>{children}</article>

      {/* Final CTA */}
      <FinalCTA
        heading={ctaHeading}
        description={ctaDescription}
        showSecondaryButton={true}
        secondaryButtonText={secondaryButtonText}
        secondaryButtonHref={secondaryButtonHref}
      />

      <Footer />
    </>
  );
}

// Helper component for case study content sections
export function CaseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b-4 border-black bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="mb-8 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

// Case study paragraph
export function CaseParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-base font-bold text-black/80 lg:text-lg xl:text-xl">
      {children}
    </p>
  );
}

// Results/Stats list with accent bullets
export function CaseStatsList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-4 list-none mb-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start text-base font-bold text-black lg:text-lg xl:text-xl">
          <span className="mr-3 text-accent">▸</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Quote block for interviews
export function CaseQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-accent pl-6 my-8">
      <p className="text-base font-bold text-black lg:text-lg xl:text-xl italic">
        {children}
      </p>
    </div>
  );
}

// Case study image
export function CaseImage({
  src,
  alt,
  width = 800,
  height = 450,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <div
      className="my-12 relative overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}

// Internal link styling
export function CaseLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="underline hover:text-accent transition-colors">
      {children}
    </Link>
  );
}
