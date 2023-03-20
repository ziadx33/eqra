const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const coloredBut = document.querySelectorAll(".coloredBut");
const closeIcon = document.querySelector(".closeIcon");

const contantContainer = document.querySelector("#contantContainer");
const buttonFetch = document.querySelector("#buttonFetch");
const buttonFetchTwo = document.querySelector("#buttonFetchTwo");
const admin = document.querySelector("#admin");
const students = document.querySelector("#students");
const teachers = document.querySelector("#teachers");
const rows = document.querySelector("#rows");
const seasons = document.querySelector("#seasons");
const component1 = document.querySelector("#component1");

const tableDataTab2 = [
  {
    OperationsTwo: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    studentName: "علي أحمد",
  },
  {
    OperationsTwo: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    studentName: "علي أحمد",
  },
  {
    OperationsTwo: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    studentName: "علي أحمد",
  },
  {
    OperationsTwo: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    studentName: "علي أحمد",
  },
];

const tableDataTab = [
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
  },
];
const tableDataTab4 = [
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisor: "حسن ساهر وشاح",
    rowNum: "1/2",
    row: "1/2",
  },
];
const tableDataTab5 = [
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    OperationsClasses: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
];

const headerColumnsOne = ["الصف", "البريد الاكتروني", " اسم المعلم"];

const headerColumnsTwo = [
  "العمليات",
  "اسم المشرف",
  "الصف",
  "رقم الهوية",
  "اسم الطالب",
];
const headerColumnsThree = [
  "العمليات",
  "البريد الالكتروني",
  "اسم المستخدم",
  "اسم المعلم",
];

const headerColumnsFourth = ["العمليات", "مشرف", "رقم الصف", "الصف"];

const headerColumnsFifth = ["العمليات", "الصف"];
window.onload = renderDataTabOne();
admin.addEventListener("click", renderDataTabOne);
closeIcon.addEventListener("click", () => {
  navBarShow.classList.add("hidden");
});

function renderDataTabOne() {
  buttonFetch.textContent = "";
  buttonFetchTwo.textContent = '';
  const adminButton = document.createElement("button");
  const adminButtontwo = document.createElement("button");
  component1.classList.remove("hidden");
  adminButton.classList.add("cursor-pointer", "p-1");
  adminButtontwo.classList.add("cursor-pointer", "p-1");

  adminButton.textContent = "اضافة معلم";
  adminButtontwo.textContent = "رفع ملف المعلمين";

  adminButton.id = "addAdmin";
  adminButtontwo.id = "addAdminTwo";

  buttonFetch.onclick = addAdminButton;
  buttonFetch.classList.add("cursor-pointer");
  buttonFetchTwo.appendChild(adminButtontwo);
  buttonFetch.appendChild(adminButton);

  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab, headerColumnsOne);
  contantContainer.appendChild(tableContainer);
}

students.addEventListener("click", () => {
  buttonFetch.textContent = "";
  buttonFetchTwo.textContent = '';
  const studentsButton = document.createElement("button");
  const adminButtontwo = document.createElement("button");

  studentsButton.classList.add("cursor-pointer", "p-1");
  adminButtontwo.classList.add("cursor-pointer", "p-1");

  studentsButton.textContent = "اضافة طالب";
  adminButtontwo.textContent = "رفع ملف الطالب";

  studentsButton.id = "addStudents";
  buttonFetch.onclick = addStudentsButton;
  buttonFetch.classList.add("cursor-pointer");
  buttonFetchTwo.appendChild(adminButtontwo);
  buttonFetch.appendChild(studentsButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab2, headerColumnsTwo);
  contantContainer.appendChild(tableContainer);
});

coloredBut.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs
    coloredBut.forEach((tab) => tab.classList.remove("active"));

    // add active class to the clicked tab
    tab.classList.add("active");
  });
});

burgerMune.addEventListener("click", () => {
  console.log("data");

  if (navBarShow.classList.contains("hidden")) {
    navBarShow.classList.remove("hidden");
  } else {
    navBarShow.classList.add("hidden");
  }
});

function showComponent(componentId) {
  // Hide all components
  const components = document.querySelectorAll('[id^="component"]');
  components.forEach((component) => {
    component.classList.add("hidden");
  });

  // Show the selected component
  const selectedComponent = document.getElementById(componentId);
  selectedComponent.classList.remove("hidden");
}

function addAdminButton() {
  component1.classList.add("hidden");
  contantContainer.textContent = "";
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg"
  );
  const form = document.createElement("form");
  form.setAttribute("class", "mt-0 space-y-6");
  form.setAttribute("id", "supervisorForm");
  form.setAttribute("dir", "rtl");
  form.setAttribute("lang", "ar");
  form.setAttribute("onsubmit", "supervisorHandleSubmit(event)");

  // Create the HTML elements
  const divHead = document.createElement("div");
  divHead.classList.add("flex", "flex-col", "items-center");
  const h1Element = document.createElement("h1");
  h1Element.classList.add("text-purple-100", "font-bold", "text-2xl");
  h1Element.textContent = "اضافة معلم";

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "-space-y-px rounded-md shadow-sm");
  const SupervisorNameContainer = document.createElement("div");
  SupervisorNameContainer.setAttribute("class", "mb-4");

  const SupervisorNameLabel = document.createElement("label");
  SupervisorNameLabel.setAttribute("for", "SupervisorName");
  SupervisorNameLabel.setAttribute("class", "font-bold");
  SupervisorNameLabel.textContent = "أسم المعلم";


  const SupervisorNameInput = document.createElement("input");
  SupervisorNameInput.setAttribute("type", "text");
  SupervisorNameInput.setAttribute("id", "SupervisorName");
  SupervisorNameInput.setAttribute("name", "SupervisorName");
  SupervisorNameInput.setAttribute(
    "class",
    "mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6"
  );
  SupervisorNameInput.placeholder = "أسم المعلم";

  const SupervisorNameInputError = document.createElement("p");
  SupervisorNameInputError.setAttribute("id", "SupervisorNameInputError");
  SupervisorNameInputError.setAttribute("class", "text-red-100 text-xs mt-1");

  SupervisorNameContainer.appendChild(SupervisorNameLabel);
  SupervisorNameContainer.appendChild(SupervisorNameInput);
  SupervisorNameContainer.appendChild(SupervisorNameInputError);
  inputContainer.appendChild(SupervisorNameContainer);

  const userNameContainer = document.createElement("div");
  userNameContainer.setAttribute("class", "mb-4");

  const userEmailLabel = document.createElement("label");
  userEmailLabel.setAttribute("for", "userName");
  userEmailLabel.setAttribute("class", "font-bold");
  userEmailLabel.textContent = "البريد الالكتروني";
  userEmailLabel.placeholder = "البريد الالكتروني";

  const userEmailInput = document.createElement("input");
  userEmailInput.setAttribute("type", "text");
  userEmailInput.setAttribute("id", "userName");
  userEmailInput.setAttribute("name", "userName");
  userEmailInput.setAttribute(
    "class",
    "mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6"
  );
  userEmailInput.placeholder = 'البريد الالكتروني';
  const userNameInputError = document.createElement("p");
  userNameInputError.setAttribute("id", "userNameInputError");
  userNameInputError.setAttribute("class", "text-red-100 text-xs mt-1");

  userNameContainer.appendChild(userEmailLabel);
  userNameContainer.appendChild(userEmailInput);
  userNameContainer.appendChild(userNameInputError);
  inputContainer.appendChild(userNameContainer);

  const passwordContainer = document.createElement("div");
  passwordContainer.setAttribute("class", "mb-4");

  const classNameContainer = document.createElement("div");
  classNameContainer.setAttribute("class", "mb-4");

  const classNameInputError = document.createElement("p");
  classNameInputError.setAttribute("id", "classNameInputError");
  classNameInputError.setAttribute("class", "text-red-100 text-xs mt-1");

  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);

  // Create the button element
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "py-4 flex justify-center border-none");
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("type", "submit");
  buttonElement.setAttribute(
    "class",
    "bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg"
  );
  buttonElement.setAttribute("id", "addButton");
  buttonElement.textContent = "تعديل";

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
}

// start supervisor form validation
const supervisorForm = document.getElementById("userForm");

function supervisorHandleSubmit(event) {
  event.preventDefault();

  const SupervisorName = document.getElementById("SupervisorName").value;
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const classNameInput = document.getElementById("classNameInput").value;

  // Validate Supervisor Name
  if (SupervisorName === "") {
    document.getElementById("SupervisorNameInputError").textContent =
      "الرجاء إدخال إسم المشرف";
  } else {
    document.getElementById("SupervisorNameInputError").textContent = "";
  }

  // Validate user Name
  if (userName === "") {
    document.getElementById("userNameInputError").textContent =
      "الرجاء إدخال إسم المستخدم";
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById("userNameInputError").textContent =
      "يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات";
  } else {
    document.getElementById("userNameInputError").textContent = "";
  }

  // Validate password
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "الرجاء إدخال كلمة المرور";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Validate class Name
  if (classNameInput === "") {
    document.getElementById("classNameInputError").textContent =
      "الرجاء إدخال إسم الصف";
  } else {
    document.getElementById("classNameInputError").textContent = "";
  }

  // Submit the form if there are no errors
  if (
    document.getElementById("SupervisorNameInputError").textContent === "" &&
    document.getElementById("userNameInputError").textContent === "" &&
    document.getElementById("passwordError").textContent === "" &&
    document.getElementById("classNameInputError").textContent === ""
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
  component1.classList.add("hidden");
  contantContainer.textContent = "";
  const parentDiv = document.createElement("div");
  parentDiv.setAttribute(
    "class",
    "w-full sm:max-w-lg sm:p-8 shadow-xl rounded-lg"
  );
  const form = document.createElement("form");
  form.setAttribute("class", "mt-0 space-y-6");
  form.setAttribute("id", "studentsForm");
  form.setAttribute("dir", "rtl");
  form.setAttribute("lang", "ar");
  form.setAttribute("onsubmit", "studentsHandleSubmit(event)");

  // Create the HTML elements
  const divHead = document.createElement("div");
  divHead.classList.add("flex", "flex-col", "items-center");
  const h1Element = document.createElement("h1");
  h1Element.classList.add("text-purple-100", "font-bold", "text-2xl");
  h1Element.textContent = "إضافة طالب";

  // Append the elements to the parent element
  divHead.appendChild(h1Element);
  form.appendChild(divHead);
  const inputContainer = document.createElement("div");
  inputContainer.setAttribute("class", "-space-y-px rounded-md shadow-sm");
  const studentNameContainer = document.createElement("div");
  studentNameContainer.setAttribute("class", "mb-4");

  const studentNameLabel = document.createElement("label");
  studentNameLabel.setAttribute("for", "studentName");
  studentNameLabel.setAttribute("class", "font-bold");
  studentNameLabel.textContent = "أسم الطالب";

  const studentNameInput = document.createElement("input");
  studentNameInput.setAttribute("type", "text");
  studentNameInput.setAttribute("id", "studentName");
  studentNameInput.setAttribute("name", "studentName");
  studentNameInput.setAttribute(
    "class",
    "mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6"
  );
  studentNameInput.placeholder='أسم الطالب';

  const studentNameInputError = document.createElement("p");
  studentNameInputError.setAttribute("id", "studentNameInputError");
  studentNameInputError.setAttribute("class", "text-red-100 text-xs mt-1");

  studentNameContainer.appendChild(studentNameLabel);
  studentNameContainer.appendChild(studentNameInput);
  studentNameContainer.appendChild(studentNameInputError);
  inputContainer.appendChild(studentNameContainer);

  const classNameContainer = document.createElement("div");
  classNameContainer.setAttribute("class", "mb-4");

  const classNameLabel = document.createElement("label");
  classNameLabel.setAttribute("for", "className");
  classNameLabel.setAttribute("class", "font-bold");
  classNameLabel.textContent = "رقم الهوية";

  const classNameInput = document.createElement("input");
  classNameInput.setAttribute("type", "text");
  classNameInput.setAttribute("id", "classNameInput");
  classNameInput.setAttribute("name", "classNameInput");
  classNameInput.setAttribute(
    "class",
    "mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6"
  );
  classNameInput.placeholder ="رقم الهوية";

  const classNameInputError = document.createElement("p");
  classNameInputError.setAttribute("id", "classNameInputError");
  classNameInputError.setAttribute("class", "text-red-100 text-xs mt-1");

  classNameContainer.appendChild(classNameLabel);
  classNameContainer.appendChild(classNameInput);
  classNameContainer.appendChild(classNameInputError);
  inputContainer.appendChild(classNameContainer);

  const studentIdContainer = document.createElement("div");
  studentIdContainer.setAttribute("class", "mb-4");

  const studentIdLabel = document.createElement("label");
  studentIdLabel.setAttribute("for", "studentId");
  studentIdLabel.setAttribute("class", "font-bold");
  studentIdLabel.innerText = "الصف";

  const studentIdInput = document.createElement("input");
  studentIdInput.setAttribute("type", "text");
  studentIdInput.setAttribute("id", "studentId");
  studentIdInput.setAttribute("name", "studentId");
  studentIdInput.setAttribute(
    "class",
    "mt-3 py-3 bg-gray-light t w-full rounded-md border-0 p-1.5 text-gray-900 ring-1 sm:text-sm sm:leading-6"
  );
  studentIdInput.placeholder='الصف';

  const studentIdError = document.createElement("p");
  studentIdError.setAttribute("id", "studentIdError");
  studentIdError.setAttribute("class", "text-red-100 text-xs mt-1");

  studentIdContainer.appendChild(studentIdLabel);
  studentIdContainer.appendChild(studentIdInput);
  studentIdContainer.appendChild(studentIdError);
  inputContainer.appendChild(studentIdContainer);

  // Create the button element
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "py-4 flex justify-center border-none");
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("type", "submit");
  buttonElement.setAttribute(
    "class",
    "bg-green text-white px-12 py-2 my-4 w-2/4 rounded-lg"
  );
  buttonElement.setAttribute("id", "addButton");
  buttonElement.textContent = "تعديل";

  buttonDiv.appendChild(buttonElement);
  inputContainer.appendChild(buttonDiv);

  form.appendChild(inputContainer);

  parentDiv.appendChild(form);
  contantContainer.appendChild(parentDiv);
}

// start student form validation
const studentForm = document.getElementById("studentsForm");

function studentsHandleSubmit(event) {
  event.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const userName = document.getElementById("userName").value;
  const classNameInput = document.getElementById("classNameInput").value;
  const studentId = document.getElementById("studentId").value;

  // Validate Supervisor Name
  if (studentName === "") {
    document.getElementById("studentNameInputError").textContent =
      "الرجاء إدخال إسم الطالب";
  } else {
    document.getElementById("studentNameInputError").textContent = "";
  }

  // Validate user Name
  if (userName === "") {
    document.getElementById("userNameInputError").textContent =
      "الرجاء إدخال إسم المستخدم";
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById("userNameInputError").textContent =
      "يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات";
  } else {
    document.getElementById("userNameInputError").textContent = "";
  }

  // Validate class Name
  if (classNameInput === "") {
    document.getElementById("classNameInputError").textContent =
      "الرجاء إدخال إسم الصف";
  } else {
    document.getElementById("classNameInputError").textContent = "";
  }

  // Validate student Id
  if (studentId === "") {
    document.getElementById("studentIdError").textContent =
      "الرجاء إدخال رقم الهوية";
  } else {
    document.getElementById("studentIdError").textContent = "";
  }
  // Submit the form if there are no errors
  if (
    document.getElementById("studentNameInputError").textContent === "" &&
    document.getElementById("userNameInputError").textContent === "" &&
    document.getElementById("classNameInputError").textContent === "" &&
    document.getElementById("studentIdError").textContent === ""
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

const teacherForm = document.getElementById("teacherForm");

function teacherHandleSubmit(event) {
  event.preventDefault();

  const teacherName = document.getElementById("teacherName").value;
  const userName = document.getElementById("userName").value;
  const password = document.getElementById("password").value;

  // Validate Supervisor Name
  if (teacherName === "") {
    document.getElementById("teacherNameInputError").textContent =
      "الرجاء إدخال إسم المعلم";
  } else {
    document.getElementById("teacherNameInputError").textContent = "";
  }

  // Validate user Name
  if (userName === "") {
    document.getElementById("userNameInputError").textContent =
      "الرجاء إدخال إسم المستخدم";
  } else if (!/^[a-zA-Z]*$/.test(userName)) {
    document.getElementById("userNameInputError").textContent =
      "يجب أن يحتوي إسم المشرف على الأحرف الإنجليزية فقط بدون مسافات";
  } else {
    document.getElementById("userNameInputError").textContent = "";
  }

  // Validate password
  if (password === "") {
    document.getElementById("passwordError").textContent =
      "الرجاء إدخال كلمة المرور";
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Submit the form if there are no errors
  if (
    document.getElementById("teacherNameInputError").textContent === "" &&
    document.getElementById("userNameInputError").textContent === "" &&
    document.getElementById("passwordError").textContent === ""
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// start class room form validation
const classRoomForm = document.getElementById("classRoomForm");

function classRoomHandleSubmit(event) {
  event.preventDefault();

  const classRoomName = document.getElementById("classRoomName").value;
  const classNameInput = document.getElementById("className").value;
  const classNumber = document.getElementById("classNumber").value;
  const SupervisorName = document.getElementById("SupervisorName").value;

  // Validate Supervisor Name
  if (classRoomName === "") {
    document.getElementById("classRoomNameInputError").textContent =
      "الرجاء إدخال إسم الصف";
  } else {
    document.getElementById("classRoomNameInputError").textContent = "";
  }

  // Validate user Name
  if (classNameInput === "") {
    document.getElementById("classNameInputError").textContent =
      "الرجاء إدخال إسم الفصل";
  } else {
    document.getElementById("classNameInputError").textContent = "";
  }

  // Validate class Name
  if (classNumber === "") {
    document.getElementById("classNumberInputError").textContent =
      "الرجاء إدخال رقم الصف";
  } else {
    document.getElementById("classNumberInputError").textContent = "";
  }

  // Validate student Id
  if (SupervisorName === "") {
    document.getElementById("SupervisorNameError").textContent =
      "الرجاء إدخال اسم المشرف";
  } else {
    document.getElementById("SupervisorNameError").textContent = "";
  }
  // Submit the form if there are no errors
  if (
    document.getElementById("classRoomNameInputError").textContent === "" &&
    document.getElementById("classNameInputError").textContent === "" &&
    document.getElementById("classNumberInputError").textContent === "" &&
    document.getElementById("SupervisorNameError").textContent === ""
  ) {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// start class room form validation
const classForm = document.getElementById("classForm");

function classHandleSubmit(event) {
  event.preventDefault();

  const className = document.getElementById("className").value;

  // Validate class Name
  if (className === "") {
    document.getElementById("classNameInputError").textContent =
      "الرجاء إدخال إسم الفصل";
  } else {
    document.getElementById("classNameInputError").textContent = "";
  }

  // Submit the form if there are no errors
  if (document.getElementById("classNameInputError").textContent === "") {
    // get the form data
    const formData = new FormData(event.target);

    // iterate over the form data and log each field to the console
    for (const [name, value] of formData) {
      console.log(`${name}: ${value}`);
    }
  }
}

// end class room  form validation
const tableContainer = document.querySelector("#table-container");

function generateTable(data, Columns) {
  const tableContainer = document.createElement("div");
  tableContainer.id = "table-container";

  const container = document.createElement("div");
  container.classList.add("container");

  const table = document.createElement("table");
  table.classList.add("table-auto", "m-auto", "my-4");

  const thead = document.createElement("thead");

  const trHead = document.createElement("tr");
  trHead.classList.add(
    "bg-gray-200",
    "text-center",
    "bg-purple-light",
    "text-white"
  );

  Columns.forEach((columnText) => {
    const th = document.createElement("th");
    th.classList.add("px-4", "py-2");
    th.textContent = columnText;
    trHead.appendChild(th);
  });

  const tbody = document.createElement("tbody");

  data.forEach((rowData) => {
    const trBody = document.createElement("tr");
    trBody.classList.add("text-center");

    Object.entries(rowData).forEach(([key, value]) => {
      const td = document.createElement("td");
      td.classList.add(
        "border",
        "px-4",
        "py-2",
        "whitespace-nowrap",
        "text-base"
      );
      if (key === "OperationsTwo") {
        const browseBtn = document.createElement("button");
        browseBtn.textContent = "تعديل";
        browseBtn.classList.add(
          "bg-green",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        browseBtn.addEventListener("click", () => {
          // Handle edit button click event here
          console.log(`Editing row with data: ${JSON.stringify(rowData)}`);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "حذف";
        deleteBtn.classList.add(
          "bg-red-700",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        deleteBtn.addEventListener("click", () => {
          // Handle delete button click event here
          console.log(`Deleting row with data: ${JSON.stringify(rowData)}`);
        });
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex", "justify-center");
        buttonsDiv.appendChild(deleteBtn);
        buttonsDiv.appendChild(browseBtn);
        td.appendChild(buttonsDiv);
      } else if (key === "OperationsClasses") {
        table.setAttribute("style", "min-width: 320px");
        const browseBtn = document.createElement("button");
        browseBtn.textContent = "تصفح";
        trBody.classList.add("w-16");
        browseBtn.classList.add(
          "bg-green",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        browseBtn.addEventListener("click", () => {
          // Handle edit button click event here
          console.log(`Editing row with data: ${JSON.stringify(rowData)}`);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "حذف";
        deleteBtn.classList.add(
          "bg-red-700",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        deleteBtn.addEventListener("click", () => {
          // Handle delete button click event here
          console.log(`Deleting row with data: ${JSON.stringify(rowData)}`);
        });
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex", "justify-center");
        buttonsDiv.appendChild(deleteBtn);
        buttonsDiv.appendChild(browseBtn);
        td.appendChild(buttonsDiv);
      } else if (key === "Operations") {
        const browseBtn = document.createElement("button");
        browseBtn.textContent = "تصفح";
        trBody.classList.add("w-16");
        browseBtn.classList.add(
          "bg-green",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        browseBtn.addEventListener("click", () => {
          // Handle edit button click event here
          console.log(`Editing row with data: ${JSON.stringify(rowData)}`);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "حذف";
        deleteBtn.classList.add(
          "bg-red-700",
          "text-white",
          "py-1",
          "px-2",
          "rounded",
          "mx-1"
        );
        deleteBtn.addEventListener("click", () => {
          // Handle delete button click event here
          console.log(`Deleting row with data: ${JSON.stringify(rowData)}`);
        });
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex");
        buttonsDiv.appendChild(deleteBtn);
        buttonsDiv.appendChild(browseBtn);
        td.appendChild(buttonsDiv);
      } else {
        td.textContent = value;
      }

      trBody.appendChild(td);
    });

    tbody.appendChild(trBody);
  });

  thead.appendChild(trHead);
  table.appendChild(thead);
  table.appendChild(tbody);
  container.appendChild(table);
  tableContainer.appendChild(container);

  return tableContainer;
}
  // Get the bell button and notification dropdown elements
  const bellButton = document.getElementById('bell-button');
  const notificationDropdown = document.getElementById('notification-dropdown');

  // Add a click event listener to the bell button
  bellButton.addEventListener('click', () => {
    // Toggle the "hidden" class on the notification dropdown
    notificationDropdown.classList.toggle('hidden');
  });
