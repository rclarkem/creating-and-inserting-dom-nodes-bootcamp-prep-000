//this file is optional
//you can use this to paste in js code and have it run when index.html is loaded
let element = document.createElement('div');
document.body.appendChild(element);

element.innerHTML = "Hey Dude!"
element.style.textAlign = 'center';
element.style.color = 'blue';

let ul = document.createElement('ul')

for(let i = 0; i < 3; i++) {
let li = document.createElement('li')
li.innerHTML = (i + 1).toString()
ul.appendChild(li)
}
element.appendChild(ul);

ul.style.textAlign = 'left';

ul.removeChild(ul.querySelector('li:nth-child(2)'));
