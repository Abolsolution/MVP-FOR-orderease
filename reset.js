
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resetForm');
    const emailInput = document.getElementById('emailInput');
    const messageBox = document.getElementById('message');
  
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      
      const email = emailInput.value.trim();

      messageBox.textContent = '';
      messageBox.className = 'sucess-message';
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      if (emailPattern.test(email)) {
        messageBox.textContent = `✅ A reset link has been sent to ${email}`;
        messageBox.style.color = '#006400';
  
        setTimeout(() => {
            form.reset();
            messageBox.textContent = '';
          }, 3000);
  
        
      } else {
        messageBox.textContent = '❌ Please enter a valid email address.';
        messageBox.style.color = '#B00020';

        setTimeout(() => {
          form.reset();
          messageBox.textContent = '';
        }, 3000);

      }
    });
  });
  