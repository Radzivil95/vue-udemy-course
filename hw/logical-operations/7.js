/*
Дан следующий код:

Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
*/

let product = {
  name: "Яблоко",
  price: "10$",
};

let min = 10; // минимальная цена

let max = 20; // максимальная цена

if (parseInt(product.price) >= min & parseInt(product.price) <= max) {
  console.log(product.name);
} else {
  console.log("Product not found");
}