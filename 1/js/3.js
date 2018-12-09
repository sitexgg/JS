document.body.setAttribute('style', 'background: red;');

var get_back = prompt('Get back');
get_back;

if(get_back == 1) {
	document.body.setAttribute('style', 'background: white;');
} else {
	window.open('https://google.com');
}
