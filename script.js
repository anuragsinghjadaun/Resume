document.addEventListener('DOMContentLoaded', () => {
    // Initialize Feather icons
    feather.replace();

    // Navigation functionality
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('main section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.getAttribute('data-section');
            
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetSection) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Form submission (you can add your own logic here)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });

    // Add animation to skills on scroll
    const skillsSection = document.getElementById('skills');
    const skills = document.querySelectorAll('.skill');

    const animateSkills = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < triggerBottom) {
                skill.style.opacity = '1';
                skill.style.transform = 'translateY(0)';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
});