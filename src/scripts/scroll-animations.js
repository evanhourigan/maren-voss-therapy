function initScrollAnimations() {
  const animated = document.querySelectorAll('.fade-in-up, .scale-in');

  // Immediately reveal elements already in the viewport (no animation)
  animated.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.style.transition = 'none';
      el.classList.add('is-visible');
      // Re-enable transitions after paint
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = '';
        });
      });
    }
  });

  // Observe off-screen elements for scroll-triggered animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animated.forEach((el) => {
    if (!el.classList.contains('is-visible')) {
      observer.observe(el);
    }
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
