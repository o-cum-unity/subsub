document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Here you can add code to handle form submission, like sending data to server or displaying a thank you message
    // For simplicity, let's just log the values for now
    console.log("Name:", name);
    console.log("Email:", email);
});

