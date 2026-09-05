// ============================================
// HEP-Detector Development Lab – CLEAN FINAL JS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    /* ==============================
       PUBLICATIONS FILTER (FINAL)
    ============================== */

    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationsList = document.getElementById('publicationsList');

    if (publicationsList) {
        // Default view
        publicationsList.setAttribute('data-active', 'all');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.dataset.category;
            publicationsList.setAttribute('data-active', category);
        });
    });


    /* ==============================
       SCROLL ANIMATIONS
    ============================== */

    initScrollAnimations();
    initSmoothScrolling();
    initHeroAnimations();
    initCardHoverEffects();
    initKeyboardNavigation();
    initScrollToTop();
    initLoadingAnimations();
});


/* ==============================
   SCROLL-BASED FADE ANIMATIONS
============================== */

function initScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(
        '.research-card, .faculty-card, .member-card, .facility-card, .collaboration-card, .section-title'
    ).forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}


/* ==============================
   SMOOTH SCROLL
============================== */

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}


/* ==============================
   HERO ANIMATIONS
============================== */

function initHeroAnimations() {
    const elements = document.querySelectorAll(
        '.hero-title, .hero-subtitle, .hero-description, .hero-stats'
    );

    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease';
        el.style.transitionDelay = `${i * 0.2}s`;

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300);
    });
}


/* ==============================
   CARD HOVER EFFECT
============================== */

function initCardHoverEffects() {
    document.querySelectorAll(
        '.research-card, .faculty-card, .member-card, .facility-card, .collaboration-card'
    ).forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}


/* ==============================
   KEYBOARD FILTER NAVIGATION
============================== */

function initKeyboardNavigation() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach((btn, i) => {
        btn.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') buttons[(i + 1) % buttons.length].focus();
            if (e.key === 'ArrowLeft') buttons[(i - 1 + buttons.length) % buttons.length].focus();
            if (e.key === 'Enter' || e.key === ' ') btn.click();
        });
    });
}


/* ==============================
   SCROLL TO TOP
============================== */

function initScrollToTop() {
    const btn = document.createElement('button');
    btn.textContent = '↑';
    btn.className = 'scroll-to-top';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.style.opacity = window.scrollY > 300 ? '1' : '0';
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


/* ==============================
   LOADING ANIMATION
============================== */

function initLoadingAnimations() {
    document.querySelectorAll(
        '.research-grid > *, .faculty-grid > *, .members-grid > *'
    ).forEach((item, i) => {
        item.style.animationDelay = `${i * 0.1}s`;
        item.classList.add('fade-in-up');
    });
}

/* ==============================
   SLIDESHOW – MINIMAL WORKING JS
============================== */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    if (!slides.length) return;

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}


/* ==============================
   DARK MODE
============================== */

function toggleDarkMode() {
    const html = document.documentElement;

    if (html.getAttribute("data-color-scheme") === "dark") {
        html.setAttribute("data-color-scheme", "light");
    } else {
        html.setAttribute("data-color-scheme", "dark");
    }
}

