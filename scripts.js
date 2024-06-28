// Smooth Scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        valid = false;
        alert('Please fill in all fields');
    }

    if (valid) {
        // Placeholder for form submission code (e.g., AJAX request)
        alert('Form submitted successfully!');
    }
});
