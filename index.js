const grades = [];
const randomNumber = Math.floor(Math.random() * 101);
grades.push(
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101)
);
console.log(grades);

console.log(`Массив с оценками 12-ти студентов ${grades}`);
console.log(`Длина массива ${grades.length}`);

const sumGrades = grades.reduce((a, b) => {
  return a + b;
});
console.log(`Сумма всех оценок ${sumGrades}`);

const averageGrades = Math.ceil(sumGrades / grades.length);
console.log(`Средний балл ${averageGrades}`);

const sortGrades = grades.sort((a, b) => {
  return a - b;
});
console.log(sortGrades);

const minGrades = grades[0];
console.log(`Минимальный балл среди студентов ${minGrades}`);
const maxGrades = grades[11];
console.log(`Максимальный балл среди студентов ${maxGrades}`);

const filterGradesOne = grades.filter((num) => {
  return num > 60;
});
console.log(filterGradesOne);
console.log(
  `Количество студентов получивших положительную оценку ${filterGradesOne.length}`
);

const filterGradesTwo = grades.filter((num) => {
  return num < 60;
});
console.log(filterGradesTwo);
console.log(
  `Количество студентов получивших отрицательную оценку ${filterGradesTwo.length}`
);

const gradesLetter = grades.map((element) => {
  if ((element <= 100, element >= 80)) {
    return "A";
  } else if ((element <= 79, element >= 60)) {
    return "B";
  } else if ((element <= 59, element >= 40)) {
    return "C";
  } else if ((element <= 39, element >= 20)) {
    return "D";
  } else {
    return "E";
  }
});

console.log(`${grades} Массив с оценками 12-ти студентов`);
console.log(
  `${gradesLetter} Преобразование числовых оценок в формат буквенных`
);
