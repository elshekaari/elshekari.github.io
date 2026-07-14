/* ========================================
   BACKGROUND SLIDESHOW
======================================== */
/* Full-screen responsive background */
body {
    background-image: url("https://i.ibb.co/Zp7JG2wW/photo-output-6.avif");
    background-size: cover;                  /* fills screen without stretching */
    background-position: center;             /* keeps the center visible */
    background-repeat: no-repeat;
    min-height: 100vh;
    background-attachment: fixed;            /* keeps image fixed on scroll */

/* ========================================
   PANEL NAVIGATION (single-page smooth)
======================================== */
function showPanel(toId){
  const current = document.querySelector('.panel.active');
  const next = document.getElementById(toId);
  if(!current || !next || current.id === toId) return;

  current.classList.remove('active');
  // small delay for smooth fade transition
  setTimeout(() => {
    next.classList.add('active');
    next.scrollTop = 0;
  }, 420);
}

// NAV LINKS
document.addEventListener('DOMContentLoaded', () => {
  startSlideshow();

  document.getElementById('home-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('home');
  });
  document.getElementById('works-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('works');
  });
  document.getElementById('bio-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('bio');
  });
  document.getElementById('contact-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('contact');
  });

  // WORKS SUBMENU
  document.getElementById('painting-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('painting');
  });
  document.getElementById('videoart-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('videoart');
  });
  document.getElementById('installation-link').addEventListener('click', e => {
    e.preventDefault();
    showPanel('installation');
  });

  // optional: back buttons inside each panel
  document.querySelectorAll('.btn.back').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.back || 'home';
      showPanel(target);
    });
  });
});
