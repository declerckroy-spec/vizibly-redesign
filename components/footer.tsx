import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, navLinks } from '@/lib/config';

export function Footer() {
  return (
    <footer className="relative bg-black py-16 text-white">
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 30px)'
      }}></div>

      <div className="relative mx-auto max-w-screen-2xl px-6">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-6 block">
              <Image
                src="/logo-brutalist-white.svg"
                alt="Vizibly Logo"
                width={200}
                height={50}
                className="h-auto w-48"
              />
            </Link>
            <p className="text-base font-bold text-white/80 lg:text-lg">
              {siteConfig.tagline}
            </p>
          </div>
          <div>
            <h4 className="mb-6 border-b-2 border-accent pb-2 text-xl font-black uppercase">Diensten</h4>
            <ul className="space-y-4">
              {navLinks.diensten.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base font-bold text-white/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
