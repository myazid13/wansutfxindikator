'use client';

const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK || 'https://t.me/yourforexcommunity';

const courses = [
  {
    id: 1,
    title: 'Forex Basics for Beginners',
    description: 'Learn the fundamentals of forex trading and how markets work',
    topics: ['Currency Pairs', 'Pips & Spreads', 'Leverage', 'Market Hours'],
    icon: '📚',
  },
  {
    id: 2,
    title: 'Technical Analysis Mastery',
    description: 'Master chart patterns, indicators, and price action strategies',
    topics: ['Candlesticks', 'Indicators', 'Trendlines', 'Support & Resistance'],
    icon: '📈',
  },
  {
    id: 3,
    title: 'Risk Management Pro',
    description: 'Protect your capital with proven risk management techniques',
    topics: ['Position Sizing', 'Stop Loss', 'Take Profit', 'Money Management'],
    icon: '🛡️',
  },
  {
    id: 4,
    title: 'XAUUSD Trading Strategy',
    description: 'Specialized strategies for gold trading in forex markets',
    topics: ['Gold Fundamentals', 'Market Drivers', 'Entry Signals', 'Exit Rules'],
    icon: '🥇',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Trading Education</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive courses to turn you into a successful trader
          </p>
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-900/80 border border-gray-700 rounded-xl p-8 card-hover group"
            >
              <div className="text-5xl mb-4">{course.icon}</div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-400 mb-6">{course.description}</p>

              {/* Topics */}
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-3">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors flex items-center gap-2">
                Learn More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Benefits section */}
        <div className="bg-gradient-to-r from-yellow-500/10 via-slate-900 to-cyan-500/10 border border-yellow-500/20 rounded-2xl p-12 glow-box">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Why Join Our Community?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🎯</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Proven Trading System</h4>
                <p className="text-gray-400">
                  Learn from experienced traders who have consistently profitable track records
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">💬</span>
              <div>
                <h4 className="font-bold text-lg mb-2">24/7 Community Support</h4>
                <p className="text-gray-400">
                  Get help and share ideas with 500+ active traders in our Telegram group
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">📱</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Mobile Alerts</h4>
                <p className="text-gray-400">
                  Receive instant notifications on your phone when trading signals appear
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="text-2xl flex-shrink-0">🚀</span>
              <div>
                <h4 className="font-bold text-lg mb-2">Continuous Updates</h4>
                <p className="text-gray-400">
                  Stay ahead with regular training videos, webinars, and market analysis
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Ready to transform your trading skills?
          </p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base inline-block"
          >
            Start Learning Today
          </a>
        </div>
      </div>
    </section>
  );
}
