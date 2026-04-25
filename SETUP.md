# WansutFX - Quick Setup Guide

## Setup Cepat dalam 3 Langkah

### Step 1: Configure Telegram Link
Buka file `.env.local` dan ganti placeholder dengan link Telegram Anda yang sebenarnya:

```env
# SEBELUMNYA
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/yourforexcommunity

# SESUDAHNYA
NEXT_PUBLIC_TELEGRAM_LINK=https://t.me/nama_group_anda
```

### Step 2: Jalankan Server
```bash
pnpm dev
```

Buka http://localhost:3000 di browser Anda.

### Step 3: Deploy ke Vercel
```bash
vercel
```

Saat setup, tambahkan environment variable:
- **Name**: `NEXT_PUBLIC_TELEGRAM_LINK`
- **Value**: Link Telegram group/channel Anda

---

## Website Structure

Website WansutFX dibagi menjadi 7 section utama:

### 1. Header
- Fixed navigation di top
- WansutFX branding dengan logo
- Quick links ke Fitur, Paket, Tutorial
- Telegram join button

### 2. Hero Section
- Main heading: "Trade Seperti Pro dengan WansutFX"
- Subheading dengan value proposition
- CTA Buttons untuk Telegram dan View Products
- 3 Stats boxes: 500+ Traders, 95% Win Rate, 24/7 Support

### 3. Chart Showcase
- Menampilkan XAUUSD chart dari `/public/xauusd-chart.jpg`
- Info tentang currency pairs XAUUSD dan BTC
- Breakdown fitur untuk setiap pair

### 4. Features Section (NEW)
- 5 kategori fitur dengan detailed descriptions
- Smart Entry & Exit (Order Block, FVG, Auto Signals)
- Risk Management (Multi-TP, Auto SL, Liquidity Detection)
- Price Action (BoS, ChoCh, HHHLLHLL, dll)
- Advanced Levels (MTF, PDH/PDL, Fibonacci)
- Pattern Recognition (Harmonic, SBR, RBS)
- 4 key benefits di bottom

### 5. Products Section
- **1 Premium Package**: WansutFX
- **Price**: Rp 1.000.000 (Lifetime)
- **Badge**: PREMIUM
- **18 Features** listed dengan checkmarks
- CTA Button: "Beli Sekarang - Join Telegram"

### 6. Education Section
- 4 trading courses:
  1. Forex Basics - Fundamentals trading
  2. Technical Analysis - Chart patterns & indicators
  3. Risk Management - Position sizing & stop loss
  4. XAUUSD Strategy - Specialized XAUUSD trading

### 7. Footer
- Quick links
- Risk disclaimer
- Copyright info
- Telegram link

---

## Customization Checklist

Sebelum go live, pastikan Anda sudah:

- [ ] Update `.env.local` dengan Telegram link yang benar
- [ ] Update harga jika berbeda dari Rp 1.000.000
- [ ] Customize fitur list sesuai actual WansutFX features
- [ ] Update course content di Education section
- [ ] Replace `/public/xauusd-chart.jpg` dengan chart actual Anda
- [ ] Replace `/public/trading-bg.jpg` atau generate baru
- [ ] Review risk disclaimer di footer sesuai region Anda
- [ ] Test semua Telegram buttons bekerja dengan benar
- [ ] Mobile test di berbagai devices

---

## Theme Colors

Website menggunakan profesional dark theme:
- **Primary**: Gold (#d4af37) - Untuk headings dan accents
- **Secondary**: Cyan (#00d9ff) - Untuk highlights
- **Background**: Dark Navy (#0a0e27, #1a1f3a)
- **Text**: Light Gray untuk readability

Untuk mengubah warna, edit:
- `app/globals.css` (CSS variables section)
- Tailwind color classes di components (yellow-500, cyan-400, dll)

---

## Important Notes

⚠️ **Telegram Integration**
- Pastikan `NEXT_PUBLIC_TELEGRAM_LINK` di-set dengan benar
- Ini adalah variable `NEXT_PUBLIC` jadi akan visible di client-side (itu ok, itu public link)
- Test semua buttons mengarah ke Telegram yang benar

⚠️ **Risk Disclaimer**
- Footer berisi standard forex risk disclaimer
- Pastikan comply dengan regulations di region Anda
- Edit di `components/Footer.tsx` jika perlu customisasi

⚠️ **Chart Image**
- Chart saat ini adalah screenshot XAUUSD static
- Jika ingin live chart, bisa integrate TradingView widget (butuh upgrade)
- Untuk upgrade, edit `components/ChartShowcase.tsx`

---

## Deployment Checklist

### Pre-Deployment
- [ ] Test locally dengan `pnpm dev`
- [ ] Check semua links bekerja
- [ ] Test responsiveness di mobile
- [ ] Verify Telegram link in all CTA buttons
- [ ] Check loading times

### Deploy to Vercel (Recommended)
```bash
vercel
```
- Sign in dengan GitHub/Vercel account
- Select project folder
- Set environment variable `NEXT_PUBLIC_TELEGRAM_LINK`
- Deploy! 🚀

### Other Platforms
Website ini bisa di-deploy ke:
- **Netlify** - `netlify deploy`
- **Railway** - railway link
- **Render** - render.com
- **AWS Amplify** - aws console
- **Docker** - docker build & push

---

## Support & Issues

**Q: Website tidak load?**
A: Check console logs, pastikan dependencies sudah di-install: `pnpm install`

**Q: Telegram buttons tidak bekerja?**
A: Pastikan env variable `NEXT_PUBLIC_TELEGRAM_LINK` sudah di-set di `.env.local`

**Q: Mau ganti warna?**
A: Edit `app/globals.css` untuk CSS variables, atau update Tailwind classes di components

**Q: Mau tambah fitur?**
A: Edit component files, atau contact development team untuk custom features

---

## Next Steps

1. ✅ Setup telegram link
2. ✅ Test website locally
3. ✅ Deploy to Vercel
4. ✅ Share link di social media
5. ✅ Monitor conversion dari website ke Telegram

Good luck dengan penjualan WansutFX! 🎉
