var p = document.createElement('p');
p.textContent = 'hello World';
p.style.cssText = 'font-size: 2em;';
p.style.cssText += 'color: blue;';
p.textContent += '!!! 1943';
p.setAttribute('id', 'hel');

var el = p.textContent;
document.body.appendChild(p);
var text = "Куки, которые мы разбирали в предыдущем уроке, очень ограничены: в одной куке может быть всего 4096 символов, а количество кук на один домен может быть примерно 30-50 в зависимости от браузера. Поэтому, увы, но много информации там хранить не получится. Так уж сложилось исторически.:";
localStorage.setItem('name','Vudu');
localStorage.setItem('text', text);
var val = localStorage.getItem('text');
alert(val);