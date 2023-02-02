/*
Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
*/

let arr = [12, 4, 50, 1, 0, 18, 40];

const isZero = arr.some(item => item == 0);

console.log(isZero);