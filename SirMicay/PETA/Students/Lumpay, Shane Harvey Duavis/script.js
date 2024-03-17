function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();

    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var confirmPasswordError = document.getElementById('confirmPasswordError');

    var isValid = true;

    
    switch (true) {
        case (username === ''):
            usernameError.innerHTML = 'Username is required';
            isValid = false;
            break;
        case (email === ''):
            emailError.innerHTML = 'Email is required';
            isValid = false;
            break;
        case (!isValidEmail(email)):
            emailError.innerHTML = 'Invalid email format';
            isValid = false;
            break;
        case (password === ''):
            passwordError.innerHTML = 'Password is required';
            isValid = false;
            break;
        case (password.length < 6):
            passwordError.innerHTML = 'Password must be at least 6 characters';
            isValid = false;
            break;
        case (confirmPassword === ''):
            confirmPasswordError.innerHTML = 'Please confirm password';
            isValid = false;
            break;
        case (password !== confirmPassword):
            confirmPasswordError.innerHTML = 'Passwords do not match';
            isValid = false;
            break;
        default:
            
            usernameError.innerHTML = '';
            emailError.innerHTML = '';
            passwordError.innerHTML = '';
            confirmPasswordError.innerHTML = '';
            break;
    }

    if (isValid) {
      
        console.log('Form submitted successfully');
        
        window.location.href = "success.html";
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}   