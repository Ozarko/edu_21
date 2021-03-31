import "./styles.css";

const counter = document.getElementById("counter");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const asyncBtn = document.getElementById("async");
const theme = document.getElementById("theme");

let state = 0;

function render() {
  counter.textContent = state.toString();
}

add.addEventListener("click", () => {
  state++;
  render();
});

sub.addEventListener("click", () => {
  state--;
  render();
});

asyncBtn.addEventListener("click", () => {
  setTimeout(() => {
    state++;
    render();
  }, 1000);
});

theme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

render();
