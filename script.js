document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });

    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thanks for reaching out! Our team will respond soon.');
        form.reset();
    });

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'block');
});