
function createP() { 
  var p = document.createElement('p'); // Помещает в $p тег 'p'
  p.textContent = 'You clicked the button!'; // Добавляет в $p контент
  document.body.appendChild(p); // Добавляет $p в body
}

/*
  1. Получаем ссылки на все кнопки на странице и отсортировываем их в массиве.
  2. Перебераем все кнопки и добавляем к ним отслеживатель события нажатия.

  При нажатии любой кнопки, будет выполняться функция createP().
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createP);
}