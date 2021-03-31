// 1.Write a JavaScript program which computes, the average marks of the following students Then, this average is used to determine the corresponding grade.

// Якщо дуже просто то можна так

let studentsArr = [80, 77, 68, 88, 95];
let studentsAver =
  studentsArr.reduce((acc, item) => acc + item) / studentsArr.length;

function marks(studentAvarage) {
  if (studentAvarage <= 100 && studentAvarage >= 90) {
    return "A";
  } else if (studentAvarage < 90 && studentAvarage >= 80) {
    return "B";
  } else if (studentAvarage < 80 && studentAvarage >= 70) {
    return "C";
  } else if (studentAvarage < 70 && studentAvarage >= 60) {
    return "D";
  } else if (studentAvarage < 60) {
    return "F";
  }
}

document.write(
  `<br> The students are in grade ${marks(studentsAver)} <br><br>`
);

// Але хотілось б попробувати щось що може зустрітись на практиці.
// Завдання таке, ми отримали з сервера дані по студентах, завдання вираховувати кожному студентові оцінку відповідно специфікації та загальний рейтинг класу.
// Формули повинні бути динамічними та опрацьовувати масив оцінок при додаванні нових.

const john = {
  name: "John",
  rating: [80],
};

const bill = {
  name: "Bill",
  rating: [77],
};

const david = {
  name: "David",
  rating: [68],
};

const ryan = {
  name: "Ryan",
  rating: [88],
};

const nick = {
  name: "Nick",
  rating: [95],
};

function studentMarksAverage(student) {
  let studentMarksSum = student.rating.reduce((acc, item) => acc + item);
  return studentMarksSum / student.rating.length;
}

function classMarksAverage(...rest) {
  console.log(rest);
  let studentsAvarage = rest
    .map((item) => studentMarksAverage(item))
    .reduce((acc, item) => acc + item);
  return studentsAvarage / rest.length;
}

function writeMarks(...rest) {
  let students = [...rest];
  students.forEach((item) => {
    let averRat = studentMarksAverage(item);
    console.log(averRat);
    document.write(`${item.name} has ${marks(averRat)} marks <br>`);
  });
  let classAverage = classMarksAverage(...rest);
  document.write(
    `<br> The students are in grade ${marks(classAverage)} <br><br>`
  );
}

writeMarks(john, bill, david, ryan, nick);

// 2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.
let numberSum = 0;

for (let i = 0; i < 1000 + 1; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    numberSum += i;
  }
}

document.write(numberSum);

document.write("<br><br>");

let numArr = [];
for (let i = 0; i < 1000 + 1; i++) {
  numArr.push(i);
}

const sumOfNumArr = numArr.reduce(
  (acc, number) => (number % 3 === 0 || number % 5 === 0 ? acc + number : acc),
  0
);

document.write(sumOfNumArr);

document.write("<br><br>");

// 3. Write a JavaScript program to construct the following pattern, using a nested for loop.

for (let y = 1; y < 6; y++) {
  for (let x = 1; x < 6; x++) {
    if (y >= x) {
      document.write("*");
    }
  }
  document.write("<br>");
}

// or
document.write("<br><br>");

for (i = 1; i < 6; i++) {
  document.write("*".repeat(i) + "<br>");
}
