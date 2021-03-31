// Ozarko

let cards = document.getElementById('cards');
let switchBtn = document.getElementById('switch');
switchBtn.addEventListener('click', () => {
  cards.classList.toggle('glass');
  switchBtn.firstElementChild.classList.toggle('move');
  switchBtn.classList.toggle('move')
});
