let tax0 = +prompt('Ведите сумму зароботка');

let profit15 = 15000;

let profit35 = 35000;

let profit50 = 50000;

if (tax0 <= profit15){
  console.log('Сумма ваших налогов составляет ',tax0 / 100 * 13);
} else if (tax0 >= profit15  && tax0 <= profit50) {
  let tax02 = (tax0-profit15) / 100 * 13;
  let tax03 = (tax0-tax02) / 100 * 20;
  console.log('Сумма ваших налогов составляет ',tax02+tax03 );
} else  if (tax0 > profit50) {
  let tax01 = (tax0-profit15) / 100 * 13;
  let tax02 = (tax0-profit35) /100 * 20;
  let tax03 = (tax0-profit15-profit35) / 100 * 30;
  console.log('Сумма ваших налогов составляет ',tax01+tax02+tax03 );
};
//второе необязательное обязательное задание 