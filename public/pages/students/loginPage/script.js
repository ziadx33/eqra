const forGetPassword = document.querySelector('.forGetPassword');
const closeIcon = document.querySelector('.closeIcon');
const modal = document.querySelector('.modal');

forGetPassword.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeIcon.addEventListener('click', () => {
  modal.classList.add('hidden');
});
