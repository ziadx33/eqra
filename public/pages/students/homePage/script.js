let counterNum = 0;
const closeIcon2 = document.querySelector(".closeIcon2");
const modal2 = document.querySelector(".modal2");
const videoTab = document.querySelector("#videoTab");
const tabLinks = document.querySelectorAll(".tab-link");
const innerTabLinks = document.querySelectorAll(".inner-tab-link");
const tabContents = document.querySelectorAll(".tab-content");
const innerTabContents = document.querySelectorAll(".inner-tab-content");

const innerTabLinks2 = document.querySelectorAll(".inner-tab-link-2");
const tabContents2 = document.querySelectorAll(".tab-content-2");
const innerTabContents2 = document.querySelectorAll(".inner-tab-content-2");
const homeContainer = document.querySelector(".home__container");
const homeContainerBooks = document.querySelector(".home_container_books");
const counterDivAll = document.querySelector(".counterDiv");
// fake data
const booksCategories = [
  {
    image: "../../../assets/image8.png",
    category: "كتب الحاسب",
  },
  {
    image: "../../../assets/image7.png",
    category: "القصص",
  },
  {
    image: "../../../assets/image6.png",
    category: "كتب الادب",
  },
  {
    image: "../../../assets/image8.png",
    category: "كتب الحاسب",
  },
  {
    image: "../../../assets/image7.png",
    category: "القصص",
  },
  {
    image: "../../../assets/image6.png",
    category: "كتب الادب",
  },
];

const myBooks = [
  {
    image: "../../../assets/image3.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 5,
    view: 1500,
  },
  {
    image: "../../../assets/image4.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 1,
    view: 155200,
  },
  {
    image: "../../../assets/image5.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 2,
    view: 7500,
  },
  {
    image: "../../../assets/image3.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 4,
    view: 4000,
  },
  {
    image: "../../../assets/image4.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 1,
    view: 85900,
  },
  {
    image: "../../../assets/image5.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 2,
    view: 753293,
  },
];

const books = [
  {
    image: "../../../assets/image3.png",
    name: "الكتاب الاول",
    author: "اول كتاب ينشر على المنصة",
    rating: 5,
    view: 1500,
    chapters: [
      {
        id: 100,
        pagenum: 1,
        textchapter: "الفصل الاول",
        pageimg: [
          { img: "../../../assets/bookpaper1.png", number: 1 },
          { img: "../../../assets/bookpaper2.png", number: 2 },
          { img: "../../../assets/goldstar.png", number: 3 },
          { img: "../../../assets/heart.png", number: 4 },
        ],
      },
      {
        id: 101,
        pagenum: 2,
        textchapter: "الفصل الثاني",
        pageimg: [
          { img: "../../../assets/activities.png", number: 1 },
          { img: "../../../assets/bookpaper1.png", number: 2 },
          { img: "../../../assets/bookpaper1.png", number: 3 },
          { img: "../../../assets/bookpaper1.png", number: 4 },
        ],
      },
      {
        id: 103,
        pagenum: 3,
        textchapter: "الفصل الثالث",
        pageimg: [
          { img: "../../../assets/bookpaper1.png", number: 1 },
          { img: "../../../assets/image4.png", number: 2 },
          { img: "../../../assets/bookpaper1.png", number: 3 },
          { img: "../../../assets/bookpaper1.png", number: 4 },
        ],
      },
      {
        id: 104,
        pagenum: 4,
        textchapter: "الفصل الرابع",
        pageimg: [
          { img: "../../../assets/bookpaper1.png", number: 1 },
          { img: "../../../assets/bookpaper1.png", number: 2 },
          { img: "../../../assets/bookpaper1.png", number: 3 },
          { img: "../../../assets/bookpaper1.png", number: 4 },
        ],
      },
      {
        id: 105,
        pagenum: 5,
        textchapter: "الفصل الخامس",
        pageimg: [
          { img: "../../../assets/bookpaper1.png", number: 1 },
          { img: "../../../assets/bookpaper1.png", number: 2 },
          { img: "../../../assets/bookpaper1.png", number: 3 },
          { img: "../../../assets/bookpaper1.png", number: 4 },
        ],
      },
      {
        id: 106,
        pagenum: 6,
        textchapter: "الفصل السادس",
        pageimg: [
          { img: "../../../assets/bookpaper1.png", number: 1 },
          { img: "../../../assets/bookpaper1.png", number: 2 },
          { img: "../../../assets/bookpaper1.png", number: 3 },
          { img: "../../../assets/bookpaper1.png", number: 4 },
        ],
      },
    ],
  },
];
tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    setActiveTab(tab);
    setActiveInnerTab(tab);
    setActiveInnerTab2(tab);
    homeContainerBooks.textContent = "";
    counterDivAll.textContent = "";
  });
});

innerTabLinks.forEach((link) => {
  console.log(link);
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    if (link.dataset.tab === "innerTab2") {
      homeContainer.textContent = "";
      homeContainerBooks.textContent = "";
      counterDivAll.textContent = "";
      booksCategories.forEach((e) => {
        const bookCategory = bookCategoryCardDOM(e);
        homeContainer.appendChild(bookCategory);
      });
    } else {
      console.log("مكتبتي");
      homeContainerBooks.textContent = "";
      homeContainer.textContent = "";
      books.forEach((e) => {
        const bookCard = bookCardDOM(e);
        homeContainer.appendChild(bookCard);
      });
    }
    setActiveInnerTab(tab);
  });
});

innerTabLinks2.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    setActiveInnerTab2(tab);
    homeContainerBooks.textContent = "";
    counterDivAll.textContent = "";
  });
});

function setActiveTab(tab) {
  tabLinks.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
      homeContainer.textContent = "";
      homeContainerBooks.textContent = "";
      counterDivAll.textContent = "";
    }
  });
  tabContents.forEach((content) => {
    if (content.dataset.tab === tab) {
      content.classList.add("active");
      counterDivAll.textContent = "";
    } else {
      content.classList.remove("active");
      counterDivAll.textContent = "";
    }
  });
}

function setActiveInnerTab(tab) {
  innerTabLinks.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add("active");
      counterDivAll.textContent = "";
    } else {
      link.classList.remove("active");
      counterDivAll.textContent = "";
    }
  });
  innerTabContents.forEach((content) => {
    if (content.dataset.tab === tab) {
      content.classList.add("active");
      counterDivAll.textContent = "";
    } else {
      content.classList.remove("active");
      counterDivAll.textContent = "";
    }
  });
}

function setActiveInnerTab2(tab) {
  innerTabLinks2.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add("active");
      counterDivAll.textContent = "";
    } else {
      link.classList.remove("active");
      counterDivAll.textContent = "";
    }
  });
  innerTabContents2.forEach((content) => {
    console.log(content.dataset.tab, tab);
    if (content.dataset.tab === tab) {
      content.classList.add("active");
      counterDivAll.textContent = "";
    } else {
      content.classList.remove("active");
      counterDivAll.textContent = "";
    }
  });
}

// create dom for books card
function bookCategoryCardDOM(obj) {
  const mainDIV = document.createElement("div");
  mainDIV.classList.add(
    "book__category",
    "max-w-20",
    "shadow-lg",
    "rounded-large",
    "p-4",
    "text-center",
    "text-purple-100",
    "font-semibold"
  );

  const parentDIV = document.createElement("div");
  parentDIV.classList.add("relative", "text-white", "p-4");

  const childDIV = document.createElement("div");
  childDIV.classList.add(
    "absolute",
    "z-10",
    "bg-gold",
    "py-2",
    "px-4",
    "m-2",
    "rounded-lg"
  );

  const p = document.createElement("p");
  p.textContent = "جديد";

  const img = document.createElement("img");
  img.classList.add("rounded-large");
  img.src = obj.image;
  img.alt = obj.category;

  const p2 = document.createElement("p");
  p2.textContent = obj.category;

  childDIV.appendChild(p);
  parentDIV.appendChild(childDIV);
  parentDIV.appendChild(img);
  mainDIV.appendChild(parentDIV);
  mainDIV.appendChild(p2);
  mainDIV.addEventListener("click", () => {
    homeContainer.textContent = "";
    myBooks.forEach((e) => {
      const bookCard = bookCardDOM(e, true);
      homeContainer.appendChild(bookCard);
    });
  });
  return mainDIV;
}

function bookCardDOM(obj, myBook) {
  const container = document.createElement("div");
  container.classList.add(
    "book__category",
    "max-w-20",
    "shadow-lg",
    "rounded-large",
    "p-4",
    "text-right"
  );

  const relative = document.createElement("div");
  relative.classList.add("relative", "text-white", "p-4");

  const absolute = document.createElement("div");
  absolute.classList.add(
    "absolute",
    "z-10",
    "bg-gold",
    "py-2",
    "px-4",
    "m-2",
    "rounded-lg"
  );

  const text = document.createElement("p");
  text.textContent = "جديد";

  absolute.appendChild(text);

  const image = document.createElement("img");
  image.classList.add("rounded-large");
  image.src = obj.image;
  image.alt = obj.name;

  relative.appendChild(absolute);
  relative.appendChild(image);

  const title = document.createElement("div");
  title.classList.add(
    "p-4",
    "flex",
    "items-center",
    !myBook ? "justify-between" : "justify-end",
    "text-purple-300",
    "font-bold",
    "text-xl"
  );
  if (!myBook) {
    const titleImage = document.createElement("img");
    titleImage.classList.add("rounded-large");
    titleImage.src = "../../../assets/heart.png";
    titleImage.alt = "heart icon";
    title.appendChild(titleImage);
  }

  const titleText = document.createElement("p");
  titleText.textContent = obj.name;

  title.appendChild(titleText);

  const description = document.createElement("p");
  description.classList.add("text-purple-200", "p-4");
  description.textContent = obj.author;

  const rating = document.createElement("div");
  rating.classList.add(
    "p-4",
    "flex",
    "items-center",
    "justify-between",
    "text-purple-300",
    "font-bold",
    "text-xl"
  );

  const ratingIcons = document.createElement("div");
  ratingIcons.classList.add("flex", "gap-1");
  const arrImg = [];
  for (let i = 0; i < 5; i++) {
    obj.rating <= i
      ? arrImg.push("../../../assets/graystar.png")
      : arrImg.push("../../../assets/goldstar.png");
  }
  console.log(arrImg);
  arrImg.forEach((e) => {
    const ratingIcon = document.createElement("img");
    ratingIcon.classList.add("w-6", "h-6");
    ratingIcon.src = e;
    ratingIcon.alt = "";
    ratingIcons.appendChild(ratingIcon);
  });

  const ratingInfo = document.createElement("div");
  ratingInfo.classList.add("flex", "items-center", "gap-2");

  const ratingText = document.createElement("p");
  ratingText.classList.add("text-light-gray");
  ratingText.textContent = obj.view;

  const ratingImage = document.createElement("img");
  ratingImage.classList.add("w-6", "h-6");
  ratingImage.src = "../../../assets/eye.png";
  ratingImage.alt = "";

  ratingInfo.appendChild(ratingText);
  ratingInfo.appendChild(ratingImage);

  rating.appendChild(ratingIcons);
  rating.appendChild(ratingInfo);

  const button = document.createElement("div");
  button.classList.add(
    "flex",
    "justify-center",
    "items-center",
    "my-2",
    "py-2",
    "text-white",
    "bg-gold",
    "rounded-lg"
  );

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("font-bold", "text-lg", "select__book");
  buttonElement.textContent = "اختيار الكتاب في تحدي القراءة";

  button.appendChild(buttonElement);
  button.addEventListener("click", () => {
    const accept = document.querySelector(".accept");
    accept.addEventListener("click", () => {
      homeContainerBooks.textContent = "";
      homeContainer.textContent = "";
      showThePageBooks(obj);
      modal.classList.add("hidden");
    });
    modal.classList.remove("hidden");
  });
  container.appendChild(relative);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(rating);
  container.appendChild(button);

  return container;
}
// MODAL
const modal = document.querySelector(".modal");
const closeIcon = document.querySelector(".closeIcon");

const reject = document.querySelector(".reject");

closeIcon.addEventListener("click", () => {
  modal.classList.add("hidden");
});

reject.addEventListener("click", () => {
  modal.classList.add("hidden");
});

const showThePageBooks = (e) => {
  console.log(e);

  const section1 = document.createElement("section");
  section1.className = "py-8";

  const container1 = document.createElement("div");
  container1.className = "container mx-auto px-4";

  const heading1 = document.createElement("img");
  heading1.className = "text-2xl font-bold mb-4";

  // Create second section
  const section2 = document.createElement("section");
  section2.className = "py-8";

  const container2 = document.createElement("div");
  container2.className = "container mx-auto px-4";

  const heading2 = document.createElement("img");
  heading2.className = "text-2xl font-bold mb-4";

  const section3 = document.createElement("section");
  section3.className =
    "bg-white py-8 order-first lg:order-last md:order-first sm:order-first";

  const container3 = document.createElement("div");
  container3.className = "container mx-auto px-4 flex flex-col";

  const section3Header = document.createElement("div");
  section3Header.textContent = "كتاب المكتبات الرقمية";
  section3Header.className = "text-center m-6";
  const section3Text = document.createElement("div");
  section3Text.textContent = "محتويات الكتاب";
  section3Text.className = "text-center m-6";
  const hrEle = document.createElement("hr");
  const divContent = document.createElement("div");
  divContent.className = "bg-color text-xl rounded-t-2xl m-4";

  divContent.appendChild(section3Header);
  divContent.appendChild(hrEle);
  divContent.appendChild(section3Text);
  container3.appendChild(divContent);
  console.log(e.chapters);
  e.chapters.forEach((element) => {
    const butchapter = document.createElement("button");
    butchapter.id = element.id;
    butchapter.textContent = element.textchapter;
    butchapter.className = "px-6 m-2 py-4 bg-white-500 text-black rounded-lg";
    butchapter.addEventListener("click", (e) => {
      console.log("*********");
      console.log(counterNum);
      heading1.src = element.pageimg[0].img;
      heading2.src = element.pageimg[1].img;
      console.log("*********");
    });
    container3.appendChild(butchapter);
  });
  section3.appendChild(container3);
  const counter = document.createElement("div");
  counter.className =
    "flex items-center justify-center flex-col lg:order-last counterRemove";
  const counterWrap = document.createElement("div");
  counterWrap.className = "flex items-center justify-center flex-row";
  const counterDiv = document.createElement("div");
  counterDiv.className =
    "m-auto w-12 h-12 border-2 border-purple-900 flex items-center justify-center text-lg mr-4  py-4 px-4 rounded-full";
  counterDiv.id = "counterId";
  counterDiv.style = "margin: auto;";
  counterDiv.textContent = 0;

  const counterDivBut = document.createElement("div");
  counterDivBut.className = "flex flex-col";
  const incrementBut = document.createElement("button");
  incrementBut.className = "bg-purple-900 py-4 px-4 rounded-full";
  incrementBut.id = "increment-btn1";
  const faArrowUp = document.createElement("img");
  faArrowUp.src = "../../../assets/arrow1.png";

  const performBut = document.createElement("button");
  performBut.className = "bg-purple-900 py-4 px-4 rounded-full";
  performBut.id = "increment-btn2";
  const faArrowDone = document.createElement("img");
  faArrowDone.src = "../../../assets/arrow2.png";

  const butDone = document.createElement("button");
  butDone.textContent = "لقد أنتهيت من قراءة الكتاب";
  butDone.className = "px-6 m-2 py-4 bg-orange-500 text-white rounded-lg";
  butDone.addEventListener("click", () => {
    modal2.classList.remove("hidden");
  });
  closeIcon2.addEventListener("click", () => {
    modal2.classList.add("hidden");
  });

  container1.appendChild(heading1);

  section1.appendChild(container1);

  container2.appendChild(heading2);

  section2.appendChild(container2);
  performBut.appendChild(faArrowDone);
  incrementBut.appendChild(faArrowUp);

  counterWrap.appendChild(performBut);
  counterWrap.appendChild(counterDivBut);
  counterWrap.appendChild(counterDiv);
  counterWrap.appendChild(incrementBut);

  counter.appendChild(counterWrap);
  counter.appendChild(butDone);
  homeContainerBooks.appendChild(section1);
  homeContainerBooks.appendChild(section2);
  homeContainerBooks.appendChild(section3);

  counterDivAll.appendChild(counter);

  const increment_btn1 = document.getElementById("increment-btn1");
  const increment_btn2 = document.getElementById("increment-btn2");

  const counterId = document.getElementById("counterId");

  increment_btn1.addEventListener("click", () => {
    counterNum++;
    counterId.textContent = counterNum;
  });

  increment_btn2.addEventListener("click", () => {
    if (parseInt(counterNum) !== 0) {
      console.log("ddd");
      counterNum--;
      counterId.textContent = counterNum;
    } else {
      counterNum = 0;
      counterId.textContent = counterNum;
    }
  });
};

const stars = document.querySelectorAll(".star");
const qualityStars = document.querySelector("#quality-stars");
let qualityRating = 0;
stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    if (index + 1 <= qualityRating) {
      qualityRating = index;
    } else {
      qualityRating = index + 1;
    }

    qualityStars.innerHTML = "";

    for (let i = 0; i < 5; i++) {
      const starDiv = document.createElement("div");

      if (i < qualityRating) {
        starDiv.classList.add("star");
      } else {
        starDiv.classList.add("");
      }

      const starImg = document.createElement("img");
      starImg.src = "../../../assets/goldstar.png";

      starDiv.appendChild(starImg);

      qualityStars.appendChild(starDiv);
    }
  });
});

document
  .querySelector("#evaluation-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Quality rating:", qualityRating);
  });

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

// Create container element
videos.forEach(function (video) {
  let videoCard = document.createElement("div");
  videoCard.classList.add(
    "p-2",
    "relative",
    "m-2",
    "drop-shadow",
    "bg-white",
    "rounded-lg"
  );

  let videoEl = document.createElement("video");
  videoEl.src = video.src;
  videoEl.classList.add("object-cover", "videoCss", "m-4");
  const titleAndviewers = document.createElement("div");
  titleAndviewers.classList.add("flex", "justify-between");
  let title = document.createElement("h3");
  title.textContent = video.title;
  title.classList.add("text-purple-800");
  title.classList.add("text-lg", "font-bold", "m-4");
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
