function validation() {
    var username = document.forms['form']['username'];
    var password = document.forms['form']['password'];

    var username_error = document.getElementById('username_error');
    var password_error = document.getElementById('password_error');

    username.addEventListener('textInput', username_Verify);
    password.addEventListener('textInput', password_Verify);

    if (username.value.length < 6) {
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if (password.value.length < 8) {
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    switch (username) {
        case "rzcinco05":
            switch (password) {
                case "12346578":
                    window.location.href = "layout.html";
                    return false;
                default:
                    alert ("Incorrect Password! ᕙ(⇀‸↼‶)ᕗ")
                    return false;
            }
            break;
        case "user01":
            switch (password) {
                case "12345678":
                    alert ("Login Successful! (づ ◕‿◕ )づ");
                    return true;
                default:
                    alert ("Incorrect Password! ᕙ(⇀‸↼‶)ᕗ");
                    return false;
            }
            break;
                default: 
                    alert ("User Not Found! ಥ‿ಥ");
                    return false;
    }
}
function username_Verify(){
    if (username.value.length >= 6) {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
function password_Verify(){
    if (password.value.length >= 8) {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}