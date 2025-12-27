'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { FAQSection, FAQItem } from '@/components/faq-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// =============================================================================
// MAIN LAYOUT COMPONENT
// =============================================================================

export interface ServicePageLayoutProps {
  /** Hero label above title */
  heroLabel: string;
  /** Hero title (can include JSX for accent highlighting) */
  heroTitle: React.ReactNode;
  /** Hero description paragraphs */
  heroDescription: React.ReactNode;
  /** Hero image */
  heroImage: {
    src: string;
    alt: string;
  };
  /** Optional second hero image (stacked) */
  heroImage2?: {
    src: string;
    alt: string;
  };
  /** FAQ items */
  faqItems: FAQItem[];
  /** Final CTA props */
  finalCTA: {
    label?: string;
    heading?: string;
    buttonText?: string;
  };
  /** Main content between hero and FAQ */
  children: React.ReactNode;
  /** Show testimonials section */
  showTestimonials?: boolean;
}

export function ServicePageLayout({
  heroLabel,
  heroTitle,
  heroDescription,
  heroImage,
  heroImage2,
  faqItems,
  finalCTA,
  children,
  showTestimonials = true,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #000 0px, #000 2px, transparent 2px, transparent 40px), repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 40px)',
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                {heroLabel}
              </p>

              <h1 className="mb-8 text-brutalist-hero leading-none">{heroTitle}</h1>

              <div className="mb-10 space-y-6">{heroDescription}</div>

              <Button size="lg" asChild className="text-base px-8 py-5">
                <Link href="/contact">
                  NEEM CONTACT OP
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="relative aspect-[4/3] overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}
              >
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {heroImage2 && (
                <div
                  className="relative aspect-[4/3] overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
                >
                  <Image
                    src={heroImage2.src}
                    alt={heroImage2.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      {children}

      {/* FAQ Section */}
      <FAQSection items={faqItems} />

      {/* Testimonials */}
      {showTestimonials && <TestimonialsSection />}

      {/* Final CTA */}
      <FinalCTA
        label={finalCTA.label}
        heading={finalCTA.heading}
        buttonText={finalCTA.buttonText || "LET'S GO!!"}
      />

      <Footer />
    </>
  );
}

// =============================================================================
// REUSABLE SECTION COMPONENTS
// =============================================================================

/**
 * "What is X?" section - Black background with diagonal pattern
 */
export function ServiceWhatIsSection({
  label,
  title,
  children,
  rightColumn,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
  rightColumn?: React.ReactNode;
}) {
  return (
    <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
        }}
      ></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className={`grid gap-16 ${rightColumn ? 'lg:grid-cols-2 lg:gap-24' : ''} items-center`}>
          <div>
            <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
              {label}
            </p>

            <h2 className="mb-8 text-brutalist-h1 text-white">{title}</h2>
            <div className="h-1 w-32 bg-accent mb-8"></div>

            {children}
          </div>

          {rightColumn && <div>{rightColumn}</div>}
        </div>
      </div>
    </section>
  );
}

/**
 * "Why X?" section - White background with 3 benefit cards
 */
export interface ServiceBenefitCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceWhySection({
  label,
  title,
  cards,
}: {
  label: string;
  title: string;
  cards: ServiceBenefitCard[];
}) {
  return (
    <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
            {label}
          </p>
          <h2 className="mb-8 text-brutalist-h1 text-black">{title}</h2>
        </div>

        <div className={`grid gap-8 ${cards.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="group border-4 border-black bg-white p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-1 hover:translate-y-1"
              style={{ boxShadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)' }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent text-black transition-all group-hover:bg-black group-hover:text-accent group-hover:rotate-3">
                <card.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 text-xl font-black uppercase text-black lg:text-2xl">
                {card.title}
              </h3>
              <p className="text-base font-bold text-black/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Process/Steps section with configurable background
 */
export interface ServiceProcessStep {
  step: string;
  title: string;
  description: string;
}

export function ServiceProcessSection({
  label,
  title,
  steps,
  variant = 'white',
}: {
  label: string;
  title: string;
  steps: ServiceProcessStep[];
  variant?: 'white' | 'accent' | 'black';
}) {
  const bgStyles = {
    white: {
      sectionClass: 'bg-white',
      pattern: null,
      labelClass: 'text-black/60',
      titleClass: 'text-black',
      stepBadgeClass: 'bg-black text-accent',
      shadow: '#CCFF00',
    },
    accent: {
      sectionClass: 'bg-accent',
      pattern: null,
      labelClass: 'text-black/60',
      titleClass: 'text-black',
      stepBadgeClass: 'bg-black text-accent',
      shadow: '#000000',
    },
    black: {
      sectionClass: 'bg-black text-white',
      pattern: (
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
          }}
        ></div>
      ),
      labelClass: 'text-accent',
      titleClass: 'text-white',
      stepBadgeClass: 'bg-accent text-black',
      shadow: '#CCFF00',
    },
  }[variant];

  const gridCols = {
    4: 'md:grid-cols-2 lg:grid-cols-4',
    5: 'md:grid-cols-2 lg:grid-cols-5',
    3: 'md:grid-cols-3',
  }[steps.length] || 'md:grid-cols-2 lg:grid-cols-4';

  return (
    <section className={`relative border-b-4 border-black py-24 lg:py-32 ${bgStyles.sectionClass}`}>
      {bgStyles.pattern}

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className="mb-16">
          <p className={`mb-6 text-base font-bold uppercase tracking-wider lg:text-lg ${bgStyles.labelClass}`}>
            {label}
          </p>
          <h2 className={`mb-8 text-brutalist-h1 ${bgStyles.titleClass}`}>{title}</h2>
        </div>

        <div className={`grid gap-6 ${gridCols}`}>
          {steps.map((item, index) => (
            <div
              key={index}
              className="border-4 border-black bg-white p-6 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
              style={{ boxShadow: bgStyles.shadow === '#CCFF00' ? '6px 6px 0 0 #CCFF00, 0 15px 40px rgba(204, 255, 0, 0.3)' : '6px 6px 0 0 #000000, 0 15px 40px rgba(0, 0, 0, 0.2)' }}
            >
              <span
                className={`mb-4 inline-block border-4 border-black px-3 py-1 text-lg font-black ${bgStyles.stepBadgeClass}`}
              >
                {item.step}
              </span>
              <h3 className="mb-3 text-lg font-black uppercase text-black">{item.title}</h3>
              <p className="text-sm font-bold text-black/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Generic content section - white background
 */
export function ServiceContentSection({
  label,
  title,
  children,
  centered = false,
}: {
  label?: string;
  title?: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section className="relative border-b-4 border-black bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6">
        {(label || title) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                {label}
              </p>
            )}
            {title && <h2 className="mb-8 text-brutalist-h1 text-black">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Black content section with diagonal pattern
 */
export function ServiceBlackSection({
  label,
  title,
  children,
  centered = false,
}: {
  label?: string;
  title?: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section className="relative border-y-4 border-black bg-black py-24 text-white lg:py-32">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
        }}
      ></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        {(label || title) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                {label}
              </p>
            )}
            {title && <h2 className="mb-8 text-brutalist-h1 text-white">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Accent (lime) content section
 */
export function ServiceAccentSection({
  label,
  title,
  children,
  centered = false,
}: {
  label?: string;
  title?: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <section className="relative border-b-4 border-black bg-accent py-24 lg:py-32">
      <div className="mx-auto max-w-screen-2xl px-6">
        {(label || title) && (
          <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
            {label && (
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-black/60 lg:text-lg">
                {label}
              </p>
            )}
            {title && <h2 className="mb-8 text-brutalist-h1 text-black">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

// =============================================================================
// HELPER COMPONENTS
// =============================================================================

export function ServiceParagraph({
  children,
  variant = 'default',
}: {
  children: React.ReactNode;
  variant?: 'default' | 'white';
}) {
  const colorClass = variant === 'white' ? 'text-white/90' : 'text-black/80';
  return (
    <p className={`mb-8 text-base font-bold lg:text-lg xl:text-xl ${colorClass}`}>{children}</p>
  );
}

export function ServiceLink({
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

/**
 * Pillar cards (used in SEO Strategie for Content/Techniek/Autoriteit)
 */
export function ServicePillarCards({
  pillars,
}: {
  pillars: Array<{ icon: LucideIcon; label: string }>;
}) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {pillars.map((pillar, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 border-4 border-accent bg-black p-6 text-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
          style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
        >
          <div className="flex h-12 w-12 items-center justify-center border-4 border-accent bg-accent text-black">
            <pillar.icon className="h-6 w-6" />
          </div>
          <span className="text-sm font-bold uppercase tracking-wider text-white lg:text-base">
            {pillar.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/**
 * CTA button for use within sections
 */
export function ServiceCTAButton({
  href = '/contact',
  children = 'NEEM CONTACT OP',
  variant = 'default',
}: {
  href?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'accent' | 'white';
}) {
  const buttonStyles = {
    default: 'text-base px-8 py-5',
    accent: 'bg-accent text-black border-accent hover:bg-white px-8 py-5 text-base',
    white: 'bg-white text-black border-white hover:bg-accent px-8 py-5 text-base',
  }[variant];

  return (
    <Button size="lg" asChild className={buttonStyles}>
      <Link href={href}>
        {children}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </Button>
  );
}
