// ---------- Dark mode toggle ----------
// The choice is remembered in the browser. If storage is blocked, it still works for this visit.
const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

function currentTheme() {
  return root.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function updateLabel() {
  if (!toggle) return;
  toggle.textContent = currentTheme() === 'dark' ? 'Light' : 'Dark';
  toggle.setAttribute('aria-label', 'Switch to ' + toggle.textContent.toLowerCase() + ' mode');
}
if (toggle) {
  toggle.addEventListener('click', () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: ignore */ }
    updateLabel();
  });
}
updateLabel();

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
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- Print button (resume page) ----------
const printBtn = document.getElementById('print-btn');
if (printBtn) printBtn.addEventListener('click', () => window.print());

// ---------- Copy email button ----------
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const email = document.getElementById('email-link').textContent;
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = 'Copied';
    } catch (e) {
      copyBtn.textContent = 'Press Ctrl+C on the email';
    }
    setTimeout(() => { copyBtn.textContent = 'Copy email'; }, 2000);
  });
}

// ---------- Contact form ----------
// Sends the form without leaving the page. Without JavaScript it still posts normally.
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formStatus.textContent = 'Sending...';
    try {
      const res = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });
      if (res.ok) {
        contactForm.reset();
        formStatus.textContent = 'Thanks! Your message was sent.';
      } else {
        formStatus.textContent = 'Something went wrong. Please email me directly.';
      }
    } catch (err) {
      formStatus.textContent = 'Network error. Please email me directly.';
    }
  });
}

// ---------- Highlight the current section in the nav ----------
// Only runs on the home page, where nav links point to sections (#projects, #about, ...).
const navLinks = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const pageSections = document.querySelectorAll('main > section');

if ('IntersectionObserver' in window && navLinks.length) {
  const linkFor = (section) => navLinks.find((a) => a.getAttribute('href') === '#' + section.id);

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.removeAttribute('aria-current'));
      const link = linkFor(entry.target);
      if (link) link.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  pageSections.forEach((section) => navObserver.observe(section));
}