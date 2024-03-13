document.getElementById("id_name");
// to access any id on passing wrong name gives null

document.getElementByClassName("id_name")
// returns the element as an html collection or empty collection(if nto found)

document.getElementByTagName("id_name");

Query Selector
1 document.querySelector('p');
//1 document.querySelector("p");
// Query Selector
//2 document.querySelector('#myId');
// Query Selector only selects the first coming tags/id/ class
//3 document.querySelector('.myClass');

console.dir(document.querySelectorAll("div a"));
// All is used to select all the ancor tags present in div

innerText - 
// shows the visible text on screen contained in a node

innerContent - 
// shows all the full text even the ones which are hidden

innerHTMl - 
// shows the full markup that is all the tags


manipulation element content-
// let para = document.querySelector('p')
// undefined
para.innerText = "abc";
// 'abc'
// let heading = document.querySelector('h1');
// undefined
// heading
// <h1>​Spider Man​</h1>​
heading.innerHTML = `<u>${heading.innerText}</u>`;
// '<u>Spider Man</u>'

manipulating attributes
// let img = document.getAttributes('img');
img.getAttribute('id');
img.setAttribute('id', 'spidermanImg')

manipulating style - 
// it only works on inline styling not like an external css
object.style.color = 'red';

manipulating style using classList
obj.classList

classList.add() - 
// to add new class
classList.remove() - 
// to remove class
classLlist.contains() -
//  to check class exist or Not
classList.toglel() -
//  to togle between add and remove
// ex-
//   let heading = document.querySelector('h1');
// undefined
heading.classList.add('green');
// undefined
heading.classList.remove('green');
// undefined
heading.classList.contains('green');
// false
heading.classList.toggle('green');
// true
// heading.classList
// DOMTokenList ['green', value: 'green']

Navigation
//ex -
//let h4 = document.querySelector('h4');
// undefined
h4.parentElement
// <div class=​"box">​…​</div>​
h4.childElementCount
// 0
h4.children
// HTMLCollection []
h4.nextElementSibling
// #text
h4.previousElementSibling
// #text
// let ul = document.querySelector('ul');
// undefined
// ul
// <ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​
// ul[0]
// undefined
ul.children
// HTMLCollection(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: HTMLCollection
ul.children[0]
// <li>​…​</li>​
ul.children[1].nextElementSibling
// <li>​::marker​" Created by "<ul>​<li>​…​</li>​<li>​…​</li>​</ul>​</li>​
ul.children[1].previousElementSibling
// <li>​…​</li>​
img.previousElementSibling.style.color = "red"


Adding elements - document.createElement('p')

.appendchild(element) - 
to insert newly created element to the parent as the child at the end
// ex -
// let newP = document.createElement('p');
// undefined
// console.dir(newP)
// VM3106:1 p
// undefined
// let body = document.querySelector('body')
// undefined
// newP.innerText = "Hi,  I am a new p"
// 'Hi,  I am a new p'
body.appendChild(newP)
// <p>​Hi, I am a new p​</p>​
// ex - 2
// let btn = document.createElement('button');
// undefined
// console.dir(btn)
// VM3865:1 button
// undefined
// btn.innerText = "Click Me"
// 'Click Me'
// let box = document.querySelector('.box')
// undefined
box.appendChild(btn);
// <button>​Click Me​</button>​

.append(element) - 
// is used to add text, button, tags , element on the created variable at the end
btn.append("fast")

.prepend(element) - 
// is used to add the data in the beginning

.insertAdjacentElement(where, element)
//  it add the text, button etc at the desired location
// ex -
//let btn = document.createElement('button');
// undefined
// let p = document.querySelector('p');
// undefined
p.insertAdjacentElement('beforebegin', btn)
p.insertAdjacentElement('beforeend', btn)
p.insertAdjacentElement('Afterbegin', btn)
p.insertAdjacentElement('Afterend', btn)
// <button>​</button>​

btn.removechild(); - 
// it removes the child of the parent 
btn.remove(); -
// it removes anything
ex- body.remove(); - 
// it remove complete body
