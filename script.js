/* ═══════════════════════════════════════════════
   GHIATH PORTFOLIO — script.js
═══════════════════════════════════════════════ */
'use strict';

/* ─── LOADER ─── */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    initHeroCounter();
  }, 2200);
});

/* ─── CURSOR ─── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
function animateCursor() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  if (dot)  { dot.style.left  = mx + 'px'; dot.style.top  = my + 'px'; }
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
  requestAnimationFrame(animateCursor);
}
animateCursor();

/* ─── NAVBAR ─── */
const navbar    = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLink();
  toggleBackTop();
}, { passive: true });

navToggle?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  const spans = navToggle.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close menu on link click
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle?.querySelectorAll('span');
    spans?.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}

/* ─── BACK TO TOP ─── */
const backTop = document.getElementById('backTop');
function toggleBackTop() {
  backTop?.classList.toggle('visible', window.scrollY > 400);
}
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── HERO CANVAS (Particles) ─── */
(function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : H + 10;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = -(Math.random() * 0.4 + 0.1);
      this.r  = Math.random() * 1.5 + 0.3;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.color = Math.random() > 0.5 ? '#0affe4' : '#4f8dff';
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.y < -10) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle   = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur  = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 80; i++) particles.push(new Particle());

  function loop() {
    ctx.clearRect(0, 0, W, H);
    // Draw connecting lines
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach(q => {
        const dx = p.x - q.x, dy = p.y - q.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < 120) {
          ctx.save();
          ctx.globalAlpha = (1 - d / 120) * 0.08;
          ctx.strokeStyle = '#0affe4';
          ctx.lineWidth   = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── TYPING EFFECT ─── */
(function initTyping() {
  const el = document.getElementById('typedText');
  if (!el) return;
  const strings = [
    'مهندس تصميم ميكانيكي',
    'خبير SolidWorks & AutoCAD',
    'مصمم قوالب ونماذج 3D',
    'حلول CNC وعمليات التصنيع'
  ];
  let si = 0, ci = 0, deleting = false;

  function type() {
    const str   = strings[si];
    const speed = deleting ? 40 : 80;
    el.textContent = str.slice(0, ci);

    if (!deleting && ci === str.length) {
      setTimeout(() => { deleting = true; type(); }, 2200);
      return;
    }
    if (deleting && ci === 0) {
      deleting = false;
      si = (si + 1) % strings.length;
    }
    ci += deleting ? -1 : 1;
    setTimeout(type, speed);
  }
  setTimeout(type, 1200);
})();

/* ─── HERO MINI COUNTERS ─── */
function initHeroCounter() {
  document.querySelectorAll('.hstat-num').forEach(el => {
    animateCount(el, parseInt(el.dataset.target), 1500);
  });
}

/* ─── SCROLL REVEAL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay ? parseInt(el.dataset.delay) * 120 : 0;
      setTimeout(() => el.classList.add('visible'), delay);
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── SKILL BARS ─── */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.w + '%';
        }, i * 150);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-category').forEach(el => skillObserver.observe(el));

/* ─── STAT COUNTERS ─── */
function animateCount(el, target, duration) {
  const start = performance.now();
  function frame(now) {
    const pct = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - pct, 3);
    el.querySelector ? (el.querySelector('.count').textContent = Math.round(ease * target)) : (el.textContent = Math.round(ease * target));
    if (pct < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-num').forEach(el => {
        const target = parseInt(el.dataset.target);
        animateCount(el, target, 2000);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

/* ─── PROJECT FILTER ─── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const show = filter === 'all' || card.dataset.cat === filter;
      card.classList.toggle('hidden', !show);
      if (show) {
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      }
    });
  });
});

/* ─── PROJECT MODALS ─── */
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');
const modalTitle   = document.getElementById('modalTitle');
const modalDesc    = document.getElementById('modalDesc');

const projectDetails = {
  'ذراع روبوتية صناعية': 'تصميم ذراع روبوتية صناعية من 6 محاور باستخدام SolidWorks، مع دراسة حركة المفاصل وتحليل الإجهاد تحت الأحمال المختلفة. المشروع شمل النمذجة الكاملة والرسومات التنفيذية وتحليل الكتلة والعزم.',
  'قالب حقن بلاستيكي': 'تصميم قالب حقن متكامل لإنتاج غطاء بلاستيكي بحجم 150×80mm. يتضمن المشروع: تصميم التجويف والنواة، نظام التبريد، بوابات الحقن، وآلية الإخراج. تم تحقيق دورة حقن أمثل بفضل دراسة خطوط الفصل.',
  'علبة تروس متعددة السرعات': 'تصميم Gearbox ذو 4 سرعات لناقل حركة صناعي. يشمل حساب نسب التروس، اختيار المحامل، تحليل الإجهاد على أسنان التروس، وتصميم علبة الحماية.',
  'تصميم آلة CNC مصغّرة': 'تصميم آلة CNC ثلاثية المحاور للاستخدام في الصناعات الدقيقة. يتضمن هيكل الألومنيوم، أنظمة Stepper Motors، اللوحة الإلكترونية، وبرمجة G-Code لمسارات القطع.',
  'نظام ناقل صناعي': 'تصميم خط نقل بطول 8 أمتار قادر على حمل أوزان حتى 50kg. شمل دراسة حزام PVC، تصميم الدحارج والعجلات، منظومة الإطار الفولاذي، والمحرك الكهربائي مع صندوق التروس.',
  'نموذج منتج صناعي': 'تصميم وتطوير منتج استهلاكي متكامل من مرحلة الفكرة حتى النموذج الأولي. شمل المشروع رسم المفاهيم، النمذجة ثلاثية الأبعاد، اختيار المواد، وتحضير ملفات التصنيع.'
};

document.querySelectorAll('.proj-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card  = btn.closest('.project-card');
    const title = card.querySelector('.proj-title').textContent;
    modalTitle.textContent = title;
    modalDesc.textContent  = projectDetails[title] || 'تفاصيل المشروع غير متوفرة حالياً.';
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
modalClose?.addEventListener('click', closeModal);
modalOverlay?.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ─── CV DOWNLOAD ─── */
function handleCVDownload(e) {
  e.preventDefault();
  const btn = e.currentTarget;
  const orig = btn.innerHTML;
  btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> تم الإعداد — CV جاهز!';
  btn.style.pointerEvents = 'none';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.pointerEvents = '';
  }, 2500);
}
document.getElementById('downloadCV')?.addEventListener('click', handleCVDownload);
document.getElementById('cvDownloadMain')?.addEventListener('click', handleCVDownload);

/* ─── CONTACT FORM ─── */
const form        = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

form?.addEventListener('submit', e => {
  e.preventDefault();
  let valid = true;

  const name  = document.getElementById('fname');
  const email = document.getElementById('femail');
  const msg   = document.getElementById('fmsg');

  // Clear errors
  ['nameErr','emailErr','msgErr'].forEach(id => {
    document.getElementById(id).textContent = '';
  });

  if (!name.value.trim()) {
    document.getElementById('nameErr').textContent = 'الاسم مطلوب';
    name.focus(); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('emailErr').textContent = 'بريد إلكتروني غير صحيح';
    if (valid) email.focus(); valid = false;
  }
  if (!msg.value.trim() || msg.value.trim().length < 10) {
    document.getElementById('msgErr').textContent = 'الرسالة قصيرة جداً (10 أحرف على الأقل)';
    if (valid) msg.focus(); valid = false;
  }

  if (!valid) return;

  const submitBtn = form.querySelector('[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor;animation:spin 1s linear infinite"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> جاري الإرسال...';

  setTimeout(() => {
    form.reset();
    formSuccess.classList.add('show');
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg> إرسال الرسالة';
    setTimeout(() => formSuccess.classList.remove('show'), 5000);
  }, 1800);
});

/* ─── SMOOTH SCROLL ─── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── NAVBAR GLOW ON HOVER ─── */
document.querySelectorAll('.service-card,.project-card,.skill-category').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
    const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
    card.style.setProperty('--mx', x + '%');
    card.style.setProperty('--my', y + '%');
  });
});
