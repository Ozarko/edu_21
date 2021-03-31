// 1. Створити обєкт який описує тварину (назву, вагу, вік, середню швидкість), і наступні функції для роботи з ним:

// Функція яка виведе всю інформацію про тварину.

// Функція яка виведе за скільки тварина зможе подолати 1000 км. (врахуйте що тварина може рухатись не більше 12 годин у день).

// Функція яка зможе змінити назву тварини на більш детальну.

const animal = {
  name: 'Barry',
  genus: 'Acinonyx',
  weight: 72,
  age: 6,
  speed: 120,
};

const animalInfo = (obj) => {
  for (let item in obj) {
    console.log(`${item} : ${obj[item]}`);
  }
};

animalInfo(animal);

function animalDistanceTime(distance, obj) {
  let day = 0;
  let hour = distance / obj.speed;
  if (hour > 12) {
    day = Math.floor(hour / 12);
  }
  let distanceTime = Math.floor(hour - day * 12);
  return `This ${animal.genus} called ${
    animal.name
  } will be able to run ${distance} km distance for ${
    day != 0 ? `${day} days and ` : ''
  }${distanceTime} hours .`;
}

console.log(animalDistanceTime(1000, animal));

// По доброму можна було б зробити метод сетер, але сказано функція значить функція

function setDetailedName(obj, datailedName) {
  obj.name = `${obj.name} ${datailedName}`;
}

setDetailedName(animal, 'Allen');

console.log(animal.name);

// 2. Створіть обєкт який має у собі 2 довжини сторін фігури. Додайте методи які будуть робити наступне - рахувати площу фігури, периметр фігури, зроблять фігуру 3-д, зададуть назву фігури, переведуть значення з сантиметрів у метри.

// p.s хай то буде прямокутник

let figure = {
  sideX: 50,
  sideY: 20,
  area() {
    return (this.sideX * this.sideY) / 2;
  },
  perimeter() {
    return 2 * (this.sideX + this.sideY);
  },
  set addZValue(zValue) {
    this.zValue = zValue;
  },
  set addName(figureName) {
    this.name = figureName;
  },
  setСentimeterToMeter() {
    this.sideX /= 100;
    this.sideY /= 100;
    this.zValue /= 100;
  },
};

console.log(figure.area());

console.log(figure.perimeter());

figure.addZValue = 30;

console.log(figure.zValue);

figure.addName = 'Retangle';

console.log(figure.name);

figure.setСentimeterToMeter();

console.log(figure.sideX);

// 3. Створимо аналог списка покупок (мінімум 5 покупок з всіма заданими пропертями. )

let shopingList = {
  tomato: {
    count: 15,
    price: 50,
    buy: true,
    outOfStore: false,
  },
  pasta: {
    count: 2,
    price: 21,
    buy: false,
    outOfStore: true,
  },
  salad: {
    count: 1,
    price: 50,
    buy: false,
    outOfStore: false,
  },
  chocolate: {
    count: 10,
    price: 60,
    buy: false,
    outOfStore: false,
  },
  sourСream: {
    count: 1,
    price: 30,
    buy: true,
    outOfStore: false,
  },
};

// Допоміжні функції

function showItem(arr) {
  arr.forEach((item) => console.log(item));
}

function isInList(obj, userValue) {
  return Object.keys(obj).some((item) => item === userValue);
}

// Виводимо список покупок - спочатку ті які є в магазині потім яких немає

function showShopingList(obj) {
  let canBuy = [];
  let outOfStore = [];
  for (let item in obj) {
    if (obj[item].outOfStore === true) {
      outOfStore.push(item);
    } else {
      canBuy.push(item);
    }
  }
  showItem(canBuy);
  showItem(outOfStore);
}

showShopingList(shopingList);

// Виводимо список покупок які ми купили.

function showPurchasedGoods(obj) {
  let purchased = [];
  for (let item in obj) {
    if (obj[item].buy === true) {
      purchased.push(item);
    }
  }
  showItem(purchased);
}

showPurchasedGoods(shopingList);

// Додаємо функцію яка дозволить купити продукт.

function buyFood(obj, wontBuyItem) {
  let isInShopList = isInList(obj, wontBuyItem);
  if (isInShopList) {
    for (let item in obj) {
      if (item === wontBuyItem) {
        obj[item].buy = true;
      }
    }
  } else {
    console.log(`Please follow the shop list !`);
  }
}

console.log(shopingList.chocolate.buy, 'choc');

buyFood(shopingList, 'hsdk');

buyFood(shopingList, 'chocolate');

console.log(shopingList.chocolate.buy, 'choc');

// Додаємо функцію яка просумує всі зроблені покупки і виведе результат.(не забуваємо що є значення кількості та ціни за одиницю товару)

function showAmountOfPurchases(obj) {
  let amount = [];
  for (let item in obj) {
    if (obj[item].buy === true) {
      let itemPrice = obj[item].price * obj[item].count;
      amount.push(itemPrice);
    }
  }
  return amount.reduce((acc, item) => acc + item);
}

console.log(showAmountOfPurchases(shopingList));

// Додаємо можливість збільшувати кількість товару.

function increaseProductNumber(obj, needToAdd, number) {
  let needToAddCount = isInList(obj, needToAdd);
  if (needToAddCount) {
    for (let item in obj) {
      if (item === needToAdd) {
        obj[item].count += number;
      }
    }
  } else {
    console.log('Enter correctly the number of the desired product !');
  }
}

console.log(shopingList.tomato.count, 'before Add');

increaseProductNumber(shopingList, 'tomato', 3);

console.log(shopingList.tomato.count, 'after Add');

// Додаємо можливість зменшувати кількість товару(менше 0 бути не може).

function decreaseProductNumber(obj, needToRemove, number) {
  let needToRemoveFromList = isInList(obj, needToRemove);
  if (needToRemoveFromList) {
    for (let item in obj) {
      let canRemove = obj[item].count - number;
      if (item === needToRemove && canRemove >= 0) {
        obj[item].count -= number;
      }
    }
  }
}

console.log(shopingList.tomato.count, 'before remove');

decreaseProductNumber(shopingList, 'tomato', 14);

console.log(shopingList.tomato.count, 'after remove');

// 4. Задана колекція [{name: "Yura", age: 55, hobby: ["films", "games", "hiking"], type: "Admin"}, {}, {},{}]. Вивести всіх адмінів. Вивести середній вік усіх працівників. Вивести тільки унікальні хоббі працівників.

let collection = [
  {
    name: 'Valera',
    age: 22,
    hobby: ['movies', 'books', 'music'],
    type: 'Admin',
  },
  {
    name: 'Oleg',
    age: 18,
    hobby: ['women', 'music', 'vovchitsy'],
    type: 'User',
  },
  {
    name: 'Kolya',
    age: 56,
    hobby: ['drugs', 'women', 'rock and roll'],
    type: 'User',
  },
  {
    name: 'Yura',
    age: 44,
    hobby: ['embroidery', 'gardening', 'rock and roll'],
    type: 'Admmin',
  },
];

// Вивести адмінів

function showAdmin(arr) {
  arr.forEach((item) => {
    if (item.type === 'Admin') {
      console.log(`${item.name} is Admin`);
    }
  });
}

showAdmin(collection);

// Вивести середній вік усіх працівників

function averageAge(arr) {
  let ageSum = arr.reduce((acc, item) => (acc += item.age), 0);
  let average = ageSum / arr.length;
  return `The average age is ${average} years .`;
}

console.log(averageAge(collection));

// Вивести тільки унікальні хоббі працівників.

function uniqueHobby(arr) {
  const uniqueArr = arr
    .map((item) => item.hobby)
    .flat()
    .filter((item, index, arr) => arr.indexOf(item) === index);
  return uniqueArr;
}

showItem(uniqueHobby(collection));
