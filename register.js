document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate submission process (e.g., send data to server, validate, etc.)
    // For demonstration purposes, let's assume submission is successful after a short delay
    setTimeout(function() {
      // Display submission message
      document.getElementById('submissionMessage').style.display = 'block';
      
      // Redirect to login page after a short delay
      setTimeout(function() {
        window.location.href = 'jasj.html';
      }, 2000); // 2000 milliseconds = 2 seconds (adjust as needed)
    }, 1000); // 1000 milliseconds = 1 second (adjust as needed)
  });
});
