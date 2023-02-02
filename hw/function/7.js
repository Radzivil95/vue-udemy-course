/**
 * Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
 * что такое метод reduce можно прочитать https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
 */

const sum = (...params) => {
  // const params = Array.prototype.slice.call(arguments);

  if (!params.length) return 0;

  return params.reduce((prev, next) => prev + next);
}



console.log(sum(1, 2, 3, 4)); // 10
console.log(sum()); // 0