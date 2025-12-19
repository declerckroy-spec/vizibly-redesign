import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vizibly.nl'),
  title: {
    default: "Vizibly: jouw SEO specialist",
    template: "%s"
  },
  description: "Meer omzet uit zoekmachines met bewezen SEO strategieën. 7+ jaar ervaring, 25+ klanten laten groeien, +120% gemiddelde traffic groei. Plan je groeigesprek.",
  keywords: ["SEO bureau", "SEO specialist", "zoekmachine optimalisatie", "Google ranking", "SEO strategie", "linkbuilding", "SEO teksten", "local SEO", "technische SEO"],
  authors: [{ name: "Roy de Clerck" }],
  creator: "Vizibly",
  publisher: "Vizibly",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://vizibly.nl',
    siteName: 'Vizibly',
    title: 'Vizibly - SEO Bureau dat Groei Levert',
    description: 'Meer omzet uit zoekmachines met bewezen SEO strategieën. 7+ jaar ervaring, 25+ klanten laten groeien.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vizibly SEO Bureau',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vizibly - SEO Bureau dat Groei Levert',
    description: 'Meer omzet uit zoekmachines met bewezen SEO strategieën. 7+ jaar ervaring, 25+ klanten laten groeien.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://vizibly.nl',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
