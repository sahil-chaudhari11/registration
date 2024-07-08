document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var name = document.getElementById('username').value;
    var email = document.getElementById('email').value
  
    const data ={
      name:name,
      email:email,
      password:password,
      confirmPassword:confirmPassword
    }
    
    if (password !== confirmPassword) {
     
      alert('Passwords do not match!');
      
      return false;
    }
    
    
    console.log("submitted data is ",data);
    alert('Form submitted successfully!');
    
  });