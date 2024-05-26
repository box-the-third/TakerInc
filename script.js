const passwordInput = document.getElementById('password');
const passwordHint = document.querySelector('.password-hint');

passwordInput.addEventListener('keyup', function() {
  const password = this.value;
  const meetsRequirements = password.length >= 8 && /[!@#$%^&*()_+\-={}|\[\]\\:;'<,>.?\/]/.test(password);

  if (meetsRequirements) {
    passwordHint.textContent = 'Password is strong!';
    passwordHint.style.color = 'green';
  } else {
    passwordHint.textContent = 'Password must be at least 8 characters and include a symbol.';
    passwordHint.style.color = 'red';
  }
});