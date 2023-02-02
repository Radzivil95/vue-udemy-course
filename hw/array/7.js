/*
Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
*/

let arr = ['yes', 'hello', 'no', 'easycode', 'what'];

const isLong = arr.every(item => item.lengtn > 3);

console.log(isLong);