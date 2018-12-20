 // Preloader
var divPreloader = document.createElement('div');
	divPreloader.setAttribute('class', 'preloader');
 // Text loader
var textLoader = document.createElement('p');
	textLoader.textContent = 'WebNet';
	textLoader.style.cssText = 'color: white; text-align: center; font-size: 6em; text-shadow: 0 0 25px blue;';
 // Logo 
var imgLoader = document.createElement('img');
	imgLoader.style.cssText = 'margin: 0 auto; display: block;';
	imgLoader.setAttribute('src', 'mini_logo.png');
 // Loader
var divLoader = document.createElement('div');
	divLoader.setAttribute('class', 'loader');
 // Append elements
document.body.appendChild(divPreloader);
divPreloader.appendChild(textLoader);
textLoader.appendChild(imgLoader);
divPreloader.appendChild(divLoader);
 // Loading
document.body.onload = function() {
 		setTimeout(function() {
 			var preloader = document.getElementsByClassName('preloader')[0];
 			if(!preloader.classList.contains('done')) {
 				preloader.style.cssText = 'opacity: 0; visibility: hidden;';
 			}
 		}, 500);
 	}
 // Delete preloader
setTimeout(dd, 2000);
function dd() {
	document.body.removeChild(divPreloader);
}