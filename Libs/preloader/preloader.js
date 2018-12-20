 // Preloader
var divPreloader = document.createElement('div');
	divPreloader.setAttribute('class', 'preloader');
 // Loader
var divLoader = document.createElement('div');
	divLoader.setAttribute('class', 'loader');
 // Append elements
document.body.appendChild(divPreloader);
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