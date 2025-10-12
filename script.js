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
    brands_title: 'Confiaron en mí',
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
    upwork_projects: 'Proyectos Completados',
    testimonial_1: 'Andrés transformó completamente nuestra identidad visual. Su capacidad para entender la visión de nuestra marca y traducirla en animaciones impactantes superó todas nuestras expectativas. Profesional, creativo y siempre puntual.',
    testimonial_2: 'Trabajar con Andrés fue una experiencia excepcional. No solo entregó un video promocional de altísima calidad, sino que aportó ideas creativas que elevaron nuestro contenido a otro nivel. Su atención al detalle es impresionante.',
    testimonial_3: 'La creatividad y profesionalismo de Andrés son difíciles de encontrar. Nos ayudó a crear contenido que realmente conecta con nuestra audiencia. Su comunicación es excelente y siempre está dispuesto a hacer ajustes hasta lograr la perfección.',
    project_label: 'Proyecto:',
    project_1: 'Brand Identity & Motion Graphics',
    project_2: 'Product Launch Video Campaign',
    project_3: 'Social Media Content & Animations',
    contact_title: '¿Tenés un proyecto en mente?',
    contact_subtitle: 'Hablemos sobre cómo puedo ayudarte',
    cta_title: 'La forma más rápida de contactarme',
    cta_whatsapp: 'Hablemos por WhatsApp',
    form_divider: 'O completá el formulario',
    form_title: 'Contame sobre tu proyecto',
    form_name: 'Nombre *',
    form_name_placeholder: 'Tu nombre completo',
    form_email: 'Email *',
    form_phone: 'Teléfono',
    form_project_type: 'Tipo de proyecto *',
    form_select_option: 'Seleccioná una opción',
    project_motion: 'Motion Graphics',
    project_editing: 'Edición de Video',
    project_3d: 'Animación 3D',
    project_social: 'Contenido para Redes Sociales',
    project_explainer: 'Video Explicativo',
    project_corporate: 'Video Corporativo',
    project_other: 'Otro',
    form_message: 'Contanos sobre tu proyecto *',
    form_message_placeholder: 'Describí tu proyecto, objetivos, plazos, presupuesto estimado, etc.',
    form_submit: 'Enviar Mensaje'
  },
  en: {
    reel_duration: 'Watch my 2025 Reel in less than 1 minute',
    play_text: '▶ WATCH REEL',
    menu_reel: 'Reel 2025',
    menu_brands: 'Brands',
    menu_about: 'About Me',
    menu_testimonials: 'Testimonials',
    menu_contact: 'Contact',
    brands_title: 'Trusted by',
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
    upwork_projects: 'Completed Projects',
    testimonial_1: 'Andrés completely transformed our visual identity. His ability to understand our brand vision and translate it into impactful animations exceeded all our expectations. Professional, creative, and always on time.',
    testimonial_2: 'Working with Andrés was an exceptional experience. He not only delivered a promotional video of the highest quality, but also contributed creative ideas that took our content to another level. His attention to detail is impressive.',
    testimonial_3: 'Andrés\' creativity and professionalism are hard to find. He helped us create content that truly connects with our audience. His communication is excellent and he is always willing to make adjustments until perfection is achieved.',
    project_label: 'Project:',
    project_1: 'Brand Identity & Motion Graphics',
    project_2: 'Product Launch Video Campaign',
    project_3: 'Social Media Content & Animations',
    contact_title: 'Have a project in mind?',
    contact_subtitle: "Let's talk about how I can help you",
    cta_title: 'The fastest way to reach me',
    cta_whatsapp: "Let's talk on WhatsApp",
    form_divider: 'Or fill out the form',
    form_title: 'Tell me about your project',
    form_name: 'Name *',
    form_name_placeholder: 'Your full name',
    form_email: 'Email *',
    form_phone: 'Phone',
    form_project_type: 'Project Type *',
    form_select_option: 'Select an option',
    project_motion: 'Motion Graphics',
    project_editing: 'Video Editing',
    project_3d: '3D Animation',
    project_social: 'Social Media Content',
    project_explainer: 'Explainer Video',
    project_corporate: 'Corporate Video',
    project_other: 'Other',
    form_message: 'Tell us about your project *',
    form_message_placeholder: 'Describe your project, objectives, deadlines, estimated budget, etc.',
    form_submit: 'Send Message'
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

// FORMULARIO DE CONTACTO
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const projectType = formData.get('projectType');
  const message = formData.get('message');
  
  const whatsappMessage = `Hola Andrés! 👋

*Nuevo contacto desde el portfolio*

📝 *Nombre:* ${name}
📧 *Email:* ${email}
${phone ? `📱 *Teléfono:* ${phone}` : ''}
🎬 *Tipo de proyecto:* ${projectType}

*Mensaje:*
${message}`;
  
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/5491161108899?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
  contactForm.reset();
});