// Toggle form overlay
function toggleForm() {
    const formOverlay = document.getElementById('formOverlay');
    formOverlay.style.display = formOverlay.style.display === 'flex' ? 'none' : 'flex';
}

// Close form when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const formOverlay = document.getElementById('formOverlay');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', function() {
        formOverlay.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === formOverlay) {
            formOverlay.style.display = 'none';
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});