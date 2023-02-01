/*
Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.

changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]

Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);
*/

function changeCollection() {
  let result = [];
  for(let i = 0; i < arguments.length; i++) {
    if(Array.isArray(arguments[i])) {
      arguments[i].shift();
      result.push(arguments[i]);
    }
  }
  return result;
}

console.log(changeCollection([1,2,3]))
console.log(changeCollection([1,2,3], ["a", "b", "c"]));