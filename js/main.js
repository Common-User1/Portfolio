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
