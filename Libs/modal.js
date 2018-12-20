
 // Получение кнопки 
var Modal0 = document.getElementsByClassName('modal')[0];
 // Отобразить модальное окно
Modal0.addEventListener('click', showModal);
function showModal() {
	 // Контейнер
	var modalDiv = document.createElement('div');
		modalDiv.setAttribute('class', 'EventModal');
	 // Модальное окно
	var divContent = document.createElement('div');
		divContent.setAttribute('class', 'modal-content');
		divContent.style.cssText = 'background-color: rgb(254, 254, 254); margin: 8px auto; padding: 2em; border: 1px solid rgb(136, 136, 136); width: 80%; height: auto;';
	  // Кнопка закрытия 
	var closeSpan = document.createElement('span');
		closeSpan.setAttribute('class', 'close');
		closeSpan.textContent = 'X';
		closeSpan.style.cssText = 'overflow: auto; margin: 0; user-select: none; cursor: default; font-family: sans-serif; color: rgb(136, 136, 136); float: right; font-size: 2em; font-weight: bold;';
	 // Текст окна
	var modalP = document.createElement('p');
		modalP.setAttribute('class', 'modal-text');
		modalP.textContent = 'Message out browser';
	 // Добавить элементы в документ
	document.body.appendChild(modalDiv);
	modalDiv.appendChild(divContent);
	divContent.appendChild(closeSpan);
	divContent.appendChild(modalP);

	modalDiv.style.cssText = 'display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; owerflow: auto; background-color: rgba(0, 0, 0, 0.5);';

	 // Закрыть по кнопке
	closeSpan.addEventListener('click', cSpan);
	function cSpan() {
		document.body.removeChild(modalDiv);
	}
	 // Закрыть по клику
	window.onclick = function(event) {
		if(event.target == modalDiv) {
			document.body.removeChild(modalDiv);
		}
}


}
