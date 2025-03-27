document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'block');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('active'));
    });

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.style.display = 'block');

    // Handle form submission with a manual redirect
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        // Let Formsubmit.co handle the submission, but redirect manually after a delay
        setTimeout(() => {
            window.location.href = '/thank-you.html'; // Relative path to thank-you.html
        }, 1000); // Delay to allow Formsubmit.co to process the submission
    });
});