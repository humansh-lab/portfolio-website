document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section-title, .project-card').forEach(el => {
        observer.observe(el);
    });

 // Contact form handling with Formspree
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        contactForm.style.opacity = '0.7';
        contactForm.style.pointerEvents = 'none';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://formspree.io/f/maneanoq", {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                contactForm.reset();
                contactForm.style.opacity = '0';
                formSuccess.style.opacity = '1';
                formSuccess.style.pointerEvents = 'auto';

                setTimeout(() => {
                    formSuccess.style.opacity = '0';
                    formSuccess.style.pointerEvents = 'none';
                    contactForm.style.opacity = '1';
                    contactForm.style.pointerEvents = 'auto';
                }, 5000);
            } else {
                alert("Something went wrong. Please try again.");
                contactForm.style.opacity = '1';
                contactForm.style.pointerEvents = 'auto';
            }
        } catch (error) {
            alert("An error occurred. Please check your internet or try again.");
            contactForm.style.opacity = '1';
            contactForm.style.pointerEvents = 'auto';
        }
    });
}


    // Scroll indicator behavior
    const scrollIndicator = document.querySelector('.scroll-indicator');
    let lastScrollPosition = 0;

    window.addEventListener('scroll', () => {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > lastScrollPosition) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '0.7';
        }
        
        lastScrollPosition = currentScrollPosition;
        
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            scrollIndicator.style.opacity = '0';
        }
    });

    // Initialize scroll indicator
    scrollIndicator.style.opacity = '0.7';
});