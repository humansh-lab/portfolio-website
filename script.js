document.addEventListener('DOMContentLoaded', function() {
    // Navbar Toggle for Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close menu when a link is clicked (for mobile users)
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });

    // Cursor Light Effect for Desktop Only
    if (!window.matchMedia("(max-width: 768px)").matches) {
        const cursorLight = document.createElement('div');
        cursorLight.classList.add('cursor-light');
        document.body.appendChild(cursorLight);

        document.addEventListener('mousemove', function(e) {
            cursorLight.style.left = e.pageX + 'px';
            cursorLight.style.top = e.pageY + 'px';
        });
    }
});