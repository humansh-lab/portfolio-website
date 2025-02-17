document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80; // Adjust based on navbar height
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top: targetPosition, behavior: 'smooth' });

        // Remove active class from all links and add to the clicked one
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});
window.addEventListener("scroll", () => {
    let fromTop = window.scrollY + 85; // Adjust offset
    document.querySelectorAll('nav ul li a').forEach(link => {
        let section = document.querySelector(link.getAttribute("href"));
        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function () {
        document.querySelector("nav ul").classList.remove("show"); // Hide menu
    });
});
