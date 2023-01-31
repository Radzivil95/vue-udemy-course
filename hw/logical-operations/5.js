// Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.

// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car);