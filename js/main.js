/* ========================================
   DENTIVA - Main JavaScript
   GSAP Animations, Navigation, FAQ, Counters
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // ========================================
    // NAVBAR
    // ========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.navbar__link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const link = document.querySelector(`.navbar__link[href="#${sectionId}"]`);
            if (link) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    navLinkItems.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Hamburger menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ========================================
    // GSAP SCROLL ANIMATIONS
    // ========================================

    // Hero animations
    gsap.from('.hero__title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.hero__text', {
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.hero__actions', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out'
    });

    gsap.from('.hero__trust', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out'
    });

    gsap.from('.hero__image-card', {
        opacity: 0,
        x: 60,
        duration: 1.2,
        delay: 0.3,
        ease: 'power3.out'
    });

    gsap.from('.hero__float-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        delay: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // Stats section
    gsap.from('.stats__box', {
        scrollTrigger: {
            trigger: '.stats',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Services section
    gsap.from('.services .section-header', {
        scrollTrigger: {
            trigger: '.services',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '.services__grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
    });

    // About section
    gsap.from('.about__image-wrapper', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 75%'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about__content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 75%'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Why Us section
    gsap.from('.why-us .section-header', {
        scrollTrigger: {
            trigger: '.why-us',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.why-us__card', {
        scrollTrigger: {
            trigger: '.why-us__grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // Team section
    gsap.from('.team .section-header', {
        scrollTrigger: {
            trigger: '.team',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.team__card', {
        scrollTrigger: {
            trigger: '.team__grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
    });

    // Testimonials section
    gsap.from('.testimonials .section-header', {
        scrollTrigger: {
            trigger: '.testimonials',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    // Gallery section
    gsap.from('.gallery .section-header', {
        scrollTrigger: {
            trigger: '.gallery',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.gallery__item', {
        scrollTrigger: {
            trigger: '.gallery__grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
    });

    // FAQ section
    gsap.from('.faq__content', {
        scrollTrigger: {
            trigger: '.faq',
            start: 'top 75%'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.faq__accordion', {
        scrollTrigger: {
            trigger: '.faq',
            start: 'top 75%'
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Appointment section
    gsap.from('.appointment__info', {
        scrollTrigger: {
            trigger: '.appointment',
            start: 'top 75%'
        },
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.appointment__form', {
        scrollTrigger: {
            trigger: '.appointment',
            start: 'top 75%'
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });

    // Insurance section
    gsap.from('.insurance .section-header', {
        scrollTrigger: {
            trigger: '.insurance',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.insurance__logo', {
        scrollTrigger: {
            trigger: '.insurance__grid',
            start: 'top 85%'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out'
    });

    // Blog section
    gsap.from('.blog .section-header', {
        scrollTrigger: {
            trigger: '.blog',
            start: 'top 75%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.blog__card', {
        scrollTrigger: {
            trigger: '.blog__grid',
            start: 'top 80%'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out'
    });

    // Emergency banner
    gsap.from('.emergency__banner', {
        scrollTrigger: {
            trigger: '.emergency',
            start: 'top 85%'
        },
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: 'power3.out'
    });

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    const counters = document.querySelectorAll('.stats__number[data-count]');
    let counterAnimated = false;

    function animateCounters() {
        if (counterAnimated) return;
        counterAnimated = true;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current).toLocaleString();
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target.toLocaleString() + '+';
                }
            };

            updateCounter();
        });
    }

    // Trigger counters when stats section is in view
    ScrollTrigger.create({
        trigger: '.stats',
        start: 'top 80%',
        onEnter: animateCounters,
        once: true
    });

    // ========================================
    // FAQ ACCORDION
    // ========================================
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq__question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ========================================
    // SWIPER - TESTIMONIALS
    // ========================================
    new Swiper('.testimonials__swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });

    // ========================================
    // SMOOTH SCROLL
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 72;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // FORM HANDLING
    // ========================================
    const appointmentForm = document.getElementById('appointmentForm');

    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(appointmentForm);
        const data = Object.fromEntries(formData);

        // Simple validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service || !data.date || !data.time) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simulate submission
        const submitBtn = appointmentForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Booking...';
        submitBtn.disabled = true;

        setTimeout(() => {
            submitBtn.textContent = 'Appointment Booked!';
            submitBtn.style.background = '#0D2E25';

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                appointmentForm.reset();
            }, 2000);
        }, 1500);
    });

    // ========================================
    // SET MIN DATE FOR APPOINTMENT
    // ========================================
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.setAttribute('min', `${yyyy}-${mm}-${dd}`);
    }
});
