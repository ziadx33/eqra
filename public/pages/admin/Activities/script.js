const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const closeIcon = document.querySelector(".closeIcon");

const videoTab = document.querySelector("#videoTab");
const component = document.querySelector("#component");
const contantContainer = document.querySelector("#contantContainer");
const educationalActivities = document.querySelector("#educationalActivities");
const readingChallenge = document.querySelector("#readingChallenge");
const tabContent = document.querySelector(".tab-content");
const vedioForm = document.querySelector("#vedioForm");

const videos = [
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
function renderDataTabOne() {
  videoTab.textContent = "";
  getVideos(videos);
}

burgerMune.addEventListener("click", () => {
  console.log("data");

  if (navBarShow.classList.contains("hidden")) {
    navBarShow.classList.remove("hidden");
  } else {
    navBarShow.classList.add("hidden");
  }
});
closeIcon.addEventListener("click", () => {
  navBarShow.classList.add("hidden");
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
      "m-4",
      "drop-shadow",
      "bg-white",
      "rounded-lg",
      "max-w-sm"
    );

    const videoEl = document.createElement("video");
    videoEl.src = video.src;
    videoEl.classList.add("object-cover", "videoCss");
    const titleAndviewers = document.createElement("div");
    titleAndviewers.classList.add("flex", "justify-between");
    const title = document.createElement("h3");
    title.textContent = video.title;
    title.classList.add("text-lg", "font-bold", "m-4", "text-purple-800");
    titleAndviewers.onclick = () => {
      videoForm(video);
    };
    const dataAndTitleDate = document.createElement("div");
    dataAndTitleDate.classList.add("flex", "justify-between", "m-4");
    dataAndTitleDate.onclick = () => {
      videoForm(video);
    };
    const titleData = document.createElement("p");
    titleData.textContent = "تاريخ النشر";
    const date = document.createElement("p");
    date.textContent = video.date;
    date.classList.add("text-sm", "mt-1", "font-medium");
    const theViewersAndicon = document.createElement("div");
    theViewersAndicon.classList.add("m-4");
    const viewersIcon = document.createElement("img");
    viewersIcon.src = "../../../assets/eye.png";

    viewersIcon.classList.add(
      "w-4",
      "h-4",
      "inline-block",
      "mr-1",
      "align-middle",
      "m-2"
    );

    const viewersCount = document.createElement("span");
    viewersCount.textContent = video.viewers.toLocaleString();
    viewersCount.classList.add("text-sm", "align-middle", "text-gray-400");

    const playIcon = document.createElement("img");
    playIcon.src = "../../../assets/paly.png";
    playIcon.classList.add(
      "absolute",
      "top-1/3",
      "left-1/2",
      "transform",
      "-translate-x-1/2",
      "-translate-y-1/2"
    );

    const isPlaying = false;
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

// Respon the form
function videoForm(video) {
  tabContent.classList.add("hidden");
  vedioForm.classList.remove("hidden");
  console.log(video);
  // JavaScript code to create the form using the DOM
  const form = document.createElement("form");
  form.classList.add("mx-auto", "mt-4", "w-full");
  form.setAttribute("dir", "rtl");
  form.setAttribute("lang", "ar");

  const div = document.createElement("div");
  div.classList.add("mb-4");

  const label = document.createElement("label");
  label.setAttribute("for", "departmentName");
  label.classList.add("font-bold");
  label.textContent = "عنوان النشاط";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", "departmentName");
  input.setAttribute("placeholder", "عنوان النشاط");
  input.dir = "rtl";
  input.classList.add(
    "mt-3",
    "py-2",
    "bg-gray-light",
    "w-full",
    "rounded-md",
    "border-0",
    "p-1.5",
    "text-gray-900",
    "ring-1",
    "sm:text-sm",
    "sm:leading-6"
  );
  const videoCard = document.createElement("div");
  videoCard.classList.add(
    "p-2",
    "m-2",
    "drop-shadow",
    "bg-white",
    "rounded-lg",
    "flex",
    "justify-center"
  );

  const videoEl = document.createElement("video");
  videoEl.src = video.src;
  videoEl.classList.add("object-cover", "videoCss");
  const playIcon = document.createElement("img");
  playIcon.src = "../../../assets/paly.png";
  playIcon.classList.add(
    "absolute",
    "top-1/2",
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
  videoCard.appendChild(playIcon);


  const divButtons = document.createElement("div");
  divButtons.classList.add(
    "justify-center",
    "flex",
    "flex-wrap",
    "md:justify-around",
    "lg:justfiy-around"
  );

  const recInput = document.createElement("input");
  recInput.type = "file";
  recInput.accept = "*";
  recInput.id = "recInput";
  recInput.hidden = true; // hide the input element
  // recInput.addEventListener("change", handleRecInputChange); // add a change event listener to handle image selection

  const recLabel = document.createElement("label");
  recLabel.textContent = "إضافة من الجهاز";
  recLabel.dir = "rtl";
  recLabel.classList.add(
    "m-2",
    "px-8",
    "py-2",
    "md:px-10",
    "md:py-2",
    "lg:px-10",
    "lg:py-2",
    "text-white",
    "rounded-lg",
    "bg-purple-light",
    "border-none",
    "focus:outline-none",
    "whitespace-nowrap",
    "flex"
  );
  recLabel.htmlFor = "recInput";
  const recLabelImage = document.createElement("img");
  recLabelImage.src = "../../../assets/cameraIcon.png";
  recLabel.appendChild(recLabelImage);

  const uploadInput = document.createElement("input");
  uploadInput.type = "file";
  uploadInput.accept = "image/*";
  uploadInput.id = "uploadInput";
  uploadInput.hidden = true; // hide the input element
  // uploadInput.addEventListener("change", handleUploadInputChange); // add a change event listener to handle image selection

  const uploadLabel = document.createElement("label");
  uploadLabel.textContent = "تسجيل من الجهاز";
  uploadLabel.dir = "rtl";
  uploadLabel.classList.add(
    "m-2",
    "px-8",
    "py-2",
    "md:px-10",
    "md:py-2",
    "lg:px-10",
    "lg:py-2",
    "text-white",
    "rounded-lg",
    "bg-purple-light",
    "border-none",
    "focus:outline-none",
    "whitespace-nowrap",
    "flex"
  );
  uploadLabel.htmlFor = "uploadInput";
  const uploadLabelImage = document.createElement("img");
  uploadLabelImage.src = "../../../assets/uploadIcon.png";
  uploadLabel.appendChild(uploadLabelImage);

  divButtons.appendChild(recInput);
  divButtons.appendChild(recLabel);
  divButtons.appendChild(uploadInput);
  divButtons.appendChild(uploadLabel);
  const divPostBut = document.createElement("div");
  divPostBut.classList.add("mt-2", "flex", "justify-center");
  const postBut = document.createElement("button");
  postBut.textContent = "نشر";
  postBut.classList.add(
    "mt-2",
    "px-8",
    "py-2",
    "md:px-10",
    "md:py-2",
    "lg:px-10",
    "lg:py-2",
    "text-white",
    "rounded-lg",
    "bg-dark-green",
    "border-none",
    "focus:outline-none",
    "whitespace-nowrap",
    "flex"
  );
  divPostBut.appendChild(postBut);
  div.appendChild(label);
  div.appendChild(input);
  form.appendChild(div);

  vedioForm.appendChild(form);
  vedioForm.appendChild(videoCard);
  vedioForm.appendChild(divButtons);
  vedioForm.appendChild(divPostBut);
}


  // Get the bell button and notification dropdown elements
  const bellButton = document.getElementById('bell-button');
  const notificationDropdown = document.getElementById('notification-dropdown');

  // Add a click event listener to the bell button
  bellButton.addEventListener('click', () => {
    // Toggle the "hidden" class on the notification dropdown
    notificationDropdown.classList.toggle('hidden');
  });
