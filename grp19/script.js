 // JavaScript for form validation and interaction

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Validate form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const eventSelect = document.getElementById('event');

        if (validateName(nameInput.value) && validateEmail(emailInput.value) && validateEvent(eventSelect.value)) {
            // Form is valid, submit data to the server (you can add AJAX here if needed)
            alert('Form submitted successfully!');
            form.reset(); // Clear form fields after submission
        } else {
            // Form is invalid, display error message or highlight invalid fields
            alert('Please fill out all fields correctly.');
        }
    });

    // Function to validate name
    function validateName(name) {
        return name.trim() !== '';
    }

    // Function to validate email
    function validateEmail(email) {
        // Very basic email validation, you may want to use a more robust method
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Function to validate event selection
    function validateEvent(event) {
        return event !== '';
    }
});

