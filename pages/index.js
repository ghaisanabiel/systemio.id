import { useEffect, useRef, useState, Fragment } from 'react';
import Head from 'next/head';

const WA_NUMBER = '6281234567890'; // ganti dengan nomor WhatsApp aslimu

const T = {
  id: {
    nav: { home: 'Home', make: 'What We Make', portfolio: 'Portofolio', about: 'About', order: 'Pesan Website' },
    hero: {
      title1: 'Website yang ',
      titleEm: 'bekerja sendiri',
      title2: ', sementara kamu jalanin bisnisnya.',
      sub: 'Systemio.id bikinin website, asisten AI, dan automation buat bisnis kamu. Dirancang bareng, dibangun secara terbuka.',
      cta: 'Pesan Website Sekarang',
    },
    make: {
      heading: 'Apa yang kami buat',
      intro: 'Tiga sistem yang kami bangun buat bisnis kamu, dan salah satunya bisa langsung kamu coba di halaman ini.',
      offers: [
        { mark: 'Web', title: 'Website', desc: 'Cepat, rapi, dan enak dilihat dari HP. Dibangun sesuai gaya bisnismu, bukan template asal jadi.' },
        { mark: 'AI', title: 'Asisten AI', desc: 'Jawab pertanyaan pelanggan 24 jam, tanpa kamu harus standby di chat terus terusan.' },
        { mark: 'Sys', title: 'Automation', desc: 'Kerjaan berulang seperti follow up, laporan, dan pengingat jalan otomatis di belakang layar.' },
      ],
      videoTag: 'Video di balik layar segera hadir',
      videoTitle: 'Lihat cara kami bikin asisten AI ini',
      videoDesc: 'Fiturnya bisa kalian pakai langsung loh! Coba sendiri di halaman Pesan Website, ngobrol sama AI-nya kayak lagi chat beneran.',
      videoBtn: 'Coba Sekarang',
    },
    portfolio: {
      heading: 'Portofolio',
      intro: 'Beberapa yang udah dibangun. Halaman studi kasus lengkap segera menyusul.',
      items: [
        { name: 'DAD Archery', desc: 'Website brand archery' },
        { name: 'El Bamboo Guesthouse', desc: 'Guesthouse bambu di Banyuwangi' },
        { name: 'Tradingjurnal', desc: 'Web app jurnal trading' },
      ],
    },
    about: {
      heading: 'Dibangun dari masalah beneran, bukan teori.',
      body: 'Systemio.id dijalanin dari Jakarta. Semuanya dimulai dari kebiasaan belajar sambil bangun: nyari masalah nyata, terus dibikin sistemnya, sambil dokumentasiin prosesnya secara terbuka. Sekarang sistem yang sama itu yang kami tawarin ke bisnis lain: website, asisten AI, dan automation yang beneran dipakai, bukan cuma dipajang.',
    },
    footer: '© 2026 Systemio.id, Jakarta Indonesia',
    order: {
      title: 'Ceritain website yang kamu mau.',
      sub: 'Ngobrol aja kayak biasa. Nanti dirangkum otomatis dan dikirim ke tim kami.',
      back: '← Kembali ke Beranda',
      placeholder: 'Tulis pesanmu di sini...',
      send: 'Kirim',
      typing: 'Mengetik...',
      recapTitle: 'Rekap yang udah disepakati',
      waBtn: 'Kirim ke WhatsApp',
      firstMessage: 'Halo! Aku bakal bantu susun kebutuhan website kamu. Mau dipakai buat bisnis apa nih?',
      fields: { bisnis: 'Jenis usaha', tujuan: 'Tujuan dan target', halaman: 'Halaman', materi: 'Materi tersedia', gaya: 'Gaya dan referensi', fitur: 'Fitur', identitas: 'Identitas brand', budget: 'Budget', timeline: 'Timeline', kontak: 'Kontak' },
    },
    confirm: { title: 'Terkirim!', body: 'Tunggu ya, tim kami akan segera menghubungi kamu.' },
  },
  en: {
    nav: { home: 'Home', make: 'What We Make', portfolio: 'Portfolio', about: 'About', order: 'Order a Website' },
    hero: {
      title1: 'A website that ',
      titleEm: 'works on its own',
      title2: ', while you run the business.',
      sub: 'Systemio.id builds websites, AI assistants, and automation for your business. Designed together, built in the open.',
      cta: 'Order Your Website',
    },
    make: {
      heading: 'What we make',
      intro: 'Three systems we build for your business, and one of them you can try right on this page.',
      offers: [
        { mark: 'Web', title: 'Website', desc: 'Fast, clean, and mobile friendly. Built around your business, not a generic template.' },
        { mark: 'AI', title: 'AI Assistant', desc: 'Answers customer questions around the clock, so you do not have to be online all the time.' },
        { mark: 'Sys', title: 'Automation', desc: 'Repetitive tasks like follow ups, reports, and reminders run automatically in the background.' },
      ],
      videoTag: 'Behind the scenes video coming soon',
      videoTitle: 'See how we built this AI assistant',
      videoDesc: 'You can actually use this feature right now! Try it yourself on the Order a Website page, chat with the AI like a real conversation.',
      videoBtn: 'Try It Now',
    },
    portfolio: {
      heading: 'Portfolio',
      intro: 'A few things we have already built. Full case studies coming soon.',
      items: [
        { name: 'DAD Archery', desc: 'Archery brand website' },
        { name: 'El Bamboo Guesthouse', desc: 'Bamboo guesthouse in Banyuwangi' },
        { name: 'Tradingjurnal', desc: 'Trading journal web app' },
      ],
    },
    about: {
      heading: 'Built from real problems, not theory.',
      body: 'Systemio.id is run from Jakarta. It all started from a habit of learning by building: finding real problems, building the system for them, and documenting the process in the open. Now that same system is what we offer to other businesses: websites, AI assistants, and automation that actually get used, not just displayed.',
    },
    footer: '© 2026 Systemio.id, Jakarta Indonesia',
    order: {
      title: 'Tell us about the website you want.',
      sub: 'Just chat naturally. It will be summarized automatically and sent to our team.',
      back: '← Back to Home',
      placeholder: 'Type your message...',
      send: 'Send',
      typing: 'Typing...',
      recapTitle: 'Confirmed recap',
      waBtn: 'Send to WhatsApp',
      firstMessage: 'Hi! I will help put together what you need for your website. What kind of business is this for?',
      fields: { bisnis: 'Business type', tujuan: 'Goal and audience', halaman: 'Pages', materi: 'Available assets', gaya: 'Style and references', fitur: 'Features', identitas: 'Brand identity', budget: 'Budget', timeline: 'Timeline', kontak: 'Contact' },
    },
    confirm: { title: 'Sent!', body: 'Please wait, our team will reach out to you shortly.' },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState('id');
  const t = T[lang];

  const [introDone, setIntroDone] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: T.id.order.firstMessage }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    const tmr = setTimeout(() => setIntroDone(true), 1900);
    return () => clearTimeout(tmr);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('intro-done', introDone);
  }, [introDone]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [introDone, lang]);

  useEffect(() => {
    setMessages((prev) => (prev.length === 1 && prev[0].role === 'assistant' ? [{ role: 'assistant', content: t.order.firstMessage }] : prev));
  }, [lang]);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  function openOrder() {
    setOrderOpen(true);
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next, lang }),
      });
      const data = await res.json();
      const raw = data.reply || (lang === 'en' ? 'Sorry, something went wrong. Try again.' : 'Maaf, ada gangguan. Coba lagi ya.');

      const match = raw.match(/<<SUMMARY>>([\s\S]*?)<<END>>/);
      const visibleText = raw.replace(/<<SUMMARY>>[\s\S]*?<<END>>/, '').trim();
      setMessages([...next, { role: 'assistant', content: visibleText }]);

      if (match) {
        try {
          const parsed = JSON.parse(match[1]);
          setSummary(parsed);
          setShowConfirm(true);
          setTimeout(() => setShowConfirm(false), 2800);
          fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(parsed),
          }).catch(() => {});
        } catch {
          // format JSON meleset, tombol WA cuma nggak muncul
        }
      }
    } catch {
      setMessages([...next, { role: 'assistant', content: lang === 'en' ? 'Sorry, the connection is having trouble.' : 'Maaf, koneksi ke server lagi bermasalah.' }]);
    } finally {
      setLoading(false);
    }
  }

  const waText = summary
    ? Object.entries(t.order.fields).map(([k, label]) => `${label}: ${summary[k] || '-'}`).join('\n')
    : '';
  const waHref = summary ? `https://wa.me/${6281213000434}?text=${encodeURIComponent((lang === 'en' ? 'Hi, I would like to order a website.\n\n' : 'Halo, saya mau pesan website.\n\n') + waText)}` : '#';

  return (
    <>
      <Head>
        <title>Systemio.id: Website, AI, dan Automation buat bisnismu</title>
      </Head>

      <div id="intro" className={introDone ? 'hide' : ''}>
        <div className="intro-word">
          {'Systemio.id'.split('').map((ch, i) => (
            <span key={i} className={ch === '.' ? 'dot' : ''}>{ch}</span>
          ))}
        </div>
      </div>

      <div id="confirm-overlay" className={showConfirm ? 'show' : ''}>
        <div className="check-circle">
          <svg viewBox="0 0 110 110">
            <circle cx="55" cy="55" r="48" />
            <path d="M32 56 L48 72 L80 38" />
          </svg>
        </div>
        <h2>{t.confirm.title}</h2>
        <p>{t.confirm.body}</p>
      </div>

      <nav>
        <a href="#home" className="logo">systemio.id</a>
        <div className="navlinks">
          <a href="#home">{t.nav.home}</a>
          <a href="#make">{t.nav.make}</a>
          <a href="#portfolio">{t.nav.portfolio}</a>
          <a href="#about">{t.nav.about}</a>
          <div className="lang-toggle">
            <button className={lang === 'id' ? 'active' : ''} onClick={() => setLang('id')}>ID</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="btn" onClick={openOrder}>{t.nav.order}</button>
        </div>
      </nav>

      <div id="site" style={{ opacity: introDone ? 1 : 0 }}>
        <section id="home">
          <div className="home-inner">
            <div className="hero-main reveal" ref={addReveal}>
              <h1>{t.hero.title1}<em>{t.hero.titleEm}</em>{t.hero.title2}</h1>
            </div>
            <div className="hero-side reveal" ref={addReveal}>
              <p>{t.hero.sub}</p>
              <button className="btn btn-glow" onClick={openOrder}>{t.hero.cta}</button>
            </div>
          </div>
        </section>

        <section id="make">
          <div className="section-head reveal" ref={addReveal}>
            <h2>{t.make.heading}</h2>
          </div>
          <p className="make-intro reveal" ref={addReveal}>{t.make.intro}</p>

          {t.make.offers.map((o, i) => (
            <div className="offer reveal" ref={addReveal} key={i}>
              <span className="offer-mark">{o.mark}</span>
              <div><h3>{o.title}</h3><p>{o.desc}</p></div>
              <span className="offer-arrow">→</span>
            </div>
          ))}

          <div className="video-callout reveal" ref={addReveal}>
            <div className="video-box">
              <span className="play">▶</span>
              <span>{t.make.videoTag}</span>
            </div>
            <div className="video-callout-text">
              <h3>{t.make.videoTitle}</h3>
              <p>{t.make.videoDesc}</p>
              <button className="btn" onClick={openOrder}>{t.make.videoBtn}</button>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="section-head reveal" ref={addReveal}>
            <h2>{t.portfolio.heading}</h2>
            <p style={{ marginTop: 10 }}>{t.portfolio.intro}</p>
          </div>
          <div className="folio-list">
            {t.portfolio.items.map((p, i) => (
              <div className="folio-item reveal" ref={addReveal} key={i}><h3>{p.name}</h3><span>{p.desc}</span></div>
            ))}
          </div>
        </section>

        <section id="about">
          <h2 className="reveal" ref={addReveal}>{t.about.heading}</h2>
          <p className="reveal" ref={addReveal}>{t.about.body}</p>
        </section>

        <footer>
          <span className="logo" style={{ fontSize: '1.1rem' }}>systemio.id</span>
          <span>{t.footer}</span>
        </footer>
      </div>

      <div id="order" style={{ transform: orderOpen ? 'translateY(0)' : 'translateY(100%)' }}>
        <div className="order-nav">
          <a className="back-link" onClick={() => setOrderOpen(false)}>{t.order.back}</a>
          <span className="logo" style={{ fontSize: '1.2rem' }}>systemio.id</span>
        </div>
        <div className="order-wrap">
          <h1>{t.order.title}</h1>
          <p>{t.order.sub}</p>

          <div className="chat">
            {messages.map((m, i) => (
              <div key={i} className={`bubble ${m.role === 'user' ? 'user' : 'ai'}`}>{m.content}</div>
            ))}
            {loading && <div className="bubble ai">{t.order.typing}</div>}
          </div>

          <div className="order-input">
            <input
              type="text"
              placeholder={t.order.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button className="btn" style={{ padding: '10px 20px' }} onClick={sendMessage} disabled={loading}>{t.order.send}</button>
          </div>

          {summary && (
            <div className="summary">
              <h3>{t.order.recapTitle}</h3>
              <dl>
                {Object.entries(t.order.fields).map(([k, label]) => (
                  <Fragment key={k}>
                    <dt>{label}</dt>
                    <dd>{summary[k]}</dd>
                  </Fragment>
                ))}
              </dl>
              <a className="btn wa-btn" href={waHref} target="_blank" rel="noopener noreferrer">{t.order.waBtn}</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}