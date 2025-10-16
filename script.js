// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Gallery loop
const items = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

function showNext() {
  items.forEach((item, index) => {
    item.style.opacity = index === currentIndex ? '1' : '0';
  });
  currentIndex = (currentIndex + 1) % items.length;
}

setInterval(showNext, 5000); // change every 5s
showNext(); // show first immediately
