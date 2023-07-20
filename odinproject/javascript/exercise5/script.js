const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "this is the glorious text-content"
container.append(content);

//red paragraph with text
const p = document.createElement('p');
p.style.cssText = 'color: red;';
p.classList.add('pp');
p.textContent = "Hey, I'm red!";
container.append(p);

//blue header, size 3
const header3 = document.createElement('h3');
header3.style.cssText = 'color:blue;';
header3.textContent = "I'm a blue h3!"
container.append(header3);

//div container with black border and pink background color
const div = document.createElement('div');
div.style.cssText = 'border-style: solid; border-color:black; background-color: pink;';
div.classList.add('divcontainer');
div.textContent = "hola"
container.append(div);

//div child
const child = document.createElement('div');
child.classList.add('child');
child.textContent = "I'm a div";
div.append(child);

//p child
const pchild = document.createElement('p');
pchild.classList.add('pchild');
pchild.textContent = "ME TOO!";
div.append(pchild);


//events and how to call functions
//method 2 
const btn = document.querySelector('#btn');
btn.onclick = () => alert("hello world");

//method 3
const btn2 =document.querySelector('#btn2');
/*btn2.addEventListener('click', () => {
    alert("hello, world!");
});*/

btn2.addEventListener('click', function(e){
    e.target.style.background = 'blue';
});