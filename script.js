/* ═══════════════════════════════════════════════
   GHIATH PORTFOLIO — script.js
═══════════════════════════════════════════════ */
'use strict';

/* ─────────────────────────────────────────────
   BILINGUAL / i18n SYSTEM
   To add a new language: add a new key block
   inside the `translations` object below and
   update the langToggle cycle in switchLanguage.
───────────────────────────────────────────── */
const translations = {
  en: {
    /* Page meta */
    pageTitle:      'Ghiyath Abd Al-Razzaq | Mechanical Design Engineer',
    metaDesc:       'Ghiyath Abd Al-Razzaq portfolio — mechanical design engineer specializing in SolidWorks, AutoCAD, mold design, and 3D modeling',
    /* Nav */
    navHome:        'Home',
    navAbout:       'About',
    navSkills:      'Skills',
    navProjects:    'Projects',
    navExperience:  'Experience',
    navServices:    'Services',
    navContact:     'Contact',
    backTop:        'Back to top',
    /* Hero */
    heroAvailable:  'Available for Work',
    heroName:       'Ghiyath Abd Alrazzaq',
    heroDesc:       'I transform ideas into precise, manufacturable mechanical designs — from 3D modeling to final engineering drawings.',
    heroCta:        'Contact Me',
    heroCV:         'Download CV',
    statProjects:   'Projects',
    stat3D:         '3D Models',
    statYears:      'Years Experience',
    scrollHint:     'Scroll Down',
    /* About */
    aboutTitle:     'Design Engineer\n<em>Building with Precision & Creativity</em>',
    aboutP1:        "I'm Ghiyath Abd Al-Razzaq, a mechanical design engineer passionate about turning ideas into actionable engineering solutions. I believe great design sits at the intersection of mathematical precision and creative vision.",
    aboutP2:        "I work on designing spare parts and complex mechanical assemblies, improving manufacturability, and preparing detailed engineering drawings. Precision is not just a necessity — it's my work philosophy.",
    trait1:         'Precision in measurements & tolerances',
    trait2:         'Analytical thinking for problem solving',
    trait3:         'Design for Manufacturing (DFM)',
    trait4:         'Organized & detailed engineering documentation',
    aboutCta:       'Talk to Me',
    /* Skills */
    skillsTitle:    'Tools & Technical\n<em>Competencies</em>',
    skillCat1:      'CAD Software',
    skillCat2:      'Mechanical Design',
    skillCat3:      'Manufacturing',
    skillCat4:      'Technical Skills',
    catiaBeginner:  'CATIA (Basic)',
    skill3DModel:   '3D Modeling',
    skillMoldDes:   'Mold Design',
    skillMechAnal:  'Mechanical Analysis',
    skillCNC:       'CNC Programming',
    skillMfgOps:    'Manufacturing Operations',
    skillProdDes:   'Product Design',
    skillEngDoc:    'Engineering Documentation',
    skillDFM:       'DFM Optimization',
    /* Projects */
    projectsTitle:  'Featured Engineering\n<em>Works</em>',
    filterAll:      'All',
    filterDesign:   'Design',
    filterMfg:      'Manufacturing',
    filterAuto:     'Automation',
    viewDetails:    'View Details',
    proj1Title:     'Industrial Robotic Arm',
    proj1Desc:      'Design of a 6-axis robotic arm for industrial applications, including motion study and stress analysis of joints.',
    proj2Title:     'Plastic Injection Mold',
    proj2Desc:      'Full injection mold design for producing a plastic cover, including cooling system, injection channels, and cavity.',
    proj3Title:     'Multi-Speed Gearbox',
    proj3Desc:      'Design of a 4-speed gearbox for an industrial power transmission system, with gear ratio calculations and force analysis.',
    proj4Title:     'Mini CNC Machine Design',
    proj4Desc:      'Complete design of a 3-axis CNC machine, including mechanical structure, motion systems, and G-Code programming.',
    proj5Title:     'Industrial Conveyor System',
    proj5Desc:      'Design of an 8-meter industrial material conveyor with roller assembly, transport belt, and automated push systems.',
    proj6Title:     'Industrial Product Model',
    proj6Desc:      'Design and development of a consumer product from idea to prototype, with manufacturing standards and cost in mind.',
    /* Stats */
    statLabelProjects:  'Completed Projects',
    statLabel3D:        '3D Models',
    statLabelHours:     'Design Hours',
    statLabelDrawings:  'Engineering Drawings',
    /* Experience */
    expTitle:       'Professional &\n<em>Academic Journey</em>',
    badgeWork:      'Work',
    badgeIntern:    'Internship',
    badgeEdu:       'Education',
    exp1Role:       'Mechanical Design Engineer',
    exp1Company:    'Engineering Company — Freelance',
    exp1Desc:       'Designing custom mechanical parts, preparing manufacturing drawings, and coordinating with machining workshops to ensure quality execution.',
    exp2Role:       'Trainee Design Engineer',
    exp2Company:    'Industrial Company — Engineering Department',
    exp2Desc:       'Participated in designing plastic molds and metal parts, learning from a specialized engineering team and applying international quality standards.',
    exp3Role:       'Graduation Project — Gearbox',
    exp3Company:    'University — Mechanical Engineering Dept.',
    exp3Desc:       'Design and analysis of a multi-speed Gearbox as a graduation project, applying simulation software and stress analysis.',
    exp4Role:       'B.Sc. Mechanical Engineering',
    exp4Company:    'Faculty of Mechanical Engineering',
    exp4Desc:       'Specialization in machine design and manufacturing processes, with specialized courses in SolidWorks and CAD/CAM.',
    /* Services */
    servicesTitle:  'What I Offer\n<em>My Clients</em>',
    svc1Title:      'Mechanical Design',
    svc1Desc:       'Designing complex mechanical parts and assemblies to the highest engineering precision and operational efficiency standards.',
    svc2Title:      '3D Modeling',
    svc2Desc:       'Building accurate, complete 3D models ready for manufacturing and simulation using SolidWorks and AutoCAD.',
    svc3Title:      'Engineering Drawings',
    svc3Desc:       'Preparing technical drawings per international ISO/ASME standards with all dimensions and tolerances.',
    svc4Title:      'Mold Design',
    svc4Desc:       'Designing plastic injection molds and metal dies with parting line studies and cooling system design.',
    svc5Title:      'Design Optimization',
    svc5Desc:       'Reviewing and improving existing designs to reduce costs, increase efficiency, and enhance manufacturability.',
    svc6Title:      'Engineering Documentation',
    svc6Desc:       'Preparing complete documentation files including BOM, quality reports, CMF files, and process documentation.',
    /* CV */
    cvTitle:        'Download My CV',
    cvDesc:         'Get a complete, comprehensive PDF of my resume with details of all projects and experience',
    cvBtn:          'Download CV — PDF',
    cvReadyMsg:     'Done — CV is Ready!',
    /* Contact */
    contactTitle:   'Have a Project?\n<em>Let\'s Talk</em>',
    contactEmail:   'Email',
    contactPhone:   'Phone',
    formName:       'Name',
    formNamePh:     'Your full name',
    formEmail:      'Email',
    formSubject:    'Subject',
    formSubjectPh:  'Subject of your message',
    formMsg:        'Message',
    formMsgPh:      'Describe your project or inquiry...',
    formSend:       'Send Message',
    formSuccessMsg: "Thank you! I'll be in touch soon.",
    /* Form validation */
    errName:        'Name is required',
    errEmail:       'Invalid email address',
    errMsg:         'Message too short (at least 10 characters)',
    /* Footer */
    footerTagline:  'Mechanical Design Engineer — Building the future with precision and creativity',
    footerCopy:     '© 2026 Ghiyath Abd Al-Razzaq — All rights reserved',
    footerMade:     'Made with <span class="heart">♥</span> for Engineering',
    /* Typing strings */
    typingStrings: [
      'Mechanical Design Engineer',
      'SolidWorks & AutoCAD Expert',
      '3D Mold & Model Designer',
      'CNC Solutions & Manufacturing'
    ]
  },

  ar: {
    /* Page meta */
    pageTitle:      'غياث عبد الرزاق | مهندس تصميم ميكانيكي',
    metaDesc:       'موقع بورتفوليو غياث عبد الرزاق - مهندس تصميم ميكانيكي متخصص في SolidWorks وAutoCAD وتصميم القوالب والنمذجة ثلاثية الأبعاد',
    /* Nav */
    navHome:        'الرئيسية',
    navAbout:       'من أنا',
    navSkills:      'المهارات',
    navProjects:    'المشاريع',
    navExperience:  'الخبرة',
    navServices:    'الخدمات',
    navContact:     'تواصل',
    backTop:        'العودة للأعلى',
    /* Hero */
    heroAvailable:  'متاح للعمل',
    heroName:       'غياث عبد الرزاق',
    heroDesc:       'أحوّل الأفكار إلى تصاميم ميكانيكية دقيقة قابلة للتصنيع — من النمذجة ثلاثية الأبعاد إلى الرسومات الهندسية النهائية.',
    heroCta:        'تواصل معي',
    heroCV:         'تحميل السيرة الذاتية',
    statProjects:   'مشروع',
    stat3D:         'نموذج 3D',
    statYears:      'سنوات خبرة',
    scrollHint:     'مرّر للأسفل',
    /* About */
    aboutTitle:     'مهندس تصميم\n<em>يبني بالدقة والإبداع</em>',
    aboutP1:        'أنا غياث عبد الرزاق، مهندس تصميم ميكانيكي شغوف بتحويل الأفكار إلى حلول هندسية قابلة للتنفيذ. أؤمن بأن التصميم الجيد هو تقاطع بين الدقة الرياضية والرؤية الإبداعية.',
    aboutP2:        'أعمل على تصميم قطع الغيار والتجمعات الميكانيكية المعقدة، وتحسين قابلية التصنيع، وإعداد الرسومات الهندسية المفصّلة. التفاصيل الدقيقة ليست مجرد ضرورة — إنها فلسفة عملي.',
    trait1:         'دقة في القياسات والتوليرانس',
    trait2:         'تفكير تحليلي لحل المشكلات',
    trait3:         'تصاميم موجّهة للتصنيع DFM',
    trait4:         'توثيق هندسي منظّم ومفصّل',
    aboutCta:       'تحدّث معي',
    /* Skills */
    skillsTitle:    'الأدوات والكفاءات\n<em>التقنية</em>',
    skillCat1:      'برامج CAD',
    skillCat2:      'التصميم الميكانيكي',
    skillCat3:      'التصنيع',
    skillCat4:      'المهارات التقنية',
    catiaBeginner:  'CATIA (أساسي)',
    skill3DModel:   'النمذجة ثلاثية الأبعاد',
    skillMoldDes:   'تصميم القوالب',
    skillMechAnal:  'التحليل الميكانيكي',
    skillCNC:       'برمجة CNC',
    skillMfgOps:    'عمليات التصنيع',
    skillProdDes:   'تصميم المنتجات',
    skillEngDoc:    'التوثيق الهندسي',
    skillDFM:       'تحسين التصاميم DFM',
    /* Projects */
    projectsTitle:  'أبرز الأعمال\n<em>الهندسية</em>',
    filterAll:      'الكل',
    filterDesign:   'تصميم',
    filterMfg:      'تصنيع',
    filterAuto:     'أتمتة',
    viewDetails:    'عرض التفاصيل',
    proj1Title:     'ذراع روبوتية صناعية',
    proj1Desc:      'تصميم ذراع روبوتية 6 محاور للتطبيقات الصناعية، مع دراسة الحركة والتحليل الإجهادي للمفاصل.',
    proj2Title:     'قالب حقن بلاستيكي',
    proj2Desc:      'تصميم قالب حقن كامل لإنتاج غطاء بلاستيكي، شامل نظام التبريد وقنوات الحقن والتجويف.',
    proj3Title:     'علبة تروس متعددة السرعات',
    proj3Desc:      'تصميم Gearbox ذو 4 سرعات لناقل حركة صناعي، مع حساب نسب التروس وتحليل القوى المؤثرة.',
    proj4Title:     'تصميم آلة CNC مصغّرة',
    proj4Desc:      'تصميم كامل لآلة CNC ثلاثية المحاور، شامل الهيكل الميكانيكي وأنظمة الحركة وبرمجة G-Code.',
    proj5Title:     'نظام ناقل صناعي',
    proj5Desc:      'تصميم خط نقل مواد صناعي بطول 8 أمتار مع منظومة الدحارج وحزام النقل وأنظمة الدفع الآلي.',
    proj6Title:     'نموذج منتج صناعي',
    proj6Desc:      'تصميم وتطوير منتج استهلاكي من الفكرة حتى النموذج الأولي، مع مراعاة معايير التصنيع والتكلفة.',
    /* Stats */
    statLabelProjects:  'مشروع مكتمل',
    statLabel3D:        'نموذج ثلاثي الأبعاد',
    statLabelHours:     'ساعة تصميم',
    statLabelDrawings:  'رسمة هندسية',
    /* Experience */
    expTitle:       'المسيرة المهنية\n<em>والأكاديمية</em>',
    badgeWork:      'عمل',
    badgeIntern:    'تدريب',
    badgeEdu:       'تعليم',
    exp1Role:       'مهندس تصميم ميكانيكي',
    exp1Company:    'شركة هندسية — (مستقل / Freelance)',
    exp1Desc:       'تصميم قطع ميكانيكية مخصصة، إعداد رسومات للتصنيع، التواصل مع ورش التصنيع لضمان جودة التنفيذ.',
    exp2Role:       'مهندس تصميم متدرب',
    exp2Company:    'شركة صناعية — قسم الهندسة',
    exp2Desc:       'المشاركة في تصميم قوالب بلاستيكية وأجزاء معدنية، التعلم من فريق هندسي متخصص وتطبيق معايير الجودة الدولية.',
    exp3Role:       'مشروع التخرج — علبة تروس',
    exp3Company:    'الجامعة — قسم الهندسة الميكانيكية',
    exp3Desc:       'تصميم وتحليل Gearbox متعدد السرعات كمشروع تخرج، مع تطبيق برامج المحاكاة والتحليل الإجهادي.',
    exp4Role:       'بكالوريوس هندسة ميكانيكية',
    exp4Company:    'كلية الهندسة الميكانيكية',
    exp4Desc:       'التخصص في تصميم الآلات وعمليات التصنيع، مع دورات متخصصة في SolidWorks وCAD/CAM.',
    /* Services */
    servicesTitle:  'ماذا أقدّم\n<em>لعملائي</em>',
    svc1Title:      'التصميم الميكانيكي',
    svc1Desc:       'تصميم قطع وتجمعات ميكانيكية معقدة بأعلى معايير الدقة الهندسية والكفاءة التشغيلية.',
    svc2Title:      'النمذجة ثلاثية الأبعاد',
    svc2Desc:       'بناء نماذج 3D دقيقة وكاملة قابلة للتصنيع والمحاكاة باستخدام SolidWorks وAutoCAD.',
    svc3Title:      'الرسومات الهندسية',
    svc3Desc:       'إعداد رسومات فنية وتقنية وفق المعايير الدولية ISO/ASME مع جميع الأبعاد والتوليرانسات.',
    svc4Title:      'تصميم القوالب',
    svc4Desc:       'تصميم قوالب الحقن البلاستيكية والقوالب المعدنية مع دراسة خطوط الفصل وأنظمة التبريد.',
    svc5Title:      'تحسين التصاميم',
    svc5Desc:       'مراجعة التصاميم الحالية وتحسينها لتقليل التكاليف وزيادة الكفاءة وتحسين قابلية التصنيع.',
    svc6Title:      'التوثيق الهندسي',
    svc6Desc:       'إعداد ملفات التوثيق الكاملة من BOM وتقارير الجودة وملفات CMF وتوثيق العمليات.',
    /* CV */
    cvTitle:        'حمّل سيرتي الذاتية',
    cvDesc:         'احصل على نسخة PDF كاملة وشاملة لسيرتي الذاتية مع تفاصيل جميع المشاريع والخبرات',
    cvBtn:          'تحميل السيرة الذاتية — PDF',
    cvReadyMsg:     'تم الإعداد — CV جاهز!',
    /* Contact */
    contactTitle:   'هل لديك مشروع؟\n<em>لنتحدث</em>',
    contactEmail:   'البريد الإلكتروني',
    contactPhone:   'رقم الهاتف',
    formName:       'الاسم',
    formNamePh:     'اسمك الكامل',
    formEmail:      'البريد الإلكتروني',
    formSubject:    'الموضوع',
    formSubjectPh:  'موضوع رسالتك',
    formMsg:        'الرسالة',
    formMsgPh:      'صف مشروعك أو استفسارك...',
    formSend:       'إرسال الرسالة',
    formSuccessMsg: 'شكراً! سأتواصل معك قريباً.',
    /* Form validation */
    errName:        'الاسم مطلوب',
    errEmail:       'بريد إلكتروني غير صحيح',
    errMsg:         'الرسالة قصيرة جداً (10 أحرف على الأقل)',
    /* Footer */
    footerTagline:  'مهندس تصميم ميكانيكي — بناء المستقبل بالدقة والإبداع',
    footerCopy:     '© 2026 غياث عبد الرزاق — جميع الحقوق محفوظة',
    footerMade:     'صُنع بـ <span class="heart">♥</span> للهندسة',
    /* Typing strings */
    typingStrings: [
      'مهندس تصميم ميكانيكي',
      'خبير SolidWorks & AutoCAD',
      'مصمم قوالب ونماذج 3D',
      'حلول CNC وعمليات التصنيع'
    ]
  }
};

/* ─── Current language state ─── */
let currentLang = localStorage.getItem('preferred-lang') || 'en';
// Typing effect state — reset on language switch
let typingInstance = { si: 0, ci: 0, deleting: false, timer: null };

/* ─── Apply translations to DOM ─── */
function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  /* 1. html tag */
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'en' ? 'rtl' : 'ltr';

  /* 2. <title> */
  document.title = t.pageTitle;

  /* 3. meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = t.metaDesc;

  /* 4. data-i18n text nodes (supports \n + <em> in translations) */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    const raw = t[key];
    // Replace \n with <br/> before setting innerHTML
    el.innerHTML = raw.replace(/\n/g, '<br/>');
  });

  /* 5. data-i18n-attr: "attr1|key1,attr2|key2" */
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(',').forEach(pair => {
      const [attr, key] = pair.trim().split('|');
      if (t[key] !== undefined) el.setAttribute(attr, t[key]);
    });
  });

  /* 6. lang toggle label shows target language */
  const label = document.getElementById('langLabel');
  if (label) label.textContent = lang === 'ar' ? 'EN' : 'AR';

  /* 7. Restart typing effect */
  clearTimeout(typingInstance.timer);
  typingInstance = { si: 0, ci: 0, deleting: false, timer: null };
  const el = document.getElementById('typedText');
  if (el) { el.textContent = ''; startTyping(t.typingStrings); }

  /* 8. Persist preference */
  localStorage.setItem('preferred-lang', lang);
  currentLang = lang;
}

/* ─── Toggle between languages ─── */
function switchLanguage() {
  const next = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations(next);
}

/* ─── Wire up toggle button ─── */
document.getElementById('langToggle')?.addEventListener('click', switchLanguage);

/* ─── Initialize on load ─── */
applyTranslations(currentLang);

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

/* ─── TYPING EFFECT (driven by i18n) ─── */
function startTyping(strings) {
  const el = document.getElementById('typedText');
  if (!el || !strings || strings.length === 0) return;

  function type() {
    const str   = strings[typingInstance.si % strings.length];
    const speed = typingInstance.deleting ? 40 : 80;
    el.textContent = str.slice(0, typingInstance.ci);

    if (!typingInstance.deleting && typingInstance.ci === str.length) {
      typingInstance.timer = setTimeout(() => {
        typingInstance.deleting = true;
        type();
      }, 2200);
      return;
    }
    if (typingInstance.deleting && typingInstance.ci === 0) {
      typingInstance.deleting = false;
      typingInstance.si = (typingInstance.si + 1) % strings.length;
    }
    typingInstance.ci += typingInstance.deleting ? -1 : 1;
    typingInstance.timer = setTimeout(type, speed);
  }
  typingInstance.timer = setTimeout(type, 1200);
}

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
  en: {
    'Industrial Robotic Arm':      'Design of a 6-axis industrial robotic arm using SolidWorks, with joint motion study and stress analysis under various loads. The project included complete modeling, manufacturing drawings, and mass and torque analysis.',
    'Plastic Injection Mold':      'Design of a complete injection mold for producing a plastic cover sized 150×80mm. Includes: cavity and core design, cooling system, injection gates, and ejection mechanism. An optimum injection cycle was achieved through parting line study.',
    'Multi-Speed Gearbox':         'Design of a 4-speed gearbox for an industrial power transmission. Includes gear ratio calculations, bearing selection, tooth stress analysis, and housing design.',
    'Mini CNC Machine Design':     'Design of a 3-axis CNC machine for precision industries. Includes aluminum frame, stepper motor systems, electronic board, and G-Code programming for cutting paths.',
    'Industrial Conveyor System':  'Design of an 8-meter conveyor capable of carrying loads up to 50 kg. Included PVC belt study, roller and wheel design, steel frame assembly, and electric motor with gearbox.',
    'Industrial Product Model':    'Design and development of an integrated consumer product from concept to prototype. Project included concept sketching, 3D modeling, material selection, and manufacturing file preparation.'
  },
  ar: {
    'ذراع روبوتية صناعية':    'تصميم ذراع روبوتية صناعية من 6 محاور باستخدام SolidWorks، مع دراسة حركة المفاصل وتحليل الإجهاد تحت الأحمال المختلفة. المشروع شمل النمذجة الكاملة والرسومات التنفيذية وتحليل الكتلة والعزم.',
    'قالب حقن بلاستيكي':      'تصميم قالب حقن متكامل لإنتاج غطاء بلاستيكي بحجم 150×80mm. يتضمن المشروع: تصميم التجويف والنواة، نظام التبريد، بوابات الحقن، وآلية الإخراج. تم تحقيق دورة حقن أمثل بفضل دراسة خطوط الفصل.',
    'علبة تروس متعددة السرعات': 'تصميم Gearbox ذو 4 سرعات لناقل حركة صناعي. يشمل حساب نسب التروس، اختيار المحامل، تحليل الإجهاد على أسنان التروس، وتصميم علبة الحماية.',
    'تصميم آلة CNC مصغّرة':   'تصميم آلة CNC ثلاثية المحاور للاستخدام في الصناعات الدقيقة. يتضمن هيكل الألومنيوم، أنظمة Stepper Motors، اللوحة الإلكترونية، وبرمجة G-Code لمسارات القطع.',
    'نظام ناقل صناعي':        'تصميم خط نقل بطول 8 أمتار قادر على حمل أوزان حتى 50kg. شمل دراسة حزام PVC، تصميم الدحارج والعجلات، منظومة الإطار الفولاذي، والمحرك الكهربائي مع صندوق التروس.',
    'نموذج منتج صناعي':       'تصميم وتطوير منتج استهلاكي متكامل من مرحلة الفكرة حتى النموذج الأولي. شمل المشروع رسم المفاهيم، النمذجة ثلاثية الأبعاد، اختيار المواد، وتحضير ملفات التصنيع.'
  }
};

document.querySelectorAll('.proj-view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card  = btn.closest('.project-card');
    const titleEl = card.querySelector('.proj-title');
    // Use the data-i18n key to find the title in the current language
    const i18nKey = titleEl.dataset.i18n;
    const title = i18nKey
      ? (translations[currentLang][i18nKey] || titleEl.textContent)
      : titleEl.textContent;
    modalTitle.textContent = title;
    const details = projectDetails[currentLang] || projectDetails.en;
    modalDesc.textContent  = details[title] || (currentLang === 'ar' ? 'تفاصيل المشروع غير متوفرة حالياً.' : 'Project details not available.');
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
  btn.innerHTML = '<svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> ' + (translations[currentLang].cvReadyMsg || 'Done — CV Ready!');
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
    document.getElementById('nameErr').textContent = translations[currentLang].errName;
    name.focus(); valid = false;
  }
  if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    document.getElementById('emailErr').textContent = translations[currentLang].errEmail;
    if (valid) email.focus(); valid = false;
  }
  if (!msg.value.trim() || msg.value.trim().length < 10) {
    document.getElementById('msgErr').textContent = translations[currentLang].errMsg;
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
