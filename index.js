console.log('index');

const productName = prompt('Введите Наименование товара');

const productCount = +prompt('Введите количество товара');

if (!productCount) {
  console.log('Вы ввели некорректные данные, Шарик ты балбес');
} else {
  const productCategory = prompt('Введите категорию товара');

  const productPrice = +prompt('Введите цену товара');

  if (!productPrice) {
    console.log('Вы ввели некорректные данные, Шарик ты огромный балбес');
  } else {
    console.log('На складі', productCount, 'одиниці товару', productName, 'в категорії', productCategory, 'на загальну сумму', productCount * productPrice, 'гривнів');
  };
};



