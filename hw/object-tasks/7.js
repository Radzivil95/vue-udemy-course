/**
 * Даны объект и функция:
 * Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes
 */

let sizes = {width: 5, height: 10},

getSquare = function () {
  return this.width * this.height
};


console.log(getSquare.call(sizes));