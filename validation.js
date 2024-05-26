const emailInput = document.getElementById('validationServerEmail');
const emailFeedback = document.getElementById('validationServerEmailFeedback');

emailInput.addEventListener('keyup', function() {
  const email = this.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email format

  if (emailRegex.test(email)) {
    emailInput.classList.remove('is-invalid');
    emailInput.classList.add('is-valid');
    emailFeedback.textContent = 'Looks good!';
  } else {
    emailInput.classList.remove('is-valid');
    emailInput.classList.add('is-invalid');
    emailFeedback.textContent = 'Please provide a valid email address.';
  }
});