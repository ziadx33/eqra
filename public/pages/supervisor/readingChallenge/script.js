const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const coloredBut = document.querySelectorAll(".coloredBut");
const contantContainer = document.querySelector("#contantContainer");
const electronicLibrary = document.querySelector("#electronicLibrary");

const tableData = [
  {
    'Operations': {browse: 'تصفح', delete: 'حذف'},
    'Rating': '5/5',
    'Views': '10000',
    'Publisher': 'سيبوية',
    'Language': 'عربي',
    'ISBN': 'ISBN548484845',
    'Format': 'ورقي',
    'Pages': '100',
    'Author': 'حسن وشاح',
    'Section': 'آدب',
    'Title': 'الادب المعاصر'
  },
  {
    'Operations': {browse: 'تصفح', delete: 'حذف'},
    'Rating': '4/5',
    'Views': '5000',
    'Publisher': 'مكتبة جرير',
    'Language': 'عربي',
    'ISBN': 'ISBN123456789',
    'Format': 'الكتروني',
    'Pages': '200',
    'Author': 'علي أحمد',
    'Section': 'علوم',
    'Title': 'الفيزياء للعلماء والمهندسين'
  }
];
const tableDataTab2 = [{
  'date':'12/02/2023',
  'day':'الاربعاء',
  'row':'الخامس',
  'Period':'الاولى',
  'nameTeacher':'حسن ساهر',
},
{
  'date':'12/02/2023',
  'day':'الاربعاء',
  'row':'الخامس',
  'Period':'الاولى',
  'nameTeacher':'حسن ساهر',
}
]

const headerColumnsOne = [
  'العمليات',
  'التقييم',
  'المشاهدات',
  'دار النشر',
  'اللغة',
  'رقم ردمك',
  'توفر النسخة',
  'عدد الصفحات',
  'اسم المؤلف',
  'القسم',
  'العنوان',
];

const headerColumnsTwo = [
  'التاريخ',
  'اليوم',
  'الصف',
  'الحصة',
  'اسم المعلم',
]


window.onload = renderDataTabOne();
electronicLibrary.addEventListener("click",renderDataTabOne);
function renderDataTabOne() {
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableData,headerColumnsOne);
  contantContainer.appendChild(tableContainer);
}


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


const tableContainer = document.querySelector('#table-container');

function generateTable(data,Columns) {
  const tableContainer = document.createElement('div');
  tableContainer.id = 'table-container';

  const container = document.createElement('div');
  container.classList.add('container' );

  const table = document.createElement('table');
  table.classList.add('table-auto','m-auto','my-4');

  const thead = document.createElement('thead');

  const trHead = document.createElement('tr');
  trHead.classList.add('bg-gray-200', 'text-center', 'bg-purple-light', 'text-white');



  Columns.forEach((columnText) => {
    const th = document.createElement('th');
    th.classList.add('px-4', 'py-2');
    th.textContent = columnText;
    trHead.appendChild(th);
  });
  
  const tbody = document.createElement('tbody');

  data.forEach((rowData) => {
    const trBody = document.createElement('tr');
    trBody.classList.add('text-center');

    Object.entries(rowData).forEach(([key, value]) => {
      const td = document.createElement('td');

      td.classList.add('border', 'px-4', 'py-2','whitespace-nowrap',"text-base");
      
      if (key === 'Operations') {
        const browseBtn = document.createElement('button');
        browseBtn.textContent = 'تصفح';
        browseBtn.classList.add('bg-green', 'text-white', 'py-1', 'px-2', 'rounded', 'mx-1');
        browseBtn.addEventListener('click', () => {
          // Handle edit button click event here
          console.log(`Editing row with data: ${JSON.stringify(rowData)}`);
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'حذف';
        deleteBtn.classList.add('bg-red-700', 'text-white', 'py-1', 'px-2', 'rounded', 'mx-1');
        deleteBtn.addEventListener('click', () => {
          // Handle delete button click event here
          console.log(`Deleting row with data: ${JSON.stringify(rowData)}`);
        });
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('flex')
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