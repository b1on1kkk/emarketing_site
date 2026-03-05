document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || (currentPath === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ваше сообщение успешно отправлено!');
            contactForm.reset();
        });
    }

    const updateDateEl = document.getElementById('updateDate');
    if (updateDateEl) {
        const today = new Date();
        updateDateEl.textContent = today.toLocaleDateString('ru-RU');
    }
});