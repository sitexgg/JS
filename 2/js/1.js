var el_animation = document.getElementById('animation');

el_animation.addEventListener('click', go_animation);
 function go_animation () {	
	this.style.backgroundColor = 'red';
	this.style.fontSize = '4em';
	this.style.color = 'white';
	this.style.boxShadow = '1px 3px 10px black';
	this.style.textShadow = '1px 3px 10px black';
	document.body.style.backgroundColor = 'yellow';
	document.body.style.transition = 'background-color 7s';
}

el_animation.addEventListener('contextmenu', go_context);
function go_context () {
	this.style.backgroundColor = 'rgb(22,33,11)';
	this.textContent = 'Very Good!';
}



var el_h1 = document.querySelector('h1'); 
el_h1.className = 'new_bg';