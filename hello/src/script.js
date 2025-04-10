document.addEventListener('DOMContentLoaded', function() {
    // Hero Slider
    const heroSlider = document.querySelector('.hero-slider');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;

    function showTestimonial(n) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
            testimonial.style.position = 'absolute';
        });
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
        testimonials[currentTestimonial].style.position = 'relative';
    }

    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }

    // Change testimonial every 7 seconds
    setInterval(nextTestimonial, 7000);

    // Mobile Menu Toggle (would be added for mobile responsiveness)
    // Cart functionality (would be added for e-commerce features)
    // Product quick view (would be implemented with modal)

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;

            // Animation for cart icon
            const cartIcon = document.querySelector('.fa-shopping-cart').parentElement;
            cartIcon.classList.add('animate');
            setTimeout(() => {
                cartIcon.classList.remove('animate');
            }, 500);
        });
    });

    // Quick view and wishlist buttons would have similar event listeners
});