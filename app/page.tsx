import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ChartShowcase from '@/components/ChartShowcase';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'WansutFX - Premium Forex Indicator Professional Trading',
  description: 'WansutFX - Indikator trading profesional dengan Order Block, FVG, Harmonic Pattern untuk XAUUSD dan BTC. Lifetime access Rp 1.000.000',
  keywords: 'WansutFX, forex indicator, XAUUSD, BTC, order block, FVG, harmonic pattern, trading signals',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <Hero />
      <ChartShowcase />
      <Features />
      <Products />
      <Education />
      <Footer />
    </main>
  );
}
