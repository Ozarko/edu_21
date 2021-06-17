const board = document.querySelector('#board')
const changeColorBtn = document.querySelector("#changeColor");
const changeBoardSize = document.querySelector("#changeBoardSize");

let colors = ['264653','e74c3c', '8e44ad', '3498db', 'e67e22', '2ecc71']

let squearsNumber = 600;

const getRandomApiColors = async () => {
  const res = await fetch("https://www.colr.org/json/colors/random/7", {cache: 'no-cache'});
  const colorsFromApi = await res.json()
  const colorsArr = colorsFromApi.colors.map(color => color.hex)
  colorsArr.pop()
  colors = colorsArr;
}
changeBoardSize.addEventListener('submit', (event) => {
  event.preventDefault()
  const input = event.target.children[0]
  squearsNumber = input.value
  input.placeholder = `Current board size ${squearsNumber}`
  renderBoard();
})

changeColorBtn.addEventListener("click", getRandomApiColors); 

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = `#${color}`;
  element.style.boxShadow = `0 0 2px #${color}, 0 0 10px #${color}`
}

const removeColor = (element) => {
    element.style.backgroundColor = "#1d1d1d";
    element.style.boxShadow = `0 0 2px #000`;
}

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length) 
  return colors[index]
}

const renderBoard = () => {
    board.innerHTML = "";
  for (let i = 0; i < squearsNumber; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));
    board.append(square);
  }
}

renderBoard()

