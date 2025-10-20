const slides = [
  { type: 'video', src: 'media/bg1.mp4' },
  { type: 'image', src: 'media/bg2.jpg' },
  { type: 'video', src: 'media/bg3.mp4' }
];

let currentIndex = 0;
const layerA = document.getElementById('layerA');
const layerB = document.getElementById('layerB');
let showingA = true;

function setLayer(layer, slide){
  layer.innerHTML = '';
  if(slide.type==='video'){
    const v=document.createElement('video');
    v.src=slide.src;v.autoplay=true;v.loop=true;v.muted=true;v.playsInline=true;v.style.width='100%';v.style.height='100%';v.style.objectFit='cover';
    layer.appendChild(v);
  } else { layer.style.backgroundImage=`url('${slide.src}')`; }
}

function showNextSlide(){
  const nextIndex = (currentIndex+1)%slides.length;
  const nextSlide = slides[nextIndex];
  const incoming = showingA?layerA:layerB;
  const outgoing = showingA?layerB:layerA;
  setLayer(incoming,nextSlide);
  incoming.classList.add('show');
  outgoing.classList.remove('show');
  showingA = !showingA;
  currentIndex = nextIndex;
}

setLayer(layerA,slides[0]);
layerA.classList.add('show');
setInterval(showNextSlide,7000);
