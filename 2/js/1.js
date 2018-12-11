var elem = document.getElementById('animation');
alert(elem);
elem.onclick = function() {
	this.style.backgroundColor = 'red';
	this.style.fontSize = '4em';
	this.style.color = 'white';
}