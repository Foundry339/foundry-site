// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after tapping a link (mobile)
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form — front-end only placeholder.
// This does NOT send an email. Hook it up to a form backend
// (Formspree, Netlify Forms, your own API, etc.) before publishing —
// see README.md for instructions.
const quoteForm = document.getElementById('quote-form');
const formNote = document.getElementById('form-note');

if (quoteForm && formNote) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = quoteForm.querySelector('#name');
    const email = quoteForm.querySelector('#email');

    if (!name.value.trim() || !email.value.trim()) {
      formNote.textContent = 'Please fill in your name and email.';
      formNote.style.color = '#FF3503';
      return;
    }

    // Placeholder success state — replace with a real submission
    // (fetch() to Formspree/your API) once connected.
    formNote.textContent = 'Thanks — this form is not yet connected to an email service. See README.md to hook it up.';
    formNote.style.color = '#2DD4BF';
    quoteForm.reset();
  });
}
