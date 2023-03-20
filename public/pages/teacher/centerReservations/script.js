const navBarShow = document.querySelector('.navBarShow');
const burgerMune = document.querySelector('.burgerMune');
const coloredBut = document.querySelectorAll('.coloredBut');
const contantContainer = document.querySelector('#contantContainer');
const contantContainerTwo  = document.querySelector("#contantContainerTwo");
const closeIconNav = document.querySelector(".closeIconNav");

const electronicLibrary = document.querySelector("#electronicLibrary");
const centerWorks = document.querySelector("#centerWorks");
const colordFillter = document.querySelectorAll(".colordFillter");
const component1 = document.querySelector("#component1");
const tableContainer = document.querySelector("#table-container");

closeIconNav.addEventListener("click", () => {
  navBarShow.classList.add("hidden");
});

const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".closeIcon");

const reject = document.querySelector(".reject");

const tableData = [
  {
    class7: "متاح",
    class6: "محجوز",
    class5: "متاح",
    class4: "متاح",
    class3: "متاح",
    class2: "متاح",
    class1: "متاح",
    date: "12/2/2023",
    day: "الاحد",
  },
  {
    class7: "متاح",
    class6: "محجوز",
    class5: "متاح",
    class4: "متاح",
    class3: "مقفل",
    class2: "متاح",
    class1: "متاح",
    date: "12/2/2023",
    day: "الاثنين",
  },
  {
    class7: "متاح",
    class6: "محجوز",
    class5: "متاح",
    class4: "متاح",
    class3: "متاح",
    class2: "متاح",
    class1: "متاح",
    date: "12/2/2023",
    day: "الثلاثاء",
  },
  {
    class7: "متاح",
    class6: "محجوز",
    class5: "متاح",
    class4: "متاح",
    class3: "مقفل",
    class2: "متاح",
    class1: "متاح",
    date: "12/2/2023",
    day: "الاربعاء",
  },
  {
    class7: "متاح",
    class6: "محجوز",
    class5: "متاح",
    class4: "متاح",
    class3: "مقفل",
    class2: "متاح",
    class1: "متاح",
    date: "12/2/2023",
    day: "الخميس",
  },
];

const headerColumnsOne = [
  "الحصة 7",
  " الحصة 6",
  "الحصة 5",
  " الحصة 4",
  "الحصة 3",
  " الحصة 2",
  "الحصة 1",
  "التاريخ",
  "الايام",
];

const tableDataTab2 = [
  {
    row: "1/2",
    reservedLotNumber: "1",
    bookingDate: "الاحد 12/2/2023",
  },
  {
    row: "1/2",
    reservedLotNumber: "1",
    bookingDate: "الاحد 12/2/2023",
  },
];

const headerColumnsTwo = ["الصف", "رقم الحصة المحجوزة", "تاريخ الحجز"];

window.onload = renderDataTabOne();
electronicLibrary.addEventListener("click", renderDataTabOne);
function renderDataTabOne() {
  contantContainer.classList.remove("hidden");
  contantContainerTwo.classList.add("hidden");
  const tableContainer = generateTable(tableData, headerColumnsOne);
  contantContainer.appendChild(tableContainer);
}

centerWorks.addEventListener("click", () => {
  contantContainer.classList.add("hidden");
  contantContainerTwo.classList.remove("hidden");

  const tableContainerTab2 = generateTable(tableDataTab2, headerColumnsTwo);

  contantContainerTwo.appendChild(tableContainerTab2);
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
  if (navBarShow.classList.contains("hidden")) {
    navBarShow.classList.remove("hidden");
  } else {
    navBarShow.classList.add("hidden");
  }
});
colordFillter.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs
    colordFillter.forEach((tab) => tab.classList.remove("activeFillter"));

    // add active class to the clicked tab
    tab.classList.add("activeFillter");
  });
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

function generateTable(data, Columns) {
  contantContainer.textContent = "";
  contantContainerTwo.textContent = "";
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
    th.classList.add("px-4", "py-2", "whitespace-nowrap");
    th.textContent = columnText;
    trHead.appendChild(th);
  });

  const tbody = document.createElement("tbody");

  data.forEach((rowData) => {
    const trBody = document.createElement("tr");
    trBody.classList.add("text-center");

    Object.entries(rowData).forEach(([key, value]) => {
      const td = document.createElement("td");
      const className = "border px-4 py-2 whitespace-nowrap text-base";
      const textColor =
        value === "متاح"
          ? "text-green-100"
          : value === "محجوز"
          ? "text-gold-100"
          : value === "مقفل"
          ? "text-red-100"
          : "text-black-100";
      td.setAttribute(
        "class",
        `${className} ${textColor}`,
        "whitespace-nowrap"
      );
      td.textContent = value;
      td.addEventListener("click", (e) => {
        if (e.target.textContent === "متاح") {
          modal.classList.remove("hidden");
        }
        console.log(e.target.textContent);
      });
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

// MODAL

closeIcon.addEventListener("click", () => {
  modal.classList.add("hidden");
});

reject.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Get the bell button and notification dropdown elements
const bellButton = document.getElementById("bell-button");
const notificationDropdown = document.getElementById("notification-dropdown");

// Add a click event listener to the bell button
bellButton.addEventListener("click", () => {
  // Toggle the "hidden" class on the notification dropdown
  notificationDropdown.classList.toggle("hidden");
});
