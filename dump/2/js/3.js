var mouse = document.body.querySelector('p');

// Скрывает абзац при наведении мыши
mouse.addEventListener('mousemove', mA);
function mA () {
	this.style.display = 'none';
}

var $but = document.body.querySelector('button');

$but.addEventListener('click', newEl);
function newEl () {
	var $hr = document.createElement('hr');
	var $link = document.createElement('pre');
		$link.textContent = 'raz\n =\n dva\n';
			$link.setAttribute('style', 'text-align: center; margin: 2em; font-family: sans-serif;');
			document.body.appendChild($link);
			document.body.appendChild($hr);
		mouse.removeEventListener('mousemove', mA);		
}
