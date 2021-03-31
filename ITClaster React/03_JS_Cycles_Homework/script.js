// 1.  Знайдіть суму всіх цифр від 1 до 100.

let numberSum = 0;
for (i = 1; i <= 100; i++) {
  numberSum += i;
}

const numSum = (100 * (100 + 1)) / 2;

// 2.  Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.

let arr = [1, 2, 3, 4, 5];

for (let number of arr) {
  document.write(`${number} <br>`);
}

// Або

for (let i = 0; i < arr.length; i++) {
  document.write(`${arr[i]} <br>`);
}

// Або, але це вже forEach

arr.forEach((number) => document.write(`${number} <br>`));

// 3. Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення

let secondArr = [-1, 22, 3, 44, 5];
let maxNum = 0;

for (i = 0; i < secondArr.length; i++) {
  if (maxNum < secondArr[i]) {
    maxNum = secondArr[i];
    break;
  }
}

document.write(maxNum);

// Або

maxNum = secondArr.reduce((acc, item) => (acc < item ? (acc = item) : acc));
document.write(maxNum);

// Або

maxNum = Math.max(...secondArr);
document.write(maxNum);

// 4. Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.

function minMaxZeroNumber() {
  alert(`Завдання №4.
  Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів.
  Просимо :)
  `);
  let userNumber;
  let userNumberArr = [];
  let iterationNumber = 1;
  do {
    userNumber = prompt(`Введіть будь яке додатнє, відємне або 0 число !`);
    if (userNumber === null) {
      alert("До зустрічі !");
    } else if (userNumber === "") {
      alert("Будь ласка введіть будь яке додатнє, відємне або 0 число !");
    } else if (isNaN(userNumber)) {
      alert(`Дані повинні бути введені в числовому форматі!  `);
    } else {
      if (iterationNumber !== 8) {
        alert(
          `Ваше ${iterationNumber} число отримано. Введіть ${
            iterationNumber + 1
          } порядкове число`
        );
      } else {
        alert(`Ваше ${iterationNumber} порядкове число отримано.`);
      }
    }
    if (userNumber !== null && !isNaN(userNumber)) {
      userNumberArr.push(+userNumber);
      iterationNumber++;
    }
  } while (
    (userNumber !== null || isNaN(userNumber)) &&
    userNumberArr.length !== 8
  );

  // А далі я б робив так

  // let positive = userNumberArr.filter(num => num > 0)
  // let negative = userNumberArr.filter(num => num < 0)
  // let zero = userNumberArr.filter(num => num === 0)

  // Але оскільки в нас тут про if for цикли.

  let positive = 0;
  let negative = 0;
  let zero = 0;

  if (userNumberArr.length !== 0) {
    for (let i = 0; i < userNumberArr.length; i++) {
      if (userNumberArr[i] > 0) {
        positive++;
      } else if (userNumberArr[i] < 0) {
        negative++;
      } else {
        zero++;
      }
    }
    alert(`У вашому масиві чисел ${userNumberArr} 
      були присутні ${positive} додатніх чисел,
       ${negative} відємних та ${zero} нулів`);
  }
}
// minMaxZeroNumber()

// 5. Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

for (let i = 1; i <= 9; i++) {
  document.write(`${i} * 8 = ${i * 8}.  <br>`);
}

// 6. Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let oneMoreArr = [2, 5, 9, 15, 0, 4];

for (n = 0; n < oneMoreArr.length; n++) {
  if (oneMoreArr[n] > 3 && oneMoreArr[n] < 10)
    document.write(oneMoreArr[n] + "<br>");
}
// Або так :)
let correctArr = oneMoreArr.forEach((number) =>
  number > 3 && number < 10 ? document.write(`${number} <br>`) : false
);

// 7. Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?

function calc() {
  function goodbye(value) {
    if (!value) {
      alert(`До зустрічі`);
    }
  }

  function getValueFromUser(isNumberQuestion, sequence) {
    let userAnswer = null;
    if (isNumberQuestion) {
      do {
        userAnswer = prompt(
          `Введіть будь ласка ${sequence} число для математичної операції !`
        );
      } while ((userAnswer !== null && isNaN(userAnswer)) || userAnswer === "");
      goodbye(userAnswer);
    } else if (!isNumberQuestion) {
      do {
        userAnswer = prompt(`Введіть будь ласка значення`);
      } while (
        (userAnswer !== null &&
          userAnswer !== "*" &&
          userAnswer !== "/" &&
          userAnswer !== "+" &&
          userAnswer !== "-") ||
        userAnswer === "" ||
        userAnswer.length !== 1
      );
      goodbye(userAnswer);
    }
    return userAnswer;
  }

  let firstNumber = getValueFromUser(true, 1);
  let secondNumber;
  let sign;
  let result;
  if (firstNumber || firstNumber === 0) {
    secondNumber = getValueFromUser(true, 2);
    if (secondNumber || secondNumber === 0) {
      sign = getValueFromUser(false);
    }
  }

  if (sign === "+") {
    result = parseInt(firstNumber) + parseInt(secondNumber);
  } else if (sign === "-") {
    result = parseInt(firstNumber) - parseInt(secondNumber);
  } else if (sign === "*") {
    result = parseInt(firstNumber) * parseInt(secondNumber);
  } else {
    result = parseInt(firstNumber) / parseInt(secondNumber);
  }
  if(result === Infinity) {
    result = undefined;
  }
  if (result || result === 0) {
    let resultAndTryAgain = confirm(`
    Результат вашої операції
    ${firstNumber} ${sign} ${secondNumber} = ${result}

    Спробувати ще ?
    `);
    if (resultAndTryAgain) {
      calc();
    } else {
      goodbye(null);
    }
  } else if(result === undefined){
    alert(`На нуль ділити не можна :)`);
  }
}

calc();