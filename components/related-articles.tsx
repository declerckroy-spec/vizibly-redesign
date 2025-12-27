'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface RelatedArticle {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

interface RelatedArticlesProps {
  /** Array of related articles */
  articles: RelatedArticle[];
  /** Section heading */
  heading?: string;
  /** Maximum number of articles to show */
  maxArticles?: number;
}

export function RelatedArticles({
  articles,
  heading = 'Lees meer',
  maxArticles = 3,
}: RelatedArticlesProps) {
  const displayArticles = articles.slice(0, maxArticles);

  return (
    <section className="relative border-b-4 border-black bg-black py-24 lg:py-32">
      {/* Diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)',
        }}
      ></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <h2 className="mb-12 text-brutalist-h2 text-white">{heading}</h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayArticles.map((article, index) => (
            <Link key={index} href={`/${article.slug}`} className="group block">
              <Card
                className="overflow-hidden border-4 border-white transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:translate-x-1 hover:translate-y-1 hover:border-accent"
                style={{ boxShadow: '12px 12px 0 0 #CCFF00, 0 25px 60px rgba(204, 255, 0, 0.4)' }}
              >
                <div className="relative aspect-video overflow-hidden border-b-4 border-black bg-black">
                  <Image
                src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
                </div>
                <CardHeader className="bg-white">
                  <CardTitle className="line-clamp-2 text-lg font-black uppercase leading-tight lg:text-xl">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="bg-white">
                  <p className="mb-4 line-clamp-2 text-sm font-bold text-black/70">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center border-b-2 border-black px-2 py-1 pb-1 text-sm font-bold uppercase transition-colors group-hover:bg-black group-hover:text-white">
                    LEES ARTIKEL
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
