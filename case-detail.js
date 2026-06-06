const root = document.documentElement;
let modalImages = [];
let modalIndex = 0;

function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    root.style.setProperty('--scroll-progress', progress.toFixed(4));
}

function initReveal() {
    const targets = document.querySelectorAll('.hero-grid, .metrics, .section-head, .card, .visual-card, .step, .next-card');
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

function setModalImage() {
    const image = document.getElementById('modalImage');
    const caption = document.getElementById('modalCaption');
    const current = modalImages[modalIndex];

    image.src = current.src;
    image.alt = current.alt || '案例图片';
    caption.textContent = current.caption || '';
}

function openModalFromButton(button) {
    const gallery = button.dataset.gallery;
    const images = Array.from(document.querySelectorAll(`[data-gallery="${gallery}"]`));

    modalImages = images.map((item) => {
        const image = item.querySelector('img');
        const caption = item.closest('figure')?.querySelector('figcaption')?.textContent?.trim() || '';
        return {
            src: image.getAttribute('src'),
            alt: image.getAttribute('alt'),
            caption
        };
    });

    modalIndex = Math.max(0, images.indexOf(button));
    document.getElementById('imageModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    setModalImage();
}

function closeModal() {
    document.getElementById('imageModal').classList.remove('active');
    document.body.style.overflow = '';
}

function moveModal(direction) {
    if (!modalImages.length) return;
    modalIndex = (modalIndex + direction + modalImages.length) % modalImages.length;
    setModalImage();
}

function initModal() {
    document.querySelectorAll('[data-gallery]').forEach((button) => {
        button.addEventListener('click', () => openModalFromButton(button));
    });

    document.querySelector('[data-modal-close]')?.addEventListener('click', closeModal);
    document.querySelector('[data-modal-prev]')?.addEventListener('click', () => moveModal(-1));
    document.querySelector('[data-modal-next]')?.addEventListener('click', () => moveModal(1));

    document.getElementById('imageModal')?.addEventListener('click', (event) => {
        if (event.target.id === 'imageModal') closeModal();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeModal();
        if (document.getElementById('imageModal')?.classList.contains('active')) {
            if (event.key === 'ArrowLeft') moveModal(-1);
            if (event.key === 'ArrowRight') moveModal(1);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgress();
    initReveal();
    initModal();
});

window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
