// Navbar toggle for all pages
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// About Page Functionality (Accordion)
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const content = header.nextElementSibling;
                const isOpen = content.style.maxHeight;

                // Close all other accordion items
                document.querySelectorAll('.accordion-content').forEach(item => {
                    if (item !== content) {
                        item.style.maxHeight = null;
                        item.previousElementSibling.classList.remove('active');
                    }
                });

                // Toggle the clicked accordion item
                content.style.maxHeight = isOpen ? null : `${content.scrollHeight}px`;
                header.classList.toggle('active');
            });
        });
    }

    // Contact Page Functionality
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();
            const formMessage = document.getElementById('formMessage');

            if (name.length < 2 || !email.includes('@') || message.length < 10) {
                formMessage.style.display = 'block';
                formMessage.style.color = '#ff4444';
                formMessage.textContent = 'Please enter a valid name (min 2 chars), email, and message (min 10 chars).';
            } else {
                formMessage.style.display = 'block';
                formMessage.style.color = '#7494ec';
                formMessage.textContent = 'Message sent successfully! We will respond within 24 hours.';
                contactForm.reset();
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 3000);
            }
        });
    }