'use client';

import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { FinalCTA } from '@/components/final-cta';
import { RelatedArticles, RelatedArticle } from '@/components/related-articles';
import { ArrowLeft, Clock, User } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface BlogArticleLayoutProps {
  /** Article title (h1) */
  title: string;
  /** Category label above title */
  category: string;
  /** Author name */
  author?: string;
  /** Reading time text (e.g., "7 min leestijd") */
  readingTime?: string;
  /** Featured image path */
  featuredImage: string;
  /** Featured image alt text */
  featuredImageAlt: string;
  /** Main article content */
  children: React.ReactNode;
  /** Related articles for bottom section */
  relatedArticles?: RelatedArticle[];
  /** Custom CTA heading */
  ctaHeading?: string;
  /** Custom CTA description */
  ctaDescription?: string;
}

export function BlogArticleLayout({
  title,
  category,
  author = 'Roy de Clerck',
  readingTime,
  featuredImage,
  featuredImageAlt,
  children,
  relatedArticles,
  ctaHeading = 'Klaar om te groeien?',
  ctaDescription = 'Neem contact op voor een vrijblijvend gesprek over jouw SEO-mogelijkheden.',
}: BlogArticleLayoutProps) {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black pt-32 pb-16 lg:pt-40 lg:pb-20">
        {/* Diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
          }}
        ></div>

        <div className="relative mx-auto max-w-screen-2xl px-6">
          {/* Back link */}
          <Link
            href="/vizie"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/60 transition-colors hover:text-accent lg:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            TERUG NAAR VIZIE
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              {/* Category label */}
              <p className="mb-6 text-base font-bold uppercase tracking-wider text-accent lg:text-lg">
                {category}
              </p>

              {/* Title */}
              <h1 className="mb-8 text-brutalist-h1 text-white leading-tight">
                {title}
              </h1>

              {/* Accent line */}
              <div className="h-1 w-32 bg-accent mb-8"></div>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-white/60 lg:text-base">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author}</span>
                </div>
                {readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{readingTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Featured image */}
            <div
              className="relative aspect-[4/3] overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
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
      <article className="relative border-b-4 border-black bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          {children}
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <RelatedArticles articles={relatedArticles} />
      )}

      {/* Final CTA */}
      <FinalCTA
        heading={ctaHeading}
        description={ctaDescription}
      />

      <Footer />
    </>
  );
}

// Helper components for consistent content styling
export function ArticleIntro({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-12 text-lg font-bold text-black lg:text-xl xl:text-2xl leading-relaxed">
      {children}
    </p>
  );
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-brutalist-h2 text-black border-l-4 border-accent pl-6">
      {children}
    </h2>
  );
}

export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-4 text-brutalist-h3 text-black">
      {children}
    </h3>
  );
}

export function ArticleParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 text-base font-bold text-black/80 lg:text-lg">
      {children}
    </p>
  );
}

export function ArticleList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-6 space-y-3 pl-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3 text-base font-bold text-black/80 lg:text-lg">
          <span className="mt-2 h-2 w-2 flex-shrink-0 bg-accent"></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ArticleImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="mb-12">
      <div
        className="relative aspect-video overflow-hidden border-4 border-black transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ boxShadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)' }}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm font-bold text-black/60">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function ArticleCTABox({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="mb-12 border-4 border-black bg-black p-8 lg:p-10 text-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}
    >
      <h2 className="mb-6 text-brutalist-h3 text-white">{heading}</h2>
      {children}
    </div>
  );
}

export function ArticleHighlightBox({
  children,
  variant = 'lime',
}: {
  children: React.ReactNode;
  variant?: 'lime' | 'black';
}) {
  const styles = {
    lime: {
      className: 'border-4 border-black bg-accent p-6 lg:p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      shadow: '8px 8px 0 0 #000000, 0 20px 50px rgba(0, 0, 0, 0.25)',
    },
    black: {
      className: 'border-4 border-black bg-black p-6 lg:p-8 text-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
      shadow: '8px 8px 0 0 #CCFF00, 0 20px 50px rgba(204, 255, 0, 0.35)',
    },
  }[variant];

  return (
    <div className={`mb-10 ${styles.className}`} style={{ boxShadow: styles.shadow }}>
      {children}
    </div>
  );
}

export function ArticleLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className = "text-black underline decoration-accent decoration-4 hover:bg-accent transition-colors";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
