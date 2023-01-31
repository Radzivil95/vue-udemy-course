/*
На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

будут в верхнем регистре. Использовать for или while.

*/

let str = 'i am in the easycode';
let arr = str.split(' ');
let result = [];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}
console.log(arr.join(" "));


