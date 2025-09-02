document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Testimonial Slider
    const slider = document.querySelector('.testimonial-slider');
    const slides = document.querySelectorAll('.testimonial-card');
    const dotsContainer = document.querySelector('.slider-dots');

    if (slider && slides.length > 0) {
        let currentIndex = 0;
        const slideWidth = slides[0].clientWidth;

        // Create dots
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(index) {
            slider.style.transform = `translateX(-${index * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            currentIndex = index;
        }

        function nextSlide() {
            let nextIndex = (currentIndex + 1) % slides.length;
            goToSlide(nextIndex);
        }

        setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    }
});
