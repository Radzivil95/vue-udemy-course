// Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение

// Пример вызова:

// multiply(1,2,3) => результат 6 (1*2*3);



// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

function multiply() {
  if(arguments.length == 0) {
    return 0;
  }
  let result = 1;
  for(let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];

  }
  return result;
}

console.log(multiply(2, 4, 5, 6));
console.log(multiply());