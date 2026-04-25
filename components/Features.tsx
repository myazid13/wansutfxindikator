'use client';

export default function Features() {
  const featureCategories = [
    {
      title: 'Struktur Pasar Otomatis',
      icon: '🏗️',
      features: [
        {
          name: 'Break of Structure (BoS)',
          description: 'Menandai BoS secara otomatis untuk menentukan perubahan tren'
        },
        {
          name: 'Change of Character (ChoCh)',
          description: 'Deteksi ChoCh untuk identifikasi shift perubahan karakter market'
        },
        {
          name: 'ZigZag & HH/LL Labels',
          description: 'Menampilkan Higher High (HH), Higher Low (HL), Lower High (LH), Lower Low (LL)'
        },
        {
          name: 'Current Structure Tracking',
          description: 'Garis dinamis memantau struktur harga real-time'
        }
      ]
    },
    {
      title: 'SMC & ICT Advanced',
      icon: '💡',
      features: [
        {
          name: 'Order Blocks (OB) & POI',
          description: 'Deteksi Supply & Demand dengan fitur POI Confluence'
        },
        {
          name: 'FVG Scalping Premium',
          description: 'Fair Value Gap dengan auto-mitigation saat harga menutup gap'
        },
        {
          name: 'HTF FVG (Multi-Timeframe)',
          description: 'Tampilkan FVG dari timeframe lebih tinggi di chart current'
        },
        {
          name: 'ICT Killzones',
          description: 'Asian, London, dan New York Killzone sessions dengan blok warna'
        },
        {
          name: 'Midnight NY Open',
          description: 'Garis harga pembukaan tengah malam waktu New York'
        }
      ]
    },
    {
      title: 'Entry & Konfirmasi (OTE)',
      icon: '🎯',
      features: [
        {
          name: 'ICT OTE 70.5%',
          description: 'Fibonacci otomatis di level 70.5% untuk optimal trade entry'
        },
        {
          name: 'Fast Scalp Fibo',
          description: 'Fibonacci cepat mencari pantulan di level OTE secara instan'
        },
        {
          name: 'Quasimodo (QM) Pattern',
          description: 'Deteksi pola QM untuk pembalikan arah harga yang tajam'
        },
        {
          name: 'Market Structure Shift (MSS)',
          description: 'Identifikasi perubahan struktur pasar untuk sinyal reversal'
        }
      ]
    },
    {
      title: 'Sinyal & Risk Management',
      icon: '⚡',
      features: [
        {
          name: 'Technozid Signals',
          description: 'BUY, SELL, STRONG BUY, STRONG SELL berdasarkan tren & Engulfing'
        },
        {
          name: 'SL/TP Visual Automation',
          description: '3 tingkatan TP (TP1, TP2, TP3 Max) dengan SL otomatis di chart'
        },
        {
          name: 'Momentum Candle V2',
          description: 'Deteksi Big Candle dengan volume dan body besar (Smart Money move)'
        },
        {
          name: 'Trend Confirmation',
          description: 'Filter EMA 200 & Smart Volume untuk sinyal searah tren utama'
        }
      ]
    },
    {
      title: 'Likuiditas & Analisis Pola',
      icon: '💧',
      features: [
        {
          name: 'Liquidity Run (BSL/SSL)',
          description: 'Deteksi Buy Side & Sell Side likuiditas yang akan disapu'
        },
        {
          name: 'Sweep Hunter',
          description: 'Identifikasi manipulasi harga (liquidity sweep) dan reversal cepat'
        },
        {
          name: 'Power of 3 (AMD)',
          description: 'Zona Accumulation, Manipulation, Distribution khusus M15'
        },
        {
          name: 'Auto Harmonic Scanner',
          description: 'Deteksi otomatis Gartley, Bat, Butterfly, Crab, Cypher + PRZ'
        }
      ]
    },
    {
      title: 'Tools & Advanced Analytics',
      icon: '📊',
      features: [
        {
          name: 'Dashboard Statistik Real-time',
          description: 'Pantau Win Rate, jumlah hit TP/SL secara real-time'
        },
        {
          name: 'Smart Filter Engine',
          description: 'Filter multiple timeframe untuk sinyal berkualitas tinggi'
        },
        {
          name: 'RSI Divergence Detection',
          description: 'Deteksi divergence antara harga dan momentum untuk reversal'
        },
        {
          name: 'Multi-Level Confluence',
          description: 'Validasi otomatis sinyal saat terjadi di area penting'
        }
      ]
    },
    {
      title: 'Advanced Features',
      icon: '🔧',
      features: [
        {
          name: 'PDH/PDL/PWH/PWL Levels',
          description: 'Pivot Daily High/Low & Weekly High/Low untuk support/resistance'
        },
        {
          name: 'Fibonacci Retracement',
          description: 'Level Fibonacci otomatis di setiap structure swing'
        },
        {
          name: 'HHHLLHLL Pattern Recognition',
          description: 'Identifikasi Higher High Lower Low patterns otomatis'
        },
        {
          name: 'Lifetime Updates & Support',
          description: 'Akses penuh ke semua update fitur tanpa biaya tambahan'
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Fitur-Fitur WansutFX</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Lengkap dengan teknologi terkini untuk trading profesional
          </p>
        </div>

        {/* Feature categories grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCategories.map((category, idx) => (
            <div key={idx} className="card-hover rounded-xl p-6 bg-slate-800/50 border border-gray-700">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">{category.title}</h3>
              <ul className="space-y-4">
                {category.features.map((feature, fIdx) => (
                  <div key={fIdx}>
                    <p className="font-semibold text-white text-sm">{feature.name}</p>
                    <p className="text-gray-400 text-xs mt-1">{feature.description}</p>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key benefits */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-slate-900 border border-yellow-500/30">
            <h4 className="text-lg font-bold mb-3 text-yellow-400">✓ Akurat & Reliable</h4>
            <p className="text-gray-300">Backtested hingga 99% untuk memastikan sinyal berkualitas tinggi</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/30">
            <h4 className="text-lg font-bold mb-3 text-cyan-400">⚡ Real-time Alerts</h4>
            <p className="text-gray-300">Notifikasi instan untuk setiap sinyal trading yang terdeteksi</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-slate-900 border border-yellow-500/30">
            <h4 className="text-lg font-bold mb-3 text-yellow-400">🎓 Lifetime Updates</h4>
            <p className="text-gray-300">Update berkala dan improvement fitur selamanya tanpa biaya tambahan</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-cyan-500/10 to-slate-900 border border-cyan-500/30">
            <h4 className="text-lg font-bold mb-3 text-cyan-400">👥 Community Support</h4>
            <p className="text-gray-300">Akses penuh ke komunitas untuk berbagi strategi dan tips trading</p>
          </div>
        </div>
      </div>
    </section>
  );
}
