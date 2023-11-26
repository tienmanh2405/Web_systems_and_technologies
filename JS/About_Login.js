var usernameElement = document.getElementById("user--login");
    if (usernameElement) {
        var userData = JSON.parse(localStorage.getItem("userData"));
        usernameElement.textContent = userData.first_name; 
        // Replace "New Username" with your desired username.
    }
document.getElementById("logout-link").addEventListener("click", function(event) {
    event.preventDefault();
    
    var c = confirm("You definitely want to log out");
    if(c == true){
        localStorage.removeItem("userData");
        window.location.href = "../HTML/Home.html"; 
        alert("Log out successfully");
    } 
    
});

