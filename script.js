document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this)
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        // Here you can add code to send the form data to a server or an email service
        document.getElementById('contactForm').reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});