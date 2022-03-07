let showBtn = document.querySelector('.show-btn');
let modal = document.querySelector('.modal');
let container = document.querySelector('.container');
showBtn.addEventListener('click', (e) => {
  //   modal.document.style.display = 'initial';
  modal.classList.add('open-model');
  showBtn.classList.add('hide-btn');
  container.classList.add('bgr-color');
  console.log('clicked me');
});
let closeModal = document.querySelector('.close-button');

closeModal.addEventListener('click', (e) => {
  modal.classList.remove('open-model');
  showBtn.classList.remove('hide-btn');
  container.classList.remove('bgr-color');
});

const acceptOffer = document.querySelector('.accept-btn');
let offeraccepted = document.querySelector('.offer-accepted');
acceptOffer.addEventListener('click', (e) => {
  modal.classList.remove('open-model');
  showBtn.classList.remove('hide-btn');
  container.classList.remove('bgr-color');

  //   ** now we can hide the show offer btn with
  showBtn.classList.add('remove-offer');
  offeraccepted.classList.add('show-offer');
  container.style.background = 'blue';
});
