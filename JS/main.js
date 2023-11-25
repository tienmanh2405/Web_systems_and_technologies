function checkUser(){
    let name = $("#first-name").val();
    let check = /^[A-Z][a-zA-z]*(\s[A-Z][a-zA-Z]*)*$/;
    if(name == ''){
        $("#errName").html("Required input");
        return false;
    }
    else if(!check.test(name)){
        $("#errName").html("Starts with an uppercase letter and words separated by spaces.");
        return false;
    }
    else 
        return true;
}
$("#first-name").blur(function(e){
    $("#errName").html("(*)");
    checkUser();
})

function checkEmail() {
    let arrEmail = [];
    let email = $("#email").val();
    let check = /^[a-zA-Z0-9]+\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}$/;
    if (email == '') {
        $("#errEmail").html("Required input");
        return false;
    }
    else if (email === arrEmail) {
        $("#errEmail").html("Email account already exists!");
        return false;
    }
    else if (!check.test(email)) {
        $("#errEmail").html("Please re-enter the correct email address!");
        return false;
    }
    else {
        arrEmail.push(email);
        return true;
    }
}
$("#email").blur(function (e) {
    $("#errEmail").html("(*)");
    checkEmail();
})
function checkPassword() {
    let password = $("#password").val();
    let check = /^[A-Za-z0-9!@#$%^&*()_+[\]{}|;:'",.<>?/-].{8,20}$/;
    if (password == '') {
        $("#errPass").html("Required input");
        return false;
    }
    else if (!check.test(password)) {
        $("#errPass").html("Passwords must be at least 8 characters include lowercase, uppercase, numbers, and special characters!");
        return false;
    }
    else
        return true;
}
$("#password").blur(function (e) {
    $("#errPass").html("(*)");
    checkPassword();
})
function checkconfirmPassword(){
    let pass = $("#password").val();
    let confirm = $("#confirm-password").val();
    if(confirm == ""){
        $("#errConfirmPass").html("Required input");
        return false;
    }
    else if(confirm != pass){
        $("#errConfirmPass").html("Confirm password must be match with password");
        return false;
    }
    else    
        return true;
}
$("#confirm-password").blur(function (e) {
    $("#errConfirmPass").html("(*)");
    checkconfirmPassword();
})

const kiemTraDangKi = () =>{
        var first_name = document.getElementById("first-name").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;
        if (checkUser() && checkEmail() && checkPassword() && checkconfirmPassword()) {
            const userData = {
                first_name: first_name,
                email: email,
                password: password
            };
            // Lưu thông tin đăng ký vào localStorage
            localStorage.setItem('userData', JSON.stringify(userData));
            window.location.href="../HTML/About.html";
            alert("Successful member registration!");
        }
        
}
const formbtn = document.getElementById("action");
formbtn.addEventListener('submit',(e) => {
    e.preventDefault();
    kiemTraDangKi();
});


