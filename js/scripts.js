// Custom JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Implement microinteractions
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            button.classList.remove('hovered');
        });
    });

    // Initialize AOS
    AOS.init();

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('email');
        if (validateEmail(emailInput.value)) {
            alert('Thank you for subscribing!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Validate Email Function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
     // Trigger animations for hero heading and subheading
    document.getElementById('hero-heading').classList.add('fadeInDown');
    document.getElementById('hero-subheading').classList.add('fadeInLeft');s


});
