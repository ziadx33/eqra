const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const coloredBut = document.querySelectorAll(".coloredBut");

const contantContainer = document.querySelector("#contantContainer");
const buttonFetch = document.querySelector("#buttonFetch");
const admin = document.querySelector("#admin");
const students = document.querySelector("#students");
const teachers = document.querySelector("#teachers");
const rows = document.querySelector("#rows");
const seasons = document.querySelector("#seasons");

const tableData = [
  {
    row: "صف التانى",
    password: "abc123",
    userName: "super",
    supervisorName: "Ammar",
  },
  {
    row: "صف التانى",
    password: "abc123",
    userName: "super",
    supervisorName: "Ammar",
  },
  {
    row: "صف التانى",
    password: "abc123",
    userName: "super",
    supervisorName: "Ammar",
  },
  {
    row: "صف التانى",
    password: "abc123",
    userName: "super",
    supervisorName: "Ammar",
  },
];

const tableDataTab2 = [
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    userName: "حسن ساهر",
    studentName: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    userName: "حسن ساهر",
    studentName: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    userName: "حسن ساهر",
    studentName: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    supervisorName: "خليل يونس",
    row: "6/4",
    iDNumber: "22435325",
    userName: "حسن ساهر",
    studentName: "علي أحمد",
  },
];

const tableDataTab3 = [
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
    nameTeacher: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
    nameTeacher: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
    nameTeacher: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
    nameTeacher: "علي أحمد",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    email: "hasansaher@gmail.com",
    userName: "حسن ساهر",
    nameTeacher: "علي أحمد",
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
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
  {
    Operations: { browse: "تصفح", delete: "حذف" },
    row: "1/2",
  },
];

const headerColumnsOne = [
  " اسم المشرف ",
  " اسم المستخدم",
  " كلمة المرور",
  "الصف",
];

const headerColumnsTwo = [
  "العمليات",
  "اسم المشرف",
  "الصف",
  "رقم الهوية",
  "اسم المستخدم",
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
function renderDataTabOne() {
  buttonFetch.textContent = "";
  const adminButton = document.createElement("button");
  adminButton.classList.add("cursor-pointer", "p-1");
  adminButton.textContent = "اضافة مشرف";
  adminButton.id = "addAdmin";
  adminButton.onclick = addAdminButton;
  buttonFetch.appendChild(adminButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableData, headerColumnsOne);
  contantContainer.appendChild(tableContainer);
}

students.addEventListener("click", () => {
  buttonFetch.textContent = "";
  const studentsButton = document.createElement("button");
  studentsButton.classList.add("cursor-pointer", "p-1");
  studentsButton.textContent = "اضافة طالب";
  studentsButton.id = "addStudents";
  studentsButton.onclick = addStudentsButton;
  buttonFetch.appendChild(studentsButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab2, headerColumnsTwo);
  contantContainer.appendChild(tableContainer);
});

teachers.addEventListener("click", () => {
  buttonFetch.textContent = "";
  const teachersButton = document.createElement("button");
  teachersButton.classList.add("cursor-pointer", "p-1");
  teachersButton.textContent = "اضافة معلم";
  teachersButton.id = "addTeachers";
  teachersButton.onclick = addTeachersButton;
  buttonFetch.appendChild(teachersButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab3, headerColumnsThree);
  contantContainer.appendChild(tableContainer);
});
rows.addEventListener("click", () => {
  contantContainer.textContent = "rows";
  buttonFetch.textContent = "";
  const rowsButton = document.createElement("button");
  rowsButton.classList.add("cursor-pointer", "p-1");
  rowsButton.textContent = "اضافة صف";
  rowsButton.id = "addRows";
  rowsButton.onclick = addRowsButton;
  buttonFetch.appendChild(rowsButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab4, headerColumnsFourth);
  contantContainer.appendChild(tableContainer);
});
seasons.addEventListener("click", () => {
  buttonFetch.textContent = "";
  const seasonsButton = document.createElement("button");
  seasonsButton.classList.add("cursor-pointer", "p-1");
  seasonsButton.textContent = "اضافة فصل";
  seasonsButton.id = "addSeasons";
  seasonsButton.onclick = addSeasonsButton;
  buttonFetch.appendChild(seasonsButton);
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableDataTab5, headerColumnsFifth);
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
  console.log("addAdminButton");
}
function addStudentsButton() {
  console.log("addStudentsButton");
}
function addTeachersButton() {
  console.log("addTeachersButton");
}
function addRowsButton() {
  console.log("addRowsButton");
}
function addSeasonsButton() {
  console.log("addSeasonsButton");
}

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

      if (key === "Operations") {
        const browseBtn = document.createElement("button");
        browseBtn.textContent = "تصفح";
        browseBtn.classList.add(
          "bg-lime-600",
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
