# Systemio.id

Website agency Systemio.id, dibangun pakai Next.js. Halaman utama berisi landing page (Home, What We Make, Portofolio, Tentang) dan halaman "Pesan Website" berisi chat AI yang terhubung ke Claude.

## Jalanin di komputer sendiri

1. Install dependency:
   ```
   npm install
   ```
2. Copy file `.env.local.example` jadi `.env.local`, lalu isi `ANTHROPIC_API_KEY` dengan key asli dari console.anthropic.com
3. Jalankan:
   ```
   npm run dev
   ```
4. Buka `http://localhost:3000`

## Sebelum dipakai beneran

- Ganti `WA_NUMBER` di `pages/index.js` (baris paling atas) dengan nomor WhatsApp asli kamu
- Isi `ANTHROPIC_API_KEY` di environment variable (jangan pernah taruh key langsung di kode)
- Opsional, isi `DISCORD_WEBHOOK_URL` biar tiap rekap yang udah dikonfirmasi klien otomatis kekirim ke channel Discord kamu. Kalau tidak diisi, fitur ini otomatis dilewati tanpa error.

Soal WhatsApp: karena WhatsApp tidak menyediakan cara gratis untuk kirim pesan otomatis dari server, tombol "Kirim ke WhatsApp" tetap perlu satu klik dari pengunjung untuk mengirim pesannya sendiri lewat aplikasi WA mereka. Kalau nanti mau kirim otomatis penuh tanpa klik dari pengunjung, itu butuh WhatsApp Business API (berbayar, perlu approval Meta).

## Deploy ke Vercel

1. Push folder ini ke repo GitHub
2. Buka vercel.com, import repo itu
3. Di pengaturan project Vercel, tambahkan environment variable `ANTHROPIC_API_KEY` dengan key asli kamu
4. Deploy

## Struktur

- `pages/index.js` — seluruh landing page dan halaman Pesan Website
- `pages/api/chat.js` — server route yang manggil Claude API, di sinilah instruksi AI (system prompt) diatur
- `styles/globals.css` — semua styling dan animasi