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

    // Contact form handling
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
    // Dynamically set FormSubmit attributes
    contactForm.setAttribute('action', 'https://formsubmit.co/kardamhumansh05@gmail.com');
    contactForm.setAttribute('method', 'POST');

    // Add hidden fields for FormSubmit
    const subjectField = document.createElement('input');
    subjectField.type = 'hidden';
    subjectField.name = '_subject';
    subjectField.value = 'New Contact Form Message';
    contactForm.appendChild(subjectField);

    const honeyField = document.createElement('input');
    honeyField.type = 'hidden';
    honeyField.name = '_honey';
    honeyField.value = '';
    contactForm.appendChild(honeyField);

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Disable form during submission
        contactForm.style.opacity = '0.7';
        contactForm.style.pointerEvents = 'none';

        // Get form data
        const formData = new FormData(contactForm);

        // Send form data to FormSubmit
        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Show success message
                contactForm.style.opacity = '0';
                formSuccess.style.opacity = '1';
                formSuccess.style.pointerEvents = 'auto';
                contactForm.reset();

                // Reset form after 5 seconds
                setTimeout(() => {
                    formSuccess.style.opacity = '0';
                    formSuccess.style.pointerEvents = 'none';
                    contactForm.style.opacity = '1';
                    contactForm.style.pointerEvents = 'auto';
                }, 5000);
            } else {
                // Show error message
                alert('Failed to send message. Please try again later.');
                contactForm.style.opacity = '1';
                contactForm.style.pointerEvents = 'auto';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
            contactForm.style.opacity = '1';
            contactForm.style.pointerEvents = 'auto';
        });
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