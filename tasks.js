const rain = Math.round(Math.random() * 1);

if (rain >= 1){
  console.log('Пошёл дождь. Возьмите зонт!');
}

if (rain <= 0){
  console.log('Дождя нет!');
}

// Конец второго задания

let exam1 = + prompt('Введите сумму балов за первый экзамен');
let exam2 = + prompt('Введите сумму балов за второй экзамен');
let exam3 = + prompt('Введите сумму балов за третий экзамен');

if (exam1 + exam2 + exam3 <= 264){
  console.log('Ебать ты лох, иди учись еще год, и приходи еще раз неуч!');
}

if (exam1 + exam2 + exam3 >= 265){
  console.log('Крассавчик, добро пожаловть ботан ты поступил!');
}

// Конец третего задания

let atm = + prompt('Банкомат выдает минимальные купюры 100р');
let atm1 =(atm / 100);
let atm2 = (Number.isInteger(atm1));

if (atm2 === false){
  console.log('БАНКОМАТ НЕ МОЖЕ ВИДАТИ ГРОШЕНЯТКА');
}

if (atm2 === true){
  console.log('ЗАБИРАЙ СВОЄ ЗОЛОТО!');
}
