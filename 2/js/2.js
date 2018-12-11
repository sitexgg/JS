var el_animation = document.getElementById('animation');

// Прослушивание правого клика мыши по объекту
el_animation.addEventListener('contextmenu', go_context);
function go_context () {
	this.style.backgroundColor = 'rgb(22,33,11)';
	this.textContent = 'Very Good!';
}

// Прослушивание при наведение мыши на объект
el_animation.addEventListener('mouseover', go_hover);
function go_hover () {
	this.style.backgroundColor = 'green';
	this.style.fontSize = '4em';
	this.style.color = 'blue';
	this.style.transition = '2s';
}

