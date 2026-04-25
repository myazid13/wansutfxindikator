"use client";

import Link from "next/link";

const TELEGRAM_LINK =
  process.env.NEXT_PUBLIC_TELEGRAM_LINK || "https://t.me/yourforexcommunity";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-b from-slate-900 via-slate-900 to-transparent z-50 backdrop-blur-sm border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-gray-900 text-xs">
            W
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-cyan-400">
            WansutFX
          </span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
          >
            Fitur
          </Link>
          <Link
            href="#products"
            className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
          >
            Pembelian
          </Link>
          <Link
            href="#education"
            className="text-gray-300 hover:text-yellow-400 transition-colors text-sm"
          >
            Edukasi
          </Link>
        </nav>

        {/* CTA Button */}
        <a
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-telegram text-white font-bold py-2.5 px-6 rounded-lg inline-flex items-center gap-2 text-sm"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.39 0-.32-.147-.451-.52l-1.443-4.716m6.89-10.117c-.16 0-.32.073-.473.22l-10.064 9.463c-.22.206-.295.513-.188.82.11.31.386.495.715.495l2.384.017 5.828-7.38c.178-.225.45-.28.67-.126.22.153.256.45.08.664l-4.77 7.056 2.18.018c.37 0 .665-.207.747-.546l1.945-9.165c.116-.504.528-.854 1.036-.854.295 0 .566.112.747.336l6.778 6.778c.147.147.22.368.22.566 0 .198-.073.42-.22.566l-2.24 2.24c-.295.295-.77.295-1.064 0l-3.18-3.18c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.462 1.462c-.295.295-.77.295-1.064 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.294-.295-.77-.295-1.064 0l-1.463 1.463c-.295.294-.77.294-1.064 0l-2.24-2.24c-.294-.295-.294-.77 0-1.064l6.778-6.778c.18-.224.452-.336.747-.336z" />
          </svg>
          Join Telegram
        </a>
      </div>
    </header>
  );
}
