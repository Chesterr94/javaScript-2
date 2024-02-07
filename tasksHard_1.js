
let tax = +prompt('Ведите сумму зароботка');

let income15 = 15000;

let income50 = 50000;

if (tax > income15) {
console.log('Сумма ваших налогов составляет ',tax / 100 * 30);
} else if (tax > income15  && tax <= income50) {
  console.log('Сумма ваших налогов составляет ',tax / 100 * 20);
} else if (tax < income15) {
  console.log('Сумма ваших налогов составляет ',tax / 100 * 15);
};

//первое необязательное обязательное задание




