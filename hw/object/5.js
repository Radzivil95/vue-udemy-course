/**
Создать объект с розничной ценой и количеством продуктов.
Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
 */


const products = {
  price: 120,
  count: 50,
  getTotalPrice: function() {
    return this.count * this.price;
  }
}


console.log(products.getTotalPrice());