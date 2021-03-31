/*Можливо воно і не надто красиво, але працює :)
Взагалі в завданні не вказано в якому форматі потрібно отримувати дані від
користувача і набагато простіше було б працювати з дом нодами маючи вбудовані валідатори,
методи вищого порядку і не маючи глюки і логічні структири поведінки промпта. 
Але оскільки з ним я ніколи не працював стало цікаво чи зможу побудувати правильно 
систему зв'язку з користувачем при цьому зберігаючи функціонал кнопки Cencel 
(можна просто не давати вийти з циклу користувачу не отримавши потрібні дані),
та даючи підказки якщо з першого разу користувач ввів дані некоректно.
Нащо я собі ускладнюю так життя я не знаю :)
*/

// Допоміжні функції

function goodbay(questionResult) {
  if (questionResult === null) {
    alert(`Мені прикро що ви не дали відповідь на запитання.\n До зустрічі !`);
  }
}

function validQuestion(questionValue, question, secondQuestion) {
  goodbay(questionValue);
  if (questionValue === "" || isNaN(questionValue) || questionValue < 0) {
    while (questionValue === "" || isNaN(questionValue) || questionValue < 0) {
      if (questionValue === "") {
        questionValue = prompt(question);
        goodbay(questionValue);
      } else if (isNaN(questionValue)) {
        questionValue = prompt(secondQuestion);
        goodbay(questionValue);
      } else if (questionValue < 0) {
        questionValue = prompt(secondQuestion);
        goodbay(questionValue);
      }
    }
  }
  return questionValue;
}

// 1. Запитайте у юзера скільки йому років: «Привіт мені - “” років!».

function howOldAreUser() {
  alert(
    `Текст завдання №1 \n Запитайте у юзера скільки йому років: «Привіт мені - “” років!».`
  );
  const howOldUserQuestion = "Привіт, скільки вам років ?";
  const clarifyingQuestion = "Введіть будь ласка ваш вік в числовому форматі!";
  let userAge = prompt(howOldUserQuestion);
  const userAgeRes = validQuestion(
    userAge,
    howOldUserQuestion,
    clarifyingQuestion
  );
  if (userAgeRes !== null) {
    alert(`Вам ${userAgeRes} з чим ми вас і вітаємо ! :)`);
  }
}

// howOldAreUser();

// 2. Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.

function whenUserBorn() {
  alert(
    `Текст завдання №2 \n Запитайтесь якого року народження юзер, теперішній рік візьмемо за константу. Виведемо скільки йому років.`
  );
  const date = new Date();
  const currentYear = date.getFullYear();
  const whenUserBornQuestin = "Введіть рік вашого народження.";
  const clarifyingQuestion =
    "Введіть рік вашого народження в коректному числовому форматі!";
  let bornYear = prompt(whenUserBornQuestin);
  let userBornYear = validQuestion(
    bornYear,
    whenUserBornQuestin,
    clarifyingQuestion
  );
  if (userBornYear.length !== 4 || userBornYear > currentYear) {
    while (userBornYear.length !== 4 || userBornYear > currentYear) {
      userBornYear = prompt(
        `Некоректно введений рік народження!\n Введіть рік вашого народження! `
      );
      goodbay(userBornYear);
    }
  }
  if (userBornYear !== null) {
    const userAge = currentYear - userBornYear;
    alert(
      `Раді повідомити що за результатами наших підрахунків вам ${userAge} повних років! Дякуємо що скористались нашим сервісом :) `
    );
  }
}

// whenUserBorn();

// 3. Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.

function rectangleArea() {
  alert(
    `Текст завдання №3 \n Запитайтесь у юзера довжини сторін прямокутника та виведіть його периметр.`
  );
  const rectangleSideAQuestion = "Введіть першу сторону прямокутника.";
  const clarifyingSideAQuestion =
    "Введіть першу сторону прямокутника в коректному числовому форматі!";
  let sideA = prompt(rectangleSideAQuestion);
  let rectangleSideA = validQuestion(
    sideA,
    rectangleSideAQuestion,
    clarifyingSideAQuestion
  );

  const rectangleSideBQuestion = "Введіть другу сторону прямокутника";
  const clarifyingSideBQuestion =
    "Введіть другу сторону прямокутника в коректному числовому форматі";
  if (rectangleSideA !== null && rectangleSideA !== undefined) {
    let sideB = prompt(rectangleSideBQuestion);
    let rectangleSideB = validQuestion(
      sideB,
      rectangleSideBQuestion,
      clarifyingSideBQuestion
    );
    if (sideA !== null && sideB !== null) {
      let perm = 2 * (+rectangleSideA + +rectangleSideB);
      alert(`Площа такого прямокутника складає ${perm}.`);
    }
  }
}

// rectangleArea();

// 4. Запитайтесь в юзера радіус кола та виведіть його площу.(число пі)

function findRadius() {
  alert(
    `Текст завдання №4 \n Запитайтесь в юзера радіус кола та виведіть його площу.(число пі).`
  );
  const radiusQuestion = "Введіть радіус кола.";
  const clarifyingQuestion =
    "Введіть радіус кола в коректному числовому форматі !";
  let radius = prompt(radiusQuestion);
  let userRadius = validQuestion(radius, radiusQuestion, clarifyingQuestion);
  const PI = 3.14;
  let userCircleArea = (PI * ((+userRadius) ** 2)).toFixed(2);
  if (userRadius !== null) {
    alert(
      `Площа кола з вказаним радіусом ${userRadius} складає ${userCircleArea}.`
    );
  }
}

// findRadius();

// 5. Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.

function roadDistance() {
  alert(
    `Текст завдання №5 \n  Водій їде з середньою швидкістю 50 км в годину. Запитайтесь у нього скільки ще йому необхідно часу їхати, та виведіть відстань.`
  );
  const roadTimeQuestion = `Введіть скільки скільки годин нам залишилось їхати`;
  const clarifyingQuestion = `Введіть кількість годин що залишилось вам їхати в коректному числовому форматі!`;
  const speed = 50;
  let roadDistance = prompt(roadTimeQuestion);
  let userRoadDistance = validQuestion(
    roadDistance,
    roadTimeQuestion,
    clarifyingQuestion
  );
  if (userRoadDistance !== null && userRoadDistance !== undefined) {
    let tripDistance = +userRoadDistance * speed;
    alert(
      `При середній швидкості в 50 кілометрів за годину вам залишилось їхати ${tripDistance} кілометрів.`
    );
  }
}

// roadDistance();

// 6. Реалізуємо конвертер кілометрів в милі і навпаки =)

function mKConverter() {
  alert(
    `Текст завдання №6 \n  Реалізуємо конвертер кілометрів в милі і навпаки =)`
  );
  function isFirstValue(select) {
    if (select === "км") {
      return "Кілометрів";
    } else {
      return "Милі";
    }
  }

  function isSecondValue(select) {
    if (select === "км") {
      return "Милі";
    } else {
      return "Кілометри";
    }
  }

  const convert = 0.62;

  let select = prompt(
    `Вітаємо в конвертері кілометрів милі та навпаки \n Якщо ви бажаєте перевести кілометри в милі напишіть "км" якщо милі в кілометри введіть "м".`
  );

  if (select !== null && select !== "км" && select !== "м") {
    while (select !== null && select !== "км" && select !== "м") {
      select = prompt(
        `Вітаємо в конвертері кілометрів милі та навпаки \n Якщо ви бажаєте перевести кілометри в милі напишіть "км" якщо милі в кілометри введіть "м".`
      );
      goodbay(select);
    }
  }
  let firstValueQuestion = `Введть кількість ${isFirstValue(
    select
  )} які вибажаєте конвертувати в ${isSecondValue(select)}.`;
  let clarifyingQuestion =
    firstValueQuestion + `\n Введіть дані в коректному числовому форматі !`;
  goodbay(select);
  if (select === "км") {
    alert("Вітаємо в конвертері кілометрів в милі");
    let kmValue = prompt(firstValueQuestion);
    let userKmValue = validQuestion(
      kmValue,
      firstValueQuestion,
      clarifyingQuestion
    );
    let convertValue = (+userKmValue * convert).toFixed(2);
    alert(
      `Ваш результат конвертації ${userKmValue} кілометрів склав ${convertValue} милі.`
    );
  } else if (select === "м") {
    alert("Вітаємо в конвертері миль в кілометри");
    let mileValu = prompt(firstValueQuestion);
    let userMileValue = validQuestion(
      mileValu,
      firstValueQuestion,
      clarifyingQuestion
    );
    let convertValue = (+userMileValue / convert).toFixed(2);
    if (userMileValue !== null) {
      alert(
        `Ваш результат конвертації ${userMileValue} миль склав ${convertValue} кілометрів.`
      );
    }
  }
}

// mKConverter();

// 7. Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.

function howMuchLeft() {
  alert(
    `Текст завдання №7 \n  Юзер вводить скільки коштів на його картці та ціну одного літра бензину. Виводимо скільки бензину він може купити та скільки грошей у нього залишиться.`
  );
  let moneyQuestion = `Введіть суму грошей на вашій карті.`;
  let clarifyingQuestion =
    moneyQuestion + `\n Сума повинна бути в коректному числовому форматі.`;
  let money = prompt(moneyQuestion);
  let userMoney = validQuestion(money, moneyQuestion, clarifyingQuestion);
  if (userMoney !== null) {
    let priceQuestion = `Введіть вартість літри бензину.`;
    let clarifyingQuestion =
      priceQuestion + `\n Сума повинна бути в коректному числовому форматі.`;
    let gasolinePrice = prompt(priceQuestion);
    let userGasolinePrice = validQuestion(
      gasolinePrice,
      priceQuestion,
      clarifyingQuestion
    );
    if (userGasolinePrice !== null) {
      let gasolineAmountQuestion = `Введіть будь ласка кількість бензину яку ви бажаєте придбати.`;
      let clarifyingQuestion =
        gasolineAmountQuestion +
        `\n Сума повинна бути в коректному числовому форматі`;
      let gasolineAmount = prompt(gasolineAmountQuestion);
      let userGasolineAmount = validQuestion(
        gasolineAmount,
        gasolineAmountQuestion,
        clarifyingQuestion
      );
      let wantToBuyGasPrice = userGasolinePrice * userGasolineAmount;
      let userBalance = userMoney - wantToBuyGasPrice;
      if (userBalance < 0) {
        let canBuyGas = Math.round(userMoney / userGasolinePrice);
        alert(
          `Нажаль на вашому рахунку недостатньо коштів для цієї операції.\n Максимальна кількість бензину яку ви можете придбати складає ${canBuyGas} літрів.`
        );
        howMuchLeft();
      } else {
        alert(
          `Ви можете придбати ${userGasolineAmount} літрів бензину, за ціною ${userGasolinePrice}, залишок по вашій карті складатиме ${userBalance}.`
        );
      }
    }
  }
}

// howMuchLeft();

const buttons = document.querySelectorAll(".btn");
const taskFunction = [
  howOldAreUser,
  whenUserBorn,
  rectangleArea,
  findRadius,
  roadDistance,
  mKConverter,
  howMuchLeft,
];

buttons.forEach((button, index) => {
  button.addEventListener("click", taskFunction[index]);
});
