console.log('index');


const productName = prompt('Введите Наименование товара');

const productCount =+ prompt('Введите количество товара');

let chekin = (`Number.isNaN(${productCount}) `, Number.isNaN(productCount));

if (chekin === false){
  const productCategory = prompt('Введите категорию товара');
  const productPrice =+ prompt('Введите цену товара');
  let chekinTwo = (`Number.isNaN(${productPrice}) `, Number.isNaN(productPrice));

  if (chekinTwo === false){
    console.log('На складі', productCount, 'одиниці товару', productName, 'в категорії', productCategory, 'на загальну сумму', productCount * productPrice, 'гривнів');
  }else if (chekinTwo === true){
    console.log('Вы ввели некорректные данные, Шарик ты огромный балбес');
  }

  else 

    if (chekin === true){
    console.log('Вы ввели некорректные данные, Шарик ты балбес');
};
