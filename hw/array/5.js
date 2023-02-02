/**
 * На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
 * каждый элемент которого будет хранить информацию о числе и его четности:
 * [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
 */

let arr = [1,2,3,5,8,9,10];

const arr2 = arr.map(isOdd);

function isOdd(item) {
  if (item % 2 == 0) {
    return {digit: item, odd: true};
  } else {
    return {digit: item, odd: false};
  }
}
console.log(arr2);