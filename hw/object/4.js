/*
Создать объект “вычислитель”, у которого есть числовое свойство

“значение” и методы “удвоить”, “прибавить один”, “отнять один”.

Методы можно вызывать через точку, образуя цепочку методов:

*/

const numerator = {

  value: 1,
  
  double: function () {
    this.value = this.value * 2;
    return this;
  },
  
  plusOne: function () {
    this.value = this.value + 1;
    return this;
  },
  
  minusOne: function () {
    this.value = this.value - 1;
    return this;
  },
  
}
  
numerator.double().plusOne().plusOne().minusOne();
  
console.log(numerator.value) // 3