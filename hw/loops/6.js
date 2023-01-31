/*
Дан объект:

let list = {

name: ‘denis’,

work: ‘easycode’,

age: 29

}

Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
*/

let list = {

  name: "denis",
  
  work: "easycode",
  
  age: 29
  
}

for (x in list) {
  if (typeof(list[x]) === 'string') {
    list[x] = list[x].toUpperCase();
  }
}

console.log(list);
