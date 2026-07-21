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

// Contact form — submits to Netlify Forms (data-netlify="true" on the form).
// Netlify only detects/captures the form once this site is deployed on
// Netlify; local dev and other hosts will get the "went wrong" message
// below since there's nothing at "/" to receive the POST. See README.md.
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

    const body = new URLSearchParams(new FormData(quoteForm)).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then((res) => {
        if (!res.ok) throw new Error('Form submission failed');
        formNote.textContent = "Thanks — I'll follow up within 1-2 business days.";
        formNote.style.color = '#2DD4BF';
        quoteForm.reset();
      })
      .catch(() => {
        formNote.textContent = 'Something went wrong sending your message — please email foundry339@gmail.com directly.';
        formNote.style.color = '#FF3503';
      });
  });
}
