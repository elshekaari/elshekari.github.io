// script.js
// Vanilla JS lightbox + mobile nav toggle + smooth scrolling

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
