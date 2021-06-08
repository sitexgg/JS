var el_animation = document.getElementById('animation');

// Прослушивание клика мыши по объекту
el_animation.addEventListener('click', go_animation);
 function go_animation () {	
	this.style.backgroundColor = 'red';
	this.style.fontSize = '4em';
	this.style.color = 'white';
	this.style.boxShadow = '1px 3px 10px black';
	this.style.textShadow = '1px 3px 10px black';

	// Изменение цвета фона с замедлением
	document.body.style.backgroundColor = 'yellow';
	document.body.style.transition = 'background-color 3s';
}
