/**
 * Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
 */

let arr = [ [14, 45], [1], ['a', 'c', 'd'] ];

let sortArr = arr.sort((a, b) => a.length - b.length);


console.log(sortArr);