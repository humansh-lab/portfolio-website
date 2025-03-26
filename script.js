document.addEventListener('DOMContentLoaded', function() {
    // Navbar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });

    // Form Submission
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thanks for reaching out! I’ll respond soon.');
        form.reset();
    });

    // Slideshow Fix (ensure smooth transitions)
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'block'); // Ensure all slides are in DOM
});