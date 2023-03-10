const navBarShow = document.querySelector('.navBarShow');
const burgerMune =document.querySelector('.burgerMune');
const coloredBut = document.querySelectorAll('.coloredBut');

coloredBut.forEach(tab => {
  tab.addEventListener('click', () => {
    // remove active class from all tabs
    coloredBut.forEach(tab => tab.classList.remove('active'));
    
    // add active class to the clicked tab
    tab.classList.add('active');
  });
});
burgerMune.addEventListener('click',()=>{
  console.log("data");

  if (navBarShow.classList.contains("hidden")) {
    navBarShow.classList.remove("hidden");
  } else {
    navBarShow.classList.add("hidden");
  }
})


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


