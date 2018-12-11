var el_animation = document.getElementById('animation');

el_animation.onclick = function() {
	this.style.backgroundColor = 'red';
	this.style.fontSize = '4em';
	this.style.color = 'white';
	this.style.boxShadow = '1px 3px 10px black';
	this.style.textShadow = '1px 3px 10px black';
}

var el_h1 = document.querySelector('h1'); 
el_h1.className = 'new_bg';