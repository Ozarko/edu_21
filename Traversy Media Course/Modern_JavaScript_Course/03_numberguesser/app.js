// Geme values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI element

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Asign UI min and max

minNum.textContent = min;
maxNum.textContent = max

// Listen for guess

guessBtn.addEventListener('click', () => {
  let guess = parseInt(guessInput.value);
  if(isNaN(guess)|| guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`)
  }
})

function setMessage(msg) {
  message.textContent = msg;
}