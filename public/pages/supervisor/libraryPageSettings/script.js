const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");
const coloredBut = document.querySelectorAll(".coloredBut");
const contantContainer = document.querySelector("#contantContainer");
const electronicLibrary = document.querySelector("#electronicLibrary");
const uploadFiles = document.querySelector("#uploadFiles");
const closeIcon = document.querySelector(".closeIcon");

const tableData = [
  {
    'bookNumber': '6',
    'Section': 'آدب',
  },
  {
    'bookNumber': '5',
    'Section': 'علوم',
  },
  {
    'bookNumber': '2',
    'Section': 'علوم',
  },
  {
    'bookNumber': '7',
    'Section': 'علوم',
  },
  {
    'bookNumber': '10',
    'Section': 'علوم',
  }
];

const headerColumnsOne = [
  "عدد الكتب",
  'اقسام الكتاب',
];


window.onload = renderDataTabOne();
electronicLibrary.addEventListener("click",renderDataTabOne);
function renderDataTabOne() {
  while (contantContainer.firstChild) {
    contantContainer.removeChild(contantContainer.firstChild);
  }
  const tableContainer = generateTable(tableData,headerColumnsOne);
  contantContainer.appendChild(tableContainer);
}

closeIcon.addEventListener("click", () => {
  navBarShow.classList.add("hidden");
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
    th.classList.add('px-8', 'py-2','md:px-14','lg:px-14',);
    th.textContent = columnText;
    trHead.appendChild(th);
  });
  
  const tbody = document.createElement('tbody');

  data.forEach((rowData) => {
    const trBody = document.createElement('tr');
    trBody.classList.add('text-center');

    Object.entries(rowData).forEach(([key, value]) => {
      const td = document.createElement('td');

      td.classList.add('border', 'px-0', 'py-2','whitespace-nowrap',"text-base");
      
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
const uploadForm  = document.querySelector("#uploadForm");
const canvas = document.getElementById('pdf-canvas');
const pdfjsLib = window['pdfjs-dist/build/pdf'];
const removeBut = document.querySelector("#removeBut");

uploadFiles.addEventListener('change', () => {
  const selectedFile = uploadFiles.files[0];
  if (selectedFile) {
    uploadForm.classList.add('hidden');
    canvas.classList.remove('hidden');
    removeBut.classList.remove('hidden');
    const fileReader = new FileReader();
    fileReader.addEventListener('load', async () => {
      const pdfData = new Uint8Array(fileReader.result);
      const pdfDoc = await pdfjsLib.getDocument({ data: pdfData }).promise;
      const page = await pdfDoc.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      };
      await page.render(renderContext).promise;
    });

    fileReader.readAsArrayBuffer(selectedFile);
  }else{
    uploadForm.classList.remove('hidden');
    canvas.classList.add('hidden');
  }
});


removeBut.addEventListener("click",()=>{
  console.log(uploadFiles.value);
  uploadFiles.value = "";
  uploadForm.classList.remove('hidden');
  canvas.classList.add('hidden');
  canvas.textContent="";
  console.log(uploadFiles.value);
})
  // Get the bell button and notification dropdown elements
  const bellButton = document.getElementById('bell-button');
  const notificationDropdown = document.getElementById('notification-dropdown');

  // Add a click event listener to the bell button
  bellButton.addEventListener('click', () => {
    // Toggle the "hidden" class on the notification dropdown
    notificationDropdown.classList.toggle('hidden');
  });
