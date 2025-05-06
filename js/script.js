document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const loginButton = document.querySelector('.login-button');
  const togglePassword = document.getElementById('togglePassword');
  const passwordIcon = togglePassword.querySelector('i');

  // Email validation function
  function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
  }

  // Password visibility toggle
  togglePassword.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Toggle the input type
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Toggle the eye icon
      passwordIcon.classList.toggle('fa-eye');
      passwordIcon.classList.toggle('fa-eye-slash');
      
      // Change icon color when active
      passwordIcon.style.color = type === 'text' ? '#57C785' : '#999';
      
      // Keep focus on the password field
      passwordInput.focus();
  });

  // Validate email on blur
  emailInput.addEventListener('blur', function() {
      if (this.value && !isValidEmail(this.value)) {
          showError('Please enter a valid email address');
          this.parentElement.classList.add('input-error');
      } else {
          this.parentElement.classList.remove('input-error');
      }
  });

  // Add animation to inputs on focus
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
      input.addEventListener('focus', function() {
          this.parentElement.parentElement.querySelector('label').style.color = '#57C785';
          this.parentElement.style.transform = 'scale(1.02)';
          this.parentElement.classList.remove('input-error');
          errorMessage.classList.remove('visible');
      });
      
      input.addEventListener('blur', function() {
          this.parentElement.parentElement.querySelector('label').style.color = '#2A7B9B';
          this.parentElement.style.transform = 'scale(1)';
      });
  });

  // Real-time email validation as user types
  emailInput.addEventListener('input', function() {
      if (this.value && isValidEmail(this.value)) {
          this.parentElement.classList.remove('input-error');
          this.parentElement.classList.add('input-valid');
      } else {
          this.parentElement.classList.remove('input-valid');
      }
  });

  // Remove valid/invalid states when empty
  emailInput.addEventListener('blur', function() {
      if (!this.value) {
          this.parentElement.classList.remove('input-error', 'input-valid');
      }
  });

  // Form submission
  loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value;
      const password = passwordInput.value;
      
      // Reset error message
      errorMessage.textContent = '';
      errorMessage.classList.remove('visible');
      
      // Validate email format
      if (email && !isValidEmail(email)) {
          showError('Please enter a valid email address');
          emailInput.parentElement.classList.add('input-error');
          return;
      }
      
      // Check empty fields
      if (!email || !password) {
          showError('Please fill in all fields');
          if (!email) emailInput.parentElement.classList.add('input-error');
          return;
      }
      
      // Simulate loading
      loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      loginButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
          if (password.length < 8) {
              showError('Password must be at least 8 characters long.');
          } else {
              // Success - show animation
              loginButton.innerHTML = '<i class="fas fa-check"></i> Success!';
              setTimeout(() => {
                  // Instead of alert, you could redirect or show a success message
                  loginButton.innerHTML = '<span>Log In</span><i class="fas fa-arrow-right"></i>';
                  loginButton.disabled = false;
              }, 1500);
              return;
          }
          
          loginButton.innerHTML = '<span>Log In</span><i class="fas fa-arrow-right"></i>';
          loginButton.disabled = false;
      }, 1500);
  });
  
  function showError(message) {
      errorMessage.textContent = message;
      errorMessage.classList.add('visible');
      
      // Add shake animation to form
      loginForm.style.animation = 'shake 0.5s';
      setTimeout(() => {
          loginForm.style.animation = '';
      }, 500);
  }
  
  // Add shake animation to CSS
  const style = document.createElement('style');
  style.textContent = `
      @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
      }
  `;
  document.head.appendChild(style);
});