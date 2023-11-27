function checkFirstName(){
    let name = $("#first_name").val();
    let check =  /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s?)+$/;
    if(name == ''){
        $("#errName").html("Required input");
        return false;
    }
    else if(!check.test(name)){
        $("#errName").html("First Name :Starts with an uppercase letter and words separated by spaces.");
        return false;
    }
    else 
        return true;
}
$("#first_name").blur(function(e){
    $("#errName").html("");
    checkFirstName();
})
function checkLastName(){
    let name = $("#last_name").val();
    let check =  /^([A-ZÀ-Ỹ][a-zà-ỹ]*\s?)+$/;
    if(name == ''){
        $("#errName").html("Required input");
        return false;
    }
    else if(!check.test(name)){
        $("#errName").html("Last Name :Starts with an uppercase letter and words separated by spaces.");
        return false;
    }
    else 
        return true;
}
$("#last_name").blur(function(e){
    $("#errName").html("");
    checkLastName();
})

function checkAddress(){
    let address = $("#address").val();
    console.log("Address value:", name);
    if(address == ''){
        $("#errAddress").html("Required input");
        return false;
    }
    else 
        return true;
}
$("#address").blur(function(e){
    $("#errAddress").html("");
    checkAddress();
})

function checkEmail() {
    let email = $("#email").val();
    let check = /^[a-zA-Z0-9]+\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}$/;
    if (email == '') {
        $("#errEmail").html("Required input");
        return false;
    }
    else if (!check.test(email)) {
        $("#errEmail").html("Email: Please re-enter the correct email address!");
        return false;
    }
    else {
        return true;
    }
}
$("#email").blur(function (e) {
    $("#errEmail").html("");
    checkEmail();
})
function checkPhone() {
    let phone = $("#phone").val();
    const pattern = /^\d{3}-\d{3}-\d{4}$/;
    if (phone == '') {
        $("#errEmail").html("Required input");
        return false;
    }
    else if (!pattern.test(phone)) {
        $("#errEmail").html(" Phone: Please re-enter the correct email address!");
        return false;
    }
    else {
        return true;
    }
}
$("#phone").blur(function (e) {
    $("#errEmail").html("");
    checkPhone();
})
$(document).ready(function(){
    $('#btn').click(function(){
        if(checkFirstName() && checkLastName() && checkAddress() && checkEmail() && checkPhone()){
            window.location.href="../HTML/Home_Login.html";
            alert("Successful payment!");
        }
    })
})