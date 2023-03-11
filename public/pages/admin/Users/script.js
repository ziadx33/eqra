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
window.onload = renderDataTabOne();
admin.addEventListener("click", renderDataTabOne);
function renderDataTabOne() {
  contantContainer.textContent = "admin";
  buttonFetch.textContent = "";
  const adminButton = document.createElement("button");
  adminButton.classList.add("cursor-pointer", "p-1");
  adminButton.textContent = "اضافة مشرف";
  adminButton.id = "addAdmin";
  adminButton.onclick = addAdminButton;
  buttonFetch.appendChild(adminButton);
}

students.addEventListener("click", () => {
  contantContainer.textContent = "students";
  buttonFetch.textContent = "";
  const studentsButton = document.createElement("button");
  studentsButton.classList.add("cursor-pointer", "p-1");
  studentsButton.textContent = "اضافة طالب";
  studentsButton.id = "addStudents";
  studentsButton.onclick = addStudentsButton;
  buttonFetch.appendChild(studentsButton);
});

teachers.addEventListener("click", () => {
  contantContainer.textContent = "teachers";
  buttonFetch.textContent = "";
  const teachersButton = document.createElement("button");
  teachersButton.classList.add("cursor-pointer", "p-1");
  teachersButton.textContent = "اضافة معلم";
  teachersButton.id = "addTeachers";
  teachersButton.onclick = addTeachersButton;
  buttonFetch.appendChild(teachersButton);
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
});
seasons.addEventListener("click", () => {
  contantContainer.textContent = "seasons";
  buttonFetch.textContent = "";
  const seasonsButton = document.createElement("button");
  seasonsButton.classList.add("cursor-pointer", "p-1");
  seasonsButton.textContent = "اضافة فصل";
  seasonsButton.id = "addRows";
  seasonsButton.onclick = addSeasonsButton;
  buttonFetch.appendChild(seasonsButton);
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
