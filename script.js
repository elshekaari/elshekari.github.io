const slides = [
  { type: 'video', src: 'media/bg1.mp4' },
  { type: 'image', src: 'media/bg2.jpg' },
  { type: 'video', src: 'media/bg3.mp4' }
];

const SLIDE_DURATION = 7000;
const TRANSITION_DELAY = 1200;

let currentIndex = 0;
const layerA = document.getElementById('layerA');
const layerB = document.getElementById('layerB');
let showingA = true;

function setLayer(layer, slide){
  layer.innerHTML = '';
  layer.style.backgroundImage = '';
  if(slide.type==='video'){
    const v=document.createElement('video');
    v.src=slide.src;v.autoplay=true;v.loop=true;v.muted=true;v.playsInline=true;v.preload='auto';
    v.style.width='100%';v.style.height='100%';v.style.objectFit='cover';v.style.position='absolute';v.style.top=0;v.style.left=0;
    layer.appendChild(v);
  }else{layer.style.backgroundImage=`url('${slide.src}')`;}
}

function showNextSlide(){
  const nextIndex = (currentIndex+1)%slides.length;
  const nextSlide = slides[nextIndex];
  const incoming = showingA?layerA:layerB;
  const outgoing = showingA?layerB:layerA;
  setLayer(incoming,nextSlide);
  incoming.classList.add('show');
  outgoing.classList.remove('show');
  setTimeout(()=>{outgoing.innerHTML='';outgoing.style.backgroundImage='';},TRANSITION_DELAY+80);
  showingA = !showingA;
  currentIndex = nextIndex;
}

function startSlideshow(){
  setLayer(layerA,slides[0]);layerA.classList.add('show');
  if(slides.length>1){setLayer(layerB,slides[1]);currentIndex=1;showingA=false;layerB.classList.remove('show');layerA.classList.add('show');setTimeout(()=>{currentIndex=0;showingA=true;setInterval(showNextSlide,SLIDE_DURATION);},3000);}
}

unction showPanel(toId){
  const current = document.querySelector('.panel.active');
  const next = document.getElementById(toId);
  if(!current || !next) return;
  current.classList.remove('active');   // hide current
  next.classList.add('active');         // show new
  next.scrollTop = 0;
}

// NAVIGATION
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
