// Fade background video in slowly
const bgVideo = document.getElementById('bg-video');
bgVideo.style.opacity = 0;
window.addEventListener('load', () => {
  setTimeout(() => {
    bgVideo.style.transition = 'opacity 4s ease';
    bgVideo.style.opacity = 0.25;
  }, 500);
});
