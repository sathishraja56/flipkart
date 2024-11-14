function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation logic
    if (username === "user" && password === "flip1") {
        
        window.location.href = "flip.html";
        
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
}
