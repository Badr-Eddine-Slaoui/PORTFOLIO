/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

/* ── Translation data ──────────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      certifications: 'Certifications',
      contact: 'Contact',
      downloadCV: 'Download CV',
    },
    cv: {
      fsEn: 'Full-Stack CV (EN)',
      fsFr: 'Full-Stack CV (FR)',
      aiEn: 'AI / ML CV (EN)',
      aiFr: 'AI / ML CV (FR)',
    },
    hero: {
      badge: 'Available for Opportunities',
      role: 'Full-Stack Developer & AI/ML Engineer',
      quote: 'Designing scalable systems and turning ideas into production-ready digital products — while turning data into reliable predictions and building intelligent systems from experimentation to deployment.',
      location: 'Safi, Morocco',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
    },
    stats: {
      exp: 'Years Exp.',
      projects: 'Projects',
      tech: 'Technologies',
    },
    about: {
      label: 'About Me',
      title: 'Who I Am',
      subtitle: 'A passionate developer bridging the worlds of Full-Stack Engineering and Artificial Intelligence.',
      para1: 'I\'m Badr Eddine Slaoui, a Junior Full-Stack Web Developer and AI/ML Engineer based in Safi, Morocco. I specialize in building production-ready web applications with Laravel, React, Vue, and Node.js — while also developing end-to-end machine learning systems with Python, Scikit-learn, FastAPI, and MLOps tools.',
      para2: 'I thrive at the intersection of clean architecture and intelligent automation, turning complex requirements into scalable, maintainable digital products.',
      langTitle: 'Languages',
    },
    skills: {
      label: 'Skills',
      title: 'Technical Expertise',
      subtitle: 'A comprehensive stack spanning Full-Stack Development and AI/Machine Learning engineering.',
      techTitle: 'Technologies & Tools',
    },
    experience: {
      label: 'Experience',
      title: 'Professional Journey',
      subtitle: 'Hands-on internship experience building real-world products in fast-paced environments.',
      onsite: 'On-site',
      remote: 'Remote',
    },
    projects: {
      label: 'Projects',
      title: 'Featured Work',
      subtitle: 'A selection of projects combining full-stack engineering and AI/ML development.',
      all: 'All',
      ai: 'AI / ML',
      fullstack: 'Full-Stack',
      viewOnGithub: 'View on GitHub',
    },
    education: {
      label: 'Education',
      title: 'Academic Background',
      subtitle: 'A solid foundation in computer science, networks, and modern software engineering.',
      location: 'Safi, Morocco',
    },
    certifications: {
      label: 'Certifications',
      title: 'Licenses & Certifications',
      subtitle: 'Professional certifications validating expertise across multiple domains.',
      viewCert: 'View Certificate',
    },
    contact: {
      label: 'Contact',
      title: 'Get In Touch',
      subtitle: 'Open to full-time roles, internships, freelance projects, and collaborations.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      cvTitle: 'Download My CV',
      cvSubtitle: 'Choose the version that suits your needs.',
    },
    footer: 'Built with passion by Badr Eddine Slaoui · 2026',
  },

  fr: {
    dir: 'ltr',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      certifications: 'Certifications',
      contact: 'Contact',
      downloadCV: 'Télécharger CV',
    },
    cv: {
      fsEn: 'CV Full-Stack (EN)',
      fsFr: 'CV Full-Stack (FR)',
      aiEn: 'CV IA / ML (EN)',
      aiFr: 'CV IA / ML (FR)',
    },
    hero: {
      badge: 'Disponible pour des opportunités',
      role: 'Développeur Full-Stack & Ingénieur IA/ML',
      quote: 'Concevoir des systèmes évolutifs et transformer des idées en produits numériques prêts pour la production — tout en transformant les données en prédictions fiables et en construisant des systèmes intelligents.',
      location: 'Safi, Maroc',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
    },
    stats: {
      exp: 'Ans d\'Exp.',
      projects: 'Projets',
      tech: 'Technologies',
    },
    about: {
      label: 'À propos',
      title: 'Qui suis-je',
      subtitle: 'Un développeur passionné à la croisée du développement Full-Stack et de l\'Intelligence Artificielle.',
      para1: 'Je suis Badr Eddine Slaoui, développeur web Full-Stack junior et ingénieur IA/ML basé à Safi, Maroc. Je me spécialise dans la construction d\'applications web prêtes pour la production avec Laravel, React, Vue et Node.js, tout en développant des systèmes de machine learning avec Python et les outils MLOps.',
      para2: 'Je m\'épanouis à l\'intersection de l\'architecture propre et de l\'automatisation intelligente, transformant des exigences complexes en produits numériques évolutifs et maintenables.',
      langTitle: 'Langues',
    },
    skills: {
      label: 'Compétences',
      title: 'Expertise Technique',
      subtitle: 'Un stack complet couvrant le développement Full-Stack et l\'ingénierie IA/ML.',
      techTitle: 'Technologies & Outils',
    },
    experience: {
      label: 'Expérience',
      title: 'Parcours Professionnel',
      subtitle: 'Des stages pratiques dans des environnements dynamiques, construisant des produits réels.',
      onsite: 'Présentiel',
      remote: 'Télétravail',
    },
    projects: {
      label: 'Projets',
      title: 'Travaux Sélectionnés',
      subtitle: 'Une sélection de projets combinant ingénierie full-stack et développement IA/ML.',
      all: 'Tous',
      ai: 'IA / ML',
      fullstack: 'Full-Stack',
      viewOnGithub: 'Voir sur GitHub',
    },
    education: {
      label: 'Formation',
      title: 'Parcours Académique',
      subtitle: 'Une solide formation en informatique, réseaux et génie logiciel moderne.',
      location: 'Safi, Maroc',
    },
    certifications: {
      label: 'Certifications',
      title: 'Licences & Certifications',
      subtitle: 'Des certifications professionnelles validant l\'expertise dans plusieurs domaines.',
      viewCert: 'Voir le certificat',
    },
    contact: {
      label: 'Contact',
      title: 'Prendre Contact',
      subtitle: 'Ouvert aux postes à plein temps, stages, projets freelance et collaborations.',
      emailLabel: 'Email',
      phoneLabel: 'Téléphone',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      cvTitle: 'Télécharger mon CV',
      cvSubtitle: 'Choisissez la version adaptée à vos besoins.',
    },
    footer: 'Créé avec passion par Badr Eddine Slaoui · 2026',
  },

  ar: {
    dir: 'rtl',
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      experience: 'الخبرة',
      projects: 'المشاريع',
      education: 'التعليم',
      certifications: 'الشهادات',
      contact: 'اتصل بي',
      downloadCV: 'تحميل السيرة',
    },
    cv: {
      fsEn: 'CV تطوير الويب (EN)',
      fsFr: 'CV تطوير الويب (FR)',
      aiEn: 'CV الذكاء الاصطناعي (EN)',
      aiFr: 'CV الذكاء الاصطناعي (FR)',
    },
    hero: {
      badge: 'متاح للفرص',
      role: 'مطوّر Full-Stack ومهندس ذكاء اصطناعي',
      quote: 'تصميم أنظمة قابلة للتوسع وتحويل الأفكار إلى منتجات رقمية جاهزة للإنتاج — مع تحويل البيانات إلى تنبؤات موثوقة وبناء أنظمة ذكية من التجريب إلى النشر.',
      location: 'آسفي، المغرب',
      ctaProjects: 'عرض المشاريع',
      ctaContact: 'تواصل معي',
    },
    stats: {
      exp: 'سنوات خبرة',
      projects: 'مشروع',
      tech: 'تقنية',
    },
    about: {
      label: 'عني',
      title: 'من أنا',
      subtitle: 'مطور شغوف يجمع بين عالم التطوير الكامل والذكاء الاصطناعي.',
      para1: 'أنا بدر الدين السلاوي، مطور ويب Full-Stack ومهندس ذكاء اصطناعي من آسفي، المغرب. أتخصص في بناء تطبيقات ويب جاهزة للإنتاج باستخدام Laravel و React و Vue و Node.js، إلى جانب تطوير أنظمة التعلم الآلي باستخدام Python وأدوات MLOps.',
      para2: 'أتميز في نقطة التقاطع بين البنية النظيفة والأتمتة الذكية، محوّلاً المتطلبات المعقدة إلى منتجات رقمية قابلة للتطوير والصيانة.',
      langTitle: 'اللغات',
    },
    skills: {
      label: 'المهارات',
      title: 'الخبرة التقنية',
      subtitle: 'مجموعة شاملة تغطي تطوير الويب الكامل وهندسة الذكاء الاصطناعي.',
      techTitle: 'التقنيات والأدوات',
    },
    experience: {
      label: 'الخبرة',
      title: 'المسار المهني',
      subtitle: 'خبرة تدريبية عملية في بيئات ديناميكية لبناء منتجات حقيقية.',
      onsite: 'حضوري',
      remote: 'عن بُعد',
    },
    projects: {
      label: 'المشاريع',
      title: 'أعمال مختارة',
      subtitle: 'مجموعة مختارة من المشاريع التي تجمع هندسة الويب الكاملة وتطوير الذكاء الاصطناعي.',
      all: 'الكل',
      ai: 'ذكاء اصطناعي',
      fullstack: 'Full-Stack',
      viewOnGithub: 'عرض على GitHub',
    },
    education: {
      label: 'التعليم',
      title: 'المسار الأكاديمي',
      subtitle: 'أساس متين في علوم الحاسوب والشبكات وهندسة البرمجيات الحديثة.',
      location: 'آسفي، المغرب',
    },
    certifications: {
      label: 'الشهادات',
      title: 'التراخيص والشهادات',
      subtitle: 'شهادات مهنية تُثبت الكفاءة في مجالات متعددة.',
      viewCert: 'عرض الشهادة',
    },
    contact: {
      label: 'اتصل بي',
      title: 'تواصل معي',
      subtitle: 'متاح للوظائف بدوام كامل، التدريب، المشاريع الحرة والتعاون.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      githubLabel: 'GitHub',
      linkedinLabel: 'LinkedIn',
      cvTitle: 'تحميل سيرتي الذاتية',
      cvSubtitle: 'اختر النسخة التي تناسب احتياجاتك.',
    },
    footer: 'صُنع بشغف من قِبَل بدر الدين السلاوي · 2026',
  },
};

/* ── Project data ──────────────────────────────────────────── */
const PROJECTS = [
  {
    name: 'MétéoRisk',
    type: 'ai',
    url: 'https://github.com/Badr-Eddine-Slaoui/M-t-oRisk',
    icon: 'fa-solid fa-cloud-bolt',
    year: '2026',
    desc: {
      en: 'Weather Risk ETL Pipeline & Analytics Dashboard — real-time ingestion, transformation, and visualization of weather hazard data.',
      fr: 'Pipeline ETL de risques météo & tableau de bord analytique — ingestion, transformation et visualisation de données de risques météorologiques en temps réel.',
      ar: 'خط أنابيب ETL لمخاطر الطقس ولوحة تحكم تحليلية — استيعاب وتحويل وتصور بيانات مخاطر الطقس في الوقت الفعلي.',
    },
    tech: ['Python', 'Pandas', 'SQLAlchemy', 'PostgreSQL', 'Apache Airflow', 'Docker', 'Streamlit', 'Plotly'],
  },
  {
    name: 'DeliveryETA',
    type: 'ai',
    url: 'https://github.com/Badr-Eddine-Slaoui/DeliveryETA',
    icon: 'fa-solid fa-motorcycle',
    year: '2026',
    desc: {
      en: 'End-to-End Food Delivery Time Prediction System using gradient boosting and hyperparameter optimization, served via FastAPI.',
      fr: 'Système de prédiction du temps de livraison alimentaire de bout en bout utilisant le gradient boosting et l\'optimisation des hyperparamètres.',
      ar: 'نظام تنبؤ شامل بوقت توصيل الطعام باستخدام gradient boosting وتحسين المعاملات الفائقة، يُقدَّم عبر FastAPI.',
    },
    tech: ['Python', 'Scikit-learn', 'HistGradientBoosting', 'FastAPI', 'Streamlit', 'Docker', 'Joblib'],
  },
  {
    name: 'GlucoProfile',
    type: 'ai',
    url: 'https://github.com/Badr-Eddine-Slaoui/GlucoProfile',
    icon: 'fa-solid fa-heart-pulse',
    year: '2026',
    desc: {
      en: 'Clinical Profiling & Diabetes Risk Classification using K-Means clustering, imbalanced learning, MLflow tracking, and Airflow pipelines.',
      fr: 'Profilage clinique et classification du risque de diabète via clustering K-Means, apprentissage déséquilibré, suivi MLflow et pipelines Airflow.',
      ar: 'التصنيف السريري ومخاطر السكري باستخدام K-Means وتتبع MLflow وخطوط أنابيب Airflow.',
    },
    tech: ['Python', 'Scikit-learn', 'K-Means', 'MLflow', 'Airflow', 'FastAPI', 'Streamlit', 'Docker'],
  },
  {
    name: 'Rewire',
    type: 'fullstack',
    url: 'https://github.com/Badr-Eddine-Slaoui/Rewire',
    icon: 'fa-solid fa-gears',
    year: '2026',
    desc: {
      en: 'Automated Project & Skills Evaluation Platform built with Laravel Octane, Nuxt.js, Go microservices, deployed on AWS.',
      fr: 'Plateforme automatisée d\'évaluation de projets et compétences avec Laravel Octane, Nuxt.js, microservices Go, déployée sur AWS.',
      ar: 'منصة تقييم تلقائية للمشاريع والمهارات مبنية بـ Laravel Octane و Nuxt.js وخدمات Go المصغرة على AWS.',
    },
    tech: ['Laravel Octane', 'Nuxt.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'JavaScript'],
  },
  {
    name: 'Mavel',
    type: 'fullstack',
    url: 'https://github.com/Badr-Eddine-Slaoui/Mavel',
    icon: 'fa-solid fa-code',
    year: '2025',
    desc: {
      en: 'Custom PHP MVC Framework built from scratch with its own ORM, routing engine, middleware pipeline, and CLI tooling.',
      fr: 'Framework PHP MVC personnalisé construit de zéro avec son propre ORM, moteur de routage, pipeline de middleware et outils CLI.',
      ar: 'إطار عمل PHP MVC مخصص مبني من الصفر مع ORM خاص ومحرك توجيه ومسار middleware وأدوات CLI.',
    },
    tech: ['PHP', 'MVC Architecture', 'ORM', 'Routing', 'Middleware', 'CLI'],
  },
  {
    name: 'FireCamp',
    type: 'fullstack',
    url: 'https://github.com/Badr-Eddine-Slaoui/FireCamp',
    icon: 'fa-solid fa-fire',
    year: '2023–2024',
    desc: {
      en: 'Real-Time Social Networking Platform (MERN Stack) with posts, real-time chat, JWT auth, Redux state management, and WebSockets.',
      fr: 'Plateforme de réseau social en temps réel (MERN Stack) avec publications, chat en direct, auth JWT, Redux et WebSockets.',
      ar: 'منصة شبكة اجتماعية في الوقت الفعلي (MERN) مع المنشورات والدردشة الحية وتوثيق JWT وإدارة حالة Redux وWebSockets.',
    },
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux', 'WebSockets', 'Firebase'],
  },
];

/* ── State ──────────────────────────────────────────────── */
let currentLang = 'en';
let currentFilter = 'all';

/* ── DOM helpers ──────────────────────────────────────────── */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Apply language ───────────────────────────────────────── */
function applyLang(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;

  // highlight active lang button
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* ── Navbar ── */
  $$('[data-t]').forEach(el => {
    const key = el.dataset.t;
    const parts = key.split('.');
    let val = t;
    for (const p of parts) val = val?.[p];
    if (val !== undefined) el.textContent = val;
  });

  /* ── Projects (re-render with current filter) ── */
  renderProjects(currentFilter);

  /* ── Filter buttons ── */
  $$('.filter-btn').forEach(btn => {
    const fKey = btn.dataset.filter;
    if (fKey === 'all') btn.textContent = t.projects.all;
    else if (fKey === 'ai') btn.textContent = t.projects.ai;
    else if (fKey === 'fullstack') btn.textContent = t.projects.fullstack;
  });
}

/* ── Render projects ──────────────────────────────────────── */
function renderProjects(filter = 'all') {
  currentFilter = filter;
  const t = TRANSLATIONS[currentLang];
  const container = $('#projects-grid');
  if (!container) return;

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  container.innerHTML = filtered.map(p => {
    const badgeClass = p.type === 'ai' ? 'badge-ai' : p.type === 'fullstack' ? 'badge-fullstack' : 'badge-personal';
    const badgeLabel = p.type === 'ai' ? t.projects.ai : 'Full-Stack';
    const desc = p.desc[currentLang] || p.desc.en;
    const techPills = p.tech.map(tech => `<span class="tech-pill">${tech}</span>`).join('');
    return `
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="project-card reveal-up">
        <div class="project-card-header">
          <div class="project-icon-wrap"><i class="${p.icon}"></i></div>
          <span class="project-type-badge ${badgeClass}">${badgeLabel}</span>
        </div>
        <div class="project-name">${p.name}</div>
        <p class="project-desc">${desc}</p>
        <div class="project-tech">${techPills}</div>
        <div class="project-footer">
          <span class="project-link"><i class="fab fa-github"></i> ${t.projects.viewOnGithub} <i class="fa-solid fa-arrow-right"></i></span>
          <span class="project-year">${p.year}</span>
        </div>
      </a>
    `;
  }).join('');

  // trigger reveal for newly injected cards
  requestAnimationFrame(() => {
    $$('#projects-grid .reveal-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  });

  // update filter button active state
  $$('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
}

/* ── Navbar scroll ────────────────────────────────────────── */
function initNavbar() {
  const navbar = $('#navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveNavLink();
    // scroll-to-top
    $('#scroll-top').classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

/* ── Active nav link on scroll ─────────────────────────────── */
function updateActiveNavLink() {
  const sections = $$('section[id]');
  const scrollY = window.scrollY + 80;
  let currentId = '';
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollY) currentId = sec.id;
  });
  $$('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === currentId);
  });
}

/* ── Smooth scroll ────────────────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  // close mobile menu
  $('#mobile-menu').classList.remove('open');
  $('#hamburger').classList.remove('open');
}

/* ── Hamburger ────────────────────────────────────────────── */
function initHamburger() {
  const hamburger = $('#hamburger');
  const menu = $('#mobile-menu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
  });
}

/* ── CV Dropdown ──────────────────────────────────────────── */
function initCVDropdown() {
  const trigger = $('#cv-trigger');
  const menu = $('#cv-menu');
  if (!trigger || !menu) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  document.addEventListener('click', () => menu.classList.remove('open'));
}

/* ── Intersection Observer (reveal) ──────────────────────── */
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  $$('.reveal-up').forEach(el => observer.observe(el));

  // Also observe lang bars — trigger as soon as about section appears
  const triggerLangBars = () => $$('.lang-bar-fill').forEach(bar => bar.classList.add('animated'));
  const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        triggerLangBars();
        langObserver.disconnect();
      }
    });
  }, { threshold: 0.1 });
  const langSection = $('#about');
  if (langSection) {
    // If already in view on load (e.g. page refresh mid-scroll), trigger immediately
    const rect = langSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      triggerLangBars();
    } else {
      langObserver.observe(langSection);
    }
  }
}

/* ── Re-observe after DOM updates ─────────────────────────── */
function reObserveReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  $$('.reveal-up:not(.visible)').forEach(el => observer.observe(el));
}

/* ── Scroll to top ────────────────────────────────────────── */
function initScrollTop() {
  $('#scroll-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Language buttons
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Nav links (desktop)
  $$('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', () => scrollToSection(link.dataset.section));
  });

  // Nav links (mobile)
  $$('.mobile-nav-link[data-section]').forEach(link => {
    link.addEventListener('click', () => scrollToSection(link.dataset.section));
  });

  // Project filter buttons
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => renderProjects(btn.dataset.filter));
  });

  // Hero CTA
  const ctaProjects = $('#cta-projects');
  if (ctaProjects) ctaProjects.addEventListener('click', () => scrollToSection('projects'));
  const ctaContact = $('#cta-contact');
  if (ctaContact) ctaContact.addEventListener('click', () => scrollToSection('contact'));

  initNavbar();
  initHamburger();
  initCVDropdown();
  initScrollTop();

  // Initial render
  renderProjects('all');
  applyLang('en');

  // Reveal after render
  setTimeout(() => {
    initReveal();
  }, 100);
});
