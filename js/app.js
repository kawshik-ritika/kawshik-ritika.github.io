/* ==========================================================================
   INVITATION CARD — renders the page from js/config.js
   ========================================================================== */

(function () {
  'use strict';

  const C = window.INVITE;
  const ROOT = document.body.dataset.root || '';
  const CARD_KEY = C.cards[document.body.dataset.card] ? document.body.dataset.card : 'wedding-reception';
  const CARD = C.cards[CARD_KEY];
  const EVENTS = CARD.events.map(key => ({ key, ...C.events[key] }));

  // UI labels that are not part of the invitation content
  const UI = {
    bn: {
      blessing: 'শ্রী শ্রী প্রজাপতয়ে নমঃ',
      together: 'পরম করুণাময় ঈশ্বরের আশীর্বাদে',
      countdownTo: 'অনুষ্ঠানের বাকি',
      days: 'দিন', hours: 'ঘণ্টা', minutes: 'মিনিট', seconds: 'সেকেন্ড',
      viewCard: 'নিমন্ত্রণপত্র দেখুন',
      viewVenue: 'তারিখ ও স্থান দেখুন',
      contact: 'যোগাযোগ',
      next: 'পরবর্তী',
      invited: 'সাদর আমন্ত্রণ',
      message: occasion => `শ্রী শ্রী প্রজাপতির আশীর্বাদে আমাদের ${occasion} আপনাকে সপরিবারে সাদর আমন্ত্রণ জানাই। আপনার উপস্থিতি ও আশীর্বাদ আমাদের নতুন জীবনের পথচলায় পরম প্রাপ্তি হয়ে থাকবে।`,
      groomLabel: 'বর', brideLabel: 'কনে',
      father: 'পিতা', mother: 'মাতা',
      weds: 'শুভ পরিণয়',
      regards: 'শুভেচ্ছান্তে',
      programme: 'অনুষ্ঠানসূচি',
      venueTitle: 'তারিখ, সময় ও স্থান',
      directions: 'গুগল ম্যাপে দেখুন',
      shareLocation: 'লোকেশন শেয়ার',
      share: 'নিমন্ত্রণ শেয়ার করুন',
      shareTitle: 'শেয়ার করুন',
      copyLink: 'লিংক কপি',
      copied: 'লিংক কপি হয়েছে',
      locationCopied: 'লোকেশনের লিংক কপি হয়েছে',
      shareText: () => `${C.shortNames.bn} — ${CARD.title.bn}\n${EVENTS.map(e => `${e.title.bn}: ${e.date.bn}, ${e.time.bn}`).join('\n')}`,
      footer: 'আপনার উপস্থিতিই আমাদের আনন্দ',
      langSwitch: 'English'
    },
    en: {
      blessing: 'শ্রী শ্রী প্রজাপতয়ে নমঃ',
      together: 'With the blessings of the Almighty',
      countdownTo: 'Counting down to',
      days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
      viewCard: 'View Invitation',
      viewVenue: 'See Date & Venue',
      contact: 'Contact',
      next: 'Next',
      invited: 'Cordially Invited',
      message: occasion => `By the blessings of the Almighty, we joyfully invite you and your family to ${occasion}. Your presence and blessings will mean the world to us as we begin our new journey together.`,
      groomLabel: 'Groom', brideLabel: 'Bride',
      father: 'Father', mother: 'Mother',
      weds: 'weds',
      regards: 'With love',
      programme: 'Programme',
      venueTitle: 'Date, Time & Venue',
      directions: 'Open in Google Maps',
      shareLocation: 'Share Location',
      share: 'Share Invitation',
      shareTitle: 'Share',
      copyLink: 'Copy Link',
      copied: 'Link copied',
      locationCopied: 'Location link copied',
      shareText: () => `${C.shortNames.en} — ${CARD.title.en}\n${EVENTS.map(e => `${e.title.en}: ${e.date.en}, ${e.time.en}`).join('\n')}`,
      footer: 'Your presence is our joy',
      langSwitch: 'বাংলা'
    }
  };

  // Line icons drawn for this card (gold via currentColor)
  const ICONS = {
    topor: `
      <path d="M32 3.5c-2 2-2 4 0 5.5c2-1.5 2-3.5 0-5.5Z" fill="currentColor"/>
      <path d="M29 10.5q3 1.5 6 0"/>
      <path d="M32 10C28 20 23 32 18 43.5M32 10c4 10 9 22 14 33.5"/>
      <path d="M27 22q2.5 2.5 5 0q2.5 2.5 5 0"/>
      <path d="M24.5 41.5Q32 18 39.5 41.5"/>
      <circle cx="32" cy="34" r="1.6" fill="currentColor" stroke="none"/>
      <path d="M11 47Q32 37 53 47v6Q32 44 11 53Z"/>
      <path d="M14 54.5l-1 3M20 51.5l-.6 3.2M26 50l-.3 3.2M32 49.5v3.3M38 50l.3 3.2M44 51.5l.6 3.2M50 54.5l1 3"/>`,
    mangalGhot: `
      <path d="M31 31Q16 31 5 21Q22 18 31 31Z"/>
      <path d="M33 31Q48 31 59 21Q42 18 33 31Z"/>
      <path d="M30 30Q19 21 16 7Q29 14 30 30Z"/>
      <path d="M34 30Q45 21 48 7Q35 14 34 30Z"/>
      <ellipse cx="32" cy="21" rx="6" ry="7.5" fill="currentColor" stroke="none"/>
      <path d="M32 13.5v-3"/>
      <path d="M23.5 31.5h17"/>
      <path d="M26 31.5c0 2 1 3 2 3.5M38 31.5c0 2-1 3-2 3.5"/>
      <path d="M28 35C12 38 9 60 32 60C55 60 52 38 36 35Z"/>
      <path d="M15 46Q32 52 49 46"/>
      <circle cx="32" cy="42" r="2.2" fill="currentColor" stroke="none"/>`
  };
  const icon = name => `<svg class="icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

  let lang = pickLanguage();

  function pickLanguage() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (fromUrl === 'bn' || fromUrl === 'en') return fromUrl;
    try {
      const saved = localStorage.getItem('invite-lang');
      if (saved === 'bn' || saved === 'en') return saved;
    } catch (e) { /* storage unavailable */ }
    return C.defaultLang;
  }

  const t = key => UI[lang][key];
  const L = obj => obj[lang];
  const digits = s => lang === 'bn' ? String(s).replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]) : String(s);
  const mapsUrl = q => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const mapsEmbed = q => `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&output=embed`;

  function inviteUrl() {
    const url = new URL(location.href);
    url.hash = '';
    url.search = lang === C.defaultLang ? '' : `?lang=${lang}`;
    return url.toString();
  }

  /* ---------------------------------------------------------------- render */

  function render() {
    document.documentElement.lang = lang;
    document.title = `${L(C.shortNames)} | ${L(CARD.title)}`;

    const avatar = C.couplePhoto
      ? `<div class="avatar"><img src="${ROOT}${C.couplePhoto}" alt="${L(C.shortNames)}"></div>`
      : `<div class="ornament">✿</div>`;

    // Wide screens show all events on one screen; phones get one screen per event
    const eventGroups = wideLayout.matches ? [EVENTS] : EVENTS.map(e => [e]);

    document.getElementById('app').innerHTML = `
      <header class="hero screen" id="top">
        <div class="fit">
          <div class="hero-card">
            <p class="blessing">॥ ${t('blessing')} ॥</p>
            ${avatar}
            <p class="hero-sub">${t('together')}</p>
            <h1 class="hero-title gold-text">${L(CARD.title)}</h1>
            <p class="hero-names">${L(C.shortNames)}</p>
            <ul class="hero-dates">
              ${EVENTS.map(e => `<li>${icon(e.icon)} <b>${L(e.title)}</b> · ${L(e.date)}</li>`).join('')}
            </ul>
            <div class="countdown" id="countdown" hidden>
              <p class="countdown-label">${t('countdownTo')} — <span id="countdown-event"></span></p>
              <div class="countdown-grid">
                ${['days', 'hours', 'minutes', 'seconds'].map(u => `
                  <div class="countdown-box"><span class="countdown-num" data-unit="${u}">০</span><span class="countdown-unit">${t(u)}</span></div>`).join('')}
              </div>
            </div>
            <a href="#invitation" class="btn btn-gold">${t('viewCard')} <i class="fa-solid fa-chevron-down"></i></a>
          </div>
        </div>
      </header>

      <section class="section cream screen" id="invitation">
        <div class="fit">
          <h2 class="section-title">${t('invited')}</h2>
          <div class="divider"><span></span>✿<span></span></div>
          <article class="invite-card">
            <p class="invite-message">${t('message')(L(CARD.occasion))}</p>
            <div class="couple">
              ${person(C.groom, t('groomLabel'))}
              <div class="weds">${t('weds')}</div>
              ${person(C.bride, t('brideLabel'))}
            </div>
            <p class="regards">${t('regards')}</p>
            <p class="signature">${L(C.shortNames)}</p>
          </article>
          <a href="#events" class="btn btn-gold next-btn">${t('viewVenue')} <i class="fa-solid fa-chevron-down"></i></a>
        </div>
      </section>

      ${eventGroups.map((group, i) => `
      <section class="section maroon screen" id="events${i ? `-${i + 1}` : ''}">
        <div class="fit">
          <h2 class="section-title">${t('venueTitle')}</h2>
          <div class="divider"><span></span>✿<span></span></div>
          <div class="events ${group.length > 1 ? 'two' : ''}">
            ${group.map(eventCard).join('')}
          </div>
          ${eventGroups[i + 1] ? `<a href="#events-${i + 2}" class="btn btn-gold next-btn">${t('next')}: ${L(eventGroups[i + 1][0].title)} <i class="fa-solid fa-chevron-down"></i></a>` : ''}
        </div>
      </section>`).join('')}

      <footer class="footer screen">
        <div class="fit">
          <div class="ornament">✿</div>
          <p class="footer-names">${L(C.shortNames)}</p>
          <p class="footer-note">${t('footer')}</p>
          <div class="footer-actions">
            <button class="btn btn-gold" data-action="share"><i class="fa-solid fa-share-nodes"></i> ${t('share')}</button>
            <button class="btn btn-outline-light" data-action="copy"><i class="fa-solid fa-link"></i> ${t('copyLink')}</button>
          </div>
        </div>
      </footer>

      <div class="top-controls">
        <button class="lang-btn" data-action="lang" aria-label="Change language">${t('langSwitch')}</button>
      </div>
      <button class="fab" data-action="share" aria-label="${t('share')}" title="${t('share')}"><i class="fa-solid fa-share-nodes"></i></button>

      <div class="sheet" id="share-sheet" hidden>
        <div class="sheet-card" role="dialog" aria-modal="true" aria-label="${t('shareTitle')}">
          <p class="sheet-title">${t('shareTitle')}</p>
          <div class="sheet-options">
            <a id="share-whatsapp" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a>
            <a id="share-messenger" target="_blank" rel="noopener"><i class="fa-brands fa-facebook-messenger"></i>Messenger</a>
            <a id="share-facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i>Facebook</a>
            <button id="share-copy"><i class="fa-solid fa-link"></i>${t('copyLink')}</button>
          </div>
        </div>
      </div>
      <div class="toast" id="toast"></div>
    `;

    startCountdown();
    fitScreens();
    document.querySelectorAll('.avatar img').forEach(img => img.addEventListener('load', fitScreens));
  }

  /* ------------------------------------------------- fit each screen */

  const wideLayout = matchMedia('(min-width: 900px)');

  // Every section is exactly one screen tall; shrink its content when it would overflow
  function fitScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
      const fit = screen.querySelector('.fit');
      fit.style.transform = '';
      const cs = getComputedStyle(screen);
      const room = screen.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
      const scale = room / fit.offsetHeight;
      if (scale < 1) fit.style.transform = `scale(${scale})`;
    });
  }

  let fitFrame = 0;
  addEventListener('resize', () => {
    cancelAnimationFrame(fitFrame);
    fitFrame = requestAnimationFrame(fitScreens);
  });
  wideLayout.addEventListener('change', render);
  if (document.fonts) document.fonts.ready.then(fitScreens);

  function person(p, label) {
    return `
      <div class="person">
        <span class="person-label">${label}</span>
        <h3 class="person-name">${L(p.name)}</h3>
        <p class="person-parents">${t('father')}: ${L(p.father)}<br>${t('mother')}: ${L(p.mother)}</p>
      </div>`;
  }

  function eventCard(e) {
    return `
      <article class="event">
        <div class="event-icon">${icon(e.icon)}</div>
        <h3 class="event-title">${L(e.title)}</h3>
        <ul class="event-info">
          <li><i class="fa-regular fa-calendar"></i> ${L(e.date)}</li>
          <li><i class="fa-regular fa-clock"></i> ${L(e.time)}</li>
          <li><i class="fa-solid fa-location-dot"></i> ${L(e.venue)}</li>
          ${(e.contacts || []).map(c => `
          <li><i class="fa-solid fa-phone"></i> <span>${t('contact')}: ${L(c.name)} — <a class="phone" href="tel:${c.phone.replace(/[^\d+]/g, '')}">${digits(c.phone)}</a></span></li>`).join('')}
        </ul>
        <div class="map"><iframe src="${mapsEmbed(e.mapQuery)}" title="${L(e.venue)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
        <div class="event-actions">
          <a class="btn btn-gold" href="${mapsUrl(e.mapQuery)}" target="_blank" rel="noopener"><i class="fa-solid fa-diamond-turn-right"></i> ${t('directions')}</a>
          <button class="btn btn-outline-light" data-action="share-location" data-event="${e.key}"><i class="fa-solid fa-share-nodes"></i> ${t('shareLocation')}</button>
        </div>
      </article>`;
  }

  /* ------------------------------------------------------------- countdown */

  let countdownTimer = null;

  function startCountdown() {
    clearInterval(countdownTimer);
    const box = document.getElementById('countdown');
    const tick = () => {
      const now = Date.now();
      const next = EVENTS.find(e => new Date(e.startsAt).getTime() > now);
      if (!next) { box.hidden = true; clearInterval(countdownTimer); return; }
      box.hidden = false;
      document.getElementById('countdown-event').textContent = L(next.title);
      let s = Math.floor((new Date(next.startsAt).getTime() - now) / 1000);
      const parts = { days: Math.floor(s / 86400), hours: Math.floor(s % 86400 / 3600), minutes: Math.floor(s % 3600 / 60), seconds: s % 60 };
      box.querySelectorAll('[data-unit]').forEach(el => {
        el.textContent = digits(String(parts[el.dataset.unit]).padStart(2, '0'));
      });
    };
    tick();
    countdownTimer = setInterval(tick, 1000);
  }

  /* --------------------------------------------------------------- sharing */

  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove('show'), 2200);
  }

  async function copy(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    toast(msg);
  }

  async function shareInvite() {
    const url = inviteUrl();
    const text = t('shareText')();
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text, url }); return; }
      catch (e) { if (e.name === 'AbortError') return; }
    }
    const sheet = document.getElementById('share-sheet');
    document.getElementById('share-whatsapp').href = `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`;
    document.getElementById('share-messenger').href = `fb-messenger://share/?link=${encodeURIComponent(url)}`;
    document.getElementById('share-facebook').href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    document.getElementById('share-copy').onclick = () => { copy(url, t('copied')); sheet.hidden = true; };
    sheet.hidden = false;
  }

  async function shareLocation(key) {
    const e = C.events[key];
    const url = mapsUrl(e.mapQuery);
    const text = `${L(e.title)} — ${L(e.venue)}`;
    if (navigator.share) {
      try { await navigator.share({ title: L(e.title), text, url }); return; }
      catch (err) { if (err.name === 'AbortError') return; }
    }
    copy(`${text}\n${url}`, t('locationCopied'));
  }

  document.addEventListener('click', ev => {
    const sheet = document.getElementById('share-sheet');
    if (ev.target === sheet) { sheet.hidden = true; return; }
    const btn = ev.target.closest('[data-action]');
    if (!btn) return;
    switch (btn.dataset.action) {
      case 'share': shareInvite(); break;
      case 'copy': copy(inviteUrl(), t('copied')); break;
      case 'share-location': shareLocation(btn.dataset.event); break;
      case 'lang':
        lang = lang === 'bn' ? 'en' : 'bn';
        try { localStorage.setItem('invite-lang', lang); } catch (e) { /* storage unavailable */ }
        const url = new URL(location.href);
        url.searchParams.delete('lang');
        history.replaceState(null, '', url);
        render();
        break;
    }
  });

  document.addEventListener('keydown', ev => {
    if (ev.key === 'Escape') document.getElementById('share-sheet').hidden = true;
  });

  /* ---------------------------------------------------------------- petals */

  function petals() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = document.getElementById('petals');
    const ctx = canvas.getContext('2d');
    const colors = ['#C0392B', '#E74C3C', '#F39C12', '#F5B041', '#D4AF37'];
    let w, h, list;
    const resize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
    const make = top => ({
      x: Math.random() * w, y: top ? -20 : Math.random() * h,
      r: 5 + Math.random() * 6, vy: 0.4 + Math.random() * 0.8, vx: -0.3 + Math.random() * 0.6,
      a: Math.random() * Math.PI * 2, va: -0.02 + Math.random() * 0.04,
      c: colors[Math.floor(Math.random() * colors.length)], o: 0.45 + Math.random() * 0.35
    });
    resize();
    addEventListener('resize', resize);
    list = Array.from({ length: Math.min(28, Math.round(w / 40)) }, () => make(false));
    (function frame() {
      ctx.clearRect(0, 0, w, h);
      for (const p of list) {
        p.y += p.vy; p.x += p.vx + Math.sin(p.y / 60) * 0.3; p.a += p.va;
        if (p.y > h + 20) Object.assign(p, make(true));
        ctx.save();
        ctx.translate(p.x, p.y); ctx.rotate(p.a);
        ctx.globalAlpha = p.o; ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.bezierCurveTo(p.r, -p.r, p.r, p.r * 0.6, 0, p.r);
        ctx.bezierCurveTo(-p.r, p.r * 0.6, -p.r, -p.r, 0, -p.r);
        ctx.fill();
        ctx.restore();
      }
      requestAnimationFrame(frame);
    })();
  }

  render();
  petals();

  // Content is rendered by script, so jump to a #section link once it exists
  if (location.hash) {
    const target = document.querySelector(location.hash);
    if (target) target.scrollIntoView();
  }
})();
