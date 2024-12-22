// JavaScript function to validate the login and redirect
function validateLogin() {
    // Get the email and password values from the form inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace it with actual validation logic)
    if (email === "user@example.com" && password === "password123") {
        // Redirect to the next page (home.html) if login is successful
        window.location.href = "home.html";  // This is your next page
        return false;  // Prevent the form from submitting
    } else {
        // Display an error message if login fails
        alert("Invalid email or password.");
        return false;  // Prevent the form from submitting
    }
}
