function validateRegistration() {
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var dateOfBirth = document.getElementById('dateofbirth').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    if (firstName === '' || lastName === ''|| dateOfBirth === ''|| email === '' || password === '') {
      alert('Please fill in all fields for registration.');
    } else {
      // Additional registration logic can be added here
      alert('Registration successful!');
    }
  }
  
  function validateTerms() {
    var agreeCheckbox = document.getElementById('agree');
  
    if (!agreeCheckbox.checked) {
      alert('Please agree to the terms and conditions.');
    } else {
      // Additional logic for terms acceptance can be added here
      alert('Terms accepted!');
    }
  }
  
  function validatePayment() {
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
  
    if (cardNumber === '' || expiryDate === '' || cvv === '') {
      alert('Please fill in all fields for payment.');
    } else {
      // Additional payment processing logic can be added here
      alert('Payment successful!');
    }
  }
  
  