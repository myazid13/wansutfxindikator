"use client";

import Image from "next/image";

export default function ChartShowcase() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Tampilan Trading Indicators</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See our professional indicators in action on XAUUSD charts
          </p>
        </div>

        {/* Chart container */}
        <div className="relative rounded-2xl overflow-hidden glow-box mb-12">
          <div className="bg-slate-800 p-4">
            <Image
              src="/xauusd-chart.jpg"
              alt="XAUUSD Trading Chart with Professional Indicators"
              width={1200}
              height={600}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Key features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-900/80 border border-yellow-500/30 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Accurate Signals</h3>
            <p className="text-gray-400">
              Get precise entry and exit signals with 95% accuracy rate on
              XAUUSD and BTC pairs
            </p>
          </div>

          <div className="bg-slate-900/80 border border-yellow-500/30 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time Alerts</h3>
            <p className="text-gray-400">
              Receive instant notifications on your phone when trading
              opportunities appear
            </p>
          </div>

          <div className="bg-slate-900/80 border border-yellow-500/30 rounded-xl p-6 card-hover">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Complete Education</h3>
            <p className="text-gray-400">
              Learn trading strategies from experienced professionals in our VIP
              community
            </p>
          </div>
        </div>

        {/* Trading pairs section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-yellow-500/10 to-slate-900 border border-yellow-500/30 rounded-xl p-8">
            <div className="text-4xl mb-4">🥇</div>
            <h3 className="text-2xl font-bold mb-3">XAUUSD Trading</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Daily signal analysis
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Technical level
                tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Risk management
                guides
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-400">✓</span> Market sentiment
                analysis
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/30 rounded-xl p-8">
            <div className="text-4xl mb-4">₿</div>
            <h3 className="text-2xl font-bold mb-3">Bitcoin (BTC) Trading</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Crypto pair signals
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Volatility tracking
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Support & resistance
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span> Momentum indicators
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
