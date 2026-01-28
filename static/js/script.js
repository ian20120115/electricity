// 平滑滾動效果
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // 忽略僅有 # 的連結

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 動畫只播放一次
            }
        });
    }, observerOptions);

    // 選取要執行動畫的元素
    const animatedElements = document.querySelectorAll('.service-item, .advantage-item, .card, h2, .hero-section h1, .hero-section p, .hero-section .btn');
    animatedElements.forEach(el => {
        el.classList.add('fade-in-up'); // 加上初始隱藏樣式
        observer.observe(el);
    });
});
