// Выбераем параграф, если кликают по нему срабатывает функция UpdateName
// и добавляется класс p_click
var p = document.querySelector('p');
p.addEventListener('click', UpdateName);
	p.className = "p_click";


// Функция выводит диалоговое окно и добовляет текст и значение к переменной $p 
function UpdateName () {
	var name = prompt('Your need new name!');
	p.textContent = 'Your new name:' + ' ' + name;
}