const scrollTopBtn = document.querySelector('.scroll-top');

function toggleScrollButton() {
  const shouldShow = window.scrollY > 320;
  scrollTopBtn.classList.toggle('show', shouldShow);
}

function smoothScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function enableAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  toggleScrollButton();
  enableAnchorScroll();
});

window.addEventListener('scroll', toggleScrollButton);
scrollTopBtn.addEventListener('click', smoothScrollToTop);

