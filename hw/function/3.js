/*
Создать функцию, которая в качестве аргумента может принять строку, числа, null или undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

getCodeStringFromText("hello") // “104 101 108 108 111”

подсказка: в решении задачи вам помогут методы charCodeAt и trim
*/

function getCodeStringFromText(str) {
  let result = [];
  for(let i = 0; i < str.length; i++) {
    result.push(str[i].charCodeAt());
  }
  return result.join(" ").trim();
}

console.log(getCodeStringFromText("hello"));