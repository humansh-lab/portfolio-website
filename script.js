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

    // Cursor Light Effect for Mobile and Desktop
    const cursorLight = document.createElement('div');
    cursorLight.classList.add('cursor-light');
    document.body.appendChild(cursorLight);

    document.addEventListener('mousemove', function(e) {
        cursorLight.style.left = e.pageX + 'px';
        cursorLight.style.top = e.pageY + 'px';
    });

    document.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        cursorLight.style.left = touch.pageX + 'px';
        cursorLight.style.top = touch.pageY + 'px';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // Change image every 4 seconds
    }

    showSlides(); // Start slideshow
});