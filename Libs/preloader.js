 // ### Preloader webnet ###
var	divPreloader = document.createElement('div');
	divPreloader.setAttribute('class', 'preloader');
 // Text loader
var	textLoader = document.createElement('p');
	textLoader.textContent = 'WebNet';
	textLoader.style.cssText += 'color: white; text-align: center;'
	textLoader.style.cssText += 'font-size: 5em; text-shadow: 0 0 25px red;';
 // Loader
var	divLoader = document.createElement('div');
	divLoader.setAttribute('class', 'loader');
 // Animation
var	headStyle = document.createElement('style');
var	cssPreloader = '.preloader {position: fixed; top: 0; left 0; width: 100%; height: 100%; background-color: black; z-index: 2; transition: 1s all; opacity: 1; visibility: visible;}';
var	cssPreloader0 = '.loader {width: 100px; height: 100px; border: 8px solid white; border-radius: 50%; border-top-color: blue; border-bottom-color: green; border-left-color: red; border-right-color:yellow; box-shadow: -30px 10px 200px blue; position: absolute; left: 50%; top: 50%; transform: transtate(-50%, -50%); animation: 300ms spin infinite linear;}';
var	cssPreloader1 = '@keyframes spin {from{transform: translate(-50%, -50%) rotate(0deg)} to{transform: translate(-50%, -50%) rotate(360deg)}}';

	headStyle.textContent = cssPreloader + cssPreloader0 + cssPreloader1;
// Append elements
	document.body.appendChild(divPreloader);
	divPreloader.appendChild(textLoader);
	divPreloader.appendChild(divLoader);
	document.head.appendChild(headStyle);
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
	document.head.removeChild(headStyle);
}
