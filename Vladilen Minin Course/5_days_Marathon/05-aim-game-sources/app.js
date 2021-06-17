const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector("#time-list");
const timeEL = document.querySelector("#time");
const board = document.querySelector('#board')

let time = 0;
let score = 0

board.addEventListener('click', event => {
  if(event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createRandomCircle()
  }
})

const decreaseTime = () => {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
};

const startGame = () => {
  screens[1].classList.add("up");
  setInterval(() => decreaseTime(), 1000);
  createRandomCircle();
  setTime(time);
};

const setTime = (value) => {
  timeEL.innerHTML = `00:${value}`;
};

const finishGame = () => {
  timeEL.parentElement.classList.add('hide')
  board.innerHTML = `<h1>Your score : <span class='primary'>${score}</span></h1>`;
  setTimeout(()=> {
    location.reload()
  }, 3000)
}

const colors = ["30C7EC"];

const getRandomColor = async () => {
  const res = await fetch("https://www.colr.org/json/colors/random/7",{cache: 'no-cache'});
  const color = await res.json()
  if (color.colors[0].hex) {
    colors.push(color.colors[0].hex);
  }
}

const createRandomCircle = () => {
  getRandomColor()
  const circle = document.createElement('div')
  const size = getRandomNumber(10, 60)
  const {height, width} = board.getBoundingClientRect()
  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  circle.classList.add("circle");
  circle.style = `background: #${colors[colors.length - 1]}`;
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`
  circle.style.left = `${x}px`
  board.append(circle)
}

const getRandomNumber = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = +event.target.getAttribute("data-time");
    screens[1].classList.add("up");
    startGame();
  }
});
