const tabLinks = document.querySelectorAll('.tab-link');
const innerTabLinks = document.querySelectorAll('.inner-tab-link');
const tabContents = document.querySelectorAll('.tab-content');
const innerTabContents = document.querySelectorAll('.inner-tab-content');

const innerTabLinks2 = document.querySelectorAll('.inner-tab-link-2');
const tabContents2 = document.querySelectorAll('.tab-content-2');
const innerTabContents2 = document.querySelectorAll('.inner-tab-content-2');
const homeContainer = document.querySelector('.home__container');


// fake data
const booksCategories = [
  {
    image: '../../../assets/image8.png',
    category: 'كتب الحاسب',
  },
  {
    image: '../../../assets/image7.png',
    category: 'القصص',
  },
  {
    image: '../../../assets/image6.png',
    category: 'كتب الادب',
  },
  {
    image: '../../../assets/image8.png',
    category: 'كتب الحاسب',
  },
  {
    image: '../../../assets/image7.png',
    category: 'القصص',
  },
  {
    image: '../../../assets/image6.png',
    category: 'كتب الادب',
  },
];

const books = [
  {
    image: '../../../assets/image3.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 5,
    view: 1500,
  },
  {
    image: '../../../assets/image4.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 1,
    view: 155200,
  },
  {
    image: '../../../assets/image5.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 2,
    view: 7500,
  },
  {
    image: '../../../assets/image3.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 4,
    view: 4000,
  },
  {
    image: '../../../assets/image4.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 1,
    view: 85900,
  },
  {
    image: '../../../assets/image5.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 2,
    view: 753293,
  },
];

const myBooks = [
  {
    image: '../../../assets/image3.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 5,
    view: 1500,
  },
  {
    image: '../../../assets/image4.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 1,
    view: 155200,
  },
  {
    image: '../../../assets/image5.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 2,
    view: 7500,
  },
  {
    image: '../../../assets/image3.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 4,
    view: 4000,
  },
  {
    image: '../../../assets/image4.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 1,
    view: 85900,
  },
  {
    image: '../../../assets/image5.png',
    name: 'الكتاب الاول',
    author: 'اول كتاب ينشر على المنصة',
    rating: 2,
    view: 753293,
  },
];
tabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const tab = link.dataset.tab;
    setActiveTab(tab);
    setActiveInnerTab(tab);
    setActiveInnerTab2(tab);
  });
});

innerTabLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const tab = link.dataset.tab;
    if (link.dataset.tab === 'innerTab2') {
      homeContainer.textContent = '';
      booksCategories.forEach((e) => {
        const bookCategory = bookCategoryCardDOM(e);
        homeContainer.appendChild(bookCategory);
      });
    } else {
      console.log('مكتبتي');
      homeContainer.textContent = '';
      books.forEach((e) => {
        const bookCard = bookCardDOM(e);
        homeContainer.appendChild(bookCard);
      });
    }
    setActiveInnerTab(tab);
  });
});

innerTabLinks2.forEach((link) => {
  link.addEventListener('click', () => {
    const tab = link.dataset.tab;
    setActiveInnerTab2(tab);
  });
});

function setActiveTab(tab) {
  tabLinks.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  tabContents.forEach((content) => {
    if (content.dataset.tab === tab) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

function setActiveInnerTab(tab) {
  innerTabLinks.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  innerTabContents.forEach((content) => {
    if (content.dataset.tab === tab) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

function setActiveInnerTab2(tab) {
  innerTabLinks2.forEach((link) => {
    if (link.dataset.tab === tab) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  innerTabContents2.forEach((content) => {
    console.log(content.dataset.tab, tab);
    if (content.dataset.tab === tab) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

// create dom for books card
function bookCategoryCardDOM(obj) {
  const mainDIV = document.createElement('div');
  mainDIV.classList.add(
    'book__category',
    'max-w-20',
    'shadow-lg',
    'rounded-large',
    'p-4',
    'text-center',
    'text-purple-100',
    'font-semibold'
  );

  const parentDIV = document.createElement('div');
  parentDIV.classList.add('relative', 'text-white', 'p-4');

  const childDIV = document.createElement('div');
  childDIV.classList.add(
    'absolute',
    'z-10',
    'bg-gold',
    'py-2',
    'px-4',
    'm-2',
    'rounded-lg'
  );

  const p = document.createElement('p');
  p.textContent = 'جديد';

  const img = document.createElement('img');
  img.classList.add('rounded-large');
  img.src = obj.image;
  img.alt = obj.category;

  const p2 = document.createElement('p');
  p2.textContent = obj.category;

  childDIV.appendChild(p);
  parentDIV.appendChild(childDIV);
  parentDIV.appendChild(img);
  mainDIV.appendChild(parentDIV);
  mainDIV.appendChild(p2);
  mainDIV.addEventListener('click', () => {
    homeContainer.textContent = '';
    myBooks.forEach((e) => {
      const bookCard = bookCardDOM(e, true);
      homeContainer.appendChild(bookCard);
    });
  });
  return mainDIV;
}

function bookCardDOM(obj, myBook) {
  console.log(myBook);
  const container = document.createElement('div');
  container.classList.add(
    'book__category',
    'max-w-20',
    'shadow-lg',
    'rounded-large',
    'p-4',
    'text-right'
  );

  const relative = document.createElement('div');
  relative.classList.add('relative', 'text-white', 'p-4');

  const absolute = document.createElement('div');
  absolute.classList.add(
    'absolute',
    'z-10',
    'bg-gold',
    'py-2',
    'px-4',
    'm-2',
    'rounded-lg'
  );

  const text = document.createElement('p');
  text.textContent = 'جديد';

  absolute.appendChild(text);

  const image = document.createElement('img');
  image.classList.add('rounded-large');
  image.src = obj.image;
  image.alt = obj.name;

  relative.appendChild(absolute);
  relative.appendChild(image);

  const title = document.createElement('div');
  title.classList.add(
    'p-4',
    'flex',
    'items-center',
    !myBook ? 'justify-between' : 'justify-end',
    'text-purple-300',
    'font-bold',
    'text-xl',
  );
  if (!myBook) {
    const titleImage = document.createElement('img');
    titleImage.classList.add('rounded-large');
    titleImage.src = '../../../assets/heart.png';
    titleImage.alt = 'heart icon';
    title.appendChild(titleImage);
  }

  const titleText = document.createElement('p');
  titleText.textContent = obj.name;

  title.appendChild(titleText);

  const description = document.createElement('p');
  description.classList.add('text-purple-200', 'p-4');
  description.textContent = obj.author;

  const rating = document.createElement('div');
  rating.classList.add(
    'p-4',
    'flex',
    'items-center',
    'justify-between',
    'text-purple-300',
    'font-bold',
    'text-xl'
  );

  const ratingIcons = document.createElement('div');
  ratingIcons.classList.add('flex', 'gap-1');
  const arrImg = [];
  for (let i = 0; i < 5; i++) {
    obj.rating <= i
      ? arrImg.push('../../../assets/eye.png')
      : arrImg.push('../../../assets/heart.png');
  }
  console.log(arrImg);
  arrImg.forEach((e) => {
    const ratingIcon = document.createElement('img');
    ratingIcon.classList.add('w-6', 'h-6');
    ratingIcon.src = e;
    ratingIcon.alt = '';
    ratingIcons.appendChild(ratingIcon);
  });

  const ratingInfo = document.createElement('div');
  ratingInfo.classList.add('flex', 'items-center', 'gap-2');

  const ratingText = document.createElement('p');
  ratingText.classList.add('text-light-gray');
  ratingText.textContent = obj.view;

  const ratingImage = document.createElement('img');
  ratingImage.classList.add('w-6', 'h-6');
  ratingImage.src = '../../../assets/eye.png';
  ratingImage.alt = '';

  ratingInfo.appendChild(ratingText);
  ratingInfo.appendChild(ratingImage);

  rating.appendChild(ratingIcons);
  rating.appendChild(ratingInfo);

  const button = document.createElement('div');
  button.classList.add(
    'flex',
    'justify-center',
    'items-center',
    'my-2',
    'py-2',
    'text-white',
    'bg-gold',
    'rounded-lg'
  );

  const buttonElement = document.createElement('button');
  buttonElement.classList.add('font-bold', 'text-lg', 'select__book');
  buttonElement.textContent = 'اختيار الكتاب في تحدي القراءة';

  button.appendChild(buttonElement);
  button.addEventListener('click', () => {
    console.log('fuuckk')
    modal.classList.remove('hidden');
  })
  container.appendChild(relative);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(rating);
  container.appendChild(button);

  return container;
}


// MODAL
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.closeIcon');
const accept = document.querySelector('.accept');
const reject = document.querySelector('.reject');

closeIcon.addEventListener('click', () => {
  modal.classList.add('hidden');
});

accept.addEventListener('click', () => {
  modal.classList.add('hidden');
});

reject.addEventListener('click', () => {
  modal.classList.add('hidden');
});

