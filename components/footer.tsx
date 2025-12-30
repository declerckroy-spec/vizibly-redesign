import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { siteConfig, navLinks } from '@/lib/config';

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] py-20 text-white">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
      }}></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <Image
                src="/logo-brutalist-white.svg"
                alt="Vizibly Logo"
                width={200}
                height={50}
                className="h-auto w-48"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABkRAAIDAQAAAAAAAAAAAAAAAAECAAMRIf/aAAwDAQACEQMRAD8AyGLUbiC7gu45mS4hkWWKRejIwypH4QQKKKKlYlmJPoP/2Q=="
              />
            </Link>
            <p className="text-base font-bold text-white/80 lg:text-lg">
              {siteConfig.tagline}
            </p>

            {/* Google Reviews */}
            <a
              href={siteConfig.googleReviews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
              aria-label="5 uit 5 sterren op Google"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-1 text-sm font-bold text-white/60">
                5/5 op Google
              </span>
            </a>
          </div>

          {/* Diensten */}
          <div>
            <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Diensten</h4>
            <ul className="space-y-4">
              {navLinks.hoofdDiensten.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-accent hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {navLinks.seoDiensten.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokaal & Niches */}
          <div>
            <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Branches</h4>
            <ul className="space-y-4">
              {navLinks.niches.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              {navLinks.lokaal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Bedrijf</h4>
            <ul className="space-y-4">
              {navLinks.bedrijf.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Contact</h4>
            <ul className="space-y-4 text-base font-bold text-white/80">
              <li>{siteConfig.name}</li>
              <li>{siteConfig.address.street}</li>
              <li>{siteConfig.address.postal} {siteConfig.address.city}</li>
              <li>
                <a href={siteConfig.phone.href} className="hover:text-accent transition-colors">
                  {siteConfig.phone.raw}
                </a>
              </li>
              <li>
                <a href={siteConfig.email.href} className="hover:text-accent transition-colors">
                  {siteConfig.email.address}
                </a>
              </li>
              <li>KvK: {siteConfig.kvk}</li>
            </ul>
          </div>
        </div>
        <div className="border-t-4 border-white/20 pt-8 text-center">
          <p className="text-base font-bold uppercase text-white/60">&copy; {new Date().getFullYear()} {siteConfig.name.toUpperCase()}. ALLE RECHTEN VOORBEHOUDEN.</p>
        </div>
      </div>
    </footer>
  );
}
