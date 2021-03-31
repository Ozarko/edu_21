function goodbay(questionResult) {
  if (questionResult === null) {
    alert(`Мені прикро що ви не дали відповідь на запитання.\n До зустрічі !`);
  }
}

function getCorrectAnswer(question) {
  let questionValue = prompt(question);
  let secondQuestion = `${question} \n Сума повинна бути в коректному числовому форматі`;
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
  if (questionValue !== null) {
    return questionValue;
  }
}

// 1. Проекспериментувати з типами даних.

function jsExperiment() {
  alert(
    `Завдання поексперементувати з типами даних, я вирішив спробувати привести одну змінну до різних типів даних.`
  );
  alert(`Отже розпочнімо у нас є змінна let experiment = null;`);
  let experiment = null;
  experiment = Boolean(experiment);
  alert(
    `Якщо привести її до булевого типу наша змінна дасть нам ${experiment}.`
  );
  experiment = Number(experiment);
  alert(
    `Тепер ми можемо наш false привести до числа experiment = Number(experiment) і отримаємо ${experiment}.`
  );
  experiment += "NaN";
  alert(
    `Нуль з типом Number ми можемо просто додати до стрічки experiment += "NaN"; та привести Number 0 до типу String.`
  );
  experiment = isNaN(experiment);
  alert(
    `Повертаємся до булевих значень за допомогою experiment = isNaN(experiment); та отримаємо ${experiment}.`
  );
  experiment = new Array(experiment, experiment);
  alert(
    `Значення true при приведенні в Number дає 1, але перед цим приведемо нашу змінну до масиву з типом Object за допомогою experiment = new Array(experiment, experiment);`
  );
  experiment = experiment.reduce((acc, item) => (acc += item), 0);
  alert(
    `За допомогою методу reduce додамо наші значення true та отримаємо ${experiment} з типом ${typeof experiment}.`
  );
  experiment = Object(experiment);
  alert(
    `А це зроблено тільки тому що можу :) experiment = Object(experiment); та отримаю нашу змінну з типом ${typeof experiment}.`
  );
  experiment += experiment / -0;
  alert(
    `Також тому що на відміну від математиків можемо ділимо наш обєкт на -0 та отримаємо ${experiment}.`
  );
  experiment = `Avengers: ${String(experiment).slice(1)} War`;
  alert(
    `Ну і на кінець експерементів отримаємо цікаву пасхалку ${experiment} з типом ${typeof experiment}.`
  );
}

// jsExperiment()

// 2. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined.

function сurrencyСonverter() {
  function alertAnswer(userMoney, convertValue, selectedValue) {
    alert(
      `Сума конвертації ваших ${userMoney} гривень в ${selectedValue} складає: ${convertValue}`
    );
  }
  let moneyQuestion = `Введіть кількість гривень яку ви бажаєте конвертувати. `;
  let userUAH = getCorrectAnswer(moneyQuestion);
  let convertUSD = (userUAH / 28.2).toFixed(2);
  let convertEUR = (userUAH / 33.1).toFixed(2);
  let convertBRENT = (userUAH / 1146).toFixed(2);
  let convertGOLD = (userUAH / 1871).toFixed(2);
  if (userUAH !== "" && userUAH !== undefined && userUAH !== null) {
    console.log(userUAH);
    let selectConvert = prompt(`Для вибору конвертації ваших ${userUAH} гривень введіть:
    1.Для конвертації в долар введіть: USD;
    2.Для конвертації в євро введіть: EUR;
    3.Для конвертації в нафту(Brent) введіть: BRENT;
    4.Для конвертації в золото введіть: GOLD;
    5.Для перегляду конвертації по пунктах введіть: ALL;
  `);
    if (
      selectConvert !== null &&
      selectConvert !== "USD" &&
      selectConvert !== "EUR" &&
      selectConvert !== "BRENT" &&
      selectConvert !== "GOLD" &&
      selectConvert !== "ALL"
    ) {
      while (
        selectConvert !== null &&
        selectConvert !== "USD" &&
        selectConvert !== "EUR" &&
        selectConvert !== "BRENT" &&
        selectConvert !== "GOLD" &&
        selectConvert !== "ALL"
      ) {
        console.log(selectConvert);
        selectConvert = prompt(`Для вибору конвертації ваших ${userUAH} гривень введіть:
      1.Для конвертації в долар введіть: USD;
      2.Для конвертації в євро введіть: EUR;
      3.Для конвертації в нафту(Brent) введіть: BRENT;
      4.Для конвертації в золото введіть: GOLD;
      5.Для перегляду конвертації по пунктах введіть: ALL;
    `);
        goodbay(selectConvert);
      }
    }
    if (selectConvert === "USD") {
      alertAnswer(userUAH, convertUSD, selectConvert);
    } else if (selectConvert === "EUR") {
      alertAnswer(userUAH, convertEUR);
    } else if (selectConvert === "BRENT") {
      alertAnswer(userUAH, convertBRENT, selectConvert);
    } else if (selectConvert === "GOLD") {
      alertAnswer(userUAH, convertGOLD, selectConvert);
    } else if (selectConvert === "ALL") {
      alert(`Сума конвертації ваших ${userUAH} гривень складає:
        ${convertUSD} - доларів.
        ${convertEUR} - євро.
        ${convertBRENT} - барелів нафти(BRENT).
        ${convertGOLD} - грам золота. 
      Дякуємо що скористались нашим сервісом :)
      `);
    }
  }
}

// сurrencyСonverter();

// 3. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок!

function order() {
  let orderQuestion = `Введіть суму вашого замовлення в гривнях !`;
  let userOrder = getCorrectAnswer(orderQuestion);
  let discount1 = userOrder - 0.01 * userOrder;
  let discount5 = userOrder - 0.05 * userOrder;
  let discount10 = userOrder - 0.1 * userOrder;
  if (userOrder !== null) {
    if (userOrder <= 500) {
      alert(`З врахуванням знижки в 1% з Вас ${discount1} гривень !`);
    } else if (userOrder > 501 && order <= 1000) {
      alert(`З врахуванням знижки в 5% з Вас ${discount5} гривень!`);
    } else if (userOrder > 1000) {
      alert(
        `З врахуванням знижки в 10% з Вас ${discount10} гривень та подарунковий сертифікат на 200 гривень!`
      );
    }
  }
}

// order();

// 4. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал.

function jsWTFGame() {
  function correctAnsswer(correctValue, question) {
    let userAnswer = +getCorrectAnswer(question);
    goodbay(userAnswer);
    if (userAnswer > 4 && userAnswer !== null) {
      while (userAnswer > 4 && userAnswer !== null) {
        userAnswer = +getCorrectAnswer(question);
        goodbay(userAnswer);
      }
    }
    if (userAnswer === correctValue && userAnswer !== null) {
      userPoint++;
      alert(`Ви дали правильну відповідь.`);
    } else if(userAnswer !== null && !isNaN(userAnswer)) {
      alert(`Відповідь не правильна.`);
    }
  }


  alert(`
        Ласкаво просимо до гри Вотафачний ява скрипт !
        Кожна ваша правильна відповідь це один бал!
        Для відповіді на запитання введіть число в текстове поле.
        `)
  let maxUserPointMass = `Ви справжній знавець JavaScript! `
  let userPoint = 0;
  let firstQuestion = `Запитання №1.
  let arr = [10, 9, 2, 1].sort():
  Яке значення масиву arr ?
  1. [1, 2, 9, 10];
  2. Error;
  3. [10, 1, 2, 9];
  4. [1, 10, 2, 9];
  `;

  correctAnsswer(4, firstQuestion);

  let secondQuestion = `Запитання №2.
    let question = +true;
    Яке значення заховане в question:
    
    1.false:
    2. 1;
    3. NaN;
    4. true:
  `;
  correctAnsswer(2, secondQuestion);
  let thirdQuestion = `Запитання №3.
    let firstBoolean = Boolean(1 < 2 < 3);
    let secondBoolean = Boolean(3 > 2 > 1);
    Які значення знаходяться в змінних:
    1. true true.
    2. false true.
    3. true false.
    4. false false.
  `;
  correctAnsswer(3, thirdQuestion);

  let fourthQuestion = ` Запитання №4.
    let number = 9007199254740991 + 1 === 9007199254740991 + 2;
    Що знаходиться в змінні number:
    1. true.
    2. false.
    3. error.
    4. NaN.
  `;
  correctAnsswer(1, fourthQuestion);
  let fifthQuestion = `Запитання №5.
    const clothes = ['jacket', 't-shirt'];
    clothes.length = 0;
    console.log(clothes[0]);
    Яке значення нам буде виведене в консоль:
    1. 'jacket'.
    2. "0".
    3. undefined.
    4. error.
  `;
  correctAnsswer(3, fifthQuestion);
  if(userPoint === 5) {
    userPoint++;
  }
  alert(`Ви відповіли правильно на ${userPoint} запитань. ${userPoint === 6 ? maxUserPointMass : ''}`)
}

jsWTFGame();

// 5. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 

function sameNumber() {
  let numberQuestion = `Введіть будь яке число !`;
  let userNumber = getCorrectAnswer(numberQuestion);
  if (userNumber !== null) {
    userNumberArr = userNumber.split('');
    let sameUserNumberArr = userNumberArr.filter((item, ind, ar) => ar.indexOf(item) !== ind);
    console.log(sameUserNumberArr.length);
    if (sameUserNumberArr.length > 0) {
      alert(
        `У вашому числі ${userNumber}, повторюються більше одного разу ${sameUserNumberArr.length} числа.`
      );
    }else {
      alert(`У вашому числі ${userNumber}, відсутні повторення !`)
    }
  }
}

// sameNumber();