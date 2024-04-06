// login.js

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      // Prevent form submission
      event.preventDefault();
  
      // Fetch username and password
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
  
      // Check if username or password is empty
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return; // Exit function to prevent further execution
      }
  
      // Redirect to the next page
      window.location.href = 'thjh.html';
    });
  });
  