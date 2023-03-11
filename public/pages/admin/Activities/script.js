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

window.onload = renderDataTabOne();
educationalActivities.addEventListener("click", renderDataTabOne);
function renderDataTabOne() {
  if (!component.classList.contains("hidden")) {
    component.classList.add("hidden");
  }
  getVideos(videos);
}

readingChallenge.addEventListener("click", () => {
  if (component.classList.contains("hidden")) {
    component.classList.remove("hidden");
  }
  videoTab.textContent = "";
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
