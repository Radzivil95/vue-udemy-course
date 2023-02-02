/**
 * 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:





filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
 */


let products = [

  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  
  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  
  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  
  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
  
  ];

function filterCollection(arr, lowPrice, highPrice) {
  let result = arr.filter(item => item.price > lowPrice && item.price < highPrice).sort((a,b) => a.price - b.price);

  return result;
}


console.log(filterCollection(products, 15, 30));