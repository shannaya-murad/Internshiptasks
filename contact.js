document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('Errormessage').textContent = '';
    document.getElementById('successMessage').textContent = '';

    // Name validation
    const name = document.getElementById('Fullname').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Phone validation
    const phone = document.getElementById('phone').value;
    const phonePattern = /^\d{11}$/;
    if (phone.trim() === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 11 digits.';
        isValid = false;
    }

    // Message validation
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('Errormessage').textContent = 'Message is required.';
        isValid = false;
    }

    // If all fields are valid, show success message
    if (isValid) {
        document.getElementById('successMessage').textContent = 'Your message has been sent successfully!';
        // Reset form
        document.getElementById('contact').reset();
    }
});
