// Scroll‑reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('active');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(r => observer.observe(r));

// Smooth scroll utility
function scrollToSection(id) {
  document.querySelector('#' + id).scrollIntoView({ behavior: 'smooth' });
}

// Active nav‑link highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - window.innerHeight/2) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active-link', link.getAttribute('href') === '#' + current);
  });
});
