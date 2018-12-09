// Задает body новый стиль фона
document.body.setAttribute('style', 'background: red;');

// Создает prompt помещая в $get_back и выводит его...
var get_back = prompt('Get back');
get_back;

// Если $get_back равен 1, то цвет фона меняется
if(get_back == 1) {
	document.body.setAttribute('style', 'background: white;');
}

// Создаем ссылку
// Помещаем в нее текст
// Добавляем ее на страницу
var link = document.createElement('a');
link.textContent = 'Google';
document.body.appendChild(link);

// После клика по $link запускаем функцию go
// Открывает новую вкладку
link.addEventListener('click', go);
function go() {
	window.open('https://google.com');
}

