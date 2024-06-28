document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const inputs = this.querySelectorAll('input');
            let valid = true;

            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    valid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = 'green';
                }
            });

            if (valid) {
                alert('Form submitted successfully!');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    });
});
