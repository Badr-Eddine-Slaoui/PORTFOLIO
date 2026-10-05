/* ============================================================
   PORTFOLIO ENGINE — main.js
   Architecture: High-Tech Cyber Engineering / Linux / AI
   Features:
   - Multilingual Engine (EN, FR, AR with RTL support)
   - Interactive Linux Terminal Sandbox (CLI commands & neofetch)
   - Dynamic Typewriter Subtitle Engine
   - Real-time Project Filtering & Keyword Search
   - Real-time Skills Matrix Highlighting
   - Clipboard One-Click Copy & Toast Notifications
   - Smooth Nav Scroll Spy & Mobile Menu Control
   ============================================================ */

/* ── 1. TRANSLATION SYSTEM ──────────────────────────────────── */
const TRANSLATIONS = {
  en: {
    dir: 'ltr',
    hud: {
      status: 'SYS: ONLINE',
      location: 'SAFI, MOROCCO [UTC+1]',
      availability: 'AVAILABLE FOR WORK',
    },
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      certifications: 'Certs',
      contact: 'Contact',
      downloadCV: 'CV Hub',
    },
    cv: {
      fsEn: 'Full-Stack CV (EN)',
      fsFr: 'Full-Stack CV (FR)',
      aiEn: 'AI / ML CV (EN)',
      aiFr: 'AI / ML CV (FR)',
    },
    hero: {
      badge: 'Available for Opportunities',
      quote: 'Designing resilient, scalable web architectures and engineering production-ready predictive AI systems — bridging modern software engineering with end-to-end data intelligence.',
      ctaProjects: 'Explore Projects',
      ctaCV: 'Download CVs',
      ctaContact: 'Get In Touch',
      location: 'Safi, Morocco',
    },
    stats: {
      exp: 'Years Exp.',
      projects: 'Projects',
      tech: 'Tech Stack',
    },
    about: {
      label: 'System Specifications',
      title: 'Who I Am',
      subtitle: 'A passionate developer bridging the worlds of Full-Stack Web Engineering and Artificial Intelligence.',
      para1: 'I\'m Badr Eddine Slaoui, a Full-Stack Web Developer and AI/ML Engineer based in Safi, Morocco. I specialize in building production-ready web applications with Laravel, React, Vue, and Node.js — while also developing end-to-end machine learning systems with Python, Scikit-learn, FastAPI, and MLOps tools.',
      para2: 'I thrive at the intersection of clean architecture and intelligent automation, turning complex operational requirements into scalable, secure, and maintainable digital products.',
      langTitle: 'Languages Proficiency',
    },
    skills: {
      label: 'Skills Matrix',
      title: 'Technical Expertise',
      subtitle: 'A structured overview of core technologies spanning Full-Stack Engineering, Machine Learning, and DevOps.',
      techTitle: 'Primary Tooling & Ecosystem Matrix',
    },
    experience: {
      label: 'Commit History',
      title: 'Professional Journey',
      subtitle: 'Hands-on experience delivering robust systems in fast-paced production and team environments.',
      onsite: 'On-site',
      remote: 'Remote',
    },
    projects: {
      label: 'Projects Matrix',
      title: 'Featured Engineering Work',
      subtitle: 'A curated collection of full-stack platforms, Machine Learning pipelines, and custom frameworks.',
      all: 'All Systems',
      ai: 'AI & ML',
      fullstack: 'Full-Stack',
      viewRepo: 'Source Code',
    },
    education: {
      label: 'Academic Credentials',
      title: 'Academic Background',
      subtitle: 'Rigorous software engineering, systems networking, and mathematical fundamentals.',
      location: 'Safi, Morocco',
    },
    certifications: {
      label: 'Verified Credentials',
      title: 'Licenses & Certifications',
      subtitle: 'Industry-recognized assessments validating problem-solving, language proficiency, and technical frameworks.',
    },
    contact: {
      label: 'Connection Terminal',
      title: 'CV Hub & Direct Connection',
      subtitle: 'Choose your preferred curriculum vitae version and get in direct contact for engineering roles or collaborations.',
      cvTitle: 'Curriculum Vitae Repository',
      cvSubtitle: 'Tailored CV versions available for direct download in both English and French.',
      emailLabel: 'Email Address',
      phoneLabel: 'Phone / WhatsApp',
    },
    footer: 'Engineering Portfolio © 2026 Badr Eddine Slaoui. Built with Vanilla Web Standards.',
  },

  fr: {
    dir: 'ltr',
    hud: {
      status: 'SYS: EN LIGNE',
      location: 'SAFI, MAROC [UTC+1]',
      availability: 'DISPONIBLE POUR MISSIONS',
    },
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expérience',
      projects: 'Projets',
      education: 'Formation',
      certifications: 'Certifs',
      contact: 'Contact',
      downloadCV: 'Espace CV',
    },
    cv: {
      fsEn: 'CV Full-Stack (EN)',
      fsFr: 'CV Full-Stack (FR)',
      aiEn: 'CV IA / ML (EN)',
      aiFr: 'CV IA / ML (FR)',
    },
    hero: {
      badge: 'Disponible pour opportunités',
      quote: 'Conception d\'architectures web résilientes et évolutives et ingénierie de systèmes d\'IA prédictifs prêts pour la production — unissant génie logiciel moderne et intelligence des données.',
      ctaProjects: 'Explorer Projets',
      ctaCV: 'Télécharger CVs',
      ctaContact: 'Me Contacter',
      location: 'Safi, Maroc',
    },
    stats: {
      exp: 'Ans d\'Exp.',
      projects: 'Projets',
      tech: 'Stack Tech',
    },
    about: {
      label: 'Spécifications Système',
      title: 'Qui suis-je',
      subtitle: 'Un ingénieur passionné à la croisée du développement Full-Stack et de l\'Intelligence Artificielle.',
      para1: 'Je suis Badr Eddine Slaoui, développeur web Full-Stack et ingénieur IA/ML basé à Safi, Maroc. Je conçois des applications web prêtes pour la production avec Laravel, React, Vue et Node.js, tout en développant des systèmes de Machine Learning de bout en bout avec Python, Scikit-learn, FastAPI et MLOps.',
      para2: 'Je m\'épanouis à l\'intersection de l\'architecture logicielle propre et de l\'automatisation intelligente, transformant des exigences complexes en produits numériques performants et sécurisés.',
      langTitle: 'Maîtrise des Langues',
    },
    skills: {
      label: 'Matrice de Compétences',
      title: 'Expertise Technique',
      subtitle: 'Un aperçu structuré des technologies clés en développement Full-Stack, IA/ML et DevOps.',
      techTitle: 'Matrice des Outils & Écosystèmes',
    },
    experience: {
      label: 'Historique des Commits',
      title: 'Parcours Professionnel',
      subtitle: 'Expérience pratique dans la livraison de systèmes robustes au sein d\'équipes agiles.',
      onsite: 'Présentiel',
      remote: 'Télétravail',
    },
    projects: {
      label: 'Matrice de Projets',
      title: 'Travaux d\'Ingénierie',
      subtitle: 'Sélection de plateformes complètes, pipelines de Machine Learning et frameworks sur-mesure.',
      all: 'Tous les Systèmes',
      ai: 'IA & ML',
      fullstack: 'Full-Stack',
      viewRepo: 'Code Source',
    },
    education: {
      label: 'Diplômes & Formation',
      title: 'Parcours Académique',
      subtitle: 'Formation rigoureuse en génie logiciel, réseaux informatiques et mathématiques appliquées.',
      location: 'Safi, Maroc',
    },
    certifications: {
      label: 'Certifications Vérifiées',
      title: 'Licences & Certifications',
      subtitle: 'Évaluations techniques reconnues validant la maîtrise des algorithmes, frameworks et de l\'anglais.',
    },
    contact: {
      label: 'Terminal de Connexion',
      title: 'Espace CV & Contact Direct',
      subtitle: 'Téléchargez la version de CV adaptée à votre besoin et contactez-moi pour toute opportunité.',
      cvTitle: 'Répertoire des CVs',
      cvSubtitle: 'Versions adaptées disponibles en téléchargement direct en français et en anglais.',
      emailLabel: 'Adresse Email',
      phoneLabel: 'Téléphone / WhatsApp',
    },
    footer: 'Portfolio d\'Ingénierie © 2026 Badr Eddine Slaoui. Conçu selon les standards Web modernes.',
  },

  ar: {
    dir: 'rtl',
    hud: {
      status: 'النظام: متصل',
      location: 'آسفي، المغرب [UTC+1]',
      availability: 'متاح للفرص والمشاريع',
    },
    nav: {
      home: 'الرئيسية',
      about: 'عني',
      skills: 'المهارات',
      experience: 'الخبرة',
      projects: 'المشاريع',
      education: 'التعليم',
      certifications: 'الشهادات',
      contact: 'اتصل بي',
      downloadCV: 'السيرة الذاتية',
    },
    cv: {
      fsEn: 'CV تطوير الويب (EN)',
      fsFr: 'CV تطوير الويب (FR)',
      aiEn: 'CV الذكاء الاصطناعي (EN)',
      aiFr: 'CV الذكاء الاصطناعي (FR)',
    },
    hero: {
      badge: 'متاح للفرص المهنية',
      quote: 'تصميم وبناء بنى تحتية برمجية قابلة للتوسع وهندسة أنظمة ذكاء اصطناعي تنبؤية جاهزة للإنتاج — ربط هندسة البرمجيات الحديثة بذكاء وتحليل البيانات الشامل.',
      ctaProjects: 'استكشف المشاريع',
      ctaCV: 'تحميل السير الذاتية',
      ctaContact: 'تواصل معي',
      location: 'آسفي، المغرب',
    },
    stats: {
      exp: 'سنوات خبرة',
      projects: 'مشروع منجز',
      tech: 'تقنية وأداة',
    },
    about: {
      label: 'مواصفات النظام',
      title: 'من أنا',
      subtitle: 'مهندس برمجيات شغوف يجمع بين عالم التطوير الشامل Full-Stack وأنظمة الذكاء الاصطناعي الحديثة.',
      para1: 'أنا بدر الدين السلاوي، مطوّر ويب Full-Stack ومهندس ذكاء اصطناعي من آسفي، المغرب. أتخصص في بناء تطبيقات ويب متطورة وقوية باستخدام Laravel و React و Vue و Node.js، إلى جانب تطوير أنظمة التعلم الآلي الشاملة باستخدام Python و Scikit-learn و FastAPI وأدوات MLOps.',
      para2: 'أتميز في نقطة التقاطع بين الهندسة المعمارية النظيفة والأتمتة الذكية، محوّلاً المتطلبات التقنية المعقدة إلى منتجات رقمية قابلة للتوسع وآمنة وسهلة الصيانة.',
      langTitle: 'إتقان اللغات',
    },
    skills: {
      label: 'مصفوفة المهارات',
      title: 'الخبرة التقنية',
      subtitle: 'نظرة منظمة على التقنيات الأساسية التي تغطي تطوير الويب الشامل والتعلم الآلي وإدارة السحابة.',
      techTitle: 'مصفوفة الأدوات والبيئات التقنية',
    },
    experience: {
      label: 'سجل الالتزامات البرمجية',
      title: 'المسار المهني',
      subtitle: 'خبرة عملية مثبتة في تسليم أنظمة برمجية في بيئات عمل سريعة وفرق مرنة.',
      onsite: 'حضوري',
      remote: 'عن بُعد',
    },
    projects: {
      label: 'مصفوفة المشاريع',
      title: 'أعمال هندسية مميزة',
      subtitle: 'مجموعة مختارة من منصات الويب الكاملة وخطوط أنابيب التعلم الآلي وأطر العمل المخصصة.',
      all: 'جميع الأنظمة',
      ai: 'ذكاء اصطناعي',
      fullstack: 'Full-Stack',
      viewRepo: 'الكود المصدري',
    },
    education: {
      label: 'المؤهلات الأكاديمية',
      title: 'المسار التعليمي',
      subtitle: 'تدريب مكثف في هندسة البرمجيات وشبكات الحاسوب والرياضيات التطبيقية.',
      location: 'آسفي، المغرب',
    },
    certifications: {
      label: 'الشهادات المعتمدة',
      title: 'التراخيص والشهادات',
      subtitle: 'تقييمات مهنية معتمدة تثبت الكفاءة في حل المشكلات والخوارزميات وأطر العمل وإتقان اللغة.',
    },
    contact: {
      label: 'محطة الاتصال',
      title: 'مركز السير الذاتية والتواصل',
      subtitle: 'اختر النسخة المناسبة من سيرتي الذاتية وتواصل معي مباشرة لأي فرص عمل أو تعاون تقني.',
      cvTitle: 'مستودع السير الذاتية',
      cvSubtitle: 'نسخ مخصصة متاحة للتحميل الفوري باللغتين الإنجليزية والفرنسية.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف / واتساب',
    },
    footer: 'معرض أعمال هندسي © 2026 بدر الدين السلاوي. مبني وفق معايير الويب الأصيلة الحديثة.',
  },
};

/* ── 2. FEATURED PROJECTS REPOSITORY ────────────────────────── */
const PROJECTS = [
  {
    name: 'MétéoRisk',
    type: 'ai',
    url: 'https://github.com/Badr-Eddine-Slaoui/M-t-oRisk',
    icon: 'fa-solid fa-cloud-bolt',
    year: '2026',
    desc: {
      en: 'Weather Risk ETL Pipeline & Analytics Dashboard — real-time ingestion, transformation, and interactive visualization of weather hazard data.',
      fr: 'Pipeline ETL de risques météo & tableau de bord analytique — ingestion, transformation et visualisation interactive des données météorologiques.',
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
      en: 'End-to-End Food Delivery Time Prediction System using gradient boosting, feature engineering, and hyperparameter optimization served via FastAPI.',
      fr: 'Système prédictif de temps de livraison alimentaire de bout en bout avec gradient boosting, feature engineering et API haute performance FastAPI.',
      ar: 'نظام تنبؤ شامل بوقت توصيل الطعام باستخدام gradient boosting وهندسة الخصائص، يُقدَّم عبر واجهة برمجة تطبيقات FastAPI سريعة.',
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
      en: 'Clinical Profiling & Diabetes Risk Classification using K-Means clustering, imbalanced learning strategies, MLflow experiment tracking, and Airflow orchestration.',
      fr: 'Profilage clinique et classification du risque de diabète via clustering K-Means, gestion de classes déséquilibrées, tracking MLflow et pipelines Airflow.',
      ar: 'التصنيف السريري ومخاطر السكري باستخدام K-Means واستراتيجيات معالجة البيانات غير المتوازنة وتتبع تجارب MLflow وجدولة Airflow.',
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
      en: 'Automated Project & Skills Evaluation Platform built with Laravel Octane, Nuxt.js, Go microservices, and deployed across scalable AWS infrastructure.',
      fr: 'Plateforme automatisée d\'évaluation de projets et compétences avec Laravel Octane, Nuxt.js et microservices Go, déployée sur infrastructure cloud AWS.',
      ar: 'منصة تقييم تلقائية للمشاريع والمهارات مبنية بـ Laravel Octane و Nuxt.js وخدمات Go المصغرة على بنية تحتية سحابية في AWS.',
    },
    tech: ['Laravel Octane', 'Nuxt.js', 'GoLang', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    name: 'Mavel',
    type: 'fullstack',
    url: 'https://github.com/Badr-Eddine-Slaoui/Mavel',
    icon: 'fa-solid fa-code',
    year: '2025',
    desc: {
      en: 'Custom PHP MVC Framework built from scratch with an active-record ORM, flexible routing engine, middleware pipeline, and dedicated CLI tool.',
      fr: 'Framework PHP MVC personnalisé développé de zéro avec ORM active-record, moteur de routage flexible, pipeline de middleware et outil CLI dédié.',
      ar: 'إطار عمل PHP MVC مخصص مبني من الصفر مع ORM خاص ومحرك توجيه مرن ومسار middleware وأداة سطر أوامر CLI خاصة.',
    },
    tech: ['PHP', 'MVC Architecture', 'Custom ORM', 'Routing Engine', 'CLI Tooling', 'OOP'],
  },
  {
    name: 'FireCamp',
    type: 'fullstack',
    url: 'https://github.com/Badr-Eddine-Slaoui/FireCamp',
    icon: 'fa-solid fa-fire',
    year: '2023–2024',
    desc: {
      en: 'Real-Time Social Networking Platform (MERN Stack) with instant posts, real-time WebSockets chat, JWT authentication, and Redux state management.',
      fr: 'Plateforme de réseau social en temps réel (MERN Stack) avec publications directes, chat WebSockets, authentification JWT et gestion d\'état Redux.',
      ar: 'منصة شبكة اجتماعية في الوقت الفعلي (MERN) مع المنشورات الفورية والدردشة المباشرة عبر WebSockets وتوثيق JWT وإدارة الحالة بواسطة Redux.',
    },
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Redux', 'WebSockets', 'Firebase'],
  },
];

/* ── 3. STATE CONTROLLER ────────────────────────────────────── */
let currentLang = 'en';
let currentFilter = 'all';
let currentSearchTerm = '';

/* DOM Helper Selectors */
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

/* ── 4. MULTILANGUAGE SWITCHER ──────────────────────────────── */
function applyLanguage(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;

  // Active language buttons state
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Dynamic text substitution
  $$('[data-t]').forEach(el => {
    const key = el.dataset.t;
    const parts = key.split('.');
    let value = t;
    for (const p of parts) value = value?.[p];
    if (value !== undefined) el.textContent = value;
  });

  // Re-render project cards in current language
  renderProjects();

  // Update project tab text
  const allTab = $('.project-tab-btn[data-filter="all"]');
  const aiTab = $('.project-tab-btn[data-filter="ai"]');
  const fsTab = $('.project-tab-btn[data-filter="fullstack"]');
  if (allTab) allTab.textContent = t.projects.all;
  if (aiTab) aiTab.textContent = t.projects.ai;
  if (fsTab) fsTab.textContent = t.projects.fullstack;
}

/* ── 5. PROJECTS RENDERING & FILTERING ──────────────────────── */
function renderProjects() {
  const container = $('#projects-grid');
  if (!container) return;

  const t = TRANSLATIONS[currentLang];

  // Filter by category
  let list = currentFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.type === currentFilter);

  // Filter by search keyword
  if (currentSearchTerm.trim() !== '') {
    const q = currentSearchTerm.toLowerCase();
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchTech = p.tech.some(t => t.toLowerCase().includes(q));
      const desc = (p.desc[currentLang] || p.desc.en).toLowerCase();
      return matchName || matchTech || desc.includes(q);
    });
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; padding: 3rem; text-align: center; background: var(--bg-glass-card); border: 1px dashed var(--border-cyan); border-radius: var(--radius-lg); font-family: var(--font-mono); color: var(--text-muted);">
        <i class="fa-solid fa-code-compare" style="font-size: 2rem; color: var(--accent-cyan); margin-bottom: 0.8rem; display: block;"></i>
        <div>NO MATCHING SYSTEMS FOUND FOR QUERY: "${currentSearchTerm}"</div>
        <div style="font-size: 0.78rem; margin-top: 0.5rem; color: var(--accent-emerald);">Try searching for Python, Docker, Laravel, React or clear the filter.</div>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(project => {
    const badgeClass = project.type === 'ai' ? 'badge-ai' : 'badge-fullstack';
    const badgeLabel = project.type === 'ai' ? (t.projects.ai || 'AI & ML') : 'Full-Stack';
    const descText = project.desc[currentLang] || project.desc.en;
    const techPills = project.tech.map(tech => `<span class="project-tech-pill">${tech}</span>`).join('');

    return `
      <div class="project-card project-${project.type} reveal-up visible">
        <div class="project-card-header">
          <div class="project-icon-box">
            <i class="${project.icon}"></i>
          </div>
          <span class="project-badge-pill ${badgeClass}">${badgeLabel}</span>
        </div>
        <h3 class="project-name">
          <span>${project.name}</span>
          <span style="font-family:var(--font-mono);font-size:0.75rem;color:var(--text-muted);font-weight:400;">${project.year}</span>
        </h3>
        <p class="project-desc">${descText}</p>
        <div class="project-tech-tags">${techPills}</div>
        <div class="project-card-footer">
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-repo-link">
            <i class="fa-brands fa-github"></i>
            <span>${t.projects.viewRepo || 'Source Code'}</span>
            <i class="fa-solid fa-arrow-right" style="font-size:0.75rem;"></i>
          </a>
          <span class="project-year"><i class="fa-solid fa-check" style="color:var(--accent-emerald);"></i> Verified</span>
        </div>
      </div>
    `;
  }).join('');
}

/* ── 6. SKILLS MATRIX LIVE SEARCH ───────────────────────────── */
function initSkillsFilter() {
  const input = $('#skills-filter-input');
  if (!input) return;

  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const chips = $$('.skill-chip');

    chips.forEach(chip => {
      const text = chip.textContent.toLowerCase();
      if (query === '') {
        chip.classList.remove('highlighted');
        chip.style.opacity = '1';
      } else if (text.includes(query)) {
        chip.classList.add('highlighted');
        chip.style.opacity = '1';
      } else {
        chip.classList.remove('highlighted');
        chip.style.opacity = '0.35';
      }
    });
  });
}

/* ── 7. TYPEWRITER SUBTITLE ENGINE ──────────────────────────── */
function initTypewriter() {
  const el = $('#role-typewriter');
  if (!el) return;

  const phrases = [
    'Full-Stack Developer & AI/ML Engineer',
    'Architecting Scalable Laravel & React Web Systems',
    'Training Predictive Machine Learning Models',
    'Building End-to-End MLOps & Airflow Pipelines',
    'DevOps, Linux Server Administration & Docker',
  ];

  let phraseIdx = 0;
  let charIdx = phrases[0].length;
  let isDeleting = false;
  let waitTicks = 0;

  function tick() {
    const currentPhrase = phrases[phraseIdx];

    if (!isDeleting) {
      el.textContent = currentPhrase.substring(0, charIdx);
      if (charIdx < currentPhrase.length) {
        charIdx++;
        setTimeout(tick, 45);
      } else {
        // Pause at end of phrase
        isDeleting = true;
        setTimeout(tick, 2200);
      }
    } else {
      el.textContent = currentPhrase.substring(0, charIdx);
      if (charIdx > 0) {
        charIdx--;
        setTimeout(tick, 25);
      } else {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        setTimeout(tick, 300);
      }
    }
  }

  // Start rotation after initial display
  setTimeout(tick, 2500);
}

/* ── 8. INTERACTIVE LINUX TERMINAL SANDBOX ──────────────────── */
function initTerminal() {
  const terminalContainer = $('#interactive-terminal');
  const output = $('#terminal-output-container');
  const input = $('#terminal-cli-input');
  if (!output || !input) return;

  const COMMANDS = {
    help: () => `
      <div class="terminal-cyan">Available System Commands:</div>
      <div style="display:grid;grid-template-columns:120px 1fr;gap:4px;margin-top:4px;">
        <span class="terminal-emerald">about</span><span>View biography & engineering summary</span>
        <span class="terminal-emerald">skills</span><span>List core technical proficiencies</span>
        <span class="terminal-emerald">projects</span><span>Explore key highlighted projects</span>
        <span class="terminal-emerald">cv</span><span>Get CV download links & info</span>
        <span class="terminal-emerald">contact</span><span>Display communication channels</span>
        <span class="terminal-emerald">neofetch</span><span>Display host workstation telemetry</span>
        <span class="terminal-emerald">sudo hire</span><span>Unlock recruitment handshake protocol</span>
        <span class="terminal-emerald">clear</span><span>Flush terminal buffer</span>
      </div>
    `,
    about: () => `
      <div class="terminal-cyan">[IDENTITY]: Badr Eddine Slaoui</div>
      <div>Full-Stack Web Developer & AI/ML Engineer based in Safi, Morocco.</div>
      <div>Bridging Laravel, React, Vue, Go microservices with Python, Scikit-learn, and MLOps.</div>
    `,
    skills: () => `
      <div class="terminal-cyan">[CORE STACK]:</div>
      <div>- Web & Services: PHP (Laravel, Octane), React, Vue 3, Nuxt 4, Node.js, GoLang</div>
      <div>- AI & ML: Python, Scikit-learn, XGBoost, Pandas, FastAPI, MLflow, Airflow</div>
      <div>- Infrastructure: Docker, AWS (EC2/RDS), Redis, PostgreSQL, Linux, Git CI/CD</div>
    `,
    projects: () => `
      <div class="terminal-cyan">[FEATURED REPOSITORIES]:</div>
      <div>1. <span class="terminal-emerald">MétéoRisk</span>: Weather Risk ETL Pipeline (Airflow, Postgres, Docker)</div>
      <div>2. <span class="terminal-emerald">DeliveryETA</span>: Food Delivery Time Prediction (FastAPI, Scikit-learn)</div>
      <div>3. <span class="terminal-emerald">GlucoProfile</span>: Diabetes Risk Classification & MLflow</div>
      <div>4. <span class="terminal-emerald">Rewire</span>: Skills Evaluation Platform (Laravel Octane, Nuxt, Go)</div>
      <div>5. <span class="terminal-emerald">Mavel</span>: Custom PHP MVC Framework & ORM</div>
    `,
    cv: () => `
      <div class="terminal-cyan">[CV REPOSITORY]:</div>
      <div>- Full-Stack CV (EN): PDFs/CV FullStack English.pdf</div>
      <div>- Full-Stack CV (FR): PDFs/CV FullStack French.pdf</div>
      <div>- AI / ML CV (EN): PDFs/CV AI English.pdf</div>
      <div>- AI / ML CV (FR): PDFs/CV AI French.pdf</div>
      <div style="color:var(--accent-emerald);margin-top:4px;">Direct download cards available in the CV Hub section below!</div>
    `,
    contact: () => `
      <div class="terminal-cyan">[COMMUNICATION ENDPOINTS]:</div>
      <div>- Email: <span class="terminal-emerald">slaoui.badr.eddine.sdv@gmail.com</span></div>
      <div>- Phone: <span class="terminal-emerald">(+212) 680-981007</span></div>
      <div>- GitHub: <a href="https://github.com/Badr-Eddine-Slaoui" target="_blank" style="color:var(--accent-cyan);">github.com/Badr-Eddine-Slaoui</a></div>
      <div>- LinkedIn: <a href="https://linkedin.com/in/badr-eddine-slaoui" target="_blank" style="color:var(--accent-cyan);">linkedin.com/in/badr-eddine-slaoui</a></div>
    `,
    neofetch: () => `
      <div style="font-family:monospace;white-space:pre;color:var(--accent-cyan);line-height:1.2;font-size:0.75rem;">
  ___           _          <span style="color:#f8fafc;">badr@morocco-sys</span>
 / _ \\ ___  ___| |__       ----------------
| (_) / _ \\/ __| '_ \\      <span style="color:var(--accent-emerald);">OS:</span> Linux 6.8.0-arch-amd64
 \\___/\\___/\\___|_.__/      <span style="color:var(--accent-emerald);">Host:</span> Safi, Morocco [UTC+1]
                           <span style="color:var(--accent-emerald);">Uptime:</span> 2+ Years in Production
                           <span style="color:var(--accent-emerald);">Shell:</span> bash 5.2.26
                           <span style="color:var(--accent-emerald);">Stack:</span> Full-Stack / AI / DevOps
                           <span style="color:var(--accent-emerald);">Terminal:</span> AGY-CyberTerm v2.4
      </div>
    `,
    'sudo hire': () => {
      setTimeout(() => {
        const contactSec = $('#contact');
        if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      }, 700);
      return `<div style="color:var(--accent-emerald);font-weight:bold;">[SUCCESS]: Handshake accepted. Redirecting to direct communications terminal...</div>`;
    },
    clear: () => {
      output.innerHTML = '';
      return '';
    },
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      COMMANDS.clear();
      return;
    }

    // Append user input line
    const userLine = document.createElement('div');
    userLine.className = 'terminal-line';
    userLine.innerHTML = `<span class="terminal-prompt">badr@sys:~$</span> <span>${rawCmd}</span>`;
    output.appendChild(userLine);

    // Resolve output
    let resultHtml = '';
    if (COMMANDS[cmd]) {
      resultHtml = COMMANDS[cmd]();
    } else {
      resultHtml = `<div style="color:#ef4444;">Command not found: "${cmd}". Type <span class="terminal-cyan">'help'</span> for available commands.</div>`;
    }

    if (resultHtml) {
      const respBox = document.createElement('div');
      respBox.className = 'terminal-output';
      respBox.innerHTML = resultHtml;
      output.appendChild(respBox);
    }

    output.scrollTop = output.scrollHeight;
  }

  // Handle enter key in input
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const val = input.value;
      input.value = '';
      executeCommand(val);
    }
  });

  // Handle chip clicks
  $$('.terminal-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      executeCommand(cmd);
      input.focus();
    });
  });

  // Focus terminal button in navbar
  const toggleBtn = $('#terminal-focus-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      terminalContainer.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => input.focus(), 500);
    });
  }
}

/* ── 9. TOAST NOTIFICATIONS & CLIPBOARD ─────────────────────── */
function showToast(message) {
  const toast = $('#toast');
  const toastText = $('#toast-text');
  if (!toast) return;

  toastText.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

function initClipboard() {
  const emailBox = $('#copy-email-box');
  if (emailBox) {
    emailBox.addEventListener('click', () => {
      navigator.clipboard.writeText('slaoui.badr.eddine.sdv@gmail.com').then(() => {
        showToast('Email address copied to clipboard!');
      }).catch(() => {
        showToast('slaoui.badr.eddine.sdv@gmail.com');
      });
    });
  }

  const phoneBox = $('#copy-phone-box');
  if (phoneBox) {
    phoneBox.addEventListener('click', () => {
      navigator.clipboard.writeText('+212680981007').then(() => {
        showToast('Phone number copied to clipboard!');
      }).catch(() => {
        showToast('+212 680-981007');
      });
    });
  }
}

/* ── 10. QUICK CONTACT MESSAGE DISPATCH ─────────────────────── */
function initContactForm() {
  const form = $('#quick-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = $('#sender-name').value;
    const email = $('#sender-email').value;
    const message = $('#sender-message').value;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);

    showToast('Dispatching message client...');
    window.location.href = `mailto:slaoui.badr.eddine.sdv@gmail.com?subject=${subject}&body=${body}`;

    form.reset();
  });
}

/* ── 11. NAVBAR SCROLL SPY & CONTROLS ───────────────────────── */
function initNavigation() {
  const navbar = $('#navbar');
  const scrollTopBtn = $('#scroll-top');
  const hamburger = $('#hamburger');
  const mobileDrawer = $('#mobile-drawer');

  // Window scroll handler
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('scrolled', scrollY > 30);
    scrollTopBtn.classList.toggle('visible', scrollY > 400);

    // Active Section Scroll Spy
    const sections = $$('section[id]');
    let activeId = 'hero';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if (scrollY >= top) activeId = sec.id;
    });

    $$('.nav-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === activeId);
    });
    $$('.mobile-link').forEach(link => {
      link.classList.toggle('active', link.dataset.section === activeId);
    });
  }, { passive: true });

  // Scroll to Top
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile Drawer Toggle
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileDrawer.classList.toggle('open');
  });

  // Smooth Scroll Link Binding
  const handleScrollClick = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    hamburger.classList.remove('open');
    mobileDrawer.classList.remove('open');
  };

  $$('.nav-link[data-section]').forEach(link => {
    link.addEventListener('click', () => handleScrollClick(link.dataset.section));
  });

  $$('.mobile-link[data-section]').forEach(link => {
    link.addEventListener('click', () => handleScrollClick(link.dataset.section));
  });

  // Hero CTAs
  const ctaProjects = $('#cta-projects');
  if (ctaProjects) ctaProjects.addEventListener('click', () => handleScrollClick('projects'));

  const ctaCV = $('#cta-cv-hub');
  if (ctaCV) ctaCV.addEventListener('click', () => handleScrollClick('contact'));

  const ctaContact = $('#cta-contact');
  if (ctaContact) ctaContact.addEventListener('click', () => handleScrollClick('contact'));

  const navCV = $('#nav-cv-btn');
  if (navCV) navCV.addEventListener('click', () => handleScrollClick('contact'));
}

/* ── 12. INTERSECTION OBSERVER REVEAL ───────────────────────── */
function initIntersectionAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  $$('.reveal-up').forEach(el => observer.observe(el));

  // Language Meter Fill Observer
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        $$('.lang-meter-fill').forEach(fill => fill.classList.add('animated'));
        meterObserver.disconnect();
      }
    });
  }, { threshold: 0.2 });

  const aboutSection = $('#about');
  if (aboutSection) meterObserver.observe(aboutSection);
}

/* ── 13. DOM INITIALIZATION ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Language button clicks
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  // Project Category Tab Buttons
  $$('.project-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.project-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProjects();
    });
  });

  // Project Live Search Input
  const projSearchInput = $('#project-search-input');
  if (projSearchInput) {
    projSearchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value;
      renderProjects();
    });
  }

  // Initialize all subsystems
  initNavigation();
  initSkillsFilter();
  initTypewriter();
  initTerminal();
  initClipboard();
  initContactForm();
  renderProjects();
  initIntersectionAnimations();
  applyLanguage('en');
});
