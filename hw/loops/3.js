/*
Факториал числа - произведение всех натуральных чисел от 1 до n

включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
*/

let num = 10;
let result = 1;
for(let i = 1; i <= num; i++) {
  result = result * i;
}
console.log(result);