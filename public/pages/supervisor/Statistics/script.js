const navBarShow = document.querySelector(".navBarShow");
const burgerMune = document.querySelector(".burgerMune");

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


const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['a', 's', 'd'],
    datasets: [{
        label: 'الكتب المرفوعة بتصنيفاتها',
        data: [5, 4, 3],
        backgroundColor: [
            '#6200EE',
            '#03DAC5',
            '#BB86FC'
        ],
        borderColor: [
          '#6200EE',
          '#03DAC5',
          '#BB86FC'
        ],
        borderWidth: 1
    }]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'none',
        },
        title: {
            display: true,
        }
    }
};

const myPieChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});

const storeStatsCtx = document.getElementById('store-stats').getContext('2d');

const storeStatsData = {
    labels: ['a', 's', 'd'],
    datasets: [{
        label: 'احصائيات المتجر',
        data: [5, 4, 3],
        backgroundColor: [
            '#6200EE',
            '#03DAC5',
            '#BB86FC'
        ],
        borderColor: [
          '#6200EE',
          '#03DAC5',
          '#BB86FC'
        ],
        borderWidth: 1
    }]
};

const storeStatsChart = new Chart(storeStatsCtx, {
    type: 'pie',
    data: storeStatsData,
    options: options
});
const storesOnPlatformCtx = document.getElementById('stores-on-platform').getContext('2d');

const storesOnPlatformData = {
    labels: ['a', 's', 'd'],
    datasets: [{
        label: 'عدد المتاجر في المنصة',
        data: [5, 4, 3],
        backgroundColor: [
            '#6200EE',
            '#03DAC5',
            '#BB86FC'
        ],
        borderColor: [
          '#6200EE',
          '#03DAC5',
          '#BB86FC'
        ],
        borderWidth: 1
    }]
};

const storesOnPlatformChart = new Chart(storesOnPlatformCtx, {
    type: 'pie',
    data: storesOnPlatformData,
    options: options
});

// bar chart

const platformInteractionsCTX = document.getElementById('platform__Interactions').getContext('2d');
const teacherData = [4, 2, 2, 3, 4, 2];
const studentData = [2, 4, 3, 2, 1, 3];
const platformInteractions = new Chart(platformInteractionsCTX, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [
    {
      label: 'معلمين',
      data: teacherData,
      backgroundColor: '#03DAC5',
      borderColor: '#03DAC5',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'end'

    },
    {
      label: 'طــلاب',
      data: studentData,
      backgroundColor: '#6200EE',
      borderColor: '#6200EE',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'start'
    }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 50,
          padding: 5 ,
          boxWidth: 20,
          boxHeight: 20,
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  }
});

const requestedBorrowBooksCTX = document.getElementById('requested_borrow_books').getContext('2d');
const PrimaryRequestedData = [4, 2, 2, 3, 4, 2];
const preparatoryRequestedData = [2, 4, 3, 2, 1, 3];
const requestedBorrowBooks = new Chart(requestedBorrowBooksCTX, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [
    {
      label: 'الاعدادية',
      data: PrimaryRequestedData,
      backgroundColor: '#BB86FC',
      borderColor: '#BB86FC',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'end'

    },
    {
      label: 'الابتدائية',
      data: preparatoryRequestedData,
      backgroundColor: '#6200EE',
      borderColor: '#6200EE',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'start'
    }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 50,
          padding: 5 ,
          boxWidth: 20,
          boxHeight: 20,
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  }
});


const visitStatsCTX = document.getElementById('visit_stats').getContext('2d');
const PrimaryVisitsData = [4, 2, 2, 3, 4, 2];
const preparatoryVisitsData = [2, 4, 3, 2, 1, 3];
const visitStats= new Chart(visitStatsCTX, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [
    {
      label: 'الاعدادية',
      data: PrimaryVisitsData,
      backgroundColor: '#BB86FC',
      borderColor: '#BB86FC',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'end'

    },
    {
      label: 'الابتدائية',
      data: preparatoryVisitsData,
      backgroundColor: '#6200EE',
      borderColor: '#6200EE',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'start'
    }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 50,
          padding: 5 ,
          boxWidth: 20,
          boxHeight: 20,
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  }
});


const studentVisitsCTX = document.getElementById('student_visits').getContext('2d');
const PrimaryStudentVisitsData = [4, 2, 2, 3, 4, 2];
const preparatoryStudentVisitsData = [2, 4, 3, 2, 1, 3];
const studentVisits= new Chart(studentVisitsCTX, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [
    {
      label: 'الاعدادية',
      data: PrimaryStudentVisitsData,
      backgroundColor: '#5F2263',
      borderColor: '#5F2263',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'end'

    },
    {
      label: 'الابتدائية',
      data: preparatoryStudentVisitsData,
      backgroundColor: '#6200EE',
      borderColor: '#6200EE',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'start'
    }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 50,
          padding: 5 ,
          boxWidth: 20,
          boxHeight: 20,
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  }
});

const schoolsOnPlatformCTX = document.getElementById('schools_on_platform').getContext('2d');
const PrimarySchoolsOnPlatformData = [4, 2, 2, 3, 4, 2];
const preparatorySchoolsOnPlatformData = [2, 4, 3, 2, 1, 3];
const schoolsOnPlatform= new Chart(schoolsOnPlatformCTX, {
  type: 'bar',
  data: {
    labels: ['', '', '', '', ''],
    datasets: [
    {
      label: 'الاعدادية',
      data: PrimarySchoolsOnPlatformData,
      backgroundColor: '#5F2263',
      borderColor: '#5F2263',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'end'

    },
    {
      label: 'الابتدائية',
      data: preparatorySchoolsOnPlatformData,
      backgroundColor: '#6200EE',
      borderColor: '#6200EE',
      borderWidth: 1,
      barThickness: 15,
      borderRadius: 20,
      anchor: 'start'
    }
  ]
  },
  options: {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          fontSize: 50,
          padding: 5 ,
          boxWidth: 20,
          boxHeight: 20,
        }
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  }
});
