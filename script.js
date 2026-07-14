/* ========================================
   BACKGROUND SLIDESHOW
======================================== */
/* Reset & full-height baseline */
html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Full-screen responsive background */
body {
    background-image: url("https://i.ibb.co/cKNN4JwK/photo-output.jpg");
    background-size: cover;                  /* fills screen without stretching */
    background-position: center;             /* keeps the center visible */
    background-repeat: no-repeat;
    min-height: 100vh;
    background-attachment: fixed;            /* keeps image fixed on scroll */

    font-family: "GB Garamond", "EB Garamond", serif;
}

/* Center container */
.center {
    min-height: 100vh;                        /* fill viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;                  /* vertical centering */
    align-items: center;                      /* horizontal centering */
    text-align: center;
    padding: 0 1rem;                          /* prevents overflow on very small screens */
}

/* Main text */
.center h1 {
    color: #F9F6EE; /* bone white */
    font-size: 2rem;
    margin: 0 0 20px 0;
    -webkit-text-stroke: 0.5px rgba(0,0,0,0.6); /* subtle outline */
}

/* Signature link */
.center .signature {
    color: #F9F6EE;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    text-decoration: none;
    -webkit-text-stroke: 0.5px rgba(0,0,0,0.65); /* subtle outline */

    /* Underline for "EL SHEKARI" */
    text-decoration: underline;
    text-decoration-color: #F9F6EE;           /* match the text color */
    text-decoration-thickness: 1.5px;
    text-underline-offset: 3px;
}

/* Responsive adjustments for phones */
@media (max-width: 480px) {
    .center h1 {
        font-size: 1.5rem;
    }
    .center .signature {
        font-size: 1.2rem;
    }
}

/* Utility: if you need a fallback solid background color */
body.fallback-bg {
    background-image: none;
    background-color: #0f0f12; /* dark fallback */
}
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
