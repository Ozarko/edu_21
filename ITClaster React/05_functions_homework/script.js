  
// 1. Напишіть функцію, що повертає куб числа.
let numberCube = (number) => Math.pow(number, 3);
console.log(numberCube(4));

// Або

let numberToCube = (number) => number * number * number;
console.log(numberToCube(4));

// Або

let cube = (number) => number ** 3;
console.log(cube(4));

// 2. Напишіть функцію, що додає перше число до другого і ділить результат на третє число.

let mathOperation = (firstN, secondN, thirdN) => (firstN + secondN) / thirdN;

// 3. Напишіть функцію, що приймає число від 1 до 7 і повертає відповідну назву дня (українською).

function showDay(dayNumber) {
  switch (dayNumber) {
    case 1:
      return 'Monday';
      break;
    case 2:
      return 'Tuesday';
      break;
    case 3:
      return 'Wednesday';
      break;
    case 4:
      return 'Thursday';
      break;
    case 5:
      return 'Friday';
      break;
    case 6:
      return 'Saturday';
      break;
    case 7:
      return 'Sunday';
      break;
    default:
      console.error('Something went wrong with the day number of the week');
  }
}

console.log(showDay(2));

// 4. Реалізуйте функцію знаходження факторіала

function factorialFunc(number) {
  if (number === 0 || number === 1) {
    return number;
  } else {
    return number * factorialFunc(number - 1);
  }
}

console.log(factorialFunc(10));

// 5.  Напишіть функцію яка отримує години хвилини та секунди і повертає це число в секундах.

let convertInSecond = (hour, minute, second) => {
  second = hour * 3600 + minute * 60 + second;
  return second;
};

console.log(convertInSecond(1, 20, 46));

// 6.    Написати функцію , яка приймає секунди, і перетворює їх у години хвилини та секунди у форматі «гг:хх:сс». якщо кількість годин більша за 23.59.59 - вивести повідомлення "Більше одного дня".
// Тут кажуть можна так

function convSec(sec) {
  // Перевіряємо чи в нас не більше дня в секундах
  if (sec <= 86399) {
    /*запихаємо кількість в секундах в конструктор, використовуємо приведення в формат дати і виводимо тільки потрібне значення.
    Оплески, профіт.
    */
    return new Date(sec * 1000).toISOString().substr(11, 8);
  } else {
    return `it's more than one day`;
  }
}

console.log(convSec(332));

// Або

let ifLessThan10 = (number) => (number < 10 ? '0' + number : number);

function convertSeconds(seconds) {
  if (seconds <= 86399) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60) - hours * 60;
    let sec = seconds % 60;
    return `${ifLessThan10(hours)}:${ifLessThan10(minutes)}:${sec}`;
  } else {
    return `it's more than one day`;
  }
}

console.log(convertSeconds(332));

alert(user ?? 'Бінго'); 