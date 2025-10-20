/* =========================
   CONFIG: list your background slides here (relative to project root)
   order matters. Each slide object: { type: 'video'|'image', src: 'media/yourfile' }
   Put your files in /media folder.
   ========================= */
const slides = [
  { type: 'video', src: 'media/bg1.mp4' },   // <-- replace with your background video
  { type: 'image', src: 'media/bg2.jpg' },   // <-- replace with an image
  { type: 'video', src: 'media/bg3.mp4' }    // <-- add more as needed
];

/* Timing */
const SLIDE_DURATION = 7000; // how long each slide shows (ms)
const TRANSITION_DELAY = 1200; // match CSS transition (ms)

let currentIndex = 0;
const layerA = document.getElementById('layerA');
const layerB = document.getElementById('layerB');
let showingA = true;

/* helper: populate a layer with slide content */
function setLayer(layer, slide){
  // Clear existing content
  layer.innerHTML = '';
  layer.style.backgroundImage = '';
  // If video: create <video> element, autoplay muted loop playsinline
  if(slide.type === 'video'){
    const v = document.createElement('video');
    v.src = slide.src;
    v.autoplay = true;
    v.loop = true;
    v.muted = true;
    v.playsInline = true;
    v.preload = 'auto';
    v.style.width = '100%';
    v.style.height = '100%';
    v.style.objectFit = 'cover';
    v.style.position = 'absolute';
    v.style.top = 0;
    v.style.left = 0;
    layer.appendChild(v);
  } else {
    // Image background via CSS (better performance than <img> layering)
    layer.style.backgroundImage = `url('${slide.src}')`;
  }
}

/* crossfade to next slide */
function showNextSlide(){
  const nextIndex = (currentIndex + 1) % slides.length;
  const nextSlide = slides[nextIndex];

  const incoming = showingA ? layerA : layerB;
  const outgoing = showingA ? layerB : layerA;

  // Prepare incoming
  setLayer(incoming, nextSlide);
  incoming.classList.add('show');     // CSS makes opacity 1
  outgoing.classList.remove('show');  // fade out outgoing

  // after transition, stop outgoing video (to save CPU) and clear it
  setTimeout(()=>{
    // remove all child nodes of outgoing (stop any video)
    outgoing.innerHTML = '';
    outgoing.style.backgroundImage = '';
  }, TRANSITION_DELAY + 80);

  showingA = !showingA;
  currentIndex = nextIndex;
}

/* initialize slideshow */
function startSlideshow(){
  // populate both layers so first fade is smooth
  setLayer(layerA, slides[0]);
  layerA.classList.add('show');
  if(slides.length > 1){
    setLayer(layerB, slides[1]);
    // start automatic loop slightly after first load
    currentIndex = 1;
    showingA = false;
    // ensure initial visible layer is the first slide (we'll flip back)
    layerB.classList.remove('show');
    layerA.classList.add('show');
    // schedule next
    setTimeout(()=> {
      // set correct currentIndex (first active index)
      currentIndex = 0;
      showingA = true;
      // begin loop
      setInterval(showNextSlide, SLIDE_DURATION);
    }, 3000);
  }
}

/* =========================
   PANEL NAVIGATION (fade panels in/out)
   Panels have ids: home, works, painting, videoart, installation, bio, contact
   ========================= */
function showPanel(fromId, toId){
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);
  if(!from || !to) return;
  // hide from
  from.classList.remove('active');
  setTimeout(()=>{
    // show to
    to.classList.add('active');
    // scroll top for new panel
    to.scrollTop = 0;
  }, 420); // matches CSS transition
}

/* hook up navigation */
document.addEventListener('DOMContentLoaded', ()=>{
  startSlideshow();

  // nav links
  document.getElementById('works-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('home','works');
  });
  document.getElementById('home-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel(document.querySelector('.panel.active').id,'home');
  });
  document.getElementById('bio-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('home','bio');
  });
  document.getElementById('contact-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('home','contact');
  });

  // works submenu
  document.getElementById('painting-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('works','painting');
  });
  document.getElementById('videoart-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('works','videoart');
  });
  document.getElementById('installation-link').addEventListener('click', e=>{
    e.preventDefault(); showPanel('works','installation');
  });

  // back buttons: works back
  document.getElementById('works-back').addEventListener('click', e=>{
    e.preventDefault(); showPanel('works','home');
  });

  // gallery back buttons and bio/contact back buttons (data-back attribute points target)
  document.querySelectorAll('.btn.back').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const target = btn.getAttribute('data-back') || 'home';
      // find which panel we're in now
      const active = document.querySelector('.panel.active');
      if(active) showPanel(active.id, target);
    });
  });

  // small back-to-works controls (selector .back-to-works if used)
  document.querySelectorAll('.back-to-works').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      const parentPanel = btn.closest('.panel');
      if(parentPanel) showPanel(parentPanel.id,'works');
    });
  });
});
