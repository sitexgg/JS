var mouse = document.body.querySelector('p');

// Скрывает абзац при наведении мыши
mouse.addEventListener('mousemove', mA);
function mA () {
	this.style.display = 'none';
}
