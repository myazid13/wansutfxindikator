"use client";

const TELEGRAM_LINK =
  process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/yourforexcommunity";

const products = [
  {
    id: 1,
    name: "WansutFX Pro",
    price: "Rp 1.000.000",
    description:
      "Technozid Ultimate + WansutFX Pro - All-in-One Trading System berbasis SMC & ICT",
    features: [
      "🏗️ Struktur Pasar: BoS, ChoCh, ZigZag, HH/LL Automation",
      "💡 SMC & ICT Advanced: Order Block, POI Confluence, FVG Scalping",
      "📊 HTF FVG Multi-Timeframe + ICT Killzones (Asian, London, NY)",
      "🎯 OTE Entry System: Fibonacci 70.5% + Fast Scalp Fibo",
      "⚡ Technozid Signals: BUY, SELL, STRONG BUY, STRONG SELL",
      "🛡️ Auto SL/TP: 3 Tingkatan TP Profit + Stop Loss Otomatis",
      "💧 Liquidity Analysis: Sweep Hunter, BSL/SSL Detection",
      "🔍 Harmonic Scanner: Gartley, Butterfly, Bat, Crab, Cypher + PRZ",
      "📈 Power of 3: AMD Special Zones (Scalping M15)",
      "🎨 Dashboard Statistik Real-time: Win Rate & Performance Tracking",
      "🔧 Momentum Candle V2 + RSI Divergence Detection",
      "✓ Multi-Level Confluence: Validasi Otomatis Signal",
      "✓ Lifetime Updates & Support 24/7",
      "✓ Community Access & Strategy Sharing",
      "✓ Backtested 99% Accuracy",
    ],
    popular: true,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Paket WansutFX Pro</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Sistem Trading All-in-One dengan 30+ Fitur Advanced berbasis SMC &
            ICT
          </p>
        </div>

        {/* Products grid */}
        <div className="flex justify-center max-w-2xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl p-8 transition-all duration-300 card-hover border-2 border-yellow-500 bg-gradient-to-br from-yellow-500/10 via-slate-900 to-slate-900 w-full max-w-xl"
            >
              {/* Premium badge */}
              {product.popular && (
                <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  PREMIUM
                </div>
              )}

              {/* Product name */}
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-400 mb-6 text-sm">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-5xl font-bold gradient-text">
                  {product.price}
                </span>
                <span className="text-gray-400 ml-2 text-lg">
                  Selamanya (Lifetime)
                </span>
              </div>

              {/* Features list */}
              <ul className="space-y-4 mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold mt-1">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold text-base"
              >
                Beli Sekarang
              </a>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">
            Sekali beli, selamanya akses. Dapatkan akses penuh ke WansutFX dan
            bergabung dengan ribuan trader sukses.
          </p>
          <p className="text-sm text-gray-500">
            Pertanyaan?{" "}
            <span className="text-yellow-400">Join Telegram kami</span> untuk
            konsultasi langsung dengan tim
          </p>
        </div>
      </div>
    </section>
  );
}
