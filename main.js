const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll('.reveal-on-scroll').forEach((section) => {
    revealObserver.observe(section);
});

const parallaxNodes = document.querySelectorAll('[data-parallax]');

const updateParallax = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    parallaxNodes.forEach((node) => {
        const speed = parseFloat(node.dataset.parallax || '0');
        node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
    });
};

updateParallax();
window.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax);
