import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Search, FileText, Link2 } from 'lucide-react';
import Link from 'next/link';
import './premium.css';

export default function PremiumTest() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-accent border-b-4 border-black py-6">
        <div className="mx-auto max-w-screen-2xl px-6">
          <p className="text-center text-xl font-black uppercase">
            Premium Test - 2 Verbeteringen
          </p>
          <p className="text-center text-sm font-bold text-black/60 mt-2">
            Glassmorphism geschrapt - strepen blijven!
          </p>
        </div>
      </div>

      {/* ============================================
          TEST 1: MULTI-LAYER SHADOWS (versterkt)
          ============================================ */}
      <section className="border-b-4 border-black bg-white py-20">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-12 border-l-4 border-accent pl-6">
            <p className="text-sm font-bold uppercase tracking-wider text-black/50">Test 1</p>
            <h2 className="text-brutalist-h2">Multi-layer Shadows</h2>
            <p className="mt-2 text-base font-bold text-black/70">
              Brutalist offset + zachte "zwevende" shadow eronder
            </p>
          </div>

          {/* Service Cards vergelijking */}
          <p className="mb-6 text-lg font-black uppercase text-black/40">Service Cards</p>
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            {/* OUD */}
            <div>
              <p className="mb-4 text-sm font-black uppercase text-red-600">Huidige</p>
              <Card className="shadow-old border-4 border-black bg-white">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent">
                    <Search className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-black uppercase">SEO Strategie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-bold text-black/70">
                    Alleen harde offset shadow - plat effect
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* NIEUW */}
            <div>
              <p className="mb-4 text-sm font-black uppercase text-green-600">Premium</p>
              <Card className="shadow-premium border-4 border-black bg-white">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center border-4 border-black bg-accent">
                    <Search className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-black uppercase">SEO Strategie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base font-bold text-black/70">
                    Offset + zachte glow - zweeft van de pagina
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats vergelijking */}
          <p className="mb-6 text-lg font-black uppercase text-black/40">Stats (lime shadow)</p>
          <div className="grid gap-12 md:grid-cols-2 mb-16">
            <div>
              <p className="mb-4 text-sm font-black uppercase text-red-600">Huidige</p>
              <div className="shadow-old-lime border-4 border-accent bg-black p-8 text-center">
                <p className="text-5xl font-bold text-accent">500+</p>
                <p className="text-sm font-bold uppercase text-white/70 mt-2">Artikelen</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-black uppercase text-green-600">Premium</p>
              <div className="shadow-premium-lime border-4 border-accent bg-black p-8 text-center">
                <p className="text-5xl font-bold text-accent">500+</p>
                <p className="text-sm font-bold uppercase text-white/70 mt-2">Artikelen</p>
              </div>
            </div>
          </div>

          {/* Case Cards vergelijking */}
          <p className="mb-6 text-lg font-black uppercase text-black/40">Case Cards (grote shadow)</p>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-black uppercase text-red-600">Huidige</p>
              <div className="border-4 border-black bg-white" style={{ boxShadow: '12px 12px 0 0 #000000, 0 25px 60px rgba(0, 0, 0, 0.3)' }}>
                <div className="aspect-video bg-black/10"></div>
                <div className="p-6">
                  <p className="text-lg font-black uppercase">Case Study Titel</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-4 text-sm font-black uppercase text-green-600">Premium</p>
              <div className="shadow-premium-lg border-4 border-black bg-white">
                <div className="aspect-video bg-black/10"></div>
                <div className="p-6">
                  <p className="text-lg font-black uppercase">Case Study Titel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TEST 2: SMOOTHER TRANSITIONS
          ============================================ */}
      <section className="border-b-4 border-black bg-black py-20 text-white">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="mb-12 border-l-4 border-accent pl-6">
            <p className="text-sm font-bold uppercase tracking-wider text-white/50">Test 2</p>
            <h2 className="text-brutalist-h2 text-white">Smoother Transitions</h2>
            <p className="mt-2 text-base font-bold text-white/70">
              HOVER over beide cards - voel het verschil
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* OUD */}
            <div>
              <p className="mb-4 text-sm font-black uppercase text-red-400">Huidige (0.15s)</p>
              <div className="transition-old shadow-old cursor-pointer border-4 border-white bg-black p-8">
                <p className="text-2xl font-black uppercase text-white">Hover mij</p>
                <p className="mt-4 text-base font-bold text-white/70">
                  Snelle, mechanische beweging
                </p>
              </div>
            </div>

            {/* NIEUW */}
            <div>
              <p className="mb-4 text-sm font-black uppercase text-green-400">Premium (0.4s cubic-bezier)</p>
              <div className="transition-premium shadow-premium cursor-pointer border-4 border-white bg-black p-8">
                <p className="text-2xl font-black uppercase text-white">Hover mij</p>
                <p className="mt-4 text-base font-bold text-white/70">
                  Vloeiende, organische beweging
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SAMENVATTING
          ============================================ */}
      <section className="bg-accent py-16">
        <div className="mx-auto max-w-screen-2xl px-6">
          <h2 className="mb-8 text-center text-brutalist-h2 text-black">
            Samenvatting
          </h2>

          <div className="mx-auto max-w-xl">
            <table className="w-full border-4 border-black bg-white">
              <thead>
                <tr className="border-b-4 border-black bg-black text-white">
                  <th className="p-4 text-left text-sm font-black uppercase">Wijziging</th>
                  <th className="p-4 text-center text-sm font-black uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-black/20">
                  <td className="p-4 font-bold">Multi-layer shadows</td>
                  <td className="p-4 text-center">Te beoordelen</td>
                </tr>
                <tr className="border-b-2 border-black/20">
                  <td className="p-4 font-bold">Smoother transitions</td>
                  <td className="p-4 text-center text-green-600 font-black">Goedgekeurd</td>
                </tr>
                <tr className="border-b-2 border-black/20 bg-black/5">
                  <td className="p-4 font-bold text-black/50 line-through">Glassmorphism nav</td>
                  <td className="p-4 text-center text-red-600 font-black">Geschrapt</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild className="bg-black text-white border-black hover:bg-white hover:text-black px-8 py-5">
              <Link href="/">
                Terug naar Homepage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
