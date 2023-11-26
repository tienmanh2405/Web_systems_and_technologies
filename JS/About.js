var addtocartButtons = document.getElementsByClassName("add__card");

for (var i = 0; i < addtocartButtons.length; i++) {
    addtocartButtons[i].addEventListener("click", function(event) {
        event.preventDefault();
        c = confirm("You need an account that can make purchases!Do you want to create a member now?");
        if(c == true){
            window.location.href = "../HTML/DangKi.html";
        } 
        else
            return false;
    });
}

var addtocartButtons1 = document.getElementsByClassName("add-card");

for (var i = 0; i < addtocartButtons1.length; i++) {
    addtocartButtons1[i].addEventListener("click", function(event) {
        event.preventDefault();
        c = confirm("You need an account that can make purchases!Do you want to create a member now?");
        if(c == true){
            window.location.href = "../HTML/DangKi.html";
        } 
        else
            return false;
    });
}

var addtocartButtons3 = document.getElementsByClassName("cart-icon");

for (var i = 0; i < addtocartButtons3.length; i++) {
    addtocartButtons3[i].addEventListener("click", function(event) {
        event.preventDefault();
        c = confirm("You need an account that can make purchases!Do you want to create a member now?");
        if(c == true){
            window.location.href = "../HTML/DangKi.html";
        } 
        else
            return false;
    });
}