/**
 * Переделать функцию с использованием функции-стрелки
 */

const convertToObject = (num) => {
  const obj = {
      value: num,
      isOdd: Boolean(num % 2)
  }
  return obj;
}

console.log(convertToObject(12));