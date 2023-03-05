const tabLinks = document.querySelectorAll('.tab-link');
const innerTabLinks = document.querySelectorAll('.inner-tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const innerTabContents = document.querySelectorAll('.inner-tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    const tab = link.dataset.tab;
    setActiveTab(tab);
  });
});

innerTabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tab = link.dataset.tab;
      console.log('clicked')
      console.log(tab)
      setActiveInnerTab(tab);
    });
  });
  

function setActiveTab(tab) {
  tabLinks.forEach(link => {
    if (link.dataset.tab === tab) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  tabContents.forEach(content => {
    if (content.dataset.tab === tab) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

function setActiveInnerTab(tab) {
    innerTabLinks.forEach(link => {
        console.log(link.dataset.tab, tab)
      if (link.dataset.tab === tab) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    innerTabContents.forEach(content => {
        console.log(content.dataset.tab, tab)
      if (content.dataset.tab === tab) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }
  
