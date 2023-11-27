document.addEventListener("DOMContentLoaded", function(){
    var userData = JSON.parse(localStorage.getItem("userData"));
    $('.name-title').html(userData.first_name);
    $('#user_email').html(userData.email);
    $('#user_pass').attr('type', 'password').val(userData.password);
});

function checkUser(){
    let name = $("#name").val();
    let check = /^[A-Z][a-zA-z]*(\s[A-Z][a-zA-Z]*)*$/;
    if(name == ''){
        $("#errName").html("Required input");
        return false;
    }
    else if(!check.test(name)){
        $("#errName").html("Starts with an uppercase letter and words separated by spaces.");
        return false;
    }
    else {
        return true;
    }
}

$("#name").blur(function(e){
    $("#errName").html("(*)");
    checkUser();
});

function checkEmail() {
    let email = $("#email").val();
    let check = /^[a-zA-Z0-9]+\@[a-zA-Z]{4,7}\.[a-zA-Z]{3}$/;
    if (email == '') {
        $("#errEmail").html("Required input");
        return false;
    }
    else if (!check.test(email)) {
        $("#errEmail").html("Please re-enter the correct email address!");
        return false;
    }
    else {
        return true;
    }
}

$("#email").blur(function (e) {
    $("#errEmail").html("(*)");
    checkEmail();
});

$(document).ready(function(){
    $('#modalId').on('show.bs.modal', function (event) {
    var modal = $(this);
    // Lấy đối tượng userData từ localStorage
    var userData = JSON.parse(localStorage.getItem("userData"));

    // Hiển thị giá trị trong các thẻ input
    modal.find('#name').val(userData.first_name).attr('placeholder', userData.first_name);
    modal.find('#email').val(userData.email).attr('placeholder', userData.email);
});
    $('#btnclick').click(function(){
        const name = $('#name').val();
        const email = $('#email').val();
        let gender = $('input[type="radio"]:checked').val();
        const address = $('#address').val();
        const phone = $('#phone').val();
        const day = $('#day').val();
        const cmnd = $('#cmnd').val();
        const note = $('#note').val();
        const img = $('#img').val();
        const txt = $('.txt');
        const NameEdit = $('.name-title');
        if (checkUser() && checkEmail()) {
            NameEdit.innerHTML = name;
            txt[0].innerHTML = email;
            txt[2].innerHTML = gender;  
            txt[3].innerHTML = address;
            txt[4].innerHTML = phone;
            txt[5].innerHTML = day;
            txt[6].innerHTML = cmnd;
            txt[7].innerHTML = note;
            var currentUserData = JSON.parse(localStorage.getItem("userData"));
            currentUserData.first_name = name;
            currentUserData.email = email;
            localStorage.setItem("userData", JSON.stringify(currentUserData));
            $('#modalId').modal('hide');
            document.getElementById('reset_form').reset();
        }
    });
});
