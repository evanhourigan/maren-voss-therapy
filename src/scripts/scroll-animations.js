function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.hasAttribute('data-stagger')) {
            const children = el.querySelectorAll('.fade-in-up');
            children.forEach((child, i) => {
              child.style.transitionDelay = `${i * 100}ms`;
              child.classList.add('is-visible');
            });
          } else {
            el.classList.add('is-visible');
          }
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => {
    if (!el.closest('[data-stagger]')) {
      observer.observe(el);
    }
  });

  document.querySelectorAll('[data-stagger]').forEach((el) => {
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
