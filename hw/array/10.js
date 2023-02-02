/**
 Есть массив объектов:
Отсортировать их по возрастающему количеству ядер (cores).
 */

let arr = [

  {cpu: 'intel', info: {cores:2, сache: 3}},
  
  {cpu: 'intel', info: {cores:4, сache: 4}},
  
  {cpu: 'amd', info: {cores:1, сache: 1}},
  
  {cpu: 'intel', info: {cores:3, сache: 2}},
  
  {cpu: 'amd', info: {cores:4, сache: 2}}
  
  ]

let arr2 = arr.sort((a, b) => a.info.cores - b.info.cores);

console.log(arr2);