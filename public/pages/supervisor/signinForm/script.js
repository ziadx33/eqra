const form = document.getElementById('userForm');
const forGetPassword = document.querySelector('.forGetPassword');
const closeIcon = document.querySelector('.closeIcon');
const modal = document.querySelector('.modal');
const emailAddress = document.querySelector('#email-address');
const password = document.querySelector('#password');
const loginButton = document.querySelector('#loginButton');

forGetPassword.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  modal.classList.add('hidden');
});

function handleSubmit(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const password = document.getElementById('password').value;

  // Validate user name
  if (userName === '') {
    document.getElementById('userNameError').textContent =
      'الرجاء إدخال إسم المستخدم';
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById('userNameError').textContent =
      'يجب أن يحتوي إسم المستخدم على الأحرف الإنجليزية فقط بدون مسافات';
  } else {
    document.getElementById('userNameError').textContent = '';
  }

  // Validate password
  if (password === '') {
    document.getElementById('passwordError').textContent =
      'الرجاء إدخال كلمة المرور';
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  // Submit the form if there are no errors
  if (
    document.getElementById('userNameError').textContent === '' &&
    document.getElementById('passwordError').textContent === ''
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}
