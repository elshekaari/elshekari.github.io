// ===== Slideshow configuration =====
const slides = [
  { type: 'image', src: 'media/IMG_4717.jpg' }, // 
  { type: 'video', src: 'media/bg2.mp4' }, // 
  { type: 'image', src: 'media/bg3.jpg' }  // 
];

let currentIndex = 0;
let showingA = true;

const layerA = document.getElementById('layerA');
const layerB = document.getElementById('layerB');

// Function to set a slide on a layer
function setLayer(layer, slide) {
  layer.innerHTML = '';
  if (slide.type === 'video') {
    const v = document.createElement('video');
    v.src = slide.src;
    v.autoplay = true;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.style.width = '100%';
    v.style.height = '100%';
    v.style.objectFit = 'cover';
    layer.appendChild(v);
  } else {
    layer.style.backgroundImage = `url('${slide.src}')`;
  }
}

// Function to show the next slide
function showNextSlide() {
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];
  const incoming = showingA ? layerA : layerB;
  const outgoing = showingA ? layerB : layerA;

  setLayer(incoming, nextSlide);
  incoming.classList.add('show');
  outgoing.classList.remove('show');

  showingA = !showingA;
  currentIndex = nextIndex;
}

// Initialize
setLayer(layerA, slides[0]);
layerA.classList.add('show');
setInterval(showNextSlide, 7000); // 7-second fade interval
}

// start slideshow
function startSlideshow(){
  setLayer(layerA, slides[0]);
  layerA.classList.add('show');
  if(slides.length > 1){
    setLayer(layerB, slides[1]);
    currentIndex = 1;
    showingA = false;
    layerB.classList.remove('show');
    setInterval(showNextSlide, SLIDE_DURATION);
  }
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
