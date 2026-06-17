document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Submission for Bauhaus Site
    const bauhausForm = document.getElementById('bauhausForm');
    if (bauhausForm) {
        bauhausForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = bauhausForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'TRANSMITTING...';
            btn.style.backgroundColor = '#FDD835';
            btn.style.color = '#1A1A1A';
            btn.disabled = true;

            setTimeout(() => {
                alert('DATA LOGGED. THANK YOU FOR CONNECTING.');
                bauhausForm.reset();
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.disabled = false;
            }, 1500);
        });
    }
});
