/*
Создать объект, у которого будет цена товара и его скидка, а также

два метода: для получения цены и для расчета цены с учетом скидки:
*/

const price = {
  price: 10,
  discount: '15%',
  getPrice: function() {
    return this.price;
  },
  getPriceWithDiscount: function() {
    return (this.price / 100) * (100 - parseInt(this.discount));
  }
  
   };
  
console.log(price.getPrice()); // 10
  
console.log(price.getPriceWithDiscount()); // 8.5