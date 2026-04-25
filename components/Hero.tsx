"use client";

const TELEGRAM_LINK =
  process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/yourforexcommunity";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url(/trading-bg.jpg)" }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-900"></div>

      {/* Animated elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 fade-in">
        {/* Badge */}
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-semibold">
            ⚡ Indikator Trading Premium Professional
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Trade Seperti Pro dengan
          <span className="block gradient-text mt-2">WansutFX</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Indikator canggih dengan Order Block, FVG, Harmonic Pattern, dan fitur
          otomatis untuk trading XAUUSD dan BTC dengan presisi tinggi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram text-white font-bold py-4 px-10 rounded-lg inline-flex items-center justify-center gap-3 hover:shadow-xl transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.39 0-.32-.147-.451-.52l-1.443-4.716m6.89-10.117c-.16 0-.32.073-.473.22l-10.064 9.463c-.22.206-.295.513-.188.82.11.31.386.495.715.495l2.384.017 5.828-7.38c.178-.225.45-.28.67-.126.22.153.256.45.08.664l-4.77 7.056 2.18.018c.37 0 .665-.207.747-.546l1.945-9.165c.116-.504.528-.854 1.036-.854.295 0 .566.112.747.336l6.778 6.778c.147.147.22.368.22.566 0 .198-.073.42-.22.566l-2.24 2.24c-.295.295-.77.295-1.064 0l-3.18-3.18c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.462 1.462c-.294.295-.77.295-1.063 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.294-.295-.77-.295-1.064 0l-1.463 1.463c-.295.294-.77.294-1.064 0l-2.24-2.24c-.294-.295-.294-.77 0-1.064l6.778-6.778c.18-.224.452-.336.747-.336z" />
            </svg>
            Join Community on Telegram
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
          <div className="p-4 rounded-lg bg-white/5 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <p className="text-gray-400 text-sm mt-1">Traders</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400">93%</div>
            <p className="text-gray-400 text-sm mt-1">Win Rate</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-yellow-500/20">
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <p className="text-gray-400 text-sm mt-1">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
