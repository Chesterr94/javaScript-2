console.log('index');
/*
let productName = 'Гарбузики';
let productCount = 3;
let productCategory = 'Овочі';
let productPrice = 20;

console.log(productName);
console.log(productCount);
console.log(productCategory);
console.log(productPrice);

console.log(productName,'Це',productCategory);
console.warn(productCount*productPrice); 
*/
/*
const productName = prompt('Введите Наименование товара');
const productCount = + prompt('Введите количество товара');
const productCategory = prompt('Введите категорию товара');
const productPrice = + prompt('Введите цену товара');


console.log(productCount);
console.log(typeof productCount);
console.log(productPrice);
console.log(typeof productPrice);

console.log('На складі',productCount,'одиниці товару',productName,'в категорії',productCategory,'на загальну сумму',productCount*productPrice,'гривнів')
*/

const productName = prompt('Введите Наименование товара');
const productCount = prompt('Введите количество товара');

if (productCount <= Number){
//  console.log('Вы ввели некорректные данные');

  const productCategory = prompt('Введите категорию товара');
  const productPrice = prompt('Введите цену товара');



  if (productPrice<= Number){
    console.log(productCount);
    console.log(typeof productCount);
    console.log(productPrice);
    console.log(typeof productPrice);
    console.log('На складі',productCount,'одиниці товару',productName,'в категорії',productCategory,'на загальну сумму',productCount*productPrice,'гривнів')
  }

  if (productPrice>= Number){
    console.log('Вы ввели некорректные данные');
  }
}

if (productCount >= Number){
  console.log('Вы ввели некорректные данные');
}



//if (productPrice >= Number){
//  console.log('Вы ввели некорректные данные');
//}




