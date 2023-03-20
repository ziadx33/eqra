const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const coloredBut = document.querySelectorAll(".coloredBut");
const colordFillter = document.querySelectorAll(".colordFillter");

const videoTab = document.querySelector("#videoTab");
const component = document.querySelector("#component");
const contantContainer = document.querySelector("#contantContainer");
const educationalActivities = document.querySelector("#educationalActivities");
const readingChallenge = document.querySelector("#readingChallenge");

let videos = [
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 500,
  },
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 1000,
  },
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 750,
  },
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 1200,
  },
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 900,
  },
  {
    src: "../../../assets/Document - Google Chrome 2023-03-07 23-42-36.mp4",
    title: "عنوان الفيديو",
    date: "12/12/2022",
    viewers: 800,
  },
];

const tableData = [
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
  {
    'OperationsOne': {browse: 'تصفح'},
    'studentPagePreview': '20',
    'booksNum': 'حسن وشاح',
    'row': '1/ج',
    'userName': 'عمار'
  },
];

const headerColumnsOne = [
  "العمليات",
  "معاينة صفحة الطالب",
  "عدد الكتب المعتمدة",
  "الفصل",
  "اسم الطالب",
];

window.onload = renderDataTabOne();
educationalActivities.addEventListener("click", renderDataTabOne);
function renderDataTabOne() {
  videoTab.textContent = '';
  if (!component.classList.contains("hidden")) {
    component.classList.add("hidden");
  }
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  getVideos(videos);
}

readingChallenge.addEventListener("click", () => {
  if (component.classList.contains("hidden")) {
    component.classList.remove("hidden");
  }
  videoTab.textContent = "";
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableData,headerColumnsOne);
  contantContainer.appendChild(tableContainer);
});

colordFillter.forEach((tab) => {
  tab.addEventListener("click", () => {
    // remove active class from all tabs
    colordFillter.forEach((tab) => tab.classList.remove("activeFillter"));

    // add active class to the clicked tab
    tab.classList.add("activeFillter");
  });
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

function getVideos(videos) {
  videos.forEach(function (video) {
    let videoCard = document.createElement("div");
    videoCard.classList.add(
      "p-2",
      "m-2",
      "drop-shadow",
      "bg-white",
      "rounded-lg",
      "max-w-sm"
    );

    let videoEl = document.createElement("video");
    videoEl.src = video.src;
    videoEl.classList.add("object-cover", "videoCss");
    const titleAndviewers = document.createElement("div");
    titleAndviewers.classList.add("flex", "justify-between");
    let title = document.createElement("h3");
    title.textContent = video.title;
    title.classList.add("text-lg", "font-bold", "m-4", "text-purple-800");
    const dataAndTitleDate = document.createElement("div");
    dataAndTitleDate.classList.add("flex", "justify-between", "m-4");
    const titleData = document.createElement("p");
    titleData.textContent = "تاريخ النشر";
    let date = document.createElement("p");
    date.textContent = video.date;
    date.classList.add("text-sm", "mt-1", "font-medium");
    const theViewersAndicon = document.createElement("div");
    theViewersAndicon.classList.add("m-4");
    let viewersIcon = document.createElement("img");
    viewersIcon.src = "../../../assets/eye.png";

    viewersIcon.classList.add(
      "w-4",
      "h-4",
      "inline-block",
      "mr-1",
      "align-middle",
      "m-2"
    );

    let viewersCount = document.createElement("span");
    viewersCount.textContent = video.viewers.toLocaleString();
    viewersCount.classList.add("text-sm", "align-middle", "text-gray-400");

    let playIcon = document.createElement("img");
    playIcon.src = "../../../assets/paly.png";
    playIcon.classList.add(
      "absolute",
      "top-1/3",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2"
    );

    let isPlaying = false;
    playIcon.addEventListener("click", function () {
      if (!isPlaying) {
        videoEl.play();
        playIcon.style.display = "none";
        isPlaying = true;
        console.log("start");
      }
    });
    videoEl.addEventListener("click", function () {
      videoEl.pause();
      playIcon.style.display = "block";
      isPlaying = false;
    });

    videoCard.appendChild(videoEl);
    theViewersAndicon.appendChild(viewersCount);
    theViewersAndicon.appendChild(viewersIcon);
    titleAndviewers.appendChild(theViewersAndicon);
    titleAndviewers.appendChild(title);
    videoCard.appendChild(titleAndviewers);
    dataAndTitleDate.appendChild(date);
    dataAndTitleDate.appendChild(titleData);
    videoCard.appendChild(dataAndTitleDate);
    videoCard.appendChild(playIcon);

    videoTab.appendChild(videoCard);
  });
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
      } else if (key === "OperationsOne"){
        const browseBtn = document.createElement("button");
        browseBtn.textContent = "معاينة";
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
        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("flex");
        buttonsDiv.appendChild(browseBtn);
        td.appendChild(buttonsDiv);
      }else{
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
