// Kirim rekap yang udah dikonfirmasi klien langsung ke channel Discord kamu.
// Butuh DISCORD_WEBHOOK_URL di environment variable (lihat README).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    // Belum diset, diamkan saja biar tidak ganggu pengalaman klien di chat.
    return res.status(200).json({ skipped: true });
  }

  const s = req.body || {};

  const content =
    '**Lead baru dari Pesan Website**\n' +
    `Jenis usaha: ${s.bisnis || '-'}\n` +
    `Tujuan dan target: ${s.tujuan || '-'}\n` +
    `Halaman yang dibutuhkan: ${s.halaman || '-'}\n` +
    `Materi yang sudah ada: ${s.materi || '-'}\n` +
    `Gaya dan referensi: ${s.gaya || '-'}\n` +
    `Fitur yang dibutuhkan: ${s.fitur || '-'}\n` +
    `Identitas brand: ${s.identitas || '-'}\n` +
    `Budget: ${s.budget || '-'}\n` +
    `Timeline: ${s.timeline || '-'}\n` +
    `Kontak: ${s.kontak || '-'}`;

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });
    return res.status(200).json({ sent: true });
  } catch (err) {
    return res.status(500).json({ error: 'Gagal kirim ke Discord.', detail: String(err) });
  }
}