import React, { useEffect } from 'react';

const Experiencejs = () => {
  useEffect(() => {
    const counterUp = window.counterUp.default;

    const callback = entries => {
      entries.forEach(entry => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains('is-visible')) {
          counterUp(el, {
            duration: 5000,
            delay: 16,
          });
          el.classList.add('is-visible');
        }
      });
    };

    const IO = new IntersectionObserver(callback, { threshold: 1 });

    const els = document.querySelectorAll('.counter');

    for (let count = 0; count < els.length; count++) {
      IO.observe(els[count]);
    }
  }, []);

  return null; // This component does not render anything itself
};

export default Experiencejs;
