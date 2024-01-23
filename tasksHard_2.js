let tax0 = + prompt('Ведите сумму зароботка');

if (tax0 <= 15000){
  console.log('Сумма ваших налогов составляет ',tax0 / 100 * 13);
}

else if (tax0 >= 15001  && tax0 <= 50000){
  let tax01 = (15000);
  let tax02 = ((tax0-tax01) / 100 * 13);
  let tax03 = ((tax0-tax02) / 100 * 20);
  console.log('Сумма ваших налогов составляет ',tax02+tax03 );
}

else

  if (tax0 > 50000){
    let tax15 = 15000;
    let tax35 = 35000;
    let tax01 = ((tax0-tax15) / 100 * 13);
    let tax02 = ((tax0-tax35) /100 * 20);
    let tax03 = ((tax0-tax15-tax35) / 100 * 30);

    console.log('Сумма ваших налогов составляет ',tax01+tax02+tax03 );
  }
//второе необязательное обязательное задание