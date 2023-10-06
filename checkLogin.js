// Check if the user is logged in
var loggedIn = sessionStorage.getItem("loggedIn");

// If not logged in, redirect to the login page
if (loggedIn !== "true") {
    window.location.href = "index.html";
}
