/**
 *  Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь.
 *  Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы.
 *  Для этого “позаимствуйте” метод из предыдущего объекта.
 */


const products = {
  price: 120,
  count: 50,
  getTotalPrice: function(count, price) {
    return count * price;
  }
}

const details = {
  price: 5,
  counts: 100,
}

console.log(products.getTotalPrice(details.counts, details.price));