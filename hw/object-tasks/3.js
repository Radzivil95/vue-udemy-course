/*
Создать объект, у которого будет поле высота и метод “увеличить

высоту на один”. Метод должен возвращать новую высоту:

*/


const obj = {
  height: 0,
  increaseHeight: function() {
    return this.height + 1;
  },
};

obj.height = 10;

obj.height = obj.increaseHeight();

console.log(obj.height); // 11;