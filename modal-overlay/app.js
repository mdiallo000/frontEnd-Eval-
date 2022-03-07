let showBtn = document.querySelector('.show-btn');
let modal = document.querySelector('.modal');
let container = document.querySelector('.container');
showBtn.addEventListener('click', (e) => {
  //   modal.document.style.display = 'initial';
  modal.classList.add('open-model');
  console.log('clicked me');
});
let closeModal = document.querySelector('.close-button');

closeModal.addEventListener('click', (e) => {
  modal.classList.remove('open-model');
});
