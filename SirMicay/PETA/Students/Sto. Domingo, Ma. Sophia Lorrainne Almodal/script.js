function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    switch (username) {
        case "pia":
            switch (password) {
                case "pia123":
                    window.location.href = "Dashboard.html";
                    return false;
                default:
                    alert("Incorrect password");
                    return false;
            }
        case "admin":
            switch (password) {
                case "admin123":
                    alert("Login Successfully");
                    return false;
                default:
                    alert("Incorrect password");
                    return false;
            }
        default:
            alert("No user");
            return false;
    }
}