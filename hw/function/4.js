/*
Создать функцию угадай число.

Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).

Если число не соответствует условию то верните ошибку return new Error("Please provide number in range 0 - 10").

Если переданно не число то верните ошибку return new Error("Please provide a valid number");



Далле функция генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает строку “You win!”

если нет то строку “You are lose, your number is 8, the random number is 5”.  Числа в строке указаны как пример вы подставляете реальные числа.
*/

function guessTheNumber(num) {
  if(typeof(num) != 'number') {
    return new Error("Please provide a valid number");
  }
  if (num > 10 || num < 0) {
    return new Error("Please provide number in range 0 - 10");
  }
  let x = Math.floor(Math.random() * 10);
  if (x == num) {
    return "You win!";
  } else {
    return `You are lose, your number is ${x}, the random number is ${num}`;
  }
}

console.log(guessTheNumber(5));