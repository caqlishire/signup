const password = document.getElementById('password');
const meter = document.getElementById('password-strength-meter');

password.addEventListener('input', function() {
  var val = password.value;
  var result = zxcvbn(val);

  if (result.score === 0) {
    result.score = 1;
  }
  // Update the password strength meter
  meter.value = result.score;
});
