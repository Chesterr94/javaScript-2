let tax0 = +prompt('Ведите сумму зароботка');

let income35 = 35000;

if (tax0 <= income15){
  console.log('Сумма ваших налогов составляет ',tax0 / 100 * 13);
} else if (tax0 >= income15  && tax0 <= income50){
  let tax02 = (tax0-income15) / 100 * 13;
  let tax03 = (tax0-tax02) / 100 * 20;
  console.log('Сумма ваших налогов составляет ',tax02+tax03 );
} else  if (tax0 > income50){
  let tax01 = (tax0-income15) / 100 * 13;
  let tax02 = (tax0-income35) /100 * 20;
  let tax03 = (tax0-income15-income35) / 100 * 30;
  console.log('Сумма ваших налогов составляет ',tax01+tax02+tax03 );
};
//второе необязательное обязательное задание