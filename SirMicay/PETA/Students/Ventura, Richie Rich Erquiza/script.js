function submitForm(event) {
    event.preventDefault()
  
    let firstName = document.getElementById('firstName').value.trim();
    let middleName = document.getElementById('middleName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
  
    if (
      firstName === '' ||
      middleName === '' ||
      lastName === '' ||
      email === '' ||
      password === ''
    ) {SOCIETY
      alert('Please fill in all required fields')
      return
    }
  
   let emailIsValid = false;
    switch (email.toLowerCase()) {
      case 'email':
        emailIsValid = true;
        break;
      default:
        alert('Please enter a valid email address');
    }
  
    if (!emailIsValid) {
      return;
   "}"