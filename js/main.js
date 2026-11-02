// Fade sections in as they scroll into view.
// If the browser can't do this, everything is simply shown.
const items = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.15 });

  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add('is-visible'));
}

// Keep the footer year up to date automatically.
document.getElementById('year').textContent = new Date().getFullYear();
