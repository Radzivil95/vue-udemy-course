// Чему равно а, почему?



// let a = 0 || 'string'; string т.к. значение стринг будет больше 0
console.log(0 || 'string');
// let a = 1 && 'string'; 1 т.к. && возвращает последний true
console.log(1 && 'string'); 
// let a = null || 25; 25 т.к. или || возвращает true
console.log(null || 25); 
// let a = null && 25; null && возвращает первый false
console.log(null && 25); 
// let a = null || 0 || 35; т.к. или || возвращает true
console.log(null || 0 || 35); 
// let a = null && 0 && 35; null && запинается на false
console.log(null && 0 && 35); 