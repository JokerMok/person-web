const root = document.documentElement;

function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    root.style.setProperty('--scroll-progress', progress.toFixed(4));
}

function initReveal() {
    const targets = document.querySelectorAll('.hero-grid, .section-head, .card, .step, .hero-panel');
    targets.forEach((target) => target.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

    targets.forEach((target) => observer.observe(target));
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    initReveal();
});

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
