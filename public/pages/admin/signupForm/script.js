const forGetPassword = document.querySelector('.forGetPassword');
const closeIcon = document.querySelector('.closeIcon');
const modal = document.querySelector('.modal');
const emailAddress =document.querySelector('#email-address');
const password = document.querySelector('#password');
const loginButton = document.querySelector("#loginButton");

forGetPassword.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  modal.classList.add('hidden');
});


loginButton.addEventListener('click',()=>{
  if (emailAddress.value === ''){
    console.log("add a email");
  }else if (password.value === ""){
    console.log("add a passwrd");
  }
})