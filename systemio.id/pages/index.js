import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

const WA_NUMBER = '6281234567890'; // ganti dengan nomor WhatsApp aslimu

const T = {
  id: {
    nav: { home: 'Home', make: 'What We Make', portfolio: 'Portofolio', about: 'About', cta: 'Konsultasi Gratis' },
    hero: {
      title1: 'Website yang ',
      titleEm: 'bekerja sendiri',
      title2: ', sementara kamu jalanin bisnisnya.',
      sub: 'Systemio.id bikinin website, asisten AI, dan automation buat bisnis kamu. Dirancang bareng, dibangun secara terbuka.',
      cta: 'Konsultasi Gratis via WhatsApp',
      note: 'Dari obrolan pertama sampai website online, biasanya dua sampai tiga minggu.',
    },
    values: [
      { title: 'Dibangun secara terbuka', desc: 'Prosesnya didokumentasikan, bukan kerja tertutup di layar orang lain.' },
      { title: 'Respons langsung dari tim', desc: 'Tanya lewat WhatsApp, dibalas oleh kami sendiri, bukan robot.' },
      { title: 'Harga jelas dari awal', desc: 'Satu paket, satu harga. Tidak ada biaya tersembunyi di tengah jalan.' },
    ],
    make: {
      heading: 'Apa yang kami buat',
      intro: 'Tiga sistem yang kami bangun buat bisnis kamu, dari nol sampai jalan sendiri.',
      offers: [
        { mark: 'Web', title: 'Website', desc: 'Cepat, rapi, dan enak dilihat dari HP. Dibangun sesuai gaya bisnismu, bukan template asal jadi.' },
        { mark: 'AI', title: 'Asisten AI', desc: 'Jawab pertanyaan pelanggan 24 jam, tanpa kamu harus standby di chat terus terusan.' },
        { mark: 'Sys', title: 'Automation', desc: 'Kerjaan berulang seperti follow up, laporan, dan pengingat jalan otomatis di belakang layar.' },
      ],
    },
    process: {
      heading: 'Cara kerja kami',
      steps: [
        { n: '01', title: 'Chat di WhatsApp', desc: 'Ceritain bisnis dan kebutuhan kamu langsung ke tim kami, bukan ke formulir.' },
        { n: '02', title: 'Kami rancang dan bangun', desc: 'Desain dan sistemnya dibangun sesuai gaya bisnismu, sambil kami kabari progresnya.' },
        { n: '03', title: 'Website kamu jalan', desc: 'Online, siap dipakai, dan bisa terus dikembangkan seiring bisnismu tumbuh.' },
      ],
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
    finalCta: {
      heading: 'Siap punya website yang bekerja buat kamu?',
      sub: 'Ceritain kebutuhanmu, kami bantu susun dari sana.',
      cta: 'Konsultasi Gratis via WhatsApp',
    },
    footer: '© 2026 Systemio.id, Jakarta Indonesia',
    waText: 'Hi Systemio.id, saya mau tanya soal jasa pembuatan website.',
  },
  en: {
    nav: { home: 'Home', make: 'What We Make', portfolio: 'Portfolio', about: 'About', cta: 'Free Consultation' },
    hero: {
      title1: 'A website that ',
      titleEm: 'works on its own',
      title2: ', while you run the business.',
      sub: 'Systemio.id builds websites, AI assistants, and automation for your business. Designed together, built in the open.',
      cta: 'Chat With Us on WhatsApp',
      note: 'From the first chat to a live website, usually two to three weeks.',
    },
    values: [
      { title: 'Built in the open', desc: 'The whole process is documented, not closed off behind someone else\u2019s screen.' },
      { title: 'Direct replies from the team', desc: 'Ask us on WhatsApp and hear back from a real person, not a bot.' },
      { title: 'Clear pricing upfront', desc: 'One package, one price. No hidden costs added along the way.' },
    ],
    make: {
      heading: 'What we make',
      intro: 'Three systems we build for your business, from scratch to fully running.',
      offers: [
        { mark: 'Web', title: 'Website', desc: 'Fast, clean, and mobile friendly. Built around your business, not a generic template.' },
        { mark: 'AI', title: 'AI Assistant', desc: 'Answers customer questions around the clock, so you do not have to be online all the time.' },
        { mark: 'Sys', title: 'Automation', desc: 'Repetitive tasks like follow ups, reports, and reminders run automatically in the background.' },
      ],
    },
    process: {
      heading: 'How we work',
      steps: [
        { n: '01', title: 'Chat on WhatsApp', desc: 'Tell our team about your business and what you need, no form to fill out.' },
        { n: '02', title: 'We design and build', desc: 'The design and system are built around your business, with updates along the way.' },
        { n: '03', title: 'Your website goes live', desc: 'Online, ready to use, and built to grow alongside your business.' },
      ],
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
    finalCta: {
      heading: 'Ready for a website that works for you?',
      sub: 'Tell us what you need and we will help you shape it from there.',
      cta: 'Chat With Us on WhatsApp',
    },
    footer: '© 2026 Systemio.id, Jakarta Indonesia',
    waText: 'Hi Systemio.id, I would like to ask about your website service.',
  },
};

export default function HomePage() {
  const [lang, setLang] = useState('id');
  const t = T[lang];

  const [introDone, setIntroDone] = useState(false);
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

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.waText)}`;

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
          <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">{t.nav.cta}</a>
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
              <a className="btn btn-glow" href={waHref} target="_blank" rel="noopener noreferrer">{t.hero.cta}</a>
              <p className="hero-note">{t.hero.note}</p>
            </div>
          </div>
        </section>

        <section id="values">
          <div className="value-grid">
            {t.values.map((v, i) => (
              <div className="value-item reveal" ref={addReveal} key={i}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
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
        </section>

        <section id="process">
          <div className="section-head reveal" ref={addReveal}>
            <h2>{t.process.heading}</h2>
          </div>
          <div className="process-grid">
            {t.process.steps.map((s, i) => (
              <div className="process-item reveal" ref={addReveal} key={i}>
                <span className="process-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <div className="section-head reveal" ref={addReveal}>
            <h2>{t.portfolio.heading}</h2>
            <p style={{ marginTop: 10 }}>{t.portfolio.intro}</p>
          </div>
          <div className="folio-grid">
            {t.portfolio.items.map((p, i) => (
              <div className="folio-card reveal" ref={addReveal} key={i}>
                <h3>{p.name}</h3>
                <span>{p.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="about">
          <h2 className="reveal" ref={addReveal}>{t.about.heading}</h2>
          <p className="reveal" ref={addReveal}>{t.about.body}</p>
        </section>

        <section id="final-cta">
          <h2 className="reveal" ref={addReveal}>{t.finalCta.heading}</h2>
          <p className="reveal" ref={addReveal}>{t.finalCta.sub}</p>
          <a className="btn btn-glow reveal" ref={addReveal} href={waHref} target="_blank" rel="noopener noreferrer">{t.finalCta.cta}</a>
        </section>

        <footer>
          <span className="logo" style={{ fontSize: '1.1rem' }}>systemio.id</span>
          <span>{t.footer}</span>
        </footer>
      </div>
    </>
  );
}
