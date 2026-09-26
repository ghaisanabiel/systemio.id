# Systemio.id

Website agency Systemio.id, dibangun pakai Next.js. Landing page satu halaman: Home, What We Make, Portofolio, About. Semua ajakan konsultasi langsung diarahkan ke WhatsApp, tanpa chat AI di websitenya.

## Jalanin di komputer sendiri

1. Install dependency:
   ```
   npm install
   ```
2. Ganti `WA_NUMBER` di `pages/index.js` (baris paling atas) dengan nomor WhatsApp asli kamu
3. Jalankan:
   ```
   npm run dev
   ```
4. Buka `http://localhost:3000`

## Deploy ke Vercel

1. Push folder ini ke repo GitHub
2. Buka vercel.com, import repo itu
3. Deploy, tanpa environment variable tambahan

## Struktur

* `pages/index.js` — seluruh landing page
* `styles/globals.css` — semua styling dan animasi
