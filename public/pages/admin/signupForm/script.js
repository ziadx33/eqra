const form = document.getElementById('userForm');
const checkbox = document.getElementById('checkbox');
 checkbox.addEventListener('change', () => checkbox.checked);

function handleSubmit(event) {
  event.preventDefault();
  const isApproved = checkbox.checked;
  const name = document.getElementById('name').value.trim();
  const ministerialSymbol = document
    .getElementById('ministerialSymbol')
    .value.trim();
  const email = document.getElementById('email').value.trim();
  const schoolName = document.getElementById('schoolName').value.trim();
  const schoolGender = document.getElementById('schoolGender').value;
  const studentNumber = document.getElementById('studentNumber').value;
  const phone = document.getElementById('phone').value;
  const userName = document.getElementById('userName').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const promotionalCode = document.getElementById('promotionalCode').value;

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent =
      'الرجاء إدخال إسم المدرسة';
  } else if (!/^[a-zA-Z\s]*$/.test(name)) {
    document.getElementById('nameError').textContent =
      'يجب أن يحتوي الإسم على الأحرف والمسافات فقط';
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate ministerial Symbol
  if (ministerialSymbol === '') {
    document.getElementById('ministerialSymbolError').textContent =
      'الرجاء إدخال الرمز الوزاري ';
  } else {
    document.getElementById('ministerialSymbolError').textContent = '';
  }

  // Validate email
  if (email === '') {
    document.getElementById('emailError').textContent = 'الرجاء إدخال الإيميل';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById('emailError').textContent =
      'الرجاء إدخال أيميل صالح';
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Validate school name
  if (schoolName === '') {
    document.getElementById('schoolNameError').textContent =
      'الرجاء إدخال إسم المدرسة بالإنجليزي';
  } else if (!/^[a-zA-Z]*$/.test(schoolName)) {
    document.getElementById('schoolNameError').textContent =
      'يجب أن يحتوي الإسم على الأحرف الإنجليزية فقط بدون مسافات';
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate school gender
  if (schoolGender === '') {
    document.getElementById('schoolGenderError').textContent =
      'الرجاء إدخال جنس المدرسة';
  } else {
    document.getElementById('schoolGenderError').textContent = '';
  }

  // Validate student number
  if (studentNumber === '' || studentNumber <= 0) {
    document.getElementById('studentNumberError').textContent =
      'الرجاء إضافة عدد الطلاب';
  } else {
    document.getElementById('studentNumberError').textContent = '';
  }

  // Validate phone number
  if (phone === '') {
    document.getElementById('phoneError').textContent =
      'الرجاء إدخال رقم الجوال';
  } else if (!/^[0-9]{6,14}$/.test(phone)) {
    document.getElementById('phoneError').textContent =
      'الرجاء إدخال رقم جوال صحيح';
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validate image
  const imageInput = document.getElementById('schoolLogo');
  const imageFile = imageInput.files[0];
  if (!imageFile) {
    document.getElementById('schoolLogoError').textContent =
      'الرجاء قم بإدخال شعار المدرسة';
  } else {
    document.getElementById('schoolLogoError').textContent = '';
  }

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
  } else if (password.length < 8) {
    document.getElementById('passwordError').textContent =
      'يجب أن تكون كلمة المرور 8 أحرف على الأقل';
  } else {
    document.getElementById('passwordError').textContent = '';
  }

  // Validate confirm Password
  if (confirmPassword === '' || password !== confirmPassword) {
    document.getElementById('confirmPasswordError').textContent =
      'يجب ان تكون كلمة المرور متطابقة';
  } else {
    document.getElementById('confirmPasswordError').textContent = '';
  }

  // Validate promotional Code
  if (promotionalCode === '') {
    document.getElementById('promotionalCodeError').textContent =
      'الرجاء إدخال الكود الترويجي';
  } else {
    document.getElementById('promotionalCodeError').textContent = '';
  }

  // Validate isApproved
  if (!isApproved) {
    document.getElementById('isApprovedError').textContent =
      'الرجاء الموافقة على الشروط والأحكام';
  } else {
    document.getElementById('isApprovedError').textContent = '';
  }

  // Submit the form if there are no errors
  if (
    document.getElementById('nameError').textContent === '' &&
    document.getElementById('ministerialSymbolError').textContent === '' &&
    document.getElementById('emailError').textContent === '' &&
    document.getElementById('schoolNameError').textContent === '' &&
    document.getElementById('schoolGenderError').textContent === '' &&
    document.getElementById('studentNumberError').textContent === '' &&
    document.getElementById('phoneError').textContent === '' &&
    document.getElementById('schoolLogoError').textContent === '' &&
    document.getElementById('userNameError').textContent === '' &&
    document.getElementById('passwordError').textContent === '' &&
    document.getElementById('confirmPasswordError').textContent === '' &&
    document.getElementById('promotionalCodeError').textContent === '' &&
    isApproved
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}
