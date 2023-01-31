/*
На основе строки “JavaScript is a pretty good language” сделать новую строку,

где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
*/
let str = "JavaScript is a pretty good language";

let arr = str.split(' ');
let result = [];
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
}

console.log(arr.join(''));