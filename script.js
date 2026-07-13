const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const copyButton = document.querySelector('[data-copy-email]');
const toast = document.querySelector('.toast');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  document.body.classList.toggle('menu-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  document.body.classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('rappono1097@gmail.com');
    copyButton.textContent = 'Email copied';
    toast.classList.add('show');
    window.setTimeout(() => {
      copyButton.textContent = 'Copy email';
      toast.classList.remove('show');
    }, 2200);
  } catch {
    window.location.href = 'mailto:rappono1097@gmail.com';
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
