// Get saved users from localStorage, or initialize an empty array if none
let users = JSON.parse(localStorage.getItem('readscapeUsers')) || [];

// Handle Sign-up Form Submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if username or email already exists
    const exists = users.some(user => user.username === username || user.email === email);
    if (exists) {
      alert("Username or email already exists!");
      return;
    }

    // Save new user to users array and update localStorage
    users.push({ fullname, username, email, password });
    localStorage.setItem('readscapeUsers', JSON.stringify(users));

    alert("Sign-up successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page
  });
}

// Handle Login Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh

    // Get login values
    const email = document.getElementById('login-email').value;
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Find user with matching credentials
    const found = users.find(
      user => user.email === email && user.username === username && user.password === password
    );

    if (found) {
      alert(`Login successful! Welcome, ${found.fullname}.`);
      // Can add redirect to homepage/dashboard here if needed
    } else {
      alert("Incorrect credentials. Please try again.");
    }
  });
}
