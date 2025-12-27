'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FinalCTAProps {
  /** Optional label above the heading */
  label?: string;
  /** Main heading text */
  heading?: string;
  /** Optional description below heading */
  description?: string;
  /** Primary button text */
  buttonText?: string;
  /** Primary button link */
  buttonHref?: string;
  /** Show secondary button (used in case studies) */
  showSecondaryButton?: boolean;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** Secondary button link */
  secondaryButtonHref?: string;
  /** Variant: 'default' for lime bg, 'dark' for black bg */
  variant?: 'default' | 'dark';
}

export function FinalCTA({
  label,
  heading = 'Klaar om te groeien?',
  description,
  buttonText = 'NEEM CONTACT OP',
  buttonHref = '/contact',
  showSecondaryButton = false,
  secondaryButtonText = 'FULL SERVICE SEO',
  secondaryButtonHref = '/full-service-seo',
  variant = 'default',
}: FinalCTAProps) {
  const isDefault = variant === 'default';

  return (
    <section
      className={`relative border-b-4 border-black py-24 lg:py-32 ${
        isDefault ? 'bg-accent' : 'bg-black text-white'
      }`}
    >
      {/* Background pattern for dark variant */}
      {!isDefault && (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
          }}
        ></div>
      )}

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Optional Label */}
          {label && (
            <p
              className={`mb-6 text-base font-bold uppercase tracking-wider lg:text-lg ${
                isDefault ? 'text-black/60' : 'text-accent'
              }`}
            >
              {label}
            </p>
          )}

          {/* Heading */}
          <h2
            className={`mb-8 text-brutalist-h1 ${
              isDefault ? 'text-black' : 'text-white'
            }`}
          >
            {heading}
          </h2>

          {/* Optional Description */}
          {description && (
            <p
              className={`mb-12 text-base font-bold lg:text-lg xl:text-xl ${
                isDefault ? 'text-black/80' : 'text-white/80'
              }`}
            >
              {description}
            </p>
          )}

          {/* Buttons */}
          <div className={`flex flex-col items-center justify-center gap-4 ${showSecondaryButton ? 'sm:flex-row' : ''}`}>
            {/* Secondary Button (shown first on left) */}
            {showSecondaryButton && (
              <Button
                size="lg"
                asChild
                className={`px-8 py-5 text-base ${
                  isDefault
                    ? 'bg-black text-white border-black hover:bg-white hover:text-black'
                    : 'bg-accent text-black border-accent hover:bg-white'
                }`}
              >
                <Link href={secondaryButtonHref}>
                  {secondaryButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}

            {/* Primary Button */}
            <Button
              size="lg"
              asChild
              className={`px-8 py-5 text-base ${
                isDefault
                  ? 'bg-black text-white border-black hover:bg-white hover:text-black'
                  : 'bg-accent text-black border-accent hover:bg-white'
              } ${showSecondaryButton ? 'bg-white text-black border-black hover:bg-black hover:text-white' : ''}`}
            >
              <Link href={buttonHref}>
                {buttonText}
                {showSecondaryButton ? (
                  <Phone className="ml-2 h-5 w-5" />
                ) : (
                  <ArrowRight className="ml-2 h-5 w-5" />
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
