const navBarShow = document.querySelector('.navBarShow');
const burgerMune = document.querySelector('.burgerMune');
const coloredBut = document.querySelectorAll('.coloredBut');

const contantContainer = document.querySelector('#contantContainer');
const buttonFetch = document.querySelector('#buttonFetch');
const admin = document.querySelector('#admin');
const students = document.querySelector('#students');
const teachers = document.querySelector('#teachers');
const rows = document.querySelector('#rows');
const seasons = document.querySelector('#seasons');
window.onload = renderDataTabOne();
admin.addEventListener('click', renderDataTabOne);
function renderDataTabOne() {
  contantContainer.textContent = 'admin';
  buttonFetch.textContent = '';
  const adminButton = document.createElement('button');
  adminButton.classList.add('cursor-pointer', 'p-1');
  adminButton.textContent = 'اضافة مشرف';
  adminButton.id = 'addAdmin';
  adminButton.onclick = addAdminButton;
  buttonFetch.appendChild(adminButton);
}

students.addEventListener('click', () => {
  contantContainer.textContent = 'students';
  buttonFetch.textContent = '';
  const studentsButton = document.createElement('button');
  studentsButton.classList.add('cursor-pointer', 'p-1');
  studentsButton.textContent = 'اضافة طالب';
  studentsButton.id = 'addStudents';
  studentsButton.onclick = addStudentsButton;
  buttonFetch.appendChild(studentsButton);
});

teachers.addEventListener('click', () => {
  contantContainer.textContent = 'teachers';
  buttonFetch.textContent = '';
  const teachersButton = document.createElement('button');
  teachersButton.classList.add('cursor-pointer', 'p-1');
  teachersButton.textContent = 'اضافة معلم';
  teachersButton.id = 'addTeachers';
  teachersButton.onclick = addTeachersButton;
  buttonFetch.appendChild(teachersButton);
});
rows.addEventListener('click', () => {
  contantContainer.textContent = 'rows';
  buttonFetch.textContent = '';
  const rowsButton = document.createElement('button');
  rowsButton.classList.add('cursor-pointer', 'p-1');
  rowsButton.textContent = 'اضافة صف';
  rowsButton.id = 'addRows';
  rowsButton.onclick = addRowsButton;
  buttonFetch.appendChild(rowsButton);
});
seasons.addEventListener('click', () => {
  contantContainer.textContent = 'seasons';
  buttonFetch.textContent = '';
  const seasonsButton = document.createElement('button');
  seasonsButton.classList.add('cursor-pointer', 'p-1');
  seasonsButton.textContent = 'اضافة فصل';
  seasonsButton.id = 'addRows';
  seasonsButton.onclick = addSeasonsButton;
  buttonFetch.appendChild(seasonsButton);
});

coloredBut.forEach((tab) => {
  tab.addEventListener('click', () => {
    // remove active class from all tabs
    coloredBut.forEach((tab) => tab.classList.remove('active'));

    // add active class to the clicked tab
    tab.classList.add('active');
  });
});

burgerMune.addEventListener('click', () => {
  console.log('data');

  if (navBarShow.classList.contains('hidden')) {
    navBarShow.classList.remove('hidden');
  } else {
    navBarShow.classList.add('hidden');
  }
});

function showComponent(componentId) {
  // Hide all components
  const components = document.querySelectorAll('[id^="component"]');
  components.forEach((component) => {
    component.classList.add('hidden');
  });

  // Show the selected component
  const selectedComponent = document.getElementById(componentId);
  selectedComponent.classList.remove('hidden');
}

function addAdminButton() {
  const component1 = document.querySelector('#component1');
  component1.textContent = '';
  contantContainer.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg'
  );
  const form = document.createElement('form');
  form.setAttribute('class', 'mt-0 space-y-6');
  form.setAttribute('id', 'supervisorForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'supervisorHandleSubmit(event)');

  // Create the HTML elements
  const divHead = document.createElement('div');
  divHead.classList.add('flex', 'flex-col', 'items-center');
  const h1Element = document.createElement('h1');
  h1Element.classList.add('text-purple-100', 'font-bold', 'text-2xl');
  h1Element.textContent = 'إضافة مشرف';

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');
  const SupervisorNameContainer = document.createElement('div');
  SupervisorNameContainer.setAttribute('class', 'mb-4');

  const SupervisorNameLabel = document.createElement('label');
  SupervisorNameLabel.setAttribute('for', 'SupervisorName');
  SupervisorNameLabel.setAttribute('class', 'font-bold');
  SupervisorNameLabel.textContent = 'أسم المشرف';

  const SupervisorNameInput = document.createElement('input');
  SupervisorNameInput.setAttribute('type', 'text');
  SupervisorNameInput.setAttribute('id', 'SupervisorName');
  SupervisorNameInput.setAttribute('name', 'SupervisorName');
  SupervisorNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const SupervisorNameInputError = document.createElement('p');
  SupervisorNameInputError.setAttribute('id', 'SupervisorNameInputError');
  SupervisorNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  SupervisorNameContainer.appendChild(SupervisorNameLabel);
  SupervisorNameContainer.appendChild(SupervisorNameInput);
  SupervisorNameContainer.appendChild(SupervisorNameInputError);
  inputContainer.appendChild(SupervisorNameContainer);

  const userNameContainer = document.createElement('div');
  userNameContainer.setAttribute('class', 'mb-4');

  const userNameLabel = document.createElement('label');
  userNameLabel.setAttribute('for', 'userName');
  userNameLabel.setAttribute('class', 'font-bold');
  userNameLabel.textContent = 'أسم المستخدم';

  const userNameInput = document.createElement('input');
  userNameInput.setAttribute('type', 'text');
  userNameInput.setAttribute('id', 'userName');
  userNameInput.setAttribute('name', 'userName');
  userNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const userNameInputError = document.createElement('p');
  userNameInputError.setAttribute('id', 'userNameInputError');
  userNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  userNameContainer.appendChild(userNameLabel);
  userNameContainer.appendChild(userNameInput);
  userNameContainer.appendChild(userNameInputError);
  inputContainer.appendChild(userNameContainer);

  const passwordContainer = document.createElement('div');
  passwordContainer.setAttribute('class', 'mb-4');

  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'password');
  passwordLabel.setAttribute('class', 'font-bold');
  passwordLabel.innerText = 'كلمة المرور';

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const passwordError = document.createElement('p');
  passwordError.setAttribute('id', 'passwordError');
  passwordError.setAttribute('class', 'text-red-100 text-xs mt-1');

  passwordContainer.appendChild(passwordLabel);
  passwordContainer.appendChild(passwordInput);
  passwordContainer.appendChild(passwordError);
  inputContainer.appendChild(passwordContainer);

  // 1111111111111111111
  const classNameContainer = document.createElement('div');
  classNameContainer.setAttribute('class', 'mb-4');

  const classNameLabel = document.createElement('label');
  classNameLabel.setAttribute('for', 'className');
  classNameLabel.setAttribute('class', 'font-bold');
  classNameLabel.textContent = 'الصف';

  const classNameInput = document.createElement('input');
  classNameInput.setAttribute('type', 'text');
  classNameInput.setAttribute('id', 'classNameInput');
  classNameInput.setAttribute('name', 'classNameInput');
  classNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classNameInputError = document.createElement('p');
  classNameInputError.setAttribute('id', 'classNameInputError');
  classNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classNameContainer.appendChild(classNameLabel);
  classNameContainer.appendChild(classNameInput);
  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);
  // 22222222222222222222222222222222222

  // Create the button element
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'py-4 flex justify-center border-none');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute(
    'class',
    'bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg'
  );
  buttonElement.setAttribute('id', 'addButton');
  buttonElement.textContent = 'تعديل';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
}

// start supervisor form validation
const supervisorForm = document.getElementById('userForm');

function supervisorHandleSubmit(event) {
  event.preventDefault();

  const SupervisorName = document.getElementById('SupervisorName').value;
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;
  const classNameInput = document.getElementById('classNameInput').value;

  // Validate Supervisor Name
  if (SupervisorName === '') {
    document.getElementById('SupervisorNameInputError').textContent =
      'الرجاء إدخال إسم المشرف';
  } else {
    document.getElementById('SupervisorNameInputError').textContent = '';
  }

  // Validate user Name
  if (userName === '') {
    document.getElementById('userNameInputError').textContent =
      'الرجاء إدخال إسم المستخدم';
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById('userNameInputError').textContent =
      'يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات';
  } else {
    document.getElementById('userNameInputError').textContent = '';
  }

  // Validate password
  if (password === '') {
    document.getElementById('passwordError').textContent =
      'الرجاء إدخال كلمة المرور';
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  // Validate class Name
  if (classNameInput === '') {
    document.getElementById('classNameInputError').textContent =
      'الرجاء إدخال إسم الصف';
  } else {
    document.getElementById('classNameInputError').textContent = '';
  }

  // Submit the form if there are no errors
  if (
    document.getElementById('SupervisorNameInputError').textContent === '' &&
    document.getElementById('userNameInputError').textContent === '' &&
    document.getElementById('passwordError').textContent === '' &&
    document.getElementById('classNameInputError').textContent === ''
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end supervisor form validation

function addStudentsButton() {
  const component1 = document.querySelector('#component1');
  component1.textContent = '';
  contantContainer.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg'
  );
  const form = document.createElement('form');
  form.setAttribute('class', 'mt-0 space-y-6');
  form.setAttribute('id', 'studentsForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'studentsHandleSubmit(event)');

  // Create the HTML elements
  const divHead = document.createElement('div');
  divHead.classList.add('flex', 'flex-col', 'items-center');
  const h1Element = document.createElement('h1');
  h1Element.classList.add('text-purple-100', 'font-bold', 'text-2xl');
  h1Element.textContent = 'إضافة طالب';

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');
  const studentNameContainer = document.createElement('div');
  studentNameContainer.setAttribute('class', 'mb-4');

  const studentNameLabel = document.createElement('label');
  studentNameLabel.setAttribute('for', 'studentName');
  studentNameLabel.setAttribute('class', 'font-bold');
  studentNameLabel.textContent = 'أسم الطالب';

  const studentNameInput = document.createElement('input');
  studentNameInput.setAttribute('type', 'text');
  studentNameInput.setAttribute('id', 'studentName');
  studentNameInput.setAttribute('name', 'studentName');
  studentNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const studentNameInputError = document.createElement('p');
  studentNameInputError.setAttribute('id', 'studentNameInputError');
  studentNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  studentNameContainer.appendChild(studentNameLabel);
  studentNameContainer.appendChild(studentNameInput);
  studentNameContainer.appendChild(studentNameInputError);
  inputContainer.appendChild(studentNameContainer);

  const userNameContainer = document.createElement('div');
  userNameContainer.setAttribute('class', 'mb-4');

  const userNameLabel = document.createElement('label');
  userNameLabel.setAttribute('for', 'userName');
  userNameLabel.setAttribute('class', 'font-bold');
  userNameLabel.textContent = 'أسم المستخدم';

  const userNameInput = document.createElement('input');
  userNameInput.setAttribute('type', 'text');
  userNameInput.setAttribute('id', 'userName');
  userNameInput.setAttribute('name', 'userName');
  userNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const userNameInputError = document.createElement('p');
  userNameInputError.setAttribute('id', 'userNameInputError');
  userNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  userNameContainer.appendChild(userNameLabel);
  userNameContainer.appendChild(userNameInput);
  userNameContainer.appendChild(userNameInputError);
  inputContainer.appendChild(userNameContainer);

  // 1111111111111111111
  const classNameContainer = document.createElement('div');
  classNameContainer.setAttribute('class', 'mb-4');

  const classNameLabel = document.createElement('label');
  classNameLabel.setAttribute('for', 'className');
  classNameLabel.setAttribute('class', 'font-bold');
  classNameLabel.textContent = 'الصف';

  const classNameInput = document.createElement('input');
  classNameInput.setAttribute('type', 'text');
  classNameInput.setAttribute('id', 'classNameInput');
  classNameInput.setAttribute('name', 'classNameInput');
  classNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classNameInputError = document.createElement('p');
  classNameInputError.setAttribute('id', 'classNameInputError');
  classNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classNameContainer.appendChild(classNameLabel);
  classNameContainer.appendChild(classNameInput);
  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);
  // 22222222222222222222222222222222222

  const studentIdContainer = document.createElement('div');
  studentIdContainer.setAttribute('class', 'mb-4');

  const studentIdLabel = document.createElement('label');
  studentIdLabel.setAttribute('for', 'studentId');
  studentIdLabel.setAttribute('class', 'font-bold');
  studentIdLabel.innerText = 'رقم الهوية';

  const studentIdInput = document.createElement('input');
  studentIdInput.setAttribute('type', 'text');
  studentIdInput.setAttribute('id', 'studentId');
  studentIdInput.setAttribute('name', 'studentId');
  studentIdInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const studentIdError = document.createElement('p');
  studentIdError.setAttribute('id', 'studentIdError');
  studentIdError.setAttribute('class', 'text-red-100 text-xs mt-1');

  studentIdContainer.appendChild(studentIdLabel);
  studentIdContainer.appendChild(studentIdInput);
  studentIdContainer.appendChild(studentIdError);
  inputContainer.appendChild(studentIdContainer);

  // Create the button element
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'py-4 flex justify-center border-none');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute(
    'class',
    'bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg'
  );
  buttonElement.setAttribute('id', 'addButton');
  buttonElement.textContent = 'تعديل';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
}

// start student form validation
const studentForm = document.getElementById('studentsForm');

function studentsHandleSubmit(event) {
  event.preventDefault();

  const studentName = document.getElementById('studentName').value;
  const userName = document.getElementById('userName').value;
  const classNameInput = document.getElementById('classNameInput').value;
  const studentId = document.getElementById('studentId').value;

  // Validate Supervisor Name
  if (studentName === '') {
    document.getElementById('studentNameInputError').textContent =
      'الرجاء إدخال إسم الطالب';
  } else {
    document.getElementById('studentNameInputError').textContent = '';
  }

  // Validate user Name
  if (userName === '') {
    document.getElementById('userNameInputError').textContent =
      'الرجاء إدخال إسم المستخدم';
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById('userNameInputError').textContent =
      'يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات';
  } else {
    document.getElementById('userNameInputError').textContent = '';
  }

  // Validate class Name
  if (classNameInput === '') {
    document.getElementById('classNameInputError').textContent =
      'الرجاء إدخال إسم الصف';
  } else {
    document.getElementById('classNameInputError').textContent = '';
  }

  // Validate student Id
  if (studentId === '') {
    document.getElementById('studentIdError').textContent =
      'الرجاء إدخال رقم الهوية';
  } else {
    document.getElementById('studentIdError').textContent = '';
  }
  // Submit the form if there are no errors
  if (
    document.getElementById('studentNameInputError').textContent === '' &&
    document.getElementById('userNameInputError').textContent === '' &&
    document.getElementById('classNameInputError').textContent === '' &&
    document.getElementById('studentIdError').textContent === ''
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end student form validation

function addTeachersButton() {
  const component1 = document.querySelector('#component1');
  component1.textContent = '';
  contantContainer.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg'
  );
  const form = document.createElement('form');
  form.setAttribute('class', 'mt-0 space-y-6');
  form.setAttribute('id', 'teacherForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'teacherHandleSubmit(event)');

  // Create the HTML elements
  const divHead = document.createElement('div');
  divHead.classList.add('flex', 'flex-col', 'items-center');
  const h1Element = document.createElement('h1');
  h1Element.classList.add('text-purple-100', 'font-bold', 'text-2xl');
  h1Element.textContent = 'إضافة معلم';

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');
  const teacherNameContainer = document.createElement('div');
  teacherNameContainer.setAttribute('class', 'mb-4');

  const teacherNameLabel = document.createElement('label');
  teacherNameLabel.setAttribute('for', 'teacherName');
  teacherNameLabel.setAttribute('class', 'font-bold');
  teacherNameLabel.textContent = 'اسم المعلم';

  const teacherNameInput = document.createElement('input');
  teacherNameInput.setAttribute('type', 'text');
  teacherNameInput.setAttribute('id', 'teacherName');
  teacherNameInput.setAttribute('name', 'teacherName');
  teacherNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const teacherNameInputError = document.createElement('p');
  teacherNameInputError.setAttribute('id', 'teacherNameInputError');
  teacherNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  teacherNameContainer.appendChild(teacherNameLabel);
  teacherNameContainer.appendChild(teacherNameInput);
  teacherNameContainer.appendChild(teacherNameInputError);
  inputContainer.appendChild(teacherNameContainer);

  const userNameContainer = document.createElement('div');
  userNameContainer.setAttribute('class', 'mb-4');

  const userNameLabel = document.createElement('label');
  userNameLabel.setAttribute('for', 'userName');
  userNameLabel.setAttribute('class', 'font-bold');
  userNameLabel.textContent = 'أسم المستخدم';

  const userNameInput = document.createElement('input');
  userNameInput.setAttribute('type', 'text');
  userNameInput.setAttribute('id', 'userName');
  userNameInput.setAttribute('name', 'userName');
  userNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const userNameInputError = document.createElement('p');
  userNameInputError.setAttribute('id', 'userNameInputError');
  userNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  userNameContainer.appendChild(userNameLabel);
  userNameContainer.appendChild(userNameInput);
  userNameContainer.appendChild(userNameInputError);
  inputContainer.appendChild(userNameContainer);

  const passwordContainer = document.createElement('div');
  passwordContainer.setAttribute('class', 'mb-4');

  const passwordLabel = document.createElement('label');
  passwordLabel.setAttribute('for', 'password');
  passwordLabel.setAttribute('class', 'font-bold');
  passwordLabel.innerText = 'كلمة المرور';

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'password');
  passwordInput.setAttribute('name', 'password');
  passwordInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const passwordError = document.createElement('p');
  passwordError.setAttribute('id', 'passwordError');
  passwordError.setAttribute('class', 'text-red-100 text-xs mt-1');

  passwordContainer.appendChild(passwordLabel);
  passwordContainer.appendChild(passwordInput);
  passwordContainer.appendChild(passwordError);
  inputContainer.appendChild(passwordContainer);

  // Create the button element
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'py-4 flex justify-center border-none');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute(
    'class',
    'bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg'
  );
  buttonElement.setAttribute('id', 'addButton');
  buttonElement.textContent = 'تعديل';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
}

// start teacher form validation
const teacherForm = document.getElementById('teacherForm');

function teacherHandleSubmit(event) {
  event.preventDefault();

  const teacherName = document.getElementById('teacherName').value;
  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value;

  // Validate Supervisor Name
  if (teacherName === '') {
    document.getElementById('teacherNameInputError').textContent =
      'الرجاء إدخال إسم المعلم';
  } else {
    document.getElementById('teacherNameInputError').textContent = '';
  }

  // Validate user Name
  if (userName === '') {
    document.getElementById('userNameInputError').textContent =
      'الرجاء إدخال إسم المستخدم';
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById('userNameInputError').textContent =
      'يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات';
  } else {
    document.getElementById('userNameInputError').textContent = '';
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
    document.getElementById('teacherNameInputError').textContent === '' &&
    document.getElementById('userNameInputError').textContent === '' &&
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

// end teacher form validation

function addRowsButton() {
  const component1 = document.querySelector('#component1');
  component1.textContent = '';
  contantContainer.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg'
  );
  const form = document.createElement('form');
  form.setAttribute('class', 'mt-0 space-y-6');
  form.setAttribute('id', 'classRoomForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'classRoomHandleSubmit(event)');

  // Create the HTML elements
  const divHead = document.createElement('div');
  divHead.classList.add('flex', 'flex-col', 'items-center');
  const h1Element = document.createElement('h1');
  h1Element.classList.add('text-purple-100', 'font-bold', 'text-2xl');
  h1Element.textContent = 'إضافة صف';

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');
  const classRoomNameContainer = document.createElement('div');
  classRoomNameContainer.setAttribute('class', 'mb-4');

  const classRoomNameLabel = document.createElement('label');
  classRoomNameLabel.setAttribute('for', 'classRoomName');
  classRoomNameLabel.setAttribute('class', 'font-bold');
  classRoomNameLabel.textContent = 'اسم الصف';

  const classRoomNameInput = document.createElement('input');
  classRoomNameInput.setAttribute('type', 'text');
  classRoomNameInput.setAttribute('id', 'classRoomName');
  classRoomNameInput.setAttribute('name', 'classRoomName');
  classRoomNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classRoomNameInputError = document.createElement('p');
  classRoomNameInputError.setAttribute('id', 'classRoomNameInputError');
  classRoomNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classRoomNameContainer.appendChild(classRoomNameLabel);
  classRoomNameContainer.appendChild(classRoomNameInput);
  classRoomNameContainer.appendChild(classRoomNameInputError);
  inputContainer.appendChild(classRoomNameContainer);

  const classNameContainer = document.createElement('div');
  classNameContainer.setAttribute('class', 'mb-4');

  const classNameLabel = document.createElement('label');
  classNameLabel.setAttribute('for', 'className');
  classNameLabel.setAttribute('class', 'font-bold');
  classNameLabel.textContent = 'الفصل';

  const classNameInput = document.createElement('input');
  classNameInput.setAttribute('type', 'text');
  classNameInput.setAttribute('id', 'className');
  classNameInput.setAttribute('name', 'className');
  classNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classNameInputError = document.createElement('p');
  classNameInputError.setAttribute('id', 'classNameInputError');
  classNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classNameContainer.appendChild(classNameLabel);
  classNameContainer.appendChild(classNameInput);
  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);


  const classNumberContainer = document.createElement('div');
  classNumberContainer.setAttribute('class', 'mb-4');

  const classNumberLabel = document.createElement('label');
  classNumberLabel.setAttribute('for', 'classNumber');
  classNumberLabel.setAttribute('class', 'font-bold');
  classNumberLabel.textContent = 'رقم الصف';

  const classNumberInput = document.createElement('input');
  classNumberInput.setAttribute('type', 'text');
  classNumberInput.setAttribute('id', 'classNumber');
  classNumberInput.setAttribute('name', 'classRoomNumber');
  classNumberInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classNumberInputError = document.createElement('p');
  classNumberInputError.setAttribute('id', 'classNumberInputError');
  classNumberInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classNumberContainer.appendChild(classNumberLabel);
  classNumberContainer.appendChild(classNumberInput);
  classNumberContainer.appendChild(classNumberInputError);
  inputContainer.appendChild(classNumberContainer);

  

  const SupervisorNameContainer = document.createElement('div');
  SupervisorNameContainer.setAttribute('class', 'mb-4');

  const SupervisorNameLabel = document.createElement('label');
  SupervisorNameLabel.setAttribute('for', 'SupervisorName');
  SupervisorNameLabel.setAttribute('class', 'font-bold');
  SupervisorNameLabel.innerText = 'اسم المشرف';

  const SupervisorNameInput = document.createElement('input');
  SupervisorNameInput.setAttribute('type', 'text');
  SupervisorNameInput.setAttribute('id', 'SupervisorName');
  SupervisorNameInput.setAttribute('name', 'SupervisorName');
  SupervisorNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const SupervisorNameError = document.createElement('p');
  SupervisorNameError.setAttribute('id', 'SupervisorNameError');
  SupervisorNameError.setAttribute('class', 'text-red-100 text-xs mt-1');

  SupervisorNameContainer.appendChild(SupervisorNameLabel);
  SupervisorNameContainer.appendChild(SupervisorNameInput);
  SupervisorNameContainer.appendChild(SupervisorNameError);
  inputContainer.appendChild(SupervisorNameContainer);

  // Create the button element
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'py-4 flex justify-center border-none');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute(
    'class',
    'bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg'
  );
  buttonElement.setAttribute('id', 'addButton');
  buttonElement.textContent = 'تعديل';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
};

// start class room form validation
const classRoomForm = document.getElementById('classRoomForm');

function classRoomHandleSubmit(event) {
  event.preventDefault();

  const classRoomName = document.getElementById('classRoomName').value;
  const classNameInput = document.getElementById('className').value;
  const classNumber = document.getElementById('classNumber').value;
  const SupervisorName = document.getElementById('SupervisorName').value;

  // Validate Supervisor Name
  if (classRoomName === '') {
    document.getElementById('classRoomNameInputError').textContent =
      'الرجاء إدخال إسم الصف';
  } else {
    document.getElementById('classRoomNameInputError').textContent = '';
  }

  // Validate user Name
  if (classNameInput === '') {
    document.getElementById('classNameInputError').textContent =
      'الرجاء إدخال إسم الفصل';
  } else {
    document.getElementById('classNameInputError').textContent = '';
  }

  // Validate class Name
  if (classNumber === '') {
    document.getElementById('classNumberInputError').textContent =
      'الرجاء إدخال رقم الصف';
  } else {
    document.getElementById('classNumberInputError').textContent = '';
  }

  // Validate student Id
  if (SupervisorName === '') {
    document.getElementById('SupervisorNameError').textContent =
      'الرجاء إدخال اسم المشرف';
  } else {
    document.getElementById('SupervisorNameError').textContent = '';
  }
  // Submit the form if there are no errors
  if (
    document.getElementById('classRoomNameInputError').textContent === '' &&
    document.getElementById('classNameInputError').textContent === '' &&
    document.getElementById('classNumberInputError').textContent === '' &&
    document.getElementById('SupervisorNameError').textContent === ''
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end class room  form validation


function addSeasonsButton() {
  const component1 = document.querySelector('#component1');
  component1.textContent = '';
  contantContainer.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg'
  );
  const form = document.createElement('form');
  form.setAttribute('class', 'mt-0 space-y-6');
  form.setAttribute('id', 'classRoomForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'classHandleSubmit(event)');

  // Create the HTML elements
  const divHead = document.createElement('div');
  divHead.classList.add('flex', 'flex-col', 'items-center');
  const h1Element = document.createElement('h1');
  h1Element.classList.add('text-purple-100', 'font-bold', 'text-2xl');
  h1Element.textContent = 'إضافة فصل';

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');

  const classNameContainer = document.createElement('div');
  classNameContainer.setAttribute('class', 'mb-4');

  const classNameLabel = document.createElement('label');
  classNameLabel.setAttribute('for', 'className');
  classNameLabel.setAttribute('class', 'font-bold');
  classNameLabel.textContent = 'الفصل';

  const classNameInput = document.createElement('input');
  classNameInput.setAttribute('type', 'text');
  classNameInput.setAttribute('id', 'className');
  classNameInput.setAttribute('name', 'className');
  classNameInput.setAttribute(
    'class',
    'mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const classNameInputError = document.createElement('p');
  classNameInputError.setAttribute('id', 'classNameInputError');
  classNameInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  classNameContainer.appendChild(classNameLabel);
  classNameContainer.appendChild(classNameInput);
  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);

  // Create the button element
  const buttonDiv = document.createElement('div');
  buttonDiv.setAttribute('class', 'py-4 flex justify-center border-none');
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute(
    'class',
    'bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg'
  );
  buttonElement.setAttribute('id', 'addButton');
  buttonElement.textContent = 'تعديل';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
};

// start class room form validation
const classForm = document.getElementById('classForm');

function classHandleSubmit(event) {
  event.preventDefault();

  const className = document.getElementById('className').value;


  // Validate class Name
  if (className === '') {
    document.getElementById('classNameInputError').textContent =
      'الرجاء إدخال إسم الفصل';
  } else {
    document.getElementById('classNameInputError').textContent = '';
  }

  // Submit the form if there are no errors
  if (
    document.getElementById('classNameInputError').textContent === '') {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end class room  form validation