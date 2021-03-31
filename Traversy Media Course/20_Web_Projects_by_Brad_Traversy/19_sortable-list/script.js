const draggableList = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
  'Jeff Bezos',
  'Bernard Arnault & Family',
  'Bill Gates',
  'Elon Musk',
  'Mark Zuckerberg',
  'Warren Buffet',
  'Larry Page',
  'Larry Ellison',
  'Mukesh Ambani',
  'Sergey Brin',
];

// Store listItems
const listItems = [];

let dragStartIndex;

createList();

// insert list items into document

function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li');
      listItem.setAttribute('data-index', index);
      listItem.innerHTML = `
        <span class="number">${index + 1}</span>
        <div class="draggable" draggable="true">
          <p class="person-name">${person}</p>
          <i class="fas fa-grip-lines"></i>
        </div>
      `;
      listItems.push(listItem);
      draggableList.appendChild(listItem);
    });
  addEventListeners();
}

function dragEnter() {
  this.classList.add('over');
}

function dragStart() {
  dragStartIndex = +this.closest('li').getAttribute('data-index');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute('data-index');
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove('over');
}

function swapItems(fromInd, toInd) {
  const itemOne = listItems[fromInd].querySelector('.draggable');
  const secondItem = listItems[toInd].querySelector('.draggable');

  listItems[fromInd].appendChild(secondItem);
  listItems[toInd].appendChild(itemOne);
}

function checkOreder() {
  listItems.forEach((item, ind) => {
    const personName = item.querySelector('.draggable').innerText.trim();
    if (personName !== richestPeople[ind]) {
      item.classList.add('wrong');
    } else {
      item.classList.remove('wrong');
      item.classList.add('right');
    }
  });
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable');
  const dragListItems = document.querySelectorAll('.draggable-list li');

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart);
  });
  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
}

check.addEventListener('click', checkOreder);
