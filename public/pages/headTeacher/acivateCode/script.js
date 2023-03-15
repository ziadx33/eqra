const closeIcon = document.querySelector('.closeIcon');
const modal = document.querySelector('.modal');
const loginButton = document.querySelector('#loginButton');


closeIcon.addEventListener('click', () => {
  modal.classList.add('hidden');
});

const form = document.getElementById('userForm');

function handleSubmit(event) {
  event.preventDefault();
const activateCode = document.querySelector('#activateCode').value;


  // Validate name
  if (activateCode === '') {
    document.getElementById('nameError').textContent =
      'الرجاء إدخال كود التفعيل';
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Submit the form if there are no errors
  if (document.getElementById('nameError').textContent === '') {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
    modal.classList.remove('hidden');
  }
}
