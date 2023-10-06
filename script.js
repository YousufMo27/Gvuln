var loggedIn = sessionStorage.getItem("loggedIn");

if (loggedIn === "true") {
    window.location.href = "direct.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "rolaf" && password === "dr") {
        // Redirect to the new page upon successful login
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "direct.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});
