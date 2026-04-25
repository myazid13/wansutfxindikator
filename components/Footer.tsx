'use client';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/yourforexcommunity';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-yellow-500/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center font-bold text-gray-900">
                FX
              </div>
              <span className="text-lg font-bold text-yellow-400">ForexMaster</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional forex trading indicators and education for serious traders.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#products" className="hover:text-yellow-400 transition-colors">
                  Basic Indicator
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-yellow-400 transition-colors">
                  Pro Indicator
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-yellow-400 transition-colors">
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#features" className="hover:text-yellow-400 transition-colors">
                  Trading Indicators
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-yellow-400 transition-colors">
                  Trading Courses
                </a>
              </li>
              <li>
                <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram text-white font-bold py-2.5 px-6 rounded-lg inline-flex items-center gap-2 text-sm w-full justify-center"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.82-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295-.39 0-.32-.147-.451-.52l-1.443-4.716m6.89-10.117c-.16 0-.32.073-.473.22l-10.064 9.463c-.22.206-.295.513-.188.82.11.31.386.495.715.495l2.384.017 5.828-7.38c.178-.225.45-.28.67-.126.22.153.256.45.08.664l-4.77 7.056 2.18.018c.37 0 .665-.207.747-.546l1.945-9.165c.116-.504.528-.854 1.036-.854.295 0 .566.112.747.336l6.778 6.778c.147.147.22.368.22.566 0 .198-.073.42-.22.566l-2.24 2.24c-.295.295-.77.295-1.064 0l-3.18-3.18c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.462 1.462c-.294.295-.77.295-1.063 0l-1.462-1.462c-.147-.147-.368-.22-.566-.22-.198 0-.42.073-.566.22l-1.463 1.463c-.294.295-.77.295-1.063 0l-1.462-1.462c-.294-.295-.77-.295-1.064 0l-1.463 1.463c-.295.294-.77.294-1.064 0l-2.24-2.24c-.294-.295-.294-.77 0-1.064l6.778-6.778c.18-.224.452-.336.747-.336z" />
              </svg>
              Telegram
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent mb-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 ForexMaster. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg text-xs text-gray-400">
          <p>
            <strong>Risk Disclaimer:</strong> Trading forex involves substantial risk of loss. Past performance does not guarantee future results. 
            All trading decisions should be made carefully and with proper risk management. Our indicators are tools to assist trading decisions, 
            not guarantees of profitability.
          </p>
        </div>
      </div>
    </footer>
  );
}
