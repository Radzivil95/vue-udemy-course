// Получить число из строки ‘100$’

console.log(('100$').replace(/[^+\d]/g, ''));
console.log(parseInt('100$'));