const tabLinks = document.querySelectorAll(".tab-link");
const innerTabLinks = document.querySelectorAll(".inner-tab-link");
const tabContents = document.querySelectorAll(".tab-content");
const innerTabContents = document.querySelectorAll(".inner-tab-content");

const innerTabLinks2 = document.querySelectorAll(".inner-tab-link-2");
const tabContents2 = document.querySelectorAll(".tab-content-2");
const innerTabContents2 = document.querySelectorAll(".inner-tab-content-2");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    console.log(tab,"data");
    setActiveTab(tab);
    setActiveInnerTab(tab);
    setActiveInnerTab2(tab);
  });
});

innerTabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    setActiveInnerTab(tab);
  });
});

innerTabLinks2.forEach((link) => {
  link.addEventListener("click", () => {
    const tab = link.dataset.tab;
    setActiveInnerTab2(tab);
  });
});

function setActiveTab(tab) {
  tabLinks.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  tabContents.forEach((content) => {
    if (content.dataset.tab === tab) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}

function setActiveInnerTab(tab) {
  innerTabLinks.forEach((link) => {
    console.log(link.dataset.tab, tab);
    if (link.dataset.tab === tab) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  innerTabContents.forEach((content) => {
    console.log(content.dataset.tab, tab);
    if (content.dataset.tab === tab) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}

function setActiveInnerTab2(tab) {
  innerTabLinks2.forEach((link) => {
    console.log(link.dataset.tab, tab);
    if (link.dataset.tab === tab) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  innerTabContents2.forEach((content) => {
    console.log(content.dataset.tab, tab);
    if (content.dataset.tab === tab) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}
