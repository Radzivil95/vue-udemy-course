/*
  Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
 */

let str = 'tseb eht ma i';
let result = '';

for(let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);