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