// HERO SLIDESHOW (images + videos)
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.hero-slideshow img, .hero-slideshow video');
  let current = 0;

  if(slides.length){
    slides[current].classList.add('active');

    setInterval(() => {
      slides[current].classList.remove('active');

      // Pause video before hiding
      if(slides[current].tagName === 'VIDEO') slides[current].pause();

      current = (current + 1) % slides.length;

      // Play video if new slide is a video
      if(slides[current].tagName === 'VIDEO') slides[current].play();

      slides[current].classList.add('active');
    }, 5000); // 5 seconds per slide
  }
// script.js
// Vanilla JS lightbox + mobile and desktop nav toggle + smooth scrolling

document.addEventListener('DOMContentLoaded', function () {
  // NAV TOGGLE (mobile)
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle && navToggle.addEventListener('click', () => {
    if (!navList) return;
    const isOpen = navList.style.display === 'flex';
    navList.style.display = isOpen ? 'none' : 'flex';
    navList.style.flexDirection = 'column';
    navList.style.background = 'var(--bg)';
    navList.style.padding = '12px';
  });

  // SMOOTH SCROLL for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const rect = target.getBoundingClientRect();
        const offset = rect.top + window.scrollY - 80; // account for fixed nav
        window.scrollTo({ top: offset, behavior: 'smooth' });
        // close mobile nav after click
        if (window.innerWidth < 980) {
          navList && (navList.style.display = 'none');
        }
      }
    });
  });

  // LIGHTBOX
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  document.querySelectorAll('.thumb img').forEach(img => {
    img.addEventListener('click', () => {
      const src = img.dataset.full || img.src;
      const caption = img.nextElementSibling ? img.nextElementSibling.textContent : '';
      lightboxImg.src = src;
      lightboxImg.alt = img.alt || '';
      lightboxCaption.textContent = caption || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
      closeLightbox();
    }
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
});
