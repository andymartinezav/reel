// TRADUCCIONES
const translations = {
  es: {
    reel_duration: 'Mirá mi Reel 2025 en menos de 1 minuto',
    play_text: '▶ VER REEL',
    menu_reel: 'Reel 2025',
    menu_brands: 'Marcas',
    menu_about: 'Sobre mí',
    menu_testimonials: 'Testimonios',
    menu_contact: 'Contacto',
    brands_title: 'Marcas con las que trabajé',
    about_role: 'Motion Designer & Video Editor',
    about_text: 'Transformo ideas en contenido audiovisual que convierte. Especializado en motion graphics y video editing para marcas que buscan destacarse, con 10+ años creando piezas que generan engagement real y resultados medibles.',
    skill_1: '2D Animation',
    skill_2: 'Motion Graphics',
    skill_3: 'Video Editing',
    skill_4: 'VFX',
    skill_5: 'Generative AI',
    skill_6: 'Lottie JSON',
    skill_7: 'HTML5/GIF Ads',
    stats_years: 'Años de<br>Experiencia',
    stats_revenue: 'USD Generados<br>Remotamente',
    testimonials_title: 'Lo que dicen mis clientes',
    testimonials_subtitle: 'Resultados reales, testimonios genuinos',
    upwork_rating: 'Rating Perfecto',
    upwork_success: 'Job Success Score',
    upwork_projects: '50+ Proyectos Completados',
    upwork_cta: 'VER PERFIL EN UPWORK',
    testimonial_1: 'Me encanta trabajar con Andy. Ha sido el animador principal en múltiples proyectos para nosotros y su trabajo siempre supera las expectativas.',
    testimonial_2: 'Fue un placer trabajar con Andrés, excelentes habilidades de edición, súper profesional y orientado al detalle, definitivamente trabajaremos con él de nuevo.',
    testimonial_3: 'He contratado muchos editores y Andy está entre los mejores. Principalmente por su capacidad para entender mis requerimientos y crear contenido hermoso basado en eso.',
    project_label: 'Proyecto:',
    lukasrole: 'Director Creativo',

    contact_title: '¿Tenés un proyecto en mente?',
    contact_subtitle: 'Hablemos sobre cómo puedo ayudarte',
    cta_title: 'Contactame',
    cta_whatsapp: 'WhatsApp',
    cta_email: 'Email',
  },
  en: {
    reel_duration: 'Watch my 2025 Reel in less than 1 minute',
    play_text: '▶ WATCH REEL',
    menu_reel: 'Reel 2025',
    menu_brands: 'Brands',
    menu_about: 'About Me',
    menu_testimonials: 'Testimonials',
    menu_contact: 'Contact',
    brands_title: 'Brands I worked with',
    about_role: 'Motion Designer & Video Editor',
    about_text: 'I transform ideas into audiovisual content that converts. Specialized in motion graphics and video editing for brands looking to stand out, with 10+ years creating pieces that generate real engagement and measurable results.',
    skill_1: '2D Animation',
    skill_2: 'Motion Graphics',
    skill_3: 'Video Editing',
    skill_4: 'VFX',
    skill_5: 'Generative AI',
    skill_6: 'Lottie JSON',
    skill_7: 'HTML5/GIF Ads',
    stats_years: 'Years of<br>Experience',
    stats_revenue: 'USD Generated<br>Remotely',
    testimonials_title: 'What my clients say',
    testimonials_subtitle: 'Real results, genuine testimonials',
    upwork_rating: 'Perfect Rating',
    upwork_success: 'Job Success Score',
    upwork_projects: '50+ Completed Projects',
    upwork_cta: 'VIEW UPWORK PROFILE',
    testimonial_1: 'Love working with Andy. He\'s been the lead animator on multiple projects for us and his work always exceeds expectations.',
    testimonial_2: 'It was a pleasure to work with Andrés, great editing skills, super professional and detail-oriented, we\'ll definitely work with him again.',
    testimonial_3: 'I\'ve hired many editors and Andy is right up there. Mainly due to his ability to understand my requirements and create beautiful content based on that.',
    project_label: 'Project:',
    project_1: 'Motion Designer Needed for Speaker Intro Videos for Conference',
    project_2: 'Fast-paced direct response ad for Social Media',
    project_3: 'Stretch Video Series',
    contact_title: 'Have a project in mind?',
    contact_subtitle: "Let's talk about how I can help you",
    cta_title: 'Contact Me',
    lukasrole: 'Creative Director',
    cta_whatsapp: 'WhatsApp',
    cta_email: 'Email',
  }
};

let currentLang = 'es';

function translatePage(lang) {
  currentLang = lang;
  
  // Actualizar botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Traducir elementos con data-translate
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.dataset.translate;
    if (translations[lang][key]) {
      // Para elementos con HTML (como los stats con <br>)
      if (key.includes('stats_')) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
  
  // Traducir placeholders
  const namePlaceholder = lang === 'en' ? 'Your full name' : 'Tu nombre completo';
  const messagePlaceholder = lang === 'en' 
    ? 'Describe your project, objectives, deadlines, estimated budget, etc.' 
    : 'Describí tu proyecto, objetivos, plazos, presupuesto estimado, etc.';
  
  document.getElementById('name').placeholder = namePlaceholder;
  document.getElementById('message').placeholder = messagePlaceholder;
}

// Event listeners para botones de idioma
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    translatePage(btn.dataset.lang);
  });
});

// PRELOADER
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  const progress = document.getElementById('preloaderProgress');
  
  let width = 0;
  const interval = setInterval(() => {
    width += 10;
    progress.style.width = width + '%';
    
    if (width >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        preloader.classList.add('hidden');
      }, 300);
    }
  }, 50);
});

// CURSOR PERSONALIZADO
const cursor = document.getElementById('customCursor');
const cursorRing = document.getElementById('customCursorRing');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
  cursor.style.transform = 'translate(-50%, -50%)';
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  cursorRing.style.transform = 'translate(-50%, -50%)';
  
  requestAnimationFrame(animateRing);
}
animateRing();

const interactiveElements = document.querySelectorAll('a, button, .brand-item, .skill-badge, .stat-item, input, textarea, select, .testimonial-card');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    cursorRing.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorRing.classList.remove('hover');
  });
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
  cursorRing.classList.add('click');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
  cursorRing.classList.remove('click');
});

// Cursor blanco sobre elementos magenta
const magentaElements = document.querySelectorAll('.cta-section');
magentaElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('white');
    cursorRing.classList.add('white');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('white');
    cursorRing.classList.remove('white');
  });
});

// VIDEO CONTROLS
const video = document.getElementById('reel');
const playBtn = document.getElementById('playBtn');

video.controls = false;

playBtn.addEventListener('click', () => { 
  video.play();
});

video.addEventListener('play', () => { 
  playBtn.style.display = 'none'; 
  video.controls = true; 
});

video.addEventListener('pause', () => { 
  if (video.currentTime === 0 || video.currentTime === video.duration) return;
  playBtn.style.display = 'flex';
  video.controls = true;
});

// STICKY HEADER
const stickyHeader = document.getElementById('stickyHeader');
const heroSection = document.querySelector('.hero-section');

const headerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      stickyHeader.classList.add('visible');
    } else {
      stickyHeader.classList.remove('visible');
    }
  });
}, { threshold: 0.95 });

headerObserver.observe(heroSection);

// HAMBURGER MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuLinks = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  }
});

// SCROLL ANIMATIONS
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});