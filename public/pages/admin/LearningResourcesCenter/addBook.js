const main_container = document.querySelector('#main_container');
const addBook = document.querySelector('#add_book');
let addBookToReadingChallenge = false;
addBook.addEventListener('click', () => {
  main_container.textContent = '';
  const parentDiv = document.createElement('div');
  parentDiv.setAttribute(
    'class',
    'w-full sm:p-8 shadow-xl rounded-lg'
  );
  parentDiv.setAttribute('style', 'border: 1px solid gold');
  const formDiv = document.createElement('div');
  formDiv.setAttribute("class", "flex flex-col md:flex-row gap-8")
  formDiv.setAttribute("style", "border:1px solid red")
  const form = document.createElement('form');
  form.setAttribute(
    'class',
    'mt-0 space-y-6 p-4 bg-gray-light-100 rounded-lg w-full'
  );
  form.setAttribute('id', 'addBookForm');
  form.setAttribute('dir', 'rtl');
  form.setAttribute('lang', 'ar');
  form.setAttribute('onsubmit', 'handleSubmit(event)');
  form.setAttribute('style', 'border: 1px solid green');

  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('class', '-space-y-px rounded-md shadow-sm');
  const ISBNContainer = document.createElement('div');
  ISBNContainer.setAttribute('class', 'mb-4');

  const ISBNLabel = document.createElement('label');
  ISBNLabel.setAttribute('for', 'ISBN');
  ISBNLabel.setAttribute('class', 'font-bold');
  ISBNLabel.textContent = 'رقم ردمك';

  const ISBNInput = document.createElement('input');
  ISBNInput.setAttribute('type', 'text');
  ISBNInput.setAttribute('id', 'ISBN');
  ISBNInput.setAttribute('name', 'ISBN');
  ISBNInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const ISBNInputInputError = document.createElement('p');
  ISBNInputInputError.setAttribute('id', 'ISBNInputInputError');
  ISBNInputInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  ISBNContainer.appendChild(ISBNLabel);
  ISBNContainer.appendChild(ISBNInput);
  ISBNContainer.appendChild(ISBNInputInputError);
  inputContainer.appendChild(ISBNContainer);

  const bookTitleContainer = document.createElement('div');
  bookTitleContainer.setAttribute('class', 'mb-4');

  const bookTitleLabel = document.createElement('label');
  bookTitleLabel.setAttribute('for', 'bookTitle');
  bookTitleLabel.setAttribute('class', 'font-bold');
  bookTitleLabel.textContent = 'عنوان الكتاب';

  const bookTitleInput = document.createElement('input');
  bookTitleInput.setAttribute('type', 'text');
  bookTitleInput.setAttribute('id', 'bookTitle');
  bookTitleInput.setAttribute('name', 'bookTitle');
  bookTitleInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const bookTitleInputError = document.createElement('p');
  bookTitleInputError.setAttribute('id', 'bookTitleInputError');
  bookTitleInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  bookTitleContainer.appendChild(bookTitleLabel);
  bookTitleContainer.appendChild(bookTitleInput);
  bookTitleContainer.appendChild(bookTitleInputError);
  inputContainer.appendChild(bookTitleContainer);

  const authorNameContainer = document.createElement('div');
  authorNameContainer.setAttribute('class', 'mb-4');

  const authorNameLabel = document.createElement('label');
  authorNameLabel.setAttribute('for', 'authorName');
  authorNameLabel.setAttribute('class', 'font-bold');
  authorNameLabel.textContent = 'اسم المؤلف';

  const authorNameInput = document.createElement('input');
  authorNameInput.setAttribute('type', 'text');
  authorNameInput.setAttribute('id', 'authorName');
  authorNameInput.setAttribute('name', 'authorName');
  authorNameInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const authorNameError = document.createElement('p');
  authorNameError.setAttribute('id', 'authorNameError');
  authorNameError.setAttribute('class', 'text-red-100 text-xs mt-1');

  authorNameContainer.appendChild(authorNameLabel);
  authorNameContainer.appendChild(authorNameInput);
  authorNameContainer.appendChild(authorNameError);
  inputContainer.appendChild(authorNameContainer);

  const pagesNumWrapper = document.createElement('div');
  pagesNumWrapper.setAttribute('class', 'flex justify-between gap-8');
  const pagesNumContainer = document.createElement('div');
  pagesNumContainer.setAttribute('class', 'mb-4');

  const pagesNumLabel = document.createElement('label');
  pagesNumLabel.setAttribute('for', 'pagesNum');
  pagesNumLabel.setAttribute('class', 'font-bold');
  pagesNumLabel.textContent = 'عدد الصفحات';

  const pagesNumInput = document.createElement('input');
  pagesNumInput.setAttribute('type', 'number');
  pagesNumInput.setAttribute('min', '0');
  pagesNumInput.setAttribute('id', 'pagesNum');
  pagesNumInput.setAttribute('name', 'pagesNum');
  pagesNumInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const pagesNumError = document.createElement('p');
  pagesNumError.setAttribute('id', 'pagesNumError');
  pagesNumError.setAttribute('class', 'text-red-100 text-xs mt-1');

  pagesNumContainer.appendChild(pagesNumLabel);
  pagesNumContainer.appendChild(pagesNumInput);
  pagesNumContainer.appendChild(pagesNumError);

  const sectionContainer = document.createElement('div');
  sectionContainer.setAttribute('class', 'mb-4');

  const sectionLabel = document.createElement('label');
  sectionLabel.setAttribute('for', 'section');
  sectionLabel.setAttribute('class', 'font-bold');
  sectionLabel.textContent = 'القسم';

  const sectionInput = document.createElement('input');
  sectionInput.setAttribute('type', 'text');
  sectionInput.setAttribute('id', 'section');
  sectionInput.setAttribute('name', 'section');
  sectionInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const sectionError = document.createElement('p');
  sectionError.setAttribute('id', 'sectionError');
  sectionError.setAttribute('class', 'text-red-100 text-xs mt-1');

  sectionContainer.appendChild(sectionLabel);
  sectionContainer.appendChild(sectionInput);
  sectionContainer.appendChild(sectionError);

  pagesNumWrapper.appendChild(pagesNumContainer);
  pagesNumWrapper.appendChild(sectionContainer);
  inputContainer.appendChild(pagesNumWrapper);

  const publishingHouseContainer = document.createElement('div');
  publishingHouseContainer.setAttribute('class', 'mb-4');

  const publishingHouseLabel = document.createElement('label');
  publishingHouseLabel.setAttribute('for', 'publishingHouse');
  publishingHouseLabel.setAttribute('class', 'font-bold');
  publishingHouseLabel.textContent = 'دار النشر';

  const publishingHouseInput = document.createElement('input');
  publishingHouseInput.setAttribute('type', 'text');
  publishingHouseInput.setAttribute('id', 'publishingHouse');
  publishingHouseInput.setAttribute('name', 'publishingHouse');
  publishingHouseInput.setAttribute(
    'class',
    'bg-white mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6'
  );

  const publishingHouseInputError = document.createElement('p');
  publishingHouseInputError.setAttribute('id', 'publishingHouseInputError');
  publishingHouseInputError.setAttribute('class', 'text-red-100 text-xs mt-1');

  publishingHouseContainer.appendChild(publishingHouseLabel);
  publishingHouseContainer.appendChild(publishingHouseInput);
  publishingHouseContainer.appendChild(publishingHouseInputError);
  inputContainer.appendChild(publishingHouseContainer);

  const activateDiv = document.createElement('div');
  activateDiv.setAttribute('class', 'flex justify-evenly items-center pt-4');
  const addBookText = document.createElement('p');
  addBookText.setAttribute('class', 'font-bold');
  addBookText.textContent = 'اضافة الكتاب الي تحدي القراءة';
  const activationBtn = document.createElement('button');
  activationBtn.textContent = 'تفعيل';
  activationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToReadingChallenge = true;
  });
  activationBtn.setAttribute(
    'class',
    'bg-green text-white px-4 py-2 rounded-lg'
  );
  const disableBtn = document.createElement('button');
  disableBtn.textContent = 'تعطيل';
  disableBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToReadingChallenge = false;
  });
  disableBtn.setAttribute(
    'class',
    'bg-red-700 text-white px-4 py-2 rounded-lg'
  );
  activateDiv.appendChild(addBookText);
  activateDiv.appendChild(activationBtn);
  activateDiv.appendChild(disableBtn);
  inputContainer.appendChild(activateDiv);

  const radioButtonDiv = document.createElement('div');
  radioButtonDiv.setAttribute('class', 'flex justify-evenly pt-4');

  // Create the first radio button element and set it as checked by default
  const radioButton1Wrapper = document.createElement('div');
  radioButton1Wrapper.setAttribute(
    'class',
    'flex flex-row-reverse items-center items-center mr-4'
  );

  const radioButton1 = document.createElement('input');
  radioButton1.type = 'radio';
  radioButton1.name = 'bookType';
  radioButton1.value = 'softCopy';
  radioButton1.setAttribute('class', 'w-4 h-4');

  const label1 = document.createElement('label');
  label1.textContent = 'النسخة الالكترونية ';
  label1.setAttribute(
    'class',
    'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
  );

  // Append the radio button and label to the div
  radioButton1Wrapper.appendChild(radioButton1);
  radioButton1Wrapper.appendChild(label1);
  radioButtonDiv.appendChild(radioButton1Wrapper);

  const radioButton2Wrapper = document.createElement('div');
  radioButton2Wrapper.setAttribute(
    'class',
    'flex flex-row-reverse items-center items-center mr-4'
  );
  const radioButton2 = document.createElement('input');
  radioButton2.type = 'radio';
  radioButton2.name = 'bookType';
  radioButton2.value = 'paperCopy';
  radioButton2.setAttribute('class', 'w-4 h-4');

  const label2 = document.createElement('label');
  label2.textContent = 'النـسخة الــورقـية ';
  label2.setAttribute(
    'class',
    'ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
  );

  // Append the radio button and label to the div
  radioButton2Wrapper.appendChild(radioButton2);
  radioButton2Wrapper.appendChild(label2);
  radioButtonDiv.appendChild(radioButton2Wrapper);

  inputContainer.appendChild(radioButtonDiv);

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
  buttonElement.textContent = 'رفع كتاب';

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);
  // upload pdf
  const uploadSection = document.createElement('div');
  uploadSection.setAttribute(
    'class',
    'bg-cover bg-center rounded-lg mt-4 w-1/2'
  );
  const uploadIconDiv = document.createElement('div');
  uploadIconDiv.setAttribute('class', 'relative w-full');
  uploadIconDiv.setAttribute('style', 'border: 1px solid orange');
  const uploadIcon = document.createElement('img');
  uploadIcon.src = '../../../assets/upLoadFiles.png';
  uploadIcon.setAttribute('class', 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto m-6 w-24');
  uploadIconDiv.appendChild(uploadIcon);
  const pdfInput = document.createElement('input');
  pdfInput.setAttribute('class', 'absolute opacity-0 w-full h-full z-30');
  pdfInput.type = 'file';
  pdfInput.id = 'pdf-input';
  pdfInput.accept = 'application/pdf';
  uploadIconDiv.appendChild(pdfInput)

    const canvas = document.createElement("canvas");
  canvas.id = 'pdf-canvas';
  canvas.setAttribute("style", "object-fit:contain")
  const ctx = canvas.getContext('2d');
  pdfInput.addEventListener('change', function () {
    const file = pdfInput.files[0];
    console.log(file)
    if (file.type !== 'application/pdf') {
      alert('Please select a PDF file.');
      return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      const typedarray = new Uint8Array(event.target.result);
      pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
        pdf.getPage(1).then(function (page) {
          const viewport = page.getViewport({ scale: 0.78 });
          const d = page;
          console.log(page.getViewport({scale: 1}))
          canvas.width = viewport.width;
          canvas.height =  viewport.height;
          page.render({ canvasContext: ctx, viewport: viewport });
        });
      });
    };
    reader.readAsArrayBuffer(file);
  });
  uploadIconDiv.appendChild(canvas)
  formDiv.appendChild(form);
  formDiv.appendChild(uploadIconDiv);
  parentDiv.appendChild(formDiv);
  // parentDiv.appendChild(pdfWrapper);
  main_container.appendChild(parentDiv);
});

// start supervisor form validation
const supervisorForm = document.getElementById('userForm');

function handleSubmit(event) {
  event.preventDefault();

  const ISBNInput = document.getElementById('ISBN').value;
  const bookTitleInput = document.getElementById('bookTitle').value;
  const authorName = document.getElementById('authorName').value;
  const pagesNumInput = document.getElementById('pagesNum').value;
  const sectionInput = document.getElementById('section').value;
  const publishingHouse = document.getElementById('publishingHouse').value;

  // Validate  ISBN
  if (ISBNInput === '') {
    document.getElementById('ISBNInputInputError').textContent =
      'الرجاء إدخال رقم ردمك';
  } else {
    document.getElementById('ISBNInputInputError').textContent = '';
  }

  // Validate book title
  if (bookTitleInput === '') {
    document.getElementById('bookTitleInputError').textContent =
      'الرجاء إدخال  عنوان الكتاب';
  } else {
    document.getElementById('bookTitleInputError').textContent = '';
  }

  // Validate author name
  if (authorName === '') {
    document.getElementById('authorNameError').textContent =
      'الرجاء إدخال اسم المؤلف';
  } else {
    document.getElementById('authorNameError').textContent = '';
  }

  // Validate publishing House name
  if (publishingHouse === '') {
    document.getElementById('publishingHouseInputError').textContent =
      'الرجاء إدخال إسم دار النشر';
  } else {
    document.getElementById('publishingHouseInputError').textContent = '';
  }

  // Validate pages number
  if (pagesNumInput === '') {
    document.getElementById('pagesNumError').textContent =
      'الرجاء إدخال عدد الصفحات';
  } else {
    document.getElementById('pagesNumError').textContent = '';
  }

  // Validate section name
  if (sectionInput === '') {
    document.getElementById('sectionError').textContent = 'الرجاء إدخال القسم';
  } else {
    document.getElementById('sectionError').textContent = '';
  }

  // Submit the form if there are no errors
  if (
    document.getElementById('ISBNInputInputError').textContent === '' &&
    document.getElementById('bookTitleInputError').textContent === '' &&
    document.getElementById('authorNameError').textContent === '' &&
    document.getElementById('pagesNumError').textContent === '' &&
    document.getElementById('authorNameError').textContent === '' &&
    document.getElementById('publishingHouseInputError').textContent === ''
  ) {
    // get the form data
    const formData = new FormData(event.target);
    formData.append('addBookToReadingChallenge', addBookToReadingChallenge);
    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end supervisor form validation

// var fileInput = document.getElementById('file-input');
// var canvas = document.getElementById('pdf-canvas');
// var ctx = canvas.getContext('2d');

// fileInput.addEventListener('change', function () {
//   var file = fileInput.files[0];
//   if (file.type !== 'application/pdf') {
//     alert('Please select a PDF file.');
//     return;
//   }
//   var reader = new FileReader();
//   reader.onload = function (event) {
//     var typedarray = new Uint8Array(event.target.result);
//     pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
//       pdf.getPage(1).then(function (page) {
//         var viewport = page.getViewport({ scale: 1.0 });
//         canvas.width = viewport.width;
//         canvas.height = viewport.height;
//         page.render({ canvasContext: ctx, viewport: viewport });
//       });
//     });
//   };
//   reader.readAsArrayBuffer(file);
// });
