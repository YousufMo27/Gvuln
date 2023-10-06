// Get the logout button element
var logoutButton = document.getElementById("logoutButton");

// Add click event listener to the logout button
logoutButton.addEventListener("click", function() {
    // Remove the authentication status from sessionStorage
    sessionStorage.removeItem("loggedIn");

    // Redirect the user to the login page
    window.location.href = "index.html";
});
